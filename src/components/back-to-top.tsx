"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show after user scrolls a bit
      setShow(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={[
        "fixed bottom-5 right-5 z-50",
        "h-11 w-11 rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur shadow-sm",
        "text-neutral-800 transition",
        // invisible unless show
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        // “invisible until you point mouse”
        "hover:opacity-100",
        "hover:-translate-y-0.5 hover:shadow-md",
      ].join(" ")}
    >
      {/* caret icon */}
      <svg
        viewBox="0 0 24 24"
        className="mx-auto h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}