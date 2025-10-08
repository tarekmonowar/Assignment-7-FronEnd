// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectsDetails";
import { ProjectItem } from "@/constant/type";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let slug;
  try {
    const resolvedParams = await params;
    slug = resolvedParams.slug;
  } catch (error) {
    console.log("Error resolving params:", error);
    notFound();
  }

  if (!slug) {
    console.log("No slug provided");
    notFound();
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project/${slug}`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 5 },
    });

    if (!res.ok) {
      notFound();
    }

    const project: ProjectItem = await res.json();

    if (!project || !project._id) {
      notFound();
    }

    return (
      <main className="container mx-auto max-w-7xl px-7">
        <ProjectDetails project={project} />
      </main>
    );
  } catch (error) {
    console.log("Fetch error:", error);
    notFound();
  }
}

// Add static generation for better performance and fixed vercel error
export async function generateStaticParams() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project`;

    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      return [];
    }

    const projects: ProjectItem[] = await res.json();
    return projects.map((project) => ({
      slug: project.slug || project._id, // Use slug if available, otherwise fallback to _id
    }));
  } catch (error) {
    console.log("Error in generateStaticParams:", error);
    return [];
  }
}

export const dynamicParams = true;

// Add metadata generation for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project/${slug}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      return {
        title: "Project Not Found",
      };
    }

    const project: ProjectItem = await res.json();

    return {
      title: project.title,
      description: project.summary || project.title || "Project details",
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Project",
    };
  }
}
