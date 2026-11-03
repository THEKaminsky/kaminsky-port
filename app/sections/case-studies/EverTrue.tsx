import { CaseStudy } from "../../components/CaseStudy";
import { Highlight } from "../../components/Highlight";
import { TapedFigure } from "../../components/TapedFigure";
import { EverTrueMappingSketch } from "./EverTrueMappingSketch";

export default function EverTrueCaseStudy() {
  return (
    <CaseStudy
      id="evertrue"
      title="EverTrue"
      period="Software Engineer, 2019 to 2021"
      intro={
        <p>
          Fundraising software for universities and nonprofits.{" "}
          <Highlight>I built the self-service tool</Highlight> their customers used to upload their
          own donor data and reconcile it with the fundraising ledger.
        </p>
      }
      figureNote="Before this, every upload took a secure file transfer, a support rep, a backend engineer and a lot of waiting."
      figure={
        <TapedFigure tilt={1} caption="Sketched from memory: the column-mapping screen.">
          <EverTrueMappingSketch />
        </TapedFigure>
      }
      whatIDidNote="Drag-and-drop for column mapping — what was I thinking?"
      whatIDid={
        <p>
          I <Highlight>designed and built the upload and reconciliation flow</Highlight>, and
          standardized the UI across web and mobile with{" "}
          <Highlight>a shared React and React Native component library</Highlight> documented in
          Storybook. I also migrated legacy CoffeeScript, Backbone and Marionette views to React
          and TypeScript, and instrumented key flows with Mixpanel and Amplitude.
        </p>
      }
      result={
        <p>
          The tool was used by <Highlight>about 2,000 paying institutions</Highlight> and their{" "}
          <Highlight>roughly 13,000 fundraising teams</Highlight>, and it{" "}
          <Highlight>cut customer support calls by nearly 50%</Highlight>.
        </p>
      }
      builtWith="React, React Native, TypeScript, Storybook, Mixpanel and Amplitude"
      lesson={{
        lesson: "Derive first, ask last.",
        whatHappened:
          "Early in my UX work, the upload tool had customers drag each spreadsheet column onto our fields, and a big file meant a lot of dragging. I pushed to auto-map every column we could recognize, so people only had to place the rest.",
        whatIDoNow:
          "I design around what the system can work out on its own, and ask people only for what it can't. Today I'd go past auto-mapping and rethink drag-and-drop for that tool entirely.",
      }}
    />
  );
}
