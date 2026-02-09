'use client';
import React from 'react'
import Image from "next/image";
import Section from "@/components/layouts/Section";
import items from "@/constants/constwhyClientStay";
import Heading from '@/components/Heading';
export default function WhyClientStayWithUs() { 
  return (
    <Section background="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/Services/clientstay.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-950/85 to-blue-900/80" />
      {/* Content */}
      <div className="relative z-10 container mx-auto md:mt-2">
        <Heading 
        color = "white"
        headline='Why Clients Stay With Us'
        maxWidth='2xl'
        />
        <h2 className="text-center text-white text-3xl sm:text-[48px] font-light mb-8">
          
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <div
      key={item.id}
      className="group relative w-full max-w-sm rounded-xl border border-sky-400/40 bg-white/15 p-6 transition hover:border-sky-400 hover:bg-white/20 mx-auto"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-sky-500/10">
        <item.icon className="h-6 w-6 text-white/75" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-white/80 leading-relaxed">
        {item.desc}
      </p>

      {/* Hover Accent */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-sky-400 opacity-0 transition group-hover:opacity-100" />
    </div>
  ))}
</div>

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 w-full h-1 bg-[#3A67F8]" />
    </Section>
  );
}
