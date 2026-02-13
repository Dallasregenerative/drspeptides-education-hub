#!/usr/bin/env node
/**
 * Post-build script: Generates individual HTML files for every route
 * with correct meta tags, canonical URLs, and structured data baked in.
 * 
 * This ensures Google sees the right title/description/canonical for every page
 * regardless of whether edge functions are deployed.
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist', 'public');
const TEMPLATE = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');
const SITE_URL = 'https://pepedhub.com';

// All route meta data - extracted from edge function
const ROUTE_META = {
  "/": { title: "Peptide Education Hub - Evidence-Based Peptide Therapy Education for Healthcare Providers", desc: "Comprehensive educational resource for healthcare providers practicing peptide therapy. Clinical protocols, quality standards, dosing calculators, and evidence-based guides for BPC-157, semaglutide, tirzepatide, and 60+ therapeutic peptides.", type: "home" },
  "/tools": { title: "Professional Peptide Therapy Tools", desc: "Clinical tools for peptide therapy practitioners. Dosing calculators, interaction checkers, protocol builders, and cost estimators for 60+ therapeutic peptides.", type: "page" },
  "/tools/dosage-calculator": { title: "Peptide Dosage Calculator", desc: "Evidence-based peptide dosing calculator for healthcare providers. Calculate precise dosages for BPC-157, semaglutide, tirzepatide, and 60+ therapeutic peptides.", type: "tool" },
  "/tools/cost-calculator": { title: "Peptide Cost Calculator & Comparison Tool", desc: "Compare peptide therapy costs across 503A pharmacies, 503B outsourcing facilities, and research suppliers. Transparent pricing for 60+ therapeutic peptides.", type: "tool" },
  "/tools/interaction-checker": { title: "Peptide Drug Interaction Checker", desc: "Check peptide-drug interactions and contraindications. Evidence-based interaction database covering 60+ peptides with medications and medical conditions.", type: "tool" },
  "/tools/protocol-builder": { title: "Peptide Protocol Builder", desc: "Build customized peptide therapy protocols. Pre-built templates for anti-aging, weight loss, injury recovery, and more with dosing schedules and cycling guidelines.", type: "tool" },
  "/tools/progress-tracker": { title: "Peptide Therapy Progress Tracker", desc: "Track patient progress during peptide therapy. Monitor biomarkers, symptoms, and treatment outcomes with visual analytics and reporting.", type: "tool" },
  "/tools/practice-assessment": { title: "Peptide Practice Assessment Quiz", desc: "Evaluate your peptide therapy practice readiness. Comprehensive assessment covering clinical knowledge, protocols, and patient management.", type: "tool" },
  "/tools/reconstitution-calculator": { title: "Peptide Reconstitution Calculator", desc: "Calculate precise reconstitution volumes for lyophilized peptides. Step-by-step mixing guides with bacteriostatic water ratios for 35+ peptides.", type: "tool" },
  "/tools/enhanced-dosing-calculator": { title: "Enhanced Peptide Dosing Calculator", desc: "Advanced peptide dosing calculator with weight-based calculations, protocol phases, and cycling schedules for 45+ therapeutic peptides.", type: "tool" },
  "/tools/biomarker-tracker": { title: "Peptide Therapy Biomarker Tracker", desc: "Track and monitor biomarkers during peptide therapy. Visualize IGF-1, testosterone, inflammatory markers, and metabolic panels over time.", type: "tool" },
  "/tools/patient-handouts": { title: "Patient Education Handout Generator", desc: "Generate professional patient education handouts for peptide therapy. Customizable templates covering 10+ peptides with dosing, safety, and administration guides.", type: "tool" },
  "/comparison-tool": { title: "Peptide Comparison Tool", desc: "Compare peptides side-by-side. Detailed comparison of mechanisms, dosing, efficacy, safety profiles, and clinical applications for 60+ therapeutic peptides.", type: "tool" },
  "/tools/comparison-tool": { title: "Peptide Comparison Tool", desc: "Compare peptides side-by-side. Detailed comparison of mechanisms, dosing, efficacy, safety profiles, and clinical applications for 60+ therapeutic peptides.", type: "tool" },
  "/peptide-index": { title: "A-Z Peptide Index - Complete Peptide Database", desc: "Comprehensive A-Z index of 65+ therapeutic peptides. Detailed profiles with mechanisms of action, clinical applications, dosing protocols, and safety data.", type: "page" },
  "/blog": { title: "Peptide Therapy Blog - Latest Research & Clinical Updates", desc: "Stay current with peptide therapy research, clinical updates, and practice insights. Evidence-based articles for healthcare providers.", type: "page" },
  "/research": { title: "Peptide Research Studies & Clinical Evidence", desc: "Curated collection of peptide therapy research studies and clinical trials. Evidence-based resources for healthcare providers.", type: "page" },
  "/training": { title: "Peptide Therapy Training & Education", desc: "Professional peptide therapy training resources for healthcare providers. Clinical protocols, best practices, and continuing education.", type: "page" },
  "/blends": { title: "Peptide Blends & Proprietary Formulas", desc: "Evidence-based peptide combinations and proprietary formulations. 20 blend profiles across 9 categories for enhanced clinical outcomes.", type: "page" },
  "/about": { title: "About Peptide Education Hub", desc: "Learn about Peptide Education Hub by Dallas Regenerative LLC. Evidence-based peptide therapy education for healthcare providers.", type: "page" },
  "/contact": { title: "Contact Peptide Education Hub", desc: "Get in touch with Peptide Education Hub. Questions about peptide therapy education, sourcing, or clinical protocols.", type: "page" },
  "/privacy": { title: "Privacy Policy", desc: "Privacy policy for Peptide Education Hub. How we collect, use, and protect your information.", type: "page" },
  "/terms": { title: "Terms of Service", desc: "Terms of service for Peptide Education Hub. Usage terms, disclaimers, and legal information.", type: "page" },
  "/faq": { title: "Peptide Therapy FAQ", desc: "Frequently asked questions about peptide therapy. Expert answers on dosing, safety, sourcing, and clinical applications.", type: "page" },
  "/regulatory-guidance": { title: "Peptide Regulatory Guidance", desc: "Navigate peptide therapy regulations. FDA guidance, 503A/503B pharmacy rules, and compliance information for healthcare providers.", type: "page" },
  "/safety-guidelines": { title: "Peptide Safety Guidelines", desc: "Comprehensive safety guidelines for peptide therapy. Contraindications, side effects, monitoring protocols, and emergency procedures.", type: "page" },
  "/how-to-reconstitute-peptides": { title: "How to Reconstitute Peptides - Complete Guide", desc: "Step-by-step guide to reconstituting lyophilized peptides. Proper technique, bacteriostatic water ratios, storage, and handling for healthcare providers.", type: "page" },
  "/guides/how-to-reconstitute-peptides": { title: "How to Reconstitute Peptides - Complete Guide", desc: "Step-by-step guide to reconstituting lyophilized peptides. Proper technique, bacteriostatic water ratios, storage, and handling for healthcare providers.", type: "page" },
  "/peptides-vs-steroids": { title: "Peptides vs Steroids - Comprehensive Comparison", desc: "Detailed comparison of peptide therapy vs anabolic steroids. Mechanisms, safety profiles, clinical applications, and evidence-based analysis.", type: "page" },
  "/guides/peptides-vs-steroids": { title: "Peptides vs Steroids - Comprehensive Comparison", desc: "Detailed comparison of peptide therapy vs anabolic steroids. Mechanisms, safety profiles, clinical applications, and evidence-based analysis.", type: "page" },
  // Individual peptide pages
  "/peptides/bpc-157": { title: "BPC-157 - Body Protection Compound", desc: "Complete BPC-157 guide: mechanism of action, clinical dosing protocols (250-500mcg), wound healing, gut repair, and neuroprotective applications. Evidence-based resource for healthcare providers.", type: "peptide", category: "Regenerative" },
  "/peptides/semaglutide": { title: "Semaglutide - GLP-1 Receptor Agonist", desc: "Comprehensive semaglutide guide: weight loss protocols, dosing titration (0.25-2.4mg), cardiovascular benefits, and clinical management. For healthcare providers.", type: "peptide", category: "Weight Loss" },
  "/peptides/tirzepatide": { title: "Tirzepatide - Dual GIP/GLP-1 Agonist", desc: "Complete tirzepatide guide: dual incretin mechanism, weight loss dosing (2.5-15mg), glycemic control, and clinical protocols for healthcare providers.", type: "peptide", category: "Weight Loss" },
  "/peptides/tb-500": { title: "TB-500 (Thymosin Beta-4) - Tissue Repair Peptide", desc: "Complete TB-500 guide: thymosin beta-4 mechanism, tissue repair dosing (2-5mg), wound healing, cardiac repair, and clinical applications.", type: "peptide", category: "Regenerative" },
  "/peptides/pt-141": { title: "PT-141 (Bremelanotide) - Sexual Dysfunction Peptide", desc: "Complete PT-141 guide: melanocortin receptor mechanism, sexual dysfunction dosing (1.75mg), male and female applications, and clinical protocols.", type: "peptide", category: "Sexual Health" },
  "/peptides/ipamorelin": { title: "Ipamorelin - Growth Hormone Secretagogue", desc: "Complete ipamorelin guide: selective GH secretagogue mechanism, dosing protocols (200-300mcg), anti-aging applications, and clinical use.", type: "peptide", category: "Growth Hormone" },
  "/peptides/cjc-1295": { title: "CJC-1295 - Growth Hormone Releasing Hormone", desc: "Complete CJC-1295 guide: GHRH analog mechanism, DAC vs no-DAC variants, dosing (1-2mg/week), and growth hormone optimization protocols.", type: "peptide", category: "Growth Hormone" },
  "/peptides/sermorelin": { title: "Sermorelin - GHRH Analog", desc: "Complete sermorelin guide: growth hormone releasing hormone analog, dosing protocols (200-500mcg), anti-aging applications, and clinical use.", type: "peptide", category: "Growth Hormone" },
  "/peptides/tesamorelin": { title: "Tesamorelin - GHRH for Visceral Fat Reduction", desc: "Complete tesamorelin guide: FDA-approved GHRH analog, visceral fat reduction dosing (2mg), lipodystrophy treatment, and clinical protocols.", type: "peptide", category: "Growth Hormone" },
  "/peptides/aod-9604": { title: "AOD-9604 - Anti-Obesity Drug Fragment", desc: "Complete AOD-9604 guide: HGH fragment 177-191 mechanism, fat metabolism dosing (300mcg), weight loss applications, and clinical protocols.", type: "peptide", category: "Weight Loss" },
  "/peptides/ghk-cu": { title: "GHK-Cu - Copper Peptide", desc: "Complete GHK-Cu guide: copper tripeptide mechanism, skin regeneration, wound healing dosing, anti-aging applications, and clinical protocols.", type: "peptide", category: "Anti-Aging" },
  "/peptides/epithalon": { title: "Epithalon (Epitalon) - Telomerase Activator", desc: "Complete epithalon guide: telomerase activation mechanism, anti-aging dosing (5-10mg), telomere lengthening, and longevity protocols.", type: "peptide", category: "Anti-Aging" },
  "/peptides/thymosin-alpha-1": { title: "Thymosin Alpha-1 - Immune Modulator", desc: "Complete thymosin alpha-1 guide: immune modulation mechanism, dosing protocols (1.6mg), infection support, and clinical applications.", type: "peptide", category: "Immune" },
  "/peptides/ll-37": { title: "LL-37 - Antimicrobial Peptide", desc: "Complete LL-37 guide: cathelicidin antimicrobial mechanism, immune defense dosing, biofilm disruption, and clinical applications.", type: "peptide", category: "Immune" },
  "/peptides/selank": { title: "Selank - Anxiolytic Peptide", desc: "Complete selank guide: tuftsin analog mechanism, anxiety reduction dosing (250-500mcg), cognitive enhancement, and clinical protocols.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/semax": { title: "Semax - Nootropic Peptide", desc: "Complete semax guide: ACTH fragment mechanism, cognitive enhancement dosing (200-600mcg), neuroprotection, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/dihexa": { title: "Dihexa - Cognitive Enhancement Peptide", desc: "Complete dihexa guide: HGF receptor mechanism, cognitive enhancement dosing, neuroplasticity, and clinical research applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/snap-8": { title: "SNAP-8 - Anti-Wrinkle Peptide", desc: "Complete SNAP-8 guide: acetyl octapeptide-3 mechanism, wrinkle reduction, topical dosing protocols, and clinical applications.", type: "peptide", category: "Skin" },
  "/peptides/foxo4-dri": { title: "FOXO4-DRI - Senolytic Peptide", desc: "Complete FOXO4-DRI guide: senescent cell clearance mechanism, anti-aging dosing, cellular rejuvenation, and clinical research.", type: "peptide", category: "Anti-Aging" },
  "/peptides/mots-c": { title: "MOTS-c - Mitochondrial Peptide", desc: "Complete MOTS-c guide: mitochondrial-derived peptide mechanism, metabolic optimization dosing, exercise mimetic effects, and clinical applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/humanin": { title: "Humanin - Cytoprotective Peptide", desc: "Complete humanin guide: mitochondrial peptide mechanism, neuroprotection, cellular survival dosing, and clinical research applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/kisspeptin": { title: "Kisspeptin - Reproductive Hormone Peptide", desc: "Complete kisspeptin guide: GnRH regulation mechanism, reproductive health dosing, fertility applications, and clinical protocols.", type: "peptide", category: "Sexual Health" },
  "/peptides/melanotan-ii": { title: "Melanotan II - Tanning & Sexual Health Peptide", desc: "Complete Melanotan II guide: melanocortin receptor mechanism, tanning and sexual function dosing, and clinical considerations.", type: "peptide", category: "Sexual Health" },
  "/peptides/igf-1-lr3": { title: "IGF-1 LR3 - Insulin-Like Growth Factor", desc: "Complete IGF-1 LR3 guide: extended half-life IGF-1 mechanism, muscle growth dosing (20-50mcg), anabolic applications, and clinical protocols.", type: "peptide", category: "Growth Hormone" },
  "/peptides/fragment-176-191": { title: "HGH Fragment 176-191 - Fat Loss Peptide", desc: "Complete HGH Fragment 176-191 guide: lipolytic mechanism, fat loss dosing (250-500mcg), metabolic applications, and clinical protocols.", type: "peptide", category: "Weight Loss" },
  "/peptides/ghrp-2": { title: "GHRP-2 - Growth Hormone Releasing Peptide", desc: "Complete GHRP-2 guide: ghrelin receptor mechanism, GH release dosing (100-300mcg), appetite stimulation, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/ghrp-6": { title: "GHRP-6 - Growth Hormone Releasing Peptide", desc: "Complete GHRP-6 guide: ghrelin mimetic mechanism, GH release dosing (100-300mcg), appetite and recovery applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/hexarelin": { title: "Hexarelin - Growth Hormone Secretagogue", desc: "Complete hexarelin guide: potent GH secretagogue mechanism, dosing protocols (200mcg), cardiac benefits, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/ibutamoren": { title: "Ibutamoren (MK-677) - Oral GH Secretagogue", desc: "Complete ibutamoren guide: oral GH secretagogue mechanism, dosing (10-25mg), sleep improvement, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/mgf": { title: "MGF (Mechano Growth Factor)", desc: "Complete MGF guide: splice variant of IGF-1 mechanism, muscle repair dosing, tissue regeneration, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/dsip": { title: "DSIP - Delta Sleep Inducing Peptide", desc: "Complete DSIP guide: sleep regulation mechanism, insomnia dosing protocols (100mcg), circadian rhythm optimization, and clinical use.", type: "peptide", category: "Sleep" },
  "/peptides/cerebrolysin": { title: "Cerebrolysin - Neurotrophic Peptide", desc: "Complete cerebrolysin guide: brain-derived neurotrophic mechanism, cognitive dosing, neuroprotection, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/na-selank": { title: "NA-Selank - Enhanced Anxiolytic Peptide", desc: "Complete NA-Selank guide: N-acetyl selank amidate mechanism, enhanced bioavailability, anxiety dosing, and clinical protocols.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/na-semax": { title: "NA-Semax - Enhanced Nootropic Peptide", desc: "Complete NA-Semax guide: N-acetyl semax amidate mechanism, enhanced cognitive dosing, neuroprotection, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/p21": { title: "P21 - Neurogenic Peptide", desc: "Complete P21 guide: CNTF-derived peptide mechanism, neurogenesis stimulation, cognitive enhancement dosing, and clinical research.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/ss-31": { title: "SS-31 (Elamipretide) - Mitochondrial Peptide", desc: "Complete SS-31 guide: cardiolipin-targeting mechanism, mitochondrial protection dosing, cardiac applications, and clinical trials.", type: "peptide", category: "Anti-Aging" },
  "/peptides/thymalin": { title: "Thymalin - Thymic Peptide", desc: "Complete thymalin guide: thymic peptide mechanism, immune restoration dosing, anti-aging applications, and clinical protocols.", type: "peptide", category: "Immune" },
  "/peptides/pentosan-polysulfate": { title: "Pentosan Polysulfate - Joint Health", desc: "Complete pentosan polysulfate guide: glycosaminoglycan mechanism, joint repair dosing, osteoarthritis treatment, and clinical protocols.", type: "peptide", category: "Regenerative" },
  "/peptides/ace-031": { title: "ACE-031 - Myostatin Inhibitor", desc: "Complete ACE-031 guide: activin receptor mechanism, muscle growth applications, myostatin inhibition, and clinical research.", type: "peptide", category: "Growth Hormone" },
  "/peptides/follistatin": { title: "Follistatin - Myostatin Blocker", desc: "Complete follistatin guide: activin-binding mechanism, muscle growth dosing, myostatin inhibition, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/oxytocin": { title: "Oxytocin - Bonding & Social Peptide", desc: "Complete oxytocin guide: social bonding mechanism, therapeutic dosing, anxiety reduction, and clinical applications.", type: "peptide", category: "Sexual Health" },
  "/peptides/vip": { title: "VIP - Vasoactive Intestinal Peptide", desc: "Complete VIP guide: vasoactive intestinal peptide mechanism, CIRS treatment dosing, immune modulation, and clinical protocols.", type: "peptide", category: "Immune" },
  "/peptides/kpv": { title: "KPV - Anti-Inflammatory Peptide", desc: "Complete KPV guide: alpha-MSH fragment mechanism, gut inflammation dosing, IBD applications, and clinical protocols.", type: "peptide", category: "Immune" },
  "/peptides/larazotide": { title: "Larazotide - Gut Barrier Peptide", desc: "Complete larazotide guide: tight junction modulator mechanism, leaky gut dosing, celiac disease applications, and clinical trials.", type: "peptide", category: "Immune" },
  "/peptides/retatrutide": { title: "Retatrutide - Triple Agonist", desc: "Complete retatrutide guide: GLP-1/GIP/glucagon triple agonist mechanism, weight loss dosing, metabolic applications, and clinical trials.", type: "peptide", category: "Weight Loss" },
  "/peptides/survodutide": { title: "Survodutide - Dual Agonist", desc: "Complete survodutide guide: GLP-1/glucagon dual agonist mechanism, weight loss and NASH applications, dosing, and clinical trials.", type: "peptide", category: "Weight Loss" },
  "/peptides/cagrilintide": { title: "Cagrilintide - Amylin Analog", desc: "Complete cagrilintide guide: long-acting amylin analog mechanism, weight loss dosing, appetite regulation, and clinical trials.", type: "peptide", category: "Weight Loss" },
  "/peptides/tesofensine": { title: "Tesofensine - Triple Reuptake Inhibitor", desc: "Complete tesofensine guide: serotonin/noradrenaline/dopamine reuptake inhibitor mechanism, weight loss dosing, and clinical applications.", type: "peptide", category: "Weight Loss" },
  "/peptides/5-amino-1mq": { title: "5-Amino-1MQ - Metabolic Peptide", desc: "Complete 5-Amino-1MQ guide: NNMT inhibitor mechanism, fat metabolism dosing, weight loss applications, and clinical research.", type: "peptide", category: "Weight Loss" },
  "/peptides/nad-plus": { title: "NAD+ - Nicotinamide Adenine Dinucleotide", desc: "Complete NAD+ guide: cellular energy mechanism, anti-aging dosing protocols, mitochondrial function, and clinical applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/rapamycin": { title: "Rapamycin - mTOR Inhibitor", desc: "Complete rapamycin guide: mTOR pathway mechanism, longevity dosing protocols, autophagy induction, and clinical applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/methylene-blue": { title: "Methylene Blue - Mitochondrial Enhancer", desc: "Complete methylene blue guide: electron carrier mechanism, cognitive enhancement dosing, mitochondrial support, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  // Blend/Formula pages
  "/peptides/glow-core": { title: "Glow Core - Foundation Skin Health Blend", desc: "Glow Core peptide blend: foundation skin health and collagen support formula with GHK-Cu and growth factors for clinical skin rejuvenation.", type: "formula", category: "Skin" },
  "/peptides/glow-plus": { title: "Glow Plus - Enhanced Skin Rejuvenation Blend", desc: "Glow Plus peptide blend: enhanced skin rejuvenation with growth factors for advanced anti-aging and collagen stimulation.", type: "formula", category: "Skin" },
  "/peptides/glow-ultra": { title: "Glow Ultra - Maximum Potency Anti-Aging Formula", desc: "Glow Ultra peptide blend: maximum potency anti-aging formula for comprehensive skin rejuvenation and cellular renewal.", type: "formula", category: "Skin" },
  "/peptides/glow-capsules": { title: "GLOW Capsules - Oral Beauty Supplement Blend", desc: "GLOW Capsules: oral beauty supplement peptide blend for skin health, collagen support, and anti-aging from within.", type: "formula", category: "Skin" },
  "/peptides/klow-capsules": { title: "KLOW Capsules - Comprehensive Beauty From Within", desc: "KLOW Capsules: comprehensive beauty peptide blend for skin, hair, and nail health from within.", type: "formula", category: "Skin" },
  "/peptides/bpc-157-tb-500": { title: "BPC-157 + TB-500 - Gold Standard Healing Combination", desc: "BPC-157 + TB-500 blend: the gold standard healing combination for tissue repair, wound healing, and accelerated recovery.", type: "formula", category: "Regenerative" },
  "/peptides/bpc-wolverine": { title: "BPC Wolverine - Maximum Recovery Blend", desc: "BPC Wolverine peptide blend: maximum recovery and regeneration formula combining BPC-157 with synergistic healing peptides.", type: "formula", category: "Regenerative" },
  "/peptides/semaglutide-bpc-157": { title: "Semaglutide + BPC-157 - Weight Loss with GI Protection", desc: "Semaglutide + BPC-157 blend: GLP-1 weight loss combined with gut healing protection for optimized metabolic therapy.", type: "formula", category: "Weight Loss" },
  "/peptides/tirzepatide-bpc-157": { title: "Tirzepatide + BPC-157 - Dual Agonist with Gut Healing", desc: "Tirzepatide + BPC-157 blend: dual GIP/GLP-1 agonist weight loss with gut healing support for comprehensive metabolic optimization.", type: "formula", category: "Weight Loss" },
  "/peptides/cjc-1295-ipamorelin": { title: "CJC-1295 + Ipamorelin - Sustained GH Release Combination", desc: "CJC-1295 + Ipamorelin blend: sustained growth hormone release combination for anti-aging, body composition, and recovery.", type: "formula", category: "Growth Hormone" },
  "/peptides/selank-semax": { title: "Selank + Semax - Anxiolytic & Cognitive Enhancement Blend", desc: "Selank + Semax blend: anxiolytic combined with cognitive enhancement for comprehensive mental performance optimization.", type: "formula", category: "Cognitive Enhancement" },
  "/peptides/tesamorelin-ipamorelin": { title: "Tesamorelin + Ipamorelin - GH Optimization Blend", desc: "Tesamorelin + Ipamorelin blend: synergistic growth hormone optimization for visceral fat reduction and anti-aging.", type: "formula", category: "Growth Hormone" },
  // N-Series Formulas (CRITICAL for discoverability)
  "/peptides/formula-n-69": { title: "Formula N-69: Sexual Enhancement & Intimacy Peptide Blend", desc: "Formula N-69 proprietary peptide blend: advanced sexual enhancement formula with NALT, Kisspeptin, PT-141, Oxytocin, and VIP for comprehensive sexual health optimization and intimacy enhancement.", type: "formula", category: "Sexual Health" },
  "/peptides/formula-n-111": { title: "Formula N-111: Cognitive Enhancement Peptide Blend", desc: "Formula N-111 proprietary peptide blend: advanced cognitive enhancement formula with J147, Dihexa, and Noopept for comprehensive neuroprotection and brain optimization.", type: "formula", category: "Cognitive Enhancement" },
  "/peptides/formula-n-259": { title: "Formula N-259: Sleep & Circadian Optimization Peptide Blend", desc: "Formula N-259 proprietary peptide blend: advanced sleep enhancement formula with Apigenin, Magnesium Glycinate, L-Theanine, and Melatonin for comprehensive circadian rhythm optimization.", type: "formula", category: "Sleep" },
  "/peptides/formula-n-2331": { title: "Formula N-2331: Neuro-Cognitive & NAD+ Support Peptide Blend", desc: "Formula N-2331 proprietary peptide blend: advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization.", type: "formula", category: "Cognitive Enhancement" },
  "/peptides/formula-n-5550": { title: "Formula N-5550: Multi-Target Cognitive Enhancement Peptide Blend", desc: "Formula N-5550 proprietary peptide blend: advanced cognitive enhancement formula with Dihexa, Tesofensine, and Methylene Blue for comprehensive brain optimization.", type: "formula", category: "Cognitive Enhancement" },
  // RG, M, WL Series
  "/peptides/formula-rg-5555": { title: "Formula RG-5555: Healing & Recovery Peptide Blend", desc: "Formula RG-5555 proprietary peptide blend: multi-pathway healing acceleration formula for tissue repair and regeneration.", type: "formula", category: "Regenerative" },
  "/peptides/formula-m-51": { title: "Formula M-51: Exercise Mimetic Peptide Blend", desc: "Formula M-51 proprietary peptide blend: exercise pathway activation formula for metabolic optimization and fitness enhancement.", type: "formula", category: "Anti-Aging" },
  "/peptides/formula-m-2531": { title: "Formula M-2531: Mitochondrial Support Peptide Blend", desc: "Formula M-2531 proprietary peptide blend: mitochondrial biogenesis support formula for cellular energy and longevity.", type: "formula", category: "Anti-Aging" },
  "/peptides/formula-wl-1175": { title: "Formula WL-1175: Metabolic Health Peptide Blend", desc: "Formula WL-1175 proprietary peptide blend: comprehensive metabolic support formula for weight management and metabolic optimization.", type: "formula", category: "Weight Loss" },
};

function generateStructuredData(routePath, meta) {
  const canonicalUrl = `${SITE_URL}${routePath === "/" ? "" : routePath}`;
  const schemas = [];

  // WebSite schema for homepage
  if (routePath === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Peptide Education Hub",
      "url": SITE_URL,
      "description": meta.desc,
      "publisher": {
        "@type": "Organization",
        "name": "Peptide Education Hub",
        "url": SITE_URL
      }
    });
  }

  // MedicalWebPage for peptide/formula pages
  if (meta.type === "peptide" || meta.type === "formula") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": meta.title,
      "description": meta.desc,
      "url": canonicalUrl,
      "about": {
        "@type": "MedicalTherapy",
        "name": meta.title.split(" - ")[0].split(":")[0].trim(),
        "therapyType": "Peptide Therapy",
        ...(meta.category ? { "relevantSpecialty": getCategorySpecialty(meta.category) } : {})
      },
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Clinician"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Peptide Education Hub",
        "url": SITE_URL
      },
      "dateModified": "2026-02-13"
    });
  }

  // BreadcrumbList
  const breadcrumbs = [{ name: "Home", url: SITE_URL }];
  if (routePath.startsWith("/peptides/formula-")) {
    breadcrumbs.push({ name: "Blends", url: `${SITE_URL}/blends` });
    breadcrumbs.push({ name: meta.title.split(" |")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/peptides/")) {
    breadcrumbs.push({ name: "Peptide Index", url: `${SITE_URL}/peptide-index` });
    breadcrumbs.push({ name: meta.title.split(" -")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/tools/")) {
    breadcrumbs.push({ name: "Tools", url: `${SITE_URL}/tools` });
    breadcrumbs.push({ name: meta.title.split(" |")[0], url: canonicalUrl });
  } else if (routePath !== "/") {
    breadcrumbs.push({ name: meta.title.split(" |")[0].split(" -")[0], url: canonicalUrl });
  }

  if (breadcrumbs.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": b.name,
        "item": b.url
      }))
    });
  }

  return schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n    ");
}

function getCategorySpecialty(category) {
  const map = {
    "Weight Loss": "https://schema.org/Endocrine",
    "Regenerative": "https://schema.org/PhysicalMedicine",
    "Growth Hormone": "https://schema.org/Endocrine",
    "Anti-Aging": "https://schema.org/Geriatric",
    "Cognitive Enhancement": "https://schema.org/Neurologic",
    "Immune": "https://schema.org/Immunologic",
    "Sexual Health": "https://schema.org/Urologic",
    "Skin": "https://schema.org/Dermatology",
    "Sleep": "https://schema.org/Neurologic",
  };
  return map[category] || "https://schema.org/InternalMedicine";
}

function generatePage(routePath, meta) {
  const fullTitle = meta.title.includes("Peptide Education Hub") 
    ? meta.title 
    : `${meta.title} | Peptide Education Hub`;
  const canonicalUrl = `${SITE_URL}${routePath === "/" ? "" : routePath}`;
  
  let html = TEMPLATE;
  
  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${fullTitle}</title>`);
  
  // Replace meta title
  html = html.replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${fullTitle}" />`);
  
  // Replace meta description
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${meta.desc}" />`);
  
  // Fix canonical URL
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  
  // Fix OG URL
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  
  // Fix OG title
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${fullTitle}" />`);
  
  // Fix OG description
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${meta.desc}" />`);
  
  // Fix Twitter title
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${fullTitle}" />`);
  
  // Fix Twitter description
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${meta.desc}" />`);
  
  // Inject structured data before </head>
  const structuredData = generateStructuredData(routePath, meta);
  if (structuredData) {
    html = html.replace('</head>', `    ${structuredData}\n  </head>`);
  }
  
  return html;
}

// Main execution
let count = 0;
for (const [routePath, meta] of Object.entries(ROUTE_META)) {
  if (routePath === "/") continue; // index.html already exists
  
  // Create directory structure: /peptides/bpc-157 -> dist/public/peptides/bpc-157/index.html
  const dirPath = path.join(DIST_DIR, routePath);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const html = generatePage(routePath, meta);
  fs.writeFileSync(path.join(dirPath, 'index.html'), html);
  count++;
}

// Also generate the homepage with correct meta
const homeHtml = generatePage("/", ROUTE_META["/"]);
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), homeHtml);
count++;

console.log(`Generated ${count} pre-rendered HTML pages with SEO meta tags`);
