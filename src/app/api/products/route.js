export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

/* ----------------------------------
   CONFIG
---------------------------------- */

const ENQUIRY_TTL = 30 * 60 * 1000; // 30 minutes

/* ----------------------------------
   GLOBAL IN-MEMORY STORE
---------------------------------- */

const enquiryStore =
  global.enquiryStore || (global.enquiryStore = new Map());

/* ----------------------------------
   HELPERS
---------------------------------- */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function escapeHtml(input) {
  return String(input || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
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
    pass: process.env.EMAIL_PASS, // Gmail app password
  },
});

/* ----------------------------------
   API HANDLER
---------------------------------- */

export async function POST(req) {
  try {
    /* ------------------------------
       Content-Type check
    ------------------------------ */

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid content type" },
        { status: 400 }
      );
    }

    /* ------------------------------
       Parse body
    ------------------------------ */

    const {
      firstName,
      lastName,
      email,
      address,
      message,
      product,
      recaptchaToken,
    } = await req.json();

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
      recaptchaData.action !== "product_enquiry"
    ) {
      return NextResponse.json(
        { success: false, message: "Verification failed. Please try again." },
        { status: 403 }
      );
    }

    /* ------------------------------
       Validation
    ------------------------------ */

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(email);

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    if (
      firstName.length > 100 ||
      lastName.length > 100 ||
      message.length > 2000 ||
      (address && address.length > 300) ||
      (product && product.length > 150)
    ) {
      return NextResponse.json(
        { success: false, message: "Input too long" },
        { status: 400 }
      );
    }

    /* ------------------------------
       Duplicate enquiry prevention
    ------------------------------ */

    cleanupEnquiries();

    const fingerprint = `${normalizedEmail}:${product || "general"}`;

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

    /* ------------------------------
       Escape output
    ------------------------------ */

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(normalizedEmail);
    const safeMessage = escapeHtml(message);
    const safeProduct = product ? escapeHtml(product) : "N/A";
    const safeAddress = address ? escapeHtml(address) : "N/A";

    /* ------------------------------
       Send email
    ------------------------------ */

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      replyTo: normalizedEmail,
      subject: "New Product Enquiry",
      html: `
        <h2>New Product Enquiry</h2>
        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Product:</strong> ${safeProduct}</p>
        <p><strong>Address:</strong> ${safeAddress}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
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
