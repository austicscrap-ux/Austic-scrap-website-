import { Blog } from "@/types/blog";
import { blogPosts } from "@/data/blog";

export const getBlogs = async (
  page: number = 1,
  limit: number = 9
): Promise<{ blogs: Blog[]; totalPages: number }> => {
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedBlogs = blogPosts.slice(start, end);
  const totalPages = Math.ceil(blogPosts.length / limit);

  return {
    blogs: paginatedBlogs,
    totalPages,
  };
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  const blog = blogPosts.find((post) => post.slug === slug);
  return blog || null;
};

