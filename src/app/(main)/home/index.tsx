"use client";

import Banner from "@/app/(main)/home/components/banner";
import Projects from "@/app/(main)/home/components/projects";
import About from "@/app/(main)/home/components/about/about";
import Journey from "@/app/(main)/home/components/journey";
import MySkills from "@/app/(main)/home/components/my-skills";

export function HomePage() {
  return (
    <>
      <section id="banner" className="h-screen">
        <Banner />
      </section>
      <section className="pt-20" id="about">
        <About />
      </section>
      <section className="pt-16" id="skills">
        <MySkills />
      </section>
      <section className="pt-16" id="journey">
        <Journey />
      </section>
      <section className="pt-16" id="projects">
        <Projects />
      </section>
    </>
  );
}



