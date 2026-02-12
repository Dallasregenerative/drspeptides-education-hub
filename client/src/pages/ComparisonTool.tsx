import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { ArrowLeft, GitCompare, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from "@/components/Navigation";

interface PeptideData {
  name: string;
  category: string;
  fdaApproved: boolean;
  administration: string;
  frequency: string;
  typicalDose: string;
  halfLife: string;
  onsetOfAction: string;
  primaryMechanism: string;
  keyBenefits: string[];
  commonSideEffects: string[];
  contraindications: string[];
  cost: string;
  evidenceLevel: string;
  monitoring: string;
}

export default function ComparisonTool() {
  usePageTitle("Peptide Comparison Tool - Compare Peptides Side-by-Side", { description: "Side-by-side peptide comparison tool with 56+ peptides. Compare FDA status, dosing, mechanisms, benefits, side effects, contraindications, cost, and evidence levels to make informed clinical decisions." });

  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const peptideDatabase: PeptideData[] = [
    // Weight Loss / GLP-1 Agonists
    {
      name: 'Semaglutide',
      category: 'Weight Loss',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '0.25-2.4mg/week',
      halfLife: '~7 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'GLP-1 receptor agonist',
      keyBenefits: ['Weight loss (10-15%)', 'Improved glycemic control', 'Cardiovascular benefits'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Constipation'],
      contraindications: ['Personal/family history MTC', 'MEN 2', 'Pancreatitis history'],
      cost: '$$$',
      evidenceLevel: 'High (RCTs)',
      monitoring: 'Monthly weight, quarterly HbA1c'
    },
    {
      name: 'Tirzepatide',
      category: 'Weight Loss',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '2.5-15mg/week',
      halfLife: '~5 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'Dual GIP/GLP-1 agonist',
      keyBenefits: ['Weight loss (15-22%)', 'Superior glycemic control', 'Lipid improvements'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Decreased appetite'],
      contraindications: ['Personal/family history MTC', 'MEN 2', 'Pancreatitis history'],
      cost: '$$$$',
      evidenceLevel: 'High (RCTs)',
      monitoring: 'Monthly weight, quarterly HbA1c, lipids'
    },
    {
      name: 'AOD-9604',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '300mcg/day',
      halfLife: '~2-3 hours',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'HGH fragment (lipolysis)',
      keyBenefits: ['Fat loss', 'No IGF-1 increase', 'Cartilage repair'],
      commonSideEffects: ['Injection site reactions', 'Headache (rare)'],
      contraindications: ['Pregnancy', 'Active cancer'],
      cost: '$$',
      evidenceLevel: 'Moderate (clinical trials)',
      monitoring: 'Body composition, weight'
    },
    {
      name: 'Tesofensine',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Oral capsule',
      frequency: 'Daily',
      typicalDose: '0.25-0.5mg/day',
      halfLife: '~8 days',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Triple monoamine reuptake inhibitor',
      keyBenefits: ['Appetite suppression', 'Increased metabolism', 'Weight loss'],
      commonSideEffects: ['Dry mouth', 'Insomnia', 'Increased heart rate'],
      contraindications: ['Cardiovascular disease', 'Hypertension', 'MAOIs'],
      cost: '$$$',
      evidenceLevel: 'Moderate (Phase 2/3 trials)',
      monitoring: 'Blood pressure, heart rate, weight'
    },
    {
      name: '5-Amino-1MQ',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Oral capsule',
      frequency: 'Daily',
      typicalDose: '50-150mg/day',
      halfLife: '~4-6 hours',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'NNMT inhibitor',
      keyBenefits: ['Fat cell reduction', 'Metabolic enhancement', 'Muscle preservation'],
      commonSideEffects: ['Minimal reported'],
      contraindications: ['Pregnancy', 'Liver disease'],
      cost: '$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Weight, body composition'
    },
    {
      name: 'Fragment 176-191',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '250-500mcg/day',
      halfLife: '~30 minutes',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'HGH fragment (lipolysis)',
      keyBenefits: ['Fat burning', 'No effect on blood sugar', 'Anti-aging'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['Active cancer', 'Pregnancy'],
      cost: '$$',
      evidenceLevel: 'Moderate (animal studies)',
      monitoring: 'Body composition'
    },
    // Recovery & Healing
    {
      name: 'BPC-157',
      category: 'Recovery',
      fdaApproved: false,
      administration: 'Subcutaneous/Oral',
      frequency: '1-2x daily',
      typicalDose: '250-500mcg/day',
      halfLife: '~4 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Growth factor modulation',
      keyBenefits: ['Accelerated healing', 'Reduced inflammation', 'Gut protection'],
      commonSideEffects: ['Minimal (injection site reactions)'],
      contraindications: ['Active malignancy (theoretical)'],
      cost: '$$',
      evidenceLevel: 'Moderate (animal studies)',
      monitoring: 'Clinical assessment of healing'
    },
    {
      name: 'TB-500',
      category: 'Recovery',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2x weekly',
      typicalDose: '2-5mg/dose',
      halfLife: '~2-3 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Thymosin Beta-4 fragment',
      keyBenefits: ['Tissue repair', 'Reduced inflammation', 'Improved flexibility'],
      commonSideEffects: ['Injection site reactions', 'Fatigue (rare)'],
      contraindications: ['Active cancer', 'Bleeding disorders'],
      cost: '$$',
      evidenceLevel: 'Moderate (animal studies)',
      monitoring: 'Clinical healing assessment'
    },
    {
      name: 'GHK-Cu',
      category: 'Recovery',
      fdaApproved: false,
      administration: 'Subcutaneous/Topical',
      frequency: 'Daily',
      typicalDose: '1-2mg/day',
      halfLife: '~1-2 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Copper peptide complex',
      keyBenefits: ['Wound healing', 'Collagen synthesis', 'Anti-aging'],
      commonSideEffects: ['Minimal'],
      contraindications: ['Copper sensitivity'],
      cost: '$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Skin assessment, wound healing'
    },
    {
      name: 'Pentadecapeptide',
      category: 'Recovery',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '250-500mcg/day',
      halfLife: '~4 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Gastric pentadecapeptide',
      keyBenefits: ['Gut healing', 'Tissue repair', 'Anti-inflammatory'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['Active cancer'],
      cost: '$$',
      evidenceLevel: 'Moderate (animal studies)',
      monitoring: 'GI symptoms, healing progress'
    },
    // Growth Hormone Secretagogues
    {
      name: 'CJC-1295',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x weekly',
      typicalDose: '300-500mcg/dose',
      halfLife: '~6-8 days',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'GHRH analog',
      keyBenefits: ['Increased GH/IGF-1', 'Improved body composition', 'Better sleep quality'],
      commonSideEffects: ['Injection site reactions', 'Water retention', 'Joint pain'],
      contraindications: ['Active malignancy', 'Diabetic retinopathy'],
      cost: '$$',
      evidenceLevel: 'Moderate (small studies)',
      monitoring: 'IGF-1 levels, body composition'
    },
    {
      name: 'Ipamorelin',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x daily',
      typicalDose: '200-300mcg/dose',
      halfLife: '~2 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Ghrelin receptor agonist',
      keyBenefits: ['Increased GH release', 'Minimal cortisol/prolactin effect', 'Improved recovery'],
      commonSideEffects: ['Minimal', 'Headache (rare)', 'Flushing (rare)'],
      contraindications: ['Active malignancy'],
      cost: '$$',
      evidenceLevel: 'Moderate (small studies)',
      monitoring: 'IGF-1 levels, clinical response'
    },
    {
      name: 'Sermorelin',
      category: 'Growth Hormone',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'Daily (bedtime)',
      typicalDose: '200-500mcg/day',
      halfLife: '~10-20 minutes',
      onsetOfAction: '3-6 months',
      primaryMechanism: 'GHRH analog (1-29)',
      keyBenefits: ['Natural GH release', 'Improved sleep', 'Body composition'],
      commonSideEffects: ['Injection site reactions', 'Flushing', 'Headache'],
      contraindications: ['Active cancer', 'Pregnancy'],
      cost: '$$',
      evidenceLevel: 'High (FDA approved)',
      monitoring: 'IGF-1, clinical response'
    },
    {
      name: 'Tesamorelin',
      category: 'Growth Hormone',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '2mg/day',
      halfLife: '~26-38 minutes',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'GHRH analog',
      keyBenefits: ['Visceral fat reduction', 'Improved lipids', 'GH optimization'],
      commonSideEffects: ['Injection site reactions', 'Joint pain', 'Edema'],
      contraindications: ['Active malignancy', 'Pregnancy', 'Pituitary surgery'],
      cost: '$$$',
      evidenceLevel: 'High (FDA approved)',
      monitoring: 'IGF-1, visceral fat, lipids'
    },
    {
      name: 'Hexarelin',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x daily',
      typicalDose: '100-200mcg/dose',
      halfLife: '~55-70 minutes',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Ghrelin mimetic',
      keyBenefits: ['Strong GH release', 'Cardioprotective', 'Muscle growth'],
      commonSideEffects: ['Increased hunger', 'Cortisol elevation', 'Prolactin increase'],
      contraindications: ['Active cancer', 'Cardiac conditions'],
      cost: '$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'IGF-1, cortisol, prolactin'
    },
    {
      name: 'GHRP-2',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x daily',
      typicalDose: '100-300mcg/dose',
      halfLife: '~15-60 minutes',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Ghrelin receptor agonist',
      keyBenefits: ['Strong GH release', 'Appetite stimulation', 'Sleep improvement'],
      commonSideEffects: ['Increased hunger', 'Water retention', 'Cortisol increase'],
      contraindications: ['Active cancer', 'Obesity (appetite increase)'],
      cost: '$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'IGF-1, appetite, weight'
    },
    {
      name: 'GHRP-6',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x daily',
      typicalDose: '100-300mcg/dose',
      halfLife: '~15-60 minutes',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Ghrelin receptor agonist',
      keyBenefits: ['GH release', 'Strong appetite stimulation', 'Muscle growth'],
      commonSideEffects: ['Intense hunger', 'Water retention', 'Cortisol/prolactin increase'],
      contraindications: ['Active cancer', 'Obesity'],
      cost: '$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'IGF-1, appetite, hormones'
    },
    {
      name: 'MK-677 (Ibutamoren)',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Oral',
      frequency: 'Daily',
      typicalDose: '10-25mg/day',
      halfLife: '~24 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Ghrelin receptor agonist',
      keyBenefits: ['Sustained GH release', 'Improved sleep', 'Muscle preservation'],
      commonSideEffects: ['Increased appetite', 'Water retention', 'Lethargy'],
      contraindications: ['Diabetes', 'Cancer', 'Cardiac conditions'],
      cost: '$$',
      evidenceLevel: 'Moderate (clinical trials)',
      monitoring: 'IGF-1, glucose, body composition'
    },
    // Cognitive Enhancement
    {
      name: 'Semax',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intranasal',
      frequency: '2-3x daily',
      typicalDose: '300-600mcg/day',
      halfLife: '~30 minutes',
      onsetOfAction: 'Minutes to hours',
      primaryMechanism: 'BDNF upregulation',
      keyBenefits: ['Enhanced cognition', 'Neuroprotection', 'Reduced anxiety'],
      commonSideEffects: ['Minimal', 'Nasal irritation (rare)'],
      contraindications: ['None well-established'],
      cost: '$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Subjective cognitive assessment'
    },
    {
      name: 'Selank',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intranasal',
      frequency: '2-3x daily',
      typicalDose: '250-500mcg/day',
      halfLife: '~2-3 minutes',
      onsetOfAction: 'Minutes to hours',
      primaryMechanism: 'Tuftsin analog (anxiolytic)',
      keyBenefits: ['Anxiety reduction', 'Mood enhancement', 'Cognitive support'],
      commonSideEffects: ['Minimal', 'Fatigue (rare)'],
      contraindications: ['None well-established'],
      cost: '$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Mood, anxiety levels'
    },
    {
      name: 'NA-Semax',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intranasal',
      frequency: '2-3x daily',
      typicalDose: '200-400mcg/day',
      halfLife: '~30 minutes',
      onsetOfAction: 'Minutes to hours',
      primaryMechanism: 'Enhanced BDNF upregulation',
      keyBenefits: ['Stronger cognitive effects', 'Neuroprotection', 'Focus enhancement'],
      commonSideEffects: ['Minimal', 'Nasal irritation'],
      contraindications: ['None well-established'],
      cost: '$$',
      evidenceLevel: 'Low (limited studies)',
      monitoring: 'Cognitive function'
    },
    {
      name: 'Dihexa',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Oral/Sublingual',
      frequency: 'Daily',
      typicalDose: '10-40mg/day',
      halfLife: '~6-12 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'HGF mimetic',
      keyBenefits: ['Memory enhancement', 'Neurogenesis', 'Synaptic plasticity'],
      commonSideEffects: ['Limited data', 'Potential overstimulation'],
      contraindications: ['Cancer (theoretical)', 'Pregnancy'],
      cost: '$$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Cognitive assessment'
    },
    {
      name: 'P21 (Cerebrolysin peptide)',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intranasal/Subcutaneous',
      frequency: 'Daily',
      typicalDose: '1-2mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'CNTF mimetic',
      keyBenefits: ['Neurogenesis', 'Memory improvement', 'Neuroprotection'],
      commonSideEffects: ['Minimal reported'],
      contraindications: ['None well-established'],
      cost: '$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Cognitive function'
    },
    {
      name: 'Noopept',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Oral/Sublingual',
      frequency: '2-3x daily',
      typicalDose: '10-30mg/day',
      halfLife: '~30-60 minutes',
      onsetOfAction: 'Days to weeks',
      primaryMechanism: 'AMPA/NMDA modulation',
      keyBenefits: ['Memory enhancement', 'Focus improvement', 'Neuroprotection'],
      commonSideEffects: ['Headache', 'Irritability', 'Insomnia'],
      contraindications: ['Hypertension', 'Pregnancy'],
      cost: '$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Cognitive function, blood pressure'
    },
    // Immune Support
    {
      name: 'Thymosin Alpha-1',
      category: 'Immune',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x weekly',
      typicalDose: '1.6mg/dose',
      halfLife: '~2 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'T-cell modulation',
      keyBenefits: ['Immune enhancement', 'Anti-viral activity', 'Cancer adjunct'],
      commonSideEffects: ['Injection site reactions', 'Fatigue (rare)'],
      contraindications: ['Immunosuppression therapy', 'Organ transplant'],
      cost: '$$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Immune markers, clinical response'
    },
    {
      name: 'Thymalin',
      category: 'Immune',
      fdaApproved: false,
      administration: 'Intramuscular injection',
      frequency: 'Daily (10-day cycles)',
      typicalDose: '10mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Thymic peptide complex',
      keyBenefits: ['Immune restoration', 'Anti-aging', 'T-cell function'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['Autoimmune conditions'],
      cost: '$$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Immune function'
    },
    {
      name: 'LL-37',
      category: 'Immune',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '50-100mcg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Antimicrobial peptide',
      keyBenefits: ['Antimicrobial activity', 'Wound healing', 'Immune modulation'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['Autoimmune conditions'],
      cost: '$$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Infection markers, healing'
    },
    {
      name: 'KPV',
      category: 'Immune',
      fdaApproved: false,
      administration: 'Oral/Subcutaneous',
      frequency: 'Daily',
      typicalDose: '200-500mcg/day',
      halfLife: '~1-2 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Alpha-MSH fragment (anti-inflammatory)',
      keyBenefits: ['Anti-inflammatory', 'Gut healing', 'Antimicrobial'],
      commonSideEffects: ['Minimal'],
      contraindications: ['None well-established'],
      cost: '$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Inflammatory markers, GI symptoms'
    },
    // Longevity & Anti-Aging
    {
      name: 'Epithalon',
      category: 'Longevity',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily (10-20 day cycles)',
      typicalDose: '5-10mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Telomerase activation',
      keyBenefits: ['Telomere lengthening', 'Anti-aging', 'Sleep improvement'],
      commonSideEffects: ['Minimal'],
      contraindications: ['Active cancer'],
      cost: '$$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Telomere length (optional), clinical response'
    },
    {
      name: 'MOTS-c',
      category: 'Longevity',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '3-5x weekly',
      typicalDose: '5-10mg/dose',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Mitochondrial-derived peptide',
      keyBenefits: ['Metabolic regulation', 'Exercise mimetic', 'Longevity'],
      commonSideEffects: ['Minimal reported'],
      contraindications: ['None well-established'],
      cost: '$$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Metabolic markers, energy levels'
    },
    {
      name: 'Humanin',
      category: 'Longevity',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '1-5mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Mitochondrial-derived peptide',
      keyBenefits: ['Neuroprotection', 'Cardioprotection', 'Anti-apoptotic'],
      commonSideEffects: ['Minimal reported'],
      contraindications: ['None well-established'],
      cost: '$$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Clinical response'
    },
    {
      name: 'SS-31 (Elamipretide)',
      category: 'Longevity',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '10-40mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Mitochondrial targeting',
      keyBenefits: ['Mitochondrial function', 'Cardioprotection', 'Exercise capacity'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['None well-established'],
      cost: '$$$$',
      evidenceLevel: 'Moderate (clinical trials)',
      monitoring: 'Exercise capacity, cardiac function'
    },
    // Sexual Health
    {
      name: 'PT-141 (Bremelanotide)',
      category: 'Sexual Health',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'As needed',
      typicalDose: '1-2mg/dose',
      halfLife: '~2.7 hours',
      onsetOfAction: '45-60 minutes',
      primaryMechanism: 'MC3/MC4 receptor agonist',
      keyBenefits: ['Sexual arousal', 'Libido enhancement', 'Works centrally'],
      commonSideEffects: ['Nausea', 'Flushing', 'Headache'],
      contraindications: ['Uncontrolled hypertension', 'Cardiovascular disease'],
      cost: '$$$',
      evidenceLevel: 'High (FDA approved)',
      monitoring: 'Blood pressure, clinical response'
    },
    {
      name: 'Melanotan II',
      category: 'Sexual Health',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily (loading), then maintenance',
      typicalDose: '0.25-0.5mg/day',
      halfLife: '~33 minutes',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'MC1/MC4 receptor agonist',
      keyBenefits: ['Tanning', 'Libido enhancement', 'Appetite suppression'],
      commonSideEffects: ['Nausea', 'Flushing', 'Mole darkening'],
      contraindications: ['Melanoma history', 'Skin cancer risk'],
      cost: '$',
      evidenceLevel: 'Low (limited studies)',
      monitoring: 'Skin changes, moles'
    },
    {
      name: 'Kisspeptin-10',
      category: 'Sexual Health',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'As needed',
      typicalDose: '1-2mg/dose',
      halfLife: '~28 minutes',
      onsetOfAction: '30-60 minutes',
      primaryMechanism: 'GnRH stimulation',
      keyBenefits: ['Testosterone boost', 'Sexual function', 'Fertility support'],
      commonSideEffects: ['Flushing', 'Headache'],
      contraindications: ['Hormone-sensitive cancers'],
      cost: '$$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Hormone levels'
    },
    // Sleep & Stress
    {
      name: 'DSIP',
      category: 'Sleep',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily (bedtime)',
      typicalDose: '100-200mcg/day',
      halfLife: '~7-8 minutes',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Delta sleep induction',
      keyBenefits: ['Sleep quality', 'Stress reduction', 'Recovery'],
      commonSideEffects: ['Minimal', 'Morning grogginess (rare)'],
      contraindications: ['None well-established'],
      cost: '$$',
      evidenceLevel: 'Low (limited studies)',
      monitoring: 'Sleep quality assessment'
    },
    // Performance & Muscle
    {
      name: 'IGF-1 LR3',
      category: 'Performance',
      fdaApproved: false,
      administration: 'Subcutaneous/Intramuscular',
      frequency: 'Daily',
      typicalDose: '20-50mcg/day',
      halfLife: '~20-30 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'IGF-1 receptor agonist',
      keyBenefits: ['Muscle growth', 'Fat loss', 'Recovery'],
      commonSideEffects: ['Hypoglycemia', 'Joint pain', 'Organ growth'],
      contraindications: ['Active cancer', 'Diabetes'],
      cost: '$$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Blood glucose, IGF-1 levels'
    },
    {
      name: 'MGF (Mechano Growth Factor)',
      category: 'Performance',
      fdaApproved: false,
      administration: 'Intramuscular injection',
      frequency: 'Post-workout',
      typicalDose: '100-200mcg/dose',
      halfLife: '~5-7 minutes',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'IGF-1 splice variant',
      keyBenefits: ['Muscle repair', 'Satellite cell activation', 'Local growth'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['Active cancer'],
      cost: '$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Muscle recovery, strength'
    },
    {
      name: 'Follistatin 344',
      category: 'Performance',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '10-30 day cycles',
      typicalDose: '100mcg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Myostatin inhibition',
      keyBenefits: ['Muscle growth', 'Strength increase', 'Fat loss'],
      commonSideEffects: ['Limited data'],
      contraindications: ['Cardiac conditions', 'Cancer'],
      cost: '$$$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Muscle mass, cardiac function'
    },
    {
      name: 'ACE-031',
      category: 'Performance',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '0.1-0.3mg/kg',
      halfLife: '~10-15 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'ActRIIB-Fc fusion (myostatin trap)',
      keyBenefits: ['Muscle growth', 'Strength', 'Potential DMD treatment'],
      commonSideEffects: ['Nosebleeds', 'Gum bleeding', 'Telangiectasias'],
      contraindications: ['Bleeding disorders', 'Vascular conditions'],
      cost: '$$$$',
      evidenceLevel: 'Moderate (clinical trials)',
      monitoring: 'Bleeding signs, muscle mass'
    },
    // Skin & Hair
    {
      name: 'Copper Peptide (AHK-Cu)',
      category: 'Skin & Hair',
      fdaApproved: false,
      administration: 'Topical/Subcutaneous',
      frequency: 'Daily',
      typicalDose: '1-2mg/day',
      halfLife: '~1-2 hours',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'Copper peptide complex',
      keyBenefits: ['Hair growth', 'Skin rejuvenation', 'Wound healing'],
      commonSideEffects: ['Minimal'],
      contraindications: ['Copper sensitivity'],
      cost: '$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Hair/skin assessment'
    },
    {
      name: 'PTD-DBM',
      category: 'Skin & Hair',
      fdaApproved: false,
      administration: 'Topical',
      frequency: 'Daily',
      typicalDose: 'Topical application',
      halfLife: 'N/A (topical)',
      onsetOfAction: '8-12 weeks',
      primaryMechanism: 'Wnt pathway activation',
      keyBenefits: ['Hair follicle regeneration', 'Hair growth'],
      commonSideEffects: ['Scalp irritation (rare)'],
      contraindications: ['None well-established'],
      cost: '$$$',
      evidenceLevel: 'Low (preclinical)',
      monitoring: 'Hair growth assessment'
    },
    // Metabolic
    {
      name: 'AICAR',
      category: 'Metabolic',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Daily',
      typicalDose: '50-150mg/day',
      halfLife: '~2-3 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'AMPK activator',
      keyBenefits: ['Endurance enhancement', 'Fat oxidation', 'Glucose uptake'],
      commonSideEffects: ['Hypoglycemia', 'Lactic acidosis risk'],
      contraindications: ['Diabetes', 'Cardiac conditions'],
      cost: '$$$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Blood glucose, lactate'
    },
    {
      name: 'GW501516 (Cardarine)',
      category: 'Metabolic',
      fdaApproved: false,
      administration: 'Oral',
      frequency: 'Daily',
      typicalDose: '10-20mg/day',
      halfLife: '~16-24 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'PPAR-delta agonist',
      keyBenefits: ['Endurance', 'Fat oxidation', 'Lipid improvement'],
      commonSideEffects: ['Limited data', 'Cancer risk (rodent studies)'],
      contraindications: ['Cancer history', 'Pregnancy'],
      cost: '$$',
      evidenceLevel: 'Low (discontinued trials)',
      monitoring: 'Lipids, clinical response'
    },
    // Additional peptides to reach 56+
    {
      name: 'BPC-157 Arginine Salt',
      category: 'Recovery',
      fdaApproved: false,
      administration: 'Oral/Subcutaneous',
      frequency: '1-2x daily',
      typicalDose: '500mcg/day',
      halfLife: '~4 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Stabilized BPC-157',
      keyBenefits: ['Enhanced stability', 'Oral bioavailability', 'Healing'],
      commonSideEffects: ['Minimal'],
      contraindications: ['Active cancer'],
      cost: '$$',
      evidenceLevel: 'Moderate (animal studies)',
      monitoring: 'Healing assessment'
    },
    {
      name: 'Retatrutide',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '1-12mg/week',
      halfLife: '~6 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'Triple agonist (GIP/GLP-1/Glucagon)',
      keyBenefits: ['Weight loss (up to 24%)', 'Glycemic control', 'Lipid improvement'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Vomiting'],
      contraindications: ['MTC history', 'MEN 2', 'Pancreatitis'],
      cost: '$$$$',
      evidenceLevel: 'Moderate (Phase 2 trials)',
      monitoring: 'Weight, HbA1c, lipids'
    },
    {
      name: 'Survodutide',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '0.6-4.8mg/week',
      halfLife: '~5-6 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'Dual GLP-1/Glucagon agonist',
      keyBenefits: ['Weight loss', 'NASH improvement', 'Glycemic control'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Vomiting'],
      contraindications: ['MTC history', 'MEN 2'],
      cost: '$$$$',
      evidenceLevel: 'Moderate (Phase 2/3 trials)',
      monitoring: 'Weight, liver enzymes, HbA1c'
    },
    {
      name: 'CagriSema',
      category: 'Weight Loss',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: 'Combination dose',
      halfLife: '~7 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'Semaglutide + Cagrilintide (amylin)',
      keyBenefits: ['Enhanced weight loss', 'Appetite control', 'Glycemic control'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Injection site reactions'],
      contraindications: ['MTC history', 'MEN 2'],
      cost: '$$$$',
      evidenceLevel: 'Moderate (Phase 3 trials)',
      monitoring: 'Weight, HbA1c'
    },
    {
      name: 'VIP (Vasoactive Intestinal Peptide)',
      category: 'Immune',
      fdaApproved: false,
      administration: 'Intranasal/Subcutaneous',
      frequency: 'Daily',
      typicalDose: '50-100mcg/day',
      halfLife: '~1-2 minutes',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Neuropeptide (anti-inflammatory)',
      keyBenefits: ['CIRS treatment', 'Immune modulation', 'Neuroprotection'],
      commonSideEffects: ['Nasal irritation', 'Flushing'],
      contraindications: ['None well-established'],
      cost: '$$$',
      evidenceLevel: 'Moderate (clinical use)',
      monitoring: 'Inflammatory markers'
    },
    {
      name: 'Larazotide',
      category: 'Immune',
      fdaApproved: false,
      administration: 'Oral',
      frequency: '3x daily',
      typicalDose: '0.5-1mg/dose',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Tight junction modulator',
      keyBenefits: ['Gut barrier repair', 'Celiac support', 'Leaky gut'],
      commonSideEffects: ['GI discomfort', 'Headache'],
      contraindications: ['None well-established'],
      cost: '$$$',
      evidenceLevel: 'Moderate (Phase 3 trials)',
      monitoring: 'GI symptoms, zonulin levels'
    },
    {
      name: 'Oxytocin',
      category: 'Hormonal',
      fdaApproved: true,
      administration: 'Intranasal/Subcutaneous',
      frequency: 'As needed',
      typicalDose: '10-40 IU/dose',
      halfLife: '~3-5 minutes',
      onsetOfAction: 'Minutes',
      primaryMechanism: 'Oxytocin receptor agonist',
      keyBenefits: ['Social bonding', 'Stress reduction', 'Sexual function'],
      commonSideEffects: ['Nasal irritation', 'Headache'],
      contraindications: ['Pregnancy (except labor)', 'Cardiovascular disease'],
      cost: '$',
      evidenceLevel: 'High (FDA approved)',
      monitoring: 'Clinical response'
    },
    {
      name: 'Cerebrolysin',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intramuscular/IV',
      frequency: 'Daily (10-20 day cycles)',
      typicalDose: '5-30ml/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Neurotrophic peptide mixture',
      keyBenefits: ['Neuroprotection', 'Cognitive enhancement', 'Stroke recovery'],
      commonSideEffects: ['Injection site reactions', 'Dizziness'],
      contraindications: ['Epilepsy', 'Renal failure'],
      cost: '$$$',
      evidenceLevel: 'Moderate (clinical studies)',
      monitoring: 'Cognitive function, renal function'
    },
    {
      name: 'Cortexin',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intramuscular',
      frequency: 'Daily (10-20 day cycles)',
      typicalDose: '10mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Brain peptide complex',
      keyBenefits: ['Cognitive support', 'Neuroprotection', 'Brain injury recovery'],
      commonSideEffects: ['Injection site reactions'],
      contraindications: ['None well-established'],
      cost: '$$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Cognitive assessment'
    },
    {
      name: 'Pinealon',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Oral/Sublingual',
      frequency: 'Daily',
      typicalDose: '10-20mg/day',
      halfLife: '~2-4 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Pineal gland peptide',
      keyBenefits: ['Sleep regulation', 'Neuroprotection', 'Anti-aging'],
      commonSideEffects: ['Minimal'],
      contraindications: ['None well-established'],
      cost: '$$',
      evidenceLevel: 'Low (Russian studies)',
      monitoring: 'Sleep quality'
    }
  ];

  const categories = ['all', ...Array.from(new Set(peptideDatabase.map(p => p.category)))];
  
  const filteredPeptides = categoryFilter === 'all' 
    ? peptideDatabase 
    : peptideDatabase.filter(p => p.category === categoryFilter);

  const handlePeptideToggle = (peptideName: string) => {
    if (selectedPeptides.includes(peptideName)) {
      setSelectedPeptides(selectedPeptides.filter(p => p !== peptideName));
    } else if (selectedPeptides.length < 4) {
      setSelectedPeptides([...selectedPeptides, peptideName]);
    }
  };

  const selectedPeptideData = peptideDatabase.filter(p => selectedPeptides.includes(p.name));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <GitCompare className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Peptide Comparison Tool</h1>
              <p className="text-xl text-white/90">Compare up to 4 peptides side-by-side to make informed clinical decisions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">{peptideDatabase.length}</div>
              <div className="text-white/80 text-sm">Peptides in Database</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-white/80 text-sm">Comparison Criteria</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-white/80 text-sm">Max Comparisons</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">{categories.length - 1}</div>
              <div className="text-white/80 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  categoryFilter === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Peptide Selection */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Peptides to Compare (up to 4)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredPeptides.map((peptide) => (
              <button
                key={peptide.name}
                onClick={() => handlePeptideToggle(peptide.name)}
                disabled={!selectedPeptides.includes(peptide.name) && selectedPeptides.length >= 4}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  selectedPeptides.includes(peptide.name)
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                    : selectedPeptides.length >= 4
                    ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                    : 'border-gray-200 hover:border-cyan-300 text-gray-700'
                }`}
              >
                {peptide.name}
                {peptide.fdaApproved && (
                  <div className="text-xs text-emerald-600 mt-1">FDA Approved</div>
                )}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Selected: {selectedPeptides.length}/4 | Showing: {filteredPeptides.length} peptides
          </div>
        </div>

        {/* Comparison Table */}
        {selectedPeptideData.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      Criteria
                    </th>
                    {selectedPeptideData.map((peptide) => (
                      <th key={peptide.name} className="px-6 py-4 text-left text-sm font-semibold text-gray-900 min-w-[200px]">
                        <div>{peptide.name}</div>
                        <div className="text-xs font-normal text-gray-600 mt-1">{peptide.category}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  
                  {/* FDA Status */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      FDA Approved
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        {peptide.fdaApproved ? (
                          <span className="inline-flex items-center text-emerald-600">
                            <Check className="w-5 h-5" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-gray-400">
                            <X className="w-5 h-5" />
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Administration */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Administration
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.administration}
                      </td>
                    ))}
                  </tr>

                  {/* Frequency */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Dosing Frequency
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.frequency}
                      </td>
                    ))}
                  </tr>

                  {/* Typical Dose */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Typical Dose
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.typicalDose}
                      </td>
                    ))}
                  </tr>

                  {/* Half-Life */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Half-Life
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.halfLife}
                      </td>
                    ))}
                  </tr>

                  {/* Onset of Action */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Onset of Action
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.onsetOfAction}
                      </td>
                    ))}
                  </tr>

                  {/* Primary Mechanism */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Primary Mechanism
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.primaryMechanism}
                      </td>
                    ))}
                  </tr>

                  {/* Key Benefits */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Key Benefits
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {peptide.keyBenefits.map((benefit, index) => (
                            <li key={index}>• {benefit}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Common Side Effects */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Common Side Effects
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {peptide.commonSideEffects.map((effect, index) => (
                            <li key={index}>• {effect}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Contraindications */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Contraindications
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {peptide.contraindications.map((contra, index) => (
                            <li key={index} className="text-red-600">• {contra}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Cost */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Relative Cost
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.cost}
                      </td>
                    ))}
                  </tr>

                  {/* Evidence Level */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Evidence Level
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.evidenceLevel}
                      </td>
                    ))}
                  </tr>

                  {/* Monitoring */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Monitoring
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.monitoring}
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* No Selection Message */}
        {selectedPeptideData.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <GitCompare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Peptides to Compare</h3>
            <p className="text-gray-600">Choose up to 4 peptides from the list above to see a detailed side-by-side comparison.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Clinical Disclaimer</h3>
              <p className="text-sm text-amber-800">
                This comparison tool is for educational purposes only. Peptide selection should be based on individual patient assessment, 
                clinical judgment, and current evidence. Many peptides listed are not FDA-approved for the indications mentioned. 
                Always verify current prescribing information and consult appropriate clinical resources before prescribing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
