"use client";

import BannerSection from "@/src/app/(main)/home/components/banner-section";
import ProjectsSection from "@/src/app/(main)/home/components/project-section";
import AboutSection from "@/src/app/(main)/home/components/sections/about-components/about-section";
import JourneySection from "@/src/app/(main)/home/components/journey";
import QuoteSection from "@/src/app/(main)/home/components/quote-section";
import MySkills from "@/src/app/(main)/home/components/my-skills";
import TestimonialsSection from "@/src/app/(main)/home/components/testimonials-section";

export function HomePage() {
  return (
    <>
      <section id="banner" className="h-screen">
        <BannerSection />
      </section>
      <section className="py-28 bg-[#202020]" id="about">
        <AboutSection />
      </section>
      <section className="py-28" id="skills">
        <MySkills />
      </section>
      <section className="py-28 bg-[#202020]" id="journey">
        <JourneySection />
      </section>
      <section className="py-28" id="projects">
        <ProjectsSection />
      </section>
      <section className="py-28 bg-[#202020]" id="testimonials">
        <TestimonialsSection />
      </section>
    </>
  );
}



