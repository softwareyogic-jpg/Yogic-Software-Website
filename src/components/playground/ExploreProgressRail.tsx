import React from 'react';
import { CheckCircle2, Trophy, ArrowRight } from 'lucide-react';

interface ExploreProgressRailProps {
  completedActivities: Record<string, boolean>;
  onScrollToActivity: (id: string) => void;
  onTalkToTeam: () => void;
  isVisible?: boolean;
}

const ACTIVITIES = [
  { id: 'act-locker', label: '1. Locker Sim' },
  { id: 'act-beforeafter', label: '2. With vs Without' },
  { id: 'act-persona', label: '3. Personas' },
  { id: 'act-game', label: '4. Threat Game' },
  { id: 'act-journey', label: '5. Journey 2021+' },
  { id: 'act-map', label: '6. Global Reach' },
];

export const ExploreProgressRail: React.FC<ExploreProgressRailProps> = ({
  completedActivities,
  onScrollToActivity,
  onTalkToTeam,
  isVisible = true,
}) => {
  const completedCount = Object.values(completedActivities).filter(Boolean).length;
  const isFullyExplored = completedCount >= 4;

  return (
    <aside
      aria-label="Playground exploration progress"
      className={`hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-6'
      }`}
    >
      {/* Progress Capsule Card */}
      <div className="p-3.5 rounded-3xl bg-midnight/90 border border-white/15 shadow-2xl backdrop-blur-xl max-w-[190px]">
        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-gold font-bold">
            Explored:
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-gold/20 text-amber-gold font-bold">
            {completedCount} / 6
          </span>
        </div>

        {/* Activity Step Links */}
        <div className="space-y-1">
          {ACTIVITIES.map((act) => {
            const isDone = !!completedActivities[act.id];
            return (
              <button
                key={act.id}
                type="button"
                onClick={() => onScrollToActivity(act.id)}
                className={`w-full flex items-center justify-between text-left px-2 py-1.5 rounded-xl text-[11px] font-sans font-medium transition-all ${
                  isDone
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="truncate">{act.label}</span>
                <CheckCircle2
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                    isDone ? 'text-emerald-400' : 'text-slate-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Milestone Celebration / CTA when 4+ activities explored */}
        {isFullyExplored && (
          <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-gold mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Explorer Unlocked!
              </span>
            </div>
            <p className="text-[9px] text-slate-300 leading-tight mb-2">
              You've seen Yogic in action. Ready to partner?
            </p>
            <button
              type="button"
              onClick={onTalkToTeam}
              className="w-full py-1.5 px-2 rounded-lg text-[10px] font-bold text-midnight bg-gradient-to-r from-amber-gold to-sunrise-orange hover:from-sunrise-orange hover:to-amber-gold transition-all shadow-md flex items-center justify-center gap-1"
            >
              <span>Talk to Team</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
