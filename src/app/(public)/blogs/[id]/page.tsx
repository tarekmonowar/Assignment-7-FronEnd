// src/app/blogs/[id]/page.tsx
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
    console.log("Blog ID from params:", id);
  } catch (error) {
    console.log("Error resolving params:", error);
    notFound();
  }

  if (!id) {
    console.log("No ID provided");
    notFound();
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`;
    console.log("Fetching from API URL:", apiUrl);

    const res = await fetch(apiUrl, {
      next: { revalidate: 5 },
    });

    console.log("API Response status:", res.status);
    console.log("API Response ok:", res.ok);

    if (!res.ok) {
      console.log("API returned error status:", res.status);
      console.log(
        "API Response headers:",
        Object.fromEntries(res.headers.entries()),
      );

      // Try to get error message from response
      const errorText = await res.text();
      console.log("API Error response:", errorText);

      notFound();
    }

    const blogPost: BlogPost = await res.json();
    console.log("Blog post data received:", blogPost);

    if (!blogPost || !blogPost._id) {
      console.log("Invalid blog post data received");
      notFound();
    }

    return <BlogDetailClient post={blogPost} />;
  } catch (error) {
    console.log("Fetch error:", error);
    notFound();
  }
}
