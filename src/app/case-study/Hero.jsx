import React from "react";
// import heroBg from "../../../public/Casestudy/caseStudyHero.jpg";
import heroBg from "../../../public/shutterstock/Case-Studies/caseStudyHero.png";
import HeroSection from "@/components/HeroSection";
const Hero = () => {
  return (
    <div>
      <HeroSection
        pageName="Case Studies"
        headline={
          <>
            Solving Real Problems, <br className="hidden sm:block" /> Delivering
            Real Results
          </>
        }
        subHeadline="Every case study reflects a partnership built on understanding, collaboration, and trust—showing how we help organizations move forward with confidence."
        primaryCta={{ label: "Let’s Solve Yours", href: "/contact#form" }}
        heroBgImage={heroBg}
      />
    </div>
  );
};
export default Hero;