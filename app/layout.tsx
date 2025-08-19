import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "M360 Solutions Limited | Marketing 360 Solutions",
	description: "M360 Solutions Limited | Marketing 360 Solutions",
	icons: {
		icon: "/newLogo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
