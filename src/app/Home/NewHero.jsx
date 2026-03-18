"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";


import Image from "next/image";

import microsoftLogo from "../../../public/logos/MicrosoftLogo.png";
import appianLogo from "../../../public/logos/appianLogo.png";
import servicenowLogo from "../../../public/logos/ServiceNowLogo.png";
import gluwareLogo from "../../../public/logos/gluwareLogo.png";
import uipathLogo from "../../../public/logos/UiPath-Logo.png";

/* -------- Partner list -------- */
const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "UiPath", logo: uipathLogo },
  { name: "Gluware", logo: gluwareLogo },
  { name: "Appian", logo: appianLogo },

  // duplicate for smooth loop
  { name: "Microsoft", logo: microsoftLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "UiPath", logo: uipathLogo },
  { name: "Gluware", logo: gluwareLogo },
  { name: "Appian", logo: appianLogo },
];

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HeroNewSection() {
  const container = useRef(null);

  // Mouse tracking for grid glow
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [gridSize, setGridSize] = useState(80);

  /* ---------------- Responsive Grid Size ---------------- */
  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth < 640)
        setGridSize(40); // mobile
      else if (window.innerWidth < 1024)
        setGridSize(60); // tablet
      else setGridSize(80); // desktop
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  /* ---------------- Mouse Tracking ---------------- */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!container.current) return;
      const rect = container.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ---------------- GSAP ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitText(".hero-title", { type: "words" });
      const subtitleSplit = new SplitText(".hero-subtitle", { type: "lines" });

      const tl = gsap.timeline();

      tl.from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.035,
      });

      tl.from(
        subtitleSplit.lines,
        {
          opacity: 0,
          yPercent: 80,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
        },
        "-=0.4",
      );

      tl.from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2",
      );

      gsap.to(".hero-content", {
        y: 80,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="Hero"
      className="relative  py-36 sm:py-24 md:py-28 lg:py-36  w-full bg-white overflow-hidden flex items-center justify-center"
    >
      {/* -------- AMBIENT BACKGROUND -------- */}
     
      <div
        className="absolute inset-0 pointer-events-none z-2"
        style={{
          background: `
      radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 65%,
        rgba(255, 255, 255, 1) 75%
      )
    `,
        }}
      />

      {/* -------- GRID LAYER -------- */}
      <div className= "  absolute inset-0 pointer-events-none">
        {/* Base grid */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.88) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.88) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
          }}
        />

        {/* Reactive grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            WebkitMaskImage: `
              linear-gradient(to top, black 20%, transparent 85%),
              radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 70%)
            `,
            maskImage: `
              linear-gradient(to top, black 20%, transparent 85%),
              radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 35%, transparent 70%)
            `,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />
      </div>

      {/* -------- CONTENT -------- */}
      <div className="hero-content container relative z-10 px-4 sm:px-6 text-center">
        
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-regular  tracking-tight text-slate-900 leading-normal mb-8">
          Where <span className="font-playfair italic">Innovation</span> Meets <span className="font-playfair italic"> Purpose —</span>
          <br className="hidden md:block" />
          IT That Moves Your <span className="font-playfair italic">Business Forward</span>
        </h1>

        <p className="hero-subtitle max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed mb-12">
          We partner with forward-thinking enterprises and government agencies
          to deliver smarter, scalable IT solutions that solve real-world
          challenges.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0">
          
          <ModernCapsuleCTA href="/contact" text="Schedule a Consultation" />
          {/* <ModernCapsuleCTA href="/services" text="Explore Services" theme="light"/> */}
        </div>

        {/* -------partnership--------- */}


        <div className=" mx-auto mt-8 md:mt-12 lg:mt-16  max-w-2xl md:max-w-4xl lg:max-w-5xl relative overflow-hidden">
        {/* -------- Fade overlays -------- */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />

        {/* -------- Marquee -------- */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {partners.map((partner, index) => (
              <PartnerItem
                key={index}
                name={partner.name}
                logo={partner.logo}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
function PartnerItem({ name, logo }) {
  return (
    <div className="flex items-center justify-center min-w-40 opacity-90 hover:opacity-100 transition">
      <Image
        src={logo}
        alt={`${name} logo`}
        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
        priority={false}
      />
    </div>
  );
}
