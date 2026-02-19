"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  durationMs?: number;
  suffix?: string;
};

export default function CountUp({ to, durationMs = 900, suffix = "" }: Props) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // If reduced motion, set value asynchronously (avoids "sync setState in effect" lint)
    if (reduce) {
      const id = window.setTimeout(() => setVal(to), 0);
      return () => window.clearTimeout(id);
    }

    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(Math.floor(eased * to));

      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, durationMs]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}
