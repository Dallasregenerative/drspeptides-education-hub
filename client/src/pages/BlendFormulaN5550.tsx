import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Zap, Sparkles, AlertTriangle, CheckCircle, TrendingDown, Scale } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function BlendFormulaN5550() {
  usePageTitle("Formula N-5550: Multi-Target Neuro Series", {
    description: "Advanced cognitive enhancement formula with Dihexa, Tesofensine, and Methylene Blue for comprehensive brain optimization and weight management.",
    keywords: ["cognitive enhancement", "Dihexa", "Tesofensine", "Methylene Blue", "brain health", "weight loss", "focus", "memory", "neuroplasticity"]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-500/30 text-blue-200 border-blue-400">
              Neuro Series
            </Badge>
            <Badge className="bg-purple-500/30 text-purple-200 border-purple-400">
              Weight Management
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formula N-5550
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Advanced Multi-Target Neuro Series (Dihexa/Tesofensine/Methylene Blue)
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Composition
            </h3>
            <p className="text-blue-100">
              5 mg Dihexa + 0.5 mg Tesofensine + 50 mg Methylene Blue
            </p>
            <p className="text-sm text-blue-300 mt-2">
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
              <Brain className="h-6 w-6 text-blue-600" />
              Mechanism of Action: Triple-Pathway Neuro Series
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-blue-800 mb-3">Dihexa (Neurotropic Pathway)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Potentiates HGF activity at c-Met receptors</li>
                  <li>• Promotes synaptogenesis and neural network development</li>
                  <li>• <strong>Seven orders of magnitude more potent than BDNF</strong></li>
                  <li>• Creates lasting structural brain connectivity improvements</li>
                  <li>• Enhances hippocampal function and spatial memory</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5">
                <h4 className="font-bold text-indigo-800 mb-3">Tesofensine (Neurotransmitter Optimization)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Triple monoamine reuptake inhibitor (serotonin, norepinephrine, dopamine)</li>
                  <li>• High-affinity inhibition: DAT 8.0 nM, NET 3.2 nM, SERT 11.0 nM</li>
                  <li>• Optimizes neurotransmitter balance for focus and motivation</li>
                  <li>• Proven appetite suppression and metabolic benefits</li>
                  <li>• <strong>9-day half-life</strong> provides sustained effects</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <h4 className="font-bold text-purple-800 mb-3">Methylene Blue (Mitochondrial Enhancement)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Alternative electron carrier in mitochondrial transport chain</li>
                  <li>• Bypasses Complex I and III deficiencies</li>
                  <li>• Enhances cellular energy metabolism</li>
                  <li>• Reduces oxidative stress and provides neuroprotection</li>
                  <li>• Optimal cognitive benefits at low doses (50mg)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-5">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Synergistic Integration
              </h4>
              <p className="text-gray-700">
                Dihexa builds neural infrastructure + Tesofensine optimizes neurotransmitter function + Methylene Blue provides metabolic foundation = comprehensive cognitive enhancement exceeding single-agent approaches.
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
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-3">Neuro Series</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Spatial memory improvements</li>
                  <li>• Enhanced working memory capacity</li>
                  <li>• Accelerated learning speed</li>
                  <li>• Improved memory consolidation</li>
                  <li>• Enhanced cognitive flexibility</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-3">Weight Management</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Appetite suppression</li>
                  <li>• <strong>9.2% weight loss</strong> (clinical trials)</li>
                  <li>• Enhanced fat oxidation</li>
                  <li>• Improved metabolic rate</li>
                  <li>• Favorable body composition</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-3">Energy & Metabolism</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Enhanced ATP production</li>
                  <li>• Consistent energy levels</li>
                  <li>• Improved metabolic flexibility</li>
                  <li>• Enhanced insulin sensitivity</li>
                  <li>• Sustained mental stamina</li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-pink-800 mb-3">Neuroplasticity & Brain Health</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Synaptogenesis promotion</li>
                  <li>• Neural growth and branching</li>
                  <li>• Enhanced network connectivity</li>
                  <li>• Neuroprotection against decline</li>
                  <li>• Increased neuroplasticity</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dual Benefit Highlight */}
        <Card className="mb-8 border-2 border-blue-400 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="py-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Cognitive + Weight Management</h3>
              <p className="text-gray-700">The only formula that enhances brain function while supporting weight loss</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm text-center">
                <Brain className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-blue-600">7 Million x</p>
                <p className="text-sm text-gray-600">More potent than BDNF (Dihexa)</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm text-center">
                <Scale className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-purple-600">9.2%</p>
                <p className="text-sm text-gray-600">Weight loss in clinical trials (Tesofensine)</p>
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
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-6 Hours</div>
                <p className="text-gray-700">Enhanced mental clarity and focus, improved energy without jitters, reduced appetite and food cravings, better cognitive performance</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Days</div>
                <p className="text-gray-700">Sustained cognitive enhancement, improved energy</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-2 Weeks</div>
                <p className="text-gray-700">Weight loss begins, enhanced learning, better sleep</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-lg">
                <div className="bg-pink-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">2-4 Weeks</div>
                <p className="text-gray-700">Significant cognitive improvements, 3-5% weight loss</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                <div className="bg-rose-600 text-white rounded-full px-3 py-1 text-sm font-bold whitespace-nowrap">1-3 Months</div>
                <p className="text-gray-700">Optimized cognitive function, sustained metabolic benefits</p>
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
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-amber-800 mb-2">Professional Medical Oversight Required</h4>
              <p className="text-sm text-gray-700">Sophisticated multi-target pharmacology requires experienced healthcare providers with comprehensive patient screening and monitoring protocols.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-800 mb-2">Absolute Contraindications</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Serotonergic medications (SSRIs, SNRIs, MAOIs, tricyclic antidepressants)</li>
                  <li>• Pregnancy and lactation</li>
                  <li>• G6PD deficiency (contraindicated due to methylene blue)</li>
                  <li>• Severe cardiovascular disease</li>
                  <li>• Severe liver/kidney impairment</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Requires Careful Monitoring</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cardiovascular status (regular BP and heart rate monitoring)</li>
                  <li>• Neurological function (cognitive response assessment)</li>
                  <li>• Drug interactions (careful review of all concurrent medications)</li>
                  <li>• Individual response (personalized monitoring)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Formula N-5550?</h3>
            <p className="mb-6 text-teal-100">
              DrsPeptides.com provides pharmaceutical-grade formulas with comprehensive quality assurance for healthcare provider use.
            </p>
            <Button 
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => window.open('https://drspeptides.com', '_blank')}
            >
              Source Medical-Grade Peptides
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-8">
          <strong>PHYSICIAN USE ONLY | RESEARCH PEPTIDE</strong>
        </p>
      </div>
    </div>
  );
}
