"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";
import { Play, Pause } from "lucide-react";
// Backgrounds
import backgroundImage01 from "../../../public/Home/HomeBg01.jpg";
import backgroundImage02 from "../../../public/Home/HomeBg02.jpg";
import backgroundImage03 from "../../../public/Home/HomeBg03.jpg";

// Partner Logos
import microsoftLogo from "../../../public/logos/MicrosoftLogo.png";
import appianLogo from "../../../public/logos/appianLogo.png";
import servicenowLogo from "../../../public/logos/ServiceNowLogo.png";
import gluwareLogo from "../../../public/logos/gluwareLogo.png";
import uipathLogo from "../../../public/logos/UiPath-Logo.png";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [curtainIndex, setCurtainIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const containerRef = useRef(null);
  const baseRef = useRef(null);
  const curtainRef = useRef(null);

  const slides = [
    { src: backgroundImage01, alt: "Hero Background 1" },
    { src: backgroundImage02, alt: "Hero Background 2" },
    { src: backgroundImage03, alt: "Hero Background 3" },
  ];

  const slideFeatures = [
    {
      title: "AI-Driven Automation",
      desc: "AI-driven efficiency, reduced manual effort.",
    },
    {
      title: "Security & Compliance",
      desc: "Built for regulated industries and growth-focused businesses.",
    },
    {
      title: "Digital Transformation",
      desc: "Modernize legacy IT systems with intelligent workflows.",
    },
    {
      title: "Proactive Managed Services",
      desc: "24/7 monitoring, predictable SLAs, continuous optimization.",
    },
    {
      title: "Operational Resilience",
      desc: "Reduce downtime, accelerate decision-making, scale with confidence.",
    },
    {
      title: "Platform Expertise",
      desc: "ServiceNow, Microsoft 365, UiPath, Atlassian Jira & others.",
    },
  ];
  const partners = [
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ServiceNow", logo: servicenowLogo },
    { name: "UiPath", logo: uipathLogo },
    { name: "Gluware", logo: gluwareLogo },
    { name: "Appian", logo: appianLogo },
    // duplicates for seamless loop
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ServiceNow", logo: servicenowLogo },
    { name: "UiPath", logo: uipathLogo },
    { name: "Gluware", logo: gluwareLogo },
    { name: "Appian", logo: appianLogo },
  ];
  /* ---------- Entrance Animations ---------- */
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("heroAnimationPlayed");

    if (hasPlayed) {
      // If already played in this session, make sure elements are visible immediately
      gsap.set(".reveal-inner", { y: "0%" });
      gsap.set(
        ".hero-sub-text, .partners-marquee, .right-content-box, .hero-cta",
        { opacity: 1, y: 0 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(".reveal-inner", { y: "105%" });
      gsap.set(
        ".hero-sub-text, .partners-marquee, .right-content-box, .hero-cta",
        { opacity: 0, y: 20 },
      );

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(".hero-line-1 .reveal-inner, .hero-line-2 .reveal-inner", {
        y: "0%",
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
      })
        .to(".hero-sub-text", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(
          ".partners-marquee",
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.4",
        )
        .to(".right-content-box", { opacity: 1, y: 0, duration: 1 }, "-=0.8");
    }, containerRef);
    
    sessionStorage.setItem("heroAnimationPlayed", "true");
    
    return () => ctx.revert();
  }, []);

  /* ---------- Background & Dynamic Content Cycle ---------- */
  const runTransition = (forcedIndex = null) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex =
      forcedIndex !== null ? forcedIndex : (index + 1) % slideFeatures.length;
    const nextImgIndex = nextIndex % slides.length;
    setCurtainIndex(nextImgIndex);
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });
    tl.to(".feature-text", { opacity: 0, y: -10, duration: 0.35 });
    tl.call(() => setIndex(nextIndex));
    tl.fromTo(
      ".feature-text",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
    );
    tl.set(
      curtainRef.current,
      { yPercent: 100, display: "block", opacity: 1 },
      "<-=0.5",
    );
    tl.to(
      curtainRef.current,
      { yPercent: 0, duration: 1.1, ease: "power3.inOut" },
      "<",
    );
    tl.to(curtainRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => gsap.set(curtainRef.current, { display: "none" }),
    });
  };

  useEffect(() => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => runTransition(), 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, index, isAnimating]);

  // useEffect(() => {

  //   const interval = setInterval(() => runTransition(), 5000);
  //   return () => clearInterval(interval);
  // }, [index, isAnimating]);
  return (
    <div
      ref={containerRef}
      className="relative min-h-[70svh] lg:min-h-screen w-full overflow-hidden bg-white flex items-center"
    >
      {/* ---------- Background Layers ---------- */}
      <div className="absolute inset-0 z-0">
        <div ref={baseRef} className="absolute inset-0">
          <Image
            src={slides[index % slides.length].src}
            alt="bg"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div
          ref={curtainRef}
          className="absolute inset-0 hidden"
          style={{ zIndex: 1 }}
        >
          <Image
            src={slides[curtainIndex].src}
            alt="bg-next"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Mobile: full white overlay so text is readable without glass card */}
        <div className="absolute inset-0 bg-white/90 md:bg-transparent z-10" />
        {/* Desktop: directional gradient — left stays opaque, right fades to transparent */}
        <div className="absolute inset-0 hidden md:block bg-linear-to-r from-white/95 via-white/80 to-white/10 z-10" />
      </div>
      {/* ---------- Main Content Grid ---------- */}
      <main className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gap-20 w-full items-center pt-28 pb-16 md:pt-24 md:pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen lg:mt-20 xl:mt-10">
        {/* Left Side Container */}
        <div className="flex flex-col justify-center px-4 md:px-0 ">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-left font-regular heading-default leading-[1.1] mb-6 md:mb-8">
            <span className="hero-line-1 block overflow-hidden pb-1">
              <span className="reveal-inner block">Transform IT </span>
            </span>
            <span className="hero-line-2 block overflow-hidden pb-1">
              <span className="reveal-inner block">Intelligently</span>
            </span>
          </h1>
          <div className="hero-sub-text text-sm sm:text-base md:text-lg text-left leading-relaxed mb-8 md:mb-10 max-w-lg text-slate-600">
            <p>
              Turning IT into a future-ready, intelligent digital engine.
              AI-driven automation that modernizes systems and workflows.
            </p>
          </div>
          <div className="flex flex-col items-start w-fit hero-cta mb-10 md:mb-14">
            <ModernCapsuleCTA
              href="/contact#form"
              text="Schedule a Consultation"
            />
          </div>

          {/* --- PARTNERS INFINITE SCROLL --- */}
          <div className="partners-marquee w-full md:max-w-lg relative overflow-hidden mx-auto md:mx-0">
            <div className="flex w-max animate-marquee gap-8 md:gap-10 items-center">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="shrink-0 opacity-50 hover:opacity-90 transition duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    height={32}
                    className="object-contain h-7 md:h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Glass Card Panel — hidden on mobile */}
        <div className="right-content-box hidden md:flex justify-end  items-center">
          <div
            className="relative w-full max-w-[300px] lg:max-w-[340px] min-h-[360px] flex flex-col justify-between rounded-[32px] p-8 overflow-hidden"
            style={{
              background: "rgba(9, 33, 90, 0.65)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.55)",
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-blue-500" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">
                  Capabilities
                </span>
              </div>

              <div className="feature-text">
                <div className="font-bold text-5xl text-white/10 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl font-bold text-white leading-tight mb-4">
                  {slideFeatures[index].title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  {slideFeatures[index].desc}
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-8">
              <div className="flex gap-2 p-2">
                {slideFeatures.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-7 bg-white" : "w-4 bg-white/20"}`}
                  />
                ))}
              </div>

              <div className="flex gap-1 p-1">
                <button
                  onClick={() =>
                    runTransition(
                      (index - 1 + slideFeatures.length) % slideFeatures.length,
                    )
                  }
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => setIsPlaying((current) => !current)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <div className="relative">
                    <Play
                      className={`h-4 w-4 transition-opacity duration-500 ease-in-out ${isPlaying ? "opacity-0" : "opacity-100"}`}
                    />
                    <Pause
                      className={`h-4 w-4 transition-opacity duration-500 ease-in-out absolute inset-0 ${isPlaying ? "opacity-100" : "opacity-0"}`}
                    />
                  </div>
                </button>
                <button
                  onClick={() => runTransition()}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Tailwind Animation Config (Add to tailwind.config.ts) */}
    </div>
  );
};
export default Hero;
