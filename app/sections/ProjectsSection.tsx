"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "../components/Pill";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

const projects = [
  {
    title: "Medical Referral Platform",
    description:
      "I led an app from concept to launch, improved UX through user feedback, built reusable design components, and mentored junior devs to boost team output.",
    image: "/UI-Demo.jpg",
    tags: [
      "React",
      "TypeScript",
      "styled-components",
      "react-query",
      "tanstack",
    ],
  },
  {
    title: "UX Case Study",
    description:
      "Helped a client with a UX case study to help their team understand their accessibility better and improve their designs.",
    image: "/Nav-CaseStudy.png",
    tags: ["Figma", "User Research", "Accessibility", "UX Design"],
    link: "https://www.figma.com/proto/qZg27jPVz60RzDI6KNRewL/UX-Top-Nav-Case?node-id=15-94&t=pHQEDJEsznIoElMS-1",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Samples and Musings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Pill key={i} text={tag} />
                  ))}
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl hover:from-green-400 hover:to-green-800 transition-all duration-300 font-medium text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Check it out
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
