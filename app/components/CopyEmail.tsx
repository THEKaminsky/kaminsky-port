"use client";

import { useEffect, useId, useState } from "react";

/**
 * The address plus an icon button that copies it. On copy, a ballpoint loop draws itself
 * around the address and the icon swaps to a check, both for 2s.
 * Still server-rendered to HTML like any client component, so the address is in the page source.
 */
export function CopyEmail({ email, display }: { email: string; display: string }) {
  const [copied, setCopied] = useState(false);
  // Unique per instance (hero and Contact both render one); stripped to characters safe inside url(#…).
  const filterId = `pen-circle-rough-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  // Remounts the loop on every copy, so a second click redraws it instead of doing nothing.
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied, loopKey]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setLoopKey((k) => k + 1);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the address is still selectable.
    }
  }

  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative">
        {display}
        {copied ? (
          // viewBox roughly matches the address's shape, so the stretch stays near 1:1 and the line stays even.
          <svg
            key={loopKey}
            viewBox="0 0 340 70"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pen-circle pointer-events-none absolute -inset-x-8 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+4rem)] -rotate-3 overflow-visible text-ink"
          >
            {/* Light wobble, so the line reads as a pen stroke rather than a vector curve. */}
            <filter id={filterId} x="-10%" y="-30%" width="120%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves={2} seed={7} />
              <feDisplacementMap in="SourceGraphic" scale={2} />
            </filter>
            <path
              d="M 304 12 C 230 0, 120 5, 52 8 C 14 11, 0 30, 9 48 C 18 66, 90 68, 170 66 C 250 64, 318 66, 333 44 C 344 26, 322 9, 288 6 C 262 3, 236 7, 204 2"
              filter={`url(#${filterId})`}
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.25}
              strokeLinecap="round"
            />
          </svg>
        ) : null}
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : "Copy email address"}
        title={copied ? "Copied" : "Copy"}
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[3px] bg-transparent text-ink transition-colors hover:bg-ink/10"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {copied ? (
            <path d="M5 12.5 10 17 19 7" />
          ) : (
            <>
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </>
          )}
        </svg>
        <span className="sr-only" aria-live="polite">
          {copied ? "Copied" : ""}
        </span>
      </button>
    </span>
  );
}
