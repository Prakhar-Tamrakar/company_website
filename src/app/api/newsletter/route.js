export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import xss from "xss";
import { verifyRecaptcha } from "../../../utility/recaptcha";
import { rateLimit } from "../../../utility/rateLimit";

/* ----------------------------------
   GLOBAL STORE (TEMP)
---------------------------------- */

const subscribers =
  global.newsletterSubscribers ||
  (global.newsletterSubscribers = new Map());

/* ----------------------------------
   CONSTANTS
---------------------------------- */

const SUBSCRIBER_TTL = 24 * 60 * 60 * 1000;

/* ----------------------------------
   VALIDATION
---------------------------------- */

const schema = z.object({
  email: z.string().email().max(255),
});

/* ----------------------------------
   HELPERS
---------------------------------- */

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function cleanupSubscribers() {
  const now = Date.now();
  for (const [email, time] of subscribers.entries()) {
    if (now - time > SUBSCRIBER_TTL) {
      subscribers.delete(email);
    }
  }
}

/* ----------------------------------
   MAIL TRANSPORTER
---------------------------------- */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ----------------------------------
   API HANDLER
---------------------------------- */

export async function POST(req) {
  try {
    /* 🔒 Rate limit */
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      );
    }

    /* 📥 Parse body */
    const { email, recaptchaToken } = await req.json();

    /* 🤖 Verify reCAPTCHA */
    const recaptcha = await verifyRecaptcha(recaptchaToken, "newsletter");

    if (!recaptcha.success) {
      console.log("reCAPTCHA failed:", recaptcha.data);

      return NextResponse.json(
        { success: false, message: "Verification failed" },
        { status: 403 }
      );
    }

    /* ✅ Validate input */
    const parsed = schema.safeParse({ email });

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(parsed.data.email);

    /* 🧼 Sanitize */
    const safeEmail = xss(normalizedEmail);

    /* 🧹 Cleanup old entries */
    cleanupSubscribers();

    /* 🔁 Duplicate check */
    if (subscribers.has(normalizedEmail)) {
      return NextResponse.json(
        { success: true, message: "You are already registered 😊" },
        { status: 200 }
      );
    }

    /* 💾 Store */
    subscribers.set(normalizedEmail, Date.now());

    /* 📧 Send email */
    await transporter.sendMail({
      from: `"Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Subscriber 🎉</h2>
        <p><strong>Email:</strong> ${safeEmail}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Subscription received successfully",
    });

  } catch (error) {
    console.error("Newsletter error:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}