"use client";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import Link from "next/link";
import Image from "next/image";
const services = [
  {
    desc: "Accelerate ROI with optimized deployments, reducing time to business value. by up to 50%.",
    label: "Business Value – Faster ROI ",
    img:"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41782.svg"
  },
  {
    desc: "Boost IT efficiency with automation, reducing service desk calls by up to 40%. ",
    label: "IT Operations – Efficiency Boost ",
    img :"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41783.svg"
  },
  {
    desc: "EStreamline processes to save up to 30 minutes per interaction, enabling clinicians to focus on better patient outcomes.",
    label: "Healthcare Management - Time Saved ",
    img:"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41785.svg"
  },
  {
    desc: "Boost team productivity by saving 9,000+ hours annually across projects.",
    label: "PMO – Boost Productivity Across Teams ",
    img:"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41784.svg"
  }
];
function ServiceCard({ service, index }) {
  return (
    <div className="group relative rounded-4xl bg-slate-50 border border-slate-100 p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 flex flex-col">
      {/* Illustration / Icon Box */}
      <div className="size-16 lg:size-20 shrink-0 flex items-center justify-center rounded-2xl shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-105 mb-6">
        <Image
          src={service.img}
          alt={service.label}
          width={48}
          height={48}
          className="w-10 h-10 lg:w-17 lg:h-17 object-contain"
        />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-3">
        {/* <div className="flex items-center gap-4 mb-1">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary">0{index + 1}</span>
          <div className="h-px flex-1 bg-slate-200/50" />
        </div> */}
        <h3 className="text-lg font-regular heading-default uppercase tracking-tight">
          {service.label}
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
}
export default function BusinessImpactSection() {
  return (
    <Section id="business-impact" size="xl" background="bg-white">
      <div className="container">
        <Heading
          headline="Business Impact"
          subheadline="Driving measurable business outcomes and operational excellence with scalable, intelligent digital solutions."
          align="center"
          className="mb-16"
        />        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Static Illustrative Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              <Image
                src="https://i-connectresources.com/wp-content/uploads/2023/05/Group-41788.svg"
                alt="Business Impact Illustration"   
                fill
                className="object-contain"
                priority
              />
              {/* Optional: Add a subtle glow or background decoration to match other sections */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>    
          {/* Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>        
        </div>   
      </div>
    </Section>
  );
}