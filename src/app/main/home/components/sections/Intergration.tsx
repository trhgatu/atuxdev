import IconCloud from "@/components/ui/icon-cloud";

const ICON_SLUGS = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "nodejs",
    "mongodb",
    "amazonaws",
    "firebase",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "nextjs"
];

const Integration = () => {
    return (
        <div
            className="
                relative
                flex
                size-full
                max-w-lg
                items-center
                justify-center
                overflow-hidden
                px-20
                pb-20
                pt-10
                rounded-full
                bg-white
            "
        >
            <IconCloud iconSlugs={ICON_SLUGS} />
        </div>
    );
}
export default Integration;