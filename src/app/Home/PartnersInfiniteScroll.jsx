"use client";
import React, { useRef } from "react";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import microsoftLogo from "../../../public/logos/MicrosoftLogo.png";
import appianLogo from "../../../public/logos/appianLogo.png";
import servicenowLogo from "../../../public/logos/ServiceNowLogo.png";
import gluwareLogo from "../../../public/logos/gluwareLogo.png";
import uipathLogo from "../../../public/logos/UiPath-Logo.png";

/* -------- Partner list -------- */
const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "UiPath", logo: uipathLogo },
  { name: "Gluware", logo: gluwareLogo },
  { name: "Appian", logo: appianLogo },

  // duplicate for smooth loop
  { name: "Microsoft", logo: microsoftLogo },
  { name: "ServiceNow", logo: servicenowLogo },
  { name: "UiPath", logo: uipathLogo },
  { name: "Gluware", logo: gluwareLogo },
  { name: "Appian", logo: appianLogo },
];

export default function PartnersInfiniteScroll() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <Section id="partners" size="sm" background="bg-white">
      <div className="container relative overflow-hidden" ref={containerRef}>
        {/* -------- Fade overlays -------- */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />

        {/* -------- Marquee -------- */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-16">
            {partners.map((partner, index) => (
              <PartnerItem
                key={index}
                name={partner.name}
                logo={partner.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------- Partner Item -------- */
function PartnerItem({ name, logo }) {
  return (
    <div className="flex items-center justify-center min-w-40 opacity-70 hover:opacity-100 transition">
      <Image
        src={logo}
        alt={`${name} logo`}
        className="h-20 w-auto object-contain  hover:grayscale-0 transition duration-300"
        priority={false}
      />
    </div>
  );
}
