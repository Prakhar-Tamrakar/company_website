import dynamic from "next/dynamic";
import SolutionsSection from "./Home/SolutionsSection";
import Frame from "./Home/UniqueDifferences";
import WhyClientsChooseUs from "./Home/whyClientChooseUs";
import WeHelpYouSolve from "./Home/weHelpYouSolve";
import ServicesGrid from "./Home/NewServicesSection";
import NewsletterSection from "./Home/NewsletterSection";

const HeroNewSection = dynamic(() => import("./Home/NewHero"));
const Intro = dynamic(() => import("./Home/Intro"));

export default function Page() {
  return (
    <>
      <HeroNewSection/>
      <Intro/>
      <SolutionsSection />
      <ServicesGrid/>
      <Frame />
      <WhyClientsChooseUs/>
      <WeHelpYouSolve/>
      <NewsletterSection/>
    </>
  );
}
