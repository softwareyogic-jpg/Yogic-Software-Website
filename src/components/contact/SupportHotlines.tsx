import React from 'react';
import { PhoneCall, Clock, Sparkles } from 'lucide-react';

export const SupportHotlines: React.FC = () => {
  const hotlines = [
    { number: '+91-7596055177', label: 'Primary Helpdesk' },
    { number: '+91-7596055179', label: 'Technical Escalations' },
    { number: '+91-9330894978', label: 'Retailer Onboarding' },
    { number: '+91-7980690955', label: 'East Zone Dispatch' },
    { number: '+91-9903376447', label: 'Enterprise Systems' },
  ];

  return (
    <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl flex flex-col justify-between h-full">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-gold/20 text-amber-gold border border-amber-gold/30 text-xs font-bold mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>Always Operational</span>
        </div>

        <h3 className="font-heading font-extrabold text-2xl text-white">
          24/7 Expert and AI Support Available
        </h3>

        <p className="mt-3 text-sm text-blue-100/80 leading-relaxed">
          Need instantaneous assistance or emergency token resets? Speak directly with our dedicated technical desk in Kolkata.
        </p>

        {/* Hotlines List */}
        <div className="mt-8 space-y-3">
          {hotlines.map((h) => (
            <a
              key={h.number}
              href={`tel:${h.number.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-gold/40 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-sunrise-orange to-amber-gold text-deep-navy flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-4 h-4 fill-deep-navy" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-white group-hover:text-amber-gold transition-colors">
                    {h.number}
                  </span>
                  <span className="block text-[11px] text-blue-200/70">
                    {h.label}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-bold text-amber-gold px-2.5 py-1 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                Call Now &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-blue-200/80">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-gold" />
          <span>AI Voice Triage &amp; Human Escalations</span>
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
    </div>
  );
};
