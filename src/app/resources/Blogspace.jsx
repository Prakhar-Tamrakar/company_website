"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import card1 from "../../../public/Resources/card2.png";
export default function BlogSection() {
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const listRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(featuredRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(listRef.current?.children, {
        opacity: 1,
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.35,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={rootRef} className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <Heading
            headline=" Our Blog Space - Stories That Inspire"
            subHeadline="Explore thoughts that shape the way we work and build."
            maxWidth="max-w-[800]"
          />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Featured Blog */}
          <div ref={featuredRef} className="group lg:col-span-7 mt-5 ">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative  h-60 sm:h-70 md:h-120">
                <Image
                  src="/Resources/mainImage.png" // replace with your image
                  alt="Featured blog"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-6">
                <div className="title-container">
                  <div className="card-heading">
                    <h3 className="card-heading-blog transition-colors duration-300 group-hover:text-white">
                      CMDB Accuracy: The Silent Enabler of IT Transformation
                    </h3>
                    <span className="card-heading-underline" />
                  </div>
                  <p className="card-subtitle mt-2 mb-2 transition-colors duration-300 group-hover:text-white">
                    Without an accurate CMDB, you’re managing change in the
                    dark. In today’s fast-paced IT environments, Configuration
                    Management Database (CMDB) accuracy is more than a best
                    practice — it’s a business necessity.
                  </p>
                </div>

                <Link
                  href="resources/cmdb-accuracy"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium bg-primary text-white hover:text-blue-400 transition  rounded-full py-2 px-4 pointer-cursor "
                >
                  Read full article
                  {/* <ArrowRight className="inline ml-2 w-4 h-4" /> */}
                </Link>
              </div>
            </div>
          </div>
          {/* Blog List */}
          <div ref={listRef} className=" lg:col-span-5 space-y-2 relative ">
            {[
              {
                id: 2,
                img: "/Resources/card2.png",
                shorttitle: "Beyond-Repetition",
                title: "Beyond Repetition: How Automation Frees Your IT Teams",
              },
              {
                id: 3,
                img: "/Services/aiml.png",
                shorttitle: "Ai-In-IT-Operations",
                title: "AI + GenAI in IT Operations: What’s Real Today.",
              },
              {
                id: 4,
                img: "/Resources/card4.png",
                shorttitle: "Automation-Use-Cases",
                title: "Automation Use Cases That Improved Patient Care",
              },
              {
                id: 5,
                img: "/Resources/card5.jpg",
                shorttitle: "Healthcare-Provider",
                title: "How We Helped a Healthcare Provider Save on SaaS",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col sm:flex-row gap-4 bg-white border border-gray-200 p-4 hover:shadow-sm transition rounded-lg overflow-hidden"
              >
                {/* LEFT: Image */}
                <div className="relative w-full sm:w-40 h-[140px] shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* RIGHT: Content */}
                <div className="flex flex-col justify-between flex-1">
                  <div className="card-heading">
                    <h4 className="card-heading-title transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h4>
                    <span className="card-heading-underline" />
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    Published by i-Connectresources
                  </p>
                  <Link
                    href={`resources/${item.shorttitle}`}
                    className="mt-3 w-fit inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:text-blue-500 transition pointer-cursor "
                  >
                    Read full article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
