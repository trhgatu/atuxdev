import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaGit, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import Integration from "./sections/Intergration";

const IntegrationSection = () => {
    return (
        <section className="mt-10 px-4 sm:px-6 md:mt-20">
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Skills</h2>

                <div className="flex flex-col lg:flex-row justify-evenly items-center bg-gray-100 p-6 sm:p-8 rounded-lg">
                    {/* Left Section */}
                    <div className="w-full max-w-md mb-8 lg:mb-0 lg:pr-8">
                        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center lg:text-left">
                            These are the technologies I have utilized in my projects.
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-gray-600 text-center">
                            {[
                                { Icon: SiTypescript, name: "TypeScript" },
                                { Icon: SiJavascript, name: "JavaScript" },
                                { Icon: FaReact, name: "React" },
                                { Icon: FaHtml5, name: "HTML5" },
                                { Icon: FaCss3Alt, name: "CSS3" },
                                { Icon: SiTailwindcss, name: "TailwindCSS" },
                                { Icon: FaNodeJs, name: "Node.js" },
                                { Icon: SiMongodb, name: "MongoDB" },
                                { Icon: FaAws, name: "AWS" },
                                { Icon: SiFirebase, name: "Firebase" },
                                { Icon: FaGit, name: "Git" },
                                { Icon: FaGithub, name: "GitHub" },
                                { Icon: FaFigma, name: "Figma" },
                            ].map(({ Icon, name }, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                                    <p className="text-xs sm:text-sm">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full max-w-md lg:pl-8">
                        <Integration />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;
