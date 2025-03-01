import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Skills from "@/src/app/(main)/home/components/sections/skills-components/skills-component";

const MySkills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section ref={ref} className="px-6 py-16">
            <div className="flex max-w-5xl flex-col gap-10 mx-auto items-center">
                <div className="w-full">
                    <p className="text-white text-4xl md:text-6xl font-bold">
                        My Skills.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-2 bg-white w-24 md:w-40 mt-3 origin-left"
                    />
                </div>
                <Skills />
            </div>
        </section>
    );
};

export default MySkills;
