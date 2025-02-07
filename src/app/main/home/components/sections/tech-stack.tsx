import { Marquee } from "@/components/ui/marquee";
import { useEffect, useState } from "react";
import { fetchSimpleIcons, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";
import { useTheme } from "next-themes";
import { Card } from "antd";

const ICON_SLUGS = [
    "html5",
    "css3",
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "tailwindcss",
    "nodedotjs",
    "express",
/*     "firebase",
    "docker", */
    "git",
];

const TechStack = () => {
    const [icons, setIcons] = useState<Record<string, SimpleIcon>>({});
    const { theme } = useTheme();

    useEffect(() => {
        fetchSimpleIcons({ slugs: ICON_SLUGS }).then((data) => {
            setIcons(data.simpleIcons);
        });
    }, []);

    return (
        <div className="flex justify-center max-w-md mx-auto">
            <Marquee pauseOnHover className="[--duration:15s]">
                {Object.values(icons).map((icon) => (
                    <Card key={icon.slug} className="mx-2 rounded-full">
                        {renderSimpleIcon({
                            icon,
                            bgHex: theme === "light" ? "#f3f2ef" : "#080510",
                            fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
                            size: 35,
                        })}
                    </Card>
                ))}
            </Marquee>
        </div>
    );
};

export default TechStack;
