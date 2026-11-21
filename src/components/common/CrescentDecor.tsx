import React from 'react';

interface CrescentDecorProps {
  className?: string;
  variant?: 'blue' | 'orange' | 'dual';
  size?: number;
  opacity?: number;
}

export const CrescentDecor: React.FC<CrescentDecorProps> = ({
  className = '',
  variant = 'dual',
  size = 240,
  opacity = 0.85
}) => {
  return (
    <div
      className={`pointer-events-none select-none transition-all duration-700 ${className}`}
      style={{ opacity, width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="blueCrescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A6BDB" />
            <stop offset="100%" stopColor="#0B2A5B" />
          </linearGradient>
          <linearGradient id="orangeCrescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97D07" />
            <stop offset="100%" stopColor="#EDB90A" />
          </linearGradient>
        </defs>

        {/* Dual Interlocking Crescent Motif from Yogic Logo */}
        {(variant === 'dual' || variant === 'blue') && (
          <path
            d="M 25 155 C 55 125, 55 75, 25 45 C 55 50, 75 80, 70 125 C 65 145, 45 155, 25 155 Z"
            fill="url(#blueCrescentGrad)"
          />
        )}
        {(variant === 'dual' || variant === 'orange') && (
          <path
            d="M 125 40 C 95 70, 95 120, 125 150 C 95 145, 75 115, 80 70 C 85 50, 105 40, 125 40 Z"
            fill="url(#orangeCrescentGrad)"
          />
        )}
      </svg>
    </div>
  );
};

