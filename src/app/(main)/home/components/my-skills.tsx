import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Skills from "@/src/app/(main)/home/components/sections/skills-components/skills-component";

const MySkills = () => {
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
        <section className="px-8">
            <div className="flex flex-col gap-10 mx-auto items-center ">
                <div className="w-full flex justify-center text-center md:text-left">
                    <div className="w-64">
                        <p className="dark:bg-white bg-black text-white text-2xl md:w-full  p-2 md:text-5xl font-bold dark:text-black">
                            My Skills.
                        </p>
                    </div>
                </div>
                <Skills />
            </div>
        </section>

    );
};

export default MySkills;
