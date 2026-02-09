import dynamic from "next/dynamic";
import DrivingOutcomes from "./DrivingOutcomes";
import Journey from "./Journey";
import Newservice from "./Newservice";
import OurCapabilities from "./OurCapabilities";
import WhyClientstay from "./WhyClientstay";

const ServiceCatagories = dynamic(() => import("./ServiceCatagories"));

export default function ServicesRootLayout({ children }) {
  return (
    <>
      {children}
      <OurCapabilities />
      <DrivingOutcomes />
      <Newservice/>
      <ServiceCatagories />
      <WhyClientstay />
      <Journey />
    </>
  );
}