"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";
import Section from "@/components/layouts/Section";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Strategic Consulting and Institutional Enablement",
    step: "01",
    description:
      "We partner with institutions to strengthen governance frameworks, streamline decision-making processes, and improve operational efficiency. Our approach focuses on sustainable growth through structured planning, performance monitoring, and long-term institutional capability building.",
  },
  {
    id: 2,
    title: "Digital and AI Transformation",
    step: "02",
    description:
      "We help organizations modernize legacy systems and embrace intelligent technologies that drive measurable outcomes. From automation and analytics to AI-powered solutions, we enable data-driven decision-making, improved productivity, and scalable digital ecosystems.",
  },
  {
    id: 3,
    title: "Public Sector and Event Consulting",
    step: "03",
    description:
      "Our team supports government bodies and public institutions in planning and executing complex initiatives at scale. We combine technology, logistics expertise, and stakeholder coordination to ensure seamless delivery of high-impact programs and large-scale events.",
  },
  {
    id: 4,
    title: "Advanced Skill Development",
    step: "04",
    description:
      "We design and deliver future-ready training programs focused on emerging technologies such as AI, automation, and digital tools. Our initiatives aim to enhance workforce capabilities, bridge skill gaps, and empower individuals to thrive in rapidly evolving industries.",
  },
  {
    id: 5,
    title: "IT Infrastructure and Operations",
    step: "05",
    description:
      "We architect secure, resilient, and scalable IT environments that support business continuity and compliance requirements. From infrastructure design to ongoing operations management, we ensure reliability, performance, and protection against evolving cyber threats.",
  },
  {
    id: 6,
    title: "IT Staff Augmentation",
    step: "06",
    description:
      "We provide flexible access to highly skilled professionals who integrate seamlessly with your teams. Whether for short-term projects or long-term engagements, our talent solutions help accelerate delivery, reduce hiring overhead, and ensure technical excellence.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Only apply GSAP scroll effects on desktop (≥ 1024px)
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      // Show/hide side indicator within this section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 10%",
        end: "bottom 80%",
        onEnter: () => gsap.to(".services-indicator", { autoAlpha: 1 }),
        onLeave: () => gsap.to(".services-indicator", { autoAlpha: 0 }),
        onEnterBack: () => gsap.to(".services-indicator", { autoAlpha: 1 }),
        onLeaveBack: () => gsap.to(".services-indicator", { autoAlpha: 0 }),
      });

      // Pin images — panels 1–5 only
      [1, 2, 3, 4, 5].forEach((num) => {
        ScrollTrigger.create({
          trigger: `.panel-${num}`,
          start: "top top",
          end: "bottom top",
          pin: `.image-${num}`,
          pinSpacing: false,
        });
      });

      // Text entrance + upward parallax
      services.forEach((_, i) => {
        const num = i + 1;
        gsap.set(`.text-${num}`, { y: 80, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.panel-${num}`,
            start: "top 85%",
            end: "top -55%",
            scrub: true,
          },
        });

        tl.to(`.text-${num}`, { y: 0, opacity: 1, ease: "none" }).to(
          `.text-${num}`,
          { y: -100, ease: "none" },
        );
      });

      // Indicator dot active states
      services.forEach((_, i) => {
        const num = i + 1;
        gsap.to(`.dot-${num}`, {
          scale: 1.8,
          backgroundColor: "#12488e",
          scrollTrigger: {
            trigger: `.panel-${num}`,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="services"
      size="xl"
      background="bg-zinc-100/80"
      className="relative text-zinc-900"
    >
      {/* ── Section heading ── */}
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-10 lg:pb-14">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl heading-default">
              Services We Deliver
            </h2>
          </div>

          <div className="max-w-md">
            <p className="content-default text-base leading-relaxed">
              We design, build, and scale enterprise-grade digital solutions
              that help organizations innovate faster and strengthen security.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE / TABLET  (< lg)
          Simple stacked cards — no GSAP
      ══════════════════════════════════════ */}
      <div className="lg:hidden container space-y-8 pb-8">
        {services.map((s, i) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200"
          >
            {/* Image on top */}
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={`/Home/services_${i + 1}.jpg`}
                alt={s.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content below */}
            <div className="p-6 sm:p-8">
              <span className="text-primary font-light uppercase tracking-widest text-xs">
                our service
              </span>
              <h2 className="text-2xl sm:text-3xl font-regular mt-2 heading-default leading-snug">
                {s.title}
              </h2>
              <p className="mt-4 text-base content-default leading-relaxed">
                {s.description}
              </p>
              <div className="mt-6">
                <ModernCapsuleCTA
                  text="Explore All Services"
                  href="/services"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════
          DESKTOP  (≥ lg)
          GSAP pinned-image scroll effect
      ══════════════════════════════════════ */}
      <div ref={sectionRef} className="hidden lg:block">
        {/* Side progress indicator */}
        <div className="services-indicator fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 opacity-0 pointer-events-none">
          {services.map((s) => (
            <div
              key={s.id}
              className={`dot-${s.id} w-3 h-3 rounded-full border border-blue-500`}
            />
          ))}
        </div>

        {/* Panels */}
        {services.map((s, i) => (
          <div key={s.id} className={`panel-${i + 1} relative h-screen flex`}>
            {/* Image — pinned by GSAP */}
            <div
              className={`image-${i + 1} absolute inset-0 w-1/2 overflow-hidden`}
            >
              <img
                src={`/Home/services_${i + 1}.jpg`}
                className="h-screen w-full object-cover pr-5"
                alt={s.title}
              />
            </div>

            {/* Text — scrolls with parallax */}
            <div className="ml-auto w-1/2 flex items-center px-12">
              <div className={`text-${i + 1}`}>
                <span className="text-primary font-light uppercase tracking-widest text-xs">
                  our service
                </span>
                <h2 className="text-4xl font-regular mt-2 heading-default">
                  {s.title}
                </h2>
                <p className="mt-6 text-base content-default max-w-lg leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-10">
                  <ModernCapsuleCTA
                    text="Explore All Services"
                    href="/services"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
