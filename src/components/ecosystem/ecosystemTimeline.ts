export interface EcosystemApp {
  id: string;
  name: string;
  shortName: string;
  category: 'finance' | 'family' | 'cyber';
  ring: 'inner' | 'middle' | 'outer';
  angle: number; // in degrees
  logo: string;
  glowColor: string;
  targetId: string; // anchor id for product card in #products
}

export const ECOSYSTEM_APPS: EcosystemApp[] = [
  // Inner Ring (r=130px desktop, 82px mobile)
  {
    id: 'astra-shakti',
    name: 'Yogic Astra Shakti',
    shortName: 'Astra Shakti',
    category: 'finance',
    ring: 'inner',
    angle: 0,
    logo: '/assets/logos/astra-shakti.png',
    glowColor: '#F97D07',
    targetId: 'yogic-astra-shakti',
  },
  {
    id: 'y-gen-care',
    name: 'Y Gen Care',
    shortName: 'Y Gen Care',
    category: 'family',
    ring: 'inner',
    angle: 120,
    logo: '/assets/logos/y-gen-care.png',
    glowColor: '#0A6BDB',
    targetId: 'y-gen-care',
  },
  {
    id: 'y-commander',
    name: 'Y Commander',
    shortName: 'Y Commander',
    category: 'cyber',
    ring: 'inner',
    angle: 240,
    logo: '/assets/logos/y-commander.png',
    glowColor: '#00D2FF',
    targetId: 'y-commander',
  },

  // Middle Ring (r=210px desktop, 130px mobile)
  {
    id: 'astra-aadi',
    name: 'Yogic Astra Aadi',
    shortName: 'Astra Aadi',
    category: 'finance',
    ring: 'middle',
    angle: 40,
    logo: '/assets/logos/astra-aadi.png',
    glowColor: '#EDB90A',
    targetId: 'yogic-astra-aadi',
  },
  {
    id: 'kids-care',
    name: 'Kids Care',
    shortName: 'Kids Care',
    category: 'family',
    ring: 'middle',
    angle: 160,
    logo: '/assets/logos/kids-care.png',
    glowColor: '#EDB90A',
    targetId: 'kids-care',
  },
  {
    id: 'mobi-protect',
    name: 'Mobi Protect',
    shortName: 'Mobi Protect',
    category: 'cyber',
    ring: 'middle',
    angle: 280,
    logo: '/assets/logos/mobi-protect.png',
    glowColor: '#10B981',
    targetId: 'mobi-protect',
  },

  // Outer Ring (r=290px desktop, 175px mobile)
  {
    id: 'astra-glamour',
    name: 'Astra Glamour',
    shortName: 'Glamour',
    category: 'finance',
    ring: 'outer',
    angle: 80,
    logo: '/assets/logos/astra-glamour.png',
    glowColor: '#F97D07',
    targetId: 'astra-glamour',
  },
  {
    id: 'secure-emi',
    name: 'Secure EMI',
    shortName: 'Secure EMI',
    category: 'finance',
    ring: 'outer',
    angle: 200,
    logo: '/assets/logos/secure-emi.png',
    glowColor: '#0A6BDB',
    targetId: 'secure-emi',
  },
  {
    id: 'y-destiny',
    name: 'Y Destiny',
    shortName: 'Y Destiny',
    category: 'finance',
    ring: 'outer',
    angle: 320,
    logo: '/assets/logos/y-destiny.png',
    glowColor: '#EDB90A',
    targetId: 'y-destiny',
  },
];

export const TIMELINE_CONSTANTS = {
  scrollLengthVh: 500, // 500vh scroll track
  radiiDesktop: {
    inner: 135,
    middle: 215,
    outer: 295,
  },
  radiiMobile: {
    inner: 75,
    middle: 122,
    outer: 168,
  },
  stageBreakpoints: {
    stage0: 0.0,   // Awakening (0% - 8%)
    stage1: 0.08,  // The Burst (8% - 30%)
    stage2: 0.30,  // Finance Control (30% - 50%)
    stage3: 0.50,  // Family Safety (50% - 68%)
    stage4: 0.68,  // Cyber Protection (68% - 84%)
    stage5: 0.84,  // One Ecosystem & CTA (84% - 100%)
  },
};

export const USP_STAGES = [
  {
    stage: 1,
    range: [0.0, 0.30] as [number, number],
    eyebrow: 'ONE ECOSYSTEM',
    headline: 'Nine powerful apps. One trusted name.',
    lines: [
      'Since 2021, Yogic Software has been building secure, scalable and intelligent systems that give retailers, families and businesses complete control.',
    ],
  },
  {
    stage: 2,
    range: [0.30, 0.50] as [number, number],
    eyebrow: 'FINANCE LOCKER SUITE',
    headline: 'Total control over every EMI device.',
    lines: [
      'Lock and unlock online or offline. Track location and SIM. Send EMI alerts. Enable Auto Debit.',
      'Google Zero Touch certified, so your retail business stays protected from the very first boot.',
    ],
  },
  {
    stage: 3,
    range: [0.50, 0.68] as [number, number],
    eyebrow: 'FAMILY DIGITAL SAFETY',
    headline: 'Peace of mind for every parent.',
    lines: [
      'Live location, SOS alerts, app and web protection, and instant parent-child messaging in one simple pair of apps.',
    ],
  },
  {
    stage: 4,
    range: [0.68, 0.84] as [number, number],
    eyebrow: 'CYBERSECURITY & DEVICE PROTECTION',
    headline: 'Defence that works while you sleep.',
    lines: [
      'Anti-hacking tools, VPN, breach detection, theft recovery, remote lock and remote wipe, all in your pocket.',
    ],
  },
  {
    stage: 5,
    range: [0.84, 1.0] as [number, number],
    eyebrow: 'WHY YOGIC',
    headline: 'Built on trust. Backed by people.',
    lines: [
      '1000+ retail partners. 28+ Indian states. 24/7 expert and AI-powered support.',
    ],
    closingItalic: 'Connecting Spirit with Technology.',
    chips: [
      '1000+ Retail Partners',
      '28+ States',
      '24/7 Support',
      'Est. 2021',
    ],
  },
];

