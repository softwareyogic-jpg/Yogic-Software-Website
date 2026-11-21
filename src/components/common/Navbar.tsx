import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenProductModal?: (productId: string) => void;
  onOpenAbout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAbout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Management', href: '#management' },
    { name: 'Products', href: '#products' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/70 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue rounded-lg"
            aria-label="Yogic Software Pvt. Ltd. Home"
          >
            <img
              src="/assets/Yogic_New_logo.png"
              alt="Yogic Software Pvt. Ltd. - Connecting Spirit with Technology"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.name === 'About' && onOpenAbout) {
                    e.preventDefault();
                    onOpenAbout();
                  }
                }}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-royal-blue focus-visible:ring-royal-blue'
                    : 'text-slate-100 hover:text-amber-gold focus-visible:ring-amber-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold hover:from-amber-gold hover:to-sunrise-orange transition-all duration-300 shadow-md hover:shadow-glow-sunrise active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise-orange"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 ${
                isScrolled
                  ? 'text-slate-700 hover:text-royal-blue bg-slate-100/80 hover:bg-slate-200/80 focus-visible:ring-royal-blue'
                  : 'text-slate-100 hover:text-amber-gold bg-white/10 hover:bg-white/20 focus-visible:ring-amber-gold'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.name === 'About' && onOpenAbout) {
                    e.preventDefault();
                    onOpenAbout();
                  }
                }}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:text-royal-blue hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold shadow-md"
              >
                <span>Get Started (Contact Us)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Bank-grade enterprise EMI lockers</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
