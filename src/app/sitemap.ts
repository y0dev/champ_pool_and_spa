import { MetadataRoute } from 'next'
import { CONTACT_INFO } from '@/utils/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://championpoolandspa.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Add service area pages for each city
    ...CONTACT_INFO.serviceAreas.map((city) => ({
      url: `${baseUrl}/services/${city.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
