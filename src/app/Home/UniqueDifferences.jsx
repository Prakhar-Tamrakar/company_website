import React from "react";
import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
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
      image: "/Home/unique_differences/transformation_first.png",
    },
    {
      title: "Secure & Compliant",
      description:
        "Designed for high-stakes environments where resilience and security are non-negotiable.",
      image:
        "/Home/unique_differences/secure_compliant.png",
    },
    {
      title: "Enterprise Expertise",
      description:
        "Proven experience across ServiceNow, Microsoft 365, and UiPath — built to scale.",
      image:
        "/Home/unique_differences/enterprise_expertise.png",
    },
    {
      title: "Automation & Efficiency",
      description:
        "Eliminating inefficiencies and accelerating decision-making through intelligent automation.",
      image: "/Home/unique_differences/automation_efficiency.png",
    },
    {
      title: "Managed Accountability",
      description:
        "Proactive monitoring and defined SLAs — we manage and optimize what we build.",
      image:
        "/Home/unique_differences/managed_accountability.png",
    },
  ];

  return (
    <Section
      id="whyChooseUs"
      size="xl"
      background="bg-slate-200/10"
      className="px-4"
    >
      <div className="container">
        <Heading
          headline="Why Choose Us"
          subheadline="We deliver enterprise-grade IT solutions backed by decades of expertise and an unwavering commitment to excellence."
          color="black"
          maxWidth="4xl"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group rounded-md  overflow-hidden bg-white "
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content */}
              <div className=" pt-4 flex flex-col ">
                <h3 className="heading-default text-base lg:text-lg font-normal mb-1">
                  {item.title}
                </h3>

                <p className="card-subtitle content-default">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
