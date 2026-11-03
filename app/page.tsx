import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import SiteHeader from "./sections/SiteHeader";
import WorkSection from "./sections/WorkSection";

export default function Home() {
  return (
    <div className="px-6 pb-24">
      <div className="mx-auto max-w-[1040px]">
        <SiteHeader />
        <main>
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </main>
        <footer className="mt-24">
          <p className="typed-label m-0">
            &copy; {new Date().getFullYear()} Rob Kaminsky. All notes my own.
          </p>
        </footer>
      </div>
    </div>
  );
}
