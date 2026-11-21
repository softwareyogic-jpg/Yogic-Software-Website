import React from 'react';
import type { Product } from '../../data/productsData';
import { ShieldCheck, Tv, Sparkles, Smartphone, HeartHandshake, Smile, ShieldAlert, Apple, Lock, ArrowRight, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-sunrise-orange" />;
      case 'tv':
        return <Tv className="w-6 h-6 text-royal-blue" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-amber-gold" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6 text-royal-blue" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-6 h-6 text-sunrise-orange" />;
      case 'smile':
        return <Smile className="w-6 h-6 text-amber-gold" />;
      case 'shield-alert':
        return <ShieldAlert className="w-6 h-6 text-deep-navy" />;
      case 'apple':
        return <Apple className="w-6 h-6 text-brand-navy" />;
      case 'lock':
      default:
        return <Lock className="w-6 h-6 text-sunrise-orange" />;
    }
  };

  const isFlagship = product.isFlagship;

  return (
    <div
      id={product.id}
      className={`group relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isFlagship
          ? 'md:col-span-2 lg:col-span-2 p-8 sm:p-10 bg-gradient-to-br from-white via-[#FFF9F2] to-[#FEF3E2] border-2 border-sunrise-orange/40 shadow-xl hover:shadow-2xl hover:border-sunrise-orange'
          : 'p-6 sm:p-7 bg-white border border-slate-200/80 hover:border-amber-gold/40 shadow-sm hover:shadow-xl'
      } hover:-translate-y-1`}
    >
      {/* Flagship Corner Ribbon */}
      {isFlagship && (
        <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-sunrise-orange to-amber-gold text-deep-navy text-xs font-black uppercase tracking-wider shadow-sm">
          <Star className="w-3.5 h-3.5 fill-deep-navy" />
          <span>Flagship Suite</span>
        </div>
      )}

      <div>
        {/* Top Icon & Category Tag */}
        <div className="flex items-center gap-3.5 mb-5">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 p-1.5 ${
              isFlagship
                ? 'bg-white border-sunrise-orange/40 shadow-sm'
                : 'bg-cloud border-slate-200'
            }`}
          >
            {product.logoUrl ? (
              <img
                src={product.logoUrl}
                alt={`${product.name} Logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              getIcon(product.iconType)
            )}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 inline-block">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3
          className={`font-heading font-extrabold tracking-tight text-deep-navy group-hover:text-royal-blue transition-colors ${
            isFlagship ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Flagship Highlight Banner for SIM Remove Lock & Auto Debit */}
        {isFlagship && (
          <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-sunrise-orange/15 via-amber-gold/15 to-transparent border border-sunrise-orange/40 flex items-center gap-2.5 shadow-sm">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sunrise-orange" />
            </span>
            <span className="text-xs font-heading font-extrabold text-deep-navy">
              Key Highlights: <span className="text-sunrise-orange underline decoration-amber-gold underline-offset-2">SIM Remove Lock</span> &amp; <span className="text-sunrise-orange underline decoration-amber-gold underline-offset-2">Auto Debit</span>
            </span>
          </div>
        )}

        {/* Highlighted feature chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {product.featureGroups[0]?.features.map((feat, idx) => (
            <span
              key={idx}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1.5 ${
                feat.isNew
                  ? 'bg-gradient-to-r from-sunrise-orange/20 to-amber-gold/20 text-deep-navy font-black border border-sunrise-orange shadow-sm'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {feat.isNew && <span className="w-1.5 h-1.5 rounded-full bg-sunrise-orange animate-pulse" />}
              <span>{feat.name}</span>
              {feat.isNew && (
                <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-sunrise-orange text-white font-extrabold">
                  HOT
                </span>
              )}
            </span>
          ))}
          {product.featureGroups.flatMap(g => g.features).length > product.featureGroups[0]?.features.length && (
            <span className="text-[11px] font-medium px-2 py-1 rounded-lg bg-royal-blue/10 text-royal-blue font-semibold">
              +{product.featureGroups.flatMap(g => g.features).length - product.featureGroups[0]?.features.length} more features
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Learn More Button */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onSelect(product)}
          className={`inline-flex items-center gap-2 text-xs font-bold transition-all duration-200 group-hover:gap-3 ${
            isFlagship
              ? 'px-5 py-2.5 rounded-full bg-deep-navy text-white hover:bg-royal-blue shadow-md'
              : 'text-royal-blue hover:text-brand-navy'
          }`}
          aria-label={`Explore Full Features for ${product.name}`}
        >
          <span>Explore Full Features</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform" />
        </button>

        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          YOGIC CERTIFIED
        </span>
      </div>
    </div>
  );
};
