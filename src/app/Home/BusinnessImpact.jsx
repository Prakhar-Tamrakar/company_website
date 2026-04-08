"use client";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import Link from "next/link";
import Image from "next/image";
const services = [
  {
    desc: "Improved ROI of technology solution deployment - Business benefit realization time brought down by",
    label: "Business Value",
    img:"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41782.svg"
  },
  {
    desc: "Improved operations efficiency - Reduction in service desk call volumes by",
    label: "IT Operations",
    img :"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41783.svg"
  },
  {
    desc: "Enhanced patient health/ recovery - Direct impact on doctor & nurse time for patient care",
    label: "Healthcare",
    img:"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41785.svg"
  },
  {
    desc: "Direct Business Impact - Person hours saved of PMO in a year",
    label: "PMO",
    img:"https://i-connectresources.com/wp-content/uploads/2023/05/Group-41784.svg"
  }
];

function Illustration({ index, accent }) {
  const illustrations = [
    <svg key={0} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="80" cy="90" r="52" fill={accent} fillOpacity="0.07" />
      <circle cx="80" cy="90" r="30" fill={accent} fillOpacity="0.1" />
      <circle cx="200" cy="60" r="42" fill={accent} fillOpacity="0.07" />
      <circle cx="200" cy="60" r="24" fill={accent} fillOpacity="0.1" />
      <circle cx="320" cy="100" r="46" fill={accent} fillOpacity="0.07" />
      <circle cx="320" cy="100" r="26" fill={accent} fillOpacity="0.1" />
      <line x1="80" y1="90" x2="200" y2="60" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="200" y1="60" x2="320" y2="100" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="80"  cy="90"  r="7" fill={accent} fillOpacity="0.5" />
      <circle cx="200" cy="60"  r="7" fill={accent} fillOpacity="0.5" />
      <circle cx="320" cy="100" r="7" fill={accent} fillOpacity="0.5" />
      <circle cx="80"  cy="90"  r="3" fill={accent} />
      <circle cx="200" cy="60"  r="3" fill={accent} />
      <circle cx="320" cy="100" r="3" fill={accent} />
    </svg>,

    <svg key={1} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="30"  y="100" width="40" height="62" rx="5" fill={accent} fillOpacity="0.13" />
      <rect x="88"  y="72"  width="40" height="90" rx="5" fill={accent} fillOpacity="0.17" />
      <rect x="146" y="85"  width="40" height="77" rx="5" fill={accent} fillOpacity="0.13" />
      <rect x="204" y="50"  width="40" height="112" rx="5" fill={accent} fillOpacity="0.22" />
      <rect x="262" y="68"  width="40" height="94"  rx="5" fill={accent} fillOpacity="0.15" />
      <rect x="320" y="30"  width="40" height="132" rx="5" fill={accent} fillOpacity="0.26" />
      <polyline points="50,98 108,70 166,83 224,48 282,66 340,28"
        stroke={accent} strokeOpacity="0.5" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      {[[50,98],[108,70],[166,83],[224,48],[282,66],[340,28]].map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r="4.5" fill={accent} fillOpacity="0.7" />
      )}
      <line x1="20" y1="162" x2="380" y2="162" stroke={accent} strokeOpacity="0.1" strokeWidth="1.5" />
    </svg>,

    <svg key={2} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20"  y="70" width="90" height="52" rx="12" fill={accent} fillOpacity="0.1" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" />
      <rect x="155" y="70" width="90" height="52" rx="12" fill={accent} fillOpacity="0.1" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" />
      <rect x="290" y="70" width="90" height="52" rx="12" fill={accent} fillOpacity="0.1" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" />
      <defs>
        <marker id="arr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <path d="M0,1 L6,3.5 L0,6 Z" fill={accent} fillOpacity="0.45" />
        </marker>
      </defs>
      <line x1="112" y1="96" x2="153" y2="96" stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="247" y1="96" x2="288" y2="96" stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" markerEnd="url(#arr)" />
      <circle cx="65"  cy="96" r="14" fill={accent} fillOpacity="0.18" />
      <circle cx="200" cy="96" r="14" fill={accent} fillOpacity="0.18" />
      <circle cx="335" cy="96" r="14" fill={accent} fillOpacity="0.18" />
      <circle cx="65"  cy="96" r="5" fill={accent} fillOpacity="0.6" />
      <circle cx="200" cy="96" r="5" fill={accent} fillOpacity="0.6" />
      <circle cx="335" cy="96" r="5" fill={accent} fillOpacity="0.6" />
    </svg>,

    <svg key={3} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {[0,1,2,3].map(col =>
        [0,1,2].map(row => (
          <rect key={`${col}-${row}`}
            x={28 + col * 90} y={24 + row * 50}
            width="72" height="34" rx="7"
            fill={accent} fillOpacity={0.07 + (col + row) * 0.02}
            stroke={accent} strokeOpacity="0.15" strokeWidth="1"
          />
        ))
      )}
      {[0,1,2,3].map(col => (
        <circle key={col} cx={86 + col * 90} cy={41} r="4" fill={accent} fillOpacity="0.4" />
      ))}
    </svg>,

    <svg key={4} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="200" cy="80" rx="130" ry="60" fill={accent} fillOpacity="0.07" />
      <ellipse cx="130" cy="95" rx="80"  ry="44" fill={accent} fillOpacity="0.09" />
      <ellipse cx="270" cy="88" rx="90"  ry="46" fill={accent} fillOpacity="0.09" />
      <ellipse cx="200" cy="74" rx="96"  ry="42" fill={accent} fillOpacity="0.11" />
      {[80,130,180,230,280,330].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="140" x2={x} y2="115" stroke={accent} strokeOpacity="0.22" strokeWidth="1.5" strokeLinecap="round" />
          <path d={`M${x-5},122 L${x},112 L${x+5},122`} stroke={accent} strokeOpacity="0.28" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </g>
      ))}
      <circle cx="200" cy="70" r="9" fill={accent} fillOpacity="0.3" />
      <circle cx="145" cy="85" r="6" fill={accent} fillOpacity="0.2" />
      <circle cx="255" cy="80" r="6" fill={accent} fillOpacity="0.2" />
    </svg>,

    <svg key={5} viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="200" cy="95" r="80"  stroke={accent} strokeOpacity="0.05" strokeWidth="1" fill="none" />
      <circle cx="200" cy="95" r="62"  stroke={accent} strokeOpacity="0.07" strokeWidth="1" fill="none" />
      <circle cx="200" cy="95" r="44"  stroke={accent} strokeOpacity="0.09" strokeWidth="1" fill="none" />
      <circle cx="200" cy="95" r="26"  stroke={accent} strokeOpacity="0.12" strokeWidth="1" fill="none" />
      <path d="M200 18 L262 42 L262 96 Q262 136 200 156 Q138 136 138 96 L138 42 Z"
        fill={accent} fillOpacity="0.09" stroke={accent} strokeOpacity="0.2" strokeWidth="1.5" />
      <path d="M200 34 L250 54 L250 94 Q250 126 200 143 Q150 126 150 94 L150 54 Z"
        fill={accent} fillOpacity="0.1" />
      <circle cx="200" cy="90" r="20" fill={accent} fillOpacity="0.18" />
      <circle cx="200" cy="90" r="9"  fill={accent} fillOpacity="0.4" />
      <line x1="200" y1="99" x2="200" y2="112" stroke={accent} strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
    </svg>,
  ];

  return illustrations[index] || illustrations[0];
}

function ServiceCard({ service, index }) {
  return (
    <div
      className="group relative rounded-4xl bg-slate-50 border border-slate-100 p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 flex flex-col"
    >
      {/* Illustration / Icon Box */}
      <div className="size-16 lg:size-20 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform duration-500 group-hover:scale-105 mb-6">
        <Image
          src={service.img}
          alt={service.label}
          width={48}
          height={48}
          className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
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
          subheadline="We deliver measurable value and operational excellence through our carefully engineered digital solutions."
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