import type { ReactNode } from "react";

export type Arrow = "up-left" | "left" | "down-left";

type MarginNoteProps = {
  children: ReactNode;
  /** Hand-drawn arrow pointing back at the content. Hidden on phones, where the note sits below it. */
  arrow?: Arrow;
  className?: string;
};

const ARROWS: Record<Arrow, { box: string; paths: string[] }> = {
  "up-left": { box: "0 0 70 44", paths: ["M66 40 C 44 42, 22 30, 8 10", "M8 10 L 7 22", "M8 10 L 19 14"] },
  left: { box: "0 0 80 40", paths: ["M76 30 C 56 36, 28 30, 6 10", "M6 10 L 9 22", "M6 10 L 18 12"] },
  "down-left": { box: "0 0 80 40", paths: ["M76 6 C 56 2, 28 10, 6 30", "M6 30 L 8 18", "M6 30 L 18 28"] },
};

/** A note in blue ballpoint, written in the margin next to what it's about. */
export function MarginNote({ children, arrow, className = "" }: MarginNoteProps) {
  const drawn = arrow ? ARROWS[arrow] : null;

  return (
    // Handwriting faces have a small x-height, so they need a bigger size than body text to read the same.
    <aside className={`font-hand text-[21px] leading-[1.4] text-ink lg:text-[23px] ${className}`}>
      {drawn ? (
        <svg
          aria-hidden="true"
          viewBox={drawn.box}
          className="-ml-8 mb-1.5 hidden h-10 w-20 lg:block"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {drawn.paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      ) : null}
      {children}
    </aside>
  );
}
