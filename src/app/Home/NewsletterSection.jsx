"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import Section from "@/components/layouts/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      tl.from(imageRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        textRef.current,
        {
          x: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  const [data, setData] = useState({
    email: "",
    recaptchaToken: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ---------------- INPUT CHANGE ---------------- */

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
    setMessage("");
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitted || loading) return;

    if (!data.email) {
      setMessage("Please enter an email address");
      return;
    }

    if (!EMAIL_REGEX.test(data.email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    if (!window.grecaptcha) {
      setMessage("reCAPTCHA not loaded");
      return;
    }

    try {
      setLoading(true);
      console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

      // ✅ Execute reCAPTCHA
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "newsletter" },
      );
      console.log(token);

      // ✅ Update state (source of truth)
      setData((prev) => ({
        ...prev,
        recaptchaToken: token,
      }));

      // ✅ Send email + token to backend
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          recaptchaToken: token,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setMessage(result.message || "Failed to subscribe");
        return;
      }

      setMessage(result.message || "Subscribed successfully!");
      setSubmitted(true);
      setData({ email: "", recaptchaToken: "" });
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section size="lg" className="relative w-full bg-white">
      <div className="container" ref={containerRef}>
        <div className="relative overflow-hidden rounded-3xl bg-white">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-4 sm:p-0">
            {/* RIGHT IMAGE — comes first on mobile */}
            <div
              className="relative flex justify-center order-1 lg:order-2"
              ref={imageRef}
            >
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="/Home/newsletter.jpg"
                  alt="Newsletter"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* LEFT CONTENT — comes second on mobile */}
            <div className="order-2 lg:order-1" ref={textRef}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-regular  heading-default leading-tight mb-6">
                Stay Ahead of <br className="hidden sm:block" />
                Digital Trends.
              </h2>

              <p className="content-default text-base leading-relaxed max-w-md mb-8">
                Get the latest content in your inbox every week. No spam. Only
                high-quality insights.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={data.email}
                    onChange={handleChange}
                    disabled={submitted}
                    className="
                      w-full
                      rounded-full
                      border border-slate-300
                      px-5 py-2.5
                      text-slate-900
                      placeholder:text-slate-400
                      focus:outline-none
                      focus:ring-2 focus:ring-blue-500
                      disabled:opacity-60
                    "
                  />

                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className={`
                      rounded-full
                      whitespace-nowrap
                      px-6 py-2.5
                      font-medium
                      shadow-lg
                      transition-all
                      active:scale-95
                      text-white
                      flex items-center gap-2
                      mx-auto
                      w-fit
                      ${
                        submitted
                          ? "bg-green-600 cursor-default"
                          : "bg-primary opacity-95 hover:opacity-100"
                      }
                      ${loading || submitted ? "opacity-60" : ""}
                    `}
                  >
                    {loading ? "Joining..." : submitted ? "Joined" : "Join Now"}
                    <Send size={16} />
                  </button>
                </div>

                {message && (
                  <p className="mt-3 text-sm text-slate-600">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
