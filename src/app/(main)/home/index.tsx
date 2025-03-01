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
      {/* Banner - Giới thiệu bản thân */}
      <section id="banner" className="h-screen">
        <BannerSection />
      </section>

      {/* About - Thông tin chi tiết về bản thân */}
      <section className="py-28 bg-[#202020]" id="about">
        <AboutSection />
      </section>

      {/* Skills - Kỹ năng */}
      <section className="py-28" id="skills">
        <MySkills />
      </section>

      {/* Journey - Hành trình học tập và làm việc */}
      <section className="py-28 bg-[#202020]" id="journey">
        <JourneySection />
      </section>

      {/* Projects - Dự án đã thực hiện */}
      <section className="py-28" id="projects">
        <ProjectsSection />
      </section>

      {/* Testimonials - Đánh giá từ đồng nghiệp */}
      <section className="py-28 bg-[#202020]" id="testimonials">
        <TestimonialsSection />
      </section>
    </>
  );
}



