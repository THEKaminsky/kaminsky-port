import { CaseStudy } from "../../components/CaseStudy";
import { FigureClip } from "../../components/FigureClip";
import { Highlight } from "../../components/Highlight";
import { TapedFigure } from "../../components/TapedFigure";

export default function VikingCaseStudy() {
  return (
    <CaseStudy
      id="viking"
      title="Viking Cannabis"
      period="Client Project, 2025 to now"
      intro={
        <p>
          A craft cannabis grower in Washington State. <Highlight>I owned the site end to end</Highlight>:
          design, development and deployment, covering their cultivars, products, events and how
          they grow.
        </p>
      }
      liveSite={{ href: "https://www.vikingcannabis.com", label: "vikingcannabis.com" }}
      introNote="They asked for something professional, so the look stays restrained. A bolder, more outdoorsy redesign is likely next year."
      figure={
        <TapedFigure tilt={1} caption="The Cultivars page: each strain gets its own card.">
          <FigureClip
            src="/images/case-studies/viking/cultivars.mp4"
            poster="/images/case-studies/viking/cultivars-poster.webp"
            width={1600}
            height={836}
            label="Screen recording of Viking Cannabis's Cultivars page: cards for Black Maple, Block Berry and Blue Ritz, each with a close-up flower photo, strain type, lineage, tasting notes and effect tags"
          />
        </TapedFigure>
      }
      figureTight
      figureNote="Per-page share cards were part of the SEO work, so a link to any page, this one included, previews with its own image and description."
      whatIDid={
        <p>
          I wrote <Highlight>a Sharp image pipeline</Highlight> that makes 400, 800 and 1600 px
          versions and blur-up placeholders for every product and cultivar photo, and lazy-loaded
          the video embeds. I
          built the SEO layer (per-page meta tags, Open Graph and Twitter cards, sitemap and
          robots.txt), added the age-verification gate the industry requires, and ran a full
          accessibility audit, fixing every critical and serious finding.
        </p>
      }
      result={
        <p>
          Site traffic <Highlight>grew 20%</Highlight> after the SEO work, and the site scores{" "}
          <Highlight>100 in Accessibility, Best Practices and SEO</Highlight> in PageSpeed Insights.
        </p>
      }
      builtWith="React, TypeScript, Vite, Tailwind CSS, Framer Motion and Vercel"
      lesson={{
        lesson: "Build accessibility in, don't audit it on.",
        whatHappened:
          "I built first and audited after launch, and the audit turned up critical and serious issues I then had to go back and fix.",
        whatIDoNow:
          "Accessibility starts with the first component: semantic HTML, contrast and keyboard paths, checked as I build.",
      }}
    />
  );
}
