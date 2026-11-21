import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LEGAL_DOCS } from '../../data/legalData';

interface LegalModalProps {
  docId: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (docId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [docId, onClose]);

  if (!docId) return null;

  const doc = LEGAL_DOCS[docId] || LEGAL_DOCS.privacy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-midnight/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-deep-navy to-brand-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-gold/20 flex items-center justify-center text-amber-gold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="legal-modal-title" className="font-heading font-extrabold text-xl text-white">
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
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
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
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

