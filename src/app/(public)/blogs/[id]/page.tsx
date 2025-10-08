// src/app/blogs/[id]/page.tsx
import { BlogPost } from "@/constant/type";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetails";

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`,
    { next: { revalidate: 5 } },
  );

  const blogPosts: BlogPost = await res.json();

  if (!blogPosts) notFound();

  return <BlogDetailClient post={blogPosts} />;
}

export const dynamicParams = true;
