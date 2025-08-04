"use client";

import { motion } from "framer-motion";
import { Pill } from "../components/Pill";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
          Rob Kaminsky
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Senior Frontend Developer | UX Enthusiast | Accessibilty Advocate
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Pill text="React" />
          <Pill text="React Native" />
          <Pill text="Next.js" />
          <Pill text="TypeScript" />
          <Pill text="Tailwind CSS" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-12"
        >
          <polygon fill="url(#angleGradient)" points="0,100 100,0 100,100" />
          <defs>
            <linearGradient id="angleGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
