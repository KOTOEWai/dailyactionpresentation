"use client";

import { useRef, useLayoutEffect } from "react";
import { SectionLabel } from "../presentation/SectionLabel";
import {
  Droplets,
  Zap,
  CheckCircle,
  Clock,
  Wrench,
  Sun,
  PowerOff,
  Lightbulb,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const waterActions = [
  {
    icon: Droplets,
    title: "Turn off the tap while brushing teeth",
    detail: "Saves up to 8 liters of clean fresh water every single minute.",
  },
  {
    icon: Clock,
    title: "Take shorter showers",
    detail: "Cutting just two minutes off your shower saves valuable water and heating energy.",
  },
  {
    icon: Wrench,
    title: "Fix leaking taps promptly",
    detail: "A single dripping faucet can waste thousands of liters of clean water each year.",
  },
];

const energyActions = [
  {
    icon: Lightbulb,
    title: "Turn off lights when leaving a room",
    detail: "Conserves electricity immediately and extends the lifespan of light bulbs.",
  },
  {
    icon: PowerOff,
    title: "Unplug chargers when not in use",
    detail: "Stops 'phantom power' drain that continues even when devices are disconnected.",
  },
  {
    icon: Sun,
    title: "Use natural daylight when possible",
    detail: "Open curtains during the day for healthier natural light and lower power bills.",
  },
];

export function SaveResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-animate='panel-water']", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from("[data-animate='panel-energy']", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
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
      id="section-3"
      ref={sectionRef}
      className="min-h-screen py-24 px-4 sm:px-6 md:px-10 flex flex-col justify-center bg-[#F8FAF7] border-t border-[#DDEDE0]"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel
            number={3}
            speaker="Speaker 2"
            topic="Save Water and Energy"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D372D] tracking-tight leading-tight mb-3">
            Save Water and Energy
          </h2>
          <p className="text-base sm:text-lg text-[#313D35] max-w-2xl">
            Clean water and electricity are precious resources. Mindful daily usage protects our shared planet.
          </p>
        </div>

        {/* Two Clear Content Groups: Water & Energy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Water */}
          <div
            data-animate="panel-water"
            className="rounded-2xl p-6 sm:p-8 border border-[#DDEDE0] bg-white shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDEDE0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center text-[#1D372D]">
                    <Droplets className="w-5 h-5 text-[#36704E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D372D]">
                    Water Actions
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#DDEDE0] text-[#1D372D]">
                  3 Habits
                </span>
              </div>

              <div className="space-y-5">
                {waterActions.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-md bg-[#DDEDE0]/60 flex items-center justify-center shrink-0 mt-0.5 text-[#36704E]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#1D372D]">
                          {action.title}
                        </h4>
                        <p className="text-sm text-[#526357] mt-0.5 leading-relaxed">
                          {action.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDEDE0] text-xs font-medium text-[#36704E] flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Conservation is a choice made every day</span>
            </div>
          </div>

          {/* Panel 2: Energy */}
          <div
            data-animate="panel-energy"
            className="rounded-2xl p-6 sm:p-8 border border-[#DDEDE0] bg-[#DDEDE0]/30 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDEDE0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DDEDE0] flex items-center justify-center text-[#1D372D]">
                    <Zap className="w-5 h-5 text-[#36704E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D372D]">
                    Energy Actions
                  </h3>
                </div>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#1D372D] text-white">
                  3 Habits
                </span>
              </div>

              <div className="space-y-5">
                {energyActions.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shrink-0 mt-0.5 text-[#36704E] shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#1D372D]">
                          {action.title}
                        </h4>
                        <p className="text-sm text-[#526357] mt-0.5 leading-relaxed">
                          {action.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDEDE0] text-xs font-medium text-[#1D372D] flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#36704E]" />
              <span>Small energy cutbacks lower carbon emissions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
