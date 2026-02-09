"use client";
import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";
import Image from "next/image";

import certified from "../../../public/About/certified_Experts.png";
import lightning from "../../../public/About/lightning-fast_Delivery.png";
import global from "../../../public/About/Global_Clients.jpg";

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" background="bg-white" size="xl">
      <div className="container max-w-[1300px] mx-auto">

        {/* ================= HEADING ================= */}
        <Heading
          headline="Why Choose Us"
          subHeadline="Driven by technical expertise.Defined by trust. Delivering solutions for a smarter tomorrow."
        />

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16">

          {/* ================= CARD 1 ================= */}
          <div className="group relative transition-all duration-300  pb-4 ">
            <div className="relative overflow-hidden rounded-2xl mb-5 h-[200px] sm:h-[220px] md:h-60 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <Image
                src={certified}
                alt="Certified Experts"
                fill
                priority
                className="object-cover "
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative w-fit">
              <h3 className="card-heading-title mb-1">Certified Experts</h3>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>

            <p className="card-subtitle mt-2 transition-colors duration-300 group-hover:text-primary/90">
             Our consultants hold top-tier certifications from globally renowned institutes, including ServiceNow and Microsoft.
            </p>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="group relative ">
            <div className="relative overflow-hidden rounded-2xl mb-5 h-[200px] sm:h-[220px] md:h-[240px] shadow-sm ">
              <Image
                src={lightning}
                alt="Lightning-Fast Delivery"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative w-fit">
              <h3 className="card-heading-title mb-1">Lightning-Fast Delivery</h3>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>

            <p className="card-subtitle mt-2 transition-colors duration-300 group-hover:text-primary/90">
            Our  Agile delivery model enables rapid go-lives and faster ROI.
            </p>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className="group relative  sm:col-span-2 md:col-span-1">
            <div className="relative overflow-hidden rounded-2xl mb-5 h-[200px] sm:h-[220px] md:h-[240px] shadow-sm group-hover:shadow-xl transition-all duration-500">
              <Image
                src={global}
                alt="Global Clients"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative w-fit">
              <h3 className="card-heading-title mb-1">Global Clients</h3>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>

            <p className="card-subtitle mt-2 transition-colors duration-300 group-hover:text-primary/90">
              Trusted by Fortune 500 companies and innovative startups across industries.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}
