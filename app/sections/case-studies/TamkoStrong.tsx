import Image from "next/image";
import { CaseStudy } from "../../components/CaseStudy";
import { Highlight } from "../../components/Highlight";
import { TapedFigure } from "../../components/TapedFigure";

export default function TamkoStrongCaseStudy() {
  return (
    <CaseStudy
      id="tamko-strong"
      title="TAMKO STRONG"
      period="Senior React Native & Mobile Engineer, 2026 to now"
      intro={
        <p>
          It&apos;s the app TAMKO&apos;s roofing contractors use to run their business with TAMKO:
          certification, warranty registration, renewals and rewards, all{" "}
          <Highlight>on iOS, Android and the web from one React Native codebase</Highlight>. I
          joined through Bowdark Consulting mid-build, reworked and improved what was already there,
          and ended up designing and building most of it.
        </p>
      }
      figure={
        <TapedFigure tilt={-0.8} caption="The widgets for the contractor home dashboard on the web. (Test Account)">
          <Image
            src="/images/case-studies/tamko/dashboard.png"
            alt="TAMKO STRONG dashboard: a warranty card with a Register Warranty button and totals, and a rewards card with a progress bar and an unlock checklist"
            width={1925}
            height={1422}
            sizes="(min-width: 1024px) 700px, 100vw"
            className="block h-auto w-full"
          />
        </TapedFigure>
      }
      figureNote="One button style, one card layout, one spot for actions on every screen. Contractors learn it once."
      whatIDid={
        <>
          <p>
            Working with the project&apos;s architect, I shaped the key frontend decisions:{" "}
            <Highlight>shared layouts, how web and native split, the design system and state management</Highlight>. I designed and built the web experience
            (responsive layouts, navigation and deep linking) and reworked the UX of the existing
            OAuth sign-in, then brought the native app up to the same standard, so{" "}
            <Highlight>two diverging codebases became one consistent product</Highlight>.
          </p>
          <p className="mt-5">
            <Highlight>I owned the design system</Highlight>: the design tokens and 65 shared components, created or
            reworked. I also retired legacy mock-data and Firestore layers and moved marketing
            content into the CMS, so TAMKO can update it without shipping an app release.
          </p>
          <p className="mt-5">
            Along the way I built AI-assisted workflows, <Highlight>custom Claude Code skills</Highlight>{" "}
            for ticket intake, PR readiness and diff review, with review and verification kept in
            the loop.
          </p>
        </>
      }
      whatIDidArrow="up-left"
      whatIDidNote="The web version isn't a stretched phone app: wide tables, filters and sorting where a desk-sized screen calls for them."
      result={
        <p>
          The app went from mid-build to <Highlight>feature-complete in about 9 weeks</Highlight>{" "}
          after I joined, with <Highlight>every screen on one design system</Highlight> across web
          and mobile, and <Highlight>launched in October 2026</Highlight>.
        </p>
      }
      builtWith="React Native 0.81, Expo SDK 54, react-native-web, TypeScript, NativeWind and Zustand"
      lesson={{
        lesson: "Share the frame, not the flow.",
        whatHappened:
          "Certification and warranty registration each grew their own multi-step wizard, with the same layout and navigation built twice.",
        whatIDoNow:
          "I share the layout and navigation around a flow, and let each flow keep its own steps and rules.",
      }}
    />
  );
}
