import React from "react";
import useSWR from "swr";
import { fetcher } from "@/src/api-client";
import { Project } from "@/src/shared/types/project";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  const { data, error, isLoading } = useSWR<{ data: Project[] }>("/projects", fetcher);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load projects.</p>;

  const projects = data?.data || [];
  if (!projects.length) return <p>No projects found.</p>;

  return (
    <section className="mt-20 px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="w-44">
            <p className="dark:bg-white bg-black text-white text-2xl md:w-full p-2 md:text-3xl font-bold dark:text-black">
              Projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
          {projects.map((project: Project, index) => (
            <div className="relative group" key={index}>
              <Card className="project-card border border-slate-200">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                <Carousel className="relative">
                    <CarouselContent>
                      {project.images.map((image: string, idx: number) => (
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
                  <TooltipProvider>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger>
                            <div className="h-10 w-10 transition-all duration-200 p-2 hover:opacity-40 bg-gray-100 dark:text-black rounded-full">
                              <StackIcon name={tech.icon} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{tech.name}</TooltipContent>
                        </Tooltip>
                      ))}

                    </div>
                  </TooltipProvider>
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
                    href={`project/${project.slug}`}
                    passHref
                  >
                    <GrView />
                    <span className="font-medium">See detail</span>
                  </Link>
                  <Link
                    className="px-4 py-2 bg-black dark:bg-white dark:text-black hover:opacity-70 transition-all duration-200 text-white rounded-md flex items-center space-x-2"
                    href={project.projectLink}
                    passHref
                  >
                    <FaExternalLinkAlt />
                    <span className="font-medium">Live demo</span>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
