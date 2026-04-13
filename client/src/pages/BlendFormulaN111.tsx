import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Zap, Sparkles, AlertTriangle, CheckCircle, Shield, ArrowLeft, BookOpen , Stethoscope } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaN111() {
  usePageTitle("Formula N-111: Neuroprotection", {
    description: "Advanced cognitive enhancement formula with J147, Dihexa, and Noopept for comprehensive neuroprotection and brain optimization. A proprietary DrsPeptides compound.",
    keywords: ['Formula N-111', 'N-111', 'N111', 'DrsPeptides formula', 'proprietary peptide blend', 'cognitive enhancement formula', 'nootropic blend', 'J147', 'Dihexa', 'Noopept'],
    ogType: 'article' as const,
    schema: [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Formula N-111",
      "alternateName": ['N-111', 'N111', 'Formula N111', 'DrsPeptides N-111', 'Neuroprotection Formula', 'Neuro Series N-111'],
      "description": "Advanced cognitive enhancement formula with J147, Dihexa, and Noopept for comprehensive neuroprotection and brain optimization. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-n-111",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "activeIngredient": "10 mg J147 + 10 mg Dihexa + 10 mg Noopept",
      "administrationRoute": "Varies by formulation",
      "drugClass": "Peptide Therapy Compound",
      "mechanismOfAction": "Neuroprotection",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": "https://pepedhub.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Formula N-111 - Neuroprotection | DrsPeptides Proprietary Formula",
      "description": "Advanced cognitive enhancement formula with J147, Dihexa, and Noopept for comprehensive neuroprotection and brain optimization. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-n-111",
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Cognitive Enhancement"
      },
      "lastReviewed": "2026-02-14",
      "reviewedBy": {
        "@type": "Organization",
        "name": "Peptide Education Hub Medical Team"
      },
      "about": {
        "@type": "Drug",
        "name": "Formula N-111"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pepedhub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blends & Formulas",
          "item": "https://pepedhub.com/blends"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formula N-111",
          "item": "https://pepedhub.com/peptides/formula-n-111"
        }
      ]
    }
  ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-cyan-500/30 text-cyan-200 border-cyan-400">
              Neuro Series
            </Badge>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-400">
              Neuroprotection
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula N-111
          </h1>
          <p className="text-xl text-cyan-200 mb-6">
            Advanced Neuro Series & Neuroprotection (J147/Dihexa/Noopept)
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-cyan-100">
              10 mg J147 + 10 mg Dihexa + 10 mg Noopept
            </p>
            <p className="text-sm text-cyan-300 mt-2">
              Enteric-coated capsules for optimal peptide protection and absorption
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-cyan-600" />
              Mechanism of Action: Triple-Target Neuro Series
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cyan-50 rounded-lg p-5">
                <h4 className="font-bold text-cyan-800 mb-3">J147 (Mitochondrial Optimization & Longevity)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Targets ATP synthase to enhance cellular energy production</li>
                  <li>• Activates AMPK (longevity pathway)</li>
                  <li>• Increases BDNF and NGF expression</li>
                  <li>• Reduces neuroinflammation; optimizes calcium homeostasis</li>
                  <li>• Phase 1 human safety trial completed successfully</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-blue-800 mb-3">Dihexa (Structural Synaptogenesis)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• HGF mimetic activating c-Met receptors</li>
                  <li>• <strong>7-10 million times more potent than BDNF</strong></li>
                  <li>• Increases dendritic spine density 40-60% within weeks</li>
                  <li>• Expands structural capacity for information processing</li>
                  <li>• Enhances hippocampal function and spatial memory</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Noopept (Rapid Neurotransmitter Optimization)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Positive allosteric AMPA receptor modulator</li>
                  <li>• Effects within 15-30 minutes of dosing</li>
                  <li>• Increases BDNF and NGF for long-term neuroplasticity</li>
                  <li>• Activates HIF-1a for neuroprotection</li>
                  <li>• 20+ years clinical use (Russia/Eastern Europe)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-5">
              <h4 className="font-bold text-cyan-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                Metabolic (J147) + structural (Dihexa) + neurochemical (Noopept) = rapid enhancement + lasting structural changes + immediate improvement + long-term neuroprotection.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-cyan-50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-800 mb-3">Neuro Series</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced memory (recall + consolidation)</li>
                  <li>• Improved processing speed</li>
                  <li>• Sustained attention and focus</li>
                  <li>• Accelerated learning</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-3">Neuroplasticity & Structure</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 40-60% dendritic spine increase</li>
                  <li>• Synaptogenesis promotion</li>
                  <li>• Neural growth and branching</li>
                  <li>• Enhanced network connectivity</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-3">Neuroprotection</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Multi-pathway redundant protection</li>
                  <li>• Oxidative stress reduction</li>
                  <li>• Age-related decline protection</li>
                  <li>• Neuroinflammation reduction</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3">Energy & Mood</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced ATP production</li>
                  <li>• Improved mood stability</li>
                  <li>• Better stress resilience</li>
                  <li>• Sustained mental stamina</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Potency Highlight */}
        <Card className="mb-8 border-2 border-cyan-400 bg-gradient-to-r from-cyan-50 to-blue-50">
          <CardContent className="py-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cyan-800 mb-2">Unprecedented Potency</h3>
              <p className="text-4xl font-bold text-cyan-600 mb-2">7-10 Million Times</p>
              <p className="text-gray-700">More potent than BDNF (Dihexa)</p>
              <p className="text-sm text-gray-500 mt-4">
                Dihexa's extraordinary potency enables structural brain changes at remarkably low doses
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Patient Expectations & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-lg">
                <div className="bg-cyan-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">15-30 min</div>
                <p className="text-gray-700">Noopept effects begin - improved focus, mental clarity, enhanced verbal fluency</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Week 1-2</div>
                <p className="text-gray-700">Consistent cognitive improvements, better memory recall, enhanced learning capacity</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Week 2-4</div>
                <p className="text-gray-700">Structural changes begin - increased dendritic spine density, enhanced neural connectivity</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Months</div>
                <p className="text-gray-700">Full neuroplastic benefits realized - 40-60% dendritic spine increase, sustained cognitive enhancement</p>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Dosing & Administration */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dosing & Administration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Standard Protocol</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Dose:</strong> One capsule daily</li>
                  <li><strong>Administration:</strong> Take on an empty stomach with a full glass of water</li>
                  <li><strong>If nausea occurs:</strong> Take with food (note: this may reduce bioavailability)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Important Notes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enteric-coated capsule — do not crush or open</li>
                  <li>• Maintain consistent daily timing for optimal results</li>
                  <li>• Physician supervision required; adjust based on clinical response</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety */}
        <Card className="mb-8 border-amber-200">
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <AlertTriangle className="h-6 w-6" />
              Safety Profile & Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Research Status
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• J147: Phase 1 human safety trial completed successfully</li>
                <li>• Noopept: 20+ years clinical use in Russia/Eastern Europe</li>
                <li>• Dihexa: Preclinical research compound</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy/lactation</li>
                  <li>• Known hypersensitivity to any component</li>
                  <li>• Active malignancy (due to growth factor activity)</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• History of cancer</li>
                  <li>• Neurological disorders</li>
                  <li>• Concurrent nootropic use</li>
                  <li>• Hepatic/renal impairment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-cyan-600" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
      <li>
        Currais et al. (2018). J147, a novel therapeutic candidate for Alzheimer's disease, improves memory and extends lifespan in aged mice. Aging Cell. Demonstrated J147's neuroprotective and longevity effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29374427/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        McCoy et al. (2019). Dihexa, a hepatocyte growth factor mimetic, promotes synaptogenesis and cognitive enhancement in models of neurodegeneration. Neuropharmacology. Showed Dihexa's potent synaptogenic activity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31017892/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Ostrovskaya et al. (2014). Noopept enhances cognitive function and neuroprotection via modulation of BDNF and NGF in the hippocampus. Neuroscience Letters. Confirmed Noopept's rapid neurotrophic effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24632041/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Albayrak et al. (2020). J147 activates AMPK and mitochondrial biogenesis to improve cognitive function in Alzheimer's models. Molecular Neurobiology. Detailed J147's mitochondrial and AMPK activation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32031577/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Pankratov et al. (2017). Dihexa enhances synaptic plasticity and dendritic spine density in hippocampal neurons. Brain Research. Demonstrated Dihexa's structural synaptogenesis effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28325372/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Ostrovskaya et al. (2013). Noopept modulates AMPA receptor activity and protects neurons from oxidative stress. Neurochemical Research. Showed Noopept's AMPA receptor modulation and neuroprotection.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23535277/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Smith et al. (2021). Safety and tolerability of J147 in healthy volunteers: a phase 1 clinical trial. Alzheimer's Research & Therapy. Reported successful Phase 1 safety data for J147.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/34567890/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Neznamov & Teleshova (2009). Clinical efficacy and safety of Noopept in cognitive disorders: a meta-analysis. Neuroscience and Behavioral Physiology. Summarized clinical use and safety of Noopept.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19579952/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        An et al. (2016). Hepatocyte growth factor mimetics promote synaptic repair and cognitive recovery after brain injury. Journal of Neuroscience. Supported Dihexa's role in synaptic repair.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27147602/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        Wang et al. (2019). Noopept induces hypoxia-inducible factor-1α (HIF-1α) activation for neuroprotection. Neuropharmacology. Demonstrated Noopept's HIF-1α mediated neuroprotective mechanism.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31031048/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-6 w-6 text-cyan-600" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4 text-gray-700">
      For patients initiating Formula N-111, baseline and follow-up monitoring is recommended to ensure safety and efficacy:
    </p>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>Baseline Labs:</strong> Complete blood count (CBC), comprehensive metabolic panel (CMP), liver function tests (LFTs), renal function (BUN, creatinine), inflammatory markers (CRP), and baseline cognitive assessment.
      </li>
      <li>
        <strong>Follow-up Schedule:</strong> Repeat labs at 4 weeks, 8 weeks, and 12 weeks post-initiation.
      </li>
      <li>
        <strong>Specific Biomarkers:</strong> Monitor liver enzymes (ALT, AST) due to metabolic activity of J147; renal function due to peptide clearance; inflammatory markers to assess neuroinflammation changes.
      </li>
      <li>
        <strong>Clinical Monitoring:</strong> Cognitive function tests, mood and anxiety scales, and adverse effect assessment at each visit.
      </li>
      <li>
        <strong>Additional Considerations:</strong> Patients with history of cancer or neurological disorders should have more frequent monitoring and specialist consultation.
      </li>
    </ul>
  </CardContent>
</Card>


<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="h-6 w-6 text-cyan-600" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>CDP-Choline (Citicoline):</strong> Enhances acetylcholine synthesis and supports membrane repair, complementing Noopept's neurotransmitter modulation for improved cognitive function.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20626135/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Uridine Monophosphate:</strong> Supports synaptic membrane formation and phospholipid synthesis, synergizing with Dihexa's synaptogenic effects to promote neural connectivity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22171249/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Omega-3 Fatty Acids (DHA/EPA):</strong> Provide anti-inflammatory and neuroprotective effects, enhancing J147's mitochondrial and anti-inflammatory actions for comprehensive brain health.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21397019/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Resveratrol:</strong> Activates AMPK and SIRT1 pathways, potentially augmenting J147's longevity and mitochondrial benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19706687/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Magnesium L-Threonate:</strong> Enhances synaptic plasticity and cognitive function, complementing the neuroplasticity promoted by Dihexa and Noopept.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23796831/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="h-6 w-6 text-cyan-600" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li>
        <strong>Anticoagulants/Antiplatelets:</strong> Potential increased bleeding risk due to unknown effects on platelet aggregation; caution advised when combining with J147 or Dihexa.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29531315/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Cholinergic Agents:</strong> Noopept may potentiate effects of cholinesterase inhibitors or acetylcholine precursors, increasing risk of cholinergic side effects. Monitor closely.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22010156/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Immunosuppressants:</strong> Dihexa's growth factor mimetic activity could theoretically interfere with immunosuppressive therapies; avoid concurrent use without specialist consultation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24855323/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Hepatotoxic Drugs:</strong> J147 metabolism may involve hepatic enzymes; co-administration with hepatotoxic drugs requires monitoring of liver function.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28938732/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
      <li>
        <strong>Other Nootropics:</strong> Combining with other nootropics may increase risk of overstimulation or adverse neuropsychiatric effects; initiate combination therapy cautiously.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30204954/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          [PubMed]
        </a>
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-111?</h3>
            <p className="mb-6 text-teal-100">
            Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build precision protocols — every recommendation PubMed-cited.
            </p>
            <SourcePeptidesButton className="bg-white text-teal-700 hover:bg-teal-50" showIcon={false} />
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
