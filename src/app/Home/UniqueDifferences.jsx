import React from "react";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import image1 from "../../../public/Home/unique_differences/automation_efficiency.png";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Frame() {
  const differentiators = [
    {
      title: "Transformation-First",
      description:
        "Modernizing legacy environments into intelligent digital ecosystems via AI-enabled operations.",
      // image: "/Home/unique_differences/transformation_first.png",
      image: "/shutterstock/Home/homeWhychoose1.png",
    },
    {
      title: "Secure & Compliant",
      description:
        "Designed for high-stakes environments where resilience and security are non-negotiable.",
      // image: "/Home/unique_differences/secure_compliant.png",
      image:"/shutterstock/Home/homeWhychoose2.png"

    },
    {
      title: "Enterprise Expertise",
      description:
        "Proven experience across ServiceNow, Microsoft 365, and UiPath — built to scale.",
      // image: "/Home/unique_differences/enterprise_expertise.png",
      image:"/shutterstock/Home/homeWhychoose3.png"

    },
    {
      title: "Automation & Efficiency",
      description:
        "Eliminating inefficiencies and accelerating decision-making through intelligent automation.",
      // image: "/Home/unique_differences/automation_efficiency.png",
      image:"/shutterstock/Home/homeWhychoose4.png"

    },
    {
      title: "Managed Accountability",
      description:
        "Proactive monitoring and defined SLAs — we manage and optimize what we build.",
      // image: "/Home/unique_differences/managed_accountability.png",
      image:"/shutterstock/Home/homeWhychoose5.png"

    },
  ];
  return (
    <Section
      id="whyChooseUs"
      size="xl"
      background="bg-slate-200/20"
      className="px-4"
    >
      <div className="container">
        <Heading
          headline="Good Choice Starts Here"
          subheadline="We deliver enterprise-grade IT solutions backed by decades of expertise and an unwavering commitment to excellence."
          color="black"
          maxWidth="4xl"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-16">
          {differentiators.map((item, index) => (
            <div key={index} className="group flex flex-col items-start">
              {/* Image Container */}
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col space-y-3">
                <h3 className="text-base md:text-lg  font-regular heading-default tracking-tight">
                  {item.title}
                </h3>
                <p className=" text-sm md:text-base leading-relaxed content-default">
                  {item.description}
                </p>
                {/* Visual accent line */}
                <div
                  className="h-1 w-12 bg-primary rounded-full"
                  title="accent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
