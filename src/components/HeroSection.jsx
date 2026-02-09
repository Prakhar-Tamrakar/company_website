"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ModernCapsuleCTA from "./ModernCapsuleCTA";

export default function HeroSection({
  pageName,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  maxWidth,
}) {
  const container = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const buttonsRef = useRef(null);
  const pageNameRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      if (pageNameRef.current) {
        tl.fromTo(
          pageNameRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0 },
        "-=0.4"
      );

      if (subheadlineRef.current) {
        tl.fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.8"
        );
      }

      if (buttonsRef.current?.children) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.2 },
          "-=0.6"
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className={`relative ${
        maxWidth ? maxWidth : "w-full"
      } bg-[#fcfcfd] overflow-hidden
      py-36 sm:py-40 md:py-48 lg:py-56`}
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-24 left-[12%] w-72 h-72 rounded-full bg-indigo-50/60 blur-3xl" />
        <div className="absolute bottom-32 right-[10%] w-[420px] h-[420px] rounded-full bg-blue-50/50 blur-3xl" />

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "88px 88px",
              maskImage:
                "radial-gradient(circle at center, black 70%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 70%, transparent 95%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(circle at center, black 75%, transparent 98%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 75%, transparent 98%)",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/80" />
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-[64px] font-medium  font-playfair leading-tight bg-linear-to-br from-slate-800 via-slate-800 to-indigo-600 bg-clip-text text-transparent"
          >
            {headline}
          </h1>

          {subheadline && (
            <p
              ref={subheadlineRef}
              className="mt-6 max-w-4xl mx-auto text-slate-600 text-lg leading-relaxed"
            >
              {subheadline}
            </p>
          )}

          <div
            ref={buttonsRef}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {primaryCta?.href && (
              <ModernCapsuleCTA
                href={primaryCta.href}
                text={primaryCta.label}
              />
            )}

            {secondaryCta?.href && (
              <Link
                href={secondaryCta.href}
                className="border border-slate-300 py-3 px-8 rounded-full text-slate-700 hover:bg-slate-50 transition-all duration-200"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
