import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { BrandSplashLoader } from './components/common/BrandSplashLoader';
import { Navbar } from './components/common/Navbar';
import { CinematicHero } from './components/hero/CinematicHero';
import { GlobalReach } from './components/global/GlobalReach';
import { YogicPlayground } from './components/playground/YogicPlayground';
import { Milestones } from './components/milestones/Milestones';
import { ChairmanMessage } from './components/chairman/ChairmanMessage';
import { ProductsSection } from './components/products/ProductsSection';
import { WhyTrust } from './components/trust/WhyTrust';
import { Testimonials } from './components/testimonials/Testimonials';
import { Careers } from './components/careers/Careers';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { LegalModal } from './components/legal/LegalModal';
import { ProductDetailModal } from './components/products/ProductDetailModal';
import { AboutPage } from './pages/AboutPage';
import { YogicEcosystemScroll } from './components/ecosystem/YogicEcosystemScroll';
import { PRODUCTS } from './data/productsData';
import type { Product } from './data/productsData';

export const App: React.FC = () => {
  const [activeLegalDoc, setActiveLegalDoc] = useState<string | null>(null);
  const [directProductModal, setDirectProductModal] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'ecosystem-preview'>('home');

  // Sync hash routing with page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;
      if (hash.startsWith('#/about')) {
        setCurrentPage('about');
      } else if (hash.startsWith('#/ecosystem-preview') || pathname === '/ecosystem-preview') {
        setCurrentPage('ecosystem-preview');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about' | 'ecosystem-preview') => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '#/about';
    } else if (page === 'ecosystem-preview') {
      window.location.hash = '#/ecosystem-preview';
    } else {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenProduct = (productId: string) => {
    // 1. Direct match
    let prod = PRODUCTS.find((p) => p.id === productId);

    // 2. Resilient fallback match (handles prefixes like product-*, partial slugs, names)
    if (!prod) {
      const clean = productId.toLowerCase().replace(/^(product-|prod-)/, '').replace(/[^a-z0-9]/g, '');
      prod =
        PRODUCTS.find((p) => p.id.toLowerCase().replace(/[^a-z0-9]/g, '') === clean) ||
        PRODUCTS.find((p) => {
          const pNormId = p.id.toLowerCase().replace(/[^a-z0-9]/g, '');
          const pNormName = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          return pNormId.includes(clean) || clean.includes(pNormId) || pNormName.includes(clean);
        });
    }

    if (prod) {
      setDirectProductModal(prod);
    }
  };

  if (currentPage === 'ecosystem-preview') {
    return (
      <div className="relative min-h-screen bg-midnight text-white">
        {/* Floating Back to Full Site Bar */}
        <div className="fixed top-4 left-6 z-50 flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-amber-gold hover:bg-white shadow-xl transition-all duration-200 active:scale-95"
          >
            &larr; Back to Full Website
          </button>
          <span className="px-3 py-1.5 rounded-full text-[11px] font-mono bg-white/10 text-slate-300 border border-white/15 backdrop-blur-md">
            Standalone Ecosystem Preview
          </span>
        </div>

        <YogicEcosystemScroll />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <>
        {/* Dedicated Standalone About Page (Not a popup) */}
        <AboutPage
          onBackToHome={() => navigateTo('home')}
          onNavigateToProducts={() => {
            navigateTo('home');
            setTimeout(() => {
              const el = document.getElementById('products');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }}
          onNavigateToContact={() => {
            navigateTo('home');
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }}
          onOpenLegalModal={(id) => setActiveLegalDoc(id)}
        />

        {/* Global Legal Documents Modal */}
        <LegalModal
          docId={activeLegalDoc}
          onClose={() => setActiveLegalDoc(null)}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-white text-ink font-body selection:bg-sunrise-orange/25 selection:text-deep-navy">
      {/* Brand Splash / Intro Loading Experience featuring official Crescent Emblem */}
      <BrandSplashLoader />

      {/* Top Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Adaptive Glass Navbar */}
      <Navbar
        onOpenProductModal={handleOpenProduct}
        onOpenAbout={() => navigateTo('about')}
      />

      {/* Main Content Sections (Alternating Narrative Flow) */}
      <main id="main-content">
        {/* 1. Cinematic Video Hero: Fullscreen video motion, kinetic headline, StoryReel & 3D cards */}
        <CinematicHero
          onExploreSolutions={() => {
            const eco = document.getElementById('ecosystem-scroll');
            if (eco) eco.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectProduct={handleOpenProduct}
        />

        {/* 1.5 Signature Pinned Scroll Section: The Yogic Ecosystem */}
        <YogicEcosystemScroll
          onSelectProduct={handleOpenProduct}
        />

        {/* 2. Global Reach: Deep navy with glowing dotted world map & marquee */}
        <GlobalReach />

        {/* 3. About: The Yogic Playground (Interactive 6 Activities, Flippable Cards & Foundations) */}
        <YogicPlayground
          onSelectProductModal={handleOpenProduct}
          onContactUs={() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onBecomePartner={() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Milestones: Blue Flow gradient with big animated numbers & trust badges */}
        <Milestones />

        {/* 5. Chairman's Message: Warm gold-tinted with editorial Fraunces quote */}
        <ChairmanMessage />

        {/* 6. Products: Light bento grid with category filters & rich detail modal */}
        <ProductsSection />

        {/* 7. Why Trust: Midnight navy with 4 glass cards & stats strip */}
        <WhyTrust />

        {/* 8. Testimonials: Cloud white with 4 unique reviews & feedback modal */}
        <Testimonials />

        {/* 9. Careers: White with sunrise-accent expandable job cards */}
        <Careers />

        {/* 10. Contact: Blue Flow gradient with floating glass form & hotlines */}
        <ContactSection onOpenLegalModal={(id) => setActiveLegalDoc(id)} />
      </main>

      {/* 11. Footer: Midnight navy with map embed & full contacts */}
      <Footer
        onOpenProductModal={handleOpenProduct}
        onOpenLegalModal={(id) => setActiveLegalDoc(id)}
      />

      {/* Floating Quick Action Hub (WhatsApp + Direct Hotline + Back to Top) */}
      <FloatingActions />

      {/* Global Product Detail Modal Triggered from Footer/Direct Link */}
      <ProductDetailModal
        product={directProductModal}
        onClose={() => setDirectProductModal(null)}
      />

      {/* Global Legal Documents Modal (Privacy, Terms, Refund, Grievance) */}
      <LegalModal
        docId={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
};

export default App;
