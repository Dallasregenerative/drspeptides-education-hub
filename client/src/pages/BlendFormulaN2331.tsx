import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Heart, Sparkles, AlertTriangle, CheckCircle, Zap, Shield, ArrowLeft, BookOpen , Stethoscope } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaN2331() {
  usePageTitle("Formula N-2331: Neuro-Cognitive Enhancement & NAD+ Support", {
    description: "Advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization and cellular energy support. A proprietary DrsPeptides compound.",
    keywords: ['Formula N-2331', 'N-2331', 'N2331', 'DrsPeptides formula', 'proprietary peptide blend', 'neuro-cognitive formula', 'NAD+ blend', 'Dihexa', 'Selank', 'Semax', 'NAD+'],
    ogType: 'article' as const,
    schema: [
    {
      "@context": "https://schema.org",
      "@type": "Drug",
      "name": "Formula N-2331",
      "alternateName": ['N-2331', 'N2331', 'Formula N2331', 'DrsPeptides N-2331', 'Neuro Enhancement Formula', 'Neuro Series N-2331'],
      "description": "Advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization and cellular energy support. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-n-2331",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "activeIngredient": "2 mg Dihexa + 0.3 mg Selank + 0.3 mg Semax + 100 mg NAD+",
      "administrationRoute": "Varies by formulation",
      "drugClass": "Peptide Therapy Compound",
      "mechanismOfAction": "Neuro-Cognitive Enhancement & NAD+ Support",
      "isPartOf": {
        "@type": "MedicalWebPage",
        "name": "Peptide Education Hub",
        "url": "https://pepedhub.com"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Formula N-2331 - Neuro-Cognitive Enhancement & NAD+ Support | DrsPeptides Proprietary Formula",
      "description": "Advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization and cellular energy support. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-n-2331",
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
        "name": "Formula N-2331"
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
          "name": "Formula N-2331",
          "item": "https://pepedhub.com/peptides/formula-n-2331"
        }
      ]
    }
  ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-violet-500/30 text-violet-200 border-violet-400">
              Neuro Series Enhancement
            </Badge>
            <Badge className="bg-amber-500/30 text-amber-200 border-amber-400">
              NAD+ Support
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula N-2331
          </h1>
          <p className="text-xl text-violet-200 mb-6">
            Advanced Neuro Series Enhancement & Metabolic Support
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-violet-100">
              2 mg Dihexa + 0.3 mg Selank + 0.3 mg Semax + 100 mg NAD+
            </p>
            <p className="text-sm text-violet-300 mt-2">
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
              <Brain className="h-6 w-6 text-violet-600" />
              Mechanism of Action: Four-Pathway Neuro Series Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-violet-50 rounded-lg p-5">
                <h4 className="font-bold text-violet-800 mb-3">Dihexa (Synaptogenesis & Structural Enhancement)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• HGF mimetic promoting new synaptic connections</li>
                  <li>• Enhances dendritic spine density and neural network development</li>
                  <li>• Improves hippocampal function and spatial memory</li>
                  <li>• Creates lasting structural brain improvements</li>
                  <li>• 7 orders of magnitude more potent than BDNF</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Selank (Anxiolytic & Emotional Regulation)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Synthetic analogue of tuftsin (immune peptide)</li>
                  <li>• Modulates GABA and serotonin systems</li>
                  <li>• Reduces anxiety without sedation</li>
                  <li>• Enhances learning and memory consolidation</li>
                  <li>• Neuroprotective and anti-inflammatory effects</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Semax (BDNF Upregulation & Cognitive Enhancement)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ACTH(4-10) analogue with neurotropic properties</li>
                  <li>• Dramatically increases BDNF expression</li>
                  <li>• Enhances focus, mental clarity, and cognitive processing</li>
                  <li>• Neuroprotective in ischemic conditions</li>
                  <li>• Improves cerebral circulation</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-5">
                <h4 className="font-bold text-amber-800 mb-3">NAD+ (Cellular Energy & Longevity Pathway)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Essential cofactor for cellular energy production</li>
                  <li>• Activates sirtuins (longevity proteins)</li>
                  <li>• Supports mitochondrial function and DNA repair</li>
                  <li>• Declines with age; supplementation restores cellular function</li>
                  <li>• Enhances neuronal energy metabolism</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-5">
              <h4 className="font-bold text-violet-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                Structural enhancement (Dihexa) + anxiolytic support (Selank) + BDNF amplification (Semax) + metabolic foundation (NAD+) = comprehensive cognitive optimization with emotional stability and cellular energy support.
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
              <div className="bg-violet-50 rounded-lg p-4">
                <h4 className="font-bold text-violet-800 mb-3">Cognitive Enhancement</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced memory and learning</li>
                  <li>• Improved focus and mental clarity</li>
                  <li>• Faster cognitive processing</li>
                  <li>• Enhanced executive function</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3">Emotional & Mental Health</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reduced anxiety without sedation</li>
                  <li>• Improved mood stability</li>
                  <li>• Better stress resilience</li>
                  <li>• Emotional regulation support</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-3">Neuroprotection & Cellular</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• BDNF upregulation and neurogenesis</li>
                  <li>• Neuroprotection against ischemia</li>
                  <li>• Anti-inflammatory effects</li>
                  <li>• DNA repair and cellular longevity</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-3">Energy & Performance</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced cellular energy (ATP)</li>
                  <li>• Sustained mental stamina</li>
                  <li>• Improved physical and mental performance</li>
                  <li>• Better recovery and adaptation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Unique Value Proposition */}
        <Card className="mb-8 border-2 border-violet-400 bg-gradient-to-r from-violet-50 to-purple-50">
          <CardContent className="py-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-violet-800 mb-2">Cognitive + Emotional Balance</h3>
              <p className="text-lg text-gray-700 mb-4">
                The only formula combining powerful cognitive enhancement with anxiolytic support
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Zap className="h-6 w-6 text-violet-600 mx-auto mb-2" />
                  <p className="font-bold text-violet-800">Cognitive Power</p>
                  <p className="text-sm text-gray-600">Dihexa + Semax synergy</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Heart className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-bold text-purple-800">Emotional Calm</p>
                  <p className="text-sm text-gray-600">Selank anxiolytic support</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Shield className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-amber-800">Cellular Energy</p>
                  <p className="text-sm text-gray-600">NAD+ foundation</p>
                </div>
              </div>
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
              <div className="flex items-start gap-4 p-4 bg-violet-50 rounded-lg">
                <div className="bg-violet-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Days 1-7</div>
                <p className="text-gray-700">Reduced anxiety, improved focus, enhanced mental clarity, better mood stability</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Weeks 2-4</div>
                <p className="text-gray-700">Noticeable memory improvements, sustained cognitive enhancement, better stress management</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Weeks 4-8</div>
                <p className="text-gray-700">Significant cognitive gains, improved learning capacity, enhanced emotional resilience</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="bg-amber-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">Months 3-6</div>
                <p className="text-gray-700">Consolidated structural brain improvements, optimized cognitive function, sustained emotional well-being</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dosing */}
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
                  <li><strong>Timing:</strong> Morning on empty stomach for optimal peptide absorption</li>
                  <li><strong>Duration:</strong> 8-12 week cycles with 4-week breaks recommended</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Optimization Tips</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Consistent daily timing</li>
                  <li>• Adequate hydration</li>
                  <li>• Combine with B-vitamin support for NAD+ metabolism</li>
                  <li>• Cognitive training enhances neuroplastic benefits</li>
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy and lactation</li>
                  <li>• Active cancer or recent cancer history (&lt;5 years)</li>
                  <li>• Known hypersensitivity to any component</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Psychiatric conditions (monitor mood and anxiety responses)</li>
                  <li>• Cardiovascular disease</li>
                  <li>• Autoimmune disorders (Selank is immune-modulating)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Anxiolytics/antidepressants (may have additive effects)</li>
                <li>• Other NAD+ precursors (reduce doses to avoid excessive elevation)</li>
                <li>• Stimulants (use cautiously)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-gray-700" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
      <li>
        McCoy et al. (2019). Dihexa, a novel HGF mimetic, promotes synaptogenesis and cognitive enhancement in rodents. <em>Neuropharmacology.</em> Demonstrated Dihexa's potent synaptogenic effects and memory improvement.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30624425/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Ashmarin et al. (2005). Selank: anxiolytic and nootropic effects in clinical trials. <em>Bulletin of Experimental Biology and Medicine.</em> Showed anxiolytic efficacy without sedation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16082944/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Zolotarev et al. (2019). Semax increases BDNF expression and improves cognitive function post-ischemia. <em>Neuroscience Letters.</em> Confirmed neuroprotective and cognitive benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31164636/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Verdin (2015). NAD+ in aging, metabolism, and neurodegeneration. <em>Science.</em> Reviewed NAD+ role in mitochondrial function and longevity pathways.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25977511/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Mills et al. (2016). Long-term NAD+ supplementation improves mitochondrial and cognitive function in aged mice. <em>Cell Metabolism.</em> Demonstrated cognitive and energy metabolism improvements.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27411071/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Ashmarin et al. (2017). Mechanisms of Selank peptide action on neurotransmitter systems. <em>Neuroscience and Behavioral Physiology.</em> Detailed modulation of GABA and serotonin by Selank.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28856615/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Baranowska-Bosiacka et al. (2020). Neuroprotective effects of Semax in ischemic brain injury. <em>Pharmacological Reports.</em> Confirmed anti-inflammatory and neuroprotective properties.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32071633/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Cantó et al. (2015). NAD+ metabolism and its roles in cellular processes. <em>Cell Metabolism.</em> Comprehensive review of NAD+ pathways and therapeutic potential.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26000897/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Podlutskaya et al. (2017). Dihexa improves synaptic plasticity and cognitive function in neurodegenerative models. <em>Journal of Neuroscience Research.</em> Highlighted Dihexa’s therapeutic potential.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28093640/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Majeed et al. (2021). NAD+ precursors and brain health: a review of clinical evidence. <em>Frontiers in Aging Neuroscience.</em> Summarized NAD+ supplementation benefits on cognition.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/34118357/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-6 w-6 text-gray-700" />
      Monitoring & Lab Recommendations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li><strong>Baseline Labs:</strong> Complete blood count (CBC), comprehensive metabolic panel (CMP), liver function tests, renal function, inflammatory markers (CRP), and psychiatric evaluation if indicated.</li>
      <li><strong>Specific Biomarkers:</strong> NAD+ levels (if available), BDNF serum levels (research setting), and anxiety/depression scales (e.g., GAD-7, PHQ-9).</li>
      <li><strong>Follow-up Schedule:</strong> Assess clinical response and side effects at 4 weeks, 8 weeks, and 12 weeks.</li>
      <li><strong>Safety Monitoring:</strong> Monitor mood changes, anxiety symptoms, and any adverse effects related to peptide administration.</li>
      <li><strong>Additional Testing:</strong> Consider cardiovascular evaluation in patients with pre-existing conditions before initiation.</li>
    </ul>
  </CardContent>
</Card>


<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="h-6 w-6 text-gray-700" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li><strong>Dihexa + Semax:</strong> Both promote neuroplasticity and cognitive enhancement via complementary mechanisms—Dihexa through HGF mimetic synaptogenesis and Semax via BDNF upregulation. This combination may synergistically improve memory and learning. <a href="https://pubmed.ncbi.nlm.nih.gov/30624425/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[1]</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/31164636/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[3]</a></li>
      <li><strong>Selank + Anxiolytics:</strong> Selank modulates GABA and serotonin pathways and can be combined cautiously with SSRIs or benzodiazepines for enhanced anxiolytic effects, but requires monitoring for additive sedation. <a href="https://pubmed.ncbi.nlm.nih.gov/16082944/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[2]</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/28856615/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[6]</a></li>
      <li><strong>NAD+ + B-Vitamins:</strong> B-complex vitamins (B3, B6, B12) support NAD+ metabolism and recycling, enhancing cellular energy and mitochondrial function. Co-supplementation optimizes NAD+ bioavailability. <a href="https://pubmed.ncbi.nlm.nih.gov/26000897/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[8]</a></li>
      <li><strong>Semax + Cognitive Training:</strong> Combining Semax with cognitive exercises may potentiate neuroplasticity and cognitive gains through BDNF-mediated pathways. <a href="https://pubmed.ncbi.nlm.nih.gov/31164636/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[3]</a></li>
      <li><strong>Dihexa + Neurotrophic Factors:</strong> Potential synergy with other neurotrophic peptides (e.g., Cerebrolysin) to enhance synaptic repair and neurogenesis, though clinical data is limited. <a href="https://pubmed.ncbi.nlm.nih.gov/28093640/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[9]</a></li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <AlertTriangle className="h-6 w-6 text-gray-700" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
      <li><strong>Anxiolytics and Antidepressants:</strong> Selank may have additive effects with benzodiazepines, SSRIs, or SNRIs; caution advised to avoid excessive sedation or serotonin syndrome. Monitor patient closely. <a href="https://pubmed.ncbi.nlm.nih.gov/16082944/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[2]</a></li>
      <li><strong>Stimulants (e.g., amphetamines, methylphenidate):</strong> Potential additive CNS stimulation when combined with Semax or Dihexa; monitor for increased heart rate, anxiety, or hypertension. <a href="https://pubmed.ncbi.nlm.nih.gov/31164636/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[3]</a></li>
      <li><strong>NAD+ Precursors (e.g., nicotinamide riboside, nicotinamide mononucleotide):</strong> Concurrent use may lead to excessive NAD+ elevation; dose adjustments recommended to avoid adverse metabolic effects. <a href="https://pubmed.ncbi.nlm.nih.gov/34118357/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[10]</a></li>
      <li><strong>Immunomodulatory Drugs:</strong> Selank’s immune-modulating effects may interact with immunosuppressants or autoimmune therapies; use with caution and under supervision. <a href="https://pubmed.ncbi.nlm.nih.gov/28856615/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[6]</a></li>
      <li><strong>Anticoagulants:</strong> Limited data, but peptides affecting neurovascular circulation (Semax) may theoretically alter bleeding risk; monitor coagulation parameters if combined. <a href="https://pubmed.ncbi.nlm.nih.gov/32071633/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[7]</a></li>
    </ul>
  </CardContent>
</Card>

<CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-2331?</h3>
            <p className="mb-6 text-teal-100">
            Dr. Peptide AI generates personalized protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
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
