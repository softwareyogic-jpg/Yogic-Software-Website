import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PhoneCall, CheckCircle, ExternalLink } from 'lucide-react';

export const Milestones: React.FC = () => {
  // VERIFY: 99% client satisfaction and milestone metrics
  const stats = [
    { value: '2021', label: 'Year Founded', desc: '5+ years of steadfast digital trust & organic innovation' },
    { value: '10000+', label: 'Retail Partners', desc: 'Active store networks onboarded across India' },
    { value: '99%', label: 'Client Satisfaction', desc: 'Consistent renewal & positive service feedback' },
    { value: '28+', label: 'Indian States', desc: 'Nationwide footprint with local distributor support' },
  ];

  return (
    <section
      id="milestones"
      className="relative py-20 md:py-28 bg-gradient-to-br from-royal-blue via-[#0B3D7E] to-deep-navy text-white overflow-hidden"
    >
      {/* Dynamic ambient lights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sunrise-orange/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Our Journey"
          title="Milestones & Achievements"
          subtitle="Proving excellence through measurable scale, dependable uptime, and strong retailer loyalty across the subcontinent."
          theme="dark"
        />

        {/* Counter Stats Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex flex-col items-center text-center group hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-amber-gold drop-shadow-[0_2px_15px_rgba(237,185,10,0.4)]">
                {stat.value}
              </div>
              <h3 className="mt-3 text-lg sm:text-xl font-heading font-bold text-white">
                {stat.label}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-xs">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="mt-16 pt-10 border-t border-white/15">
          <div className="text-center text-xs uppercase tracking-widest text-blue-200/80 font-semibold mb-6">
            Verified Integrity &amp; Certification
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Google Play "Get Our Apps" */}
            <a
              href="https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-deep-navy font-bold text-sm shadow-lg hover:shadow-glow-sunrise hover:bg-cloud transition-all duration-200 group"
            >
              <svg className="w-6 h-6 text-royal-blue" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 01-.61-.954V2.768c.174-.35.394-.674.609-.954zM15.207 13.414l2.58 2.58-13.06 7.54 10.48-10.12zm0-2.828L4.727.466 17.787 8.006l-2.58 2.58zm1.414 1.414l3.535-2.04c.83-.48.83-1.26 0-1.74l-3.535-2.04-1.414 1.414 2.828 2.828-2.828 2.828 1.414-1.25z" />
              </svg>
              <div className="text-left">
                <span className="block text-[10px] text-slate-500 uppercase leading-none font-medium">Download on</span>
                <span className="block text-sm font-extrabold text-deep-navy leading-tight">Google Play Store</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-royal-blue group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Google Authenticated Badge */}
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <span className="block text-[10px] text-blue-200 uppercase leading-none">Security Protocol</span>
                <span className="block text-sm font-bold text-white leading-tight">Google Authenticated</span>
              </div>
            </div>

            {/* 24/7 Expert & AI Support with Click to Call */}
            <a
              href="tel:+917596055177"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sunrise-orange to-amber-gold text-deep-navy font-bold text-sm shadow-lg hover:shadow-glow-sunrise transition-all duration-200 group"
            >
              <PhoneCall className="w-5 h-5 text-deep-navy group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <span className="block text-[10px] text-deep-navy/80 uppercase leading-none font-bold">Hotline Available</span>
                <span className="block text-sm font-extrabold leading-tight">24/7 Expert &amp; AI Support</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
