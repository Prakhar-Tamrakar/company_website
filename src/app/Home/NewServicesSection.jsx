"use client";

import { ArrowRight, MoveRight } from "lucide-react";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import Link from "next/link";
import { useRef } from "react";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";

export default function ServicesGrid() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;

    // Calculate cursor position relative to the button
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set CSS variables for the glow position
    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const services = [
    {
      id: "01",
      title: "Strategic Consulting & Institutional Enablement",
      desc: "We enable institutions and organizations to scale sustainably by addressing structural, operational, and governance gaps through structured consulting models.",
      href: "/services/strategic-consulting",
    },
    {
      id: "02",
      title: "Digital & AI Transformation",
      desc: "We deliver AI-enabled, data-driven digital solutions that modernize operations and drive measurable business and operational transformation.",
      href: "/services/digital-ai-transformation",
    },
    {
      id: "03",
      title: "Public Sector & Event Consulting",
      desc: "We support State and Central Government bodies with large-scale public initiatives through technology-led planning, safety, and logistics execution.",
      href: "/services/public-sector-consulting",
    },
    {
      id: "04",
      title: "Advanced Skill Development",
      desc: "We deliver structured upskilling and innovation programs that build future-ready talent in AI, automation, and emerging technologies.",
      href: "/services/skill-development",
    },
    {
      id: "05",
      title: "IT Infrastructure & Operations",
      desc: "We design, build, and secure reliable IT infrastructure foundations that ensure resilience, compliance, and operational continuity.",
      href: "/services/it-infrastructure",
    },
    {
      id: "06",
      title: "IT Staff Augmentation",
      desc: "We provide on-demand access to specialized IT talent through flexible engagement models aligned to delivery and scale requirements.",
      href: "/services/staff-augmentation",
    },
  ];

  return (
    <Section id="services" size="xl" background="bg-[#F9FAFB]">
      {/* Heading already handles container width */}
      <Heading
        headline="Services We Deliver"
        subHeadline="Enterprise-grade solutions built for scale."
      />

      {/* Grid should live inside Section, not its own container */}
      <div className=" container  mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 ">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative  p-5 overflow-hidden bg-slate-200/40 rounded-2xl"
          >
            {/* Top border */}
            <span className="absolute top-0 left-0 h-0.5 w-full bg-slate-400/60 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

            {/* Bottom border */}
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-slate-400/60 scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />

            {/* Number bubble */}
            <div
              className="w-10 md:w-14 h-10 md:h-14 flex items-center justify-center rounded-xl    text-xs md:text-sm font-semibold text-white mb-10    bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,#1b5699_45%,#0f2f5c_100%)]   shadow-md shadow-blue-900/30transition-transform duration-300group-hover:scale-105"
            >
              {item.id}
            </div>

            <h3 className="text-cardheading text-lg sm:text-lg lg:text-2xl font-regular mb-2">
              {item.title}
            </h3>

            <p className="text-[#6B7280] text-sm md:text-[15px] leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* <a
              href={item.href}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Learn more <ArrowRight size={16} />
            </a> */}
          </div>
        ))}
      </div>
      <div className="container links flex justify-center mt-8">
        <ModernCapsuleCTA text="view Details" href="/services#NewServices" />
      </div>
    </Section>
  );
}
