"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Banner from "./main/home/components/Banner";
import IntegrationSection from "./main/home/components/IntergrationSection";
import ProjectSection from "./main/home/components/ProjectSection";
import Particles from "@/components/ui/particles";


export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <Banner />
      <IntegrationSection/>
      <ProjectSection/>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
