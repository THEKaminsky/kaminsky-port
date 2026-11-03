import type { ReactNode } from "react";
import { LessonCard } from "./LessonCard";
import { MarginNote, type Arrow } from "./MarginNote";
import { MarginRow } from "./MarginRow";
import { StampLink } from "./StampLink";

export type CaseStudyContent = {
  id: string;
  title: string;
  /** When and in what capacity, e.g. "Case study, 2026". */
  period: string;
  intro: ReactNode;
  introNote?: ReactNode;
  /** Point the intro note at what it's about. */
  introArrow?: Arrow;
  /** The live site, for projects people can go see. */
  liveSite?: { href: string; label: string };
  /** A TapedFigure, when there's something to show. */
  figure?: ReactNode;
  figureNote?: ReactNode;
  /** Pull the figure up on desktop, for entries whose margin notes make the intro row run tall. */
  figureTight?: boolean;
  whatIDid: ReactNode;
  /** A margin note beside "What I did". */
  whatIDidNote?: ReactNode;
  whatIDidArrow?: Arrow;
  result: ReactNode;
  builtWith: string;
  /** Optional until the lesson is written; a case study without one ends at the result. */
  lesson?: { lesson: string; whatHappened: string; whatIDoNow: string };
};

/** One project written up as a notebook entry: intro, evidence, what I did, the result, and a lesson card. */
export function CaseStudy({
  id,
  title,
  period,
  intro,
  introNote,
  introArrow,
  liveSite,
  figure,
  figureNote,
  figureTight,
  whatIDid,
  whatIDidNote,
  whatIDidArrow,
  result,
  builtWith,
  lesson,
}: CaseStudyContent) {
  const titleId = `${id}-title`;

  return (
    <article id={id} aria-labelledby={titleId} className="border-t-2 border-graphite pt-14">
      <MarginRow
        margin={
          // The stack first, at the top of the entry; any intro comment sits under it.
          <div className="space-y-8 lg:pt-11">
            <MarginNote>Built with {builtWith}.</MarginNote>
            {introNote ? <MarginNote arrow={introArrow}>{introNote}</MarginNote> : null}
          </div>
        }
      >
        <p className="typed-label mb-2">{period}</p>
        <h2 id={titleId} className="m-0 text-[40px] font-semibold leading-tight sm:text-[46px]">
          {title}
        </h2>
        <div className="mt-4 max-w-[34em] text-xl leading-relaxed sm:text-[21px]">{intro}</div>
        {liveSite ? (
          <div className="mt-6">
            <StampLink href={liveSite.href} kind="external">
              Visit {liveSite.label}
            </StampLink>
          </div>
        ) : null}
      </MarginRow>

      {figure ? (
        <MarginRow
          className={figureTight ? "mt-12 lg:mt-0" : "mt-12"}
          margin={figureNote ? <MarginNote arrow="left" className="lg:pt-16">{figureNote}</MarginNote> : null}
        >
          {figure}
        </MarginRow>
      ) : null}

      <MarginRow
        className="mt-14"
        margin={
          whatIDidNote ? (
            <MarginNote arrow={whatIDidArrow} className="lg:pt-10">
              {whatIDidNote}
            </MarginNote>
          ) : null
        }
      >
        <div className="max-w-[34em] text-xl leading-[1.7]">
          <h3 className="mb-2 text-2xl font-semibold">What I did</h3>
          {whatIDid}

          <h3 className="mb-2 mt-10 text-2xl font-semibold">How it turned out</h3>
          {result}
        </div>

      </MarginRow>

      {/* Full width, outside the margin layout: the card sits centered in the entry with nothing beside it. */}
      {lesson ? (
        <div className="mt-14">
          <LessonCard {...lesson} />
        </div>
      ) : null}
    </article>
  );
}
