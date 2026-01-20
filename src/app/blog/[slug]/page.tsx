import { Details } from "@/components/Blogs/Details";
import { getBlogBySlug, getBlogs } from "@/functions/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return {
    title: blog ? `${blog.title} | Austic Scrap Blog` : "Blog Not Found",
    description: (blog?.description || "").substring(0, 160),
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const { blogs: recommendedBlogs } = await getBlogs(1, 5);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Details blog={blog} recommendedBlogs={recommendedBlogs} />
    </main>
  );
}
