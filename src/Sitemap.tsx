import React from 'react';
import {data} from './constdata/pages';

export const Sitemap = () => {
    const PUBLIC_URL = 'https://sitam.tech';
    const date = new Date();
    interface SitemapRoute {
        route: string;
    }

    let routes: SitemapRoute[] = [{
        route: '/projects',
    },
        ...data.map((page) => ({route: page.url}))
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>${PUBLIC_URL}</loc>
    <lastmod>${date.toISOString()}</lastmod>
  </url>
${routes.reduce((acc: string, route: SitemapRoute) => `${acc}
  <url>
    <loc>${PUBLIC_URL}${route.route}</loc>
    <lastmod>${date.toISOString()}</lastmod>
  </url>`, '')
        }
</urlset>
`;

    return (
        <pre>{xml}</pre>
    )
};
