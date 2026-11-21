import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Quick contact and navigation"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Scroll to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-11 h-11 rounded-full bg-white text-brand-navy shadow-lg border border-slate-200 flex items-center justify-center hover:bg-cloud hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Action Capsule (WhatsApp & Instant Call) */}
      <div className="flex items-center gap-2 bg-midnight/90 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-amber-gold/30 text-white">
        {/* WhatsApp Link */}
        <a
          href="https://wa.me/917596055177?text=Hello%20Yogic%20Software,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Yogic Software on WhatsApp (+91-7596055177)"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide transition-all duration-200 hover:shadow-glow-sunrise"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Direct Click to Call */}
        <a
          href="tel:+917596055177"
          aria-label="Call Yogic Software Support (+91-7596055177)"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange text-deep-navy text-xs font-bold tracking-wide transition-all duration-200 shadow-md"
        >
          <Phone className="w-4 h-4 fill-deep-navy" />
          <span className="hidden sm:inline">+91-7596055177</span>
          <span className="sm:hidden font-extrabold">Call</span>
        </a>
      </div>
    </aside>
  );
};

