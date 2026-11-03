import type { ReactNode } from "react";

type StampLinkProps = {
  href: string;
  children: ReactNode;
  /** "jump" points down the page; "external" opens another site. */
  kind: "jump" | "external";
};

const ICONS = {
  jump: "M8 3v10M3.5 8.5 8 13l4.5-4.5",
  external: "M5 11 11 5M6 5h5v5",
};

/** The site's one clickable-label style, so readers learn what a link looks like. */
export function StampLink({ href, children, kind }: StampLinkProps) {
  const external = kind === "external";

  return (
    <a
      href={href}
      className="stamp-link"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={ICONS[kind]} />
      </svg>
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}
