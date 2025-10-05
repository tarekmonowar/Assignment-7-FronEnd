/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  title: string;
  summary: string;
  tags: string;
  githubLink: string;
  liveLink: string;
  cover: File | null;
}

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const wordCount = (text: string) => text.trim().split(/\s+/).length;

  const onSubmit = async (data: IFormInput) => {
    try {
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

      if (!data.cover) {
        setErrorMsg("Cover image is required");
        setLoading(false);
        return;
      }

      const file = data.cover instanceof FileList ? data.cover[0] : data.cover;

      // Prepare FormData
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("summary", data.summary);
      formData.append("slug", data.title.toLowerCase().replace(/\s+/g, "-"));
      formData.append(
        "tags",
        JSON.stringify(data.tags.split(",").map((tag) => tag.trim())),
      );
      formData.append("githubLink", data.githubLink);
      formData.append("liveLink", data.liveLink);
      formData.append("cover", file);

      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project`,
        formData,
      );

      setSuccessMsg("Project created successfully!");
      reset();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Title</label>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
              validate: (value) =>
                wordCount(value) <= 10 || "Title cannot exceed 10 words",
            })}
            className="w-full p-2 border rounded-md bg-gray-800"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label>Summary</label>
          <textarea
            {...register("summary", {
              required: "Summary is required",
              validate: (value) =>
                wordCount(value) <= 60 || "Summary cannot exceed 60 words",
            })}
            className="w-full p-2 border rounded-md bg-gray-800 h-20"
          />
          {errors.summary && (
            <p className="text-red-500">{errors.summary.message}</p>
          )}
        </div>

        <div>
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            {...register("tags", { required: "At least one tag is required" })}
            className="w-full p-2 border rounded-md bg-gray-800"
          />
          {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
        </div>

        <div className="flex gap-4">
          <div>
            <label>GitHub Link</label>
            <input
              type="url"
              {...register("githubLink")}
              className="w-full p-2 border rounded-md bg-gray-800"
            />
          </div>

          <div>
            <label>Live Link</label>
            <input
              type="url"
              {...register("liveLink")}
              className="w-full p-2 border rounded-md bg-gray-800"
            />
          </div>
        </div>

        <div>
          <label>Cover Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("cover", { required: "Cover image is required" })}
            className="w-full p-2 border rounded-md bg-gray-800"
          />
          {errors.cover && (
            <p className="text-red-500">{errors.cover.message}</p>
          )}
        </div>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        {successMsg && <p className="text-green-500">{successMsg}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
