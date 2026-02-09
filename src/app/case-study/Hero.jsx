import React from "react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

const Hero = () => {
  return (
    <div>
      <HeroSection
        pageName="Case Studies"
        headline={<>Solving Real Problems, <br className="hidden sm:block" /> Delivering Real Results</>}
        subHeadline="Every case study reflects a partnership built on understanding, collaboration, and trust—showing how we help organizations move forward with confidence."
        primaryCta={{ label: "Let’s Solve Yours", href: "/contact" }}
      />
    </div>
  );
};

export default Hero;