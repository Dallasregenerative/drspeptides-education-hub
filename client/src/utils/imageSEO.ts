/**
 * Image SEO Optimization Utilities
 * Provides optimized alt text and image attributes for better SEO
 */

// Optimized alt text for all site images
export const imageAltText: Record<string, string> = {
  // Logo and branding
  'drspeptides_logo.png': 'Peptide Education Hub - Evidence-Based Peptide Therapy Education for Healthcare Providers',
  'drspeptides_social_hero.png': 'Peptide Education Hub - Comprehensive Peptide Therapy Training and Resources',
  
  // Infographics
  'drspeptides_infographic_bpc157.png': 'BPC-157 Benefits Infographic - Tissue Repair, Gut Healing, and Anti-Inflammatory Properties',
  'drspeptides_comparison_chart.png': 'Peptide Category Comparison Chart - Weight Loss, Healing, Cognitive, and Longevity Peptides',
  
  // Peptide-specific images
  'bpc157_mechanism.png': 'BPC-157 Mechanism of Action - How Body Protection Compound Works for Tissue Repair',
  'semaglutide_weight_loss.png': 'Semaglutide Weight Loss Results - GLP-1 Agonist Clinical Outcomes',
  'tirzepatide_comparison.png': 'Tirzepatide vs Semaglutide Comparison - Dual vs Single Agonist Weight Loss',
  'tb500_healing.png': 'TB-500 Thymosin Beta-4 Healing Properties - Wound Repair and Recovery',
  'ghk_cu_skin.png': 'GHK-Cu Copper Peptide Skin Benefits - Anti-Aging and Regeneration',
  
  // Tool screenshots
  'dosage_calculator.png': 'Peptide Dosage Calculator Tool - Calculate Accurate Peptide Doses',
  'reconstitution_calculator.png': 'Peptide Reconstitution Calculator - How to Mix Peptides Correctly',
  'interaction_checker.png': 'Peptide Drug Interaction Checker - Safety Screening Tool',
  
  // Category images
  'weight_loss_peptides.png': 'Weight Loss Peptides - Semaglutide, Tirzepatide, Retatrutide, and AOD-9604',
  'healing_peptides.png': 'Healing and Regenerative Peptides - BPC-157, TB-500, and GHK-Cu',
  'cognitive_peptides.png': 'Cognitive Enhancement Peptides - Semax, Selank, and Dihexa',
  'longevity_peptides.png': 'Longevity and Anti-Aging Peptides - Epithalon, NAD+, and MOTS-c',
  'growth_hormone_peptides.png': 'Growth Hormone Peptides - CJC-1295, Ipamorelin, and Sermorelin',
  'immune_peptides.png': 'Immune Support Peptides - Thymosin Alpha-1, LL-37, and Glutathione',
  
  // Trust badges
  'hipaa_compliant.png': 'HIPAA Compliant - Patient Privacy Protected',
  'evidence_based.png': 'Evidence-Based Medicine - Clinical Research Supported',
  'cgmp_certified.png': 'cGMP Certified - Quality Manufacturing Standards',
};

// Generate optimized image props
export function getImageProps(imageName: string, additionalAlt?: string) {
  const baseAlt = imageAltText[imageName] || imageName.replace(/[_-]/g, ' ').replace(/\.\w+$/, '');
  
  return {
    alt: additionalAlt ? `${baseAlt} - ${additionalAlt}` : baseAlt,
    loading: 'lazy' as const,
    decoding: 'async' as const,
  };
}

// Generate image schema for structured data
export function generateImageSchema(imageName: string, pageUrl: string) {
  const alt = imageAltText[imageName] || imageName;
  
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": `https://pepedhub.com/${imageName}`,
    "name": alt,
    "description": alt,
    "isPartOf": {
      "@type": "WebPage",
      "url": pageUrl
    }
  };
}

// SEO-optimized image component props generator
export function getSEOImageProps(
  src: string,
  alt: string,
  options?: {
    width?: number;
    height?: number;
    priority?: boolean;
  }
) {
  return {
    src,
    alt,
    loading: options?.priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    width: options?.width,
    height: options?.height,
  };
}

// Image filename to SEO-friendly alt text converter
export function generateAltFromFilename(filename: string): string {
  return filename
    .replace(/\.\w+$/, '') // Remove extension
    .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
    .replace(/\b\w/g, c => c.toUpperCase()) // Capitalize first letter of each word
    .trim();
}

export default {
  imageAltText,
  getImageProps,
  generateImageSchema,
  getSEOImageProps,
  generateAltFromFilename
};
