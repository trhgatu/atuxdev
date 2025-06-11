"use client";

import React from "react";
import useSWR from "swr";
import { fetcher } from "@/api-client";
import { Project } from "@/shared/types/project";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaList, FaGithub, FaArrowLeft } from "react-icons/fa";
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

const ProjectsPage = () => {
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
    <div className="min-h-screen">
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-red-400/5 to-pink-400/5 rounded-full blur-2xl -z-10"></div>

      <div className="absolute top-32 right-32 w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="absolute top-40 right-40 w-1 h-1 bg-red-400 rounded-full"></div>
      <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>
      <div className="absolute bottom-32 left-32 w-2 h-2 bg-red-500 rounded-full"></div>
      <div className="absolute bottom-40 left-40 w-1 h-1 bg-red-400 rounded-full"></div>
      <div className="absolute bottom-48 left-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors duration-200 mb-8 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
              All Projects
            </h1>
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-32 md:w-48 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my complete portfolio of projects, showcasing diverse technologies and creative solutions.
            </p>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700 max-w-md mx-auto"
            >
              <p className="text-red-500 text-lg">Failed to load projects.</p>
              <p className="text-gray-400 mt-2">Please try again later.</p>
            </motion.div>
          )}

          {/* Empty State */}
          {!isLoading && !error && !projects.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700 max-w-md mx-auto"
            >
              <p className="text-gray-400 text-lg">No projects found.</p>
              <p className="text-gray-500 mt-2">Check back soon for new projects!</p>
            </motion.div>
          )}

          {/* Projects Grid */}
          {!isLoading && !error && projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
            >
              {projects.map((project: Project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Card className="project-card h-full overflow-hidden backdrop-blur-sm border shadow-xl hover:shadow-red-900/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                    <CardHeader className="relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {project.duration}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Project Description */}
                      {project.description && (
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      )}

                      {/* Image Carousel */}
                      <Carousel className="relative">
                        <CarouselContent>
                          {project.images.map((image: string, idx: number) => (
                            <CarouselItem key={idx}>
                              <div className="relative overflow-hidden rounded-lg group">
                                <Image
                                  alt={`${project.name} - Image ${idx + 1}`}
                                  src={image}
                                  width={600}
                                  height={400}
                                  className="w-full h-48 rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {project.images.length > 1 && (
                          <>
                            <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200" />
                            <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200" />
                          </>
                        )}
                      </Carousel>

                      {/* Technologies */}
                      <TooltipProvider>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Tooltip key={techIndex}>
                              <TooltipTrigger>
                                <motion.div
                                  className="h-10 w-10 transition-all duration-200 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-white rounded-full border border-gray-300 dark:border-gray-600 overflow-hidden relative group"
                                  whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {/* Shimmer effect */}
                                  <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                  <div className="relative z-10">
                                    <StackIcon name={tech.icon} />
                                  </div>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-800 border-gray-700 text-white">
                                {tech.name}
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </TooltipProvider>
                    </CardContent>

                    <CardFooter className="flex justify-between gap-3 mt-auto">
                      <Link
                        className="flex-1 px-4 py-2 bg-[#24292e] hover:bg-[#1b1f23] transition-all duration-300 text-white rounded-md flex items-center justify-center space-x-2 shadow-md hover:scale-105"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        <span className="font-medium">GitHub</span>
                      </Link>
                      <Link
                        className="flex-1 px-4 py-2 bg-[#24292e] hover:bg-[#1b1f23] transition-all duration-300 text-white rounded-md flex items-center justify-center space-x-2 shadow-md hover:scale-105"
                        href={`/projects/${project.id}`}
                        rel="noopener noreferrer"
                      >
                        <FaList />
                        <span className="font-medium">Detail</span>
                      </Link>
                      <Link
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white rounded-md flex items-center justify-center space-x-2 shadow-md hover:scale-105"
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                        <span className="font-medium">Live</span>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
          {!isLoading && !error && projects.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              limit={limit}
            />
          )}
          {!isLoading && !error && projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center space-x-8 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{totalItems}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">
                    {Array.from(new Set(projects.flatMap(p => p.technologies.map(t => t.name)))).length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;