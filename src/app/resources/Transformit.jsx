"use client";

import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/layouts/Section";

export default function HeroSection() {
  return (
    <Section
      className="relative w-full flex items-center justify-center overflow-hidden bg-[#010518] py-10 md:py-16 lg:py-20"
      size="lg"
    >
      {/* Background Glow - Dynamic sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-32 bg-blue-500/10 blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6">
        {/* Minimalist Glass Panel */}
        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            
            {/* Left Side: Content */}
            <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-blue-400 font-bold">
                  Scale Your Business
                </span>
              </div>

              {/* Responsive Typography: 3xl -> 4xl -> 5xl */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-playfair leading-[1.2]">
                Transform Your <br className="hidden lg:block" />
                IT Operations
              </h2>

              <p className="max-w-xl mx-auto md:mx-0 text-gray-400 text-sm sm:text-base leading-relaxed">
                Achieve measurable results through enterprise automation and
                platform innovation with{" "}
                <span className="text-white font-medium">
                  i-Connectresources
                </span>.
              </p>
            </div>

            {/* Right Side: Action */}
            <div className="shrink-0 flex flex-col gap-4 w-full md:w-auto">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#010518] text-sm font-bold transition-all hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
              >
                <Calendar className="w-4 h-4" />
                <span className="whitespace-nowrap">Schedule Strategy Call</span>
              </Link>

              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors py-2"
              >
                Explore all solutions 
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
}
