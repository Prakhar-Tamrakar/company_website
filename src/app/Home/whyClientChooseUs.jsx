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
    title: "Transformation-First​",
    description:
      "We don’t just support IT — we modernize it.From workflow automation to AI-enabled operations, we turn legacy environments into intelligent digital ecosystems.​",
    border: "border-b md:border-r",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant​",
    description:
      "Designed for Healthcare, Financial, IT, Government environments etc. resilience, governance, and security are non-negotiable.​",
    border: "border-b md:border-r",
  },
  {
    icon: BarChart3,
    title: "Enterprise-Grade Expertise​",
    description:
      "Proven experience across platforms like ServiceNow, Microsoft 365, Atlassian Jira, and UiPath — integrated, optimized, and built to scale.​",
    border: "border-b",
  },
  {
    icon: CheckCircle2,
    title: "Automation & Efficiency​",
    description:
      "​We eliminate inefficiencies, reduce manual effort, and accelerate decision-making through intelligent automation across your IT ecosystem​",
    border: "border-b md:border-b-0 md:border-r",
  },
  {
    icon: DollarSign,
    title: "Managed with Accountability​",
    description:
      "Proactive monitoring, defined SLAs, and continuous optimization — we manage what we build.​",
    border: "border-b md:border-b-0 border-r",
  },
  // {
  //   icon: Link2,
  //   title: "Cyber Security",
  //   description:
  //     "Protecting critical assets with modern security architectures, continuous monitoring, and compliance-driven controls.",
  //   border: "border-b md:border-b-0 ",
  // },
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
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </Section>
  );
}
