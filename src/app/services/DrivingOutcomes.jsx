'use client';
import React from 'react'
import Image from "next/image";
import Section from "@/components/layouts/Section";
import Heading from '@/components/Heading';
export default function ServiceGrid() {
  return (
    <Section className="w-full bg-white overflow-hidden py-12 lg:py-20">
      
      {/* Header */}
      <div className="container text-primary  mx-auto text-center px-4 mb-12 md:mb-16">
        <Heading
         className='text-lg '
         maxWidth='max-w-[800px]'
          headline="Transforming Operations, Driving Outcomes"
        />
      </div>
      {/* GRID LAYOUT */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center">

        {/* 1. IMAGE (Now on the Right Side) 
           - Mobile: Full width
           - Desktop: Spans cols 5-12 (The right side of the grid)
        */}
        <div className="relative w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg md:col-span-7 md:col-start-1 md:row-start-1 z-0">
          <Image
            src="/Services/drivingoutcome.png"
            alt="Service background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 2. CONTENT CARD (Now on the Left Side)
           - Mobile: Stacks below image with -mt-12 overlap
           - Desktop: Spans cols 1-6 (The left side).
           - Overlap: Because Card ends at col 6 and Image starts at col 5, they overlap in the middle.
        */}
        <div className="relative z-10 mx-4 -mt-12 md:mt-0 md:mx-0 md:col-span-6 md:col-start-7 md:row-start-1 lg:col-start-6 lg:col-span-7">
          <div className="bg-blue-50/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-md border border-white/40">            
            {/* Tag */}
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
              Outcomes
            </p>

            {/* Description */}
            <p className="card-heading-title text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
              From <span className="font-semibold text-gray-900">automation to AI</span>, from enterprise platforms
              to custom-built solutions — we deliver what matters to your business.
            </p> 

          </div>
        </div>

      </div>
    </Section>
  );
}