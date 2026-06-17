# SEO — what was done & what to do next

Canonical domain: **https://equaljusticeinitiativeinc.org** (set in `src/seoConfig.ts` → `SITE_URL`).
If the domain changes, update `SITE_URL` and the absolute URLs in `public/sitemap.xml`,
`public/robots.txt`, and the JSON-LD in `index.html`.

## What changed (technical SEO — already live in code)

- **Real per-page URLs + static prerendering.** Migrated from a single-URL SPA to
  `vite-react-ssg` + `react-router-dom`. Each route is prerendered to its own static HTML
  (`/`, `/about`, `/team`, `/contact`, `/trial-watch`, `/newsroom`, `/pro-bono`), so Google
  gets full content + meta with no JavaScript. Routes live in `src/routes.tsx`.
- **Crawlable links.** Nav/CTAs are now real `<a href>` links (react-router `Link`/`NavLink`).
- **Per-page metadata.** `src/components/Seo.tsx` + `src/seoConfig.ts` set a unique title,
  meta description, canonical, Open Graph, and Twitter card per page.
- **Structured data.** Organization (NGO) JSON-LD in `index.html` (name, logo, address, phone,
  email, social profiles).
- **Sitemap & robots.** `public/sitemap.xml`, `public/robots.txt`.
- **Favicons + web manifest + OG image** generated from the logo (`public/favicon-*.png`,
  `apple-touch-icon.png`, `android-chrome-*.png`, `og-image.jpg`, `site.webmanifest`).
- **Core Web Vitals.** Hero images compressed/resized (≈38 MB → ≈1 MB total); below-the-fold
  images set to `loading="lazy"`.
- **Vercel:** `vercel.json` enables `cleanUrls` (serves `/about` from `about.html`) and
  `trailingSlash: false`. **Do not add a catch-all rewrite to `/index.html`** — it would break
  per-page SEO. An `.npmrc` (`legacy-peer-deps=true`) is required so Vercel's install resolves
  (vite-react-ssg pins react-router v6 / Vite ≤7; we run React 19 / Vite 8, which works).

## Off-page / ongoing (do these to actually rank — mostly outside the code)

1. **Point the domain** `equaljusticeinitiativeinc.org` at the Vercel project (Vercel →
   Project → Domains). Until the real domain is live, canonical/OG URLs point at it but the site
   serves from the `.vercel.app` URL.
2. **Google Search Console** — verify the domain (DNS TXT record), submit
   `https://equaljusticeinitiativeinc.org/sitemap.xml`, then use URL Inspection → Request
   Indexing for each page.
3. **Bing Webmaster Tools** — add the site and submit the same sitemap.
4. **Google Business Profile** — create/claim a profile for the NGO (name, Abuja address,
   phone). Drives brand + local search and a knowledge panel.
5. **Analytics** — add Vercel Web Analytics or GA4 to track organic traffic.
6. **Content depth (biggest long-term lever)** — publish real articles on `/newsroom`
   (case studies, trial-watch reports, impact stories) targeting terms like
   "pro bono legal aid Nigeria", "trial monitoring Nigeria", "SGBV advocacy",
   "human rights NGO Nigeria". Fresh, substantive content is what ranks over time.
7. **Backlinks/citations** — get listed by partner NGOs, legal directories, and press; link the
   site from all social profiles.

## How to verify locally
- `npm run build` then inspect `dist/about.html` etc. — each has a unique `<title>` and
  `<meta name="description">` and visible body text (content present with JS disabled).
- Validate JSON-LD: Google Rich Results Test. Validate OG: opengraph.xyz.
- Lighthouse (mobile) for SEO + performance.
