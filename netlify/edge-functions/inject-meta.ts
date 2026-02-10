// Netlify Edge Function: Inject correct meta tags per route
// This ensures Google and AI crawlers see the right title, description, and canonical URL
// for each page, even though the site is a client-side SPA.

const ROUTE_META: Record<string, { title: string; desc: string }> = {
  "/": { title: "Peptide Education Hub - Peptide Therapy Education for Healthcare Providers", desc: "Comprehensive educational resource for healthcare providers practicing peptide therapy. Clinical guides, quality standards, and evidence-based protocols for BPC-157, TB-500, Semaglutide, Tirzepatide, and more." },
  "/tools": { title: "Clinical Practice Tools - Peptide Therapy Calculators & Resources", desc: "9 free clinical tools for peptide therapy practitioners. Dosage calculator, cost calculator, interaction checker, protocol builder, progress tracker, and more." },
  "/ai-agent": { title: "Dr. Peptide AI - World's First AI Peptide Agent", desc: "Generate personalized peptide protocols in minutes using 16 specialized AI agents trained on 2,800+ clinical studies." },
  "/ai-faq": { title: "Peptide Therapy FAQ - Comprehensive Answers", desc: "Frequently asked questions about peptide therapy for healthcare providers and patients. Evidence-based answers about dosing, safety, sourcing, and protocols." },
  "/blog": { title: "Blog - Peptide Therapy Insights & Clinical Updates", desc: "Latest insights on peptide therapy, clinical protocols, FDA regulations, and practice management for healthcare providers." },
  "/case-studies": { title: "Clinical Case Studies - Peptide Therapy Outcomes", desc: "Real-world peptide therapy case studies with treatment protocols and outcomes for weight loss, injury recovery, muscle growth, anti-aging, cognitive, and immune support." },
  "/comparison-tool": { title: "Peptide Comparison Tool - Compare 56+ Peptides Side-by-Side", desc: "Side-by-side peptide comparison tool. Compare FDA status, dosing, mechanisms, benefits, side effects, contraindications, cost, and evidence levels." },
  "/dashboard": { title: "Provider Dashboard - Complete Peptide Therapy Platform", desc: "Comprehensive dashboard for healthcare providers with clinical tools, patient management, protocols, education, and practice resources." },
  "/dr-peptide": { title: "Dr. Peptide AI - World's First AI Peptide Agent", desc: "Generate personalized peptide protocols in minutes using 16 specialized AI agents trained on 2,800+ clinical studies." },
  "/embed": { title: "Free Embeddable Peptide Calculators & Widgets", desc: "Free embeddable peptide calculators for your website. Reconstitution calculator, dosage calculator, and BMI calculator widgets." },
  "/glossary": { title: "Peptide Glossary - Definitive Terms & Definitions", desc: "Complete glossary of peptide therapy terminology. Definitions for peptides, protocols, administration routes, and clinical concepts." },
  "/guides/ultimate-peptide-therapy-guide": { title: "The Ultimate Guide to Peptide Therapy (2026)", desc: "The most comprehensive guide to peptide therapy for healthcare providers. Covers 60+ peptides, dosing protocols, 503A vs 503B sourcing, billing codes, and clinical best practices." },
  "/infographics": { title: "Free Peptide Infographics & Visual Resources", desc: "Download free peptide therapy infographics, market statistics visuals, and educational graphics for presentations and patient education." },
  "/patient-education": { title: "Patient Education Library - Peptide Therapy Handouts", desc: "Downloadable patient handouts, informed consent templates, and safety guides for 15+ peptides. Ready-to-use educational materials." },
  "/peptides/adipotide": { title: "Adipotide (FTPP) - Targeted Fat Cell Apoptosis", desc: "Comprehensive guide to Adipotide for targeted fat loss through adipose tissue vascular disruption. Mechanisms, research, and safety." },
  "/peptides/alpha-gpc": { title: "Alpha-GPC - Choline Source for Cognitive Enhancement", desc: "Comprehensive guide to Alpha-GPC for cognitive enhancement, memory support, and athletic performance." },
  "/peptides/bpc-157": { title: "BPC-157 Guide - Dosing, Benefits, Research & Clinical Protocols", desc: "Complete BPC-157 guide for healthcare providers. Evidence-based dosing protocols, mechanism of action, clinical applications for tissue repair, gut healing, and injury recovery." },
  "/peptides/cerebrolysin": { title: "Cerebrolysin - Neuropeptide Complex for Brain Recovery", desc: "Comprehensive guide to Cerebrolysin neuropeptide complex for stroke recovery, traumatic brain injury, and cognitive enhancement." },
  "/peptides/cjc-1295": { title: "CJC-1295 Guide - Growth Hormone Releasing Hormone Analog", desc: "Complete CJC-1295 clinical guide. GHRH analog dosing protocols and growth hormone optimization." },
  "/peptides/cortexin": { title: "Cortexin - Polypeptide Brain Complex", desc: "Comprehensive guide to Cortexin polypeptide complex for cognitive enhancement, stroke recovery, and neuroprotection." },
  "/peptides/dihexa": { title: "Dihexa Guide - Cognitive Enhancement Peptide", desc: "Comprehensive dihexa guide for medical professionals. Nootropic peptide protocols and cognitive enhancement." },
  "/peptides/dsip": { title: "DSIP - Delta Sleep-Inducing Peptide", desc: "Comprehensive guide to DSIP for sleep optimization. Mechanisms, clinical applications, dosing protocols, and safety data." },
  "/peptides/epithalon": { title: "Epithalon (Epitalon) - Telomerase Activator", desc: "Clinical guide to epithalon for longevity and telomere support. Mechanisms, anti-aging research, dosing protocols, and safety." },
  "/peptides/fisetin": { title: "Fisetin - Senolytic Flavonoid for Longevity", desc: "Comprehensive guide to Fisetin for senescent cell clearance, anti-aging, and neuroprotection. Mechanisms, dosing, and research." },
  "/peptides/formula-m-2531": { title: "Formula M-2531: Metabolic Series & Metabolic Optimization", desc: "Advanced mitochondrial optimization formula with TUDCA, 5-Amino-1MQ, NAC, and PQQ for comprehensive cellular energy and metabolic support." },
  "/peptides/formula-m-51": { title: "Formula M-51: Metabolic Series Peptide Blend", desc: "Advanced exercise mimetic formula with 5-AMINO-1MQ and SLU-PP-332 for enhanced fat burning, muscle strength, and metabolic optimization." },
  "/peptides/formula-n-111": { title: "Formula N-111: Neuro Series & Neuroprotection", desc: "Advanced cognitive enhancement formula with J147, Dihexa, and Noopept for comprehensive neuroprotection and brain optimization." },
  "/peptides/formula-n-2331": { title: "Formula N-2331: Neuro Series Enhancement & NAD+ Support", desc: "Advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization and cellular energy support." },
  "/peptides/formula-n-259": { title: "Formula N-259: Sleep & Circadian Optimization", desc: "Advanced sleep enhancement formula with Apigenin, Magnesium Glycinate, L-Theanine, and Melatonin for comprehensive circadian rhythm optimization." },
  "/peptides/formula-n-5550": { title: "Formula N-5550: Multi-Target Neuro Series", desc: "Advanced cognitive enhancement formula with Dihexa, Tesofensine, and Methylene Blue for comprehensive brain optimization and weight management." },
  "/peptides/formula-n-69": { title: "Formula N-69: Sexual Enhancement & Intimacy", desc: "Advanced sexual enhancement formula with NALT, Kisspeptin, PT-141, Oxytocin, and VIP for comprehensive sexual health optimization." },
  "/peptides/formula-rg-5555": { title: "Formula RG-5555: Multi-Peptide Regenerative Series", desc: "Advanced healing and recovery formula with BPC-157, TB-500, KPV, and Larazotide for comprehensive tissue repair and gut health." },
  "/peptides/formula-wl-1175": { title: "Formula WL-1175: Metabolic Health Support", desc: "Advanced metabolic health formula with SLU-PP-332 and Orforglipron for comprehensive weight management and metabolic optimization." },
  "/peptides/foxo4-dri": { title: "FOXO4-DRI - Senolytic Peptide", desc: "Comprehensive guide to FOXO4-DRI for selective senescent cell elimination. Mechanisms, research, and longevity applications." },
  "/peptides/fragment-176-191": { title: "Fragment 176-191 - HGH Fat Loss Fragment", desc: "Comprehensive guide to HGH Fragment 176-191 for targeted fat loss without GH side effects. Mechanisms, dosing, and research." },
  "/peptides/gdf-11": { title: "GDF-11 - Growth Differentiation Factor 11", desc: "Comprehensive guide to GDF-11 for rejuvenation, tissue regeneration, and anti-aging. Mechanisms, research, and clinical applications." },
  "/peptides/ghk-cu": { title: "GHK-Cu Guide - Copper Peptide for Skin & Tissue Regeneration", desc: "Evidence-based GHK-Cu guide. Copper peptide protocols for wound healing, anti-aging, hair restoration, and tissue regeneration." },
  "/peptides/hexarelin": { title: "Hexarelin - Growth Hormone Secretagogue", desc: "Comprehensive guide to Hexarelin for GH release, muscle growth, and recovery. Mechanisms, dosing protocols, and research." },
  "/peptides/humanin": { title: "Humanin - Mitochondrial-Derived Longevity Peptide", desc: "Comprehensive guide to humanin mitochondrial peptide for neuroprotection and longevity. Mechanisms, research, and clinical considerations." },
  "/peptides/ipamorelin": { title: "Ipamorelin Guide - Selective Growth Hormone Secretagogue", desc: "Evidence-based ipamorelin guide for healthcare providers. Selective GHRP dosing protocols and growth hormone stimulation." },
  "/peptides/kpv": { title: "KPV Guide - Anti-Inflammatory Peptide", desc: "Evidence-based KPV guide for healthcare providers. Alpha-MSH fragment protocols for inflammation and gut health." },
  "/peptides/ll-37": { title: "LL-37 Guide - Antimicrobial Peptide Protocols", desc: "Complete LL-37 clinical guide. Cathelicidin antimicrobial peptide protocols and immune support." },
  "/peptides/melanotan-1": { title: "Melanotan 1 (Afamelanotide) - Photoprotection", desc: "Comprehensive guide to Melanotan-1 for skin protection and tanning. Mechanisms, dosing protocols, and safety." },
  "/peptides/melanotan-2": { title: "Melanotan II Guide - Tanning Peptide Clinical Information", desc: "Evidence-based Melanotan II guide for healthcare providers. Melanocortin agonist protocols and safety considerations." },
  "/peptides/mgf": { title: "MGF - Mechano Growth Factor", desc: "Clinical guide to MGF for muscle repair and hypertrophy. Mechanisms, dosing, administration, and safety for healthcare providers." },
  "/peptides/mots-c": { title: "MOTS-c Guide - Mitochondrial Peptide for Metabolic Health", desc: "Evidence-based MOTS-c guide. Mitochondrial-derived peptide protocols and metabolic optimization." },
  "/peptides/na-semax": { title: "NA-Semax - Enhanced Cognitive Peptide", desc: "Comprehensive guide to NA-Semax for enhanced cognitive function, BDNF modulation, and neuroprotection." },
  "/peptides/nac": { title: "NAC - N-Acetyl Cysteine", desc: "Comprehensive guide to NAC for glutathione support, respiratory health, and detoxification. Mechanisms, dosing, and clinical applications." },
  "/peptides/nmn": { title: "NMN - Nicotinamide Mononucleotide for Longevity", desc: "Comprehensive guide to NMN for NAD+ restoration, cellular energy, and anti-aging. Mechanisms, dosing protocols, and clinical research." },
  "/peptides/noopept": { title: "Noopept - Cognitive Enhancement Peptide", desc: "Comprehensive guide to Noopept cognitive enhancer. Mechanisms, dosing protocols, research, and clinical applications." },
  "/peptides/p21": { title: "P21 - CNTF-Derived Neurogenic Peptide", desc: "Comprehensive guide to P21 peptide for neurogenesis, cognitive enhancement, and neuroprotection. Mechanisms, dosing, and clinical applications." },
  "/peptides/pt-141": { title: "PT-141 (Bremelanotide) - Sexual Wellness", desc: "Evidence-based guide to PT-141 for sexual dysfunction treatment. FDA-approved mechanisms, dosing protocols, and clinical applications." },
  "/peptides/pterostilbene": { title: "Pterostilbene - Enhanced Resveratrol Analog", desc: "Comprehensive guide to Pterostilbene for longevity, cognitive health, and metabolic support. Superior bioavailability compared to resveratrol." },
  "/peptides/quercetin": { title: "Quercetin - Senolytic Flavonoid", desc: "Comprehensive guide to Quercetin for senolytic therapy, immune support, and anti-inflammatory effects. Mechanisms, dosing, and research." },
  "/peptides/rapamycin": { title: "Rapamycin - mTOR Inhibitor", desc: "Comprehensive guide to Rapamycin for longevity, autophagy enhancement, and healthspan extension. Mechanisms, dosing, and research." },
  "/peptides/resveratrol": { title: "Resveratrol - Sirtuin Activator", desc: "Comprehensive guide to Resveratrol for longevity, cardiovascular health, and metabolic benefits. Mechanisms, dosing, and research." },
  "/peptides/selank": { title: "Selank Guide - Anxiolytic Peptide for Stress & Anxiety", desc: "Complete selank guide for healthcare providers. Anxiolytic peptide protocols, stress reduction, and immune modulation." },
  "/peptides/semaglutide": { title: "Semaglutide (Ozempic/Wegovy) - GLP-1 for Weight Loss", desc: "Complete clinical guide to semaglutide for weight management and metabolic health. GLP-1 mechanisms, dosing, side effects, and patient protocols." },
  "/peptides/semax": { title: "Semax Guide - Nootropic Peptide for Cognitive Enhancement", desc: "Comprehensive semax clinical guide. Nootropic peptide dosing, cognitive enhancement protocols, and neuroprotection applications." },
  "/peptides/spermidine": { title: "Spermidine - Autophagy-Inducing Longevity Compound", desc: "Comprehensive guide to Spermidine for autophagy induction, cellular renewal, and longevity. Mechanisms, dosing, and research." },
  "/peptides/ss-31": { title: "SS-31 (Elamipretide) - Mitochondrial Protector", desc: "Evidence-based guide to SS-31 for mitochondrial health and cardioprotection. Mechanisms, clinical trials, and therapeutic applications." },
  "/peptides/tb-500": { title: "TB-500 - Thymosin Beta-4", desc: "Evidence-based guide to TB-500 for injury recovery, tissue regeneration, and inflammation reduction. Clinical protocols and safety." },
  "/peptides/tesofensine": { title: "Tesofensine - Weight Management Compound", desc: "Comprehensive guide to Tesofensine for weight loss, appetite suppression, and metabolic enhancement. Mechanisms, dosing, and research." },
  "/peptides/thymosin-alpha-1": { title: "Thymosin Alpha-1 Guide - Immune Modulation & Clinical Protocols", desc: "Comprehensive thymosin alpha-1 guide for medical professionals. Immune modulation protocols, viral infection support, and cancer adjunct therapy." },
  "/peptides/tirzepatide": { title: "Tirzepatide (Mounjaro/Zepbound) - Dual GLP-1/GIP", desc: "Clinical overview of tirzepatide dual GIP/GLP-1 agonist for weight loss. Mechanisms, efficacy data, dosing protocols, and comparison to semaglutide." },
  "/peptides/vip": { title: "VIP - Vasoactive Intestinal Peptide", desc: "Comprehensive guide to VIP for immune modulation, CIRS treatment, and neuroprotection. Mechanisms, dosing, and clinical applications." },
  "/peptides/zinc-thymulin": { title: "Zinc Thymulin - Thymic Peptide Complex", desc: "Comprehensive guide to Zinc Thymulin for immune restoration, T-cell function, and thymic regeneration. Mechanisms, dosing, and research." },
  "/practice-toolkit": { title: "Practice Implementation Toolkit - Start Offering Peptide Therapy", desc: "Complete practice implementation toolkit with 4-phase roadmap, 50+ templates, startup cost breakdown, revenue projections, and ROI analysis." },
  "/protocol-builder": { title: "Protocol Builder - Custom Treatment Plans", desc: "Interactive peptide therapy protocol builder with 30+ peptides and 15+ evidence-based templates for personalized treatment plans." },
  "/regulatory-guidance": { title: "Regulatory & Legal Guidance for Peptide Therapy", desc: "Comprehensive FDA regulations, state-by-state prescribing laws, and legal compliance guide for peptide therapy practitioners." },
  "/research": { title: "Research - Clinical Studies & Evidence", desc: "Curated collection of clinical studies, research papers, and evidence supporting peptide therapy applications." },
  "/research-studies": { title: "Research - Clinical Studies & Evidence", desc: "Curated collection of clinical studies, research papers, and evidence supporting peptide therapy applications." },
  "/resources": { title: "Resources - Peptide Therapy Guides & Tools", desc: "Comprehensive peptide therapy resources including clinical guides, reference charts, and educational materials for healthcare providers." },
  "/safety-management": { title: "Safety Management & Adverse Events", desc: "Comprehensive adverse event database with 100+ documented reactions and management protocols. Emergency response guidelines and patient monitoring." },
  "/stacking-guide": { title: "Stacking Guide - Peptide Combinations", desc: "Evidence-based guide to combining peptides for synergistic effects. Safe stacking protocols for common therapeutic goals." },
  "/statistics": { title: "Peptide Industry Statistics 2026 - Market Data & Trends", desc: "Comprehensive peptide industry statistics for 2026. Market size, growth projections, clinical trial data, FDA approvals, and adoption rates." },
  "/tools/biomarker-tracker": { title: "Biomarker Tracker - Monitor Lab Results", desc: "Track and visualize patient biomarkers and lab results over time. Monitor hormone levels, metabolic markers, and treatment outcomes." },
  "/tools/cost-calculator": { title: "Cost Calculator - Peptide Therapy Pricing", desc: "Estimate peptide therapy costs with our interactive calculator. Compare prices, calculate monthly expenses, and plan treatment budgets." },
  "/tools/dosage-calculator": { title: "Advanced Dosage Calculator - Multi-Peptide Reconstitution Tool", desc: "Professional-grade peptide dosage calculator with multi-peptide support, weight-based dosing, schedule generation, and PDF export." },
  "/tools/interaction-checker": { title: "Advanced Interaction Checker - Peptide Drug Interaction Database", desc: "Comprehensive peptide interaction checker with drug-drug interactions, contraindications, and clinical decision support." },
  "/tools/patient-handouts": { title: "Patient Handout Generator - Customizable Education Materials", desc: "Generate professional patient education handouts for peptide therapy with customizable templates and print-ready PDF export." },
  "/tools/progress-tracker": { title: "Progress Tracker - Patient Progress Monitoring & Analytics", desc: "Track patient progress with comprehensive analytics, visual charts, and detailed logging during peptide therapy." },
  "/tools/protocol-builder": { title: "Protocol Builder - Evidence-Based Peptide Treatment Protocols", desc: "Build comprehensive peptide therapy protocols with evidence-based templates for weight loss, recovery, longevity, and more." },
  "/training": { title: "Peptide Therapy Training & Certification Programs", desc: "Comprehensive peptide therapy training directory with 8+ certification programs, 6 major conferences, and 40+ education resources." },
  // Blend pages
  "/peptides/bpc-157-tb-500": { title: "BPC-157 + TB-500 Blend - Synergistic Healing Protocol", desc: "Clinical guide to the BPC-157 and TB-500 combination for enhanced tissue repair, injury recovery, and anti-inflammatory support." },
  "/peptides/bpc-wolverine": { title: "BPC Wolverine Blend - Advanced Recovery Formula", desc: "Comprehensive guide to the BPC Wolverine blend for accelerated healing, tissue regeneration, and recovery optimization." },
  "/peptides/cjc-1295-ipamorelin": { title: "CJC-1295 + Ipamorelin Blend - Growth Hormone Optimization", desc: "Clinical guide to the CJC-1295 and Ipamorelin combination for optimized growth hormone release, body composition, and anti-aging." },
  "/peptides/selank-semax": { title: "Selank + Semax Blend - Cognitive Enhancement Protocol", desc: "Comprehensive guide to the Selank and Semax combination for cognitive enhancement, neuroprotection, and stress reduction." },
  "/peptides/semaglutide-bpc-157": { title: "Semaglutide + BPC-157 Blend - Weight Loss & GI Protection", desc: "Clinical guide to combining Semaglutide with BPC-157 for weight loss with gastrointestinal protection and enhanced outcomes." },
  "/peptides/tirzepatide-bpc-157": { title: "Tirzepatide + BPC-157 Blend - Dual GLP-1/GIP with GI Support", desc: "Clinical guide to combining Tirzepatide with BPC-157 for enhanced weight loss with gastrointestinal protection." },
  "/peptides/tesamorelin-ipamorelin": { title: "Tesamorelin + Ipamorelin Blend - Growth Hormone Optimization", desc: "Clinical guide to the Tesamorelin and Ipamorelin combination for growth hormone optimization and body composition improvement." },
  "/peptides/glow-core": { title: "GLOW Core - Skin Rejuvenation Blend", desc: "Advanced skin rejuvenation formula for comprehensive dermal health, collagen production, and anti-aging." },
  "/peptides/glow-plus": { title: "GLOW Plus - Enhanced Skin Rejuvenation", desc: "Enhanced skin rejuvenation formula with additional peptides for advanced dermal repair and anti-aging." },
  "/peptides/glow-ultra": { title: "GLOW Ultra - Premium Skin Rejuvenation", desc: "Premium skin rejuvenation formula with the most comprehensive peptide blend for maximum dermal health and anti-aging benefits." },
  "/peptides/glow-blend-capsules": { title: "GLOW Blend Capsules - Oral Skin Support", desc: "Oral skin support capsules for convenient daily skin health optimization and anti-aging from within." },
  "/peptides/klow-blend-capsules": { title: "KLOW Blend Capsules - Gut Health Support", desc: "Oral gut health support capsules for comprehensive digestive wellness and microbiome optimization." },
  // Additional pages
  "/peptides/bpc-157-capsules": { title: "BPC-157 Capsules - Oral BPC-157 Guide", desc: "Comprehensive guide to oral BPC-157 capsules for gut healing, tissue repair, and systemic benefits. Dosing, bioavailability, and clinical applications." },
  "/peptides/nad-nasal-spray": { title: "NAD+ Nasal Spray - Intranasal NAD+ Delivery", desc: "Guide to NAD+ nasal spray for enhanced bioavailability, cognitive support, and cellular energy optimization." },
  "/peptides/ghk-cu-serum": { title: "GHK-Cu Serum - Topical Copper Peptide", desc: "Guide to topical GHK-Cu serum for skin rejuvenation, wound healing, and anti-aging applications." },
  "/peptides/glutathione": { title: "Glutathione - Master Antioxidant", desc: "Comprehensive guide to Glutathione for detoxification, immune support, and antioxidant protection. Mechanisms, dosing, and clinical applications." },
  "/peptides/5-amino-1mq": { title: "5-Amino-1MQ - NNMT Inhibitor for Fat Loss", desc: "Comprehensive guide to 5-Amino-1MQ for fat loss, metabolic enhancement, and NNMT inhibition. Mechanisms, dosing, and research." },
  "/peptides/ibutamoren": { title: "Ibutamoren (MK-677) - Oral Growth Hormone Secretagogue", desc: "Clinical guide to Ibutamoren for growth hormone release, muscle growth, and sleep improvement. Mechanisms, dosing, and safety." },
  "/peptides/aod-9604": { title: "AOD-9604 - Anti-Obesity Drug Fragment", desc: "Comprehensive guide to AOD-9604 for targeted fat loss and metabolic support. Mechanisms, dosing, and clinical applications." },
  "/peptides/ghrp-6": { title: "GHRP-6 - Growth Hormone Releasing Peptide-6", desc: "Clinical guide to GHRP-6 for growth hormone stimulation, appetite enhancement, and recovery. Mechanisms, dosing, and safety." },
  "/peptides/ghrp-2": { title: "GHRP-2 - Growth Hormone Releasing Peptide-2", desc: "Clinical guide to GHRP-2 for potent growth hormone release. Mechanisms, dosing protocols, and comparison with other GHRPs." },
  "/peptides/glp-1": { title: "GLP-1 Agonists - Glucagon-Like Peptide-1 Guide", desc: "Comprehensive guide to GLP-1 receptor agonists for weight management and metabolic health. Semaglutide, tirzepatide, and emerging therapies." },
  "/peptides/kisspeptin-10": { title: "Kisspeptin-10 - Reproductive Hormone Peptide", desc: "Clinical guide to Kisspeptin-10 for reproductive health, hormone regulation, and fertility support." },
  "/peptides/oxytocin": { title: "Oxytocin - Bonding & Social Peptide", desc: "Comprehensive guide to Oxytocin for social bonding, stress reduction, and therapeutic applications. Mechanisms, dosing, and research." },
  "/peptides/pinealon": { title: "Pinealon - Neuroprotective Tripeptide", desc: "Guide to Pinealon for neuroprotection, sleep regulation, and pineal gland support. Mechanisms, dosing, and clinical applications." },
  "/peptides/cagrilintide": { title: "Cagrilintide - Long-Acting Amylin Analog", desc: "Clinical guide to Cagrilintide for weight management and appetite regulation. Mechanisms, clinical trials, and combination therapy." },
  "/peptides/slu-pp-332": { title: "SLU-PP-332 - Exercise Mimetic Compound", desc: "Guide to SLU-PP-332 for exercise mimetic effects, metabolic enhancement, and endurance optimization." },
  "/peptides/nad": { title: "NAD+ - Nicotinamide Adenine Dinucleotide", desc: "Comprehensive guide to NAD+ for cellular energy, longevity, and metabolic health. Mechanisms, supplementation, and clinical applications." },
  "/peptides/retatrutide": { title: "Retatrutide - Triple Agonist for Weight Loss", desc: "Clinical guide to Retatrutide triple GLP-1/GIP/Glucagon agonist for weight management. Mechanisms, clinical trials, and dosing." },
  "/peptides/sermorelin": { title: "Sermorelin - Growth Hormone Releasing Hormone", desc: "Comprehensive guide to Sermorelin for growth hormone optimization. Mechanisms, dosing protocols, and anti-aging applications." },
  // Protocol pages
  "/protocols/metabolism": { title: "Metabolism Protocol - Peptide Therapy for Metabolic Health", desc: "Evidence-based peptide protocol for metabolic optimization, weight management, and energy enhancement." },
  "/protocols/longevity": { title: "Longevity Protocol - Anti-Aging Peptide Therapy", desc: "Evidence-based peptide protocol for longevity, cellular rejuvenation, and healthspan extension." },
  "/protocols/cognitive": { title: "Cognitive Protocol - Peptide Therapy for Brain Health", desc: "Evidence-based peptide protocol for cognitive enhancement, neuroprotection, and mental clarity." },
  "/protocols/injury-healing": { title: "Injury Healing Protocol - Peptide Therapy for Recovery", desc: "Evidence-based peptide protocol for accelerated injury healing, tissue repair, and recovery optimization." },
  "/protocols/weight-loss": { title: "Weight Loss Protocol - Peptide Therapy for Weight Management", desc: "Evidence-based peptide protocol for weight loss, appetite regulation, and metabolic optimization." },
  "/tools/practice-assessment": { title: "Practice Assessment - Evaluate Your Peptide Therapy Readiness", desc: "Assess your practice readiness for peptide therapy integration with our comprehensive evaluation tool." },
  "/video-library": { title: "Video Library - Peptide Therapy Educational Videos", desc: "Educational video library covering peptide therapy topics, clinical protocols, and practice management." },
  "/downloads": { title: "Downloadable Resources - Peptide Therapy Materials", desc: "Free downloadable resources including clinical protocols, patient handouts, and practice management templates." },
  "/safety-standards": { title: "Safety Standards - Peptide Therapy Quality & Safety", desc: "Comprehensive safety standards for peptide therapy including quality control, storage, handling, and administration guidelines." },
  "/safety-compliance": { title: "Safety Compliance - Regulatory Compliance Guide", desc: "Complete regulatory compliance guide for peptide therapy practices including FDA, DEA, and state requirements." },
  "/insurance-billing": { title: "Insurance & Billing Guide - Peptide Therapy Reimbursement", desc: "Complete guide to insurance billing and reimbursement for peptide therapy. CPT codes, documentation requirements, and revenue optimization." },
  "/supplier-directory": { title: "Supplier Directory - Verified Peptide Sources", desc: "Directory of verified peptide suppliers including 503A and 503B compounding pharmacies and research suppliers." },
  // Missing routes added
  "/administration-guide": { title: "Peptide Administration Guide - Injection Techniques & Best Practices", desc: "Step-by-step guide to peptide administration including subcutaneous injection technique, reconstitution, storage, and safety protocols for healthcare providers." },
  "/are-peptides-safe": { title: "Are Peptides Safe? Evidence-Based Safety Guide", desc: "Comprehensive evidence-based guide to peptide safety. Side effects, contraindications, quality standards, and risk management for healthcare providers." },
  "/faq": { title: "Peptide Therapy FAQ - Frequently Asked Questions", desc: "Answers to the most common questions about peptide therapy including safety, legality, sourcing, dosing, and clinical applications." },
  "/how-to-inject-peptides": { title: "How to Inject Peptides - Complete Injection Guide", desc: "Detailed guide on how to inject peptides safely. Subcutaneous and intramuscular injection techniques, needle selection, site rotation, and patient education." },
  "/what-are-peptides": { title: "What Are Peptides? A Complete Guide for Healthcare Providers", desc: "Comprehensive guide explaining what peptides are, how they work, their therapeutic applications, and why they matter in modern medicine." },
  "/peptides/igf-1-lr3": { title: "IGF-1 LR3 - Long-Acting Insulin-Like Growth Factor", desc: "Clinical guide to IGF-1 LR3 for muscle growth, recovery, and tissue repair. Mechanisms, dosing protocols, and safety considerations." },
  "/peptides/tesamorelin": { title: "Tesamorelin - FDA-Approved GHRH Analog", desc: "Evidence-based guide to Tesamorelin for visceral fat reduction and growth hormone optimization. FDA-approved mechanisms, dosing, and clinical applications." },
  "/tools/enhanced-dosing-calculator": { title: "Enhanced Dosing Calculator - Advanced Peptide Dosing Tool", desc: "Advanced peptide dosing calculator with weight-based adjustments, multi-peptide support, and clinical decision support." },
  "/tools/reconstitution-calculator": { title: "Reconstitution Calculator - Peptide Mixing Guide", desc: "Calculate exact reconstitution volumes for peptides. Bacteriostatic water calculations, concentration adjustments, and dosing conversions." },
  "/peptide-index": { title: "A-Z Peptide Index - Complete Directory of 85+ Peptides & Compounds", desc: "Comprehensive A-Z directory of all peptides, blends, and proprietary formulas. Browse by category, search by name, or explore our complete peptide database for healthcare providers." },
};

// Blog posts have dynamic slugs - handle them separately
const BLOG_META: Record<string, { title: string; desc: string }> = {
  "reconstitution-guide": { title: "Complete Peptide Reconstitution Guide for Healthcare Providers", desc: "Step-by-step guide to peptide reconstitution including bacteriostatic water calculations, storage, and best practices." },
  "503a-vs-503b": { title: "503A vs 503B Compounding Pharmacies for Peptides - Complete Guide", desc: "Comprehensive comparison of 503A and 503B compounding pharmacies for peptide sourcing. Regulations, quality standards, and selection criteria." },
  "fda-peptide-regulations-2026": { title: "FDA Peptide Regulations 2026 - What Providers Need to Know", desc: "Complete guide to FDA peptide regulations in 2026 including Category 2 changes, compounding rules, and compliance requirements." },
  "peptides-gut-health": { title: "Peptides for Gut Health - BPC-157, KPV & More", desc: "Evidence-based guide to peptides for gut health including BPC-157, KPV, and Larazotide. Mechanisms, protocols, and clinical applications." },
};

import type { Context } from "https://edge.netlify.com";

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Get the response from the origin (using context.next() to avoid loop)
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";
  
  // Only modify HTML responses
  if (!contentType.includes("text/html")) {
    return response;
  }
  
  // Find the meta for this route
  let meta = ROUTE_META[path];
  
  // Check blog posts
  if (!meta && path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    const blogMeta = BLOG_META[slug];
    if (blogMeta) {
      meta = blogMeta;
    }
  }
  
  // If no specific meta found, use defaults but still fix canonical
  if (!meta) {
    meta = {
      title: "Peptide Education Hub - Evidence-Based Peptide Therapy Education",
      desc: "Comprehensive educational resource for healthcare providers practicing peptide therapy."
    };
  }
  
  let html = await response.text();
  const fullTitle = meta.title.includes("Peptide Education Hub") 
    ? meta.title 
    : `${meta.title} | Peptide Education Hub`;
  const canonicalUrl = `https://pepedhub.com${path === "/" ? "" : path}`;
  
  // Replace the title tag
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${fullTitle}</title>`
  );
  
  // Replace meta title
  html = html.replace(
    /<meta name="title" content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${fullTitle}" />`
  );
  
  // Replace meta description
  if (meta.desc) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${meta.desc}" />`
    );
  }
  
  // Fix canonical URL to point to the actual page, not the homepage
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  
  // Fix Open Graph URL
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  
  // Fix Open Graph title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${fullTitle}" />`
  );
  
  // Fix Open Graph description
  if (meta.desc) {
    html = html.replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${meta.desc}" />`
    );
  }
  
  // Fix Twitter title
  html = html.replace(
    /<meta property="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta property="twitter:title" content="${fullTitle}" />`
  );
  
  // Fix Twitter description
  if (meta.desc) {
    html = html.replace(
      /<meta property="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta property="twitter:description" content="${meta.desc}" />`
    );
  }
  
  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
}

export const config = {
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/*.js",
    "/*.css",
    "/*.png",
    "/*.jpg",
    "/*.svg",
    "/*.ico",
    "/*.woff",
    "/*.woff2",
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
    "/_redirects",
  ],
};
