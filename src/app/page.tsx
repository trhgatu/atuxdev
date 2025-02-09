"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import BannerSection from "./main/home/components/banner-section";
import TechStackSection from "@/src/app/main/home/components/tech-stack-section";
import ProjectsSection from "./main/home/components/project-section";
import AboutSection from "@/src/app/main/home/components/sections/about-components/about-section";
import ChangelogSection  from "@/src/app/main/home/components/changelog-section";
import QuoteSection from "@/src/app/main/home/components/quote-section";


export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <BannerSection/>
      <QuoteSection/>
      <AboutSection/>
      <TechStackSection/>
      <ChangelogSection/>
      <ProjectsSection/>
    </>
  );
}
