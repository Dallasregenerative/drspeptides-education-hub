// Comprehensive FAQ Schema for SEO - Google Rich Snippets
// This generates FAQPage schema markup for featured snippets

export interface FAQItem {
  question: string;
  answer: string;
}

export const gettingStartedFAQs: FAQItem[] = [
  {
    question: "How do I start offering peptide therapy as a physician?",
    answer: "Start by completing a peptide therapy certification program. Then: (1) Review FDA regulations and your state's prescribing laws, (2) Establish a relationship with a reputable 503B compounding pharmacy, (3) Implement informed consent processes, (4) Start with well-studied peptides like BPC-157 or CJC-1295/Ipamorelin, (5) Join professional communities for ongoing education."
  },
  {
    question: "Do I need special training or certification to prescribe peptides?",
    answer: "There is no legal requirement for special certification to prescribe compounded peptides as they fall under your general prescribing authority. However, specialized training is highly recommended for patient safety, efficacy, and liability protection. Organizations like A4M, SSRP, and AMMG offer peptide therapy certification programs."
  },
  {
    question: "What equipment do I need to start offering peptide therapy?",
    answer: "Minimal equipment needed includes: (1) Refrigerator for peptide storage at 2-8°C, (2) Sharps disposal containers, (3) Patient education materials, (4) Informed consent forms, (5) EMR system for documentation. You do not need to compound peptides yourself - order from 503B facilities."
  },
  {
    question: "Which peptides should I start with as a beginner?",
    answer: "Best peptides for beginners include: (1) BPC-157 - well-tolerated with clear benefits for healing, (2) CJC-1295/Ipamorelin - safe GH secretagogue combination, (3) Semaglutide/Tirzepatide - FDA-approved with strong evidence base. Avoid Melanotan-II, PT-141, or experimental peptides until you have more experience."
  },
  {
    question: "How much can I charge for peptide therapy?",
    answer: "Pricing varies by region and peptide. Typical ranges: Semaglutide $300-600/month, BPC-157 $200-400/month, CJC-1295/Ipamorelin $300-500/month, Initial consultation $150-300, Follow-up visits $75-150. Most peptide therapy is cash-pay, though some insurance covers FDA-approved peptides."
  }
];

export const regulatoryFAQs: FAQItem[] = [
  {
    question: "Are peptides FDA-approved?",
    answer: "Some peptides are FDA-approved for specific indications (e.g., semaglutide for diabetes/obesity, sermorelin for growth hormone deficiency). However, most peptides used in wellness/anti-aging are not FDA-approved and are prescribed off-label as compounded medications. This is legal under the Federal Food, Drug, and Cosmetic Act sections 503A and 503B, but requires proper informed consent."
  },
  {
    question: "What is the difference between 503A and 503B compounding?",
    answer: "503A refers to traditional compounding pharmacies that compound patient-specific prescriptions after receiving a prescription for an individual patient, with lower regulatory oversight. 503B refers to outsourcing facilities that can compound in larger batches without patient-specific prescriptions, with higher regulatory standards (cGMP) and FDA inspection. 503B is generally preferred for peptides due to better quality control."
  },
  {
    question: "Can I prescribe peptides across state lines via telemedicine?",
    answer: "It depends on state law. Generally: (1) You must be licensed in the state where the patient is located, (2) Some states require an in-person exam before prescribing, (3) Some states prohibit telemedicine prescribing of certain medications, (4) Check your state medical board's telemedicine regulations. Many providers use multi-state licenses through the Interstate Medical Licensure Compact."
  },
  {
    question: "What are Category 2 peptides and why do they matter?",
    answer: "Category 2 peptides are bulk drug substances that FDA has determined present significant safety risks when used in compounding. As of 2026, 30+ peptides are on this list. 503B facilities can still compound them with restrictions, but 503A pharmacies generally cannot. Examples include Sermorelin, CJC-1295, BPC-157, and TB-500. This affects sourcing and prescribing."
  },
  {
    question: "Do I need a DEA license to prescribe peptides?",
    answer: "No. Peptides are not controlled substances and do not require a DEA license. However, if you're prescribing other medications that are controlled (e.g., testosterone, HCG), you will need a DEA license for those."
  }
];

export const clinicalFAQs: FAQItem[] = [
  {
    question: "How do I dose peptides? Are there standard protocols?",
    answer: "Dosing varies by peptide and indication. General principles: (1) Start low, go slow especially with GLP-1s, (2) Use evidence-based protocols when available, (3) Adjust based on patient response and tolerability, (4) Consider patient weight, age, and comorbidities. Example: BPC-157 typically 250-500 mcg daily, CJC-1295 100-200 mcg 2-3x/week."
  },
  {
    question: "How long should patients stay on peptide therapy?",
    answer: "Duration depends on the peptide and goal: (1) Acute healing with BPC-157 or TB-500: 4-12 weeks, (2) Weight loss with GLP-1s: 6-12+ months then maintenance, (3) Growth hormone optimization: 3-6 month cycles with breaks, (4) Longevity peptides like Epithalon: 10-20 day cycles 2-4x/year. Avoid indefinite use without periodic reassessment."
  },
  {
    question: "What labs should I order before starting peptide therapy?",
    answer: "Baseline labs vary by peptide: (1) All patients: CBC, CMP, lipid panel, (2) GLP-1s: HbA1c, fasting glucose, thyroid panel, (3) GH peptides: IGF-1, fasting glucose, (4) Thymosin Alpha-1: CBC with differential. Consider hormone panels and inflammatory markers. Repeat labs at 3 months, then every 6 months."
  },
  {
    question: "Can patients combine multiple peptides?",
    answer: "Yes, but carefully. Safe combinations include: (1) BPC-157 + TB-500 for synergistic healing, (2) CJC-1295 + Ipamorelin for complementary GH release, (3) Semax + Selank for cognitive and anxiolytic effects. Avoid multiple GLP-1s together or combining peptides with similar mechanisms without medical supervision. Start one peptide at a time to assess individual response."
  },
  {
    question: "What are the most common side effects of peptide therapy?",
    answer: "By peptide: (1) GLP-1s: Nausea (most common), constipation, fatigue, (2) BPC-157/TB-500: Injection site reactions, rare headaches, (3) GH peptides: Water retention, joint pain, carpal tunnel, (4) Cognitive peptides: Headaches, vivid dreams. Most side effects are mild and resolve with dose adjustment or time."
  }
];

export const safetyFAQs: FAQItem[] = [
  {
    question: "How do I verify peptide quality from compounding pharmacies?",
    answer: "Verify quality by: (1) Using only FDA-registered 503B facilities, (2) Requesting Certificates of Analysis (COA) for each batch, (3) Checking for third-party testing, (4) Verifying cGMP compliance, (5) Reviewing FDA inspection reports. Reputable pharmacies will readily provide this documentation."
  },
  {
    question: "What are the contraindications for peptide therapy?",
    answer: "Common contraindications include: (1) Active cancer or history of certain cancers (for GH peptides), (2) Pregnancy and breastfeeding, (3) Severe renal or hepatic impairment, (4) Personal or family history of medullary thyroid carcinoma (for GLP-1s), (5) Multiple endocrine neoplasia syndrome type 2. Always conduct thorough patient screening."
  },
  {
    question: "How should peptides be stored?",
    answer: "Proper storage: (1) Lyophilized (powder) peptides: refrigerate at 2-8°C, stable for 1-2 years, (2) Reconstituted peptides: refrigerate at 2-8°C, use within 4-8 weeks, (3) Never freeze reconstituted peptides, (4) Protect from light, (5) Use bacteriostatic water for reconstitution to extend shelf life."
  }
];

// Generate FAQPage schema for Google
export function generateFAQPageSchema(faqs: FAQItem[]): object {
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

// Get all FAQs combined
export function getAllFAQs(): FAQItem[] {
  return [
    ...gettingStartedFAQs,
    ...regulatoryFAQs,
    ...clinicalFAQs,
    ...safetyFAQs
  ];
}

// Generate complete FAQ schema for the FAQ page
export function getCompleteFAQSchema(): object {
  return generateFAQPageSchema(getAllFAQs());
}
