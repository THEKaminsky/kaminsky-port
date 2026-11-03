import Image from "next/image";
import { CaseStudy } from "../../components/CaseStudy";
import { Highlight } from "../../components/Highlight";
import { TapedFigure } from "../../components/TapedFigure";

export default function AbsoluteFireCaseStudy() {
  return (
    <CaseStudy
      id="absolute-fire"
      title="Absolute Fire"
      period="Client Project, 2026"
      intro={
        <p>
          A new cannabis brand with a big personality and nothing online yet.{" "}
          <Highlight>I built the brand&apos;s voice and its home online</Highlight>, from a coming-soon
          page to launch.
        </p>
      }
      liveSite={{ href: "https://itsabsolutefire.com", label: "itsabsolutefire.com" }}
      figure={
        <TapedFigure caption="The Shredded section: Polaroids with handwritten captions over the sticker wall.">
          <Image
            src="/images/case-studies/absolute-fire/shredded-polaroids.webp"
            alt="Absolute Fire's Shredded section: the line 'Life is expensive. Shredded isn't.' in neon over a sticker wall, above a row of tilted Polaroid photos of the product with handwritten captions"
            width={2000}
            height={1381}
            sizes="(min-width: 1024px) 700px, 100vw"
            className="block h-auto w-full"
          />
        </TapedFigure>
      }
      figureNote="On phones this row becomes a swipe strip instead of six tiny photos."
      whatIDid={
        <p>
          I wrote the copy voice, then designed and built the site in React 19, TypeScript and
          Tailwind on Vite, including a download section that
          puts the budtender sales sheets in front of dispensary staff. The tactile pieces
          (Polaroid cards with wear and a corner peel, a sticker wall, a swipeable photo strip on
          phones) are what make the site <Highlight>feel like the brand experience</Highlight>.
        </p>
      }
      whatIDidNote="The Polaroids are one hand-rolled component, so any new photo drops in with the same wear and peel."
      whatIDidArrow="left"
      result={
        <p>
          After launch I ran a performance pass. The site now scores{" "}
          <Highlight>a perfect 100 in all four PageSpeed Insights categories on desktop</Highlight>,
          with 100 Accessibility and 100 SEO on mobile.
          A Sharp script I added <Highlight>halved the site&apos;s total image weight</Highlight>; new
          images go through the same script.
        </p>
      }
      builtWith="React 19, TypeScript, Tailwind v4, Vite and Vercel"
      lesson={{
        lesson: "Measure before you fix.",
        whatHappened:
          "My first performance fix was a guess, and it barely moved the score. Measuring showed the real cost: phones were downloading desktop-sized images, the hero and much of the rest of the page.",
        whatIDoNow:
          "I measure first, with PageSpeed Insights and the browser's performance tools, before I touch any code.",
      }}
    />
  );
}
