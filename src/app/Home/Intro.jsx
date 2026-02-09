"use client";

import React, { useRef, useLayoutEffect } from "react";
import Section from "@/components/layouts/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const text =
  "At i-Connectresources, we support institutions, enterprises and governments across the globe in achieving scale and operational excellence. Our mission is to ensure future readiness through structured consulting, technology enablement and advanced capability development.";

const Intro = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const chars = textRef.current.querySelectorAll(".char");
    const statItems = statsRef.current.querySelectorAll(".stat-item");

    const ctx = gsap.context(() => {
      // 1. Existing Text Color Animation
      gsap.fromTo(
        chars,
        { color: "#94a3b8", opacity: 0.2 },
        {
          color: "#0f172a",
          opacity: 1,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // 2. New Stats Animation: Bottom to Top + Blur to Clear
      gsap.fromTo(
        statItems,
        {
          y: 60,            // Start 60px below
          opacity: 0,       // Start invisible
          filter: "blur(10px)", // Start blurry
        },
        {
          y: 0,             // Move to original position
          opacity: 1,       // Fade in
          filter: "blur(0px)", // Clear up
          duration: 1.2,
          stagger: 0.2,     // Animate one after another
          ease: "power4.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 60%", // Animation starts when the stats section enters the viewport
            // toggleActions: "play none none reverse", // Plays forward on enter, reverses on leave
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="intro" size="lg" background="bg-[#f3f3f3]">
      <div ref={containerRef} className="container px-6 mx-auto flex flex-col items-center">
        
        {/* Top: Center Aligned Intro */}
        <div className="mb-16 md:mb-10">
          {/* <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px] text-center block">
            Our Purpose
          </span> */}
          
          <h3 
            ref={textRef} 
            className="text-xl md:text-2xl lg:text-[32px] leading-[1.6] text-center font-medium font-playfair"
          >
            {text.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-block mr-[0.3em] whitespace-nowrap">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="char inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h3>
        </div>

        {/* Bottom: Horizontal Stats Row */}
        <div 
          ref={statsRef} 
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16 border-t border-slate-200"
        >
          {[
            { label: "Years of Experience", val: "20+", desc: "A legacy of trust and excellence." },
            { label: "Global Clients", val: "10+", desc: "Transforming enterprises worldwide." },
            { label: "Skilled Professionals", val: "100+", desc: "Dedicated experts driving innovation." },
          ].map((stat, i) => (
            <div key={i} className="stat-item flex flex-col items-center text-center">
              <p className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter mb-4">
                {stat.val}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-[13px] text-slate-500 max-w-[200px] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Intro;