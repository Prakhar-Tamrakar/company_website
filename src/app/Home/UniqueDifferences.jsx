import React from "react";
import { Target, Cpu, Layers, ShieldCheck, Building2 } from "lucide-react";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";

// cn helper
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Frame() {
  const differentiators = [
    {
      icon: Target,
      title: "Outcome-Driven Approach",
      description:
        "We engineer end-to-end digital experiences that deliver measurable business value.",
      span: "lg:col-span-2",
    },
    {
      icon: Cpu,
      title: "Automation-First DNA",
      description:
        "Every engagement is rooted in workflow automation, AI/ML, and GenAI for efficiency.",
      span: "lg:col-span-2",
    },
    {
      icon: Layers,
      title: "Flexible & Scalable Engagements",
      description:
        "On-demand, deliverable-based services designed to scale with your business.",
      span: "lg:col-span-2",
    },
    {
      icon: ShieldCheck,
      title: "Proven High-Stakes Delivery",
      description:
        "Trusted across mission-critical projects where reliability matters most.",
      span: "lg:col-span-3",
    },
    {
      icon: Building2,
      title: "Trusted Across Industries",
      description:
        "Built for Government, Healthcare, and Enterprise with compliance and security.",
      span: "lg:col-span-3",
    },
  ];

  return (
    <Section
      id="differentiators"
      size="xl"
      background="bg-[#010518]"
      className="relative overflow-hidden px-4 "
    >
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:240px_100%]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_240px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <Heading
          headline="Our Unique Differentiators"
          subHeadline="Enterprise-grade solutions built for scale."
          color="white"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  "border border-white/10 bg-white/5 backdrop-blur-md",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:border-white/30",
                  item.span
                )}
              >
                {/* TOP-RIGHT CONCENTRIC CIRCLES */}
                <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 overflow-hidden">
                  <div className="absolute -top-28 -right-28 w-56 h-56 rounded-full bg-white/5 scale-75 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute -top-22 -right-22 w-44 h-44 rounded-full bg-white/10 scale-75 transition-transform duration-700 group-hover:scale-120" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-white/25  scale-75 transition-transform duration-700 group-hover:scale-135" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 group-hover:bg-white/10 group-hover:text-white transition">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div className="relative w-fit">
                    <h3 className="card-white-heading-title">
                      {item.title}
                    </h3>
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </div>

                  <p className="card-subtitle">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

