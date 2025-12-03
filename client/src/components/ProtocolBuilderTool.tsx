import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Download, Calendar, User, Target, AlertCircle, CheckCircle2, Plus, X } from 'lucide-react';

interface ProtocolTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  peptides: Array<{
    name: string;
    dose: string;
    frequency: string;
    duration: string;
    timing: string;
  }>;
  monitoring: string[];
  contraindications: string[];
  expectedOutcomes: string[];
  labWork: string[];
}

const protocolTemplates: ProtocolTemplate[] = [
  {
    id: 'weight-loss-glp1',
    name: 'GLP-1 Weight Loss Protocol',
    category: 'Weight Management',
    description: 'Evidence-based semaglutide protocol for weight loss with gradual dose escalation',
    peptides: [
      {
        name: 'Semaglutide',
        dose: '0.25mg → 2.4mg',
        frequency: 'Weekly',
        duration: '16-20 weeks',
        timing: 'Same day/time each week'
      },
      {
        name: 'BPC-157 (optional)',
        dose: '250mcg',
        frequency: 'Daily',
        duration: 'First 4 weeks',
        timing: 'Morning, to reduce GI side effects'
      }
    ],
    monitoring: [
      'Weekly weight',
      'Monthly body composition',
      'Blood glucose (if diabetic)',
      'Side effects log',
      'Dietary compliance'
    ],
    contraindications: [
      'Personal/family history of MTC',
      'MEN 2 syndrome',
      'Severe gastroparesis',
      'Pregnancy/breastfeeding'
    ],
    expectedOutcomes: [
      '10-15% body weight reduction',
      'Improved glycemic control',
      'Reduced appetite',
      'Better satiety'
    ],
    labWork: [
      'Baseline: CBC, CMP, HbA1c, lipid panel, TSH',
      'Month 3: Repeat labs',
      'Month 6: Comprehensive metabolic panel'
    ]
  },
  {
    id: 'injury-recovery',
    name: 'Injury Recovery Protocol',
    category: 'Recovery & Healing',
    description: 'Synergistic BPC-157 and TB-500 protocol for accelerated tissue repair',
    peptides: [
      {
        name: 'BPC-157',
        dose: '250-500mcg',
        frequency: 'Daily or BID',
        duration: '4-8 weeks',
        timing: 'Near injury site (subcutaneous)'
      },
      {
        name: 'TB-500',
        dose: '2-5mg',
        frequency: 'Twice weekly',
        duration: '4-6 weeks',
        timing: 'Systemic (subcutaneous)'
      }
    ],
    monitoring: [
      'Pain scale (0-10)',
      'Range of motion',
      'Functional capacity',
      'Inflammation markers',
      'Healing progress photos'
    ],
    contraindications: [
      'Active cancer',
      'Pregnancy',
      'Recent surgery (consult surgeon)',
      'Bleeding disorders (TB-500)'
    ],
    expectedOutcomes: [
      'Accelerated healing',
      'Reduced inflammation',
      'Improved mobility',
      'Pain reduction',
      'Faster return to activity'
    ],
    labWork: [
      'Baseline: CBC, CRP, ESR (if chronic inflammation)',
      'Week 4: Repeat inflammatory markers if elevated'
    ]
  },
  {
    id: 'longevity-optimization',
    name: 'Longevity & Anti-Aging Protocol',
    category: 'Longevity',
    description: 'Comprehensive protocol for healthspan extension and cellular optimization',
    peptides: [
      {
        name: 'Epithalon',
        dose: '10mg',
        frequency: 'Daily',
        duration: '10-20 days (cycles)',
        timing: 'Evening, 2-3 cycles per year'
      },
      {
        name: 'GHK-Cu',
        dose: '1-2mg',
        frequency: '3x weekly',
        duration: 'Ongoing',
        timing: 'Morning or evening'
      },
      {
        name: 'NAD+ (optional)',
        dose: '50-100mg',
        frequency: '2-3x weekly',
        duration: 'Ongoing',
        timing: 'Morning'
      }
    ],
    monitoring: [
      'Energy levels',
      'Sleep quality',
      'Skin appearance',
      'Cognitive function',
      'Biomarkers of aging'
    ],
    contraindications: [
      'Active cancer',
      'Pregnancy/breastfeeding',
      'Severe kidney disease'
    ],
    expectedOutcomes: [
      'Improved energy',
      'Better sleep',
      'Enhanced skin quality',
      'Cognitive clarity',
      'Improved biomarkers'
    ],
    labWork: [
      'Baseline: Comprehensive panel, telomere length (optional)',
      'Every 6 months: Repeat comprehensive panel',
      'Annual: Advanced aging biomarkers'
    ]
  },
  {
    id: 'cognitive-enhancement',
    name: 'Cognitive Enhancement Protocol',
    category: 'Cognitive Health',
    description: 'Nootropic peptide protocol for focus, memory, and neuroprotection',
    peptides: [
      {
        name: 'Semax',
        dose: '300-600mcg',
        frequency: 'Daily',
        duration: '4-8 weeks (cycles)',
        timing: 'Morning (intranasal or subcutaneous)'
      },
      {
        name: 'Selank',
        dose: '250-500mcg',
        frequency: 'Daily',
        duration: '4-8 weeks (cycles)',
        timing: 'Morning or as needed for anxiety'
      },
      {
        name: 'Dihexa (advanced)',
        dose: '1-5mg',
        frequency: 'Daily',
        duration: '2-4 weeks (cycles)',
        timing: 'Morning'
      }
    ],
    monitoring: [
      'Cognitive function tests',
      'Mood assessment',
      'Sleep quality',
      'Anxiety levels',
      'Focus/concentration'
    ],
    contraindications: [
      'Severe anxiety disorders (Semax)',
      'Bipolar disorder',
      'Pregnancy/breastfeeding'
    ],
    expectedOutcomes: [
      'Improved focus',
      'Enhanced memory',
      'Reduced anxiety',
      'Better mood',
      'Neuroprotection'
    ],
    labWork: [
      'Baseline: Basic metabolic panel',
      'Optional: Neurotransmitter testing'
    ]
  },
  {
    id: 'muscle-growth',
    name: 'Muscle Growth & Performance Protocol',
    category: 'Performance',
    description: 'Growth hormone optimization protocol for muscle gain and recovery',
    peptides: [
      {
        name: 'CJC-1295 (no DAC)',
        dose: '100mcg',
        frequency: '3x daily',
        duration: '12-16 weeks',
        timing: 'Pre-workout, post-workout, bedtime'
      },
      {
        name: 'Ipamorelin',
        dose: '200-300mcg',
        frequency: '3x daily',
        duration: '12-16 weeks',
        timing: 'With CJC-1295 (stacked)'
      },
      {
        name: 'IGF-1 LR3 (advanced)',
        dose: '20-50mcg',
        frequency: 'Daily',
        duration: '4 weeks max',
        timing: 'Post-workout'
      }
    ],
    monitoring: [
      'Body composition (DEXA)',
      'Strength measurements',
      'Recovery time',
      'Sleep quality',
      'Blood glucose'
    ],
    contraindications: [
      'Active cancer',
      'Diabetic retinopathy',
      'Acromegaly',
      'Pregnancy'
    ],
    expectedOutcomes: [
      'Increased lean muscle mass',
      'Improved recovery',
      'Better sleep',
      'Enhanced performance',
      'Fat loss'
    ],
    labWork: [
      'Baseline: IGF-1, glucose, HbA1c',
      'Month 2: Repeat IGF-1, glucose',
      'Month 4: Comprehensive panel'
    ]
  }
];

export default function ProtocolBuilderTool() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [customProtocol, setCustomProtocol] = useState({
    patientName: '',
    age: '',
    weight: '',
    goals: '',
    medicalHistory: '',
    notes: ''
  });
  const [selectedPeptides, setSelectedPeptides] = useState<any[]>([]);

  const currentTemplate = protocolTemplates.find(t => t.id === selectedTemplate);

  const generateProtocolPDF = () => {
    if (!currentTemplate) return;
    
    // In a real implementation, this would generate a PDF
    alert('PDF generation would happen here. This would create a professional treatment plan document.');
  };

  const addCustomPeptide = () => {
    setSelectedPeptides([...selectedPeptides, {
      name: '',
      dose: '',
      frequency: '',
      duration: '',
      timing: ''
    }]);
  };

  const removeCustomPeptide = (index: number) => {
    setSelectedPeptides(selectedPeptides.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Template Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Protocol Template</CardTitle>
          <CardDescription>
            Choose from evidence-based protocol templates or create a custom protocol
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Protocol Template</Label>
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger>
                <SelectValue placeholder="Select a protocol template..." />
              </SelectTrigger>
              <SelectContent>
                {protocolTemplates.map(template => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name} - {template.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {currentTemplate && (
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>{currentTemplate.name}:</strong> {currentTemplate.description}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Patient Information */}
      {currentTemplate && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Patient Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Patient Name</Label>
                  <Input
                    value={customProtocol.patientName}
                    onChange={(e) => setCustomProtocol({...customProtocol, patientName: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Age</Label>
                  <Input
                    type="number"
                    value={customProtocol.age}
                    onChange={(e) => setCustomProtocol({...customProtocol, age: e.target.value})}
                    placeholder="45"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Weight (kg)</Label>
                  <Input
                    type="number"
                    value={customProtocol.weight}
                    onChange={(e) => setCustomProtocol({...customProtocol, weight: e.target.value})}
                    placeholder="80"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Treatment Goals</Label>
                <Textarea
                  value={customProtocol.goals}
                  onChange={(e) => setCustomProtocol({...customProtocol, goals: e.target.value})}
                  placeholder="Weight loss of 20 lbs, improved energy, better sleep..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Relevant Medical History</Label>
                <Textarea
                  value={customProtocol.medicalHistory}
                  onChange={(e) => setCustomProtocol({...customProtocol, medicalHistory: e.target.value})}
                  placeholder="Type 2 diabetes, hypertension..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Protocol Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Protocol Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Peptides */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Peptide Regimen</h3>
                <div className="space-y-3">
                  {currentTemplate.peptides.map((peptide, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                      <div className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                        {peptide.name}
                      </div>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div><strong>Dose:</strong> {peptide.dose}</div>
                        <div><strong>Frequency:</strong> {peptide.frequency}</div>
                        <div><strong>Duration:</strong> {peptide.duration}</div>
                        <div><strong>Timing:</strong> {peptide.timing}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monitoring */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Monitoring Parameters</h3>
                <ul className="space-y-2">
                  {currentTemplate.monitoring.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lab Work */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Required Lab Work</h3>
                <ul className="space-y-2">
                  {currentTemplate.labWork.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <FileText className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expected Outcomes */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Expected Outcomes</h3>
                <ul className="space-y-2">
                  {currentTemplate.expectedOutcomes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Target className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contraindications */}
              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3 text-red-900 dark:text-red-100 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Contraindications
                </h3>
                <ul className="space-y-2">
                  {currentTemplate.contraindications.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-red-800 dark:text-red-200">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Clinical Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={customProtocol.notes}
                onChange={(e) => setCustomProtocol({...customProtocol, notes: e.target.value})}
                placeholder="Additional notes, modifications, patient-specific considerations..."
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button onClick={generateProtocolPDF} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Generate Treatment Plan PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Create Dosing Schedule
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
