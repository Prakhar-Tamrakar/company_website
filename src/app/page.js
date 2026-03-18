import dynamic from "next/dynamic";
import SolutionsSection from "./Home/SolutionsSection";
import Frame from "./Home/UniqueDifferences";
import WhyClientsChooseUs from "./Home/whyClientChooseUs";
import WeHelpYouSolve from "./Home/weHelpYouSolve";
import NewsletterSection from "./Home/NewsletterSection";

const HeroNewSection = dynamic(() => import("./Home/Hero"));
const IntroSection = dynamic(() => import("./Home/IntroSection"));
const ServicesSection = dynamic(() => import("./Home/ServicesSection"));

 

export default function Page() {
  return (
    <>
      <HeroNewSection/>
      <IntroSection/>
      <ServicesSection/>
      <SolutionsSection />
      <Frame />
      <WhyClientsChooseUs/>
      <WeHelpYouSolve/>
      <NewsletterSection/>
    </>
  );
}
