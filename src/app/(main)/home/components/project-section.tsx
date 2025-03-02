import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ListProjects from "@/src/app/(main)/home/components/sections/list-projects-components/list-projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <motion.p
            className="text-gray-800 dark:text-white text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            My Projects.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            A showcase of my recent work and projects I've contributed to.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <ListProjects />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
