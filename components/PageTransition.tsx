"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();

  useEffect(() => {
    // On navigation, scroll to top
    window.scrollTo(0, 0);

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip hash links, external links, and same-page links
      if (
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href === pathname
      )
        return;

      // Only handle internal navigation
      if (href.startsWith("/")) {
        e.preventDefault();
        document.body.style.transition = "opacity 0.2s ease-out";
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = href;
        }, 200);
      }
    };

    document.addEventListener("click", handleClick);

    // Reset opacity on page load
    document.body.style.transition = "none";
    document.body.style.opacity = "1";

    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
