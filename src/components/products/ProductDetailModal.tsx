import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, Sparkles, ExternalLink, Smartphone } from 'lucide-react';
import type { Product } from '../../data/productsData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (product) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  const handleHeaderFooterWheel = (e: React.WheelEvent) => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop += e.deltaY;
    }
  };

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-midnight/70 backdrop-blur-md animate-fadeIn overscroll-contain overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-scaleUp my-auto overscroll-contain"
      >
        {/* Modal Header */}
        <div
          onWheel={handleHeaderFooterWheel}
          className="flex-shrink-0 p-5 sm:p-7 bg-gradient-to-r from-deep-navy to-brand-navy text-white relative select-none"
        >
          <button
            onClick={onClose}
            aria-label="Close product details dialog"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 mb-3">
            {product.logoUrl && (
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-white p-2 shadow-lg border border-white/40 flex items-center justify-center flex-shrink-0">
                <img
                  src={product.logoUrl}
                  alt={`${product.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-amber-gold border border-amber-gold/30">
                  {product.category}
                </span>
                {product.isFlagship && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-sunrise-orange to-amber-gold text-deep-navy flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Flagship Platform</span>
                  </span>
                )}
              </div>

              <h2 id="modal-product-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {product.name}
              </h2>
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
            {product.fullDescription}
          </p>
        </div>

        {/* Modal Body: Grouped Features */}
        <div
          ref={bodyRef}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-7 space-y-6"
        >
          {product.featureGroups.map((group, gIdx) => {
            const isEntertainment = Boolean(
              group.groupTitle &&
                (group.groupTitle.toLowerCase().includes('entertainment') ||
                  group.groupTitle.toLowerCase().includes('youtube'))
            );

            return (
              <div
                key={gIdx}
                className={`space-y-3 ${
                  isEntertainment
                    ? 'p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-red-50/90 via-amber-50/40 to-white border-2 border-red-500/50 shadow-md'
                    : ''
                }`}
              >
                {group.groupTitle && (
                  <h3
                    className={`font-heading font-bold text-sm sm:text-base border-b pb-2 flex items-center justify-between ${
                      isEntertainment
                        ? 'text-red-700 border-red-200'
                        : 'text-deep-navy border-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isEntertainment ? (
                        <div className="w-5 h-5 rounded-lg bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-sunrise-orange" />
                      )}
                      <span className={isEntertainment ? 'font-extrabold text-red-700' : ''}>
                        {group.groupTitle}
                      </span>
                    </div>

                    {isEntertainment && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Included Free</span>
                      </span>
                    )}
                  </h3>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {group.features.map((feat, fIdx) => {
                    const isYouTube = feat.name.toLowerCase().includes('youtube');

                    return (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl transition-all ${
                          isYouTube
                            ? 'col-span-1 sm:col-span-2 bg-gradient-to-r from-red-600/10 via-amber-gold/10 to-transparent border-2 border-red-500 shadow-sm'
                            : isEntertainment
                            ? 'bg-white border border-red-200'
                            : 'bg-cloud/80 border border-slate-200/60 hover:bg-white'
                        }`}
                      >
                        {isYouTube ? (
                          <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </div>
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1 text-xs sm:text-sm text-slate-700 font-medium">
                          <span className={isYouTube ? 'font-black text-deep-navy text-sm' : ''}>
                            {feat.name}
                          </span>
                          {feat.isNew && (
                            <span
                              className={`ml-2 inline-flex items-center px-1.5 py-0.2 text-[10px] font-extrabold rounded uppercase tracking-wider ${
                                isYouTube
                                  ? 'bg-red-600 text-white'
                                  : 'bg-sunrise-orange text-white'
                              }`}
                            >
                              {isYouTube ? 'FREE 1 YEAR' : 'NEW'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div
          onWheel={handleHeaderFooterWheel}
          className="flex-shrink-0 p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 select-none"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Smartphone className="w-4 h-4 text-royal-blue" />
            <span>Compatible with leading Android &amp; iOS hardware</span>
          </div>

          <div className="flex items-center gap-3">
            {product.googlePlayLink && (
              <a
                href={product.googlePlayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-deep-navy bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>Google Play</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all shadow-md"
            >
              <span>Inquire for Retail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
