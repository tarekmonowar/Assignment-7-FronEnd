import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetails";
import { BlogPost } from "@/constant/type";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let id;
  try {
    const resolvedParams = await params;
    id = resolvedParams.id;
  } catch (error) {
    console.log(error);
    notFound();
  }

  if (!id) {
    notFound();
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`,
      { next: { revalidate: 5 } },
    );

    if (!res.ok) {
      notFound();
    }

    const blogPost: BlogPost = await res.json();

    return <BlogDetailClient post={blogPost} />;
  } catch (error) {
    console.log(error);
    notFound();
  }
}
