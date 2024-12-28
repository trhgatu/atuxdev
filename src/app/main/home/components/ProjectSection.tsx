import React from "react";
import { Card } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const { Meta } = Card;

const ProjectsSection = () => {
  const projects = [
    {
      name: "IT Moments",
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
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
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
      duration: "Dec 2024 - Present",
      image: "/assets/image/it-moments.png",
      githubLink: "https://github.com/trhgatu/it-moments-fullstack",
      projectLink: "https://www.your-project-domain.com",
    },
  ];

  return (
    <section className="mt-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
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
                  className="w-full transition-all duration-300 rounded-lg"
                />
              </div>

              <div
                className="p-4 border-none"
                style={{
                  width: 300,
                  borderRadius: 0,
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
              >
                <Meta title={project.name} />
                <div className="mt-2 text-gray-600">{project.duration}</div>
                <div className="mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-black text-white text-xs py-1 px-2 mr-2 mb-2 rounded-full"
                    >
                      <span className="mr-1">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600"
                  >
                    <GithubOutlined />
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600"
                  >
                    <LinkOutlined />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
