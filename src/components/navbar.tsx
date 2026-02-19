"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./ui/container";
import Button from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/volunteers", label: "Volunteers" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when screen becomes md+ (prevents stuck open state)
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <Image
                src="/logo.png"
                alt="Fans of Africa logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold text-neutral-900">
                Fans of Africa
              </p>
              <p className="text-[12px] text-neutral-600">Impact • Community</p>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-700 hover:text-emerald-700"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Donate + Mobile menu button */}
          <div className="flex items-center gap-2">
            <Button href="/donate" variant="primary">
              Donate
            </Button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm transition hover:bg-neutral-50 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open ? "true" : "false"} // ✅ FIX: valid ARIA string values
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {/* Icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6l-12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open ? (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-neutral-200 bg-white/90 backdrop-blur"
          >
            <nav className="flex flex-col gap-1 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 hover:text-emerald-700"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
