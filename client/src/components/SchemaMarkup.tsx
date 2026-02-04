import { useEffect } from 'react';

// Organization Schema for the entire site
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Peptide Education Hub",
  "alternateName": ["PepedHub", "DrsPeptides Education", "Peptide Therapy Hub"],
  "url": "https://pepedhub.com",
  "logo": "https://pepedhub.com/drspeptides_social_hero.png",
  "description": "Comprehensive educational resource for healthcare providers practicing peptide therapy. Evidence-based protocols, clinical guides, and quality standards.",
  "foundingDate": "2024",
  "medicalSpecialty": [
    "Regenerative Medicine",
    "Anti-Aging Medicine",
    "Functional Medicine",
    "Sports Medicine",
    "Endocrinology"
  ],
  "sameAs": [
    "https://drspeptides.com",
    "https://peptideprotocols.ai"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@peptideeducationhub.com",
    "availableLanguage": "English"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
};

// Website Schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Peptide Education Hub",
  "alternateName": "PepedHub",
  "url": "https://pepedhub.com",
  "description": "Evidence-based peptide therapy education for healthcare providers",
  "publisher": {
    "@type": "Organization",
    "name": "Peptide Education Hub"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pepedhub.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Interface for peptide schema
interface PeptideSchemaProps {
  name: string;
  alternateName?: string[];
  description: string;
  url: string;
  fdaStatus?: 'FDA Approved' | 'Investigational' | 'Research Only';
  medicalSpecialty?: string[];
  administrationRoute?: string;
  dosageForm?: string;
}

// Generate Drug/Substance schema for peptides
export function generatePeptideSchema(props: PeptideSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Drug",
    "name": props.name,
    "alternateName": props.alternateName || [],
    "description": props.description,
    "url": props.url,
    "legalStatus": props.fdaStatus === 'FDA Approved' 
      ? "https://schema.org/PrescriptionOnly" 
      : "https://schema.org/UnregisteredDrug",
    "administrationRoute": props.administrationRoute || "Subcutaneous injection",
    "dosageForm": props.dosageForm || "Injectable solution",
    "relevantSpecialty": props.medicalSpecialty?.map(specialty => ({
      "@type": "MedicalSpecialty",
      "name": specialty
    })) || [],
    "isPartOf": {
      "@type": "MedicalWebPage",
      "name": "Peptide Education Hub",
      "url": "https://pepedhub.com"
    }
  };
}

// Interface for article schema
interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}

// Generate Article schema for blog posts
export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": props.headline,
    "description": props.description,
    "url": props.url,
    "image": props.image || "https://pepedhub.com/drspeptides_social_hero.png",
    "datePublished": props.datePublished,
    "dateModified": props.dateModified || props.datePublished,
    "author": {
      "@type": "Organization",
      "name": props.author || "Peptide Education Hub Medical Team",
      "url": "https://pepedhub.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Peptide Education Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pepedhub.com/drspeptides_social_hero.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": props.url
    },
    "keywords": props.keywords?.join(", ") || "peptide therapy, medical education",
    "about": {
      "@type": "MedicalTherapy",
      "name": "Peptide Therapy"
    }
  };
}

// Interface for FAQ schema
interface FAQItem {
  question: string;
  answer: string;
}

// Generate FAQ schema
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Interface for HowTo schema
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
  image?: string;
}

// Generate HowTo schema for guides
export function generateHowToSchema(props: HowToSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": props.name,
    "description": props.description,
    "totalTime": props.totalTime,
    "image": props.image || "https://pepedhub.com/drspeptides_social_hero.png",
    "step": props.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };
}

// Interface for breadcrumb schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Generate MedicalWebPage schema
export function generateMedicalWebPageSchema(props: {
  name: string;
  description: string;
  url: string;
  specialty?: string;
  lastReviewed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "specialty": props.specialty ? {
      "@type": "MedicalSpecialty",
      "name": props.specialty
    } : undefined,
    "lastReviewed": props.lastReviewed,
    "reviewedBy": {
      "@type": "Organization",
      "name": "Peptide Education Hub Medical Team"
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Peptide Education Hub",
      "url": "https://pepedhub.com"
    }
  };
}

// Component to inject schema into page
interface SchemaMarkupProps {
  schema: object | object[];
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((s, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `schema-markup-${index}`;
      script.text = JSON.stringify(s);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    return () => {
      scriptElements.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [schema]);

  return null;
}

export default SchemaMarkup;
