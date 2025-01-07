import IconCloud from "@/components/ui/icon-cloud";

const ICON_SLUGS = [
    "typescript",
    "javascript",
    "dart",
    "tailwindcss",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "figma",
];

const Integration = () => {
    return (
        <div className="flex flex-wrap justify-center"
        >
            <IconCloud iconSlugs={ICON_SLUGS} />
        </div>
    );
}
export default Integration;