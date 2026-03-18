import dynamic from "next/dynamic";

const HeroNewSection = dynamic(() => import("./Home/Hero"));
const IntroSection = dynamic(() => import("./Home/IntroSection"));
const ServicesSection = dynamic(() => import("./Home/ServicesSection"));
const SolutionsSection = dynamic(() => import("./Home/SolutionsSection"));
const Frame = dynamic(() => import("./Home/UniqueDifferences"));
const WhyClientsChooseUs = dynamic(() => import("./Home/whyClientChooseUs"));
const WeHelpYouSolve = dynamic(() => import("./Home/weHelpYouSolve"));
const NewsletterSection = dynamic(() => import("./Home/NewsletterSection"));

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
