"use client";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import Link from "next/link";

const services = [
  {
    title: "AI Transformation",
    desc: "Embed AI into your core operations to drive efficiency, automation, and smarter decision-making across your business.",
    label: "Strategy",
    accent: "#3B82F6",
    accentLight: "#EFF6FF",
    link: "/services#ai-transformation",
  },
  {
    title: "Data Intelligence",
    desc: "Build scalable data pipelines and AI-ready ecosystems to unlock insights and power next-generation analytics.",
    label: "Analytics",
    accent: "#8B5CF6",
    accentLight: "#F5F3FF",
    link: "/services#data-intelligence",
  },
  {
    title: "IT Infrastructure",
    desc: "Design secure, scalable, and high-performing IT environments that support seamless business operations.",
    label: "Engineering",
    accent: "#F59E0B",
    accentLight: "#FFFBEB",
    link: "/services#it-infrastructure",
  },
  {
    title: "Cyber Security",
    desc: "Protect your digital assets with robust security frameworks, real-time monitoring, and compliance-driven strategies.",
    label: "Cloud",
    accent: "#06B6D4",
    accentLight: "#ECFEFF",
    link: "/services#cyber-security",
  },
  {
    title: "Strategic Consulting",
    desc: "Identify operational and technological gaps and implement strategies that enable sustainable business growth.",
    label: "Operations",
    accent: "#10B981",
    accentLight: "#ECFDF5",
    link: "/services#strategic-consulting",
  },

  {
    title: "Service Delivery & Automation",
    desc: "Streamline operations with intelligent workflows, automation, and real-time service visibility.",
    label: "Security",
    accent: "#EF4444",
    accentLight: "#FEF2F2",
    link: "/services#operational-excellence",
  },
];

function Illustration({ index, accent }) {
  const illustrations = [
    <svg
      key={0}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="80" cy="90" r="52" fill={accent} fillOpacity="0.07" />
      <circle cx="80" cy="90" r="30" fill={accent} fillOpacity="0.1" />
      <circle cx="200" cy="60" r="42" fill={accent} fillOpacity="0.07" />
      <circle cx="200" cy="60" r="24" fill={accent} fillOpacity="0.1" />
      <circle cx="320" cy="100" r="46" fill={accent} fillOpacity="0.07" />
      <circle cx="320" cy="100" r="26" fill={accent} fillOpacity="0.1" />
      <line
        x1="80"
        y1="90"
        x2="200"
        y2="60"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <line
        x1="200"
        y1="60"
        x2="320"
        y2="100"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <circle cx="80" cy="90" r="7" fill={accent} fillOpacity="0.5" />
      <circle cx="200" cy="60" r="7" fill={accent} fillOpacity="0.5" />
      <circle cx="320" cy="100" r="7" fill={accent} fillOpacity="0.5" />
      <circle cx="80" cy="90" r="3" fill={accent} />
      <circle cx="200" cy="60" r="3" fill={accent} />
      <circle cx="320" cy="100" r="3" fill={accent} />
    </svg>,

    <svg
      key={1}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="30"
        y="100"
        width="40"
        height="62"
        rx="5"
        fill={accent}
        fillOpacity="0.13"
      />
      <rect
        x="88"
        y="72"
        width="40"
        height="90"
        rx="5"
        fill={accent}
        fillOpacity="0.17"
      />
      <rect
        x="146"
        y="85"
        width="40"
        height="77"
        rx="5"
        fill={accent}
        fillOpacity="0.13"
      />
      <rect
        x="204"
        y="50"
        width="40"
        height="112"
        rx="5"
        fill={accent}
        fillOpacity="0.22"
      />
      <rect
        x="262"
        y="68"
        width="40"
        height="94"
        rx="5"
        fill={accent}
        fillOpacity="0.15"
      />
      <rect
        x="320"
        y="30"
        width="40"
        height="132"
        rx="5"
        fill={accent}
        fillOpacity="0.26"
      />
      <polyline
        points="50,98 108,70 166,83 224,48 282,66 340,28"
        stroke={accent}
        strokeOpacity="0.5"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {[
        [50, 98],
        [108, 70],
        [166, 83],
        [224, 48],
        [282, 66],
        [340, 28],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill={accent} fillOpacity="0.7" />
      ))}
      <line
        x1="20"
        y1="162"
        x2="380"
        y2="162"
        stroke={accent}
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
    </svg>,

    <svg
      key={5}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="20"
        y="70"
        width="90"
        height="52"
        rx="12"
        fill={accent}
        fillOpacity="0.1"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <rect
        x="155"
        y="70"
        width="90"
        height="52"
        rx="12"
        fill={accent}
        fillOpacity="0.1"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <rect
        x="290"
        y="70"
        width="90"
        height="52"
        rx="12"
        fill={accent}
        fillOpacity="0.1"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <defs>
        <marker
          id="arr"
          markerWidth="7"
          markerHeight="7"
          refX="3.5"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,1 L6,3.5 L0,6 Z" fill={accent} fillOpacity="0.45" />
        </marker>
      </defs>
      <line
        x1="112"
        y1="96"
        x2="153"
        y2="96"
        stroke={accent}
        strokeOpacity="0.35"
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <line
        x1="247"
        y1="96"
        x2="288"
        y2="96"
        stroke={accent}
        strokeOpacity="0.35"
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <circle cx="65" cy="96" r="14" fill={accent} fillOpacity="0.18" />
      <circle cx="200" cy="96" r="14" fill={accent} fillOpacity="0.18" />
      <circle cx="335" cy="96" r="14" fill={accent} fillOpacity="0.18" />
      <circle cx="65" cy="96" r="5" fill={accent} fillOpacity="0.6" />
      <circle cx="200" cy="96" r="5" fill={accent} fillOpacity="0.6" />
      <circle cx="335" cy="96" r="5" fill={accent} fillOpacity="0.6" />
    </svg>,
    
    <svg
      key={3}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle
        cx="200"
        cy="95"
        r="80"
        stroke={accent}
        strokeOpacity="0.05"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="200"
        cy="95"
        r="62"
        stroke={accent}
        strokeOpacity="0.07"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="200"
        cy="95"
        r="44"
        stroke={accent}
        strokeOpacity="0.09"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="200"
        cy="95"
        r="26"
        stroke={accent}
        strokeOpacity="0.12"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M200 18 L262 42 L262 96 Q262 136 200 156 Q138 136 138 96 L138 42 Z"
        fill={accent}
        fillOpacity="0.09"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <path
        d="M200 34 L250 54 L250 94 Q250 126 200 143 Q150 126 150 94 L150 54 Z"
        fill={accent}
        fillOpacity="0.1"
      />
      <circle cx="200" cy="90" r="20" fill={accent} fillOpacity="0.18" />
      <circle cx="200" cy="90" r="9" fill={accent} fillOpacity="0.4" />
      <line
        x1="200"
        y1="99"
        x2="200"
        y2="112"
        stroke={accent}
        strokeOpacity="0.5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>,

    <svg
      key={2}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {[0, 1, 2, 3].map((col) =>
        [0, 1, 2].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={28 + col * 90}
            y={24 + row * 50}
            width="72"
            height="34"
            rx="7"
            fill={accent}
            fillOpacity={0.07 + (col + row) * 0.02}
            stroke={accent}
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        )),
      )}
      {[0, 1, 2, 3].map((col) => (
        <circle
          key={col}
          cx={86 + col * 90}
          cy={41}
          r="4"
          fill={accent}
          fillOpacity="0.4"
        />
      ))}
    </svg>,

    <svg
      key={4}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <ellipse
        cx="200"
        cy="80"
        rx="130"
        ry="60"
        fill={accent}
        fillOpacity="0.07"
      />
      <ellipse
        cx="130"
        cy="95"
        rx="80"
        ry="44"
        fill={accent}
        fillOpacity="0.09"
      />
      <ellipse
        cx="270"
        cy="88"
        rx="90"
        ry="46"
        fill={accent}
        fillOpacity="0.09"
      />
      <ellipse
        cx="200"
        cy="74"
        rx="96"
        ry="42"
        fill={accent}
        fillOpacity="0.11"
      />
      {[80, 130, 180, 230, 280, 330].map((x, i) => (
        <g key={i}>
          <line
            x1={x}
            y1="140"
            x2={x}
            y2="115"
            stroke={accent}
            strokeOpacity="0.22"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d={`M${x - 5},122 L${x},112 L${x + 5},122`}
            stroke={accent}
            strokeOpacity="0.28"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <circle cx="200" cy="70" r="9" fill={accent} fillOpacity="0.3" />
      <circle cx="145" cy="85" r="6" fill={accent} fillOpacity="0.2" />
      <circle cx="255" cy="80" r="6" fill={accent} fillOpacity="0.2" />
    </svg>,

    
  ];

  return illustrations[index] || illustrations[0];
}

function ServiceCard({ service, index }) {
  return (
    <div
      className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col"
      // style={{ boxShadow: "0 1px 4px 0 rgb(0 0 0 / 0.09)" }}
    >
      {/* Illustration */}
      <div
        className="w-full overflow-hidden"
        style={{
          height: "180px",
          background: `radial-gradient(ellipse at 50% 55%, ${service.accentLight} 0%, #f8fafc 70%)`,
        }}
      >
        <Illustration index={index} accent={service.accent} />
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mx-6" />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4 ">
        {/* <span
          className="inline-block w-fit text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{ color: service.accent, backgroundColor: service.accentLight }}
        >
          {service.label}
        </span> */}
        <h3 className="text-lg  font-regular heading-default leading-snug">
          {service.title}
        </h3>
        <p className="content-default text-sm md:text-base leading-relaxed flex-1">
          {service.desc}
        </p>
        <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5">
          <span
            className="text-xs font-semibold tracking-wide"
            style={{ color: service.accent }}
          >
            <Link href={service.link}>Learn more</Link>
          </span>
          <span className="text-xs" style={{ color: service.accent }}>
            →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <Section size="lg">
      <div className="container">
        <Heading
          headline="Services We Deliver"
          subheadline="We design, build, and scale enterprise-grade digital solutions that help organizations innovate faster and strengthen security."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
