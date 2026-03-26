import dynamic from "next/dynamic";

const HeroNewSection = dynamic(() => import("./Home/Hero"));
const IntroSection = dynamic(() => import("./Home/IntroSection"));
const ServicesSection = dynamic(() => import("./Home/ServicesSection"));
const SolutionsSection = dynamic(() => import("./Home/SolutionsSection"));
const Frame = dynamic(() => import("./Home/UniqueDifferences"));
const WhyClientsChooseUs = dynamic(() => import("./Home/whyClientChooseUs"));
const WeHelpYouSolve = dynamic(() => import("./Home/weHelpYouSolve"));
const NewsletterSection = dynamic(() => import("./Home/NewsletterSection"));
const Services = dynamic(()=>import("../temp/services.jsx"));
// const BentoServices = dynamic(()=>import("../temp/BentoServices.jsx"));
const PartnersInfiniteScroll = dynamic(() => import("./Home/PartnersInfiniteScroll"));
export default function Page() {
  return (
    <>

      <HeroNewSection/>
      <IntroSection/>
      <WhyClientsChooseUs/>
      <Services/>
      {/* <BentoServices/> */}
      {/* <ServicesSection/> */}
      {/* <SolutionsSection /> */}
      {/* <Frame /> */}
      {/* <WeHelpYouSolve/> */}
      <NewsletterSection/>
      <PartnersInfiniteScroll/>
    </>
  );
}
