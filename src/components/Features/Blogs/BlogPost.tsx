import { BlogPost } from "@/constant/type";
import BlogList from "./BlogLists";

const Blogs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog`,
    { next: { revalidate: 5 } },
  );

  if (!res.ok) {
    console.error("Failed to fetch blogs:", res.status, await res.text());
    return <div>Error loading blogs</div>;
  }

  const blogPosts: BlogPost[] = await res.json();

  return <BlogList blogPosts={blogPosts} />;
};

export default Blogs;
