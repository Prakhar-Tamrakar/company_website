"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollRestoration
 * - Saves the current scroll position in sessionStorage before the user leaves a page.
 * - Restores that position when the user navigates back to the same page.
 *
 * Key: `scrollPos:<pathname>`  e.g.  scrollPos:/
 */
export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef(null);

  // Save scroll position when pathname changes (i.e. user is leaving the page)
  useEffect(() => {
    const prev = prevPathname.current;

    if (prev && prev !== pathname) {
      // Store the Y position the user was at on the previous page
      sessionStorage.setItem(`scrollPos:${prev}`, String(window.scrollY));
    }

    // Try to restore scroll position for the new page
    const saved = sessionStorage.getItem(`scrollPos:${pathname}`);

    if (saved) {
      // Small timeout lets the page content render first
      const timer = setTimeout(() => {
        window.scrollTo({ top: parseInt(saved, 10), behavior: "instant" });
      }, 80);
      return () => {
        prevPathname.current = pathname;
        clearTimeout(timer);
      };
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
