"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";

// Backgrounds
import backgroundImage01 from "../../public/Home/HomeBg01.jpg";
import backgroundImage02 from "../../public/Home/HomeBg02.jpg";
import backgroundImage03 from "../../public/Home/HomeBg03.jpg";

// Partner Logos
import microsoftLogo from "../../public/logos/MicrosoftLogo.png";
import appianLogo from "../../public/logos/appianLogo.png";
import servicenowLogo from "../../public/logos/ServiceNowLogo.png";
import gluwareLogo from "../../public/logos/gluwareLogo.png";
import uipathLogo from "../../public/logos/UiPath-Logo.png";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [curtainIndex, setCurtainIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const baseRef = useRef(null);
  const curtainRef = useRef(null);

  const slides = [
    { src: backgroundImage01, alt: "Hero Background 1" },
    { src: backgroundImage02, alt: "Hero Background 2" },
    { src: backgroundImage03, alt: "Hero Background 3" },
  ];

  const slideFeatures = [
    { title: "AI-Driven Automation", desc: "AI-driven efficiency, reduced manual effort." },
    { title: "Security & Compliance", desc: "Built for regulated industries and growth-focused businesses." },
    { title: "Digital Transformation", desc: "Modernize legacy IT systems with intelligent workflows." },
    { title: "Proactive Managed Services", desc: "24/7 monitoring, predictable SLAs, continuous optimization." },
    { title: "Operational Resilience", desc: "Reduce downtime, accelerate decision-making, scale with confidence." },
    { title: "Platform Expertise", desc: "ServiceNow, Microsoft 365, UiPath, Atlassian Jira & others." },
  ];

  const partners = [
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ServiceNow", logo: servicenowLogo },
    { name: "UiPath", logo: uipathLogo },
    { name: "Gluware", logo: gluwareLogo },
    { name: "Appian", logo: appianLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ServiceNow", logo: servicenowLogo },
    { name: "UiPath", logo: uipathLogo },
  ];

  /* ---------- Entrance Animations ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-inner", { y: "105%" });
      gsap.set(".hero-sub-text, .partners-marquee, .right-content-box, .hero-cta", { opacity: 0, y: 20 });

      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(".hero-line-1 .reveal-inner, .hero-line-2 .reveal-inner", { y: "0%", duration: 1, stagger: 0.2, ease: "expo.out" })
        .to(".hero-sub-text", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".right-content-box", { opacity: 1, y: 0, duration: 1 }, "-=0.4")
        .to(".partners-marquee", { opacity: 1, y: 0, duration: 1 }, "-=0.8");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Background & Dynamic Content Cycle ---------- */
  const runTransition = (forcedIndex = null) => {
  if (isAnimating) return;
  setIsAnimating(true);

  const nextIndex =
    forcedIndex !== null
      ? forcedIndex
      : (index + 1) % slideFeatures.length;
  const nextImgIndex = nextIndex % slides.length;

  // Pre-load the next background on the curtain
  setCurtainIndex(nextImgIndex);

  const tl = gsap.timeline({
    onComplete: () => setIsAnimating(false),
  });

  // 1. Fade out text
  tl.to(".feature-text", { opacity: 0, y: -10, duration: 0.35 });

  // 2. Update index ONCE — right after text is gone, before curtain moves
  tl.call(() => setIndex(nextIndex));

  // 3. Fade text back in with new content
  tl.fromTo(
    ".feature-text",
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.5 }
  );

  // 4. Curtain slides up (runs in parallel with text fade-in)
  tl.set(curtainRef.current, { yPercent: 100, display: "block", opacity: 1 }, "<-=0.5");
  tl.to(
    curtainRef.current,
    { yPercent: 0, duration: 1.1, ease: "power3.inOut" },
    "<"
  );

  // 5. Fade out and hide curtain
  tl.to(curtainRef.current, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => gsap.set(curtainRef.current, { display: "none" }),
  });
};

  useEffect(() => {
    const interval = setInterval(() => runTransition(), 5000);
    return () => clearInterval(interval);
  }, [index, isAnimating]);

  return (
    <div ref={containerRef} className="relative min-h-[90svh] md:min-h-screen w-full overflow-hidden bg-white flex items-center">
      
      {/* ---------- Background Layers ---------- */}
      <div className="absolute inset-0 z-0">
        <div ref={baseRef} className="absolute inset-0">
          <Image src={slides[index % slides.length].src} alt="bg" fill priority className="object-cover" />
        </div>
        <div ref={curtainRef} className="absolute inset-0 hidden z-10">
          <Image src={slides[curtainIndex].src} alt="bg-next" fill priority className="object-cover" />
        </div>
        {/* Gradients to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
      </div>

      {/* ---------- Main Content Grid ---------- */}
      <main className="container relative z-30 grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center py-20">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 text-slate-900">
            <span className="hero-line-1 block overflow-hidden">
              <span className="reveal-inner block">Transform IT</span>
            </span>
            <span className="hero-line-2 block overflow-hidden">
              <span className="reveal-inner block">Intelligently</span>
            </span>
          </h1>
          <div className="hero-sub-text text-lg sm:text-xl text-slate-500 mb-10 max-w-md">
            <p>Turning IT into a future-ready, intelligent digital engine with AI-driven automation.</p>
          </div>
          <div className="w-fit hero-cta mb-16">
            <ModernCapsuleCTA href="/contact" text="Schedule a Consultation" />
          </div>

          {/* Partner Logos */}
          <div className="partners-marquee w-full max-w-md overflow-hidden opacity-50">
            <div className="flex w-max animate-marquee gap-10 items-center">
              {partners.map((partner, i) => (
                <Image key={i} src={partner.logo} alt={partner.name} height={30} className="grayscale hover:grayscale-0 transition-all object-contain h-6 w-auto" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Glass Panel (Now positioned in the grid) */}
        <div className="right-content-box hidden md:flex justify-end items-center">
          <div
            className="relative w-full max-w-[360px] min-h-[400px] flex flex-col justify-between rounded-[40px] p-10 overflow-hidden"
            style={{
              background: "rgba(15, 23, 42, 0.6)", // Darker glass for better contrast against light bg
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-blue-500" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Capabilities</span>
              </div>

              <div className="feature-text">
                <div className="font-bold text-6xl text-white/10 mb-[-1rem]">{String(index + 1).padStart(2, "0")}</div>
                <h2 className="text-3xl font-bold text-white leading-tight mb-4">{slideFeatures[index].title}</h2>
                <p className="text-white/60 text-base leading-relaxed">{slideFeatures[index].desc}</p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-12">
              <div className="flex gap-2">
                {slideFeatures.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-blue-500" : "w-3 bg-white/20"}`} />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button 
                   onClick={() => runTransition((index - 1 + slideFeatures.length) % slideFeatures.length)}
                   className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  ←
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
    </div>
  );
};

export default Hero;