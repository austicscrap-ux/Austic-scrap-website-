import { Details } from "@/components/Blogs/Details";
import { getBlogBySlug, getBlogs } from "@/functions/blog";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.austicscrap.com';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const plainDescription = (blog.description || "")
    .replace(/<[^>]*>/g, "")
    .substring(0, 160)
    .trim();

  const blogUrl = `${BASE_URL}/blog/${slug}`;
  const ogImage = blog.image || "/images/home-page.jpg";

  return {
    title: `${blog.title} | Austic Scrap Blog`,
    description: plainDescription,
    keywords: [
      "e-waste recycling",
      "scrap management",
      "IT asset disposal",
      "Austic Scrap blog",
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      url: blogUrl,
      title: blog.title,
      description: plainDescription,
      siteName: "Austic Scrap & E-Waste Recycling",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: plainDescription,
      images: [ogImage],
      creator: "@austicscrap",
    },
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
