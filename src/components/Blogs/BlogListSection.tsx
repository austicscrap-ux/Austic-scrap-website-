import { CustomPagination } from "@/components/common/CustomPagination";
import { RecommendedBlogsSection } from "@/components/Blogs/RecommendedBlogsSection";
import { BlogCard } from "@/components/Blogs/blogCard";
import { Blog } from "@/types/blog";

interface BlogListSectionProps {
  blogPosts: Blog[];
  totalPages: number;
  currentPage: number;
  recommendedBlogs: Blog[];
}

export const BlogListSection = ({
  blogPosts,
  totalPages,
  currentPage,
  recommendedBlogs,
}: BlogListSectionProps) => {
  return (
    <section className="w-full min-h-screen bg-amber-50/30 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-[86px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 text-left">
          {/* Main Content Area */}
          <div>
            <div className="space-y-8">
              {blogPosts.map((post: Blog, index: number) => (
                <BlogCard key={post?.slug} post={post} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16">
              <CustomPagination
                currentPage={Number(currentPage)}
                totalPages={totalPages}
              />
            </div>
          </div>

          {/* Sidebar / Recommended */}
          <div>
            <div className="sticky top-24">
              <RecommendedBlogsSection blogPosts={recommendedBlogs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
