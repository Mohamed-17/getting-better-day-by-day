import React, { Suspense } from "react";
import { SkeletonCard } from "./Skelton";
import RecentBooks from "./RecentBooks";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

async function Books() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="mt-20">
        <h1 className="text-2xl font-semibold leading-10 space-x-2">
          <span> Using in This section :</span>
          <span className="text-blue-500">
            (CRUD operations + MongoDB + cache component + Partial Prerendering
            (PPR) + GSAP with SEO optimization )
          </span>
        </h1>
        <Suspense fallback={<SkeletonCard />}>
          <RecentBooks />
        </Suspense>
      </div>
    </SessionProvider>
  );
}

export default Books;
