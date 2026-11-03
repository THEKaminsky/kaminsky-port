import { CONTACT } from "../contact";
import { CopyEmail } from "./CopyEmail";

/** The address (with copy) stacked over LinkedIn, centered. Used in the hero and in Contact. */
export function ContactLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 text-center text-lg ${className}`}>
      <p className="m-0 text-[26px] font-semibold sm:text-[30px]">
        <CopyEmail email={CONTACT.email} display={CONTACT.emailDisplay} />
      </p>
      <a href={CONTACT.linkedin}>LinkedIn</a>
    </div>
  );
}
