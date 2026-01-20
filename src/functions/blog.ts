import { Blog } from "@/types/blog";
import { blogPosts } from "@/data/blog";

export const getBlogs = async (page: number = 1, limit: number = 9): Promise<{ blogs: Blog[]; totalPages: number }> => {
  // Commenting out API calls as per user request for frontend-only focus
  /*
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const response = await fetch(`${baseUrl}/api/blog?page=${page}&pageLimit=${limit}`, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const result = await response.json();
    return {
      blogs: result.data || [],
      totalPages: result.totalPages || 0,
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      blogs: [],
      totalPages: 0,
    };
  }
  */

  // Using static data for frontend focus
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
  // Commenting out API calls as per user request for frontend-only focus
  /*
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const response = await fetch(`${baseUrl}/api/blog/${slug}`, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
  */

  // Using static data for frontend focus
  const blog = blogPosts.find((post) => post.slug === slug);
  return blog || null;
};
