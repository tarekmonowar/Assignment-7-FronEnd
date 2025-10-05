// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectsDetails";
import { projects } from "@/constant/ProjectDetails";
import { ProjectItem } from "@/constant/type";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project/${slug}`,
    { next: { revalidate: 5 } },
  );
  const project: ProjectItem = await res.json();
  if (!project) notFound();

  return (
    <main className="container mx-auto max-w-7xl px-7">
      <ProjectDetails project={project} />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export const dynamicParams = true;
