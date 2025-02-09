"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import BannerSection from "./main/home/components/banner-section";
import TechStackSection from "@/src/app/main/home/components/tech-stack-section";
import ProjectsSection from "./main/home/components/project-section";
import AboutSection from "./main/home/components/sections/about-section";
import { ChangelogSection } from "./main/home/components/sections/changelog-section";


export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <BannerSection/>
      <AboutSection/>
      <TechStackSection/>
      <ChangelogSection/>
      <ProjectsSection/>
    </>
  );
}
