"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ProjectItem } from "@/constant/type";

interface ProjectDetailsClientProps {
  project: ProjectItem;
}

export interface ProjectImage {
  public_id: string;
  url: string;
}

const ProjectDetailsClient = ({ project }: ProjectDetailsClientProps) => {
  const router = useRouter();

  return (
    <div className="pt-5">
      {/* Cover Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
        <Image
          src={project.cover?.[0]?.url || "/placeholder.png"}
          alt={project.title}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-[1300px] mx-auto px-4 py-12">
        <Button
          onClick={() => router.back()}
          className="rounded-sm bg-accent hover:bg-accent/80 cursor-pointer text-black mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary / Description */}
            <div className="prose prose-lg max-w-none text-gray-300">
              <p>{project.summary}</p>
            </div>

            {/* Tech / Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 px-2 py-1 text-sm rounded text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Live Demo
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsClient;
