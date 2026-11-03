import Image from "next/image";
import { MarginNote } from "../components/MarginNote";
import { MarginRow } from "../components/MarginRow";
import { TapedFigure } from "../components/TapedFigure";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mt-24 border-t-2 border-graphite pt-14">
      <MarginRow
        margin={
          <MarginNote className="lg:pt-2">
            What do ancient history and code have in common? Nothing, and yet here I am.
          </MarginNote>
        }
      >
        <div className="flex flex-wrap items-start gap-10">
          <TapedFigure variant="polaroid" tilt={2} className="w-[220px] flex-none">
            <Image
              src="/AboutMe.png"
              alt="Rob in a ball cap and sunglasses, with Colorado mountains and pine forest behind him"
              width={200}
              height={200}
              sizes="200px"
              className="block h-[200px] w-[200px] object-cover object-[50%_70%]"
            />
          </TapedFigure>
          <div className="min-w-0 flex-[1_1_320px]">
            <h2 id="about-title" className="m-0 text-[34px] font-semibold leading-tight sm:text-[40px]">
              Based in Fort Collins, Colorado &mdash; and loving it.
            </h2>
            <p className="mt-5 max-w-[32em] text-xl leading-[1.7]">
              I care about accessibility, design systems that actually get used, and the people I
              work with. My favorite kind of UX work is the kind nobody notices: the screen that
              already knows what you meant.
            </p>
          </div>
        </div>
      </MarginRow>
    </section>
  );
}
