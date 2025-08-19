import type { Metadata } from "next";
import BlogPostsClient from "./BlogPostsClient";

export const metadata: Metadata = {
  title: "M360 Blog | Insights for Marketing & Growth",
  description:
    "M360 Blog shares expert insights, data-driven strategies, and tools to help companies start, grow, and expand their businesses across African markets.",
  openGraph: {
    title: "M350 Blog | Insights for Business & Marketing Growth",
    description:
      "Stay ahead with M360 Solutions insights on consulting, expansion, and growth opportunities in Africa.",
    url: "https://m360solutionsgroup.com/blog",
    siteName: "M360 Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M360 Solutions Blog | Insights for Business Growth",
    description:
      "Discover expert content and strategies from Explore360 to grow your business in Africa.",
    images: ["https://https://m360solutionsgroup.com/newLogo.png"],
  },
};

const BlogsPage = () => {
  return <BlogPostsClient />;
};

export default BlogsPage;
