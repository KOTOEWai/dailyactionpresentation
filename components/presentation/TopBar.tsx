"use client";

import { SECTIONS } from "./types";
import { Leaf, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface TopBarProps {
  activeSectionIndex: number; // 1-based index (1 to 6)
  onNavigate: (sectionId: string) => void;
}

export function TopBar({ activeSectionIndex, onNavigate }: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentSection = SECTIONS[activeSectionIndex - 1] || SECTIONS[0];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-1 left-0 right-0 z-40 px-4 sm:px-6 py-3 transition-all duration-200">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-[#DDEDE0] rounded-xl shadow-xs px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Brand / Title */}
        <button
          onClick={() => handleLinkClick("section-1")}
          className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36704E] rounded-md py-1"
          aria-label="Go to start of presentation"
        >
          <div className="w-8 h-8 rounded-lg bg-[#DDEDE0] flex items-center justify-center text-[#1D372D]">
            <Leaf className="w-4 h-4 text-[#36704E]" />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#1D372D] block leading-tight">
              My Daily Actions
            </span>
            <span className="text-[11px] text-[#526357] hidden sm:block leading-tight">
              Small Steps, Big Impact
            </span>
          </div>
        </button>

        {/* Current Section Indicator Badge */}
        <div className="flex items-center gap-2 bg-[#F8FAF7] border border-[#DDEDE0] px-3 py-1.5 rounded-lg text-xs">
          <span className="font-mono font-semibold text-[#1D372D]">
            0{activeSectionIndex} / 06
          </span>
          <span className="hidden md:inline text-[#DDEDE0]">|</span>
          <span className="hidden md:inline text-[#313D35] font-medium max-w-[150px] truncate">
            {currentSection.title}
          </span>
          <span className="text-[11px] bg-[#DDEDE0] text-[#1D372D] px-2 py-0.5 rounded-md font-medium">
            {currentSection.speaker}
          </span>
        </div>

        {/* Desktop Quick Jump Links */}
        <nav
          className="hidden lg:flex items-center gap-1 text-xs"
          aria-label="Section navigation"
        >
          {SECTIONS.map((sec) => {
            const isActive = sec.number === activeSectionIndex;
            return (
              <button
                key={sec.id}
                onClick={() => handleLinkClick(sec.id)}
                className={`px-2.5 py-1.5 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36704E] ${
                  isActive
                    ? "bg-[#1D372D] text-white font-medium"
                    : "text-[#526357] hover:text-[#1D372D] hover:bg-[#DDEDE0]/50"
                }`}
              >
                {sec.number}. {sec.shortTitle}
              </button>
            );
          })}
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#313D35] hover:bg-[#DDEDE0]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36704E]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation sections menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-white border border-[#DDEDE0] rounded-xl shadow-md p-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <p className="text-xs font-semibold text-[#526357] uppercase tracking-wider mb-2">
            Jump to Section
          </p>
          <div className="flex flex-col gap-1.5">
            {SECTIONS.map((sec) => {
              const isActive = sec.number === activeSectionIndex;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleLinkClick(sec.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    isActive
                      ? "bg-[#1D372D] text-white font-medium"
                      : "text-[#313D35] hover:bg-[#DDEDE0]/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-xs ${
                        isActive ? "text-[#CFA457]" : "text-[#526357]"
                      }`}
                    >
                      0{sec.number}
                    </span>
                    <span>{sec.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#DDEDE0] text-[#1D372D]"
                      }`}
                    >
                      {sec.speaker}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
