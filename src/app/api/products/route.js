export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import xss from "xss";
import { verifyRecaptcha } from "../../../utility/recaptcha";
import { rateLimit } from "../../../utility/rateLimit";

/* ----------------------------------
   CONFIG
---------------------------------- */

const ENQUIRY_TTL = 30 * 60 * 1000;

/* ----------------------------------
   GLOBAL STORE
---------------------------------- */

const enquiryStore =
  global.enquiryStore || (global.enquiryStore = new Map());

/* ----------------------------------
   VALIDATION
---------------------------------- */

const schema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(255),
  address: z.string().max(300).optional(),
  message: z.string().min(1).max(2000),
  product: z.string().max(150).optional(),
});

/* ----------------------------------
   HELPERS
---------------------------------- */

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function cleanupEnquiries() {
  const now = Date.now();
  for (const [key, time] of enquiryStore.entries()) {
    if (now - time > ENQUIRY_TTL) {
      enquiryStore.delete(key);
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

    /* 📥 Content-Type check */
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid content type" },
        { status: 400 }
      );
    }

    /* 📥 Parse body */
    const {
      firstName,
      lastName,
      email,
      address,
      message,
      product,
      recaptchaToken,
    } = await req.json();

    /* 🤖 Verify reCAPTCHA */
    const recaptcha = await verifyRecaptcha(
      recaptchaToken,
      "product_enquiry"
    );

    if (!recaptcha.success) {
      console.log("reCAPTCHA failed:", recaptcha.data);

      return NextResponse.json(
        { success: false, message: "Verification failed" },
        { status: 403 }
      );
    }

    /* ✅ Validate input */
    const parsed = schema.safeParse({
      firstName,
      lastName,
      email,
      address,
      message,
      product,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    /* 🧼 Normalize + sanitize */
    const normalizedEmail = normalizeEmail(data.email);

    const clean = {};
    for (const key in data) {
      clean[key] = xss(data[key] || "");
    }

    /* 🔁 Duplicate prevention */
    cleanupEnquiries();

    const fingerprint = `${normalizedEmail}:${data.product || "general"}`;

    if (enquiryStore.has(fingerprint)) {
      return NextResponse.json(
        {
          success: true,
          message: "We have already received your enquiry 😊",
        },
        { status: 200 }
      );
    }

    enquiryStore.set(fingerprint, Date.now());

    /* 📧 Send email */
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      replyTo: normalizedEmail,
      subject: "New Product Enquiry",
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Name:</strong> ${clean.firstName} ${clean.lastName}</p>
        <p><strong>Email:</strong> ${clean.email}</p>
        <p><strong>Product:</strong> ${clean.product || "N/A"}</p>
        <p><strong>Address:</strong> ${clean.address || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${clean.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully",
    });

  } catch (error) {
    console.error("Product enquiry API error:", error);

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}