import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
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
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
];

export function Intergration() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
