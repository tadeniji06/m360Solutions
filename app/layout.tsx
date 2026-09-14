import "./globals.css";
import Header from "@/layouts/Header";
import {
	Bricolage_Grotesque,
	Instrument_Sans,
	IBM_Plex_Mono,
} from "next/font/google";
import Script from "next/script";
import Footer from "@/layouts/Footer";
import type { Metadata } from "next";
import ClarityScript from "@/components/Clarity";
import AnalyticsScript from "@/components/Analytics";
import { JsonLd } from "@/components/json_ld";
import { OrganizationSchema } from "@/utils/schema";

const BASE_URL = "https://m360solutionsgroup.com/";

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: "M360 Solutions Limited | Africa's No.1 Marketing ROI Agency",
		template: "%s | M360 Solutions",
	},
	description:
		"M360 Solutions Limited is Africa's No.1 Marketing ROI Agency, an integrated marketing communication company with a Digital First approach, serving clients across Sub-Saharan Africa.",
	keywords: [
		"marketing agency Africa",
		"digital marketing Nigeria",
		"marketing ROI agency",
		"integrated marketing communications",
		"M360 Solutions",
	],
	authors: [{ name: "M360 Solutions Limited" }],
	icons: {
		icon: "/newLogo.png",
	},
	openGraph: {
		title: "M360 Solutions Limited | Africa's No.1 Marketing ROI Agency",
		description:
			"Integrated marketing communication with a Digital First approach, serving clients across Sub-Saharan Africa.",
		url: BASE_URL,
		siteName: "M360 Solutions",
		images: [
			{
				url: `${BASE_URL}_next/static/media/logo.4dd9a254.png`,
				width: 1200,
				height: 630,
				alt: "M360 Solutions Limited",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "M360 Solutions Limited | Africa's No.1 Marketing ROI Agency",
		description:
			"Integrated marketing communication with a Digital First approach, serving clients across Sub-Saharan Africa.",
		images: [`${BASE_URL}_next/static/media/logo.4dd9a254.png`],
	},
	alternates: {
		canonical: BASE_URL,
	},
	robots: {
		index: true,
		follow: true,
	},
};

const display = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-display",
});

const body = Instrument_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-body",
});

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${display.variable} ${body.variable} ${mono.variable}`}
		>
			<head>
				<JsonLd data={OrganizationSchema} />
			</head>
			<body className="antialiased">
				<Header />

				<Script
					src="https://app.crm360online.com/capture.js"
					data-endpoint="https://crm-vertical-saas.onrender.com/api/v1/public/leads/inbound"
					data-key="pk_live_68f43a6b0560a7cbf69b4c03a216914448be5ee9cae119ad"
					data-selector="#contact-form"
					strategy="afterInteractive"
				/>
				{children}
				<Footer />
				<ClarityScript />
				<AnalyticsScript />
			</body>
		</html>
	);
}
