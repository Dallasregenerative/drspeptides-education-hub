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
const PEPTIDE_SSR_DATA = require('./peptide-ssr-data.cjs');

// All route meta data - extracted from edge function
const ROUTE_META = {
  "/": { title: "Peptide Education Hub - The Most Comprehensive Evidence-Based Peptide Resource for Healthcare Providers", desc: "Comprehensive educational resource for healthcare providers practicing peptide therapy. Clinical protocols, quality standards, dosing calculators, and evidence-based guides for BPC-157, semaglutide, tirzepatide, and 60+ therapeutic peptides.", type: "home" },
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
  "/peptide-index": { title: "A-Z Peptide Index - Comprehensive Peptide Database", desc: "Comprehensive A-Z index of 65+ therapeutic peptides. Detailed profiles with mechanisms of action, clinical applications, dosing protocols, and safety data.", type: "page" },
  "/blog": { title: "Peptide Therapy Blog - Latest Research & Clinical Updates", desc: "Stay current with peptide therapy research, clinical updates, and practice insights. Evidence-based articles for healthcare providers.", type: "page" },
  "/research": { title: "Peptide Research Studies & Clinical Evidence", desc: "Curated collection of peptide therapy research studies and clinical trials. Evidence-based resources for healthcare providers.", type: "page" },
  "/training": { title: "Peptide Therapy Training & Education", desc: "Professional peptide therapy training resources for healthcare providers. Clinical protocols, best practices, and continuing education.", type: "page" },
  "/peptide-education": { title: "Peptide Education - The Most Comprehensive Evidence-Based Resource for Healthcare Providers", desc: "Peptide education for healthcare providers and clinicians. 65+ evidence-based peptide profiles, clinical tools, dosing calculators, training programs, and certification resources. The most comprehensive peptide therapy education platform.", type: "page" },
  "/blends": { title: "Peptide Blends & Proprietary Formulas", desc: "Evidence-based peptide combinations and proprietary formulations. 20 blend profiles across 9 categories for enhanced clinical outcomes.", type: "page" },
  "/about": { title: "About Peptide Education Hub", desc: "Learn about Peptide Education Hub by Dallas Regenerative LLC. Evidence-based peptide therapy education for healthcare providers.", type: "page" },
  "/contact": { title: "Contact Peptide Education Hub", desc: "Get in touch with Peptide Education Hub. Questions about peptide therapy education, sourcing, or clinical protocols.", type: "page" },
  "/privacy": { title: "Privacy Policy", desc: "Privacy policy for Peptide Education Hub. How we collect, use, and protect your information.", type: "page" },
  "/terms": { title: "Terms of Service", desc: "Terms of service for Peptide Education Hub. Usage terms, disclaimers, and legal information.", type: "page" },
  "/faq": { title: "Peptide Therapy FAQ", desc: "Frequently asked questions about peptide therapy. Expert answers on dosing, safety, sourcing, and clinical applications.", type: "page" },
  "/regulatory-guidance": { title: "Peptide Regulatory Guidance", desc: "Navigate peptide therapy regulations. FDA guidance, 503A/503B pharmacy rules, and compliance information for healthcare providers.", type: "page" },
  "/safety-guidelines": { title: "Peptide Safety Guidelines", desc: "Comprehensive safety guidelines for peptide therapy. Contraindications, side effects, monitoring protocols, and emergency procedures.", type: "page" },
  "/how-to-reconstitute-peptides": { title: "How to Reconstitute Peptides - Comprehensive Guide", desc: "Step-by-step guide to reconstituting lyophilized peptides. Proper technique, bacteriostatic water ratios, storage, and handling for healthcare providers.", type: "page" },
  "/guides/how-to-reconstitute-peptides": { title: "How to Reconstitute Peptides - Comprehensive Guide", desc: "Step-by-step guide to reconstituting lyophilized peptides. Proper technique, bacteriostatic water ratios, storage, and handling for healthcare providers.", type: "page" },
  "/peptides-vs-steroids": { title: "Peptides vs Steroids - Comprehensive Comparison", desc: "Detailed comparison of peptide therapy vs anabolic steroids. Mechanisms, safety profiles, clinical applications, and evidence-based analysis.", type: "page" },
  "/guides/peptides-vs-steroids": { title: "Peptides vs Steroids - Comprehensive Comparison", desc: "Detailed comparison of peptide therapy vs anabolic steroids. Mechanisms, safety profiles, clinical applications, and evidence-based analysis.", type: "page" },
  // Individual peptide pages
  "/peptides/bpc-157": { title: "BPC-157 - Body Protection Compound", desc: "Comprehensive BPC-157 guide: mechanism of action, clinical dosing protocols (250-500mcg), wound healing, gut repair, and neuroprotective applications. Evidence-based resource for healthcare providers.", type: "peptide", category: "Regenerative" },
  "/peptides/semaglutide": { title: "Semaglutide - GLP-1 Receptor Agonist", desc: "Comprehensive semaglutide guide: weight loss protocols, dosing titration (0.25-2.4mg), cardiovascular benefits, and clinical management. For healthcare providers.", type: "peptide", category: "Weight Loss" },
  "/peptides/tirzepatide": { title: "Tirzepatide - Dual GIP/GLP-1 Agonist", desc: "Comprehensive tirzepatide guide: dual incretin mechanism, weight loss dosing (2.5-15mg), glycemic control, and clinical protocols for healthcare providers.", type: "peptide", category: "Weight Loss" },
  "/peptides/tb-500": { title: "TB-500 (Thymosin Beta-4) - Tissue Repair Peptide", desc: "Comprehensive TB-500 guide: thymosin beta-4 mechanism, tissue repair dosing (2-5mg), wound healing, cardiac repair, and clinical applications.", type: "peptide", category: "Regenerative" },
  "/peptides/pt-141": { title: "PT-141 (Bremelanotide) - Sexual Dysfunction Peptide", desc: "Comprehensive PT-141 guide: melanocortin receptor mechanism, sexual dysfunction dosing (1.75mg), male and female applications, and clinical protocols.", type: "peptide", category: "Sexual Health" },
  "/peptides/ipamorelin": { title: "Ipamorelin - Growth Hormone Secretagogue", desc: "Comprehensive ipamorelin guide: selective GH secretagogue mechanism, dosing protocols (200-300mcg), anti-aging applications, and clinical use.", type: "peptide", category: "Growth Hormone" },
  "/peptides/cjc-1295": { title: "CJC-1295 - Growth Hormone Releasing Hormone", desc: "Comprehensive CJC-1295 guide: GHRH analog mechanism, DAC vs no-DAC variants, dosing (1-2mg/week), and growth hormone optimization protocols.", type: "peptide", category: "Growth Hormone" },
  "/peptides/sermorelin": { title: "Sermorelin - GHRH Analog", desc: "Comprehensive sermorelin guide: growth hormone releasing hormone analog, dosing protocols (200-500mcg), anti-aging applications, and clinical use.", type: "peptide", category: "Growth Hormone" },
  "/peptides/tesamorelin": { title: "Tesamorelin - GHRH for Visceral Fat Reduction", desc: "Comprehensive tesamorelin guide: FDA-approved GHRH analog, visceral fat reduction dosing (2mg), lipodystrophy treatment, and clinical protocols.", type: "peptide", category: "Growth Hormone" },
  "/peptides/aod-9604": { title: "AOD-9604 - Anti-Obesity Drug Fragment", desc: "Comprehensive AOD-9604 guide: HGH fragment 177-191 mechanism, fat metabolism dosing (300mcg), weight loss applications, and clinical protocols.", type: "peptide", category: "Weight Loss" },
  "/peptides/ghk-cu": { title: "GHK-Cu - Copper Peptide", desc: "Comprehensive GHK-Cu guide: copper tripeptide mechanism, skin regeneration, wound healing dosing, anti-aging applications, and clinical protocols.", type: "peptide", category: "Anti-Aging" },
  "/peptides/epithalon": { title: "Epithalon (Epitalon) - Telomerase Activator", desc: "Comprehensive epithalon guide: telomerase activation mechanism, anti-aging dosing (5-10mg), telomere lengthening, and longevity protocols.", type: "peptide", category: "Anti-Aging" },
  "/peptides/thymosin-alpha-1": { title: "Thymosin Alpha-1 - Immune Modulator", desc: "Comprehensive thymosin alpha-1 guide: immune modulation mechanism, dosing protocols (1.6mg), infection support, and clinical applications.", type: "peptide", category: "Immune" },
  "/peptides/ll-37": { title: "LL-37 - Antimicrobial Peptide", desc: "Comprehensive LL-37 guide: cathelicidin antimicrobial mechanism, immune defense dosing, biofilm disruption, and clinical applications.", type: "peptide", category: "Immune" },
  "/peptides/selank": { title: "Selank - Anxiolytic Peptide", desc: "Comprehensive selank guide: tuftsin analog mechanism, anxiety reduction dosing (250-500mcg), cognitive enhancement, and clinical protocols.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/semax": { title: "Semax - Nootropic Peptide", desc: "Comprehensive semax guide: ACTH fragment mechanism, cognitive enhancement dosing (200-600mcg), neuroprotection, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/dihexa": { title: "Dihexa - Cognitive Enhancement Peptide", desc: "Comprehensive dihexa guide: HGF receptor mechanism, cognitive enhancement dosing, neuroplasticity, and clinical research applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/snap-8": { title: "SNAP-8 - Anti-Wrinkle Peptide", desc: "Comprehensive SNAP-8 guide: acetyl octapeptide-3 mechanism, wrinkle reduction, topical dosing protocols, and clinical applications.", type: "peptide", category: "Skin" },
  "/peptides/foxo4-dri": { title: "FOXO4-DRI - Senolytic Peptide", desc: "Comprehensive FOXO4-DRI guide: senescent cell clearance mechanism, anti-aging dosing, cellular rejuvenation, and clinical research.", type: "peptide", category: "Anti-Aging" },
  "/peptides/mots-c": { title: "MOTS-c - Mitochondrial Peptide", desc: "Comprehensive MOTS-c guide: mitochondrial-derived peptide mechanism, metabolic optimization dosing, exercise mimetic effects, and clinical applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/humanin": { title: "Humanin - Cytoprotective Peptide", desc: "Comprehensive humanin guide: mitochondrial peptide mechanism, neuroprotection, cellular survival dosing, and clinical research applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/kisspeptin": { title: "Kisspeptin - Reproductive Hormone Peptide", desc: "Comprehensive kisspeptin guide: GnRH regulation mechanism, reproductive health dosing, fertility applications, and clinical protocols.", type: "peptide", category: "Sexual Health" },
  "/peptides/melanotan-ii": { title: "Melanotan II - Tanning & Sexual Health Peptide", desc: "Comprehensive Melanotan II guide: melanocortin receptor mechanism, tanning and sexual function dosing, and clinical considerations.", type: "peptide", category: "Sexual Health" },
  "/peptides/igf-1-lr3": { title: "IGF-1 LR3 - Insulin-Like Growth Factor", desc: "Comprehensive IGF-1 LR3 guide: extended half-life IGF-1 mechanism, muscle growth dosing (20-50mcg), anabolic applications, and clinical protocols.", type: "peptide", category: "Growth Hormone" },
  "/peptides/fragment-176-191": { title: "HGH Fragment 176-191 - Fat Loss Peptide", desc: "Comprehensive HGH Fragment 176-191 guide: lipolytic mechanism, fat loss dosing (250-500mcg), metabolic applications, and clinical protocols.", type: "peptide", category: "Weight Loss" },
  "/peptides/ghrp-2": { title: "GHRP-2 - Growth Hormone Releasing Peptide", desc: "Comprehensive GHRP-2 guide: ghrelin receptor mechanism, GH release dosing (100-300mcg), appetite stimulation, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/ghrp-6": { title: "GHRP-6 - Growth Hormone Releasing Peptide", desc: "Comprehensive GHRP-6 guide: ghrelin mimetic mechanism, GH release dosing (100-300mcg), appetite and recovery applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/hexarelin": { title: "Hexarelin - Growth Hormone Secretagogue", desc: "Comprehensive hexarelin guide: potent GH secretagogue mechanism, dosing protocols (200mcg), cardiac benefits, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/ibutamoren": { title: "Ibutamoren (MK-677) - Oral GH Secretagogue", desc: "Comprehensive ibutamoren guide: oral GH secretagogue mechanism, dosing (10-25mg), sleep improvement, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/mgf": { title: "MGF (Mechano Growth Factor)", desc: "Comprehensive MGF guide: splice variant of IGF-1 mechanism, muscle repair dosing, tissue regeneration, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/dsip": { title: "DSIP - Delta Sleep Inducing Peptide", desc: "Comprehensive DSIP guide: sleep regulation mechanism, insomnia dosing protocols (100mcg), circadian rhythm optimization, and clinical use.", type: "peptide", category: "Sleep" },
  "/peptides/cerebrolysin": { title: "Cerebrolysin - Neuropeptide Complex for Brain Recovery, Stroke & Cognitive Enhancement", desc: "Comprehensive Cerebrolysin guide for healthcare providers. Porcine brain-derived neuropeptide complex with BDNF, NGF, CNTF. Evidence-based dosing protocols for stroke recovery, traumatic brain injury, Alzheimer's disease, vascular dementia, and cognitive enhancement. 500+ research citations, 20+ clinical references.", type: "peptide", category: "Cognitive Enhancement / Neurorecovery" },
  "/peptides/na-selank": { title: "NA-Selank - Enhanced Anxiolytic Peptide", desc: "Comprehensive NA-Selank guide: N-acetyl selank amidate mechanism, enhanced bioavailability, anxiety dosing, and clinical protocols.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/na-semax": { title: "NA-Semax - Enhanced Nootropic Peptide", desc: "Comprehensive NA-Semax guide: N-acetyl semax amidate mechanism, enhanced cognitive dosing, neuroprotection, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/p21": { title: "P21 - Neurogenic Peptide", desc: "Comprehensive P21 guide: CNTF-derived peptide mechanism, neurogenesis stimulation, cognitive enhancement dosing, and clinical research.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/follistatin": { title: "Follistatin 344 - Myostatin Inhibitor for Muscle Growth & Fertility", desc: "Comprehensive Follistatin 344 guide: myostatin inhibition mechanism, muscle growth, fertility enhancement, dosing protocols, and clinical research for healthcare providers.", type: "peptide", category: "Growth Factor" },
  "/peptides/klotho": { title: "Klotho - Anti-Aging Longevity Protein for Cognitive & Kidney Health", desc: "Comprehensive Klotho guide: anti-aging mechanism, cognitive enhancement, kidney protection, FGF23 regulation, dosing protocols, and clinical research.", type: "peptide", category: "Longevity / Anti-Aging" },
  "/peptides/pe-22-28": { title: "PE-22-28 - Nootropic Peptide for Cognitive Enhancement & Antidepressant Effects", desc: "Comprehensive PE-22-28 guide: TREK-1 channel inhibition, spadin-derived nootropic mechanism, cognitive enhancement, antidepressant dosing, and clinical research.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/orexin-a": { title: "Orexin A - Hypothalamic Neuropeptide for Wakefulness & Appetite Regulation", desc: "Comprehensive Orexin A guide: hypocretin-1 mechanism, narcolepsy treatment, wakefulness promotion, appetite regulation, dosing protocols, and clinical research.", type: "peptide", category: "Neuropeptide" },
  "/peptides/fgl": { title: "FGL Peptide - NCAM-Derived Neuroprotective Peptide for Cognitive Enhancement", desc: "Comprehensive FGL peptide guide: neural cell adhesion molecule mechanism, neuroprotection, cognitive enhancement, FGFR activation, dosing protocols, and clinical research.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/ss-31": { title: "SS-31 (Elamipretide) - Mitochondrial Peptide", desc: "Comprehensive SS-31 guide: cardiolipin-targeting mechanism, mitochondrial protection dosing, cardiac applications, and clinical trials.", type: "peptide", category: "Anti-Aging" },
  "/peptides/thymalin": { title: "Thymalin - Thymic Peptide", desc: "Comprehensive thymalin guide: thymic peptide mechanism, immune restoration dosing, anti-aging applications, and clinical protocols.", type: "peptide", category: "Immune" },
  "/peptides/pentosan-polysulfate": { title: "Pentosan Polysulfate - Joint Health", desc: "Comprehensive pentosan polysulfate guide: glycosaminoglycan mechanism, joint repair dosing, osteoarthritis treatment, and clinical protocols.", type: "peptide", category: "Regenerative" },
  "/peptides/ace-031": { title: "ACE-031 - Myostatin Inhibitor", desc: "Comprehensive ACE-031 guide: activin receptor mechanism, muscle growth applications, myostatin inhibition, and clinical research.", type: "peptide", category: "Growth Hormone" },
  "/peptides/follistatin": { title: "Follistatin - Myostatin Blocker", desc: "Comprehensive follistatin guide: activin-binding mechanism, muscle growth dosing, myostatin inhibition, and clinical applications.", type: "peptide", category: "Growth Hormone" },
  "/peptides/oxytocin": { title: "Oxytocin - Bonding & Social Peptide", desc: "Comprehensive oxytocin guide: social bonding mechanism, therapeutic dosing, anxiety reduction, and clinical applications.", type: "peptide", category: "Sexual Health" },
  "/peptides/vip": { title: "VIP - Vasoactive Intestinal Peptide", desc: "Comprehensive VIP guide: vasoactive intestinal peptide mechanism, CIRS treatment dosing, immune modulation, and clinical protocols.", type: "peptide", category: "Immune" },
  "/peptides/kpv": { title: "KPV - Anti-Inflammatory Peptide", desc: "Comprehensive KPV guide: alpha-MSH fragment mechanism, gut inflammation dosing, IBD applications, and clinical protocols.", type: "peptide", category: "Immune" },
  "/peptides/larazotide": { title: "Larazotide - Gut Barrier Peptide", desc: "Comprehensive larazotide guide: tight junction modulator mechanism, leaky gut dosing, celiac disease applications, and clinical trials.", type: "peptide", category: "Immune" },
  "/peptides/retatrutide": { title: "Retatrutide - Triple Agonist", desc: "Comprehensive retatrutide guide: GLP-1/GIP/glucagon triple agonist mechanism, weight loss dosing, metabolic applications, and clinical trials.", type: "peptide", category: "Weight Loss" },
  "/peptides/survodutide": { title: "Survodutide - Dual Agonist", desc: "Comprehensive survodutide guide: GLP-1/glucagon dual agonist mechanism, weight loss and NASH applications, dosing, and clinical trials.", type: "peptide", category: "Weight Loss" },
  "/peptides/cagrilintide": { title: "Cagrilintide - Amylin Analog", desc: "Comprehensive cagrilintide guide: long-acting amylin analog mechanism, weight loss dosing, appetite regulation, and clinical trials.", type: "peptide", category: "Weight Loss" },
  "/peptides/tesofensine": { title: "Tesofensine - Triple Reuptake Inhibitor", desc: "Comprehensive tesofensine guide: serotonin/noradrenaline/dopamine reuptake inhibitor mechanism, weight loss dosing, and clinical applications.", type: "peptide", category: "Weight Loss" },
  "/peptides/5-amino-1mq": { title: "5-Amino-1MQ - Metabolic Peptide", desc: "Comprehensive 5-Amino-1MQ guide: NNMT inhibitor mechanism, fat metabolism dosing, weight loss applications, and clinical research.", type: "peptide", category: "Weight Loss" },
  "/peptides/nad-plus": { title: "NAD+ - Nicotinamide Adenine Dinucleotide", desc: "Comprehensive NAD+ guide: cellular energy mechanism, anti-aging dosing protocols, mitochondrial function, and clinical applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/rapamycin": { title: "Rapamycin - mTOR Inhibitor", desc: "Comprehensive rapamycin guide: mTOR pathway mechanism, longevity dosing protocols, autophagy induction, and clinical applications.", type: "peptide", category: "Anti-Aging" },
  "/peptides/methylene-blue": { title: "Methylene Blue - Mitochondrial Enhancer", desc: "Comprehensive methylene blue guide: electron carrier mechanism, cognitive enhancement dosing, mitochondrial support, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
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
  "/peptides/formula-m-shred": { title: "Formula M-Shred: Advanced Metabolic Fat Loss Formula", desc: "Formula M-Shred by DrsPeptides: triple-compound oral capsule with BAM-15 (10mg), SLU-PP-332 (15mg), and C15 Pentadecanoic Acid (150mg) for mitochondria-targeted fat loss, metabolic enhancement, and body composition optimization.", type: "formula", category: "Weight Loss" },
  "/peptides/formula-m-2531": { title: "Formula M-2531: Mitochondrial Support Peptide Blend", desc: "Formula M-2531 proprietary peptide blend: mitochondrial biogenesis support formula for cellular energy and longevity.", type: "formula", category: "Anti-Aging" },
  "/peptides/formula-wl-1175": { title: "Formula WL-1175: Metabolic Health Peptide Blend", desc: "Formula WL-1175 proprietary peptide blend: comprehensive metabolic support formula for weight management and metabolic optimization.", type: "formula", category: "Weight Loss" },
  "/peptides/formula-os-01": { title: "OS-01 (O-304/ATX-304): Pan-AMPK Activator & Longevity Optimizer", desc: "OS-01 by DrsPeptides: first-in-class orally bioavailable pan-AMPK activator (O-304/ATX-304) with dual mitochondrial uncoupling mechanism. 100mg enteric-coated capsule for metabolic optimization, glucose regulation, cardiovascular support, and longevity. Phase IIa human clinical trial completed.", type: "formula", category: "Longevity" },
  // OS-01 Blog Articles
  "/blog/os-01-first-oral-ampk-activator": { title: "OS-01 (ATX-304): The First Oral Pan-AMPK Activator That Burns Fat While Protecting Muscle", desc: "Deep dive into OS-01's dual AMPK activation and mitochondrial uncoupling mechanism for fat-focused weight loss with muscle preservation.", type: "article" },
  "/blog/os-01-missing-half-glp1-therapy": { title: "Why OS-01 May Be the Missing Half of GLP-1 Therapy: ENDO 2025 Breakthrough Data", desc: "ENDO 2025 data shows ATX-304 combined with semaglutide prevents muscle loss and weight regain.", type: "article" },
  "/blog/os-01-organ-protection-liver-kidney-heart": { title: "Beyond Weight Loss: How OS-01 Protects the Liver, Kidneys, and Cardiovascular System", desc: "OS-01 organ protection data: MASLD improvement, kidney aging prevention, cardiovascular support.", type: "article" },
  "/blog/os-01-ampk-longevity-exercise-mimetic": { title: "AMPK, Longevity, and the Exercise Mimetic Revolution: The Science Behind OS-01", desc: "How OS-01 connects to the core longevity pathways of exercise, fasting, and caloric restriction.", type: "article" },
  // M-Shred Blog Articles
  "/blog/m-shred-triple-pathway-fat-loss": { title: "Formula M-Shred: How BAM-15, SLU-PP-332, and C15 Create a Triple-Pathway Fat Loss System", desc: "Deep dive into the synergy of M-Shred's three active compounds for metabolic fat loss.", type: "article" },
  "/blog/bam15-mitochondrial-uncoupler-science": { title: "BAM-15: The Mitochondrial Uncoupler That Burns Fat Without the Danger of DNP", desc: "How BAM-15 safely increases energy expenditure through targeted mitochondrial uncoupling.", type: "article" },
  "/blog/slu-pp-332-exercise-mimetic-pill": { title: "SLU-PP-332: The Exercise Mimetic Pill That Makes Your Body Think It's Training for a Marathon", desc: "The science behind the ERR agonist that activates exercise transcriptional programs.", type: "article" },
  "/blog/c15-pentadecanoic-acid-essential-fatty-acid": { title: "C15 (Pentadecanoic Acid): The Newly Discovered Essential Fatty Acid Rewriting Metabolic Medicine", desc: "Why pentadecanoic acid may be the first new essential fatty acid discovered in 90 years.", type: "article" },
  "/blog/off-label-vs-unapproved-bpc-157": { title: "Off-Label vs. Unapproved: Why BPC-157 Is NOT an Off-Label Prescription", desc: "The critical legal distinction between off-label use and unapproved drug use for BPC-157 prescribers.", type: "article" },
  "/blog/defensible-peptide-practice-risk-management": { title: "Building a Defensible Peptide Practice: The 5-Point Risk Management Framework", desc: "A structured approach to offering peptide therapy while minimizing regulatory and malpractice exposure.", type: "article" },
  "/blog/fda-category-1-vs-category-2-peptides": { title: "FDA Category 1 vs Category 2: Understanding the 503A Bulks List for Peptides", desc: "What FDA 503A bulks list categories mean for peptide compounding and which peptides are Category 2.", type: "article" },
  "/blog/malpractice-carrier-peptide-practice": { title: "Why Your Malpractice Carrier Needs to Know About Your Peptide Practice", desc: "Risk management guide for peptide practitioners on malpractice coverage and carrier communication.", type: "article" },
  "/blog/peptide-therapy-billing-coding": { title: "Peptide Therapy Billing & Coding: A Clinician's Guide to Reimbursement", desc: "Comprehensive guide for healthcare providers on navigating CPT codes, J-codes, and billing strategies for peptide therapy reimbursement.", type: "article" },
  "/blog/integrating-peptide-therapy-practice": { title: "Integrating Peptide Therapy into Your Practice: A Step-by-Step Implementation Guide", desc: "Practical implementation guide for clinicians on adding peptide therapy services, from legal compliance to patient marketing.", type: "article" },
  "/blog/semaglutide-bpc157-case-study": { title: "Advanced Case Study: Combining Semaglutide and BPC-157 for Optimized Weight Loss and Gut Health", desc: "Clinical case study exploring synergistic effects of Semaglutide and BPC-157 combination therapy for weight loss and GI health.", type: "article" },
  // === MISSING PAGES - Added to fix Google indexing crisis (65 pages) ===
  // Utility & Resource Pages
  "/administration-guide": { title: "Peptide Administration Guide", desc: "Comprehensive guide to peptide administration techniques for healthcare providers. Subcutaneous, intramuscular, intranasal, and oral delivery methods with step-by-step protocols.", type: "page" },
  "/ai-agent": { title: "Dr. Peptide AI Agent - Personalized Peptide Protocol Generator", desc: "Meet Dr. Peptide AI, your intelligent peptide protocol assistant. Generate personalized peptide therapy protocols using 16 specialized AI agents trained on 2,800+ clinical studies.", type: "page" },
  "/ai-faq": { title: "Dr. Peptide AI FAQ - Frequently Asked Questions", desc: "Frequently asked questions about Dr. Peptide AI. Learn how the AI generates personalized peptide protocols, data privacy, clinical accuracy, and more.", type: "page" },
  "/are-peptides-safe": { title: "Are Peptides Safe? Evidence-Based Safety Guide for Healthcare Providers", desc: "Comprehensive evidence-based guide on peptide safety for healthcare providers. Side effects, contraindications, monitoring protocols, and risk management for therapeutic peptides.", type: "page" },
  "/case-studies": { title: "Peptide Therapy Case Studies - Clinical Outcomes & Patient Results", desc: "Real-world peptide therapy case studies demonstrating clinical outcomes. Patient results, protocol details, and lessons learned for healthcare providers.", type: "page" },
  "/downloads": { title: "Peptide Therapy Downloads - E-Books, Guides & Clinical Resources", desc: "Free downloadable peptide therapy resources for healthcare providers. E-books, clinical guides, patient handouts, consent forms, and protocol templates.", type: "page" },
  "/embed": { title: "Embed Peptide Education Hub - Widget for Your Practice Website", desc: "Embed Peptide Education Hub content on your practice website. Peptide information widgets, dosing calculators, and educational resources for patient engagement.", type: "page" },
  "/glossary": { title: "Peptide Therapy Glossary - Key Terms & Definitions", desc: "Comprehensive glossary of peptide therapy terminology. Definitions for clinical terms, mechanisms of action, administration methods, and regulatory concepts.", type: "page" },
  "/infographics": { title: "Peptide Therapy Infographics - Visual Clinical Guides", desc: "Visual infographics for peptide therapy education. Mechanisms of action, dosing protocols, comparison charts, and clinical decision trees for healthcare providers.", type: "page" },
  "/insurance-billing": { title: "Peptide Therapy Insurance & Billing Guide", desc: "Navigate peptide therapy insurance billing and reimbursement. CPT codes, J-codes, prior authorization strategies, and billing best practices for healthcare providers.", type: "page" },
  "/patient-education": { title: "Patient Education Materials for Peptide Therapy", desc: "Patient-facing educational materials for peptide therapy. Handouts, FAQs, consent information, and administration guides to support patient understanding.", type: "page" },
  "/practice-toolkit": { title: "Peptide Practice Toolkit - Everything You Need to Start", desc: "Complete toolkit for starting a peptide therapy practice. Templates, protocols, compliance checklists, marketing materials, and business planning resources.", type: "page" },
  "/resources": { title: "Peptide Therapy Resources for Healthcare Providers", desc: "Curated collection of peptide therapy resources. Research databases, clinical guidelines, regulatory updates, supplier directories, and professional organizations.", type: "page" },
  "/safety-compliance": { title: "Peptide Therapy Safety & Compliance Guide", desc: "Comprehensive safety and compliance guide for peptide therapy practices. FDA regulations, state requirements, documentation standards, and quality assurance protocols.", type: "page" },
  "/safety-management": { title: "Peptide Safety Management - Risk Assessment & Monitoring", desc: "Safety management protocols for peptide therapy. Risk assessment frameworks, adverse event monitoring, patient safety checklists, and emergency procedures.", type: "page" },
  "/safety-standards": { title: "Peptide Quality & Safety Standards", desc: "Quality and safety standards for therapeutic peptides. USP guidelines, purity testing, potency verification, sterility requirements, and supplier qualification criteria.", type: "page" },
  "/stacking-guide": { title: "Peptide Stacking Guide - Combining Peptides Safely & Effectively", desc: "Evidence-based guide to peptide stacking for healthcare providers. Safe combinations, synergistic protocols, timing strategies, and contraindicated pairings.", type: "page" },
  "/statistics": { title: "Peptide Therapy Statistics & Market Data", desc: "Peptide therapy industry statistics, market data, and clinical outcomes. Growth trends, patient demographics, efficacy rates, and market projections.", type: "page" },
  "/supplier-directory": { title: "Peptide Supplier Directory - Verified 503A & 503B Pharmacies", desc: "Directory of verified peptide suppliers for healthcare providers. 503A compounding pharmacies, 503B outsourcing facilities, quality ratings, and ordering information.", type: "page" },
  "/video-library": { title: "Peptide Therapy Video Library - Educational Videos for Clinicians", desc: "Educational video library for peptide therapy. Clinical demonstrations, mechanism animations, expert interviews, and training modules for healthcare providers.", type: "page" },
  "/guides/ultimate-peptide-therapy-guide": { title: "The Ultimate Peptide Therapy Guide for Healthcare Providers", desc: "The most comprehensive peptide therapy guide available. From fundamentals to advanced protocols, everything healthcare providers need to master peptide therapy.", type: "page" },
  // Protocol Pages
  "/protocols/cognitive": { title: "Cognitive Enhancement Peptide Protocols", desc: "Evidence-based cognitive enhancement peptide protocols for healthcare providers. Nootropic stacks, neuroprotection regimens, and brain optimization strategies.", type: "page" },
  "/protocols/injury-healing": { title: "Injury Healing Peptide Protocols", desc: "Peptide protocols for accelerated injury healing and tissue repair. BPC-157, TB-500, and regenerative peptide combinations for clinical recovery.", type: "page" },
  "/protocols/longevity": { title: "Longevity & Anti-Aging Peptide Protocols", desc: "Anti-aging and longevity peptide protocols for healthcare providers. Telomere support, mitochondrial optimization, and cellular rejuvenation strategies.", type: "page" },
  "/protocols/metabolism": { title: "Metabolic Optimization Peptide Protocols", desc: "Metabolic optimization peptide protocols for healthcare providers. Fat loss, insulin sensitivity, and metabolic health improvement strategies.", type: "page" },
  "/protocols/weight-loss": { title: "Weight Loss Peptide Protocols - GLP-1, Tirzepatide & More", desc: "Evidence-based weight loss peptide protocols. Semaglutide, tirzepatide, and combination therapy protocols with dosing schedules and monitoring guidelines.", type: "page" },
  // Missing Peptide Pages
  "/peptides/glp-1": { title: "GLP-1 Receptor Agonists - Comprehensive Guide", desc: "Comprehensive guide to GLP-1 receptor agonist peptides for healthcare providers. Semaglutide, liraglutide, and emerging GLP-1 therapies with clinical protocols.", type: "peptide", category: "Weight Loss" },
  "/peptides/glutathione": { title: "Glutathione - Master Antioxidant Peptide", desc: "Comprehensive glutathione guide: master antioxidant mechanism, IV and oral dosing protocols, detoxification support, and clinical applications for healthcare providers.", type: "peptide", category: "Anti-Aging" },
  "/peptides/melanotan-1": { title: "Melanotan I (Afamelanotide) - Photoprotective Peptide", desc: "Comprehensive Melanotan I guide: alpha-MSH analog mechanism, photoprotection dosing, erythropoietic protoporphyria treatment, and clinical applications.", type: "peptide", category: "Skin" },
  "/peptides/nad": { title: "NAD+ Therapy - Nicotinamide Adenine Dinucleotide", desc: "Comprehensive NAD+ therapy guide: cellular energy mechanism, IV and subcutaneous protocols, anti-aging applications, and clinical dosing for healthcare providers.", type: "peptide", category: "Anti-Aging" },
  "/peptides/nad-nasal-spray": { title: "NAD+ Nasal Spray - Intranasal NAD+ Delivery", desc: "NAD+ nasal spray guide: intranasal delivery mechanism, bioavailability advantages, dosing protocols, and clinical applications for cognitive and anti-aging support.", type: "peptide", category: "Anti-Aging" },
  "/peptides/pinealon": { title: "Pinealon - Neuroprotective Tripeptide", desc: "Comprehensive Pinealon guide: EDR tripeptide mechanism, pineal gland support, neuroprotection dosing, circadian rhythm optimization, and clinical applications.", type: "peptide", category: "Cognitive Enhancement" },
  "/peptides/slu-pp-332": { title: "SLU-PP-332 - Exercise Mimetic ERR Agonist", desc: "Comprehensive SLU-PP-332 guide: ERR agonist mechanism, exercise mimetic effects, fat metabolism, muscle endurance enhancement, and clinical research.", type: "peptide", category: "Weight Loss" },
  "/peptides/bpc-157-capsules": { title: "BPC-157 Capsules - Oral BPC-157 Administration", desc: "BPC-157 oral capsule guide: oral bioavailability, gut healing protocols, dosing for GI applications, and comparison with injectable BPC-157.", type: "peptide", category: "Regenerative" },
  "/peptides/ghk-cu-serum": { title: "GHK-Cu Serum - Topical Copper Peptide", desc: "GHK-Cu serum guide: topical copper peptide application, skin rejuvenation protocols, wound healing, hair growth, and clinical dermatology applications.", type: "peptide", category: "Skin" },
  "/peptides/glow-blend-capsules": { title: "GLOW Capsules - Oral Beauty Supplement Blend", desc: "GLOW Capsules: oral beauty supplement peptide blend for skin health, collagen support, and anti-aging from within.", type: "formula", category: "Skin" },
  "/peptides/klow-blend-capsules": { title: "KLOW Capsules - Comprehensive Beauty From Within", desc: "KLOW Capsules: comprehensive beauty peptide blend for skin, hair, and nail health from within.", type: "formula", category: "Skin" },
  // === MISSING BLOG POSTS - All dynamic blog posts need pre-rendered HTML ===
  "/blog/getting-started": { title: "How to Start a Peptide Therapy Practice in 2026", desc: "A comprehensive guide for healthcare providers looking to integrate peptide therapy into their practice.", type: "article" },
  "/blog/choosing-supplier": { title: "How to Choose a Peptide Supplier: Quality Standards Guide", desc: "Essential guide for evaluating peptide suppliers including purity testing, COA verification, and regulatory compliance.", type: "article" },
  "/blog/bpc157-tb500": { title: "BPC-157 vs TB-500: Comparing Two Powerful Healing Peptides", desc: "Head-to-head comparison of BPC-157 and TB-500 for tissue repair, wound healing, and recovery applications.", type: "article" },
  "/blog/glp1-therapy": { title: "Semaglutide vs Tirzepatide: Complete GLP-1 Therapy Guide", desc: "Comprehensive comparison of semaglutide and tirzepatide for weight loss, including dosing protocols and clinical outcomes.", type: "article" },
  "/blog/quality-standards": { title: "Peptide Quality Standards: What Healthcare Providers Need to Know", desc: "Understanding peptide purity, potency, and quality testing standards for clinical applications.", type: "article" },
  "/blog/storage-handling": { title: "Peptide Storage and Handling: Best Practices Guide", desc: "Complete guide to proper peptide storage, handling, reconstitution, and stability for healthcare practices.", type: "article" },
  "/blog/practice-roi": { title: "Peptide Therapy ROI: Building a Profitable Practice", desc: "Financial analysis and business strategies for building a profitable peptide therapy practice.", type: "article" },
  "/blog/thymosin-alpha-1": { title: "Thymosin Alpha-1: Immune Modulation for Clinical Practice", desc: "Evidence-based guide to thymosin alpha-1 for immune support, cancer adjunct therapy, and chronic infections.", type: "article" },
  "/blog/pt-141": { title: "PT-141 (Bremelanotide): Sexual Wellness Applications", desc: "Clinical guide to PT-141 for sexual dysfunction in men and women, including dosing and patient selection.", type: "article" },
  "/blog/semax": { title: "Semax: Cognitive Enhancement and Neuroprotection", desc: "Comprehensive guide to semax for cognitive enhancement, stroke recovery, and neuroprotective applications.", type: "article" },
  "/blog/tesamorelin": { title: "Tesamorelin: Visceral Fat Reduction and GH Optimization", desc: "Clinical guide to tesamorelin for visceral fat reduction, lipodystrophy, and growth hormone optimization.", type: "article" },
  "/blog/melanotan-ii": { title: "Melanotan II: Photoprotection and Clinical Considerations", desc: "Evidence-based guide to Melanotan II for tanning, photoprotection, and sexual health applications.", type: "article" },
  "/blog/ipamorelin": { title: "Ipamorelin: Growth Hormone Secretagogue Guide", desc: "Comprehensive ipamorelin guide for GH optimization, anti-aging, and body composition improvement.", type: "article" },
  "/blog/ghk-cu": { title: "GHK-Cu: Regenerative Medicine and Skin Rejuvenation", desc: "Clinical guide to GHK-Cu copper peptide for wound healing, skin regeneration, and anti-aging applications.", type: "article" },
  "/blog/implementing-peptide-therapy": { title: "Implementing Peptide Therapy in Your Practice", desc: "Step-by-step implementation guide for adding peptide therapy services to your healthcare practice.", type: "article" },
  "/blog/peptideprotocols-ai": { title: "PeptideProtocols.AI: How AI is Revolutionizing Peptide Therapy", desc: "How Dr. Peptide AI uses 16 specialized agents to generate personalized peptide protocols from clinical data.", type: "article" },
  "/blog/founder-story": { title: "The Founder Story: Building Peptide Education Hub", desc: "The story behind Peptide Education Hub and the mission to democratize peptide therapy education.", type: "article" },
  "/blog/training-practitioners": { title: "Training Practitioners in Peptide Therapy", desc: "Guide to peptide therapy training programs, certifications, and continuing education for healthcare providers.", type: "article" },
  "/blog/dr-peptide-ai": { title: "Dr. Peptide AI: Your Intelligent Protocol Assistant", desc: "Introduction to Dr. Peptide AI and how it generates evidence-based peptide therapy protocols.", type: "article" },
  "/blog/neuro-series-formulas": { title: "Neuro Series Formulas: Advanced Cognitive Peptide Blends", desc: "Overview of the N-series cognitive enhancement formulas including N-69, N-111, N-259, N-2331, and N-5550.", type: "article" },
  "/blog/regen-metabolic-formulas": { title: "Regenerative and Metabolic Formulas: Advanced Peptide Blends", desc: "Overview of regenerative and metabolic peptide formulas including RG-5555, M-51, M-2531, and W-1175.", type: "article" },
  "/blog/ai-formula-design": { title: "AI-Driven Formula Design: The Future of Peptide Blends", desc: "How artificial intelligence is being used to design optimized peptide blend formulations.", type: "article" },
  "/blog/peptide-therapy-weight-loss": { title: "Peptide Therapy for Weight Loss: A Clinical Guide", desc: "Comprehensive guide to using peptides for weight loss including GLP-1 agonists, metabolic peptides, and combination protocols.", type: "article" },
  "/blog/anti-aging-peptides": { title: "Anti-Aging Peptides: Evidence-Based Longevity Protocols", desc: "Guide to anti-aging peptide therapies including epithalon, GHK-Cu, NAD+, and mitochondrial peptides.", type: "article" },
  "/blog/peptides-muscle-growth": { title: "Peptides for Muscle Growth and Body Composition", desc: "Evidence-based guide to peptides for muscle growth, recovery, and body composition optimization.", type: "article" },
  "/blog/peptides-injury-recovery": { title: "Peptides for Injury Recovery: Clinical Protocols", desc: "Clinical protocols for using BPC-157, TB-500, and regenerative peptides for accelerated injury recovery.", type: "article" },
  "/blog/peptides-cognitive-enhancement": { title: "Peptides for Cognitive Enhancement: Nootropic Guide", desc: "Guide to cognitive enhancement peptides including semax, selank, dihexa, and neuroprotective compounds.", type: "article" },
  "/blog/peptides-immune-support": { title: "Peptides for Immune Support: Clinical Applications", desc: "Evidence-based guide to immune-modulating peptides including thymosin alpha-1, LL-37, and KPV.", type: "article" },
  "/blog/peptides-sexual-health": { title: "Peptides for Sexual Health: PT-141 and Beyond", desc: "Clinical guide to peptides for sexual health including PT-141, kisspeptin, and oxytocin protocols.", type: "article" },
  "/blog/peptides-sleep-optimization": { title: "Peptides for Sleep Optimization: DSIP and Beyond", desc: "Guide to sleep-optimizing peptides including DSIP, pinealon, and the N-259 sleep protocol.", type: "article" },
  "/blog/future-peptide-therapy": { title: "The Future of Peptide Therapy: Emerging Trends", desc: "Emerging trends in peptide therapy including new compounds, delivery methods, and regulatory developments.", type: "article" },
  "/blog/peptide-practice-business": { title: "Building a Peptide Therapy Business: Practice Guide", desc: "Business strategies for building and growing a successful peptide therapy practice.", type: "article" },
  "/blog/reconstitution-guide": { title: "Peptide Reconstitution Guide: Step-by-Step Instructions", desc: "Detailed reconstitution guide with bacteriostatic water calculations, storage tips, and common mistakes to avoid.", type: "article" },
  "/blog/503a-vs-503b": { title: "503A vs 503B Pharmacies: Understanding Compounding Regulations", desc: "Comprehensive comparison of 503A and 503B pharmacy regulations for peptide compounding.", type: "article" },
  "/blog/fda-peptide-regulations-2026": { title: "FDA Peptide Regulations 2026: What Providers Need to Know", desc: "Updated guide to FDA peptide regulations in 2026 including 503A bulks list changes and enforcement actions.", type: "article" },
  "/blog/peptides-gut-health": { title: "Peptides for Gut Health: BPC-157, KPV and Larazotide", desc: "Clinical guide to gut-healing peptides including BPC-157, KPV, and larazotide for GI conditions.", type: "article" },
  "/blog/n-259-sleep-science": { title: "The Science of Superior Sleep: Deconstructing the N-259 Protocol", desc: "How Apigenin, Magnesium Glycinate, L-Theanine, and physiological melatonin work synergistically for optimal sleep.", type: "article" },
  "/blog/n-259-beyond-melatonin": { title: "Beyond Melatonin: Why Your Sleep Protocol is Missing 3 Key Ingredients", desc: "Understanding the multi-pathway approach to sleep: GABA support, neuromuscular relaxation, and alpha-wave promotion.", type: "article" },
  "/blog/n-69-neuroscience-desire": { title: "The Neuroscience of Desire: How N-69 Reboots the Brain-Body Connection", desc: "A deep dive into the 5-pathway approach of NALT, Kisspeptin, PT-141, Oxytocin, and VIP for sexual wellness.", type: "article" },
  "/blog/n-69-brain-libido": { title: "Is Your Brain the Reason You Are Not in the Mood?", desc: "How stress, dopamine depletion, and hormonal imbalances affect desire, and the science of restoring it.", type: "article" },
  "/blog/n-111-holy-trinity": { title: "The Holy Trinity of Nootropics: Why N-111 is a Game-Changer", desc: "How J147, Dihexa, and Noopept work together for neurogenesis, memory enhancement, and neuroprotection.", type: "article" },
  "/blog/n-111-neurogenesis": { title: "Are You Building a Better Brain, or Just Renting It?", desc: "Why true cognitive enhancement requires growing new neurons and synapses, not just temporary stimulation.", type: "article" },
  "/blog/n-5550-brain-body": { title: "The Ultimate Brain-Body Upgrade: How N-5550 Tackles Cognition and Metabolism", desc: "Dihexa, Tesofensine, and Methylene Blue for addressing brain fog and metabolic dysfunction together.", type: "article" },
  "/blog/n-5550-brain-fat": { title: "The Brain-Fat Connection: Why Your Weight Loss Stall is All in Your Head", desc: "How dopamine depletion and brain chemistry affect appetite, metabolism, and weight loss resistance.", type: "article" },
  "/blog/n-2331-cognitive-stack": { title: "The Ultimate Cognitive Enhancement Stack: Deconstructing N-2331", desc: "How Dihexa, Selank, Semax, and NAD+ work synergistically for comprehensive brain optimization.", type: "article" },
  "/blog/n-2331-anxiety-cognition": { title: "The Anxiety-Cognition Connection: Stress and Mental Performance", desc: "How chronic stress impairs cognitive function and the science of restoring mental clarity.", type: "article" },
  "/blog/rg-5555-healing-cascade": { title: "The 4-Step Cascade of Superior Healing: Deconstructing RG-5555", desc: "How BPC-157, TB-500, KPV, and Larazotide work together for comprehensive injury recovery.", type: "article" },
  "/blog/rg-5555-gut-healing": { title: "Is Your Gut Sabotaging Your Injury Recovery?", desc: "How gut permeability affects systemic inflammation and the role of Larazotide in healing.", type: "article" },
  "/blog/m-51-push-pull": { title: "The Push-Pull Effect: How M-51 Burns Fat from Two Directions", desc: "How 5-Amino-1MQ and SLU-PP-332 work synergistically to inhibit fat storage and activate fat burning.", type: "article" },
  "/blog/m-51-nnmt": { title: "The Hidden Enzyme Keeping You Fat: Understanding NNMT", desc: "How NNMT inhibition with 5-Amino-1MQ can unlock stubborn fat loss and improve metabolic health.", type: "article" },
  "/blog/m-2531-cellular-engines": { title: "The Signal and the Fuel: How M-2531 Rejuvenates Cellular Engines", desc: "How MOTS-c, NAD+, and mitochondrial support compounds restore cellular energy production.", type: "article" },
  "/blog/m-2531-exercise-paradox": { title: "The Exercise Paradox: Working Out But Still Feeling Old?", desc: "Why exercise alone is not enough and how mitochondrial peptides can restore youthful energy.", type: "article" },
  "/blog/w-1175-exercise-pill": { title: "The Exercise in a Pill Phenomenon: Deconstructing W-1175", desc: "How SLU-PP-332 and Orforglipron combine exercise mimetics with GLP-1 for metabolic optimization.", type: "article" },

  "/resources/consent-forms": { title: "Peptide Therapy Consent Form Templates - State-Specific & Customizable", desc: "Downloadable consent form templates for peptide therapy. State-specific forms for TX, CA, FL, NY.", type: "page" },
  "/resources/consent-forms/standard-us": { title: "Standard US Peptide Therapy Consent Form Template", desc: "Comprehensive informed consent for research-grade peptide therapy.", type: "page" },
  "/resources/consent-forms/texas": { title: "Texas Peptide Therapy Consent Form - THSC Ch 490", desc: "Texas-specific consent form incorporating Right to Try provisions.", type: "page" },
  "/resources/consent-forms/california": { title: "California Peptide Therapy Consent Form - H&SC 24170", desc: "California-specific consent with experimental subject bill of rights.", type: "page" },
  "/resources/consent-forms/florida": { title: "Florida Peptide Therapy Consent Form - 766.103", desc: "Florida-specific consent meeting informed consent requirements.", type: "page" },
  "/resources/consent-forms/new-york": { title: "New York Peptide Therapy Consent Form - PHL Art 24-A", desc: "New York-specific consent with human research protections.", type: "page" },
  "/resources/consent-forms/abbreviated": { title: "Abbreviated Peptide Therapy Consent Form", desc: "Shortened consent covering essential disclosures in concise format.", type: "page" },
  "/resources/consent-forms/multi-peptide-registry": { title: "Multi-Peptide Protocol with Registry Consent Form", desc: "Consent for multi-peptide protocols with patient registry enrollment.", type: "page" },
  "/what-are-peptides": { title: "What Are Peptides? Comprehensive Guide for Healthcare Providers", desc: "Comprehensive guide to peptides for healthcare providers. Learn about peptide structure, mechanisms, therapeutic applications, and clinical use in modern medicine.", type: "page" },
  "/how-to-inject-peptides": { title: "How to Inject Peptides: Comprehensive Guide", desc: "Step-by-step guide to peptide injection techniques, reconstitution, dosing, and best practices for healthcare providers.", type: "page" },
  "/peptides/kisspeptin-10": { title: "Kisspeptin-10 - Reproductive Hormone Peptide", desc: "Clinical guide to Kisspeptin-10 for reproductive health and hormone regulation. Mechanisms, research findings, dosing protocols, and safety data.", type: "peptide", category: "Sexual Health" },
  "/peptides/melanotan-2": { title: "Melanotan II - Tanning & Sexual Health Peptide", desc: "Evidence-based Melanotan II guide for healthcare providers. Melanocortin agonist protocols and safety considerations.", type: "peptide", category: "Sexual Health" },
};

// Formula composition data for rich structured data and SSR content
const FORMULA_DATA = {
  "/peptides/formula-n-69": {
    name: "Formula N-69",
    altNames: ["N-69", "N69", "Formula N69"],
    composition: "NALT + Kisspeptin + PT-141 + Oxytocin + VIP",
    category: "Sexual Enhancement & Intimacy",
    description: "A multi-pathway sexual enhancement formula combining five synergistic compounds for comprehensive sexual health optimization in both men and women.",
    ingredients: ["NALT (N-Acetyl L-Tyrosine)", "Kisspeptin", "PT-141 (Bremelanotide)", "Oxytocin", "VIP (Vasoactive Intestinal Peptide)"],
    uses: "sexual health, libido enhancement, intimacy, erectile dysfunction support, arousal"
  },
  "/peptides/formula-n-111": {
    name: "Formula N-111",
    altNames: ["N-111", "N111", "Formula N111"],
    composition: "J147 + Dihexa + Noopept",
    category: "Cognitive Enhancement",
    description: "A triple-action cognitive enhancement formula combining three potent nootropic compounds for neuroprotection, memory enhancement, and brain optimization.",
    ingredients: ["J147", "Dihexa", "Noopept"],
    uses: "cognitive enhancement, memory improvement, neuroprotection, brain fog, mental clarity"
  },
  "/peptides/formula-n-259": {
    name: "Formula N-259",
    altNames: ["N-259", "N259", "Formula N259"],
    composition: "Apigenin + Magnesium Glycinate + L-Theanine + Melatonin",
    category: "Sleep & Circadian Optimization",
    description: "A comprehensive sleep optimization formula combining four synergistic compounds for improved sleep quality, circadian rhythm regulation, and restorative rest.",
    ingredients: ["Apigenin", "Magnesium Glycinate", "L-Theanine", "Melatonin"],
    uses: "sleep quality, insomnia, circadian rhythm, deep sleep, relaxation"
  },
  "/peptides/formula-n-2331": {
    name: "Formula N-2331",
    altNames: ["N-2331", "N2331", "Formula N2331"],
    composition: "Dihexa + Selank + Semax + NAD+",
    category: "Neuro-Cognitive & NAD+ Support",
    description: "An advanced neuro-cognitive enhancement formula combining four compounds for comprehensive brain optimization, neuroplasticity, and cellular energy support.",
    ingredients: ["Dihexa", "Selank", "Semax", "NAD+ (Nicotinamide Adenine Dinucleotide)"],
    uses: "cognitive enhancement, neuroplasticity, brain health, NAD+ support, mental performance"
  },
  "/peptides/formula-n-5550": {
    name: "Formula N-5550",
    altNames: ["N-5550", "N5550", "Formula N5550"],
    composition: "Dihexa + Tesofensine + Methylene Blue",
    category: "Multi-Target Cognitive Enhancement",
    description: "A multi-target cognitive enhancement formula combining three distinct mechanisms for comprehensive brain optimization, neurotransmitter support, and mitochondrial enhancement.",
    ingredients: ["Dihexa", "Tesofensine", "Methylene Blue"],
    uses: "cognitive enhancement, neurotransmitter optimization, mitochondrial support, focus, mental energy"
  },
  "/peptides/formula-rg-5555": {
    name: "Formula RG-5555",
    altNames: ["RG-5555", "RG5555", "Formula RG5555"],
    composition: "BPC-157 + TB-500 + GHK-Cu + Pentosan Polysulfate",
    category: "Healing & Recovery",
    description: "A multi-pathway healing acceleration formula combining four regenerative compounds for comprehensive tissue repair, wound healing, and recovery optimization.",
    ingredients: ["BPC-157", "TB-500 (Thymosin Beta-4)", "GHK-Cu (Copper Peptide)", "Pentosan Polysulfate"],
    uses: "tissue repair, wound healing, injury recovery, joint health, regeneration"
  },
  "/peptides/formula-m-51": {
    name: "Formula M-51",
    altNames: ["M-51", "M51", "Formula M51"],
    composition: "50mg 5-AMINO-1MQ + 1mg SLU-PP-332",
    category: "Exercise Mimetic & Metabolic",
    description: "An advanced exercise mimetic formula combining two metabolic compounds that activate exercise pathways for fat burning, muscle strength, and metabolic optimization without exercise.",
    ingredients: ["5-AMINO-1MQ (50mg)", "SLU-PP-332 (1mg)"],
    uses: "exercise mimetic, fat burning, metabolic optimization, muscle strength, NNMT inhibition"
  },
  "/peptides/formula-m-shred": {
    name: "Formula M-Shred",
    altNames: ["M-Shred", "MShred", "Formula MShred", "M Shred"],
    composition: "10mg BAM-15 + 15mg SLU-PP-332 + 150mg C15 (Pentadecanoic Acid)",
    category: "Fat Loss & Body Composition",
    description: "An advanced triple-compound oral capsule combining BAM-15 mitochondrial uncoupler, SLU-PP-332 exercise mimetic, and C15 Pentadecanoic Acid for comprehensive mitochondria-targeted fat loss, metabolic enhancement, and body composition optimization.",
    ingredients: ["BAM-15 - Mitochondrial Uncoupler (10mg)", "SLU-PP-332 - ERR Receptor Agonist / Exercise Mimetic (15mg)", "C15 / Pentadecanoic Acid - Metabolic Protector (150mg)"],
    uses: "fat loss, body composition, metabolic enhancement, mitochondrial optimization, exercise mimetic, insulin sensitivity, anti-inflammatory, hepatoprotective"
  },
  "/peptides/formula-m-2531": {
    name: "Formula M-2531",
    altNames: ["M-2531", "M2531", "Formula M2531"],
    composition: "250mg TUDCA + 50mg 5-Amino-1MQ + 300mg NAC + 10mg PQQ",
    category: "Mitochondrial Support",
    description: "A comprehensive mitochondrial support formula combining four compounds for cellular energy optimization, liver support, and longevity enhancement.",
    ingredients: ["TUDCA (250mg)", "5-Amino-1MQ (50mg)", "NAC - N-Acetyl Cysteine (300mg)", "PQQ - Pyrroloquinoline Quinone (10mg)"],
    uses: "mitochondrial health, cellular energy, liver support, longevity, antioxidant"
  },
  "/peptides/formula-wl-1175": {
    name: "Formula WL-1175",
    altNames: ["WL-1175", "WL1175", "Formula WL1175"],
    composition: "1mg SLU-PP-332 + 15mg Orforglipron",
    category: "Metabolic Health & Weight Management",
    description: "A comprehensive metabolic health formula combining an exercise mimetic with an oral GLP-1 receptor agonist for weight management and metabolic optimization.",
    ingredients: ["SLU-PP-332 (1mg)", "Orforglipron (15mg)"],
    uses: "weight management, GLP-1, metabolic health, appetite regulation, oral weight loss"
  },
  "/peptides/formula-os-01": {
    name: "OS-01 (O-304/ATX-304)",
    altNames: ["OS-01", "OS01", "O-304", "ATX-304", "Formula OS-01", "Pan-AMPK Activator", "DrsPeptides OS-01"],
    composition: "100mg O-304 (ATX-304) per enteric-coated capsule",
    category: "Longevity & Anti-Aging",
    description: "A first-in-class orally bioavailable pan-AMPK activator with dual mitochondrial uncoupling mechanism. O-304 (ATX-304, CAS 1261289-04-6) activates all AMPK isoforms (β1 and β2 subunits) while also functioning as a mild mitochondrial uncoupler. Phase IIa human clinical trial completed in T2D patients showing significant fasting plasma glucose reduction (-0.60 mM, p=0.0096), HOMA-IR improvement, blood pressure reduction, and increased microvascular perfusion. ENDO 2025 breakthrough data showed -21% weight loss as monotherapy with 100% fat loss and zero lean mass loss, and -27% combined with semaglutide.",
    ingredients: ["O-304 / ATX-304 - Pan-AMPK Activator & Mild Mitochondrial Uncoupler (100mg)"],
    uses: "longevity, anti-aging, AMPK activation, glucose regulation, insulin sensitivity, cardiovascular support, fat loss, lean mass preservation, metabolic optimization, mitochondrial uncoupling, exercise mimetic, blood pressure reduction, microvascular perfusion, GLP-1 synergy, semaglutide companion"
  },
  "/peptides/glow-core": {
    name: "GLOW Core",
    altNames: ["Glow Core", "GlowCore"],
    composition: "50mg GHK-Cu + 10mg TB-500 + 10mg BPC-157",
    category: "Skin Rejuvenation",
    description: "A foundation skin health blend combining three regenerative peptides for collagen stimulation, wound healing, and anti-aging skin rejuvenation.",
    ingredients: ["GHK-Cu - Copper Peptide (50mg)", "TB-500 - Thymosin Beta-4 (10mg)", "BPC-157 - Body Protection Compound (10mg)"],
    uses: "skin rejuvenation, collagen stimulation, wound healing, anti-aging, skin health"
  },
  "/peptides/glow-plus": {
    name: "GLOW Plus",
    altNames: ["Glow Plus", "GlowPlus"],
    composition: "50mg GHK-Cu + 10mg TB-500 + 10mg BPC-157 + 10mg KPV",
    category: "Enhanced Skin Rejuvenation",
    description: "An enhanced skin rejuvenation blend adding anti-inflammatory KPV to the Glow Core formula for inflammatory skin conditions and gut-skin axis optimization.",
    ingredients: ["GHK-Cu - Copper Peptide (50mg)", "TB-500 - Thymosin Beta-4 (10mg)", "BPC-157 - Body Protection Compound (10mg)", "KPV - Anti-Inflammatory Peptide (10mg)"],
    uses: "skin rejuvenation, anti-inflammatory, gut-skin axis, eczema, psoriasis, collagen"
  },
  "/peptides/glow-ultra": {
    name: "GLOW Ultra",
    altNames: ["Glow Ultra", "GlowUltra"],
    composition: "70mg GHK-Cu + 10mg TB-500 + 10mg BPC-157",
    category: "Maximum Potency Anti-Aging",
    description: "A maximum potency anti-aging formula with increased GHK-Cu concentration for deep wrinkle reduction, maximum collagen stimulation, and comprehensive skin renewal.",
    ingredients: ["GHK-Cu - Copper Peptide (70mg)", "TB-500 - Thymosin Beta-4 (10mg)", "BPC-157 - Body Protection Compound (10mg)"],
    uses: "deep wrinkle reduction, maximum collagen, anti-aging, skin renewal, rejuvenation"
  },
  "/peptides/bpc-157-tb-500": {
    name: "BPC-157 + TB-500",
    altNames: ["BPC-157 TB-500", "BPC157 TB500", "Wolverine Stack"],
    composition: "BPC-157 + TB-500 (Thymosin Beta-4)",
    category: "Regenerative & Healing",
    description: "The gold standard healing combination pairing two of the most researched regenerative peptides for accelerated tissue repair, wound healing, and recovery.",
    ingredients: ["BPC-157 (Body Protection Compound)", "TB-500 (Thymosin Beta-4)"],
    uses: "tissue repair, wound healing, injury recovery, tendon healing, gut repair"
  },
  "/peptides/semaglutide-bpc-157": {
    name: "Semaglutide + BPC-157",
    altNames: ["Semaglutide BPC-157", "Sema BPC"],
    composition: "Semaglutide + BPC-157",
    category: "Weight Loss with GI Protection",
    description: "A strategic combination of GLP-1 receptor agonist weight loss therapy with gut-healing BPC-157 to minimize GI side effects while maximizing metabolic benefits.",
    ingredients: ["Semaglutide (GLP-1 Receptor Agonist)", "BPC-157 (Body Protection Compound)"],
    uses: "weight loss, GI protection, nausea reduction, metabolic optimization, gut healing"
  },
  "/peptides/tirzepatide-bpc-157": {
    name: "Tirzepatide + BPC-157",
    altNames: ["Tirzepatide BPC-157", "Tirz BPC"],
    composition: "Tirzepatide + BPC-157",
    category: "Weight Loss with Gut Healing",
    description: "A dual GIP/GLP-1 agonist combined with gut-healing BPC-157 for comprehensive metabolic optimization with GI protection.",
    ingredients: ["Tirzepatide (Dual GIP/GLP-1 Agonist)", "BPC-157 (Body Protection Compound)"],
    uses: "weight loss, dual agonist, gut healing, metabolic optimization, GI protection"
  },
  "/peptides/cjc-1295-ipamorelin": {
    name: "CJC-1295 + Ipamorelin",
    altNames: ["CJC-1295 Ipamorelin", "CJC Ipa", "CJC/Ipa"],
    composition: "CJC-1295 + Ipamorelin",
    category: "Growth Hormone Optimization",
    description: "The most popular growth hormone optimization combination providing sustained GH release for anti-aging, body composition, and recovery.",
    ingredients: ["CJC-1295 (GHRH Analog)", "Ipamorelin (GH Secretagogue)"],
    uses: "growth hormone, anti-aging, body composition, recovery, muscle growth, fat loss"
  },
  "/peptides/selank-semax": {
    name: "Selank + Semax",
    altNames: ["Selank Semax", "Selank/Semax"],
    composition: "Selank + Semax",
    category: "Cognitive & Anxiolytic",
    description: "A synergistic combination of anxiolytic Selank with nootropic Semax for comprehensive mental performance optimization, anxiety reduction, and cognitive enhancement.",
    ingredients: ["Selank (Tuftsin Analog)", "Semax (ACTH Fragment)"],
    uses: "anxiety reduction, cognitive enhancement, mental performance, neuroprotection, focus"
  },
  "/peptides/tesamorelin-ipamorelin": {
    name: "Tesamorelin + Ipamorelin",
    altNames: ["Tesamorelin Ipamorelin", "Tesa Ipa"],
    composition: "Tesamorelin + Ipamorelin",
    category: "GH Optimization & Visceral Fat",
    description: "A synergistic growth hormone optimization blend combining FDA-approved tesamorelin with ipamorelin for visceral fat reduction and anti-aging.",
    ingredients: ["Tesamorelin (FDA-approved GHRH Analog)", "Ipamorelin (GH Secretagogue)"],
    uses: "visceral fat reduction, growth hormone, anti-aging, body composition, lipodystrophy"
  }
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
        "@type": "EducationalOrganization",
        "name": "Peptide Education Hub",
        "url": SITE_URL,
        "description": "The most comprehensive evidence-based peptide education resource for healthcare providers. 65+ peptide profiles, clinical tools, dosing protocols, and training resources.",
        "areaServed": "Worldwide",
        "sameAs": ["https://drspeptides.com", "https://peptideprotocols.ai"]
      }
    });
    schemas.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Peptide Education Hub",
      "url": SITE_URL,
      "description": "The most comprehensive evidence-based peptide education resource for healthcare providers. Professional peptide therapy education including 65+ peptide profiles, clinical tools, dosing calculators, and certification resources.",
      "foundingDate": "2025",
      "areaServed": "Worldwide",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Dallas Regenerative LLC",
        "url": "https://drspeptides.com"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Peptide Education Resources",
        "itemListElement": [
          {"@type": "Course", "name": "Peptide Therapy Fundamentals", "description": "Foundational peptide education covering peptide science, mechanisms of action, and therapeutic applications", "provider": {"@type": "EducationalOrganization", "name": "Peptide Education Hub"}},
          {"@type": "Course", "name": "Clinical Peptide Protocols", "description": "Evidence-based dosing protocols and administration techniques for 65+ therapeutic peptides", "provider": {"@type": "EducationalOrganization", "name": "Peptide Education Hub"}},
          {"@type": "Course", "name": "Peptide Safety & Regulatory Compliance", "description": "FDA regulations, off-label prescribing frameworks, drug interactions, and state-specific consent forms", "provider": {"@type": "EducationalOrganization", "name": "Peptide Education Hub"}}
        ]
      }
    });
  }

  // Course/EducationalOrganization schema for peptide-education page
  if (routePath === "/peptide-education") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Peptide Education for Healthcare Providers",
      "description": "The most comprehensive evidence-based peptide education platform. 65+ peptide profiles, clinical tools, dosing protocols, and training resources designed for healthcare professionals.",
      "url": canonicalUrl,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Peptide Education Hub",
        "url": SITE_URL
      },
      "educationalLevel": "Professional",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "Professional",
        "audienceType": "Healthcare Providers"
      },
      "about": [
        {"@type": "Thing", "name": "Peptide Therapy"},
        {"@type": "Thing", "name": "Peptide Education"},
        {"@type": "Thing", "name": "Regenerative Medicine"},
        {"@type": "Thing", "name": "Clinical Protocols"}
      ],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "Self-paced"
      },
      "numberOfCredits": "65+ peptide profiles",
      "isAccessibleForFree": true
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
      "dateModified": "2026-02-22"
    });
  }

  // BreadcrumbList
  const breadcrumbs = [{ name: "Home", url: SITE_URL }];
  if (routePath.startsWith("/peptides/formula-")) {
    breadcrumbs.push({ name: "Formulas", url: `${SITE_URL}/peptide-index` });
    breadcrumbs.push({ name: meta.title.split(" |")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/peptides/")) {
    breadcrumbs.push({ name: "Peptide Index", url: `${SITE_URL}/peptide-index` });
    breadcrumbs.push({ name: meta.title.split(" -")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/tools/")) {
    breadcrumbs.push({ name: "Tools", url: `${SITE_URL}/tools` });
    breadcrumbs.push({ name: meta.title.split(" |")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/blog/")) {
    breadcrumbs.push({ name: "Blog", url: `${SITE_URL}/blog` });
    breadcrumbs.push({ name: meta.title.split(" |")[0].split(" -")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/protocols/")) {
    breadcrumbs.push({ name: "Protocols", url: `${SITE_URL}/protocols/weight-loss` });
    breadcrumbs.push({ name: meta.title.split(" |")[0].split(" -")[0], url: canonicalUrl });
  } else if (routePath.startsWith("/resources/")) {
    breadcrumbs.push({ name: "Resources", url: `${SITE_URL}/downloads` });
    breadcrumbs.push({ name: meta.title.split(" |")[0].split(" -")[0], url: canonicalUrl });
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

  // Article schema for blog posts
  if (meta.type === "blog" || meta.type === "article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": meta.title.split(" |")[0].split(" -")[0].trim(),
      "description": meta.desc,
      "url": canonicalUrl,
      "author": {
        "@type": "Organization",
        "name": "Peptide Education Hub",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Peptide Education Hub",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/favicon-192x192.png`
        }
      },
      "datePublished": "2025-12-01",
      "dateModified": "2026-03-16",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "image": `${SITE_URL}/drspeptides_social_hero.png`,
      "articleSection": "Peptide Therapy Education",
      "inLanguage": "en-US"
    });
  }

  // SoftwareApplication schema for tool pages
  if (meta.type === "tool") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": meta.title.split(" |")[0].split(" -")[0].trim(),
      "description": meta.desc,
      "url": canonicalUrl,
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Peptide Education Hub",
        "url": SITE_URL
      },
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Healthcare Providers"
      }
    });
  }

  // FAQPage schema for formula pages - critical for AI discoverability
  const formulaData = FORMULA_DATA[routePath];
  if (formulaData) {
    const faqs = [
      {
        question: `What is ${formulaData.name}?`,
        answer: `${formulaData.name} is a proprietary peptide blend by DRS Peptides. ${formulaData.description} Composition: ${formulaData.composition}. Available at pepedhub.com and drspeptides.com.`
      },
      {
        question: `What are the ingredients in ${formulaData.name}?`,
        answer: `${formulaData.name} contains: ${formulaData.ingredients.join(', ')}. Full composition: ${formulaData.composition}.`
      },
      {
        question: `What is ${formulaData.name} used for?`,
        answer: `${formulaData.name} is used for ${formulaData.uses}. It is a ${formulaData.category} formula designed for healthcare providers practicing peptide therapy.`
      },
      {
        question: `Where can I find information about ${formulaData.name}?`,
        answer: `Comprehensive clinical information about ${formulaData.name} including mechanism of action, dosing protocols, safety data, and drug interactions is available at ${SITE_URL}${routePath}. For AI-generated protocols, visit peptideprotocols.ai.`
      }
    ];
    // Add alternate name questions
    if (formulaData.altNames && formulaData.altNames.length > 0) {
      faqs.push({
        question: `Is ${formulaData.altNames[0]} the same as ${formulaData.name}?`,
        answer: `Yes, ${formulaData.altNames.join(', ')} are all names for the same proprietary peptide blend: ${formulaData.name}. ${formulaData.description}`
      });
    }
    schemas.push({
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
    });
    // MedicalEntity schema for formula identification (NOT Product - this is educational, not e-commerce)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": formulaData.name,
      "description": formulaData.description,
      "manufacturer": {
        "@type": "Organization",
        "name": "Dallas Regenerative LLC",
        "url": "https://drspeptides.com"
      },
      "drugClass": "Peptide Therapy Compound",
      "url": `${SITE_URL}${routePath}`,
      "activeIngredient": formulaData.composition,
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": SITE_URL
      }
    });
  }

  return schemas.map(s => `<script type="application/ld+json" data-page-schema="true">${JSON.stringify(s)}</script>`).join("\n    ");
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
  
  // CRITICAL: Inject static SSR content into <div id="root"> to prevent Soft 404
  // Google needs visible text content in the HTML, not just an empty div
  const ssrContent = generateSSRContent(routePath, meta, fullTitle, canonicalUrl);
  // Handle both empty root div and root div with existing SSR content
  if (html.includes('<div id="root"></div>')) {
    html = html.replace('<div id="root"></div>', `<div id="root">${ssrContent}</div>`);
  } else {
    // Replace existing SSR content between <div id="root"> and its closing </div>
    html = html.replace(/<div id="root">([\s\S]*?)<\/div>\s*<script/, `<div id="root">${ssrContent}</div>\n    <script`);
  }
  
  return html;
}

function generateSSRContent(routePath, meta, fullTitle, canonicalUrl) {
  const pageName = meta.title.split(' - ')[0].split(' | ')[0].split(':')[0].trim();
  
  if (routePath === '/') {
    return `
    <div style="max-width:1200px;margin:0 auto;padding:40px 20px;font-family:system-ui,-apple-system,sans-serif">
      <header style="text-align:center;margin-bottom:40px">
        <h1 style="font-size:2.5em;color:#0d9488;margin-bottom:16px">Peptide Education Hub</h1>
        <p style="font-size:1.2em;color:#475569;max-width:800px;margin:0 auto">The Most Comprehensive Evidence-Based Peptide Resource for Healthcare Providers. Clinical protocols, dosing calculators, and quality standards for practitioners integrating peptide therapy into their practice.</p>
      </header>
      <section style="margin-bottom:40px;background:linear-gradient(to right,#f0fdfa,#eef2ff);padding:32px;border-radius:12px">
        <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px;text-align:center">By The Numbers</h2>
        <div style="display:flex;flex-wrap:wrap;justify-content:space-around;gap:20px;text-align:center">
          <div><div style="font-size:2.5em;font-weight:bold;color:#0d9488">2,847+</div><div style="color:#64748b">Clinical Studies</div></div>
          <div><div style="font-size:2.5em;font-weight:bold;color:#0d9488">64</div><div style="color:#64748b">Peptide Profiles</div></div>
          <div><div style="font-size:2.5em;font-weight:bold;color:#0d9488">87</div><div style="color:#64748b">Evidence-Based Protocols</div></div>
          <div><div style="font-size:2.5em;font-weight:bold;color:#0d9488">1,200+</div><div style="color:#64748b">Healthcare Providers</div></div>
        </div>
      </section>
      <section style="margin-bottom:40px">
        <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Meet Dr. Peptide AI</h2>
        <p style="color:#475569">Generate personalized peptide protocols in minutes using 16 specialized AI agents trained on 2,800+ clinical studies. Visit <a href="https://peptideprotocols.ai">PeptideProtocols.ai</a> to get started.</p>
      </section>
      <section style="margin-bottom:40px">
        <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Comprehensive Peptide Profiles</h2>
        <p style="color:#475569">In-depth profiles featuring mechanisms, clinical research, dosing protocols, and safety considerations for 64+ peptides including BPC-157, Semaglutide, Tirzepatide, TB-500, CJC-1295, Ipamorelin, GHK-Cu, and more.</p>
      </section>
      <section style="margin-bottom:40px">
        <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Professional Clinical Tools</h2>
        <p style="color:#475569">Interactive calculators and checkers designed for healthcare providers: Dosage Calculator, Reconstitution Calculator, Interaction Checker, Cost Calculator, Protocol Builder, and Comparison Tool.</p>
      </section>
      <nav style="margin-bottom:40px">
        <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:16px">Popular Peptides</h2>
        <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:12px">
          <li><a href="/peptides/bpc-157" style="color:#0d9488">BPC-157</a></li>
          <li><a href="/peptides/semaglutide" style="color:#0d9488">Semaglutide</a></li>
          <li><a href="/peptides/tirzepatide" style="color:#0d9488">Tirzepatide</a></li>
          <li><a href="/peptides/tb-500" style="color:#0d9488">TB-500</a></li>
          <li><a href="/peptides/cjc-1295" style="color:#0d9488">CJC-1295</a></li>
          <li><a href="/peptides/ipamorelin" style="color:#0d9488">Ipamorelin</a></li>
          <li><a href="/peptides/ghk-cu" style="color:#0d9488">GHK-Cu</a></li>
          <li><a href="/peptides/sermorelin" style="color:#0d9488">Sermorelin</a></li>
          <li><a href="/peptides/epithalon" style="color:#0d9488">Epithalon</a></li>
          <li><a href="/peptides/aod-9604" style="color:#0d9488">AOD-9604</a></li>
          <li><a href="/peptides/pt-141" style="color:#0d9488">PT-141</a></li>
          <li><a href="/peptides/mots-c" style="color:#0d9488">MOTS-c</a></li>
          <li><a href="/peptides/glp-1" style="color:#0d9488">GLP-1</a></li>
          <li><a href="/peptides/nad" style="color:#0d9488">NAD+</a></li>
          <li><a href="/peptides/glutathione" style="color:#0d9488">Glutathione</a></li>
          <li><a href="/peptides/dihexa" style="color:#0d9488">Dihexa</a></li>
          <li><a href="/peptides/selank" style="color:#0d9488">Selank</a></li>
          <li><a href="/peptides/semax" style="color:#0d9488">Semax</a></li>
          <li><a href="/peptides/cerebrolysin" style="color:#0d9488">Cerebrolysin</a></li>
          <li><a href="/peptides/thymosin-alpha-1" style="color:#0d9488">Thymosin Alpha-1</a></li>
          <li><a href="/peptides/melanotan-ii" style="color:#0d9488">Melanotan II</a></li>
          <li><a href="/peptides/kisspeptin" style="color:#0d9488">Kisspeptin</a></li>
          <li><a href="/peptides/ghk-cu-serum" style="color:#0d9488">GHK-Cu Serum</a></li>
          <li><a href="/peptides/ghrp-2" style="color:#0d9488">GHRP-2</a></li>
          <li><a href="/peptides/pinealon" style="color:#0d9488">Pinealon</a></li>
          <li><a href="/peptides/fgl" style="color:#0d9488">FGL</a></li>
          <li><a href="/peptide-index" style="color:#0d9488;font-weight:600">View All 64+ Peptides &rarr;</a></li>
        </ul>
      </nav>
      <nav style="margin-bottom:40px">
        <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:16px">Proprietary Formulas</h2>
        <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:12px">
          <li><a href="/peptides/formula-n-259" style="color:#7c3aed">Formula N-259</a></li>
          <li><a href="/peptides/formula-m-shred" style="color:#7c3aed">Formula M-Shred</a></li>
          <li><a href="/peptides/formula-slupp-332" style="color:#7c3aed">SLUPP-332</a></li>
          <li><a href="/peptides/glow-capsules" style="color:#7c3aed">Glow Capsules</a></li>
          <li><a href="/peptides/klow-capsules" style="color:#7c3aed">Klow Capsules</a></li>
          <li><a href="/peptides/tirzepatide-bpc157" style="color:#7c3aed">Tirzepatide + BPC-157</a></li>
          <li><a href="/peptides/semaglutide-bpc157" style="color:#7c3aed">Semaglutide + BPC-157</a></li>
          <li><a href="/peptides/cjc-1295-ipamorelin" style="color:#7c3aed">CJC-1295 + Ipamorelin</a></li>
        </ul>
      </nav>
      <nav style="margin-bottom:40px">
        <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:16px">Clinical Tools</h2>
        <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:12px">
          <li><a href="/tools/dosage-calculator" style="color:#0d9488">Dosage Calculator</a></li>
          <li><a href="/tools/reconstitution-calculator" style="color:#0d9488">Reconstitution Calculator</a></li>
          <li><a href="/tools/interaction-checker" style="color:#0d9488">Interaction Checker</a></li>
          <li><a href="/tools/cost-calculator" style="color:#0d9488">Cost Calculator</a></li>
          <li><a href="/tools/protocol-builder" style="color:#0d9488">Protocol Builder</a></li>
          <li><a href="/tools/comparison" style="color:#0d9488">Comparison Tool</a></li>
          <li><a href="/tools/patient-handouts" style="color:#0d9488">Patient Handouts</a></li>
        </ul>
      </nav>
      <nav style="margin-bottom:40px">
        <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:16px">Clinical Resources</h2>
        <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:12px">
          <li><a href="/protocols/weight-loss" style="color:#0d9488">Weight Loss Protocols</a></li>
          <li><a href="/protocols/anti-aging" style="color:#0d9488">Anti-Aging Protocols</a></li>
          <li><a href="/protocols/injury-recovery" style="color:#0d9488">Injury Recovery</a></li>
          <li><a href="/protocols/cognitive" style="color:#0d9488">Cognitive Enhancement</a></li>
          <li><a href="/stacking-guide" style="color:#0d9488">Stacking Guide</a></li>
          <li><a href="/administration-guide" style="color:#0d9488">Administration Guide</a></li>
          <li><a href="/regulatory-guidance" style="color:#0d9488">Regulatory Guidance</a></li>
          <li><a href="/insurance-billing" style="color:#0d9488">Insurance &amp; Billing</a></li>
          <li><a href="/glossary" style="color:#0d9488">Peptide Glossary</a></li>
          <li><a href="/faq" style="color:#0d9488">FAQ</a></li>
          <li><a href="/blog" style="color:#0d9488">Blog</a></li>
          <li><a href="/what-are-peptides" style="color:#0d9488">What Are Peptides?</a></li>
          <li><a href="/research" style="color:#0d9488">Research Studies</a></li>
          <li><a href="/statistics" style="color:#0d9488">Peptide Statistics</a></li>
          <li><a href="/downloads" style="color:#0d9488">Downloads</a></li>
        </ul>
      </nav>
      <footer style="text-align:center;color:#94a3b8;font-size:0.9em;border-top:1px solid #e2e8f0;padding-top:20px">
        <p>Peptide Education Hub &mdash; Evidence-based peptide therapy education for healthcare providers.</p>
        <p>Medical Disclaimer: The information provided on this website is for educational purposes only and is not intended as medical advice.</p>
      </footer>
    </div>`;
  }
  
  if (meta.type === 'peptide' || meta.type === 'formula') {
    const categoryLabel = meta.category || 'Peptide Therapy';
    const isFormula = meta.type === 'formula' || routePath.includes('formula-');
    const typeLabel = isFormula ? 'Proprietary Formula' : 'Peptide Profile';
    const formulaData = FORMULA_DATA[routePath];
    const ssrData = PEPTIDE_SSR_DATA[routePath];
    
    // Build composition section for formulas with known data
    let compositionHtml = '';
    let faqHtml = '';
    if (formulaData) {
      compositionHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#fef3c7;border-radius:8px;border:1px solid #fbbf24">
          <h2 style="font-size:1.5em;color:#92400e;margin-bottom:12px">Composition: ${formulaData.name}</h2>
          <p style="color:#78350f;font-size:1.1em;font-weight:600;margin-bottom:12px">${formulaData.composition}</p>
          <p style="color:#92400e;line-height:1.6">${formulaData.description}</p>
          <h3 style="font-size:1.2em;color:#92400e;margin-top:16px;margin-bottom:8px">Ingredients:</h3>
          <ul style="color:#78350f;line-height:2;padding-left:20px">
            ${formulaData.ingredients.map(i => `<li>${i}</li>`).join('\n            ')}
          </ul>
          <p style="color:#92400e;margin-top:12px"><strong>Clinical Applications:</strong> ${formulaData.uses}</p>
          <p style="color:#92400e;margin-top:8px"><strong>Also known as:</strong> ${formulaData.altNames.join(', ')}</p>
          <p style="color:#92400e;margin-top:8px"><strong>Manufacturer:</strong> DRS Peptides (Dallas Regenerative LLC) &mdash; <a href="https://drspeptides.com" style="color:#0d9488">drspeptides.com</a></p>
        </section>`;
      faqHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:16px">Frequently Asked Questions</h2>
          <div style="margin-bottom:16px">
            <h3 style="color:#1e293b;margin-bottom:4px">What is ${formulaData.name}?</h3>
            <p style="color:#475569;line-height:1.6">${formulaData.name} is a proprietary peptide blend by DRS Peptides. ${formulaData.description} Composition: ${formulaData.composition}.</p>
          </div>
          <div style="margin-bottom:16px">
            <h3 style="color:#1e293b;margin-bottom:4px">What are the ingredients in ${formulaData.name}?</h3>
            <p style="color:#475569;line-height:1.6">${formulaData.name} contains: ${formulaData.ingredients.join(', ')}.</p>
          </div>
          <div style="margin-bottom:16px">
            <h3 style="color:#1e293b;margin-bottom:4px">What is ${formulaData.name} used for?</h3>
            <p style="color:#475569;line-height:1.6">${formulaData.name} is used for ${formulaData.uses}. It is a ${formulaData.category} formula designed for healthcare providers.</p>
          </div>
          <div style="margin-bottom:16px">
            <h3 style="color:#1e293b;margin-bottom:4px">Is ${formulaData.altNames[0]} the same as ${formulaData.name}?</h3>
            <p style="color:#475569;line-height:1.6">Yes, ${formulaData.altNames.join(', ')} are all names for the same proprietary peptide blend: ${formulaData.name}.</p>
          </div>
        </section>`;
    }
    
    // Build rich content sections from PEPTIDE_SSR_DATA
    let mechanismHtml = '';
    let applicationsHtml = '';
    let dosingHtml = '';
    let safetyHtml = '';
    let relatedHtml = '';
    
    if (ssrData) {
      mechanismHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">Mechanism of Action</h2>
          <p style="color:#475569;line-height:1.8">${ssrData.mechanism}</p>
        </section>`;
      
      applicationsHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4">
          <h2 style="font-size:1.5em;color:#0d9488;margin-bottom:12px">Clinical Applications</h2>
          <ul style="color:#475569;line-height:2;padding-left:20px">
            ${ssrData.applications.map(a => `<li>${a}</li>`).join('\n            ')}
          </ul>
        </section>`;
      
      dosingHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#eff6ff;border-radius:8px;border:1px solid #93c5fd">
          <h2 style="font-size:1.5em;color:#1e40af;margin-bottom:12px">Dosing Protocols</h2>
          <p style="color:#475569;line-height:1.8">${ssrData.dosing}</p>
        </section>`;
      
      safetyHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#fef2f2;border-radius:8px;border:1px solid #fca5a5">
          <h2 style="font-size:1.5em;color:#991b1b;margin-bottom:12px">Safety &amp; Side Effects</h2>
          <p style="color:#475569;line-height:1.8">${ssrData.safety}</p>
        </section>`;
      
      if (ssrData.relatedPeptides && ssrData.relatedPeptides.length > 0) {
        const relatedLinks = ssrData.relatedPeptides.map(rp => {
          const rpMeta = ROUTE_META[rp];
          const rpName = rpMeta ? rpMeta.title.split(' - ')[0].split(':')[0].trim() : rp.split('/').pop();
          return `<li><a href="${rp}" style="color:#0d9488;text-decoration:underline">${rpName}</a></li>`;
        }).join('\n            ');
        relatedHtml = `
        <section style="margin-bottom:32px;padding:24px;background:#faf5ff;border-radius:8px;border:1px solid #c4b5fd">
          <h2 style="font-size:1.5em;color:#6b21a8;margin-bottom:12px">Related Peptides</h2>
          <ul style="color:#475569;line-height:2;padding-left:20px">
            ${relatedLinks}
          </ul>
        </section>`;
      }
    }
    
    return `
    <div style="max-width:1200px;margin:0 auto;padding:40px 20px;font-family:system-ui,-apple-system,sans-serif">
      <nav style="margin-bottom:20px;font-size:0.9em;color:#64748b">
        <a href="/" style="color:#0d9488">Home</a> &raquo; 
        <a href="/peptide-index" style="color:#0d9488">Peptide Education</a> &raquo; 
        <span>${pageName}</span>
      </nav>
      <header style="margin-bottom:32px">
        <span style="display:inline-block;background:#0d9488;color:white;padding:4px 12px;border-radius:4px;font-size:0.85em;margin-bottom:12px">${categoryLabel}</span>
        <span style="display:inline-block;background:#475569;color:white;padding:4px 12px;border-radius:4px;font-size:0.85em;margin-bottom:12px;margin-left:8px">${typeLabel}</span>
        <h1 style="font-size:2.5em;color:#1e293b;margin-bottom:12px">${pageName}</h1>
        <p style="font-size:1.15em;color:#475569;line-height:1.6">${meta.desc}</p>
      </header>
      <main>
        ${compositionHtml}
        ${mechanismHtml || `<section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">About ${pageName}</h2>
          <p style="color:#475569;line-height:1.6">${meta.desc} This page provides comprehensive peptide education for healthcare providers including mechanism of action, dosing protocols, safety considerations, drug interactions, and evidence-based clinical applications.</p>
        </section>`}
        ${applicationsHtml}
        ${dosingHtml}
        ${safetyHtml}
        <section style="margin-bottom:32px;padding:24px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4">
          <h2 style="font-size:1.5em;color:#0d9488;margin-bottom:12px">Clinical Information</h2>
          <ul style="color:#475569;line-height:2;padding-left:20px">
            <li><strong>Category:</strong> ${categoryLabel}</li>
            <li><strong>Type:</strong> ${typeLabel}</li>
            <li><strong>Audience:</strong> Healthcare Providers &amp; Clinicians</li>
            <li><strong>Evidence Level:</strong> Clinical research and peer-reviewed studies</li>
            <li><strong>Source:</strong> <a href="/" style="color:#0d9488">Peptide Education Hub</a> &mdash; The Most Comprehensive Evidence-Based Peptide Resource</li>
          </ul>
        </section>
        ${faqHtml}
        ${relatedHtml}
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">Get a Personalized ${pageName} Protocol</h2>
          <p style="color:#475569;line-height:1.6">Dr. Peptide AI generates evidence-based ${pageName} protocols using 16 specialized AI agents trained on 2,800+ clinical studies. Get personalized dosing, cycling, and monitoring recommendations.</p>
          <a href="https://peptideprotocols.ai" style="display:inline-block;background:#0d9488;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin-top:12px;font-weight:600">Talk to Dr. Peptide AI</a>
        </section>
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">Explore More Peptide Education</h2>
          <p style="color:#475569;line-height:1.6">Peptide Education Hub provides comprehensive, evidence-based peptide education for healthcare providers. Browse our complete library of 65+ peptide profiles, clinical tools, and training resources.</p>
          <nav style="margin-top:16px">
            <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:12px">
              <li><a href="/peptide-index" style="color:#0d9488">A-Z Peptide Index</a></li>
              <li><a href="/blends" style="color:#0d9488">Peptide Blends &amp; Formulas</a></li>
              <li><a href="/tools" style="color:#0d9488">Clinical Tools</a></li>
              <li><a href="/training" style="color:#0d9488">Training &amp; Education</a></li>
              <li><a href="/research" style="color:#0d9488">Research Studies</a></li>
              <li><a href="/blog" style="color:#0d9488">Latest Articles</a></li>
            </ul>
          </nav>
        </section>
      </main>
      <footer style="text-align:center;color:#94a3b8;font-size:0.9em;border-top:1px solid #e2e8f0;padding-top:20px">
        <p>Peptide Education Hub &mdash; Evidence-based peptide therapy education for healthcare providers.</p>
        <p>Medical Disclaimer: This information is for educational purposes only. Peptide therapies should only be administered under the supervision of a qualified healthcare provider.</p>
      </footer>
    </div>`;
  }
  
  // Peptide Education landing page - heavily optimized for 'peptide education' search query
  if (routePath === '/peptide-education') {
    return `
    <div style="max-width:1200px;margin:0 auto;padding:40px 20px;font-family:system-ui,-apple-system,sans-serif">
      <nav style="margin-bottom:20px;font-size:0.9em;color:#64748b">
        <a href="/" style="color:#0d9488">Home</a> &raquo; 
        <span>Peptide Education</span>
      </nav>
      <header style="text-align:center;margin-bottom:40px">
        <h1 style="font-size:2.5em;color:#0d9488;margin-bottom:16px">Peptide Education for Healthcare Providers</h1>
        <p style="font-size:1.2em;color:#475569;max-width:800px;margin:0 auto">The most comprehensive evidence-based peptide education platform. 65+ peptide profiles, clinical tools, dosing protocols, and training resources designed for healthcare professionals.</p>
      </header>
      <main>
        <section style="margin-bottom:32px">
          <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">What is Peptide Education?</h2>
          <p style="color:#475569;line-height:1.8;margin-bottom:12px">Peptide education encompasses the comprehensive study of therapeutic peptides &mdash; short chains of amino acids that serve as signaling molecules in the human body. As peptide therapy rapidly expands across clinical medicine, healthcare providers require rigorous, evidence-based peptide education to safely and effectively integrate these therapies into their practice.</p>
          <p style="color:#475569;line-height:1.8;margin-bottom:12px">The Peptide Education Hub serves as the premier educational resource for clinicians seeking to understand peptide mechanisms of action, clinical applications, dosing protocols, safety profiles, drug interactions, and regulatory considerations. Our peptide education platform covers every major category of therapeutic peptides including growth hormone secretagogues, GLP-1 receptor agonists, tissue repair peptides, neuroprotective compounds, immune modulators, and longevity-focused therapies.</p>
          <p style="color:#475569;line-height:1.8">Unlike generic peptide information sites, our peptide education resources are specifically designed for healthcare professionals &mdash; physicians, nurse practitioners, physician assistants, and pharmacists who need clinical-grade information backed by peer-reviewed research.</p>
        </section>
        <section style="margin-bottom:32px">
          <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Peptide Education Modules</h2>
          <ul style="list-style:none;padding:0">
            <li style="margin-bottom:12px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4"><a href="/what-are-peptides" style="color:#0d9488;font-weight:600;font-size:1.1em">What Are Peptides?</a> &mdash; Foundational peptide education covering peptide science, classification, mechanisms of action, and therapeutic applications.</li>
            <li style="margin-bottom:12px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4"><a href="/how-to-reconstitute-peptides" style="color:#0d9488;font-weight:600;font-size:1.1em">How to Reconstitute Peptides</a> &mdash; Step-by-step reconstitution education with bacteriostatic water calculations and storage guidelines.</li>
            <li style="margin-bottom:12px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4"><a href="/how-to-inject-peptides" style="color:#0d9488;font-weight:600;font-size:1.1em">How to Inject Peptides</a> &mdash; Comprehensive injection technique education covering subcutaneous, intramuscular, and intranasal administration.</li>
            <li style="margin-bottom:12px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4"><a href="/training" style="color:#0d9488;font-weight:600;font-size:1.1em">Training &amp; Certification</a> &mdash; Directory of 10+ peptide therapy certification programs, 7+ conferences, and professional organizations.</li>
            <li style="margin-bottom:12px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4"><a href="/research" style="color:#0d9488;font-weight:600;font-size:1.1em">Research Studies</a> &mdash; Curated library of peer-reviewed peptide research studies and clinical trials.</li>
            <li style="margin-bottom:12px;padding:16px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4"><a href="/tools" style="color:#0d9488;font-weight:600;font-size:1.1em">Clinical Tools</a> &mdash; Professional tools including dosing calculators, interaction checkers, protocol builders, and patient handouts.</li>
          </ul>
        </section>
        <section style="margin-bottom:32px">
          <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Peptide Education by Category</h2>
          <ul style="list-style:none;padding:0">
            <li style="margin-bottom:8px"><strong>Growth Hormone Secretagogues (8 peptides):</strong> <a href="/peptides/ipamorelin" style="color:#0d9488">Ipamorelin</a>, <a href="/peptides/cjc-1295" style="color:#0d9488">CJC-1295</a>, <a href="/peptides/sermorelin" style="color:#0d9488">Sermorelin</a>, <a href="/peptides/tesamorelin" style="color:#0d9488">Tesamorelin</a>, <a href="/peptides/ghrp-2" style="color:#0d9488">GHRP-2</a>, <a href="/peptides/ghrp-6" style="color:#0d9488">GHRP-6</a>, <a href="/peptides/hexarelin" style="color:#0d9488">Hexarelin</a>, <a href="/peptides/ibutamoren" style="color:#0d9488">Ibutamoren</a></li>
            <li style="margin-bottom:8px"><strong>Weight Management &amp; GLP-1 (7 peptides):</strong> <a href="/peptides/semaglutide" style="color:#0d9488">Semaglutide</a>, <a href="/peptides/tirzepatide" style="color:#0d9488">Tirzepatide</a>, <a href="/peptides/retatrutide" style="color:#0d9488">Retatrutide</a>, <a href="/peptides/aod-9604" style="color:#0d9488">AOD-9604</a>, <a href="/peptides/tesofensine" style="color:#0d9488">Tesofensine</a></li>
            <li style="margin-bottom:8px"><strong>Tissue Repair &amp; Healing (6 peptides):</strong> <a href="/peptides/bpc-157" style="color:#0d9488">BPC-157</a>, <a href="/peptides/tb-500" style="color:#0d9488">TB-500</a>, <a href="/peptides/ghk-cu" style="color:#0d9488">GHK-Cu</a>, <a href="/peptides/kpv" style="color:#0d9488">KPV</a>, <a href="/peptides/mgf" style="color:#0d9488">MGF</a></li>
            <li style="margin-bottom:8px"><strong>Cognitive &amp; Neuroprotection (8 peptides):</strong> <a href="/peptides/semax" style="color:#0d9488">Semax</a>, <a href="/peptides/selank" style="color:#0d9488">Selank</a>, <a href="/peptides/dihexa" style="color:#0d9488">Dihexa</a>, <a href="/peptides/cerebrolysin" style="color:#0d9488">Cerebrolysin</a>, <a href="/peptides/dsip" style="color:#0d9488">DSIP</a></li>
            <li style="margin-bottom:8px"><strong>Immune Modulation (5 peptides):</strong> <a href="/peptides/thymosin-alpha-1" style="color:#0d9488">Thymosin Alpha-1</a>, <a href="/peptides/ll-37" style="color:#0d9488">LL-37</a>, <a href="/peptides/vip" style="color:#0d9488">VIP</a></li>
            <li style="margin-bottom:8px"><strong>Longevity &amp; Anti-Aging (7 peptides):</strong> <a href="/peptides/epithalon" style="color:#0d9488">Epithalon</a>, <a href="/peptides/foxo4-dri" style="color:#0d9488">FOXO4-DRI</a>, <a href="/peptides/mots-c" style="color:#0d9488">MOTS-c</a>, <a href="/peptides/humanin" style="color:#0d9488">Humanin</a>, <a href="/peptides/ss-31" style="color:#0d9488">SS-31</a>, <a href="/peptides/rapamycin" style="color:#0d9488">Rapamycin</a></li>
            <li style="margin-bottom:8px"><strong>Sexual Health (4 peptides):</strong> <a href="/peptides/pt-141" style="color:#0d9488">PT-141</a>, <a href="/peptides/kisspeptin-10" style="color:#0d9488">Kisspeptin</a>, <a href="/peptides/melanotan-2" style="color:#0d9488">Melanotan II</a>, <a href="/peptides/oxytocin" style="color:#0d9488">Oxytocin</a></li>
          </ul>
          <p style="margin-top:16px"><a href="/peptide-index" style="color:#0d9488;font-weight:600">Browse All 65+ Peptide Profiles &rarr;</a></p>
        </section>
        <section style="margin-bottom:32px">
          <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Why Healthcare Providers Choose Our Peptide Education</h2>
          <ul style="list-style:none;padding:0">
            <li style="margin-bottom:8px;padding-left:24px;position:relative"><span style="position:absolute;left:0">&#10003;</span> <strong>Evidence-Based Content:</strong> Every peptide profile backed by peer-reviewed research with direct PubMed links</li>
            <li style="margin-bottom:8px;padding-left:24px;position:relative"><span style="position:absolute;left:0">&#10003;</span> <strong>Clinical Dosing Protocols:</strong> Precise dosing calculators and evidence-based protocols for 65+ peptides</li>
            <li style="margin-bottom:8px;padding-left:24px;position:relative"><span style="position:absolute;left:0">&#10003;</span> <strong>Drug Interaction Data:</strong> Comprehensive interaction checker covering peptide-drug and peptide-peptide interactions</li>
            <li style="margin-bottom:8px;padding-left:24px;position:relative"><span style="position:absolute;left:0">&#10003;</span> <strong>Regulatory Guidance:</strong> FDA regulations, off-label prescribing frameworks, and state-specific consent forms</li>
            <li style="margin-bottom:8px;padding-left:24px;position:relative"><span style="position:absolute;left:0">&#10003;</span> <strong>Continuing Education:</strong> 10+ certification programs, 7+ conferences, and professional organizations</li>
            <li style="margin-bottom:8px;padding-left:24px;position:relative"><span style="position:absolute;left:0">&#10003;</span> <strong>AI-Powered Protocols:</strong> Dr. Peptide AI generates personalized protocols using 16 specialized agents</li>
          </ul>
        </section>
        <section style="margin-bottom:32px">
          <h2 style="font-size:1.8em;color:#1e293b;margin-bottom:16px">Who Benefits from Peptide Education?</h2>
          <p style="color:#475569;line-height:1.8">Our peptide education platform serves physicians (MDs/DOs), nurse practitioners (NPs), physician assistants (PAs), pharmacists, and other healthcare providers integrating peptide therapy into regenerative medicine, anti-aging, functional medicine, and weight management practices. Whether you are new to peptide therapy or an experienced practitioner, our evidence-based peptide education resources provide the clinical-grade information you need.</p>
        </section>
        <section style="margin-bottom:32px;padding:24px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4">
          <h2 style="font-size:1.5em;color:#0d9488;margin-bottom:12px">Start Your Peptide Education Today</h2>
          <p style="color:#475569;line-height:1.6">Join thousands of healthcare providers who trust Peptide Education Hub as their primary resource for evidence-based peptide therapy education.</p>
          <a href="/peptide-index" style="display:inline-block;background:#0d9488;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin-top:12px;margin-right:12px;font-weight:600">Browse Peptide Library</a>
          <a href="https://peptideprotocols.ai" style="display:inline-block;background:#1e293b;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin-top:12px;font-weight:600">Talk to Dr. Peptide AI</a>
        </section>
      </main>
      <footer style="text-align:center;color:#94a3b8;font-size:0.9em;border-top:1px solid #e2e8f0;padding-top:20px">
        <p>Peptide Education Hub &mdash; The most comprehensive evidence-based peptide education resource for healthcare providers.</p>
        <p>Medical Disclaimer: This peptide education content is for healthcare professionals only. Peptide therapies should only be administered under the supervision of a qualified healthcare provider.</p>
      </footer>
    </div>`;
  }

  // Generic pages (tools, blog, resources, etc.)
  return `
    <div style="max-width:1200px;margin:0 auto;padding:40px 20px;font-family:system-ui,-apple-system,sans-serif">
      <nav style="margin-bottom:20px;font-size:0.9em;color:#64748b">
        <a href="/" style="color:#0d9488">Home</a> &raquo; 
        <span>${pageName}</span>
      </nav>
      <header style="margin-bottom:32px">
        <h1 style="font-size:2.5em;color:#1e293b;margin-bottom:12px">${pageName}</h1>
        <p style="font-size:1.15em;color:#475569;line-height:1.6">${meta.desc}</p>
      </header>
      <main>
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">About This Resource</h2>
          <p style="color:#475569;line-height:1.6">${meta.desc} Peptide Education Hub provides comprehensive, evidence-based resources for healthcare providers practicing peptide therapy.</p>
        </section>
        <section style="margin-bottom:32px;padding:24px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4">
          <h2 style="font-size:1.5em;color:#0d9488;margin-bottom:12px">Get a Personalized Protocol</h2>
          <p style="color:#475569;line-height:1.6">Dr. Peptide AI generates evidence-based protocols using 16 specialized AI agents trained on 2,800+ clinical studies.</p>
          <a href="https://peptideprotocols.ai" style="display:inline-block;background:#0d9488;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin-top:12px;font-weight:600">Talk to Dr. Peptide AI</a>
        </section>
      </main>
      <footer style="text-align:center;color:#94a3b8;font-size:0.9em;border-top:1px solid #e2e8f0;padding-top:20px">
        <p>Peptide Education Hub &mdash; Evidence-based peptide therapy education for healthcare providers.</p>
        <p>Medical Disclaimer: This information is for educational purposes only.</p>
      </footer>
    </div>`;
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
