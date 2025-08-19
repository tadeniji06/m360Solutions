
import AboutHero from "@/components/about/AboutHero";
import FrameWork from "@/components/home/FrameWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About M360 Solutions | Marketing 360 Solutions",
	description: "M360 Solutions Limited | Marketing 360 Solutions",

};
const page = () => {
  return (
    <>
    <AboutHero />
    <FrameWork />
    </>
  )
}
export default page