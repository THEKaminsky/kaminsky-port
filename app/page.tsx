"use client";

import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import AboutSection from "./sections/AboutSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";

export default function FrontendPortfolio() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[length:300%_300%] bg-fixed animate-gradient bg-[linear-gradient(-45deg,#0F172A,#1E293B,#152C54,#0F172A)]" />

      <main className="min-h-screen text-white overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
