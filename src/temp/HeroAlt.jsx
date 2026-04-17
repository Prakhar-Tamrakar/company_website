"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Bot,
  ShieldCheck,
  Layers,
  Activity,
  Cpu,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   CONTENT  (unchanged from Hero.jsx)
───────────────────────────────────────────── */
const capabilities = [
  {
    Icon: Bot,
    title: "AI-Driven Automation",
    desc: "AI-driven efficiency, reduced manual effort.",
    color: "#3B82F6",
  },
  {
    Icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Built for regulated industries and growth-focused businesses.",
    color: "#8B5CF6",
  },
  {
    Icon: Layers,
    title: "Digital Transformation",
    desc: "Modernize legacy IT systems with intelligent workflows.",
    color: "#06B6D4",
  },
  {
    Icon: Activity,
    title: "Proactive Managed Services",
    desc: "24/7 monitoring, predictable SLAs, continuous optimization.",
    color: "#10B981",
  },
  {
    Icon: Cpu,
    title: "Platform Expertise",
    desc: "ServiceNow, Microsoft 365, UiPath & others.",
    color: "#F59E0B",
  },
];

const slides = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200", // Bright, modern IT teamwork / laptops
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200", // Bright tech collaboration
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200", // Female tech professional in a well-lit environment
];

/* ─────────────────────────────────────────────
   DECORATIVE SVG ILLUSTRATIONS
───────────────────────────────────────────── */
function CircuitIllustration() {
  return (
    <svg
      className="absolute -top-8 -left-8 w-32 h-32 opacity-30 pointer-events-none"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="#3B82F6"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <circle
        cx="60"
        cy="60"
        r="40"
        stroke="#3B82F6"
        strokeWidth="0.6"
        strokeDasharray="4 6"
      />
      <circle cx="60" cy="60" r="6" fill="#3B82F6" fillOpacity="0.4" />
      <line
        x1="60"
        y1="5"
        x2="60"
        y2="30"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="115"
        y1="60"
        x2="90"
        y2="60"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="115"
        x2="60"
        y2="90"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="5" r="3" fill="#3B82F6" />
      <circle cx="115" cy="60" r="3" fill="#3B82F6" />
    </svg>
  );
}

function DotsGrid() {
  return (
    <svg
      className="absolute -bottom-6 -right-6 w-28 h-28 opacity-20 pointer-events-none"
      viewBox="0 0 80 80"
      fill="none"
    >
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="2.5"
            fill="#3B82F6"
          />
        )),
      )}
    </svg>
  );
}

function WaveArc() {
  return (
    <svg
      className="absolute top-1/2 -right-10 -translate-y-1/2 w-20 h-40 opacity-20 pointer-events-none"
      viewBox="0 0 40 120"
      fill="none"
    >
      <path
        d="M10 10 Q30 30 10 50 Q-10 70 10 90 Q30 110 10 130"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 5 Q40 25 20 45 Q0 65 20 85 Q40 105 20 125"
        stroke="#8B5CF6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        fill="none"
      />
    </svg>
  );
}

function FloatingOrb({ className }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    />
  );
}

/* ─────────────────────────────────────────────
   CAPABILITY CARD (inside image overlay)
───────────────────────────────────────────── */
function CapabilityCard({ cap, active, onClick }) {
  const { Icon, title, desc, color } = cap;
  return (
    <button
      onClick={onClick}
      className={`flex items-start gap-3 w-full text-left rounded-xl px-3 py-2.5 transition-all duration-300 ${
        active ? "bg-white/20 ring-1 ring-white/30" : "hover:bg-white/10"
      }`}
    >
      <div
        className="shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${color}22` }}
      >
        <Icon size={15} style={{ color }} />
      </div>
      <div>
        <p className="text-white text-sm font-semibold leading-tight">
          {title}
        </p>
        {active && (
          <p className="text-white/60 text-xs leading-relaxed mt-0.5">{desc}</p>
        )}
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function HeroAlt() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  /* Auto-cycle capability highlight */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((p) => (p + 1) % capabilities.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  /* Auto-cycle background image */
  useEffect(() => {
    const t = setInterval(() => {
      setImgIdx((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  /* Entrance animations */
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(leftRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      }).from(
        rightRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      {/* ── Background decorative orbs ── */}
      <FloatingOrb className="w-[500px] h-[500px] bg-blue-400 -top-32 -left-40" />
      <FloatingOrb className="w-[350px] h-[350px] bg-indigo-300 bottom-0 right-0" />

      {/* ── Subtle grid texture ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:80px_100%]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:100%_80px]" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center mt-10">
        {/* ════════════════════════════════
            LEFT — Content
        ════════════════════════════════ */}
        <div ref={leftRef} className="lg:col-span-5 flex flex-col space-y-8">
          {/* Badge */}
          {/* <div className="w-fit flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
              Next-Gen IT Solutions
            </span>
          </div> */}

          {/* Headline — UNCHANGED */}
          <h2 className="heading-default text-4xl sm:text-5xl lg:text-6xl font-regular leading-[1.05] text-slate-900">
            Transform IT{" "}
            <span className="relative">
              <span className="relative z-10">Intelligently</span>
              {/* Underline accent */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q50 1 100 5 Q150 9 200 4"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Sub-text — UNCHANGED */}
          <p className="content-default text-base sm:text-lg leading-relaxed text-slate-500 max-w-md">
            Turning IT into a future-ready, intelligent digital engine.
            AI-driven automation that modernizes systems and workflows.
          </p>

          {/* Stats bar */}
          <div className="flex gap-8 pt-2 border-t border-slate-100">
            {[
              { n: "20+", label: "Years of Experience" },
              { n: "90+", label: "Professionals" },
              { n: "10+", label: "Global Clients" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-900">{n}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* CTA — UNCHANGED */}
          <div className="flex items-center gap-4 flex-wrap">
            <ModernCapsuleCTA
              href="/contact#form"
              text="Schedule a Consultation"
            />
          </div>
        </div>

        {/* ════════════════════════════════
            RIGHT — Image + Decorations
        ════════════════════════════════ */}
        <div
          ref={rightRef}
          className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
        >
          {/* ── Decorative SVG Illustrations ── */}
          <CircuitIllustration />
          <DotsGrid />
          <WaveArc />

          {/* ── Blue glow behind image ── */}
          <div className="absolute inset-6 bg-blue-600/15 rounded-3xl blur-2xl" />

          {/* ── Main image frame ── */}
          <div className="relative w-full max-w-160 rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-200/60 transition-all duration-500">
            {/* Image with crossfade */}
            <div className="relative w-full aspect-[4/3.5] lg:aspect-[4/3]">
              {slides.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Hero slide ${i + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    i === imgIdx ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
              {/* gradient vignette */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            </div>

            {/* ── Capabilities overlay panel ── */}
            <div
              className="absolute bottom-6 left-6 p-4 rounded-3xl shadow-2xl w-[260px] sm:w-[300px]"
              style={{
                background: "rgba(10, 20, 50, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-[2px] bg-blue-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Capabilities
                  </span>
                </div>
                {/* Slide indicator dots */}
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === imgIdx ? "w-4 bg-white" : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Capability list — rolling window of 3 */}
              <div className="flex flex-col gap-1">
                {[0, 1, 2].map((offset) => {
                  const idx = (activeIdx + offset) % capabilities.length;
                  const cap = capabilities[idx];
                  return (
                    <CapabilityCard
                      key={cap.title}
                      cap={cap}
                      active={offset === 0}
                      onClick={() => setActiveIdx(idx)}
                    />
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── Floating accent chip (top-right corner) ── */}
          <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-slate-100 z-20">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">
                AI-Powered
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Automation Engine
              </p>
            </div>
          </div>

          {/* ── Floating accent chip (bottom-left corner) ── */}
          <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-slate-100 z-20">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
              <Activity size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">
                24/7 Monitoring
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                SLA Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
