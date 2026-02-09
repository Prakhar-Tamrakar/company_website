"use client";

import React from "react";
import {
  Target,
  Cpu,
  Layers,
  ShieldCheck,
  Building2,
} from "lucide-react";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";

// cn helper
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Diversity() {
  const differentiators = [
    {
      icon: Target,
      title: "Early Career & Returnship Programs",
      description:
        "We open doors for students, fresh graduates, and professionals returning to work — helping them grow with guidance, learning, and real opportunities.",
      span: "lg:col-span-2",
    },
    {
      icon: Cpu,
      title: "Neurodiversity",
      description:
        "We value unique ways of thinking. By embracing neurodiverse talent, we bring fresh perspectives and creative problem-solving to every challenge.",
      span: "lg:col-span-2",
    },
    {
      icon: Layers,
      title: "Equal Pay for Equal Work",
      description:
        "Fairness defines us. We ensure equal pay and opportunity for everyone, recognizing talent and contribution — not background.",
      span: "lg:col-span-2",
    },
    {
      icon: ShieldCheck,
      title: "Women in Tech",
      description:
        "We’re dedicated to creating equal opportunities for women in technology — supporting leadership, mentorship, and innovation to help them thrive and inspire others.",
      span: "lg:col-span-3",
    },
    {
      icon: Building2,
      title: "Multilingual, Multicultural Collaboration",
      description:
        "Diverse voices make us stronger. We collaborate across languages and cultures, driving ideas that work globally and connect people everywhere.",
      span: "lg:col-span-3",
    },
  ];

  return (
    <Section
      id="differentiators"
      size="xl"
      background="bg-[#010518]"
      className="relative overflow-hidden px-4"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[240px_100%]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100%_240px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <Heading
          headline="Our Strength Is in Our Diversity"
          subHeadline="Every voice matters.Every idea counts. That’s how we turn diversity into innovation."
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
                {/* Decorative circles */}
                <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 overflow-hidden">
                  <div className="absolute -top-28 -right-28 w-56 h-56 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -top-14 -right-14 w-32 h-32 rounded-full bg-white/25 transition-transform duration-700 group-hover:scale-150" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  {/* Title + underline */}
                  <div className="relative w-fit">
                    <h3 className="card-white-heading-title">
                      {item.title}
                    </h3>

                    {/* snap line */}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-white to-white/40 transition-all duration-500 ease-out group-hover:w-full"/>
                  </div>

                  {/* Description */}
                  <p className="card-white-subtitle">
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
