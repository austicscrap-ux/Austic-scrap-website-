import { RecommendedCard } from "@/components/Blogs/recommendedCard";
import { Blog } from "@/types/blog";

interface RecommendedBlogsSectionProps {
  blogPosts: Blog[];
}

export const RecommendedBlogsSection = ({
  blogPosts,
}: RecommendedBlogsSectionProps) => {
  return (
    <div className="flex flex-col w-full pl-2 pr-0">
      <h2 className="font-semibold text-xl text-[#313131] font-['Open_Sans',Helvetica] leading-[24px] mb-[30px]">
        Recommended Blogs
      </h2>
      <div className="flex flex-col space-y-6">
        {blogPosts.map((blog, index) => (
          <RecommendedCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};
