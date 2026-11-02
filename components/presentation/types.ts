export interface SectionMeta {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  speaker: string;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: "section-1",
    number: 1,
    title: "Introduction",
    shortTitle: "Intro",
    speaker: "Speaker 1",
  },
  {
    id: "section-2",
    number: 2,
    title: "Reduce Plastic and Waste",
    shortTitle: "Plastic & Waste",
    speaker: "Speaker 1",
  },
  {
    id: "section-3",
    number: 3,
    title: "Save Water and Energy",
    shortTitle: "Water & Energy",
    speaker: "Speaker 2",
  },
  {
    id: "section-4",
    number: 4,
    title: "Protect Nature and Wildlife",
    shortTitle: "Nature & Wildlife",
    speaker: "Speaker 3",
  },
  {
    id: "section-5",
    number: 5,
    title: "Reduce Food Waste",
    shortTitle: "Food Waste",
    speaker: "Speaker 4",
  },
  {
    id: "section-6",
    number: 6,
    title: "Conclusion",
    shortTitle: "Conclusion",
    speaker: "Final Speaker",
  },
];
