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
    <section className="w-full min-h-screen bg-white">
      <div className="px-4 lg:px-[86px] py-[40px] lg:py-[60px] div-2">
        <div className="mt-[0px]">
          <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr]">
            {/* Blog posts */}
            <div className="w-full lg:pr-[20px] py-[10px] order-1">
              {blogPosts.map((post: Blog, index: number) => (
                <BlogCard key={post?.slug} post={post} index={index} />
              ))}
            </div>

            {/* Pagination — should follow blog posts on mobile */}
            <div className="mb-[40px] order-2 md:order-3 block lg:hidden">
              <CustomPagination
                currentPage={Number(currentPage)}
                totalPages={totalPages}
              />
            </div>

            {/* Recommended blogs */}
            <div className="w-full pl-[10px] pr-0 order-3 md:order-2 lg:border-l-[1px] lg:border-[#e5e7eb]">
              <RecommendedBlogsSection blogPosts={recommendedBlogs} />
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-[50px] hidden lg:block">
            <CustomPagination
              currentPage={Number(currentPage)}
              totalPages={totalPages}
              className="mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
