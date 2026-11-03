export default function SiteHeader() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-4 pt-8">
      <a href="#top" className="text-xl font-bold text-graphite no-underline hover:text-graphite">
        Rob Kaminsky
      </a>
      <nav aria-label="Main" className="flex flex-wrap gap-7 text-[17px]">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
