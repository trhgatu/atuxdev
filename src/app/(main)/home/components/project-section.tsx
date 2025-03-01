import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ListProjects from "@/src/app/(main)/home/components/sections/list-projects-components/list-projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  return (
    <section ref={ref} className="px-8">
      <div className="flex flex-col gap-4 md:gap-10 mx-auto max-w-5xl">
        <div className="w-full">
          <p className="text-white text-4xl md:text-6xl font-bold">My Projects.</p>
          <div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-2 bg-white w-24 md:w-40 mt-3 origin-left"
            />
          </div>
        </div>
        <ListProjects />
      </div>
    </section>
  );
};

export default ProjectsSection;
