import { StampLink } from "../components/StampLink";

type CaseStudyLink = { id: string; label?: string };

type Entry = {
  name: string;
  role?: string;
  /** Left off engagements: the parent role's dates already cover them. */
  dates?: string;
  note?: string;
  /** Project notes further down the page. One unlabeled link reads "Project highlight". */
  caseStudies?: CaseStudyLink[];
};

type Role = Entry & {
  /** Work done under this role, drawn as stops along a dotted trail (like the résumé's left rule). */
  engagements?: Entry[];
};

const ROLES: Role[] = [
  {
    name: "Kaminsky Tech Consulting",
    role: "Owner",
    dates: "2024 to now",
    engagements: [
      {
        name: "TAMKO STRONG",
        role: "Senior React Native & Mobile Engineer, via Bowdark",
        caseStudies: [{ id: "tamko-strong" }],
      },
      {
        name: "Client websites",
        role: "Brand to Launch",
        caseStudies: [
          { id: "absolute-fire", label: "Absolute Fire" },
          { id: "viking", label: "Viking Cannabis" },
        ],
      },
      {
        name: "Short-term contracts",
        role: "Fintech, Agricultural Logistics & Geolocation",
      },
    ],
  },
  {
    name: "Loyal Health",
    role: "Senior Software Engineer",
    dates: "2022 to 2023",
    note: "Frontend lead on a greenfield referral platform.",
    caseStudies: [{ id: "loyal-health" }],
  },
  {
    name: "EverTrue",
    role: "Software Engineer",
    dates: "2019 to 2021",
    note: "Self-service data tools for fundraising teams.",
    caseStudies: [{ id: "evertrue" }],
  },
  {
    name: "MojoTech",
    role: "Software Engineer",
    dates: "2015 to 2019",
    note: "Built Amica Insurance's React Native member app.",
  },
];

/** The same typed link on every entry that has notes below, so readers learn the one thing to click. */
function CaseStudyLinks({ links }: { links?: CaseStudyLink[] }) {
  if (!links?.length) return null;
  return (
    <span className="flex flex-wrap gap-3">
      {links.map((l) => (
        <StampLink key={l.id} href={`#${l.id}`} kind="jump">
          {l.label ? `${l.label} highlight` : "Project highlight"}
        </StampLink>
      ))}
    </span>
  );
}

function EntryRow({ entry, size }: { entry: Entry; size: "role" | "stop" }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className={`m-0 font-semibold ${size === "role" ? "text-[26px] sm:text-[30px]" : "text-[22px] sm:text-[25px]"}`}>
          {entry.name}
        </h3>
        {entry.dates ? <p className="typed-label m-0 text-[17px] sm:text-[19px]">{entry.dates}</p> : null}
      </div>
      {entry.role ? <p className="typed-label mt-1 text-lg text-graphite sm:text-[21px]">{entry.role}</p> : null}
      {entry.note ? <p className="mt-1.5 text-lg leading-relaxed text-graphite-soft sm:text-xl">{entry.note}</p> : null}
      {entry.caseStudies?.length ? (
        <div className="mt-2.5">
          <CaseStudyLinks links={entry.caseStudies} />
        </div>
      ) : null}
    </>
  );
}

/** The notebook's contents page: every role at a glance, each linking down to its case study. */
export default function WorkIndex() {
  return (
    <div className="border-t-2 border-graphite pt-14">
      <h2 id="work-title" className="m-0 text-[40px] font-semibold leading-tight sm:text-[46px]">
        Where I&apos;ve worked
      </h2>
      <p className="mt-3 text-xl text-graphite-soft">Jump to any project highlight below, or keep scrolling.</p>
      <ol className="mt-8 max-w-[44em] list-none p-0">
        {ROLES.map((r) => (
          <li key={r.name} className="border-b border-grid py-5 first:pt-0 last:border-b-0">
            <EntryRow entry={r} size="role" />

            {r.engagements ? (
              // A soft dotted trail down the left, with a small stop for each engagement.
              <ol className="ml-1.5 mt-4 list-none border-l-2 border-dotted border-graphite-soft/40 p-0 pl-6">
                {r.engagements.map((e) => (
                  <li key={e.name} className="relative py-2.5 first:pt-0.5 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-[19px] h-2.5 w-2.5 rounded-full border-2 border-paper bg-graphite-soft/70 first:top-[11px]"
                    />
                    <EntryRow entry={e} size="stop" />
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
