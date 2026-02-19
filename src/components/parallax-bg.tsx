"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ParallaxBg({
  src,
  alt,
  opacity = 0.22,
}: {
  src: string;
  alt: string;
  opacity?: number;
}) {
  useEffect(() => {
    const layer = document.getElementById("parallax-layer");
    if (!layer) return;

    const onScroll = () => {
      const y = window.scrollY * 0.08; // subtle parallax
      layer.style.setProperty("--py", `${y}px`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div id="parallax-layer" className="parallax-layer">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ opacity }}
          priority={false}
        />
      </div>

      
    </div>
  );
}
