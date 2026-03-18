import Heading from "@/components/Heading";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import React from "react";

import power from "../../../public/Home/power.png";
import itBg from "../../../public/dashboard011.jpg";
import AiBg from "../../../public/AIbg.png";
import card3 from "../../../public/sales-appian.png";
import cloudImage from "../../../public/cloud22.jpg";
import codeImage from "../../../public/code3.png";

import Link from "next/link";
import ModernCapsuleCTA from "@/components/ModernCapsuleCTA";

const SolutionsSection = () => {
  return (
    <Section
      id="solution"
      background="bg-[#ffffff]"
      size="xl"
      className="relative z-20"
    >
      <div className="container max-w-[1300px] mx-auto px-6 relative z-20">
        {/* Heading */}
        <Heading
          headline="Solutions We Deliver"
          subheadline="Transforming enterprises with automation, AI, cloud, and modern engineering."
        />

        {/* GRID */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-16">
          {/* --- Card 1 --- */}
          <div className=" solution-card lg:col-span-7 group bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="relative w-fit pb-2">
                <h3 className="heading-default text-cardheading text-lg sm:text-xl lg:text-lg font-regular">
                  IT Service Management & Workflow Automation
                </h3>
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </div>
              <p className="content-default text-base leading-relaxed">
                Streamline IT operations with intelligent workflows empowering
                teams to deliver faster, smarter and more consistent services.
              </p>
            </div>

            <div className="relative w-full min-h-[150px] max-h-[330px] overflow-hidden p-1">
              <Image
                src={itBg}
                alt="IT Card"
                className="relative top-4 left-4 lg:top-10 lg:left-10 rounded-2xl border border-[#c6eef5] shadow-2xl w-full h-full object-cover scale-150% md:scale-100%"
              />
            </div>
          </div>

          {/* --- Card 2 --- */}
          <div
            className="solution-card relative lg:col-span-5 group rounded-2xl border border-[#E5E7EB]
                       shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-500
                       flex flex-col min-h-[300px]"
            style={{
              background:
                "linear-gradient(198deg, rgba(30,64,175,0.95), rgba(58,103,248,0.30), rgba(195,209,255,0.12))",
            }}
          >
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="relative w-fit pb-2">
                <h3 className="text-white text-base lg:text-xl font-regular">
                  Microsoft 365 & Power Platform Enablement
                </h3>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </div>
              <p className="text-slate-100 text-base leading-relaxed">
                Maximize productivity by automating workflows and driving
                digital transformation at scale.
              </p>
            </div>

            <div className="mx-auto overflow-hidden rounded-b-2xl mt-auto flex items-center justify-center">
              <Image
                src={power}
                alt="Microsoft Power Platform"
                priority
                className="
                  w-56
                  sm:w-[200px]
                  md:w-[260px]
                  lg:w-[320px]
                  xl:w-[380px]
                  h-auto
                  object-contain
                "
              />
            </div>
          </div>

          {/* --- Card 3 --- */}
          <div className="solution-card min-h-[300px] lg:col-span-5 group bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-500 flex flex-col">
            <div className="relative w-fit pb-2">
              <h3 className=" heading-default text-cardheading text-lg sm:text-xl lg:text-lg font-regular">
                Automation using Salesforce & Appian
              </h3>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
            </div>

            <p className="content-default text-base leading-relaxed mt-4 mb-4">
              Unlock scalable business automation with next-gen CRM and low-code
              platforms.
            </p>

            <div className="w-full flex justify-center mt-auto">
              <Image
                src={card3}
                alt="Salesforce & Appian Illustration"
                className="w-full max-w-[280px] sm:max-w-[70%] lg:max-w-full object-contain"
              />
            </div>
          </div>

          {/* --- Card 4 --- */}
          {/* <AiCard /> */}
          <div className="solution-card lg:col-span-7 group bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
            {/* --- TEXT SECTION --- */}
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="relative w-fit pb-2">
                <h3 className=" heading-default text-cardheading text-base sm:text-lg md:text-xl lg:text-lg font-regular">
                  AI & GenAI Driven Enterprise Automation
                </h3>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
              </div>
              <p className="content-default text-base leading-relaxed">
                Leverage AI and machine learning to automate decision-making and
                accelerate innovation.
              </p>
            </div>

            {/* --- IMAGE + PROMPT BOX --- */}
            <div className="relative w-full max-h-[230px] sm:max-h-[250px] overflow-hidden">
              {/* Background Image */}
              <Image
                src={AiBg}
                alt="AI"
                className="w-full object-cover transition-all duration-700"
              />

              {/* Top Gradient */}
              <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-white to-transparent pointer-events-none"></div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-white to-transparent pointer-events-none"></div>

              {/* Prompt Input */}
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[93%] sm:w-[85%]">
                <div className="flex items-center gap-2 sm:gap-3 bg-white/85 backdrop-blur-md border-2 border-blue-300 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-md group-hover:shadow-lg transition-all duration-500">
                  <div className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm text-gray-700">
                    <p className="text-slate-500">Ask AI to Automate...</p>
                  </div>

                  <button className="text-primary hover:text-black transition text-base sm:text-lg">
                    ➤
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- Card 5 --- */}
          <div className="solution-card lg:col-span-7 group bg-white rounded-2xl border border-[#E5E7EB] hover:border-blue-400/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="relative w-fit pb-2">
                <h3 className=" heading-default text-cardheading text-lg sm:text-xl lg:text-lg font-regular">
                  Cloud, Infrastructure & Data Modernization
                </h3>
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </div>
              <p className="content-default text-base leading-relaxed mb-2">
                Securely migrate and scale infrastructure with cloud-native
                modernization strategies.
              </p>
            </div>

            <div className="relative left-8 w-full h-[260px] border-t border-l rounded-2xl overflow-hidden border-slate-300">
              <Image
                src={cloudImage}
                alt="cloud and data"
                fill
                className="object-cover "
              />

              <div className="absolute inset-0 bg-linear-to-b from-white/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* --- Card 6 --- */}
          <div
            style={{
              background:
                "linear-gradient(198deg, rgba(30,64,175,0.95), rgba(58,103,248,0.30), rgba(195,209,255,0.12))",
            }}
            className="solution-card lg:col-span-5 group rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-2xl hover:border-blue-400/50 transition-all duration-500 overflow-hidden"
          >
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="relative w-fit pb-2">
                <h3 className="text-white text-lg sm:text-xl lg:text-lg font-regular">
                  Data Engineering & Custom Software Development
                </h3>
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              </div>
              <p className="text-white text-base leading-relaxed">
                Build custom enterprise-grade software and data solutions
                engineered for scale.
              </p>
            </div>

            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src={codeImage}
                alt="code image"
                className="relative top-10 left-8"
              />
            </div>
          </div>
        </div>
        <div className="container links flex justify-center mt-8">
          <ModernCapsuleCTA text="view Details" href="/services#OldServices" />
        </div>
      </div>
    </Section>
  );
};

export default SolutionsSection;
