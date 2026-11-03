import { ContactLinks } from "../components/ContactLinks";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-24 border-t-2 border-graphite pt-14">
      <h2 id="contact-title" className="m-0 text-[40px] font-semibold leading-tight sm:text-[46px]">
        Let&apos;s build something.
      </h2>
      <p className="mt-4 max-w-[34em] text-xl leading-relaxed sm:text-[21px]">
        Hiring for a senior frontend, mobile, design systems or UX engineer role, full time or
        contract? I&apos;d love to hear about it.
      </p>
      <ContactLinks className="mt-10" />
    </section>
  );
}
