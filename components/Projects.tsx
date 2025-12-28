import React from "react";
import ProjectList from "./ProjectList";
import { getProjects } from "@/actions/getProjects";

async function Projects({
  params,
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await params;

  const projects = await getProjects(category as string);

  return (
    <section className=" min-h-[770px]">
      
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;
