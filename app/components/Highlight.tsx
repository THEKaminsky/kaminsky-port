import type { ReactNode } from "react";

/** A highlighter pass over the part of a sentence that matters. Uses <mark> so it carries meaning, not just color. */
export function Highlight({ children }: { children: ReactNode }) {
  return <mark className="highlight">{children}</mark>;
}
