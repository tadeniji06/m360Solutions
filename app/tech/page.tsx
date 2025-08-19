import Solutions from "@/components/tech/Solutions";
import TechHero from "@/components/tech/TechHero";
import WhyUs from "@/components/tech/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "M360 Solutions Tech | Marketing 360 Solutions",
	description: "M360 Solutions Limited | Marketing 360 Solutions",
};

const page = () => {
	return (
		<>
			<TechHero />
			<Solutions />
			<WhyUs />
		</>
	);
};
export default page;
