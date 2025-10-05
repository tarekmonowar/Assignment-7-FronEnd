import { BlogPost } from "@/constant/type";
import BlogList from "./BlogLists";

const Blogs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog`,
    { next: { revalidate: 5 } },
  );

  const blogPosts: BlogPost[] = await res.json();

  return <BlogList blogPosts={blogPosts} />;
};

export default Blogs;
