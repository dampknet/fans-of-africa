import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2";
  const styles: Record<Variant, string> = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950",
    secondary:
      "bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50",
    ghost: "text-neutral-900 hover:bg-neutral-100",
  };

  if (href) {
    return (
      <Link className={`${base} ${styles[variant]}`} href={href}>
        {children}
      </Link>
    );
  }
  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
