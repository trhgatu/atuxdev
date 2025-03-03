import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import StackIcon from "tech-stack-icons";

type Skill = {
    name: string;
    icon: string;
    category: "frontend" | "backend" | "database" | "tools" | "language";
};

const skills: Skill[] = [
    { name: "HTML5", icon: "html5", category: "frontend" },
    { name: "CSS3", icon: "css3", category: "frontend" },
    { name: "TypeScript", icon: "typescript", category: "language" },
    { name: "JavaScript", icon: "js", category: "language" },
    { name: "ReactJS", icon: "reactjs", category: "frontend" },
    { name: "NextJS", icon: "nextjs2", category: "frontend" },
    { name: "TailwindCSS", icon: "tailwindcss", category: "frontend" },
    { name: "Node.js", icon: "nodejs", category: "backend" },
    { name: "MongoDB", icon: "mongodb", category: "database" },
    { name: "MySQL", icon: "mysql", category: "database" },
    { name: "GraphQL", icon: "graphql", category: "backend" },
    { name: "Git", icon: "git", category: "tools" },
    { name: "VSCode", icon: "vscode", category: "tools" },
    { name: "Postman", icon: "postman", category: "tools" },
    { name: "Docker", icon: "docker", category: "tools" },
    { name: "Figma", icon: "figma", category: "tools" },
    { name: "Redux", icon: "redux", category: "frontend" },
    { name: "Sass", icon: "sass", category: "frontend" },
];

const categories = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools & DevOps",
    language: "Languages",
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const getCategoryColor = (category: string): string => {
        switch(category) {
            case 'frontend': return 'from-red-500 to-red-600';
            case 'backend': return 'from-red-600 to-red-700';
            case 'database': return 'from-red-500 to-rose-600';
            case 'tools': return 'from-red-600 to-rose-500';
            case 'language': return 'from-red-500 to-orange-500';
            default: return 'from-red-500 to-red-700';
        }
    };
    const getCategoryHoverEffect = (category: string): string => {
        switch(category) {
            case 'frontend': return 'group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]';
            case 'backend': return 'group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]';
            case 'database': return 'group-hover:shadow-[0_0_15px_rgba(225,29,72,0.5)]';
            case 'tools': return 'group-hover:shadow-[0_0_15px_rgba(244,63,94,0.5)]';
            case 'language': return 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]';
            default: return 'group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]';
        }
    };

    return (
        <div ref={ref} className="relative">
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 dark:from-red-500/20 dark:to-rose-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 dark:from-red-600/20 dark:to-orange-500/10 rounded-full blur-3xl -z-10"></div>

            <TooltipProvider>
                <div className="space-y-12 w-full max-w-5xl mx-auto">
                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                        <div key={category} className="space-y-5">
                            <motion.div
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={`h-6 w-1.5 rounded-full bg-gradient-to-b ${getCategoryColor(category)}`}></div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {categories[category as keyof typeof categories]}
                                </h3>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "show" : "hidden"}
                            >
                                {categorySkills.map((skill) => (
                                    <motion.div key={skill.name} variants={itemVariants}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Card className={`hover:shadow-xl transition-all duration-300 hover:scale-[1.05] bg-white/5 dark:bg-gray-900/20 hover:shadow-red-900/20 dark:border-gray-800 overflow-hidden group relative ${getCategoryHoverEffect(category)}`}>
                                                    <div className="absolute inset-0 overflow-hidden">
                                                        <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
                                                    </div>

                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-white/0 dark:from-white/10 dark:to-white/0"></div>

                                                    <CardContent className="p-4 cursor-pointer flex flex-col items-center justify-center relative z-10">
                                                        <div className="w-12 h-12 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                                            <StackIcon name={skill.icon} />
                                                        </div>
                                                        <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{skill.name}</p>
                                                    </CardContent>
                                                </Card>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-gray-800 dark:bg-gray-900 border-gray-700 text-white">
                                                <p>{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </TooltipProvider>
        </div>
    );
};

export default Skills;