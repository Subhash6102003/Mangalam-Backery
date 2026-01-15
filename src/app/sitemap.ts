import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mangalambakeries.com';
  
  const routes = [
    '',
    '/best-bakery-in-bhopal',
    '/cake-shop-bhopal',
    '/custom-cakes-bhopal',
    '/valentine-cakes-bhopal',
    '/chocolate-shop-bhopal',
    '/midnight-cake-delivery-bhopal',
    '/eggless-cakes-bhopal',
    '/cakes',
    '/pastries',
    '/chocolates',
    '/brownies',
    '/cookies',
    '/gift-hampers',
    '/cart',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('valentine') ? 0.9 : 0.8,
  }));
}
