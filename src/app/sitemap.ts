import { MetadataRoute } from 'next';

// One-page site: anchor links (#about etc.) are not separate URLs for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shreeomannapurna.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
