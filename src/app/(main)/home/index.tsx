"use client";

import BannerSection from "@/src/app/(main)/home/components/banner-section";
import TechStackSection from "@/src/app/(main)/home/components/tech-stack-section";
import ProjectsSection from "@/src/app/(main)/home/components/project-section";
import AboutSection from "@/src/app/(main)/home/components/sections/about-components/about-section";
import ChangelogSection from "@/src/app/(main)/home/components/changelog-section";
import QuoteSection from "@/src/app/(main)/home/components/quote-section";

export function HomePage() {
  return (
    <>
      <section id="banner">
        <BannerSection />
      </section>
      <section id="quote">
        <QuoteSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section className="pt-20" id="skills">
        <TechStackSection />
      </section>
      <section className="pt-20" id="journey">
        <ChangelogSection />
      </section>
      <section className="pt-20" id="projects">
        <ProjectsSection />
      </section>

    </>
  );
}



