import React, { useState, useRef, useCallback } from 'react';
import { AlertTriangle, CheckCircle2, ArrowLeftRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BeforeAfterSliderProps {
  onComplete?: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onComplete }) => {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPos(pct);

      if (!hasInteracted && Math.abs(pct - 50) > 15) {
        setHasInteracted(true);
        onComplete?.();
        confetti({
          particleCount: 20,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#F97D07', '#EDB90A'],
        });
      }
    },
    [hasInteracted, onComplete]
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  // Compute animated metric values based on slider position
  const recoveryEffort = sliderPos > 65 ? 'Near Zero' : sliderPos > 35 ? 'Moderate' : 'Extreme / Manual';
  const defaultRate = Math.round(28 - (sliderPos / 100) * 27.2 * 10) / 10; // 28% down to 0.8%
  const retailerPeace = Math.round(15 + (sliderPos / 100) * 84); // 15% up to 99%

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Activity Label */}
      <div className="text-center mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-sunrise-orange/20 text-sunrise-orange border border-sunrise-orange/30">
          Activity 02 · Drag &amp; Compare
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          With vs. Without Yogic
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Drag the interactive slider across the store counter to compare chaotic manual collections against autonomous peace of mind.
        </p>
      </div>

      {/* Main Draggable Comparison Stage */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden select-none cursor-ew-resize border-2 border-white/20 shadow-2xl"
      >
        {/* RIGHT LAYER (With Yogic - Full Color & Security) */}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-brand-navy to-slate-900 p-8 sm:p-12 flex flex-col justify-between">
          <div className="flex items-center justify-end">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>With Yogic Software</span>
            </span>
          </div>

          <div className="max-w-md ml-auto text-right">
            <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Autonomous EMI Certainty
            </h4>
            <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              Auto Debit. Remote lock. Live tracking. Peace of mind. Zero awkward follow-ups, guaranteed on-time collections.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-white/10 text-amber-gold border border-amber-gold/30">
                100% Remote Control
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 text-emerald-400 border border-emerald-400/30">
                Auto UPI Mandate
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end text-[11px] font-mono text-slate-400">
            <span>Yogic Retailer Protection Engine</span>
          </div>
        </div>

        {/* LEFT LAYER (Without Yogic - Grayscale, Stressful & Chaotic) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 sm:p-12 flex flex-col justify-between overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="flex items-center justify-start">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/40 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>Without Yogic (Manual)</span>
            </span>
          </div>

          <div className="max-w-md text-left grayscale contrast-125">
            <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-red-200">
              High Default &amp; Lost Assets
            </h4>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Missed EMIs. Lost devices. Manual follow-ups. SIM card thrown away, customer unreachable, retailer bears 100% loss.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-red-950/60 text-red-400 border border-red-800/40">
                High Risk Exposure
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-red-950/60 text-slate-400 border border-slate-700">
                Manual Visits
              </span>
            </div>
          </div>

          <div className="flex items-center justify-start text-[11px] font-mono text-slate-500">
            <span>Traditional Fragile Financing</span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-gold via-sunrise-orange to-royal-blue shadow-[0_0_15px_#F97D07] z-30"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Grab Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-midnight border-2 border-amber-gold shadow-[0_0_20px_rgba(249,125,7,0.8)] flex items-center justify-center text-amber-gold">
            <ArrowLeftRight className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Dynamic Live Metric Readouts */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-midnight/80 border border-white/10 text-center backdrop-blur-md">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Manual Follow-up Effort
          </span>
          <span className="mt-1 block text-xl font-heading font-extrabold text-amber-gold">
            {recoveryEffort}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-midnight/80 border border-white/10 text-center backdrop-blur-md">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Retail Default Risk Rate
          </span>
          <span className="mt-1 block text-xl font-heading font-extrabold text-sunrise-orange">
            {defaultRate}%
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-midnight/80 border border-white/10 text-center backdrop-blur-md">
          <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Retailer Peace of Mind
          </span>
          <span className="mt-1 block text-xl font-heading font-extrabold text-emerald-400">
            {retailerPeace}%
          </span>
        </div>
      </div>
    </div>
  );
};
