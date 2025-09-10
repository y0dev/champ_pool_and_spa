// Business Information
export const BUSINESS_INFO = {
  name: "Champion Pool & Spa",
  phone: "(972) 765-6162",
  email: "service@championpoolandspa.com",
  tagline: "Professional pool and spa services serving the Dallas-Fort Worth Metro Area",
  yearsExperience: "5+",
  customers: "100+",
  satisfactionRate: "100%",
  businessHours: {
    weekdays: "8:00 AM - 7:00 PM",
    saturday: "8:00 AM - 2:00 PM",
    emergency: false,
    display: "M-F 8AM-7PM, Sat 8AM-2PM"
  },
  description: "Experience the difference that 5+ years of expertise makes.",
  aboutDescription: "With Julio having a growing family, he knows the importance of family fun time and safety. That is why he is passionate for providing quality work to all of his clients. Julio has built Champion Pool and Spa on integrity, honesty, and consistency. When you choose Champion Pool & Spa, you're partnering with a trusted professional who treats your pool like his own.",
  mission: "We are committed to providing exceptional pool and spa services that exceed our customers' expectations. Our dedication to quality, reliability, and customer satisfaction has made us a trusted name in the Dallas-Fort Worth Metro Area.",
  values: [
    "Quality Service",
    "Customer Satisfaction", 
    "Professional Excellence",
    "Reliability",
    "Integrity"
  ],
  certifications: {
    licensedAndInsured: "Licensed & Insured",
    bbbAccredited: "BBB Accredited",
    poolAndSpaAssociation: "Pool & Spa Association",
    safetyCertified: "Safety Certified"
  }
};


// Service Area Details
export const SERVICE_AREA_DETAILS = {
  primary: "Dallas-Fort Worth Metro Area",
  cities: [
    {
      name: "Dallas",
      image: "/images/cities/dallas.jpg",
      alt: "Dallas skyline with modern buildings and cityscape",
      description: "The vibrant heart of North Texas"
    },
    {
      name: "McKinney",
      image: "/images/cities/mckinney.jpg",
      alt: "McKinney historic downtown with charming architecture",
      description: "Historic charm meets modern living"
    },
    {
      name: "Frisco",
      image: "/images/cities/frisco.jpg",
      alt: "Frisco modern suburban development and shopping",
      description: "Fastest growing city in America"
    },
    {
      name: "Prosper",
      image: "/images/cities/prosper.jpg",
      alt: "Prosper suburban neighborhood with modern homes",
      description: "Family-friendly suburban community"
    },
    {
      name: "Allen",
      image: "/images/cities/allen.png",
      alt: "Allen residential area with beautiful homes and landscaping",
      description: "Premier residential destination"
    },
    {
      name: "Plano",
      image: "/images/cities/plano.jpg",
      alt: "Plano corporate headquarters and business district",
      description: "Corporate headquarters capital"
    },
    {
      name: "Fairview",
      image: "/images/cities/fairview.jpg",
      alt: "Fairview residential community with modern homes",
      description: "Peaceful suburban living"
    },
    {
      name: "Addison",
      image: "/images/cities/addison.jpg",
      alt: "Addison business district and entertainment area",
      description: "Business and entertainment hub"
    },
    {
      name: "Flower Mound",
      image: "/images/cities/flower-mound.jpg",
      alt: "Flower Mound residential area with modern homes",
      description: "Family-oriented community"
    },
    {
      name: "Carrollton",
      image: "/images/cities/carrollton.jpg",
      alt: "Carrollton residential area with modern homes",
      description: "Family-friendly suburban community"
    },
    {
      name: "Coppell",
      image: "/images/cities/coppell.jpg",
      alt: "Coppell residential area with modern homes",
      description: "Known for its welcoming atmosphere and wide array of attractions"
    },
    {
      name: "Lewisville",
      image: "/images/cities/lewisville.jpg",
      alt: "Lewisville residential area with modern homes",
      description: "Known for Lewisville Lake recreation"
    }
  ],
  radius: "Metro Area Coverage"
};

// Contact Information
export const CONTACT_INFO = {
  phone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  serviceArea: SERVICE_AREA_DETAILS.primary,
  businessHours: BUSINESS_INFO.businessHours.weekdays + ", " + BUSINESS_INFO.businessHours.saturday,
  serviceAreas: SERVICE_AREA_DETAILS.cities.map(city => city.name)
};

// Services
export const SERVICES = [
  {
    title: "Pool Cleaning",
    description: "Regular maintenance to ensure your pool operates at peak efficiency year-round.",
    icon: "maintenance"
  },
  {
    title: "Pool Repairs", 
    description: "Fast and reliable repair services for all types of pool equipment.",
    icon: "repair"
  }
];

// Trust Indicators
export const TRUST_INDICATORS = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind",
    icon: "check"
  },
  {
    title: "Quality Service",
    description: "Attention to detail and excellence",
    icon: "quality"
  },
  {
    title: "5+ Years Experience",
    description: "Trusted expertise in pool and spa care",
    icon: "experience"
  }
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" }
];

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ],
  services: SERVICES.map(service => service.title)
};

// Social Media
export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "#",
    icon: "facebook"
  },
  {
    name: "Instagram", 
    href: "#",
    icon: "instagram"
  }
];

// SEO Metadata
export const SEO_METADATA = {
  title: "Champion Pool and Spa - Professional Pool & Spa Services | Dallas-Fort Worth",
  description: "Expert pool cleaning and repair services in Dallas-Fort Worth Metro Area. Professional weekly cleaning, equipment repairs, filter cleaning, and green-to-clean services. Get your free quote today!",
  keywords: "pool cleaning, pool repair, pool maintenance, pool services, Dallas, McKinney, Frisco, Prosper, Allen, Plano, Fairview, Addison, Flower Mound, Carrollton, Coppell, Lewisville, pool equipment repair, filter cleaning, green pool treatment, weekly pool service, Julio pool services",
  authors: [{ name: "Champion Pool and Spa" }],
  creator: "Champion Pool and Spa",
  publisher: "Champion Pool and Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://championpoolandspa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Champion Pool and Spa - Professional Pool & Spa Services",
    description: "Expert pool cleaning and repair services in Dallas-Fort Worth. Professional weekly cleaning, equipment repairs, and emergency pool recovery. Get your free quote today!",
    url: 'https://championpoolandspa.com',
    siteName: 'Champion Pool and Spa',
    images: [
      {
        url: '/images/hero/pool-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Champion Pool and Spa - Professional Pool Services',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Champion Pool and Spa - Professional Pool & Spa Services',
    description: 'Expert pool cleaning and repair services in Dallas-Fort Worth Metro Area',
    images: ['/images/hero/pool-1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Colors
export const COLORS = {
  primary: {
    blue: "#1e40af", // blue-700
    darkBlue: "#1e3a8a", // blue-800
    lightBlue: "#3b82f6", // blue-500
  },
  secondary: {
    gray: "#6b7280", // gray-500
    darkGray: "#374151", // gray-700
    lightGray: "#f3f4f6", // gray-100
  }
};


// Gallery Categories
export const GALLERY_CATEGORIES = {
  Cleaning: {
    name: "Cleaning",
    description: "Regular pool cleaning and upkeep services",
    color: "blue"
  },
  Repair: {
    name: "Repair",
    description: "Pool equipment repair and troubleshooting",
    color: "red"
  }
};

// Gallery Projects
export const GALLERY_PROJECTS = [
  {
    id: 1,
    title: "Weekly Pool Cleaning",
    category: "Cleaning",
    description: "Complete skimming, vacuuming, and brushing to keep your pool sparkling clean. Professional weekly cleaning service for both residential and commercial pools.",
    image: "/images/gallery/pool-cleaning.jpg",
    beforeAfter: false
  },
  {
    id: 2,
    title: "Pool Equipment Repairs",
    category: "Repair",
    description: "Pump, filter, heater, and timer repairs to keep your system running smoothly. Expert repair services for all pool equipment with quick, reliable turnaround.",
    image: "/images/gallery/pool-repair.jpg",
    beforeAfter: false
  },
  {
    id: 3,
    title: "Clean Pool Results",
    category: "Cleaning",
    description: "Professional pool cleaning results that extend your pool and equipment life. Regular maintenance keeps your pool crystal clear and your equipment running efficiently.",
    image: "/images/gallery/clean-pool.jpg",
    beforeAfter: false
  },
  {
    id: 4,
    title: "Green to Clean Transformation",
    category: "Cleaning",
    description: "Transform algae-filled green pools back to crystal clear condition. Emergency pool recovery services using advanced treatment methods and professional expertise.",
    image: "/images/gallery/green-to-clean.jpg",
    beforeAfter: true
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Pool Owner",
    content: "Champion Pool & Spa transformed our neglected pool into a sparkling oasis. Their attention to detail and professional service exceeded our expectations. Highly recommend!",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "Mike Rodriguez",
    role: "Property Manager",
    content: "We've been using Champion for our apartment complex pools for over 3 years. Reliable, professional, and they always go above and beyond. Our residents love the clean pools!",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "Jennifer Chen",
    role: "Spa Owner",
    content: "The spa installation was flawless and completed ahead of schedule. The team was professional, clean, and left our property spotless. Couldn't be happier!",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "David Thompson",
    role: "Homeowner",
    content: "When our pool pump failed on a holiday weekend, Champion was there within hours. Their emergency service saved our summer plans. Truly exceptional customer service!",
    rating: 5,
    image: "/api/placeholder/60/60"
  }
];

// Web3Forms Configuration
export const WEB3FORMS_CONFIG = {
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY'
};
