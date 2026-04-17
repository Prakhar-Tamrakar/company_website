"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Cpu, ShieldCheck, Rocket } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";

// Partner Logos
import microsoftLogo from "../../public/logos/MicrosoftLogo.png";
import appianLogo from "../../public/logos/appianLogo.png";
import servicenowLogo from "../../public/logos/ServiceNowLogo.png";
import gluwareLogo from "../../public/logos/gluwareLogo.png";
import uipathLogo from "../../public/logos/UiPath-Logo.png";

const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "UiPath", logo: uipathLogo },
  { name: "Gluware", logo: gluwareLogo },
  { name: "Appian", logo: appianLogo },
];

const stackedCards = [
  { 
    title: "Digital Transformation", 
    desc: "Modernize legacy IT systems with intelligent workflows.", 
    icon: Rocket 
  },
  { 
    title: "AI-Driven Automation", 
    desc: "AI-driven efficiency, drastically reducing manual effort.", 
    icon: Cpu 
  },
  { 
    title: "Security & Compliance", 
    desc: "Built for regulated industries and secure growth.", 
    icon: ShieldCheck 
  },
];

export default function HeroB2B() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      
      // Left side text reveal
      tl.from(".reveal-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".reveal-text", { y: 20, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6")
        .from(".reveal-btn", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.6");
        
      // Right side cards stack animation
      tl.from(".card-stack-enter", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.2)"
      }, "-=0.8");

      // Continuous floating animation
      gsap.to(".card-stack-enter", {
        y: "-=12",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.4,
          from: "start"
        }
      });

      // Background Blobs animation
      gsap.to(".bg-blob", {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
      });

      // Trusted by
      tl.from(".trusted-by-title", { opacity: 0, y: 10, duration: 0.6, ease: "power3.out" }, "-=0.5");
      tl.from(".trusted-by-marquee", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.4");

      // Infinite Marquee Logic
      const marquee = marqueeRef.current;
      if (marquee) {
        const marqueeContent = marquee.firstChild;
        const marqueeWidth = marqueeContent.offsetWidth;
        
        gsap.to(marqueeContent, {
          x: -(marqueeWidth / 2),
          duration: 30, // Adjust speed here
          ease: "none",
          repeat: -1
        });
      }
    },
    { scope: containerRef }
  );

  // Duplicate partners for loop
  const totalPartners = [...partners, ...partners];

  return (
    <section ref={containerRef} className="relative min-h-[90vh] lg:h-screen flex flex-col justify-center overflow-hidden bg-slate-50/50">
      
      {/* ── Colorful Background Blobs ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="bg-blob absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-300/30 rounded-full blur-[140px]" />
        <div className="bg-blob absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-blue-300/30 rounded-full blur-[120px]" />
        <div className="bg-blob absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-purple-300/30 rounded-full blur-[130px]" />
        <div className="bg-blob absolute bottom-[-5%] left-[10%] w-[40%] h-[40%] bg-cyan-200/30 rounded-full blur-[120px]" />
      </div>

      <div className="flex-1 flex flex-col justify-center py-12 lg:py-0 relative z-10">
        {/* ── Top Hero Area ── */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Left Content */}
          <div className="flex flex-col items-start pr-0 lg:pr-10">
            {/* <div className="reveal-badge inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-default mb-4">
              Next-Gen IT Solutions
              <ChevronRight size={16} className="text-slate-400" />
            </div> */}

            <h1 className="reveal-text text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Transform IT,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
                Intelligently.
              </span>
            </h1>

            <p className="reveal-text text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mb-10 text-balance">
              Turning IT into a future-ready, intelligent digital engine. AI-driven automation that modernizes systems and workflows.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="reveal-btn">
                <ModernCapsuleCTA 
                  href="/contact#form" 
                  text="Schedule a Consultation" 
                />
              </div>
              {/* <Link 
                href="/services" 
                className="reveal-btn inline-flex items-center gap-1.5 text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors group"
              >
                Explore Services
                <ChevronRight size={18} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              </Link> */}
            </div>
          </div>

          {/* Right Content - Modern Stacked Cards */}
          <div className="relative flex justify-center lg:justify-end items-center h-[380px] sm:h-[450px]">
            
            {/* Subtle background lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none -z-10">
               <div className="absolute inset-x-10 inset-y-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 19px, #6366f1 20px)" }} />
            </div>

            <div className="relative w-full max-w-md flex flex-col items-center">
              {stackedCards.map((cap, i) => {
                const isCenter = i === 1;
                return (
                  <div 
                    key={i} 
                    className="card-stack-enter w-full flex justify-center relative"
                    style={{
                      marginTop: i > 0 ? "-24px" : "0", 
                      zIndex: isCenter ? 20 : 10
                    }}
                  >
                    <div 
                      className={`relative w-full sm:w-[90%] p-5 sm:p-6 rounded-[2rem] backdrop-blur-xl border ${
                        isCenter 
                          ? "bg-white/95 border-indigo-100 shadow-2xl scale-[1.05]" 
                          : "bg-white/60 border-white/50 shadow-lg scale-95 opacity-50 blur-[0.5px]"
                      }`}
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl ${
                          isCenter ? 'bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-md' : 'bg-slate-100/80 text-slate-400'
                        }`}>
                           <cap.icon size={22} strokeWidth={isCenter ? 2 : 1.5} />
                        </div>
                        <div className="flex flex-col pt-1">
                          <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isCenter ? 'text-slate-900' : 'text-slate-600'}`}>
                            {cap.title}
                          </h3>
                          <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${isCenter ? 'text-slate-500' : 'text-slate-500'}`}>
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>

      {/* ── Bottom Trusted By Marquee ── */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pb-12 relative z-10">
        {/* <h3 className="trusted-by-title text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 px-2">
          Trusted By
        </h3> */}
        
        <div 
          ref={marqueeRef}
          className="trusted-by-marquee relative w-full overflow-hidden py-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <div className="flex w-max items-center gap-12 lg:gap-24 px-12">
            {totalPartners.map((partner, idx) => (
              <div 
                key={idx} 
                className="shrink-0 hover:opacity-100transition-all duration-500"
              >
                <div className="relative h-6 lg:h-9 w-24 lg:w-32">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
