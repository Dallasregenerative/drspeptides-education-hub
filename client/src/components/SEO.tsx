import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

/**
 * SEO Component for comprehensive meta tags
 * Includes Open Graph, Twitter Cards, and standard meta tags
 */
export function SEO({
  title,
  description,
  image = '/drspeptides_social_hero.png',
  url,
  type = 'website',
  keywords,
}: SEOProps) {
  const fullTitle = title.includes('DrsPeptides') ? title : `${title} | DrsPeptides`;
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      <meta property="og:site_name" content="Peptide Education Hub" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      {siteUrl && <link rel="canonical" href={siteUrl} />}
    </Helmet>
  );
}
