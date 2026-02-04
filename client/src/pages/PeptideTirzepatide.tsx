import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ExternalLink, Activity, FlaskConical, Syringe, Shield, TrendingDown, Award } from "lucide-react";
import { Link } from "wouter";

export default function PeptideTirzepatide() {
  usePageTitle("Tirzepatide (Mounjaro/Zepbound) - Dual GLP-1/GIP", {
    description: "Clinical overview of tirzepatide dual GIP/GLP-1 agonist for weight loss. Mechanisms, efficacy data, dosing protocols, and comparison to semaglutide."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <PrintButton title="Tirzepatide - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
            <a
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
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              FDA Approved - November 2023
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Tirzepatide (Zepbound™ / Mounjaro™)
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Revolutionary dual GIP/GLP-1 receptor agonist delivering unprecedented 23% body weight reduction—the most effective obesity medication ever approved. First-in-class dual incretin therapy surpassing all previous pharmacological interventions including semaglutide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-purple-600 mb-2">23%</div>
                <div className="text-sm text-gray-600">Weight Loss</div>
                <div className="text-xs text-gray-500 mt-1">At 72 weeks (highest efficacy)</div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-pink-600 mb-2">2.4%</div>
                <div className="text-sm text-gray-600">HbA1c Reduction</div>
                <div className="text-xs text-gray-500 mt-1">Superior glycemic control</div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-blue-600 mb-2">Dual</div>
                <div className="text-sm text-gray-600">Receptor Agonism</div>
                <div className="text-xs text-gray-500 mt-1">GIP + GLP-1 pathways</div>
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
              <TabsList className="grid w-full grid-cols-6 h-auto">
                <TabsTrigger value="overview" className="flex flex-col gap-1 py-3">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="mechanism" className="flex flex-col gap-1 py-3">
                  <FlaskConical className="h-4 w-4" />
                  <span className="text-xs">Mechanism</span>
                </TabsTrigger>
                <TabsTrigger value="research" className="flex flex-col gap-1 py-3">
                  <Award className="h-4 w-4" />
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
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Tirzepatide?</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tirzepatide is a **first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist** approved by the FDA for chronic weight management (Zepbound™, November 2023) and type 2 diabetes (Mounjaro™, May 2022). This novel dual incretin therapy represents a paradigm shift in metabolic medicine, delivering weight loss efficacy that exceeds all previous pharmacological interventions—including semaglutide—with up to **23.6% body weight reduction** at 72 weeks in clinical trials.
                    </p>

                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">FDA Approval Status</h3>
                      <div className="space-y-2 text-purple-800">
                        <p><strong>Mounjaro™ (Type 2 Diabetes):</strong> FDA approved May 13, 2022</p>
                        <p><strong>Zepbound™ (Chronic Weight Management):</strong> FDA approved November 8, 2023</p>
                        <p><strong>Indications:</strong> Adults with BMI ≥30 kg/m² OR BMI ≥27 kg/m² with weight-related comorbidity</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Primary Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Obesity & Weight Management</h4>
                        <p className="text-sm text-gray-700">23% body weight reduction (vs. 15% for semaglutide 2.4mg). Superior appetite suppression, enhanced satiety, reduced food cravings</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-pink-50 to-blue-50">
                        <h4 className="font-semibold text-pink-900 mb-2">Type 2 Diabetes</h4>
                        <p className="text-sm text-gray-700">HbA1c reduction up to 2.4%, superior glycemic control vs. GLP-1 agonists alone, improved insulin sensitivity</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Cardiometabolic Health</h4>
                        <p className="text-sm text-gray-700">Reduced blood pressure, improved lipid profiles, decreased liver fat (NAFLD/NASH), anti-inflammatory effects</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <h4 className="font-semibold text-indigo-900 mb-2">Quality of Life</h4>
                        <p className="text-sm text-gray-700">Enhanced physical function, improved mobility, better sleep quality, reduced joint pain from weight loss</p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Why Tirzepatide Surpasses Semaglutide</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Tirzepatide 15mg</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Semaglutide 2.4mg</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Weight Loss (72 weeks)</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold text-purple-600">-23.6% (-22.5 kg)</td>
                            <td className="border border-gray-300 px-4 py-2">-14.9% (-15.3 kg)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanism</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold text-purple-600">Dual GIP/GLP-1 agonist</td>
                            <td className="border border-gray-300 px-4 py-2">GLP-1 agonist only</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">HbA1c Reduction</td>
                            <td className="border border-gray-300 px-4 py-2 font-bold text-purple-600">-2.4%</td>
                            <td className="border border-gray-300 px-4 py-2">-1.8%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Nausea Rate</td>
                            <td className="border border-gray-300 px-4 py-2">20-30%</td>
                            <td className="border border-gray-300 px-4 py-2">30-40%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Dosing Frequency</td>
                            <td className="border border-gray-300 px-4 py-2">Once weekly</td>
                            <td className="border border-gray-300 px-4 py-2">Once weekly</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Mechanism Tab */}
              <TabsContent value="mechanism" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Dual Incretin Mechanism of Action</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tirzepatide's unprecedented efficacy stems from its **dual agonism** of both GIP and GLP-1 receptors, creating synergistic metabolic effects that exceed single-pathway activation. The peptide exhibits **imbalanced agonism** with ~5-fold greater potency at GIP receptors compared to GLP-1 receptors, optimizing the therapeutic ratio.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Dual Pathway Activation</h3>
                      <div className="space-y-4 text-blue-800">
                        <div>
                          <h4 className="font-semibold mb-1">GIP Receptor Agonism (Primary)</h4>
                          <p className="text-sm">
                            <strong>Location:</strong> Pancreatic β-cells, adipocytes, brain<br/>
                            <strong>Effects:</strong> Enhanced insulin secretion (glucose-dependent), improved insulin sensitivity, increased energy expenditure, reduced food intake via central appetite suppression<br/>
                            <strong>Unique Benefit:</strong> GIP enhances fat oxidation and thermogenesis in adipose tissue—absent with GLP-1 alone
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">GLP-1 Receptor Agonism (Secondary)</h4>
                          <p className="text-sm">
                            <strong>Location:</strong> Pancreatic β-cells, stomach, brain, heart<br/>
                            <strong>Effects:</strong> Insulin secretion, glucagon suppression, delayed gastric emptying, appetite suppression, cardiovascular protection<br/>
                            <strong>Synergy:</strong> GLP-1 pathway amplifies GIP-mediated weight loss while providing proven CV benefits
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Pharmacokinetics</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Half-Life (t½)</td>
                            <td className="border border-gray-300 px-4 py-2">~5 days (120 hours)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Time to Peak (Tmax)</td>
                            <td className="border border-gray-300 px-4 py-2">8-72 hours post-injection</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Steady State</td>
                            <td className="border border-gray-300 px-4 py-2">4 weeks of weekly dosing</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Bioavailability</td>
                            <td className="border border-gray-300 px-4 py-2">80% (subcutaneous)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Metabolism</td>
                            <td className="border border-gray-300 px-4 py-2">Proteolytic cleavage (non-specific)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Elimination</td>
                            <td className="border border-gray-300 px-4 py-2">Renal and hepatic (minimal intact peptide)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Why Dual Agonism Works Better</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Synergistic Weight Loss</h4>
                        <p className="text-sm text-gray-700">GIP enhances adipose tissue metabolism and thermogenesis while GLP-1 suppresses appetite—combined effect exceeds either alone</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-pink-50 to-blue-50">
                        <h4 className="font-semibold text-pink-900 mb-2">Superior Glycemic Control</h4>
                        <p className="text-sm text-gray-700">GIP potentiates glucose-dependent insulin secretion beyond GLP-1 alone, achieving greater HbA1c reductions</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Improved Tolerability</h4>
                        <p className="text-sm text-gray-700">GIP may counteract GLP-1-mediated nausea, resulting in better tolerability despite higher efficacy</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <h4 className="font-semibold text-indigo-900 mb-2">Metabolic Flexibility</h4>
                        <p className="text-sm text-gray-700">Dual pathway activation improves insulin sensitivity, fat oxidation, and energy expenditure simultaneously</p>
                      </Card>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Research Tab */}
              <TabsContent value="research" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Clinical Evidence & Trials</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tirzepatide's approval is supported by the **SURPASS** clinical trial program (type 2 diabetes) and the **SURMOUNT** program (obesity), representing one of the most comprehensive development programs in metabolic medicine history with over **20,000 participants** across multiple Phase 3 trials.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Landmark Trials</h3>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
                      <h4 className="font-semibold text-purple-900 mb-3">SURMOUNT-1: Obesity Trial (NEJM 2022)</h4>
                      <p className="text-purple-800 mb-3">
                        <strong>Design:</strong> Randomized, double-blind, placebo-controlled trial in 2,539 adults with obesity (BMI ≥30) or overweight (BMI ≥27) with weight-related comorbidity<br/>
                        <strong>Intervention:</strong> Tirzepatide 5mg, 10mg, or 15mg vs. placebo, once weekly for 72 weeks<br/>
                        <strong>Primary Outcome:</strong> Percent change in body weight from baseline<br/>
                        <strong>Results:</strong><br/>
                        • Tirzepatide 5mg: -15.0% (-15.3 kg)<br/>
                        • Tirzepatide 10mg: -19.5% (-20.9 kg)<br/>
                        • Tirzepatide 15mg: -20.9% (-22.5 kg)<br/>
                        • Placebo: -3.1% (-3.2 kg)<br/>
                        <strong>Significance:</strong> Highest weight loss ever achieved with pharmacotherapy. 91% of participants on 15mg achieved ≥5% weight loss (vs. 35% placebo).
                      </p>
                      <a href="https://www.ncbi.nlm.nih.gov/books/NBK585056/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">
                        View StatPearls Review →
                      </a>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                      <h4 className="font-semibold text-blue-900 mb-3">SURPASS-2: Head-to-Head vs. Semaglutide (Lancet 2021)</h4>
                      <p className="text-blue-800 mb-3">
                        <strong>Design:</strong> Open-label, active-comparator trial in 1,879 adults with type 2 diabetes inadequately controlled on metformin<br/>
                        <strong>Intervention:</strong> Tirzepatide 5mg, 10mg, or 15mg vs. semaglutide 1mg, once weekly for 40 weeks<br/>
                        <strong>Results:</strong><br/>
                        • HbA1c reduction: Tirzepatide 15mg (-2.46%) vs. semaglutide 1mg (-1.86%)<br/>
                        • Weight loss: Tirzepatide 15mg (-13.1 kg) vs. semaglutide 1mg (-7.9 kg)<br/>
                        <strong>Conclusion:</strong> Tirzepatide demonstrated superior glycemic control and weight loss compared to semaglutide 1mg.
                      </p>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/34370970/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        View on PubMed →
                      </a>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Additional Key Findings</h3>
                    <div className="space-y-4">
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Cardiometabolic Benefits</h4>
                        <p className="text-sm text-gray-700">
                          Significant improvements in systolic blood pressure (-7.4 mmHg), lipid profiles (triglycerides -26%, HDL +7%), liver fat content (-50% reduction in NAFLD), and inflammatory markers (hsCRP -43%)
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-pink-50 to-blue-50">
                        <h4 className="font-semibold text-pink-900 mb-2">Quality of Life</h4>
                        <p className="text-sm text-gray-700">
                          Clinically meaningful improvements in SF-36 physical function scores, IWQOL-Lite total scores, and patient-reported outcomes across all domains
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Diabetes Remission</h4>
                        <p className="text-sm text-gray-700">
                          In SURPASS trials, up to 62% of participants achieved HbA1c &lt;5.7% (diabetes remission criteria) at highest dose
                        </p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Research References</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                          <a href="https://www.ncbi.nlm.nih.gov/books/NBK585056/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            StatPearls - Tirzepatide: Comprehensive Clinical Review
                          </a> - Complete pharmacology and clinical data
                        </li>
                        <li>
                          <a href="https://pubmed.ncbi.nlm.nih.gov/35658024/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            SURMOUNT-1 (NEJM 2022) - Tirzepatide Once Weekly for Obesity
                          </a> - Landmark obesity trial
                        </li>
                        <li>
                          <a href="https://pubmed.ncbi.nlm.nih.gov/34370970/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            SURPASS-2 (Lancet 2021) - Tirzepatide vs. Semaglutide in T2D
                          </a> - Head-to-head comparison
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Protocols Tab */}
              <TabsContent value="protocols" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Dosing & Administration Protocols</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-0 mb-4 text-gray-900">FDA-Approved Dosing Schedule</h3>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
                      <h4 className="font-semibold text-purple-900 mb-3">Standard Titration Protocol</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-purple-100">
                              <th className="border border-purple-300 px-4 py-2 text-left">Week</th>
                              <th className="border border-purple-300 px-4 py-2 text-left">Dose</th>
                              <th className="border border-purple-300 px-4 py-2 text-left">Purpose</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-purple-200 px-4 py-2">1-4</td>
                              <td className="border border-purple-200 px-4 py-2 font-semibold">2.5 mg</td>
                              <td className="border border-purple-200 px-4 py-2">Initial dose (GI tolerance)</td>
                            </tr>
                            <tr className="bg-purple-50">
                              <td className="border border-purple-200 px-4 py-2">5-8</td>
                              <td className="border border-purple-200 px-4 py-2 font-semibold">5 mg</td>
                              <td className="border border-purple-200 px-4 py-2">First maintenance dose</td>
                            </tr>
                            <tr>
                              <td className="border border-purple-200 px-4 py-2">9-12</td>
                              <td className="border border-purple-200 px-4 py-2 font-semibold">7.5 mg</td>
                              <td className="border border-purple-200 px-4 py-2">Optional intermediate step</td>
                            </tr>
                            <tr className="bg-purple-50">
                              <td className="border border-purple-200 px-4 py-2">13-16</td>
                              <td className="border border-purple-200 px-4 py-2 font-semibold">10 mg</td>
                              <td className="border border-purple-200 px-4 py-2">Higher maintenance dose</td>
                            </tr>
                            <tr>
                              <td className="border border-purple-200 px-4 py-2">17-20</td>
                              <td className="border border-purple-200 px-4 py-2 font-semibold">12.5 mg</td>
                              <td className="border border-purple-200 px-4 py-2">Optional intermediate step</td>
                            </tr>
                            <tr className="bg-purple-50">
                              <td className="border border-purple-200 px-4 py-2">21+</td>
                              <td className="border border-purple-200 px-4 py-2 font-semibold">15 mg</td>
                              <td className="border border-purple-200 px-4 py-2">Maximum maintenance dose</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-purple-800 mt-3">
                        <strong>Note:</strong> Increase dose in 4-week intervals if additional glycemic control or weight loss needed. Maximum dose: 15mg once weekly.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Administration Guidelines</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Recommendation</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Route</td>
                            <td className="border border-gray-300 px-4 py-2">Subcutaneous injection only</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Injection Sites</td>
                            <td className="border border-gray-300 px-4 py-2">Abdomen (preferred), thigh, or upper arm. Rotate sites weekly.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Frequency</td>
                            <td className="border border-gray-300 px-4 py-2">Once weekly, same day each week</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Timing</td>
                            <td className="border border-gray-300 px-4 py-2">Any time of day, with or without food</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Missed Dose</td>
                            <td className="border border-gray-300 px-4 py-2">If &lt;4 days late: inject ASAP. If ≥4 days late: skip and resume next scheduled dose.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Storage</td>
                            <td className="border border-gray-300 px-4 py-2">Refrigerate 2-8°C (36-46°F). May store at room temp ≤30°C (86°F) for up to 21 days.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Expectations Timeline</h3>
                    <div className="space-y-4">
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Week 1-4: Initial Adaptation (2.5mg)</h4>
                        <p className="text-sm text-gray-700">
                          Mild appetite reduction, possible GI side effects (nausea, diarrhea). Weight loss: 1-3% body weight. Focus on tolerability.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-pink-50 to-blue-50">
                        <h4 className="font-semibold text-pink-900 mb-2">Week 5-12: Early Response (5-7.5mg)</h4>
                        <p className="text-sm text-gray-700">
                          Noticeable appetite suppression, improved satiety. Weight loss: 5-8% body weight. HbA1c begins declining (if diabetic).
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Week 13-24: Accelerated Loss (10-12.5mg)</h4>
                        <p className="text-sm text-gray-700">
                          Significant weight loss: 10-15% body weight. Metabolic improvements evident (BP, lipids, glucose). GI side effects typically resolved.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <h4 className="font-semibold text-indigo-900 mb-2">Week 25-72: Peak Effects (15mg)</h4>
                        <p className="text-sm text-gray-700">
                          Maximum weight loss: 15-23% body weight (dose-dependent). HbA1c reductions plateau. Cardiometabolic benefits maximized. Quality of life improvements.
                        </p>
                      </Card>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                      <h4 className="font-semibold text-yellow-900 mb-3">Optimization Tips</h4>
                      <ul className="space-y-2 text-yellow-800">
                        <li><strong>Slow titration:</strong> If GI side effects occur, delay dose escalation by 4 weeks</li>
                        <li><strong>Hydration:</strong> Drink 8-10 glasses water daily to minimize nausea</li>
                        <li><strong>Meal timing:</strong> Smaller, more frequent meals reduce GI distress</li>
                        <li><strong>Avoid high-fat meals:</strong> Can worsen nausea, especially early in treatment</li>
                        <li><strong>Protein intake:</strong> Maintain 1.2-1.6 g/kg/day to preserve lean mass during weight loss</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Safety Tab */}
              <TabsContent value="safety" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Safety Profile & Contraindications</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Tirzepatide demonstrates a **favorable safety profile** consistent with the GLP-1 agonist class, with most adverse events being gastrointestinal and transient. However, important contraindications and monitoring requirements exist.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Common Side Effects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Nausea (20-30%)</h4>
                        <p className="text-sm text-gray-700">Most common side effect. Usually mild-moderate, peaks during dose escalation, resolves within 1-2 weeks. Managed with slow titration, smaller meals.</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-pink-50 to-blue-50">
                        <h4 className="font-semibold text-pink-900 mb-2">Diarrhea (15-20%)</h4>
                        <p className="text-sm text-gray-700">Transient GI side effect. Typically resolves spontaneously. Maintain hydration. Consider anti-diarrheal agents if severe.</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Constipation (10-15%)</h4>
                        <p className="text-sm text-gray-700">Due to delayed gastric emptying. Increase fiber, hydration, physical activity. Stool softeners if needed.</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <h4 className="font-semibold text-indigo-900 mb-2">Injection Site Reactions (5-10%)</h4>
                        <p className="text-sm text-gray-700">Mild redness, swelling, itching. Rotate injection sites. Usually resolves within hours.</p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Serious Adverse Events (Rare)</h3>
                    <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
                      <h4 className="font-semibold text-red-900 mb-3">Boxed Warning: Thyroid C-Cell Tumors</h4>
                      <p className="text-red-800 mb-3">
                        <strong>Animal Data:</strong> Tirzepatide causes thyroid C-cell tumors (medullary thyroid carcinoma, MTC) in rodents at clinically relevant exposures.<br/>
                        <strong>Human Relevance:</strong> Unknown. No cases of MTC causally linked to tirzepatide in humans to date.<br/>
                        <strong>Contraindication:</strong> Personal or family history of MTC or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <Card className="p-4 bg-gradient-to-br from-red-50 to-orange-50">
                        <h4 className="font-semibold text-red-900 mb-2">Pancreatitis (0.2-0.5%)</h4>
                        <p className="text-sm text-gray-700">
                          Acute pancreatitis reported. Discontinue if suspected (severe abdominal pain, nausea, vomiting). Do not restart if confirmed.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50">
                        <h4 className="font-semibold text-orange-900 mb-2">Gallbladder Disease (1-2%)</h4>
                        <p className="text-sm text-gray-700">
                          Cholelithiasis (gallstones) and cholecystitis. Risk increases with rapid weight loss. Monitor for RUQ pain, nausea. Ultrasound if symptomatic.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-yellow-50 to-green-50">
                        <h4 className="font-semibold text-yellow-900 mb-2">Hypoglycemia (if combined with insulin/sulfonylureas)</h4>
                        <p className="text-sm text-gray-700">
                          Tirzepatide alone rarely causes hypoglycemia. Risk increases when combined with insulin or sulfonylureas. Reduce insulin/SU doses when initiating.
                        </p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-green-50 to-teal-50">
                        <h4 className="font-semibold text-green-900 mb-2">Diabetic Retinopathy Worsening</h4>
                        <p className="text-sm text-gray-700">
                          Rapid glucose lowering may temporarily worsen diabetic retinopathy. Monitor patients with pre-existing retinopathy closely.
                        </p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Absolute Contraindications</h3>
                    <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
                      <h4 className="font-semibold text-red-900 mb-3">DO NOT USE if:</h4>
                      <ul className="space-y-2 text-red-800">
                        <li><strong>Personal or family history of MTC</strong> - Boxed warning contraindication</li>
                        <li><strong>Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</strong> - Boxed warning contraindication</li>
                        <li><strong>History of serious hypersensitivity</strong> - To tirzepatide or any excipients (anaphylaxis, angioedema)</li>
                        <li><strong>Pregnancy</strong> - Discontinue 2 months before planned pregnancy (long half-life)</li>
                        <li><strong>Breastfeeding</strong> - Unknown if excreted in human milk; avoid</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Relative Contraindications (Use with Caution)</h3>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
                      <h4 className="font-semibold text-yellow-900 mb-3">Consult Healthcare Provider if:</h4>
                      <ul className="space-y-2 text-yellow-800">
                        <li><strong>History of pancreatitis</strong> - Consider alternative therapy; monitor closely if used</li>
                        <li><strong>Severe gastroparesis</strong> - Delayed gastric emptying may worsen symptoms</li>
                        <li><strong>Diabetic retinopathy</strong> - Monitor for worsening with rapid glucose lowering</li>
                        <li><strong>Renal impairment</strong> - No dose adjustment needed, but monitor for dehydration from GI side effects</li>
                        <li><strong>Hepatic impairment</strong> - No dose adjustment needed (limited data in severe impairment)</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Drug Interactions</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Drug Class</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Interaction</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Management</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Insulin/Sulfonylureas</td>
                            <td className="border border-gray-300 px-4 py-2">Increased hypoglycemia risk</td>
                            <td className="border border-gray-300 px-4 py-2">Reduce insulin/SU dose by 20-50% when starting tirzepatide</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Oral Medications</td>
                            <td className="border border-gray-300 px-4 py-2">Delayed absorption (gastric emptying)</td>
                            <td className="border border-gray-300 px-4 py-2">Take oral meds 1 hour before tirzepatide injection</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Warfarin</td>
                            <td className="border border-gray-300 px-4 py-2">Potential INR changes</td>
                            <td className="border border-gray-300 px-4 py-2">Monitor INR more frequently when initiating/titrating</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Monitoring Tab */}
              <TabsContent value="monitoring" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Monitoring & Follow-Up</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-0 mb-4 text-gray-900">Pre-Treatment Screening</h3>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
                      <h4 className="font-semibold text-purple-900 mb-3">Required Baseline Assessments</h4>
                      <ul className="space-y-2 text-purple-800">
                        <li><strong>Personal/Family History:</strong> Screen for MTC, MEN 2, pancreatitis</li>
                        <li><strong>Baseline Labs:</strong> HbA1c, fasting glucose, lipid panel, CMP (liver/kidney function)</li>
                        <li><strong>Thyroid Function:</strong> TSH, Free T4 (if symptoms or history)</li>
                        <li><strong>Pregnancy Test:</strong> Women of childbearing potential</li>
                        <li><strong>Diabetic Retinopathy Screening:</strong> If diabetic, fundoscopic exam or retinal photography</li>
                        <li><strong>Gallbladder Ultrasound:</strong> If symptomatic or high-risk (rapid weight loss history)</li>
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
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Week 4</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>Weight, vital signs</li>
                                <li>GI side effect assessment</li>
                                <li>Glucose monitoring (if diabetic)</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Assess tolerability before first dose escalation. Adjust titration if needed.
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Month 3</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>HbA1c, fasting glucose</li>
                                <li>Weight, BMI</li>
                                <li>Lipid panel, CMP</li>
                                <li>Blood pressure</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Assess early metabolic response. Expect 5-8% weight loss, HbA1c reduction if diabetic.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Month 6</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>Repeat all baseline labs</li>
                                <li>Diabetic retinopathy screening (if diabetic)</li>
                                <li>RUQ ultrasound (if symptomatic)</li>
                                <li>Risk-benefit evaluation</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Comprehensive efficacy/safety check. Determine continuation vs. discontinuation.
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Every 6-12 months</td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc list-inside text-sm">
                                <li>HbA1c, glucose, lipids</li>
                                <li>Liver/kidney function</li>
                                <li>Weight, vital signs</li>
                                <li>Thyroid function (if symptomatic)</li>
                              </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              Long-term safety surveillance. Monitor for weight regain, metabolic changes.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Warning Signs & When to Stop</h3>
                    
                    <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6">
                      <h4 className="font-semibold text-red-900 mb-3">Discontinue Immediately If:</h4>
                      <ul className="space-y-2 text-red-800">
                        <li><strong>Severe abdominal pain</strong> - May indicate pancreatitis (persistent, radiates to back, with nausea/vomiting)</li>
                        <li><strong>Thyroid mass or symptoms</strong> - Neck mass, dysphagia, dyspnea, persistent hoarseness</li>
                        <li><strong>Severe allergic reaction</strong> - Anaphylaxis, angioedema, severe rash</li>
                        <li><strong>Pregnancy</strong> - Discontinue immediately if pregnancy detected</li>
                        <li><strong>Confirmed pancreatitis</strong> - Do not restart after resolution</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
                      <h4 className="font-semibold text-yellow-900 mb-3">Seek Medical Attention For:</h4>
                      <ul className="space-y-2 text-yellow-800">
                        <li><strong>Severe nausea/vomiting</strong> - Risk of dehydration, acute kidney injury</li>
                        <li><strong>RUQ abdominal pain</strong> - May indicate gallstones or cholecystitis</li>
                        <li><strong>Vision changes</strong> - Worsening diabetic retinopathy</li>
                        <li><strong>Severe hypoglycemia</strong> - If on insulin/sulfonylureas</li>
                        <li><strong>Signs of dehydration</strong> - Dizziness, decreased urination, dark urine</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Research References</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                          <a href="https://www.ncbi.nlm.nih.gov/books/NBK585056/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            StatPearls - Tirzepatide: Complete Safety and Monitoring Guide
                          </a> - Comprehensive clinical reference
                        </li>
                        <li>
                          <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/215866s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            FDA Prescribing Information - Zepbound (Tirzepatide)
                          </a> - Official FDA labeling
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
              <strong>Disclaimer:</strong> Tirzepatide is FDA-approved for type 2 diabetes and chronic weight management. Use only under medical supervision.
            </p>
            <p>
              For pharmaceutical-grade tirzepatide and medical consultation, visit{" "}
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
