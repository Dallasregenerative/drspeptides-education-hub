import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Zap, Clock, Shield, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PeptideCJC1295() {
  usePageTitle("CJC-1295 - Growth Hormone Releasing Hormone", {
    description: "Clinical guide to CJC-1295 for growth hormone optimization. Mechanisms, DAC vs non-DAC forms, dosing protocols, and combination therapy strategies."
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
              Long-Acting GHRH Analog
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              CJC-1295
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A synthetic growth hormone-releasing hormone (GHRH) analog with strategic modifications for extended half-life. Available with or without DAC (Drug Affinity Complex) for different release profiles. Synergistic with Ipamorelin for optimal GH optimization.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">GH/IGF-1</p>
                  <p className="text-gray-600 text-sm">Axis Activation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-indigo-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">6-8 Days</p>
                  <p className="text-gray-600 text-sm">Half-Life (with DAC)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Zap className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Synergy</p>
                  <p className="text-gray-600 text-sm">with Ipamorelin</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">GHRH</p>
                  <p className="text-gray-600 text-sm">Receptor Agonist</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clinical Evidence Alert */}
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertDescription>
              <p className="text-blue-900 font-semibold mb-2">Landmark Research (105 Citations)</p>
              <p className="text-blue-800 text-sm">
                <strong>Teichman SL et al. (2006):</strong> "Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults." <strong>Key finding:</strong> CJC-1295 demonstrated sustained elevation of GH and IGF-1 levels with favorable safety profile. <strong>Clinical significance:</strong> Long-acting GHRH analog allows less frequent dosing while maintaining physiological GH pulsatility.
              </p>
            </AlertDescription>
          </Alert>

          {/* Critical DAC Distinction Alert */}
          <Alert className="mb-8 border-purple-200 bg-purple-50">
            <AlertTriangle className="h-5 w-5 text-purple-600" />
            <AlertDescription className="ml-2">
              <p className="text-purple-900 font-semibold mb-2">Critical: DAC vs No-DAC Distinction</p>
              <p className="text-purple-800 text-sm mb-2">
                <strong>CJC-1295 WITH DAC:</strong> Half-life 6-8 days, dosed 600mcg once weekly, continuous GH elevation
              </p>
              <p className="text-purple-800 text-sm">
                <strong>CJC-1295 WITHOUT DAC (Modified GRF 1-29):</strong> Half-life ~30 minutes, dosed 100-200mcg 1-2x daily, pulsatile GH release. <strong>This is the version typically stacked with Ipamorelin.</strong>
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
                  <CardTitle>What is CJC-1295?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    CJC-1295 is a <strong>synthetic analog of growth hormone-releasing hormone (GHRH)</strong> consisting of 30 amino acids with strategic modifications designed to extend its biological half-life. It acts as a <strong>GHRH receptor agonist</strong>, stimulating the pituitary gland to release growth hormone in a more sustained manner than natural GHRH.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">The DAC vs No-DAC Decision</h4>
                    <p className="text-purple-800 text-sm leading-relaxed mb-3">
                      The most critical decision when using CJC-1295 is choosing between the <strong>DAC (Drug Affinity Complex)</strong> and <strong>no-DAC</strong> versions. This fundamentally changes how the peptide works:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h5 className="font-semibold text-purple-900 mb-2">WITH DAC</h5>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• Binds to albumin (blood protein)</li>
                          <li>• Half-life: 6-8 days</li>
                          <li>• Dosed once weekly</li>
                          <li>• Continuous GH elevation</li>
                          <li>• Less physiological</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-purple-200">
                        <h5 className="font-semibold text-purple-900 mb-2">WITHOUT DAC (Modified GRF 1-29)</h5>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• No albumin binding</li>
                          <li>• Half-life: ~30 minutes</li>
                          <li>• Dosed 1-2x daily</li>
                          <li>• Pulsatile GH release</li>
                          <li>• More physiological</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-purple-800 text-sm mt-3">
                      <strong>Most practitioners prefer CJC-1295 WITHOUT DAC</strong> because pulsatile GH release better mimics the body's natural rhythm and allows for synergistic stacking with Ipamorelin.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Applications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Body Composition</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Lean muscle mass preservation</li>
                          <li>• Fat metabolism enhancement</li>
                          <li>• Improved muscle-to-fat ratio</li>
                          <li>• Metabolic rate optimization</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Recovery & Performance</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Enhanced post-workout recovery</li>
                          <li>• Improved sleep quality</li>
                          <li>• Increased energy levels</li>
                          <li>• Better exercise capacity</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Anti-Aging</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Skin elasticity improvement</li>
                          <li>• Bone density support</li>
                          <li>• Cognitive function enhancement</li>
                          <li>• Overall vitality restoration</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Metabolic Health</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Insulin sensitivity improvement</li>
                          <li>• Lipid profile optimization</li>
                          <li>• Glucose metabolism support</li>
                          <li>• Cardiovascular health benefits</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Appears in Multiple Stacking Protocols</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Lean and Mean Stack</p>
                          <p className="text-blue-800 text-sm">Combined with Ipamorelin, IGF-1 LR3, Tesamorelin for muscle gain + fat loss</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-teal-900 text-sm">Fat Loss Stack</p>
                          <p className="text-teal-800 text-sm">Combined with Semaglutide, Ipamorelin for muscle preservation during weight loss</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      See complete protocols in <Link href="/stacking-guide"><a className="underline font-semibold text-blue-600">Peptide Stacking Guide</a></Link>
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Why CJC-1295 + Ipamorelin is the Most Popular Stack</h4>
                    <p className="text-green-800 text-sm leading-relaxed mb-2">
                      <strong>Synergistic mechanism:</strong> CJC-1295 (no DAC) acts as a GHRH analog that <strong>amplifies the GH pulse</strong>, while Ipamorelin acts as a ghrelin mimetic that <strong>triggers the release</strong>. Together, they create a larger, more sustained GH pulse than either peptide alone.
                    </p>
                    <p className="text-green-800 text-sm leading-relaxed mb-2">
                      <strong>Complementary pathways:</strong> CJC-1295 works through GHRH receptors, Ipamorelin through ghrelin receptors (GHSR-1a). Dual-pathway activation = superior results.
                    </p>
                    <p className="text-green-800 text-sm leading-relaxed">
                      <strong>Clinical evidence:</strong> Studies show combined GH response is greater than the sum of individual effects (true synergy, not just additive).
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
                    <h4 className="font-semibold text-gray-900 mb-4">1. GHRH Receptor Activation</h4>
                    <p className="text-gray-700 mb-3">
                      CJC-1295 binds to <strong>growth hormone-releasing hormone (GHRH) receptors</strong> on somatotroph cells in the anterior pituitary gland. This binding triggers:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>cAMP cascade activation:</strong> Increases intracellular cyclic AMP levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Protein kinase A (PKA) activation:</strong> Phosphorylates transcription factors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>GH gene transcription:</strong> Increases synthesis of growth hormone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>GH secretion:</strong> Releases stored and newly synthesized GH into bloodstream</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">2. Drug Affinity Complex (DAC) Mechanism</h4>
                    <p className="text-gray-700 mb-3">
                      The DAC modification allows CJC-1295 to <strong>bind to serum albumin</strong>, the most abundant protein in blood plasma:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Albumin binding:</strong> DAC portion creates non-covalent bond with albumin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Protected from degradation:</strong> Bound peptide resistant to enzymatic breakdown</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Slow release:</strong> Peptide gradually dissociates from albumin over days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Extended half-life:</strong> 6-8 days vs 30 minutes for no-DAC version</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">3. GH/IGF-1 Axis Activation</h4>
                    <p className="text-gray-700 mb-3">
                      Once GH is released, it triggers a cascade of downstream effects:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Hepatic IGF-1 production:</strong> Liver converts GH to insulin-like growth factor-1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Anabolic effects:</strong> IGF-1 promotes protein synthesis and muscle growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Lipolytic effects:</strong> GH directly stimulates fat breakdown</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Metabolic optimization:</strong> Improved glucose utilization and insulin sensitivity</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">4. Synergy with Ipamorelin</h4>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-blue-900 font-semibold mb-3">Dual-Pathway GH Optimization</p>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">CJC-1295 (GHRH Pathway)</p>
                          <p className="text-blue-800 text-sm">Amplifies the magnitude of GH pulse by increasing GH synthesis and priming somatotroph cells for release</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">Ipamorelin (Ghrelin Pathway)</p>
                          <p className="text-blue-800 text-sm">Triggers the actual GH release by activating GHSR-1a receptors, providing the "pulse" signal</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">Combined Effect</p>
                          <p className="text-blue-800 text-sm">Larger, more sustained GH pulse than either peptide alone. Studies show &gt;2x GH response vs single peptide.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">5. Comparison to Natural GHRH</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-900">Characteristic</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Natural GHRH</th>
                            <th className="text-left p-3 font-semibold text-gray-900">CJC-1295 (no DAC)</th>
                            <th className="text-left p-3 font-semibold text-gray-900">CJC-1295 (with DAC)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Half-life</td>
                            <td className="p-3 text-gray-600">&lt;10 minutes</td>
                            <td className="p-3 text-gray-600">~30 minutes</td>
                            <td className="p-3 text-gray-600">6-8 days</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Dosing frequency</td>
                            <td className="p-3 text-gray-600">Continuous</td>
                            <td className="p-3 text-gray-600">1-2x daily</td>
                            <td className="p-3 text-gray-600">Once weekly</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">GH release pattern</td>
                            <td className="p-3 text-gray-600">Pulsatile</td>
                            <td className="p-3 text-gray-600">Pulsatile</td>
                            <td className="p-3 text-gray-600">Continuous</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-gray-700">Physiological</td>
                            <td className="p-3 text-green-600">✓ Most</td>
                            <td className="p-3 text-green-600">✓ Very</td>
                            <td className="p-3 text-yellow-600">~ Less</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab - Continuing... */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertDescription>
                      <p className="text-blue-900 font-semibold mb-2">Landmark Studies</p>
                      <p className="text-blue-800 text-sm mb-2">
                        <strong>Teichman SL et al. (2006) - 105 Citations:</strong> "Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295." Demonstrated sustained GH/IGF-1 elevation with favorable safety profile.
                      </p>
                      <p className="text-blue-800 text-sm mb-2">
                        <strong>Alba M et al. (2006) - 65 Citations:</strong> "Once-daily administration of CJC-1295... normalizes growth in the GHRH knockout mouse." Proved efficacy in restoring growth in GH-deficient models.
                      </p>
                      <p className="text-blue-800 text-sm">
                        <strong>Sackmann-Sala L et al. (2009) - 45 Citations:</strong> "Activation of the GH/IGF-1 axis by CJC-1295." Documented serum protein profile changes in normal adult subjects.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">GH/IGF-1 Elevation Studies</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Sustained GH Stimulation (105 Citations)</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Teichman SL et al. (2006):</strong> Examined pharmacokinetic profile and safety of CJC-1295 in healthy adults.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Findings:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Prolonged elevation of GH and IGF-1 levels</li>
                        <li>• Dose-dependent response (higher doses = greater GH elevation)</li>
                        <li>• Sustained effect over multiple days (with DAC)</li>
                        <li>• Favorable safety profile with minimal adverse events</li>
                        <li>• No significant cortisol or prolactin elevation</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Growth Normalization Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">GHRH Knockout Mouse Model (65 Citations)</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Alba M et al. (2006):</strong> Once-daily CJC-1295 administration in GHRH-deficient mice.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Findings:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Normalized growth in GH-deficient animals</li>
                        <li>• Restored IGF-1 levels to physiological range</li>
                        <li>• Improved body composition (lean mass increase)</li>
                        <li>• Demonstrated therapeutic potential for GH deficiency</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Serum Protein Profile Changes</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">GH/IGF-1 Axis Activation (45 Citations)</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Sackmann-Sala L et al. (2009):</strong> Examined serum protein changes in normal adults receiving CJC-1295.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Findings:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Significant changes in serum protein profile</li>
                        <li>• Increased IGF-1 and IGFBP-3 (IGF binding protein)</li>
                        <li>• Metabolic marker improvements</li>
                        <li>• Anabolic protein expression upregulation</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Synergy with Ipamorelin Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Combined GH Secretagogue Effects</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> Clinical observations and patient reports demonstrate:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• <strong>Synergistic GH response:</strong> Combined effect &gt; sum of individual peptides</li>
                        <li>• <strong>Dual-pathway activation:</strong> GHRH + ghrelin receptors = superior stimulation</li>
                        <li>• <strong>Improved body composition:</strong> Better muscle gain and fat loss vs single peptide</li>
                        <li>• <strong>Enhanced recovery:</strong> Faster post-workout recovery and tissue repair</li>
                        <li>• <strong>Better sleep quality:</strong> Improved slow-wave sleep duration</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Clinical significance:</strong> CJC-1295 + Ipamorelin has become the most popular peptide combination for GH optimization.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Detection & Anti-Doping Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">GHRH Analog Detection (20 Citations)</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Memdouh S et al. (2021):</strong> "Advances in the detection of growth hormone releasing hormone synthetic analogs."
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Findings:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• CJC-1295 (with and without DAC) detectable in urine/blood</li>
                        <li>• Improved mass spectrometry methods for detection</li>
                        <li>• Illicitly manufactured CJC-1295 found in sports doping cases</li>
                        <li>• WADA-banned substance for competitive athletes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-3">Research Limitations</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• Limited large-scale human clinical trials for body composition</li>
                      <li>• Most studies focus on GH-deficient populations, not healthy adults</li>
                      <li>• Long-term safety data (&gt;2 years continuous use) incomplete</li>
                      <li>• Optimal dosing protocols for specific goals not fully established</li>
                      <li>• Not FDA-approved for human use in US (research peptide status)</li>
                      <li>• DAC vs no-DAC comparative efficacy studies limited</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab - Comprehensive dosing continues... */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols & Administration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-purple-200 bg-purple-50">
                    <AlertDescription>
                      <p className="text-purple-900 font-semibold mb-2">Critical: Choose DAC vs No-DAC First</p>
                      <p className="text-purple-800 text-sm">
                        The dosing protocol depends entirely on whether you're using CJC-1295 <strong>WITH DAC</strong> (once weekly) or <strong>WITHOUT DAC</strong> (1-2x daily). Most practitioners prefer <strong>no-DAC</strong> for pulsatile GH release and synergy with Ipamorelin. See complete protocols in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">CJC-1295 WITH DAC Protocol</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Weekly Dosing (Long-Acting)</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Dose:</strong> 600mcg per injection</li>
                        <li><strong>Frequency:</strong> Once weekly (same day each week)</li>
                        <li><strong>Timing:</strong> Empty stomach preferred (2-3 hours after last meal)</li>
                        <li><strong>Duration:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        <li><strong>Half-life:</strong> 6-8 days (sustained GH elevation)</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-3">
                        <strong>Best for:</strong> Convenience (once weekly dosing), continuous GH elevation
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Note:</strong> Less physiological than pulsatile release; cannot be easily stacked with Ipamorelin
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">CJC-1295 WITHOUT DAC Protocol (Modified GRF 1-29)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Single Daily Dose</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 100-200mcg per injection</li>
                          <li><strong>Frequency:</strong> Once daily before bed</li>
                          <li><strong>Timing:</strong> 1-1.5 hours after last meal</li>
                          <li><strong>Duration:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Sleep optimization, recovery, general wellness
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Split Dosing (Recommended)</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Morning dose:</strong> 100-200mcg (fasted or post-workout)</li>
                          <li><strong>Evening dose:</strong> 100-200mcg (before bed)</li>
                          <li><strong>Total daily:</strong> 200-400mcg</li>
                          <li><strong>Duration:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Body recomposition, athletic performance, maximum GH optimization
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">CJC-1295 + Ipamorelin Stack (Most Popular)</h4>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <p className="font-semibold text-green-900 mb-3">Synergistic GH Optimization Protocol</p>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-900 mb-2">Standard Stack</h5>
                          <ul className="space-y-1 text-green-800 text-sm">
                            <li>• <strong>CJC-1295 (no DAC):</strong> 100-200mcg</li>
                            <li>• <strong>Ipamorelin:</strong> 200-300mcg</li>
                            <li>• <strong>Frequency:</strong> 1-2x daily (before bed minimum)</li>
                            <li>• <strong>Administration:</strong> Inject both simultaneously (same syringe or separate)</li>
                            <li>• <strong>Cycle:</strong> 12-16 weeks on, 8 weeks off</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-900 mb-2">Advanced Stack (Split Dosing)</h5>
                          <ul className="space-y-1 text-green-800 text-sm">
                            <li>• <strong>Morning:</strong> CJC-1295 100-200mcg + Ipamorelin 100-150mcg (fasted)</li>
                            <li>• <strong>Evening:</strong> CJC-1295 100-200mcg + Ipamorelin 100-150mcg (before bed)</li>
                            <li>• <strong>Total daily:</strong> CJC 200-400mcg + Ipa 200-300mcg</li>
                            <li>• <strong>Cycle:</strong> 12-16 weeks on, 8 weeks off</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-green-800 text-sm mt-3">
                        <strong>Why this works:</strong> CJC-1295 amplifies GH pulse magnitude, Ipamorelin triggers release. Dual-pathway activation creates larger GH response than either alone.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Goal-Specific Protocols</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Muscle Gain & Fat Loss (Lean and Mean Stack)</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>CJC-1295 (no DAC):</strong> 100-200mcg, 2x daily</li>
                          <li>• <strong>Stack with:</strong> Ipamorelin, IGF-1 LR3, Tesamorelin</li>
                          <li>• <strong>Timing:</strong> Morning (fasted) + before bed</li>
                          <li>• <strong>Cycle:</strong> 12 weeks on, 8 weeks off</li>
                          <li>• <strong>Diet:</strong> Caloric surplus for muscle gain, deficit for fat loss</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Fat Loss with Muscle Preservation</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>CJC-1295 (no DAC):</strong> 100-200mcg, 1-2x daily</li>
                          <li>• <strong>Stack with:</strong> Semaglutide, Ipamorelin</li>
                          <li>• <strong>Timing:</strong> Before bed (minimum), add morning dose if aggressive</li>
                          <li>• <strong>Cycle:</strong> 8-12 weeks on, 4-8 weeks off</li>
                          <li>• <strong>Goal:</strong> Preserve lean mass during caloric deficit</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Anti-Aging & Longevity</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>CJC-1295 (no DAC):</strong> 100mcg once daily (conservative)</li>
                          <li>• <strong>Stack with:</strong> Ipamorelin 200mcg</li>
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
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Timing Strategies</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Before bed (primary):</strong> Capitalizes on natural GH release during sleep</li>
                        <li><strong>Morning fasted:</strong> Maximizes fat-burning potential, ideal for body recomposition</li>
                        <li><strong>Post-workout:</strong> Supports recovery when tissues are primed for growth</li>
                        <li><strong>Empty stomach rule:</strong> 2-3 hours after last meal, no food 30 min after injection</li>
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
                        <li><strong>Aggressive cycle:</strong> 12-16 weeks on, 8 weeks off (experienced users)</li>
                        <li><strong>Rationale:</strong> Prevents receptor desensitization, maintains long-term effectiveness</li>
                        <li><strong>Note:</strong> DAC version may require longer off-cycles due to extended half-life</li>
                      </ul>
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
                        CJC-1295 is <strong>NOT FDA-approved</strong> for human use in the United States. It is sold for research purposes only. Any therapeutic use should be under direct supervision of a qualified healthcare provider. <strong>WADA-banned substance</strong> for competitive athletes.
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
                          <p className="text-red-800 text-sm">GH/IGF-1 axis activation may theoretically support tumor growth. <strong>Avoid if cancer diagnosed within past 5 years.</strong></p>
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
                          <li>• Mild headaches (usually transient)</li>
                          <li>• Tingling sensations in extremities</li>
                          <li>• Increased hunger (some users)</li>
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
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Pre-Treatment Requirements</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Physician consultation:</strong> Mandatory before starting CJC-1295 therapy</li>
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
                        <li><strong>IGF-1 monitoring:</strong> Track levels to ensure within physiological range (avoid supraphysiological)</li>
                        <li><strong>Glucose monitoring:</strong> Especially important for diabetics or pre-diabetics</li>
                        <li><strong>Cancer screening:</strong> Every 6-12 months for GH secretagogues</li>
                        <li><strong>Efficacy assessment:</strong> Track body composition, recovery, energy levels</li>
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
                        <li>• <strong>DAC specification:</strong> Clearly labeled as "with DAC" or "without DAC" (no-DAC)</li>
                      </ul>
                      <p className="text-green-800 text-sm mt-3">
                        <strong>Red flags to avoid:</strong> No COA provided, unclear DAC status, international sources without credentials, suspiciously low prices.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Anti-Doping Considerations</h4>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-900 mb-2">WADA-Banned Substance</p>
                      <p className="text-red-800 text-sm">
                        CJC-1295 (both with and without DAC) is <strong>prohibited at all times</strong> by the World Anti-Doping Agency (WADA) for competitive athletes. Use will result in positive drug test and potential sanctions. <strong>Do not use if subject to drug testing.</strong>
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
                      <li>Pituitary function assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability, injection site assessment</p>
                      <p><strong>Month 3:</strong> IGF-1 levels, glucose, clinical response</p>
                      <p><strong>Month 6:</strong> Comprehensive labs, efficacy evaluation</p>
                      <p><strong>Every 6-12 months:</strong> Cancer screening, long-term safety</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Signs of tumor growth or new cancer</li>
                      <li>Severe hypoglycemia or hyperglycemia</li>
                      <li>Joint pain, carpal tunnel symptoms</li>
                      <li>Severe headaches or vision changes</li>
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
