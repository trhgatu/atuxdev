import React, { Suspense } from "react";
import { CVPage } from "@/app/(main)/cv/cv-page";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <CVPage />
    </Suspense>
  );
}
