import "./globals.css";
import Header from "@/layouts/Header";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import Footer from "@/layouts/Footer";
import type { Metadata } from "next";
import ClarityScript from "@/components/Clarity";
import AnalyticsScript from "@/components/Analytics";

export const metadata: Metadata = {
  title: "M360 Solutions Limited | Marketing 360 Solutions",
  description: "M360 Solutions Limited | Marketing 360 Solutions",
  icons: {
    icon: "/newLogo.png",
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
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <ClarityScript />
        <AnalyticsScript />
      </body>
    </html>
  );
}
