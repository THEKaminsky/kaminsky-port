import { useId } from "react";

type LessonCardProps = {
  /** The takeaway, written as a rule you now follow. */
  lesson: string;
  whatHappened: string;
  whatIDoNow: string;
  label?: string;
};

/**
 * The end of every case study: a 3x5 index card taped into the notebook.
 * Text is set on the card's 32px rules (see .index-card), so keep copy short enough to fit a card.
 */
export function LessonCard({
  lesson,
  whatHappened,
  whatIDoNow,
  label = "What I'd do differently",
}: LessonCardProps) {
  const headingId = useId();

  return (
    <div className="relative mx-auto max-w-[640px]">
      <span className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-[4deg]" aria-hidden="true" />
      <section
        aria-labelledby={headingId}
        className="index-card taped-shadow rotate-[0.8deg] py-[22px] pl-[68px] pr-7"
      >
        <p className="typed-label m-0 leading-8">{label}</p>
        <h3 id={headingId} className="m-0 text-[28px] font-semibold leading-8">
          {lesson}
        </h3>
        {/* leading-8 again here: text-lg carries its own line-height, which would pull lines off the rules */}
        <p className="mt-8 text-lg leading-8">
          <strong>What happened:</strong> {whatHappened}
        </p>
        <p className="text-lg leading-8">
          <strong>What I do now:</strong> {whatIDoNow}
        </p>
      </section>
    </div>
  );
}
