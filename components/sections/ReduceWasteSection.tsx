"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import { ShoppingBag, Droplet, Recycle } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const actions = [
  {
    icon: ShoppingBag,
    title: "Bring reusable bags",
    description:
      "Keep a cloth bag with you for groceries and shopping to replace single-use plastic bags.",
    tag: "Action 01",
  },
  {
    icon: Droplet,
    title: "Use a refillable water bottle",
    description:
      "Carry your own durable bottle to stay hydrated while cutting down on disposable plastic bottles.",
    tag: "Action 02",
  },
  {
    icon: Recycle,
    title: "Sort waste and recycle when possible",
    description:
      "Separate paper, plastic, and metal so recyclable materials can be processed and reused.",
    tag: "Action 03",
  },
];

export function ReduceWasteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='waste-image']", {
        x: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from("[data-animate='waste-card']", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
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
      id="section-2"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={2}
            speaker="Speaker 1"
            topic="Reduce Plastic and Waste"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Reduce Plastic and Waste
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Simple daily habits can dramatically reduce the amount of trash entering our oceans and landfills.
          </p>
        </div>

        {/* Content Grid: Photo + 3 Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo Column */}
          <div
            data-animate="waste-image"
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DDEDE0] shadow-sm bg-white"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/eco_waste.jpg"
                alt="Reusable canvas shopping tote bag and stainless steel refillable water bottle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#DDEDE0] text-xs text-[#526357]">
              Everyday reusables: Simple swaps with long-lasting environmental benefits.
            </div>
          </div>

          {/* Action Cards Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {actions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  data-animate="waste-card"
                  className="p-5 sm:p-6 rounded-xl bg-white border border-[#DDEDE0] hover:border-[#36704E] transition-colors shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#DDEDE0] flex items-center justify-center shrink-0 text-[#1D372D]">
                      <Icon className="w-6 h-6 text-[#36704E]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-[#1D372D]">
                          {item.title}
                        </h3>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#DDEDE0] text-[#1D372D] font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#313D35] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
