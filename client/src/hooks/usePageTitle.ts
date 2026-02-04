import { useEffect } from 'react';
import { getPageSEO } from '@/data/seoData';

interface PageTitleOptions {
  description?: string;
  keywords?: string;
  suffix?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: object | object[];
  noIndex?: boolean;
}

/**
 * Custom hook to set the page title, meta tags, and structured data dynamically
 * Enhanced for comprehensive SEO optimization
 * @param title - The page title to set
 * @param options - SEO options including description, keywords, schema, etc.
 */
export function usePageTitle(
  title: string, 
  options?: PageTitleOptions
) {
  const description = options?.description;
  const keywords = options?.keywords;
  const suffix = options?.suffix ?? "| Peptide Education Hub";
  const baseUrl = 'https://pepedhub.com';
  
  useEffect(() => {
    // Set page title
    const fullTitle = suffix ? `${title} ${suffix}` : title;
    document.title = fullTitle;
    
    // Get path from current URL for default SEO data
    const currentPath = window.location.pathname;
    const defaultSEO = getPageSEO(currentPath);
    
    // Use provided values or fall back to defaults
    const finalDescription = description || defaultSEO.description;
    const finalKeywords = keywords || defaultSEO.keywords;
    const canonicalUrl = options?.canonicalPath 
      ? `${baseUrl}${options.canonicalPath}` 
      : `${baseUrl}${currentPath}`;
    const ogImage = options?.ogImage || `${baseUrl}/drspeptides_social_hero.png`;
    const ogType = options?.ogType || 'website';
    
    // Helper to update or create meta tag
    const updateMetaTag = (attr: string, attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    // Primary meta tags
    updateMetaTag('name', 'description', finalDescription);
    updateMetaTag('name', 'keywords', finalKeywords);
    
    // Robots meta tag
    if (options?.noIndex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: finalDescription },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Peptide Education Hub' },
      { property: 'og:locale', content: 'en_US' },
    ];
    
    ogTags.forEach(({ property, content }) => {
      updateMetaTag('property', property, content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: finalDescription },
      { name: 'twitter:image', content: ogImage },
    ];
    
    twitterTags.forEach(({ name, content }) => {
      updateMetaTag('name', name, content);
    });
    
    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    
    // Add schema markup if provided
    if (options?.schema) {
      // Remove existing page-specific schemas
      const existingSchemas = document.querySelectorAll('script[data-page-schema="true"]');
      existingSchemas.forEach(el => el.remove());
      
      const schemas = Array.isArray(options.schema) ? options.schema : [options.schema];
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-schema', 'true');
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
    
    // Cleanup: Reset to defaults when component unmounts
    return () => {
      document.title = "Peptide Education Hub - Evidence-Based Peptide Therapy Education";
      
      // Remove page-specific schemas
      const pageSchemas = document.querySelectorAll('script[data-page-schema="true"]');
      pageSchemas.forEach(el => el.remove());
    };
  }, [title, description, keywords, suffix, options?.canonicalPath, options?.ogImage, options?.ogType, options?.schema, options?.noIndex]);
}

/**
 * Generate schema markup for a peptide page
 */
export function generatePeptideSchema(peptide: {
  name: string;
  alternateName?: string[];
  description: string;
  path: string;
  fdaStatus?: string;
  category?: string;
}) {
  const baseUrl = 'https://pepedhub.com';
  
  return [
    // Drug schema
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
    // Breadcrumb schema
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

/**
 * Generate schema markup for a tool page
 */
export function generateToolSchema(tool: {
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

// Legacy overload for backward compatibility
export function usePageTitleLegacy(
  title: string, 
  description?: string,
  suffix: string = "| Peptide Education Hub"
) {
  usePageTitle(title, { description, suffix });
}
