"use client";

import { PresentationShell } from "@/components/presentation/PresentationShell";
import { IntroSection } from "@/components/sections/IntroSection";
import { ReduceWasteSection } from "@/components/sections/ReduceWasteSection";
import { SaveResourcesSection } from "@/components/sections/SaveResourcesSection";
import { ProtectNatureSection } from "@/components/sections/ProtectNatureSection";
import { FoodWasteSection } from "@/components/sections/FoodWasteSection";
import { ConclusionSection } from "@/components/sections/ConclusionSection";

export default function Home() {
  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PresentationShell>
      {/* 1. Introduction — Speaker 1 */}
      <IntroSection />

      {/* 2. Reduce Plastic and Waste — Speaker 1 */}
      <ReduceWasteSection />

      {/* 3. Save Water and Energy — Speaker 2 */}
      <SaveResourcesSection />

      {/* 4. Protect Nature and Wildlife — Speaker 3 */}
      <ProtectNatureSection />

      {/* 5. Reduce Food Waste — Speaker 4 */}
      <FoodWasteSection />

      {/* 6. Conclusion — Shared / Final Speaker */}
      <ConclusionSection onRestart={handleRestart} />
    </PresentationShell>
  );
}
