import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {label && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 ${
            isDark
              ? 'bg-amber-gold/20 text-amber-gold border border-amber-gold/40'
              : 'bg-royal-blue/10 text-deep-navy border border-royal-blue/30'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange animate-pulse" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider">
            {label}
          </span>
        </div>
      )}

      <h2
        className={`font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-deep-navy'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
