import React, { useState } from 'react';
import { ShieldCheck, Wifi, Sparkles } from 'lucide-react';

interface CountryPoint {
  code: string;
  name: string;
  flagUrl: string;
  region: string;
  x: number; // percentage coordinates (0 - 100)
  y: number;
  isHQ?: boolean;
  latency: string;
}

const COUNTRIES: CountryPoint[] = [
  { code: 'in', name: 'India (Global HQ)', flagUrl: '/assets/flags/in.png', region: 'South Asia Hub', x: 68.0, y: 44, isHQ: true, latency: '8ms' },
  { code: 'bd', name: 'Bangladesh', flagUrl: '/assets/flags/bd.png', region: 'South Asia', x: 78.0, y: 48, latency: '14ms' },
  { code: 'ae', name: 'UAE', flagUrl: '/assets/flags/ae.png', region: 'Middle East', x: 61.0, y: 42, latency: '28ms' },
  { code: 'es', name: 'Spain', flagUrl: '/assets/flags/es.png', region: 'Europe', x: 47.0, y: 35, latency: '42ms' },
  { code: 'ug', name: 'Uganda', flagUrl: '/assets/flags/ug.png', region: 'East Africa', x: 56.5, y: 57, latency: '54ms' },
  { code: 'ph', name: 'Philippines', flagUrl: '/assets/flags/ph.png', region: 'Southeast Asia', x: 86.0, y: 51, latency: '36ms' },
  { code: 'mx', name: 'Mexico', flagUrl: '/assets/flags/mx.png', region: 'North America', x: 21.0, y: 43, latency: '68ms' },
  { code: 've', name: 'Venezuela', flagUrl: '/assets/flags/ve.png', region: 'South America', x: 30.5, y: 49, latency: '74ms' },
  { code: 'ec', name: 'Ecuador', flagUrl: '/assets/flags/ec.png', region: 'South America', x: 25.0, y: 58, latency: '79ms' },
];

export const WorldMapDots: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<CountryPoint>(COUNTRIES[0]);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl p-4 sm:p-8 bg-gradient-to-b from-midnight/90 via-[#061838] to-midnight/95 border border-amber-gold/25 shadow-2xl overflow-hidden select-none">
      
      {/* Background High-Tech Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-royal-blue/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-gold/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Map Telemetry Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>GLOBAL NETWORK ACTIVE</span>
          </div>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Wifi className="w-3.5 h-3.5 text-amber-gold" />
            <span>Encrypted Satellite Mesh</span>
          </span>
        </div>

        {/* Selected Country Live Readout Pill */}
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-gold/40 text-white font-medium text-xs">
          <img
            src={activeCountry.flagUrl}
            alt={activeCountry.name}
            className="w-5 h-3.5 rounded object-cover shadow-sm border border-white/30"
          />
          <span className="font-heading font-bold text-amber-gold">{activeCountry.name}</span>
          <span className="text-[10px] text-emerald-400 font-mono">({activeCountry.latency})</span>
        </div>
      </div>

      {/* Interactive World Map SVG Viewport */}
      <div className="relative w-full h-80 sm:h-[420px] md:h-[480px] my-3">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="worldGrid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(10, 107, 219, 0.12)" strokeWidth="0.75" />
              <circle cx="25" cy="0" r="1" fill="rgba(237, 185, 10, 0.25)" />
            </pattern>

            {/* Glowing trajectory gradients */}
            <linearGradient id="indiaArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97D07" />
              <stop offset="50%" stopColor="#EDB90A" />
              <stop offset="100%" stopColor="#0A6BDB" />
            </linearGradient>

            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Matrix Grid */}
          <rect width="1000" height="500" fill="url(#worldGrid)" />

          {/* Equator & Meridian Guide Lines */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="4 6" />
          <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="4 6" />

          {/* High-Fidelity Stylized Continents Outlines */}
          {/* North America */}
          <path
            d="M 120 120 C 180 80, 260 70, 310 130 C 270 170, 290 220, 220 230 C 190 250, 150 200, 120 120 Z"
            fill="rgba(14, 46, 95, 0.45)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1.2"
          />
          {/* Central America & Caribbean */}
          <path
            d="M 210 225 Q 240 250, 230 270 Q 210 260, 210 225 Z"
            fill="rgba(14, 46, 95, 0.5)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1"
          />
          {/* South America */}
          <path
            d="M 250 250 C 310 250, 340 310, 320 390 C 280 430, 260 370, 240 300 C 235 270, 245 255, 250 250 Z"
            fill="rgba(14, 46, 95, 0.45)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1.2"
          />
          {/* Europe */}
          <path
            d="M 450 110 C 510 90, 560 110, 550 170 C 500 185, 460 180, 440 145 C 435 125, 445 115, 450 110 Z"
            fill="rgba(14, 46, 95, 0.45)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1.2"
          />
          {/* Africa */}
          <path
            d="M 470 190 C 560 180, 590 240, 580 340 C 540 390, 500 370, 470 270 C 455 220, 465 195, 470 190 Z"
            fill="rgba(14, 46, 95, 0.45)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1.2"
          />
          {/* Asia */}
          <path
            d="M 570 100 C 720 70, 870 90, 890 220 C 850 280, 770 290, 680 240 C 620 230, 580 180, 570 100 Z"
            fill="rgba(14, 46, 95, 0.45)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1.2"
          />
          {/* Indian Subcontinent Silhouette */}
          <path
            d="M 685 210 Q 720 220, 740 240 Q 715 285, 700 280 Q 685 240, 685 210 Z"
            fill="rgba(237, 185, 10, 0.12)"
            stroke="rgba(249, 125, 7, 0.4)"
            strokeWidth="1.2"
          />
          {/* Australia */}
          <path
            d="M 790 330 C 860 320, 890 360, 870 410 C 820 430, 780 400, 780 350 Z"
            fill="rgba(14, 46, 95, 0.4)"
            stroke="rgba(10, 107, 219, 0.3)"
            strokeWidth="1.2"
          />

          {/* Luminous Arcs Connecting Kolkata/India to the World */}
          {/* India -> Bangladesh */}
          <path d="M 705 230 Q 730 225, 755 230" fill="none" stroke="url(#indiaArcGrad)" strokeWidth="2" strokeDasharray="3 3" filter="url(#laserGlow)" />
          {/* India -> UAE */}
          <path d="M 705 230 Q 665 200, 625 215" fill="none" stroke="url(#indiaArcGrad)" strokeWidth="2" strokeDasharray="4 4" filter="url(#laserGlow)" />
          {/* India -> Spain */}
          <path d="M 705 230 Q 580 140, 475 175" fill="none" stroke="url(#indiaArcGrad)" strokeWidth="2" strokeDasharray="5 5" filter="url(#laserGlow)" />
          {/* India -> Uganda */}
          <path d="M 705 230 Q 630 250, 570 280" fill="none" stroke="url(#indiaArcGrad)" strokeWidth="2" strokeDasharray="4 4" filter="url(#laserGlow)" />
          {/* India -> Philippines */}
          <path d="M 705 230 Q 775 220, 840 255" fill="none" stroke="url(#indiaArcGrad)" strokeWidth="2" strokeDasharray="4 4" filter="url(#laserGlow)" />
          {/* Spain -> Mexico */}
          <path d="M 475 175 Q 330 150, 210 215" fill="none" stroke="#0A6BDB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.75" />
          {/* Mexico -> Venezuela */}
          <path d="M 210 215 Q 260 220, 295 250" fill="none" stroke="#EDB90A" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
          {/* Venezuela -> Ecuador */}
          <path d="M 295 250 Q 275 270, 255 285" fill="none" stroke="#F97D07" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        </svg>

        {/* Real Country Flags & Glowing Beacons Overlaid */}
        {COUNTRIES.map((c) => {
          const isSelected = activeCountry.code === c.code;

          return (
            <div
              key={c.code}
              onClick={() => setActiveCountry(c)}
              onMouseEnter={() => setActiveCountry(c)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group"
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
              }}
            >
              {/* Outer Pulsing Radio Wave */}
              {c.isHQ ? (
                <>
                  <span className="absolute -inset-4 rounded-full bg-sunrise-orange/50 animate-ping" />
                  <span className="absolute -inset-2.5 rounded-full bg-amber-gold/60 animate-pulse" />
                </>
              ) : (
                <span className="absolute -inset-2 rounded-full bg-royal-blue/40 group-hover:bg-amber-gold/60 animate-pulse" />
              )}

              {/* Real Flag Badge Capsule */}
              <div
                className={`relative flex items-center gap-1.5 p-1 rounded-lg backdrop-blur-md shadow-xl transition-all duration-300 ${
                  isSelected || c.isHQ
                    ? 'bg-midnight/95 border-2 border-amber-gold scale-110 shadow-glow-sunrise'
                    : 'bg-midnight/80 border border-white/20 group-hover:border-amber-gold/70 group-hover:scale-105'
                }`}
              >
                {/* Genuine Flag Image */}
                <div className="w-6 h-4 sm:w-7 sm:h-5 rounded overflow-hidden shadow-inner flex-shrink-0 border border-white/30">
                  <img
                    src={c.flagUrl}
                    alt={`${c.name} Flag`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Country Name Tag (Visible on medium+ screens or when active) */}
                <div className="hidden sm:flex flex-col text-left pr-1">
                  <span className="text-[10px] font-heading font-black text-white leading-tight flex items-center gap-1">
                    <span>{c.name.split(' ')[0]}</span>
                    {c.isHQ && <Sparkles className="w-2.5 h-2.5 text-amber-gold inline" />}
                  </span>
                  <span className="text-[8px] text-amber-gold/90 font-mono leading-none">
                    {c.latency}
                  </span>
                </div>
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-30">
                <div className="px-3 py-1.5 rounded-xl bg-midnight/95 border border-amber-gold/60 text-white shadow-2xl backdrop-blur-xl whitespace-nowrap text-center">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-gold">
                    <img src={c.flagUrl} alt="" className="w-4 h-3 rounded object-cover" />
                    <span>{c.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5 flex items-center justify-center gap-2">
                    <span>{c.region}</span>
                    <span>&bull;</span>
                    <span className="text-emerald-400 font-mono">Secure Node</span>
                  </div>
                </div>
                <div className="w-2 h-2 bg-midnight/95 border-r border-b border-amber-gold/60 rotate-45 -mt-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Mission Guarantee Strip */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Cross-Continental Financial Locker Infrastructure &amp; Latency Guard</span>
        </div>
        <div className="text-[11px] text-amber-gold font-mono font-semibold">
          Primary Operations: Kolkata (WB, India) &bull; 9 Sovereign Zones
        </div>
      </div>

    </div>
  );
};
