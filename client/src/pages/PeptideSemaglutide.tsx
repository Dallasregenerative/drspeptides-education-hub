import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ExternalLink, CheckCircle2, Activity, FlaskConical, Syringe, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptideSemaglutide() {
  usePageTitle("Semaglutide (Ozempic/Wegovy) - GLP-1 for Weight Loss", {
    description: "Complete clinical guide to semaglutide for weight management and metabolic health. GLP-1 mechanisms, dosing, side effects, and patient protocols for healthcare providers."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
          <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <PrintButton title="Semaglutide - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
            
          </div><a
              href="#" onClick={(e) => { e.preventDefault(); }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="gap-2">
                Get Medical-Grade Peptides
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="h-4 w-4" />
              FDA-Approved - Ozempic® (2017) & Wegovy® (2021)
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Semaglutide (GLP-1 Agonist)
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              FDA-approved GLP-1 receptor agonist for type 2 diabetes (Ozempic®) and chronic weight management (Wegovy®). Landmark NEJM studies demonstrate 14.9-17.4% mean weight loss with cardiovascular benefits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-green-600 mb-2">14.9-17.4%</div>
                <div className="text-sm text-gray-600">Mean Weight Loss</div>
                <div className="text-xs text-gray-500 mt-1">NEJM 2021 (4,430 citations)</div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2.4mg</div>
                <div className="text-sm text-gray-600">Weekly Dose (Wegovy)</div>
                <div className="text-xs text-gray-500 mt-1">17-week titration schedule</div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-teal-600 mb-2">FDA 2017</div>
                <div className="text-sm text-gray-600">Ozempic Approval</div>
                <div className="text-xs text-gray-500 mt-1">Wegovy approved 2021</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="flex flex-wrap w-full h-auto gap-1">
                <TabsTrigger value="overview" className="flex flex-col gap-1 py-3">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="mechanisms" className="flex flex-col gap-1 py-3">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs">Mechanisms</span>
                </TabsTrigger>
                <TabsTrigger value="research" className="flex flex-col gap-1 py-3">
                  <FlaskConical className="h-4 w-4" />
                  <span className="text-xs">Research</span>
                </TabsTrigger>
                <TabsTrigger value="protocols" className="flex flex-col gap-1 py-3">
                  <Syringe className="h-4 w-4" />
                  <span className="text-xs">Protocols</span>
                </TabsTrigger>
                <TabsTrigger value="safety" className="flex flex-col gap-1 py-3">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs">Safety</span>
                </TabsTrigger>
                <TabsTrigger value="monitoring" className="flex flex-col gap-1 py-3">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs">Monitoring</span>
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Semaglutide?</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Semaglutide is a <strong>glucagon-like peptide-1 (GLP-1) receptor agonist</strong> that mimics the action of the naturally occurring incretin hormone GLP-1. It is FDA-approved for two distinct indications: <strong>type 2 diabetes management</strong> (Ozempic®, approved 2017) and <strong>chronic weight management</strong> (Wegovy®, approved 2021). Semaglutide represents one of the most clinically validated and widely prescribed peptide therapies in modern medicine.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-green-900 mb-3">FDA-Approved Indications</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-green-800 mb-1">Ozempic® (0.5mg, 1mg, 2mg weekly)</h4>
                          <p className="text-green-700 mb-0">
                            <strong>Indication:</strong> Improve glycemic control in adults with type 2 diabetes mellitus as an adjunct to diet and exercise. Also indicated to reduce the risk of major adverse cardiovascular events (cardiovascular death, non-fatal myocardial infarction, non-fatal stroke) in adults with type 2 diabetes and established cardiovascular disease.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800 mb-1">Wegovy® (2.4mg weekly)</h4>
                          <p className="text-green-700 mb-0">
                            <strong>Indication:</strong> Chronic weight management in adults with obesity (BMI ≥30 kg/m²) or overweight (BMI ≥27 kg/m²) with at least one weight-related comorbid condition (e.g., hypertension, type 2 diabetes, dyslipidemia), as an adjunct to a reduced-calorie diet and increased physical activity.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Primary Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
                        <h4 className="font-semibold text-green-900 mb-2">Weight Management</h4>
                        <p className="text-sm text-gray-700">14.9-17.4% mean weight loss in clinical trials, superior to all previous weight loss medications</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50">
                        <h4 className="font-semibold text-emerald-900 mb-2">Type 2 Diabetes</h4>
                        <p className="text-sm text-gray-700">Significant HbA1c reduction, improved glycemic control, reduced insulin resistance</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50">
                        <h4 className="font-semibold text-teal-900 mb-2">Cardiovascular Protection</h4>
                        <p className="text-sm text-gray-700">Reduces major adverse cardiovascular events (MACE) in patients with established CVD</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50">
                        <h4 className="font-semibold text-cyan-900 mb-2">Metabolic Health</h4>
                        <p className="text-sm text-gray-700">Improves lipid profiles, reduces visceral fat, enhances insulin sensitivity</p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Ozempic vs Wegovy: Key Differences</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Ozempic®</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Wegovy®</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>FDA Approval</strong></td>
                            <td className="border border-gray-300 px-4 py-2">December 2017</td>
                            <td className="border border-gray-300 px-4 py-2">June 2021</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2"><strong>Primary Indication</strong></td>
                            <td className="border border-gray-300 px-4 py-2">Type 2 diabetes + cardiovascular risk reduction</td>
                            <td className="border border-gray-300 px-4 py-2">Chronic weight management</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Maximum Dose</strong></td>
                            <td className="border border-gray-300 px-4 py-2">2mg weekly</td>
                            <td className="border border-gray-300 px-4 py-2">2.4mg weekly</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2"><strong>Available Strengths</strong></td>
                            <td className="border border-gray-300 px-4 py-2">0.25mg, 0.5mg, 1mg, 2mg</td>
                            <td className="border border-gray-300 px-4 py-2">0.25mg, 0.5mg, 1mg, 1.7mg, 2.4mg</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Titration Schedule</strong></td>
                            <td className="border border-gray-300 px-4 py-2">8-16 weeks (to 1-2mg)</td>
                            <td className="border border-gray-300 px-4 py-2">17 weeks (to 2.4mg)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2"><strong>Insurance Coverage</strong></td>
                            <td className="border border-gray-300 px-4 py-2">Typically covered for diabetes</td>
                            <td className="border border-gray-300 px-4 py-2">Variable coverage for weight loss</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Clinical Note: Off-Label Use</h3>
                      <p className="text-blue-800 mb-0">
                        While Ozempic is FDA-approved only for type 2 diabetes, it is frequently prescribed <strong>off-label</strong> for weight management at doses up to 2mg weekly (below Wegovy's 2.4mg target). This practice is common due to insurance coverage differences and medication availability. However, <strong>Wegovy is the only FDA-approved semaglutide formulation specifically indicated for chronic weight management</strong>.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Mechanism Overview</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        Semaglutide is a <strong>94% homologous</strong> analog of human GLP-1, with three key amino acid substitutions that confer:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Extended half-life</strong> (~7 days vs ~2 minutes for native GLP-1) via albumin binding</li>
                        <li><strong>Resistance to DPP-4 degradation</strong> (enzyme that rapidly breaks down native GLP-1)</li>
                        <li><strong>Once-weekly dosing</strong> convenience (vs continuous infusion for native GLP-1)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Featured in Stacking Protocols</h3>
                  <p className="text-gray-700 mb-6">
                    Semaglutide is a key component of the <strong>Fat Loss Stack</strong> combined with GH secretagogues for muscle preservation during weight loss. See the comprehensive stacking guide for detailed combination strategies:
                  </p>
                  <Link href="/stacking-guide">
                    <Button className="gap-2">
                      View Complete Stacking Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </TabsContent>

              {/* Mechanisms Tab */}
              <TabsContent value="mechanisms" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Mechanisms of Action</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-8">
                      Semaglutide exerts its therapeutic effects through multiple complementary mechanisms, all mediated by activation of the <strong>GLP-1 receptor</strong> (GLP-1R), a G-protein coupled receptor expressed in pancreatic beta cells, the brain (hypothalamus, brainstem), gastrointestinal tract, heart, and other tissues.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Appetite Suppression (Central Mechanism)</h3>
                    <div className="bg-green-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        The primary mechanism underlying semaglutide's weight loss efficacy is <strong>central appetite suppression</strong> via GLP-1 receptors in the hypothalamus and brainstem.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-green-900 mb-2">Hypothalamic Action:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Activates GLP-1R in the <strong>arcuate nucleus</strong> and <strong>paraventricular nucleus</strong></li>
                            <li>Stimulates <strong>POMC/CART neurons</strong> (pro-opiomelanocortin/cocaine- and amphetamine-regulated transcript) → anorexigenic (appetite-suppressing) signals</li>
                            <li>Inhibits <strong>NPY/AgRP neurons</strong> (neuropeptide Y/agouti-related peptide) → reduces orexigenic (appetite-stimulating) signals</li>
                            <li>Results in <strong>reduced hunger, increased satiety, smaller meal sizes</strong></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900 mb-2">Brainstem Action:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Activates GLP-1R in the <strong>area postrema</strong> and <strong>nucleus tractus solitarius (NTS)</strong></li>
                            <li>Enhances satiety signals from the gut (vagal afferents)</li>
                            <li>Reduces food reward and hedonic eating (decreases palatability-driven consumption)</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-green-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Clinical Impact:</strong> Patients report feeling "full faster," reduced food cravings, decreased interest in high-calorie foods, and natural reduction in portion sizes without conscious effort. This is the primary driver of the 14.9-17.4% weight loss observed in clinical trials.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Gastric Emptying Delay</h3>
                    <div className="bg-emerald-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        Semaglutide <strong>slows gastric emptying</strong>, prolonging the time food remains in the stomach before entering the small intestine.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-emerald-900 mb-2">Mechanism:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>GLP-1R activation in the <strong>gastric smooth muscle</strong> and <strong>enteric nervous system</strong></li>
                            <li>Reduces gastric motility and pyloric sphincter relaxation</li>
                            <li>Delays nutrient absorption in the small intestine</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-emerald-900 mb-2">Effects:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Prolonged satiety</strong> - Feeling full for longer after meals</li>
                            <li><strong>Reduced post-prandial glucose spikes</strong> - Slower carbohydrate absorption</li>
                            <li><strong>Decreased appetite between meals</strong> - Extended inter-meal intervals</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-emerald-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Note:</strong> Delayed gastric emptying is also responsible for some of semaglutide's most common side effects (nausea, vomiting, early satiety). This effect is dose-dependent and typically diminishes with continued use as tolerance develops.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Glucose-Dependent Insulin Secretion</h3>
                    <div className="bg-teal-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        Semaglutide enhances <strong>glucose-dependent insulin secretion</strong> from pancreatic beta cells—the primary mechanism for its anti-diabetic effects.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-teal-900 mb-2">Mechanism:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>GLP-1R activation in pancreatic <strong>beta cells</strong></li>
                            <li>Increases <strong>cAMP</strong> (cyclic adenosine monophosphate) via Gs protein coupling</li>
                            <li>Activates <strong>protein kinase A (PKA)</strong> and <strong>Epac2</strong> (exchange protein activated by cAMP)</li>
                            <li>Enhances <strong>calcium influx</strong> and <strong>insulin granule exocytosis</strong></li>
                            <li><strong>Glucose-dependent:</strong> Only occurs when blood glucose is elevated (≥70-80 mg/dL)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-teal-900 mb-2">Clinical Advantages:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Low hypoglycemia risk</strong> - Insulin secretion stops when glucose normalizes</li>
                            <li><strong>Significant HbA1c reduction</strong> - 1.5-2.0% decrease in type 2 diabetes</li>
                            <li><strong>Beta cell preservation</strong> - May slow progression of diabetes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Glucagon Suppression</h3>
                    <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        Semaglutide <strong>suppresses glucagon secretion</strong> from pancreatic alpha cells in a glucose-dependent manner.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-cyan-900 mb-2">Mechanism:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>GLP-1R activation in pancreatic <strong>alpha cells</strong> (direct effect)</li>
                            <li>Paracrine signaling from beta cells (indirect effect via insulin and somatostatin)</li>
                            <li>Reduces glucagon secretion when blood glucose is elevated</li>
                            <li><strong>Glucose-dependent:</strong> Glucagon suppression is blunted during hypoglycemia (protective mechanism)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-900 mb-2">Effects:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Reduced hepatic glucose production</strong> - Less gluconeogenesis and glycogenolysis</li>
                            <li><strong>Lower fasting glucose</strong> - Particularly beneficial in type 2 diabetes</li>
                            <li><strong>Improved glucose homeostasis</strong> - Balances insulin/glucagon ratio</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Cardiovascular Effects</h3>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        Semaglutide provides <strong>cardiovascular protection</strong> beyond its effects on weight and glucose control.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Mechanisms:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>GLP-1R activation in <strong>cardiomyocytes</strong> and <strong>vascular endothelium</strong></li>
                            <li><strong>Anti-inflammatory effects</strong> - Reduces systemic inflammation (CRP, IL-6)</li>
                            <li><strong>Improved endothelial function</strong> - Enhanced nitric oxide (NO) production</li>
                            <li><strong>Reduced oxidative stress</strong> - Antioxidant effects</li>
                            <li><strong>Blood pressure reduction</strong> - Modest systolic BP decrease (2-5 mmHg)</li>
                            <li><strong>Lipid profile improvement</strong> - Reduced triglycerides, increased HDL</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>SUSTAIN-6 Trial:</strong> Semaglutide reduced major adverse cardiovascular events (MACE: cardiovascular death, non-fatal MI, non-fatal stroke) by 26% in patients with type 2 diabetes and established cardiovascular disease (2,156 citations).
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Energy Expenditure & Fat Metabolism</h3>
                    <div className="bg-purple-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        While appetite suppression is the primary driver of weight loss, semaglutide may also modestly influence <strong>energy expenditure</strong> and <strong>fat metabolism</strong>.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Potential Mechanisms:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Increased thermogenesis</strong> - Modest increase in resting energy expenditure (controversial, small effect)</li>
                            <li><strong>Preferential visceral fat loss</strong> - Greater reduction in visceral adipose tissue vs subcutaneous fat</li>
                            <li><strong>Improved insulin sensitivity</strong> - Enhanced glucose uptake in muscle, reduced hepatic fat</li>
                            <li><strong>Lipolysis enhancement</strong> - May increase fat breakdown (indirect effect via weight loss)</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-purple-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Note:</strong> The contribution of increased energy expenditure to semaglutide's weight loss effects is likely minor compared to appetite suppression. Most weight loss is attributable to reduced caloric intake, not increased caloric burn.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Mechanisms Summary</h3>
                      <p className="text-gray-700 mb-0">
                        Semaglutide's therapeutic effects result from <strong>multi-system GLP-1 receptor activation</strong>: central appetite suppression (hypothalamus/brainstem), delayed gastric emptying, glucose-dependent insulin secretion, glucagon suppression, cardiovascular protection, and modest metabolic effects. The combination of these mechanisms produces <strong>14.9-17.4% weight loss, significant HbA1c reduction, and cardiovascular risk reduction</strong>—making semaglutide one of the most effective peptide therapies for metabolic disease.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Research Tab - Placeholder for now due to length */}
              <TabsContent value="research" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Clinical Research & Evidence</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      Semaglutide is supported by extensive clinical trial data from the <strong>SUSTAIN</strong> (diabetes) and <strong>STEP</strong> (weight management) trial programs, representing some of the most robust evidence in peptide therapy.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-gray-700 mb-0">
                        Comprehensive research data including landmark NEJM studies (4,430+ citations), cardiovascular outcomes trials (2,156 citations), and JAMA efficacy data (230 citations) demonstrates semaglutide's exceptional efficacy and safety profile for both diabetes management and weight loss.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Protocols Tab - Placeholder */}
              <TabsContent value="protocols" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Dosing Protocols & Administration</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">
                      Semaglutide requires careful <strong>17-week titration</strong> to minimize gastrointestinal side effects and maximize tolerability.
                    </p>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Standard Wegovy® Titration Schedule</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Weeks 1-4:</strong> 0.25mg once weekly</li>
                        <li><strong>Weeks 5-8:</strong> 0.5mg once weekly</li>
                        <li><strong>Weeks 9-12:</strong> 1mg once weekly</li>
                        <li><strong>Weeks 13-16:</strong> 1.7mg once weekly</li>
                        <li><strong>Week 17+:</strong> 2.4mg once weekly (maintenance)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Featured in Stacking Protocols</h3>
                  <p className="text-gray-700 mb-6">
                    Semaglutide is the cornerstone of the <strong>Fat Loss Stack</strong> combined with CJC-1295 and Ipamorelin for muscle preservation. See the comprehensive stacking guide:
                  </p>
                  <Link href="/stacking-guide">
                    <Button className="gap-2">
                      View Complete Stacking Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </TabsContent>

              {/* Safety Tab - Placeholder */}
              <TabsContent value="safety" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Safety Considerations & Contraindications</h2>
                  
                  <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-3">✅ FDA-Approved Medication</h3>
                    <p className="text-green-800 mb-0">
                      Semaglutide (Ozempic® and Wegovy®) is <strong>FDA-approved</strong> with extensive clinical safety data from large-scale trials. However, it requires <strong>prescription and physician supervision</strong>. The following safety information is for educational purposes and does not constitute medical advice.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Common Side Effects</h3>
                    <div className="bg-amber-50 p-6 rounded-lg mb-6">
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Nausea</strong> (44% of patients) - Usually transient, improves with continued use</li>
                        <li><strong>Diarrhea</strong> (30%) - Typically mild to moderate</li>
                        <li><strong>Vomiting</strong> (24%) - More common during titration</li>
                        <li><strong>Constipation</strong> (24%) - Paradoxical given GI effects</li>
                        <li><strong>Abdominal pain</strong> (20%) - Usually mild</li>
                        <li><strong>Headache</strong> (14%) - Generally resolves</li>
                        <li><strong>Fatigue</strong> (11%) - May be related to caloric restriction</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Absolute Contraindications</h3>
                    <div className="bg-red-50 p-6 rounded-lg mb-8">
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Personal or family history of medullary thyroid carcinoma (MTC)</strong></li>
                        <li><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</strong></li>
                        <li><strong>Known hypersensitivity to semaglutide or excipients</strong></li>
                        <li><strong>Pregnancy</strong> - Discontinue at least 2 months before planned pregnancy</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Learn More About Peptide Safety</h3>
                  <p className="text-gray-700 mb-6">
                    For comprehensive safety standards, three-tier classification system, and quality requirements:
                  </p>
                  <Link href="/safety-standards">
                    <Button className="gap-2">
                      View Safety & Quality Standards
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </TabsContent>

              {/* Monitoring Tab */}
              <TabsContent value="monitoring" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Monitoring & Follow-Up</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-0 mb-4 text-gray-900">Pre-Treatment Screening</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Comprehensive baseline assessment is essential before initiating semaglutide therapy to establish safety and identify contraindications, particularly given the FDA boxed warning for thyroid C-cell tumors.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Required Baseline Labs</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li><strong>Thyroid Function Panel (TSH, Free T4)</strong> - Rule out thyroid dysfunction; screen for personal/family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                        <li><strong>Comprehensive Metabolic Panel (CMP)</strong> - Baseline liver/kidney function, electrolytes</li>
                        <li><strong>HbA1c & Fasting Glucose</strong> - Establish glycemic baseline</li>
                        <li><strong>Lipid Panel</strong> - Baseline cardiovascular risk assessment</li>
                        <li><strong>Pancreatic Enzymes (Lipase/Amylase)</strong> - Screen for pancreatitis risk</li>
                        <li><strong>Pregnancy Test</strong> - Rule out pregnancy (teratogenic concerns)</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Ongoing Monitoring Schedule</h3>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Timepoint</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Assessments</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Week 4-6</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>GI symptom assessment (nausea, vomiting, diarrhea)</li>
                                <li>Weight, vital signs</li>
                                <li>Injection site evaluation</li>
                                <li>Hypoglycemia screening (if on insulin/sulfonylureas)</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Early tolerance check; GI disturbances peak during titration. Adjust dosing if needed.
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Month 3</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>HbA1c, fasting glucose</li>
                                <li>Weight loss progress</li>
                                <li>Lipid panel</li>
                                <li>CMP (kidney/liver function)</li>
                                <li>Adverse event screening</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Assess therapeutic response and safety. Expect 5-7% weight loss by month 3.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Month 6</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>Comprehensive labs (HbA1c, lipids, CMP)</li>
                                <li>Weight loss efficacy (expect 10-15%)</li>
                                <li>Gallbladder ultrasound if symptomatic</li>
                                <li>Diabetic retinopathy screening (if diabetic)</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Assess continuation vs. discontinuation. Monitor for gallstones (28% increased risk).
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Every 6-12 months</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>Comprehensive metabolic surveillance</li>
                                <li>Thyroid function (TSH, Free T4)</li>
                                <li>Risk-benefit reassessment</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Long-term safety surveillance, particularly thyroid monitoring per FDA guidance.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Warning Signs & When to Stop</h3>
                    
                    <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
                      <h4 className="font-semibold text-red-900 mb-3">Discontinue Immediately If:</h4>
                      <ul className="space-y-2 text-red-800">
                        <li><strong>Severe abdominal pain</strong> - May indicate pancreatitis (elevated lipase/amylase). Risk increased with history of pancreatitis or cholelithiasis.</li>
                        <li><strong>Persistent severe nausea/vomiting</strong> - Risk of dehydration, acute kidney injury, gastroparesis</li>
                        <li><strong>Signs of thyroid tumor</strong> - Neck mass, dysphagia, dyspnea, persistent hoarseness (FDA boxed warning)</li>
                        <li><strong>Severe allergic reaction</strong> - Anaphylaxis, angioedema, severe rash</li>
                        <li><strong>Acute kidney injury</strong> - Significant creatinine elevation, oliguria (often secondary to dehydration)</li>
                        <li><strong>Diabetic retinopathy worsening</strong> - Particularly in patients with rapid glycemic improvement</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
                      <h4 className="font-semibold text-yellow-900 mb-3">Seek Medical Attention For:</h4>
                      <ul className="space-y-2 text-yellow-800">
                        <li><strong>Gallstone symptoms</strong> - Right upper quadrant pain, especially after meals (cholelithiasis risk 28% higher per <a href="https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.645563/full" target="_blank" rel="noopener noreferrer" className="underline">Frontiers Endocrinology 2021</a>)</li>
                        <li><strong>Severe hypoglycemia</strong> - If on concurrent insulin or sulfonylureas; dose adjustment needed</li>
                        <li><strong>Cardiovascular symptoms</strong> - Tachycardia (heart rate increase ~2-3 bpm common), palpitations</li>
                        <li><strong>Signs of dehydration</strong> - Dizziness, decreased urination, dry mucous membranes</li>
                        <li><strong>Injection site reactions</strong> - Persistent redness, swelling, or abscess formation</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Special Monitoring Considerations</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Diabetic Retinopathy</h4>
                        <p className="text-sm text-gray-700">
                          Rapid glycemic improvement may transiently worsen diabetic retinopathy. Ophthalmologic monitoring recommended for patients with pre-existing retinopathy, especially if on insulin.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <h4 className="font-semibold text-indigo-900 mb-2">Pregnancy Planning</h4>
                        <p className="text-sm text-gray-700">
                          Discontinue at least 2 months before planned pregnancy (long half-life ~1 week). Animal studies show fetal harm; no adequate human data. Use effective contraception during treatment.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Gastroparesis Risk</h4>
                        <p className="text-sm text-gray-700">
                          Delayed gastric emptying is therapeutic mechanism but may cause persistent nausea. If severe, consider dose reduction or discontinuation. Monitor for bowel obstruction symptoms.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-pink-50 to-red-50">
                        <h4 className="font-semibold text-pink-900 mb-2">Thyroid Surveillance</h4>
                        <p className="text-sm text-gray-700">
                          FDA boxed warning based on rodent C-cell tumors (NOT confirmed in humans). Monitor TSH annually. Contraindicated in personal/family history of MTC or MEN 2.
                        </p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Research References</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                          <a href="https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.645563/full" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Frontiers in Endocrinology (2021) - Comprehensive Safety Profile of Semaglutide
                          </a> - 22,000 participants across clinical trials, detailed adverse event analysis
                        </li>
                        <li>
                          <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            NEJM (2021) - STEP 1 Trial: Once-Weekly Semaglutide in Adults with Overweight or Obesity
                          </a> - Landmark 68-week trial, 14.9% mean weight loss (4,430 citations)
                        </li>
                        <li>
                          <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            FDA Wegovy® Prescribing Information (2021)
                          </a> - Official FDA-approved labeling with boxed warning and monitoring guidance
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Disclaimer:</strong> Semaglutide (Ozempic®, Wegovy®) is FDA-approved and requires prescription.
            </p>
            <p>
              For pharmaceutical-grade peptides and medical consultation, visit{" "}
              <a
                href="#" onClick={(e) => { e.preventDefault(); }}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DrsPeptides.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
