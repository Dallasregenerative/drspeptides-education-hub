import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, CheckCircle2, Info, XCircle, Plus, X } from 'lucide-react';

interface Interaction {
  severity: 'major' | 'moderate' | 'minor' | 'synergistic';
  description: string;
  recommendation: string;
}

interface ContraIndication {
  condition: string;
  severity: 'absolute' | 'relative';
  reason: string;
}

interface MedicationInteraction {
  keywords: string[]; // multiple keywords to match against user input
  severity: 'major' | 'moderate' | 'minor';
  description: string;
  recommendation: string;
}

interface PeptideEntry {
  name: string;
  interactions: Record<string, Interaction>;
  medicationInteractions: MedicationInteraction[];
  contraindications: ContraIndication[];
  conditionInteractions: Array<{
    conditions: string[];
    severity: 'major' | 'moderate' | 'minor';
    description: string;
    recommendation: string;
  }>;
}

const peptideDatabase: Record<string, PeptideEntry> = {
  'bpc-157': {
    name: 'BPC-157',
    interactions: {
      'tb-500': { severity: 'synergistic', description: 'Synergistic healing effects when combined', recommendation: 'Often stacked together for enhanced tissue repair and recovery' },
      'ghk-cu': { severity: 'synergistic', description: 'Complementary wound healing and tissue repair mechanisms', recommendation: 'Can be combined for enhanced recovery' },
    },
    medicationInteractions: [
      { keywords: ['nsaid', 'ibuprofen', 'naproxen', 'advil', 'aleve', 'motrin', 'aspirin', 'celecoxib', 'celebrex', 'diclofenac', 'meloxicam', 'indomethacin'], severity: 'moderate', description: 'NSAIDs may reduce effectiveness of BPC-157 by interfering with its gastroprotective and anti-inflammatory mechanisms', recommendation: 'Consider timing NSAIDs at least 2 hours away from BPC-157 administration' },
      { keywords: ['corticosteroid', 'prednisone', 'prednisolone', 'dexamethasone', 'methylprednisolone', 'hydrocortisone', 'cortisone'], severity: 'moderate', description: 'Corticosteroids may counteract BPC-157 healing effects through immunosuppression', recommendation: 'Use caution when combining; monitor healing progress closely' },
      { keywords: ['anticoagulant', 'warfarin', 'coumadin', 'heparin', 'enoxaparin', 'lovenox', 'rivaroxaban', 'xarelto', 'apixaban', 'eliquis', 'blood thinner'], severity: 'minor', description: 'BPC-157 may have mild effects on blood vessel formation which could theoretically interact with anticoagulants', recommendation: 'Monitor for unusual bleeding; generally considered low risk' },
      { keywords: ['metformin', 'glucophage', 'insulin', 'glipizide', 'glyburide', 'glimepiride', 'diabetes medication'], severity: 'minor', description: 'BPC-157 has shown insulin-sensitizing properties in preclinical studies — may mildly enhance blood glucose lowering effects of diabetes medications', recommendation: 'Generally considered safe to combine; monitor blood glucose during initial weeks of BPC-157 therapy' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Growth-promoting and angiogenic effects may theoretically promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data in pregnancy' },
      { condition: 'Breastfeeding', severity: 'absolute', reason: 'Insufficient safety data during lactation' },
    ],
    conditionInteractions: [
      { conditions: ['Cancer (active)'], severity: 'moderate', description: 'BPC-157 promotes angiogenesis which may be contraindicated in active malignancy', recommendation: 'Avoid use in patients with active cancer; consult oncologist' },
      { conditions: ['Diabetes'], severity: 'minor', description: 'BPC-157 has shown insulin-sensitizing properties in animal studies — may enhance blood glucose lowering effects of diabetes medications', recommendation: 'Generally considered safe; monitor blood glucose when starting therapy' },
    ],
  },
  'semaglutide': {
    name: 'Semaglutide',
    interactions: {
      'bpc-157': { severity: 'synergistic', description: 'BPC-157 may reduce GI side effects of semaglutide through gastroprotective effects', recommendation: 'Can be combined to improve GI tolerability' },
      'tirzepatide': { severity: 'major', description: 'Both are incretin-based therapies — combining increases risk of severe GI effects and hypoglycemia', recommendation: 'Do NOT combine. Choose one GLP-1 agonist' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog', 'novolog', 'levemir', 'tresiba', 'glargine', 'lispro', 'aspart'], severity: 'major', description: 'Increased risk of hypoglycemia when combined with insulin', recommendation: 'Reduce insulin dose by 20-50% when initiating semaglutide; monitor glucose closely' },
      { keywords: ['sulfonylurea', 'glipizide', 'glyburide', 'glimepiride', 'glibenclamide'], severity: 'major', description: 'Increased risk of hypoglycemia when combined with sulfonylureas', recommendation: 'Consider reducing sulfonylurea dose by 50%; monitor blood glucose frequently' },
      { keywords: ['metformin', 'glucophage'], severity: 'minor', description: 'Generally safe combination; both lower blood glucose through different mechanisms', recommendation: 'Monitor for GI side effects as both can cause nausea; may need to reduce metformin if GI issues worsen' },
      { keywords: ['oral contraceptive', 'birth control pill', 'ethinyl estradiol', 'levonorgestrel', 'norethindrone'], severity: 'moderate', description: 'Delayed gastric emptying may reduce oral contraceptive absorption', recommendation: 'Consider non-oral contraception or take oral contraceptives 1 hour before semaglutide' },
      { keywords: ['warfarin', 'coumadin'], severity: 'moderate', description: 'Delayed gastric emptying may affect warfarin absorption and INR stability', recommendation: 'Monitor INR more frequently when starting/adjusting semaglutide; adjust warfarin as needed' },
      { keywords: ['levothyroxine', 'synthroid', 'thyroid'], severity: 'moderate', description: 'Delayed gastric emptying may affect levothyroxine absorption', recommendation: 'Take levothyroxine on empty stomach at least 30 min before semaglutide; monitor TSH' },
    ],
    contraindications: [
      { condition: 'Personal/family history of medullary thyroid carcinoma', severity: 'absolute', reason: 'Black box warning for thyroid C-cell tumors in animal studies' },
      { condition: 'Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)', severity: 'absolute', reason: 'Increased risk of medullary thyroid carcinoma' },
      { condition: 'Severe gastroparesis', severity: 'relative', reason: 'May worsen gastric emptying delay' },
      { condition: 'Pancreatitis history', severity: 'relative', reason: 'Potential increased risk of pancreatitis' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Discontinue at least 2 months before planned pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'Semaglutide lowers blood glucose — patients on diabetes medications need dose adjustments', recommendation: 'Reduce insulin/sulfonylurea doses; increase glucose monitoring frequency' },
      { conditions: ['Kidney disease'], severity: 'moderate', description: 'GI side effects (nausea, vomiting, diarrhea) can cause dehydration and worsen renal function', recommendation: 'Ensure adequate hydration; monitor renal function; slower dose titration recommended' },
      { conditions: ['Pancreatitis history'], severity: 'moderate', description: 'GLP-1 agonists may increase pancreatitis risk in susceptible patients', recommendation: 'Monitor for signs of pancreatitis (severe abdominal pain); discontinue if suspected' },
      { conditions: ['Gastroparesis'], severity: 'moderate', description: 'Semaglutide delays gastric emptying which may worsen gastroparesis symptoms', recommendation: 'Use with extreme caution; consider alternative weight management approaches' },
      { conditions: ['Thyroid disorder'], severity: 'minor', description: 'Monitor thyroid function as GLP-1 agonists have thyroid C-cell warnings', recommendation: 'Regular thyroid monitoring; report any neck swelling or difficulty swallowing' },
    ],
  },
  'cjc-1295': {
    name: 'CJC-1295',
    interactions: {
      'ipamorelin': { severity: 'synergistic', description: 'Synergistic growth hormone release — CJC-1295 provides sustained GHRH while Ipamorelin provides pulsatile GH release', recommendation: 'Commonly stacked for optimal GH optimization; inject together before bed' },
      'sermorelin': { severity: 'minor', description: 'Both are GHRH analogs — redundant mechanisms', recommendation: 'Generally choose one GHRH analog; combining may not add benefit' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog', 'novolog'], severity: 'moderate', description: 'Growth hormone can cause insulin resistance, potentially requiring insulin dose adjustment', recommendation: 'Monitor blood glucose; may need to increase insulin dose by 10-20%' },
      { keywords: ['corticosteroid', 'prednisone', 'prednisolone', 'dexamethasone'], severity: 'moderate', description: 'Corticosteroids may blunt GH response and both can affect glucose metabolism', recommendation: 'Monitor glucose and GH/IGF-1 levels; may reduce effectiveness of CJC-1295' },
      { keywords: ['levothyroxine', 'synthroid', 'thyroid'], severity: 'minor', description: 'GH can affect thyroid hormone metabolism (T4 to T3 conversion)', recommendation: 'Monitor thyroid levels periodically; may need thyroid dose adjustment' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'absolute', reason: 'Growth hormone may promote tumor growth via IGF-1 pathway' },
      { condition: 'Diabetic retinopathy', severity: 'relative', reason: 'GH/IGF-1 elevation may worsen retinopathy' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'GH secretagogues can increase insulin resistance and raise blood glucose', recommendation: 'Monitor glucose closely; may need diabetes medication adjustment' },
      { conditions: ['Cancer (active)', 'Cancer (history)'], severity: 'major', description: 'Elevated IGF-1 from GH secretagogues may promote cancer cell growth', recommendation: 'Contraindicated in active cancer; use with extreme caution in cancer history patients' },
    ],
  },
  'ipamorelin': {
    name: 'Ipamorelin',
    interactions: {
      'cjc-1295': { severity: 'synergistic', description: 'Synergistic growth hormone release', recommendation: 'Commonly stacked for optimal GH optimization' },
      'ghrp-2': { severity: 'minor', description: 'Both are GH secretagogues — may cause excessive GH elevation', recommendation: 'Choose one GHRP; combining may increase side effects without proportional benefit' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'GH release can cause insulin resistance', recommendation: 'Monitor blood glucose; adjust insulin as needed' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'absolute', reason: 'GH/IGF-1 elevation may promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'GH secretagogues can increase insulin resistance', recommendation: 'Monitor glucose closely; may need medication adjustment' },
    ],
  },
  'semax': {
    name: 'Semax',
    interactions: {
      'selank': { severity: 'synergistic', description: 'Complementary cognitive and mood effects — Semax for focus, Selank for anxiety reduction', recommendation: 'Often combined for enhanced nootropic benefits' },
    },
    medicationInteractions: [
      { keywords: ['stimulant', 'adderall', 'ritalin', 'methylphenidate', 'amphetamine', 'modafinil', 'vyvanse', 'concerta', 'dextroamphetamine'], severity: 'moderate', description: 'May potentiate stimulant effects on focus and alertness', recommendation: 'Start with lower stimulant doses; monitor for overstimulation, anxiety, or insomnia' },
      { keywords: ['ssri', 'sertraline', 'zoloft', 'fluoxetine', 'prozac', 'escitalopram', 'lexapro', 'paroxetine', 'paxil', 'citalopram', 'celexa'], severity: 'minor', description: 'Semax affects BDNF and serotonergic pathways which may interact with SSRIs', recommendation: 'Generally safe; monitor for mood changes during initial combination' },
      { keywords: ['maoi', 'selegiline', 'phenelzine', 'tranylcypromine'], severity: 'moderate', description: 'Semax affects catecholamine metabolism which may interact with MAOIs', recommendation: 'Use with caution; monitor blood pressure and mood' },
    ],
    contraindications: [
      { condition: 'Severe anxiety disorders', severity: 'relative', reason: 'May increase anxiety in sensitive individuals at higher doses' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'selank': {
    name: 'Selank',
    interactions: {
      'semax': { severity: 'synergistic', description: 'Complementary cognitive and mood effects', recommendation: 'Often combined for enhanced nootropic benefits' },
    },
    medicationInteractions: [
      { keywords: ['benzodiazepine', 'diazepam', 'valium', 'lorazepam', 'ativan', 'alprazolam', 'xanax', 'clonazepam', 'klonopin'], severity: 'moderate', description: 'Selank has anxiolytic effects that may potentiate benzodiazepine sedation', recommendation: 'May allow lower benzodiazepine doses; monitor for excessive sedation' },
      { keywords: ['ssri', 'sertraline', 'zoloft', 'fluoxetine', 'prozac', 'escitalopram', 'lexapro'], severity: 'minor', description: 'Selank modulates GABA and serotonin pathways', recommendation: 'Generally safe combination; monitor mood and anxiety levels' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'tb-500': {
    name: 'TB-500',
    interactions: {
      'bpc-157': { severity: 'synergistic', description: 'Synergistic tissue repair and healing through complementary mechanisms', recommendation: 'Commonly stacked for injury recovery' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin', 'coumadin', 'heparin', 'enoxaparin', 'rivaroxaban', 'xarelto', 'apixaban', 'eliquis', 'blood thinner'], severity: 'moderate', description: 'TB-500 promotes blood vessel formation and may increase bleeding risk with anticoagulants', recommendation: 'Monitor for unusual bleeding; consider INR monitoring if on warfarin' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Growth-promoting and angiogenic effects may be contraindicated' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Cancer (active)'], severity: 'moderate', description: 'TB-500 promotes angiogenesis which may support tumor growth', recommendation: 'Avoid use in patients with active cancer' },
    ],
  },
  'epithalon': {
    name: 'Epithalon',
    interactions: {},
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'cyclosporine', 'tacrolimus', 'mycophenolate', 'azathioprine'], severity: 'moderate', description: 'Epithalon may modulate immune function through pineal gland effects', recommendation: 'Monitor immune markers; consult with transplant team if applicable' },
    ],
    contraindications: [
      { condition: 'Autoimmune disease', severity: 'relative', reason: 'Immune-modulating effects may affect autoimmune conditions' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Autoimmune disease'], severity: 'minor', description: 'Epithalon may modulate immune function which could affect autoimmune conditions', recommendation: 'Monitor autoimmune markers; use with caution' },
    ],
  },
  'thymosin-alpha-1': {
    name: 'Thymosin Alpha-1',
    interactions: {
      'll-37': { severity: 'synergistic', description: 'Complementary immune-boosting mechanisms', recommendation: 'Can be combined for comprehensive immune support' },
    },
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'cyclosporine', 'tacrolimus', 'mycophenolate', 'azathioprine', 'prednisone'], severity: 'major', description: 'Thymosin Alpha-1 stimulates immune function which directly opposes immunosuppressant therapy', recommendation: 'Contraindicated with immunosuppressants in transplant patients; consult specialist' },
      { keywords: ['interferon', 'peginterferon'], severity: 'synergistic' as any, description: 'May enhance antiviral effects of interferon therapy', recommendation: 'Has been studied in combination for hepatitis; monitor liver function' },
    ],
    contraindications: [
      { condition: 'Organ transplant', severity: 'absolute', reason: 'Immune stimulation may trigger rejection' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Autoimmune disease'], severity: 'moderate', description: 'Immune stimulation may exacerbate autoimmune conditions', recommendation: 'Use with caution; monitor autoimmune markers closely' },
    ],
  },
  'pt-141': {
    name: 'PT-141 (Bremelanotide)',
    interactions: {},
    medicationInteractions: [
      { keywords: ['pde5 inhibitor', 'sildenafil', 'viagra', 'tadalafil', 'cialis', 'vardenafil', 'levitra'], severity: 'moderate', description: 'Combining melanocortin agonists with PDE5 inhibitors may cause excessive vasodilation and hypotension', recommendation: 'Use with caution; monitor blood pressure; do not combine if patient has cardiovascular risk' },
      { keywords: ['antihypertensive', 'blood pressure', 'lisinopril', 'amlodipine', 'losartan', 'metoprolol', 'atenolol'], severity: 'minor', description: 'PT-141 can cause transient blood pressure changes', recommendation: 'Monitor blood pressure; generally safe but be aware of additive hypotensive effects' },
    ],
    contraindications: [
      { condition: 'Uncontrolled hypertension', severity: 'relative', reason: 'Can cause transient blood pressure elevation' },
      { condition: 'Heart disease', severity: 'relative', reason: 'Cardiovascular effects require caution' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Contraindicated in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Heart disease', 'Hypertension'], severity: 'moderate', description: 'PT-141 can cause transient blood pressure changes', recommendation: 'Monitor blood pressure before and after use; start with lowest dose' },
    ],
  },
  'aod-9604': {
    name: 'AOD-9604',
    interactions: {},
    medicationInteractions: [
      { keywords: ['metformin', 'glucophage'], severity: 'minor', description: 'Both affect metabolic pathways; generally safe combination', recommendation: 'Monitor blood glucose; may enhance metabolic effects' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Growth hormone fragment — theoretical concern' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'ghk-cu': {
    name: 'GHK-Cu',
    interactions: {
      'bpc-157': { severity: 'synergistic', description: 'Complementary wound healing mechanisms', recommendation: 'Can be combined for enhanced tissue repair' },
    },
    medicationInteractions: [],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'dsip': {
    name: 'DSIP',
    interactions: {},
    medicationInteractions: [
      { keywords: ['benzodiazepine', 'diazepam', 'valium', 'lorazepam', 'ativan', 'alprazolam', 'xanax', 'zolpidem', 'ambien', 'sleep aid', 'sleeping pill'], severity: 'moderate', description: 'DSIP promotes sleep and may potentiate sedative effects', recommendation: 'Reduce sedative doses; monitor for excessive drowsiness' },
      { keywords: ['opioid', 'morphine', 'oxycodone', 'hydrocodone', 'fentanyl', 'codeine', 'tramadol'], severity: 'moderate', description: 'Combined sedative effects may increase respiratory depression risk', recommendation: 'Use with extreme caution; monitor respiratory function' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'll-37': {
    name: 'LL-37',
    interactions: {
      'thymosin-alpha-1': { severity: 'synergistic', description: 'Complementary antimicrobial and immune-boosting effects', recommendation: 'Can be combined for comprehensive immune support' },
    },
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'cyclosporine', 'tacrolimus'], severity: 'moderate', description: 'LL-37 stimulates innate immune function which may oppose immunosuppression', recommendation: 'Use with caution in immunosuppressed patients; consult specialist' },
    ],
    contraindications: [
      { condition: 'Autoimmune disease', severity: 'relative', reason: 'Immune stimulation may exacerbate autoimmune conditions' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'tirzepatide': {
    name: 'Tirzepatide',
    interactions: {
      'semaglutide': { severity: 'major', description: 'Both are incretin-based therapies — combining increases risk of severe GI effects and hypoglycemia', recommendation: 'Do NOT combine. Choose one GLP-1/GIP agonist' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog', 'novolog', 'levemir', 'tresiba'], severity: 'major', description: 'Increased risk of hypoglycemia when combined with insulin', recommendation: 'Reduce insulin dose by 20-50% when initiating tirzepatide; monitor glucose closely' },
      { keywords: ['sulfonylurea', 'glipizide', 'glyburide', 'glimepiride'], severity: 'major', description: 'Increased risk of hypoglycemia', recommendation: 'Consider reducing sulfonylurea dose by 50%; monitor blood glucose frequently' },
      { keywords: ['metformin', 'glucophage'], severity: 'minor', description: 'Generally safe combination; complementary mechanisms', recommendation: 'Monitor for GI side effects; may need to reduce metformin if GI issues worsen' },
      { keywords: ['oral contraceptive', 'birth control pill'], severity: 'moderate', description: 'Delayed gastric emptying may reduce oral contraceptive absorption', recommendation: 'Consider non-oral contraception or take oral contraceptives 1 hour before tirzepatide' },
      { keywords: ['levothyroxine', 'synthroid', 'thyroid'], severity: 'moderate', description: 'Delayed gastric emptying may affect levothyroxine absorption', recommendation: 'Take levothyroxine on empty stomach; monitor TSH' },
    ],
    contraindications: [
      { condition: 'Personal/family history of medullary thyroid carcinoma', severity: 'absolute', reason: 'Black box warning for thyroid C-cell tumors' },
      { condition: 'MEN 2', severity: 'absolute', reason: 'Increased risk of medullary thyroid carcinoma' },
      { condition: 'Severe gastroparesis', severity: 'relative', reason: 'May worsen gastric emptying delay' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Discontinue at least 2 months before planned pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'Tirzepatide lowers blood glucose — patients on diabetes medications need dose adjustments', recommendation: 'Reduce insulin/sulfonylurea doses; increase glucose monitoring' },
      { conditions: ['Kidney disease'], severity: 'moderate', description: 'GI side effects can cause dehydration and worsen renal function', recommendation: 'Ensure adequate hydration; monitor renal function' },
      { conditions: ['Pancreatitis history'], severity: 'moderate', description: 'May increase pancreatitis risk', recommendation: 'Monitor for signs of pancreatitis; discontinue if suspected' },
    ],
  },
  'sermorelin': {
    name: 'Sermorelin',
    interactions: {
      'cjc-1295': { severity: 'minor', description: 'Both are GHRH analogs — redundant mechanisms', recommendation: 'Choose one GHRH analog; combining may not add benefit' },
      'ipamorelin': { severity: 'synergistic', description: 'Complementary GH release mechanisms', recommendation: 'Can be combined for enhanced GH optimization' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'GH release can cause insulin resistance', recommendation: 'Monitor blood glucose; may need insulin adjustment' },
      { keywords: ['corticosteroid', 'prednisone'], severity: 'moderate', description: 'Corticosteroids may blunt GH response', recommendation: 'Monitor GH/IGF-1 levels' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'absolute', reason: 'GH may promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'GH secretagogues can increase insulin resistance', recommendation: 'Monitor glucose closely' },
      { conditions: ['Cancer (active)'], severity: 'major', description: 'Elevated IGF-1 may promote cancer growth', recommendation: 'Contraindicated in active cancer' },
    ],
  },
  'tesamorelin': {
    name: 'Tesamorelin',
    interactions: {
      'cjc-1295': { severity: 'minor', description: 'Both stimulate GH release — may be redundant', recommendation: 'Generally choose one GHRH analog' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'GH release can cause insulin resistance', recommendation: 'Monitor blood glucose; adjust insulin as needed' },
      { keywords: ['corticosteroid', 'prednisone'], severity: 'moderate', description: 'May reduce tesamorelin effectiveness', recommendation: 'Monitor GH/IGF-1 levels' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'absolute', reason: 'GH may promote tumor growth via IGF-1' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Contraindicated in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'May increase insulin resistance', recommendation: 'Monitor glucose; adjust diabetes medications' },
    ],
  },
  'mots-c': {
    name: 'MOTS-c',
    interactions: {},
    medicationInteractions: [
      { keywords: ['metformin', 'glucophage'], severity: 'minor', description: 'Both activate AMPK pathway — potentially synergistic but monitor for additive effects', recommendation: 'Generally safe; monitor blood glucose' },
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'MOTS-c improves insulin sensitivity which may potentiate insulin effects', recommendation: 'Monitor blood glucose; may need to reduce insulin dose' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'minor', description: 'MOTS-c improves insulin sensitivity and glucose metabolism', recommendation: 'May be beneficial but monitor glucose and adjust medications' },
    ],
  },
  'nad-plus': {
    name: 'NAD+ (injection)',
    interactions: {},
    medicationInteractions: [
      { keywords: ['chemotherapy', 'cisplatin', 'carboplatin', 'doxorubicin'], severity: 'moderate', description: 'NAD+ may affect cancer cell metabolism and potentially interfere with chemotherapy', recommendation: 'Consult oncologist before combining; avoid during active chemotherapy' },
      { keywords: ['niacin', 'nicotinic acid', 'vitamin b3'], severity: 'minor', description: 'Additive NAD+ precursor effects — may cause flushing', recommendation: 'Monitor for flushing; generally safe' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'NAD+ may support cancer cell metabolism' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'melanotan-ii': {
    name: 'Melanotan II',
    interactions: {
      'pt-141': { severity: 'minor', description: 'Both are melanocortin receptor agonists — overlapping effects', recommendation: 'Choose one; PT-141 is more selective for sexual function' },
    },
    medicationInteractions: [
      { keywords: ['antihypertensive', 'blood pressure', 'lisinopril', 'amlodipine', 'losartan'], severity: 'minor', description: 'Melanotan II can cause transient blood pressure changes', recommendation: 'Monitor blood pressure' },
    ],
    contraindications: [
      { condition: 'Melanoma history', severity: 'absolute', reason: 'Melanocortin stimulation may promote melanocyte proliferation' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Contraindicated in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'kvp': {
    name: 'KPV',
    interactions: {
      'bpc-157': { severity: 'synergistic', description: 'Complementary anti-inflammatory and gut healing effects', recommendation: 'Can be combined for enhanced GI healing' },
    },
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'cyclosporine', 'tacrolimus'], severity: 'minor', description: 'KPV has anti-inflammatory effects that may complement immunosuppression', recommendation: 'Generally safe; monitor immune markers' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'humanin': {
    name: 'Humanin',
    interactions: {
      'mots-c': { severity: 'synergistic', description: 'Both are mitochondrial-derived peptides with complementary cytoprotective effects', recommendation: 'Can be combined for enhanced mitochondrial support' },
    },
    medicationInteractions: [
      { keywords: ['statin', 'atorvastatin', 'rosuvastatin', 'simvastatin', 'pravastatin', 'lipitor', 'crestor'], severity: 'minor', description: 'Humanin may help mitigate statin-induced mitochondrial dysfunction', recommendation: 'Potentially beneficial combination; monitor liver function' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'noopept': {
    name: 'Noopept',
    interactions: {
      'semax': { severity: 'synergistic', description: 'Complementary cognitive enhancement through different mechanisms', recommendation: 'Can be combined for enhanced cognitive effects' },
    },
    medicationInteractions: [
      { keywords: ['ssri', 'sertraline', 'zoloft', 'fluoxetine', 'prozac', 'escitalopram', 'lexapro'], severity: 'minor', description: 'Noopept may modulate serotonergic pathways', recommendation: 'Generally safe; monitor mood' },
      { keywords: ['stimulant', 'adderall', 'ritalin', 'modafinil'], severity: 'minor', description: 'May potentiate cognitive stimulant effects', recommendation: 'Start with lower doses; monitor for overstimulation' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [],
  },
  'vip': {
    name: 'VIP (Vasoactive Intestinal Peptide)',
    interactions: {},
    medicationInteractions: [
      { keywords: ['antihypertensive', 'blood pressure', 'lisinopril', 'amlodipine', 'losartan', 'metoprolol'], severity: 'moderate', description: 'VIP is a potent vasodilator — may cause additive hypotension with antihypertensives', recommendation: 'Monitor blood pressure closely; may need to reduce antihypertensive dose' },
    ],
    contraindications: [
      { condition: 'Hypotension', severity: 'relative', reason: 'VIP causes vasodilation which may worsen low blood pressure' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data' },
    ],
    conditionInteractions: [
      { conditions: ['Heart disease', 'Hypertension'], severity: 'moderate', description: 'VIP causes vasodilation and blood pressure changes', recommendation: 'Monitor blood pressure; start with lowest dose' },
    ],
  },
  'oxytocin': {
    name: 'Oxytocin',
    interactions: {},
    medicationInteractions: [
      { keywords: ['ssri', 'sertraline', 'zoloft', 'fluoxetine', 'prozac', 'escitalopram', 'lexapro'], severity: 'minor', description: 'SSRIs may affect oxytocin receptor sensitivity', recommendation: 'Generally safe; may enhance mood benefits' },
      { keywords: ['antihypertensive', 'blood pressure'], severity: 'minor', description: 'Oxytocin may cause mild blood pressure changes', recommendation: 'Monitor blood pressure' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Oxytocin can induce labor contractions' },
    ],
    conditionInteractions: [],
  },
  'retatrutide': {
    name: 'Retatrutide',
    interactions: {
      'semaglutide': { severity: 'major', description: 'Both target GLP-1 receptors — combining increases risk of severe GI effects', recommendation: 'Do NOT combine. Choose one incretin-based therapy' },
      'tirzepatide': { severity: 'major', description: 'Both target GLP-1 receptors — combining increases risk of severe GI effects', recommendation: 'Do NOT combine. Choose one incretin-based therapy' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'major', description: 'Increased risk of hypoglycemia', recommendation: 'Reduce insulin dose by 20-50%; monitor glucose closely' },
      { keywords: ['sulfonylurea', 'glipizide', 'glyburide'], severity: 'major', description: 'Increased risk of hypoglycemia', recommendation: 'Reduce sulfonylurea dose by 50%' },
      { keywords: ['levothyroxine', 'synthroid'], severity: 'moderate', description: 'Delayed gastric emptying may affect absorption', recommendation: 'Take levothyroxine on empty stomach; monitor TSH' },
    ],
    contraindications: [
      { condition: 'Personal/family history of medullary thyroid carcinoma', severity: 'absolute', reason: 'Thyroid C-cell tumor risk' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Contraindicated in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'Retatrutide lowers blood glucose — medication adjustments needed', recommendation: 'Reduce insulin/sulfonylurea doses; monitor glucose' },
    ],
  },
  'tesofensine': {
    name: 'Tesofensine',
    interactions: {},
    medicationInteractions: [
      { keywords: ['ssri', 'sertraline', 'zoloft', 'fluoxetine', 'prozac'], severity: 'major', description: 'Tesofensine inhibits serotonin reuptake — combining with SSRIs increases serotonin syndrome risk', recommendation: 'Avoid combination; high risk of serotonin syndrome' },
      { keywords: ['maoi', 'selegiline', 'phenelzine'], severity: 'major', description: 'Tesofensine affects monoamine reuptake — combining with MAOIs is extremely dangerous', recommendation: 'Absolutely contraindicated; risk of hypertensive crisis and serotonin syndrome' },
      { keywords: ['stimulant', 'adderall', 'ritalin', 'amphetamine', 'modafinil'], severity: 'major', description: 'Additive stimulant effects — risk of cardiovascular events', recommendation: 'Avoid combination; monitor heart rate and blood pressure if unavoidable' },
      { keywords: ['antihypertensive', 'blood pressure'], severity: 'moderate', description: 'Tesofensine can increase heart rate and blood pressure', recommendation: 'Monitor cardiovascular parameters closely' },
    ],
    contraindications: [
      { condition: 'Heart disease', severity: 'relative', reason: 'Can increase heart rate and blood pressure' },
      { condition: 'Uncontrolled hypertension', severity: 'absolute', reason: 'Cardiovascular stimulant effects' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Contraindicated in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Heart disease', 'Hypertension'], severity: 'moderate', description: 'Tesofensine increases heart rate and blood pressure', recommendation: 'Monitor cardiovascular parameters; may be contraindicated' },
    ],
  },
  'fragment-176-191': {
    name: 'Fragment 176-191',
    interactions: {
      'aod-9604': { severity: 'minor', description: 'Both target fat metabolism through similar GH-related mechanisms — redundant effects', recommendation: 'Choose one; combining unlikely to provide additional benefit' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'May affect glucose metabolism through GH fragment activity', recommendation: 'Monitor blood glucose; adjust insulin if needed' },
      { keywords: ['metformin'], severity: 'minor', description: 'Both may affect glucose metabolism; generally compatible', recommendation: 'Monitor blood glucose levels' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'GH fragments may theoretically promote cell growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'May affect blood glucose levels', recommendation: 'Monitor glucose closely; adjust diabetes medications as needed' },
    ],
  },
  'ghrp-2': {
    name: 'GHRP-2',
    interactions: {
      'cjc-1295': { severity: 'synergistic', description: 'GHRH + GHRP combination provides robust GH release through complementary mechanisms', recommendation: 'Standard combination; use together for optimal GH release' },
      'ipamorelin': { severity: 'minor', description: 'Both are GH secretagogues — redundant ghrelin receptor agonism', recommendation: 'Choose one GHRP; combining may increase side effects without proportional benefit' },
      'ghrp-6': { severity: 'minor', description: 'Both are GHRP peptides with similar mechanisms', recommendation: 'Choose one; GHRP-2 has less hunger stimulation than GHRP-6' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'GH release can cause insulin resistance', recommendation: 'Monitor blood glucose; may need insulin dose adjustment' },
      { keywords: ['corticosteroid', 'prednisone'], severity: 'moderate', description: 'Corticosteroids may blunt GH response', recommendation: 'Monitor GH/IGF-1 levels; may reduce GHRP-2 effectiveness' },
      { keywords: ['somatostatin', 'octreotide'], severity: 'major', description: 'Somatostatin analogs directly inhibit GH release', recommendation: 'Avoid combination; somatostatin will block GHRP-2 effects' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'GH elevation may promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'GH release can worsen insulin resistance', recommendation: 'Monitor glucose closely; adjust diabetes medications' },
    ],
  },
  'ghrp-6': {
    name: 'GHRP-6',
    interactions: {
      'cjc-1295': { severity: 'synergistic', description: 'GHRH + GHRP synergy for robust GH release', recommendation: 'Standard combination for GH optimization' },
      'ipamorelin': { severity: 'minor', description: 'Both are GHRPs — redundant mechanisms', recommendation: 'Choose one; GHRP-6 causes more hunger than Ipamorelin' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'GH release can cause insulin resistance', recommendation: 'Monitor blood glucose; may need insulin dose adjustment' },
      { keywords: ['corticosteroid', 'prednisone'], severity: 'moderate', description: 'May blunt GH response', recommendation: 'Monitor effectiveness' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'GH elevation may promote tumor growth' },
      { condition: 'Obesity', severity: 'relative', reason: 'GHRP-6 significantly increases appetite which may worsen obesity' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'GH release can worsen insulin resistance; increased appetite may affect blood sugar', recommendation: 'Monitor glucose; consider Ipamorelin instead for diabetic patients' },
    ],
  },
  'hexarelin': {
    name: 'Hexarelin',
    interactions: {
      'cjc-1295': { severity: 'synergistic', description: 'GHRH + GHRP synergy for potent GH release', recommendation: 'Effective combination; Hexarelin is the strongest GHRP' },
      'ipamorelin': { severity: 'minor', description: 'Both are GHRPs — redundant mechanisms', recommendation: 'Choose one; Hexarelin is stronger but has more side effects' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'Potent GH release can significantly affect insulin sensitivity', recommendation: 'Monitor blood glucose closely; likely need insulin adjustment' },
      { keywords: ['corticosteroid', 'prednisone'], severity: 'moderate', description: 'May reduce GH response', recommendation: 'Monitor IGF-1 levels' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Strong GH elevation may promote tumor growth' },
      { condition: 'Heart disease', severity: 'relative', reason: 'Hexarelin can increase cortisol and prolactin at high doses' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'Potent GH release worsens insulin resistance', recommendation: 'Monitor glucose; consider milder GHRP alternatives' },
    ],
  },
  'ibutamoren': {
    name: 'Ibutamoren (MK-677)',
    interactions: {
      'cjc-1295': { severity: 'minor', description: 'Both stimulate GH release — MK-677 is oral and long-acting', recommendation: 'Combining may cause excessive GH; choose one approach' },
      'ipamorelin': { severity: 'minor', description: 'Both are GH secretagogues through ghrelin receptor', recommendation: 'Redundant mechanisms; choose one' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'major', description: 'MK-677 significantly increases insulin resistance and blood glucose', recommendation: 'Monitor glucose very closely; likely need substantial insulin dose increase' },
      { keywords: ['metformin'], severity: 'moderate', description: 'MK-677 can counteract metformin glucose-lowering effects', recommendation: 'Monitor HbA1c and fasting glucose; may need metformin dose increase' },
      { keywords: ['corticosteroid', 'prednisone'], severity: 'moderate', description: 'Both can worsen glucose control', recommendation: 'Additive metabolic effects; monitor closely' },
    ],
    contraindications: [
      { condition: 'Diabetes (uncontrolled)', severity: 'relative', reason: 'Significantly worsens insulin resistance and blood glucose' },
      { condition: 'Active cancer', severity: 'relative', reason: 'Sustained GH/IGF-1 elevation may promote tumor growth' },
      { condition: 'Heart failure', severity: 'relative', reason: 'Can cause water retention and edema' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'major', description: 'MK-677 significantly worsens insulin resistance — one of the most impactful GH secretagogues on glucose', recommendation: 'Use with extreme caution in diabetics; frequent glucose monitoring required' },
      { conditions: ['Heart disease'], severity: 'moderate', description: 'Water retention and edema may worsen heart failure', recommendation: 'Monitor for edema; avoid in decompensated heart failure' },
    ],
  },
  'igf-1-lr3': {
    name: 'IGF-1 LR3',
    interactions: {
      'bpc-157': { severity: 'synergistic', description: 'BPC-157 upregulates GH receptors which may enhance IGF-1 signaling', recommendation: 'Potentially synergistic for tissue repair; monitor for excessive growth factor activity' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'major', description: 'IGF-1 has insulin-like effects — high risk of hypoglycemia when combined with insulin', recommendation: 'Reduce insulin dose significantly; monitor glucose every 2-4 hours' },
      { keywords: ['metformin'], severity: 'moderate', description: 'Additive glucose-lowering effects', recommendation: 'Monitor for hypoglycemia' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'absolute', reason: 'IGF-1 is a potent growth factor that can promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy; growth factor risks' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'major', description: 'IGF-1 has potent insulin-like hypoglycemic effects', recommendation: 'Requires careful glucose monitoring and diabetes medication adjustment' },
      { conditions: ['Cancer history'], severity: 'major', description: 'IGF-1 promotes cell proliferation', recommendation: 'Generally contraindicated in cancer patients or those with recent cancer history' },
    ],
  },
  'mgf': {
    name: 'MGF',
    interactions: {
      'igf-1-lr3': { severity: 'synergistic', description: 'MGF and IGF-1 work through complementary growth factor pathways for muscle repair', recommendation: 'Can be combined for injury recovery; use MGF immediately post-exercise, IGF-1 later' },
      'bpc-157': { severity: 'synergistic', description: 'Complementary tissue repair mechanisms', recommendation: 'Effective combination for muscle/tendon injuries' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'Growth factor activity may affect glucose metabolism', recommendation: 'Monitor blood glucose' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'absolute', reason: 'Growth factor may promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'cerebrolysin': {
    name: 'Cerebrolysin',
    interactions: {
      'semax': { severity: 'synergistic', description: 'Both promote BDNF and neuroplasticity through different mechanisms', recommendation: 'Can be combined for cognitive enhancement; monitor for overstimulation' },
      'noopept': { severity: 'synergistic', description: 'Complementary nootropic mechanisms', recommendation: 'Effective combination for cognitive support' },
    },
    medicationInteractions: [
      { keywords: ['antidepressant', 'ssri', 'sertraline', 'fluoxetine'], severity: 'minor', description: 'Both affect neurotransmitter systems; generally compatible', recommendation: 'Monitor mood and cognitive effects' },
      { keywords: ['anticoagulant', 'warfarin', 'heparin'], severity: 'minor', description: 'Cerebrolysin may have mild antiplatelet effects', recommendation: 'Monitor for increased bleeding risk' },
    ],
    contraindications: [
      { condition: 'Epilepsy', severity: 'relative', reason: 'May lower seizure threshold in susceptible individuals' },
      { condition: 'Severe kidney disease', severity: 'relative', reason: 'Peptide clearance may be impaired' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Epilepsy'], severity: 'moderate', description: 'May affect seizure threshold', recommendation: 'Use with caution; monitor seizure frequency' },
    ],
  },
  'dihexa': {
    name: 'Dihexa',
    interactions: {
      'cerebrolysin': { severity: 'synergistic', description: 'Complementary neurotrophic mechanisms — Dihexa via HGF, Cerebrolysin via BDNF/NGF', recommendation: 'Can be combined for cognitive enhancement' },
      'semax': { severity: 'synergistic', description: 'Both promote neuroplasticity through different pathways', recommendation: 'Monitor for cognitive overstimulation' },
    },
    medicationInteractions: [
      { keywords: ['antihypertensive', 'ace inhibitor', 'lisinopril', 'enalapril'], severity: 'moderate', description: 'Dihexa is an angiotensin IV analog — may interact with RAAS system medications', recommendation: 'Monitor blood pressure; may need antihypertensive dose adjustment' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'HGF pathway activation may promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy; HGF pathway concerns' },
    ],
    conditionInteractions: [
      { conditions: ['Hypertension'], severity: 'moderate', description: 'Angiotensin IV analog may affect blood pressure regulation', recommendation: 'Monitor blood pressure closely' },
    ],
  },
  'cortexin': {
    name: 'Cortexin',
    interactions: {
      'cerebrolysin': { severity: 'minor', description: 'Both are neuropeptide complexes with similar mechanisms', recommendation: 'Redundant; choose one neuropeptide complex' },
      'semax': { severity: 'synergistic', description: 'Complementary neuroprotective mechanisms', recommendation: 'Can be combined for cognitive support' },
    },
    medicationInteractions: [
      { keywords: ['anticonvulsant', 'carbamazepine', 'valproate', 'phenytoin'], severity: 'minor', description: 'May affect seizure threshold', recommendation: 'Monitor seizure control' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'p21': {
    name: 'P21',
    interactions: {
      'cerebrolysin': { severity: 'synergistic', description: 'P21 is a CNTF-derived peptide; complementary to Cerebrolysin neurotrophic effects', recommendation: 'Can be combined for neurogenesis support' },
      'semax': { severity: 'synergistic', description: 'Both promote BDNF and neuroplasticity', recommendation: 'Effective nootropic combination' },
    },
    medicationInteractions: [
      { keywords: ['antidepressant', 'ssri'], severity: 'minor', description: 'Both affect neurotransmitter systems', recommendation: 'Monitor mood effects' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'pinealon': {
    name: 'Pinealon',
    interactions: {
      'dsip': { severity: 'synergistic', description: 'Both support sleep architecture through different mechanisms', recommendation: 'Can be combined for sleep optimization' },
      'epithalon': { severity: 'synergistic', description: 'Both target pineal gland function — Epithalon for telomeres, Pinealon for melatonin', recommendation: 'Complementary pineal support' },
    },
    medicationInteractions: [
      { keywords: ['benzodiazepine', 'diazepam', 'lorazepam', 'alprazolam'], severity: 'moderate', description: 'Additive sedative effects', recommendation: 'Use caution; may enhance sedation' },
      { keywords: ['melatonin'], severity: 'minor', description: 'Pinealon supports endogenous melatonin; exogenous melatonin may be redundant', recommendation: 'May not need supplemental melatonin' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'na-semax': {
    name: 'NA-Semax',
    interactions: {
      'selank': { severity: 'synergistic', description: 'NA-Semax (cognitive) + Selank (anxiolytic) is a classic nootropic stack', recommendation: 'Well-established combination; use NA-Semax morning, Selank as needed for anxiety' },
      'semax': { severity: 'minor', description: 'NA-Semax is the acetylated form of Semax — redundant', recommendation: 'Choose one; NA-Semax is more potent and longer-lasting' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin', 'heparin', 'aspirin'], severity: 'minor', description: 'Semax analogs may have mild effects on coagulation', recommendation: 'Monitor if on anticoagulant therapy' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'kisspeptin': {
    name: 'Kisspeptin-10',
    interactions: {
      'pt-141': { severity: 'minor', description: 'Both affect sexual function through different pathways — Kisspeptin via GnRH, PT-141 via melanocortin', recommendation: 'Can be combined but monitor for excessive hormonal stimulation' },
    },
    medicationInteractions: [
      { keywords: ['gnrh agonist', 'leuprolide', 'goserelin'], severity: 'major', description: 'Kisspeptin stimulates GnRH release — combining with GnRH agonists may cause hormonal dysregulation', recommendation: 'Avoid combination; conflicting hormonal mechanisms' },
      { keywords: ['testosterone', 'trt'], severity: 'moderate', description: 'Exogenous testosterone suppresses GnRH axis which Kisspeptin stimulates', recommendation: 'May reduce Kisspeptin effectiveness; monitor hormone levels' },
      { keywords: ['oral contraceptive', 'birth control'], severity: 'moderate', description: 'Hormonal contraceptives suppress GnRH axis', recommendation: 'May reduce Kisspeptin effectiveness' },
    ],
    contraindications: [
      { condition: 'Hormone-sensitive cancer', severity: 'absolute', reason: 'Stimulates reproductive hormone release' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Affects reproductive hormones' },
    ],
    conditionInteractions: [
      { conditions: ['Hypogonadism'], severity: 'moderate', description: 'Kisspeptin stimulates endogenous testosterone production', recommendation: 'May be therapeutic; monitor hormone levels' },
    ],
  },
  'foxo4-dri': {
    name: 'FOXO4-DRI',
    interactions: {
      'fisetin': { severity: 'synergistic', description: 'Both are senolytics — FOXO4-DRI targets senescent cells, Fisetin is a natural senolytic', recommendation: 'Potentially powerful senolytic combination; use intermittently' },
      'rapamycin': { severity: 'synergistic', description: 'Complementary longevity mechanisms — senolysis + mTOR inhibition', recommendation: 'Can be combined for longevity protocols' },
    },
    medicationInteractions: [
      { keywords: ['chemotherapy', 'cancer treatment'], severity: 'major', description: 'FOXO4-DRI induces apoptosis in senescent cells — may interact with cancer treatments', recommendation: 'Avoid during active chemotherapy; consult oncologist' },
      { keywords: ['immunosuppressant', 'tacrolimus', 'cyclosporine'], severity: 'moderate', description: 'Senolytic activity may be affected by immunosuppression', recommendation: 'Monitor immune function' },
    ],
    contraindications: [
      { condition: 'Active cancer treatment', severity: 'absolute', reason: 'May interfere with cancer therapy mechanisms' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Apoptosis-inducing agent; not safe in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'ss-31': {
    name: 'SS-31 (Elamipretide)',
    interactions: {
      'nad': { severity: 'synergistic', description: 'Both target mitochondrial function — SS-31 stabilizes cardiolipin, NAD+ supports electron transport', recommendation: 'Excellent combination for mitochondrial optimization' },
      'mots-c': { severity: 'synergistic', description: 'Complementary mitochondrial peptides', recommendation: 'Can be combined for mitochondrial health' },
    },
    medicationInteractions: [
      { keywords: ['statin', 'atorvastatin', 'rosuvastatin'], severity: 'minor', description: 'Statins can impair mitochondrial function; SS-31 may help mitigate statin myopathy', recommendation: 'Potentially beneficial combination; monitor muscle symptoms' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Heart disease'], severity: 'moderate', description: 'SS-31 is being studied for heart failure — may be beneficial but requires monitoring', recommendation: 'Use under medical supervision; monitor cardiac function' },
    ],
  },
  'gdf-11': {
    name: 'GDF-11',
    interactions: {
      'epithalon': { severity: 'synergistic', description: 'Both target aging pathways — GDF-11 for tissue rejuvenation, Epithalon for telomeres', recommendation: 'Complementary longevity combination' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin'], severity: 'minor', description: 'GDF-11 may affect hematopoiesis', recommendation: 'Monitor blood counts and coagulation' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Growth factor may affect tumor biology' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'spermidine': {
    name: 'Spermidine',
    interactions: {
      'rapamycin': { severity: 'synergistic', description: 'Both induce autophagy through different mechanisms — Spermidine via acetyltransferase inhibition, Rapamycin via mTOR', recommendation: 'Powerful autophagy combination for longevity' },
      'fisetin': { severity: 'synergistic', description: 'Complementary longevity mechanisms — autophagy + senolysis', recommendation: 'Can be combined in longevity protocols' },
    },
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'tacrolimus'], severity: 'minor', description: 'Spermidine has immune-modulating properties', recommendation: 'Monitor immune function' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'fisetin': {
    name: 'Fisetin',
    interactions: {
      'quercetin': { severity: 'synergistic', description: 'Both are senolytic flavonoids with complementary mechanisms', recommendation: 'Can be combined for senolytic protocols; use intermittently (2-3 days/month)' },
      'rapamycin': { severity: 'synergistic', description: 'Senolysis + mTOR inhibition for comprehensive longevity approach', recommendation: 'Complementary longevity mechanisms' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin'], severity: 'moderate', description: 'Fisetin may have antiplatelet effects', recommendation: 'Monitor INR; may increase bleeding risk' },
      { keywords: ['chemotherapy'], severity: 'moderate', description: 'Fisetin has anti-cancer properties that may interact with chemotherapy', recommendation: 'Consult oncologist before combining' },
    ],
    contraindications: [
      { condition: 'Bleeding disorders', severity: 'relative', reason: 'May have antiplatelet effects' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'quercetin': {
    name: 'Quercetin',
    interactions: {
      'fisetin': { severity: 'synergistic', description: 'Complementary senolytic flavonoids', recommendation: 'Standard senolytic combination' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin'], severity: 'moderate', description: 'May have antiplatelet effects and affect CYP enzyme metabolism', recommendation: 'Monitor INR closely' },
      { keywords: ['cyclosporine'], severity: 'moderate', description: 'Quercetin may increase cyclosporine levels by inhibiting CYP3A4', recommendation: 'Monitor cyclosporine levels' },
      { keywords: ['antibiotic', 'fluoroquinolone', 'ciprofloxacin'], severity: 'minor', description: 'Quercetin may affect antibiotic absorption', recommendation: 'Separate dosing by 2 hours' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'High-dose quercetin not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'rapamycin': {
    name: 'Rapamycin',
    interactions: {
      'metformin': { severity: 'synergistic', description: 'Both target aging pathways — Rapamycin via mTOR, Metformin via AMPK', recommendation: 'Metformin may help mitigate rapamycin metabolic side effects' },
    },
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'tacrolimus', 'cyclosporine'], severity: 'major', description: 'Rapamycin is itself an immunosuppressant — additive immunosuppression', recommendation: 'Avoid combination unless under transplant specialist care' },
      { keywords: ['statin', 'atorvastatin'], severity: 'moderate', description: 'Rapamycin can increase statin levels via CYP3A4 inhibition', recommendation: 'Monitor for statin side effects; may need dose reduction' },
      { keywords: ['antifungal', 'ketoconazole', 'itraconazole'], severity: 'major', description: 'CYP3A4 inhibitors dramatically increase rapamycin levels', recommendation: 'Avoid combination or reduce rapamycin dose significantly' },
    ],
    contraindications: [
      { condition: 'Active infection', severity: 'absolute', reason: 'Immunosuppressant; will worsen infections' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Teratogenic' },
      { condition: 'Wound healing', severity: 'relative', reason: 'Impairs wound healing' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'Rapamycin can worsen insulin resistance and glucose tolerance', recommendation: 'Monitor glucose; intermittent dosing (weekly) may minimize metabolic effects' },
      { conditions: ['Kidney disease'], severity: 'moderate', description: 'Rapamycin is nephrotoxic at high doses', recommendation: 'Monitor renal function; use lowest effective dose' },
    ],
  },
  'nmn': {
    name: 'NMN',
    interactions: {
      'nad': { severity: 'minor', description: 'NMN is a precursor to NAD+ — taking both is redundant', recommendation: 'Choose one; NMN is oral, NAD+ injection is more direct' },
      'resveratrol': { severity: 'synergistic', description: 'NMN provides NAD+ substrate while Resveratrol activates SIRT1 which consumes NAD+', recommendation: 'Classic longevity combination; take together' },
    },
    medicationInteractions: [
      { keywords: ['chemotherapy'], severity: 'moderate', description: 'NAD+ boosting may affect cancer cell metabolism', recommendation: 'Consult oncologist; some cancers may use NAD+ for growth' },
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Cancer cells may utilize increased NAD+ for growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'resveratrol': {
    name: 'Resveratrol',
    interactions: {
      'nmn': { severity: 'synergistic', description: 'Resveratrol activates SIRT1 which requires NAD+ — NMN provides the substrate', recommendation: 'Take together for optimal SIRT1 activation' },
      'pterostilbene': { severity: 'minor', description: 'Pterostilbene is a more bioavailable analog of Resveratrol', recommendation: 'Choose one; Pterostilbene has better bioavailability' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin'], severity: 'moderate', description: 'Resveratrol has antiplatelet effects', recommendation: 'Monitor INR; may increase bleeding risk' },
      { keywords: ['statin', 'atorvastatin'], severity: 'minor', description: 'Both have cardiovascular benefits; generally compatible', recommendation: 'Monitor liver function' },
    ],
    contraindications: [
      { condition: 'Bleeding disorders', severity: 'relative', reason: 'Antiplatelet effects' },
      { condition: 'Hormone-sensitive cancer', severity: 'relative', reason: 'Weak estrogenic activity' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'pterostilbene': {
    name: 'Pterostilbene',
    interactions: {
      'resveratrol': { severity: 'minor', description: 'More bioavailable analog of Resveratrol — redundant', recommendation: 'Choose one; Pterostilbene preferred for bioavailability' },
      'nmn': { severity: 'synergistic', description: 'SIRT1 activation + NAD+ substrate', recommendation: 'Effective longevity combination' },
    },
    medicationInteractions: [
      { keywords: ['anticoagulant', 'warfarin'], severity: 'moderate', description: 'May have antiplatelet effects similar to Resveratrol', recommendation: 'Monitor INR' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'alpha-gpc': {
    name: 'Alpha-GPC',
    interactions: {
      'noopept': { severity: 'synergistic', description: 'Alpha-GPC provides choline for acetylcholine synthesis; Noopept enhances cholinergic signaling', recommendation: 'Classic nootropic stack; take together' },
      'semax': { severity: 'synergistic', description: 'Complementary cognitive enhancement mechanisms', recommendation: 'Can be combined for cognitive support' },
    },
    medicationInteractions: [
      { keywords: ['anticholinergic', 'diphenhydramine', 'oxybutynin'], severity: 'moderate', description: 'Alpha-GPC increases acetylcholine which anticholinergics block', recommendation: 'Opposing mechanisms; may reduce effectiveness of both' },
      { keywords: ['cholinesterase inhibitor', 'donepezil', 'rivastigmine'], severity: 'moderate', description: 'Additive cholinergic effects', recommendation: 'Monitor for cholinergic side effects (nausea, diarrhea, bradycardia)' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'nac': {
    name: 'NAC',
    interactions: {
      'glutathione': { severity: 'minor', description: 'NAC is a glutathione precursor — taking both is partially redundant', recommendation: 'NAC for oral, Glutathione for IV/injection; can combine' },
    },
    medicationInteractions: [
      { keywords: ['nitroglycerin', 'isosorbide'], severity: 'major', description: 'NAC potentiates nitrate-induced vasodilation — risk of severe hypotension', recommendation: 'Avoid combination; risk of dangerous blood pressure drop' },
      { keywords: ['anticoagulant', 'warfarin'], severity: 'minor', description: 'NAC may have mild antiplatelet effects', recommendation: 'Monitor INR' },
      { keywords: ['chemotherapy', 'cisplatin'], severity: 'moderate', description: 'NAC may reduce cisplatin effectiveness by scavenging reactive oxygen species', recommendation: 'Consult oncologist; timing of doses may be important' },
    ],
    contraindications: [
      { condition: 'Asthma (severe)', severity: 'relative', reason: 'Rarely may cause bronchospasm' },
      { condition: 'Pregnancy', severity: 'relative', reason: 'Generally considered safe but consult provider' },
    ],
    conditionInteractions: [],
  },
  'glutathione': {
    name: 'Glutathione',
    interactions: {
      'nac': { severity: 'minor', description: 'NAC is a glutathione precursor — complementary but partially redundant', recommendation: 'Can combine; NAC oral + Glutathione IV for maximum effect' },
    },
    medicationInteractions: [
      { keywords: ['chemotherapy'], severity: 'moderate', description: 'Glutathione is a potent antioxidant that may reduce oxidative stress-dependent chemotherapy effectiveness', recommendation: 'Consult oncologist; may be beneficial post-chemo for recovery' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'relative', reason: 'Generally considered safe but consult provider' },
    ],
    conditionInteractions: [],
  },
  'cagrilintide': {
    name: 'Cagrilintide',
    interactions: {
      'semaglutide': { severity: 'synergistic', description: 'CagriSema combination — amylin analog + GLP-1 agonist for enhanced weight loss', recommendation: 'Clinical trial combination showing superior weight loss; monitor for GI side effects' },
      'tirzepatide': { severity: 'moderate', description: 'Both target metabolic pathways — may have additive GI side effects', recommendation: 'Not typically combined; choose one metabolic approach' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'major', description: 'Amylin analogs potentiate insulin effects — high hypoglycemia risk', recommendation: 'Reduce insulin dose by 50% when initiating; monitor glucose closely' },
      { keywords: ['sulfonylurea', 'glipizide'], severity: 'major', description: 'Increased hypoglycemia risk', recommendation: 'Reduce sulfonylurea dose; frequent glucose monitoring' },
    ],
    contraindications: [
      { condition: 'Gastroparesis', severity: 'relative', reason: 'Delays gastric emptying' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'Potent glucose-lowering effects require medication adjustment', recommendation: 'Reduce insulin/sulfonylurea doses; monitor glucose frequently' },
    ],
  },
  'adipotide': {
    name: 'Adipotide',
    interactions: {},
    medicationInteractions: [
      { keywords: ['nsaid', 'ibuprofen', 'naproxen'], severity: 'moderate', description: 'Both can affect renal function', recommendation: 'Monitor kidney function closely; ensure adequate hydration' },
      { keywords: ['antihypertensive', 'ace inhibitor'], severity: 'minor', description: 'Adipotide may cause transient blood pressure changes', recommendation: 'Monitor blood pressure' },
    ],
    contraindications: [
      { condition: 'Kidney disease', severity: 'absolute', reason: 'Adipotide is nephrotoxic and can cause renal damage' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Causes tissue destruction; absolutely contraindicated' },
    ],
    conditionInteractions: [
      { conditions: ['Kidney disease'], severity: 'major', description: 'Adipotide causes dose-dependent renal toxicity', recommendation: 'Contraindicated in renal impairment; monitor creatinine and BUN' },
    ],
  },
  '5-amino-1mq': {
    name: '5-Amino-1MQ',
    interactions: {
      'aod-9604': { severity: 'synergistic', description: 'Complementary fat loss mechanisms — 5-Amino-1MQ inhibits NNMT, AOD-9604 targets lipolysis', recommendation: 'Can be combined for enhanced fat loss' },
    },
    medicationInteractions: [
      { keywords: ['metformin'], severity: 'minor', description: 'Both affect metabolic pathways; generally compatible', recommendation: 'Monitor metabolic markers' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
  'slu-pp-332': {
    name: 'SLU-PP-332',
    interactions: {},
    medicationInteractions: [
      { keywords: ['statin', 'atorvastatin'], severity: 'minor', description: 'Both affect muscle metabolism', recommendation: 'Monitor for muscle symptoms' },
    ],
    contraindications: [
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy; experimental compound' },
    ],
    conditionInteractions: [],
  },
  'zinc-thymulin': {
    name: 'Zinc-Thymulin',
    interactions: {
      'thymosin-alpha-1': { severity: 'synergistic', description: 'Both support thymic function and immune regulation through complementary mechanisms', recommendation: 'Can be combined for immune optimization' },
    },
    medicationInteractions: [
      { keywords: ['immunosuppressant', 'tacrolimus', 'cyclosporine'], severity: 'moderate', description: 'Zinc-Thymulin stimulates immune function which immunosuppressants inhibit', recommendation: 'Opposing mechanisms; consult transplant specialist' },
      { keywords: ['antibiotic', 'tetracycline', 'doxycycline', 'ciprofloxacin'], severity: 'minor', description: 'Zinc can reduce absorption of certain antibiotics', recommendation: 'Separate dosing by 2 hours' },
    ],
    contraindications: [
      { condition: 'Autoimmune disease', severity: 'relative', reason: 'Immune stimulation may worsen autoimmune conditions' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Autoimmune disease'], severity: 'moderate', description: 'Immune stimulation may exacerbate autoimmune conditions', recommendation: 'Use with caution; monitor autoimmune markers' },
    ],
  },
  'glp-1': {
    name: 'GLP-1',
    interactions: {
      'semaglutide': { severity: 'minor', description: 'Semaglutide is a long-acting GLP-1 analog — redundant with native GLP-1', recommendation: 'Choose one; Semaglutide has much longer half-life' },
    },
    medicationInteractions: [
      { keywords: ['insulin', 'lantus', 'humalog'], severity: 'moderate', description: 'Additive glucose-lowering effects', recommendation: 'Monitor for hypoglycemia; may need insulin dose reduction' },
      { keywords: ['sulfonylurea', 'glipizide'], severity: 'moderate', description: 'Increased hypoglycemia risk', recommendation: 'Monitor glucose closely' },
    ],
    contraindications: [
      { condition: 'Pancreatitis history', severity: 'relative', reason: 'GLP-1 may increase pancreatitis risk' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [
      { conditions: ['Diabetes'], severity: 'moderate', description: 'GLP-1 lowers blood glucose', recommendation: 'Adjust diabetes medications; monitor glucose' },
    ],
  },
  'melanotan-1': {
    name: 'Melanotan-1 (Afamelanotide)',
    interactions: {
      'melanotan-ii': { severity: 'minor', description: 'Both are melanocortin agonists — MT-1 is more selective for MC1R', recommendation: 'Choose one; MT-1 is FDA-approved for EPP with fewer side effects' },
    },
    medicationInteractions: [
      { keywords: ['phototherapy', 'uv therapy'], severity: 'moderate', description: 'Enhanced photosensitivity when combined with UV therapy', recommendation: 'Reduce UV exposure duration; monitor for burns' },
    ],
    contraindications: [
      { condition: 'Melanoma history', severity: 'absolute', reason: 'Melanocortin stimulation may promote melanoma' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Not studied in pregnancy' },
    ],
    conditionInteractions: [],
  },
};

const medicalConditions = [
  'Diabetes',
  'Hypertension',
  'Heart disease',
  'Kidney disease',
  'Liver disease',
  'Cancer (active)',
  'Cancer (history)',
  'Thyroid disorder',
  'Autoimmune disease',
  'Pregnancy',
  'Breastfeeding',
  'Pancreatitis history',
  'Gastroparesis',
  'Epilepsy',
  'Bleeding disorders',
  'Obesity',
  'Hypogonadism',
  'Asthma',
  'Melanoma history',
  'Hormone-sensitive cancer',
];

export default function AdvancedInteractionChecker() {
  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [selectedMedications, setSelectedMedications] = useState<string[]>(['']);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [results, setResults] = useState<any>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const addPeptide = (peptide: string) => {
    if (peptide && !selectedPeptides.includes(peptide)) {
      setSelectedPeptides([...selectedPeptides, peptide]);
    }
  };

  const removePeptide = (peptide: string) => {
    setSelectedPeptides(selectedPeptides.filter(p => p !== peptide));
  };

  const addMedication = () => {
    setSelectedMedications([...selectedMedications, '']);
  };

  const updateMedication = (index: number, value: string) => {
    const updated = [...selectedMedications];
    updated[index] = value;
    setSelectedMedications(updated);
  };

  const removeMedication = (index: number) => {
    setSelectedMedications(selectedMedications.filter((_, i) => i !== index));
  };

  const toggleCondition = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  const checkInteractions = () => {
    const interactions: any[] = [];
    const contraindications: any[] = [];
    const synergies: any[] = [];

    // Check peptide-peptide interactions
    for (let i = 0; i < selectedPeptides.length; i++) {
      for (let j = i + 1; j < selectedPeptides.length; j++) {
        const peptide1 = selectedPeptides[i];
        const peptide2 = selectedPeptides[j];
        
        const db1 = peptideDatabase[peptide1];
        const db2 = peptideDatabase[peptide2];
        
        if (db1?.interactions[peptide2]) {
          const interaction = db1.interactions[peptide2];
          if (interaction.severity === 'synergistic') {
            synergies.push({ peptides: [db1.name, db2.name], ...interaction });
          } else {
            interactions.push({ peptides: [db1.name, db2.name], ...interaction });
          }
        } else if (db2?.interactions[peptide1]) {
          const interaction = db2.interactions[peptide1];
          if (interaction.severity === 'synergistic') {
            synergies.push({ peptides: [db2.name, db1.name], ...interaction });
          } else {
            interactions.push({ peptides: [db2.name, db1.name], ...interaction });
          }
        }
      }
    }

    // Check peptide-medication interactions using keyword matching
    selectedPeptides.forEach(peptide => {
      const db = peptideDatabase[peptide];
      if (!db?.medicationInteractions) return;
      
      selectedMedications.forEach(med => {
        if (!med || med.trim() === '') return;
        const medLower = med.toLowerCase().trim();
        
        db.medicationInteractions.forEach(medInteraction => {
          const matches = medInteraction.keywords.some(keyword => 
            medLower.includes(keyword) || keyword.includes(medLower)
          );
          
          if (matches) {
            // Avoid duplicates
            const alreadyAdded = interactions.some(i => 
              i.peptides.includes(db.name) && i.peptides.includes(med) && i.description === medInteraction.description
            );
            if (!alreadyAdded) {
              interactions.push({
                peptides: [db.name, med],
                severity: medInteraction.severity,
                description: medInteraction.description,
                recommendation: medInteraction.recommendation,
              });
            }
          }
        });
      });
    });

    // Check condition-based interactions
    selectedPeptides.forEach(peptide => {
      const db = peptideDatabase[peptide];
      if (!db?.conditionInteractions) return;
      
      db.conditionInteractions.forEach(condInteraction => {
        const matchingConditions = condInteraction.conditions.filter(c => 
          selectedConditions.includes(c)
        );
        
        if (matchingConditions.length > 0) {
          interactions.push({
            peptides: [db.name, matchingConditions.join(', ')],
            severity: condInteraction.severity,
            description: condInteraction.description,
            recommendation: condInteraction.recommendation,
          });
        }
      });
    });

    // Check contraindications
    selectedPeptides.forEach(peptide => {
      const db = peptideDatabase[peptide];
      if (db?.contraindications) {
        db.contraindications.forEach(contra => {
          const matchesCondition = selectedConditions.some(c => 
            c.toLowerCase().includes(contra.condition.toLowerCase()) ||
            contra.condition.toLowerCase().includes(c.toLowerCase())
          );
          if (matchesCondition) {
            contraindications.push({ peptide: db.name, ...contra });
          }
        });
      }
    });

    setResults({ interactions, contraindications, synergies });
    setHasChecked(true);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'major': case 'absolute': return <XCircle className="h-5 w-5 text-red-600" />;
      case 'moderate': case 'relative': return <AlertTriangle className="h-5 w-5 text-amber-600" />;
      case 'minor': return <Info className="h-5 w-5 text-blue-600" />;
      case 'synergistic': return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      default: return null;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'major': case 'absolute': return 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950';
      case 'moderate': case 'relative': return 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950';
      case 'minor': return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950';
      case 'synergistic': return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950';
      default: return '';
    }
  };

  const totalFindings = results ? results.interactions.length + results.contraindications.length + results.synergies.length : 0;

  return (
    <div className="space-y-6">
      {/* Peptide Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Peptides</CardTitle>
          <CardDescription>Choose the peptides you want to check for interactions ({Object.keys(peptideDatabase).length} peptides in database)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select onValueChange={addPeptide}>
            <SelectTrigger>
              <SelectValue placeholder="Add a peptide..." />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(peptideDatabase).map(([key, value]) => (
                <SelectItem key={key} value={key} disabled={selectedPeptides.includes(key)}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedPeptides.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedPeptides.map(peptide => (
                <div key={peptide} className="flex items-center gap-2 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 rounded-full">
                  <span>{peptideDatabase[peptide].name}</span>
                  <button onClick={() => removePeptide(peptide)}><X className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Medications */}
      <Card>
        <CardHeader>
          <CardTitle>Current Medications</CardTitle>
          <CardDescription>Enter medication names — the checker matches common drug names and classes (e.g., "metformin", "insulin", "ibuprofen")</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedMedications.map((med, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={med}
                onChange={(e) => updateMedication(index, e.target.value)}
                placeholder="e.g., Metformin, Insulin, Ibuprofen, Warfarin"
                className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900"
              />
              {selectedMedications.length > 1 && (
                <Button variant="ghost" size="sm" onClick={() => removeMedication(index)}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button onClick={addMedication} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Medication
          </Button>
        </CardContent>
      </Card>

      {/* Medical Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Conditions</CardTitle>
          <CardDescription>Select any relevant medical conditions for contraindication checking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {medicalConditions.map(condition => (
              <label key={condition} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedConditions.includes(condition)}
                  onChange={() => toggleCondition(condition)}
                  className="w-4 h-4 text-teal-600"
                />
                <span className="text-sm">{condition}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Check Button */}
      <Button onClick={checkInteractions} className="w-full" disabled={selectedPeptides.length === 0}>
        Check Interactions ({selectedPeptides.length} peptide{selectedPeptides.length !== 1 ? 's' : ''} selected)
      </Button>

      {/* Results */}
      {hasChecked && results && (
        <div className="space-y-4">
          {/* Summary */}
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Found <strong>{totalFindings}</strong> result{totalFindings !== 1 ? 's' : ''}: {results.synergies.length} synergistic, {results.interactions.length} interaction{results.interactions.length !== 1 ? 's' : ''}, {results.contraindications.length} contraindication{results.contraindications.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Synergies */}
          {results.synergies.length > 0 && (
            <Card className={getSeverityColor('synergistic')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Synergistic Combinations ({results.synergies.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.synergies.map((synergy: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="font-semibold">{synergy.peptides.join(' + ')}</div>
                    <p className="text-sm">{synergy.description}</p>
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">✓ {synergy.recommendation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Interactions */}
          {results.interactions.length > 0 && (
            <div className="space-y-4">
              {results.interactions.map((interaction: any, index: number) => (
                <Card key={index} className={getSeverityColor(interaction.severity)}>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      {getSeverityIcon(interaction.severity)}
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{interaction.peptides.join(' + ')}</div>
                        <p className="text-sm mb-2">{interaction.description}</p>
                        <p className="text-sm font-medium">
                          <span className="uppercase text-xs">{interaction.severity} - </span>
                          {interaction.recommendation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Contraindications */}
          {results.contraindications.length > 0 && (
            <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-100">
                  <XCircle className="h-6 w-6" />
                  Contraindications Found ({results.contraindications.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.contraindications.map((contra: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="font-semibold text-red-900 dark:text-red-100">{contra.peptide} — {contra.condition}</div>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <span className="uppercase font-semibold">{contra.severity} contraindication:</span> {contra.reason}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* No Issues */}
          {totalFindings === 0 && (
            <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-3 items-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">No Known Interactions Identified</p>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Based on our database of {Object.keys(peptideDatabase).length} peptides, no significant interactions or contraindications were found for the selected combination.
                    </p>
                  </div>
                </div>
                <div className="border-t border-green-300 dark:border-green-700 pt-3 space-y-2">
                  <p className="text-sm font-medium text-green-900 dark:text-green-100">What was checked:</p>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 ml-4 list-disc">
                    {selectedPeptides.length > 1 && <li>Peptide-peptide interactions between {selectedPeptides.map(p => peptideDatabase[p]?.name).join(', ')}</li>}
                    {selectedMedications.filter(m => m.trim()).length > 0 && <li>Peptide-medication interactions with {selectedMedications.filter(m => m.trim()).join(', ')}</li>}
                    {selectedConditions.length > 0 && <li>Condition-based contraindications for {selectedConditions.join(', ')}</li>}
                  </ul>
                </div>
                <div className="border-t border-green-300 dark:border-green-700 pt-3">
                  <p className="text-sm font-medium text-green-900 dark:text-green-100">General Precautions:</p>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 ml-4 list-disc mt-1">
                    <li>Start with the lowest recommended dose and titrate gradually</li>
                    <li>Monitor for any unexpected side effects during the first 2 weeks</li>
                    <li>Inform your healthcare provider about all peptide therapies</li>
                    <li>This database covers common interactions but is not exhaustive — always verify with clinical references</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Disclaimer */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p className="text-xs text-amber-800 dark:text-amber-200">
              <strong>Disclaimer:</strong> This interaction checker is for educational purposes only and covers the most common interactions. 
              It is not a substitute for comprehensive drug interaction databases (e.g., Lexicomp, Micromedex) or clinical judgment. 
              Always verify interactions through official clinical resources before making treatment decisions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
