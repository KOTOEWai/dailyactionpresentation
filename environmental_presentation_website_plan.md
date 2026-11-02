
## Project Plan and Implementation Guide

**Project title:** My Daily Actions: Small Steps, Big Impact  
**Format:** Scroll-based storytelling website  
**Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, GSAP, ScrollTrigger, Lucide React

---

## 1. Project Goal

Build a responsive, scroll-based presentation website for a 10-minute English group presentation with four speakers.

The website should feel like a polished visual story, not a traditional PowerPoint deck. Visitors scroll naturally through six sections. Each section introduces one part of the presentation with concise on-screen text, supportive visuals, and subtle motion.

### Core requirements

- Exactly six content sections, matching the presentation structure below.
- Normal browser scrolling. Do not hijack or lock scrolling.
- Responsive on desktop, tablet, and mobile.
- Readable from a classroom projector.
- Subtle GSAP animations triggered by scrolling.
- A visible progress indicator and current-section label.
- Accessible navigation and reduced-motion support.
- All key content must remain understandable when animations are disabled.

## 2. Presentation Structure and Content

The group has four speakers. Keep the speaker allocation and section order unchanged.

| Section | Topic | Speaker |
|---|---|---|
| 1 | Introduction | Speaker 1 |
| 2 | Reduce Plastic and Waste | Speaker 1 |
| 3 | Save Water and Energy | Speaker 2 |
| 4 | Protect Nature and Wildlife | Speaker 3 |
| 5 | Reduce Food Waste | Speaker 4 |
| 6 | Conclusion | Shared / final speaker |

### Section 1 — Introduction

**Heading:** My Daily Actions: Small Steps, Big Impact

**Supporting text:** Small actions in our daily lives can help protect the environment.

**Visual direction:** A calm, beautiful nature image. Establish the visual identity and introduce the theme.

### Section 2 — Reduce Plastic and Waste

**Key actions:**
- Bring reusable bags.
- Use a refillable water bottle.
- Sort waste and recycle when possible.

**Visual direction:** Reusable shopping bag, refillable bottle, and recycling imagery.

### Section 3 — Save Water and Energy

**Water actions:**
- Turn off the tap while brushing your teeth.
- Take shorter showers.
- Fix leaking taps.

**Energy actions:**
- Turn off lights when leaving a room.
- Unplug chargers when they are not in use.
- Use natural daylight when possible.

**Visual direction:** Two clear content groups or panels: Water and Energy.

### Section 4 — Protect Nature and Wildlife

**Key actions:**
- Plant trees and take care of them.
- Keep rivers, forests, and public places clean.
- Respect animals and do not destroy their homes.

**Visual direction:** Forest, trees, river, and wildlife. Keep the message positive and practical.

### Section 5 — Reduce Food Waste

**Key actions:**
- Plan what you need before shopping.
- Store food properly and use leftovers.
- Share extra food when it is safe to do so.

**Visual direction:** A simple three-step story: Plan → Save → Share.

### Section 6 — Conclusion

**Main message:** Small daily actions matter.

**Closing line:** “The Earth is our home. Let’s take care of it together.”

**Visual direction:** A strong, calm closing image with the final message clearly visible.

### Content rules

- Use simple, beginner-friendly English.
- Keep on-screen text short. Do not place full speaker scripts on the page.
- Do not invent statistics, facts, or environmental claims.
- Preserve the meaning of the six sections.
- Use the same content across all views and responsive layouts.

## 3. Visual Design System

### Design direction

**Modern Eco-Friendly × Clean Editorial**

The design should feel calm, professional, natural, and contemporary. Avoid a childish or overly decorative environmental theme.

### Color palette

| Token | Hex | Usage |
|---|---|---|
| Deep Forest Green | `#1D372D` | Main headings, dark backgrounds |
| Natural Green | `#36704E` | Accent elements, links, icons |
| Soft Sage | `#DDEDE0` | Soft panels and section backgrounds |
| Warm Off-White | `#F8FAF7` | Main page background |
| Charcoal Green | `#313D35` | Body text |
| Muted Gold | `#CFA457` | Small decorative accents only |

Suggested visual balance:
- 60% Warm Off-White
- 25% Soft Sage
- 10% green tones
- 5% Muted Gold

### Design rules

- Do not use gradients.
- Do not use neon or highly saturated colors.
- Avoid unnecessary decoration and visual clutter.
- Use consistent typography, spacing, and section layouts.
- Use large headings and readable body text.
- Keep contrast accessible; aim for WCAG AA.
- Use images with consistent color treatment and appropriate cropping.
- Use subtle borders and restrained shadows only when they improve hierarchy.

### Typography

Use a clean sans-serif typeface such as **Inter**. Establish a clear hierarchy:
- Large hero heading
- Medium section headings
- Short readable supporting text
- Small uppercase section labels, used sparingly

## 4. User Experience

### Scrolling behavior

- Each section should feel like a chapter in one continuous story.
- Sections may occupy approximately 80–100% of the viewport on desktop, but must adapt naturally to content height.
- Preserve normal browser scrolling.
- Do not use scroll-jacking.
- Do not pin every section.
- Avoid long animation delays that make the presentation feel slow.

### Navigation

Create a compact top navigation area with:
- Presentation title or short brand label.
- Current section indicator, such as `03 / 06`.
- A thin progress bar showing the user's position.
- Optional section links if they remain uncluttered.

Add a subtle back-to-top control near the end or when the user has scrolled down.

### Accessibility

- Use semantic HTML landmarks and headings.
- Ensure all interactive controls work with a keyboard.
- Provide visible focus states.
- Give meaningful images appropriate alt text; use empty alt text for purely decorative images.
- Respect `prefers-reduced-motion`.
- Do not communicate meaning through color or animation alone.
- Ensure text remains readable on mobile and when projected.

## 5. Recommended Project Structure

Adapt this structure to the existing repository. Do not overwrite existing configuration files without inspecting them first.

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  presentation/
    PresentationShell.tsx
    TopBar.tsx
    ProgressIndicator.tsx
    SectionLabel.tsx
    BackToTop.tsx

  sections/
    IntroSection.tsx
    ReduceWasteSection.tsx
    SaveResourcesSection.tsx
    ProtectNatureSection.tsx
    FoodWasteSection.tsx
    ConclusionSection.tsx

hooks/
  useReducedMotion.ts

lib/
  gsap.ts
```

Keep components focused and maintainable. Avoid putting the entire website into one very large component.

## 6. Implementation Phases

Complete one phase at a time. After each phase, run the relevant checks and fix issues before moving forward.

### Phase 1 — Inspect the project

1. Inspect the current repository structure.
2. Read `package.json` and identify the existing Next.js, React, TypeScript, and Tailwind versions.
3. Identify the package manager from the lockfile.
4. Check the existing app entry points and global styles.
5. Reuse existing components and dependencies where appropriate.
6. Do not replace or regenerate project configuration unnecessarily.
7. Report the implementation plan before making large structural changes.

**Expected result:** A clear understanding of the existing project and a safe implementation plan.

### Phase 2 — Build the static website

1. Create the six semantic sections in the correct order.
2. Add all presentation content from Section 2 of this document.
3. Build the shared page shell and top navigation.
4. Add the progress indicator and back-to-top control.
5. Establish the color, typography, spacing, and responsive design tokens.
6. Add suitable image placeholders or local image assets.
7. Make sure the complete website works without GSAP.

**Expected result:** A complete, responsive, static scrolling presentation.

### Phase 3 — Add section tracking and progress

1. Track which section is currently visible.
2. Use `IntersectionObserver` or a carefully scoped ScrollTrigger approach.
3. Update the current section label, for example `04 / 06`.
4. Update the progress bar based on scroll position or active section.
5. Make navigation links move to the correct section.
6. Ensure the active-section logic does not flicker around section boundaries.

**Expected result:** Navigation and progress reflect the user's current position.

### Phase 4 — Add GSAP animations

Use GSAP and ScrollTrigger only for subtle, meaningful motion.

Suggested animations:

| Section | Animation |
|---|---|
| 1 — Introduction | Hero image gently scales; title and subtitle fade upward |
| 2 — Reduce Plastic and Waste | Image reveals; action points appear with a short stagger |
| 3 — Save Water and Energy | Water and Energy panels enter gently |
| 4 — Protect Nature and Wildlife | Nature image reveals; action points appear with a short stagger |
| 5 — Reduce Food Waste | Plan → Save → Share appears in sequence |
| 6 — Conclusion | Main message and closing line fade in gently |

Implementation rules:
- Register the ScrollTrigger plugin once in a shared GSAP setup module.
- Scope animations to their React component using `gsap.context()`.
- Revert or clean up the context when components unmount.
- Avoid animating large amounts of text at once.
- Avoid excessive parallax, bouncing, spinning, or dramatic transitions.
- Do not make users wait for content to become visible.
- Ensure animations do not cause layout shifts.
- Check behavior under React Strict Mode.
- Respect reduced-motion preferences. When reduced motion is enabled, show content immediately and disable nonessential motion.

**Expected result:** Smooth, restrained scroll-triggered animation without interfering with normal scrolling.

### Phase 5 — Responsive and presentation polish

Test at:
- Desktop: 1440px wide
- Laptop: 1280px wide
- Tablet: approximately 768px wide
- Mobile: approximately 390px wide

Check:
1. Headings do not overflow.
2. Images have intentional crops and aspect ratios.
3. Text remains readable at every size.
4. Navigation does not cover important content.
5. Progress indicators remain understandable.
6. Sections do not become excessively tall or cramped.
7. The website looks good in a classroom projector/browser.
8. The page remains usable with reduced motion and keyboard navigation.

### Phase 6 — Final quality checks

Run the scripts available in the repository, such as:

```bash
npm run lint
npm run typecheck
npm run build
```

Only run scripts that actually exist in `package.json`. If the project uses another package manager, use its equivalent commands.

Fix:
- TypeScript errors
- Lint errors
- Missing keys
- React warnings
- Broken images
- Console errors
- Layout overflow
- Accessibility issues

**Expected result:** A stable, production-buildable presentation website.

## 7. Technical Guidance

### GSAP setup

Use a shared module for plugin registration rather than registering ScrollTrigger in every section.

Example pattern:

```ts
// lib/gsap.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

Use GSAP only in client components. Keep the page and static content server-rendered where practical.

### Animation cleanup pattern

A client component can scope its animation setup with `gsap.context()` and revert it during cleanup:

```tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ExampleSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      gsap.from("[data-animate]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      {/* Section content */}
    </section>
  );
}
```

This is an illustrative pattern. Adapt it to the project's actual component structure and reduced-motion implementation. Do not copy it into every section without considering reuse.

### Reduced-motion behavior

Use the browser's `prefers-reduced-motion` media preference. When it is enabled:
- Do not hide content before animation.
- Disable nonessential entrance motion and parallax.
- Keep all navigation and progress features working.
- Avoid smooth scrolling if it would conflict with the preference.

## 8. Antigravity / AI Coding Agent Instructions

When using an AI coding agent, follow these rules:

1. Read this entire plan before editing files.
2. Inspect the existing repository before proposing or making changes.
3. Work phase by phase. Do not implement every phase in one uncontrolled change.
4. Preserve the existing package manager, dependencies, and project conventions.
5. Ask before making destructive changes or replacing major configuration.
6. Do not add sections or change the speaker allocation.
7. Do not invent presentation facts or statistics.
8. Do not use gradients.
9. Do not add unnecessary libraries.
10. Do not overanimate or disable normal scrolling.
11. Keep components small and reusable.
12. After each phase, summarize changed files and run relevant checks.
13. If a requirement is ambiguous, ask one focused question instead of guessing.
14. Do not claim a command or test passed unless it was actually run.

### First task for the coding agent

Start with **Phase 1 only**.

Inspect the repository and report:
- Current framework and versions
- Package manager
- Existing app structure
- Existing styling approach
- Dependencies already installed
- Files that can be reused
- Any risks or conflicts with this plan
- A concise proposed implementation sequence

Do not start installing packages or rewriting files until the inspection report is complete.

---

## 9. Definition of Done

The project is complete when:
- All six presentation sections are present and in the correct order.
- The four-speaker allocation is preserved.
- The English is simple and matches the agreed content.
- The design uses the specified eco-friendly palette without gradients.
- Users can scroll naturally through the page.
- The current section and progress indicator update correctly.
- GSAP animations are subtle and work reliably.
- Reduced-motion users can access all content comfortably.
- Desktop, tablet, and mobile layouts are usable.
- Lint, type-check, and production build pass where those scripts are configured.
"""

