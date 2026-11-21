export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatarInitial: string;
  avatarBg: string;
  role: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rahul Sharma',
    handle: '@rahul_retailer',
    avatarInitial: 'RS',
    avatarBg: 'bg-royal-blue',
    role: 'Electronics Retail Partner, New Delhi',
    rating: 5,
    quote: 'Yogic Software has completely transformed how we manage EMI locks remotely. Total peace of mind!'
  },
  {
    id: 't-2',
    name: 'Sneha Desai',
    handle: '@sneha_tech',
    avatarInitial: 'SD',
    avatarBg: 'bg-sunrise-orange',
    role: 'Telecom Distributor, Mumbai',
    rating: 5,
    quote: 'Astra Glamour is the best finance locker we’ve tested. The Google authentication integration is flawless.'
  },
  {
    id: 't-3',
    name: 'Amit Patel',
    handle: '@amit_p12',
    avatarInitial: 'AP',
    avatarBg: 'bg-amber-gold',
    role: 'Parent & Cyber Safety Advocate, Ahmedabad',
    rating: 5,
    quote: 'The Y Gen Care system is exactly what we needed for family device protection. Incredible support team.'
  },
  {
    id: 't-4',
    name: 'Neha Gupta',
    handle: '@neha_secure',
    avatarInitial: 'NG',
    avatarBg: 'bg-deep-navy',
    role: 'Fintech Security Specialist, Bengaluru',
    rating: 5,
    quote: 'Their enterprise-grade security architecture makes Yogic Astra the absolute best in the Indian market right now.'
  }
];

