import React from "react";

export default function Card({
  title,
  desc,
  children,
}: {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      {title && <h3 className="text-base font-semibold">{title}</h3>}
      {desc && <p className="mt-1 text-sm text-neutral-600">{desc}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
