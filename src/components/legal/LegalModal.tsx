import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LEGAL_DOCS } from '../../data/legalData';

interface LegalModalProps {
  docId: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docId, onClose }) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (docId) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [docId, onClose]);

  const handleHeaderFooterWheel = (e: React.WheelEvent) => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop += e.deltaY;
    }
  };

  if (!docId) return null;

  const doc = LEGAL_DOCS[docId] || LEGAL_DOCS.privacy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-midnight/70 backdrop-blur-md animate-fadeIn overscroll-contain overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-scaleUp my-auto overscroll-contain"
      >
        {/* Header */}
        <div
          onWheel={handleHeaderFooterWheel}
          className="flex-shrink-0 p-5 sm:p-6 bg-gradient-to-r from-deep-navy to-brand-navy text-white flex items-center justify-between select-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-gold/20 flex items-center justify-center text-amber-gold flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="legal-modal-title" className="font-heading font-extrabold text-lg sm:text-xl text-white">
                {doc.title}
              </h2>
              <p className="text-xs text-blue-200">
                Last reviewed: {doc.lastUpdated} — Yogic Software Pvt. Ltd.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close legal document dialog"
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div
          ref={bodyRef}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed"
        >
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-heading font-bold text-deep-navy text-base">
                {sec.heading}
              </h3>
              <p className="text-slate-600">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          onWheel={handleHeaderFooterWheel}
          className="flex-shrink-0 p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between select-none"
        >
          <span className="text-xs text-slate-500 font-mono">
            Kolkata HQ &bull; West Bengal 700052
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-deep-navy text-white hover:bg-royal-blue transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

