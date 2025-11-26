import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, TrendingDown, Heart, Activity, Award } from "lucide-react";
import { Link } from "wouter";

export default function PeptideTirzepatide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/peptides">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Peptides
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-purple-600">FDA Approved</Badge>
              <Badge variant="outline" className="border-purple-300 text-purple-700">Dual GIP/GLP-1 Agonist</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              Tirzepatide
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              Zepbound™ - Revolutionary Dual Incretin Receptor Agonist for Weight Management
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tirzepatide is the first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist approved by the FDA for chronic weight management. Marketed as Zepbound™ for obesity and Mounjaro™ for type 2 diabetes, tirzepatide represents a breakthrough in metabolic therapeutics, demonstrating unprecedented weight loss efficacy of up to 23% body weight reduction—surpassing all previous pharmacological interventions including semaglutide.
            </p>
          </div>
        </div>
      </section>

      {/* FDA Approval Highlight */}
      <section className="py-8 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <Award className="h-16 w-16 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">FDA Approved: November 8, 2023</h3>
              <p className="text-purple-100">
                Zepbound™ (tirzepatide) approved for chronic weight management in adults with obesity (BMI ≥30) or overweight (BMI ≥27) with weight-related comorbidities. Previously approved as Mounjaro™ for type 2 diabetes (May 2022).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <TrendingDown className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Unprecedented Weight Loss</h3>
                <p className="text-sm text-slate-600">
                  Up to 23.6 kg (23%) weight loss at 72 weeks—highest efficacy of any approved obesity medication
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Activity className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Glycemic Control</h3>
                <p className="text-sm text-slate-600">
                  Superior HbA1c reduction (up to 2.4%) compared to GLP-1 agonists alone in type 2 diabetes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Cardiometabolic Health</h3>
                <p className="text-sm text-slate-600">
                  Improvements in blood pressure, lipid profiles, liver fat, and inflammatory markers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Quality of Life</h3>
                <p className="text-sm text-slate-600">
                  Clinically meaningful improvements in physical function, mobility, and health-related quality of life
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mechanism of Action</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-purple-600" />
                      Dual Incretin Receptor Agonism
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Tirzepatide is a unique dual agonist that activates both the glucose-dependent insulinotropic polypeptide (GIP) receptor and the glucagon-like peptide-1 (GLP-1) receptor. This dual mechanism represents a paradigm shift from single-target GLP-1 agonists like semaglutide. The peptide exhibits **imbalanced agonism**, with approximately 5-fold greater potency at the GIP receptor compared to the GLP-1 receptor, creating a synergistic effect that enhances both glycemic control and weight loss beyond what either pathway achieves alone.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">GIP Receptor Activation</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      GIP is an incretin hormone secreted by K-cells in the proximal small intestine in response to nutrient intake. Tirzepatide's activation of GIP receptors contributes to:
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <ul className="text-sm text-purple-900 space-y-1">
                        <li>• **Enhanced insulin secretion:** Glucose-dependent stimulation of pancreatic beta cells</li>
                        <li>• **Improved insulin sensitivity:** Direct effects on adipose tissue and muscle</li>
                        <li>• **Reduced food intake:** Central nervous system appetite regulation</li>
                        <li>• **Energy expenditure:** Increased thermogenesis and fat oxidation</li>
                        <li>• **Lipid metabolism:** Favorable effects on triglycerides and cholesterol</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">GLP-1 Receptor Activation</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      GLP-1 is an incretin hormone secreted by L-cells in the distal small intestine and colon. Tirzepatide's GLP-1 receptor agonism provides:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm text-blue-900 space-y-1">
                        <li>• **Glucose-dependent insulin secretion:** Stimulates pancreatic beta cells only when glucose is elevated</li>
                        <li>• **Glucagon suppression:** Inhibits inappropriate glucagon release from alpha cells</li>
                        <li>• **Gastric emptying delay:** Slows nutrient absorption and prolongs satiety</li>
                        <li>• **Central appetite suppression:** Acts on hypothalamic and brainstem satiety centers</li>
                        <li>• **Beta cell preservation:** Potential protective effects on pancreatic beta cell mass</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Synergistic Weight Loss Mechanism</h3>
                    <p className="text-slate-700 leading-relaxed">
                      The combination of GIP and GLP-1 receptor activation creates synergistic effects that explain tirzepatide's superior weight loss efficacy. GIP enhances the anorectic (appetite-suppressing) effects of GLP-1 while contributing additional metabolic benefits through improved insulin sensitivity and energy expenditure. This dual pathway activation results in **greater and more sustained weight loss** than GLP-1 agonism alone, with 78% of participants achieving ≥15% weight loss compared to ~35% with semaglutide 2.4mg.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Evidence */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Research Evidence</h2>
            
            <div className="space-y-6">
              {/* SURMOUNT-1 */}
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-purple-700 border-purple-300">3,090 Citations</Badge>
                    <Badge variant="secondary">NEJM 2022</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Jastreboff AM, Aronne LJ, Ahmad NN, et al. N Engl J Med. 2022;387(3):205-216.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>72-week trial:</strong> 2,539 adults with obesity (BMI ≥30) or overweight (BMI ≥27) with comorbidities</li>
                      <li>• <strong>Weight loss (5mg):</strong> -15.0% (-16.1 kg) vs -3.1% placebo</li>
                      <li>• <strong>Weight loss (10mg):</strong> -19.5% (-20.9 kg) vs -3.1% placebo</li>
                      <li>• <strong>Weight loss (15mg):</strong> -20.9% (-23.6 kg) vs -3.1% placebo</li>
                      <li>• <strong>≥5% weight loss:</strong> 85% (5mg), 89% (10mg), 91% (15mg) vs 35% placebo</li>
                      <li>• <strong>≥15% weight loss:</strong> 50% (5mg), 57% (10mg), 63% (15mg) vs 3% placebo</li>
                      <li>• <strong>≥20% weight loss:</strong> 30% (5mg), 36% (10mg), 40% (15mg) vs 1% placebo</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* SURMOUNT-2 */}
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-purple-700 border-purple-300">591 Citations</Badge>
                    <Badge variant="secondary">Lancet 2023</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Tirzepatide for Obesity in People with Type 2 Diabetes (SURMOUNT-2)
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Garvey WT, Frias JP, Jastreboff AM, et al. Lancet. 2023;402(10402):613-626.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>72-week trial:</strong> 938 adults with type 2 diabetes and obesity/overweight</li>
                      <li>• <strong>Weight loss (10mg):</strong> -12.8% (-13.4 kg) vs -3.2% placebo</li>
                      <li>• <strong>Weight loss (15mg):</strong> -14.7% (-15.7 kg) vs -3.2% placebo</li>
                      <li>• <strong>HbA1c reduction:</strong> -2.07% (10mg), -2.11% (15mg) vs -0.51% placebo</li>
                      <li>• <strong>≥5% weight loss:</strong> 79% (10mg), 83% (15mg) vs 32% placebo</li>
                      <li>• <strong>≥15% weight loss:</strong> 31% (10mg), 41% (15mg) vs 3% placebo</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Mechanism Study */}
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-purple-700 border-purple-300">431 Citations</Badge>
                    <Badge variant="secondary">JCI Insight 2020</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Tirzepatide is an Imbalanced and Biased Dual GIP and GLP-1 Receptor Agonist
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Willard FS, Douros JD, Gabe MBN, et al. JCI Insight. 2020;5(17):e140532.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Imbalanced agonism:</strong> ~5-fold greater potency at GIP receptor vs GLP-1 receptor</li>
                      <li>• <strong>Biased signaling:</strong> Preferentially activates cAMP pathway over β-arrestin recruitment</li>
                      <li>• <strong>GIP receptor:</strong> Mimics native GIP with full agonism</li>
                      <li>• <strong>GLP-1 receptor:</strong> Shows functional bias compared to native GLP-1</li>
                      <li>• <strong>Pharmacokinetics:</strong> Extended half-life (~5 days) enables once-weekly dosing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Meta-analysis */}
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-purple-700 border-purple-300">306 Citations</Badge>
                    <Badge variant="secondary">Cardiovasc Diabetol 2022</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Tirzepatide: Unmatched Effectiveness in Glycaemic Control and Body Weight Reduction
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Nauck MA, D'Alessio DA. Cardiovasc Diabetol. 2022;21(1):199.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Superior to GLP-1 agonists:</strong> Greater weight loss and HbA1c reduction than semaglutide</li>
                      <li>• <strong>Dose-dependent effects:</strong> Progressive improvements from 5mg to 15mg weekly</li>
                      <li>• <strong>Cardiometabolic benefits:</strong> Improvements in blood pressure, lipids, liver fat</li>
                      <li>• <strong>Safety profile:</strong> Similar to GLP-1 agonists (primarily GI side effects)</li>
                      <li>• <strong>Mechanism advantage:</strong> Dual pathway activation explains superior efficacy</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Clinical Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Chronic Weight Management (Zepbound™)</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Adults with BMI ≥30 kg/m² (obesity)</li>
                    <li>• Adults with BMI ≥27 kg/m² (overweight) with weight-related comorbidities</li>
                    <li>• Adjunct to reduced-calorie diet and increased physical activity</li>
                    <li>• Long-term weight maintenance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Type 2 Diabetes (Mounjaro™)</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Adjunct to diet and exercise to improve glycemic control</li>
                    <li>• Superior HbA1c reduction vs GLP-1 agonists</li>
                    <li>• Significant weight loss benefit in diabetic patients</li>
                    <li>• Cardiovascular risk factor improvement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Metabolic Syndrome</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Insulin resistance improvement</li>
                    <li>• Dyslipidemia management (triglycerides, HDL)</li>
                    <li>• Blood pressure reduction</li>
                    <li>• Non-alcoholic fatty liver disease (NAFLD)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Quality of Life Improvements</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Physical function and mobility enhancement</li>
                    <li>• Sleep apnea symptom reduction</li>
                    <li>• Joint pain and osteoarthritis relief</li>
                    <li>• Psychosocial well-being improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Protocol */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">FDA-Approved Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                    <p className="text-sm font-medium text-purple-900 mb-2">✓ FDA Approved</p>
                    <p className="text-sm text-purple-800">
                      Tirzepatide is FDA-approved as Zepbound™ for chronic weight management (November 2023) and Mounjaro™ for type 2 diabetes (May 2022). Prescription required.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Standard Dosing Schedule</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-medium text-slate-700 mb-2">Dose Escalation Protocol:</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Weeks 1-4:</strong> 2.5 mg once weekly (initiation dose, not therapeutic)</li>
                        <li><strong>Weeks 5-8:</strong> 5 mg once weekly (first maintenance dose)</li>
                        <li><strong>Weeks 9-12:</strong> 7.5 mg once weekly (optional escalation)</li>
                        <li><strong>Weeks 13-16:</strong> 10 mg once weekly (optional escalation)</li>
                        <li><strong>Weeks 17-20:</strong> 12.5 mg once weekly (optional escalation)</li>
                        <li><strong>Week 21+:</strong> 15 mg once weekly (maximum dose)</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Administration Guidelines</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Route:</strong> Subcutaneous injection in abdomen, thigh, or upper arm</li>
                      <li>• <strong>Frequency:</strong> Once weekly, same day each week</li>
                      <li>• <strong>Timing:</strong> Can be taken with or without food, any time of day</li>
                      <li>• <strong>Missed dose:</strong> Take within 4 days; if &gt;4 days, skip and resume regular schedule</li>
                      <li>• <strong>Dose escalation:</strong> Minimum 4 weeks at each dose before increasing</li>
                      <li>• <strong>Individualization:</strong> Escalate based on tolerability and efficacy</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Clinical Considerations</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Optimal dose:</strong> 10-15 mg weekly for maximum weight loss in most patients</li>
                      <li>• <strong>Diabetes patients:</strong> Monitor blood glucose; may need to reduce other diabetes medications</li>
                      <li>• <strong>GI tolerability:</strong> Gradual dose escalation minimizes nausea and GI side effects</li>
                      <li>• <strong>Long-term use:</strong> Intended for chronic weight management; discontinuation often leads to weight regain</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safety Profile</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Common Side Effects (≥5% incidence)</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Gastrointestinal:</strong> Nausea (25-30%), diarrhea (19-23%), vomiting (9-13%), constipation (10-12%)</li>
                      <li>• <strong>Abdominal:</strong> Abdominal pain, dyspepsia, eructation</li>
                      <li>• <strong>Appetite:</strong> Decreased appetite (5-9%)</li>
                      <li>• <strong>Other:</strong> Injection site reactions, fatigue, headache</li>
                      <li>• <strong>Note:</strong> GI side effects typically mild-to-moderate, transient, and decrease over time</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Serious Warnings & Precautions</h3>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                      <p className="text-sm font-medium text-amber-900 mb-2">⚠️ Boxed Warning</p>
                      <p className="text-sm text-amber-800 mb-2">
                        Risk of thyroid C-cell tumors: In rodent studies, tirzepatide caused dose-dependent thyroid C-cell tumors. Contraindicated in patients with personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700 mt-3">
                      <li>• <strong>Pancreatitis:</strong> Acute pancreatitis reported; discontinue if suspected</li>
                      <li>• <strong>Hypoglycemia:</strong> Risk when combined with insulin or sulfonylureas; may need dose reduction</li>
                      <li>• <strong>Acute kidney injury:</strong> Monitor in patients with renal impairment, especially with GI side effects</li>
                      <li>• <strong>Gallbladder disease:</strong> Cholelithiasis and cholecystitis reported</li>
                      <li>• <strong>Diabetic retinopathy:</strong> Rapid glucose improvement may worsen diabetic retinopathy</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Contraindications</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Personal or family history of medullary thyroid carcinoma (MTC)</li>
                      <li>• Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                      <li>• Serious hypersensitivity to tirzepatide or any excipients</li>
                      <li>• Pregnancy (discontinue if pregnancy occurs)</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Drug Interactions</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Insulin/sulfonylureas:</strong> Increased hypoglycemia risk; reduce doses</li>
                      <li>• <strong>Oral medications:</strong> Delayed gastric emptying may affect absorption; take 1 hour before tirzepatide</li>
                      <li>• <strong>Hormonal contraceptives:</strong> Switch to non-oral contraceptive or add barrier method for 4 weeks after initiation</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Clinical Safety Summary</p>
                    <p className="text-sm text-blue-800">
                      Tirzepatide has demonstrated a favorable benefit-risk profile in extensive clinical trials involving over 10,000 participants. The safety profile is similar to GLP-1 receptor agonists, with primarily gastrointestinal side effects that are generally mild-to-moderate and transient. Serious adverse events are rare when appropriate precautions are followed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade Tirzepatide</h2>
            <p className="text-lg mb-6 text-purple-50">
              For pharmaceutical-grade tirzepatide and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-purple-100">
              Available in 5mg vials and combination formulas (Tirzepatide/BPC-157)
            </p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li>
                    1. Jastreboff AM, Aronne LJ, Ahmad NN, et al. Tirzepatide once weekly for the treatment of obesity. N Engl J Med. 2022;387(3):205-216. doi:10.1056/NEJMoa2206038
                  </li>
                  <li>
                    2. Garvey WT, Frias JP, Jastreboff AM, et al. Tirzepatide once weekly for the treatment of obesity in people with type 2 diabetes (SURMOUNT-2): a double-blind, randomised, multicentre, placebo-controlled, phase 3 trial. Lancet. 2023;402(10402):613-626. doi:10.1016/S0140-6736(23)01200-X
                  </li>
                  <li>
                    3. Willard FS, Douros JD, Gabe MBN, et al. Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist. JCI Insight. 2020;5(17):e140532. doi:10.1172/jci.insight.140532
                  </li>
                  <li>
                    4. Nauck MA, D'Alessio DA. Tirzepatide, a dual GIP/GLP-1 receptor co-agonist for the treatment of type 2 diabetes with unmatched effectiveness regrading glycaemic control and body weight reduction. Cardiovasc Diabetol. 2022;21(1):199. doi:10.1186/s12933-022-01604-7
                  </li>
                  <li>
                    5. U.S. Food and Drug Administration. FDA approves Lilly's Zepbound™ (tirzepatide) for chronic weight management. November 8, 2023.
                  </li>
                  <li>
                    6. Syed YY. Tirzepatide: first approval. Drugs. 2022;82(11):1213-1220. doi:10.1007/s40265-022-01746-8
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
