import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Integration from "./sections/Intergration";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

const IntegrationSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ width: "100%" });
        } else {
            controls.start({ width: "0%" });
        }
    }, [controls, inView]);

    return (
        <section className="mt-10 px-4 sm:px-6 md:mt-20">
            <div className="container mx-auto">
                <h2
                    ref={ref}
                    className="text-3xl flex items-center sm:text-4xl font-bold mb-6 relative"
                >
                    Skills.
                    <motion.span
                        className="h-1 bg-black ml-4"
                        initial={{ width: 0 }}
                        animate={controls}
                        transition={{ duration: 1.5 }}
                        style={{ transformOrigin: "left" }}
                    ></motion.span>
                </h2>
                <div className="flex flex-col lg:flex-row justify-evenly items-center bg-gray-100 p-6 sm:p-8 rounded-lg">
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
                            ].map(({ Icon, name }, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                                    <p className="text-xs sm:text-sm">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full max-w-md lg:pl-8">
                        <Integration />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;
