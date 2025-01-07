import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Integration from "./sections/Intergration";


const SkillsSection = () => {
    const controls = useAnimation();
    const inView = useInView({
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
        <section className="mt-20 px-4 sm:px-6 md:mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-evenly items-centerp-6 sm:p-8 rounded-lg">
                    <div className="w-full max-w-md lg:pl-8">
                        <Integration />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
