import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Field-notes palette: an engineering pad with graphite, ballpoint and highlighter.
      colors: {
        paper: "#EDF1E4",
        grid: "#D3DDC4",
        graphite: { DEFAULT: "#262B25", soft: "#4A5246" },
        ink: { DEFAULT: "#1F3C9C", dark: "#142A73" },
        highlighter: "#F1E64A",
        card: { DEFAULT: "#FFFEFA", rule: "#BFD3EA", margin: "#E8A3A3" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        typed: ["var(--font-typed)", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
