"use client";

import Heading from "@/components/Heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Section from "@/components/layouts/Section";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const imageRefs = useRef([]);
  const containerRefs = useRef([]);

  useGSAP(() => {
    imageRefs.current.forEach((image, index) => {
      const container = containerRefs.current[index];
      if (!image || !container) return;

      gsap.fromTo(
        image,
        { y: "0%" },
        {
          y: "-15%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  }, []);

  const processes = [
    {
      id: "01",
      title: "My Pleader",
      subtitle: "Digital legal practice management",
      description:
        "A comprehensive digital legal practice management platform designed for law firms and legal professionals to streamline case management, documentation, billing, and client communication. ",
      outcome:
        "Digitizes legal case and document management to improve efficiency, accuracy, and service delivery.",
      image: "/products/myPleaderNew.png",
    },
    {
      id: "02",
      title: "Gap Ninja",
      subtitle: "Skills and capability intelligence",
      description:
        "A next-generation skills inventory and capability intelligence platform that enables organizations to map capabilities, close talent gaps, and optimize employee development.",
      outcome:
        "Provides real-time skills intelligence to guide workforce planning, hiring, and upskilling decisions.",
      image: "/products/gapNinjaNew.png",
    },
    {
      id: "03",
      title: "LineupLynx.ai",
      subtitle: "AI-powered cricket auction intelligence",
      description:
        "An AI-powered sports player auction and analytics platform that enhances decision making, performance insights, and team strategy. ",
      outcome:
        "Enables AI-driven cricket auction decisions using player performance predictions and budget optimization.",
      image: "/products/cricketNew.png",
    },
    {
      id: "04",
      title: "Luxon",
      subtitle: "Preventive oncology screening platform",
      description:
        "A preventive oncology screening and healthcare analytics platform focused on early detection, risk assessment, and patient outcome optimization. ",
      outcome:
        "Standardizes and scales cervical screening workflows for early detection and reliable clinical follow-up.",
      image: "/products/oncologyNew.png",
    },
    {
      id: "05",
      title: "Secure Code Intelligence (SCI.ai)",
      subtitle: "AI-driven code security intelligence",
      description:
        "An advanced AI-driven code security platform built with LLM (StarCoder-1B) for automated vulnerability detection, risk assessment, and secure software development. ",
      outcome:
        "Detects software vulnerabilities and compliance risks using LLM-based security intelligence and exportable reports.",
      image: "/products/secureCodeNew.png",
    },
    {
      id: "06",
      title: "MDU.ai",
      subtitle: "Multiple document understanding",
      description:
        "Multiple Document Understanding (MDU.ai) is an AI-powered document intelligence platform that analyzes multiple documents simultaneously to extract insights and convert unstructured content into structured data. It understands complex layouts, visuals, and multilingual content, unifying OCR, language detection, translation, and semantic interpretation into a single, scalable AI system.",
      outcome:
        "A powerful AI document intelligence platform for interpreting, classifying, and extracting insights from complex multilingual documents and layouts.",
      image: "/products/docNew.png",
    },
    {
      id: "07",
      title: "SAT ChangeDetect",
      subtitle: "Satellite imagery change detection",
      description:
        "Daily satellite imagery enables continuous monitoring, but large data volumes require AI/ML-based automated change detection to efficiently identify new man-made developments with reduced false alarms. ",
      outcome:
        "Detects and measures satellite-based change with high accuracy and GIS-ready deliverables.",
      image: "/products/satelliteNew.png",
    },
  ];

  return (
    <Section id="Products" size="xl" className="bg-white ">
      <Heading
        maxWidth="2xl"
        headline="Where Ideas Become Production-Ready Products"
        subHeadline="Carefully designed solutions that balance usability, scalability, and long-term business value."
      />

      <div className="mt-16" />

      {processes.map((process, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={process.id}
            className={`grid grid-cols-1 ${
              isEven ? "md:grid-cols-[40%_60%]" : "md:grid-cols-[60%_40%]"
            } border-t border-gray-300`}
          >
            {/* IMAGE */}
            <div
              ref={(el) => (containerRefs.current[index] = el)}
              className={`relative h-full min-h-[420px] overflow-hidden ${
                isEven ? "" : "md:col-start-2"
              } `}
            >
              {/* Moving inner image */}
              <div
                ref={(el) => (imageRefs.current[index] = el)}
                className="absolute inset-0 top-0 h-[130%] w-full overflow-hidden"
              >
                <Image
                  src={process.image}
                  alt={process.title || "process image"}
                  fill
                  priority={index === 0} // only first image
                  className="object-cover object-center grayscale"
                  sizes="100vw"
                />
              </div>

              {/* Bottom → top blur */}
              {/* <div
                className="pointer-events-none absolute inset-0 backdrop-blur-xl [mask-image:linear-gradient(to_top,black_25%,transparent_75%)]"
              /> */}

              {/* subtle contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* CONTENT */}
            <div
              className={`bg-white px-10 sm:px-14 md:px-section-2xl lg:px-40 py-20 flex flex-col justify-center ${
                isEven ? "" : "md:col-start-1 md:row-start-1"
              }`}
            >
              <span className="text-5xl font-light text-gray-300 mb-10 block">
                {process.id}
              </span>

              <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-medium text-primary max-w-2xl">
                  {process.title}
                </h3>

                <p className="text-xs font-bold tracking-widest text-gray-800 uppercase mb-8">
                  {process.subtitle}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm max-w-3xl mb-12">
                {process.description}
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-xl">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-800 mb-2">
                  Outcome
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {process.outcome}
                </p>
              </div>

              <Link
                href={`/products/${process.id}`}
                className="group inline-flex items-center gap-2 w-fit rounded-full bg-primary px-6 py-2.5 mt-6 text-sm font-semibold text-white transition-all hover:translate-x-1"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export default ProductsSection;
