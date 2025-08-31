// Business Information
export const BUSINESS_INFO = {
  name: "Champion Pool & Spa",
  phone: "(972) 765-6162",
  tagline: "Professional pool and spa services serving the Dallas-Fort Worth Metro Area",
  yearsExperience: "5+",
  customers: "100+",
  satisfactionRate: "100%",
  businessHours: "Daily",
  description: "Experience the difference that 5+ years of expertise makes.",
  aboutDescription: "For over 5 years, Champion Pool & Spa has been the trusted name in professional pool and spa services throughout the Dallas-Fort Worth Metro Area. What started as a small family business has grown into a comprehensive service provider, serving hundreds of satisfied customers across Dallas, McKinney, Frisco, Prosper, Allen, Plano, Fairview, and Addison.",
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

// Contact Information
export const CONTACT_INFO = {
  phone: BUSINESS_INFO.phone,
  email: "service@championpoolandspa.com",
  serviceArea: "Dallas-Fort Worth Metro Area",
  businessHours: "Daily 9:00 AM - 7:00 PM",
  serviceAreas: [
    "Dallas",
    "McKinney", 
    "Frisco",
    "Prosper",
    "Allen",
    "Plano",
    "Fairview",
    "Addison"
  ]
};

// Services
export const SERVICES = [
  {
    title: "Pool Maintenance",
    description: "Regular maintenance to ensure your pool operates at peak efficiency year-round.",
    icon: "maintenance",
    price: "From $120/month"
  },
  {
    title: "Pool Repairs", 
    description: "Fast and reliable repair services for all types of pool equipment and structures.",
    icon: "repair",
    price: "From $150"
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
  services: [
    "Pool Maintenance",
    "Pool Repairs"
  ]
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
  title: "Champion Pool and Spa - Professional Pool & Spa Services",
  description: "Expert pool maintenance and repair services. Serving the Dallas-Fort Worth Metro Area with quality pool and spa solutions. Get your free quote today!",
  keywords: "pool maintenance, pool repair, pool services, Dallas, McKinney, Frisco, Prosper, Allen, Plano, Fairview, Addison",
  authors: [{ name: "Champion Pool and Spa" }],
  openGraph: {
    title: "Champion Pool and Spa - Professional Pool & Spa Services",
    description: "Expert pool maintenance and repair services. Get your free quote today!",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
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

// Business Hours
export const BUSINESS_HOURS = {
  daily: "9:00 AM - 7:00 PM",
  emergency: false
};

// Service Area Details
export const SERVICE_AREA_DETAILS = {
  primary: "Dallas-Fort Worth Metro Area",
  cities: [
    "Dallas",
    "McKinney", 
    "Frisco",
    "Prosper",
    "Allen",
    "Plano",
    "Fairview",
    "Addison"
  ],
  radius: "Metro Area Coverage"
};

// City Images for Service Areas
export const CITY_IMAGES = {
  Dallas: {
    image: "/images/cities/dallas.jpg",
    alt: "Dallas skyline with modern buildings and cityscape",
    description: "The vibrant heart of North Texas"
  },
  McKinney: {
    image: "/images/cities/mckinney.jpg",
    alt: "McKinney historic downtown with charming architecture",
    description: "Historic charm meets modern living"
  },
  Frisco: {
    image: "/images/cities/frisco.jpg",
    alt: "Frisco modern suburban development and shopping",
    description: "Fastest growing city in America"
  },
  Prosper: {
    image: "/images/cities/prosper.jpg",
    alt: "Prosper suburban neighborhood with modern homes",
    description: "Family-friendly suburban community"
  },
  Allen: {
    image: "/images/cities/allen.png",
    alt: "Allen residential area with beautiful homes and landscaping",
    description: "Premier residential destination"
  },
  Plano: {
    image: "/images/cities/plano.jpg",
    alt: "Plano corporate headquarters and business district",
    description: "Corporate headquarters capital"
  },
  Fairview: {
    image: "/images/cities/fairview.jpg",
    alt: "Fairview residential community with modern homes",
    description: "Peaceful suburban living"
  },
  Addison: {
    image: "/images/cities/addison.jpg",
    alt: "Addison business district and entertainment area",
    description: "Business and entertainment hub"
  }
};

// Gallery Categories
export const GALLERY_CATEGORIES = {
  Maintenance: {
    name: "Maintenance",
    description: "Regular pool maintenance and upkeep services",
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
    title: "Pool Maintenance Services",
    category: "Maintenance",
    description: "Comprehensive pool maintenance for both residential and commercial pools. Includes regular cleaning, chemical balancing, equipment checks, water quality testing, and seasonal maintenance. Perfect for homeowners and property managers.",
    image: "/images/gallery/pool-maintenance.jpg",
    beforeAfter: false
  },
  {
    id: 2,
    title: "Pool Equipment Repair & Maintenance",
    category: "Repair",
    description: "Expert repair and maintenance of all pool equipment including pumps, filters, heaters, automation systems, and safety equipment. Serving both residential and commercial pool owners with quick, reliable service.",
    image: "/images/gallery/pool-repair.jpg",
    beforeAfter: false
  },
  {
    id: 3,
    title: "Pool Leak Detection & Repair",
    category: "Repair",
    description: "Professional leak detection and repair services using advanced technology. We locate and fix leaks in residential and commercial pools, preventing water loss and structural damage. Includes pressure testing and repair.",
    image: "/images/gallery/leak-detection.jpg",
    beforeAfter: false
  },
  // {
  //   id: 4,
  //   title: "Water Quality & Filtration Services",
  //   category: "Maintenance",
  //   description: "Complete water quality management and filtration system services. We handle chemical balancing, filter cleaning, water testing, and system optimization for both residential and commercial pools.",
  //   image: "/images/gallery/filter-repair.jpg",
  //   beforeAfter: false
  // }
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
