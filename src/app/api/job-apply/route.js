export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import xss from "xss";
import { verifyRecaptcha } from "../../../utility/recaptcha";
import { rateLimit } from "../../../utility/rateLimit";

/* ---------------- CONFIG ---------------- */

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/* ---------------- VALIDATION ---------------- */

const schema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email().max(255),
  position: z.string().max(255).optional(),
  phone: z.string().max(30).optional(),
});

/* ---------------- MAIL ---------------- */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ---------------- API HANDLER ---------------- */

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

    /* 📥 Parse form */
    const formData = await req.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const position = formData.get("position");
    const phone = formData.get("phone");
    const resume = formData.get("resume");
    const recaptchaToken = formData.get("recaptchaToken");

    /* 🤖 Verify reCAPTCHA */
    const recaptcha = await verifyRecaptcha(
      recaptchaToken,
      "job_apply"
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
      fullName,
      email,
      position,
      phone,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    /* 🧼 Sanitize */
    const clean = {};
    for (const key in data) {
      clean[key] = xss(data[key] || "");
    }

    /* 📎 File validation */
    if (!(resume instanceof File)) {
      return NextResponse.json(
        { success: false, message: "Invalid resume file" },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { success: false, message: "Only PDF, DOC, DOCX allowed" },
        { status: 400 }
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "File must be under 5MB" },
        { status: 400 }
      );
    }

    /* 📧 Send email */
    const buffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: `"Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      replyTo: clean.email,
      subject: "New Job Application",
      html: `
        <h3>New Job Application</h3>
        <p><strong>Name:</strong> ${clean.fullName}</p>
        <p><strong>Email:</strong> ${clean.email}</p>
        <p><strong>Position:</strong> ${clean.position || "N/A"}</p>
        <p><strong>Phone:</strong> ${clean.phone || "N/A"}</p>
      `,
      attachments: [
        {
          filename: "resume", // don't trust original filename
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
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}