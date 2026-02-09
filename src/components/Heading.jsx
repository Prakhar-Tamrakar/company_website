"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Heading({
  headline,
  subHeadline,
  align = "center",
  className = "",
  color = "primary",
  maxWidth = "",
}) {
  const containerRef = useRef(null);

  const headlineColorClass = color === "white" ? "text-white" : "text-slate-900";
  const subHeadlineColorClass =
    color === "white" ? "text-white/80" : "text-gray-600";

  const headlineWords = headline.split(" ");
  const subLines = subHeadline ? subHeadline.split(/(?<=[.!?])\s+/) : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".word-inner", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      });

      if (subLines.length) {
        tl.from(
          ".line-inner",
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.4"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [headline, subHeadline]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center justify-center mx-auto max-w-[900px] ${className}`}
      style={{ textAlign: align }}
    >
      {/* Headline */}
      <h2
        className={`font-playfair font-regular lg:font-regular leading-[1.2]
          text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px]
          tracking-[0.04em]
          ${maxWidth || "max-w-[600px]"}
          ${headlineColorClass}`}
      >
        {headlineWords.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-2">
            <span className="inline-block word-inner">{word}</span>
          </span>
        ))}
      </h2>

      {/* subHeadline */}
      {subHeadline && (
        <p
          className={`mt-3 leading-normal text-[16px] sm:text-[17px] md:text-[18px] font-light tracking-[0.02em] ${subHeadlineColorClass}`}
        >
          {subLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span className="block line-inner">{line}</span>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
