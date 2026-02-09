export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

/* ----------------------------------
   GLOBAL IN-MEMORY STORE
---------------------------------- */

const subscribers =
  global.newsletterSubscribers ||
  (global.newsletterSubscribers = new Map()); // email -> timestamp

/* ----------------------------------
   CONSTANTS
---------------------------------- */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBSCRIBER_TTL = 24 * 60 * 60 * 1000; // 24 hours

/* ----------------------------------
   HELPERS
---------------------------------- */

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function escapeHtml(input) {
  return String(input || "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]
  );
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
   MAIL TRANSPORTER (REUSED)
---------------------------------- */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // app password
  },
});

/* ----------------------------------
   API HANDLER
---------------------------------- */

export async function POST(req) {
  try {
    /* ------------------------------
       Parse request
    ------------------------------ */

    const { email, recaptchaToken } = await req.json();

    /* ------------------------------
       reCAPTCHA verification
    ------------------------------ */

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification required" },
        { status: 400 }
      );
    }

    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (
      !recaptchaData.success ||
      recaptchaData.score < 0.5 ||
      recaptchaData.action !== "newsletter" // ✅ FIXED
    ) {
      return NextResponse.json(
        { success: false, message: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    /* ------------------------------
       Validation
    ------------------------------ */

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Invalid request" },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(email);

    if (!EMAIL_REGEX.test(normalizedEmail) || normalizedEmail.length > 255) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    /* ------------------------------
       Cleanup old subscribers
    ------------------------------ */

    cleanupSubscribers();

    /* ------------------------------
       Duplicate check
    ------------------------------ */

    if (subscribers.has(normalizedEmail)) {
      return NextResponse.json(
        { success: true, message: "You are already registered 😊" },
        { status: 200 }
      );
    }

    /* ------------------------------
       Store subscriber
    ------------------------------ */

    subscribers.set(normalizedEmail, Date.now());

    /* ------------------------------
       Send email notification
    ------------------------------ */

    await transporter.sendMail({
      from: `"Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Subscriber 🎉</h2>
        <p><strong>Email:</strong> ${escapeHtml(normalizedEmail)}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Subscription received successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to process request",
      },
      { status: 500 }
    );
  }
}
