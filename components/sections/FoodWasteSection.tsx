"use client";

import { useRef, useLayoutEffect } from "react";
import { SectionLabel } from "../presentation/SectionLabel";
import { ClipboardList, Refrigerator, Share2, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const foodStory = [
  {
    step: "01",
    keyword: "Plan",
    title: "Plan what you need before shopping",
    description:
      "Make a grocery list and check your kitchen first so you only buy what you will actually cook and eat.",
    icon: ClipboardList,
    tip: "Prevents impulsive overbuying",
  },
  {
    step: "02",
    keyword: "Save",
    title: "Store food properly and use leftovers",
    description:
      "Keep ingredients in airtight containers, label leftovers, and eat meals before they spoil.",
    icon: Refrigerator,
    tip: "Extends ingredient freshness",
  },
  {
    step: "03",
    keyword: "Share",
    title: "Share extra food when it is safe to do so",
    description:
      "Offer surplus fresh groceries or prepared meals to neighbors, friends, or local food-sharing groups.",
    icon: Share2,
    tip: "Strengthens community sharing",
  },
];

export function FoodWasteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='food-step']", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="section-5"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={5}
            speaker="Speaker 4"
            topic="Reduce Food Waste"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Reduce Food Waste
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            A simple three-step approach keeps valuable food on our plates and out of trash bins.
          </p>
        </div>

        {/* 3-Step Story Flow: Plan -> Save -> Share */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {foodStory.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                data-animate="food-step"
                className="relative rounded-2xl p-7 bg-white border border-[#DDEDE0] hover:border-[#36704E] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Step Banner */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#1D372D]">
                      {item.step}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#DDEDE0] text-[#1D372D] uppercase tracking-wider">
                      {item.keyword}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#DDEDE0] flex items-center justify-center text-[#1D372D] mb-5">
                    <Icon className="w-6 h-6 text-[#36704E]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#1D372D] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#313D35] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Pill */}
                <div className="pt-4 border-t border-[#DDEDE0] text-xs text-[#526357] flex items-center justify-between">
                  <span>{item.tip}</span>
                  {idx < 2 && (
                    <ArrowRight className="w-4 h-4 text-[#36704E] hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
