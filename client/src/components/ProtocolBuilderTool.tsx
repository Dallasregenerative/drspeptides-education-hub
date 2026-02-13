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
  },
  {
    id: 'immune-support',
    name: 'Immune Optimization Protocol',
    category: 'Immune Health',
    description: 'Thymic peptide protocol for immune system restoration and chronic infection support',
    peptides: [
      {
        name: 'Thymosin Alpha-1',
        dose: '1.6mg',
        frequency: 'Twice weekly',
        duration: '8-12 weeks',
        timing: 'Morning (subcutaneous)'
      },
      {
        name: 'LL-37',
        dose: '50-100mcg',
        frequency: 'Daily',
        duration: '4-6 weeks',
        timing: 'Morning (subcutaneous)'
      },
      {
        name: 'KPV (optional)',
        dose: '200-400mcg',
        frequency: 'Daily',
        duration: '4-8 weeks',
        timing: 'Oral or subcutaneous'
      }
    ],
    monitoring: [
      'Symptom severity',
      'Infection frequency',
      'Energy levels',
      'Immune markers',
      'Inflammatory markers'
    ],
    contraindications: [
      'Organ transplant recipients',
      'Active autoimmune flare',
      'Pregnancy/breastfeeding',
      'Immunosuppressive therapy'
    ],
    expectedOutcomes: [
      'Reduced infection frequency',
      'Improved immune response',
      'Better energy levels',
      'Reduced inflammation',
      'Enhanced pathogen clearance'
    ],
    labWork: [
      'Baseline: CBC with differential, CRP, ESR, immunoglobulin panel',
      'Month 2: Repeat CBC, inflammatory markers',
      'Month 3: Comprehensive immune panel'
    ]
  },
  {
    id: 'gut-health',
    name: 'GI Health & Gut Repair Protocol',
    category: 'Gastrointestinal',
    description: 'Peptide protocol for gut healing, leaky gut, and inflammatory bowel conditions',
    peptides: [
      {
        name: 'BPC-157',
        dose: '500mcg',
        frequency: 'Twice daily',
        duration: '8-12 weeks',
        timing: 'Morning and evening (oral or subcutaneous)'
      },
      {
        name: 'KPV',
        dose: '200-400mcg',
        frequency: 'Daily',
        duration: '8-12 weeks',
        timing: 'Oral, before meals'
      },
      {
        name: 'VIP (optional)',
        dose: '50mcg',
        frequency: 'Daily',
        duration: '4-8 weeks',
        timing: 'Intranasal'
      }
    ],
    monitoring: [
      'GI symptom diary',
      'Stool quality (Bristol scale)',
      'Abdominal pain score',
      'Food tolerance',
      'Bloating/distension'
    ],
    contraindications: [
      'Active GI bleeding',
      'Bowel obstruction',
      'Pregnancy/breastfeeding',
      'Active cancer'
    ],
    expectedOutcomes: [
      'Reduced GI inflammation',
      'Improved gut barrier function',
      'Decreased bloating',
      'Better food tolerance',
      'Reduced abdominal pain'
    ],
    labWork: [
      'Baseline: CRP, calprotectin, comprehensive stool analysis',
      'Month 2: Repeat calprotectin',
      'Month 3: Comprehensive GI panel'
    ]
  },
  {
    id: 'sexual-health',
    name: 'Sexual Health & Libido Protocol',
    category: 'Sexual Health',
    description: 'Peptide protocol for sexual dysfunction, low libido, and hormonal optimization',
    peptides: [
      {
        name: 'PT-141 (Bremelanotide)',
        dose: '1-2mg',
        frequency: 'As needed (max 8x/month)',
        duration: 'Ongoing',
        timing: '45-60 minutes before activity (subcutaneous)'
      },
      {
        name: 'Kisspeptin-10',
        dose: '1-2mg',
        frequency: '2-3x weekly',
        duration: '8-12 weeks',
        timing: 'Evening (subcutaneous)'
      }
    ],
    monitoring: [
      'Libido assessment',
      'Sexual function questionnaire',
      'Blood pressure (PT-141)',
      'Nausea assessment',
      'Hormone levels'
    ],
    contraindications: [
      'Uncontrolled hypertension',
      'Cardiovascular disease',
      'Pregnancy/breastfeeding',
      'Concurrent use of PDE5 inhibitors (caution)'
    ],
    expectedOutcomes: [
      'Improved libido',
      'Enhanced arousal',
      'Better sexual function',
      'Improved hormonal balance'
    ],
    labWork: [
      'Baseline: Testosterone (total/free), estradiol, LH, FSH, prolactin',
      'Month 2: Repeat hormone panel',
      'Month 4: Comprehensive assessment'
    ]
  },
  {
    id: 'sleep-optimization',
    name: 'Sleep Optimization Protocol',
    category: 'Sleep & Recovery',
    description: 'Peptide protocol for improving sleep quality, duration, and circadian rhythm',
    peptides: [
      {
        name: 'DSIP',
        dose: '100-200mcg',
        frequency: 'Nightly',
        duration: '4-8 weeks',
        timing: '30 minutes before bed (subcutaneous)'
      },
      {
        name: 'Epithalon',
        dose: '5-10mg',
        frequency: 'Daily',
        duration: '10-20 days (cycles)',
        timing: 'Evening (supports melatonin production)'
      },
      {
        name: 'Selank (optional)',
        dose: '250mcg',
        frequency: 'Daily',
        duration: '4 weeks',
        timing: 'Evening (intranasal, for anxiety-related insomnia)'
      }
    ],
    monitoring: [
      'Sleep diary (onset, duration, quality)',
      'Daytime energy levels',
      'Sleep tracker data',
      'Mood assessment',
      'Cognitive performance'
    ],
    contraindications: [
      'Sleep apnea (untreated)',
      'Pregnancy/breastfeeding',
      'Severe depression'
    ],
    expectedOutcomes: [
      'Faster sleep onset',
      'Improved sleep quality',
      'More restorative deep sleep',
      'Better daytime energy',
      'Normalized circadian rhythm'
    ],
    labWork: [
      'Baseline: Cortisol (AM/PM), melatonin, thyroid panel',
      'Month 2: Repeat cortisol',
      'Optional: Sleep study if apnea suspected'
    ]
  },
  {
    id: 'skin-rejuvenation',
    name: 'Skin Rejuvenation & Hair Protocol',
    category: 'Aesthetics',
    description: 'Peptide protocol for skin quality, collagen production, and hair restoration',
    peptides: [
      {
        name: 'GHK-Cu',
        dose: '1-2mg',
        frequency: '3-5x weekly',
        duration: '12-16 weeks',
        timing: 'Morning (subcutaneous or topical)'
      },
      {
        name: 'Epithalon',
        dose: '5-10mg',
        frequency: 'Daily',
        duration: '10-20 days (cycles)',
        timing: 'Evening'
      },
      {
        name: 'BPC-157 (optional)',
        dose: '250mcg',
        frequency: 'Daily',
        duration: '4-8 weeks',
        timing: 'Subcutaneous near treatment area'
      }
    ],
    monitoring: [
      'Before/after photos',
      'Skin elasticity assessment',
      'Hair density measurement',
      'Collagen biomarkers',
      'Patient satisfaction'
    ],
    contraindications: [
      'Active skin infections',
      'Pregnancy/breastfeeding',
      'Active cancer',
      'Copper sensitivity (GHK-Cu)'
    ],
    expectedOutcomes: [
      'Improved skin elasticity',
      'Reduced fine lines',
      'Enhanced collagen production',
      'Better skin texture',
      'Hair growth stimulation'
    ],
    labWork: [
      'Baseline: Copper levels, zinc, comprehensive metabolic panel',
      'Month 3: Repeat copper/zinc',
      'Month 4: Assessment with photos'
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
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${currentTemplate.name} - Treatment Plan</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 11pt; line-height: 1.5; color: #1a1a1a; padding: 0.5in; max-width: 8.5in; margin: 0 auto; }
    .header { text-align: center; border-bottom: 3px solid #0d9488; padding-bottom: 12px; margin-bottom: 20px; }
    .header h1 { font-size: 22pt; color: #0d9488; margin-bottom: 4px; }
    .header .category { font-size: 12pt; color: #64748b; }
    .patient-info { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-bottom: 20px; }
    .patient-info h3 { font-size: 13pt; color: #334155; margin-bottom: 8px; }
    .patient-info p { font-size: 10pt; color: #475569; margin-bottom: 4px; }
    .section { margin-bottom: 18px; }
    .section h2 { font-size: 14pt; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 10pt; }
    th, td { border: 1px solid #cbd5e1; padding: 6px 10px; text-align: left; }
    th { background: #f1f5f9; font-weight: 600; color: #334155; }
    ul { margin-left: 1.5em; margin-bottom: 8px; }
    li { margin-bottom: 3px; font-size: 10pt; }
    .warning { background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 10px; margin-top: 15px; }
    .warning h3 { color: #991b1b; font-size: 12pt; margin-bottom: 6px; }
    .warning li { color: #7f1d1d; }
    .footer { margin-top: 25px; padding-top: 12px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 8pt; color: #64748b; }
    .footer .disclaimer { font-style: italic; margin-bottom: 6px; }
    @media print { body { padding: 0; } @page { margin: 0.6in; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>${currentTemplate.name}</h1>
    <div class="category">${currentTemplate.category}</div>
  </div>
  ${(customProtocol.patientName || customProtocol.age || customProtocol.weight || customProtocol.goals) ? `
  <div class="patient-info">
    <h3>Patient Information</h3>
    ${customProtocol.patientName ? `<p><strong>Name:</strong> ${customProtocol.patientName}</p>` : ''}
    ${customProtocol.age ? `<p><strong>Age:</strong> ${customProtocol.age}</p>` : ''}
    ${customProtocol.weight ? `<p><strong>Weight:</strong> ${customProtocol.weight} lbs</p>` : ''}
    ${customProtocol.goals ? `<p><strong>Goals:</strong> ${customProtocol.goals}</p>` : ''}
    ${customProtocol.medicalHistory ? `<p><strong>Medical History:</strong> ${customProtocol.medicalHistory}</p>` : ''}
  </div>` : ''}
  <div class="section">
    <h2>Protocol Description</h2>
    <p>${currentTemplate.description}</p>
  </div>
  <div class="section">
    <h2>Peptide Protocol</h2>
    <table>
      <thead><tr><th>Peptide</th><th>Dose</th><th>Frequency</th><th>Duration</th><th>Timing</th></tr></thead>
      <tbody>${currentTemplate.peptides.map(p => `<tr><td>${p.name}</td><td>${p.dose}</td><td>${p.frequency}</td><td>${p.duration}</td><td>${p.timing}</td></tr>`).join('')}</tbody>
    </table>
  </div>
  <div class="section">
    <h2>Monitoring Parameters</h2>
    <ul>${currentTemplate.monitoring.map(m => `<li>${m}</li>`).join('')}</ul>
  </div>
  <div class="section">
    <h2>Required Lab Work</h2>
    <ul>${currentTemplate.labWork.map(l => `<li>${l}</li>`).join('')}</ul>
  </div>
  <div class="section">
    <h2>Expected Outcomes</h2>
    <ul>${currentTemplate.expectedOutcomes.map(o => `<li>${o}</li>`).join('')}</ul>
  </div>
  ${customProtocol.notes ? `<div class="section"><h2>Clinical Notes</h2><p>${customProtocol.notes}</p></div>` : ''}
  <div class="warning">
    <h3>Contraindications</h3>
    <ul>${currentTemplate.contraindications.map(c => `<li>${c}</li>`).join('')}</ul>
  </div>
  <div class="footer">
    <div class="disclaimer"><strong>Medical Disclaimer:</strong> This treatment plan is for educational purposes only. Always consult with a qualified healthcare provider.</div>
    <div>Generated by Peptide Education Hub - ${new Date().toLocaleDateString()}</div>
  </div>
</body>
</html>`;
    const printWindow = window.open('', '_blank');
    if (!printWindow) { alert('Please allow pop-ups to generate the treatment plan.'); return; }
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => { printWindow.print(); };
  };

  const createDosingSchedule = () => {
    if (!currentTemplate) return;
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${currentTemplate.name} - Dosing Schedule</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 11pt; line-height: 1.5; color: #1a1a1a; padding: 0.5in; max-width: 8.5in; margin: 0 auto; }
    .header { text-align: center; border-bottom: 3px solid #0d9488; padding-bottom: 12px; margin-bottom: 20px; }
    .header h1 { font-size: 20pt; color: #0d9488; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; font-size: 10pt; }
    th { background: #0d9488; color: white; font-weight: 600; }
    tr:nth-child(even) { background: #f8fafc; }
    .notes { margin-top: 20px; font-size: 10pt; color: #475569; }
    .footer { margin-top: 25px; padding-top: 12px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 8pt; color: #64748b; }
    @media print { body { padding: 0; } @page { margin: 0.6in; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Dosing Schedule: ${currentTemplate.name}</h1>
    ${customProtocol.patientName ? `<p>Patient: ${customProtocol.patientName}</p>` : ''}
  </div>
  <table>
    <thead><tr><th>Peptide</th><th>Dose</th><th>Frequency</th><th>Duration</th><th>Timing Notes</th></tr></thead>
    <tbody>${currentTemplate.peptides.map(p => `<tr><td><strong>${p.name}</strong></td><td>${p.dose}</td><td>${p.frequency}</td><td>${p.duration}</td><td>${p.timing}</td></tr>`).join('')}</tbody>
  </table>
  <div class="notes">
    <p><strong>Monitoring:</strong> ${currentTemplate.monitoring.join('; ')}</p>
    ${customProtocol.notes ? `<p><strong>Notes:</strong> ${customProtocol.notes}</p>` : ''}
  </div>
  <div class="footer">
    <div>Generated by Peptide Education Hub - ${new Date().toLocaleDateString()}</div>
  </div>
</body>
</html>`;
    const scheduleWindow = window.open('', '_blank');
    if (!scheduleWindow) { alert('Please allow pop-ups to create the dosing schedule.'); return; }
    scheduleWindow.document.write(html);
    scheduleWindow.document.close();
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
            <Button onClick={createDosingSchedule} variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Create Dosing Schedule
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
