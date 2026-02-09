'use client';

import Section from "@/components/layouts/Section";
import { MessageCircle, Calendar} from "lucide-react";
import Link from "next/link";
import Heading from "@/components/Heading";
export default function HeroSection() {
  return (
    <Section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#010518]">
      
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,96,110,0.35)_0%,rgba(1,5,24,0.85)_40%,#010518_75%,#000000_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <Heading
                  headline=" We&apos;re Just One Message Away"
                  maxWidth='max-w-[800]'
                  color="white"
                />
        <p className="mt-3 text-gray-200 leading-normal text-[16px] sm:text-[17px] md:text-[18px] font-normal tracking-[0.02em]">
          You&apos;re not reaching out to a call center — you&apos;re connecting with a real person who
          understands technology, timelines, and business priorities.
          Let&apos;s start solving, together.
        </p>
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={'/contact#form'} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#010518] text-sm font-medium shadow-md hover:bg-gray-100 transition pointer-cursor">

            <MessageCircle className="w-4 h-4" />
            Talk to our team Now
          </Link>
        </div>
      </div>
    </Section>
  );
}
