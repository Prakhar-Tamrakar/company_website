"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ModernCapsuleCTA from "./ModernCapsuleCTA";

export default function CenteredHeroSection({
  headline,
  subHeadline,
  primaryCta,
  secondaryCta,
  heroBgImage = "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) {
  const container = useRef(null);
  const contentRef = useRef(null);
  const bgImageRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.4 },
      });

      // Background fade and slight scale down for a "settling" feel
      tl.fromTo(
        bgImageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 },
      );

      // Text elements reveal from bottom
      tl.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15 },
        "-=1.4",
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative min-h-[65vh] lg:min-h-[80vh] flex items-center justify-center bg-white overflow-hidden px-6 py-20"
    >
      {/* 🖼️ BACKGROUND LAYER */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 opacity-0">
        <img
          src={heroBgImage}
          alt="Centered Background"
          className="w-full h-full object-cover"
        />

        {/* CENTER-FOCUSED SCRIM: Lightest in the center for text clarity */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* ✍️ CONTENT LAYER */}
      <div className="container relative z-10 w-full max-w-7xl mx-auto  pt-10">
        <div ref={contentRef} className="flex flex-col items-left">
          <h1 className="text-4xl md:text-6xl font-regular heading-default text-slate-900 leading-[1.2] tracking-tight mb-8 max-w-5xl">
            {headline && typeof headline === "string"
              ? headline.split(" ").map((word, i) => (
                  <span key={i} className="inline-block">
                    {/* Highlighting the middle words for a premium balanced look */}
                    {i >= 1 && i <= 2 ? (
                      <span className="font-semibold">{word}</span>
                    ) : (
                      word
                    )}{" "}
                  </span>
                ))
              : headline}
          </h1>

          <p className="text-lg md:text-xl  font-light text-slate-900 max-w-3xl mb-12 leading-relaxed">
            {subHeadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-left gap-8">
            {primaryCta?.href && (
              <ModernCapsuleCTA
                href={primaryCta.href}
                text={primaryCta.label}
              />
            )}

            {secondaryCta?.href && (
              <ModernCapsuleCTA
                theme="light"
                href={secondaryCta.href}
                text={secondaryCta.label}
              />
            )}
          </div>
        </div>
      </div>

      {/* Aesthetic Side Accents (Minimalist) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 h-32 w-px bg-slate-200 hidden xl:block" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 h-32 w-px bg-slate-200 hidden xl:block" />
    </section>
  );
}