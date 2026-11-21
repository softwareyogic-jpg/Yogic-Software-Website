export interface ProductFeatureGroup {
  groupTitle?: string;
  features: {
    name: string;
    isNew?: boolean;
    icon?: string;
  }[];
}

export interface Product {
  id: string;
  name: string;
  category: 'Finance Locker' | 'Family Safety' | 'Cybersecurity' | 'Device Protection';
  isFlagship?: boolean;
  shortDescription: string;
  fullDescription: string;
  accentColor: string;
  iconType: string;
  logoUrl?: string;
  googlePlayLink?: string;
  featureGroups: ProductFeatureGroup[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'yogic-astra-shakti',
    name: 'Yogic Astra Shakti',
    category: 'Finance Locker',
    isFlagship: true,
    shortDescription: 'Next-gen enterprise finance locker with AI support, remote controls, and automated recovery.',
    fullDescription: 'YOGIC ASTRA is a next-gen finance locker designed to give retailers total control over EMI-bound devices. With features like 24/7 AI support, app control, and remote access tools, it ensures secure payments and smart device management — all in one powerful solution.',
    accentColor: '#F97D07',
    iconType: 'shield-check',
    logoUrl: '/assets/yogic_astra_logo.png',
    googlePlayLink: 'https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN',
    featureGroups: [
      {
        groupTitle: 'New & Advanced Capabilities',
        features: [
          { name: 'SIM Remove Lock', isNew: true },
          { name: 'Auto Debit', isNew: true }
        ]
      },
      {
        groupTitle: 'Device Locking & Access Management',
        features: [
          { name: 'Lock/Unlock (Online/Offline)' },
          { name: 'App Lock/Unlock' },
          { name: 'Device PIN/Pattern Lock' },
          { name: 'Outgoing Call Lock/Unlock' },
          { name: 'Camera Lock/Unlock' },
          { name: 'USB Lock/Unlock' },
          { name: 'Bluetooth Lock/Unlock' },
          { name: 'WiFi On/Off' },
          { name: 'Airplane Mode On/Off' }
        ]
      },
      {
        groupTitle: 'Remote Tracking & Surveillance',
        features: [
          { name: 'Tracking On/Off' },
          { name: 'SIM Tracking' },
          { name: 'SIM Card Inject' },
          { name: 'Send EMI Alert' },
          { name: 'Reboot' },
          { name: 'Wallpaper Set/Remove' },
          { name: 'App Hide/Unhide' },
          { name: 'Send Advertisement' }
        ]
      },
      {
        groupTitle: 'Enterprise Provisioning & Intelligence',
        features: [
          { name: 'Generate OUC' },
          { name: 'Generate FRP' },
          { name: 'Language Change' },
          { name: '24/7 AI Support' }
        ]
      }
    ]
  },
  {
    id: 'yogic-astra-aadi',
    name: 'Yogic Astra Aadi',
    category: 'Finance Locker',
    shortDescription: 'Dedicated smart appliance finance locker empowering retailers to offer flexible consumer EMIs.',
    fullDescription: 'The Yogic Astra Aadi Locker allows retailers to offer home appliances with convenient EMI plans.',
    accentColor: '#0A6BDB',
    iconType: 'tv',
    logoUrl: '/assets/yogic_astra_aadi_logo.png',
    googlePlayLink: 'https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN',
    featureGroups: [
      {
        groupTitle: 'Appliance Control Suite',
        features: [
          { name: 'Lock / Unlock' },
          { name: 'Accessibility On / Off' },
          { name: 'Send EMI Alert' }
        ]
      }
    ]
  },
  {
    id: 'astra-glamour',
    name: 'Astra Glamour',
    category: 'Finance Locker',
    // VERIFY: Google authenticated and world-class encryption claim
    shortDescription: 'Google authenticated finance locker with world-class encryption for your personal assets.',
    fullDescription: 'Google authenticated finance locker with world-class encryption for your personal assets.',
    accentColor: '#EDB90A',
    iconType: 'sparkles',
    logoUrl: '/assets/astra_glamour_logo.png',
    googlePlayLink: 'https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN',
    featureGroups: [
      {
        groupTitle: 'Personal Security & Authentication',
        features: [
          { name: 'App Lock / Unlock' },
          { name: '7 Day Lock (Offline Mode)' },
          { name: 'No Bypass Defense' },
          { name: 'Google Authenticated' },
          { name: 'Easy and Secure' },
          { name: 'No Heavy Settings' },
          { name: 'No Advanced Permission Required' }
        ]
      }
    ]
  },
  {
    id: 'secure-emi',
    name: 'Secure EMI',
    category: 'Finance Locker',
    shortDescription: 'High-speed finance locker giving retailers authoritative remote control on EMI handsets.',
    fullDescription: 'SECURE EMI is a powerful finance locker app that gives retailers full control over EMI-linked mobile devices.',
    accentColor: '#0A6BDB',
    iconType: 'smartphone',
    logoUrl: '/assets/secure_emi_logo.png',
    googlePlayLink: 'https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN',
    featureGroups: [
      {
        groupTitle: 'Retail Security Controls',
        features: [
          { name: 'Lock / Unlock' },
          { name: 'Location Track' },
          { name: 'Send EMI Alert' },
          { name: 'App Lock / Unlock' }
        ]
      }
    ]
  },
  {
    id: 'y-gen-care',
    name: 'Y Gen Care (Parent App)',
    category: 'Family Safety',
    shortDescription: 'Advanced child digital wellbeing & protection system for parents to oversee family devices.',
    fullDescription: 'Advanced child protection system for parents to monitor and manage family devices.',
    accentColor: '#F97D07',
    iconType: 'heart-handshake',
    logoUrl: '/assets/y_gen_care_logo.png',
    googlePlayLink: 'https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN',
    featureGroups: [
      {
        groupTitle: 'Parental Command Hub',
        features: [
          { name: 'Task Assign' },
          { name: 'Location Track' },
          { name: 'Run Alert' },
          { name: 'SOS Received' },
          { name: 'Sound Around' },
          { name: 'Send Loud Signal' },
          { name: 'Send Msg' },
          { name: 'Create Task' },
          { name: 'Web & Call Protect' },
          { name: 'App Access Lock / Unlock' }
        ]
      }
    ]
  },
  {
    id: 'kids-care',
    name: 'Kids Care (Child App)',
    category: 'Family Safety',
    shortDescription: 'Child companion application ensuring a constructive digital environment with parent connectivity.',
    fullDescription: 'Child companion app for safe digital experience with parent connectivity.',
    accentColor: '#EDB90A',
    iconType: 'smile',
    logoUrl: '/assets/kids_care_logo.png',
    googlePlayLink: 'https://play.google.com/store/apps/developer?id=Yogic+Astra+2025&hl=en_IN',
    featureGroups: [
      {
        groupTitle: 'Child Companion Suite',
        features: [
          { name: 'Task Assign Sync' },
          { name: 'Location Track' },
          { name: 'Run Alert' },
          { name: 'SOS Received & Send' },
          { name: 'Sound Around' },
          { name: 'Send Loud Signal' },
          { name: 'Send Msg' },
          { name: 'Create Task' },
          { name: 'Web & Call Protect' },
          { name: 'App Access Lock / Unlock' }
        ]
      }
    ]
  },
  {
    id: 'y-commander',
    name: 'Y Commander',
    category: 'Cybersecurity',
    shortDescription: 'Anti-hacking & VPN protection suite engineered for enterprise-grade remote work & private communications.',
    fullDescription: 'Anti-hacking & VPN protection suite for secure remote work and data transfer.',
    accentColor: '#0B2A5B',
    iconType: 'shield-alert',
    logoUrl: '/assets/y_commander_logo.png',
    featureGroups: [
      {
        groupTitle: 'Anti Hacking Defense',
        features: [
          { name: 'Scanning Engine' },
          { name: 'Screenshot Protector' },
          { name: 'Malware Detector' },
          { name: 'Caller ID (Generic Identifier)' },
          { name: 'Suspicious App Detect' },
          { name: 'Warning Page' },
          { name: 'Website Blocker' }
        ]
      },
      {
        groupTitle: 'VPN & Encrypted Data Network',
        features: [
          { name: 'VPN Security' },
          { name: 'Remote Control' },
          { name: 'Link Protection' },
          { name: 'Breach Detector' },
          { name: 'Device Security' },
          { name: 'Scanning Safety' },
          { name: 'Best Password Creation' }
        ]
      }
    ]
  },
  {
    id: 'y-destiny',
    name: 'Y Destiny',
    category: 'Device Protection',
    shortDescription: 'Premium iOS-dedicated finance locker with native hardware security integrations for Apple devices.',
    fullDescription: 'Premium iOS dedicated finance locker with native security features for Apple devices.',
    accentColor: '#16396F',
    iconType: 'apple',
    logoUrl: '/assets/y_destiny_logo.png',
    featureGroups: [
      {
        groupTitle: 'iOS Dedicated Security',
        features: [
          { name: 'Lock / Unlock' },
          { name: 'Location Services' },
          { name: 'Camera Lock / Unlock' },
          { name: 'Reboot Command' },
          { name: 'USB On / Off' }
        ]
      }
    ]
  },
  {
    id: 'mobi-protect',
    name: 'Mobi Protect',
    category: 'Device Protection',
    shortDescription: 'Comprehensive mobile device protection including anti-theft tracking, remote wipe, antivirus security, plus YouTube Premium Free for 1 Year.',
    fullDescription: 'Comprehensive mobile device protection including theft recovery, remote wipe, real-time antivirus defense, and complimentary 1-Year YouTube Premium entertainment access.',
    accentColor: '#F97D07',
    iconType: 'lock',
    logoUrl: '/assets/mobi_protect_logo.png',
    featureGroups: [
      {
        groupTitle: 'Entertainment & Rewards',
        features: [
          { name: 'YouTube Premium: FREE FOR 1 YEAR (Entertainment Bundle Included)', isNew: true }
        ]
      },
      {
        groupTitle: 'Anti Theft Safeguards',
        features: [
          { name: 'Stop Shut Down' },
          { name: 'Stop Connect with PC' },
          { name: 'Track Your Phone' },
          { name: 'Pocket Theft Detection' },
          { name: 'Movement Alert' },
          { name: 'Unplug Alert' },
          { name: 'Aeroplane Mode Guard' }
        ]
      },
      {
        groupTitle: 'Remote Security & Emergency Wipe',
        features: [
          { name: 'Silent Camera Snap' },
          { name: 'Erase Contacts' },
          { name: 'Erase Gallery' },
          { name: 'Ring Setup' },
          { name: 'GPS Setup' },
          { name: 'Lock Device' },
          { name: 'GPS Flare' },
          { name: 'Power On Signal' }
        ]
      },
      {
        groupTitle: 'Antivirus & Device Performance',
        features: [
          { name: 'Quick Scan' },
          { name: 'Schedule Scan' },
          { name: 'Threats Detected' },
          { name: 'Device Performance' },
          { name: 'Apps Permission Inspector' }
        ]
      }
    ]
  }
];

