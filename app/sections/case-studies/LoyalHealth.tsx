import Image from "next/image";
import { CaseStudy } from "../../components/CaseStudy";
import { Highlight } from "../../components/Highlight";
import { TapedFigure } from "../../components/TapedFigure";

export default function LoyalHealthCaseStudy() {
  return (
    <CaseStudy
      id="loyal-health"
      title="Loyal Health"
      period="Senior Software Engineer, 2022 to 2023"
      intro={
        <p>
          Loyal Health needed a way to turn patient details into referrals that doctors&apos;
          offices would actually receive, and in healthcare that still means fax.{" "}
          <Highlight>I led the frontend</Highlight> for the new platform, built around a
          step-by-step wizard.
        </p>
      }
      figureNote="The team: a PM, a designer, three backend engineers, me, and a junior frontend engineer I mentored."
      figure={
        <TapedFigure tilt={-1} caption="The referral wizard: step navigation, the request details and the activity log.">
          <Image
            src="/images/case-studies/loyal/referral-wizard.jpg"
            alt="The referral app: a five-step wizard on the left, referral request details in the middle and an activity log on the right"
            width={792}
            height={612}
            sizes="(min-width: 1024px) 700px, 100vw"
            className="block h-auto w-full"
          />
        </TapedFigure>
      }
      whatIDid={
        <p>
          I <Highlight>architected the app as a micro-frontend</Highlight> that plugged into
          Loyal&apos;s larger platform,
          set the <Highlight>frontend code review standards, and built the app&apos;s design
          system</Highlight> in React,
          TypeScript and styled-components with Storybook documentation. I also set up the
          end-to-end testing practice with Playwright, Cypress, Jest and Checkly synthetic
          monitoring.
        </p>
      }
      result={
        <p>
          The design system <Highlight>cut one-off component work by about 60%</Highlight>, and
          mentoring the team&apos;s junior engineer on React patterns and code review{" "}
          <Highlight>raised frontend output by about 20% in just a few weeks</Highlight>.
        </p>
      }
      builtWith="React, TypeScript, styled-components, Storybook, Playwright and Cypress"
      lesson={{
        lesson: "Put the help on the calendar.",
        whatHappened:
          "I gave our junior engineer whole tickets with clear acceptance criteria, an open door and regular check-ins. When they got stuck, help was already on the schedule, so they always knew it was just around the corner.",
        whatIDoNow:
          "I schedule check-ins before anyone needs them and use them for whatever moves the work forward: a ticket walkthrough, planning or pairing. Those sessions build their confidence over time.",
      }}
    />
  );
}
