"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ProductEnquiryForm = ({ name }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    product: name,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  /* ---------------------------
     Handle Input Change
  --------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear old messages while typing
    setFeedback("");
  };

  /* ---------------------------
     Client-side Validation
  --------------------------- */
  const validateForm = () => {
    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      setFeedback("Please fill in all required fields.");
      return false;
    }

    if (!EMAIL_REGEX.test(email)) {
      setFeedback("Please enter a valid email address.");
      return false;
    }

    if (message.length > 2000) {
      setFeedback("Message is too long.");
      return false;
    }

    return true;
  };

  /* ---------------------------
     Handle Submit
  --------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || submitted) return;

    if (!validateForm()) return;

    if (!window.grecaptcha) {
      setFeedback("reCAPTCHA not loaded. Please refresh and try again.");
      return;
    }

    try {
      setLoading(true);

      // ✅ Generate reCAPTCHA token
      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "product_enquiry" },
      );

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken, // ✅ send token to backend
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFeedback(data.message || "Failed to send enquiry.");
        return;
      }

      setFeedback(data.message || "Enquiry sent successfully.");
      setSubmitted(true);

      // Optional: clear form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        product: "",
        message: "",
      });
    } catch (error) {
      setFeedback("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg border border-slate-400/20 overflow-hidden max-w-4xl w-full">
        {/* Left Side: Image */}
        <div className="md:w-1/2 bg-primary relative">
          <img
            src="/career/Global_Clients.jpg"
            alt="Office space"
            className="h-full w-full object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
            <h2 className="text-3xl font-bold font-playfair">Let's connect.</h2>
            <p className="mt-2 text-blue-100">
              Reach out to us for any inquiries or just to say hello. Our team
              is here to help you grow.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  maxLength={50}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  maxLength={50}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={100}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                maxLength={1000}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="123 Main St"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                  maxLength={3000}

                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className={`flex items-center justify-center gap-2 text-white w-full p-2 rounded-full ${
                submitted ? "bg-green-600" : "bg-primary"
              }`}
            >
              {loading ? "Sending..." : submitted ? "Sent" : "Send Enquiry"}
              <Send size={16} />
            </button>

            {feedback && (
              <p className="mt-3 text-sm text-slate-600">{feedback}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEnquiryForm;
