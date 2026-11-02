"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { SectionLabel } from "../presentation/SectionLabel";
import { Trees, Sparkles, HeartHandshake } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const natureActions = [
  {
    icon: Trees,
    title: "Plant trees and take care of them",
    description:
      "Trees absorb carbon dioxide, cool our neighborhoods, and provide critical shelter for birds and insects.",
    step: "01",
  },
  {
    icon: Sparkles,
    title: "Keep rivers, forests, and public places clean",
    description:
      "Pick up litter during walks and dispose of waste responsibly so nature stays safe and unpolluted.",
    step: "02",
  },
  {
    icon: HeartHandshake,
    title: "Respect animals and do not destroy their homes",
    description:
      "Observe wildlife from a peaceful distance and protect natural habitats from harmful disruption.",
    step: "03",
  },
];

export function ProtectNatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='nature-image']", {
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from("[data-animate='nature-card']", {
        x: 20,
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
      id="section-4"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={4}
            speaker="Speaker 3"
            topic="Protect Nature and Wildlife"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Protect Nature and Wildlife
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Healthy forests, pure waters, and biodiversity sustain all life on Earth. Every ecosystem is interconnected.
          </p>
        </div>

        {/* Content Layout: 3 Actions + Nature Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Action List */}
          <div className="lg:col-span-7 flex flex-col gap-4 order-2 lg:order-1">
            {natureActions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  data-animate="nature-card"
                  className="p-6 rounded-2xl bg-white border border-[#DDEDE0] hover:border-[#36704E] transition-colors shadow-xs"
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
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#DDEDE0] text-[#1D372D] font-medium">
                          Step {item.step}
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

          {/* Wildlife Photo */}
          <div
            data-animate="nature-image"
            className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DDEDE0] shadow-sm bg-white order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/protect_wildlife.jpg"
                alt="Protected natural forest with clear mountain stream and peaceful deer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>
            <div className="p-4 bg-white border-t border-[#DDEDE0] text-xs text-[#526357]">
              Living in harmony: Preserving natural habitats keeps wildlife healthy and thriving.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
