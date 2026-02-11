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
    ],
    contraindications: [
      { condition: 'Active cancer', severity: 'relative', reason: 'Growth-promoting and angiogenic effects may theoretically promote tumor growth' },
      { condition: 'Pregnancy', severity: 'absolute', reason: 'Insufficient safety data in pregnancy' },
      { condition: 'Breastfeeding', severity: 'absolute', reason: 'Insufficient safety data during lactation' },
    ],
    conditionInteractions: [
      { conditions: ['Cancer (active)'], severity: 'moderate', description: 'BPC-157 promotes angiogenesis which may be contraindicated in active malignancy', recommendation: 'Avoid use in patients with active cancer; consult oncologist' },
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
              <CardContent className="pt-6">
                <div className="flex gap-3 items-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">No Interactions Found</p>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Based on the information provided, no significant interactions or contraindications were identified. 
                      Note: This database covers common interactions but is not exhaustive. Always consult clinical references for comprehensive interaction checking.
                    </p>
                  </div>
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
