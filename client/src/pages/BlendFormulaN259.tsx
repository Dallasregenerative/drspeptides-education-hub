import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Moon, Clock, Brain, Heart, AlertTriangle, CheckCircle, Sparkles } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function BlendFormulaN259() {
  usePageTitle("Formula N-259: Sleep & Circadian Optimization", {
    description: "Advanced sleep enhancement formula with Apigenin, Magnesium Glycinate, L-Theanine, and Melatonin for comprehensive circadian rhythm optimization.",
    keywords: ["sleep formula", "circadian rhythm", "apigenin", "magnesium glycinate", "L-theanine", "melatonin", "sleep optimization", "insomnia"]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-indigo-500/30 text-indigo-200 border-indigo-400">
              Neuro Series
            </Badge>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-400">
              Sleep & Circadian
            </Badge>
            <Badge className="bg-green-500/30 text-green-200 border-green-400">
              High Evidence Level
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula N-259
          </h1>
          <p className="text-xl text-indigo-200 mb-6">
            Advanced Sleep Enhancement & Circadian Rhythm Optimization Protocol
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-indigo-100">
              50 mg Apigenin + 300 mg Magnesium Glycinate + 200 mg L-Theanine + 500 mcg Melatonin
            </p>
            <p className="text-sm text-indigo-300 mt-2">
              Enteric-coated capsules for optimal absorption
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mechanism of Action */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-indigo-600" />
              Mechanism of Action: Four-Pathway Sleep Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Apigenin (GABAergic Anxiolysis)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Binds GABA-A receptors (benzodiazepine site) without tolerance/dependence</li>
                  <li>• Reduces sleep onset latency; promotes non-drowsy relaxation</li>
                  <li>• Reduces cortisol and stress-induced insomnia</li>
                  <li>• Neuroprotective: inhibits neuroinflammation, reduces oxidative stress</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Magnesium Glycinate (Neuromuscular Relaxation)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• NMDA receptor antagonism reduces CNS excitability</li>
                  <li>• Enhances GABA activity; regulates melatonin synthesis</li>
                  <li>• Glycine component: inhibitory neurotransmitter, improves sleep quality</li>
                  <li>• Superior bioavailability vs. other magnesium forms</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-blue-800 mb-3">L-Theanine (Alpha Wave Promotion)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Increases alpha brain waves (relaxed alertness without sedation)</li>
                  <li>• Modulates GABA, serotonin, dopamine for calm focus</li>
                  <li>• Reduces psychological/physiological stress responses</li>
                  <li>• Improves REM and deep sleep architecture</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-5">
                <h4 className="font-bold text-amber-800 mb-3">Melatonin (Circadian Signaling)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Synchronizes circadian rhythm via SCN signaling</li>
                  <li>• Low dose (500 mcg) mimics physiological levels, avoids next-day grogginess</li>
                  <li>• Reduces sleep onset latency 7-12 minutes</li>
                  <li>• Powerful antioxidant (mitochondrial protection)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-5">
              <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                GABAergic anxiolysis (Apigenin) + neuromuscular relaxation (Magnesium) + alpha wave promotion (L-Theanine) + circadian signaling (Melatonin) = comprehensive sleep architecture optimization without tolerance or dependence.
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
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-3">Sleep Quality</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reduced sleep onset latency</li>
                  <li>• Improved sleep continuity</li>
                  <li>• Enhanced deep sleep and REM</li>
                  <li>• Better overall sleep architecture</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3">Relaxation & Stress</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Non-drowsy daytime relaxation</li>
                  <li>• Reduced cortisol and stress hormones</li>
                  <li>• Reduced performance anxiety</li>
                  <li>• Physical muscle relaxation</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-3">Cognitive & Mood</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced next-day cognitive function</li>
                  <li>• Improved mood stability</li>
                  <li>• Better focus and mental clarity</li>
                  <li>• Reduced brain fog</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800 mb-3">Health & Recovery</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Immune system support</li>
                  <li>• Antioxidant and anti-inflammatory effects</li>
                  <li>• Supports metabolic health</li>
                  <li>• Neuroprotection and cellular repair</li>
                </ul>
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
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold">Night 1-3</div>
                <p className="text-gray-700">Faster sleep onset, reduced nighttime anxiety, improved relaxation</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold">Week 1</div>
                <p className="text-gray-700">More consistent sleep patterns, reduced middle-of-night awakenings</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold">Weeks 2-4</div>
                <p className="text-gray-700">Consolidated improvements in sleep quality, better next-day energy and mood</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full px-3 py-1 text-sm font-bold">1-3 Months</div>
                <p className="text-gray-700">Optimized circadian rhythm, sustained deep/REM sleep, improved daytime performance</p>
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
                  <li><strong>Dose:</strong> One capsule 30-60 minutes before bedtime</li>
                  <li><strong>Timing:</strong> Consistent nightly timing supports circadian entrainment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Optimization Tips</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid screens 30-60 min before bed</li>
                  <li>• Cool, dark sleep environment</li>
                  <li>• Consistent sleep/wake schedule (even weekends)</li>
                  <li>• Avoid caffeine after 2 PM; limit alcohol</li>
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
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Excellent Long-Term Safety Profile</h4>
              <p className="text-gray-700">All components have extensive clinical safety data and no tolerance development</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pregnancy/lactation</li>
                  <li>• Known hypersensitivity to any component</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Medical Supervision</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Severe hepatic/renal impairment</li>
                  <li>• Autoimmune disorders</li>
                  <li>• Depression/psychiatric conditions</li>
                  <li>• Concurrent sedative medications</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">Key Drug Interactions</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• CNS depressants (additive sedation)</li>
                <li>• Anticoagulants (apigenin)</li>
                <li>• Antihypertensives (magnesium)</li>
                <li>• Immunosuppressants (melatonin)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-259?</h3>
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
