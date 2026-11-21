import React from 'react';

export interface SocialLinkItem {
  name: string;
  url: string;
  handle: string;
  color: string;
  hoverBg: string;
  badge: string;
  icon: (props: { className?: string }) => React.ReactElement;
}

export const YOGIC_SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'YouTube',
    handle: '@yogicsoftwarepvt.ltd.4358',
    url: 'https://www.youtube.com/@yogicsoftwarepvt.ltd.4358',
    color: '#FF0000',
    hoverBg: 'hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-400',
    badge: 'Official Channel',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Yogic Software Pvt. Ltd.',
    url: 'https://www.facebook.com/profile.php?id=100076157956237',
    color: '#1877F2',
    hoverBg: 'hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400',
    badge: 'Facebook Page',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@yogicsofte',
    url: 'https://www.instagram.com/yogicsofte/',
    color: '#E4405F',
    hoverBg: 'hover:bg-pink-600/20 hover:border-pink-500/50 hover:text-pink-400',
    badge: 'Official Reels & Updates',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'yogicsoftware',
    url: 'https://www.linkedin.com/company/77688865/',
    color: '#0A66C2',
    hoverBg: 'hover:bg-sky-600/20 hover:border-sky-500/50 hover:text-sky-400',
    badge: 'Company Network',
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

interface SocialLinksProps {
  layout?: 'icons-only' | 'cards' | 'inline-pills';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  layout = 'icons-only',
  size = 'md',
  className = '',
}) => {
  if (layout === 'cards') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${className}`}>
        {YOGIC_SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Yogic Software on ${item.name}`}
            className="group relative p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-gold/40 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:-translate-y-1"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 mb-2 group-hover:scale-110"
              style={{
                backgroundColor: `${item.color}20`,
                color: item.color,
                boxShadow: `0 0 15px ${item.color}25`,
              }}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-amber-gold transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] text-slate-400 truncate max-w-full font-mono mt-0.5">
              {item.handle}
            </span>
          </a>
        ))}
      </div>
    );
  }

  if (layout === 'inline-pills') {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {YOGIC_SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Yogic Software on ${item.name}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all text-xs font-medium group hover:border-amber-gold/40 shadow-sm"
          >
            <span style={{ color: item.color }} className="group-hover:scale-110 transition-transform">
              <item.icon className="w-4 h-4" />
            </span>
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Default 'icons-only' with premium rounded buttons and glowing hover
  const iconSizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  const buttonSizeClass = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {YOGIC_SOCIAL_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Follow Yogic Software on ${item.name}`}
          aria-label={`Follow Yogic Software on ${item.name}`}
          className={`${buttonSizeClass} rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-gold/50 flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:scale-110 shadow-md ${item.hoverBg}`}
        >
          <span style={{ color: item.color }}>
            <item.icon className={iconSizeClass} />
          </span>
        </a>
      ))}
    </div>
  );
};

