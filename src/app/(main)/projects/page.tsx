import React, { Suspense } from "react";
import {ProjectsPage} from './projects-page'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProjectsPage />
    </Suspense>
  );
}
