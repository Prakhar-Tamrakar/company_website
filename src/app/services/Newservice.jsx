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
        id="ai-transformation"
        title="Intelligent Innovation"
        heading="AI Transformation"
        subheading="We modernize our customer's operations through AI-driven solutions that enhance efficiency and innovation. "
        items={content1}
        accentColor="#3B82F6"
      />
      <Leftside
        id="data-intelligence"
        title="Data-Driven Intelligence"
        heading="Data Intelligence"
        subheading="We transform data into actionable insights through scalable and AI-ready data ecosystems. "
        items={content2}
        accentColor="#8B5CF6"
      />
      <Leftside
        id="it-infrastructure"
        title="Reliable Foundation "
        heading="IT Infrastructure"
        subheading="We design and manage secure IT environments that ensure performance, scalability, and reliability."
        items={content3}
        accentColor="#F59E0B"
      />
      <Leftside
        id="cyber-security"
        title="Secure & Resilient "
        heading="Cyber Security"
        subheading="We protect digital assets through modern security frameworks and proactive risk management."
        items={content4}
        accentColor="#06B6D4"
      />
      <Leftside
        id="strategic-consulting"
        title="Scale with Confidence "
        heading="Strategic Consulting"
        subheading="We identify structural, operational, and technological gaps and deliver tailored strategies that enable organizations to scale sustainably."
        items={content5}
        accentColor="#10B981"
      />
      <Leftside
        id="operational-excellence"
        title="Operational Excellence"
        heading="Service Delivery & Automation"
        subheading="Streamline operations with intelligent workflows, automation, and real-time service visibility."
        items={content6}
        accentColor="#EF4444"
      />
    </Section>
  );
};
export default Newservice;