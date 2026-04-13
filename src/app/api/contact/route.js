// export const runtime = "nodejs";

// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// /* ---------------- SANITIZATION ---------------- */

// function sanitize(input) {
//   if (!input) return "";
//   return String(input)
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#x27;");
// }

// /* ---------------- FORM API HANDLER ---------------- */

// export async function POST(req) {
//   try {
//     /* ✅ 1. Read form data */
//     const formData = await req.formData();

//     // Verify reCAPTCHA
//     const recaptchaToken = formData.get("recaptchaToken");
//     if (!recaptchaToken) {
//       return NextResponse.json(
//         { success: false, message: "reCAPTCHA verification required" },
//         { status: 400 },
//       );
//     }
//     const recaptchaResponse = await fetch(
//       "https://www.google.com/recaptcha/api/siteverify",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({
//           secret: process.env.RECAPTCHA_SECRET_KEY,
//           response: recaptchaToken,
//         }),
//       },
//     );
//     const recaptchaData = await recaptchaResponse.json();
//     // Score threshold: 0.5 (adjust as needed, 0.0 = bot, 1.0 = human)
//     if (
//       !recaptchaData.success ||
//       recaptchaData.score < 0.5 ||
//       recaptchaData.action !== "contact_form"
//     ) {
//       return NextResponse.json(
//         { success: false, message: "Verification failed. Please try again." },
//         { status: 403 },
//       );
//     }

//     const fullName = String(formData.get("fullName") || "").trim();
//     const email = String(formData.get("email") || "").trim();

//     /* 🚫 Basic validation */
//     if (!email || !fullName) {
//       return NextResponse.json(
//         { success: false, message: "Invalid form submission" },
//         { status: 400 },
//       );
//     }

//     /* ---------------- FORM PROCESSING ---------------- */

//     const inquiryType = sanitize(formData.get("inquiryType"));
//     const organization = sanitize(formData.get("organization"));
//     const phone = sanitize(formData.get("phone"));
//     const preferredContactTime = sanitize(formData.get("preferredContactTime"));
//     const howHelp = sanitize(formData.get("howHelp"));
//     const addComment = sanitize(formData.get("addComment"));
//     const document = formData.get("document");
//     const checked = sanitize(formData.get("check"));

//     if (!inquiryType || !organization) {
//       return NextResponse.json(
//         { success: false, message: "Missing required fields" },
//         { status: 400 },
//       );
//     }

//     if (
//       fullName.length > 100 ||
//       email.length > 255 ||
//       organization.length > 200
//     ) {
//       return NextResponse.json(
//         { success: false, message: "Input too long" },
//         { status: 400 },
//       );
//     }

//     if (howHelp && howHelp.length > 5000) {
//       return NextResponse.json(
//         { success: false, message: "Message too long (max 5000 characters)" },
//         { status: 400 },
//       );
//     }

//     /* ---------------- FILE SAFETY ---------------- */

//     const ALLOWED_TYPES = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "image/jpeg",
//       "image/png",
//       "image/webp",
//     ];
//     if (document && document.size > 0) {
//       if (document.size > 5 * 1024 * 1024) {
//         return NextResponse.json(
//           { success: false, message: "File too large (max 5MB)" },
//           { status: 400 },
//         );
//       }
//       if (!ALLOWED_TYPES.includes(document.type)) {
//         return NextResponse.json(
//           {
//             success: false,
//             message:
//               "File type not allowed. Please upload PDF, DOC, DOCX, JPG, or PNG.",
//           },
//           { status: 400 },
//         );
//       }
//     }

//     /* ---------------- EMAIL ---------------- */

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"Website Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.MANAGER_EMAIL,
//       subject: "New Contact Form Submission",
//       html: `
//         <h3>New Contact Inquiry</h3>
//         <p><strong>Name:</strong> ${sanitize(fullName)}</p>
//         <p><strong>Email:</strong> ${sanitize(email)}</p>
//         <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
//         <p><strong>Organization:</strong> ${organization}</p>
//         <p><strong>Phone:</strong> ${phone || "N/A"}</p>
//         <p><strong>Checked:</strong> ${checked || "N/A"}</p>
//         <p><strong>Preferred Contact Time:</strong> ${
//           preferredContactTime || "N/A"
//         }</p>
//         <p><strong>How can we help:</strong><br/>${howHelp}</p>
//         <p><strong>Additional Comments:</strong><br/>${addComment || "N/A"}</p>
//       `,
//       attachments: [],
//     };

//     if (document && document.size > 0) {
//       const buffer = Buffer.from(await document.arrayBuffer());
//       mailOptions.attachments.push({
//         filename: document.name,
//         content: buffer,
//       });
//     }

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Form error:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to submit form" },
//       { status: 500 },
//     );
//   }
// }

export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";
import xss from "xss";
import { verifyRecaptcha } from "../../../utility/recaptcha";

/* ---------------- RATE LIMIT (in-memory) ---------------- */

const RATE_LIMIT = 10; // requests per window
const WINDOW_MS = 60 * 1000; // 1 min

const ipStore = new Map();

function rateLimit(ip) {
  const now = Date.now();

  if (!ipStore.has(ip)) {
    ipStore.set(ip, { count: 1, time: now });
    return true;
  }

  const data = ipStore.get(ip);

  if (now - data.time > WINDOW_MS) {
    ipStore.set(ip, { count: 1, time: now });
    return true;
  }

  if (data.count >= RATE_LIMIT) return false;

  data.count++;
  return true;
}

/* ---------------- VALIDATION ---------------- */

const schema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email().max(255),
  inquiryType: z.enum(["General Inquiry", "Products", "Services / Sales"]),
  product: z.string().optional(),
  organization: z.string().min(1).max(200),
  phone: z.string().optional(),
  preferredContactTime: z.string().optional(),
  howHelp: z.string().max(5000).optional(),
  addComment: z.string().optional(),
  check: z.string().optional(),
});

/* ---------------- FILE CONFIG ---------------- */

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

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
        { success: false, message: "Too many requests. Try later." },
        { status: 429 },
      );
    }

    /* 📥 Parse form */
    const formData = await req.formData();

    const recaptchaToken = formData.get("recaptchaToken");

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA required" },
        { status: 400 },
      );
    }

    /* 🤖 Verify reCAPTCHA */
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken.toString(),
        }),
      }
    );

    const recaptchaData = await verify.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, message: "Bot verification failed" },
        { status: 403 }
      );
    }

   

    /* 🧠 Extract data */
    const rawData = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      inquiryType: formData.get("inquiryType"),
      product: formData.get("product"),
      organization: formData.get("organization"),
      phone: formData.get("phone"),
      preferredContactTime: formData.get("preferredContactTime"),
      howHelp: formData.get("howHelp"),
      addComment: formData.get("addComment"),
      check: formData.get("check"),
    };

    /* ✅ Validate */
    const parsed = schema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input" },
        { status: 400 },
      );
    }

    const data = parsed.data;

    /* 🧼 Sanitize */
    const clean = {};
    for (const key in data) {
      clean[key] = xss(data[key] || "");
    }

    /* 📎 File validation */
    const file = formData.get("document");
    let attachments = [];

    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, message: "File too large" },
          { status: 400 },
        );
      }

      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { success: false, message: "Invalid file type" },
          { status: 400 },
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: "attachment",
        content: buffer,
      });
    }

    /* 📧 Email */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL,
      subject: `[${clean.inquiryType}] New Contact Form Submission`,
      html: `
        <h3>New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${clean.fullName}</p>
        <p><strong>Email:</strong> ${clean.email}</p>
        <p><strong>Inquiry Type:</strong> ${clean.inquiryType}</p>
        ${clean.product ? `<p><strong>Product:</strong> ${clean.product}</p>` : ""}
        <p><strong>Organization:</strong> ${clean.organization}</p>
        <p><strong>Phone:</strong> ${clean.phone || "N/A"}</p>
        <p><strong>Preferred Contact Time:</strong> ${clean.preferredContactTime || "N/A"}</p>
        <p><strong>SMS Consent:</strong> ${clean.check === "true" ? "Yes" : "No"}</p>
        <p><strong>How can we help:</strong><br/>${clean.howHelp || "N/A"}</p>
        <p><strong>Additional Comments:</strong><br/>${clean.addComment || "N/A"}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
