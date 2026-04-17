import dynamic from "next/dynamic";
import HeroBg from "../../../public/shutterstock/About/aboutHero.png"
// import HeroBg from "../../../public/About/aboutHome.jpg"

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const JourneySection = dynamic(() => import("./JourneySection"));
const Introduction = dynamic(() => import("./Introduction"));
const WhatWeStandFor = dynamic(() => import("./WhatWeStandFor"));
const WhyChooseUs = dynamic(() => import("./whyChooseUs"));

export const metadata = {
  title: "About Us",
  description: "Learn more about our company, vision, and expertise.",
  keywords: [
    "IT services provider",
    "Digital transformation partner",
    "Enterprise automation",
    "Infrastructure modernization",
    "AI-driven automation",
    "Process-optimized solutions",
    "Intelligent process automation",
    "AI-powered solutions",
    "Future-ready IT",
    "Automation innovation",
    "ServiceNow implementation",
    "Low-code app development",
    "Custom app development",
    "Workflow automation",
    "AI-driven workflows",
    "	Machine learning solutions",
    "Digital transformation through AI",
    "Certified experts",
    "Global clients",
    "Lightning-fast delivery",
    "Platform expertise",
  ],
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
        primaryCta={{ label: "Learn More", href: "/services" }}
        heroBgImage={HeroBg}
      />
      <Introduction />
      <JourneySection />
      <WhatWeStandFor />
      {/* <WhyChooseUs /> */}
    </>
  );
}
