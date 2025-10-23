import { NextResponse } from 'next/server';

const BASE_URL = 'https://jovinshija.tech';

// Define all pages and sections with their metadata
const pages = [
  // Main pages
  {
    url: '/',
    priority: 1.0,
    changefreq: 'weekly',
    sections: [
      { name: 'hero', fragment: '#hero' },
      { name: 'pricing-packages', fragment: '#pricing' },
      { name: 'work', fragment: '#work' },
      { name: 'services', fragment: '#services' },
      { name: 'working-process', fragment: '#process' },
      { name: 'skill-sets', fragment: '#skills' },
      { name: 'experience', fragment: '#experience' },
      { name: 'client-review', fragment: '#reviews' },
      { name: 'contact', fragment: '#contact' }
    ]
  },
  {
    url: '/projects',
    priority: 0.9,
    changefreq: 'weekly',
    sections: [
      { name: 'projects', fragment: '#projects' }
    ]
  },
  {
    url: '/pricing',
    priority: 0.9,
    changefreq: 'monthly',
    sections: [
      { name: 'startup-mvp', fragment: '#startup-mvp' },
      { name: 'custom-saas', fragment: '#custom-saas' },
      { name: 'consultancy', fragment: '#consultancy' }
    ]
  },
  {
    url: '/services',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/contact',
    priority: 0.7,
    changefreq: 'monthly'
  }
];

function generateSitemap() {
  const currentDate = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  pages.forEach((page) => {
    // Add main page
    sitemap += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;

    // Add page sections as separate entries
    if (page.sections) {
      page.sections.forEach((section) => {
        sitemap += `
  <url>
    <loc>${BASE_URL}${page.url}${section.fragment}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${Math.max(0.1, page.priority - 0.2)}</priority>
  </url>`;
      });
    }
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

export async function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
