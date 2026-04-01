'use client';
import React from 'react';
import Section from "@/components/layouts/Section";
import Image from "next/image";
import journey from '@/constants/constJourney';
import { FileText } from "lucide-react";
import Heading from '@/components/Heading';
import Link from 'next/link';
export default function YourJourney() {
  return (
    <Section className='w-full bg-white overflow-hidden py-12'>
      <div className="container mx-auto px-4 text-center">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <Heading
          headline="Your Journey Begins Here"
          subHeadline="Whether you&apos;re in the exploration phase or need a full-scale delivery partner — we&lsquo;re ready."
          maxWidth='2xl'
        />
        </div> 
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {journey.map((item) => (
            <div
              key={item.id}
              className="group w-full max-w-sm bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md  hover:border-blue-100/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Wrapper */}
              <div className="relative h-48 sm:h-56 w-full shrink-0">
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-out group-hover:scale-99"
                  src={item.img}
                  alt={item.heading} // Better accessibility using dynamic alt text
                  width={400} // Increased width for better resolution
                  height={300}
                />
                {/* Floating Icon */}
                <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary  shadow-lg">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
              </div>
              {/* Content Wrapper */}
              <div className=" flex flex-col flex-grow px-5 py-6 sm:px-6">
                <div className="card-heading relative w-fit pb-1 ">
                    <h2 className='card-heading-title font-bold heading-default text-xl mb-3 text-left'>{item.heading}</h2> 
                    <span className='card-heading-underline'></span>
                </div>
                {/* flex-grow pushes the button to the bottom */}
                <p className="card-subtitle content-default text-base text-left flex-grow ">
                  {item.subHeading}
                </p>
            <Link href="\contact">    <button className='bg-primary text-white rounded-lg h-[30px] w-full mt-2 cursor-pointer'>
                  {item.buttonText}  </button> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
