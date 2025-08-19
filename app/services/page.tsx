import ServiceHero from "@/components/services/ServiceHero";
import Services from "@/components/services/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "M360 Solutions Limited Services | Marketing 360 Solutions",
	description: "M360 Solutions Limited | Marketing 360 Solutions",
	
};
const page = () => {
  return (
    <> 
    <ServiceHero />
    <Services />
    </>
  )
}
export default page