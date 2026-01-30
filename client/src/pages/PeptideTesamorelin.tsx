import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, TrendingDown, Heart, Shield, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PeptideTesamorelin() {
  return (
    <>
    <Helmet>
        <title>Tesamorelin (Egrifta) | DrsPeptides</title>
        <meta name="description" content="Comprehensive guide to tesamorelin for visceral fat reduction and body composition. FDA-approved GHRH analog with clinical protocols, dosing guidelines, and safety data." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tesamorelin (Egrifta) | DrsPeptides" />
        <meta property="og:description" content="Comprehensive guide to tesamorelin for visceral fat reduction and body composition. FDA-approved GHRH analog with clinical protocols, dosing guidelines, and safety data." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tesamorelin (Egrifta) | DrsPeptides" />
        <meta name="twitter:description" content="Comprehensive guide to tesamorelin for visceral fat reduction and body composition. FDA-approved GHRH analog with clinical protocols, dosing guidelines, and safety data." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Tesamorelin (Egrifta)",
          "description": "Comprehensive guide to tesamorelin for visceral fat reduction and body composition. FDA-approved GHRH analog with clinical protocols, dosing guidelines, and safety data.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2025-12-01",
          "medicalAudience": {
                    "@type": "MedicalAudience",
                    "audienceType": "Physician"
          },
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
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
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FDA-Approved GHRH Analog
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Tesamorelin (Egrifta)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The <strong>only FDA-approved peptide</strong> for reduction of excess abdominal fat in HIV-infected adults with lipodystrophy. Synthetic GHRH analog that stimulates pulsatile growth hormone secretion, achieving <strong>15.2% visceral fat reduction</strong> with improved lipid profiles. Approved November 2010 based on landmark NEJM clinical trials.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingDown className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">-15.2%</p>
                  <p className="text-gray-600 text-sm">Visceral Fat Reduction</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">-50 mg/dL</p>
                  <p className="text-gray-600 text-sm">Triglyceride Reduction</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle2 className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">+81%</p>
                  <p className="text-gray-600 text-sm">IGF-I Increase</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">FDA</p>
                  <p className="text-gray-600 text-sm">Approved 2010</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FDA Approval Alert */}
          <Alert className="mb-8 border-green-200 bg-green-50">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertDescription className="ml-2">
              <p className="text-green-900 font-semibold mb-2">FDA-Approved Status</p>
              <p className="text-green-800 text-sm">
                <strong>Egrifta / Egrifta SV (Tesamorelin):</strong> Approved by the FDA in <strong>November 2010</strong> for the reduction of excess abdominal fat in HIV-infected adults with lipodystrophy. <strong>Only FDA-approved medication</strong> for this specific indication in the United States. Not indicated for general weight loss management.
              </p>
            </AlertDescription>
          </Alert>

          {/* Clinical Evidence Alert */}
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <AlertDescription>
              <p className="text-blue-900 font-semibold mb-2">Landmark Clinical Trial (238 Citations)</p>
              <p className="text-blue-800 text-sm">
                <strong>Falutz J et al. (2007):</strong> "Metabolic Effects of a Growth Hormone–Releasing Factor in Patients with HIV." Published in <em>New England Journal of Medicine</em> (NEJM). <strong>Key findings:</strong> 412-patient randomized controlled trial showing <strong>15.2% visceral fat reduction</strong> (vs +5.0% placebo increase), <strong>50 mg/dL triglyceride decrease</strong>, improved cholesterol ratios, and <strong>81% IGF-I increase</strong> over 26 weeks. Led directly to FDA approval.
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
                  <CardTitle>What is Tesamorelin?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Tesamorelin (brand names: <strong>Egrifta, Egrifta SV</strong>) is a <strong>synthetic analog of human growth hormone-releasing hormone (GHRH)</strong>. It is a modified version of the natural GHRH(1-44) peptide with a <strong>trans-3-hexenoyl group</strong> added to the N-terminal, which extends its half-life and improves stability compared to native GHRH.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">FDA-Approved Indication</h4>
                    <p className="text-green-800 text-sm leading-relaxed mb-3">
                      Tesamorelin is <strong>FDA-approved specifically for the reduction of excess abdominal fat in HIV-infected adults with lipodystrophy</strong>. It is the <strong>only medication approved</strong> by the FDA for this indication in the United States.
                    </p>
                    <p className="text-green-800 text-sm leading-relaxed mb-3">
                      <strong>HIV-associated lipodystrophy</strong> is a condition characterized by abnormal fat distribution that occurs during antiretroviral therapy, including:
                    </p>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• <strong>Visceral adipose tissue (VAT) accumulation</strong> - Excess abdominal fat</li>
                      <li>• <strong>Peripheral lipoatrophy</strong> - Loss of subcutaneous fat in limbs and face</li>
                      <li>• <strong>Increased cardiovascular risk</strong> - Dyslipidemia, insulin resistance</li>
                    </ul>
                    <p className="text-green-800 text-sm mt-3">
                      <strong>Limitation of use:</strong> Tesamorelin is <strong>not indicated for general weight loss management</strong> in non-HIV populations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Applications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">HIV-Associated Lipodystrophy (FDA-Approved)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Reduction of excess visceral abdominal fat</li>
                          <li>• Improved lipid profiles (triglycerides, cholesterol)</li>
                          <li>• Reduced cardiovascular risk markers</li>
                          <li>• Improved body image and quality of life</li>
                          <li>• Preserved peripheral fat (doesn't worsen lipoatrophy)</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Off-Label Uses (Research/Clinical)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Visceral adiposity in non-HIV populations</li>
                          <li>• Metabolic syndrome management</li>
                          <li>• Age-related GH decline (GH optimization)</li>
                          <li>• Body composition improvement</li>
                          <li>• Anti-aging protocols (Ben Greenfield stacks)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Clinical Superiority: Visceral Fat Specificity</h4>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-3">Highly Specific for Visceral Fat Compartment</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 text-sm">Visceral Adipose Tissue (VAT)</p>
                          <p className="text-blue-800 text-sm"><strong>Tesamorelin: -15.2% decrease</strong> (mean reduction: -27.8 cm²)</p>
                          <p className="text-blue-800 text-sm">Placebo: +5.0% increase</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 text-sm">Subcutaneous Fat</p>
                          <p className="text-blue-800 text-sm">Tesamorelin: +0.4% (minimal change)</p>
                          <p className="text-blue-800 text-sm">Placebo: +1.7%</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 text-sm">Limb Fat</p>
                          <p className="text-blue-800 text-sm">Tesamorelin: +0.6% (minimal change)</p>
                          <p className="text-blue-800 text-sm">Placebo: +3.8%</p>
                        </div>
                      </div>
                      <p className="text-blue-800 text-sm mt-3">
                        <strong>Clinical significance:</strong> Tesamorelin achieves <strong>selective visceral fat reduction</strong> without reducing peripheral fat, which is critical for lipodystrophy patients who already have peripheral lipoatrophy.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Comparison to Other Interventions</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-900">Intervention</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Visceral Fat Loss</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Duration</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Peripheral Fat Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Tesamorelin</td>
                            <td className="p-3 text-green-600">~1.0 kg</td>
                            <td className="p-3 text-gray-600">6 months</td>
                            <td className="p-3 text-green-600">Preserved (minimal change)</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Surgical Omentectomy</td>
                            <td className="p-3 text-yellow-600">0.6 kg</td>
                            <td className="p-3 text-gray-600">24 months</td>
                            <td className="p-3 text-gray-600">Preserved</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-gray-700">Weight Loss + Exercise</td>
                            <td className="p-3 text-green-600">1.1 kg</td>
                            <td className="p-3 text-gray-600">Variable</td>
                            <td className="p-3 text-red-600">Also reduces (undesirable)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      <strong>Advantage:</strong> Tesamorelin achieves comparable visceral fat reduction to surgery/lifestyle interventions in shorter time, <strong>without reducing peripheral fat</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Appears in Stacking Protocols</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Recover Like Wolverine Stack</p>
                          <p className="text-blue-800 text-sm">Combined with BPC-157, TB-500, Ipamorelin, GHK-Cu for injury healing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-purple-900 text-sm">Lean and Mean Stack</p>
                          <p className="text-purple-800 text-sm">Combined with IGF-1 LR3, Ipamorelin, CJC-1295 for muscle gain + fat loss</p>
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
                    <h4 className="font-semibold text-gray-900 mb-4">1. GHRH Receptor Activation & Pulsatile GH Secretion</h4>
                    <p className="text-gray-700 mb-3">
                      Tesamorelin is a <strong>synthetic analog of growth hormone-releasing hormone (GHRH)</strong>, also known as growth hormone-releasing factor (GRF). It binds to and activates <strong>GHRH receptors</strong> on the anterior pituitary gland, triggering a cascade of events:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>GHRH receptor binding:</strong> Tesamorelin binds to GHRH-R on pituitary somatotrophs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>cAMP pathway activation:</strong> Triggers adenylyl cyclase → increased cAMP → protein kinase A (PKA) activation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>GH synthesis & secretion:</strong> Stimulates both synthesis and release of growth hormone from pituitary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Pulsatile release pattern:</strong> Mimics natural GH secretion rhythm (unlike exogenous GH which is continuous)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">2. IGF-I Production & Anabolic Effects</h4>
                    <p className="text-gray-700 mb-3">
                      Growth hormone released by tesamorelin stimulation acts on the liver and peripheral tissues to produce <strong>insulin-like growth factor I (IGF-I)</strong>:
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-3">IGF-I Increase: +81% (NEJM Study)</p>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li>• <strong>Hepatic IGF-I production:</strong> GH stimulates liver to produce IGF-I (+109 ng/mL mean increase)</li>
                        <li>• <strong>Anabolic signaling:</strong> IGF-I promotes protein synthesis, muscle growth, tissue repair</li>
                        <li>• <strong>Metabolic effects:</strong> Enhances glucose uptake, amino acid transport, lipid metabolism</li>
                        <li>• <strong>Standard-deviation score:</strong> +2.69±2.51 (vs -0.39±1.43 placebo) - significant increase</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">3. Lipolytic Effects & Visceral Fat Reduction</h4>
                    <p className="text-gray-700 mb-3">
                      The primary mechanism by which tesamorelin reduces visceral fat is through <strong>GH-mediated lipolysis</strong>:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Hormone-sensitive lipase (HSL) activation:</strong> GH activates HSL in adipocytes, breaking down triglycerides into free fatty acids</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Visceral adipocyte targeting:</strong> Visceral fat cells are more responsive to GH-mediated lipolysis than subcutaneous fat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Free fatty acid mobilization:</strong> Released fatty acids are used for energy (beta-oxidation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Reduced adipocyte size:</strong> Visceral fat cells shrink as triglyceride stores are depleted</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">4. Lipid Profile Improvement</h4>
                    <p className="text-gray-700 mb-3">
                      Tesamorelin significantly improves cardiovascular risk markers through multiple mechanisms:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Triglyceride Reduction (-50 mg/dL)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Enhanced lipolysis reduces VLDL production</li>
                          <li>• Increased fatty acid oxidation</li>
                          <li>• Improved hepatic lipid metabolism</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Cholesterol Ratio Improvement</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Total cholesterol to HDL ratio: -0.31</li>
                          <li>• HDL cholesterol increase (cardioprotective)</li>
                          <li>• Reduced cardiovascular risk markers</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">5. Structural Modification: Trans-3-Hexenoyl Group</h4>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-3">Enhanced Stability & Half-Life</p>
                      <p className="text-purple-800 text-sm mb-3">
                        Tesamorelin is <strong>GHRH(1-44)</strong> with a <strong>trans-3-hexenoyl group</strong> added to the N-terminal tyrosine residue. This modification provides:
                      </p>
                      <ul className="space-y-1 text-purple-800 text-sm">
                        <li>• <strong>Increased half-life:</strong> Extends duration of action vs native GHRH</li>
                        <li>• <strong>Improved stability:</strong> Resists enzymatic degradation</li>
                        <li>• <strong>Enhanced receptor binding:</strong> Maintains high affinity for GHRH-R</li>
                        <li>• <strong>Once-daily dosing:</strong> Practical administration schedule (vs multiple daily doses for native GHRH)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">6. Pulsatile vs Continuous GH: Physiologic Advantage</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-900">Parameter</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Tesamorelin (GHRH Analog)</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Exogenous GH</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">GH Release Pattern</td>
                            <td className="p-3 text-green-600">Pulsatile (natural rhythm)</td>
                            <td className="p-3 text-yellow-600">Continuous (non-physiologic)</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Negative Feedback</td>
                            <td className="p-3 text-green-600">Preserved (somatostatin regulation)</td>
                            <td className="p-3 text-red-600">Suppressed (shuts down natural GH)</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Side Effects</td>
                            <td className="p-3 text-green-600">Lower (arthralgias, edema less common)</td>
                            <td className="p-3 text-red-600">Higher (joint pain, edema, carpal tunnel)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-gray-700">FDA Approval</td>
                            <td className="p-3 text-green-600">Yes (HIV lipodystrophy)</td>
                            <td className="p-3 text-yellow-600">Yes (GH deficiency, not lipodystrophy)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      <strong>Clinical advantage:</strong> Tesamorelin's pulsatile GH stimulation is more physiologic and better tolerated than continuous exogenous GH administration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab - will continue in next message due to length */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-green-200 bg-green-50">
                    <AlertDescription>
                      <p className="text-green-900 font-semibold mb-2">Landmark FDA Approval Study</p>
                      <p className="text-green-800 text-sm mb-2">
                        <strong>Falutz J et al. (2007) - 238 Citations:</strong> "Metabolic Effects of a Growth Hormone–Releasing Factor in Patients with HIV." <em>New England Journal of Medicine (NEJM)</em> 2007;357:2359-2370.
                      </p>
                      <p className="text-green-800 text-sm">
                        <strong>Study design:</strong> Multicenter, randomized, placebo-controlled trial (412 HIV patients, 2:1 ratio, 26 weeks). <strong>Key findings:</strong> 15.2% visceral fat reduction, 50 mg/dL triglyceride decrease, improved cholesterol ratios, 81% IGF-I increase. Led directly to FDA approval in 2010.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">NEJM 2007 Study: Primary Results</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Visceral Adipose Tissue (Primary Endpoint)</h5>
                        <div className="grid md:grid-cols-2 gap-4 mb-2">
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="font-semibold text-green-900 text-sm">Tesamorelin Group</p>
                            <p className="text-green-800 text-sm"><strong>-15.2% decrease</strong> (mean: -27.8 cm²)</p>
                          </div>
                          <div className="bg-red-50 p-3 rounded-lg">
                            <p className="font-semibold text-red-900 text-sm">Placebo Group</p>
                            <p className="text-red-800 text-sm"><strong>+5.0% increase</strong> (mean: +5.1 cm²)</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm"><strong>P&lt;0.001</strong> - Highly statistically significant</p>
                        <p className="text-gray-600 text-sm mt-2">
                          <strong>Key finding:</strong> Patients with more baseline VAT had larger reductions (dose-response relationship)
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Lipid Profile Improvements</h5>
                        <div className="space-y-2">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="font-semibold text-blue-900 text-sm">Triglycerides</p>
                            <p className="text-blue-800 text-sm">Tesamorelin: <strong>-50 mg/dL decrease</strong></p>
                            <p className="text-blue-800 text-sm">Placebo: +9 mg/dL increase</p>
                            <p className="text-blue-800 text-sm"><strong>P&lt;0.001</strong></p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="font-semibold text-blue-900 text-sm">Total Cholesterol to HDL Ratio</p>
                            <p className="text-blue-800 text-sm">Tesamorelin: <strong>-0.31 decrease</strong></p>
                            <p className="text-blue-800 text-sm">Placebo: +0.21 increase</p>
                            <p className="text-blue-800 text-sm"><strong>P&lt;0.001</strong></p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="font-semibold text-blue-900 text-sm">HDL Cholesterol</p>
                            <p className="text-blue-800 text-sm">Tesamorelin: <strong>Significant increase</strong> (cardioprotective)</p>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">IGF-I Levels (GH Axis Activation Confirmation)</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="font-semibold text-purple-900 text-sm">Tesamorelin Group</p>
                            <p className="text-purple-800 text-sm"><strong>+81.0% increase</strong> (+109 ng/mL)</p>
                            <p className="text-purple-800 text-sm">Standard-deviation score: +2.69±2.51</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="font-semibold text-gray-900 text-sm">Placebo Group</p>
                            <p className="text-gray-800 text-sm">-5.0% decrease (-16 ng/mL)</p>
                            <p className="text-gray-800 text-sm">Standard-deviation score: -0.39±1.43</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2"><strong>P&lt;0.001</strong> - Confirms robust GH axis activation</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Body Composition Specificity Analysis</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-900">Fat Compartment</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Tesamorelin Change</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Placebo Change</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Clinical Significance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Visceral Fat (VAT)</td>
                            <td className="p-3 text-green-600"><strong>-15.2%</strong></td>
                            <td className="p-3 text-red-600">+5.0%</td>
                            <td className="p-3 text-green-600">Highly specific reduction</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Subcutaneous Fat</td>
                            <td className="p-3 text-gray-600">+0.4%</td>
                            <td className="p-3 text-gray-600">+1.7%</td>
                            <td className="p-3 text-green-600">Preserved (minimal change)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-gray-700">Limb Fat</td>
                            <td className="p-3 text-gray-600">+0.6%</td>
                            <td className="p-3 text-gray-600">+3.8%</td>
                            <td className="p-3 text-green-600">Preserved (minimal change)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      <strong>Key finding:</strong> Tesamorelin demonstrates <strong>remarkable specificity for visceral fat</strong> without reducing subcutaneous or limb fat - critical for lipodystrophy patients with peripheral lipoatrophy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Patient-Reported Outcomes</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Reduced distress related to abdominal size:</strong> Significant improvement in body image perception</li>
                        <li><strong>Improved quality of life:</strong> Better self-assessed body image scores</li>
                        <li><strong>Potential improved adherence:</strong> Better body image may improve antiretroviral treatment adherence</li>
                        <li><strong>"Belly size" rating:</strong> Improved perception of abdominal appearance</li>
                        <li><strong>"Belly image distress":</strong> Reduced distress scores (less upsetting)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Additional Clinical Studies</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Stanley TL et al. (2014) - 92 Citations</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>"Effect of tesamorelin on visceral fat and liver fat in HIV-infected patients"</strong>
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>Findings:</strong>
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• <strong>Mean VAT reduction: -34 cm²</strong> (95% CI, -53 to -15)</li>
                          <li>• <strong>Liver fat reduction:</strong> Improved hepatic steatosis</li>
                          <li>• <strong>Visceral fat quality improvement:</strong> Independent of quantity changes</li>
                          <li>• <strong>Metabolic biomarker improvements:</strong> Liver enzymes, lipid profiles</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Jordan EL et al. (2021) - 8 Citations</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>"Tesamorelin Improves Fat Quality Independent of Changes in Quantity"</strong>
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>Findings:</strong>
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• <strong>Fat density improvement:</strong> Healthier adipose tissue composition</li>
                          <li>• <strong>Independent of quantity:</strong> Quality changes occur even with modest VAT reduction</li>
                          <li>• <strong>Metabolic health markers:</strong> Improved adipokine profiles</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-3">Research Limitations</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• <strong>HIV-specific studies:</strong> Most research conducted in HIV-infected populations (limited data in non-HIV populations)</li>
                      <li>• <strong>Antibody development:</strong> ~50% of patients develop antibodies (long-term clinical significance unknown)</li>
                      <li>• <strong>Long-term cardiovascular outcomes:</strong> Not yet established (studies were 26-52 weeks)</li>
                      <li>• <strong>Glycemic effects:</strong> No significant differences observed, but longer-term monitoring needed</li>
                      <li>• <strong>Off-label use data:</strong> Limited clinical trial data for non-HIV populations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab - continuing... */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols & Administration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertDescription className="ml-2">
                      <p className="text-green-900 font-semibold mb-2">FDA-Approved Dosing Protocol</p>
                      <p className="text-green-800 text-sm">
                        <strong>Egrifta / Egrifta SV:</strong> 2mg daily subcutaneous injection (administered between 6am-noon). FDA-approved for HIV-associated lipodystrophy. See complete protocols in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">FDA-Approved Protocol (HIV Lipodystrophy)</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Standard Dosing (Egrifta / Egrifta SV)</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Dose:</strong> 2mg per day</li>
                        <li><strong>Route:</strong> Subcutaneous injection</li>
                        <li><strong>Timing:</strong> Between 6am and noon (morning administration)</li>
                        <li><strong>Frequency:</strong> Once daily</li>
                        <li><strong>Duration:</strong> Continuous use (as prescribed by physician)</li>
                        <li><strong>Reconstitution:</strong> Lyophilized powder reconstituted in sterile water</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-3">
                        <strong>Best for:</strong> FDA-approved indication - reduction of excess abdominal fat in HIV-infected adults with lipodystrophy
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Off-Label Protocols (Research/Clinical Use)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Visceral Adiposity Protocol (Non-HIV)</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 1-2mg per day</li>
                          <li><strong>Frequency:</strong> Once daily (morning)</li>
                          <li><strong>Timing:</strong> Upon waking or mid-morning</li>
                          <li><strong>Duration:</strong> 12-26 weeks on, 4-8 weeks off</li>
                          <li><strong>Cycling:</strong> Recommended to prevent tolerance</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Visceral fat reduction, metabolic syndrome, body composition optimization
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Anti-Aging / GH Optimization Protocol</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 1mg per day (lower dose for maintenance)</li>
                          <li><strong>Frequency:</strong> Once daily before bed</li>
                          <li><strong>Timing:</strong> Evening administration (aligns with natural GH pulse)</li>
                          <li><strong>Duration:</strong> 8-12 weeks on, 4 weeks off</li>
                          <li><strong>Monitoring:</strong> IGF-I levels every 8-12 weeks</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Age-related GH decline, body composition, recovery optimization
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Stacking Protocols</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-3">Recover Like Wolverine Stack (Ben Greenfield)</p>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <ul className="space-y-1 text-blue-800 text-sm">
                            <li>• <strong>Tesamorelin:</strong> 1mg before bed (GH optimization, visceral fat reduction)</li>
                            <li>• <strong>BPC-157:</strong> 250-500mcg daily (gut-systemic healing, angiogenesis)</li>
                            <li>• <strong>TB-500:</strong> 2-5mg, 2x weekly (actin regulation, tissue repair)</li>
                            <li>• <strong>Ipamorelin:</strong> 200-300mcg before bed (synergistic GH release)</li>
                            <li>• <strong>GHK-Cu:</strong> 2mg, 3x weekly (collagen synthesis, tissue remodeling)</li>
                          </ul>
                          <p className="text-blue-800 text-sm mt-3">
                            <strong>Synergy:</strong> Tesamorelin provides pulsatile GH release, Ipamorelin amplifies GH pulse, BPC-157/TB-500 target tissue repair, GHK-Cu optimizes collagen synthesis
                          </p>
                        </div>
                        <p className="text-blue-800 text-sm mt-3">
                          See complete protocol in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>
                        </p>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <p className="font-semibold text-purple-900 mb-3">Lean and Mean Stack (Ben Greenfield)</p>
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                          <ul className="space-y-1 text-purple-800 text-sm">
                            <li>• <strong>Tesamorelin:</strong> 1mg upon waking (fasted) - GH release for fat loss</li>
                            <li>• <strong>IGF-1 LR3:</strong> 20-40mcg post-workout - hyperplasia (new muscle fiber creation)</li>
                            <li>• <strong>Ipamorelin:</strong> 200-300mcg before bed - evening GH pulse</li>
                            <li>• <strong>CJC-1295 (no DAC):</strong> 100-200mcg before bed - amplifies GH release</li>
                          </ul>
                          <p className="text-purple-800 text-sm mt-3">
                            <strong>Synergy:</strong> Triple GH pathway activation (Tesamorelin + Ipamorelin + CJC-1295) + IGF-1 LR3 hyperplasia = simultaneous muscle gain + fat loss
                          </p>
                        </div>
                        <p className="text-purple-800 text-sm mt-3">
                          See complete protocol in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Administration Best Practices</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Injection site:</strong> Subcutaneous (abdomen preferred, rotate sites)</li>
                        <li><strong>Reconstitution:</strong> Use bacteriostatic water, gently swirl (don't shake)</li>
                        <li><strong>Storage:</strong> Refrigerate after reconstitution, use within 14 days</li>
                        <li><strong>Timing consistency:</strong> Same time each day maintains stable plasma levels</li>
                        <li><strong>Food interaction:</strong> Can be taken with or without food (morning dosing per FDA label)</li>
                        <li><strong>Missed dose:</strong> Take as soon as remembered (same day), don't double dose</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Timing Strategies</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Morning administration (FDA-approved):</strong> 6am-noon, aligns with natural cortisol rhythm</li>
                        <li><strong>Evening administration (off-label):</strong> Before bed, aligns with natural nocturnal GH pulse</li>
                        <li><strong>Fasted state (optimal):</strong> Morning fasted administration may enhance lipolytic effects</li>
                        <li><strong>Consistency:</strong> Same time daily maintains stable GH pulsatility</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Cycling Protocols</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Off-Label Cycling (Non-HIV Populations)</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Standard cycle:</strong> 12-26 weeks on, 4-8 weeks off</li>
                        <li><strong>Rationale:</strong> Prevents GHRH receptor desensitization, maintains natural GH pulsatility</li>
                        <li><strong>FDA-approved use:</strong> Continuous daily use (as prescribed for HIV lipodystrophy)</li>
                        <li><strong>Monitoring:</strong> IGF-I levels, visceral fat measurements, lipid panels every 12 weeks</li>
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
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertDescription className="ml-2">
                      <p className="text-green-900 font-semibold mb-2">FDA-Approved with Established Safety Profile</p>
                      <p className="text-green-800 text-sm">
                        Tesamorelin is <strong>FDA-approved</strong> for HIV-associated lipodystrophy with extensive clinical trial data. However, <strong>prescription required</strong> and must be used under qualified healthcare provider supervision. Off-label use should follow same safety protocols.
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
                          <p className="text-red-800 text-sm">GH stimulation may promote tumor growth. <strong>Avoid if cancer diagnosed within past 5 years.</strong> Requires oncologist clearance.</p>
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
                          <p className="font-semibold text-red-900 text-sm">Pituitary Disease or Pituitary Tumor</p>
                          <p className="text-red-800 text-sm">GHRH stimulation may worsen pituitary conditions. <strong>Contraindicated.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Critically Ill Patients</p>
                          <p className="text-red-800 text-sm">GH stimulation may worsen outcomes in acute critical illness. <strong>Discontinue if critically ill.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Diabetic Retinopathy</p>
                          <p className="text-red-800 text-sm">GH may worsen retinal conditions. <strong>Ophthalmologist evaluation required.</strong></p>
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
                          <p className="font-semibold text-yellow-900 text-sm">Diabetes Mellitus or Impaired Glucose Tolerance</p>
                          <p className="text-yellow-800 text-sm">GH may affect glucose metabolism. Close monitoring of blood glucose required.</p>
                        </div>
                      </div>
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
                          <p className="font-semibold text-yellow-900 text-sm">Hypersensitivity to Tesamorelin or Mannitol</p>
                          <p className="text-yellow-800 text-sm">Formulation contains mannitol. Avoid if allergic to either component.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Reported Side Effects (NEJM Study)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Common (Generally Mild)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Injection site reactions (redness, swelling, itching)</li>
                          <li>• Arthralgias (joint pain) - less common than direct GH</li>
                          <li>• Peripheral edema (mild swelling)</li>
                          <li>• Myalgias (muscle pain)</li>
                          <li>• Paresthesias (tingling sensations)</li>
                          <li>• Nausea (transient)</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Serious (Rare, Seek Medical Attention)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Severe allergic reactions (rash, hives, difficulty breathing)</li>
                          <li>• Hyperglycemia (high blood sugar)</li>
                          <li>• Fluid retention (significant edema)</li>
                          <li>• Carpal tunnel syndrome</li>
                          <li>• Increased intracranial pressure</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Antibody Development (~50% of Patients)</h4>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-3">Anti-Tesamorelin Antibodies</p>
                      <p className="text-yellow-800 text-sm mb-3">
                        In the NEJM clinical trial, <strong>approximately 50% of patients</strong> developed antibodies to tesamorelin during the 26-week treatment period.
                      </p>
                      <p className="text-yellow-800 text-sm mb-3">
                        <strong>Clinical significance:</strong>
                      </p>
                      <ul className="space-y-1 text-yellow-800 text-sm">
                        <li>• <strong>Short-term:</strong> No apparent impact on efficacy or safety in 26-week study</li>
                        <li>• <strong>Long-term:</strong> Unknown clinical significance (requires further research)</li>
                        <li>• <strong>Monitoring:</strong> Antibody testing not routinely performed in clinical practice</li>
                        <li>• <strong>Loss of efficacy:</strong> If VAT reduction plateaus or reverses, antibody development may be contributing factor</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Discontinuation Rates (NEJM Study)</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Overall discontinuation:</strong> 20.5% (not significantly different between groups)</li>
                        <li><strong>Tesamorelin group:</strong> 22.7%</li>
                        <li><strong>Placebo group:</strong> 16.1%</li>
                        <li><strong>P=0.12</strong> (not statistically significant)</li>
                        <li><strong>Adverse event-related discontinuation:</strong> Higher in tesamorelin group (specific percentage not reported)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Pre-Treatment Requirements</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Physician consultation:</strong> Required (prescription medication)</li>
                        <li><strong>Cancer screening:</strong> Comprehensive screening before GH-stimulating peptides</li>
                        <li><strong>Glucose tolerance testing:</strong> Fasting glucose, HbA1c, oral glucose tolerance test (if indicated)</li>
                        <li><strong>IGF-I baseline:</strong> Measure baseline IGF-I levels for monitoring</li>
                        <li><strong>Ophthalmologic exam:</strong> If diabetic or at risk for retinopathy</li>
                        <li><strong>Medical history review:</strong> Disclose all conditions, medications, supplements</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Monitoring During Treatment</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Regular physician check-ins:</strong> Every 8-12 weeks during active treatment</li>
                        <li><strong>IGF-I levels:</strong> Monitor every 12 weeks (ensure not excessively elevated)</li>
                        <li><strong>Glucose monitoring:</strong> Fasting glucose, HbA1c every 12 weeks (especially if diabetic/prediabetic)</li>
                        <li><strong>Cancer screening:</strong> Every 6-12 months for GH-stimulating peptides</li>
                        <li><strong>Visceral fat measurement:</strong> CT or MRI every 12-26 weeks to assess efficacy</li>
                        <li><strong>Lipid panels:</strong> Every 12 weeks to track triglycerides, cholesterol</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Drug Interactions</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Glucocorticoids:</strong> May reduce tesamorelin efficacy (suppress GH axis)</li>
                        <li><strong>Oral estrogen:</strong> May reduce IGF-I response (use transdermal estrogen if needed)</li>
                        <li><strong>Insulin/antidiabetic medications:</strong> May require dose adjustment (GH affects glucose metabolism)</li>
                        <li><strong>Antiretroviral therapy:</strong> No significant interactions reported in HIV studies</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Safety Advantages of Tesamorelin</h4>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li>• <strong>FDA-approved:</strong> Established safety profile from clinical trials</li>
                      <li>• <strong>Pulsatile GH release:</strong> More physiologic than continuous exogenous GH (lower side effects)</li>
                      <li>• <strong>Preserved negative feedback:</strong> Natural somatostatin regulation maintained</li>
                      <li>• <strong>Lower GH excess symptoms:</strong> Arthralgias, edema less common than direct GH therapy</li>
                      <li>• <strong>No significant glycemic effects:</strong> NEJM study showed no significant glucose/insulin changes</li>
                      <li>• <strong>Visceral fat specificity:</strong> Doesn't worsen peripheral lipoatrophy (critical for HIV patients)</li>
                    </ul>
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
                      <li>Lipid panel, liver function tests</li>
                      <li>Cancer screening (age-appropriate)</li>
                      <li>Pituitary function assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability, injection site assessment</p>
                      <p><strong>Month 3:</strong> IGF-1 levels, glucose, lipids, clinical response</p>
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
                      <li>Injection site reactions</li>
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
    </>
  );
}
