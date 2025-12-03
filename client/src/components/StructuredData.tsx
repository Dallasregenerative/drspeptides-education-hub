import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

/**
 * Organization Schema for homepage
 */
export function OrganizationSchema({
  name = "DrsPeptides Education Hub",
  url = "https://pepedhub.com",
  logo = "/drspeptides_social_hero.png",
  description = "Evidence-based peptide education for healthcare providers"
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    "sameAs": [
      // Add social media profiles if available
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface MedicalWebPageSchemaProps {
  name: string;
  description: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  medicalAudience?: string;
}

/**
 * MedicalWebPage Schema for peptide and medical content pages
 */
export function MedicalWebPageSchema({
  name,
  description,
  url,
  datePublished,
  dateModified,
  medicalAudience = "Physician"
}: MedicalWebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": name,
    "description": description,
    "url": url || (typeof window !== 'undefined' ? window.location.href : ''),
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": medicalAudience
    },
    "about": {
      "@type": "MedicalTherapy",
      "name": "Peptide Therapy"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  url?: string;
}

/**
 * Article Schema for blog posts
 */
export function ArticleSchema({
  headline,
  description,
  author = "DrsPeptides Editorial Team",
  datePublished,
  dateModified,
  image = "/drspeptides_social_hero.png",
  url
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DrsPeptides",
      "logo": {
        "@type": "ImageObject",
        "url": "/drspeptides_social_hero.png"
      }
    },
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "image": image,
    "url": url || (typeof window !== 'undefined' ? window.location.href : '')
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

/**
 * Breadcrumb Schema for navigation
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * FAQ Schema for FAQ pages
 */
export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  searchUrl?: string;
}

/**
 * WebSite Schema with search action
 */
export function WebSiteSchema({
  name = "DrsPeptides Education Hub",
  url = "https://pepedhub.com",
  description = "Evidence-based peptide education for healthcare providers",
  searchUrl
}: WebSiteSchemaProps) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description
  };

  if (searchUrl) {
    schema.potentialAction = {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${searchUrl}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
