"use client";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/constant/type";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList = ({ blogPosts }: BlogListProps) => {
  const router = useRouter();

  const handleReadMore = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <section className=" py-16 font-thin">
      <div className="container max-w-[1330px] mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-3xl  mb-4">From The Blogs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.map((post: BlogPost) => (
            <Card
              key={post._id}
              className="group  transition-all duration-300 overflow-hidden  shadow-none p-0 rounded-sm border-gray-600"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image?.[0]?.url}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-2 right-2">
                  <div className="bg-red-400 text-white px-3 py-1 rounded-sm text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toISOString().slice(0, 10)}
                  </div>
                </div>
              </div>

              <CardContent className="p-3 pt-0">
                <h3
                  className="font-semibold text-md mb-3 text-gray-300 line-clamp-2 group-hover:text-gray-400 transition-colors cursor-pointer hover:text-red-400"
                  onClick={() => handleReadMore(post._id)}
                >
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4 text-xs text-white">
                  <span className="flex items-center gap-1 text-accent">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-secondary">{post.category}</span>
                </div>

                <button
                  className="text-red-700 cursor-pointer p-0 h-auto font-medium hover:text-red-500"
                  onClick={() => handleReadMore(post._id)}
                >
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
