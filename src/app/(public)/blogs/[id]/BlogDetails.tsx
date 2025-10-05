// src/app/blogs/[id]/BlogDetailClient.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import BlogSidebar from "./BlogSidebar";

export interface BlogImage {
  public_id: string;
  url: string;
}

interface BlogDetailClientProps {
  post: {
    _id: string;
    title: string;
    content: string;
    image: BlogImage[];
    category: string;
    author: string;
    date: string;
    readTime: string;
  };
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-5">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={post.image?.[0].url}
          alt={post.title}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container max-w-[1300px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Button
                onClick={() => router.back()}
                className="rounded-sm bg-accent hover:bg-accent/80 cursor-pointer text-black mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <div className="prose prose-lg max-w-none">
                <div className="mb-6">
                  <span className="bg-gray-200 px-2 text-[#246b08] py-1 rounded-sm text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <div className="leading-relaxed whitespace-pre-line text-gray-300">
                  {post.content}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar currentBlogId={post._id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
