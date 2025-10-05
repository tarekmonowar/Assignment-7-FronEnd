import { ProjectItem } from "@/constant/type";
import ProjectList from "./ProjectPost";

const FeaturesProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_ROUTE}/api/project`,
    { next: { revalidate: 5 } },
  );

  const projects: ProjectItem[] = await res.json();

  return <ProjectList projects={projects} />;
};

export default FeaturesProject;
