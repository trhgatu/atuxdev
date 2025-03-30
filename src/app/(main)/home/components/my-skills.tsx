import { useRef } from "react";
import Skills from "@/src/app/(main)/home/components/sections/skills-components/skills-component";

const MySkills = () => {
    const ref = useRef(null);

    return (
        <section ref={ref} className="px-6 py-16 relative">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/10 to-rose-500/5 dark:from-red-500/20 dark:to-rose-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-red-600/10 to-orange-500/5 dark:from-red-600/20 dark:to-orange-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex max-w-5xl flex-col gap-10 mx-auto">
                <div className="w-full">
                    <p
                        className="text-gray-800 dark:text-white text-4xl md:text-6xl font-bold"
                    >
                        My Skills.
                    </p>
                    <div
                        className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 origin-left rounded-r-full"
                    />
                    <p
                        className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl"
                    >
                        Technologies and tools I&apos;ve worked with and am proficient in.
                    </p>
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
