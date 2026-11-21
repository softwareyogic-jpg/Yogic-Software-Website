export interface JobPosition {
  id: string;
  title: string;
  badge: string;
  location: string;
  roleType: string;
  phone: string;
  email: string;
  overview: string;
  responsibilities: string[];
  eligibility: string[];
  benefits: string[];
}

export const CAREERS_DATA: JobPosition[] = [
  {
    id: 'sales-agent',
    title: 'Sales Agent (ASM / TSM / BDM / SO)',
    badge: 'High Priority',
    location: 'Multiple Pan India Locations',
    roleType: 'Full-time Field Leadership',
    phone: '+91 7596 055 178',
    email: 'hr@yogicsoftware.com',
    overview: 'Drive retail expansion and distributor network growth for Yogic Software\'s EMI and digital protection products.',
    responsibilities: [
      'Appoint and manage distributors across assigned territory',
      'Expand retail channel presence and onboarding velocity',
      'Achieve monthly & quarterly sales targets proactively',
      'Conduct regular market visits and retailer meetings',
      'Execute promotional and branding activities at retail touchpoints',
      'Maintain strong relationship with trade partners',
      'Provide competitor market intelligence reports to leadership'
    ],
    eligibility: [
      'Experience in FMCG / Mobile / Fintech / Software sales preferred',
      'Strong negotiation and communication skills',
      'Target-driven and performance-focused mindset',
      'Willing to travel within assigned territory'
    ],
    benefits: [
      'Attractive salary + uncapped performance incentives',
      'Comprehensive travel allowance',
      'Fast-track growth into senior leadership roles',
      'Performance bonuses & recognition programs'
    ]
  },
  {
    id: 'brand-promoter',
    title: 'Brand Promoter',
    badge: 'On-Field Role',
    location: 'West Bengal & Assigned Field Locations',
    roleType: 'On-field / Retail Market Visits (Not Remote)',
    phone: '+91 7596 055 178',
    email: 'hr@yogicsoftware.com',
    overview: 'Represent Yogic Software products at retail counters and build strong brand presence through direct engagement.',
    responsibilities: [
      'Visit retail stores and promote company products enthusiastically',
      'Demonstrate product features to retailers and end-customers',
      'Support sales team in lead generation and customer onboarding',
      'Ensure high visibility of branding materials at partner stores',
      'Collect feedback from retailers and customers for product improvement',
      'Assist in promotional campaigns and retail activations'
    ],
    eligibility: [
      'Good communication and presentation skills',
      'Energetic and confident personality',
      'Field sales / promoter experience preferred',
      'Freshers can apply (comprehensive training provided)',
      'Comfortable with regular field movement'
    ],
    benefits: [
      'Fixed salary + attractive incentives',
      'On-ground training and mentorship support',
      'Performance-based rewards and recognitions',
      'Structured career growth opportunities'
    ]
  }
];

