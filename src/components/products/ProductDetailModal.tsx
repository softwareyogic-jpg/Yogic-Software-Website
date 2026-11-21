import React, { useEffect } from 'react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-midnight/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-scaleUp"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-deep-navy to-brand-navy text-white relative">
          <button
            onClick={onClose}
            aria-label="Close product details dialog"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-gold"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 mb-3">
            {product.logoUrl && (
              <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-lg border border-white/40 flex items-center justify-center flex-shrink-0">
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

          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
            {product.fullDescription}
          </p>
        </div>

        {/* Modal Body: Grouped Features */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {product.featureGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              {group.groupTitle && (
                <h3 className="font-heading font-bold text-sm sm:text-base text-deep-navy border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sunrise-orange" />
                  <span>{group.groupTitle}</span>
                </h3>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cloud/80 border border-slate-200/60 hover:bg-white transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 text-xs sm:text-sm text-slate-700 font-medium">
                      <span>{feat.name}</span>
                      {feat.isNew && (
                        <span className="ml-2 inline-flex items-center px-1.5 py-0.2 bg-sunrise-orange text-white text-[10px] font-extrabold rounded uppercase tracking-wider">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
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
