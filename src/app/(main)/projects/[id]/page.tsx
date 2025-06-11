import React, { Suspense } from "react";
import { ProjectDetailPage } from "@/app/(main)/projects/[id]/project-detail-page";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProjectDetailPage />
    </Suspense>
  );
}
