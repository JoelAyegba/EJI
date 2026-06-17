import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to the top on route changes. Skips when a hash is present so
 * in-page anchor deep-links (e.g. /team#bernard-oke) keep their own scroll.
 * Uses an instant scroll because the global `scroll-behavior: smooth` would
 * otherwise animate and get interrupted by the page swap.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};
