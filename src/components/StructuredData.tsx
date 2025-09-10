import { BUSINESS_INFO, CONTACT_INFO, GALLERY_PROJECTS } from '@/utils/constants';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://championpoolandspa.com/#localbusiness",
        "name": BUSINESS_INFO.name,
        "description": BUSINESS_INFO.description,
        "url": "https://championpoolandspa.com",
        "telephone": CONTACT_INFO.phone,
        "email": CONTACT_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dallas-Fort Worth Metro Area",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.7767,
          "longitude": -96.7970
        },
        "areaServed": CONTACT_INFO.serviceAreas.map(city => ({
          "@type": "City",
          "name": city
        })),
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 32.7767,
            "longitude": -96.7970
          },
          "geoRadius": "50 miles"
        },
        "openingHours": [
          "Mo-Fr 08:00-19:00",
          "Sa 08:00-14:00"
        ],
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Check"],
        "currenciesAccepted": "USD",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pool Services",
          "itemListElement": GALLERY_PROJECTS.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "category": service.category
            }
          }))
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "image": [
          "https://championpoolandspa.com/images/hero/pool-1.jpeg",
          "https://championpoolandspa.com/images/hero/pool-2.png"
        ],
        "logo": "https://championpoolandspa.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/championpoolandspa",
          "https://www.instagram.com/championpoolandspa"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://championpoolandspa.com/#organization",
        "name": BUSINESS_INFO.name,
        "url": "https://championpoolandspa.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://championpoolandspa.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CONTACT_INFO.phone,
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://championpoolandspa.com/#website",
        "url": "https://championpoolandspa.com",
        "name": BUSINESS_INFO.name,
        "description": BUSINESS_INFO.description,
        "publisher": {
          "@id": "https://championpoolandspa.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://championpoolandspa.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
