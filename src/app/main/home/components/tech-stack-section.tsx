import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TechStack from "@/src/app/main/home/components/sections/tech-stack";

const TechStackSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
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
        <section className="py-16 px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="w-44">
                        <p className="dark:bg-white  bg-black text-white text-2xl md:w-full  p-2 md:text-3xl font-bold dark:text-black">
                            Tech Stack.
                        </p>
                    </div>
                </div>
                <div className="relative flex w-full items-center justify-center bg-background">
                    <TechStack />
                </div>
            </div>
        </section>

    );
};

export default TechStackSection;
