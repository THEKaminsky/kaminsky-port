import AbsoluteFireCaseStudy from "./case-studies/AbsoluteFire";
import EverTrueCaseStudy from "./case-studies/EverTrue";
import LoyalHealthCaseStudy from "./case-studies/LoyalHealth";
import TamkoStrongCaseStudy from "./case-studies/TamkoStrong";
import VikingCaseStudy from "./case-studies/Viking";
import WorkIndex from "./WorkIndex";

/** The index first, then the case studies, newest and strongest first. */
export default function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="space-y-24">
      <WorkIndex />
      <TamkoStrongCaseStudy />
      <AbsoluteFireCaseStudy />
      <VikingCaseStudy />
      <LoyalHealthCaseStudy />
      <EverTrueCaseStudy />
    </section>
  );
}
