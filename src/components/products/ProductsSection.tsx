import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PRODUCTS } from '../../data/productsData';
import type { Product } from '../../data/productsData';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { ExternalLink, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  initialSelectedProductId?: string | null;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ initialSelectedProductId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(
    initialSelectedProductId ? PRODUCTS.find(p => p.id === initialSelectedProductId) || null : null
  );

  const categories = ['All', 'Finance Locker', 'Family Safety', 'Cybersecurity', 'Device Protection'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="relative py-24 md:py-32 bg-cloud text-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          label="Solutions"
          title="Our Security & Finance Ecosystem"
          subtitle="Experience our comprehensive suite of cutting-edge software solutions designed to protect and empower."
        />

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-sunrise-orange to-amber-gold text-deep-navy shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:text-royal-blue hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>

        {/* Google Play Availability Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-gold/15 flex items-center justify-center text-amber-gold flex-shrink-0">
              <Sparkles className="w-6 h-6 text-sunrise-orange" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-slate-500 font-bold">Official Store</span>
              <h3 className="font-heading font-extrabold text-lg text-deep-navy">
                We are available on Google Play
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Download verified distributor and consumer companion applications directly.
              </p>
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-deep-navy hover:bg-royal-blue text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md group flex-shrink-0"
          >
            <svg className="w-5 h-5 text-amber-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 01-.61-.954V2.768c.174-.35.394-.674.609-.954zM15.207 13.414l2.58 2.58-13.06 7.54 10.48-10.12zm0-2.828L4.727.466 17.787 8.006l-2.58 2.58zm1.414 1.414l3.535-2.04c.83-.48.83-1.26 0-1.74l-3.535-2.04-1.414 1.414 2.828 2.828-2.828 2.828 1.414-1.25z" />
            </svg>
            <div className="text-left">
              <span className="block text-[9px] text-slate-300 uppercase leading-none font-medium">Get our apps on</span>
              <span className="block text-xs font-black tracking-wide">Google Play Store</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Product Detailed Modal / Drawer */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
