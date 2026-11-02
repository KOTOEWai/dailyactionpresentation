"use client";

import { useEffect, useState, useCallback, ReactNode } from "react";
import { TopBar } from "./TopBar";
import { ProgressIndicator } from "./ProgressIndicator";
import { BackToTop } from "./BackToTop";
import { SECTIONS } from "./types";

interface PresentationShellProps {
  children: ReactNode;
}

export function PresentationShell({ children }: PresentationShellProps) {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Smooth navigation to a specific section by ID
  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Track overall scroll progress for top progress indicator
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

          setScrollProgress(progress);
          setShowBackToTop(scrollTop > window.innerHeight * 0.5);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track currently active section with IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry with the largest intersection ratio that is intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio descending
        visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );
        const topEntry = visibleEntries[0];
        const match = SECTIONS.find((s) => s.id === topEntry.target.id);
        if (match) {
          setActiveSection(match.number);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -25% 0px", // Focus in the middle area of the viewport to prevent edge flickering
      threshold: [0.15, 0.4, 0.7],
    });

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAF7]">
      {/* Top progress bar */}
      <ProgressIndicator progress={scrollProgress} />

      {/* Floating Top Navigation */}
      <TopBar
        activeSectionIndex={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main presentation content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Back to top button */}
      <BackToTop visible={showBackToTop} onScrollToTop={handleScrollToTop} />
    </div>
  );
}
