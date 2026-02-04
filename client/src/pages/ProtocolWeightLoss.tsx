import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Scale, TrendingDown, Heart, Brain, AlertTriangle, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProtocolWeightLoss() {
  return (
    <>
    <Helmet>
        <title>Weight Loss & Metabolic Health Protocol | DrsPeptides</title>
        <meta name="description" content="Evidence-based peptide protocols for weight loss and metabolic optimization. GLP-1 agonists, metabolic enhancers, dosing schedules, and clinical monitoring guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Weight Loss & Metabolic Health Protocol | DrsPeptides" />
        <meta property="og:description" content="Evidence-based peptide protocols for weight loss and metabolic optimization. GLP-1 agonists, metabolic enhancers, dosing schedules, and clinical monitoring guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weight Loss & Metabolic Health Protocol | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based peptide protocols for weight loss and metabolic optimization. GLP-1 agonists, metabolic enhancers, dosing schedules, and clinical monitoring guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Weight Loss & Metabolic Health Protocol",
          "description": "Evidence-based peptide protocols for weight loss and metabolic optimization. GLP-1 agonists, metabolic enhancers, dosing schedules, and clinical monitoring guidelines.",
          "url": ${window.location.href},
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Weight Loss & Metabolic Health Protocol
            </h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Protocol Weight Loss - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
</div>
          <p className="text-xl text-emerald-50 max-w-3xl">
            Evidence-based GLP-1 and metabolic peptide protocols for sustainable weight loss, improved glycemic control, and cardiometabolic health optimization
          </p>
          <div className="flex gap-3 mt-6">
            <Badge className="bg-white text-emerald-700 hover:bg-emerald-50 text-sm px-3 py-1">
              Evidence Level 1 (FDA-Approved)
            </Badge>
            <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 text-sm px-3 py-1">
              Clinical Grade
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 space-y-12">
        
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Protocol Overview</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            GLP-1 receptor agonists represent the most significant advancement in obesity pharmacotherapy in decades, with clinical trial data demonstrating 15-22% total body weight loss and substantial improvements in cardiometabolic risk factors. This protocol outlines evidence-based implementation strategies for semaglutide, tirzepatide, and adjunctive metabolic peptides.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <TrendingDown className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Weight Loss Efficacy</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-emerald-900">Semaglutide 2.4mg:</p>
                    <p className="text-gray-700">14.9% mean weight loss (STEP trials)</p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/33567185/" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline flex items-center gap-1">
                      STEP 1 Trial <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900">Tirzepatide 15mg:</p>
                    <p className="text-gray-700">22.5% mean weight loss (SURMOUNT trials)</p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/35658024/" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline flex items-center gap-1">
                      SURMOUNT-1 Trial <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900">Liraglutide 3.0mg:</p>
                    <p className="text-gray-700">8.4% mean weight loss (SCALE trials)</p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/26132939/" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline flex items-center gap-1">
                      SCALE Trial <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <Heart className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Cardiometabolic Benefits</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>20% reduction in major adverse cardiovascular events (SELECT trial)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>HbA1c reduction of 1.5-2.0% in T2DM patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Systolic BP reduction 3-7 mmHg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Triglyceride reduction 15-30%</span>
                  </li>
                </ul>
                <a href="https://pubmed.ncbi.nlm.nih.gov/37952131/" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline flex items-center gap-1 mt-3">
                  SELECT Trial (Cardiovascular Outcomes) <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <Brain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Metabolic Mechanisms</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Delayed gastric emptying (↓ appetite)</li>
                  <li>• Central appetite suppression (hypothalamus)</li>
                  <li>• Improved insulin sensitivity</li>
                  <li>• Enhanced β-cell function</li>
                  <li>• Reduced hepatic glucose output</li>
                  <li>• Increased energy expenditure (tirzepatide)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Peptide Comparison */}
        <section>
          <h2 className="text-3xl font-bold mb-6">GLP-1 Agonist Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Peptide</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mechanism</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dosing Frequency</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mean Weight Loss</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FDA Approval</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Semaglutide</td>
                  <td className="border border-gray-300 px-4 py-3">GLP-1 agonist</td>
                  <td className="border border-gray-300 px-4 py-3">Once weekly</td>
                  <td className="border border-gray-300 px-4 py-3">14.9% (2.4mg)</td>
                  <td className="border border-gray-300 px-4 py-3"><Badge className="bg-green-600">Yes (Wegovy)</Badge></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Tirzepatide</td>
                  <td className="border border-gray-300 px-4 py-3">GLP-1/GIP dual agonist</td>
                  <td className="border border-gray-300 px-4 py-3">Once weekly</td>
                  <td className="border border-gray-300 px-4 py-3">22.5% (15mg)</td>
                  <td className="border border-gray-300 px-4 py-3"><Badge className="bg-green-600">Yes (Zepbound)</Badge></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Liraglutide</td>
                  <td className="border border-gray-300 px-4 py-3">GLP-1 agonist</td>
                  <td className="border border-gray-300 px-4 py-3">Once daily</td>
                  <td className="border border-gray-300 px-4 py-3">8.4% (3.0mg)</td>
                  <td className="border border-gray-300 px-4 py-3"><Badge className="bg-green-600">Yes (Saxenda)</Badge></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Dulaglutide</td>
                  <td className="border border-gray-300 px-4 py-3">GLP-1 agonist</td>
                  <td className="border border-gray-300 px-4 py-3">Once weekly</td>
                  <td className="border border-gray-300 px-4 py-3">3-5% (T2DM doses)</td>
                  <td className="border border-gray-300 px-4 py-3"><Badge className="bg-yellow-600">T2DM only</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            <strong>Note:</strong> Tirzepatide's dual GLP-1/GIP mechanism provides superior weight loss efficacy compared to GLP-1-only agonists. GIP co-agonism enhances insulin secretion, reduces glucagon, and may increase energy expenditure.
          </p>
        </section>

        {/* Titration Protocols */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Evidence-Based Titration Protocols</h2>
          
          <p className="text-gray-700 mb-6">
            Gradual dose escalation is critical to minimize gastrointestinal side effects while achieving therapeutic efficacy. The following protocols are derived from FDA-approved prescribing information and clinical trial data.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-emerald-50">
                <CardTitle>Semaglutide (Wegovy) Titration</CardTitle>
                <CardDescription>FDA-approved schedule for obesity treatment</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 1-4:</span>
                    <Badge>0.25 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 5-8:</span>
                    <Badge>0.5 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 9-12:</span>
                    <Badge>1.0 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 13-16:</span>
                    <Badge>1.7 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Week 17+:</span>
                    <Badge className="bg-emerald-600">2.4 mg weekly (maintenance)</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Clinical Pearl:</strong> If patients experience significant GI side effects, delay dose escalation by 4 weeks at current dose. Do not skip doses during titration.
                </p>
                <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline flex items-center gap-1 mt-3">
                  FDA Prescribing Information <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Tirzepatide (Zepbound) Titration</CardTitle>
                <CardDescription>FDA-approved schedule for obesity treatment</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 1-4:</span>
                    <Badge>2.5 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 5-8:</span>
                    <Badge>5 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 9-12:</span>
                    <Badge>7.5 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Weeks 13-16:</span>
                    <Badge>10 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Week 17-20:</span>
                    <Badge>12.5 mg weekly</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">Week 21+:</span>
                    <Badge className="bg-blue-600">15 mg weekly (max dose)</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Clinical Pearl:</strong> 10mg may be sufficient for many patients. Consider maintaining at 10mg if weight loss goals are met to minimize cost and side effects.
                </p>
                <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline flex items-center gap-1 mt-3">
                  FDA Prescribing Information <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety & Monitoring */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Safety Considerations & Monitoring</h2>
          
          <Alert className="border-red-400 bg-red-50 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-900 font-bold">Contraindications</AlertTitle>
            <AlertDescription className="text-red-800 mt-2">
              <ul className="space-y-1">
                <li>• Personal or family history of medullary thyroid carcinoma (MTC)</li>
                <li>• Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                <li>• History of severe gastrointestinal disease (gastroparesis, inflammatory bowel disease)</li>
                <li>• History of pancreatitis (relative contraindication)</li>
                <li>• Pregnancy or breastfeeding (discontinue 2 months before planned pregnancy)</li>
                <li>• Type 1 diabetes (not approved for this indication)</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Side Effects</CardTitle>
                <CardDescription>Typically mild-moderate, improve with time</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Gastrointestinal (60-80% of patients):</p>
                    <ul className="text-sm text-gray-700 ml-4 mt-1">
                      <li>• Nausea (most common, usually resolves in 4-8 weeks)</li>
                      <li>• Vomiting, diarrhea, constipation</li>
                      <li>• Abdominal pain, bloating</li>
                      <li>• Gastroesophageal reflux</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Other Common Effects:</p>
                    <ul className="text-sm text-gray-700 ml-4 mt-1">
                      <li>• Fatigue (especially during titration)</li>
                      <li>• Headache</li>
                      <li>• Dizziness</li>
                      <li>• Injection site reactions (rare)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Serious Adverse Events (Rare)</CardTitle>
                <CardDescription>Require immediate medical evaluation</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-red-900">Acute Pancreatitis (&lt;1%):</p>
                    <p className="text-sm text-gray-700">Severe persistent abdominal pain radiating to back. Discontinue immediately if suspected.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">Gallbladder Disease (1-2%):</p>
                    <p className="text-sm text-gray-700">Cholelithiasis, cholecystitis. Risk increases with rapid weight loss.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">Hypoglycemia (if on insulin/sulfonylureas):</p>
                    <p className="text-sm text-gray-700">Reduce insulin/sulfonylurea doses by 20-50% when initiating GLP-1 therapy.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-900">Acute Kidney Injury (rare):</p>
                    <p className="text-sm text-gray-700">Usually secondary to severe dehydration from GI side effects. Maintain hydration.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recommended Monitoring Schedule</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Baseline (before initiation):</p>
                  <ul className="text-gray-700 ml-4 mt-1">
                    <li>• Comprehensive metabolic panel (CMP)</li>
                    <li>• Lipid panel</li>
                    <li>• HbA1c (if diabetic or prediabetic)</li>
                    <li>• Thyroid function tests (TSH, free T4)</li>
                    <li>• Pregnancy test (if applicable)</li>
                    <li>• Weight, BMI, waist circumference, blood pressure</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Follow-up monitoring:</p>
                  <ul className="text-gray-700 ml-4 mt-1">
                    <li>• Weight, BP, symptom assessment: Every 4 weeks during titration, then every 3 months</li>
                    <li>• CMP: 3 months, then every 6-12 months</li>
                    <li>• HbA1c: Every 3-6 months (if diabetic)</li>
                    <li>• Lipid panel: 6 months, then annually</li>
                    <li>• Reassess need for continuation if no weight loss after 16 weeks at maintenance dose</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Adjunctive Strategies */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Adjunctive Strategies for Optimization</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lifestyle Interventions</CardTitle>
                <CardDescription>Essential for maximizing and maintaining results</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Nutrition:</p>
                    <ul className="text-sm text-gray-700 ml-4 mt-1">
                      <li>• High-protein diet (1.2-1.6 g/kg) to preserve lean mass</li>
                      <li>• Calorie deficit 500-750 kcal/day</li>
                      <li>• Small, frequent meals to manage GI side effects</li>
                      <li>• Adequate hydration (2-3L/day)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Exercise:</p>
                    <ul className="text-sm text-gray-700 ml-4 mt-1">
                      <li>• Resistance training 3-4x/week (preserve muscle mass)</li>
                      <li>• Cardiovascular exercise 150+ min/week</li>
                      <li>• Increase NEAT (non-exercise activity thermogenesis)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complementary Peptides</CardTitle>
                <CardDescription>May enhance body composition outcomes</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Tesamorelin (for visceral fat):</p>
                    <p className="text-sm text-gray-700">2mg daily SubQ. Reduces visceral adipose tissue by 15-20%. FDA-approved for HIV-associated lipodystrophy.</p>
                  </div>
                  <div>
                    <p className="font-semibold">CJC-1295/Ipamorelin (muscle preservation):</p>
                    <p className="text-sm text-gray-700">May help preserve lean mass during weight loss. Investigational use only.</p>
                  </div>
                  <div>
                    <p className="font-semibold">BPC-157 (metabolic support):</p>
                    <p className="text-sm text-gray-700">250-500mcg daily. May support metabolic health and GI tolerance. Investigational.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  <strong>Note:</strong> Complementary peptides listed above (except tesamorelin for approved indication) are investigational and not FDA-approved for weight loss.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Clinical Pearls */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Clinical Pearls & Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Managing Nausea</h4>
                <p className="text-sm text-gray-700">
                  • Eat smaller, more frequent meals<br/>
                  • Avoid high-fat, spicy, or greasy foods<br/>
                  • Stay upright after eating<br/>
                  • Consider ginger, vitamin B6, or ondansetron if severe<br/>
                  • Delay dose escalation if intolerable
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Optimizing Injection Technique</h4>
                <p className="text-sm text-gray-700">
                  • Inject into abdomen, thigh, or upper arm<br/>
                  • Rotate injection sites weekly<br/>
                  • Allow refrigerated pen to warm to room temp (15-30 min)<br/>
                  • Inject slowly over 5-10 seconds<br/>
                  • Same day each week for consistency
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Preventing Muscle Loss</h4>
                <p className="text-sm text-gray-700">
                  • Prioritize protein intake (1.2-1.6 g/kg/day)<br/>
                  • Resistance training 3-4x/week minimum<br/>
                  • Consider DEXA scans to monitor body composition<br/>
                  • Avoid excessive calorie restriction (&gt;1000 kcal deficit)<br/>
                  • Adequate sleep (7-9 hours/night)
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">When to Consider Discontinuation</h4>
                <p className="text-sm text-gray-700">
                  • &lt;5% weight loss after 16 weeks at maintenance dose<br/>
                  • Intolerable side effects despite management strategies<br/>
                  • Development of contraindications<br/>
                  • Achievement of goal weight (consider maintenance dose)<br/>
                  • Patient preference or cost concerns
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research References */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Clinical Trials & Research</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>STEP Program (Semaglutide)</CardTitle>
                <CardDescription>Phase 3 trials establishing efficacy and safety</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/33567185/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                        STEP 1: Once-Weekly Semaglutide in Adults with Overweight or Obesity
                      </a>
                      <p className="text-sm text-gray-600">N Engl J Med. 2021. 14.9% mean weight loss vs 2.4% placebo at 68 weeks.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/33755728/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                        STEP 2: Semaglutide in Adults with Overweight or Obesity and Type 2 Diabetes
                      </a>
                      <p className="text-sm text-gray-600">Lancet. 2021. 9.6% weight loss in T2DM patients.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SURMOUNT Program (Tirzepatide)</CardTitle>
                <CardDescription>Phase 3 trials demonstrating superior efficacy</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/35658024/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                        SURMOUNT-1: Tirzepatide Once Weekly for the Treatment of Obesity
                      </a>
                      <p className="text-sm text-gray-600">N Engl J Med. 2022. 22.5% mean weight loss at 15mg dose (72 weeks).</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SELECT Trial (Cardiovascular Outcomes)</CardTitle>
                <CardDescription>Landmark cardiovascular outcomes study</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/37952131/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                        SELECT: Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes
                      </a>
                      <p className="text-sm text-gray-600">N Engl J Med. 2023. 20% reduction in major adverse cardiovascular events (MACE) in patients with established CVD.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/administration-guide" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Administration & Preparation Guide</h3>
              <p className="text-gray-600">Reconstitution, storage, and injection technique protocols</p>
            </a>
            
            <a href="/safety-compliance" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2">Safety & Regulatory Compliance</h3>
              <p className="text-gray-600">FDA approval status and comprehensive safety guidelines</p>
            </a>
            
            <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                PeptideProtocols.ai
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">AI-powered personalized weight loss protocol generation</p>
            </a>
            
            <a href="https://drspeptides.com/collections/weight-management" target="_blank" rel="noopener noreferrer" className="block p-6 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                DrsPeptides.com - Weight Management
                <ExternalLink className="h-4 w-4" />
              </h3>
              <p className="text-gray-600">Professional-grade GLP-1 peptides with third-party testing</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Implement GLP-1 Therapy?
          </h2>
          <p className="text-xl text-emerald-50 mb-6 max-w-2xl mx-auto">
            DrsPeptides.com provides healthcare professionals with pharmaceutical-grade semaglutide, tirzepatide, and comprehensive clinical support.
          </p>
          <a 
            href="https://drspeptides.com/collections/weight-management" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            View Weight Management Peptides
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
