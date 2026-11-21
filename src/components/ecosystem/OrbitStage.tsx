import React, { useMemo } from 'react';
import { ECOSYSTEM_APPS, TIMELINE_CONSTANTS } from './ecosystemTimeline';
import { AppTile } from './AppTile';
import { ConnectorLines } from './ConnectorLines';

interface OrbitStageProps {
  progress: number; // 0 to 1
  isMobile: boolean;
  mouseOffset: { x: number; y: number };
  hoveredAppId: string | null;
  onHoverApp: (appId: string | null) => void;
  onAppClick: (targetId: string) => void;
}

export const OrbitStage: React.FC<OrbitStageProps> = ({
  progress,
  isMobile,
  mouseOffset,
  hoveredAppId,
  onHoverApp,
  onAppClick,
}) => {
  const radii = isMobile ? TIMELINE_CONSTANTS.radiiMobile : TIMELINE_CONSTANTS.radiiDesktop;

  // Compute Active Stage Index (1 to 5)
  const activeStage = useMemo(() => {
    if (progress >= 0.84) return 5;
    if (progress >= 0.68) return 4;
    if (progress >= 0.50) return 3;
    if (progress >= 0.30) return 2;
    return 1;
  }, [progress]);

  // Stage 0: Center Awakening (progress 0 to 0.08)
  const centerScale = useMemo(() => {
    if (progress < 0.08) {
      // 0.6 to 1.0 with blur to sharp
      return 0.6 + (progress / 0.08) * 0.4;
    }
    // Slight pulse or breathing in later stages
    if (progress >= 0.84) {
      return 1.08;
    }
    return 1.0;
  }, [progress]);

  const centerBlur = useMemo(() => {
    if (progress < 0.08) {
      return (1 - progress / 0.08) * 8;
    }
    return 0;
  }, [progress]);

  // Stage 1: The Burst (progress 0.08 to 0.30)
  const burstProgress = useMemo(() => {
    if (progress < 0.08) return 0;
    if (progress >= 0.30) return 1;
    return (progress - 0.08) / 0.22;
  }, [progress]);

  // Orbit rotation driven by scroll (slow 0 to 25 degrees)
  const baseRotation = useMemo(() => {
    return (progress - 0.08) * 28;
  }, [progress]);

  // Camera zoom pulse on burst
  const cameraScale = useMemo(() => {
    if (progress >= 0.08 && progress < 0.22) {
      const p = (progress - 0.08) / 0.14;
      return 1 + Math.sin(p * Math.PI) * 0.04;
    }
    return 1;
  }, [progress]);

  // Shockwave ring expansion during Stage 1
  const shockwaveProgress = useMemo(() => {
    if (progress >= 0.08 && progress < 0.25) {
      return (progress - 0.08) / 0.17;
    }
    return 0;
  }, [progress]);

  // Compute calculated positions & states for each of the 9 apps
  const tilesData = useMemo(() => {
    return ECOSYSTEM_APPS.map((app, index) => {
      // Base radius by ring
      const targetRadius =
        app.ring === 'inner'
          ? radii.inner
          : app.ring === 'middle'
          ? radii.middle
          : radii.outer;

      // Elastic pop calculation with small stagger
      const stagger = index * 0.04;
      const rawProgress = Math.max(0, Math.min(1, (burstProgress - stagger) / (1 - stagger * 0.7)));

      // Elastic overshoot curve: f(t) = t^2 * (3.5 - 2.5*t) with bounce
      let burstCurve = 0;
      if (rawProgress > 0) {
        const t = rawProgress;
        burstCurve = Math.min(1.25, Math.sin(t * Math.PI * 0.5) * (1 + 0.3 * Math.sin(t * Math.PI)));
      }

      const currentRadius = targetRadius * burstCurve;
      // Rotation angle
      const currentAngleDeg = app.angle + baseRotation;
      const currentAngleRad = (currentAngleDeg * Math.PI) / 180;

      let x = Math.cos(currentAngleRad) * currentRadius;
      let y = Math.sin(currentAngleRad) * currentRadius;

      // Base scale and opacity from burst
      let scale = burstCurve > 0.05 ? Math.min(1, burstCurve) : 0;
      let opacity = Math.min(1, rawProgress * 1.5);
      let filterBlur = 0;
      let glowIntensity = 1;
      let isHighlighted = false;

      // Stage 2: Finance Control (Finance apps glow & scale up, others dim)
      if (activeStage === 2) {
        if (app.category === 'finance') {
          scale = 1.15;
          glowIntensity = 1.6;
          isHighlighted = true;
          opacity = 1;
        } else {
          scale = 0.9;
          opacity = 0.38;
          filterBlur = 2.2;
        }
      }

      // Stage 3: Family Safety (Y Gen Care & Kids Care highlight, pull slightly in)
      else if (activeStage === 3) {
        if (app.category === 'family') {
          scale = 1.18;
          glowIntensity = 1.8;
          isHighlighted = true;
          opacity = 1;
          // Slide slightly toward each other / center
          x *= 0.92;
          y *= 0.92;
        } else {
          scale = 0.88;
          opacity = 0.35;
          filterBlur = 2.5;
        }
      }

      // Stage 4: Cyber Protection (Y Commander & Mobi Protect glow cyan-blue)
      else if (activeStage === 4) {
        if (app.category === 'cyber') {
          scale = 1.18;
          glowIntensity = 2.0;
          isHighlighted = true;
          opacity = 1;
        } else {
          scale = 0.88;
          opacity = 0.35;
          filterBlur = 2.5;
        }
      }

      // Stage 5: One Ecosystem (All full brightness, perfect constellation)
      else if (activeStage === 5) {
        scale = 1.05;
        glowIntensity = 1.2;
        isHighlighted = true;
        opacity = 1;
      }

      return {
        app,
        x,
        y,
        scale,
        opacity,
        filterBlur,
        glowIntensity,
        isHighlighted,
      };
    });
  }, [radii, burstProgress, baseRotation, activeStage]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none overflow-visible"
      style={{
        transform: `scale(${cameraScale})`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      {/* Dynamic Radial Ambient Backlight */}
      <div
        className="absolute w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] rounded-full pointer-events-none blur-[90px] transition-all duration-700"
        style={{
          background:
            activeStage === 2
              ? 'radial-gradient(circle, rgba(249,125,7,0.3) 0%, rgba(237,185,10,0.1) 60%, transparent 80%)'
              : activeStage === 3
              ? 'radial-gradient(circle, rgba(10,107,219,0.35) 0%, rgba(237,185,10,0.15) 60%, transparent 80%)'
              : activeStage === 4
              ? 'radial-gradient(circle, rgba(0,210,255,0.32) 0%, rgba(10,107,219,0.15) 60%, transparent 80%)'
              : activeStage === 5
              ? 'radial-gradient(circle, rgba(237,185,10,0.35) 0%, rgba(249,125,7,0.2) 50%, rgba(10,107,219,0.15) 80%, transparent 100%)'
              : 'radial-gradient(circle, rgba(10,107,219,0.25) 0%, rgba(249,125,7,0.12) 50%, transparent 75%)',
        }}
      />

      {/* 3 Concentric Orbit Rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-gold/20 pointer-events-none transition-all duration-500"
        style={{
          width: `${radii.inner * 2}px`,
          height: `${radii.inner * 2}px`,
          opacity: burstProgress > 0.1 ? 0.7 : burstProgress * 7,
          transform: `translate(-50%, -50%) rotate(${baseRotation * 0.5}deg)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-gold/20 pointer-events-none transition-all duration-500"
        style={{
          width: `${radii.middle * 2}px`,
          height: `${radii.middle * 2}px`,
          opacity: burstProgress > 0.2 ? 0.6 : burstProgress * 3,
          transform: `translate(-50%, -50%) rotate(${baseRotation * -0.4}deg)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-gold/25 pointer-events-none transition-all duration-500"
        style={{
          width: `${radii.outer * 2}px`,
          height: `${radii.outer * 2}px`,
          opacity: burstProgress > 0.3 ? 0.5 : burstProgress * 2,
          transform: `translate(-50%, -50%) rotate(${baseRotation * 0.3}deg)`,
        }}
      />

      {/* Burst Shockwave Ring */}
      {shockwaveProgress > 0 && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sun-yellow/80 pointer-events-none"
          style={{
            width: `${shockwaveProgress * (isMobile ? 360 : 640)}px`,
            height: `${shockwaveProgress * (isMobile ? 360 : 640)}px`,
            opacity: 1 - shockwaveProgress,
            boxShadow: '0 0 24px rgba(255,214,10,0.6)',
          }}
        />
      )}

      {/* SVG Connector Lines */}
      <ConnectorLines
        tiles={tilesData}
        drawProgress={burstProgress}
        hoveredAppId={hoveredAppId}
        activeStage={activeStage}
      />

      {/* Center Yogic Company Logo (The Sun) */}
      <div
        className="relative z-30 flex items-center justify-center select-none"
        style={{
          transform: `scale(${centerScale})`,
          filter: centerBlur > 0 ? `blur(${centerBlur}px)` : 'none',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease',
        }}
      >
        {/* Rotating Sun-Ray Halo (Conic Gradient) */}
        <div
          aria-hidden="true"
          className="absolute -inset-6 sm:-inset-8 rounded-full pointer-events-none opacity-70 animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, rgba(249,125,7,0.5) 0deg, rgba(237,185,10,0.8) 90deg, rgba(10,107,219,0.3) 180deg, rgba(249,125,7,0.5) 270deg, rgba(249,125,7,0.5) 360deg)',
            filter: 'blur(16px)',
          }}
        />

        {/* Ambient Center Glow */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sunrise-orange to-amber-gold opacity-60 blur-xl animate-pulse" />

        {/* Outer Frosted Glass Ring */}
        <div
          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-2.5 sm:p-3.5 flex items-center justify-center bg-midnight/85 backdrop-blur-2xl border-2 border-amber-gold/70 shadow-[0_0_40px_rgba(249,125,7,0.45)]"
          style={{
            boxShadow: '0 0 45px rgba(249,125,7,0.4), inset 0 0 20px rgba(237,185,10,0.25)',
          }}
        >
          {/* Inner Logo Image */}
          <img
            src="/assets/logos/yogic-logo.png"
            alt="Yogic Software Core Emblem"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_4px_16px_rgba(249,125,7,0.5)] z-10"
          />

          {/* Golden Orbit Aura Ring */}
          <div className="absolute inset-1 rounded-full border border-white/20 pointer-events-none" />
        </div>

        {/* Center Pill Badge */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-midnight/90 border border-amber-gold/50 shadow-lg text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-amber-gold font-bold whitespace-nowrap z-20">
          Core Engine
        </div>
      </div>

      {/* 9 Orbiting App Tiles */}
      {tilesData.map((tile) => (
        <AppTile
          key={tile.app.id}
          app={tile.app}
          x={tile.x}
          y={tile.y}
          scale={tile.scale}
          opacity={tile.opacity}
          filterBlur={tile.filterBlur}
          glowIntensity={tile.glowIntensity}
          isHighlighted={tile.isHighlighted}
          mouseOffset={mouseOffset}
          onHoverChange={(isH) => onHoverApp(isH ? tile.app.id : null)}
          onClick={() => onAppClick(tile.app.targetId)}
        />
      ))}

      {/* Stage Highlight Floating Indicator Card */}
      {activeStage >= 2 && activeStage <= 4 && (
        <div className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-2xl bg-midnight/90 border border-white/20 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 animate-bounce-subtle pointer-events-none">
          {activeStage === 2 && (
            <>
              <div className="w-2.5 h-2.5 rounded-full bg-sunrise-orange animate-ping" />
              <span className="text-xs sm:text-sm font-heading font-bold text-slate-100">
                Finance Locker Suite (5 Apps)
              </span>
            </>
          )}
          {activeStage === 3 && (
            <>
              <div className="w-2.5 h-2.5 rounded-full bg-royal-blue animate-ping" />
              <span className="text-xs sm:text-sm font-heading font-bold text-slate-100">
                Family Digital Safety (2 Apps)
              </span>
            </>
          )}
          {activeStage === 4 && (
            <>
              <div className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-ping" />
              <span className="text-xs sm:text-sm font-heading font-bold text-slate-100">
                Cybersecurity &amp; Device Protection (2 Apps)
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
