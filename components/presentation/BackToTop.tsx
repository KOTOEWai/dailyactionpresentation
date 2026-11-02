"use client";

import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  visible: boolean;
  onScrollToTop: () => void;
}

export function BackToTop({ visible, onScrollToTop }: BackToTopProps) {
  if (!visible) return null;

  return (
    <button
      onClick={onScrollToTop}
      aria-label="Scroll back to top of presentation"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1D372D] text-[#DDEDE0] hover:bg-[#36704E] hover:text-white transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#36704E] group cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
