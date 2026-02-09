"use client";
import React from "react";
import { Layout, Cpu, Globe } from "lucide-react";

import Section from "@/components/layouts/Section";
import Heading from "@/components/Heading";

/* ---------- Feature Card ---------- */
const FeatureCard = ({ title, heading, description, tags, icon: Icon }) => {
  return (
    <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden">
      {/* Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
          <Icon size={24} />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400/80 mb-2 block">
          {title}
        </span>
       


        <h3 className="text-2xl font-bold text-white mb-2">{heading}</h3>
         <div className="relative mb-2">
         <span className="absolute left-0 bottom-0 h-[3px]  bg-white w-0 transition-all duration-500 group-hover:w-[250px]"></span>
        </div>

        <p className="text-slate-400 leading-relaxed mt-1 mb-6 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- Section ---------- */
export default function ContentSection() {
  return (
    <Section
      id="solutions"
      background="bg-slate-950"
      size="xl"
      className="relative"
    >
      <div className="container">
        {/* ✅ Heading is now visible */}
        <div className="mb-20">
          <Heading
            headline="Redefining Digital Transformation"
            color="white"
            subHeadline="Unlock the next era of digital excellence with intelligent AI-driven solutions. We turn ideas into powerful, future-ready capabilities."
          />
        </div>

        {/* ✅ ALL cards are visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe}
            title="Enterprise Platform Solutions"
            heading="ServiceNow Implementation"
            description="Experience seamless digital transformation with intelligent workflow automation and enterprise-grade integrations."
            tags={["Live Dashboard", "AI Workflows", "Integrations"]}
          />

          <FeatureCard
            icon={Layout}
            title="Low-Code Innovation"
            heading="Custom App Development"
            description="Build scalable applications on the Now Platform. Empower your team to create solutions faster with intuitive interfaces."
            tags={["Modular", "Cloud Native", "Rapid Deploy"]}
          />

          <FeatureCard
            icon={Cpu}
            title="AI Intelligence"
            heading="Workflow Automation"
            description="Streamline IT, HR, and customer service. Reduce manual tasks and deliver unprecedented efficiency."
            tags={["Real-Time", "Smart Routing", "Optimization"]}
          />

          <FeatureCard
            icon={Cpu}
            title="Advanced Automation"
            heading="AI-Powered Operations"
            description="Automate complex workflows with predictive intelligence and adaptive decision-making."
            tags={["Predictive", "Self-Healing", "Scalable"]}
          />

          <FeatureCard
            icon={Cpu}
            title="Data Intelligence"
            heading="Analytics & Insights"
            description="Transform raw data into actionable insights with real-time analytics and dashboards."
            tags={["Dashboards", "Insights", "Reporting"]}
          />
        </div>
      </div>
    </Section>
  );
}
