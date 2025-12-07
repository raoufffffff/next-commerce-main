import { MetadataRoute } from 'next';

export default function sitemap() {
    const baseUrl = 'https://next-commerce-platform.vercel.app'; // 👈 REPLACE with your actual domain

    // 1. Define your static routes
    const routes = [
        '',           // Home page
        '/about',
        '/contact',
        '/Tutorial',
        '/privacy',
        '/terms'
    ];

    // 2. Define your languages
    const locales = ['en', 'fr', 'ar'];

    // 3. Generate the sitemap entries
    const sitemapEntries = routes.flatMap((route) => {
        return locales.map((locale) => {
            // Handle the root path logic carefully
            // e.g. /en, /en/about
            const url = `${baseUrl}/${locale}${route === '' ? '' : route}`;

            return {
                url: url,
                lastModified: new Date(),
                changeFrequency: 'weekly', // Hints to Google how often content changes
                priority: route === '' ? 1.0 : 0.8, // Home page is higher priority
            };
        });
    });

    return sitemapEntries;
}