'use client';
import React from 'react'
import Image from "next/image";
import Section from "@/components/layouts/Section"; // Ensure this path is correct
import Heading from '@/components/Heading';
export default function ServiceGrid() {
  return (
    <Section className="w-full bg-white overflow-hidden">
      {/* Header Section */}
      <div className="container mx-auto text-center px-4 mb-12 md:mb-16">
        <Heading
          maxWidth='max-w-[900]'
          headline="Your  Vision,Our Capability"
        />
 </div>
      {/* GRID CONTAINER 
        - Mobile: 1 column (Stacking)
        - Desktop: 12 columns (Overlapping)
      */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center">
        
        {/* 1. IMAGE AREA 
          - Mobile: Simple block 
          - Desktop: Spans cols 6-12, Row 1 (Right Side)
        */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg md:col-span-7 md:col-start-6 md:row-start-1 z-0">
          <Image
            src="/Services/ourcapability.png"
            alt="Service background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for image contrast */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* 2. CONTENT CARD 
          - Mobile: Pushes up (-mt-12) to overlap image slightly
          - Desktop: Spans cols 1-6, Row 1 (Left Side). 
            Because it shares 'row-start-1' with the image, it overlaps it.
        */}
        <div className="relative z-10 mx-4 -mt-12 md:mt-0 md:mx-0 md:col-span-6 md:col-start-1 md:row-start-1 lg:col-start-1 lg:col-span-7">
          <div className="bg-blue-50/90 backdrop-blur-sm border border-white/40 p-6 md:p-8  rounded-xl shadow-md">
            
            {/* Tagline */}
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
              Our Capability
            </p>

            {/* Main Text */}
            <p className="card-heading-title text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
              At <span className="font-semibold text-gray-900">i-Connectresources</span>, 
              we help enterprises and government agencies modernize operations through powerful IT services, 
              platform integrations, and digital process automation. 
              <br /><br />
              We don’t just <span className="text-gray-900 font-medium">“deploy software”</span> — we build 
              outcome-driven ecosystems that accelerate ROI, reduce manual effort, and improve compliance at scale.
            </p>

            {/* Team Section */}

          </div>
        </div>

      </div>
    </Section>
  );
}