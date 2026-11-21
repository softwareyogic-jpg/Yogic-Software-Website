import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';

interface StoryReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryReelModal: React.FC<StoryReelModalProps> = ({ isOpen, onClose }) => {
  // Official video ID provided by user: https://youtu.be/IEjlkP7I6lU
  const videoId = 'IEjlkP7I6lU';
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="storyreel-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-midnight/92 backdrop-blur-2xl animate-fade-in"
    >
      {/* Outer Modal Container (Stop propagation so clicking inside doesn't close) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-[28px] sm:rounded-[36px] bg-slate-950 border border-white/20 shadow-[0_25px_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-white/10 bg-gradient-to-r from-midnight via-slate-900 to-midnight">
          <div className="flex items-center gap-3">
            {/* Red YouTube Badge */}
            <div className="w-8 h-8 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shadow-md">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <span id="storyreel-title" className="text-xs sm:text-sm font-heading font-extrabold text-white block">
                Yogic Software Pvt. Ltd. · Official Brand Story
              </span>
              <span className="text-[10px] text-slate-400 font-mono block">
                Connecting Spirit with Technology
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-red-500/40 transition-all"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 text-red-400" />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close story video modal"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-red-600/80 text-slate-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded YouTube 16:9 Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            title="Yogic Software Pvt. Ltd. Official Story"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Bottom Bar: Video Context & Escape Hint */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-midnight via-slate-900 to-midnight border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-gold flex-shrink-0" />
            <span>Discover how Yogic Software protects retailers and empowers digital safety across India.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@yogicsoftwarepvt.ltd.4358?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md flex items-center gap-1.5"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              ESC to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
