import { useRef } from "react";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/shared/components/ui/tooltip";
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
    { name: "Redis", icon: "redis", category: "backend" },
    { name: "Git", icon: "git", category: "tools" },
    { name: "VSCode", icon: "vscode", category: "tools" },
    { name: "Postman", icon: "postman", category: "tools" },
    { name: "Docker", icon: "docker", category: "tools" },
    { name: "Figma", icon: "figma", category: "tools" },
    { name: "Redux", icon: "redux", category: "frontend" },
    { name: "Sass", icon: "sass", category: "frontend" },
];

const Skills = () => {
    const ref = useRef(null);

    const getSkillColor = (category: string): string => {
        switch (category) {
            case 'frontend': return 'from-pink-500/20 to-red-500/20';
            case 'backend': return 'from-blue-500/20 to-purple-500/20';
            case 'database': return 'from-green-400/20 to-emerald-500/20';
            case 'tools': return 'from-yellow-400/20 to-orange-500/20';
            case 'language': return 'from-purple-400/20 to-indigo-500/20';
            default: return 'from-gray-400/20 to-gray-500/20';
        }
    };

    const getSkillHoverShadow = (category: string): string => {
        switch (category) {
            case 'frontend': return 'group-hover:shadow-[0_8px_30px_rgb(239,68,68,0.3)]';
            case 'backend': return 'group-hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)]';
            case 'database': return 'group-hover:shadow-[0_8px_30px_rgb(34,197,94,0.3)]';
            case 'tools': return 'group-hover:shadow-[0_8px_30px_rgb(251,191,36,0.3)]';
            case 'language': return 'group-hover:shadow-[0_8px_30px_rgb(147,51,234,0.3)]';
            default: return 'group-hover:shadow-[0_8px_30px_rgb(107,114,128,0.3)]';
        }
    };

    const getSkillBorder = (category: string): string => {
        switch (category) {
            case 'frontend': return 'group-hover:border-red-300 dark:group-hover:border-red-600';
            case 'backend': return 'group-hover:border-blue-300 dark:group-hover:border-blue-600';
            case 'database': return 'group-hover:border-green-300 dark:group-hover:border-green-600';
            case 'tools': return 'group-hover:border-yellow-300 dark:group-hover:border-yellow-600';
            case 'language': return 'group-hover:border-purple-300 dark:group-hover:border-purple-600';
            default: return 'group-hover:border-gray-300 dark:group-hover:border-gray-600';
        }
    };

    return (
        <div ref={ref} className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-br from-red-500/8 via-pink-500/4 to-orange-500/8 dark:from-red-500/15 dark:via-pink-500/8 dark:to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/8 via-purple-500/4 to-indigo-500/8 dark:from-blue-500/15 dark:via-purple-500/8 dark:to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/6 via-emerald-500/3 to-teal-500/6 dark:from-green-400/12 dark:via-emerald-500/6 dark:to-teal-500/12 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Skills Grid */}
            <TooltipProvider>
                <div className="w-full max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-6 gap-4 md:gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="animate-fade-in-up"
                                style={{
                                    animationDelay: `${index * 0.05}s`,
                                    animationFillMode: 'backwards'
                                }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Card className={`
                                            group relative overflow-hidden cursor-pointer
                                             backdrop-blur-sm
                                            border border-gray-200/50 dark:border-gray-700/50
                                            ${getSkillBorder(skill.category)}
                                            transition-all duration-500 ease-out
                                            hover:scale-110 hover:-translate-y-1
                                            ${getSkillHoverShadow(skill.category)}
                                            aspect-square
                                        `}>
                                            {/* Hover Background Gradient */}
                                            <div className={`
                                                absolute inset-0 opacity-0 group-hover:opacity-100
                                                transition-opacity duration-500
                                                bg-gradient-to-br ${getSkillColor(skill.category)}
                                            `}></div>

                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div className="absolute -inset-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 group-hover:animate-shimmer"></div>
                                            </div>

                                            {/* Glowing Border Effect */}
                                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"></div>

                                            <CardContent className="p-5 flex flex-col items-center justify-center h-full relative z-10">
                                                <div className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                                                    <StackIcon name={skill.icon} />
                                                </div>
                                                <p className="text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 mt-2 leading-tight">
                                                    {skill.name}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-gray-800 dark:bg-gray-900 border-gray-700 text-white">
                                        <p className="font-medium">{skill.name}</p>
                                        <p className="text-xs text-gray-300 capitalize">{skill.category}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </TooltipProvider>
        </div>
    );
};

export default Skills;