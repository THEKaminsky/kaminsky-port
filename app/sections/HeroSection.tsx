import { MarginNote } from "../components/MarginNote";
import { MarginRow } from "../components/MarginRow";
import { ContactLinks } from "../components/ContactLinks";

export default function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-12 pt-20 lg:pb-14 lg:pt-28">
      <MarginRow
        margin={
          <MarginNote arrow="up-left" className="lg:pt-5">
            Right now: TAMKO STRONG, one React Native codebase, live on iOS, Android and the web.
          </MarginNote>
        }
      >
        <h1
          id="hero-title"
          className="m-0 max-w-[13ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.01em] sm:text-6xl lg:text-7xl"
        >
          I code for people, not just for specs.
        </h1>
        <p className="mt-8 max-w-[34em] text-xl leading-relaxed sm:text-[22px]">
          I&apos;m Rob Kaminsky, a senior frontend and mobile engineer. For over ten years I&apos;ve built
          React and React Native products, the design systems behind them, and the small details that
          make people say &ldquo;oooh, that&apos;s nice.&rdquo;
        </p>
      </MarginRow>
      {/* Outside the margin layout, so it centers on the full page width like Contact's. */}
      <ContactLinks className="mt-10" />
    </section>
  );
}
