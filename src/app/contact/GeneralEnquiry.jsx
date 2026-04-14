"use client";
import { React, useEffect, useRef, useState } from "react";
import { Send, CalendarClock } from "lucide-react";
import gsap from "gsap";
import Section from "@/components/layouts/Section";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

/* ── Shared select arrow icon ── */
const SelectArrow = () => (
  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const TIMEZONES = [
  { label: "IST — India Standard Time (UTC+5:30)", value: "IST" },
  { label: "EST — US Eastern Standard Time (UTC-5)", value: "EST" },
  { label: "EDT — US Eastern Daylight Time (UTC-4)", value: "EDT" },
  { label: "PST — US Pacific Standard Time (UTC-8)", value: "PST" },
  { label: "GMT — Greenwich Mean Time (UTC+0)", value: "GMT" },
  { label: "CET — Central European Time (UTC+1)", value: "CET" },
];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  inquiryType: "",
  product: "",
  organization: "",
  phone: "",
  preferredContactDate: null,
  timezone: "",
  howHelp: "",
  addComment: "",
  document: null,
  check: false,
};

export default function GeneralEnquiry() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear product selection when switching away from "Products"
    if (name === "inquiryType" && value !== "Products") {
      setFormData((prev) => ({ ...prev, inquiryType: value, product: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleChecked = () =>
    setFormData((prev) => ({ ...prev, check: !prev.check }));

  const handleFileChange = (e) =>
    setFormData((prev) => ({ ...prev, document: e.target.files[0] }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!window.grecaptcha) {
        alert("reCAPTCHA not loaded");
        return;
      }

      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "contact_form" },
      );

      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("inquiryType", formData.inquiryType);
      data.append("product", formData.product || "");
      data.append("organization", formData.organization);
      data.append("phone", formData.phone);
      data.append("check", String(formData.check));
      // Format picked date+time + timezone into a readable string for the email
      const preferredContactTime = formData.preferredContactDate
        ? `${format(formData.preferredContactDate, "EEE, MMM d yyyy 'at' HH:mm")}${formData.timezone ? ` (${formData.timezone})` : ""}`
        : "";
      data.append("preferredContactTime", preferredContactTime);
      data.append("howHelp", formData.howHelp);
      data.append("addComment", formData.addComment);
      if (formData.document) data.append("document", formData.document);
      data.append("recaptchaToken", recaptchaToken);
      data.append("website", ""); // honeypot

      const res = await fetch("/api/contact#form", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Submission failed");
        return;
      }

      setSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="form"
      className="max-w-4xl flex justify-center items-center mx-auto"
    >
      <form onSubmit={handleSubmit}>
        <div ref={formRef}>
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Connect with us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full h-10 rounded-xl bg-gray-100 px-4 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full h-10 rounded-xl bg-gray-100 px-4 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Inquiry Type <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-xl bg-gray-100 px-4 pr-10 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none appearance-none"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Products">Products</option>
                    <option value="Services / Sales">Services / Sales</option>
                  </select>
                  <SelectArrow />
                </div>
              </div>

              {/* Product — nested dropdown, visible only when inquiryType is "Products" */}
              {formData.inquiryType === "Products" && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Product <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full h-10 rounded-xl bg-gray-100 px-4 pr-10 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none appearance-none"
                    >
                      <option value="">Select a Product</option>
                      <option value="MyPleader">
                        MyPleader — Digital Legal Practice Management
                      </option>
                      <option value="GapNinja">
                        GapNinja — Skills &amp; Capability Intelligence
                      </option>
                      <option value="LineupLynx">
                        LineupLynx — AI-Powered Sports Auction Intelligence
                      </option>
                      <option value="icronco">
                        icronco — Preventive Oncology Screening Platform
                      </option>
                    </select>
                    <SelectArrow />
                  </div>
                </div>
              )}

              {/* Organization */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Organization <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="w-full h-10 rounded-xl bg-gray-100 px-4 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-10 rounded-xl bg-gray-100 px-4 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none"
                />
              </div>

              {/* Preferred Contact Date & Time — calendar picker */}
              {/* Preferred Contact Date & Time — calendar picker */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Preferred Contact Date &amp; Time
                </label>
                <div className="relative">
                  <DatePicker
                    selected={formData.preferredContactDate}
                    onChange={(date) =>
                      setFormData((prev) => ({
                        ...prev,
                        preferredContactDate: date,
                      }))
                    }
                    showTimeInput
                    timeInputLabel="Time:"
                    dateFormat="EEE, MMM d yyyy 'at' HH:mm"
                    minDate={new Date()}
                    placeholderText="Click to pick a date & time"
                    className="w-full h-10 rounded-xl bg-gray-100 px-4 pr-10 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none cursor-pointer"
                    wrapperClassName="w-full"
                    calendarClassName="shadow-xl rounded-xl border border-gray-200 font-sans"
                    popperPlacement="bottom-start"
                    isClearable
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <CalendarClock className="h-4 w-4" />
                  </span>
                </div>
                {/* <p className="mt-1.5 text-xs text-gray-400">Optional — helps us reach you at the right time.</p> */}
              </div>

              {/* Timezone */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Timezone
                </label>
                <div className="relative">
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full h-10 rounded-xl bg-gray-100 px-4 pr-10 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none appearance-none"
                  >
                    <option value="">Select Timezone</option>
                    {TIMEZONES.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                  <SelectArrow />
                </div>
                <p className="mt-1.5 text-xs text-gray-400">
                  Helps us call at the right local time.
                </p>
              </div>
            </div>

            {/* SMS Consent checkbox */}
            <div>
              <label className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed mb-4">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={formData.check}
                  onChange={handleChecked}
                />
                <span>
                  By checking this box, you consent to receive text messages
                  from i-Connectresources regarding your inquiries, orders, or
                  services. You may opt-out at any time by replying STOP. For
                  assistance, text HELP. Message and data rates may apply.
                  Messaging frequency may vary.
                </span>
              </label>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                How can we help you?
              </label>
              <textarea
                rows={4}
                name="howHelp"
                value={formData.howHelp}
                onChange={handleChange}
                maxLength={5000}
                className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-2 text-base font-medium text-gray-700">
                Upload Document
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                className="w-full rounded-xl bg-gray-100 px-4 py-2 text-sm border border-gray-200 focus:border-blue-600 outline-none"
                onChange={handleFileChange}
              />
              <p className="mt-2 text-xs text-gray-500">
                Maximum file size allowed:{" "}
                <span className="font-medium">5 MB</span>
              </p>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block mb-2 text-base font-medium text-gray-700">
                Additional Comments
              </label>
              <textarea
                rows={2}
                name="addComment"
                value={formData.addComment}
                onChange={handleChange}
                className="w-full rounded-xl bg-gray-100 px-4 py-3 text-base border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || submitted}
              className={`w-fit px-6 py-2.5 rounded-full font-medium flex items-center justify-center gap-2 transition ${
                submitted
                  ? "bg-green-600 cursor-default"
                  : loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-primary hover:shadow-xl"
              } text-white`}
            >
              {submitted ? (
                "Submitted ✓"
              ) : loading ? (
                <>
                  <Spinner />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Your Inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </Section>
  );
}

const Spinner = () => (
  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
);
