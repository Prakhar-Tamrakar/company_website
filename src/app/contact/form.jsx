"use client";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Section from "@/components/layouts/Section";
import { tabs } from "@/constants/costContact";
import clsx from "clsx";

const Generalenquiry = dynamic(() => import("./GeneralEnquiry"), { ssr: false });
const SalesProject = dynamic(() => import("./SalesProject"), { ssr: false });
const Partnership = dynamic(() => import("./Partnership"), { ssr: false });
const Careers = dynamic(() => import("./Careers"), { ssr: false });
export default function ContactPage() {
  const rootRef = useRef(null);
  const [activeTab, setActiveTab] = useState("General Enquiry");
  return (
    <Section
      className="w-full min-h-screen bg-gray-50 py-16 px-4"
      ref={rootRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={clsx(
                "group px-4 py-2 cursor-pointer rounded-full border border-gray-200  text-sm font-medium shadow-sm  hover:bg-blue-50 hover:border-blue-200 transition",
                activeTab === tab.name
                  ? "bg-primary text-white hover:bg-blue-50 hover:text-black hover:border-blue-200"
                  : "bg-white text-blue-600"
              )}
            >
              <tab.icon
                className={clsx(
                  "inline h-4 mr-1 ",
                  activeTab === tab.name
                    ? "text-white hover:bg-blue-50 group-hover:text-black hover:border-blue-200"
                    : "bg-white"
                )}
              />{" "}
              {tab.name}
            </button>
          ))}
        </div>
        {/* Layout */}
        {activeTab === "General Enquiry" && (   
            <Generalenquiry/>
        )}
        {activeTab === "Sales & Project" && (
          <SalesProject/>
        )}

        {activeTab === "Partnerships" && (
             <Partnership/>
        )}

        {activeTab === "Careers" && (
           <Careers/>
        )}
      </div>
    </Section>
  );
}