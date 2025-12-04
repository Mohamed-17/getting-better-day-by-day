import React, { Suspense } from "react";
import { SkeletonCard } from "./Skelton";
import ProjectList from "./ProjectList";
import SelectCategory from "./SelectCategory";
async function Projects({
  params,
}: {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await params;
  return (
    <section className="mt-20 min-h-[770px]">
      <div className="flex justify-between items-center flex-wrap gap-5 ">
        <h1 className="text-2xl font-semibold">
          Using in This section{" "}
          <span className="text-blue-500">
            (Prisma + MongoDB + cache component + Partial Prerendering (PPR) )
          </span>
        </h1>
        <SelectCategory />
      </div>
      <Suspense fallback={<SkeletonCard />}>
        <ProjectList category={category as string} />
      </Suspense>
    </section>
  );
}

export default Projects;
