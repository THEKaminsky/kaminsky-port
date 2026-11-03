import type { ReactNode } from "react";

type TapedFigureProps = {
  children: ReactNode;
  caption?: ReactNode;
  /** Degrees of tilt for the print. Keep it small; one or two degrees reads as taped, more reads as sloppy. */
  tilt?: number;
  /** Polaroid gives the photo a deeper bottom border. */
  variant?: "print" | "polaroid";
  className?: string;
};

/** A screenshot or photo taped into the notebook. */
export function TapedFigure({
  children,
  caption,
  tilt = -1.2,
  variant = "print",
  className = "",
}: TapedFigureProps) {
  const padding = variant === "polaroid" ? "p-2.5 pb-8" : "p-3 pb-3.5";

  return (
    <figure className={`relative m-0 ${className}`}>
      <span className="tape left-[42%] -top-3.5 -rotate-3" aria-hidden="true" />
      <div className={`taped-shadow bg-white ${padding}`} style={{ transform: `rotate(${tilt}deg)` }}>
        {children}
      </div>
      {caption ? (
        <figcaption className="typed-label mt-3.5">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
