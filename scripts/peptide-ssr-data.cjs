// Rich SSR content data for every peptide page
// This data is injected into pre-rendered HTML so Google can crawl substantive content
// without needing to execute JavaScript

const PEPTIDE_SSR_DATA = {
  "/peptides/bpc-157": {
    mechanism: "BPC-157 (Body Protection Compound-157) is a 15-amino acid peptide derived from human gastric juice. It exerts its effects through multiple pathways including upregulation of growth factor expression (EGF, FGF, VEGF), modulation of the nitric oxide system, activation of the FAK-paxillin pathway for cell migration, and promotion of tendon fibroblast growth. BPC-157 has demonstrated cytoprotective properties across virtually every organ system studied.",
    applications: ["Gastrointestinal healing (ulcers, IBD, leaky gut)", "Tendon and ligament repair", "Muscle injury recovery", "Neuroprotection and brain injury", "Wound healing acceleration", "Inflammatory bowel disease", "NSAID-induced damage reversal", "Periodontal healing"],
    dosing: "Typical subcutaneous dosing: 250-500mcg once or twice daily. Oral dosing for GI applications: 250-500mcg twice daily on empty stomach. Treatment cycles typically run 4-8 weeks.",
    safety: "BPC-157 has shown an excellent safety profile in animal studies with no reported LD50. Common side effects are minimal and may include mild injection site reactions. No significant drug interactions have been identified in preclinical research.",
    relatedPeptides: ["/peptides/tb-500", "/peptides/ghk-cu", "/peptides/kpv", "/peptides/pentosan-polysulfate"]
  },
  "/peptides/semaglutide": {
    mechanism: "Semaglutide is a GLP-1 receptor agonist with 94% homology to native GLP-1. It works by binding to GLP-1 receptors in the pancreas to stimulate insulin secretion, in the brain to reduce appetite and food intake, and in the gut to slow gastric emptying. The fatty acid side chain enables albumin binding, extending its half-life to approximately 7 days, allowing once-weekly dosing.",
    applications: ["Chronic weight management (FDA-approved as Wegovy)", "Type 2 diabetes (FDA-approved as Ozempic)", "Cardiovascular risk reduction", "Non-alcoholic fatty liver disease (NAFLD)", "Metabolic syndrome", "Obesity-related comorbidities"],
    dosing: "Weight loss: Start 0.25mg weekly for 4 weeks, titrate to 0.5mg, 1.0mg, 1.7mg, then 2.4mg weekly. Diabetes: Titrate from 0.25mg to maintenance of 0.5-1.0mg weekly. Subcutaneous injection in abdomen, thigh, or upper arm.",
    safety: "Most common side effects: nausea (44%), diarrhea (30%), vomiting (24%), constipation (24%). GI side effects typically diminish with continued use. Contraindicated in patients with personal or family history of medullary thyroid carcinoma or MEN2 syndrome. Black box warning for thyroid C-cell tumors.",
    relatedPeptides: ["/peptides/tirzepatide", "/peptides/retatrutide", "/peptides/survodutide", "/peptides/cagrilintide"]
  },
  "/peptides/tirzepatide": {
    mechanism: "Tirzepatide is a first-in-class dual GIP/GLP-1 receptor agonist. It simultaneously activates glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors, producing synergistic effects on weight loss and glycemic control that exceed either pathway alone. The dual mechanism enhances insulin sensitivity, reduces glucagon secretion, slows gastric emptying, and modulates appetite through central nervous system pathways.",
    applications: ["Type 2 diabetes (FDA-approved as Mounjaro)", "Chronic weight management (FDA-approved as Zepbound)", "Cardiovascular risk reduction", "NAFLD/NASH", "Metabolic syndrome", "Obstructive sleep apnea"],
    dosing: "Start 2.5mg weekly for 4 weeks, then titrate: 5mg, 7.5mg, 10mg, 12.5mg, 15mg weekly. Each dose maintained for minimum 4 weeks before escalation. Subcutaneous injection once weekly.",
    safety: "Common side effects: nausea (up to 33%), diarrhea (23%), decreased appetite (20%), vomiting (12%). Generally well-tolerated with dose titration. Same thyroid C-cell tumor warning as GLP-1 agonists. SURMOUNT-1 trial showed 22.5% mean weight loss at highest dose.",
    relatedPeptides: ["/peptides/semaglutide", "/peptides/retatrutide", "/peptides/survodutide", "/peptides/cagrilintide"]
  },
  "/peptides/tb-500": {
    mechanism: "TB-500 is a synthetic version of the naturally occurring 43-amino acid peptide Thymosin Beta-4. It promotes tissue repair through upregulation of actin, a cell-building protein essential for cell migration and proliferation. TB-500 promotes angiogenesis (new blood vessel formation), reduces inflammation by decreasing pro-inflammatory cytokines, and activates satellite cells for muscle regeneration. Its small molecular size allows systemic distribution.",
    applications: ["Muscle injury repair and recovery", "Tendon and ligament healing", "Cardiac tissue repair", "Wound healing", "Hair regrowth", "Corneal repair", "Post-surgical recovery", "Chronic inflammation"],
    dosing: "Loading phase: 2-5mg twice weekly for 4-6 weeks. Maintenance: 2-5mg every 2 weeks. Subcutaneous or intramuscular injection. Often combined with BPC-157 for synergistic healing effects.",
    safety: "TB-500 has shown a favorable safety profile in clinical studies. Minimal side effects reported, primarily injection site reactions. Some patients report temporary lethargy during loading phase. No significant drug interactions identified.",
    relatedPeptides: ["/peptides/bpc-157", "/peptides/ghk-cu", "/peptides/pentosan-polysulfate", "/peptides/mgf"]
  },
  "/peptides/pt-141": {
    mechanism: "PT-141 (Bremelanotide) is a synthetic melanocortin peptide that activates melanocortin-4 receptors (MC4R) in the central nervous system. Unlike PDE5 inhibitors that act peripherally on blood flow, PT-141 works centrally through the hypothalamus to stimulate sexual arousal and desire. It is the only FDA-approved treatment that targets the brain's sexual response pathway.",
    applications: ["Hypoactive sexual desire disorder in women (FDA-approved as Vyleesi)", "Erectile dysfunction in men", "Sexual arousal disorders", "Libido enhancement", "Sexual dysfunction from antidepressants"],
    dosing: "FDA-approved dose: 1.75mg subcutaneous injection at least 45 minutes before anticipated sexual activity. Maximum one dose per 24 hours, no more than 8 doses per month. Off-label male dosing: 1-2mg subcutaneous.",
    safety: "Common side effects: nausea (40%), flushing (20%), headache (11%), injection site reactions. Nausea is the most common reason for discontinuation. Contraindicated in uncontrolled hypertension. May cause transient blood pressure elevation and skin hyperpigmentation with repeated use.",
    relatedPeptides: ["/peptides/kisspeptin", "/peptides/melanotan-ii", "/peptides/oxytocin"]
  },
  "/peptides/ipamorelin": {
    mechanism: "Ipamorelin is a highly selective growth hormone secretagogue that binds to the ghrelin/GHS receptor (GHSR) in the pituitary gland. Unlike other GH secretagogues, ipamorelin does not significantly affect cortisol, prolactin, or ACTH levels, making it one of the cleanest GH-releasing peptides available. It stimulates pulsatile GH release that mimics natural physiological patterns.",
    applications: ["Growth hormone optimization", "Anti-aging and longevity", "Body composition improvement", "Bone density support", "Sleep quality enhancement", "Injury recovery", "Muscle growth and fat loss"],
    dosing: "Typical dose: 200-300mcg subcutaneous injection 2-3 times daily. Best administered on empty stomach, 30 minutes before meals or at bedtime. Often combined with CJC-1295 for synergistic GH release. Cycle: 8-12 weeks on, 4 weeks off.",
    safety: "Ipamorelin has the most favorable side effect profile among GH secretagogues. Minimal impact on cortisol and prolactin. Possible side effects: water retention, tingling in extremities, increased hunger. Generally well-tolerated for long-term use.",
    relatedPeptides: ["/peptides/cjc-1295", "/peptides/sermorelin", "/peptides/tesamorelin", "/peptides/ghrp-2"]
  },
  "/peptides/cjc-1295": {
    mechanism: "CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH) with a modified structure that extends its half-life. The DAC (Drug Affinity Complex) version binds to albumin, extending the half-life to 6-8 days. The non-DAC version (Mod GRF 1-29) has a half-life of approximately 30 minutes. Both stimulate the anterior pituitary to release growth hormone in a dose-dependent manner.",
    applications: ["Growth hormone optimization", "Anti-aging protocols", "Fat loss and body recomposition", "Muscle growth and recovery", "Sleep improvement", "Immune function support", "Bone density enhancement"],
    dosing: "CJC-1295 with DAC: 1-2mg subcutaneous once or twice weekly. CJC-1295 no DAC (Mod GRF 1-29): 100-300mcg subcutaneous 2-3 times daily, often combined with ipamorelin. Administer on empty stomach.",
    safety: "Generally well-tolerated. Side effects may include water retention, flushing, headache, and dizziness. The DAC version produces more sustained GH elevation which may increase IGF-1 more significantly. Monitor IGF-1 levels during therapy.",
    relatedPeptides: ["/peptides/ipamorelin", "/peptides/sermorelin", "/peptides/tesamorelin", "/peptides/hexarelin"]
  },
  "/peptides/sermorelin": {
    mechanism: "Sermorelin is a bioidentical synthetic analog of the first 29 amino acids of naturally occurring GHRH. It stimulates the pituitary gland to produce and secrete growth hormone through the GHRH receptor. Because it works through the natural feedback loop, sermorelin maintains physiological GH pulsatility and does not suppress endogenous GH production.",
    applications: ["Age-related growth hormone decline", "Anti-aging therapy", "Body composition optimization", "Sleep quality improvement", "Cognitive function support", "Pediatric growth hormone deficiency", "Recovery and healing"],
    dosing: "Typical dose: 200-500mcg subcutaneous injection at bedtime. Can be combined with GHRP for enhanced effect. Cycle: 3-6 months continuous use with periodic reassessment. Monitor IGF-1 levels.",
    safety: "FDA-approved for diagnostic use. Excellent safety profile for long-term use. Side effects are rare and mild: injection site reactions, flushing, headache, dizziness. Does not suppress natural GH production.",
    relatedPeptides: ["/peptides/cjc-1295", "/peptides/ipamorelin", "/peptides/tesamorelin", "/peptides/ghrp-6"]
  },
  "/peptides/tesamorelin": {
    mechanism: "Tesamorelin is an FDA-approved synthetic GHRH analog with a trans-3-hexenoic acid modification that enhances receptor binding and stability. It stimulates pituitary GH release and has been specifically studied for visceral adipose tissue reduction. Tesamorelin reduces visceral fat through GH-mediated lipolysis without significantly affecting subcutaneous fat.",
    applications: ["HIV-associated lipodystrophy (FDA-approved as Egrifta)", "Visceral fat reduction", "NAFLD/liver fat reduction", "Growth hormone optimization", "Cognitive function in aging", "Body composition improvement"],
    dosing: "FDA-approved dose: 2mg subcutaneous injection once daily. Administer on empty stomach at bedtime. Often combined with ipamorelin for enhanced GH release. Treatment duration: 6-12 months with monitoring.",
    safety: "FDA-approved with established safety data. Common side effects: injection site reactions (8.5%), arthralgia (3.3%), peripheral edema (2.9%), myalgia (2.5%). Monitor IGF-1 levels, glucose, and HbA1c during therapy.",
    relatedPeptides: ["/peptides/ipamorelin", "/peptides/cjc-1295", "/peptides/sermorelin", "/peptides/aod-9604"]
  },
  "/peptides/aod-9604": {
    mechanism: "AOD-9604 (Anti-Obesity Drug 9604) is a modified fragment of human growth hormone comprising amino acids 177-191 with an added tyrosine at the N-terminus. It retains the fat-reducing properties of HGH without the growth-promoting or diabetogenic effects. AOD-9604 stimulates lipolysis and inhibits lipogenesis through a mechanism independent of the GH receptor, acting instead through the beta-3 adrenergic receptor pathway.",
    applications: ["Fat loss and weight management", "Osteoarthritis (TGA-approved in Australia)", "Cartilage repair", "Metabolic optimization", "Body composition improvement"],
    dosing: "Typical dose: 300mcg subcutaneous injection once daily on empty stomach, preferably in the morning. Cycle: 12-20 weeks. Can be combined with other peptides for enhanced fat loss.",
    safety: "AOD-9604 has been granted GRAS (Generally Recognized As Safe) status by the FDA for oral use. Does not affect blood sugar or growth. Minimal side effects reported. No impact on IGF-1 levels.",
    relatedPeptides: ["/peptides/fragment-176-191", "/peptides/5-amino-1mq", "/peptides/tesofensine", "/peptides/semaglutide"]
  },
  "/peptides/ghk-cu": {
    mechanism: "GHK-Cu (Glycyl-L-Histidyl-L-Lysine Copper Complex) is a naturally occurring copper tripeptide found in human plasma, saliva, and urine. It functions as a potent gene regulator, modulating the expression of over 4,000 genes — approximately 6% of the human genome. GHK-Cu promotes collagen and elastin synthesis, activates wound healing pathways, has anti-inflammatory and antioxidant properties, and stimulates blood vessel and nerve growth.",
    applications: ["Skin rejuvenation and anti-aging", "Wound healing acceleration", "Hair growth stimulation", "Collagen and elastin synthesis", "Scar tissue remodeling", "Post-surgical recovery", "COPD lung tissue repair", "Anti-cancer gene modulation"],
    dosing: "Subcutaneous: 1-2mg daily. Topical: 1-2% concentration in cream or serum. Injectable cycle: 4-8 weeks. Often combined with BPC-157 and TB-500 in regenerative protocols.",
    safety: "Naturally occurring in the human body with an excellent safety profile. Levels decline with age (from 200ng/mL at age 20 to 80ng/mL at age 60). Minimal side effects. Topical use is very well-tolerated.",
    relatedPeptides: ["/peptides/bpc-157", "/peptides/tb-500", "/peptides/snap-8", "/peptides/epithalon"]
  },
  "/peptides/epithalon": {
    mechanism: "Epithalon (Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) based on the natural peptide epithalamin produced by the pineal gland. It activates telomerase, the enzyme responsible for maintaining telomere length. By reactivating telomerase in somatic cells, epithalon may slow or reverse cellular aging. It also regulates melatonin production and has demonstrated antioxidant properties.",
    applications: ["Telomere lengthening and maintenance", "Anti-aging and longevity", "Melatonin regulation and sleep", "Antioxidant protection", "Retinal health", "Immune system modulation", "Cancer prevention research"],
    dosing: "Typical protocol: 5-10mg subcutaneous injection daily for 10-20 days. Repeat cycle every 4-6 months. Some protocols use 5mg twice daily for 10 days. Measure telomere length before and after treatment.",
    safety: "Epithalon has shown a very favorable safety profile in human studies conducted by Professor Vladimir Khavinson over 35+ years. No significant adverse effects reported. The peptide has been studied in over 100 gerontological studies.",
    relatedPeptides: ["/peptides/foxo4-dri", "/peptides/humanin", "/peptides/mots-c", "/peptides/nad-plus"]
  },
  "/peptides/thymosin-alpha-1": {
    mechanism: "Thymosin Alpha-1 (Ta1) is a 28-amino acid peptide naturally produced by the thymus gland. It modulates the immune system by activating dendritic cells, enhancing T-cell function (both CD4+ and CD8+), promoting NK cell activity, and stimulating cytokine production. Ta1 acts as an immune system conductor, upregulating immune responses when needed and modulating overactive responses.",
    applications: ["Chronic viral infections (Hepatitis B, C)", "Immune deficiency states", "Cancer immunotherapy adjunct", "Vaccine response enhancement", "Chronic fatigue and immune dysfunction", "Lyme disease support", "Post-chemotherapy immune recovery"],
    dosing: "Standard dose: 1.6mg subcutaneous injection twice weekly. Acute infections: 1.6mg daily for 2-4 weeks. FDA-approved in 35+ countries as Zadaxin. Treatment duration varies by indication.",
    safety: "Thymosin Alpha-1 has been approved in over 35 countries with extensive safety data. Minimal side effects. May cause mild injection site reactions. Well-tolerated in immunocompromised patients.",
    relatedPeptides: ["/peptides/thymalin", "/peptides/ll-37", "/peptides/vip", "/peptides/kpv"]
  },
  "/peptides/ll-37": {
    mechanism: "LL-37 is the only human cathelicidin antimicrobial peptide, a 37-amino acid peptide derived from the C-terminus of the hCAP18 protein. It disrupts bacterial cell membranes, neutralizes endotoxins (LPS), disrupts biofilms, and modulates immune responses. LL-37 also promotes wound healing through angiogenesis and re-epithelialization, and has demonstrated antiviral and antifungal properties.",
    applications: ["Biofilm disruption (Lyme, MRSA)", "Antimicrobial defense", "Wound healing", "Upper respiratory infections", "Immune modulation", "Chronic infections", "Gut dysbiosis"],
    dosing: "Subcutaneous: 50-100mcg daily. Intranasal: 50mcg daily for respiratory infections. Treatment cycles: 4-8 weeks. Often combined with thymosin alpha-1 for chronic infections.",
    safety: "As a naturally occurring human peptide, LL-37 has a favorable safety profile. Possible side effects include injection site reactions and mild flu-like symptoms during initial treatment. Monitor for signs of immune activation.",
    relatedPeptides: ["/peptides/thymosin-alpha-1", "/peptides/kpv", "/peptides/vip", "/peptides/larazotide"]
  },
  "/peptides/selank": {
    mechanism: "Selank is a synthetic peptide derived from the naturally occurring immunomodulatory peptide tuftsin, with an additional Pro-Gly-Pro sequence for enhanced stability. It modulates GABA, serotonin, dopamine, and norepinephrine systems. Selank increases BDNF expression, enhances enkephalin levels, and modulates IL-6 expression. It produces anxiolytic effects comparable to benzodiazepines without sedation or dependence.",
    applications: ["Generalized anxiety disorder", "Cognitive enhancement", "Depression (adjunct therapy)", "Immune modulation", "ADHD support", "Stress resilience", "Memory and learning enhancement"],
    dosing: "Intranasal: 250-500mcg per nostril, 2-3 times daily. Subcutaneous: 250-500mcg daily. Cycle: 2-4 weeks on, 1-2 weeks off. Often combined with Semax for comprehensive cognitive and mood support.",
    safety: "Selank has been approved in Russia as a prescription anxiolytic. No dependence, tolerance, or withdrawal effects reported. Minimal side effects. Does not cause sedation or cognitive impairment.",
    relatedPeptides: ["/peptides/semax", "/peptides/na-selank", "/peptides/dihexa", "/peptides/p21"]
  },
  "/peptides/semax": {
    mechanism: "Semax is a synthetic heptapeptide derived from ACTH (4-10) with a Pro-Gly-Pro C-terminal tripeptide for enzymatic stability. It enhances BDNF and NGF expression, modulates dopaminergic and serotonergic systems, promotes neuroplasticity, and has neuroprotective properties. Semax does not affect cortisol levels despite its ACTH origin.",
    applications: ["Cognitive enhancement and nootropic use", "Stroke recovery", "Traumatic brain injury", "ADHD and attention disorders", "Optic nerve disease", "Depression (adjunct)", "Memory enhancement", "Neuroprotection"],
    dosing: "Intranasal: 200-600mcg per nostril, 2-3 times daily. Subcutaneous: 200-600mcg daily. Cycle: 2-4 weeks on, 1-2 weeks off. Approved in Russia for stroke and cognitive disorders.",
    safety: "Approved in Russia and Ukraine with extensive clinical data. No significant side effects reported. Does not affect cortisol or adrenal function. No dependence or tolerance. Very well-tolerated.",
    relatedPeptides: ["/peptides/selank", "/peptides/na-semax", "/peptides/dihexa", "/peptides/cerebrolysin"]
  },
  "/peptides/dihexa": {
    mechanism: "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a modified angiotensin IV analog that is approximately 10 million times more potent than BDNF at promoting synaptogenesis. It activates the hepatocyte growth factor (HGF)/c-Met receptor system, which drives dendritic spine formation, synaptic connectivity, and neuroplasticity. Dihexa crosses the blood-brain barrier and has demonstrated cognitive enhancement in animal models of dementia.",
    applications: ["Cognitive enhancement", "Alzheimer's disease research", "Neuroplasticity promotion", "Memory and learning", "Traumatic brain injury recovery", "Age-related cognitive decline"],
    dosing: "Oral: 10-20mg daily. Sublingual: 5-10mg daily. Intranasal: 5mg daily. Cycle: 4-8 weeks on, 2-4 weeks off. Often combined with other nootropic peptides.",
    safety: "Limited human safety data. Animal studies show favorable tolerability. As a research compound, long-term safety is not fully established. Monitor cognitive function and liver enzymes.",
    relatedPeptides: ["/peptides/semax", "/peptides/selank", "/peptides/cerebrolysin", "/peptides/p21"]
  },
  "/peptides/snap-8": {
    mechanism: "SNAP-8 (Acetyl Octapeptide-3) is a synthetic peptide that mimics the N-terminal end of SNAP-25, one of the SNARE complex proteins involved in neurotransmitter release. By competing with SNAP-25 for a position in the SNARE complex, it reduces the efficiency of catecholamine release at the neuromuscular junction, resulting in reduced muscle contraction and wrinkle formation. It is often called a topical alternative to botulinum toxin.",
    applications: ["Wrinkle reduction (expression lines)", "Anti-aging skin care", "Topical muscle relaxation", "Fine line prevention", "Forehead and crow's feet treatment"],
    dosing: "Topical: 3-10% concentration in serum or cream. Apply twice daily to target areas. Results typically visible after 4-8 weeks of consistent use. Can be combined with GHK-Cu for enhanced anti-aging effects.",
    safety: "Excellent safety profile for topical use. Non-toxic, non-irritating. No systemic effects when applied topically. Suitable for all skin types. No contraindications identified.",
    relatedPeptides: ["/peptides/ghk-cu", "/peptides/epithalon", "/peptides/foxo4-dri"]
  },
  "/peptides/foxo4-dri": {
    mechanism: "FOXO4-DRI is a D-retro-inverso peptide that disrupts the interaction between FOXO4 and p53 in senescent cells. Normally, FOXO4 sequesters p53 in the nucleus of senescent cells, preventing apoptosis. By blocking this interaction, FOXO4-DRI selectively induces apoptosis in senescent cells while leaving healthy cells unaffected. This senolytic mechanism clears 'zombie cells' that contribute to aging and chronic inflammation.",
    applications: ["Senescent cell clearance (senolytic)", "Anti-aging and rejuvenation", "Chronic inflammation reduction", "Age-related disease prevention", "Tissue regeneration support", "Healthspan extension"],
    dosing: "Research protocols: 5mg/kg body weight, administered in cycles. Typical human translation: intermittent dosing 2-3 times per week for 2-3 weeks, then extended rest period. This is a research compound with limited human dosing data.",
    safety: "Limited human safety data. Animal studies showed selective senescent cell clearance without damage to healthy cells. Potential side effects may include temporary fatigue and immune activation as senescent cells are cleared.",
    relatedPeptides: ["/peptides/epithalon", "/peptides/rapamycin", "/peptides/nad-plus", "/peptides/humanin"]
  },
  "/peptides/mots-c": {
    mechanism: "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-C) is a mitochondrial-derived peptide encoded in the mitochondrial genome. It activates AMPK, regulates metabolic homeostasis, enhances glucose uptake, promotes fatty acid oxidation, and has exercise-mimetic properties. MOTS-c is the first mitochondrial-encoded peptide shown to act as a hormone, signaling from mitochondria to the nucleus to regulate gene expression.",
    applications: ["Metabolic optimization", "Exercise mimetic effects", "Insulin sensitivity improvement", "Fat oxidation enhancement", "Anti-aging and longevity", "Obesity management", "Type 2 diabetes support"],
    dosing: "Subcutaneous: 5-10mg, 2-3 times per week. Some protocols use 10mg daily for acute metabolic support. Cycle: 4-8 weeks on, 2-4 weeks off.",
    safety: "As a naturally occurring mitochondrial peptide, MOTS-c has a favorable safety profile. Levels decline with age. Limited human clinical data but animal studies show excellent tolerability.",
    relatedPeptides: ["/peptides/humanin", "/peptides/ss-31", "/peptides/5-amino-1mq", "/peptides/nad-plus"]
  },
  "/peptides/humanin": {
    mechanism: "Humanin is a 24-amino acid mitochondrial-derived peptide that acts as a cytoprotective and anti-apoptotic factor. It binds to IGFBP-3 and BAX to prevent programmed cell death, activates the STAT3 signaling pathway, and has been shown to protect neurons against amyloid-beta toxicity. Humanin levels decline with age and are inversely correlated with Alzheimer's disease progression.",
    applications: ["Neuroprotection (Alzheimer's disease)", "Cellular survival and anti-apoptosis", "Cardiovascular protection", "Metabolic regulation", "Age-related disease prevention", "Mitochondrial function support"],
    dosing: "Research dosing: varies by analog. S14G-Humanin (HNG): 0.5-4mg subcutaneous, 2-3 times weekly. Limited standardized human protocols available.",
    safety: "Naturally occurring peptide with declining levels during aging. Animal studies show excellent safety. Limited human clinical trial data.",
    relatedPeptides: ["/peptides/mots-c", "/peptides/ss-31", "/peptides/epithalon", "/peptides/cerebrolysin"]
  },
  "/peptides/kisspeptin": {
    mechanism: "Kisspeptin is a neuropeptide that acts on the GPR54 (KISS1R) receptor in the hypothalamus to stimulate GnRH release, which in turn triggers LH and FSH secretion. It is the master regulator of the hypothalamic-pituitary-gonadal (HPG) axis and plays a critical role in puberty onset, reproductive function, and sexual behavior. Kisspeptin also has direct effects on sexual arousal independent of its hormonal actions.",
    applications: ["Reproductive hormone optimization", "Hypogonadism treatment", "Fertility support (IVF protocols)", "Sexual arousal and desire", "Testosterone optimization", "HPG axis restoration after steroid use"],
    dosing: "Subcutaneous: 1-10mcg/kg body weight. Frequency varies by indication. Fertility protocols may use single-dose or repeated administration. Often used in combination with other reproductive peptides.",
    safety: "Well-tolerated in clinical studies. May cause transient flushing and warmth. Does not cause ovarian hyperstimulation syndrome (OHSS) risk like traditional GnRH agonists.",
    relatedPeptides: ["/peptides/pt-141", "/peptides/melanotan-ii", "/peptides/oxytocin"]
  },
  "/peptides/melanotan-ii": {
    mechanism: "Melanotan II is a synthetic analog of alpha-melanocyte stimulating hormone (alpha-MSH) that activates melanocortin receptors MC1R through MC5R. MC1R activation stimulates melanogenesis (skin tanning), MC3R/MC4R activation affects sexual arousal and appetite, and MC5R affects exocrine gland function. It produces skin darkening, increased libido, and appetite suppression through these multiple receptor targets.",
    applications: ["Skin tanning (UV protection)", "Sexual dysfunction", "Libido enhancement", "Appetite suppression", "Erectile dysfunction"],
    dosing: "Loading phase: 0.25-0.5mg subcutaneous daily for 1-2 weeks. Maintenance: 0.5mg before sun exposure as needed. Start with low dose to assess tolerance due to nausea risk.",
    safety: "Common side effects: nausea (especially at higher doses), facial flushing, fatigue, appetite suppression. Risk of mole darkening — dermatological monitoring recommended. Not FDA-approved. Potential cardiovascular effects at high doses.",
    relatedPeptides: ["/peptides/pt-141", "/peptides/kisspeptin", "/peptides/oxytocin"]
  },
  "/peptides/igf-1-lr3": {
    mechanism: "IGF-1 LR3 (Long R3 Insulin-like Growth Factor-1) is a modified version of IGF-1 with an arginine substitution at position 3 and a 13-amino acid N-terminal extension. These modifications reduce binding to IGF binding proteins (IGFBPs), resulting in a significantly longer half-life (20-30 hours vs 12-15 minutes for native IGF-1) and greater bioavailability. It promotes muscle hyperplasia, protein synthesis, and nutrient partitioning.",
    applications: ["Muscle growth and hyperplasia", "Recovery from training", "Body composition optimization", "Anti-catabolic effects", "Wound healing", "Anabolic support"],
    dosing: "Typical dose: 20-50mcg subcutaneous or intramuscular, once daily. Cycle: 4-6 weeks on, 4 weeks off. Often used post-workout. Monitor blood glucose levels.",
    safety: "Risk of hypoglycemia — always have glucose available. May cause joint pain, jaw growth with prolonged use. Monitor IGF-1 levels and blood glucose. Not recommended for individuals with active cancer.",
    relatedPeptides: ["/peptides/mgf", "/peptides/ipamorelin", "/peptides/cjc-1295", "/peptides/ibutamoren"]
  },
  "/peptides/fragment-176-191": {
    mechanism: "HGH Fragment 176-191 is a stabilized analog of the growth hormone-releasing factor (GRF) that specifically stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat formation). It represents the fat-reducing portion of the HGH molecule without the growth-promoting effects. It works through the beta-3 adrenergic receptor pathway independently of the GH receptor.",
    applications: ["Targeted fat loss", "Body composition optimization", "Metabolic enhancement", "Abdominal fat reduction", "Weight management"],
    dosing: "Typical dose: 250-500mcg subcutaneous injection, 1-2 times daily on empty stomach. Best taken in the morning and/or before exercise. Cycle: 8-12 weeks.",
    safety: "Does not affect blood sugar, HGH levels, or IGF-1. No growth-promoting effects. Minimal side effects. Well-tolerated for extended use.",
    relatedPeptides: ["/peptides/aod-9604", "/peptides/5-amino-1mq", "/peptides/tesofensine", "/peptides/semaglutide"]
  },
  "/peptides/ghrp-2": {
    mechanism: "GHRP-2 (Growth Hormone Releasing Peptide-2) is a synthetic hexapeptide that stimulates growth hormone release by activating the ghrelin/growth hormone secretagogue receptor (GHS-R1a). It is one of the most potent GHRP variants, producing strong GH release along with increases in cortisol, prolactin, and appetite stimulation through ghrelin receptor activation.",
    applications: ["Growth hormone optimization", "Appetite stimulation", "Muscle growth", "Anti-aging", "Recovery enhancement", "Cachexia and wasting conditions"],
    dosing: "Typical dose: 100-300mcg subcutaneous, 2-3 times daily. Administer on empty stomach. Often combined with a GHRH analog (CJC-1295) for synergistic GH release.",
    safety: "May increase cortisol and prolactin levels (more than ipamorelin). Strong appetite stimulation. Water retention possible. Monitor cortisol and prolactin with chronic use.",
    relatedPeptides: ["/peptides/ghrp-6", "/peptides/ipamorelin", "/peptides/hexarelin", "/peptides/cjc-1295"]
  },
  "/peptides/ghrp-6": {
    mechanism: "GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide that activates the ghrelin receptor to stimulate GH release from the pituitary. It is notable for its strong appetite-stimulating effects through ghrelin pathway activation. GHRP-6 also has cytoprotective properties for cardiac and hepatic tissue.",
    applications: ["Growth hormone release", "Appetite stimulation", "Muscle growth and recovery", "Cardiac protection", "Hepatic protection", "Cachexia treatment"],
    dosing: "Typical dose: 100-300mcg subcutaneous, 2-3 times daily on empty stomach. Expect significant hunger increase within 20 minutes of injection. Often combined with GHRH analogs.",
    safety: "Strong appetite stimulation is the primary side effect. May increase cortisol and prolactin. Water retention possible. Generally well-tolerated.",
    relatedPeptides: ["/peptides/ghrp-2", "/peptides/ipamorelin", "/peptides/hexarelin", "/peptides/cjc-1295"]
  },
  "/peptides/hexarelin": {
    mechanism: "Hexarelin is a synthetic hexapeptide growth hormone secretagogue that produces the strongest GH release of all GHRP variants. It activates both the GHS-R1a (ghrelin) receptor and has additional cardiac-specific effects through CD36 receptor activation. Hexarelin has demonstrated cardioprotective properties independent of its GH-releasing effects.",
    applications: ["Maximum growth hormone release", "Cardiac protection and repair", "Anti-aging", "Muscle growth", "Fat loss", "Post-cardiac event recovery"],
    dosing: "Typical dose: 200mcg subcutaneous, 2-3 times daily. Note: desensitization occurs with chronic use — cycle 4 weeks on, 4 weeks off. Often combined with GHRH analogs.",
    safety: "Most potent GH release but also highest cortisol and prolactin elevation among GHRPs. Desensitization is a significant concern with continuous use. Requires cycling.",
    relatedPeptides: ["/peptides/ghrp-2", "/peptides/ghrp-6", "/peptides/ipamorelin", "/peptides/cjc-1295"]
  },
  "/peptides/ibutamoren": {
    mechanism: "Ibutamoren (MK-677) is a non-peptide, orally active growth hormone secretagogue that mimics ghrelin's action at the GHS-R1a receptor. It produces sustained 24-hour elevation of GH and IGF-1 levels without affecting cortisol. Ibutamoren increases GH pulsatility and amplitude while maintaining the natural circadian rhythm of GH release.",
    applications: ["Oral growth hormone optimization", "Sleep quality improvement", "Muscle mass preservation", "Bone density support", "Anti-aging", "Appetite stimulation", "Recovery enhancement"],
    dosing: "Oral: 10-25mg once daily, typically at bedtime due to sleep-enhancing effects. No cycling required for most protocols. Long-term use studied up to 2 years.",
    safety: "Common side effects: increased appetite, water retention, mild lethargy, numbness in extremities. May increase fasting blood glucose and insulin resistance with prolonged use. Monitor metabolic markers.",
    relatedPeptides: ["/peptides/ipamorelin", "/peptides/cjc-1295", "/peptides/sermorelin", "/peptides/ghrp-2"]
  },
  "/peptides/mgf": {
    mechanism: "MGF (Mechano Growth Factor) is a splice variant of IGF-1 produced in response to mechanical stress on muscle tissue. It activates satellite cells (muscle stem cells) to initiate muscle repair and hypertrophy. MGF is produced locally in damaged muscle tissue and acts in an autocrine/paracrine fashion to promote muscle-specific regeneration.",
    applications: ["Muscle repair and regeneration", "Satellite cell activation", "Exercise recovery", "Muscle hypertrophy", "Injury rehabilitation", "Age-related muscle loss"],
    dosing: "PEG-MGF: 200mcg intramuscular into target muscle, 2-3 times weekly. Standard MGF: 200mcg bilaterally post-workout. Cycle: 4-6 weeks.",
    safety: "Limited human safety data. Local injection site reactions possible. Monitor for signs of excessive muscle growth. Research compound status.",
    relatedPeptides: ["/peptides/igf-1-lr3", "/peptides/tb-500", "/peptides/bpc-157", "/peptides/ipamorelin"]
  },
  "/peptides/dsip": {
    mechanism: "DSIP (Delta Sleep Inducing Peptide) is a naturally occurring nonapeptide that modulates sleep architecture by promoting delta wave (deep sleep) activity. It acts through multiple mechanisms including modulation of GABA receptors, serotonin synthesis, and cortisol regulation. DSIP normalizes disrupted sleep patterns and has stress-protective and analgesic properties.",
    applications: ["Insomnia and sleep disorders", "Deep sleep enhancement", "Circadian rhythm normalization", "Stress reduction", "Pain management", "Alcohol and opioid withdrawal support", "Chronic fatigue"],
    dosing: "Subcutaneous or intramuscular: 100mcg at bedtime. Can be administered nightly for 1-2 weeks, then as needed. Some protocols use 100-200mcg every other night.",
    safety: "Generally well-tolerated. May cause vivid dreams. No dependence or tolerance reported. Limited long-term safety data. Does not cause next-day drowsiness.",
    relatedPeptides: ["/peptides/selank", "/peptides/semax", "/peptides/ipamorelin"]
  },
  "/peptides/cerebrolysin": {
    mechanism: "Cerebrolysin is a porcine brain-derived peptide preparation containing low-molecular-weight neuropeptides and free amino acids that mimic the action of endogenous neurotrophic factors including BDNF, NGF, CNTF, and GDNF. It promotes neuroplasticity, neurogenesis, synaptogenesis, and neuroprotection through multimodal mechanisms including inhibition of calpain and GSK-3beta, reduction of amyloid-beta aggregation, and enhancement of mitochondrial function.",
    applications: ["Stroke recovery (ischemic and hemorrhagic)", "Traumatic brain injury rehabilitation", "Alzheimer's disease", "Vascular dementia", "Cognitive enhancement", "Parkinson's disease (adjunct)", "Peripheral neuropathy", "Multiple sclerosis support"],
    dosing: "Stroke: 30-50mL IV daily for 10-21 days, starting within 24-72 hours. TBI: 30-50mL IV daily for 5-30 days. Alzheimer's: 10-30mL IV daily for 20 days, repeated every 3-6 months. Cognitive enhancement: 5-10mL IM 2-3 times weekly for 4-8 weeks.",
    safety: "Approved in 50+ countries with extensive clinical data from 500+ studies. Common side effects: dizziness (2-5%), headache (1-3%), injection site reactions. Contraindicated in epilepsy and severe renal impairment. Well-tolerated in elderly populations.",
    relatedPeptides: ["/peptides/semax", "/peptides/selank", "/peptides/dihexa", "/peptides/p21"]
  },
  "/peptides/na-selank": {
    mechanism: "NA-Selank (N-Acetyl Selank Amidate) is an enhanced version of Selank with N-acetyl and C-amide modifications that improve enzymatic stability and bioavailability. It retains all of Selank's anxiolytic and nootropic properties while providing longer-lasting effects due to increased resistance to peptidase degradation.",
    applications: ["Enhanced anxiety reduction", "Cognitive enhancement", "Mood stabilization", "Immune modulation", "Stress resilience", "ADHD support"],
    dosing: "Intranasal: 200-400mcg per nostril, 2-3 times daily. Subcutaneous: 200-400mcg daily. Lower doses needed compared to standard Selank due to enhanced bioavailability.",
    safety: "Similar safety profile to Selank with no dependence or tolerance. Enhanced stability means more consistent effects. Minimal side effects reported.",
    relatedPeptides: ["/peptides/selank", "/peptides/na-semax", "/peptides/semax", "/peptides/dihexa"]
  },
  "/peptides/na-semax": {
    mechanism: "NA-Semax (N-Acetyl Semax Amidate) is a modified version of Semax with enhanced stability and potency. The N-acetyl and C-amide modifications protect against enzymatic degradation, resulting in longer duration of action and improved bioavailability. It retains Semax's BDNF-enhancing, neuroprotective, and cognitive-enhancing properties.",
    applications: ["Enhanced cognitive function", "Neuroprotection", "BDNF upregulation", "Stroke recovery", "ADHD and focus", "Depression support", "Brain injury rehabilitation"],
    dosing: "Intranasal: 100-400mcg per nostril, 2-3 times daily. Subcutaneous: 100-400mcg daily. Lower doses than standard Semax due to enhanced potency.",
    safety: "Similar excellent safety profile to Semax. No cortisol effects. No dependence. Enhanced stability provides more predictable pharmacokinetics.",
    relatedPeptides: ["/peptides/semax", "/peptides/na-selank", "/peptides/selank", "/peptides/cerebrolysin"]
  },
  "/peptides/p21": {
    mechanism: "P21 is a synthetic peptide derived from the active region of Ciliary Neurotrophic Factor (CNTF). It promotes neurogenesis in the hippocampus by inhibiting Leukemia Inhibitory Factor (LIF) signaling, which normally suppresses neural stem cell differentiation. P21 increases BDNF levels and promotes the formation of new neurons without the appetite-suppressing effects of full-length CNTF.",
    applications: ["Neurogenesis stimulation", "Cognitive enhancement", "Memory improvement", "Alzheimer's disease research", "Age-related cognitive decline", "Learning enhancement"],
    dosing: "Intranasal or subcutaneous: dosing varies in research. Typical research protocols: 50-100mcg daily. Cycle: 4-8 weeks. Limited standardized human protocols.",
    safety: "Research compound with limited human safety data. Does not cause the weight loss/appetite suppression seen with CNTF. Animal studies show favorable tolerability.",
    relatedPeptides: ["/peptides/dihexa", "/peptides/cerebrolysin", "/peptides/semax", "/peptides/selank"]
  },
  "/peptides/ss-31": {
    mechanism: "SS-31 (Elamipretide, Bendavia) is a mitochondria-targeted tetrapeptide that selectively concentrates in the inner mitochondrial membrane by binding to cardiolipin. It stabilizes cristae structure, optimizes electron transport chain function, reduces reactive oxygen species (ROS) production, and prevents cytochrome c release. SS-31 is the most advanced mitochondrial-targeted therapeutic in clinical development.",
    applications: ["Mitochondrial dysfunction", "Heart failure (Barth syndrome)", "Age-related macular degeneration", "Kidney injury protection", "Skeletal muscle function", "Neurodegenerative diseases", "Ischemia-reperfusion injury"],
    dosing: "Clinical trials: 0.25mg/kg/hour IV infusion, or 4mg subcutaneous daily. Research protocols vary by indication. Multiple Phase II/III trials ongoing.",
    safety: "Generally well-tolerated in clinical trials. Injection site reactions reported. Phase III trials for Barth syndrome and AMD provide extensive safety data. Monitor mitochondrial biomarkers.",
    relatedPeptides: ["/peptides/mots-c", "/peptides/humanin", "/peptides/nad-plus", "/peptides/epithalon"]
  },
  "/peptides/thymalin": {
    mechanism: "Thymalin is a polypeptide complex extracted from the thymus gland that restores thymic function and T-cell immunity. It promotes T-cell maturation, enhances NK cell activity, and modulates cytokine production. Thymalin has been extensively studied by Professor Vladimir Khavinson for its anti-aging and immune-restorative properties over 35+ years of research.",
    applications: ["Immune system restoration", "Anti-aging and longevity", "Post-infection immune recovery", "Cancer immunotherapy support", "Chronic fatigue", "Age-related immune decline (immunosenescence)"],
    dosing: "Intramuscular: 10mg daily for 5-10 days. Repeat course every 3-6 months. Often combined with epithalon for comprehensive anti-aging protocols.",
    safety: "Extensively studied with excellent safety profile. Minimal side effects. Well-tolerated in elderly populations. 35+ years of clinical use in Russia.",
    relatedPeptides: ["/peptides/thymosin-alpha-1", "/peptides/epithalon", "/peptides/ll-37"]
  },
  "/peptides/pentosan-polysulfate": {
    mechanism: "Pentosan Polysulfate Sodium (PPS) is a semi-synthetic glycosaminoglycan derived from beechwood hemicellulose. It inhibits complement activation, reduces inflammatory mediators, promotes cartilage matrix synthesis, and enhances synovial fluid viscosity. PPS has anticoagulant, fibrinolytic, and anti-inflammatory properties that support joint health and tissue repair.",
    applications: ["Osteoarthritis treatment", "Interstitial cystitis (FDA-approved as Elmiron)", "Joint repair and protection", "Cartilage regeneration", "Chronic pain management", "Veterinary orthopedics"],
    dosing: "Oral (Elmiron): 100mg three times daily. Subcutaneous/IM: 2-3mg/kg twice weekly. Joint protocols: 8-12 week cycles. Often combined with BPC-157 and TB-500.",
    safety: "FDA-approved for interstitial cystitis. Long-term use may be associated with pigmentary maculopathy (retinal changes) — ophthalmologic monitoring recommended. GI side effects possible with oral use.",
    relatedPeptides: ["/peptides/bpc-157", "/peptides/tb-500", "/peptides/ghk-cu"]
  },
  "/peptides/ace-031": {
    mechanism: "ACE-031 is a soluble form of the activin receptor type IIB (ActRIIB) fused to the Fc portion of human IgG1. It acts as a decoy receptor, binding and neutralizing myostatin, activin A, GDF-11, and other TGF-beta superfamily ligands that normally inhibit muscle growth. By removing these growth inhibitors, ACE-031 promotes significant muscle hypertrophy and strength gains.",
    applications: ["Muscle wasting diseases", "Duchenne muscular dystrophy", "Sarcopenia", "Cachexia", "Muscle growth research", "Bone density improvement"],
    dosing: "Clinical trial doses: 0.02-3mg/kg IV every 2 weeks. Research compound — not commercially available for clinical use. Dosing protocols from Phase II trials.",
    safety: "Clinical trials showed dose-dependent muscle growth but were halted due to epistaxis (nosebleeds) and telangiectasias at higher doses. Lower doses were better tolerated.",
    relatedPeptides: ["/peptides/follistatin", "/peptides/igf-1-lr3", "/peptides/mgf"]
  },
  "/peptides/follistatin": {
    mechanism: "Follistatin is a naturally occurring glycoprotein that binds and neutralizes activin A, myostatin, and other TGF-beta superfamily members. By inhibiting myostatin (the primary negative regulator of muscle growth), follistatin promotes muscle hypertrophy and strength. It also plays roles in reproductive physiology, inflammation regulation, and liver protection.",
    applications: ["Myostatin inhibition", "Muscle growth and strength", "Fertility support", "Anti-inflammatory effects", "Liver protection", "Body composition optimization"],
    dosing: "Follistatin 344: 100-300mcg subcutaneous daily for 10-30 days. Follistatin 315: similar dosing. Gene therapy approaches also under investigation. Limited standardized protocols.",
    safety: "Research compound with limited human safety data. Theoretical concerns about reproductive effects due to activin binding. Monitor reproductive hormones during use.",
    relatedPeptides: ["/peptides/ace-031", "/peptides/igf-1-lr3", "/peptides/mgf"]
  },
  "/peptides/oxytocin": {
    mechanism: "Oxytocin is a nine-amino acid neuropeptide produced in the hypothalamus and released by the posterior pituitary. It acts on oxytocin receptors throughout the brain and body, promoting social bonding, trust, empathy, and pair bonding. Oxytocin also has anxiolytic effects, reduces cortisol, promotes wound healing, and has anti-inflammatory properties. It plays critical roles in labor, lactation, and sexual function.",
    applications: ["Social bonding and trust enhancement", "Anxiety and stress reduction", "Autism spectrum disorder support", "Sexual function enhancement", "Post-partum depression", "Pain modulation", "Wound healing"],
    dosing: "Intranasal: 20-40 IU (international units) as needed for social/anxiety applications. Subcutaneous: 10-20 IU. Frequency varies by indication. Often used in combination protocols.",
    safety: "Generally well-tolerated. Intranasal delivery is preferred for CNS effects. May cause nasal irritation with intranasal use. Caution in pregnancy (uterotonic effects). Monitor blood pressure.",
    relatedPeptides: ["/peptides/pt-141", "/peptides/kisspeptin", "/peptides/selank"]
  },
  "/peptides/vip": {
    mechanism: "VIP (Vasoactive Intestinal Peptide) is a 28-amino acid neuropeptide with broad immunomodulatory, anti-inflammatory, and neuroprotective properties. It regulates smooth muscle relaxation, vasodilation, and secretion in the GI tract. VIP is critical in CIRS (Chronic Inflammatory Response Syndrome) treatment, where it reduces inflammatory cytokines, corrects dysregulated immune responses, and restores regulatory T-cell function.",
    applications: ["CIRS/mold illness treatment", "Pulmonary hypertension", "Inflammatory bowel disease", "Neuroprotection", "Immune regulation", "Chronic fatigue syndrome", "Migraine prevention"],
    dosing: "Intranasal: 50mcg per nostril, 4 times daily for CIRS (Shoemaker protocol). Treatment duration: 1-6 months depending on response. Monitor VIP levels and inflammatory markers.",
    safety: "Generally well-tolerated. May cause nasal congestion, diarrhea, or flushing. Monitor blood pressure (vasodilatory effects). Contraindicated in active cancer due to potential angiogenic effects.",
    relatedPeptides: ["/peptides/kpv", "/peptides/ll-37", "/peptides/thymosin-alpha-1", "/peptides/larazotide"]
  },
  "/peptides/kpv": {
    mechanism: "KPV is a tripeptide (Lys-Pro-Val) derived from the C-terminal sequence of alpha-melanocyte stimulating hormone (alpha-MSH). It retains the potent anti-inflammatory properties of alpha-MSH without melanocortin receptor activation. KPV inhibits NF-kB nuclear translocation, reduces pro-inflammatory cytokines (TNF-alpha, IL-6, IL-1beta), and has demonstrated efficacy in gut inflammation models.",
    applications: ["Inflammatory bowel disease (IBD)", "Gut inflammation and healing", "Ulcerative colitis", "Crohn's disease", "Skin inflammation", "Leaky gut syndrome", "Autoimmune conditions"],
    dosing: "Oral: 200-500mcg twice daily for gut inflammation. Subcutaneous: 200-500mcg daily. Topical: for skin conditions. Often combined with BPC-157 for comprehensive gut healing.",
    safety: "Excellent safety profile as a naturally derived tripeptide. Minimal systemic effects. Well-tolerated orally and parenterally. No significant drug interactions identified.",
    relatedPeptides: ["/peptides/bpc-157", "/peptides/larazotide", "/peptides/vip", "/peptides/ll-37"]
  },
  "/peptides/larazotide": {
    mechanism: "Larazotide acetate (AT-1001) is a synthetic octapeptide that modulates tight junction permeability in the intestinal epithelium. It prevents zonulin-mediated opening of tight junctions, thereby reducing intestinal permeability ('leaky gut'). Larazotide acts locally in the gut lumen without systemic absorption, making it a targeted therapy for barrier dysfunction.",
    applications: ["Celiac disease (Phase III trials)", "Leaky gut syndrome", "Intestinal permeability disorders", "Autoimmune conditions with gut involvement", "Food sensitivities", "Zonulin-mediated barrier dysfunction"],
    dosing: "Oral: 0.5-1mg three times daily, taken 15 minutes before meals. Phase III clinical trial dose: 0.5mg TID. Treatment duration varies by condition.",
    safety: "Excellent safety profile — acts locally in the gut with minimal systemic absorption. Well-tolerated in Phase III clinical trials. Most common side effects: headache, GI discomfort (similar to placebo rates).",
    relatedPeptides: ["/peptides/kpv", "/peptides/bpc-157", "/peptides/vip"]
  },
  "/peptides/retatrutide": {
    mechanism: "Retatrutide (LY3437943) is a first-in-class triple agonist that simultaneously activates GLP-1, GIP, and glucagon receptors. The triple mechanism produces unprecedented weight loss by combining appetite suppression (GLP-1/GIP), enhanced energy expenditure (glucagon), improved insulin sensitivity, and increased fatty acid oxidation. Phase II trials showed the highest weight loss of any obesity drug tested.",
    applications: ["Obesity and severe weight management", "Type 2 diabetes", "NAFLD/NASH", "Metabolic syndrome", "Cardiovascular risk reduction"],
    dosing: "Phase II trial dosing: titrated from 0.5mg to 12mg weekly over 24-48 weeks. Subcutaneous injection once weekly. Phase III trials ongoing.",
    safety: "GI side effects similar to GLP-1 agonists: nausea, diarrhea, vomiting. Phase II showed 24.2% mean weight loss at 48 weeks (highest dose). Generally well-tolerated with dose titration.",
    relatedPeptides: ["/peptides/tirzepatide", "/peptides/semaglutide", "/peptides/survodutide", "/peptides/cagrilintide"]
  },
  "/peptides/survodutide": {
    mechanism: "Survodutide (BI 456906) is a dual GLP-1/glucagon receptor agonist. The glucagon component enhances energy expenditure and hepatic fat oxidation, while the GLP-1 component provides appetite suppression and glycemic control. This combination is particularly effective for NASH/fatty liver disease due to the glucagon receptor's direct effects on hepatic lipid metabolism.",
    applications: ["NASH/fatty liver disease", "Obesity and weight management", "Type 2 diabetes", "Liver fibrosis", "Metabolic syndrome"],
    dosing: "Phase II trial dosing: titrated to 4.8mg or 6.0mg weekly. Subcutaneous injection once weekly. Phase III trials ongoing for NASH and obesity.",
    safety: "GI side effects: nausea, diarrhea, vomiting (dose-dependent). Phase II showed significant liver fat reduction and weight loss. Hepatic safety monitoring recommended.",
    relatedPeptides: ["/peptides/semaglutide", "/peptides/tirzepatide", "/peptides/retatrutide"]
  },
  "/peptides/cagrilintide": {
    mechanism: "Cagrilintide is a long-acting amylin analog that activates amylin receptors (AMY1 and AMY3) in the area postrema and other brain regions to reduce appetite, slow gastric emptying, and suppress glucagon secretion. Amylin is co-secreted with insulin from pancreatic beta cells and plays a complementary role in glucose regulation and satiety signaling.",
    applications: ["Weight management", "Type 2 diabetes", "Appetite regulation", "Combined therapy with semaglutide (CagriSema)", "Metabolic optimization"],
    dosing: "Phase III trial dosing: 2.4mg subcutaneous once weekly. CagriSema combination: cagrilintide 2.4mg + semaglutide 2.4mg weekly. Dose titration required.",
    safety: "GI side effects similar to other incretin-based therapies. CagriSema combination showed enhanced weight loss vs either agent alone. Well-tolerated in clinical trials.",
    relatedPeptides: ["/peptides/semaglutide", "/peptides/tirzepatide", "/peptides/retatrutide"]
  },
  "/peptides/tesofensine": {
    mechanism: "Tesofensine is a triple monoamine reuptake inhibitor that blocks the reuptake of serotonin, norepinephrine, and dopamine. Originally developed for Alzheimer's and Parkinson's disease, it was found to produce significant weight loss through appetite suppression and increased thermogenesis. It acts centrally to reduce food intake and increase energy expenditure.",
    applications: ["Weight loss and obesity", "Appetite suppression", "Metabolic enhancement", "Body composition optimization", "Hypothalamic obesity"],
    dosing: "Oral: 0.25-0.5mg once daily. Phase II trials used 0.25mg, 0.5mg, and 1.0mg doses. The 0.5mg dose showed optimal efficacy-to-side-effect ratio with 12.8% weight loss over 24 weeks.",
    safety: "May increase heart rate and blood pressure. Common side effects: dry mouth, insomnia, constipation, diarrhea. Contraindicated with MAO inhibitors. Monitor cardiovascular parameters.",
    relatedPeptides: ["/peptides/semaglutide", "/peptides/5-amino-1mq", "/peptides/aod-9604"]
  },
  "/peptides/5-amino-1mq": {
    mechanism: "5-Amino-1MQ is a small molecule inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme that is overexpressed in adipose tissue and contributes to obesity and metabolic dysfunction. By inhibiting NNMT, 5-Amino-1MQ increases NAD+ levels, activates SIRT1, enhances cellular energy metabolism, and promotes fat cell shrinkage without affecting surrounding tissues.",
    applications: ["Fat metabolism enhancement", "Weight management", "NAD+ optimization", "Metabolic syndrome", "Cellular energy support", "Anti-aging metabolic support"],
    dosing: "Oral: 50-100mg, 1-2 times daily. Often included in combination formulas. Cycle: 8-12 weeks. Can be combined with other metabolic peptides.",
    safety: "Generally well-tolerated. Limited long-term human safety data. No significant side effects reported in available studies. Monitor metabolic markers.",
    relatedPeptides: ["/peptides/tesofensine", "/peptides/aod-9604", "/peptides/mots-c", "/peptides/nad-plus"]
  },
  "/peptides/nad-plus": {
    mechanism: "NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme present in every cell, essential for mitochondrial energy production, DNA repair, sirtuin activation, and cellular signaling. NAD+ levels decline approximately 50% between ages 40 and 60. Supplementation restores cellular NAD+ pools, activating sirtuins (SIRT1-7) that regulate aging, inflammation, and metabolism.",
    applications: ["Anti-aging and longevity", "Mitochondrial function restoration", "Addiction recovery", "Neurodegenerative disease support", "Chronic fatigue", "DNA repair enhancement", "Metabolic optimization", "Athletic performance"],
    dosing: "IV infusion: 250-1000mg over 2-4 hours. Subcutaneous: 50-100mg daily. Oral precursors (NMN/NR): 250-1000mg daily. IV protocols: 1-3 sessions per week for acute conditions, monthly for maintenance.",
    safety: "IV infusion may cause chest tightness, nausea, cramping during infusion (rate-dependent). Subcutaneous well-tolerated. Oral precursors have excellent safety profiles. Monitor liver function with high-dose protocols.",
    relatedPeptides: ["/peptides/epithalon", "/peptides/mots-c", "/peptides/ss-31", "/peptides/rapamycin"]
  },
  "/peptides/rapamycin": {
    mechanism: "Rapamycin (Sirolimus) inhibits the mechanistic target of rapamycin (mTOR), a central regulator of cell growth, proliferation, and metabolism. Low-dose intermittent rapamycin activates autophagy, reduces senescent cell burden, enhances immune function, and has demonstrated lifespan extension in every organism tested. It shifts cellular metabolism from growth to maintenance and repair.",
    applications: ["Longevity and anti-aging", "Autophagy induction", "Immune rejuvenation", "Cancer prevention research", "Organ transplant (FDA-approved)", "Senescence reduction", "Metabolic optimization"],
    dosing: "Longevity protocols: 3-6mg once weekly (intermittent dosing). Some protocols use 1-2mg every other day. Continuous low-dose: 0.5-1mg daily. Blood level monitoring recommended (trough <5ng/mL for longevity).",
    safety: "FDA-approved immunosuppressant with extensive safety data. Low-dose intermittent use has different safety profile than chronic immunosuppressive dosing. Monitor lipids, blood counts, and kidney function. May cause mouth sores at higher doses.",
    relatedPeptides: ["/peptides/foxo4-dri", "/peptides/epithalon", "/peptides/nad-plus", "/peptides/mots-c"]
  },
  "/peptides/methylene-blue": {
    mechanism: "Methylene Blue is a synthetic compound that acts as an alternative electron carrier in the mitochondrial electron transport chain. At low doses, it accepts electrons from NADH and transfers them to cytochrome c, bypassing Complex I and III — the primary sites of ROS production. This enhances mitochondrial respiration, increases ATP production, reduces oxidative stress, and has neuroprotective and cognitive-enhancing properties.",
    applications: ["Cognitive enhancement", "Mitochondrial support", "Neuroprotection", "Alzheimer's disease research", "Antimicrobial (methemoglobinemia FDA-approved)", "Anti-aging", "Mood enhancement"],
    dosing: "Oral: 0.5-2mg/kg daily (typically 15-60mg). Pharmaceutical grade (USP) required. Low doses enhance mitochondrial function; high doses may be counterproductive. Take in the morning (may cause insomnia).",
    safety: "FDA-approved for methemoglobinemia. Causes blue-green discoloration of urine and potentially skin. Contraindicated with serotonergic drugs (risk of serotonin syndrome). G6PD deficiency is a contraindication. Use pharmaceutical grade only.",
    relatedPeptides: ["/peptides/nad-plus", "/peptides/ss-31", "/peptides/mots-c", "/peptides/dihexa"]
  }
};

module.exports = PEPTIDE_SSR_DATA;
