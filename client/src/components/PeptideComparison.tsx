import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, XCircle, Minus, Plus, X } from 'lucide-react';

interface PeptideData {
  name: string;
  category: string;
  mechanism: string;
  halfLife: string;
  dosing: string;
  frequency: string;
  benefits: string[];
  sideEffects: string[];
  contraindications: string[];
  cost: string;
  availability: string;
  researchLevel: string;
}

const peptideDatabase: Record<string, PeptideData> = {
  'bpc-157': {
    name: 'BPC-157',
    category: 'Healing & Recovery',
    mechanism: 'Promotes angiogenesis, modulates growth factors',
    halfLife: '4-6 hours',
    dosing: '250-500 mcg',
    frequency: 'Daily or BID',
    benefits: ['Accelerated healing', 'Gut protection', 'Joint repair', 'Tendon healing'],
    sideEffects: ['Minimal', 'Occasional injection site reaction'],
    contraindications: ['Active cancer', 'Pregnancy'],
    cost: '$30-50/month',
    availability: 'Widely available',
    researchLevel: 'Extensive animal studies, limited human trials',
  },
  'tb-500': {
    name: 'TB-500',
    category: 'Healing & Recovery',
    mechanism: 'Actin-binding protein, promotes cell migration',
    halfLife: '10-14 days',
    dosing: '2-5 mg',
    frequency: 'Twice weekly',
    benefits: ['Tissue repair', 'Reduced inflammation', 'Muscle recovery', 'Flexibility'],
    sideEffects: ['Minimal', 'Rare headache', 'Fatigue'],
    contraindications: ['Active cancer', 'Pregnancy'],
    cost: '$50-80/month',
    availability: 'Widely available',
    researchLevel: 'Extensive animal studies, anecdotal human use',
  },
  'semaglutide': {
    name: 'Semaglutide',
    category: 'Weight Loss & Metabolism',
    mechanism: 'GLP-1 receptor agonist',
    halfLife: '7 days',
    dosing: '0.25-2.4 mg',
    frequency: 'Weekly',
    benefits: ['Significant weight loss', 'Appetite suppression', 'Improved glycemic control', 'Cardiovascular benefits'],
    sideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Fatigue'],
    contraindications: ['MTC history', 'MEN 2', 'Severe gastroparesis', 'Pancreatitis'],
    cost: '$200-300/month',
    availability: 'Prescription required',
    researchLevel: 'FDA approved, extensive clinical trials',
  },
  'tirzepatide': {
    name: 'Tirzepatide',
    category: 'Weight Loss & Metabolism',
    mechanism: 'Dual GIP/GLP-1 receptor agonist',
    halfLife: '5 days',
    dosing: '2.5-15 mg',
    frequency: 'Weekly',
    benefits: ['Superior weight loss', 'Excellent glycemic control', 'Improved lipid profile', 'Better tolerability'],
    sideEffects: ['Nausea (less than semaglutide)', 'Diarrhea', 'Decreased appetite'],
    contraindications: ['MTC history', 'MEN 2', 'Severe GI disease'],
    cost: '$250-350/month',
    availability: 'Prescription required',
    researchLevel: 'FDA approved, robust clinical data',
  },
  'cjc-1295': {
    name: 'CJC-1295',
    category: 'Growth Hormone',
    mechanism: 'GHRH analog, stimulates GH release',
    halfLife: '6-8 days',
    dosing: '1-2 mg',
    frequency: 'Twice weekly',
    benefits: ['Increased GH levels', 'Improved body composition', 'Better sleep', 'Enhanced recovery'],
    sideEffects: ['Water retention', 'Joint pain', 'Carpal tunnel', 'Insulin resistance'],
    contraindications: ['Active cancer', 'Diabetic retinopathy', 'Acromegaly'],
    cost: '$60-100/month',
    availability: 'Widely available',
    researchLevel: 'Limited human studies, extensive anecdotal use',
  },
  'ipamorelin': {
    name: 'Ipamorelin',
    category: 'Growth Hormone',
    mechanism: 'Ghrelin mimetic, selective GH secretagogue',
    halfLife: '2 hours',
    dosing: '200-300 mcg',
    frequency: 'Daily or BID',
    benefits: ['Increased GH without cortisol/prolactin spike', 'Fat loss', 'Muscle gain', 'Better sleep'],
    sideEffects: ['Minimal', 'Occasional flushing', 'Headache'],
    contraindications: ['Active cancer', 'Pregnancy'],
    cost: '$50-80/month',
    availability: 'Widely available',
    researchLevel: 'Moderate human studies',
  },
};

export default function PeptideComparison() {
  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState<'side-by-side' | 'table'>('side-by-side');

  const addPeptide = (peptide: string) => {
    if (peptide && !selectedPeptides.includes(peptide) && selectedPeptides.length < 4) {
      setSelectedPeptides([...selectedPeptides, peptide]);
    }
  };

  const removePeptide = (peptide: string) => {
    setSelectedPeptides(selectedPeptides.filter(p => p !== peptide));
  };

  const getComparisonIcon = (value: string) => {
    if (value.toLowerCase().includes('minimal') || value.toLowerCase().includes('excellent')) {
      return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    }
    if (value.toLowerCase().includes('moderate')) {
      return <Minus className="h-4 w-4 text-amber-600" />;
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Peptide Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Peptides to Compare</CardTitle>
          <CardDescription>Choose up to 4 peptides for side-by-side comparison</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select onValueChange={addPeptide}>
            <SelectTrigger>
              <SelectValue placeholder="Add a peptide..." />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(peptideDatabase).map(([key, value]) => (
                <SelectItem 
                  key={key} 
                  value={key} 
                  disabled={selectedPeptides.includes(key) || selectedPeptides.length >= 4}
                >
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
                  <span>{peptideDatabase[peptide].name}</span>
                  <button onClick={() => removePeptide(peptide)}>
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {selectedPeptides.length >= 2 && (
            <div className="flex gap-2">
              <Button
                variant={compareMode === 'side-by-side' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCompareMode('side-by-side')}
              >
                Side-by-Side
              </Button>
              <Button
                variant={compareMode === 'table' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCompareMode('table')}
              >
                Table View
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Comparison Results */}
      {selectedPeptides.length >= 2 && compareMode === 'side-by-side' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedPeptides.map(peptideKey => {
            const peptide = peptideDatabase[peptideKey];
            return (
              <Card key={peptideKey} className="h-full">
                <CardHeader>
                  <CardTitle className="text-teal-600 dark:text-teal-400">{peptide.name}</CardTitle>
                  <CardDescription>{peptide.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Mechanism</div>
                    <div className="text-slate-600 dark:text-slate-400">{peptide.mechanism}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Dosing</div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {peptide.dosing} {peptide.frequency}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Half-Life</div>
                    <div className="text-slate-600 dark:text-slate-400">{peptide.halfLife}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Key Benefits</div>
                    <ul className="space-y-1">
                      {peptide.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Side Effects</div>
                    <ul className="space-y-1">
                      {peptide.sideEffects.map((effect, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                          {getComparisonIcon(effect)}
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Cost</div>
                    <div className="text-slate-600 dark:text-slate-400">{peptide.cost}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Research Level</div>
                    <div className="text-slate-600 dark:text-slate-400 text-xs">{peptide.researchLevel}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Table View */}
      {selectedPeptides.length >= 2 && compareMode === 'table' && (
        <Card>
          <CardContent className="pt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Parameter</th>
                  {selectedPeptides.map(peptideKey => (
                    <th key={peptideKey} className="text-left p-3 font-semibold text-teal-600 dark:text-teal-400">
                      {peptideDatabase[peptideKey].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Category</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].category}</td>
                  ))}
                </tr>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Mechanism</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].mechanism}</td>
                  ))}
                </tr>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Dosing</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].dosing}</td>
                  ))}
                </tr>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Frequency</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].frequency}</td>
                  ))}
                </tr>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Half-Life</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].halfLife}</td>
                  ))}
                </tr>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Cost</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].cost}</td>
                  ))}
                </tr>
                <tr className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="p-3 font-medium">Availability</td>
                  {selectedPeptides.map(peptideKey => (
                    <td key={peptideKey} className="p-3">{peptideDatabase[peptideKey].availability}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
