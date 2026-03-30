"use client";
import React, { useRef } from "react";
import Section from "@/components/layouts/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const paragraphRef = useRef(null);
  const metricsRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          paragraphRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          metricsRef.current.children,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          imageRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <Section id="intro" size="xl">
      <div className="container" ref={containerRef}>
        {/* ===== TWO COLUMN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ---------- LEFT: Content + Metrics ---------- */}
          <div className="space-y-10">
            {/* Intro Text */}
            <div className="space-y-4 sm:space-y-6">
              <h2
                ref={textRef}
                className="heading-default text-3xl md:text-4xl lg:text-5xl font-regular leading-tight text-slate-900"
              >
                Enabling Scalable Excellence for a{" "}
                <br className="hidden sm:block" />
                <span className="font-medium ">Future-Ready World</span>
              </h2>

              <p
                ref={paragraphRef}
                className="content-default text-base sm:text-base leading-relaxed text-slate-600"
              >
                At i-Connectresources, we support institutions, enterprises and
                governments across the globe in achieving scale and operational
                excellence. Our mission is to ensure future readiness through
                structured consulting, technology enablement and advanced
                capability development.
              </p>
            </div>

            {/* Metrics */}
            <div
              ref={metricsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-slate-100"
            >
              <div className="border-l-4 border-slate-200 pl-5">
                <div className="text-3xl font-semibold text-slate-900">20+</div>
                <p className="text-xs font-semibold uppercase text-blue-700 mt-1">
                  Experience
                </p>
                <p className="text-base text-slate-500 mt-2 leading-relaxed">
                  A legacy of trust and global excellence.
                </p>
              </div>

              <div className="border-l-4 border-slate-200 pl-5">
                <div className="text-3xl font-semibold text-slate-900">10+</div>
                <p className="text-xs font-semibold uppercase text-blue-700 mt-1">
                  Global Clients
                </p>
                <p className="text-base text-slate-500 mt-2 leading-relaxed">
                  Transforming major enterprises worldwide.
                </p>
              </div>

              <div className="border-l-4 border-slate-200 pl-5">
                <div className="text-3xl font-semibold text-slate-900">90+</div>
                <p className="text-xs font-semibold uppercase text-blue-700 mt-1">
                  Professionals
                </p>
                <p className="text-base text-slate-500 mt-2 leading-relaxed">
                  Expert minds driving tech innovation.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT: Visual ---------- */}
          <div
            ref={imageRef}
            className="overflow-hidden rounded-2xl aspect-video sm:aspect-square relative group bg-slate-900 w-full sm:max-w-md lg:max-w-none mx-auto shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
              alt="Corporate Workspace"
              className="object-cover w-full h-full "
            />

            {/* Soft tint */}
            <div className="absolute inset-0 bg-blue-900/5" />

            {/* Glass highlight */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent" />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

            {/* Hover shadow */}
            <div className="absolute inset-0 transition duration-500 group-hover:shadow-2xl group-hover:shadow-black/50" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
