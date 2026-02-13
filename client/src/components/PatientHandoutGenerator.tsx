import { useState, useRef } from 'react';
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
  },
  'tirzepatide-patient-guide': {
    id: 'tirzepatide-patient-guide',
    name: 'Tirzepatide Patient Guide',
    category: 'Weight Loss',
    sections: [
      {
        title: 'What is Tirzepatide?',
        content: 'Tirzepatide is a dual GIP/GLP-1 receptor agonist that helps with weight loss and blood sugar control. It works on two hunger-regulating hormones simultaneously, making it one of the most effective weight loss medications available. Brand names include Mounjaro and Zepbound.',
        included: true
      },
      {
        title: 'Dosing Schedule',
        content: 'Week 1-4: 2.5mg weekly (starting dose)\nWeek 5-8: 5mg weekly\nWeek 9-12: 7.5mg weekly\nWeek 13-16: 10mg weekly\nWeek 17-20: 12.5mg weekly\nWeek 21+: 15mg weekly (maximum)\n\nYour provider will adjust based on your response and tolerance.',
        included: true
      },
      {
        title: 'How to Inject',
        content: '• Inject once weekly on the same day\n• Subcutaneous injection in abdomen, thigh, or upper arm\n• Rotate injection sites weekly\n• Can be taken any time, with or without food\n• Store in refrigerator before first use\n• Room temperature for up to 21 days after first use',
        included: true
      },
      {
        title: 'Common Side Effects',
        content: '• Nausea (most common, usually improves)\n• Diarrhea or constipation\n• Decreased appetite\n• Abdominal pain\n• Injection site reactions\n\nTips: Eat smaller meals, avoid fatty foods, stay hydrated. Most side effects improve within 2-4 weeks.',
        included: true
      },
      {
        title: 'Expected Results',
        content: 'Clinical trials show 15-25% body weight loss over 12-18 months. You may notice:\n• Significant appetite reduction\n• Improved blood sugar levels\n• Reduced cravings\n• Gradual, sustained weight loss\n• Improved cardiovascular markers',
        included: true
      },
      {
        title: 'When to Seek Medical Attention',
        content: '• Severe abdominal pain (possible pancreatitis)\n• Persistent vomiting\n• Vision changes\n• Signs of allergic reaction\n• Neck lump or difficulty swallowing\n• Symptoms of low blood sugar (if diabetic)',
        included: true
      }
    ]
  },
  'tb500-recovery-guide': {
    id: 'tb500-recovery-guide',
    name: 'TB-500 Recovery Guide',
    category: 'Recovery',
    sections: [
      {
        title: 'What is TB-500?',
        content: 'TB-500 (Thymosin Beta-4) is a naturally occurring peptide found in nearly all human cells. It plays a key role in tissue repair, cell migration, and new blood vessel formation. It is used to support healing of injuries to muscles, tendons, ligaments, and joints.',
        included: true
      },
      {
        title: 'Administration',
        content: '• Loading phase: 2-5mg twice weekly for 4-6 weeks\n• Maintenance: 2mg once weekly or as directed\n• Inject subcutaneously (abdomen, thigh, or near injury)\n• Use insulin syringe for accurate dosing\n• Store reconstituted vial in refrigerator\n• Use within 3-4 weeks of reconstitution',
        included: true
      },
      {
        title: 'What to Expect',
        content: 'Week 1-2: Reduced inflammation and swelling\nWeek 2-4: Improved range of motion\nWeek 4-6: Noticeable tissue healing\nWeek 6-8: Significant functional improvement\n\nOften combined with BPC-157 for synergistic healing effects.',
        included: true
      },
      {
        title: 'Side Effects & Safety',
        content: 'TB-500 is generally well tolerated:\n• Mild injection site redness (temporary)\n• Headache (uncommon)\n• Temporary fatigue\n\nContraindications: Active cancer, pregnancy, bleeding disorders. Always inform your provider of all medications.',
        included: true
      }
    ]
  },
  'gh-secretagogue-guide': {
    id: 'gh-secretagogue-guide',
    name: 'Growth Hormone Peptide Guide',
    category: 'Anti-Aging',
    sections: [
      {
        title: 'What are GH Secretagogues?',
        content: 'Growth hormone secretagogues (CJC-1295, Ipamorelin, Sermorelin) are peptides that stimulate your pituitary gland to produce more growth hormone naturally. Unlike synthetic HGH, these peptides work with your body\'s natural feedback systems for safer, more physiologic results.',
        included: true
      },
      {
        title: 'Common Protocols',
        content: '• CJC-1295/Ipamorelin: 300mcg before bed, 5 days on / 2 days off\n• Sermorelin: 200-500mcg before bed daily\n• Ipamorelin alone: 200-300mcg 2-3x daily\n\nAlways take on an empty stomach (2+ hours after eating). Best results when taken before bed to amplify natural GH pulse.',
        included: true
      },
      {
        title: 'Expected Benefits',
        content: 'Month 1: Improved sleep quality, increased energy\nMonth 2-3: Better body composition, improved skin\nMonth 3-6: Enhanced muscle tone, reduced body fat\nMonth 6+: Continued improvement in all areas\n\nFull benefits typically seen after 3-6 months of consistent use.',
        included: true
      },
      {
        title: 'Possible Side Effects',
        content: '• Water retention (temporary)\n• Tingling or numbness in hands (carpal tunnel-like)\n• Increased hunger (Ipamorelin)\n• Headache\n• Injection site reactions\n\nThese typically resolve with dose adjustment. Report persistent symptoms to your provider.',
        included: true
      },
      {
        title: 'Monitoring',
        content: 'Your provider will check:\n• IGF-1 levels (baseline and periodic)\n• Blood glucose and HbA1c\n• Body composition\n• Sleep quality assessment\n\nDo not use if you have active cancer, diabetic retinopathy, or are pregnant.',
        included: true
      }
    ]
  },
  'immune-peptide-guide': {
    id: 'immune-peptide-guide',
    name: 'Immune Peptide Guide',
    category: 'Immune Health',
    sections: [
      {
        title: 'What are Immune Peptides?',
        content: 'Thymosin Alpha-1 and other immune peptides help modulate and strengthen your immune system. They support your body\'s natural defense mechanisms against infections, chronic illness, and immune dysregulation.',
        included: true
      },
      {
        title: 'Thymosin Alpha-1 Protocol',
        content: '• Standard dose: 1.6mg subcutaneous injection\n• Frequency: Twice weekly (e.g., Monday and Thursday)\n• Duration: 8-12 weeks typically\n• Can be used longer under medical supervision\n• Store in refrigerator after reconstitution',
        included: true
      },
      {
        title: 'Expected Benefits',
        content: '• Enhanced immune surveillance\n• Reduced frequency of infections\n• Improved vaccine response\n• Better T-cell function\n• Support during chronic illness\n\nResults typically noticed within 4-8 weeks of consistent use.',
        included: true
      },
      {
        title: 'Safety Information',
        content: 'Generally very well tolerated. Rare side effects:\n• Injection site reactions\n• Mild fatigue\n• Muscle aches\n\nNot recommended for organ transplant recipients or those on immunosuppressive therapy without physician approval.',
        included: true
      }
    ]
  },
  'cognitive-peptide-guide': {
    id: 'cognitive-peptide-guide',
    name: 'Cognitive Peptide Guide',
    category: 'Brain Health',
    sections: [
      {
        title: 'What are Cognitive Peptides?',
        content: 'Semax and Selank are neuropeptides that support brain function, focus, memory, and mood. Semax enhances BDNF (brain-derived neurotrophic factor) for cognitive performance, while Selank provides anxiolytic (anti-anxiety) effects alongside cognitive benefits.',
        included: true
      },
      {
        title: 'Administration',
        content: '• Semax: 200-600mcg intranasal, 1-2x daily\n• Selank: 250-500mcg intranasal, 1-2x daily\n• Can be used together for complementary effects\n• Cycle: 4-8 weeks on, 2-4 weeks off\n• Best taken in the morning for focus, or as needed for anxiety (Selank)',
        included: true
      },
      {
        title: 'What to Expect',
        content: 'Week 1: Subtle improvements in focus and clarity\nWeek 2-3: Noticeable cognitive enhancement\nWeek 4-6: Peak benefits in memory and mood\n\nEffects are often noticed within the first few days. Benefits accumulate with consistent use.',
        included: true
      },
      {
        title: 'Side Effects & Precautions',
        content: 'Both peptides are well tolerated:\n• Mild nasal irritation (intranasal use)\n• Headache (rare)\n• Dizziness (rare)\n\nSemax: Avoid in severe anxiety disorders\nSelank: May cause mild sedation\n\nNot recommended during pregnancy or breastfeeding.',
        included: true
      }
    ]
  },
  'reconstitution-guide': {
    id: 'reconstitution-guide',
    name: 'Peptide Reconstitution Guide',
    category: 'General',
    sections: [
      {
        title: 'What is Reconstitution?',
        content: 'Reconstitution is the process of adding sterile water (bacteriostatic water) to a freeze-dried (lyophilized) peptide powder to create an injectable solution. This must be done carefully to preserve the peptide\'s effectiveness.',
        included: true
      },
      {
        title: 'Supplies Needed',
        content: '• Lyophilized peptide vial\n• Bacteriostatic water (BAC water)\n• Insulin syringe (1mL) for reconstitution\n• Insulin syringe (0.3mL or 0.5mL) for injection\n• Alcohol wipes\n• Sharps container',
        included: true
      },
      {
        title: 'Step-by-Step Reconstitution',
        content: '1. Wash hands thoroughly\n2. Clean both vial tops with alcohol wipes\n3. Draw prescribed amount of BAC water into syringe\n4. Insert needle into peptide vial at an angle\n5. Slowly release water down the side of the vial\n6. DO NOT shake - gently swirl or let sit until dissolved\n7. Solution should be clear (discard if cloudy)\n8. Label vial with date and concentration\n9. Store in refrigerator',
        included: true
      },
      {
        title: 'Calculating Your Dose',
        content: 'Example: 5mg vial + 2mL BAC water = 2.5mg/mL (2500mcg/mL)\n\nFor a 250mcg dose: 250 ÷ 2500 = 0.1mL = 10 units on insulin syringe\n\nYour provider will give you specific reconstitution and dosing instructions. Use our online Reconstitution Calculator for help.',
        included: true
      },
      {
        title: 'Storage & Handling',
        content: '• Store reconstituted peptides in refrigerator (36-46°F)\n• Use within 3-4 weeks of reconstitution\n• Never freeze reconstituted peptides\n• Protect from light\n• Do not use if solution is cloudy or discolored\n• Keep away from children',
        included: true
      }
    ]
  },
  'pt141-guide': {
    id: 'pt141-guide',
    name: 'PT-141 Patient Guide',
    category: 'Sexual Health',
    sections: [
      {
        title: 'What is PT-141?',
        content: 'PT-141 (Bremelanotide) is a peptide that works through the central nervous system to improve sexual desire and arousal. Unlike PDE5 inhibitors (Viagra, Cialis) that work on blood flow, PT-141 acts on brain pathways that control sexual response.',
        included: true
      },
      {
        title: 'How to Use',
        content: '• Dose: 1-2mg subcutaneous injection\n• Timing: 45-60 minutes before anticipated activity\n• Maximum: 8 doses per month\n• Do not use more than once in 24 hours\n• Inject in abdomen or thigh',
        included: true
      },
      {
        title: 'What to Expect',
        content: '• Effects begin within 30-60 minutes\n• Duration: 6-72 hours\n• Improved desire and arousal\n• Enhanced sensitivity\n• Works for both men and women\n\nEffectiveness may vary. Discuss with your provider if not seeing results.',
        included: true
      },
      {
        title: 'Side Effects & Warnings',
        content: 'Common: Nausea (most common), flushing, headache\nLess common: Nasal congestion, dizziness\n\nImportant warnings:\n• May increase blood pressure temporarily\n• Not for use with uncontrolled hypertension\n• Use caution with cardiovascular disease\n• Not for use during pregnancy\n• Avoid alcohol excess',
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

  const buildHandoutHTML = () => {
    if (!currentTemplate) return '';
    const includedSections = sections.filter(s => s.included);
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${currentTemplate.name} - Patient Handout</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12pt; line-height: 1.6; color: #1a1a1a; padding: 0.5in; max-width: 8.5in; margin: 0 auto; }
    .header { text-align: center; border-bottom: 3px solid #0d9488; padding-bottom: 15px; margin-bottom: 25px; }
    .header h1 { font-size: 24pt; color: #0d9488; margin-bottom: 5px; }
    .header .practice { font-size: 14pt; color: #334155; font-weight: 600; }
    .header .provider { font-size: 11pt; color: #64748b; }
    .header .contact { font-size: 10pt; color: #64748b; margin-top: 5px; }
    .section { margin-bottom: 20px; }
    .section h2 { font-size: 16pt; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px; }
    .section p { white-space: pre-line; margin-bottom: 0.5em; }
    .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 9pt; color: #64748b; }
    .footer .disclaimer { font-style: italic; margin-bottom: 8px; }
    @media print { body { padding: 0; } @page { margin: 0.75in; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>${currentTemplate.name}</h1>
    ${practiceName ? `<div class="practice">${practiceName}</div>` : ''}
    ${providerName ? `<div class="provider">${providerName}</div>` : ''}
    ${contactInfo ? `<div class="contact">${contactInfo}</div>` : ''}
  </div>
  ${includedSections.map(s => `<div class="section"><h2>${s.title}</h2><p>${s.content}</p></div>`).join('\n  ')}
  <div class="footer">
    <div class="disclaimer"><strong>Medical Disclaimer:</strong> This handout is for educational purposes only and does not replace medical advice. Always consult with your healthcare provider regarding your specific condition and treatment.</div>
    <div>Generated by Peptide Education Hub - ${new Date().toLocaleDateString()}</div>
  </div>
</body>
</html>`;
  };

  const generateHandout = () => {
    const html = buildHandoutHTML();
    if (!html) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) { alert('Please allow pop-ups to download the handout.'); return; }
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => { printWindow.print(); };
  };

  const previewHandout = () => {
    const html = buildHandoutHTML();
    if (!html) return;
    const previewWindow = window.open('', '_blank');
    if (!previewWindow) { alert('Please allow pop-ups to preview the handout.'); return; }
    previewWindow.document.write(html);
    previewWindow.document.close();
  };

  const printHandout = () => {
    generateHandout();
  };

  const emailHandout = () => {
    if (!currentTemplate) return;
    const includedSections = sections.filter(s => s.included);
    const bodyText = includedSections.map(s => `${s.title}\n${s.content}`).join('\n\n');
    const subject = encodeURIComponent(`${currentTemplate.name}${practiceName ? ' - ' + practiceName : ''}`);
    const body = encodeURIComponent(`${currentTemplate.name}\n${practiceName ? practiceName + '\n' : ''}${providerName ? providerName + '\n' : ''}${contactInfo ? contactInfo + '\n' : ''}\n---\n\n${bodyText}\n\n---\nThis handout is for educational purposes only. Always consult with your healthcare provider.\nGenerated by Peptide Education Hub - ${new Date().toLocaleDateString()}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_self');
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
            <Button onClick={printHandout} variant="outline" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button onClick={emailHandout} variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email to Patient
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
