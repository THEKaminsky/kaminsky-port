/**
 * Hand-drawn sketch of EverTrue's column-mapping screen, drawn from memory.
 * The rough filter wobbles the strokes only; text stays crisp so it stays legible.
 */

/** `wrong` marks an auto-map guess the person corrects: no tick, and the swap arrows point at it. */
const SLOTS: { field: string; column?: string; wrong?: boolean }[] = [
  { field: "First Name", column: "first_name" },
  { field: "Email", column: "email_addr" },
  { field: "Gift Amount", column: "amt_pledged", wrong: true },
  { field: "Class Year", column: "class_yr" },
  { field: "Gift Date" },
];

const SLOT_TOP = 80;
const SLOT_STEP = 54;

function Chip({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={100} height={30} rx={4} className="fill-paper stroke-graphite" strokeWidth={1.5} filter="url(#evertrue-rough)" />
      <text x={x + 10} y={y + 21} className="fill-graphite font-hand" fontSize={15}>
        {label}
      </text>
    </g>
  );
}

export function EverTrueMappingSketch() {
  return (
    <svg viewBox="0 0 520 360" role="img" aria-labelledby="evertrue-sketch-title" className="block h-auto w-full">
      <title id="evertrue-sketch-title">
        Sketch of the column-mapping screen: a column of record fields on the left with most spreadsheet
        columns already auto-mapped and one wrong guess being swapped out, a box of columns that could not be auto-mapped at top right, and a skip
        box below it.
      </title>
      <defs>
        <filter id="evertrue-rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves={2} seed={3} />
          <feDisplacementMap in="SourceGraphic" scale={2.5} />
        </filter>
      </defs>

      {/* Field column */}
      <rect x={12} y={42} width={220} height={306} className="fill-none stroke-graphite" strokeWidth={2} filter="url(#evertrue-rough)" />
      <text x={24} y={66} className="fill-graphite font-hand" fontSize={18} fontWeight={700}>
        Record&apos;s Fields
      </text>
      {SLOTS.map((slot, i) => {
        const y = SLOT_TOP + i * SLOT_STEP;
        return (
          <g key={slot.field}>
            <text x={24} y={y + 30} className="fill-graphite font-hand" fontSize={15}>
              {slot.field}
            </text>
            {slot.column ? (
              <>
                <Chip x={120} y={y + 10} label={slot.column} />
                {slot.wrong ? null : (
                  <path d={`M ${204} ${y + 25} l 4 5 l 9 -12`} className="fill-none stroke-ink" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                )}
              </>
            ) : (
              <rect x={120} y={y + 10} width={100} height={30} rx={4} className="fill-none stroke-graphite-soft" strokeWidth={1.5} strokeDasharray="5 4" filter="url(#evertrue-rough)" />
            )}
          </g>
        );
      })}

      {/* Couldn't Auto-Map */}
      <rect x={260} y={42} width={248} height={144} className="fill-none stroke-graphite" strokeWidth={2} filter="url(#evertrue-rough)" />
      <text x={272} y={66} className="fill-graphite font-hand" fontSize={18} fontWeight={700}>
        Couldn&apos;t Auto-Map
      </text>
      <Chip x={276} y={82} label="amt_usd" />
      <Chip x={388} y={82} label="dt_given" />

      {/* Skip / Ignore */}
      <rect x={260} y={204} width={248} height={144} className="fill-none stroke-graphite" strokeWidth={2} filter="url(#evertrue-rough)" />
      <text x={272} y={228} className="fill-graphite font-hand" fontSize={18} fontWeight={700}>
        Skip / Ignore
      </text>
      <Chip x={276} y={244} label="notes_2" />
      <Chip x={388} y={244} label="col_17" />

      {/* The swap: amt_usd drags in over the wrong guess, which drags out to Skip / Ignore */}
      <path
        d="M 290 114 C 270 150, 262 190, 226 203"
        className="fill-none stroke-ink"
        strokeWidth={2}
        strokeLinecap="round"
        filter="url(#evertrue-rough)"
      />
      <path d="M 236 194 L 225 203 L 238 209" className="fill-none stroke-ink" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <text x={284} y={166} className="fill-ink font-hand" fontSize={16} transform="rotate(-8 284 166)">
        drag in
      </text>
      <path
        d="M 224 214 C 250 225, 262 270, 300 300"
        className="fill-none stroke-ink"
        strokeWidth={2}
        strokeLinecap="round"
        filter="url(#evertrue-rough)"
      />
      <path d="M 296 289 L 300 300 L 288 298" className="fill-none stroke-ink" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <text x={312} y={322} className="fill-ink font-hand" fontSize={16} transform="rotate(-4 312 322)">
        drag out
      </text>
    </svg>
  );
}
