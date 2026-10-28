import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { JsonLd } from "@/components/json_ld";

const BASE_URL = "https://m360solutionsgroup.com/";

export const metadata: Metadata = {
  title: "Privacy Policy | M360 Solutions Limited",
  description:
    "Official Privacy Policy of M360 Solutions Group Limited governing personal data processing under the Nigeria Data Protection Act (NDPA & GAID) in connection with our white label advertising technology platform.",
  openGraph: {
    title: "Privacy Policy | M360 Solutions Limited",
    description:
      "Data protection framework, cookie policy, and user privacy rights under the NDPA and GAID for M360 Solutions Group Limited.",
    url: `${BASE_URL}privacy-policy`,
    siteName: "M360 Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | M360 Solutions Limited",
    description:
      "Data protection framework, cookie policy, and user privacy rights under the NDPA and GAID for M360 Solutions Group Limited.",
  },
  alternates: {
    canonical: `${BASE_URL}privacy-policy`,
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}privacy-policy/#webpage`,
      url: `${BASE_URL}privacy-policy`,
      name: "Privacy Policy | M360 Solutions Limited",
      description:
        "Official Privacy Policy of M360 Solutions Group Limited governing personal data processing under the Nigeria Data Protection Act (NDPA & GAID).",
      isPartOf: { "@id": `${BASE_URL}#website` },
      about: { "@id": `${BASE_URL}#organization` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}privacy-policy/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: `${BASE_URL}privacy-policy`,
        },
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={[privacySchema]} />
      <PrivacyPolicyClient />
    </>
  );
}

