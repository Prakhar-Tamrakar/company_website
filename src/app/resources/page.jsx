import dynamic from "next/dynamic";
import Transformit from "./Transformit";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const BlogsSection = dynamic(() => import("./Blogspace"));
export const metadata = {
  title: "Resources",
  description:
    "Insights, thought leadership, and expertise in enterprise automation, platform innovation, and IT service transformation.",
  keywords: [
    "CMDB accuracy",
    "IT transformation",
    "Automation in IT",
    "GenAI in IT operations",
    "Predictive analysis in IT",
    "SaaS license optimization",
    "Healthcare automation use cases",
    "Enterprise automation insights",
    "Automated impact analysis",
    "RCA triage",
    "L1/L2 support automation",
    "Ticket summarization using GenAI",
    "Workflow orchestration",
    "License discovery workflows",
    "Patient onboarding automation",
    "HIPAA compliance automation",
  ],
};
export default function Page() {
  return (
    <>
      {/* Optional hero */}
      {/* <Hero /> */}

      <HeroSection
        headline="Stay Ahead with Insights that Matter Where Ideas Meet Execution"
        subHeadline="At i-Connectresources, we don't just build solutions — we build expertise. This is your hub for thought leadership, client success, and the latest in enterprise automation, platform innovation, and IT service transformation. The mentorship to turn your potential into real-world impact."
        primaryCta={{ label: "Explore Insights", href: "/contact#form" }}
        secondaryCta={{ label: "Schedule a Call" }}
        heroBgImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* <ImpactStats /> */}

      <BlogsSection />
      <Transformit />
    </>
  );
}
