import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Integration from "./sections/integration-section";


const IntegrationSection = () => {
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
        <section className="mx-auto">
                <div className="flex flex-col lg:flex-row justify-evenly items-center p-6 sm:p-8 rounded-lg">
                    <div className="w-full max-w-md lg:pl-8">
                        <Integration />
                    </div>
                </div>
        </section>
    );
};

export default IntegrationSection;
