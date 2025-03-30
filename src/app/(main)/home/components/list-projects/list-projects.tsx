import useSWR from "swr";
import { fetcher } from "@/api-client";
import { Project } from "@/shared/types/project";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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

const ListProjects = () => {
    const { data, error, isLoading } = useSWR<{ data: Project[] }>("/projects", fetcher);

    if (isLoading) return (
        <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-red-500">Failed to load projects.</p>
        </div>
    );

    const projects = data?.data || [];

    if (!projects.length) return (
        <div className="text-center p-8 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-gray-400">No projects found.</p>
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index) => (
                <motion.div
                    className="relative"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="project-card overflow-hidden backdrop-blur-sm border shadow-xl hover:shadow-red-900/10 transition-all duration-300 hover:scale-[1.02]">
                        <CardHeader className="relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                            <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                            <CardDescription className="text-gray-400">{project.duration}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Carousel className="relative">
                                <CarouselContent>
                                    {project.images.map((image: string, idx: number) => (
                                        <CarouselItem key={idx}>
                                            <div className="relative overflow-hidden rounded-lg">
                                                <Image
                                                    alt={`${project.name} - Image ${idx + 1}`}
                                                    src={image}
                                                    width={600}
                                                    height={400}
                                                    className="w-full rounded-lg object-cover transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200">
                                    Prev
                                </CarouselPrevious>
                                <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-200">
                                    Next
                                </CarouselNext>
                            </Carousel>
                            <TooltipProvider>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <Tooltip key={index}>
                                            <TooltipTrigger>
                                                <motion.div
                                                    className="h-10 w-10 transition-all duration-200 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full border border-gray-700 overflow-hidden relative group"
                                                    whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                                                >
                                                    {/* Shimmer effect */}
                                                    <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
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
                        <CardFooter className="flex justify-between">
                            <Link
                                className="px-4 py-2 bg-[#24292e] hover:bg-[#1b1f23] transition-all duration-300 text-white rounded-md flex items-center space-x-2 shadow-md hover:scale-105"
                                href={project.githubLink}
                                passHref
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                <span className="font-medium">Github</span>
                            </Link>
                            <Link
                                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white rounded-md flex items-center space-x-2 shadow-md hover:scale-105"
                                href={project.projectLink}
                                passHref
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
        </div>
    )
}
export default ListProjects;