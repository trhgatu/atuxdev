import { Marquee } from "@/components/ui/marquee";
import StackIcon from "tech-stack-icons";


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const technologies = [
    { name: "HTML5", icon: <StackIcon name="html5" /> },
    { name: "CSS3", icon: <StackIcon name="css3" /> },
    { name: "TypeScript", icon: <StackIcon name="typescript" /> },
    { name: "JavaScript", icon: <StackIcon name="js" /> },
    { name: "ReactJS", icon: <StackIcon name="reactjs" /> },
    { name: "NextJS", icon: <StackIcon name="nextjs2" /> },
    { name: "TailwindCSS", icon: <StackIcon name="tailwindcss" /> },
    { name: "Node.js", icon: <StackIcon name="nodejs" /> },
    { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
    { name: "GraphQL", icon: <StackIcon name="graphql" /> },
]

const TechStack = () => {
    return (
        <div className="w-full overflow-hidden flex justify-center">
            <Marquee pauseOnHover className="w-full max-w-screen-sm">
                {technologies.map((tech, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="h-14 w-14 dark:text-white mx-2">
                                    {tech.icon}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>{tech.name}</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </Marquee>
        </div>
    );
};


export default TechStack;
