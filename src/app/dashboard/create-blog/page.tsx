/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: File | null;
}

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = async (data: IFormInput) => {
    try {
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");
      const file = data.image instanceof FileList ? data.image[0] : data.image;
      if (!file) {
        setErrorMsg("Image is required");
        setLoading(false);
        return;
      }

      // Create FormData to send to backend
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("excerpt", data.excerpt);
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("readTime", data.readTime);
      formData.append("author", "Admin");
      formData.append("date", new Date().toISOString());
      formData.append("image", file); // must match multer field name

      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/blog`,
        formData,
      );

      setSuccessMsg("Blog created successfully!");
      reset();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
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
        </div>

        <div>
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
        </div>
        <div>
          <label>Content</label>
          <textarea
            {...register("content", { required: "Content is required" })}
            className="w-full p-2 border rounded h-40 rounded-md bg-gray-800"
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
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-md bg-gray-800"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
        </div>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        {successMsg && <p className="text-green-500">{successMsg}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
