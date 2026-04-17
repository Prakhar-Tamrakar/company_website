"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Rocket,
  BarChart3,
  Settings,
  MapPin,
  ClipboardList,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
export default function Scrollersidebar({ data }) {
  const [activeSection, setActiveSection] = useState("Background");

  // Define sections as objects (id + label)
  const Sections = [
    { id: "Background", label: "Background" },
    { id: "Problem_Statement", label: "Problem Statement" },
    { id: "Solution", label: "Solution" },
    ...(data.KeyFeatures ? [{ id: "Key_Features", label: "Key Features" }] : []),
    { id: "Impact_Measurement", label: "Impact Measurement" },
    { id: "Outcomes", label: "Outcomes" },
    ...(data.Benefits ? [{ id: "Benefits", label: "Benefits" }] : []),
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );
    Sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50/50 mt-20">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md ">
        <div className="container py-4">
          <Link
            href="/case-study"
            className="flex items-center gap-2 content-default hover:text-blue-600 font-medium text-base"
          >
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      <Section id="case-study-detail" background="bg-transparent" size="xl">
        <div className="container">
          {/* Header */}
          <div className="grid grid-cols-2 gap-8">
            <header className="mb-16">
              {data.domain && (
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                  {data.domain}
                </span>
              )}

              {data.title && (
                <h1 className="text-4xl md:text-5xl font-regular font-playfair heading-default tracking-tight mb-4">
                  {data.title}
                </h1>
              )}

              {data.summary && (
                <p className="text-base content-default max-w-3xl mb-6">
                  {data.summary}
                </p>
              )}

              {data.location?.state && data.location?.country && (
                <div className="flex items-center gap-2 text-base text-slate-500">
                  <MapPin size={16} />
                  {data.location.state}, {data.location.country}
                </div>
              )}

              <div className="h-1.5 w-24 bg-blue-600 rounded-full mt-6" />
            </header>

            <section>
              <Image
                src={data.img}
                alt={data.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </section>
          </div>

          <div
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16" >
              {/* Background */}
              {data.background?.overview && (
                <section id="Background">
                  <SectionHeader icon={Rocket} title="Background" />
                  <p className="text-base content-default leading-relaxed mb-6">
                    {data.background.overview}
                  </p>
                </section>
              )}

              {/* Problem */}
              {data.problemStatement?.issues?.length > 0 && (
                <section id="Problem_Statement">
                  <SectionHeader icon={AlertCircle} title="Problem Statement" />
                  <ul className="space-y-4" id="main-content">
                    {data.problemStatement.issues.map((issue, i) => (
                      <li key={i} className="flex gap-3 content-default">
                        <span className="text-red-500 font-bold">•</span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Solution */}
              {(data.solution?.platform ||
                data.solution?.implementedChanges?.length > 0) && (
                <section id="Solution">
                  <SectionHeader icon={Settings} title="Solution" />

                  {data.solution?.description && (
                    <p className="content-default mb-6">
                      {data.solution.description}
                    </p>
                  )}

                  {data.solution?.platform && (
                    <p className="content-default mb-6">
                      Platform Used:{" "}
                      <span className="font-semibold heading-default">
                        {data.solution.platform}
                      </span>
                    </p>
                  )}

                  {data.solution?.implementedChanges?.length > 0 && (
                    <div className="space-y-5">
                      {data.solution.implementedChanges.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl border border-slate-200 p-5"
                        >
                          <h4 className="font-semibold heading-default mb-1">
                            {item.type}
                          </h4>
                          <p className="content-default text-base">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* Key Features */}
              {data.KeyFeatures?.content?.length > 0 && (
                <section id="Key_Features">
                  <SectionHeader icon={TrendingUp} title="Key Features" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.KeyFeatures.content.map((feature, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-blue-100 bg-blue-50/30 hover:bg-blue-50 transition-colors"
                      >
                        <h4 className="font-bold heading-default mb-2">
                          {feature.title}
                        </h4>
                        <p className="content-default text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              {/* Impact Measurement */}
              {data.impactMeasurement?.reports?.length > 0 && (
                <section id="Impact_Measurement">
                  <SectionHeader
                    icon={ClipboardList}
                    title="Impact Measurement"
                  />
                  <ul className="space-y-3">
                    {data.impactMeasurement.reports.map((report, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        {report}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {/* Outcomes — IMPORTANT: add id here */}
              {data.outcomes?.benefits?.length > 0 && (
                <section id="Outcomes">
                  <SectionHeader icon={BarChart3} title="Outcomes" />
                  <ul className="space-y-4">
                    {data.outcomes.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-base content-default">
                        <CheckCircle2
                          size={16}
                          className="text-blue-400 shrink-0"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
 
              {/* Benefits */}
              {data.Benefits?.content?.length > 0 && (
                <section id="Benefits">
                  <SectionHeader icon={ShieldCheck} title="Benefits" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.Benefits.content.map((feature, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-blue-100 bg-blue-50/30 hover:bg-blue-50 transition-colors"
                      >
                        <h4 className="font-bold heading-default mb-2">
                          {feature.title}
                        </h4>
                        <p className="content-default text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon size={20} />
      </div>
      <h2 className="text-xl font-bold heading-default font-playfair">
        {title}
      </h2>
    </div>
  );
}
