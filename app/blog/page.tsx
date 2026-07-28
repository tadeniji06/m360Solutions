import type { Metadata } from "next";
import BlogPostsClient from "./BlogPostsClient";
import { JsonLd } from "@/components/json_ld";

const BASE_URL = "https://m360solutionsgroup.com/";

export const metadata: Metadata = {
  title: "M360 Blog | Insights for Marketing & Growth",
  description:
    "M360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses across African markets.",
  openGraph: {
    title: "M350 Blog | Insights for Business & Marketing Growth",
    description:
      "Stay ahead with M360 Solutions insights on consulting, expansion, and growth opportunities in Africa.",
    url: `${BASE_URL}/blog`,
    siteName: "M360 Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M360 Solutions Blog | Insights for Business Growth",
    description:
      "Discover expert content and strategies from Explore360 to grow your business in Africa.",
    images: [`${BASE_URL}/newLogo.png`],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${BASE_URL}blog/#blog`,
      mainEntityOfPage: `${BASE_URL}blog`,
      url: `${BASE_URL}blog`,
      name: "M360 Blog | Insights for Business & Marketing Growth",
      headline: "M360 Blog | Insights for Marketing & Growth",
      description:
        "M360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses across African markets.",
      inLanguage: "en",
      isPartOf: { "@id": `${BASE_URL}#website` },
      publisher: { "@id": `${BASE_URL}#organization` },
      about: [
        { "@type": "Thing", name: "Marketing strategy" },
        { "@type": "Thing", name: "Business growth in Africa" },
        { "@type": "Thing", name: "Digital marketing consulting" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}blog/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${BASE_URL}blog`,
        },
      ],
    },
  ],
};

const BlogsPage = () => {
  return (
    <>
      <JsonLd data={[blogSchema]} />
      <BlogPostsClient />
    </>
  );
};

export default BlogsPage;
