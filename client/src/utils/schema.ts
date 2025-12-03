// Medical Schema Markup Utilities for SEO
// Implements MedicalWebPage, ScholarlyArticle, FAQ, and BreadcrumbList schemas

export interface PeptidePageSchema {
  name: string;
  description: string;
  fdaApproved: boolean;
  mechanism: string;
  dosing: string;
  citations: string[];
}

export function generateMedicalWebPageSchema(peptide: PeptidePageSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": peptide.name,
    "description": peptide.description,
    "about": {
      "@type": "MedicalTherapy",
      "name": peptide.name,
      "description": peptide.mechanism,
      "recognizingAuthority": peptide.fdaApproved ? {
        "@type": "Organization",
        "name": "FDA"
      } : undefined
    },
    "lastReviewed": new Date().toISOString().split('T')[0],
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Regenerative Medicine"
    }
  };
}

export function generateScholarlyArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  citations: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "DrsPeptides Medical Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DrsPeptides.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drspeptides.com/logo.png"
      }
    },
    "citation": citations.map(url => ({
      "@type": "ScholarlyArticle",
      "url": url
    }))
  };
}

export function generateFAQSchema(faqs: Array<{question: string; answer: string}>) {
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

export function generateBreadcrumbSchema(items: Array<{name: string; url: string}>) {
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

export function generateMedicalConditionSchema(
  name: string,
  description: string,
  possibleTreatments: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": name,
    "description": description,
    "possibleTreatment": possibleTreatments.map(treatment => ({
      "@type": "MedicalTherapy",
      "name": treatment
    }))
  };
}

// Helper function to inject schema into page head
export function injectSchema(schema: object) {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
