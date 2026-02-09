import dynamic from "next/dynamic";
import Introduction from "./Introduction";
import WhatWeStandFor from "./WhatWeStandFor";
import WhyChooseUs from "./whyChooseUs";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const JourneySection = dynamic(() => import("./JourneySection"));

export const metadata = {
  title: "About Us",
  description: "Learn more about our company, vision, and expertise.",
  keywords:['IT services provider',
 'Digital transformation partner',
 'Enterprise automation',
 'Infrastructure modernization',
 'AI-driven automation',
 'Process-optimized solutions',
 'Intelligent process automation',
	'AI-powered solutions',
  'Future-ready IT',
'Automation innovation',
'ServiceNow implementation',
'Low-code app development',
'Custom app development',
'Workflow automation',
'AI-driven workflows',
'	Machine learning solutions',
'Digital transformation through AI',
'Certified experts',
'Global clients',
 'Lightning-fast delivery',
'Platform expertise',
]
};
export default function Page() {
  return (
    <>
      <HeroSection
        pageName="About Us"
        headline={
          <>
            Empowering Transformation <br className="hidden sm:block" />
            Building Trust.
          </>
        }
        subHeadline="Together, we transform challenges into opportunities — designing digital solutions that power industries, empower people, and shape the future."
        primaryCta={{ label: "Let's Get Started", href: "/contact" }}
      />
      <Introduction />
      <JourneySection />
      <WhatWeStandFor />
      <WhyChooseUs />
    </>
  );
}
