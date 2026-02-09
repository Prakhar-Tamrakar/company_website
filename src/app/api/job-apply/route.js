export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

/* ---------------- CONFIG ---------------- */

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------------- HELPERS ---------------- */

function sanitize(input) {
  return String(input || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

/* ---------------- EMAIL SETUP ---------------- */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password
  },
});

/* ---------------- API HANDLER ---------------- */

export async function POST(req) {
  try {
    const formData = await req.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const resume = formData.get("resume");
    const recaptchaToken = formData.get("recaptchaToken");

    /* ---------------- reCAPTCHA ---------------- */

    if (!recaptchaToken) {
      return NextResponse.json(
        { message: "reCAPTCHA verification required" },
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
      recaptchaData.action !== "job_apply"
    ) {
      return NextResponse.json(
        { message: "Verification failed" },
        { status: 403 }
      );
    }

    /* ---------------- BASIC VALIDATION ---------------- */

    if (!fullName || !email || !resume) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    if (
      fullName.length > 100 ||
      email.length > 255 ||
      phone.length > 30 ||
      position.length > 255
    ) {
      return NextResponse.json(
        { message: "Input too long" },
        { status: 400 }
      );
    }

    /* ---------------- FILE VALIDATION ---------------- */

    if (!(resume instanceof File)) {
      return NextResponse.json(
        { message: "Invalid resume file" },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { message: "Only PDF, DOC, or DOCX files are allowed" },
        { status: 400 }
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { message: "Resume must be under 5MB" },
        { status: 400 }
      );
    }

    /* ---------------- EMAIL ---------------- */

    const buffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: `"Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      replyTo: email,
      subject: "New Job Application",
      html: `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${sanitize(fullName)}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Position:</strong> ${sanitize(position) || "N/A"}</p>
        <p><strong>Phone:</strong> ${sanitize(phone) || "N/A"}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (err) {
    console.error("Job apply error:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
