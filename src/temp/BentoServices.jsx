"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "01",
    title: "Digital & AI Transformation",
    desc: "Embedding digital platforms and AI into core workflows to enhance decision-making, efficiency, and customer experience.",
    icon: "cpu",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/aeb67998-5085-4b53-b2fd-c1f5eaf29642.jpg",
    fullWidth: true,
  },
  {
    id: "02",
    title: "Data Intelligence",
    desc: 'Large-scale data processing and "DRAaS" to power your next-generation analytics.',
    icon: "database-zap",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/31c2a215-40c0-4af4-b915-4c35051a1f59.jpg",
    fullWidth: false,
  },
  {
    id: "03",
    title: "Business Transformation",
    desc: "Redesigning processes, operating models, and technology to unlock measurable business value.",
    icon: "briefcase",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/0a3f7a13-b535-49f6-ac72-6ed6224f3593.jpg",
    fullWidth: false,
  },
  {
    id: "04",
    title: "IT Infrastructure & Operations",
    desc: "Designing, managing, and automating resilient IT foundations that keep enterprises secure and scalable.",
    icon: "server",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/3f52edb2-ea34-46d1-8649-b0a1bc8976e7.jpg",
    fullWidth: true,
    reverse: true,
  },
  {
    id: "05",
    title: "Cloud Services",
    desc: "Moving workloads to the right cloud platforms with minimal disruption and optimized cost.",
    icon: "cloud-upload",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/87af8bba-2f5c-4d24-ba0b-14ac252bf7eb.jpg",
    fullWidth: false,
  },
  {
    id: "06",
    title: "Cyber Securities",
    desc: "Protecting critical assets with modern security architectures and continuous monitoring.",
    icon: "shield-check",
    img: "https://storage.googleapis.com/banani-generated-images/generated-images/9967c52b-e4f7-4e53-ab78-bf80919bcc61.jpg",
    fullWidth: false,
  },
];

export default function BentoServices() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-[#f5f7fa] py-24 px-6 md:px-16 text-[#0b1220] font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <span className="inline-block px-6 py-2 bg-[#eef4ff] text-[#1167d1] rounded-full text-xs font-bold tracking-widest uppercase">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Transforming Enterprises for the Digital Era
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
            We deliver end-to-end solutions that unlock measurable business value, secure critical assets, and drive sustainable growth.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card group bg-white rounded-[24px] border border-black/5 shadow-sm overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer 
                ${s.fullWidth ? "md:col-span-2 md:flex-row" : ""} 
                ${s.reverse ? "md:flex-row-reverse" : ""}`}
            >
              
              {/* Image Side */}
              <div className={`relative h-64 overflow-hidden ${s.fullWidth ? "md:h-auto md:w-1/2" : "w-full"}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Side */}
              <div className={`p-10 flex flex-col justify-between flex-1 ${s.fullWidth ? "md:p-14" : "p-8"}`}>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-[#eef4ff] rounded-2xl flex items-center justify-center text-[#1167d1]">
                    {/* Placeholder for Iconify Icons */}
                    <div className="text-3xl font-bold">◈</div>
                  </div>
                  <span className="text-6xl font-black text-slate-100 leading-none tracking-tighter">
                    {s.id}
                  </span>
                </div>

                <div className="space-y-4 mb-10">
                  <h3 className={`font-extrabold text-[#0b1220] leading-tight ${s.fullWidth ? "text-4xl" : "text-2xl"}`}>
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-2 text-[#1167d1] font-bold group/btn">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover/btn:translate-x-2">→</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}