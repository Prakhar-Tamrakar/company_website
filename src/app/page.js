import dynamic from "next/dynamic";

const HeroNewSection = dynamic(() => import("./Home/Hero"));
const HeroAlt = dynamic(() => import("../temp/HeroAlt"));
const IntroSection = dynamic(() => import("./Home/IntroSection"));
const BusinessImpact = dynamic(() => import("./Home/BusinessImpact"));
const Services = dynamic(() => import("../temp/services.jsx"));
import Frame from "./Home/UniqueDifferences";
import HeroB2B from "@/temp/HeroB2B";
import ModernHero from "@/temp/ModernHero";
// const Frame = dynamic(() => import("./Home/UniqueDifferences"));
const NewsletterSection = dynamic(() => import("./Home/NewsletterSection"));


export default function Page() {
  return (
    <>
      {/* <HeroNewSection /> */}
      <HeroAlt />
      <HeroB2B/>
      <ModernHero/>
      <IntroSection />
      <BusinessImpact />
      <Services />
      <Frame />
      <NewsletterSection />
      </>
  );
}
