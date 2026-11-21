import React from 'react';
import type { EcosystemApp } from './ecosystemTimeline';

interface TileCoordinate {
  app: EcosystemApp;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

interface ConnectorLinesProps {
  tiles: TileCoordinate[];
  drawProgress: number; // 0 to 1
  hoveredAppId: string | null;
  activeStage: number; // 1 to 5
}

export const ConnectorLines: React.FC<ConnectorLinesProps> = ({
  tiles,
  drawProgress,
  hoveredAppId,
  activeStage,
}) => {
  // Center is always (0, 0) in the stage coordinate system
  const centerX = 0;
  const centerY = 0;

  // Find Y Gen Care and Kids Care for Stage 3 connecting arc
  const yGenCare = tiles.find((t) => t.app.id === 'y-gen-care');
  const kidsCare = tiles.find((t) => t.app.id === 'kids-care');

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      style={{ zIndex: 10 }}
    >
      <defs>
        {/* Glow filter for active lines */}
        <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Pulse gradients */}
        <linearGradient id="pulse-grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97D07" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EDB90A" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="pulse-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A6BDB" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Radial connectors from center to each app tile */}
      {tiles.map((t) => {
        const isHovered = hoveredAppId === t.app.id;
        const lineLength = Math.hypot(t.x - centerX, t.y - centerY);
        const strokeDash = lineLength;
        const strokeOffset = strokeDash * (1 - Math.min(1, Math.max(0, drawProgress)));

        // Pulse speed and opacity
        const opacity = Math.min(t.opacity, drawProgress);
        if (opacity <= 0.05) return null;

        return (
          <g key={t.app.id} opacity={opacity}>
            {/* Background hairline */}
            <line
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${t.x}px)`}
              y2={`calc(50% + ${t.y}px)`}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth={isHovered ? 2 : 1}
              strokeDasharray={strokeDash}
              strokeDashoffset={strokeOffset}
            />

            {/* Glowing active line */}
            <line
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${t.x}px)`}
              y2={`calc(50% + ${t.y}px)`}
              stroke={t.app.glowColor}
              strokeWidth={isHovered ? 2.5 : 1.2}
              strokeOpacity={isHovered ? 0.9 : 0.4}
              strokeDasharray={strokeDash}
              strokeDashoffset={strokeOffset}
              filter={isHovered ? 'url(#line-glow)' : undefined}
            />

            {/* Traveling Data Pulse Dot along line */}
            {drawProgress > 0.6 && (
              <circle
                r={isHovered ? 3 : 2}
                fill="#FFD60A"
                className="animate-pulse"
                filter="url(#line-glow)"
              >
                <animateMotion
                  path={`M 0,0 L ${t.x},${t.y}`}
                  dur={`${3 + (t.app.angle % 2)}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* Stage 3 Family Connecting Arc between Y Gen Care and Kids Care */}
      {activeStage === 3 && yGenCare && kidsCare && (
        <path
          d={`M calc(50% + ${yGenCare.x}px) calc(50% + ${yGenCare.y}px) Q 50% 50% calc(50% + ${kidsCare.x}px) calc(50% + ${kidsCare.y}px)`}
          fill="none"
          stroke="#0A6BDB"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          filter="url(#line-glow)"
          className="animate-pulse"
          opacity="0.8"
        />
      )}
    </svg>
  );
};

