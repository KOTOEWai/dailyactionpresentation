"use client";

interface ProgressIndicatorProps {
  progress: number; // 0 to 100
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Presentation Reading Progress"
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#DDEDE0]"
    >
      <div
        className="h-full bg-[#36704E] transition-all duration-150 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}
