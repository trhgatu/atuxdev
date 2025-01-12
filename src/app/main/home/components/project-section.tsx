import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
} from "@/components/ui/carousel";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import StackIcon from "tech-stack-icons";

const ProjectsSection = () => {
  const projects = [
    {
      name: "IT Moments",
      technologies: [
        { name: "ReactJS", icon: <StackIcon name="reactjs" /> },
        { name: "Node.js", icon: <StackIcon name="nodejs" /> },
        { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
        { name: "Vite", icon: <StackIcon name="vitejs" /> },
        { name: "TailwindCSS", icon: <StackIcon name="tailwindcss" /> },
      ],
      duration: "Aug 2024 - Dec 2024",
      images: [
        "/assets/image/it-moments.png",
      ],
      githubLink: "https://github.com/trhgatu/it-moments-fullstack",
      projectLink: "https://www.your-project-domain.com",
    },
    {
      name: "Movie Station",
      technologies: [
        { name: "ReactJS", icon: <StackIcon name="reactjs" /> },
        { name: "Vite", icon: <StackIcon name="vitejs" /> },
        { name: "TailwindCSS", icon: <StackIcon name="tailwindcss" /> },
      ],
      duration: "Dec 2024 - Present",
      images: [
        "/assets/image/movie-app-1.png",
        "/assets/image/movie-app-2.png",
        "/assets/image/movie-app-3.png",
      ],
      githubLink: "https://github.com/trhgatu/Movie-Station",
      projectLink: "https://movie-station-jet.vercel.app/",
    },
  ];

  return (
    <section className="mt-20 mx-auto">
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="dark:bg-white bg-black text-white text-2xl w-1/2 p-2 md:text-5xl font-bold dark:text-black">
              Projects
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
          {projects.map((project, index) => {
            const autoplayPlugin = React.useRef(
              Autoplay({ delay: 3000, stopOnInteraction: true })
            );

            return (
              <div className="relative group" key={index}>
                <Card className="project-card border border-slate-200">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Carousel plugins={[autoplayPlugin.current]} className="relative">
                    <CarouselContent>
                        {project.images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <Image
                              alt={`${project.name} - Image ${idx + 1}`}
                              src={image}
                              width={600}
                              height={400}
                              className="w-full rounded-lg object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
                        Prev
                      </CarouselPrevious>
                      <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
                        Next
                      </CarouselNext>
                    </Carousel>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="h-10 w-10 transition-all duration-200 p-2 hover:opacity-40 bg-gray-100 dark:text-black rounded-full">
                                {tech.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{tech.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link
                      className="px-4 py-2 bg-black dark:bg-white dark:text-black hover:opacity-70 transition-all duration-200 text-white rounded-md flex items-center space-x-2"
                      href={project.githubLink}
                      passHref
                    >
                      <FaGithub />
                      <span className="font-medium">Github</span>
                    </Link>
                    <Link
                      className="px-4 py-2 bg-black dark:bg-white dark:text-black hover:opacity-70 transition-all duration-200 text-white rounded-md flex items-center space-x-2"
                      href={project.projectLink}
                      passHref
                    >
                      <FaExternalLinkAlt />
                      <span className="font-medium">Live</span>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
