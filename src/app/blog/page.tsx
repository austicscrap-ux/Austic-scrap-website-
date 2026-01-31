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
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64 text-[#127749]">
              Loading insights...
            </div>
          }
        >
          <BlogListSection
            blogPosts={blogPosts}
            totalPages={totalPages}
            currentPage={currentPage}
            recommendedBlogs={recommendedBlogs}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Blog;
