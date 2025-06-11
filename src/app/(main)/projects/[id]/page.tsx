"use client";

import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/api-client";
import { Project } from "@/shared/types/project";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ProjectStatusBadge } from "@/shared/components/project-status-badge";
import {
    FaExternalLinkAlt,
    FaGithub,
    FaArrowLeft,
    FaCalendarAlt,
    FaCode,
    FaEye,
    FaChevronLeft,
    FaChevronRight,
    FaTimes
} from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetailPage = () => {
    const params = useParams();
    const projectId = params.id as string;
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const { data, error, isLoading } = useSWR<{ data: Project }>(
        projectId ? `/projects/${projectId}` : null,
        fetcher
    );

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading project details...</p>
                </div>
            </div>
        );
    }

    if (error || !data?.data) {
        return (
            <div className="min-h-screen">
                <div className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 max-w-md">
                    <p className="text-red-500 text-lg mb-2">Project not found</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">The project you&#39;re looking for doesn&#39;t exist.</p>
                    <Link
                        href="/projects"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200"
                    >
                        <FaArrowLeft />
                        <span>Back to Projects</span>
                    </Link>
                </div>
            </div>
        );
    }

    const project = data.data;

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="min-h-screen">
            {/* Background Effects */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-400/5 to-pink-400/5 rounded-full blur-3xl -z-10"></div>

            {/* Decorative dots */}
            <div className="absolute top-32 right-32 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute top-40 right-40 w-1 h-1 bg-red-400 rounded-full"></div>
            <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <div className="absolute bottom-32 left-32 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-40 left-40 w-1 h-1 bg-red-400 rounded-full"></div>

            <div className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between mb-12"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors duration-200 group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
                            <span>Back to Projects</span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-[#24292e] hover:bg-[#1b1f23] transition-all duration-300 text-white rounded-md flex items-center space-x-2 shadow-md hover:scale-105"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                href={project.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white rounded-md flex items-center space-x-2 shadow-md hover:scale-105"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                            {project.name}
                        </h1>
                        <div className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-32 mx-auto rounded-full mb-6"></div>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <FaCalendarAlt className="text-red-500" />
                                <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCode className="text-red-500" />
                                <span>{project.technologies.length} Technologies</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaEye className="text-red-500" />
                                <span>{project.images.length} Images</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Image Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card className="overflow-hidden backdrop-blur-sm border shadow-xl">
                                    <CardContent className="p-0">
                                        <div className="relative">
                                            <Image
                                                src={project.images[selectedImageIndex]}
                                                alt={`${project.name} - Image ${selectedImageIndex + 1}`}
                                                width={800}
                                                height={500}
                                                className="w-full h-64 md:h-96 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                                                onClick={() => setIsImageModalOpen(true)}
                                            />

                                            {project.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={prevImage}
                                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                                                    >
                                                        <FaChevronLeft />
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                                                    >
                                                        <FaChevronRight />
                                                    </button>
                                                </>
                                            )}

                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {project.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setSelectedImageIndex(index)}
                                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                            index === selectedImageIndex
                                                                ? 'bg-white'
                                                                : 'bg-white/50 hover:bg-white/75'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Thumbnail Gallery */}
                                {project.images.length > 1 && (
                                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                                        {project.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImageIndex(index)}
                                                className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${
                                                    index === selectedImageIndex
                                                        ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800'
                                                        : 'hover:opacity-75'
                                                }`}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${project.name} thumbnail ${index + 1}`}
                                                    width={120}
                                                    height={80}
                                                    className="w-20 h-14 object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </motion.div>

                            {/* Project Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Card className="backdrop-blur-sm border shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-2">
                                            <FaCode className="text-red-500" />
                                            <span>About This Project</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {project.description || "This is an innovative project that showcases modern web development techniques and best practices. Built with cutting-edge technologies, it demonstrates proficiency in full-stack development, responsive design, and user experience optimization."}
                                        </p>

                                        {/* {project.features && (
                                            <div className="mt-6">
                                                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                                    {project.features.map((feature, index) => (
                                                        <li key={index} className="flex items-start space-x-2">
                                                            <span className="text-red-500 mt-1">•</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {project.challenges && (
                                            <div className="mt-6">
                                                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Challenges Overcome:</h4>
                                                <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
                                            </div>
                                        )} */}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Technologies */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Card className="backdrop-blur-sm border shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Technologies Used</CardTitle>
                                        <CardDescription>
                                            Tech stack and tools used in this project
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <TooltipProvider>
                                            <div className="grid grid-cols-4 gap-3">
                                                {project.technologies.map((tech, index) => (
                                                    <Tooltip key={index}>
                                                        <TooltipTrigger>
                                                            <motion.div
                                                                className="h-12 w-12 p-3 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden relative group cursor-pointer"
                                                                whileHover={{ y: -3, scale: 1.1 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
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

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                                                >
                                                    {tech.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Card className="backdrop-blur-sm border shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Project Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                                            <span className="text-gray-600 dark:text-gray-400">Duration</span>
                                            <span className="font-medium text-gray-800 dark:text-white">{project.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                                            <span className="text-gray-600 dark:text-gray-400">Status</span>
                                            <ProjectStatusBadge status={project.status}/>
                                        </div>
                                        {/* <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                                            <span className="text-gray-600 dark:text-gray-400">Category</span>
                                            <span className="font-medium text-gray-800 dark:text-white">
                                                {project.category || "Web Development"}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-gray-600 dark:text-gray-400">Type</span>
                                            <span className="font-medium text-gray-800 dark:text-white">
                                                {project.type || "Personal Project"}
                                            </span>
                                        </div> */}
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Quick Actions */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Card className="backdrop-blur-sm border shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Quick Actions</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full px-4 py-3 bg-[#24292e] hover:bg-[#1b1f23] transition-all duration-300 text-white rounded-md flex items-center justify-center space-x-2 shadow-md hover:scale-105"
                                        >
                                            <FaGithub />
                                            <span>View Source Code</span>
                                        </Link>
                                        <Link
                                            href={project.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white rounded-md flex items-center justify-center space-x-2 shadow-md hover:scale-105"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live Demo</span>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {isImageModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsImageModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-7xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={project.images[selectedImageIndex]}
                                alt={`${project.name} - Full Size`}
                                width={1200}
                                height={800}
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setIsImageModalOpen(false)}
                                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors duration-200"
                            >
                                <FaTimes size={24} />
                            </button>

                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                                    >
                                        <FaChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                                    >
                                        <FaChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetailPage;