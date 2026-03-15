import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Index from "./pages";

const NAV_OFFSET_PX = 88;
const SCROLL_DURATION_MS = 900;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY: number) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();
  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const App = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      event.preventDefault();

      if (href === "#") {
        smoothScrollTo(0);
        history.pushState(null, "", "#");
        return;
      }

      const sectionId = decodeURIComponent(href.slice(1));
      const section = document.getElementById(sectionId);
      if (!section) return;

      const targetY = Math.max(
        0,
        section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX,
      );

      smoothScrollTo(targetY);
      history.pushState(null, "", `#${sectionId}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <TooltipProvider>
      <Sonner />
      <BrowserRouter basename="/portfolio-v2">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/dist/index.html" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
