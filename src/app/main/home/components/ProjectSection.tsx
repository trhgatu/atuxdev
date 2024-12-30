import React from "react";
import Link from "next/link";
import { Button, Card, Tag } from "antd";
import { GithubOutlined, LinkOutlined, AntDesignOutlined } from "@ant-design/icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMongodb } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const { Meta } = Card;

const ProjectsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" });
    } else {
      controls.start({ width: "0%" });
    }
  }, [controls, inView]);

  const projects = [
    {
      name: "IT Moments",
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Vite", icon: <SiVite /> },

        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "Ant Design", icon: <AntDesignOutlined /> },

      ],
      duration: "Aug 2024 - Dec 2024",
      image: "/assets/image/it-moments.png",
      githubLink: "https://github.com/trhgatu/it-moments-fullstack",
      projectLink: "https://www.your-project-domain.com",
    },
    {
      name: "Movie Station",
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
      ],
      duration: "Dec 2024 - Present",
      image: "/assets/image/movie-app.png",
      githubLink: "https://github.com/trhgatu/movie-app-fe",
      projectLink: "https://www.your-project-domain.com",
    },
  ];

  return (
    <section className="mt-20 px-6">
      <div className="container mx-auto">

        <h2
          ref={ref}
          className="text-3xl flex items-center sm:text-4xl font-bold mb-6 relative"
        >
          Projects.
          <motion.span
            className="h-1 bg-black dark:bg-white ml-4"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 1.5 }}
            style={{ transformOrigin: "left" }}
          ></motion.span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div className="relative group" key={index}>
              <div
                className="project-image border-2 p-2 border-gray-300 cursor-pointer hover:opacity-90 hover:translate-y-[-5px] transition-all duration-100"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  alt={project.name}
                  src={project.image}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              <div className="p-4 border-none" style={{ borderRadius: 0 }}>
                <Meta title={project.name} />
                <div className="mt-2 text-gray-600">{project.duration}</div>
                <div
                  className="mt-2 flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech, index) => (
                    <Tag
                      key={index}
                      icon={tech.icon}
                      color="black"
                      className="flex items-center justify-center text-white"
                      style={{
                        padding: "4px 8px",
                        borderRadius: "10px",
                      }}
                    >
                      {tech.name}
                    </Tag>
                  ))}
                </div>

                <div className="flex items-center mt-4">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-100"
                  >
                    <GithubOutlined />
                  </Link>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full border-2 border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-100"
                  >
                    <LinkOutlined />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="flex items-center space-x-2 px-40 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-200"
            passHref

          >
            <span>View All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
