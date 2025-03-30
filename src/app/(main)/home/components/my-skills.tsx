import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Skills from "@/src/app/(main)/home/components/sections/skills-components/skills-component";

const MySkills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="px-6 py-16 relative">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 dark:from-red-500/20 dark:to-rose-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 dark:from-red-600/20 dark:to-orange-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex max-w-5xl flex-col gap-10 mx-auto">
                <div className="w-full">
                    <motion.p
                        className="text-gray-800 dark:text-white text-4xl md:text-6xl font-bold"
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Skills.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
                    >
                        Technologies and tools I&apos;ve worked with and am proficient in.
                    </motion.p>
                </div>
                <div
                    className="relative z-10"
                >
                    <Skills />
                </div>
            </div>
        </section>
    );
};

export default MySkills;
