import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaGit, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import Integration from "./sections/Intergration";

const IntegrationSection = () => {
    return (
        <section
            className="flex items-center justify-between bg-gray-100 rounded-2xl  py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-md pr-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Skills
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 text-lg text-gray-600">
                    <div className="flex flex-col justify-center items-center">
                        <SiTypescript className="h-8 w-8 mb-2" />
                        <p className="text-sm">TypeScript</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiJavascript className="h-8 w-8 mb-2" />
                        <p className="text-sm">JavaScript</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaReact className="h-8 w-8 mb-2" />
                        <p className="text-sm">React</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaHtml5 className="h-8 w-8 mb-2" />
                        <p className="text-sm">HTML5</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaCss3Alt className="h-8 w-8 mb-2" />
                        <p className="text-sm">CSS3</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiTailwindcss className="h-8 w-8 mb-2" />
                        <p className="text-sm">TailwindCSS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaNodeJs className="h-8 w-8 mb-2" />
                        <p className="text-sm">Node.js</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiMongodb className="h-8 w-8 mb-2" />
                        <p className="text-sm">MongoDB</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaAws className="h-8 w-8 mb-2" />
                        <p className="text-sm">AWS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <SiFirebase className="h-8 w-8 mb-2" />
                        <p className="text-sm">Firebase</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaGit className="h-8 w-8 mb-2" />
                        <p className="text-sm">Git</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaGithub className="h-8 w-8 mb-2" />
                        <p className="text-sm">GitHub</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FaFigma className="h-8 w-8 mb-2" />
                        <p className="text-sm">Figma</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-md pl-8">
                <Integration />
            </div>
        </section>
    );
};

export default IntegrationSection;
