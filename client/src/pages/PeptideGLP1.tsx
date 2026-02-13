import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, TrendingDown, Heart, Zap, Award } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideGLP1() {
  return (
    <>
    <Helmet>
        <title>GLP-1 Agonists | DrsPeptides</title>
        <meta name="description" content="Comprehensive guide to GLP-1 receptor agonists for weight management and diabetes. Mechanisms, clinical applications, prescribing protocols, and evidence-based guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLP-1 Agonists | DrsPeptides" />
        <meta property="og:description" content="Comprehensive guide to GLP-1 receptor agonists for weight management and diabetes. Mechanisms, clinical applications, prescribing protocols, and evidence-based guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLP-1 Agonists | DrsPeptides" />
        <meta name="twitter:description" content="Comprehensive guide to GLP-1 receptor agonists for weight management and diabetes. Mechanisms, clinical applications, prescribing protocols, and evidence-based guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "GLP-1 Agonists",
          "description": "Comprehensive guide to GLP-1 receptor agonists for weight management and diabetes. Mechanisms, clinical applications, prescribing protocols, and evidence-based guidelines.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2026-02-12",
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

      <Navigation />

      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Peptide Hormone Class</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GLP-1 Agonists</h1>
            <p className="text-xl text-blue-50 mb-6">
              Comprehensive guide to glucagon-like peptide-1 (GLP-1) receptor agonists—the revolutionary class of medications transforming diabetes and obesity treatment. Understanding the mechanism, clinical applications, and different GLP-1 medications available.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Weight Loss</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Diabetes Control</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Cardiovascular Benefits</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Metabolic Health</span>
            </div>
          </div>
        </div>
      </section>

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

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What are GLP-1 Agonists?</CardTitle>
                  <CardDescription>Revolutionary class of metabolic medications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GLP-1 (glucagon-like peptide-1) agonists are a class of medications that mimic the natural hormone GLP-1, which is produced in the intestines in response to food intake. These medications activate GLP-1 receptors throughout the body, producing multiple beneficial effects: appetite suppression, slowed gastric emptying, enhanced insulin secretion, reduced glucagon secretion, and improved glycemic control. Originally developed for type 2 diabetes treatment, GLP-1 agonists have revolutionized obesity management with unprecedented weight loss efficacy (15-22% body weight reduction) and demonstrated cardiovascular benefits.
                  </p>
                  <p>
                    The class includes several medications with different structures and durations of action. Short-acting GLP-1 agonists (exenatide) require twice-daily dosing, while long-acting versions (semaglutide, dulaglutide, liraglutide) offer once-weekly or once-daily convenience. The newest generation includes dual and triple agonists (tirzepatide) that activate multiple receptors for enhanced efficacy. All GLP-1 agonists share core mechanisms but differ in potency, side effect profiles, and clinical outcomes. Understanding these differences helps clinicians select the optimal agent for each patient.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available GLP-1 Medications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-semibold">Semaglutide (Ozempic, Wegovy, Rybelsus)</h3>
                      <p className="text-sm text-gray-600">Once-weekly injection or daily oral. 15-17% weight loss. Most prescribed GLP-1 agonist.</p>
                    </div>
                    <div className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="font-semibold">Tirzepatide (Mounjaro, Zepbound)</h3>
                      <p className="text-sm text-gray-600">Once-weekly injection. Dual GIP/GLP-1 agonist. 20-22% weight loss. Highest efficacy.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="font-semibold">Liraglutide (Victoza, Saxenda)</h3>
                      <p className="text-sm text-gray-600">Once-daily injection. 8-10% weight loss. Established safety profile.</p>
                    </div>
                    <div className="border-l-4 border-pink-600 pl-4">
                      <h3 className="font-semibold">Dulaglutide (Trulicity)</h3>
                      <p className="text-sm text-gray-600">Once-weekly injection. Primarily for diabetes. Moderate weight loss.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Significant Weight Loss</h3>
                        <p className="text-sm text-gray-600">15-22% body weight reduction depending on agent</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Cardiovascular Protection</h3>
                        <p className="text-sm text-gray-600">Reduced risk of heart attack, stroke, cardiovascular death</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Glycemic Control</h3>
                        <p className="text-sm text-gray-600">HbA1c reduction of 1.5-2.5% in diabetic patients</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Metabolic Improvements</h3>
                        <p className="text-sm text-gray-600">Improved lipids, blood pressure, liver function</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary indications:</strong> Type 2 diabetes, obesity (BMI ≥30 or ≥27 with comorbidities), cardiovascular risk reduction. <strong>Off-label uses:</strong> Prediabetes, metabolic syndrome, NAFLD, PCOS. <strong>Emerging applications:</strong> Alzheimer's disease, addiction, chronic kidney disease.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How GLP-1 agonists work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. GLP-1 Receptor Activation</h3>
                    <p className="text-sm text-gray-700">
                      GLP-1 agonists bind to and activate GLP-1 receptors expressed throughout the body: pancreatic beta cells, brain (hypothalamus, brainstem), stomach, heart, and kidneys. Receptor activation triggers intracellular signaling cascades that produce multiple metabolic effects. The medications are designed to resist degradation by DPP-4 enzyme, providing sustained receptor activation compared to natural GLP-1 (which has a half-life of only 2 minutes).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Appetite Suppression and Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      GLP-1 receptors in the hypothalamus and brainstem regulate appetite and satiety. Activation of these receptors reduces hunger, increases fullness, and decreases food intake. GLP-1 agonists also slow gastric emptying, prolonging satiety after meals. These combined effects produce significant caloric reduction (typically 500-1000 kcal/day) without conscious effort, leading to substantial weight loss. The effect is dose-dependent, with higher doses producing greater appetite suppression and weight loss.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Glycemic Control</h3>
                    <p className="text-sm text-gray-700">
                      In pancreatic beta cells, GLP-1 receptor activation enhances glucose-dependent insulin secretion—insulin is released only when blood glucose is elevated, minimizing hypoglycemia risk. GLP-1 agonists also suppress glucagon secretion from alpha cells, reducing hepatic glucose production. The combination of increased insulin and decreased glucagon improves glycemic control with HbA1c reductions of 1.5-2.5%. Effects are glucose-dependent, so hypoglycemia is rare unless combined with insulin or sulfonylureas.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4. Cardiovascular and Metabolic Benefits</h3>
                    <p className="text-sm text-gray-700">
                      GLP-1 receptors in the heart and vasculature mediate cardiovascular protective effects: reduced inflammation, improved endothelial function, decreased blood pressure, and potential direct cardioprotective effects. Large cardiovascular outcome trials demonstrate 12-26% reduction in major adverse cardiovascular events (MACE). Additional metabolic benefits include improved lipid profiles, reduced liver fat (NAFLD/NASH), and decreased systemic inflammation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence supporting GLP-1 agonists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Semaglutide STEP Trials: Weight Loss Efficacy</h3>
                    <p className="text-sm text-gray-700">
                      Wilding JPH et al. NEJM 2021 - STEP 1 trial demonstrating semaglutide 2.4mg weekly produced 14.9% weight loss at 68 weeks in adults with obesity. 86% achieved ≥5% weight loss, 69% achieved ≥10% weight loss.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tirzepatide SURMOUNT Trials: Superior Weight Loss</h3>
                    <p className="text-sm text-gray-700">
                      Jastreboff AM et al. NEJM 2022 - SURMOUNT-1 trial showing tirzepatide 15mg weekly produced 20.9% weight loss at 72 weeks—highest weight loss ever achieved with pharmacotherapy.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cardiovascular Outcomes: SUSTAIN-6 and SELECT</h3>
                    <p className="text-sm text-gray-700">
                      Marso SP et al. NEJM 2016 - SUSTAIN-6 trial demonstrating 26% reduction in major adverse cardiovascular events with semaglutide. SELECT trial (2023) confirmed cardiovascular benefits in non-diabetic patients with obesity.
                      <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1607141" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Dosing Guidelines</CardTitle>
                  <CardDescription>Titration and administration across GLP-1 class</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Semaglutide (Ozempic/Wegovy)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Starting dose:</strong> 0.25mg once weekly (subcutaneous)<br/>
                      <strong>Titration:</strong> Increase by 0.25-0.5mg every 4 weeks<br/>
                      <strong>Target dose:</strong> 2.4mg once weekly for weight loss<br/>
                      <strong>Duration:</strong> Long-term therapy, typically 68+ weeks for maximum weight loss
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tirzepatide (Mounjaro/Zepbound)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Starting dose:</strong> 2.5mg once weekly (subcutaneous)<br/>
                      <strong>Titration:</strong> Increase by 2.5mg every 4 weeks<br/>
                      <strong>Target dose:</strong> 10-15mg once weekly<br/>
                      <strong>Duration:</strong> 72+ weeks for maximum 20-22% weight loss
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Liraglutide (Saxenda)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Starting dose:</strong> 0.6mg once daily (subcutaneous)<br/>
                      <strong>Titration:</strong> Increase by 0.6mg weekly<br/>
                      <strong>Target dose:</strong> 3.0mg once daily<br/>
                      <strong>Duration:</strong> Long-term therapy for weight maintenance
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">General Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Injection sites:</strong> Abdomen, thigh, upper arm (rotate sites)<br/>
                      <strong>Timing:</strong> Can be taken with or without food<br/>
                      <strong>Titration:</strong> Slow titration reduces GI side effects<br/>
                      <strong>Missed doses:</strong> Take within 5 days (weekly) or skip and resume schedule<br/>
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
                  <CardDescription>Safety information for GLP-1 agonist class</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Established Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      GLP-1 agonists have extensive clinical trial data demonstrating safety and efficacy. Millions of patients have been treated worldwide with good tolerability. Most side effects are GI-related and transient.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Personal/family history of MTC:</strong> Medullary thyroid carcinoma</li>
                      <li><strong>MEN 2 syndrome:</strong> Multiple endocrine neoplasia type 2</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data</li>
                      <li><strong>Severe gastroparesis:</strong> GLP-1 agonists slow gastric emptying</li>
                      <li><strong>Pancreatitis history:</strong> Use with caution</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Common Side Effects</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea:</strong> 30-44% (most common, usually transient)</li>
                      <li><strong>Vomiting:</strong> 15-18%</li>
                      <li><strong>Diarrhea:</strong> 20-25%</li>
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
                  <CardDescription>Tracking progress with GLP-1 agonists</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline weight and BMI:</strong> Document starting point</li>
                      <li><strong>Medical history:</strong> Screen for contraindications (MTC, MEN 2, pancreatitis)</li>
                      <li><strong>Metabolic labs:</strong> HbA1c, fasting glucose, lipid panel</li>
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
                      <li><strong>Weight loss:</strong> 15-22% total body weight (agent-dependent)</li>
                      <li><strong>HbA1c reduction:</strong> 1.5-2.5% in diabetic patients</li>
                      <li><strong>Metabolic improvements:</strong> Improved lipids, blood pressure</li>
                      <li><strong>Quality of life:</strong> Improved energy, mobility, self-esteem</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
    </>
  );
}
