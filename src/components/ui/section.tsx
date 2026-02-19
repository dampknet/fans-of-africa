import React from "react";
import Container from "./container";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 max-w-2xl">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
