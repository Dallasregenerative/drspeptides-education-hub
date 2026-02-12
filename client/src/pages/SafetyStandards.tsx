import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, AlertTriangle, Shield, CheckCircle2, XCircle, Brain, ArrowLeft} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function SafetyStandards() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      {/* Header */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-blue-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Huberman Lab Framework</Badge>
            <h1 className="text-5xl font-bold mb-6">Peptide Therapy Safety & Quality Standards</h1>
            <p className="text-xl text-white/90 mb-4">
              Evidence-based safety framework from Dr. Andrew Huberman (Stanford Professor of Neurobiology) 
              and leading peptide therapy experts.
            </p>
            <p className="text-2xl font-semibold text-white mb-8 italic">
              "Only use peptides under guidance of board-certified physician, sourced from reliable compounding 
              pharmacies, with proper cancer screening and monitoring."
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="#three-tier">Three-Tier Classification</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="#quality">Quality Requirements</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Safety Classification */}
      <section id="three-tier" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Three-Tier Peptide Safety Classification</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Dr. Andrew Huberman's framework for understanding peptide quality and safety based on source, 
              regulation, and contamination risk.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Tier 1: FDA-Approved */}
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-600 text-white">TIER 1</Badge>
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-900">FDA-Approved Prescription Peptides</CardTitle>
                  <CardDescription className="text-base text-green-700">Highest Safety - Regulated & Quality-Controlled</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Safety Profile</h4>
                      <p className="text-sm text-green-800">
                        Highest safety tier with comprehensive FDA oversight, clinical trial data, and quality control standards.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Access Requirements</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Requires prescription from board-certified physician</li>
                        <li>• Medical evaluation and monitoring required</li>
                        <li>• Dispensed through licensed pharmacies</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Examples</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Sermorelin (GHRH analog)</li>
                        <li>• Tesamorelin (FDA-approved GHRH)</li>
                        <li>• Semaglutide (Ozempic, Wegovy)</li>
                        <li>• Tirzepatide (Mounjaro, Zepbound)</li>
                      </ul>
                    </div>

                    <div className="bg-green-100 border border-green-300 rounded-lg p-3 mt-4">
                      <p className="text-sm font-semibold text-green-900">
                        ✅ ONLY TIER TO CONSIDER FOR THERAPEUTIC USE
                      </p>
                      <p className="text-xs text-green-800 mt-1">
                        Huberman's explicit recommendation for patient safety
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tier 2: Gray Market */}
              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-amber-600 text-white">TIER 2</Badge>
                    <AlertTriangle className="h-12 w-12 text-amber-600" />
                  </div>
                  <CardTitle className="text-2xl text-amber-900">Gray Market Peptides</CardTitle>
                  <CardDescription className="text-base text-amber-700">Questionable Safety - Unregulated Sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-amber-900 mb-2">Safety Profile</h4>
                      <p className="text-sm text-amber-800">
                        Questionable safety due to lack of regulatory oversight. Variable purity and contamination risk.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-900 mb-2">Quality Concerns</h4>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• Variable purity (may be &lt;98%)</li>
                        <li>• No FDA oversight or quality control</li>
                        <li>• Potential contamination risk</li>
                        <li>• Unreliable certificates of analysis</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-900 mb-2">Common Sources</h4>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• "Research chemical" suppliers</li>
                        <li>• Online vendors without pharmacy credentials</li>
                        <li>• International sources with minimal regulation</li>
                      </ul>
                    </div>

                    <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 mt-4">
                      <p className="text-sm font-semibold text-amber-900">
                        ⚠️ AVOID - SAFETY CANNOT BE GUARANTEED
                      </p>
                      <p className="text-xs text-amber-800 mt-1">
                        Huberman's explicit warning against gray market sources
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tier 3: Black Market */}
              <Card className="border-2 border-rose-200 bg-rose-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-rose-600 text-white">TIER 3</Badge>
                    <XCircle className="h-12 w-12 text-rose-600" />
                  </div>
                  <CardTitle className="text-2xl text-rose-900">Black Market Peptides</CardTitle>
                  <CardDescription className="text-base text-rose-700">DANGEROUS - High Contamination Risk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-rose-900 mb-2">Safety Profile</h4>
                      <p className="text-sm text-rose-800">
                        DANGEROUS with high contamination risk. Serious health risks including harmful immune responses.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-rose-900 mb-2">Critical Contaminants</h4>
                      <ul className="text-sm text-rose-800 space-y-1">
                        <li>• <strong>Lipopolysaccharide (LPS)</strong> - bacterial endotoxin</li>
                        <li>• Causes harmful immune responses</li>
                        <li>• Systemic inflammation</li>
                        <li>• Potential septic shock in severe cases</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-rose-900 mb-2">Additional Risks</h4>
                      <ul className="text-sm text-rose-800 space-y-1">
                        <li>• Unknown purity (often &lt;80%)</li>
                        <li>• Heavy metal contamination</li>
                        <li>• Mislabeled or counterfeit products</li>
                        <li>• No quality control whatsoever</li>
                      </ul>
                    </div>

                    <div className="bg-rose-100 border border-rose-300 rounded-lg p-3 mt-4">
                      <p className="text-sm font-semibold text-rose-900">
                        ❌ NEVER USE - SERIOUS HEALTH RISKS
                      </p>
                      <p className="text-xs text-rose-800 mt-1">
                        Huberman's strongest warning: absolute contraindication
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-teal-200 bg-teal-50">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <CardTitle className="text-teal-900">Dr. Huberman's Recommendation</CardTitle>
                    <CardDescription className="text-teal-700">
                      "Only use peptides under guidance of board-certified physician, sourced from reliable compounding 
                      pharmacies, with proper cancer screening and monitoring. The risks of contaminated or unregulated 
                      peptides far outweigh any potential benefits."
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Requirements */}
      <section id="quality" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Compounding Pharmacy Quality Standards</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Essential quality requirements for pharmaceutical-grade peptides from licensed compounding pharmacies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>Required Standards</CardTitle>
                  <CardDescription>Non-negotiable quality requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <div>
                        <strong>Board-Certified Pharmacy:</strong> Licensed compounding pharmacy with state board certification
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <div>
                        <strong>Certificate of Analysis (COA):</strong> Third-party testing documentation for every batch
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <div>
                        <strong>&gt;98% Peptide Purity:</strong> Minimum purity standard for pharmaceutical-grade peptides
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <div>
                        <strong>Endotoxin Testing:</strong> LPS contamination testing to ensure sterility
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <div>
                        <strong>Proper Refrigeration:</strong> Cold chain maintenance and proper storage protocols
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <div>
                        <strong>GMP Compliance:</strong> Good Manufacturing Practice standards (cGMP certified)
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <XCircle className="h-10 w-10 text-rose-600 mb-2" />
                  <CardTitle>Red Flags - Avoid These Sources</CardTitle>
                  <CardDescription>Warning signs of unreliable suppliers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✗</span>
                      <div>
                        <strong>No Pharmacy Credentials:</strong> Online vendors without board certification
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✗</span>
                      <div>
                        <strong>"Research Chemical" Suppliers:</strong> Products labeled "not for human use"
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✗</span>
                      <div>
                        <strong>International Sources:</strong> No U.S. regulation or quality oversight
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✗</span>
                      <div>
                        <strong>Below-Market Pricing:</strong> Prices significantly below legitimate compounding pharmacies
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✗</span>
                      <div>
                        <strong>No COA or Testing:</strong> Missing certificates of analysis or third-party testing
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">✗</span>
                      <div>
                        <strong>No Prescription Required:</strong> Selling prescription peptides without physician oversight
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">DrsPeptides.com Quality Commitment</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800">
                <p className="mb-4">
                  DrsPeptides.com provides USA-manufactured, cGMP-certified peptides with comprehensive third-party 
                  testing for healthcare providers nationwide. Every batch includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Certificate of Analysis (COA)</strong> with purity verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Endotoxin testing</strong> to ensure sterility and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>&gt;99% purity standard</strong> exceeding industry requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>cGMP manufacturing</strong> in FDA-registered facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pre-Treatment Requirements */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Pre-Treatment Requirements & Safety Framework</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Essential safety protocols before initiating peptide therapy, based on Huberman Lab framework and 
              clinical best practices.
            </p>

            <Tabs defaultValue="pretreatment" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="pretreatment">Pre-Treatment</TabsTrigger>
                <TabsTrigger value="contraindications">Contraindications</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              </TabsList>

              <TabsContent value="pretreatment">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pre-Treatment Requirements</CardTitle>
                    <CardDescription>Mandatory steps before initiating peptide therapy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                          Physician Consultation
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Board-certified MD oversight mandatory</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Comprehensive medical history</li>
                          <li>• Current medications review</li>
                          <li>• Treatment goals assessment</li>
                          <li>• Risk-benefit discussion</li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                          Cancer Screening
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Rule out active tumors or cancer history</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Recent cancer screening (within 1 year)</li>
                          <li>• Imaging if indicated</li>
                          <li>• Tumor marker testing (if applicable)</li>
                          <li>• 5-year cancer-free minimum for most peptides</li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                          Source Verification
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Only use licensed compounding pharmacies</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Board-certified pharmacy credentials</li>
                          <li>• cGMP manufacturing standards</li>
                          <li>• Third-party testing verification</li>
                          <li>• Certificate of Analysis (COA) review</li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                          Quality Testing
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Ensure peptide purity and sterility</strong>
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• &gt;98% peptide purity minimum</li>
                          <li>• Endotoxin testing (LPS contamination)</li>
                          <li>• Heavy metal screening</li>
                          <li>• Sterility verification</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-900 mb-2">Critical Warning: Angiogenic Peptides</h4>
                      <p className="text-amber-800 text-sm">
                        Peptides that promote angiogenesis (new blood vessel growth) such as BPC-157 and TB-500 
                        <strong> may promote tumor growth</strong>. Growth factors that help healing can also feed tumors. 
                        Cancer screening is MANDATORY before using these peptides.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contraindications">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Contraindications</CardTitle>
                    <CardDescription>Absolute and relative contraindications for peptide therapy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-rose-900 flex items-center gap-2">
                          <XCircle className="h-5 w-5" />
                          Absolute Contraindications
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                            <h5 className="font-semibold text-rose-900 mb-2">Active Cancer</h5>
                            <p className="text-sm text-rose-800">
                              Current cancer diagnosis or active tumors. Peptides (especially angiogenic ones) may 
                              promote tumor growth.
                            </p>
                          </div>

                          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                            <h5 className="font-semibold text-rose-900 mb-2">Recent Cancer History</h5>
                            <p className="text-sm text-rose-800">
                              Cancer within past 5 years. Insufficient time to ensure complete remission and no 
                              microscopic disease.
                            </p>
                          </div>

                          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                            <h5 className="font-semibold text-rose-900 mb-2">Pregnancy or Breastfeeding</h5>
                            <p className="text-sm text-rose-800">
                              Unknown effects on fetal development and infant safety. No human safety data available.
                            </p>
                          </div>

                          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                            <h5 className="font-semibold text-rose-900 mb-2">Uncontrolled Diabetes</h5>
                            <p className="text-sm text-rose-800">
                              Some peptides (especially GH secretagogues) can affect glucose metabolism and insulin sensitivity.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4 text-amber-900 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Relative Contraindications
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h5 className="font-semibold text-amber-900 mb-2">Family History of Cancer</h5>
                            <p className="text-sm text-amber-800">
                              Increased genetic risk. Requires more frequent screening and careful risk-benefit assessment.
                            </p>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h5 className="font-semibold text-amber-900 mb-2">Autoimmune Conditions</h5>
                            <p className="text-sm text-amber-800">
                              Peptides may modulate immune function. Close monitoring required for disease activity changes.
                            </p>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h5 className="font-semibold text-amber-900 mb-2">Hormone-Sensitive Conditions</h5>
                            <p className="text-sm text-amber-800">
                              Conditions affected by hormones (e.g., endometriosis, PCOS). GH secretagogues may influence 
                              hormone balance.
                            </p>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h5 className="font-semibold text-amber-900 mb-2">Cardiovascular Disease</h5>
                            <p className="text-sm text-amber-800">
                              Some peptides may affect blood pressure or cardiac function. Cardiology consultation may be needed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="monitoring">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Monitoring During Treatment</CardTitle>
                    <CardDescription>Ongoing safety monitoring and optimization protocols</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Regular Physician Check-Ins</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Initial phase:</strong> Weekly to bi-weekly check-ins</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Maintenance:</strong> Monthly to quarterly visits</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Symptom review:</strong> Efficacy and adverse events</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Dosing adjustments:</strong> Based on response and tolerability</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Cancer Screening</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Angiogenic peptides:</strong> Every 6 months minimum</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Age-appropriate screening:</strong> Colonoscopy, mammography, etc.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Imaging if indicated:</strong> Based on symptoms or risk factors</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Tumor markers:</strong> If applicable to patient history</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Hormone Level Monitoring</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>GH secretagogues:</strong> IGF-1 levels every 3 months</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Glucose monitoring:</strong> Fasting glucose, HbA1c</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Thyroid function:</strong> TSH, T3, T4 if indicated</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Sex hormones:</strong> Testosterone, estrogen if relevant</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Adverse Event Tracking</h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Injection site reactions:</strong> Pain, swelling, redness</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Systemic symptoms:</strong> Fatigue, headache, nausea</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Metabolic changes:</strong> Weight, appetite, energy levels</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span><strong>Serious events:</strong> Immediate physician notification</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Cycling Protocols</h4>
                      <p className="text-blue-800 text-sm mb-3">
                        Most peptides should be cycled to prevent receptor desensitization and maintain effectiveness:
                      </p>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• <strong>Typical course:</strong> 8-12 weeks of treatment</li>
                        <li>• <strong>Rest period:</strong> 4-8 weeks off between cycles</li>
                        <li>• <strong>Reassessment:</strong> Evaluate efficacy and need for continuation</li>
                        <li>• <strong>Long-term use:</strong> Requires ongoing physician oversight and monitoring</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
