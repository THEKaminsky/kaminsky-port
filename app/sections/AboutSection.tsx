"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section aria-labelledby="about-me-heading" className="relative py-24 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-gray-900/60 border border-gray-800 backdrop-blur-md rounded-2xl p-8"
        >
          {/* Image block */}
          <div className="relative w-full md:w-2/5 h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/AboutMe.png" // Replace with your image
              alt="Portrait of me"
              fill
              className="object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text block */}
          <div className="w-full md:w-3/5 text-gray-300 space-y-6 text-lg leading-relaxed">
            <p>
              I&apos;ve been building software for almost a decade now—dabbling
              in full-stack along the way—but frontend is where I&apos;ve truly
              found my rhythm. I&apos;m drawn to that sweet spot where code
              meets design, logic meets empathy, and users feel like the product
              was made just for them. That could mean jumping onto an existing
              project, and taking care of technical debt, or starting a new one.
            </p>
            <p>
              My goal is always the same: build experiences that feel smooth,
              intuitive, and inclusive. I care deeply about accessibility,
              usability, and the little moments that turn a clunky interface
              into a seamless one. If something I build helps someone get where
              they&apos;re going faster, with less friction—that&apos;s the win.
            </p>
            <p>
              Whether working on a team or solo, I&apos;m always looking for
              ways to improve and provide the people around me with the
              knowledge and tools they need to succeed. I&apos;m a strong
              advocate for mentorship and collaboration, and I&apos;m always
              looking for ways to help others improve and be as effective as
              possible.
            </p>
            <p>
              While I&apos;m not a visual designer, I have a strong sense of UX
              and love collaborating with design teams. I enjoy turning static
              designs into living, breathing interfaces—with enough polish to
              make users say, “Oooooh, that&apos;s nice.” I code for people, not
              just for specs, and I take pride in building products that
              actually feel good to use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
