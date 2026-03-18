import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const JourneySection = dynamic(() => import("./JourneySection"));
const TestimonialsCarousel = dynamic(() => import("./TestimonialsCarousel"));
const Diversity = dynamic(() => import("./Diversity"));
const HowWeWorkSection = dynamic(() => import("./HowWeWorkSection"));
const JobApplySection = dynamic(() => import("./JobApplySection"));

export const metadata = {
  title: "Career",
  description:
    "Explore career opportunities at i-Connectresources and grow your career in ServiceNow, cloud, automation, and digital transformation.",
  keywords: [
    "Technology careers",
    "Innovation careers",
    "Purpose-driven careers",
    "	IT jobs in India / US",
    "	Hybrid work culture",
    "Mentorship and growth",
    "ServiceNow developer",
    "Automation engineer",
    "Python + PowerShell engineer",
    "Business analyst (Healthcare IT)",
    "Continuous learning culture",
    "Agile + DevOps teams",
    "Collaboration across geographies",
    "Diversity and inclusion",
    "Women in tech",
    "Early career programs",
    "Returnship programs",
  ],
};

const page = () => {
  return (
    <div>
      <HeroSection
        pageName="Career"
        headline={
          <>
            Grow With Purpose <br className="hidden sm:block" />
            Innovate with Impact.
          </>
        }
        subHeadline="Join a team redefining what technology can do. At i-Connectresources, we build more than solutions—we create opportunities, push boundaries, and drive real-world impact. Grow with the freedom, tools, and mentorship to succeed."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />
      <HowWeWorkSection />
      <JourneySection />
      <Diversity />
      <JobApplySection />
      <TestimonialsCarousel />
    </div>
  );
};

export default page;
