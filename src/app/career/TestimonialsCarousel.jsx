"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Quote, Linkedin, ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";

import prakhar from "../../../public/testimonial/prakhar.jpeg";
import bhavana from "../../../public/testimonial/bhavna.jpeg";
import naukesh from "../../../public/testimonial/naukesh.jpeg";
import jitin from "../../../public/testimonial/jitin.jpeg";

export default function TestimonialsCarousel() {
  const testimonials = [
    { id: 1, name: "Prakhar Tamrakar", role: "Full Stack Developer", quote: "Working at i-Connectresources has been an incredible journey of growth and learning. The culture truly values collaboration, innovation, and continuous improvement.", linkedin: "https://www.linkedin.com/in/prakhar-tamrakar-a92b51226/", image: prakhar },
    { id: 2, name: "Bhavana Kondeti", role: "ServiceNow Developer", quote: "The exposure to real-world ServiceNow implementations here is unmatched. I’ve grown technically and professionally while working with a highly supportive team.", linkedin: "https://www.linkedin.com/in/bhavana-kondeti/", image: bhavana },
    { id: 3, name: "Jithin V Anil", role: "Business Analyst", quote: "i-Connectresources encourages ownership and innovation. Every project challenges you to think deeper and deliver meaningful business outcomes.", linkedin: "https://www.linkedin.com/in/jithin-v-anil/", image: jitin },
    { id: 4, name: "Naukesh Bisen", role: "Mobile App Developer", quote: "Building mobile solutions that bridge the gap between complex enterprise workflows and seamless user experiences is incredibly rewarding.", linkedin: "https://www.linkedin.com/in/naukesh-bisen-467b69208/", image: naukesh },
  ];

  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleNav = contextSafe((nextIndex) => {
    const isNext = nextIndex > index || (index === total - 1 && nextIndex === 0);
    const xMove = isNext ? 30 : -30;

    const tl = gsap.timeline();

    tl.to([contentRef.current, imageRef.current], {
      opacity: 0,
      x: -xMove,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setIndex(nextIndex);
        gsap.set([contentRef.current, imageRef.current], { x: xMove });
        gsap.to([contentRef.current, imageRef.current], {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05
        });
      }
    });
  });

  const prev = () => handleNav(index === 0 ? total - 1 : index - 1);
  const next = () => handleNav(index === total - 1 ? 0 : index + 1);

  return (
    <Section id="testimonials" background="bg-white" size="xl">
      <div className="container mx-auto px-6" ref={containerRef}>
        <Heading
          headline="What Our Team Says"
          subheadline="Real experiences from people building impactful solutions at i-Connectresources."
        />

        {/* 1. FIXED HEIGHT PARENT: 
          lg:h-[550px] ensures the card never grows or shrinks.
        */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden lg:h-[550px] flex flex-col lg:grid lg:grid-cols-12">
          
          {/* 2. IMAGE AS BACKGROUND-STYLE CONTAINER:
            h-80 for mobile, h-full for desktop to match the parent.
          */}
          <div className="lg:col-span-4 relative h-80 lg:h-full bg-slate-400 overflow-hidden">
            <div ref={imageRef} className="h-full w-full relative">
              <Image
                src={active.image}
                alt={active.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Optional Gradient Overlay to blend with design */}
              <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* 3. CONTENT CONTAINER:
            Using flex-1 and overflow-hidden to contain text strictly.
          */}
          <div className="lg:col-span-8 px-8 py-10 md:px-14 md:py-14 flex flex-col justify-between h-full bg-white overflow-hidden">
            <div className="max-w-2xl" ref={contentRef}>
              <Quote size={38} className="text-primary mb-6" />

              {/* 4. MIN-HEIGHT FOR QUOTE:
                Prevents the "Name" and "Role" from shifting if the quote is short.
              */}
              <div className="min-h-[200px] flex items-center">
                <p className="text-xl md:text-2xl text-slate-800 italic leading-relaxed">
                  “{active.quote}”
                </p>
              </div>

              <div className="space-y-1 mt-6 mb-6">
                <h4 className="text-xl font-semibold text-slate-900">{active.name}</h4>
                <p className="text-slate-500 font-medium">{active.role}</p>
              </div>

              <a 
                href={active.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </a>
            </div>

            {/* Footer controls remain at the very bottom */}
            <div className="mt-6 flex justify-between items-center border-t pt-6 border-slate-100">
              <span className="text-sm text-slate-500 font-bold tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>

              <div className="flex gap-4">
                <button onClick={prev} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors active:scale-90">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors active:scale-90">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}