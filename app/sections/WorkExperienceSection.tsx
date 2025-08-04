"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "../components/Pill";

type Experience = {
  company: string;
  logo: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
};

const experiences: Experience[] = [
  {
    company: "Various Contracting Opportunities",
    logo: "/Kaminsky_Headshot.jpg",
    role: "Senior Frontend Engineer / Senior Frontend Developer / UX-focused Frontend Developer",
    description:
      "Miscellaneous contracting gigs and freelance work. Built out component systems and helped revitalize legacy applications. Some contracts were enterprise level applications that needed a more human touch to the user experiences. ",
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Storybook",
      "styled-components",
      "Tailwind",
      "a11y",
      "Accessibility",
      "Figma",
      "GraphQL",
      "TerraForm",
    ],
  },
  {
    company: "Loyal Health",
    logo: "/loyal-logo.svg",
    role: "Senior Frontend Engineer",
    description:
      "As the first frontend engineer on the Loyal project, I built the application from the ground up—establishing the architecture, tooling, and frontend practices in alignment with Loyal's engineering standards. Once the foundation was in place, I led feature development efforts, contributed to the design system, and championed user-focused improvements driven by research insights. As the team grew, I also played a key role in mentoring junior developers, guiding best practices, and fostering team collaboration. See UI Demo below.",
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "styled-components",
      "react-query/tanStack Query",
      "Figma",
      "User Research",
      "a11y/WCAG",
      "Accessibility",
    ],
    link: "https://www.loyalhealth.com/",
  },
  {
    company: "EverTrue",
    logo: "/evertrue-logo.svg",
    role: "Senior Frontend Engineer",
    description: `At Evertrue, I worked closely with the Data team to build a powerful and user-friendly data import system. I led the frontend development of a self-service flow that allowed clients to upload and map custom files to our internal data model—reducing operational overhead and giving users more control over their data, resulting in a 5x reduction in the time required to supervise the import process for both client and internal teams.
      
    Inbetween pushing out new features, I also took care of ~40% of the technical debt of modernizing legacy CoffeeScript codebases by migrating them to modular, maintainable React components. A true win for the developer experience on the team.`,
    tech: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Storybook",
      "styled-components",
      "Accessibility",
      "a11y/WCAG",
    ],
    link: "https://evertrue.com/",
  },
  {
    company: "MojoTech",
    logo: "/mojotech_logo.jpeg",
    role: "Software Engineer",
    description:
      "Where it all began. Here, I contributed to dynamic fintech and insurance projects with a strong focus on data processing, visualization, and user-centric design. I’ve collaborated closely with cross-functional teams, including external API partners, to build robust data structures and mentored frontend teams on React best practices. My work spans both web and mobile platforms, with hands-on experience developing React and React Native applications for iOS and Android. From translating complex client requirements into immersive user experiences to refining stories for better team velocity and product value, I prioritize performance, scalability, and reliability.",
    tech: [
      "React",
      "React Native",
      "JavaScript",
      "Ruby",
      "Ruby on Rails",
      "SASS",
      "styled-components",
      "Accessibility",
      "a11y/WCAG",
    ],
    link: "https://mojotech.com/",
  },
];

export default function WorkExperienceSection() {
  return (
    <section
      aria-labelledby="work-experience-heading"
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/60 border border-gray-800 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Logo */}
              <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden border border-gray-700 bg-gray-300">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Text & Tech */}
              <div className="flex-1 space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                </div>
                <p className="leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tag, i) => (
                    <Pill key={i} text={tag} />
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-blue-400 hover:underline text-sm"
                  >
                    Learn more about the company →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
