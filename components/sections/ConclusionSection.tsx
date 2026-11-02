"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import { Sparkles, RotateCcw } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ConclusionSectionProps {
  onRestart: () => void;
}

export function ConclusionSection({ onRestart }: ConclusionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='conclusion-content']", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from("[data-animate='conclusion-image']", {
        scale: 0.96,
        opacity: 0,
        duration: 1.0,
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
      id="section-6"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#1D372D] text-[#F8FAF7] border-t border-[#36704E]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel
            number={6}
            speaker="Shared / Final Speaker"
            topic="Conclusion"
            inverted
          />

          <h2
            data-animate="conclusion-content"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Small Daily Actions Matter
          </h2>

          <p
            data-animate="conclusion-content"
            className="text-lg sm:text-xl md:text-2xl text-[#DDEDE0] max-w-2xl mx-auto font-light leading-relaxed"
          >
            No single person needs to be perfect. When millions of us take small steps every day, the positive impact on our planet is extraordinary.
          </p>
        </div>

        {/* Hero Closing Visual Card */}
        <div
          data-animate="conclusion-image"
          className="relative rounded-2xl overflow-hidden border border-[#36704E] shadow-xl bg-[#142720] mb-12"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/earth_future.jpg"
              alt="Hands gently holding a young green oak tree sprout in warm sunlight"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1000px"
            />
          </div>

          {/* Prominent Closing Statement Overlay Box */}
          <div className="p-6 sm:p-8 bg-[#142720] border-t border-[#36704E] text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDEDE0]/10 text-[#CFA457] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Final Presentation Message
            </div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
              “The Earth is our home. Let’s take care of it together.”
            </blockquote>
          </div>
        </div>

        {/* Presentation Summary Recap */}
        <div
          data-animate="conclusion-content"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center"
        >
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono text-xs text-[#CFA457] mb-1">Speaker 1</div>
            <div className="text-sm font-semibold text-white">Cut Waste</div>
            <div className="text-xs text-[#DDEDE0]/70 mt-1">Bags & Bottles</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono text-xs text-[#CFA457] mb-1">Speaker 2</div>
            <div className="text-sm font-semibold text-white">Save Resources</div>
            <div className="text-xs text-[#DDEDE0]/70 mt-1">Water & Power</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono text-xs text-[#CFA457] mb-1">Speaker 3</div>
            <div className="text-sm font-semibold text-white">Protect Nature</div>
            <div className="text-xs text-[#DDEDE0]/70 mt-1">Trees & Wildlife</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono text-xs text-[#CFA457] mb-1">Speaker 4</div>
            <div className="text-sm font-semibold text-white">Cut Food Waste</div>
            <div className="text-xs text-[#DDEDE0]/70 mt-1">Plan, Save & Share</div>
          </div>
        </div>

        {/* Replay / Restart Action */}
        <div
          data-animate="conclusion-content"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#36704E] hover:bg-[#448b61] text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DDEDE0] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Return to Beginning</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-[#DDEDE0]/60">
          <p>
            English Group Presentation • My Daily Actions: Small Steps, Big Impact
          </p>
        </div>
      </div>
    </section>
  );
}
