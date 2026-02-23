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
      "dateModified": "2026-02-22"
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
    // Product schema for formula identification
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": formulaData.name,
      "description": formulaData.description,
      "brand": {
        "@type": "Brand",
        "name": "DRS Peptides"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Dallas Regenerative LLC",
        "url": "https://drspeptides.com"
      },
      "category": formulaData.category,
      "url": `${SITE_URL}${routePath}`,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Composition",
          "value": formulaData.composition
        },
        {
          "@type": "PropertyValue",
          "name": "Intended Audience",
          "value": "Healthcare Providers & Clinicians"
        }
      ]
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
        <p style="font-size:1.2em;color:#475569;max-width:800px;margin:0 auto">The Complete Guide to Peptide Therapy for Healthcare Providers. Evidence-based education, clinical protocols, and quality standards for practitioners integrating peptide therapy into their practice.</p>
      </header>
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
    
    return `
    <div style="max-width:1200px;margin:0 auto;padding:40px 20px;font-family:system-ui,-apple-system,sans-serif">
      <nav style="margin-bottom:20px;font-size:0.9em;color:#64748b">
        <a href="/" style="color:#0d9488">Home</a> &raquo; 
        <a href="/peptide-index" style="color:#0d9488">Peptides</a> &raquo; 
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
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">About ${pageName}</h2>
          <p style="color:#475569;line-height:1.6">${meta.desc} This page provides comprehensive clinical information for healthcare providers including mechanism of action, dosing protocols, safety considerations, drug interactions, and evidence-based clinical applications.</p>
        </section>
        <section style="margin-bottom:32px;padding:24px;background:#f0fdfa;border-radius:8px;border:1px solid #99f6e4">
          <h2 style="font-size:1.5em;color:#0d9488;margin-bottom:12px">Clinical Information</h2>
          <ul style="color:#475569;line-height:2;padding-left:20px">
            <li><strong>Category:</strong> ${categoryLabel}</li>
            <li><strong>Type:</strong> ${typeLabel}</li>
            <li><strong>Audience:</strong> Healthcare Providers &amp; Clinicians</li>
            <li><strong>Evidence Level:</strong> Clinical research and peer-reviewed studies</li>
          </ul>
        </section>
        ${faqHtml}
        <section style="margin-bottom:32px;padding:24px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
          <h2 style="font-size:1.5em;color:#1e293b;margin-bottom:12px">Get a Personalized Protocol</h2>
          <p style="color:#475569;line-height:1.6">Dr. Peptide AI generates evidence-based ${pageName} protocols using 16 specialized AI agents trained on 2,800+ clinical studies.</p>
          <a href="https://peptideprotocols.ai" style="display:inline-block;background:#0d9488;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;margin-top:12px;font-weight:600">Talk to Dr. Peptide AI</a>
        </section>
      </main>
      <footer style="text-align:center;color:#94a3b8;font-size:0.9em;border-top:1px solid #e2e8f0;padding-top:20px">
        <p>Peptide Education Hub &mdash; Evidence-based peptide therapy education for healthcare providers.</p>
        <p>Medical Disclaimer: This information is for educational purposes only. Peptide therapies should only be administered under the supervision of a qualified healthcare provider.</p>
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
