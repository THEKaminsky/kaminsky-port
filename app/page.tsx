"use client";

import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

export default function FrontendPortfolio() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
