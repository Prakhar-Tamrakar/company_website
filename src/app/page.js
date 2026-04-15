import dynamic from "next/dynamic";

const HeroNewSection = dynamic(() => import("./Home/Hero"));
const IntroSection = dynamic(() => import("./Home/IntroSection"));
const BusinessImpact = dynamic(() => import("./Home/BusinessImpact"));
const Services = dynamic(() => import("../temp/services.jsx"));
import Frame from "./Home/UniqueDifferences";
// const Frame = dynamic(() => import("./Home/UniqueDifferences"));
const NewsletterSection = dynamic(() => import("./Home/NewsletterSection"));


export default function Page() {
  return (
    <>
      <HeroNewSection />
      <IntroSection />
      <BusinessImpact />
      <Services />
      <Frame />
      <NewsletterSection />
      </>
  );
}
