"use client";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/constant/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface BlogSidebarProps {
  currentBlogId: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ currentBlogId }) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog`,
          { cache: "no-store" },
        );
        const data: BlogPost[] = await res.json();

        // Exclude current blog
        setRelatedPosts(data.filter((post) => post._id !== currentBlogId));
      } catch (error) {
        console.error("Failed to fetch blog posts", error);
      }
    };

    fetchPosts();
  }, [currentBlogId]);

  const handlePostClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Related Articles</h3>

      {relatedPosts.map((post) => (
        <Card
          key={post._id}
          className="cursor-pointer hover:shadow-md transition-shadow duration-200 bg-gray-950 p-0 rounded-sm border-gray-600"
          onClick={() => handlePostClick(post._id)}
        >
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Image
                src={post.image?.[0].url}
                alt={post.title}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                width={80}
                height={80}
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-gray-400 line-clamp-2 mb-4 hover:text-red-500 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-accent">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogSidebar;
