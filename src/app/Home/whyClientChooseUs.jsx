import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import {
  Rocket,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  DollarSign,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "60% Faster IT Service Delivery",
    description:
      "Accelerated service fulfilment through process automation, streamlined workflows, and proactive issue resolution.",
    border: "border-b md:border-r",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Compliance & Governance",
    description:
      "Strengthened enterprise-wide governance with audit-ready systems and intelligent policy enforcement.",
    border: "border-b md:border-r",
  },
  {
    icon: BarChart3,
    title: "Real-time Operational Visibility",
    description:
      "Enabled data-driven decision-making with automated dashboards and transparent cross-department insights.",
    border: "border-b",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End IT Expertise",
    description:
      "From implementation to management and troubleshooting, we ensure every solution runs efficiently, securely, and at scale.",
    border: "border-b md:border-b-0 md:border-r",
  },
  {
    icon: DollarSign,
    title: "Reduced Operational Costs",
    description:
      "Optimized software licensing, improved CMDB accuracy, and eliminated redundant workflows — boosting ROI and efficiency.",
    border: "border-b md:border-b-0 border-r",
  },
  {
    icon: Link2,
    title: "Seamless System Integrations",
    description:
      "Unified ecosystems — from Microsoft Teams, Cisco, and ServiceNow to custom-built solutions — for cohesive operations.",
    border: "border-b md:border-b-0 ",
  },
];

export default function WhyClientsChooseUs() {
  return (
    <Section id="why-choose-us" size="xl" background="bg-white">
      <div className="container">
        {/* Header */}
        {/* <Heading
            headline="Why Clients Choose Us"
            subheadline="We're more than an IT partner — we're a trusted ally focused on driving real outcomes. At i-Connectresources, we simplify complexity, enhance efficiency, and infuse innovation into every process we support."
            maxWidth="6xl"
          /> */}

        {/* heading */}
        {/* heading */}
        <div className="">
          <h2 className="heading-default text-4xl sm:text-5xl md:text-6xl text-left">
            Services We Deliver
          </h2>
          <p className="card-subtitle w-full md:max-w-md content-default text-left">
            We design, build, and scale enterprise-grade digital solutions that
            help organizations innovate faster and strengthen security.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden
                  p-8 sm:p-10 flex flex-col items-start
                  border-gray-300 ${item.border}

                  transition-all duration-300 ease-out
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  hover:-translate-y-0.5 rounded-lg
                `}
              >
                {/* ---------- Concentric Quadrant Background ---------- */}
                <div
                  className="
                    pointer-events-none
                    absolute -top-34 -right-34
                    w-[320px] h-80

                    opacity-0 scale-75
                    transition-all duration-500 ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                >
                  {/* outer */}
                  <div className="absolute inset-0 rounded-full bg-primary/10" />
                  {/* middle */}
                  <div className="absolute inset-[45px] rounded-full bg-primary/20" />
                  {/* center */}
                  <div className="absolute inset-[90px] rounded-full bg-primary" />
                </div>

                {/* ---------- Content ---------- */}
                <div className="relative z-10 ">
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14 flex items-center justify-center rounded-full
                      bg-white mb-6

                      shadow-[0px_4px_6px_rgba(0,0,0,0.12)]
                      transition-all duration-300 ease-out

                      group-hover:shadow-[0px_10px_18px_rgba(0,0,0,0.22)]
                      group-hover:-translate-y-1
                      group-hover:scale-105
                      
                    "
                  >
                    <Icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <div className="card-heading mb-4">
                    <h3 className="text-base lg:text-lg font-normal  heading-default  ">
                      {item.title}
                    </h3>
                    <span className="card-heading-underline " />
                  </div>

                  {/* Description */}
                  <p className="card-subtitle  content-default">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
