import dynamic from "next/dynamic";
import Transformit from "./Transformit";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const BlogsSection = dynamic(() => import("./Blogspace"));
export const metadata = {
  title: "Resources",
  description:
    "Insights, thought leadership, and expertise in enterprise automation, platform innovation, and IT service transformation.",
  keywords:[
  'CMDB accuracy',
 'IT transformation',
 'Automation in IT',
 'GenAI in IT operations',
 'Predictive analysis in IT',
 'SaaS license optimization',
 'Healthcare automation use cases',
 'Enterprise automation insights',
 'Automated impact analysis',
 'RCA triage',
 'L1/L2 support automation',
 'Ticket summarization using GenAI',
 'Workflow orchestration',
'License discovery workflows',
 'Patient onboarding automation',
'HIPAA compliance automation',
  ]
};
export default function Page() {
  return (
    <>
      {/* Optional hero */}
      {/* <Hero /> */}

      <HeroSection
        headline="Stay Ahead with Insights that Matter Where Ideas Meet Execution"
        subHeadline="At i-Connectresources, we don't just build solutions — we build expertise. This is your hub for thought leadership, client success, and the latest in enterprise automation, platform innovation, and IT service transformation. The mentorship to turn your potential into real-world impact."
        primaryCta={{ label: "Explore Insights", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Call" }}
      />

      {/* <ImpactStats /> */}

      <BlogsSection />
      <Transformit />
    </>
  );
}
