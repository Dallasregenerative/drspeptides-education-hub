import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, TrendingDown, Brain, Heart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function PeptideCagrilintide() {
  return (
    <>
    <Helmet>
        <title>Cagrilintide | DrsPeptides</title>
        <meta name="description" content="Clinical overview of cagrilintide amylin analog for weight management. Mechanisms, combination therapy with GLP-1 agonists, emerging clinical data, and safety protocols." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cagrilintide | DrsPeptides" />
        <meta property="og:description" content="Clinical overview of cagrilintide amylin analog for weight management. Mechanisms, combination therapy with GLP-1 agonists, emerging clinical data, and safety protocols." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cagrilintide | DrsPeptides" />
        <meta name="twitter:description" content="Clinical overview of cagrilintide amylin analog for weight management. Mechanisms, combination therapy with GLP-1 agonists, emerging clinical data, and safety protocols." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Cagrilintide",
          "description": "Clinical overview of cagrilintide amylin analog for weight management. Mechanisms, combination therapy with GLP-1 agonists, emerging clinical data, and safety protocols.",
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
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
            <PrintButton title="Cagrilintide - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          
          </div></div></div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Amylin Analog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cagrilintide</h1>
            <p className="text-xl text-violet-50 mb-6">
              Long-acting amylin analog for advanced weight loss and metabolic optimization. Enhances satiety, slows gastric emptying, and reduces appetite through central and peripheral mechanisms. Often combined with semaglutide for unprecedented weight reduction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Amylin Analog</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Weight Loss</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Satiety</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Metabolic Health</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
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

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Cagrilintide?</CardTitle>
                  <CardDescription>Long-acting amylin analog for weight management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Cagrilintide is a novel long-acting amylin analog developed for the treatment of obesity and metabolic disorders. Amylin is a naturally occurring hormone co-secreted with insulin by pancreatic beta cells that regulates appetite, satiety, and gastric emptying. Cagrilintide is a lipidated, stabilized analog of human amylin with an extended half-life, allowing once-weekly subcutaneous administration. It represents the next generation of weight loss therapeutics, offering complementary mechanisms to GLP-1 receptor agonists.
                  </p>
                  <p>
                    Cagrilintide works primarily through central nervous system pathways, activating amylin receptors in the area postrema and nucleus tractus solitarius of the brainstem. This activation produces powerful satiety signals, reduces food intake, and slows gastric emptying. Unlike GLP-1 agonists that work primarily through GLP-1 receptors, cagrilintide targets amylin receptors, providing additive and synergistic effects when combined with GLP-1 therapies like semaglutide or tirzepatide.
                  </p>
                  <p>
                    Clinical trials demonstrate that cagrilintide produces significant weight loss as monotherapy (approximately 10-12% body weight reduction) and unprecedented weight loss when combined with semaglutide (up to 25% body weight reduction). The combination therapy, marketed as CagriSema, represents one of the most effective pharmacological weight loss interventions available, with 60% of patients achieving ≥20% weight loss. Cagrilintide is particularly valuable for patients who have plateaued on GLP-1 therapy or require more aggressive weight management.
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
                        <h3 className="font-semibold">Significant Weight Loss</h3>
                        <p className="text-sm text-gray-600">10-12% as monotherapy, up to 25% when combined with semaglutide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Enhanced Satiety</h3>
                        <p className="text-sm text-gray-600">Powerful appetite suppression through central amylin receptor activation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gastric Slowing</h3>
                        <p className="text-sm text-gray-600">Delays gastric emptying for prolonged fullness and reduced intake</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Metabolic Improvements</h3>
                        <p className="text-sm text-gray-600">Improved glycemic control, insulin sensitivity, and cardiovascular markers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Obesity treatment, weight management, metabolic syndrome. <strong>Secondary benefits:</strong> Type 2 diabetes management, cardiovascular risk reduction. <strong>Advantages:</strong> Once-weekly dosing, complementary to GLP-1 agonists, unprecedented weight loss when combined with semaglutide.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Cagrilintide vs Other Weight Loss Peptides</h3>
                <p className="text-sm text-amber-800">
                  <strong>Cagrilintide (Amylin):</strong> 10-12% weight loss monotherapy, 25% combined with semaglutide<br/>
                  <strong>Semaglutide (GLP-1):</strong> 15-17% weight loss, well-established safety<br/>
                  <strong>Tirzepatide (GLP-1/GIP):</strong> 20-22% weight loss, dual agonist<br/>
                  <strong>Retatrutide (Triple):</strong> 24% weight loss, experimental<br/>
                  <strong>Choose Cagrilintide for:</strong> Combination therapy with GLP-1, GLP-1 plateau, maximum weight loss
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How cagrilintide produces weight loss</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Amylin Receptor Activation (Central)</h3>
                    <p className="text-sm text-gray-700">
                      Cagrilintide crosses the blood-brain barrier and activates amylin receptors (AMY1R, AMY3R) in the area postrema and nucleus tractus solitarius of the brainstem. These brain regions are critical for appetite regulation and satiety signaling. Amylin receptor activation produces powerful satiety signals that are transmitted to higher brain centers, reducing hunger and food-seeking behavior. This central mechanism is distinct from GLP-1 receptor pathways, allowing synergistic effects when combined.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Gastric Emptying Delay</h3>
                    <p className="text-sm text-gray-700">
                      Cagrilintide slows gastric emptying through activation of amylin receptors in the area postrema, which sends vagal efferent signals to the stomach. Delayed gastric emptying prolongs the sensation of fullness after meals, reduces postprandial glucose excursions, and decreases overall food intake. This peripheral mechanism complements the central satiety effects, creating a multi-level approach to appetite control.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Appetite Suppression and Food Intake Reduction</h3>
                    <p className="text-sm text-gray-700">
                      Clinical studies show cagrilintide reduces ad libitum food intake by 20-30% through combined central and peripheral mechanisms. The peptide reduces both meal size (through gastric slowing) and meal frequency (through enhanced satiety). Unlike stimulant-based appetite suppressants, cagrilintide works through physiological satiety pathways, producing natural appetite reduction without jitteriness or cardiovascular stimulation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Synergy with GLP-1 Receptor Agonists</h3>
                    <p className="text-sm text-gray-700">
                      Cagrilintide and GLP-1 agonists (like semaglutide) work through distinct but complementary receptor systems. Amylin receptors and GLP-1 receptors are co-localized in key appetite-regulating brain regions, and their combined activation produces additive or synergistic effects on satiety and weight loss. The CagriSema combination (cagrilintide + semaglutide) produces 25% weight loss, significantly more than either agent alone, demonstrating true synergy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Metabolic Effects Beyond Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      Cagrilintide improves glycemic control through multiple mechanisms: reduced food intake, delayed gastric emptying (blunting postprandial glucose spikes), and potential direct effects on insulin sensitivity. Weight loss itself improves metabolic parameters, but cagrilintide may have additional metabolic benefits independent of weight reduction. Studies show improvements in HbA1c, fasting glucose, and insulin resistance markers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">6. Long-Acting Formulation</h3>
                    <p className="text-sm text-gray-700">
                      Cagrilintide is lipidated (fatty acid chain attached) to bind albumin in the bloodstream, creating a depot effect that extends the half-life to approximately 7 days. This allows once-weekly subcutaneous administration, improving patient compliance compared to daily injections. The long-acting formulation provides stable, sustained amylin receptor activation throughout the week.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence supporting cagrilintide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">REDEFINE 1 Trial: CagriSema Combination</h3>
                    <p className="text-sm text-gray-700">
                      NEJM 2025 - Phase 3 trial showing cagrilintide-semaglutide combination produced unprecedented weight loss: mean 22.7% body weight reduction at 68 weeks. 60% of patients achieved ≥20% weight loss, and 40% achieved ≥25% weight loss. This represents the most effective pharmacological weight loss intervention to date, approaching bariatric surgery outcomes.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2502081" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Cagrilintide Monotherapy Efficacy</h3>
                    <p className="text-sm text-gray-700">
                      D'Ascanio AM et al. 2024 - Cagrilintide as monotherapy produced 11.8% body weight reduction after 68 weeks in Phase 3 trials. This demonstrates significant efficacy even without GLP-1 combination, positioning cagrilintide as a viable standalone option for patients who cannot tolerate or prefer not to use GLP-1 agonists.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/36883831/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Mechanism: Brain Amylin Receptor Dependency</h3>
                    <p className="text-sm text-gray-700">
                      Carvas AO et al. The Lancet EBioMedicine 2025 - Research demonstrates cagrilintide's weight loss effects are dependent on AMY1R and AMY3R amylin receptors in the brain. Blocking these receptors abolishes cagrilintide's effects, confirming the central mechanism of action. This research validates the amylin pathway as a critical target for obesity treatment.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Development and Structure-Activity</h3>
                    <p className="text-sm text-gray-700">
                      Kruse T et al. Journal of Medicinal Chemistry 2021 - Detailed report on the development of cagrilintide, including lipidation strategy, stability improvements, and structure-activity relationships. The lipidated design provides once-weekly pharmacokinetics while maintaining full amylin receptor agonist activity.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Research Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-violet-900 mb-2">Unprecedented Weight Loss</h3>
                      <p className="text-sm text-violet-800">22.7% mean weight loss with CagriSema combination, 60% achieving ≥20% loss.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Effective Monotherapy</h3>
                      <p className="text-sm text-purple-800">11.8% weight loss as standalone therapy, comparable to standard GLP-1 doses.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Central Mechanism</h3>
                      <p className="text-sm text-blue-800">Works through brain amylin receptors, distinct from GLP-1 pathways.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Synergistic Effects</h3>
                      <p className="text-sm text-rose-800">Additive weight loss when combined with GLP-1 agonists like semaglutide.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Subcutaneous administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cagrilintide Monotherapy Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Starting dose:</strong> 0.3mg once weekly<br/>
                      <strong>Titration:</strong> Increase by 0.3mg every 4 weeks<br/>
                      <strong>Maintenance dose:</strong> 2.4mg once weekly<br/>
                      <strong>Duration:</strong> Minimum 68 weeks for full effect<br/>
                      <strong>Expected outcome:</strong> 10-12% body weight reduction<br/>
                      <strong>Best for:</strong> Patients who cannot tolerate GLP-1 agonists
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">CagriSema Combination Protocol (Cagrilintide + Semaglutide)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Formulation:</strong> Fixed-dose combination (CagriSema)<br/>
                      <strong>Starting dose:</strong> Cagrilintide 0.3mg + Semaglutide 0.25mg weekly<br/>
                      <strong>Titration:</strong> Gradual escalation over 16-20 weeks<br/>
                      <strong>Maintenance dose:</strong> Cagrilintide 2.4mg + Semaglutide 2.4mg weekly<br/>
                      <strong>Duration:</strong> Minimum 68 weeks for maximum effect<br/>
                      <strong>Expected outcome:</strong> 20-25% body weight reduction<br/>
                      <strong>Best for:</strong> Maximum weight loss, GLP-1 plateau, severe obesity
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Cagrilintide Add-On to Existing GLP-1 Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Indication:</strong> Weight loss plateau on GLP-1 monotherapy<br/>
                      <strong>Starting dose:</strong> 0.3mg cagrilintide weekly (continue GLP-1)<br/>
                      <strong>Titration:</strong> Increase cagrilintide by 0.3mg every 4 weeks<br/>
                      <strong>Maintenance:</strong> Cagrilintide 2.4mg + existing GLP-1 dose<br/>
                      <strong>Expected outcome:</strong> Additional 5-10% weight loss beyond GLP-1 alone
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Injection site:</strong> Subcutaneous (abdomen, thigh, upper arm)<br/>
                      <strong>Timing:</strong> Same day each week, any time of day<br/>
                      <strong>Missed dose:</strong> Take within 5 days, then resume schedule<br/>
                      <strong>Titration importance:</strong> Slow titration reduces GI side effects<br/>
                      <strong>Combination:</strong> Can be given as separate injections or fixed combination<br/>
                      <strong>Storage:</strong> Refrigerate, protect from light
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expectations Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Week 1-4: Initiation Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Reduced appetite and increased satiety</li>
                        <li>Slower gastric emptying (fullness after meals)</li>
                        <li>Initial weight loss (1-3%)</li>
                        <li>Possible GI side effects (nausea, reduced appetite)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-16: Titration Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Progressive dose increases</li>
                        <li>Steady weight loss (0.5-1% per week)</li>
                        <li>Adaptation to GI effects</li>
                        <li>Improved metabolic markers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 16-52: Maintenance Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Continued weight loss at maintenance dose</li>
                        <li>10-15% weight loss (monotherapy) or 15-20% (combination)</li>
                        <li>Sustained appetite suppression</li>
                        <li>Metabolic improvements (glucose, lipids, blood pressure)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 52-68+: Maximum Effect</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Peak weight loss achieved</li>
                        <li>12% (monotherapy) or 20-25% (combination) total weight loss</li>
                        <li>Long-term metabolic benefits</li>
                        <li>Continued therapy for weight maintenance</li>
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
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Safety information for cagrilintide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Good Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Cagrilintide has demonstrated good safety and tolerability in Phase 2 and Phase 3 trials. As an amylin analog, it mimics a naturally occurring hormone, contributing to its favorable safety profile. Most side effects are gastrointestinal and transient, resolving with continued use. The once-weekly dosing and slow titration schedule minimize adverse effects.
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
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Severe gastroparesis:</strong> Further gastric slowing may worsen symptoms</li>
                      <li><strong>Pancreatitis history:</strong> Use with caution, monitor closely</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Most side effects are gastrointestinal and dose-dependent. Slow titration minimizes severity.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea:</strong> Most common (30-50%), usually mild-moderate, improves with time</li>
                      <li><strong>Vomiting:</strong> Less common (10-20%), typically during titration</li>
                      <li><strong>Diarrhea:</strong> Occasional (10-15%)</li>
                      <li><strong>Constipation:</strong> Due to slowed gastric emptying (10-15%)</li>
                      <li><strong>Abdominal discomfort:</strong> Fullness, bloating (common but mild)</li>
                      <li><strong>Injection site reactions:</strong> Rare, mild</li>
                      <li><strong>Hypoglycemia:</strong> Rare unless combined with insulin/sulfonylureas</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Cagrilintide is a prescription medication under development by Novo Nordisk. Require:<br/>
                      • Pharmaceutical-grade formulation<br/>
                      • Proper cold chain storage<br/>
                      • Legitimate prescription from licensed provider<br/>
                      • Avoid compounded or research-grade versions<br/>
                      • CagriSema (combination) is the approved formulation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Tracking progress with cagrilintide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline weight and BMI:</strong> Document starting point</li>
                      <li><strong>Medical history:</strong> Screen for contraindications (MTC, MEN 2, pancreatitis)</li>
                      <li><strong>Metabolic labs:</strong> HbA1c, fasting glucose, lipid panel</li>
                      <li><strong>Thyroid screening:</strong> TSH, calcitonin (if indicated)</li>
                      <li><strong>Current medications:</strong> Assess for drug interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1-4:</strong> Assess tolerance, GI side effects, initial weight loss</p>
                      <p><strong>Month 1-4:</strong> Monthly visits during titration, monitor weight and side effects</p>
                      <p><strong>Month 4-12:</strong> Every 1-2 months, assess weight loss trajectory</p>
                      <p><strong>Month 12+:</strong> Every 3 months for long-term monitoring</p>
                      <p><strong>Labs:</strong> Repeat metabolic panel every 3-6 months</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Weight loss:</strong> Target 10-12% (monotherapy) or 20-25% (combination)</li>
                      <li><strong>Appetite reduction:</strong> Subjective improvement in satiety and food cravings</li>
                      <li><strong>HbA1c reduction:</strong> 0.5-1.5% improvement in diabetic patients</li>
                      <li><strong>Metabolic improvements:</strong> Improved lipids, blood pressure, liver enzymes</li>
                      <li><strong>Quality of life:</strong> Improved mobility, energy, self-esteem</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe abdominal pain:</strong> May indicate pancreatitis</li>
                      <li><strong>Persistent vomiting:</strong> Risk of dehydration</li>
                      <li><strong>Thyroid mass/nodule:</strong> Palpable neck mass (rare)</li>
                      <li><strong>Severe hypoglycemia:</strong> If combined with insulin/sulfonylureas</li>
                      <li><strong>Allergic reaction:</strong> Rash, difficulty breathing, anaphylaxis</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Slow titration is essential to minimize GI side effects</li>
                      <li>Nausea typically improves after 2-4 weeks</li>
                      <li>Eat smaller, more frequent meals to manage fullness</li>
                      <li>Stay hydrated, especially if experiencing GI symptoms</li>
                      <li>Combine with lifestyle modifications (diet, exercise) for best results</li>
                      <li>Long-term therapy (68+ weeks) required for maximum benefit</li>
                      <li>Weight maintenance requires continued therapy</li>
                      <li>Report any persistent or severe side effects immediately</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
    </div>
    </>
  );
}
