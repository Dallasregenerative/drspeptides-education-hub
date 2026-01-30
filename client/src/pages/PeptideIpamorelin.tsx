import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Moon, Bone, Shield, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PeptideIpamorelin() {
  usePageTitle("Ipamorelin - Growth Hormone Secretagogue", {
    description: "Evidence-based guide to ipamorelin growth hormone secretagogue. Mechanisms, anti-aging benefits, dosing protocols, and safety for healthcare providers."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Peptide Education Hub
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Selective Growth Hormone Secretagogue
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Ipamorelin
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The first selective GHRP-receptor agonist with high specificity for growth hormone release and minimal effects on cortisol or prolactin. Pentapeptide with applications in recovery, sleep optimization, muscle growth, and bone density.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">GH Release</p>
                  <p className="text-gray-600 text-sm">Selective</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Moon className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Sleep</p>
                  <p className="text-gray-600 text-sm">Enhancement</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Bone className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Bone</p>
                  <p className="text-gray-600 text-sm">Density</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Low</p>
                  <p className="text-gray-600 text-sm">Side Effects</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clinical Evidence Alert */}
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertDescription>
              <p className="text-blue-900 font-semibold mb-2">Landmark Research (219 Citations)</p>
              <p className="text-blue-800 text-sm">
                <strong>Raun et al. (1998):</strong> "Ipamorelin, the first selective growth hormone secretagogue" - European Journal of Endocrinology. <strong>Key finding:</strong> First GHRP-receptor agonist with selectivity for GH release, minimal effects on ACTH or cortisol (unlike GHRP-2, GHRP-6, hexarelin). Peak GH at 0.67 hours, declines to low levels by 6 hours. <strong>Clinical significance:</strong> Clean GH pulse without cortisol elevation makes it ideal for long-term use.
              </p>
            </AlertDescription>
          </Alert>

          {/* Main Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Ipamorelin?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Ipamorelin is a <strong>pentapeptide (5 amino acids)</strong> that functions as a highly selective growth hormone secretagogue (GHS). It was the first compound in its class to demonstrate <strong>selective activation of the ghrelin receptor (GHSR-1a)</strong> for GH release without significantly affecting other pituitary hormones like ACTH, cortisol, or prolactin.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Why Selectivity Matters</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Earlier GH secretagogues (GHRP-2, GHRP-6, hexarelin) stimulated GH release but also increased cortisol and prolactin, which can cause side effects with long-term use. Ipamorelin's <strong>selective mechanism</strong> provides the benefits of GH optimization (recovery, muscle growth, fat loss, sleep) <strong>without the hormonal disruption</strong> of non-selective compounds.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Applications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Recovery & Healing</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Post-workout recovery acceleration</li>
                          <li>• Injury healing support</li>
                          <li>• Tissue repair enhancement</li>
                          <li>• Reduced inflammation</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Sleep Optimization</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Improved sleep efficiency</li>
                          <li>• Increased slow-wave sleep</li>
                          <li>• Restores natural sleep patterns</li>
                          <li>• GH release during deep sleep</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Body Composition</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Lean muscle preservation</li>
                          <li>• Fat metabolism enhancement</li>
                          <li>• Improved muscle-to-fat ratio</li>
                          <li>• Metabolic rate optimization</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Bone Health</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Increased bone mineral content</li>
                          <li>• Longitudinal bone growth (46 citations)</li>
                          <li>• Bone density improvement</li>
                          <li>• Osteoporosis prevention</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Appears in Multiple Stacking Protocols</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-purple-900 text-sm">Recover Like Wolverine Stack</p>
                          <p className="text-purple-800 text-sm">Combined with BPC-157, TB-500, Tesamorelin, GHK-Cu for injury healing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Lean and Mean Stack</p>
                          <p className="text-blue-800 text-sm">Combined with IGF-1 LR3, CJC-1295, Tesamorelin for muscle gain + fat loss</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-indigo-900 text-sm">Sleep Optimization Stack</p>
                          <p className="text-indigo-800 text-sm">Combined with DSIP for deep sleep enhancement and recovery</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-teal-900 text-sm">Fat Loss Stack</p>
                          <p className="text-teal-800 text-sm">Combined with Semaglutide, CJC-1295 for muscle preservation during weight loss</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      See complete protocols in <Link href="/stacking-guide"><a className="underline font-semibold text-blue-600">Peptide Stacking Guide</a></Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">1. Selective GHSR-1a Receptor Activation</h4>
                    <p className="text-gray-700 mb-3">
                      Ipamorelin <strong>mimics ghrelin</strong> (the "hunger hormone") by selectively binding to the <strong>growth hormone secretagogue receptor type 1a (GHSR-1a)</strong> in the pituitary gland. This receptor activation triggers:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Enhanced cAMP production:</strong> Cyclic adenosine monophosphate acts as second messenger</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Calcium influx:</strong> Intracellular calcium signals somatotroph cells</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>GH secretion:</strong> Pulsatile release of growth hormone into bloodstream</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">2. Selective vs Non-Selective GH Secretagogues</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-900">Compound</th>
                            <th className="text-left p-3 font-semibold text-gray-900">GH Release</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Cortisol Impact</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Prolactin Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100 bg-green-50">
                            <td className="p-3 font-semibold text-green-900">Ipamorelin</td>
                            <td className="p-3 text-green-800">✓ Strong</td>
                            <td className="p-3 text-green-800">✓ Minimal</td>
                            <td className="p-3 text-green-800">✓ Minimal</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 text-gray-700">GHRP-2</td>
                            <td className="p-3 text-gray-600">✓ Strong</td>
                            <td className="p-3 text-red-600">✗ Elevated</td>
                            <td className="p-3 text-red-600">✗ Elevated</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 text-gray-700">GHRP-6</td>
                            <td className="p-3 text-gray-600">✓ Strong</td>
                            <td className="p-3 text-red-600">✗ Elevated</td>
                            <td className="p-3 text-red-600">✗ Elevated</td>
                          </tr>
                          <tr>
                            <td className="p-3 text-gray-700">Hexarelin</td>
                            <td className="p-3 text-gray-600">✓ Strong</td>
                            <td className="p-3 text-red-600">✗ Elevated</td>
                            <td className="p-3 text-red-600">✗ Elevated</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      <strong>Clinical advantage:</strong> Ipamorelin's selectivity allows long-term use without the hormonal disruption (elevated cortisol/prolactin) seen with non-selective GHRPs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">3. Growth Hormone Pulse Characteristics</h4>
                    <p className="text-gray-700 mb-3">
                      Research shows Ipamorelin creates a <strong>predictable GH pulse</strong>:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Peak at 0.67 hours (~40 minutes):</strong> Sharp rise in GH concentration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Decline by 6 hours:</strong> Returns to baseline levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Dose-dependent response:</strong> Higher doses create larger GH pulses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Mimics natural pulsatility:</strong> Similar to endogenous GH release patterns</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">4. Downstream Effects of GH Release</h4>
                    <p className="text-gray-700 mb-3">
                      Once GH is released into circulation, it triggers multiple beneficial pathways:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>IGF-1 production:</strong> Liver converts GH to insulin-like growth factor-1 (anabolic effects)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Protein synthesis:</strong> Enhanced muscle repair and growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Lipolysis:</strong> Fat breakdown for energy (improved body composition)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Bone remodeling:</strong> Osteoblast activation for bone density</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Sleep architecture:</strong> GH plays role in deep sleep cycles</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">Why Ipamorelin Works Better Than Exogenous GH</h4>
                    <p className="text-purple-800 text-sm leading-relaxed mb-2">
                      <strong>Pulsatile vs continuous:</strong> Ipamorelin stimulates natural pulsatile GH release (mimics body's rhythm), whereas exogenous GH injections create continuous elevation. The body responds better to pulses.
                    </p>
                    <p className="text-purple-800 text-sm leading-relaxed mb-2">
                      <strong>Negative feedback preserved:</strong> Natural GH release maintains hypothalamic-pituitary feedback loops, preventing shutdown of endogenous production.
                    </p>
                    <p className="text-purple-800 text-sm leading-relaxed">
                      <strong>Cost and safety:</strong> Significantly less expensive than pharmaceutical GH, with lower risk of side effects (edema, joint pain, insulin resistance).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab - Content continues... */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertDescription>
                      <p className="text-blue-900 font-semibold mb-2">Landmark Study (219 Citations)</p>
                      <p className="text-blue-800 text-sm">
                        <strong>Raun K, Hansen BS, Johansen NL, et al. (1998):</strong> "Ipamorelin, the first selective growth hormone secretagogue." European Journal of Endocrinology 139(5):552-561. First demonstration of selective GHSR-1a activation without cortisol/prolactin elevation.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Bone Health Research</h4>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Longitudinal Bone Growth (46 Citations)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Johansen PB et al. (1999):</strong> "Ipamorelin, a new growth-hormone-releasing peptide, induces longitudinal bone growth in rats."
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> Dose-dependent increase in longitudinal bone growth rate:
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Baseline: 42 μm/day</li>
                          <li>• Low dose: 44 μm/day (4.8% increase)</li>
                          <li>• Medium dose: 50 μm/day (19% increase)</li>
                          <li>• High dose: 52 μm/day (24% increase)</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-2">
                          <strong>Clinical significance:</strong> Potential applications in growth disorders, osteoporosis prevention, fracture healing.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Bone Mineral Content</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> Ipamorelin and GHRP-6 increased bone mineral content in adult female rats (DXA measured).
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Improved bone density</li>
                          <li>• Enhanced mineralization</li>
                          <li>• Comparable efficacy to GH treatment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Sleep Quality Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Sleep Efficiency & Slow-Wave Sleep</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> Ipamorelin administration demonstrated:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Improved sleep efficiency</li>
                        <li>• Increased slow-wave sleep duration</li>
                        <li>• Restores natural sleep patterns through GH optimization</li>
                        <li>• GH release during deep sleep enhances recovery</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Mechanism:</strong> Growth hormone plays critical role in deep sleep cycles. Ipamorelin's GH pulse before bed optimizes sleep architecture.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Body Composition Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Lean Mass & Fat Loss</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> Patients using Ipamorelin reported:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Improved lean muscle mass preservation</li>
                        <li>• Enhanced fat metabolism</li>
                        <li>• Better muscle-to-fat ratio</li>
                        <li>• Improved energy levels over several weeks</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Application:</strong> Ideal for body recomposition goals (simultaneous muscle gain and fat loss).
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Comparative Studies</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Ipamorelin vs Other GHRPs</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> Ipamorelin demonstrated superior selectivity profile:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• <strong>vs GHRP-2:</strong> Similar GH release, but Ipamorelin had minimal cortisol elevation</li>
                        <li>• <strong>vs GHRP-6:</strong> Comparable bone benefits, less hunger stimulation</li>
                        <li>• <strong>vs Hexarelin:</strong> Similar efficacy, better long-term safety profile</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Conclusion:</strong> Ipamorelin offers the "cleanest" GH stimulation with fewest side effects.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-3">Research Limitations</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• Most bone growth studies conducted in animal models (rats)</li>
                      <li>• Limited large-scale human clinical trials for body composition</li>
                      <li>• Sleep quality data primarily from patient reports, not polysomnography</li>
                      <li>• Long-term safety data (&gt;2 years continuous use) incomplete</li>
                      <li>• Not FDA-approved for human use in US (research peptide status)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab - Continuing with comprehensive dosing... */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols & Administration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-purple-200 bg-purple-50">
                    <AlertDescription>
                      <p className="text-purple-900 font-semibold mb-2">Appears in 4 Stacking Protocols</p>
                      <p className="text-purple-800 text-sm">
                        Ipamorelin is a core component of <strong>Recover Like Wolverine</strong> (injury healing), <strong>Lean and Mean</strong> (muscle gain + fat loss), <strong>Sleep Optimization</strong> (deep sleep enhancement), and <strong>Fat Loss</strong> (muscle preservation) stacks. See complete protocols in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Standard Dosing Protocol</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Single Daily Dose (Most Common)</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 200-300mcg per injection</li>
                          <li><strong>Frequency:</strong> Once daily before bed</li>
                          <li><strong>Timing:</strong> 1-1.5 hours after last meal</li>
                          <li><strong>Duration:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Sleep optimization, recovery, general wellness
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Split Dosing (Advanced)</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Morning dose:</strong> 100-150mcg (fasted or post-workout)</li>
                          <li><strong>Evening dose:</strong> 100-150mcg (before bed)</li>
                          <li><strong>Total daily:</strong> 200-300mcg</li>
                          <li><strong>Duration:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Body recomposition, athletic performance, maximum GH optimization
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Goal-Specific Protocols</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Recovery & Injury Healing</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Dose:</strong> 200-300mcg once daily</li>
                          <li>• <strong>Timing:</strong> Immediately post-workout OR before bed</li>
                          <li>• <strong>Cycle:</strong> 8-12 weeks (acute injury) or ongoing (chronic recovery)</li>
                          <li>• <strong>Stack with:</strong> BPC-157, TB-500, GHK-Cu (Wolverine stack)</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Sleep Optimization</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Dose:</strong> 200-300mcg once daily</li>
                          <li>• <strong>Timing:</strong> Right before bed (within 30 minutes of sleep)</li>
                          <li>• <strong>Cycle:</strong> 8-12 weeks on, 4-8 weeks off</li>
                          <li>• <strong>Stack with:</strong> DSIP for synergistic sleep enhancement</li>
                          <li>• <strong>Note:</strong> No food 30 minutes after injection for best absorption</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Muscle Gain & Fat Loss</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Dose:</strong> Split dosing - 100-150mcg 2x daily</li>
                          <li>• <strong>Timing:</strong> Morning (fasted) + before bed</li>
                          <li>• <strong>Cycle:</strong> 12 weeks on, 8 weeks off</li>
                          <li>• <strong>Stack with:</strong> CJC-1295, Tesamorelin, IGF-1 LR3 (Lean and Mean stack)</li>
                          <li>• <strong>Diet:</strong> Caloric surplus for muscle gain, deficit for fat loss</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Anti-Aging & Longevity</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Dose:</strong> 200mcg once daily (conservative)</li>
                          <li>• <strong>Timing:</strong> Before bed</li>
                          <li>• <strong>Cycle:</strong> 8 weeks on, 4 weeks off, repeat long-term</li>
                          <li>• <strong>Goal:</strong> Maintain youthful GH levels, improve recovery, preserve lean mass</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Administration Routes</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Subcutaneous Injection (Recommended)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Location:</strong> Abdomen, thigh, or upper arm (rotate injection sites)
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Advantages:</strong> Easy self-administration, consistent absorption, minimal discomfort
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Technique:</strong> Pinch skin, insert needle at 45-90° angle, inject slowly, release skin
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Intramuscular Injection (Alternative)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Location:</strong> Deltoid, gluteus, vastus lateralis
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Advantages:</strong> Potentially faster absorption
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Note:</strong> May cause more discomfort; subcutaneous is generally preferred for peptides
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Timing Strategies</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Before bed (primary):</strong> Capitalizes on natural GH release during sleep, enhances sleep quality</li>
                        <li><strong>Post-workout:</strong> Supports recovery and muscle repair when tissues are primed for growth</li>
                        <li><strong>Morning fasted:</strong> Maximizes fat-burning potential, ideal for body recomposition</li>
                        <li><strong>Empty stomach rule:</strong> No food 1-1.5 hours before OR 30 minutes after injection</li>
                        <li><strong>Consistency matters:</strong> Same time daily maintains stable GH patterns</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Cycling Protocols</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Recommended Cycling</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Standard cycle:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        <li><strong>Conservative cycle:</strong> 8 weeks on, 4 weeks off (for beginners)</li>
                        <li><strong>Aggressive cycle:</strong> 12 weeks on, 8 weeks off (experienced users)</li>
                        <li><strong>45-day protocol:</strong> Exactly 45 days on, 3-4 weeks off (one vial = 45 days)</li>
                        <li><strong>Rationale:</strong> Prevents receptor desensitization, maintains long-term effectiveness</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Synergistic Combinations</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Ipamorelin + CJC-1295 (Most Popular Stack)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Synergy:</strong> CJC-1295 amplifies GH pulse, Ipamorelin triggers release. Combined effect &gt; individual peptides.
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Protocol:</strong> Inject both simultaneously (same syringe or separate)
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Dosing:</strong> Ipamorelin 200-300mcg + CJC-1295 100-200mcg before bed
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Ipamorelin + DSIP (Sleep Stack)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Synergy:</strong> DSIP induces sleep, Ipamorelin optimizes GH release during deep sleep
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Protocol:</strong> DSIP 100-300mcg + Ipamorelin 200-300mcg before bed
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Ipamorelin + BPC-157 + TB-500 (Recovery Stack)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Synergy:</strong> BPC-157/TB-500 handle tissue repair, Ipamorelin provides GH support for recovery
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Protocol:</strong> See "Recover Like Wolverine" in Stacking Guide
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Considerations & Contraindications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-red-200 bg-red-50">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="ml-2">
                      <p className="text-red-900 font-semibold mb-2">Critical Safety Warning</p>
                      <p className="text-red-800 text-sm">
                        Ipamorelin is <strong>NOT FDA-approved</strong> for human use in the United States. It is sold for research purposes only. Any therapeutic use should be under direct supervision of a qualified healthcare provider. <strong>WADA-banned substance</strong> for competitive athletes.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Absolute Contraindications</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Active Cancer or Recent Cancer History</p>
                          <p className="text-red-800 text-sm">GH secretagogues may theoretically support tumor growth through IGF-1 pathway. <strong>Avoid if cancer diagnosed within past 5 years.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Pregnancy or Breastfeeding</p>
                          <p className="text-red-800 text-sm">No safety data available for pregnant/nursing women. <strong>Do not use.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Uncontrolled Diabetes</p>
                          <p className="text-red-800 text-sm">GH can affect insulin sensitivity. Stabilize blood sugar before use.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Relative Contraindications (Use with Caution)</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Family History of Cancer</p>
                          <p className="text-yellow-800 text-sm">Increased caution warranted. Discuss with oncologist before use.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Diabetic Retinopathy</p>
                          <p className="text-yellow-800 text-sm">GH may worsen retinal conditions. Ophthalmologist consultation required.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Carpal Tunnel Syndrome</p>
                          <p className="text-yellow-800 text-sm">GH can cause fluid retention, potentially worsening symptoms.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Reported Side Effects</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Common (Generally Mild)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Injection site reactions (redness, swelling)</li>
                          <li>• Temporary water retention (mild)</li>
                          <li>• Increased hunger (some users)</li>
                          <li>• Mild headaches (usually transient)</li>
                          <li>• Tingling sensations in extremities</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Rare (Seek Medical Attention)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Severe injection site pain or abscess</li>
                          <li>• Joint pain or swelling</li>
                          <li>• Vision changes</li>
                          <li>• Persistent numbness/tingling</li>
                          <li>• Allergic reactions (rash, hives, difficulty breathing)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      <strong>Note:</strong> Ipamorelin has significantly fewer side effects than non-selective GHRPs due to minimal cortisol/prolactin elevation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Pre-Treatment Requirements</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Physician consultation:</strong> Mandatory before starting Ipamorelin therapy</li>
                        <li><strong>Cancer screening:</strong> Comprehensive screening (especially for GH secretagogues)</li>
                        <li><strong>Baseline labs:</strong> IGF-1, glucose, HbA1c, thyroid panel</li>
                        <li><strong>Medical history review:</strong> Disclose all conditions, medications, supplements</li>
                        <li><strong>Source verification:</strong> Ensure pharmaceutical-grade, &gt;98% purity, COA available</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Monitoring During Treatment</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Regular physician check-ins:</strong> Every 8-12 weeks during active treatment</li>
                        <li><strong>IGF-1 monitoring:</strong> Track levels to ensure within physiological range</li>
                        <li><strong>Glucose monitoring:</strong> Especially important for diabetics or pre-diabetics</li>
                        <li><strong>Cancer screening:</strong> Every 6-12 months for GH secretagogues</li>
                        <li><strong>Efficacy assessment:</strong> Track sleep quality, recovery, body composition changes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Quality & Sourcing Standards</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Required Quality Standards:</p>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li>• <strong>Purity:</strong> &gt;98% (verified by HPLC)</li>
                        <li>• <strong>Certificate of Analysis (COA):</strong> Must be provided by supplier</li>
                        <li>• <strong>Endotoxin testing:</strong> &lt;0.1 EU/mg (prevents bacterial contamination)</li>
                        <li>• <strong>GMP compliance:</strong> Manufactured in cGMP-certified facility</li>
                        <li>• <strong>Third-party testing:</strong> Independent lab verification preferred</li>
                      </ul>
                      <p className="text-green-800 text-sm mt-3">
                        <strong>Red flags to avoid:</strong> No COA provided, international sources without credentials, "research chemicals" labeling, suspiciously low prices.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Anti-Doping Considerations</h4>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-900 mb-2">WADA-Banned Substance</p>
                      <p className="text-red-800 text-sm">
                        Ipamorelin is <strong>prohibited at all times</strong> by the World Anti-Doping Agency (WADA) for competitive athletes. Use will result in positive drug test and potential sanctions. <strong>Do not use if subject to drug testing.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>IGF-1 levels, glucose, HbA1c</li>
                      <li>CBC, comprehensive metabolic panel</li>
                      <li>Cancer screening (age-appropriate)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability, injection site assessment</p>
                      <p><strong>Month 3:</strong> IGF-1 levels, glucose, clinical response</p>
                      <p><strong>Month 6:</strong> Comprehensive labs, efficacy evaluation</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Signs of tumor growth or new cancer</li>
                      <li>Severe hypoglycemia or hyperglycemia</li>
                      <li>Joint pain, carpal tunnel symptoms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Peptide Education Hub. Educational resource supporting DrsPeptides.com
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This information is for educational purposes only and is not medical advice. Consult a qualified healthcare provider before implementing peptide therapy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
