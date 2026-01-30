// Comprehensive peptide data for homepage display
// Categories: recovery, metabolic, cognitive, longevity, immune, blend

export interface PeptideInfo {
  name: string;
  slug: string;
  description: string;
  category: 'recovery' | 'metabolic' | 'cognitive' | 'longevity' | 'immune' | 'blend';
  stack?: string;
  color: 'emerald' | 'blue' | 'purple' | 'indigo' | 'rose' | 'violet' | 'amber' | 'teal' | 'cyan' | 'orange' | 'pink' | 'green';
  isBlend?: boolean;
}

export const allPeptides: PeptideInfo[] = [
  // Recovery Peptides
  { name: 'BPC-157', slug: 'bpc-157', description: 'Tissue repair & gut healing', category: 'recovery', stack: 'Wolverine Stack', color: 'emerald' },
  { name: 'TB-500', slug: 'tb-500', description: 'Actin regulation & angiogenesis', category: 'recovery', stack: 'Wolverine Stack', color: 'emerald' },
  { name: 'Ipamorelin', slug: 'ipamorelin', description: 'Selective GH secretagogue', category: 'recovery', stack: 'Multiple Stacks', color: 'blue' },
  { name: 'CJC-1295', slug: 'cjc-1295', description: 'GHRH analog with/without DAC', category: 'recovery', stack: 'Fat Loss Stack', color: 'blue' },
  { name: 'GHK-Cu', slug: 'ghk-cu', description: '31.2% genome regulation', category: 'recovery', stack: 'Wolverine Stack', color: 'amber' },
  { name: 'Sermorelin', slug: 'sermorelin', description: 'GHRH analog for GH release', category: 'recovery', stack: 'Recovery Stack', color: 'blue' },
  { name: 'GHRP-2', slug: 'ghrp-2', description: 'Growth hormone releasing peptide', category: 'recovery', stack: 'Recovery Stack', color: 'blue' },
  { name: 'GHRP-6', slug: 'ghrp-6', description: 'Appetite-stimulating GH releaser', category: 'recovery', stack: 'Mass Building', color: 'blue' },
  { name: 'MGF', slug: 'mgf', description: 'Mechano Growth Factor for muscle', category: 'recovery', stack: 'Muscle Building', color: 'emerald' },
  { name: 'Hexarelin', slug: 'hexarelin', description: 'Potent GH secretagogue', category: 'recovery', stack: 'Recovery Stack', color: 'blue' },
  { name: 'LL-37', slug: 'll-37', description: 'Antimicrobial & wound healing', category: 'recovery', stack: 'Immune Support', color: 'emerald' },
  { name: 'Thymosin Alpha-1', slug: 'thymosin-alpha-1', description: 'Immune modulation peptide', category: 'recovery', stack: 'Immune Stack', color: 'teal' },
  { name: 'KPV', slug: 'kpv', description: 'Anti-inflammatory tripeptide', category: 'recovery', stack: 'Gut Health', color: 'emerald' },
  
  // Metabolic Peptides
  { name: 'Tesamorelin', slug: 'tesamorelin', description: 'FDA-approved visceral fat reduction', category: 'metabolic', stack: 'FDA-Approved', color: 'purple' },
  { name: 'IGF-1 LR3', slug: 'igf-1-lr3', description: 'Hyperplasia & muscle fiber creation', category: 'metabolic', stack: 'Lean Mean Stack', color: 'indigo' },
  { name: 'Semaglutide', slug: 'semaglutide', description: '14.9-17.4% weight loss (FDA-approved)', category: 'metabolic', stack: 'Fat Loss Stack', color: 'rose' },
  { name: 'Tirzepatide', slug: 'tirzepatide', description: 'Dual GIP/GLP-1 agonist (FDA-approved)', category: 'metabolic', stack: 'Fat Loss Stack', color: 'rose' },
  { name: 'Retatrutide', slug: 'retatrutide', description: 'Triple agonist (GIP/GLP-1/Glucagon)', category: 'metabolic', stack: 'Fat Loss Stack', color: 'rose' },
  { name: 'GLP-1', slug: 'glp-1', description: 'Glucagon-like peptide-1', category: 'metabolic', stack: 'Weight Management', color: 'purple' },
  { name: 'AOD-9604', slug: 'aod-9604', description: 'Fat metabolism fragment', category: 'metabolic', stack: 'Fat Loss Stack', color: 'purple' },
  { name: 'Fragment 176-191', slug: 'fragment-176-191', description: 'HGH fat-burning fragment', category: 'metabolic', stack: 'Fat Loss Stack', color: 'purple' },
  { name: '5-Amino-1MQ', slug: '5-amino-1mq', description: 'NNMT inhibitor for metabolism', category: 'metabolic', stack: 'Fat Loss Stack', color: 'indigo' },
  { name: 'Ibutamoren (MK-677)', slug: 'ibutamoren', description: 'Oral GH secretagogue', category: 'metabolic', stack: 'Mass Building', color: 'indigo' },
  { name: 'Tesofensine', slug: 'tesofensine', description: 'Triple monoamine reuptake inhibitor', category: 'metabolic', stack: 'Weight Loss', color: 'purple' },
  { name: 'Adipotide', slug: 'adipotide', description: 'Targeted fat cell apoptosis', category: 'metabolic', stack: 'Fat Loss Stack', color: 'rose' },
  { name: 'Cagrilintide', slug: 'cagrilintide', description: 'Amylin analog for weight loss', category: 'metabolic', stack: 'Weight Management', color: 'rose' },
  
  // Cognitive Peptides
  { name: 'Semax', slug: 'semax', description: 'BDNF modulation & neuroprotection', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'Selank', slug: 'selank', description: 'Anxiolytic & neuroprotective', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'Dihexa', slug: 'dihexa', description: 'Synaptogenesis & memory', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'DSIP', slug: 'dsip', description: 'Delta sleep-inducing peptide', category: 'cognitive', stack: 'Sleep & Recovery', color: 'indigo' },
  { name: 'Noopept', slug: 'noopept', description: 'Cognitive enhancer & neuroprotectant', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'Alpha-GPC', slug: 'alpha-gpc', description: 'Choline source for cognition', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'Cerebrolysin', slug: 'cerebrolysin', description: 'Neurotrophic peptide complex', category: 'cognitive', stack: 'Neuroprotection', color: 'blue' },
  { name: 'P21', slug: 'p21', description: 'CNTF-derived neurogenic peptide', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'Cortexin', slug: 'cortexin', description: 'Brain-derived peptide complex', category: 'cognitive', stack: 'Neuroprotection', color: 'blue' },
  { name: 'NA-Semax', slug: 'na-semax', description: 'Acetylated Semax variant', category: 'cognitive', stack: 'Cognitive Enhancement', color: 'cyan' },
  { name: 'Pinealon', slug: 'pinealon', description: 'Pineal gland peptide bioregulator', category: 'cognitive', stack: 'Sleep & Cognition', color: 'indigo' },
  
  // Longevity Peptides
  { name: 'Epithalon', slug: 'epithalon', description: 'Telomerase activation & longevity', category: 'longevity', stack: 'Anti-Aging Stack', color: 'violet' },
  { name: 'MOTS-c', slug: 'mots-c', description: 'Mitochondrial-derived peptide', category: 'longevity', stack: 'Longevity Stack', color: 'violet' },
  { name: 'Humanin', slug: 'humanin', description: 'Mitochondrial cytoprotective peptide', category: 'longevity', stack: 'Anti-Aging Stack', color: 'violet' },
  { name: 'SS-31 (Elamipretide)', slug: 'ss-31', description: 'Mitochondrial targeting peptide', category: 'longevity', stack: 'Mitochondrial Health', color: 'violet' },
  { name: 'SLU-PP-332', slug: 'slu-pp-332', description: 'ERRγ agonist for endurance', category: 'longevity', stack: 'Performance', color: 'violet' },
  { name: 'NAD+', slug: 'nad', description: 'Cellular energy & repair', category: 'longevity', stack: 'Anti-Aging Stack', color: 'amber' },
  { name: 'NMN', slug: 'nmn', description: 'NAD+ precursor supplement', category: 'longevity', stack: 'Anti-Aging Stack', color: 'amber' },
  { name: 'Spermidine', slug: 'spermidine', description: 'Autophagy-inducing polyamine', category: 'longevity', stack: 'Longevity Stack', color: 'violet' },
  { name: 'Fisetin', slug: 'fisetin', description: 'Senolytic flavonoid', category: 'longevity', stack: 'Anti-Aging Stack', color: 'orange' },
  { name: 'Resveratrol', slug: 'resveratrol', description: 'SIRT1 activator polyphenol', category: 'longevity', stack: 'Longevity Stack', color: 'purple' },
  { name: 'Pterostilbene', slug: 'pterostilbene', description: 'Bioavailable resveratrol analog', category: 'longevity', stack: 'Longevity Stack', color: 'purple' },
  { name: 'GDF-11', slug: 'gdf-11', description: 'Rejuvenation growth factor', category: 'longevity', stack: 'Anti-Aging Stack', color: 'violet' },
  { name: 'Quercetin', slug: 'quercetin', description: 'Senolytic flavonoid', category: 'longevity', stack: 'Anti-Aging Stack', color: 'orange' },
  { name: 'FOXO4-DRI', slug: 'foxo4-dri', description: 'Senolytic cellular cleanup', category: 'longevity', stack: 'Anti-Aging Stack', color: 'violet' },
  { name: 'Rapamycin', slug: 'rapamycin', description: 'mTOR inhibitor for longevity', category: 'longevity', stack: 'Longevity Stack', color: 'violet' },
  
  // Immune & Other Peptides
  { name: 'Glutathione', slug: 'glutathione', description: 'Master antioxidant', category: 'immune', stack: 'Detox & Immune', color: 'green' },
  { name: 'VIP', slug: 'vip', description: 'Vasoactive intestinal peptide', category: 'immune', stack: 'Immune Modulation', color: 'teal' },
  { name: 'NAC', slug: 'nac', description: 'Glutathione precursor', category: 'immune', stack: 'Detox & Immune', color: 'green' },
  { name: 'Zinc-Thymulin', slug: 'zinc-thymulin', description: 'Thymic hormone complex', category: 'immune', stack: 'Immune Support', color: 'teal' },
  { name: 'PT-141 (Bremelanotide)', slug: 'pt-141', description: 'Sexual dysfunction treatment', category: 'immune', stack: 'Wellness', color: 'pink' },
  { name: 'Melanotan-2', slug: 'melanotan-2', description: 'Tanning & libido peptide', category: 'immune', stack: 'Wellness', color: 'orange' },
  { name: 'Melanotan-1 (Afamelanotide)', slug: 'melanotan-1', description: 'FDA-approved for EPP', category: 'immune', stack: 'Skin Health', color: 'orange' },
  { name: 'Oxytocin', slug: 'oxytocin', description: 'Bonding & social peptide', category: 'immune', stack: 'Wellness', color: 'pink' },
  { name: 'Kisspeptin-10', slug: 'kisspeptin-10', description: 'Reproductive hormone regulator', category: 'immune', stack: 'Hormone Support', color: 'pink' },
  
  // Specialty Formulations
  { name: 'BPC-157 Capsules', slug: 'bpc-157-capsules', description: 'Oral BPC-157 formulation', category: 'recovery', stack: 'Oral Delivery', color: 'emerald' },
  { name: 'NAD+ Nasal Spray', slug: 'nad-nasal-spray', description: 'Intranasal NAD+ delivery', category: 'longevity', stack: 'Nasal Delivery', color: 'amber' },
  { name: 'GHK-Cu Serum', slug: 'ghk-cu-serum', description: 'Topical copper peptide', category: 'recovery', stack: 'Topical', color: 'amber' },
  
  // Blend Formulas
  { name: 'BPC-157 + TB-500', slug: 'bpc-157-tb-500', description: 'Synergistic healing blend', category: 'blend', stack: 'Wolverine Stack', color: 'emerald', isBlend: true },
  { name: 'BPC Wolverine', slug: 'bpc-wolverine', description: 'Enhanced recovery formula', category: 'blend', stack: 'Recovery Blend', color: 'emerald', isBlend: true },
  { name: 'CJC-1295 + Ipamorelin', slug: 'cjc-1295-ipamorelin', description: 'GH optimization blend', category: 'blend', stack: 'GH Stack', color: 'blue', isBlend: true },
  { name: 'Selank + Semax', slug: 'selank-semax', description: 'Cognitive enhancement blend', category: 'blend', stack: 'Nootropic Stack', color: 'cyan', isBlend: true },
  { name: 'Semaglutide + BPC-157', slug: 'semaglutide-bpc-157', description: 'Weight loss with gut support', category: 'blend', stack: 'Weight Management', color: 'rose', isBlend: true },
  { name: 'Tirzepatide + BPC-157', slug: 'tirzepatide-bpc-157', description: 'Enhanced metabolic blend', category: 'blend', stack: 'Weight Management', color: 'rose', isBlend: true },
  { name: 'Tesamorelin + Ipamorelin', slug: 'tesamorelin-ipamorelin', description: 'Synergistic GH blend', category: 'blend', stack: 'GH Optimization', color: 'purple', isBlend: true },
  { name: 'Formula M-51', slug: 'formula-m-51', description: 'Proprietary recovery formula', category: 'blend', stack: 'Proprietary', color: 'teal', isBlend: true },
  { name: 'Formula N-5550', slug: 'formula-n-5550', description: 'Proprietary metabolic formula', category: 'blend', stack: 'Proprietary', color: 'purple', isBlend: true },
  { name: 'Formula RG-5555', slug: 'formula-rg-5555', description: 'Proprietary regeneration formula', category: 'blend', stack: 'Proprietary', color: 'emerald', isBlend: true },
  { name: 'GLOW Core', slug: 'glow-core', description: 'Skin rejuvenation blend', category: 'blend', stack: 'Skin Health', color: 'pink', isBlend: true },
  { name: 'GLOW Plus', slug: 'glow-plus', description: 'Enhanced skin formula', category: 'blend', stack: 'Skin Health', color: 'pink', isBlend: true },
  { name: 'GLOW Ultra', slug: 'glow-ultra', description: 'Premium skin complex', category: 'blend', stack: 'Skin Health', color: 'pink', isBlend: true },
  { name: 'GLOW Capsules', slug: 'glow-blend-capsules', description: 'Oral skin support', category: 'blend', stack: 'Oral Delivery', color: 'pink', isBlend: true },
  { name: 'KLOW Capsules', slug: 'klow-blend-capsules', description: 'Oral wellness blend', category: 'blend', stack: 'Oral Delivery', color: 'orange', isBlend: true },
];

// Filter functions
export const getRecoveryPeptides = () => allPeptides.filter(p => p.category === 'recovery');
export const getMetabolicPeptides = () => allPeptides.filter(p => p.category === 'metabolic');
export const getCognitivePeptides = () => allPeptides.filter(p => p.category === 'cognitive');
export const getLongevityPeptides = () => allPeptides.filter(p => p.category === 'longevity');
export const getImmunePeptides = () => allPeptides.filter(p => p.category === 'immune');
export const getBlendPeptides = () => allPeptides.filter(p => p.category === 'blend');
export const getNonBlendPeptides = () => allPeptides.filter(p => !p.isBlend);

// Color mapping for Tailwind classes
export const colorClasses = {
  emerald: { border: 'border-emerald-200', bg: 'bg-gradient-to-br from-white to-emerald-50', icon: 'text-emerald-600', title: 'text-emerald-900' },
  blue: { border: 'border-blue-200', bg: 'bg-gradient-to-br from-white to-blue-50', icon: 'text-blue-600', title: 'text-blue-900' },
  purple: { border: 'border-purple-200', bg: 'bg-gradient-to-br from-white to-purple-50', icon: 'text-purple-600', title: 'text-purple-900' },
  indigo: { border: 'border-indigo-200', bg: 'bg-gradient-to-br from-white to-indigo-50', icon: 'text-indigo-600', title: 'text-indigo-900' },
  rose: { border: 'border-rose-200', bg: 'bg-gradient-to-br from-white to-rose-50', icon: 'text-rose-600', title: 'text-rose-900' },
  violet: { border: 'border-violet-200', bg: 'bg-gradient-to-br from-white to-violet-50', icon: 'text-violet-600', title: 'text-violet-900' },
  amber: { border: 'border-amber-200', bg: 'bg-gradient-to-br from-white to-amber-50', icon: 'text-amber-600', title: 'text-amber-900' },
  teal: { border: 'border-teal-200', bg: 'bg-gradient-to-br from-white to-teal-50', icon: 'text-teal-600', title: 'text-teal-900' },
  cyan: { border: 'border-cyan-200', bg: 'bg-gradient-to-br from-white to-cyan-50', icon: 'text-cyan-600', title: 'text-cyan-900' },
  orange: { border: 'border-orange-200', bg: 'bg-gradient-to-br from-white to-orange-50', icon: 'text-orange-600', title: 'text-orange-900' },
  pink: { border: 'border-pink-200', bg: 'bg-gradient-to-br from-white to-pink-50', icon: 'text-pink-600', title: 'text-pink-900' },
  green: { border: 'border-green-200', bg: 'bg-gradient-to-br from-white to-green-50', icon: 'text-green-600', title: 'text-green-900' },
};
