import React, { useRef } from "react";
import ListProjects from "@/app/(main)/home/components/list-projects/list-projects";

const Projects = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} id="projects" className="px-6 py-16 relative">
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="absolute top-40 right-1/4 w-20 h-20 bg-red-500/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-red-600/5 rounded-full blur-xl -z-10"></div>

      <div className="absolute top-32 right-32 w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="absolute top-40 right-40 w-1 h-1 bg-red-400 rounded-full"></div>
      <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>

      <div className="absolute bottom-32 left-32 w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="absolute bottom-40 left-40 w-1 h-1 bg-red-400 rounded-full"></div>
      <div className="absolute bottom-48 left-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>

      <div className="flex max-w-5xl flex-col gap-10 mx-auto">
        <div className="w-full">
          <p
            className="text-gray-800 dark:text-white text-4xl md:text-6xl font-bold"
          >
            My Projects.
          </p>
          <div
            className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
          />
          <p
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            A showcase of my recent work and projects I&apos;ve contributed to.
          </p>
        </div>
        <div
          className="relative z-10"
        >
          <ListProjects />
        </div>
      </div>
    </section>
  );
};

export default Projects;
