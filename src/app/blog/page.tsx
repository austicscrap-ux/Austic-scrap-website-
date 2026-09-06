// src/app/blog/page.tsx
import { BlogListSection } from "@/components/Blogs/BlogListSection";
import HeroSection from "@/components/ui/HeroSection";
import { Suspense } from "react";
import { Metadata } from "next";
import { getBlogs } from "@/functions/blog";

export const metadata: Metadata = {
  title: "Insights & Updates | Austic Scrap Solutions",
  description:
    "Stay informed with the latest news, trends, and insights in sustainable scrap management and recycling.",
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    "Scrap management blog",
    "E-waste recycling insights",
    "Corporate scrap disposal tips",
    "Sustainable recycling news India",
    "IT asset disposal guide",
    "Metal scrap market updates",
    "Office scrap buying trends",
    "Recycling industry India",
  ],
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/blog",
    title: "Insights & Updates | Austic Scrap Blog",
    description:
      "Latest news, trends & insights in sustainable scrap management, e-waste recycling & IT asset disposal.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Austic Scrap blog on recycling and scrap management insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Updates | Austic Scrap Blog",
    description:
      "Latest news & insights in sustainable scrap management, e-waste recycling & IT asset disposal.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

const Blog = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const { blogs: blogPosts, totalPages } = await getBlogs(currentPage);
  const { blogs: recommendedBlogs } = await getBlogs(1, 5); // Get first 5 for recommendations

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection
        title="Insights & Updates"
        subtitle="Exploring the future of sustainable waste management, one article at a time."
      />

      <div className="relative">
        <BlogListSection
          blogPosts={blogPosts}
          totalPages={totalPages}
          currentPage={currentPage}
          recommendedBlogs={recommendedBlogs}
        />
      </div>
    </main>
  );
};

export default Blog;
