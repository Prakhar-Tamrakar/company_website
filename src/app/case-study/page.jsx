"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { caseStudies } from "./data";
import Hero from "./Hero";
// export const metadata = {
//   title: "Case Studies",
//   description:
//     "Explore real-world case studies showcasing how i-Connectresources delivers successful ServiceNow, automation, and enterprise digital transformation solutions.",
// };
export default function CaseStudyPage() {
  const featuredRef = useRef(null);
  const listRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, []);

    return () => ctx.revert();
  }, []);
  const first = caseStudies.slice(0, 3);
  return (
    <>
      <Hero />
      <Section
        id="case-studies"
        background="bg-white"
        size="xl"
        className="relative"
      >
        <div className="container  px-6">
          {/* Heading */}
          <Heading
            headline="Case Studies"
            subheadline="Real-world transformations driven by automation, integration, and intelligent workflows."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative mt-16">
            {/* Featured Blog */}
            <div className="lg:col-span-7">
              {first.map((item, index) => (
                <div
                  key={index}
                  ref={index === 0 ? featuredRef : null}
                  className="group mt-5 "
                >
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition ">
                    <div className="relative  h-60 sm:h-70 md:h-110">
                      <Image
                        src={item.img} // replace with your image
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-6">
                      <div className="title-container">
                        <div className="card-heading mt-6">
                          {item.domain && (
                            <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-4xl mb-4">
                              {item.domain}
                            </span>
                          )}
                          <h3 className="card-heading-blog transition-colors duration-300 group-hover:text-white mt-2">
                            {item.title}
                          </h3>
                          <span className="card-heading-underline" />
                        </div>
                        <p className="card-subtitle content-default mt-4 mb-2 transition-colors duration-300 ">
                          {item.summary}
                        </p>
                      </div>
                      <Link
                        href={`/case-study/${item.id}`}
                        className="group inline-flex w-fit items-center gap-2 text-sm font-medium bg-primary text-white transition  rounded-full py-2 px-4 pointer-cursor "
                      >
                        Read More{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                        {/* <ArrowRight className="inline ml-2 w-4 h-4" /> */}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Blog List */}
            <div ref={listRef} className=" lg:col-span-5 space-y-2 relative ">
              {caseStudies.slice(3).map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row gap-4 bg-white border border-gray-200 p-4 hover:shadow-sm transition rounded-lg overflow-hidden"
                >
                  {/* LEFT: Image */}
                  <div className="relative w-full sm:w-40  shrink-0 overflow-hidden rounded-md">
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
                      {first.domain && (
                        <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-4xl mb-4">
                          {item.domain}
                        </span>
                      )}
                      <h3 className="card-heading-title transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h3>
                      <span className="card-heading-underline" />
                    </div>
                    <p className="card-subtitle content-default mt-2 mb-4 transition-colors duration-300 ">
                      {item.summary}
                    </p>
                    <Link
                      href={`/case-study/${item.id}`}
                      className="group mt-3 w-fit inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition pointer-cursor "
                    >
                      Read More{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
