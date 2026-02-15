import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Heart, Sparkles, AlertTriangle, CheckCircle, Zap, Shield, ArrowLeft} from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BlendFormulaN2331() {
  usePageTitle("Formula N-2331: Neuro-Cognitive Enhancement & NAD+ Support", {
    description: "Advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization and cellular energy support. A proprietary DrsPeptides compound.",
    keywords: ['Formula N-2331', 'N-2331', 'N2331', 'DrsPeptides formula', 'proprietary peptide blend', 'neuro-cognitive formula', 'NAD+ blend', 'Dihexa', 'Selank', 'Semax', 'NAD+'],
    ogType: 'product' as const,
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
      "@type": "Product",
      "name": "Formula N-2331",
      "alternateName": ['N-2331', 'N2331', 'Formula N2331', 'DrsPeptides N-2331', 'Neuro Enhancement Formula', 'Neuro Series N-2331'],
      "description": "Advanced neuro-cognitive enhancement formula with Dihexa, Selank, Semax, and NAD+ for comprehensive brain optimization and cellular energy support. A proprietary DrsPeptides compound.",
      "url": "https://pepedhub.com/peptides/formula-n-2331",
      "brand": {
        "@type": "Brand",
        "name": "DrsPeptides"
      },
      "category": "Cognitive Enhancement",
      "manufacturer": {
        "@type": "Organization",
        "name": "DrsPeptides",
        "url": "https://drspeptides.com"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "DrsPeptides",
          "url": "https://drspeptides.com"
        }
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
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Get a Personalized Formula N-2331 Protocol</h3>
            <p className="mb-6 text-teal-100">
              Get a personalized protocol from Dr. Peptide AI — powered by 16 specialized AI agents trained on 2,800+ clinical studies.
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
