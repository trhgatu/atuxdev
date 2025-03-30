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
      <section className="py-28" id="about">
        <About />
      </section>
      <section className="py-28" id="skills">
        <MySkills />
      </section>
      <section className="py-28" id="journey">
        <Journey />
      </section>
      <section className="py-28" id="projects">
        <Projects />
      </section>
    </>
  );
}



