import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Zap, Sparkles, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function BlendFormulaN111() {
  usePageTitle("Formula N-111: Neuro Series & Neuroprotection", {
    description: "Advanced cognitive enhancement formula with J147, Dihexa, and Noopept for comprehensive neuroprotection and brain optimization.",
    keywords: ["cognitive enhancement", "J147", "Dihexa", "Noopept", "neuroprotection", "brain health", "memory", "focus", "neuroplasticity"]
  });

  return (
    <div className="min-h-screen bg-gray-50">
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
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-111?</h3>
            <p className="mb-6 text-teal-100">
              DrsPeptides.com provides pharmaceutical-grade formulas with comprehensive quality assurance for healthcare provider use.
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
