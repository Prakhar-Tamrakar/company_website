"use client";
import React from "react";
import Section from "@/components/layouts/Section";
import Leftside from "./Leftsideimg";
import {
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
} from "@/constants/constserviceitem";
import Heading from "@/components/Heading";
import Rightside from "./Rightsideimg";
const Newservice = () => {
  return (
    <Section
      id="NewServices"
      className="w-full bg-white overflow-hidden py-12 lg:py-20"
    >
      <div className="container text-primary  mx-auto text-center px-4 mb-12 md:mb-16">
        <Heading
          className="text-base"
          maxWidth="max-w-[800px]"
          headline="Service Offerings"
          subheadline="End-to-end services that drive scalability, efficiency, and digital transformation. "
        />
      </div>
      <Leftside
        id="strategic-consulting"
        title="Scale with Confidence"
        heading=" Strategic Consulting"
        subheading="We identify structural, operational, and technological gaps and deliver tailored strategies that enable organizations to scale sustainably — whether at national or global levels."
        items={content1}
      />
      <Leftside
        id="digital-ai-transformation"
        title="Intelligent Innovation"
        heading="Digital & AI Transformation"
        subheading="We modernize our customers’ operations through intelligent, data-driven solutions that enable innovation and long-term value. "
        items={content2}
      />
      {/* <Leftside
        title="Government Excellence"
        heading="Public Sector & Event Consulting"
        subheading="We specialize in supporting State & Central Govt. bodies with large-scale public initiatives."
        items={content3}
      /> */}
      {/* <Rightside
        title="Expert Talent On-Demand"
        heading="Advanced Skill Development"
        subheading="We bridge the talent gap by delivering structured innovation programs focused on emerging technologies."
        items={content4}
      /> */}
      <Leftside
        id="it-infrastructure"
        title="Reliable Foundation"
        heading=" IT Infrastructure & Operations"
        subheading="We design, build, and manage secure IT environments that ensure reliability, scalability, and operational continuity. "
        items={content5}
      />
      <Leftside
        id="operational-excellence"
        title="Operational Excellence "
        heading="IT Service Management & Workflow Automation "
        subheading="We streamline IT operations through intelligent workflows, improving service delivery, visibility, and efficiency. "
        items={content6}
      />
    </Section>
  );
};
export default Newservice;
