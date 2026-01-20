import { BlogListSection } from "@/components/Blogs/BlogListSection";
import { HeroSection } from "@/components/common/HeroSection";
import { Suspense } from "react";
import { Metadata } from "next";
import { getBlogs } from "@/functions/blog";

export const metadata: Metadata = {
  title:
    "Bayshore Intelligence Solutions – AI-Enabled Application & Offshore Development for Start-ups & Enterprises",
  description: "Bayshore - Blogs Page",
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
    <div className="bg-[#f7f9fa] w-full min-h-screen">
      <div className="bg-[#f7f9fa] overflow-hidden w-full relative">
        {/* Hero Section */}
        <div className="relative">
          <HeroSection
            title="Our Blogs"
            breadcrumb={[{ label: "Blog", href: "#" }]}
            titleWidth="max-w-[400px]"
            height="h-[150px] lg:h-[212px]"
          />
        </div>

        {/* Blog list Section */}
        <div className="relative">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                Loading...
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
      </div>
    </div>
  );
};

export default Blog;
