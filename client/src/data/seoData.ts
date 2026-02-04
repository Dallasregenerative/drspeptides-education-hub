// Comprehensive SEO data for all pages

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogType?: 'website' | 'article' | 'product';
}

// Homepage SEO
export const homepageSEO: PageSEO = {
  title: "Peptide Education Hub - Evidence-Based Peptide Therapy Education for Healthcare Providers",
  description: "Comprehensive educational resource for healthcare providers practicing peptide therapy. Clinical protocols, quality standards, dosing calculators, and evidence-based guides for BPC-157, semaglutide, tirzepatide, and 60+ therapeutic peptides.",
  keywords: "peptide therapy, peptide education, BPC-157, semaglutide, tirzepatide, GLP-1 agonists, peptide protocols, medical peptides, peptide dosing, regenerative medicine, anti-aging peptides, peptide therapy certification, healthcare provider education"
};

// Individual peptide SEO data
export const peptideSEO: Record<string, PageSEO> = {
  'bpc-157': {
    title: "BPC-157 Guide - Dosing, Benefits, Research & Clinical Protocols",
    description: "Complete BPC-157 guide for healthcare providers. Evidence-based dosing protocols, mechanism of action, clinical applications for tissue repair, gut healing, and injury recovery. Includes reconstitution calculator and patient handouts.",
    keywords: "BPC-157, body protection compound, BPC 157 dosage, BPC-157 benefits, BPC-157 healing, peptide therapy, tissue repair peptide, gut healing peptide, injury recovery, regenerative peptide"
  },
  'tb-500': {
    title: "TB-500 (Thymosin Beta-4) - Clinical Guide, Dosing & Research",
    description: "Comprehensive TB-500 guide for medical professionals. Thymosin Beta-4 dosing protocols, wound healing applications, anti-inflammatory properties, and clinical research. Evidence-based protocols for healthcare providers.",
    keywords: "TB-500, thymosin beta-4, TB500, wound healing peptide, tissue repair, anti-inflammatory peptide, muscle recovery, TB-500 dosage, regenerative medicine"
  },
  'semaglutide': {
    title: "Semaglutide Guide - GLP-1 Dosing, Weight Loss Protocols & Clinical Evidence",
    description: "Evidence-based semaglutide guide for healthcare providers. FDA-approved GLP-1 agonist dosing protocols, weight management strategies, titration schedules, and clinical outcomes data. Ozempic and Wegovy protocols.",
    keywords: "semaglutide, GLP-1 agonist, Ozempic, Wegovy, weight loss peptide, semaglutide dosing, GLP-1 therapy, diabetes treatment, obesity medication, semaglutide protocol"
  },
  'tirzepatide': {
    title: "Tirzepatide Guide - GLP-1/GIP Dual Agonist Dosing & Protocols",
    description: "Comprehensive tirzepatide guide for medical professionals. Dual GLP-1/GIP agonist protocols, weight loss outcomes, titration schedules, and comparison with semaglutide. Mounjaro and Zepbound clinical guidance.",
    keywords: "tirzepatide, Mounjaro, Zepbound, GLP-1 GIP agonist, dual incretin, weight loss medication, tirzepatide dosing, obesity treatment, diabetes medication"
  },
  'cjc-1295': {
    title: "CJC-1295 Guide - Growth Hormone Releasing Hormone Analog",
    description: "Complete CJC-1295 clinical guide. GHRH analog dosing protocols, growth hormone optimization, anti-aging applications, and combination therapy with ipamorelin. Evidence-based protocols for practitioners.",
    keywords: "CJC-1295, GHRH analog, growth hormone releasing hormone, CJC-1295 DAC, growth hormone therapy, anti-aging peptide, CJC-1295 dosing, hormone optimization"
  },
  'ipamorelin': {
    title: "Ipamorelin Guide - Selective Growth Hormone Secretagogue",
    description: "Evidence-based ipamorelin guide for healthcare providers. Selective GHRP dosing protocols, growth hormone stimulation, body composition benefits, and combination therapy protocols.",
    keywords: "ipamorelin, growth hormone secretagogue, GHRP, ipamorelin dosing, GH peptide, anti-aging, body composition, muscle growth, fat loss peptide"
  },
  'semax': {
    title: "Semax Guide - Nootropic Peptide for Cognitive Enhancement",
    description: "Comprehensive semax clinical guide. Nootropic peptide dosing, cognitive enhancement protocols, neuroprotection applications, and BDNF modulation. Evidence-based protocols for practitioners.",
    keywords: "semax, nootropic peptide, cognitive enhancement, brain peptide, BDNF, neuroprotection, semax dosing, mental clarity, focus peptide"
  },
  'selank': {
    title: "Selank Guide - Anxiolytic Peptide for Stress & Anxiety",
    description: "Complete selank guide for healthcare providers. Anxiolytic peptide protocols, stress reduction, immune modulation, and cognitive benefits. Evidence-based dosing and clinical applications.",
    keywords: "selank, anxiolytic peptide, anti-anxiety peptide, stress relief, immune peptide, selank dosing, anxiety treatment, nootropic"
  },
  'ghk-cu': {
    title: "GHK-Cu Guide - Copper Peptide for Skin & Tissue Regeneration",
    description: "Evidence-based GHK-Cu guide. Copper peptide protocols for wound healing, anti-aging, hair restoration, and tissue regeneration. Clinical applications and formulation guidance.",
    keywords: "GHK-Cu, copper peptide, skin regeneration, wound healing, anti-aging peptide, hair growth, collagen synthesis, tissue repair"
  },
  'thymosin-alpha-1': {
    title: "Thymosin Alpha-1 Guide - Immune Modulation & Clinical Protocols",
    description: "Comprehensive thymosin alpha-1 guide for medical professionals. Immune modulation protocols, viral infection support, cancer adjunct therapy, and vaccine enhancement applications.",
    keywords: "thymosin alpha-1, immune peptide, Ta1, immune modulation, viral infection, cancer support, vaccine enhancement, thymalfasin"
  },
  'epithalon': {
    title: "Epithalon Guide - Telomerase Activation & Longevity Peptide",
    description: "Evidence-based epithalon guide. Telomerase activation protocols, anti-aging applications, pineal gland support, and longevity research. Clinical protocols for practitioners.",
    keywords: "epithalon, epitalon, telomerase activator, anti-aging peptide, longevity, telomere extension, pineal peptide, Khavinson peptide"
  },
  'nad': {
    title: "NAD+ Guide - Cellular Energy & Anti-Aging Protocols",
    description: "Complete NAD+ therapy guide for healthcare providers. Nicotinamide adenine dinucleotide protocols, IV therapy, anti-aging applications, and cellular energy optimization.",
    keywords: "NAD+, nicotinamide adenine dinucleotide, NAD therapy, anti-aging, cellular energy, mitochondrial function, longevity, NAD IV"
  },
  'mots-c': {
    title: "MOTS-c Guide - Mitochondrial Peptide for Metabolic Health",
    description: "Evidence-based MOTS-c guide. Mitochondrial-derived peptide protocols, metabolic optimization, exercise mimetic effects, and longevity applications for healthcare providers.",
    keywords: "MOTS-c, mitochondrial peptide, metabolic peptide, exercise mimetic, longevity, insulin sensitivity, mitochondrial function"
  },
  'pt-141': {
    title: "PT-141 (Bremelanotide) Guide - Sexual Dysfunction Treatment",
    description: "Comprehensive PT-141 guide for medical professionals. FDA-approved bremelanotide protocols for sexual dysfunction, dosing guidelines, and clinical applications for men and women.",
    keywords: "PT-141, bremelanotide, Vyleesi, sexual dysfunction, libido peptide, erectile dysfunction, female sexual dysfunction, melanocortin"
  },
  'melanotan-2': {
    title: "Melanotan II Guide - Tanning Peptide Clinical Information",
    description: "Evidence-based Melanotan II guide for healthcare providers. Melanocortin agonist protocols, photoprotection applications, and safety considerations for clinical practice.",
    keywords: "melanotan 2, MT2, tanning peptide, melanocortin, skin pigmentation, photoprotection, melanotan dosing"
  },
  'aod-9604': {
    title: "AOD-9604 Guide - Fat Loss Peptide Protocols",
    description: "Complete AOD-9604 clinical guide. Growth hormone fragment protocols for fat metabolism, weight management applications, and evidence-based dosing for practitioners.",
    keywords: "AOD-9604, fat loss peptide, growth hormone fragment, weight loss, lipolysis, obesity treatment, metabolic peptide"
  },
  'tesamorelin': {
    title: "Tesamorelin Guide - FDA-Approved GHRH Analog",
    description: "Evidence-based tesamorelin guide. FDA-approved GHRH analog for visceral adiposity, lipodystrophy treatment, and growth hormone optimization protocols.",
    keywords: "tesamorelin, Egrifta, GHRH analog, visceral fat, lipodystrophy, growth hormone, FDA approved peptide"
  },
  'sermorelin': {
    title: "Sermorelin Guide - Growth Hormone Releasing Hormone",
    description: "Comprehensive sermorelin guide for healthcare providers. GHRH protocols for growth hormone deficiency, anti-aging applications, and clinical dosing guidelines.",
    keywords: "sermorelin, GHRH, growth hormone releasing hormone, GH therapy, anti-aging, hormone optimization, sermorelin dosing"
  },
  'retatrutide': {
    title: "Retatrutide Guide - Triple Agonist GLP-1/GIP/Glucagon",
    description: "Evidence-based retatrutide guide. Triple incretin agonist protocols, weight loss applications, and emerging clinical data for healthcare providers.",
    keywords: "retatrutide, triple agonist, GLP-1 GIP glucagon, weight loss, obesity treatment, Eli Lilly, incretin therapy"
  },
  'dihexa': {
    title: "Dihexa Guide - Cognitive Enhancement Peptide",
    description: "Comprehensive dihexa guide for medical professionals. Nootropic peptide protocols, cognitive enhancement applications, and neuroprotection research.",
    keywords: "dihexa, nootropic peptide, cognitive enhancement, brain peptide, memory, neuroprotection, HGF mimetic"
  },
  'dsip': {
    title: "DSIP Guide - Delta Sleep Inducing Peptide",
    description: "Evidence-based DSIP guide. Sleep optimization protocols, stress reduction applications, and clinical dosing for healthcare providers.",
    keywords: "DSIP, delta sleep inducing peptide, sleep peptide, insomnia, stress relief, sleep optimization"
  },
  'll-37': {
    title: "LL-37 Guide - Antimicrobial Peptide Protocols",
    description: "Complete LL-37 clinical guide. Cathelicidin antimicrobial peptide protocols, immune support, and wound healing applications for practitioners.",
    keywords: "LL-37, cathelicidin, antimicrobial peptide, immune peptide, wound healing, infection support"
  },
  'kpv': {
    title: "KPV Guide - Anti-Inflammatory Peptide",
    description: "Evidence-based KPV guide for healthcare providers. Alpha-MSH fragment protocols for inflammation, gut health, and skin conditions.",
    keywords: "KPV, anti-inflammatory peptide, alpha-MSH, gut health, IBD, skin inflammation, melanocortin"
  },
  'glutathione': {
    title: "Glutathione Guide - Master Antioxidant Protocols",
    description: "Comprehensive glutathione guide. Master antioxidant protocols, detoxification support, and IV therapy applications for clinical practice.",
    keywords: "glutathione, GSH, antioxidant, detoxification, liver support, glutathione IV, oxidative stress"
  }
};

// Tool pages SEO
export const toolsSEO: Record<string, PageSEO> = {
  'dosage-calculator': {
    title: "Peptide Dosage Calculator - Reconstitution & Dosing Tool",
    description: "Free peptide dosage calculator for healthcare providers. Calculate reconstitution volumes, injection doses, and treatment schedules for BPC-157, semaglutide, and all therapeutic peptides.",
    keywords: "peptide calculator, dosage calculator, reconstitution calculator, peptide dosing, injection calculator, BPC-157 dose, semaglutide calculator"
  },
  'interaction-checker': {
    title: "Peptide Drug Interaction Checker - Safety Database",
    description: "Comprehensive peptide drug interaction database for healthcare providers. Check interactions between peptides and medications, contraindications, and safety considerations.",
    keywords: "peptide interactions, drug interactions, peptide safety, contraindications, medication interactions, peptide database"
  },
  'comparison-tool': {
    title: "Peptide Comparison Tool - Compare 56+ Peptides Side-by-Side",
    description: "Compare therapeutic peptides side-by-side. Mechanism of action, dosing, efficacy, and clinical applications for BPC-157, TB-500, semaglutide, and 50+ peptides.",
    keywords: "peptide comparison, compare peptides, BPC-157 vs TB-500, semaglutide vs tirzepatide, peptide chart"
  },
  'protocol-builder': {
    title: "Peptide Protocol Builder - Custom Treatment Plans",
    description: "Build custom peptide therapy protocols. Combine peptides, set dosing schedules, and generate patient-ready treatment plans for clinical practice.",
    keywords: "peptide protocol, treatment plan, peptide stacking, combination therapy, protocol builder"
  },
  'progress-tracker': {
    title: "Patient Progress Tracker - Peptide Therapy Monitoring",
    description: "Track patient progress during peptide therapy. Monitor outcomes, biomarkers, and treatment response with visual dashboards and reports.",
    keywords: "progress tracker, patient monitoring, treatment outcomes, biomarker tracking, peptide results"
  },
  'practice-assessment': {
    title: "Practice Assessment Quiz - Find Your Ideal Peptides",
    description: "Take our practice assessment quiz to discover which peptides best fit your clinical practice. Personalized recommendations based on your specialty and patient population.",
    keywords: "peptide quiz, practice assessment, peptide recommendations, clinical peptides, specialty peptides"
  }
};

// Educational pages SEO
export const educationSEO: Record<string, PageSEO> = {
  'what-are-peptides': {
    title: "What Are Peptides? Complete Guide for Healthcare Providers",
    description: "Comprehensive guide to therapeutic peptides for healthcare providers. Learn peptide science, mechanisms of action, clinical applications, and how to integrate peptide therapy into your practice.",
    keywords: "what are peptides, peptide therapy, therapeutic peptides, peptide science, peptide medicine, amino acid chains"
  },
  'how-to-reconstitute-peptides': {
    title: "How to Reconstitute Peptides - Step-by-Step Guide",
    description: "Complete peptide reconstitution guide for healthcare providers. Step-by-step instructions, bacteriostatic water ratios, storage guidelines, and best practices for peptide preparation.",
    keywords: "reconstitute peptides, peptide reconstitution, bacteriostatic water, peptide preparation, lyophilized peptides, peptide mixing"
  },
  'how-to-inject-peptides': {
    title: "How to Inject Peptides - Subcutaneous Injection Guide",
    description: "Professional guide to peptide injection techniques. Subcutaneous injection protocols, site rotation, needle selection, and patient education materials for healthcare providers.",
    keywords: "inject peptides, peptide injection, subcutaneous injection, injection technique, peptide administration, injection sites"
  },
  'peptide-safety': {
    title: "Peptide Safety Guidelines - Clinical Best Practices",
    description: "Evidence-based peptide safety guidelines for healthcare providers. Contraindications, side effect management, monitoring protocols, and quality assurance standards.",
    keywords: "peptide safety, peptide side effects, contraindications, safety guidelines, peptide monitoring, adverse effects"
  },
  'stacking-guide': {
    title: "Peptide Stacking Guide - Combination Therapy Protocols",
    description: "Expert guide to peptide stacking and combination therapy. Synergistic peptide combinations, timing protocols, and evidence-based stacking strategies for optimal outcomes.",
    keywords: "peptide stacking, combination therapy, peptide synergy, stacking protocols, peptide combinations"
  }
};

// Blog/Research SEO
export const contentSEO: Record<string, PageSEO> = {
  'blog': {
    title: "Peptide Therapy Blog - Clinical Insights & Research Updates",
    description: "Latest peptide therapy insights for healthcare providers. Clinical guides, research updates, practice management tips, and evidence-based protocols from peptide therapy experts.",
    keywords: "peptide blog, peptide research, clinical insights, peptide news, medical education, peptide therapy updates",
    ogType: 'website'
  },
  'research': {
    title: "Peptide Research Database - Clinical Studies & Evidence",
    description: "Comprehensive peptide research database. Peer-reviewed studies, clinical trials, and evidence-based research on BPC-157, semaglutide, tirzepatide, and therapeutic peptides.",
    keywords: "peptide research, clinical studies, peptide evidence, peer-reviewed, clinical trials, peptide science",
    ogType: 'website'
  },
  'training': {
    title: "Peptide Therapy Training & Certification Programs 2026",
    description: "Find peptide therapy certification programs and training for healthcare providers. A4M, SSRP, and accredited courses for 2026. CME credits and hands-on workshops.",
    keywords: "peptide certification, peptide training, CME credits, A4M, peptide course, medical education, peptide workshop",
    ogType: 'website'
  },
  'video-library': {
    title: "Peptide Video Library - Reconstitution & Injection Tutorials",
    description: "Educational video library for peptide therapy. Reconstitution tutorials, injection technique videos, and clinical education for healthcare providers.",
    keywords: "peptide videos, reconstitution video, injection tutorial, peptide education, video library, peptide training",
    ogType: 'website'
  },
  'downloads': {
    title: "Downloadable Peptide Resources - Clinical Guides & Handouts",
    description: "Free downloadable peptide therapy resources for healthcare providers. Clinical guides, patient handouts, dosing charts, and protocol templates in PDF format.",
    keywords: "peptide downloads, clinical guides, patient handouts, PDF resources, peptide protocols, free downloads",
    ogType: 'website'
  }
};

// Get SEO data for any page
export function getPageSEO(pagePath: string): PageSEO {
  // Remove leading slash and get path segments
  const path = pagePath.replace(/^\//, '');
  const segments = path.split('/');

  // Check peptide pages
  if (segments[0] === 'peptides' && segments[1]) {
    return peptideSEO[segments[1]] || {
      title: `${segments[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Peptide Guide`,
      description: `Complete clinical guide for ${segments[1].replace(/-/g, ' ')}. Dosing protocols, mechanism of action, and evidence-based applications for healthcare providers.`,
      keywords: `${segments[1].replace(/-/g, ' ')}, peptide therapy, dosing, clinical guide, medical peptides`
    };
  }

  // Check tool pages
  if (segments[0] === 'tools' && segments[1]) {
    return toolsSEO[segments[1]] || {
      title: `${segments[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Peptide Tool`,
      description: `Professional peptide ${segments[1].replace(/-/g, ' ')} for healthcare providers.`,
      keywords: `peptide tool, ${segments[1].replace(/-/g, ' ')}, clinical tool`
    };
  }

  // Check education pages
  if (educationSEO[path]) {
    return educationSEO[path];
  }

  // Check content pages
  if (contentSEO[path]) {
    return contentSEO[path];
  }

  // Default homepage
  if (path === '' || path === '/') {
    return homepageSEO;
  }

  // Fallback
  return {
    title: `${path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Peptide Education Hub`,
    description: "Evidence-based peptide therapy education for healthcare providers. Clinical protocols, dosing guides, and quality standards.",
    keywords: "peptide therapy, peptide education, medical peptides, healthcare providers"
  };
}
