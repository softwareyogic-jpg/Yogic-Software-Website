import React, { useState, useEffect } from 'react';
import { SocialLinks } from '../components/common/SocialLinks';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Cpu,
  Users,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Lock,
  Smartphone,
  ShieldAlert,
  Globe,
  MapPin,
  Calendar,
  ArrowRight,
  TrendingUp,
  Star,
} from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onNavigateToProducts: () => void;
  onNavigateToContact: () => void;
  onOpenLegalModal: (docId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onNavigateToProducts,
  onNavigateToContact,
  onOpenLegalModal,
}) => {
  // Opening entrance logo animation state
  const [isOpeningAnimActive, setIsOpeningAnimActive] = useState(true);

  useEffect(() => {
    // Scroll to top when page opens
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Logo entrance animation timeout (1.2 seconds smooth unveil)
    const timer = setTimeout(() => {
      setIsOpeningAnimActive(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const coreValues = [
    {
      title: 'Security & Trust',
      desc: 'Privacy and data protection are built into everything we create.',
      icon: ShieldCheck,
      accent: 'border-royal-blue/30 text-royal-blue bg-royal-blue/10',
    },
    {
      title: 'Innovation',
      desc: 'We use AI and automation to predict risks, reduce manual effort and improve results.',
      icon: Cpu,
      accent: 'border-sunrise-orange/30 text-sunrise-orange bg-sunrise-orange/10',
    },
    {
      title: 'Customer-First Approach',
      desc: 'Our partners’ success is our success. We measure ourselves by the value we deliver.',
      icon: Users,
      accent: 'border-amber-gold/30 text-amber-gold bg-amber-gold/10',
    },
    {
      title: 'Scalable Architecture',
      desc: 'Our cloud-native systems are designed to grow with your business and handle high transaction volumes securely.',
      icon: Layers,
      accent: 'border-brand-navy/30 text-brand-navy bg-brand-navy/10',
    },
    {
      title: 'Simplicity',
      desc: 'Powerful technology should never be complicated. We make advanced solutions easy for everyone to use.',
      icon: HeartHandshake,
      accent: 'border-emerald-500/30 text-emerald-600 bg-emerald-50',
    },
  ];

  const whyChoosePoints = [
    '5 years of experience (since 2021) in EMI management and device security',
    'Proven network of 10000+ retail partners across India',
    '99% client satisfaction with consistent renewals',
    '24/7 expert and AI-powered support hotlines',
    'Nationwide on-ground sales and service network in 28+ states',
    'Google-authenticated, privacy-focused security solutions',
    'Regular updates and new features driven by real market feedback',
    'Available on Google Play for easy installation and management',
  ];

  const milestonesTimeline = [
    {
      year: '2021',
      title: 'Company Foundation in Kolkata',
      desc: 'Yogic Software Pvt. Ltd. was established to solve critical device security and EMI repayment challenges for offline mobile retailers.',
      highlight: 'First Finance Locker Deployed',
    },
    {
      year: '2022 - 2023',
      title: 'Nationwide Expansion & Flagship Launch',
      desc: 'Launched Yogic Astra Shakti; scaled rapidly across 28+ Indian states with 10000+ retailer partners adopting the finance locker.',
      highlight: '10000+ Retailer Milestone',
    },
    {
      year: '2024',
      title: 'Family Digital Safety & Enterprise Security',
      desc: 'Diversified beyond retail lockers by introducing Y Gen Care (Parent App), Kids Care, and Y Commander anti-hacking protection.',
      highlight: 'Multi-Product Diversification',
    },
    {
      year: '2023 - 2026',
      title: 'Global Footprint & Full 9-Product Ecosystem',
      desc: 'Extended reach across 9 international countries including Bangladesh, Mexico, Ecuador, Spain, UAE, Uganda, Philippines, and Venezuela.',
      highlight: 'Global Tier-1 Scale',
    },
  ];

  const globalFlags = [
    { code: 'in', name: 'India' },
    { code: 'bd', name: 'Bangladesh' },
    { code: 'ae', name: 'UAE' },
    { code: 'es', name: 'Spain' },
    { code: 'mx', name: 'Mexico' },
    { code: 'ec', name: 'Ecuador' },
    { code: 'ph', name: 'Philippines' },
    { code: 'ug', name: 'Uganda' },
    { code: 've', name: 'Venezuela' },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFD] text-ink font-body selection:bg-sunrise-orange/25 selection:text-deep-navy overflow-hidden">
      {/* =========================================================================
          PAGE ENTRANCE ANIMATION WITH OFFICIAL LOGO
          ========================================================================= */}
      {isOpeningAnimActive && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-midnight transition-all duration-700 pointer-events-none">
          <div className="relative flex flex-col items-center">
            {/* Ambient radiant glow behind logo */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-royal-blue/30 via-transparent to-sunrise-orange/30 blur-2xl animate-pulse" />
            <img
              src="/assets/yogic_emblem.png"
              alt="Yogic Emblem Opening Transition"
              className="w-36 h-36 object-contain filter drop-shadow-[0_0_30px_rgba(249,125,7,0.5)] animate-pulse"
            />
            <div className="mt-4 text-xs font-mono tracking-widest text-amber-gold uppercase">
              Loading Company Story...
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          FLOATING BACKGROUND CRESCENT ICONS
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Crescent 1: Top Right */}
        <div className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.14] animate-float-slow">
          <img
            src="/assets/yogic_emblem.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(10,107,219,0.3)]"
          />
        </div>

        {/* Floating Crescent 2: Mid-Left */}
        <div className="absolute top-[38%] -left-20 w-72 h-72 opacity-[0.12] animate-float-slow [animation-delay:2.5s]">
          <img
            src="/assets/yogic_emblem.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(249,125,7,0.3)]"
          />
        </div>

        {/* Floating Crescent 3: Bottom Right */}
        <div className="absolute top-[72%] -right-16 w-88 h-88 opacity-[0.14] animate-float-slow [animation-delay:4s]">
          <img
            src="/assets/yogic_emblem.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(10,107,219,0.3)]"
          />
        </div>

        {/* Ambient Radial Soft Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-royal-blue/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-sunrise-orange/[0.04] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* =========================================================================
          DEDICATED STICKY HEADER / NAVBAR FOR ABOUT PAGE
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Back to Home Button + Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-royal-blue bg-slate-100 hover:bg-slate-200/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-blue"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center">
              <img
                src="/assets/Yogic_New_logo.png"
                alt="Yogic Software Pvt. Ltd."
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Action Shortcuts */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => onNavigateToProducts(), 100);
              }}
              className="hidden md:inline-flex px-4 py-2 text-xs font-bold text-slate-700 hover:text-royal-blue rounded-lg transition-colors"
            >
              Our Solutions
            </button>
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => onNavigateToContact(), 100);
              }}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold shadow-md hover:shadow-glow-sunrise transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MAIN PAGE CONTENT (MODERN SAAS BENTO WITH IMAGERY & ANIMATION)
          ========================================================================= */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">

        {/* 1. HERO BANNER: Split Layout with 3D Ecosystem Graphic */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B2A5B] via-[#0A4B9E] to-royal-blue text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-gold mb-6 shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-amber-gold" />
                <span>Connecting Spirit with Technology | Since 2021</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                About Yogic Software Pvt. Ltd.
              </h1>

              <p className="mt-5 text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed">
                Founded in 2021 and headquartered in Kolkata, Yogic Software Pvt. Ltd. is a technology company building secure, scalable and intelligent digital systems for a fast-changing world. We design and deliver EMI management platforms, finance locker solutions, cybersecurity tools and device protection software that help retailers, businesses and families stay in control, with complete peace of mind.
              </p>

              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sunrise-orange flex-shrink-0" />
                  <span>Kolkata, WB, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-gold flex-shrink-0" />
                  <span>Founded in 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                  <span>Across 9 Nations</span>
                </div>
              </div>
            </div>

            {/* Right Pure Brand Logo Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-4">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center animate-float-slow">
                {/* Subtle ambient radiant glow behind the logo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-royal-blue/30 via-transparent to-amber-gold/25 blur-3xl pointer-events-none" />

                {/* Pure Clean Logo Only - No text, no box borders */}
                <img
                  src="/assets/yogic_emblem.png"
                  alt="Yogic Software"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(249,125,7,0.45)]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 2. PHILOSOPHY SECTION (Bento with Visual Fusion Image Card) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/95 backdrop-blur-md border border-amber-gold/30 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7">
              <span className="text-xs font-black tracking-widest text-sunrise-orange uppercase block mb-2">
                Our Guiding Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-deep-navy">
                The Meaning Behind &ldquo;Yogic&rdquo;
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                Our name reflects our philosophy. <strong>&ldquo;Yogic&rdquo;</strong> stands for balance, discipline and clarity, and we bring the same qualities to technology: simple to use, strong in protection and dependable over the long term. Our tagline, <span className="font-bold text-royal-blue bg-royal-blue/10 px-2 py-0.5 rounded-md inline-block">&ldquo;Connecting Spirit with Technology,&rdquo;</span> is the guiding principle behind every product we build.
              </p>
            </div>

            {/* Visual Balance Card */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-[#FFF9F2] via-white to-[#F2F7FE] border border-amber-gold/40 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md border border-slate-200 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/yogic_emblem.png"
                    alt="Balance and Clarity"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-deep-navy">
                    Balance &bull; Discipline &bull; Clarity
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Merging spiritual clarity with cutting-edge engineering.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. WHO WE ARE (With Country Flags & On-Ground Operations Visual) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7">
              <span className="text-xs font-black tracking-widest text-royal-blue uppercase block mb-2">
                Background &amp; Scale
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-deep-navy">
                Who We Are
              </h2>
              <div className="mt-5 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Yogic Software was founded in 2021 with a clear observation: the mobile retail and consumer finance industry needed smarter, more reliable ways to protect devices and manage EMI-based sales. What began as a focused idea has, in just five years, grown into a trusted technology partner for <strong>10000+ retail partners across 28+ Indian states</strong>, with a presence in international markets including <strong>Bangladesh, Mexico, Ecuador, Spain, UAE, Uganda, the Philippines and Venezuela</strong>.
                </p>
                <p>
                  Our team of developers, security specialists and field professionals works closely with retailers every day. We listen to real feedback from the market and turn it into better products, faster updates and stronger support.
                </p>
              </div>
            </div>

            {/* Global Presence Visual Grid with Real HD Country Flags */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#091E42] text-white shadow-xl border border-royal-blue/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-amber-gold">
                  International Presence
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  9 Countries
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {globalFlags.map((flag) => (
                  <div
                    key={flag.code}
                    className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <img
                      src={`/assets/flags/${flag.code}.png`}
                      alt={flag.name}
                      className="w-6 h-4 object-cover rounded shadow-sm"
                    />
                    <span className="text-[11px] font-semibold text-slate-200 mt-1.5">
                      {flag.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Active Retail Partners</span>
                <span className="font-heading font-black text-amber-gold">10,000+ Stores</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. OUR JOURNEY SINCE 2021 (Interactive Animated Timeline Cards) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-sunrise-orange uppercase block mb-2">
              Continuous Progress
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-deep-navy">
              Our Journey Since 2021
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Since our founding, we have grown steadily and organically, guided by one principle: build products that genuinely solve problems for our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestonesTimeline.map((item, idx) => (
              <div
                key={item.year}
                className="group relative p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-royal-blue/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-blue/10 text-royal-blue text-xs font-black tracking-wider">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-deep-navy group-hover:text-royal-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sunrise-orange">
                  <span>{item.highlight}</span>
                  <span className="text-royal-blue group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. WHAT WE DO: 3 PRODUCT SOLUTION PILLARS WITH OFFICIAL PRODUCT LOGOS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-amber-gold uppercase block mb-2">
              Our Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-deep-navy">
              What We Do
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Three comprehensive technology pillars protecting retailers, families, and digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Pillar 1: Finance Locker & EMI Management */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-blue-50/80 to-white border border-royal-blue/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Official Product Logos Row */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/yogic_astra_logo.png" alt="Astra Shakti" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/astra_glamour_logo.png" alt="Astra Glamour" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/secure_emi_logo.png" alt="Secure EMI" className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-deep-navy">
                  Finance Locker &amp; EMI Management
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our flagship platform, <strong>Yogic Astra Shakti</strong>, gives retailers complete remote control over EMI-bound devices. Along with <strong>Yogic Astra Aadi</strong>, <strong>Astra Glamour</strong>, <strong>Secure EMI</strong> and <strong>Y Destiny (for iOS)</strong>, our locker solutions support secure lending, timely repayments and reduced business risk. Features like device lock/unlock, SIM tracking, EMI alerts, location tracking and Google Zero Touch support make daily operations simple and reliable.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-royal-blue/10 flex items-center gap-1.5 text-xs font-bold text-royal-blue">
                <Lock className="w-3.5 h-3.5" />
                <span>5 Dedicated Locker Apps</span>
              </div>
            </div>

            {/* Pillar 2: Family Digital Safety */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-amber-50/80 to-white border border-amber-gold/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Official Product Logos Row */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/y_gen_care_logo.png" alt="Y Gen Care" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/kids_care_logo.png" alt="Kids Care" className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-deep-navy">
                  Family Digital Safety
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  <strong>Y Gen Care</strong> and <strong>Kids Care</strong> help parents create a safe digital environment for their children, with location tracking, SOS alerts, app and web protection, screen control and instant parent-child communication.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-gold/15 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Parent &amp; Child Pair Ecosystem</span>
              </div>
            </div>

            {/* Pillar 3: Cybersecurity & Device Protection */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-orange-50/80 to-white border border-sunrise-orange/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Official Product Logos Row */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/y_commander_logo.png" alt="Y Commander" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <img src="/assets/mobi_protect_logo.png" alt="Mobi Protect" className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-deep-navy">
                  Cybersecurity &amp; Device Protection
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  <strong>Y Commander</strong> provides anti-hacking tools and VPN protection for secure remote work and data transfer. <strong>Mobi Protect</strong> safeguards personal devices with theft recovery, remote lock, remote wipe, anti-virus scanning and real-time alerts.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-sunrise-orange/15 flex items-center gap-1.5 text-xs font-bold text-sunrise-orange">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Anti-Theft &bull; VPN &bull; Antivirus</span>
              </div>
            </div>

          </div>
        </div>

        {/* 6. VISION & MISSION TWIN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-royal-blue/25 shadow-sm hover:shadow-lg transition-all">
            <span className="text-xs font-black tracking-widest text-royal-blue uppercase block mb-2">
              Long-Term Aspiration
            </span>
            <h3 className="text-2xl font-heading font-black text-deep-navy">
              Our Vision
            </h3>
            <p className="mt-4 text-base sm:text-lg text-slate-800 leading-relaxed">
              &ldquo;To become India&rsquo;s most trusted and most loved technology brand in secure digital finance and device protection, built on innovation, integrity and long-term relationships.&rdquo;
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-amber-gold/30 shadow-sm hover:shadow-lg transition-all">
            <span className="text-xs font-black tracking-widest text-sunrise-orange uppercase block mb-2">
              Everyday Purpose
            </span>
            <h3 className="text-2xl font-heading font-black text-deep-navy">
              Our Mission
            </h3>
            <p className="mt-4 text-base sm:text-lg text-slate-800 leading-relaxed">
              &ldquo;To empower retailers, businesses and families with simple, powerful and affordable security technology, backed by dependable support that is always available when needed.&rdquo;
            </p>
          </div>
        </div>

        {/* 7. CORE VALUES (5 Value Cards) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-royal-blue uppercase block mb-2">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-deep-navy">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 ${v.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-deep-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. WHY PARTNERS CHOOSE YOGIC (SaaS Grid with Checkmarks) */}
        <div className="p-8 sm:p-14 rounded-3xl bg-midnight text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-black tracking-widest text-amber-gold uppercase block mb-1">
                  Proven Track Record
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
                  Why Partners Choose Yogic Software
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-gold text-xs font-mono">
                <Star className="w-3.5 h-3.5 fill-amber-gold" />
                <span>5.0 Rated by 10000+ Partners</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoosePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 leading-relaxed font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 9. MESSAGE OF COMMITMENT (Featuring Subrata Mukherjee Photo) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-amber-gold/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Clean Executive Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-3xl p-2 bg-gradient-to-b from-white to-slate-100 border-2 border-amber-gold/50 shadow-xl overflow-hidden">
                <img
                  src="/assets/subrata_mukherjee.jpg"
                  alt="Subrata Mukherjee - Founder & Chairman"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-3 font-heading font-extrabold text-sm text-deep-navy">
                Subrata Mukherjee
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Founder &amp; Chairman
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="lg:col-span-8">
              <span className="text-xs font-black tracking-widest text-amber-700 uppercase block mb-2">
                Leadership Statement
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-deep-navy">
                A Message of Commitment
              </h2>

              <div className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed space-y-4">
                <p className="text-slate-900 font-normal leading-relaxed">
                  &ldquo;We believe in organic growth, honest relationships and continuous improvement. The aim is to blend technology with simplicity, and to make Yogic Software a better place to work and a better partner to grow with, every single day.&rdquo;
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  Whether you are a retailer expanding your EMI business, a parent protecting your family, or an enterprise securing your data, Yogic Software is here to support you at every step.
                </p>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4 text-xs font-semibold text-amber-700">
                  <span>Yogic Software Pvt. Ltd. &bull; Est. 2021</span>
                  <span>Connecting Spirit with Technology</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 10. BOTTOM NAVIGATION CALL TO ACTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-royal-blue to-deep-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-heading font-black text-xl sm:text-2xl">
              Ready to Protect &amp; Scale Your Business?
            </h3>
            <p className="mt-2 text-sm text-blue-100">
              Explore our complete suite of 9 finance lockers and cybersecurity applications.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onBackToHome}
              className="flex-1 sm:flex-none px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => onNavigateToContact(), 100);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sunrise-orange to-amber-gold shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Social Media Channels Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-midnight/70 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-gold block mb-1">
              Stay Connected
            </span>
            <h4 className="text-base sm:text-lg font-heading font-extrabold text-white">
              Official Yogic Software Channels
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Follow our latest product launches, live demos, and community stories.
            </p>
          </div>
          <SocialLinks layout="cards" className="w-full md:w-auto" />
        </div>

        {/* Corporate Subsidiary Card with Official RedCat Logo */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-midnight text-white border-2 border-red-500/30 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl border border-red-200 shadow-md flex-shrink-0">
              <img
                src="/assets/redcat_logo.png"
                alt="RedCat Technologies Product Pvt. Ltd."
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-amber-gold font-bold">
                A Subsidiary of Yogic Software Pvt. Ltd.
              </span>
              <h4 className="text-base sm:text-lg font-heading font-extrabold text-white">
                RedCat Technologies Product Pvt. Ltd.
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Innovating hardware, IoT, and security products under the Yogic Software corporate family.
              </p>
            </div>
          </div>
          <a
            href="https://www.rtppl.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-lg transition-all group flex-shrink-0"
          >
            <span>Visit Website (rtppl.in)</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </main>

      {/* =========================================================================
          PAGE FOOTER
          ========================================================================= */}
      <footer className="relative z-10 bg-midnight text-white pt-12 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; 2026 Yogic Software Pvt. Ltd. | Est. 2021 | Connecting Spirit with Technology
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-amber-gold">Privacy</button>
              <span>&bull;</span>
              <button onClick={() => onOpenLegalModal('terms')} className="hover:text-amber-gold">Terms</button>
              <span>&bull;</span>
              <button onClick={onBackToHome} className="hover:text-amber-gold">Home</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
