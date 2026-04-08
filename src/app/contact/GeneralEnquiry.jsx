"use client";
import { React, useEffect, useRef, useState } from "react";
import { Users, Send } from "lucide-react";
import gsap from "gsap";
import Section from "@/components/layouts/Section";
export default function GeneralEnquiry() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "",
    organization: "",
    phone: "",
    preferredContactTime: "",
    howHelp: "",
    addComment: "",
    document: null,
    check: false,
  });
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChecked = () => {
    setFormData((prev) => ({
      ...prev,
      check: !prev.check,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      document: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!window.grecaptcha) {
        alert("reCAPTCHA not loaded");
        return;
      }

      // Get reCAPTCHA token
      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "contact_form" },
      );

      console.log("token :-", recaptchaToken);

      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("inquiryType", formData.inquiryType);
      data.append("organization", formData.organization);
      data.append("phone", formData.phone);
      data.append("check", String(formData.check));
      data.append("preferredContactTime", formData.preferredContactTime);
      data.append("howHelp", formData.howHelp);
      data.append("addComment", formData.addComment);

      if (formData.document) {
        data.append("document", formData.document);
      }

      // ✅ REQUIRED
      data.append("recaptchaToken", recaptchaToken);

      // ✅ Honeypot (must be empty)
      data.append("website", "");

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Submission failed");
        return;
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        inquiryType: "",
        organization: "",
        phone: "",
        preferredContactTime: "",
        howHelp: "",
        addComment: "",
        document: null,
        check: false,
      });
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
        <div className="">
          {/* FORM */}
          <div ref={formRef} className="">
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
                      className=" w-full h-10 rounded-xl bg-gray-100 px-4 pr-10 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none appearance-none"
                    >
                      <option value="">Select Inquiry Type</option>
                      <option value="General">General</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Careers">Careers</option>
                    </select>

                    {/* Custom Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

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

                {/* Preferred Contact Time */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Preferred Contact Time{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">
                    <select
                      name="preferredContactTime"
                      value={formData.preferredContactTime}
                      onChange={handleChange}
                      required
                      className=" w-full h-10 rounded-xl bg-gray-100 px-4 pr-10 text-sm border border-gray-200 focus:border-blue-600 focus:ring-0 outline-none appearance-none"
                    >
                      <option value="">Select Contact Time</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon </option>
                      <option value="Evening">Evening</option>
                    </select>

                    {/* Custom Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Text */}
              <div>
                <label className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed mb-2">
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
                  Upload Document{" "}
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
                className={`w-fit p-4 py-2.5 rounded-full font-medium flex items-center justify-center gap-2 transition
    ${
      submitted
        ? "bg-green-600 cursor-default"
        : loading
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-primary hover:shadow-xl"
    }
    text-white`}
              >
                {submitted ? (
                  "Submitted"
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
        </div>
      </form>
    </Section>
  );
}
const Spinner = () => (
  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
);
