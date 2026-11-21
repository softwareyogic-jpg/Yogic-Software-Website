import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { WorldMapDots } from './WorldMapDots';
import { Globe2, ShieldCheck, Activity } from 'lucide-react';

interface MarqueeCountry {
  name: string;
  code: string;
  flagUrl: string;
  region: string;
  status: string;
}

const COUNTRIES_MARQUEE: MarqueeCountry[] = [
  { name: 'India', code: 'in', flagUrl: '/assets/flags/in.png', region: 'Global HQ • South Asia', status: 'Primary Hub' },
  { name: 'Bangladesh', code: 'bd', flagUrl: '/assets/flags/bd.png', region: 'South Asia', status: 'Active Node' },
  { name: 'Mexico', code: 'mx', flagUrl: '/assets/flags/mx.png', region: 'North America', status: 'Active Node' },
  { name: 'Ecuador', code: 'ec', flagUrl: '/assets/flags/ec.png', region: 'South America', status: 'Active Node' },
  { name: 'Spain', code: 'es', flagUrl: '/assets/flags/es.png', region: 'Europe', status: 'Active Node' },
  { name: 'UAE', code: 'ae', flagUrl: '/assets/flags/ae.png', region: 'Middle East', status: 'Active Node' },
  { name: 'Uganda', code: 'ug', flagUrl: '/assets/flags/ug.png', region: 'East Africa', status: 'Active Node' },
  { name: 'Philippines', code: 'ph', flagUrl: '/assets/flags/ph.png', region: 'Southeast Asia', status: 'Active Node' },
  { name: 'Venezuela', code: 've', flagUrl: '/assets/flags/ve.png', region: 'South America', status: 'Active Node' },
];

export const GlobalReach: React.FC = () => {
  // VERIFY: Global presence in 9 international markets requires corporate validation
  return (
    <section
      id="global-reach"
      className="relative py-24 md:py-32 bg-gradient-to-b from-deep-navy via-midnight to-deep-navy text-white overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-royal-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-sunrise-orange/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Global Reach"
          title="We Are Available Globally"
          subtitle="Trusted by businesses across multiple continents"
          theme="dark"
        />

        {/* High-Fidelity Dotted World Map with Real Flag Emblems */}
        <div className="mt-12 sm:mt-16">
          <WorldMapDots />
        </div>

        {/* Global Architecture Indicator Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Globe2 className="w-4 h-4 text-amber-gold" />
            <span><strong>9 Sovereign Markets</strong> Supported</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bank-Grade Cross-Border Cryptography</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Activity className="w-4 h-4 text-sunrise-orange" />
            <span>99.9% Uptime Telemetry</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee of Countries with Genuine HD Flags */}
      <div className="relative z-20 mt-14 w-full overflow-hidden border-y border-white/15 bg-black/40 backdrop-blur-xl py-5 shadow-2xl">
        <div className="flex w-max animate-marquee gap-6">
          {[...COUNTRIES_MARQUEE, ...COUNTRIES_MARQUEE, ...COUNTRIES_MARQUEE].map((c, idx) => (
            <div
              key={`${c.name}-${idx}`}
              className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 hover:border-amber-gold/60 transition-all duration-300 shadow-lg hover:-translate-y-0.5 group cursor-default"
            >
              {/* Real Flag Image */}
              <div className="w-10 h-7 rounded-md overflow-hidden shadow-md border border-white/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={c.flagUrl}
                  alt={`${c.name} Flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-sm text-white group-hover:text-amber-gold transition-colors">
                    {c.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </div>
                <span className="block text-[10px] text-slate-300 font-medium">
                  {c.region}
                </span>
              </div>

              <span className="ml-2 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-amber-gold/15 text-amber-gold border border-amber-gold/30">
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
