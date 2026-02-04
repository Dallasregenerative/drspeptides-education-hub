import { useEffect } from 'react';
import { getPageSEO, PageSEO } from '@/data/seoData';

interface UsePageSEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: object | object[];
  noIndex?: boolean;
}

export function usePageSEO(path: string, options: UsePageSEOOptions = {}) {
  const baseUrl = 'https://pepedhub.com';
  
  useEffect(() => {
    // Get default SEO data for this path
    const defaultSEO = getPageSEO(path);
    
    // Merge with options (options override defaults)
    const title = options.title || defaultSEO.title;
    const description = options.description || defaultSEO.description;
    const keywords = options.keywords || defaultSEO.keywords;
    const canonicalUrl = options.canonicalPath 
      ? `${baseUrl}${options.canonicalPath}` 
      : `${baseUrl}${path}`;
    const ogImage = options.ogImage || `${baseUrl}/drspeptides_social_hero.png`;
    const ogType = options.ogType || defaultSEO.ogType || 'website';

    // Update document title
    const fullTitle = title.includes('Peptide Education Hub') 
      ? title 
      : `${title} | Peptide Education Hub`;
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

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    if (options.noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:site_name', 'Peptide Education Hub', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Add schema markup if provided
    if (options.schema) {
      const schemas = Array.isArray(options.schema) ? options.schema : [options.schema];
      const existingSchemas = document.querySelectorAll('script[data-page-schema="true"]');
      existingSchemas.forEach(el => el.remove());
      
      schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-schema', 'true');
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Cleanup
    return () => {
      // Remove page-specific schemas on unmount
      const pageSchemas = document.querySelectorAll('script[data-page-schema="true"]');
      pageSchemas.forEach(el => el.remove());
    };
  }, [path, options.title, options.description, options.keywords, options.canonicalPath, options.ogImage, options.ogType, options.schema, options.noIndex]);
}

// Pre-built schema generators for common page types
export function generatePeptidePageSchema(peptide: {
  name: string;
  alternateName?: string[];
  description: string;
  path: string;
  fdaStatus?: string;
  category?: string;
}) {
  const baseUrl = 'https://pepedhub.com';
  
  return [
    // Drug/Substance schema
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": peptide.name,
      "alternateName": peptide.alternateName || [],
      "description": peptide.description,
      "url": `${baseUrl}${peptide.path}`,
      "legalStatus": peptide.fdaStatus === 'FDA Approved' 
        ? "https://schema.org/PrescriptionOnly" 
        : "https://schema.org/UnregisteredDrug",
      "administrationRoute": "Subcutaneous injection",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": baseUrl
      }
    },
    // MedicalWebPage schema
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": `${peptide.name} - Clinical Guide`,
      "description": peptide.description,
      "url": `${baseUrl}${peptide.path}`,
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": peptide.category || "Regenerative Medicine"
      },
      "lastReviewed": new Date().toISOString().split('T')[0],
      "reviewedBy": {
        "@type": "Organization",
        "name": "Peptide Education Hub Medical Team"
      }
    },
    // BreadcrumbList schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Peptides",
          "item": `${baseUrl}/peptides`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": peptide.name,
          "item": `${baseUrl}${peptide.path}`
        }
      ]
    }
  ];
}

export function generateToolPageSchema(tool: {
  name: string;
  description: string;
  path: string;
}) {
  const baseUrl = 'https://pepedhub.com';
  
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": tool.name,
      "description": tool.description,
      "url": `${baseUrl}${tool.path}`,
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "provider": {
        "@type": "Organization",
        "name": "Peptide Education Hub"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools",
          "item": `${baseUrl}/tools`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": tool.name,
          "item": `${baseUrl}${tool.path}`
        }
      ]
    }
  ];
}

export function generateArticlePageSchema(article: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  keywords?: string[];
}) {
  const baseUrl = 'https://pepedhub.com';
  
  return {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": article.headline,
    "description": article.description,
    "url": `${baseUrl}${article.path}`,
    "image": article.image || `${baseUrl}/drspeptides_social_hero.png`,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": article.author || "Peptide Education Hub Medical Team",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Peptide Education Hub",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/drspeptides_social_hero.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${article.path}`
    },
    "keywords": article.keywords?.join(", ") || "peptide therapy, medical education"
  };
}

export default usePageSEO;
