import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { FileText, Download, Printer, Mail, Eye } from 'lucide-react';

interface HandoutTemplate {
  id: string;
  name: string;
  category: string;
  sections: {
    title: string;
    content: string;
    included: boolean;
  }[];
}

const handoutTemplates: Record<string, HandoutTemplate> = {
  'semaglutide-patient-guide': {
    id: 'semaglutide-patient-guide',
    name: 'Semaglutide Patient Guide',
    category: 'Weight Loss',
    sections: [
      {
        title: 'What is Semaglutide?',
        content: 'Semaglutide is a GLP-1 receptor agonist that helps with weight loss by reducing appetite, slowing stomach emptying, and improving blood sugar control. It mimics a natural hormone in your body that regulates hunger and food intake.',
        included: true
      },
      {
        title: 'How to Take Your Medication',
        content: '• Inject once weekly on the same day each week\n• Can be taken any time of day, with or without food\n• Inject subcutaneously (under the skin) in abdomen, thigh, or upper arm\n• Rotate injection sites each week\n• Store in refrigerator (36-46°F)',
        included: true
      },
      {
        title: 'Dosing Schedule',
        content: 'Week 1-4: 0.25mg weekly (starting dose)\nWeek 5-8: 0.5mg weekly\nWeek 9-12: 1.0mg weekly\nWeek 13-16: 1.7mg weekly\nWeek 17+: 2.4mg weekly (maintenance)\n\nYour provider may adjust this schedule based on your response and tolerance.',
        included: true
      },
      {
        title: 'Common Side Effects',
        content: '• Nausea (usually mild and temporary)\n• Diarrhea or constipation\n• Stomach pain\n• Headache\n• Fatigue\n• Reduced appetite\n\nThese effects typically improve after the first few weeks. Contact your provider if severe or persistent.',
        included: true
      },
      {
        title: 'Tips for Success',
        content: '• Eat smaller, more frequent meals\n• Stay well hydrated (8+ glasses of water daily)\n• Avoid high-fat, greasy foods\n• Eat slowly and stop when satisfied\n• Keep a food and symptom journal\n• Maintain regular physical activity\n• Get adequate sleep (7-9 hours)',
        included: true
      },
      {
        title: 'When to Call Your Provider',
        content: '• Severe abdominal pain\n• Persistent vomiting\n• Signs of pancreatitis (severe stomach pain radiating to back)\n• Vision changes\n• Rapid heartbeat\n• Signs of allergic reaction (rash, swelling, difficulty breathing)\n• Symptoms of low blood sugar (if diabetic)',
        included: true
      },
      {
        title: 'Expected Results',
        content: 'Most patients lose 10-15% of their starting body weight over 6-12 months. Weight loss is gradual and sustainable. You may notice:\n• Reduced hunger and cravings\n• Better portion control\n• Improved energy levels\n• Better blood sugar control (if diabetic)\n• Gradual, steady weight loss',
        included: true
      },
      {
        title: 'Important Safety Information',
        content: '• Do not use if pregnant or breastfeeding\n• Inform provider of personal/family history of thyroid cancer\n• Report any neck lumps or swelling\n• May interact with other diabetes medications\n• Not recommended with other GLP-1 agonists',
        included: true
      }
    ]
  },
  'bpc157-recovery-guide': {
    id: 'bpc157-recovery-guide',
    name: 'BPC-157 Recovery Guide',
    category: 'Recovery',
    sections: [
      {
        title: 'What is BPC-157?',
        content: 'BPC-157 is a synthetic peptide derived from a protective protein found in the stomach. It has been shown to accelerate healing of muscles, tendons, ligaments, and other tissues. It works by promoting angiogenesis (new blood vessel formation) and modulating growth factors.',
        included: true
      },
      {
        title: 'Administration Instructions',
        content: '• Typical dose: 250-500 mcg daily or twice daily\n• Inject subcutaneously near the injury site when possible\n• Can also inject systemically (abdomen, thigh)\n• Use insulin syringe for precise dosing\n• Store in refrigerator after reconstitution\n• Typical treatment duration: 4-8 weeks',
        included: true
      },
      {
        title: 'What to Expect',
        content: 'Week 1-2: Reduced pain and inflammation\nWeek 2-4: Improved mobility and function\nWeek 4-6: Accelerated tissue healing\nWeek 6-8: Continued improvement and recovery\n\nResults vary based on injury severity and individual response.',
        included: true
      },
      {
        title: 'Maximizing Results',
        content: '• Continue physical therapy as recommended\n• Maintain adequate protein intake (1g per lb body weight)\n• Stay well hydrated\n• Get quality sleep (8+ hours)\n• Avoid NSAIDs if possible (may reduce effectiveness)\n• Follow activity restrictions from your provider\n• Be patient - healing takes time',
        included: true
      },
      {
        title: 'Potential Side Effects',
        content: 'BPC-157 is generally very well tolerated. Possible effects include:\n• Mild injection site reactions\n• Temporary fatigue (rare)\n• Headache (rare)\n• Dizziness (rare)\n\nSerious side effects are extremely rare. Contact your provider with any concerns.',
        included: true
      },
      {
        title: 'Contraindications',
        content: '• Active cancer (consult oncologist first)\n• Pregnancy or breastfeeding\n• Recent surgery (discuss with surgeon)\n• Bleeding disorders (use caution)\n\nInform your provider of all medications and medical conditions.',
        included: true
      }
    ]
  },
  'peptide-injection-guide': {
    id: 'peptide-injection-guide',
    name: 'Peptide Self-Injection Guide',
    category: 'General',
    sections: [
      {
        title: 'Supplies Needed',
        content: '• Peptide vial (refrigerated)\n• Insulin syringe (typically 0.3mL or 0.5mL)\n• Alcohol wipes\n• Sharps container\n• Clean, flat surface',
        included: true
      },
      {
        title: 'Injection Sites',
        content: 'Best sites for subcutaneous injection:\n• Abdomen (2 inches from belly button)\n• Front/outer thigh\n• Back of upper arm\n• Love handle area\n\nRotate sites with each injection to prevent irritation.',
        included: true
      },
      {
        title: 'Step-by-Step Instructions',
        content: '1. Wash hands thoroughly with soap and water\n2. Clean injection site with alcohol wipe\n3. Remove cap from syringe\n4. Draw prescribed dose from vial\n5. Remove air bubbles by tapping syringe\n6. Pinch skin at injection site\n7. Insert needle at 45-90 degree angle\n8. Inject slowly and steadily\n9. Remove needle and apply gentle pressure\n10. Dispose of syringe in sharps container',
        included: true
      },
      {
        title: 'Safety Tips',
        content: '• Never reuse needles or syringes\n• Always use a new alcohol wipe\n• Check peptide for discoloration before use\n• Store peptides in refrigerator (36-46°F)\n• Keep out of reach of children\n• Dispose of sharps properly\n• Never share peptides with others',
        included: true
      },
      {
        title: 'Troubleshooting',
        content: 'Bruising: Normal, apply ice if needed\nBleeding: Apply pressure for 1-2 minutes\nPain: Try different site or technique\nRedness: Should resolve in 24-48 hours\nSwelling: Ice and elevate if significant\n\nContact provider if symptoms persist or worsen.',
        included: true
      }
    ]
  }
};

export default function PatientHandoutGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [customSections, setCustomSections] = useState<HandoutTemplate['sections']>([]);
  const [practiceName, setPracticeName] = useState('');
  const [providerName, setProviderName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const currentTemplate = selectedTemplate ? handoutTemplates[selectedTemplate] : null;

  const toggleSection = (index: number) => {
    if (!currentTemplate) return;
    const updated = [...(customSections.length > 0 ? customSections : currentTemplate.sections)];
    updated[index].included = !updated[index].included;
    setCustomSections(updated);
  };

  const generateHandout = () => {
    alert('PDF generation would happen here. This would create a professional patient handout with your practice branding.');
  };

  const previewHandout = () => {
    alert('Preview would open in a new window showing the formatted handout.');
  };

  const sections = customSections.length > 0 ? customSections : currentTemplate?.sections || [];

  return (
    <div className="space-y-6">
      {/* Template Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Handout Template</CardTitle>
          <CardDescription>
            Choose a pre-built patient education handout or create a custom one
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Handout Template</Label>
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger>
                <SelectValue placeholder="Select a handout template..." />
              </SelectTrigger>
              <SelectContent>
                {Object.values(handoutTemplates).map(template => (
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
                <strong>{currentTemplate.name}:</strong> Professional patient education handout with customizable sections
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Practice Branding */}
      {currentTemplate && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Practice Information</CardTitle>
              <CardDescription>Add your practice branding to the handout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Practice Name</Label>
                  <Input
                    value={practiceName}
                    onChange={(e) => setPracticeName(e.target.value)}
                    placeholder="Advanced Wellness Clinic"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Provider Name</Label>
                  <Input
                    value={providerName}
                    onChange={(e) => setProviderName(e.target.value)}
                    placeholder="Dr. Jane Smith, MD"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Contact Information</Label>
                <Input
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Phone: (555) 123-4567 | Email: info@clinic.com"
                />
              </div>
            </CardContent>
          </Card>

          {/* Section Customization */}
          <Card>
            <CardHeader>
              <CardTitle>Customize Sections</CardTitle>
              <CardDescription>Select which sections to include in the handout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={section.included}
                      onCheckedChange={() => toggleSection(index)}
                      id={`section-${index}`}
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`section-${index}`}
                        className="font-semibold cursor-pointer"
                      >
                        {section.title}
                      </label>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 whitespace-pre-line">
                        {section.content.substring(0, 150)}
                        {section.content.length > 150 && '...'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Handout Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-lg p-8 max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 border-b-2 border-teal-600 pb-4">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {currentTemplate.name}
                  </h1>
                  {practiceName && (
                    <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold">
                      {practiceName}
                    </p>
                  )}
                  {providerName && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {providerName}
                    </p>
                  )}
                  {contactInfo && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      {contactInfo}
                    </p>
                  )}
                </div>

                {/* Sections */}
                <div className="space-y-6">
                  {sections.filter(s => s.included).map((section, index) => (
                    <div key={index}>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {section.title}
                      </h2>
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700 text-center">
                  <p className="text-xs text-slate-500">
                    This handout is for educational purposes only and does not replace medical advice. 
                    Always consult with your healthcare provider regarding your specific condition and treatment.
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Generated by Peptide Education Hub - {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button onClick={generateHandout} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button onClick={previewHandout} variant="outline" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Full Preview
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email to Patient
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
