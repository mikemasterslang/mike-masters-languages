import { useEffect } from 'react';
import { captureSSRMeta } from '../ssr-meta';

export function usePageMeta(title: string, description: string) {
  if (typeof window === 'undefined') {
    captureSSRMeta(title, description);
  }

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const url = window.location.origin + window.location.pathname;
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }
  }, [title, description]);
}
