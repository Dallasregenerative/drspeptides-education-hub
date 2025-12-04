import { useEffect } from 'react';

/**
 * Custom hook to set the page title and meta description dynamically
 * @param title - The page title to set
 * @param description - Optional meta description for SEO
 * @param suffix - Optional suffix (defaults to "| Peptide Education Hub")
 */
export function usePageTitle(
  title: string, 
  options?: { description?: string; suffix?: string }
) {
  const description = options?.description;
  const suffix = options?.suffix ?? "| Peptide Education Hub";
  useEffect(() => {
    // Set page title
    const fullTitle = suffix ? `${title} ${suffix}` : title;
    document.title = fullTitle;
    
    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      
      metaDescription.setAttribute('content', description);
      
      // Set Open Graph tags
      const ogTags = [
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:image', content: `${window.location.origin}/drspeptides_social_hero.png` },
        { property: 'og:site_name', content: 'Peptide Education Hub' },
      ];
      
      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });
      
      // Set Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: fullTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${window.location.origin}/drspeptides_social_hero.png` },
      ];
      
      twitterTags.forEach(({ name, content }) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });
      
      // Set canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.href);
    }
    
    // Cleanup: Reset to defaults when component unmounts
    return () => {
      document.title = "Peptide Education Hub";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Evidence-based peptide education for healthcare providers');
      }
    };
  }, [title, description, suffix]);
}

// Legacy overload for backward compatibility
export function usePageTitleLegacy(
  title: string, 
  description?: string,
  suffix: string = "| Peptide Education Hub"
) {
  usePageTitle(title, { description, suffix });
}
