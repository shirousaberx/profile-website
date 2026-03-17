"use client";

import { useEffect } from "react";

const PARALLAX_FACTOR = -0.02; // Background moves at 35% of scroll speed

export function ParallaxBackground() {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty(
        "--parallax-offset",
        String(window.scrollY * PARALLAX_FACTOR)
      );
    };

    onScroll(); // Set initial value
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
