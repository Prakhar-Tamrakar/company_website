"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "@/components/layouts/Section";
import { Zap, Shield, Award, Cpu, Target } from 'lucide-react';

const features = [
  { number: '01', icon: Zap, title: 'Transformation-First', description: "Modernizing legacy environments into intelligent digital ecosystems via AI-enabled operations." },
  { number: '02', icon: Shield, title: 'Secure & Compliant', description: "Designed for high-stakes environments where resilience and security are non-negotiable." },
  { number: '03', icon: Award, title: 'Enterprise Expertise', description: "Proven experience across ServiceNow, Microsoft 365, and UiPath — built to scale." },
  { number: '04', icon: Cpu, title: 'Automation & Efficiency', description: "Eliminating inefficiencies and accelerating decision-making through intelligent automation." },
  { number: '05', icon: Target, title: 'Managed Accountability', description: "Proactive monitoring and defined SLAs — we manage and optimize what we build." },
];

gsap.registerPlugin(ScrollTrigger);

export default function WhyClientsChooseUs() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);

  useGSAP(() => {
    // Only pin on desktop (lg breakpoint is 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 20%", // Pin when the top of the section hits the top of the viewport
        end: "bottom bottom", // Unpin when the bottom of the section hits the bottom of the viewport
        pin: leftColRef.current,
        pinSpacing: false, // Prevents GSAP from adding extra padding to the container
        scrub: true,
      });
    });

    return () => mm.revert(); // Cleanup
  }, { scope: sectionRef });

  return (
    <Section id="why-choose-us" size="xl" background="bg-white">
      <div ref={sectionRef} className="container grid lg:grid-cols-12 gap-12 items-start relative min-h-screen">
        
        {/* --- Left Column: GSAP Pinned Heading --- */}
        <div ref={leftColRef} className="lg:col-span-5 ">
          <div className="">
            
          </div>
          <h2 className="text-5xl  font-regular heading-default mb-8 ">
            WHY <br /> CHOOSE US
          </h2>
          <p className="text-lg content-default mb-10 max-w-sm font-medium leading-relaxed">
            We deliver enterprise-grade IT solutions backed by decades of expertise and an unwavering commitment to excellence.
          </p>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>

        {/* --- Right Column: Scrolling Content --- */}
        <div className="lg:col-span-7 space-y-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 border border-slate-100 p-10 lg:p-14 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] font-bold opacity-[0.03] text-primary pointer-events-none select-none">
                {feature.number}
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-8">
                <div className="size-14 lg:size-16 flex-shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100  transition-transform duration-500">
                  <feature.icon className="size-8 lg:size-10 text-primary" strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[12px] font-mono font-bold tracking-[0.3em] text-primary">{feature.number}</span>
                    <div className="h-px flex-1 bg-slate-200/50" />
                  </div>
                  <h3 className="text-lg  font-regular heading-default mb-4 tracking-tight uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-base lg:text-base leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}