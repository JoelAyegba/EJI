import React from 'react';
import { Head } from 'vite-react-ssg';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../seoConfig';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const toAbsolute = (url: string) => (url.startsWith('http') ? url : `${SITE_URL}${url}`);

/**
 * Per-page SEO head tags. Rendered via vite-react-ssg's <Head>, so these end up
 * in each route's prerendered static HTML head (crawlable without JS).
 */
export const Seo: React.FC<SeoProps> = ({ title, description, path, image = DEFAULT_OG_IMAGE }) => {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = toAbsolute(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
