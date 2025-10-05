/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";

interface IBlog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: { url: string; public_id: string }[];
}

interface IFormInput {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: File | null;
}

const EditBlog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [editingBlog, setEditingBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog`,
      );
      setBlogs(res.data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to fetch blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Load blog into form for editing
  const handleEdit = (blog: IBlog) => {
    setEditingBlog(blog);
    setValue("title", blog.title);
    setValue("excerpt", blog.excerpt);
    setValue("content", blog.content);
    setValue("category", blog.category);
    setValue("readTime", blog.readTime);
  };

  // Delete blog
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${id}`,
      );
      setBlogs(blogs.filter((b) => b._id !== id));
      setSuccessMsg("Blog deleted successfully");
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to delete blog");
    }
  };

  // Update blog
  const onSubmit = async (data: IFormInput) => {
    if (!editingBlog) return;

    try {
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("excerpt", data.excerpt);
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("readTime", data.readTime);
      formData.append("author", "Admin");
      formData.append("date", new Date().toISOString());

      // Only append new image if user selected one
      const file = data.image instanceof FileList ? data.image[0] : data.image;
      if (file) formData.append("image", file);

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog/${editingBlog._id}`,
        formData,
      );

      setSuccessMsg("Blog updated successfully!");
      setEditingBlog(null);
      reset();
      fetchBlogs();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 mt-10">Edit Blog</h2>

      {/* Blog List */}
      <div className="mb-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex justify-between gap-32 items-center max-w-6xl h-30 font-lg p-2 border-b border-gray-700"
          >
            <div>
              <p className="font-semibold">{blog.title}</p>
              <p className="text-sm text-gray-400">{blog.excerpt}</p>
            </div>

            <div className="flex gap-10">
              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Form */}
      {editingBlog && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border rounded-md bg-gray-800"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label>Category</label>
            <input
              type="text"
              {...register("category", { required: "Category is required" })}
              className="w-full p-2 border rounded-md bg-gray-800"
            />
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label>Excerpt</label>
            <textarea
              {...register("excerpt", { required: "Excerpt is required" })}
              className="w-full p-2 border rounded-md bg-gray-800 h-20"
            />
            {errors.excerpt && (
              <p className="text-red-500">{errors.excerpt.message}</p>
            )}
          </div>

          <div>
            <label>Content</label>
            <textarea
              {...register("content", { required: "Content is required" })}
              className="w-full p-2 border rounded-md bg-gray-800 h-40"
            />
            {errors.content && (
              <p className="text-red-500">{errors.content.message}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div>
              <label>Read Time</label>
              <input
                type="text"
                {...register("readTime", { required: "Read time is required" })}
                className="w-full p-2 border rounded-md bg-gray-800"
              />
              {errors.readTime && (
                <p className="text-red-500">{errors.readTime.message}</p>
              )}
            </div>

            <div>
              <label>New Image (optional)</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border rounded-md bg-gray-800"
                {...register("image")}
              />
            </div>
          </div>

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          {successMsg && <p className="text-green-500">{successMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Blog"}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditBlog;
