/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";

interface IProject {
  _id: string;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  cover: { url: string; public_id: string };
}

interface IFormInput {
  title: string;
  summary: string;
  tags: string;
  githubLink: string;
  liveLink: string;
  cover: File | null;
}

const EditProject = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [editingProject, setEditingProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [fetching, setFetching] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setFetching(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project`,
      );
      setProjects(res.data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to fetch projects");
    } finally {
      setFetching(false); // stop loader
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Load project into form for editing
  const handleEdit = (project: IProject) => {
    setEditingProject(project);
    setValue("title", project.title);
    setValue("summary", project.summary);
    setValue("tags", project.tags.join(", "));
    setValue("githubLink", project.githubLink);
    setValue("liveLink", project.liveLink);
  };

  // Delete project
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project/${id}`,
      );
      setProjects(projects.filter((p) => p._id !== id));
      setSuccessMsg("Project deleted successfully");
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to delete project");
    }
  };

  // Update project
  const onSubmit = async (data: IFormInput) => {
    if (!editingProject) return;

    try {
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

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

      // Only append new cover image if selected
      const file = data.cover instanceof FileList ? data.cover[0] : data.cover;
      if (file) formData.append("cover", file);

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project/${editingProject._id}`,
        formData,
      );

      setSuccessMsg("Project updated successfully!");
      setEditingProject(null);
      reset();
      fetchProjects();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const wordCount = (text: string) => text.trim().split(/\s+/).length;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 mt-10">Edit Project</h2>

      {/* Project List */}
      <div className="mb-6">
        {fetching ? (
          <p className="text-white text-center mt-10">Loading projects...</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="flex justify-between gap-32 items-center max-w-6xl p-2 border-b border-gray-700"
            >
              <div>
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-gray-400">{project.summary}</p>
              </div>
              <div className="flex gap-10">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Form */}
      {editingProject && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Title</label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
                validate: (value) =>
                  value.trim().split(/\s+/).length <= 10 ||
                  "Title cannot exceed 10 words",
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
              {...register("tags", {
                required: "At least one tag is required",
              })}
              className="w-full p-2 border rounded-md bg-gray-800"
            />
            {errors.tags && (
              <p className="text-red-500">{errors.tags.message}</p>
            )}
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
            <label>New Cover Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-md bg-gray-800"
              {...register("cover")}
            />
          </div>

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          {successMsg && <p className="text-green-500">{successMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Project"}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProject;
