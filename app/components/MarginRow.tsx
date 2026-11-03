import type { ReactNode } from "react";

type MarginRowProps = {
  children: ReactNode;
  /** Shown in the right margin on wide screens; drops below the content on phones. */
  margin?: ReactNode;
  className?: string;
};

/** The notebook layout: a reading column plus a margin column for handwritten notes. */
export function MarginRow({ children, margin, className = "" }: MarginRowProps) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-x-14 lg:grid-cols-[minmax(0,1fr)_280px] ${className}`}
    >
      <div className="min-w-0">{children}</div>
      {margin ? <div className="mt-4 lg:mt-0">{margin}</div> : null}
    </div>
  );
}
