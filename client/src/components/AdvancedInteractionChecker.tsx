import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
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

const peptideDatabase = {
  'bpc-157': {
    name: 'BPC-157',
    interactions: {
      'tb-500': {
        severity: 'synergistic' as const,
        description: 'Synergistic healing effects when combined',
        recommendation: 'Often stacked together for enhanced tissue repair and recovery',
      },
      'nsaids': {
        severity: 'moderate' as const,
        description: 'May reduce effectiveness of BPC-157',
        recommendation: 'Consider timing NSAIDs away from BPC-157 administration',
      },
      'corticosteroids': {
        severity: 'moderate' as const,
        description: 'Corticosteroids may counteract healing effects',
        recommendation: 'Use caution when combining; monitor healing progress',
      },
    },
    contraindications: [
      {
        condition: 'Active cancer',
        severity: 'relative' as const,
        reason: 'Growth-promoting effects may be contraindicated',
      },
      {
        condition: 'Pregnancy',
        severity: 'absolute' as const,
        reason: 'Insufficient safety data in pregnancy',
      },
    ],
  },
  'semaglutide': {
    name: 'Semaglutide',
    interactions: {
      'insulin': {
        severity: 'major' as const,
        description: 'Increased risk of hypoglycemia',
        recommendation: 'Reduce insulin dose by 20-50% when initiating semaglutide; monitor glucose closely',
      },
      'sulfonylureas': {
        severity: 'major' as const,
        description: 'Increased risk of hypoglycemia',
        recommendation: 'Consider reducing sulfonylurea dose; monitor blood glucose',
      },
      'bpc-157': {
        severity: 'synergistic' as const,
        description: 'BPC-157 may reduce GI side effects',
        recommendation: 'Can be combined to improve tolerability',
      },
      'oral-medications': {
        severity: 'moderate' as const,
        description: 'Delayed gastric emptying may affect oral medication absorption',
        recommendation: 'Take oral medications 1 hour before semaglutide injection',
      },
    },
    contraindications: [
      {
        condition: 'Personal/family history of medullary thyroid carcinoma',
        severity: 'absolute' as const,
        reason: 'Black box warning for thyroid C-cell tumors',
      },
      {
        condition: 'Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
        severity: 'absolute' as const,
        reason: 'Increased risk of medullary thyroid carcinoma',
      },
      {
        condition: 'Severe gastroparesis',
        severity: 'relative' as const,
        reason: 'May worsen gastric emptying',
      },
      {
        condition: 'Pancreatitis history',
        severity: 'relative' as const,
        reason: 'Potential increased risk of pancreatitis',
      },
    ],
  },
  'cjc-1295': {
    name: 'CJC-1295',
    interactions: {
      'ipamorelin': {
        severity: 'synergistic' as const,
        description: 'Synergistic growth hormone release',
        recommendation: 'Commonly stacked for optimal GH optimization',
      },
      'insulin': {
        severity: 'moderate' as const,
        description: 'Growth hormone can cause insulin resistance',
        recommendation: 'Monitor blood glucose; may need insulin adjustment',
      },
      'thyroid-hormone': {
        severity: 'minor' as const,
        description: 'GH can affect thyroid function',
        recommendation: 'Monitor thyroid levels periodically',
      },
    },
    contraindications: [
      {
        condition: 'Active cancer',
        severity: 'absolute' as const,
        reason: 'Growth hormone may promote tumor growth',
      },
      {
        condition: 'Diabetic retinopathy',
        severity: 'relative' as const,
        reason: 'GH may worsen retinopathy',
      },
    ],
  },
  'semax': {
    name: 'Semax',
    interactions: {
      'selank': {
        severity: 'synergistic' as const,
        description: 'Complementary cognitive and mood effects',
        recommendation: 'Often combined for enhanced nootropic benefits',
      },
      'stimulants': {
        severity: 'moderate' as const,
        description: 'May potentiate stimulant effects',
        recommendation: 'Start with lower stimulant doses; monitor for overstimulation',
      },
    },
    contraindications: [
      {
        condition: 'Severe anxiety disorders',
        severity: 'relative' as const,
        reason: 'May increase anxiety in sensitive individuals',
      },
    ],
  },
  'tb-500': {
    name: 'TB-500',
    interactions: {
      'bpc-157': {
        severity: 'synergistic' as const,
        description: 'Synergistic tissue repair and healing',
        recommendation: 'Commonly stacked for injury recovery',
      },
      'anticoagulants': {
        severity: 'moderate' as const,
        description: 'May increase bleeding risk',
        recommendation: 'Use caution with blood thinners; monitor for bleeding',
      },
    },
    contraindications: [
      {
        condition: 'Active cancer',
        severity: 'relative' as const,
        reason: 'Growth-promoting effects may be contraindicated',
      },
    ],
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
  const [results, setResults] = useState<any>({ synergies: [], interactions: [], contraindications: [] });

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
        
        const db1 = peptideDatabase[peptide1 as keyof typeof peptideDatabase];
        if (db1?.interactions[peptide2]) {
          const interaction = db1.interactions[peptide2];
          if (interaction.severity === 'synergistic') {
            synergies.push({
              peptides: [db1.name, peptideDatabase[peptide2 as keyof typeof peptideDatabase].name],
              ...interaction,
            });
          } else {
            interactions.push({
              peptides: [db1.name, peptideDatabase[peptide2 as keyof typeof peptideDatabase].name],
              ...interaction,
            });
          }
        }
      }
    }

    // Check peptide-medication interactions
    selectedPeptides.forEach(peptide => {
      const db = peptideDatabase[peptide as keyof typeof peptideDatabase];
      selectedMedications.forEach(med => {
        if (med && db?.interactions[med.toLowerCase().replace(/\s+/g, '-')]) {
          const interaction = db.interactions[med.toLowerCase().replace(/\s+/g, '-')];
          interactions.push({
            peptides: [db.name, med],
            ...interaction,
          });
        }
      });
    });

    // Check contraindications
    selectedPeptides.forEach(peptide => {
      const db = peptideDatabase[peptide as keyof typeof peptideDatabase];
      if (db?.contraindications) {
        db.contraindications.forEach(contra => {
          if (selectedConditions.some(c => c.toLowerCase().includes(contra.condition.toLowerCase()))) {
            contraindications.push({
              peptide: db.name,
              ...contra,
            });
          }
        });
      }
    });

    setResults({ interactions, contraindications, synergies });
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'major':
      case 'absolute':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'moderate':
      case 'relative':
        return <AlertTriangle className="h-5 w-5 text-amber-600" />;
      case 'minor':
        return <Info className="h-5 w-5 text-blue-600" />;
      case 'synergistic':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      default:
        return null;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'major':
      case 'absolute':
        return 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950';
      case 'moderate':
      case 'relative':
        return 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950';
      case 'minor':
        return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950';
      case 'synergistic':
        return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Peptide Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Peptides</CardTitle>
          <CardDescription>Choose the peptides you want to check for interactions</CardDescription>
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
                <div
                  key={peptide}
                  className="flex items-center gap-2 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 rounded-full"
                >
                  <span>{peptideDatabase[peptide as keyof typeof peptideDatabase].name}</span>
                  <button onClick={() => removePeptide(peptide)}>
                    <X className="h-4 w-4" />
                  </button>
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
          <CardDescription>List any medications the patient is currently taking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedMedications.map((med, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={med}
                onChange={(e) => updateMedication(index, e.target.value)}
                placeholder="e.g., Metformin, Lisinopril"
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
          <CardDescription>Select any relevant medical conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {medicalConditions.map(condition => (
              <label
                key={condition}
                className="flex items-center gap-2 cursor-pointer"
              >
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
        Check Interactions
      </Button>

      {/* Results */}
      {results && (
        <div className="space-y-4">
          {/* Synergies */}
          {results.synergies.length > 0 && (
            <Card className={getSeverityColor('synergistic')}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Synergistic Combinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.synergies.map((synergy: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="font-semibold">
                      {synergy.peptides.join(' + ')}
                    </div>
                    <p className="text-sm">{synergy.description}</p>
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      ✓ {synergy.recommendation}
                    </p>
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
                        <div className="font-semibold mb-1">
                          {interaction.peptides.join(' + ')}
                        </div>
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
                  Contraindications Found
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.contraindications.map((contra: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="font-semibold text-red-900 dark:text-red-100">
                      {contra.peptide} - {contra.condition}
                    </div>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <span className="uppercase font-semibold">{contra.severity} contraindication:</span> {contra.reason}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* No Issues */}
          {results.interactions.length === 0 && results.contraindications.length === 0 && results.synergies.length === 0 && (
            <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
              <CardContent className="pt-6">
                <div className="flex gap-3 items-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">No Interactions Found</p>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Based on the information provided, no significant interactions or contraindications were identified.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
