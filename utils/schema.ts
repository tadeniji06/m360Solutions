const BASE_URL = "https://m360solutionsgroup.com/";

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "M360 Solutions Limited",
      alternateName: "M360 Solutions Group",
      url: `${BASE_URL}`,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}#logo`,
        url: `${BASE_URL}_next/static/media/logo.4dd9a254.png`,
        caption: "M360 Solutions Limited",
      },
      image: { "@id": `${BASE_URL}#logo` },
      description:
        "M360 Solutions Limited is Africa's No.1 Marketing ROI Agency, an integrated marketing communication company with a Digital First approach, serving clients across Sub-Saharan Africa.",
      slogan: "Africa's No.1 Marketing ROI Agency",
      email: "info@m360solutionsgroup.com",
      telephone: "+234-806-496-8725",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "426a Oluwadamilola Fasade Street, Omole Phase 1",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
      ],
      location: [
        {
          "@type": "Place",
          name: "M360 Solutions - Lagos",
          address: {
            "@type": "PostalAddress",
            streetAddress: "426a Oluwadamilola Fasade Street, Omole Phase 1",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
          telephone: "+234-806-496-8725",
        },
        {
          "@type": "Place",
          name: "M360 Solutions - Nairobi",
          address: {
            "@type": "PostalAddress",
            streetAddress: "132 Manyani East Road, Lavington",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          telephone: "+254-72-650-5002",
        },
        {
          "@type": "Place",
          name: "M360 Solutions - Johannesburg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24A Loots Road, Blairgowrie, Randburg",
            addressLocality: "Randburg",
            postalCode: "2194",
            addressCountry: "ZA",
          },
          telephone: "+27-65-694-6477",
        },
      ],
      areaServed: { "@type": "Place", name: "Sub-Saharan Africa" },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}#website`,
      url: `${BASE_URL}`,
      name: "M360 Solutions",
      publisher: { "@id": `${BASE_URL}#organization` },
      inLanguage: "en",
    },
  ],
};
