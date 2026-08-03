"use client";

import { useEffect, useState } from "react";

/** Thin accent bar at the top that tracks page scroll progress. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 right-0 left-0 z-[60] h-[2px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-[#00d8ff] shadow-[0_0_12px_rgba(0,216,255,0.55)] transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
