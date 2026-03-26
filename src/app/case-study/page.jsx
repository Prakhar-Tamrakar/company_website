'use client';
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
    },[]);

    return () => ctx.revert();
  }, []);
 const first =   caseStudies[0];
  return (
    <>
      <Hero />
      <Section
        id="case-studies"
        background="bg-white"
        size="xl"
        className="relative"
      >
        <div className="container max-w-[1200px] mx-auto px-6">
          {/* Heading */}
          <Heading
            headline="Case Studies"
            subHeadline="Real-world transformations driven by automation, integration, and intelligent workflows."
          />   

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Featured Blog */}
          <div ref={featuredRef} className="group lg:col-span-7 mt-5 ">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative  h-60 sm:h-70 md:h-120">
                <Image
                  src={first.img}// replace with your image
                  alt={first.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-6">
                <div className="title-container">
                  <div className="card-heading">
                    {first.domain && (
                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-4xl mb-4">
                      {first.domain}
                    </span>
                  )}
                    <h3 className="card-heading-blog transition-colors duration-300 group-hover:text-white">
                     {first.title}
                    </h3>
                    <span className="card-heading-underline" />
                  </div>
                  <p className="card-subtitle mt-2 mb-2 transition-colors duration-300">
                   {first.summary}
                  </p>
                </div>
                <Link
                  href={`/case-study/${first.id}`}
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium bg-primary text-white hover:text-blue-400 transition  rounded-full py-2 px-4 pointer-cursor "
                >
                  Read More
                  {/* <ArrowRight className="inline ml-2 w-4 h-4" /> */}
                </Link>
              </div>
            </div>
          </div>
          {/* Blog List */}
          <div ref={listRef} className=" lg:col-span-5 space-y-2 relative ">
            {caseStudies.slice(1).map((item, i) => (
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
                  <Link
                    href={`/case-study/${item.id}`}
                    className="mt-3 w-fit inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:text-blue-500 transition pointer-cursor "
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>



    
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-stretch">
           {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className=" group flex flex-col w-full h-full rounded-xl border border-slate-200/80 bg-white p-3 transition-all duration-200 "
            >
             
              <div className="relative h-[40vh] w-full shrink-0 overflow-hidden rounded-lg mb-6">
               
                <Image
                  className="w-full object-contain scale-[105%]"
                  src={cs.img}
                  alt={cs.title}
                  width={1000}
                  height={0}
                />
                
              </div>
            
              <div className="flex flex-col flex-grow">
              
                <div>
                  {cs.domain && (
                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-4xl mb-4">
                      {cs.domain}
                    </span>
                  )}
                  <h2 className="card-heading-title">{cs.title}</h2>

                  <div className="mt-1 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"/>

                  <p className="card-subtitle line-clamp-3">{cs.summary}</p>
                </div>
               
                <div className="mt-auto pt-3 flex items-center justify-between mb-2">
                  {cs.location && (
                    <span className="text-xs text-slate-500">
                      {cs.location.state} {cs.location.state && (<span>,</span>)} {cs.location.country}
                    </span>
                  )}

                  <Link
                    href={`/case-study/${cs.id}`}
                    className="rounded-full bg-primary/10 p-3 transition-transform duration-200 hover:translate-x-1"
                  >
                    <ArrowRight className="h-4 w-4 text-slate-500 hover:text-primary/90" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </Section>
    </>
  );
}