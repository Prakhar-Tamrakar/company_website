"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,       // lower = smoother
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle hash links on initial load or navigation
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      
      if (target && lenisRef.current) {
        // Small delay to ensure components are rendered
        setTimeout(() => {
          lenisRef.current.scrollTo(target, {
            offset: -80, // Offset for navbar
            duration: 1.5,
            immediate: false,
          });
        }, 150);
      }
    }
  }, [pathname]);

  return null;
}
