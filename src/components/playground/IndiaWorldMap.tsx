import React, { useState } from 'react';
import { ExternalLink, MapPin, Globe, Layers, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';

interface IndiaWorldMapProps {
  onComplete?: () => void;
}

const GLOBAL_NATIONS = [
  { name: 'India (HQ - Kolkata Airport)', flag: '/assets/flags/in.png', partners: '10000+ Stores across 28+ States' },
  { name: 'Bangladesh', flag: '/assets/flags/bd.png', partners: 'Active Retail Network' },
  { name: 'Mexico', flag: '/assets/flags/mx.png', partners: 'LATAM FinTech Hub' },
  { name: 'Ecuador', flag: '/assets/flags/ec.png', partners: 'Retail Partner Belt' },
  { name: 'Spain', flag: '/assets/flags/es.png', partners: 'European Gateway' },
  { name: 'UAE', flag: '/assets/flags/ae.png', partners: 'Middle East Tech Hub' },
  { name: 'Uganda', flag: '/assets/flags/ug.png', partners: 'East Africa Ops' },
  { name: 'Philippines', flag: '/assets/flags/ph.png', partners: 'SEA Expansion' },
  { name: 'Venezuela', flag: '/assets/flags/ve.png', partners: 'Secure EMI Deployments' },
];

export const IndiaWorldMap: React.FC<IndiaWorldMapProps> = ({ onComplete }) => {
  const [viewMode, setViewMode] = useState<'map' | 'world'>('map');
  const [mapStyle, setMapStyle] = useState<'roadmap' | 'satellite'>('roadmap');

  const googleMapsUrl =
    'https://www.google.com/maps/place/YOGIC+SOFTWARE/@22.6326148,88.4341764,17z/data=!3m1!1e3!4m15!1m8!3m7!1s0x39f89e1dc209383d:0x3535f57f817115d2!2sVIP+Rd,+West+Bengal,+India!3b1!8m2!3d22.6037679!4d88.4141531!16s%2Fm%2F04185pq!3m5!1s0x39f89e3641a5f81d:0x531ea93ceed4babb!8m2!3d22.6326148!4d88.4341764!16s%2Fg%2F11pv0dxthz?hl=en-IN';

  const embedSrc = `https://maps.google.com/maps?q=22.6326148,88.4341764+(YOGIC+SOFTWARE+PVT+LTD)&t=${
    mapStyle === 'satellite' ? 'k' : ''
  }&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleToggleMode = (mode: 'map' | 'world') => {
    setViewMode(mode);
    onComplete?.();
    if (mode === 'world') {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0A6BDB', '#EDB90A', '#F97D07'],
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Activity Label */}
      <div className="text-center mb-8">
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
          Activity 06 · Official Google Map Location
        </span>
        <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white">
          From Kolkata to the World
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Visit or locate Yogic Software Head Office right by Netaji Subhash Chandra Bose International Airport (CCU) on VIP Road, Kolkata.
        </p>
      </div>

      {/* Main Map Box */}
      <div className="relative rounded-3xl bg-midnight/90 border-2 border-white/15 p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* View Toggle Bar & Counters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-white/10 relative z-20">
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => handleToggleMode('map')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all flex items-center gap-2 ${
                viewMode === 'map'
                  ? 'bg-amber-gold text-midnight shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-midnight" />
              <span>Real Google Map (Kolkata HQ)</span>
            </button>

            <button
              type="button"
              onClick={() => handleToggleMode('world')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all flex items-center gap-2 ${
                viewMode === 'world'
                  ? 'bg-royal-blue text-white shadow-md shadow-royal-blue/30'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Global Network (9 Nations)</span>
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-xl bg-white/10 text-amber-gold font-bold border border-amber-gold/30">
              10000+ Retail Partners
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/10 text-sunrise-orange font-bold border border-sunrise-orange/30">
              28+ States
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/10 text-cyan-300 font-bold border border-cyan-400/30">
              9 Countries
            </div>
          </div>
        </div>

        {/* Map Visualization Stage */}
        <div className="relative w-full h-[500px] sm:h-[560px] rounded-2xl overflow-hidden my-4 border border-white/15 shadow-2xl bg-slate-950">
          {viewMode === 'map' ? (
            /* REAL INTERACTIVE GOOGLE MAP */
            <div className="relative w-full h-full overflow-hidden">
              {/* Google Maps Embed iframe */}
              <iframe
                title="YOGIC SOFTWARE Real Google Map"
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[1.05] contrast-[1.02]"
              />

              {/* Map Type Switcher Floating on Top Right */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1.5 rounded-xl bg-midnight/90 border border-white/20 shadow-xl backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setMapStyle('roadmap')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all flex items-center gap-1.5 ${
                    mapStyle === 'roadmap'
                      ? 'bg-amber-gold text-midnight font-bold shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Map</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMapStyle('satellite')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all flex items-center gap-1.5 ${
                    mapStyle === 'satellite'
                      ? 'bg-royal-blue text-white font-bold shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Satellite</span>
                </button>
              </div>

              {/* Floating Verified Google Business Location Badge on Bottom-Left */}
              <div className="absolute bottom-4 left-4 z-20 max-w-sm sm:max-w-md p-4 sm:p-5 rounded-2xl bg-midnight/95 border-2 border-amber-gold/60 shadow-2xl backdrop-blur-xl text-left pointer-events-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-gold">
                    Google Maps Verified Location
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-heading font-black text-white flex items-center gap-1.5">
                  <span>YOGIC SOFTWARE PVT. LTD.</span>
                </h4>

                <p className="mt-1 text-xs text-slate-200 leading-snug">
                  Mondal Ganthi, Ramkrishna Pally, VIP Road, Kaikhali, Kolkata – 700052, West Bengal
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-y-1.5 text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-gold font-bold">Proximity:</span>
                    <span>~2 km from Kolkata Airport (CCU)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-300 font-bold">Coordinates:</span>
                    <span>22.6326° N, 88.4342° E</span>
                  </div>
                </div>

                <div className="mt-3.5 flex items-center gap-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-gold to-sunrise-orange text-midnight font-heading font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Global Network Cards View */
            <div className="relative w-full h-full p-6 bg-slate-900/95 backdrop-blur-md flex flex-col justify-center animate-fade-in overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 z-10 max-w-4xl mx-auto w-full">
                {GLOBAL_NATIONS.map((nation) => (
                  <div
                    key={nation.name}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-gold/60 hover:bg-white/10 transition-all flex items-center gap-3.5 shadow-lg"
                  >
                    <div className="w-10 h-7 rounded overflow-hidden flex-shrink-0 shadow-md border border-white/20">
                      <img src={nation.flag} alt={nation.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-heading font-bold text-white">
                        {nation.name}
                      </h5>
                      <span className="text-[11px] font-mono text-amber-gold block mt-0.5">
                        {nation.partners}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Info Pill */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Mondal Ganthi VIP Road, Kolkata Airport Corridor, West Bengal, India</span>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-gold hover:text-sunrise-orange transition-colors flex items-center gap-1 font-bold"
          >
            <span>Official Google Business Profile &amp; Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
