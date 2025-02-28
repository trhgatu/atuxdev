import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import StackIcon from "tech-stack-icons";

const technologies = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "js" },
    { name: "ReactJS", icon: "reactjs" },
    { name: "NextJS", icon: "nextjs2" },
    { name: "TailwindCSS", icon: "tailwindcss" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "GraphQL", icon: "graphql" },
];

const Skills = () => {
    return (
        <TooltipProvider>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                {technologies.map((tech) => (
                    <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                            <Card className="hover:shadow-md transition-all duration-150">
                                <CardContent className="cursor-pointer flex justify-center items-center">
                                    <div className="w-14 h-14 flex items-center">
                                        <StackIcon name={tech.icon} />
                                    </div>
                                </CardContent>
                            </Card>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{tech.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default Skills;