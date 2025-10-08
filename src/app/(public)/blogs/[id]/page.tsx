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
  } catch (error) {
    console.log("Error resolving params:", error);
    notFound();
  }
  if (!id) {
    notFound();
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 5 },
    });
    if (!res.ok) {
      notFound();
    }
    const blogPost: BlogPost = await res.json();
    if (!blogPost || !blogPost._id) {
      notFound();
    }
    return <BlogDetailClient post={blogPost} />;
  } catch (error) {
    console.log("Fetch error:", error);
    notFound();
  }
}

// Add static generation for better performance and fixed vercel error
export async function generateStaticParams() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog`;

    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      return [];
    }
    const blogPosts: BlogPost[] = await res.json();
    return blogPosts.map((post) => ({
      id: post._id,
    }));
  } catch (error) {
    console.log("Error in generateStaticParams:", error);
    return [];
  }
}

export const dynamicParams = true;

// Add metadata generation for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      return {
        title: "Blog Post Not Found",
      };
    }

    const blogPost: BlogPost = await res.json();

    return {
      title: blogPost.title,
      description: blogPost.excerpt || blogPost.content.slice(0, 160),
      openGraph: {
        title: blogPost.title,
        description: blogPost.excerpt || blogPost.content.slice(0, 160),
        images: blogPost.image
          ? blogPost.image.map((img) => img.url || img)
          : [],
      },
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Blog Post",
    };
  }
}
