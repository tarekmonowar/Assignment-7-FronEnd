// src/app/blogs/[id]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/constant/BlogPost";
import BlogDetailClient from "./BlogDetails";
import { BlogPost } from "@/constant/type";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`,
    { next: { revalidate: 5 } },
  );

  const blogPosts: BlogPost = await res.json();

  if (!blogPosts) notFound();

  return <BlogDetailClient post={blogPosts} />;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export const dynamicParams = true;
