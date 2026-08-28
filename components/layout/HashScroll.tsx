"use client";

import { useEffect } from "react";

/** Scrolls to `window.location.hash` after navigating to the home page. */
export function HashScroll() {
  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      // Wait a frame so section layout is ready after route change.
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    };

    const nav = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (nav?.type === "reload") {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
      window.scrollTo(0, 0);
    } else {
      scrollToHash();
    }

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.history.scrollRestoration = previousRestoration;
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
