"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Stagger delay in ms after the element enters the viewport. */
  delay?: number;
  duration?: number;
};

/**
 * Reveals children with a keyframe animation when scrolled into view.
 */
export function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = 750,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    let cancelled = false;
    let delayTimer: number | undefined;
    let safetyTimer: number | undefined;

    const reveal = () => {
      if (cancelled) return;
      // Paint the hidden state first, then trigger the keyframe animation.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) setInView(true);
        });
      });
    };

    const revealWithDelay = () => {
      if (delay > 0) {
        delayTimer = window.setTimeout(reveal, delay);
      } else {
        reveal();
      }
    };

    // Safety: never leave content permanently invisible.
    safetyTimer = window.setTimeout(() => {
      if (!cancelled) setInView(true);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        revealWithDelay();
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    // If already on screen at mount, reveal immediately (with stagger).
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      observer.disconnect();
      revealWithDelay();
    }

    return () => {
      cancelled = true;
      observer.disconnect();
      if (delayTimer) window.clearTimeout(delayTimer);
      if (safetyTimer) window.clearTimeout(safetyTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- animate once on mount / when delay identity is stable
  }, [delay]);

  const style = {
    "--reveal-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant}${inView ? " reveal--in" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
