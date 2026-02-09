import Link from "next/link";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { caseStudies } from "./data";
import Hero from "./Hero";
export const metadata = {
  title: "Case Studies",
  description:
    "Explore real-world case studies showcasing how i-Connectresources delivers successful ServiceNow, automation, and enterprise digital transformation solutions.",
};
export default function CaseStudyPage() {
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-stretch">
          {caseStudies.map((cs) => (
            // <Link
            //   key={cs.id}
            //   href={`/case-study/${cs.id}`}
            //   className="
            //     group
            //     relative
            //     flex
            //     flex-col
            //     justify-between
            //     rounded-2xl
            //     border border-slate-200
            //     bg-white
            //     p-8
            //     transition-all duration-300
            //     hover:-translate-y-1
            //     hover:shadow-2xl
            //     hover:border-primary/40
            //   "
            // >
            //   {/* Top Section */}
            //   <div>
            //     {/* Domain Badge */}
            //     {cs.domain && (
            //       <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            //         {cs.domain}
            //       </span>
            //     )}

            //     {/* Title */}
            //     <h2 className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-primary transition">
            //       {cs.title}
            //     </h2>

            //     {/* Animated Underline */}
            //     <div className="mt-2 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

            //     {/* Summary */}
            //     <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
            //       {cs.summary}
            //     </p>
            //   </div>

            //   {/* Footer */}
            //   <div className="mt-6 flex items-center justify-between">
            //     {/* Location */}
            //     {cs.location && (
            //       <span className="text-xs text-slate-500">
            //         {cs.location.state}, {cs.location.country}
            //       </span>
            //     )}

            //     {/* CTA */}
            //     <span className="flex items-center gap-2 text-primary font-medium text-sm">
            //       View case study
            //       <span className="transition-transform group-hover:translate-x-1">
            //         →
            //       </span>
            //     </span>
            //   </div>
            // </Link>
            <div
              key={cs.id}
              className=" group flex flex-col w-full h-full rounded-xl border border-slate-200/80 bg-white p-3 transition-all duration-200 "
            >
              {/* Image */}
              <div className="relative h-[40vh] w-full shrink-0 overflow-hidden rounded-lg mb-6">
                {/* Image */}
                <Image
                  className="w-full object-contain scale-[105%]"
                  src={cs.img}
                  alt={cs.title}
                  width={1000}
                  height={0}
                />
                {/* White Gradient Overlay */}
                {/* <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/60 via-white/10 via-white/10 to-white/30"
                /> */}
              </div>
              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Top Content */}
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
                {/* Footer (Pinned Bottom) */}
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
        </div>
        </div>
      </Section>
    </>
  );
}