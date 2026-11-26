import { useEffect } from 'react';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const url = window.location.origin + window.location.pathname;
    const isBlogPost = window.location.pathname.startsWith('/blogs/') && window.location.pathname !== '/blogs';

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:type"]', 'content', isBlogPost ? 'article' : 'website');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:url"]', 'content', url);

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }

    // Inject Article structured data for blog posts
    const existingSchema = document.getElementById('article-schema');
    if (existingSchema) existingSchema.remove();

    if (isBlogPost) {
      const headline = title.split('|')[0].trim();
      const schema = document.createElement('script');
      schema.id = 'article-schema';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline,
        description,
        url,
        author: {
          '@type': 'Person',
          name: 'Michael Andrews',
          url: 'https://www.mikemasterslanguages.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Mike Masters Languages',
          url: 'https://www.mikemasterslanguages.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      });
      document.head.appendChild(schema);
    }
  }, [title, description]);
}
