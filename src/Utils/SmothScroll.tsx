"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

let lenis: Lenis | null = null;

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!lenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        // remove 'smooth' because it does not exist in latest Lenis
      });

      function raf(time: number) {
        lenis!.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => {}; // don't destroy Lenis on unmount
  }, []);

  return <>{children}</>;
}
