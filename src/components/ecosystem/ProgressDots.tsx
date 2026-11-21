import React from 'react';

interface ProgressDotsProps {
  progress: number;
  onSelectStage?: (stageIndex: number) => void;
}

const STAGES = [
  { id: 1, label: '01', title: 'Awakening & Burst' },
  { id: 2, label: '02', title: 'Finance Suite' },
  { id: 3, label: '03', title: 'Family Safety' },
  { id: 4, label: '04', title: 'Cyber Protection' },
  { id: 5, label: '05', title: 'One Ecosystem' },
];

export const ProgressDots: React.FC<ProgressDotsProps> = ({ progress, onSelectStage }) => {
  // Determine active stage based on progress
  let activeIndex = 0;
  if (progress >= 0.84) activeIndex = 4;
  else if (progress >= 0.68) activeIndex = 3;
  else if (progress >= 0.50) activeIndex = 2;
  else if (progress >= 0.30) activeIndex = 1;
  else activeIndex = 0;

  return (
    <aside
      aria-label="Ecosystem journey progress"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pointer-events-auto"
    >
      {/* Background track line */}
      <div className="absolute top-2 bottom-2 w-[2px] bg-white/10 rounded-full overflow-hidden">
        {/* Animated fill indicator */}
        <div
          className="w-full bg-gradient-to-b from-sunrise-orange via-amber-gold to-royal-blue transition-all duration-150 ease-out"
          style={{ height: `${Math.min(100, Math.max(0, progress * 100))}%` }}
        />
      </div>

      {STAGES.map((s, idx) => {
        const isActive = idx === activeIndex;
        const isPassed = idx < activeIndex;

        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelectStage?.(idx)}
            title={s.title}
            aria-label={`Jump to stage ${s.label}: ${s.title}`}
            aria-current={isActive ? 'step' : undefined}
            className="group relative z-10 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold rounded-full"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-8 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium text-slate-200 bg-midnight/90 border border-white/10 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {s.label} · {s.title}
            </span>

            {/* Dot */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-midnight border-2 border-sunrise-orange shadow-[0_0_12px_rgba(249,125,7,0.8)] scale-110'
                  : isPassed
                  ? 'bg-amber-gold/30 border border-amber-gold/60 text-slate-300'
                  : 'bg-white/5 border border-white/20 text-slate-500 hover:border-white/40'
              }`}
            >
              <span
                className={`text-[9px] font-mono font-bold leading-none ${
                  isActive ? 'text-sunrise-orange' : 'text-slate-400'
                }`}
              >
                {s.label}
              </span>
            </div>
          </button>
        );
      })}
    </aside>
  );
};

