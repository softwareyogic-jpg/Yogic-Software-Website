import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  onOpenProductModal: (productId: string) => void;
  onOpenLegalModal: (docId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenProductModal,
  onOpenLegalModal,
}) => {
  const footerProducts = [
    { id: 'yogic-astra-shakti', name: 'Yogic Astra Shakti' },
    { id: 'yogic-astra-aadi', name: 'Yogic Astra Aadi' },
    { id: 'astra-glamour', name: 'Astra Glamour' },
    { id: 'y-destiny', name: 'Y Destiny' },
    { id: 'y-gen-care', name: 'Y Gen Care' },
    { id: 'secure-emi', name: 'Secure EMI' },
    { id: 'mobi-protect', name: 'Mobi Protect' },
    { id: 'y-commander', name: 'Y Commander' },
  ];

  return (
    <footer className="relative bg-midnight text-white pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/95 p-3 rounded-2xl inline-block border border-amber-gold/30 shadow-md">
              <img
                src="/assets/Yogic_New_logo.png"
                alt="Yogic Software Pvt. Ltd."
                className="h-12 w-auto object-contain"
              />
            </div>

            <div className="font-fraunces italic text-amber-gold text-lg">
              Connecting Spirit with Technology
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              We're more than just a software company — we're your digital partners in every step of the journey. At Yogic Software Pvt. Ltd., we listen, guide, and grow with you. Whether you're a retailer, a parent, or a business looking for smart, secure solutions — we're just a message away. Let's build something meaningful together.
            </p>

            {/* Google Play Badge */}
            <div className="pt-2">
              <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Get our apps on
              </span>
              <a
                href="https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all group"
              >
                <svg className="w-5 h-5 text-amber-gold" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 01-.61-.954V2.768c.174-.35.394-.674.609-.954zM15.207 13.414l2.58 2.58-13.06 7.54 10.48-10.12zm0-2.828L4.727.466 17.787 8.006l-2.58 2.58zm1.414 1.414l3.535-2.04c.83-.48.83-1.26 0-1.74l-3.535-2.04-1.414 1.414 2.828 2.828-2.828 2.828 1.414-1.25z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[9px] text-blue-200 uppercase leading-none font-medium">Download from</span>
                  <span className="block text-xs font-black tracking-wide">Google Play Store</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-4">
              <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Connect With Us On
              </span>
              <SocialLinks layout="icons-only" size="lg" />
            </div>

            {/* Corporate Subsidiary Card */}
            <div className="pt-3">
              <a
                href="https://www.rtppl.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-red-500/30 hover:border-red-500/60 transition-all duration-300 max-w-md shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="bg-white p-2 rounded-xl border border-red-100 shadow-sm flex-shrink-0">
                    <img
                      src="/assets/redcat_logo.png"
                      alt="RedCat Technologies Product Pvt. Ltd."
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-amber-gold font-bold">
                      A Subsidiary of Yogic Software Pvt. Ltd.
                    </span>
                    <span className="block text-xs sm:text-sm font-heading font-extrabold text-white group-hover:text-amber-gold transition-colors truncate">
                      RedCat Technologies Product Pvt. Ltd.
                    </span>
                    <span className="text-[11px] text-slate-300 font-mono block">
                      https://www.rtppl.in/
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-red-500/20 flex items-center justify-center text-slate-400 group-hover:text-red-400 transition-all flex-shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Product Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-amber-gold">
              Security Products
            </h3>
            <ul className="space-y-2.5">
              {footerProducts.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onOpenProductModal(p.id)}
                    className="text-xs sm:text-sm text-slate-300 hover:text-amber-gold transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-blue group-hover:bg-amber-gold transition-colors" />
                    <span>{p.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address & Direct Contacts Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-wider text-amber-gold">
              Headquarters &amp; Direct Support
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <MapPin className="w-5 h-5 text-sunrise-orange flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading">Head Office:</strong>
                <span>3rd Floor, Musafir Cafe Building, Ramkrishna Pally, Mondal Ganthi VIP Road, Kaikhali, Kolkata – 700052, West Bengal, India</span>
                <a
                  href="https://www.google.com/maps/place/YOGIC+SOFTWARE/@22.6325387,88.4342256,52m/data=!3m1!1e3!4m15!1m8!3m7!1s0x39f89e1dc209383d:0x3535f57f817115d2!2sVIP+Rd,+West+Bengal,+India!3b1!8m2!3d22.6037679!4d88.4141531!16s%2Fm%2F04185pq!3m5!1s0x39f89e3641a5f81d:0x531ea93ceed4babb!8m2!3d22.6326148!4d88.4341764!16s%2Fg%2F11pv0dxthz?hl=en-IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-amber-gold hover:text-sunrise-orange transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Location Map Preview */}
            <div className="mt-2 w-full h-32 rounded-2xl overflow-hidden border border-white/15 relative group">
              <iframe
                title="YOGIC SOFTWARE Kolkata Headquarters"
                src="https://maps.google.com/maps?q=22.6326148,88.4341764+(YOGIC+SOFTWARE)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <a
                href="https://www.google.com/maps/place/YOGIC+SOFTWARE/@22.6325387,88.4342256,52m/data=!3m1!1e3!4m15!1m8!3m7!1s0x39f89e1dc209383d:0x3535f57f817115d2!2sVIP+Rd,+West+Bengal,+India!3b1!8m2!3d22.6037679!4d88.4141531!16s%2Fm%2F04185pq!3m5!1s0x39f89e3641a5f81d:0x531ea93ceed4babb!8m2!3d22.6326148!4d88.4341764!16s%2Fg%2F11pv0dxthz?hl=en-IN"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-deep-navy/90 text-white text-[10px] font-bold flex items-center gap-1 border border-white/20 shadow-md backdrop-blur-sm hover:bg-royal-blue transition-colors"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Hotlines */}
            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="flex flex-wrap gap-x-2 font-mono">
                  <a href="tel:+917596055177" className="py-1 px-1.5 hover:text-amber-gold inline-block rounded">+91-7596055177</a>
                  <span className="py-1">/</span>
                  <a href="tel:+917596055179" className="py-1 px-1.5 hover:text-amber-gold inline-block rounded">79</a>
                  <span className="py-1">|</span>
                  <a href="tel:+919330894978" className="py-1 px-1.5 hover:text-amber-gold inline-block rounded">+91-9330894978</a>
                </div>
              </div>
              <div className="flex items-center gap-2 pl-6 font-mono text-[11px] text-slate-400">
                <a href="tel:+917980690955" className="py-1 px-1.5 hover:text-amber-gold inline-block rounded">+91-7980690955</a>
                <span className="py-1">|</span>
                <a href="tel:+919903376447" className="py-1 px-1.5 hover:text-amber-gold inline-block rounded">+91-9903376447</a>
              </div>
            </div>

            {/* Emails */}
            <div className="space-y-1 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-royal-blue flex-shrink-0" />
                <a href="mailto:softwareyogic@gmail.com" className="py-1 px-1.5 hover:text-amber-gold font-medium inline-block rounded">
                  softwareyogic@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <a href="mailto:support@yogicsoftware.com" className="py-1 px-1.5 hover:text-amber-gold font-medium inline-block rounded">
                  support@yogicsoftware.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Yogic Software Pvt. Ltd. | Est. 2021 | Connecting Spirit with Technology
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-500 uppercase font-mono hidden sm:inline">Follow:</span>
            <SocialLinks layout="icons-only" size="sm" />
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-amber-gold transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-amber-gold transition-colors focus:outline-none"
            >
              Terms &amp; Conditions
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegalModal('refund')}
              className="hover:text-amber-gold transition-colors focus:outline-none"
            >
              Refund Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegalModal('grievance')}
              className="hover:text-amber-gold transition-colors focus:outline-none"
            >
              Grievance Redressal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
