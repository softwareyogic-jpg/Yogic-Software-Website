import React from 'react';
import { Check } from 'lucide-react';

const CHECKLIST_ITEMS = [
  '5 years of experience (since 2021) in EMI management and device security',
  'Proven network of 1000+ retail partners across India',
  '99% client satisfaction with zero collateral defaults [VERIFY with real survey data]',
  '24/7 expert and AI-powered multi-lingual technical support',
  'Nationwide on-ground sales and service network across 28+ states',
  'Google-authenticated, privacy-focused security architectures [VERIFY certification details]',
  'Regular weekly feature updates driven directly by market feedback',
  'Available on Google Play & Google Zero Touch for seamless retailer provisioning',
];

export const WhyChecklist: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-midnight/90 border border-white/15 backdrop-blur-2xl shadow-2xl">
        <div className="text-center mb-8">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            Proven Industry Credentials
          </span>
          <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Why Partners Choose Yogic Software
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Real reasons mobile retailers, parents, and enterprises trust our technology every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {CHECKLIST_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-gold/50 hover:bg-white/10 transition-all duration-200 flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

