import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  noIndex?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://pepedhub.com/drspeptides_social_hero.png',
  ogType = 'website',
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes('Peptide Education Hub') 
    ? title 
    : `${title} | Peptide Education Hub`;
  
  const baseUrl = 'https://pepedhub.com';
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`)
    : undefined;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    if (noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph / Facebook
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'Peptide Education Hub', true);
    updateMetaTag('og:locale', 'en_US', true);
    if (fullCanonicalUrl) {
      updateMetaTag('og:url', fullCanonicalUrl, true);
    }

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Article specific meta tags
    if (ogType === 'article') {
      if (articlePublishedTime) {
        updateMetaTag('article:published_time', articlePublishedTime, true);
      }
      if (articleModifiedTime) {
        updateMetaTag('article:modified_time', articleModifiedTime, true);
      }
      if (articleAuthor) {
        updateMetaTag('article:author', articleAuthor, true);
      }
    }

    // Canonical URL
    if (fullCanonicalUrl) {
      updateLinkTag('canonical', fullCanonicalUrl);
    }

    // Cleanup function
    return () => {
      // Meta tags persist across navigation, no cleanup needed
    };
  }, [fullTitle, description, keywords, fullCanonicalUrl, ogImage, ogType, articlePublishedTime, articleModifiedTime, articleAuthor, noIndex]);

  return null;
}

export default SEOHead;
