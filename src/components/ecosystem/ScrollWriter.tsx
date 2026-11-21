import React, { useMemo } from 'react';
import { USP_STAGES } from './ecosystemTimeline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ScrollWriterProps {
  progress: number; // 0 to 1
  onExploreProducts: () => void;
  onBecomePartner: () => void;
}

// Highlight target words with orange-gold gradient
const HIGHLIGHT_TERMS = [
  'complete control',
  'Auto Debit',
  'Zero Touch',
  'Peace of mind',
  'SOS alerts',
  'remote wipe',
  '1000+',
  '28+',
  '24/7',
  'Connecting Spirit with Technology',
];

function highlightKeywords(text: string) {
  // Sort terms by length descending to match phrases first
  const regex = new RegExp(`(${HIGHLIGHT_TERMS.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isKeyword = HIGHLIGHT_TERMS.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );
    if (isKeyword) {
      return (
        <span
          key={index}
          className="bg-gradient-to-r from-sunrise-orange via-amber-gold to-sun-yellow bg-clip-text text-transparent font-bold drop-shadow-[0_2px_10px_rgba(249,125,7,0.4)]"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export const ScrollWriter: React.FC<ScrollWriterProps> = ({
  progress,
  onExploreProducts,
  onBecomePartner,
}) => {
  // Find current stage item
  const currentStage = useMemo(() => {
    const matched = USP_STAGES.find(
      (s) => progress >= s.range[0] && progress <= s.range[1]
    );
    return matched || USP_STAGES[0];
  }, [progress]);

  // Stage progress 0 to 1 within this stage
  const stageProgress = useMemo(() => {
    const [start, end] = currentStage.range;
    return Math.max(0, Math.min(1, (progress - start) / (end - start)));
  }, [progress, currentStage]);

  // Concatenate all lines into one script to compute typed character count
  const allLines = currentStage.lines;
  const fullText = allLines.join(' ');
  const totalChars = fullText.length;
  // Let the typing finish at 85% of the stage so it can be read before next stage
  const charsRevealed = Math.floor(Math.min(totalChars, (stageProgress / 0.85) * totalChars));

  // Partition chars revealed into each line
  let charBudget = charsRevealed;
  const renderedLines = allLines.map((line) => {
    if (charBudget <= 0) return '';
    const sliceLen = Math.min(line.length, charBudget);
    charBudget -= sliceLen;
    return line.slice(0, sliceLen);
  });

  const isTypingDone = stageProgress >= 0.85;

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-4 sm:px-8 lg:px-10 py-6 text-slate-100 select-none">
      {/* Subtle Glass Backdrop Card on mobile / transparent on desktop */}
      <div className="relative z-10 max-w-xl mx-auto lg:mx-0 p-6 sm:p-8 rounded-3xl bg-midnight/70 sm:bg-transparent sm:backdrop-blur-none backdrop-blur-xl border border-white/10 sm:border-none shadow-2xl sm:shadow-none">
        {/* Eyebrow in small caps gold */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-amber-gold animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-amber-gold">
            {currentStage.eyebrow}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            [Stage 0{currentStage.stage}/05]
          </span>
        </div>

        {/* Headline in Sora */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-[1.2] tracking-tight">
          {currentStage.headline}
        </h2>

        {/* Typewritten Supporting Lines in Inter */}
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 min-h-[90px] sm:min-h-[110px]">
          {renderedLines.map((lineSlice, idx) => {
            if (!lineSlice) return null;
            const isLastVisibleLine =
              idx === renderedLines.length - 1 || !renderedLines[idx + 1];

            return (
              <p
                key={idx}
                className={`text-sm sm:text-base lg:text-lg leading-relaxed transition-opacity duration-200 ${
                  isLastVisibleLine ? 'text-slate-200 font-medium' : 'text-slate-400'
                }`}
              >
                {highlightKeywords(lineSlice)}
                {/* Glowing orange caret at the end of active line */}
                {isLastVisibleLine && !isTypingDone && (
                  <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-sunrise-orange align-middle shadow-[0_0_8px_#F97D07] animate-pulse" />
                )}
              </p>
            );
          })}
        </div>

        {/* Stage 5 Special: Closing Italic line in Fraunces */}
        {currentStage.stage === 5 && (
          <div className="mt-6 pt-6 border-t border-white/15 animate-fade-in">
            <blockquote className="font-serif italic text-lg sm:text-xl text-amber-gold/90 leading-snug">
              &ldquo;Connecting Spirit with Technology.&rdquo;
            </blockquote>

            {/* Metric Count-Up Chips */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {currentStage.chips?.map((chip) => (
                <div
                  key={chip}
                  className="px-2.5 py-2 rounded-xl bg-white/5 border border-white/15 text-center backdrop-blur-sm"
                >
                  <span className="block text-[11px] sm:text-xs font-mono font-bold text-white">
                    {chip}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreProducts}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-midnight bg-gradient-to-r from-amber-gold to-sunrise-orange hover:from-sunrise-orange hover:to-amber-gold shadow-lg hover:shadow-sunrise-orange/30 transition-all duration-300 flex items-center gap-2 group active:scale-95"
              >
                <span>Explore All Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onBecomePartner}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-md transition-all duration-300 flex items-center gap-2 group active:scale-95"
              >
                <span>Become a Partner</span>
                <CheckCircle2 className="w-4 h-4 text-amber-gold" />
              </button>
            </div>
          </div>
        )}

        {/* Scroll Progress Helper Cue */}
        {progress < 0.84 && (
          <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange animate-pulse" />
            <span>Scroll to progress ecosystem ({Math.round(progress * 100)}%)</span>
          </div>
        )}
      </div>
    </div>
  );
};
