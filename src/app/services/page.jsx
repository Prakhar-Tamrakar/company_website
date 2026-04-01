import React from "react";
import dynamic from "next/dynamic";
import Newservice from "./Newservice";
import ServiceCatagories from "./ServiceCatagories"
import DrivingOutcomes from "./DrivingOutcomes";
import Journey from "./Journey";
import OurCapabilities from "./OurCapabilities";
import WhyClientstay from "./WhyClientstay";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export const metadata = {
  title: "Services",
  description: "Learn more about our company, vision, and expertise.",
  keywords: [
    "IT service management (ITSM)",
    "Workflow automation",
    "Enterprise automation with AI/ML",
    "Cloud infrastructure automation",
    "Data modernization",
    "Microsoft 365 automation",
    "Power Platform development",
    "Salesforce workflows",
    "Appian case management",
    "Custom software solutions",
    "Data engineering pipelines",
    "	ServiceNow incident management",
    "Change management automation",
    "CMDB accuracy & discovery",
    "Major incident resolution",
    "Real-time dashboards",
    "RCA improvement",
    "Predictive maintenance",
    "AI-powered RCA",
    "Python workflow automation",
    "PowerShell workflow automation",
    "Calendar and user management automation",
    "Active Directory integrations",
    "DNS automation",
    "SSL automation",
    "OneDrive migration",
    "Cloud provisioning automation (AWS/Azure/VMware)",
    "Power Apps development",
    "Power Automate workflows",
    "RBAC and mailbox management",
    "Productivity dashboards",
    "•	Salesforce integrations",
    "Appian workflows",
    "	Case management automation",
    "ERP/CRM integrations",
    "Full-stack development",
    "	Microservices & CI/CD",
    "Analytics dashboards",
    "AI/ML model deployment",
  ],
};

const page = () => {
  return (
    <>
      <HeroSection
        headline={
          <>
            We Focus on Business Outcomes <br />
          </>
        }
        subHeadline=" Trusted by enterprises, government bodies, and global teams to deliver scalable IT transformation. We go beyond building IT solutions, we build solutions that support your growth. By understanding your operations and priorities, we tailor our services to strengthen efficiency, enhance performance, and create real, long-term benefits."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "#OldServices" }}
        heroBgImage="https://images.pexels.com/photos/7658380/pexels-photo-7658380.jpeg"
      />
      {/* <OurCapabilities /> */}
      {/* <DrivingOutcomes /> */}
      <Newservice/>
      <ServiceCatagories />
      {/* <WhyClientstay /> */}
      <Journey />
    </>
  );
};

export default page;
