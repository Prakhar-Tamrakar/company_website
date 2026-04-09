"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/layouts/Section";

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef = useRef(null);
  const underlineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===============================
       1️⃣ HEADING ANIMATION (NO SCRUB)
       =============================== */
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // 👈 appears early
          toggleActions: "play none none none",
        },
      });

      headingTl
        .from(".journey-word-inner", {
          yPercent: 100,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06,
        })
        .to(
          underlineRef.current,
          {
            scaleX: 1,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );

      /* ===============================
       2️⃣ TIMELINE SCROLL (PIN + SCRUB)
       =============================== */
      gsap.to(trackRef.current, {
        xPercent: -83,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%", // 👈 starts AFTER heading
          end: "+=1200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            gsap.to(trackRef.current, { opacity: 1, duration: 0.4 });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="journey" background="bg-[#010518]" size="xl">
      {/* SECTION TO PIN */}
      <div ref={sectionRef} className="relative min-h-screen  overflow-hidden">
        {/* ================= HEADING ================= */}
        <div className="container">
          <div ref={headingRef} className=" mb-20">
            {/* Animated Headline */}
            <h2 className="text-3xl md:text-[48px] font-playfair text-white mb-4 leading-tight">
              {"Our Journey".split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <span className="journey-word-inner inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>

            {/* Underline */}
            <div
              ref={underlineRef}
              className="h-[3px] w-[200px] bg-white origin-left scale-x-0 mb-4"
            />

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="card-white-subtitle opacity-0 translate-y-6"
            >
              Our journey reflects a consistent commitment to excellence,
              strategic growth, and purposeful innovation. What began as a
              vision has matured into a trusted technological partner for
              enterprises and public sector organizations worldwide. Each phase
              of our evolution demonstrates our focus on capability expansion,
              operational scalability, and value-driven outcomes. Guided by
              expertise and strengthened by experience, we continue to advance
              with a clear mission: to enable organizations to operate with
              precision, efficiency, and resilience in an increasingly digital
              and interconnected world.
            </p>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="container relative">
          <div
            ref={trackRef}
            className="flex gap-24 w-max will-change-transform opacity-0"
          >
            <TimelineCard
              year="2006"
              title="The Beginning of Vision"
              description="What started as a bold idea to bridge critical gaps in IT service delivery soon became a mission to empower businesses through smarter technology."
            />

            <TimelineCard
              year="2018"
              title="Expanding Horizons"
              description="With growing expertise and a passion for innovation, we expanded into enterprise automation and ServiceNow, redefining efficiency across industries"
            />

            <TimelineCard
              year="2020"
              title="Transforming Healthcare"
              description="Delivered 10+ customized automation solutions for healthcare — driving precision, reliability, and better patient outcomes through intelligent workflows."
            />

            <TimelineCard
              year="2021"
              title="Scaling Impact"
              description="What started as a bold idea to bridge critical gaps in IT service delivery soon became a mission to empower businesses through smarter technology."
            />

            <TimelineCard
              year="Current"
              title="AI-Driven Innovation"
              description="Continuing to grow, innovate, and deliver impactful technology solutions powered by AI and Automation for our clients across the globe."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineCard({ year, title, description }) {
  return (
    <div className="min-w-[320px] max-w-[360px]">
      <span className="text-4xl md:text-7xl   text-primary block mb-6">
        {year}
      </span>
      <h3 className="card-white-heading-title">{title}</h3>
      <p className="card-white-subtitle">{description}</p>
    </div>
  );
}
