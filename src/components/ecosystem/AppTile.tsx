import React, { useState } from 'react';
import type { EcosystemApp } from './ecosystemTimeline';

interface AppTileProps {
  app: EcosystemApp;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  filterBlur: number;
  glowIntensity: number; // 0 to 1
  isHighlighted: boolean;
  mouseOffset: { x: number; y: number };
  onHoverChange: (isHovered: boolean) => void;
  onClick: () => void;
}

export const AppTile: React.FC<AppTileProps> = ({
  app,
  x,
  y,
  scale,
  opacity,
  filterBlur,
  glowIntensity,
  isHighlighted,
  mouseOffset,
  onHoverChange,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Depth multiplier based on ring (outer ring moves more with mouse)
  const depthFactor = app.ring === 'outer' ? 1.4 : app.ring === 'middle' ? 1.0 : 0.6;
  const parallaxX = mouseOffset.x * depthFactor * 10;
  const parallaxY = mouseOffset.y * depthFactor * 10;

  // Staggered floating bob delay based on angle
  const bobDelay = (app.angle % 360) / 100;
  const bobDuration = 4 + (app.angle % 3);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  // Outer tile style combining transform and opacity (strictly GPU accelerated)
  const effectiveScale = isHovered ? scale * 1.2 : scale;
  const effectiveZIndex = isHovered ? 40 : isHighlighted ? 30 : 20;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View ${app.name} (${app.category} solution)`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute top-1/2 left-1/2 cursor-pointer outline-none group select-none"
      style={{
        transform: `translate3d(calc(-50% + ${x + parallaxX}px), calc(-50% + ${y + parallaxY}px), 0) scale(${effectiveScale})`,
        opacity,
        filter: filterBlur > 0 ? `blur(${filterBlur}px)` : 'none',
        zIndex: effectiveZIndex,
        willChange: 'transform, opacity',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease, opacity 0.3s ease',
      }}
    >
      {/* Idle Bobbing Shell */}
      <div
        className="relative"
        style={{
          animation: `float-gentle ${bobDuration}s ease-in-out ${bobDelay}s infinite alternate`,
        }}
      >
        {/* Ambient Back Glow */}
        <div
          className="absolute -inset-3 rounded-[32px] pointer-events-none transition-opacity duration-300 blur-xl"
          style={{
            backgroundColor: app.glowColor,
            opacity: isHovered ? 0.8 : isHighlighted ? 0.6 * glowIntensity : 0.2,
          }}
        />

        {/* Outer Glass Card */}
        <div
          className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-[22px] sm:rounded-[24px] p-2 sm:p-2.5 flex items-center justify-center backdrop-blur-xl border transition-all duration-300 shadow-xl ${
            isHighlighted
              ? 'border-amber-gold/80 bg-midnight/80 shadow-[0_8px_30px_rgba(249,125,7,0.35)]'
              : 'border-white/20 bg-midnight/60 hover:border-white/50 hover:bg-midnight/90'
          }`}
          style={{
            boxShadow: `0 12px 28px -6px rgba(0,0,0,0.6), inset 0 1px 1px 0 rgba(255,255,255,0.35)`,
          }}
        >
          {/* Inner Highlight Refraction */}
          <div className="absolute inset-0 rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-white/25 via-transparent to-black/20 pointer-events-none" />

          {/* Logo or Fallback */}
          {!imageError ? (
            <img
              src={app.logo}
              alt={app.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain filter drop-shadow-md relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy to-midnight text-amber-gold border border-amber-gold/30">
              <span className="font-heading font-black text-sm sm:text-base tracking-wider">
                {app.shortName.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}

          {/* Active Highlight Ring Indicator */}
          {isHighlighted && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: app.glowColor }}
              />
              <span
                className="relative inline-flex rounded-full h-3 w-3 border border-white"
                style={{ backgroundColor: app.glowColor }}
              />
            </span>
          )}
        </div>

        {/* Hover Tooltip */}
        <div
          className={`absolute left-1/2 -bottom-9 -translate-x-1/2 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold text-white bg-midnight/95 border border-white/25 shadow-2xl backdrop-blur-md whitespace-nowrap pointer-events-none transition-all duration-200 ${
            isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: app.glowColor }}
            />
            <span>{app.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

