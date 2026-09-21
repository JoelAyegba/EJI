/**
 * Generates dist/sitemap.xml from the pages that were actually prerendered.
 *
 * Deriving it from the build output rather than a hand-maintained list means the
 * sitemap cannot drift: a new article, a new page, or a removed one is reflected
 * automatically, and it can never point crawlers at a URL that does not exist.
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SITE_URL = 'https://equaljusticeinitiativeinc.org';

// Not a real destination: 404.html is served for unmatched paths.
const EXCLUDE = new Set(['404']);

const PRIORITY = { '': '1.0', about: '0.8', 'pro-bono': '0.8', team: '0.7', newsroom: '0.7' };

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith('.html') ? [full] : [];
  });
}

const routes = htmlFiles(DIST)
  .map((f) => relative(DIST, f).split(sep).join('/').replace(/\.html$/, ''))
  .map((r) => (r === 'index' ? '' : r))
  .filter((r) => !EXCLUDE.has(r))
  .sort((a, b) => a.localeCompare(b));

if (routes.length === 0) throw new Error('generate-sitemap: no prerendered pages found in dist/');

const urls = routes
  .map((route) => {
    const loc = `${SITE_URL}/${route}`.replace(/\/$/, '/');
    const priority = PRIORITY[route] ?? (route.includes('/') ? '0.6' : '0.7');
    return `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log(`generate-sitemap: wrote ${routes.length} URLs to ${DIST}/sitemap.xml`);
