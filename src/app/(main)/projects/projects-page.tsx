"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/api-client";
import { Project } from "@/shared/types/project";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, List, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
} from "@/shared/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";
import Pagination from "@/shared/components/pagination";
import { useSearchParams } from "next/navigation";

export const ProjectsPage = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 10;

  const { data, error, isLoading } = useSWR<{
    data: Project[];
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  }>(`/projects?page=${page}&limit=${limit}`, fetcher);

  const projects = data?.data || [];
  const currentPage = data?.page || page;
  const totalPages = data?.totalPages || 1;
  const totalItems = data?.totalItems || 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified background effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl -z-10"></div>

      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors duration-200 mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              All Projects
            </h1>
            <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 w-24 sm:w-32 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my complete portfolio of projects, showcasing diverse technologies and creative solutions.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-red-500 border-t-transparent"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center p-6 bg-card rounded-lg border max-w-md mx-auto">
              <p className="text-red-500 text-lg">Failed to load projects.</p>
              <p className="text-muted-foreground mt-2">Please try again later.</p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && !projects.length && (
            <div className="text-center p-6 bg-card rounded-lg border max-w-md mx-auto">
              <p className="text-muted-foreground text-lg">No projects found.</p>
              <p className="text-muted-foreground mt-2">Check back soon for new projects!</p>
            </div>
          )}

          {/* Projects Grid */}
          {!isLoading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project: Project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                      <CardTitle className="text-xl font-bold">
                        {project.name}
                      </CardTitle>
                      <CardDescription>
                        {project.duration}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Project Description */}
                      {project.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.description}
                        </p>
                      )}

                      {/* Image Carousel */}
                      <Carousel className="relative">
                        <CarouselContent>
                          {project.images.map((image: string, idx: number) => (
                            <CarouselItem key={idx}>
                              <div className="relative overflow-hidden rounded-lg">
                                <Image
                                  alt={`${project.name} - Image ${idx + 1}`}
                                  src={image}
                                  width={400}
                                  height={250}
                                  className="w-full h-40 rounded-lg object-cover transition-transform duration-200 group-hover:scale-105"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.images.length > 1 && (
                          <>
                            <CarouselPrevious className="absolute -left-3 top-1/2 transform -translate-y-1/2" />
                            <CarouselNext className="absolute -right-3 top-1/2 transform -translate-y-1/2" />
                          </>
                        )}
                      </Carousel>

                      {/* Technologies */}
                      <TooltipProvider>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 8).map((tech, techIndex) => (
                            <Tooltip key={techIndex}>
                              <TooltipTrigger>
                                <div className="h-8 w-8 p-1.5 hover:bg-accent rounded-lg border transition-colors duration-200">
                                  <StackIcon name={tech.icon} />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                {tech.name}
                              </TooltipContent>
                            </Tooltip>
                          ))}
                          {project.technologies.length > 8 && (
                            <div className="h-8 w-8 bg-muted rounded-lg flex items-center justify-center text-xs font-medium">
                              +{project.technologies.length - 8}
                            </div>
                          )}
                        </div>
                      </TooltipProvider>
                    </CardContent>

                    <CardFooter className="flex gap-2 mt-auto">
                      <Link
                        className="flex-1 px-3 py-2 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground rounded-md flex items-center justify-center space-x-1 text-sm"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                      <Link
                        className="flex-1 px-3 py-2 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground rounded-md flex items-center justify-center space-x-1 text-sm"
                        href={`/projects/${project.id}`}
                      >
                        <List className="h-4 w-4" />
                        <span>Detail</span>
                      </Link>
                      <Link
                        className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white rounded-md flex items-center justify-center space-x-1 text-sm"
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live</span>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isLoading && !error && projects.length > 0 && totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                limit={limit}
              />
            </div>
          )}

          {/* Stats Section */}
          {!isLoading && !error && projects.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-8 bg-card rounded-full px-6 py-3 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{totalItems}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">
                    {Array.from(new Set(projects.flatMap(p => p.technologies.map(t => t.name)))).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};