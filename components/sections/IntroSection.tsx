"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import { ArrowDown, Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='intro-title']", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-animate='intro-image']", {
        scale: 0.96,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="section-1"
      ref={sectionRef}
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-10 flex flex-col justify-center items-center relative bg-[#F8FAF7]"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Speaker Indicator */}
        <div data-animate="intro-title" className="flex justify-center">
          <SectionLabel
            number={1}
            speaker="Speaker 1"
            topic="Introduction"
          />
        </div>

        {/* Heading */}
        <h1
          data-animate="intro-title"
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D372D] leading-[1.15] max-w-4xl mx-auto mb-6"
        >
          My Daily Actions: <br className="hidden sm:inline" />
          <span className="text-[#36704E]">Small Steps, Big Impact</span>
        </h1>

        {/* Supporting text */}
        <p
          data-animate="intro-title"
          className="text-lg sm:text-xl md:text-2xl text-[#313D35] max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Small actions in our daily lives can help protect the environment.
        </p>

        {/* Hero Visual Card */}
        <div
          data-animate="intro-image"
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#DDEDE0] shadow-sm bg-white"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/hero_nature.jpg"
              alt="Calm misty morning forest with gentle sunlight and clear river"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1000px"
            />
          </div>

          <div className="p-4 sm:p-5 bg-white border-t border-[#DDEDE0] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#526357]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#CFA457]" />
              <span>A 10-minute collaborative English group presentation</span>
            </div>
            <div className="font-mono text-[#36704E] font-medium">
              4 Speakers • 6 Chapters
            </div>
          </div>
        </div>

        {/* Scroll invitation */}
        <div className="mt-10 flex flex-col items-center gap-2 text-xs text-[#526357]">
          <span>Scroll down to begin presentation</span>
          <ArrowDown className="w-4 h-4 text-[#36704E] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
