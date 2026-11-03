"use client";

import { useEffect, useRef, useState } from "react";

type FigureClipProps = {
  src: string;
  /** Shown before playback and to reduced-motion visitors; use the clip's last frame so play-once ends where it started. */
  poster: string;
  width: number;
  height: number;
  /** Describes what the clip shows, for screen readers. */
  label: string;
};

/**
 * A short screen recording that plays once when it scrolls into view, then rests on its last frame.
 * Not an endless loop: motion beside body text pulls the eye, and WCAG 2.2.2 requires a pause control
 * for anything that moves on its own for more than 5 seconds, hence the button.
 */
export function FigureClip({ src, poster, width, height, label }: FigureClipProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Reduced-motion visitors see the poster; the button still lets them play it on purpose.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks autoplay; the button covers that case.
          video.play().catch(() => {});
          observer.disconnect(); // once only, not every time it scrolls past
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      if (video.ended) video.currentTime = 0;
      video.play().catch(() => {});
    }
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="block h-auto w-full"
        width={width}
        height={height}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => {
          setPlaying(true);
          setEnded(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setEnded(true);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="stamp-link absolute bottom-3 right-3 bg-paper px-2.5 py-1 text-[15px]"
      >
        {/* The glyphs are decoration; screen readers get the word alone. */}
        <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span> {playing ? "Pause" : ended ? "Replay" : "Play"}
      </button>
    </div>
  );
}
