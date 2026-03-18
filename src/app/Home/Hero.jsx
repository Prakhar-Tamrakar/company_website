"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const baseRef = useRef(null);
  const curtainRef = useRef(null);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    },
  ];

  /* ---------- Preload images ---------- */
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.url;
    });
  }, []);

  /* ---------- Text entrance ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-letter", {
        y: 60,
        opacity: 0,
        stagger: 0.025,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.from(
        ".hero-line",
        {
          y: 40,
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.2",
      );

      tl.from(
        ".hero-cta",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.2",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------- Background cycle ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const transition = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextIndex = (index + 1) % slides.length;

        gsap.to(baseRef.current, {
          scale: 1,
          duration: 2,
          ease: "linear",
        });

        gsap.set(curtainRef.current, {
          yPercent: 100,
          display: "block",
          backgroundImage: `url(${slides[nextIndex].url})`,
        });

        gsap.to(curtainRef.current, {
          yPercent: 0,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            setIndex(nextIndex);

            gsap.set(baseRef.current, { scale: 1 });

            gsap.to(curtainRef.current, {
              opacity: 0,
              duration: 0.35,
              onComplete: () => {
                gsap.set(curtainRef.current, {
                  yPercent: 100,
                  opacity: 1,
                  display: "none",
                });

                setIsAnimating(false);
              },
            });
          },
        });
      };

      const interval = setInterval(transition, 3000);
      return () => clearInterval(interval);
    }, containerRef);

    return () => ctx.revert();
  }, [index, isAnimating]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[70vh] md:h-screen w-full overflow-hidden bg-white flex flex-col justify-center md:justify-center"
    >
      {/* ---------- Background Layers ---------- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base Image */}
        <div
          ref={baseRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].url})` }}
        />

        {/* Curtain Layer */}
        <div
          ref={curtainRef}
          className="absolute inset-0 bg-cover bg-center hidden"
          style={{ zIndex: 1 }}
        />

        {/* LIGHT Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-white/20 z-10" />
        <div className="absolute inset-0 bg-white/40 z-10" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06] z-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ---------- Main Content ---------- */}
      <main className="relative z-30 flex flex-col px-6 sm:px-12 md:px-24 lg:px-40 pb-16 md:pb-0 md:h-full">
        <div className="hero-content flex flex-col justify-end md:justify-center flex-1 mt-32 md:mt-0">
          <h1 className="heading-default text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left font-regular tracking-tight text-slate-900 leading-[1.1] sm:leading-tight mb-6">
            {"Empowering Business".split(" ").map((word, wIdx) => (
              <span
                key={`w1-${wIdx}`}
                className="inline-block whitespace-nowrap mr-[0.25em]"
              >
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="inline-block hero-letter">
                    {char}
                  </span>
                ))}
              </span>
            ))}
            <br className="hidden md:block" />
            {"Through Innovation".split(" ").map((word, wIdx) => (
              <span
                key={`w2-${wIdx}`}
                className="inline-block whitespace-nowrap mr-[0.25em]"
              >
                {word.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="inline-block hero-letter font-regular"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="text-base sm:text-xl  content-default text-left leading-relaxed mb-8 sm:mb-12 max-w-2xl text-slate-700">
            <span className="inline-block hero-line mr-1 mb-1 sm:mb-0">
              We partner with forward-thinking enterprises
            </span>
            <span className="inline-block hero-line mr-1 mb-1 sm:mb-0">
              and government agencies to deliver smarter,
            </span>
            <span className="inline-block hero-line">
              scalable IT solutions that solve real-world challenges.
            </span>
          </p>

          <div className="w-fit hero-cta">
            <ModernCapsuleCTA href="/contact" text="Schedule a Consultation" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
