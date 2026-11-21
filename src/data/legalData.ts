export interface LegalDoc {
  id: string;
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: '1. Introduction',
        content: 'Yogic Software Pvt. Ltd. ("we", "our", or "us") is committed to protecting your privacy and personal data. This Privacy Policy details how we collect, process, and safeguard information across our mobile applications, finance lockers, and web platforms.'
      },
      {
        heading: '2. Information We Collect',
        content: 'We collect information necessary to operate retail device lockers, facilitate verified EMI arrangements, ensure family digital protection, and provide 24/7 technical assistance. All device telemetry is handled via secure, encrypted protocols.'
      },
      {
        heading: '3. Data Security & Storage',
        content: 'We implement industry-standard encryption protocols and access controls to ensure your information remains confidential, guarded against unauthorized disclosure or tampering.'
      },
      {
        heading: '4. Contacting Our Data Officer',
        content: 'If you have questions regarding this Privacy Policy, please email support@yogicsoftware.com or call our official desk at +91-7596055177.'
      }
    ]
  },
  terms: {
    id: 'terms',
    title: 'Terms & Conditions',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        content: 'By accessing or utilizing software solutions provided by Yogic Software Pvt. Ltd., including Yogic Astra Shakti, Secure EMI, and related products, you agree to be bound by these Terms & Conditions.'
      },
      {
        heading: '2. Authorized Use & Retailer Rights',
        content: 'Retail partners and distributors must utilize our finance lockers strictly in compliance with applicable consumer credit laws and contractual device financing terms.'
      },
      {
        heading: '3. Service Availability',
        content: 'We strive for continuous, uninterrupted cloud platform availability. Scheduled maintenance and critical security updates will be notified in advance through our distributor portals.'
      }
    ]
  },
  refund: {
    id: 'refund',
    title: 'Refund Policy',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: '1. Software Licenses & Subscriptions',
        content: 'License allocations and digital token packages issued to authorized retailers and distributors are activated instantaneously upon order confirmation.'
      },
      {
        heading: '2. Dispute Resolution & Claims',
        content: 'In case of technical failure or unfulfilled token provisioning, partners can raise a ticket within 7 business days for prompt reconciliation or account credit.'
      }
    ]
  },
  grievance: {
    id: 'grievance',
    title: 'Grievance Redressal',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: '1. Grievance Officer Details',
        content: 'In accordance with Information Technology rules, our appointed Grievance Officer handles consumer and partner complaints with urgency.'
      },
      {
        heading: '2. Nodal Address',
        content: 'Yogic Software Pvt. Ltd., 3rd Floor, Musafir Cafe Building, Ramkrishna Pally, Mondal Ganthi VIP Road, Kaikhali, Kolkata – 700052, West Bengal, India. Direct email: grievance@yogicsoftware.com.'
      }
    ]
  }
};

