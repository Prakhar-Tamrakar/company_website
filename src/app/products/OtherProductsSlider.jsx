"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const values = [
    {
      id: "01",
      title: "My Pleader",
      subtitle: "Digital legal practice management",
      description:
        "A comprehensive digital legal practice management platform designed for law firms and legal professionals to streamline case management, documentation, billing, and client communication. ",
      outcome:
        "Digitizes legal case and document management to improve efficiency, accuracy, and service delivery.",
      image:
        "/products/myPleaderNew.png",
    },
    {
      id: "02",
      title: "Gap Ninja",
      subtitle: "Skills and capability intelligence",
      description:
        "A next-generation skills inventory and capability intelligence platform that enables organizations to map capabilities, close talent gaps, and optimize employee development.",
      outcome:
        "Provides real-time skills intelligence to guide workforce planning, hiring, and upskilling decisions.",
      image:
        "/products/gapNinjaNew.png",
    },
    {
      id: "03",
      title: "LineupLynx.ai",
      subtitle: "AI-powered cricket auction intelligence",
      description:
        "An AI-powered sports player auction and analytics platform that enhances decision making, performance insights, and team strategy. ",
      outcome:
        "Enables AI-driven cricket auction decisions using player performance predictions and budget optimization.",
      image:
        "/products/cricketNew.png",
    },
    {
      id: "04",
      title: "Luxon",
      subtitle: "Preventive oncology screening platform",
      description:
        "A preventive oncology screening and healthcare analytics platform focused on early detection, risk assessment, and patient outcome optimization. ",
      outcome:
        "Standardizes and scales cervical screening workflows for early detection and reliable clinical follow-up.",
      image:
        "/products/oncologyNew.png",
    },
    {
      id: "05",
      title: "Secure Code Intelligence (SCI.ai)",
      subtitle: "AI-driven code security intelligence",
      description:
        "An advanced AI-driven code security platform built with LLM (StarCoder-1B) for automated vulnerability detection, risk assessment, and secure software development. ",
      outcome:
        "Detects software vulnerabilities and compliance risks using LLM-based security intelligence and exportable reports.",
      image:
        "/products/secureCodeNew.png",
    },
    {
      id: "06",
      title: "MDU.ai",
      subtitle: "Multiple document understanding",
      description:
        "Multiple Document Understanding (MDU.ai) is an AI-powered document intelligence platform that analyzes multiple documents simultaneously to extract insights and convert unstructured content into structured data. It understands complex layouts, visuals, and multilingual content, unifying OCR, language detection, translation, and semantic interpretation into a single, scalable AI system.",
      outcome:
        "A powerful AI document intelligence platform for interpreting, classifying, and extracting insights from complex multilingual documents and layouts.",
      image:
        "/products/docNew.png",
    },
    {
      id: "07",
      title: "SAT ChangeDetect",
      subtitle: "Satellite imagery change detection",
      description:
        "Daily satellite imagery enables continuous monitoring, but large data volumes require AI/ML-based automated change detection to efficiently identify new man-made developments with reduced false alarms. ",
      outcome:
        "Detects and measures satellite-based change with high accuracy and GIS-ready deliverables.",
      image:
        "/products/SatelliteNew.png",
    },
  ];

export default function OtherProductsSlider({ products }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = 280; // width + gap
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-primary">
          Other Products
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-9 w-9 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-9 w-9 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className=" flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2 ">
        {values.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className="snap-start min-w-[260px] max-w-[260px] rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition group"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="text-sm font-semibold font-playfair text-primary">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
