import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, TrendingDown, Zap, Award, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function PeptideRetatrutide() {
  return (
    <>
    <Helmet>
        <title>Retatrutide | DrsPeptides</title>
        <meta name="description" content="Evidence-based guide to retatrutide triple agonist for obesity treatment. Mechanisms, clinical trial data, dosing protocols, future applications, and safety considerations." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Retatrutide | DrsPeptides" />
        <meta property="og:description" content="Evidence-based guide to retatrutide triple agonist for obesity treatment. Mechanisms, clinical trial data, dosing protocols, future applications, and safety considerations." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retatrutide | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based guide to retatrutide triple agonist for obesity treatment. Mechanisms, clinical trial data, dosing protocols, future applications, and safety considerations." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Retatrutide",
          "description": "Evidence-based guide to retatrutide triple agonist for obesity treatment. Mechanisms, clinical trial data, dosing protocols, future applications, and safety considerations.",
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Triple Agonist</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Retatrutide</h1>
            <p className="text-xl text-violet-50 mb-6">
              Revolutionary triple agonist activating GIP, GLP-1, and glucagon receptors for unprecedented weight loss efficacy. Clinical trials demonstrate 24.2% body weight reduction at 48 weeks—the highest weight loss ever achieved with pharmacotherapy. Represents the next generation beyond tirzepatide.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">24% Weight Loss</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Triple Mechanism</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Metabolic Health</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Next Generation</span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanism" className="gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanism</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="gap-2">
                <Beaker className="h-4 w-4" />
                <span className="hidden sm:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="gap-2">
                <Pill className="h-4 w-4" />
                <span className="hidden sm:inline">Protocols</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Monitoring</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Retatrutide?</CardTitle>
                  <CardDescription>Next-generation triple agonist for weight loss</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retatrutide is a novel triple agonist that simultaneously activates three metabolic hormone receptors: GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon. This unprecedented triple mechanism produces synergistic effects on appetite suppression, energy expenditure, and metabolic health. Clinical trials demonstrate 24.2% body weight reduction at 48 weeks with the 12mg dose—surpassing all existing obesity medications including tirzepatide (20.9%) and semaglutide (14.9%). Retatrutide represents the next generation of metabolic therapeutics, offering hope for patients who need maximum weight loss efficacy.
                  </p>
                  <p>
                    The addition of glucagon receptor activation to the GIP/GLP-1 dual agonist approach (tirzepatide) provides unique metabolic benefits: increased energy expenditure, enhanced fat oxidation, improved hepatic metabolism, and prevention of adaptive metabolic slowdown during weight loss. This addresses a key limitation of GLP-1-only agonists—the metabolic adaptation that limits long-term weight loss. Retatrutide maintains metabolic rate during caloric restriction, enabling sustained weight loss without the typical metabolic slowdown. The medication is administered once weekly via subcutaneous injection, with gradual dose escalation to minimize GI side effects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Maximum Weight Loss</h3>
                        <p className="text-sm text-gray-600">24.2% body weight reduction—highest ever achieved</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Increased Energy Expenditure</h3>
                        <p className="text-sm text-gray-600">Glucagon activation prevents metabolic slowdown</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Superior to Tirzepatide</h3>
                        <p className="text-sm text-gray-600">+3.3% greater weight loss vs dual agonist</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Metabolic Optimization</h3>
                        <p className="text-sm text-gray-600">Improved glucose, lipids, liver function</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comparison to Other Medications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                      <span className="font-semibold">Retatrutide (triple agonist)</span>
                      <span className="text-violet-600 font-bold">24.2% weight loss</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                      <span className="font-semibold">Tirzepatide (dual agonist)</span>
                      <span className="text-purple-600 font-bold">20.9% weight loss</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="font-semibold">Semaglutide (GLP-1 only)</span>
                      <span className="text-blue-600 font-bold">14.9% weight loss</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-violet-50 border-l-4 border-violet-600 p-4">
                <h3 className="font-semibold text-violet-900 mb-2">Clinical Development Status</h3>
                <p className="text-sm text-violet-800">
                  <strong>Phase 2 completed:</strong> Demonstrated 24.2% weight loss with excellent safety profile. <strong>Phase 3 trials:</strong> Currently enrolling for obesity and type 2 diabetes indications. <strong>Expected approval:</strong> 2025-2026 pending Phase 3 results. <strong>Current availability:</strong> Research/compounding pharmacies for off-label use.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How retatrutide's triple mechanism works</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. GLP-1 Receptor Activation: Appetite Suppression</h3>
                    <p className="text-sm text-gray-700">
                      GLP-1 receptor activation in the hypothalamus and brainstem reduces appetite, increases satiety, and slows gastric emptying. This produces significant caloric reduction (typically 500-1000 kcal/day) without conscious effort. GLP-1 also enhances glucose-dependent insulin secretion and suppresses glucagon, improving glycemic control. This is the core mechanism shared with semaglutide and provides the foundation for weight loss.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. GIP Receptor Activation: Enhanced Efficacy</h3>
                    <p className="text-sm text-gray-700">
                      GIP (glucose-dependent insulinotropic polypeptide) receptor activation amplifies the effects of GLP-1, producing synergistic weight loss. GIP enhances insulin secretion, improves insulin sensitivity, reduces inflammation, and may have direct effects on adipose tissue metabolism. The GIP/GLP-1 combination (as seen in tirzepatide) produces superior weight loss compared to GLP-1 alone. This dual mechanism provides the enhanced efficacy seen with tirzepatide.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Glucagon Receptor Activation: Energy Expenditure</h3>
                    <p className="text-sm text-gray-700">
                      Glucagon receptor activation is retatrutide's unique feature, distinguishing it from tirzepatide. Glucagon increases energy expenditure, enhances fat oxidation, promotes hepatic fat metabolism, and prevents the adaptive metabolic slowdown that typically occurs during weight loss. This maintains metabolic rate despite caloric restriction, enabling continued weight loss and preventing weight regain. The glucagon component addresses a key limitation of GLP-1-only approaches.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4. Synergistic Triple Effect</h3>
                    <p className="text-sm text-gray-700">
                      The combination of GIP, GLP-1, and glucagon receptor activation produces effects greater than the sum of individual components. GLP-1 and GIP reduce appetite and improve glucose control, while glucagon maintains energy expenditure and prevents metabolic adaptation. This synergy enables 24% weight loss—surpassing all existing medications. The triple mechanism addresses multiple pathways of obesity simultaneously: appetite, metabolism, and energy balance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence supporting retatrutide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Phase 2 Trial: Record-Breaking Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      Jastreboff AM et al. NEJM 2023 - Phase 2 trial demonstrating retatrutide 12mg weekly produced 24.2% weight loss at 48 weeks in adults with obesity. 91% achieved ≥5% weight loss, 75% achieved ≥15% weight loss. Highest weight loss ever achieved with pharmacotherapy.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2301972" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Metabolic Benefits Beyond Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      Phase 2 data showed significant metabolic improvements: HbA1c reduction of 2.02% in diabetic patients, triglyceride reduction of 40%, liver fat reduction of 50%, blood pressure reduction of 8-10 mmHg. Demonstrates comprehensive metabolic health benefits beyond weight loss alone.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Comparison to Tirzepatide</h3>
                    <p className="text-sm text-gray-700">
                      Head-to-head comparison data from Phase 2 trials: retatrutide 12mg produced 24.2% weight loss vs tirzepatide 15mg at 20.9% weight loss—a 3.3 percentage point advantage. This represents the first medication to surpass tirzepatide's efficacy, validating the triple agonist approach.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Administration guidelines for retatrutide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Weight Loss Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Starting dose:</strong> 2mg once weekly (subcutaneous)<br/>
                      <strong>Titration:</strong> Increase by 2-4mg every 4 weeks<br/>
                      <strong>Target dose:</strong> 8-12mg once weekly<br/>
                      <strong>Duration:</strong> 48+ weeks for maximum weight loss<br/>
                      <strong>Expected outcome:</strong> 20-24% body weight reduction
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dose Escalation Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Weeks 1-4:</strong> 2mg weekly (assess tolerance)</p>
                      <p><strong>Weeks 5-8:</strong> 4mg weekly (initial weight loss begins)</p>
                      <p><strong>Weeks 9-12:</strong> 6mg weekly (accelerated weight loss)</p>
                      <p><strong>Weeks 13-16:</strong> 8mg weekly (maintenance dose for most)</p>
                      <p><strong>Weeks 17+:</strong> 12mg weekly (maximum efficacy dose if tolerated)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Injection sites:</strong> Abdomen, thigh, upper arm (rotate sites)<br/>
                      <strong>Timing:</strong> Same day each week, any time of day<br/>
                      <strong>Titration:</strong> Slow escalation reduces GI side effects<br/>
                      <strong>Missed doses:</strong> Take within 4 days or skip and resume schedule<br/>
                      <strong>Storage:</strong> Refrigerate before first use, can be room temp after opening
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Safety information for retatrutide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Favorable Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Phase 2 trials demonstrated good tolerability with safety profile similar to tirzepatide. Most side effects are GI-related and transient. Discontinuation rate of 2.7% comparable to other GLP-1 agonists.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Personal/family history of MTC:</strong> Medullary thyroid carcinoma (theoretical risk)</li>
                      <li><strong>MEN 2 syndrome:</strong> Multiple endocrine neoplasia type 2</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data</li>
                      <li><strong>Severe gastroparesis:</strong> May worsen gastric emptying delay</li>
                      <li><strong>Pancreatitis history:</strong> Use with caution</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Common Side Effects</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea:</strong> 40-50% (most common, usually transient)</li>
                      <li><strong>Diarrhea:</strong> 25-30%</li>
                      <li><strong>Vomiting:</strong> 15-20%</li>
                      <li><strong>Constipation:</strong> 15-20%</li>
                      <li><strong>Abdominal pain:</strong> 10-15%</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2">
                      <strong>Management:</strong> Slow titration, smaller meals, avoid fatty foods, anti-nausea medications if needed. Most GI side effects resolve within 4-8 weeks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Tracking progress with retatrutide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline weight and BMI:</strong> Document starting point</li>
                      <li><strong>Medical history:</strong> Screen for contraindications (MTC, MEN 2, pancreatitis)</li>
                      <li><strong>Metabolic labs:</strong> HbA1c, fasting glucose, lipid panel, liver function</li>
                      <li><strong>Thyroid screening:</strong> TSH, calcitonin if indicated</li>
                      <li><strong>Cardiovascular assessment:</strong> Blood pressure, heart rate</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1-4:</strong> Assess tolerance, GI side effects, initial weight loss</p>
                      <p><strong>Month 1-6:</strong> Monthly visits during titration, monitor weight and side effects</p>
                      <p><strong>Month 6-12:</strong> Every 1-2 months, assess weight loss trajectory</p>
                      <p><strong>Month 12+:</strong> Every 3 months for long-term monitoring</p>
                      <p><strong>Labs:</strong> Repeat metabolic panel every 3-6 months</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Weight loss:</strong> 20-24% total body weight at 48 weeks</li>
                      <li><strong>HbA1c reduction:</strong> 2.0% in diabetic patients</li>
                      <li><strong>Metabolic improvements:</strong> 40% triglyceride reduction, 50% liver fat reduction</li>
                      <li><strong>Quality of life:</strong> Improved energy, mobility, self-esteem</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. Retatrutide is investigational (Phase 3 trials ongoing). 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
