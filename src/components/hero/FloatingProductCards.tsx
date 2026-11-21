import React from 'react';

interface FloatingProductCardsProps {
  mouseOffset: { x: number; y: number };
  onSelectProduct?: (productId: string) => void;
}

export const FloatingProductCards: React.FC<FloatingProductCardsProps> = ({
  mouseOffset,
  onSelectProduct,
}) => {
  return (
    <div className="relative w-full h-[480px] sm:h-[520px] flex items-center justify-center select-none pointer-events-auto">
      {/* Background Soft Conic / Radial Glow */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sunrise-orange/20 via-royal-blue/30 to-amber-gold/20 blur-3xl pointer-events-none" />

      {/* Centerpiece: Glowing Core Shield Hologram */}
      <div
        className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-tr from-amber-gold/40 via-white/10 to-royal-blue/40 flex items-center justify-center backdrop-blur-xl shadow-[0_0_60px_rgba(249,125,7,0.3)]"
        style={{
          transform: `translate3d(${mouseOffset.x * -8}px, ${mouseOffset.y * -8}px, 0)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-full h-full rounded-full bg-midnight/80 border border-white/20 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative">
            <img
              src="/assets/logos/yogic-logo.png"
              alt="Yogic Software Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(249,125,7,0.6)]"
            />
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-amber-gold">
            Ecosystem Core
          </span>
          <span className="text-[9px] text-slate-300 font-mono">Zero-Touch 5.0</span>
        </div>
      </div>

      {/* CARD 1: Yogic Astra Shakti (Top Left) */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectProduct?.('yogic-astra-shakti')}
        onKeyDown={(e) => e.key === 'Enter' && onSelectProduct?.('yogic-astra-shakti')}
        className="absolute top-2 sm:top-6 -left-2 sm:left-4 z-20 p-3.5 sm:p-4 rounded-3xl bg-midnight/80 hover:bg-midnight/95 border border-amber-gold/40 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-amber-gold cursor-pointer group max-w-[210px] sm:max-w-[240px]"
        style={{
          transform: `translate3d(${mouseOffset.x * 14}px, ${mouseOffset.y * 14}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'float-gentle 5s ease-in-out infinite alternate',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/10 p-1.5 border border-white/20 flex-shrink-0">
            <img
              src="/assets/logos/astra-shakti.png"
              alt="Yogic Astra Shakti"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-sunrise-orange/20 text-sunrise-orange">
                Flagship
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white group-hover:text-amber-gold transition-colors mt-0.5">
              Yogic Astra Shakti
            </h4>
            <p className="text-[10px] text-slate-300 mt-0.5">Autonomous Remote Lock</p>
          </div>
        </div>
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Auto Debit Sync</span>
          <span className="text-emerald-400 font-bold">● Active</span>
        </div>
      </div>

      {/* CARD 2: Astra Glamour (Top Right) */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectProduct?.('astra-glamour')}
        onKeyDown={(e) => e.key === 'Enter' && onSelectProduct?.('astra-glamour')}
        className="absolute top-8 sm:top-12 -right-2 sm:right-2 z-20 p-3.5 sm:p-4 rounded-3xl bg-midnight/80 hover:bg-midnight/95 border border-yellow-400/40 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-yellow-400 cursor-pointer group max-w-[200px] sm:max-w-[230px]"
        style={{
          transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -16}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'float-gentle 6s ease-in-out 1s infinite alternate',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/10 p-1.5 border border-white/20 flex-shrink-0">
            <img
              src="/assets/logos/astra-glamour.png"
              alt="Astra Glamour"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-amber-gold/20 text-amber-gold">
              Gold Locker
            </span>
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white group-hover:text-amber-gold transition-colors mt-0.5">
              Astra Glamour
            </h4>
            <p className="text-[10px] text-slate-300 mt-0.5">Google Authenticated</p>
          </div>
        </div>
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>7-Day Security Lock</span>
          <span className="text-amber-gold">★ Certified</span>
        </div>
      </div>

      {/* CARD 3: Secure EMI Locker (Bottom Left / Center) */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectProduct?.('secure-emi')}
        onKeyDown={(e) => e.key === 'Enter' && onSelectProduct?.('secure-emi')}
        className="absolute bottom-4 sm:bottom-6 left-6 sm:left-12 z-20 p-3.5 sm:p-4 rounded-3xl bg-midnight/80 hover:bg-midnight/95 border border-royal-blue/40 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-royal-blue cursor-pointer group max-w-[210px] sm:max-w-[240px]"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'float-gentle 5.5s ease-in-out 0.5s infinite alternate',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/10 p-1.5 border border-white/20 flex-shrink-0">
            <img
              src="/assets/logos/secure-emi.png"
              alt="Secure EMI Locker"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-royal-blue/20 text-cyan-300">
              Zero Default
            </span>
            <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white group-hover:text-amber-gold transition-colors mt-0.5">
              Secure EMI Locker
            </h4>
            <p className="text-[10px] text-slate-300 mt-0.5">Live Location &amp; SIM Guard</p>
          </div>
        </div>
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Telemetry Protocol</span>
          <span className="text-cyan-400 font-bold">100% Armed</span>
        </div>
      </div>
    </div>
  );
};
