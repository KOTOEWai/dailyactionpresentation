"use client";

interface SectionLabelProps {
  number: number;
  total?: number;
  speaker: string;
  topic?: string;
  className?: string;
  inverted?: boolean;
}

export function SectionLabel({
  number,
  total = 6,
  speaker,
  topic,
  className = "",
  inverted = false,
}: SectionLabelProps) {
  const formattedNumber = String(number).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-wider uppercase mb-4 ${className}`}
    >
      <span
        className={`px-2.5 py-1 rounded-md border text-xs font-mono font-medium ${
          inverted
            ? "bg-[#1D372D] text-[#DDEDE0] border-[#36704E]"
            : "bg-[#DDEDE0] text-[#1D372D] border-[#c0dfc5]"
        }`}
      >
        {formattedNumber} / {formattedTotal}
      </span>

      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-medium ${
          inverted
            ? "bg-[#1D372D]/80 text-[#DDEDE0] border-[#36704E]"
            : "bg-white text-[#313D35] border-[#DDEDE0]"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#CFA457]" />
        {speaker}
      </span>

      {topic && (
        <span
          className={`hidden sm:inline-block font-sans text-xs tracking-normal normal-case font-normal ${
            inverted ? "text-[#DDEDE0]/80" : "text-[#526357]"
          }`}
        >
          • {topic}
        </span>
      )}
    </div>
  );
}
