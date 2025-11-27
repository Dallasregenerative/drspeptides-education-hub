import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, TrendingDown, Zap, Activity, Award } from "lucide-react";
import { Link } from "wouter";

export default function PeptideRetatrutide() {
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
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-indigo-600">Phase 3 Clinical Trials</Badge>
              <Badge variant="outline" className="border-indigo-300 text-indigo-700">Triple GIP/GLP-1/Glucagon Agonist</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              Retatrutide
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              Next-Generation Triple Hormone Receptor Agonist - Beyond Tirzepatide
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Retatrutide (LY3437943) is a first-in-class triple agonist that simultaneously activates the glucose-dependent insulinotropic polypeptide (GIP), glucagon-like peptide-1 (GLP-1), and glucagon receptors. This revolutionary peptide represents the next evolution beyond dual agonists like tirzepatide, demonstrating unprecedented weight loss efficacy of up to **24.2% body weight reduction** at 48 weeks—the highest ever reported in clinical trials for obesity pharmacotherapy. Currently in Phase 3 development by Eli Lilly, retatrutide is poised to become the most effective weight loss medication available.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Trial Highlight */}
      <section className="py-8 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-6">
            <Award className="h-16 w-16 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Phase 2 Results: Record-Breaking Weight Loss</h3>
              <p className="text-indigo-100">
                NEJM 2023 (891 citations): Up to 24.2% weight loss at 48 weeks with 12mg dose—surpassing all previous obesity medications including tirzepatide. Phase 3 trials ongoing for obesity, type 2 diabetes, and NASH.
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
                <TrendingDown className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="font-semibold mb-2">Record Weight Loss</h3>
                <p className="text-sm text-slate-600">
                  Up to 24.2% weight loss at 48 weeks—highest efficacy ever reported in obesity clinical trials
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="font-semibold mb-2">Triple Mechanism</h3>
                <p className="text-sm text-slate-600">
                  Synergistic GIP/GLP-1/glucagon activation provides superior efficacy beyond dual agonists
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Activity className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="font-semibold mb-2">Metabolic Optimization</h3>
                <p className="text-sm text-slate-600">
                  Enhanced energy expenditure, fat oxidation, and glycemic control through glucagon pathway
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="font-semibold mb-2">No Plateau Effect</h3>
                <p className="text-sm text-slate-600">
                  Continued weight loss without plateau through 48 weeks—suggesting potential for greater long-term efficacy
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
                      <FlaskConical className="h-5 w-5 mr-2 text-indigo-600" />
                      Triple Hormone Receptor Agonism
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Retatrutide is a unique peptide that simultaneously activates three distinct hormone receptors: GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon receptors. This triple mechanism represents a paradigm shift from dual agonists like tirzepatide, adding glucagon receptor activation to enhance energy expenditure and fat oxidation. The synergistic interaction of these three pathways creates unprecedented metabolic effects that explain retatrutide's superior weight loss efficacy.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">GIP Receptor Activation</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Similar to tirzepatide, retatrutide activates GIP receptors to enhance metabolic function:
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <ul className="text-sm text-indigo-900 space-y-1">
                        <li>• **Glucose-dependent insulin secretion:** Stimulates pancreatic beta cells</li>
                        <li>• **Improved insulin sensitivity:** Direct effects on adipose tissue and muscle</li>
                        <li>• **Central appetite regulation:** Reduces food intake through brain signaling</li>
                        <li>• **Lipid metabolism:** Favorable effects on triglycerides and cholesterol</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">GLP-1 Receptor Activation</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Retatrutide's GLP-1 agonism provides proven metabolic benefits:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm text-blue-900 space-y-1">
                        <li>• **Insulin secretion:** Glucose-dependent stimulation of beta cells</li>
                        <li>• **Glucagon suppression:** Inhibits inappropriate glucagon release</li>
                        <li>• **Gastric emptying delay:** Slows nutrient absorption and prolongs satiety</li>
                        <li>• **Central appetite suppression:** Acts on hypothalamic satiety centers</li>
                        <li>• **Beta cell preservation:** Potential protective effects on pancreatic function</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Glucagon Receptor Activation (The Key Differentiator)</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      The addition of glucagon receptor agonism is what sets retatrutide apart from tirzepatide and drives its superior weight loss:
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <ul className="text-sm text-purple-900 space-y-1">
                        <li>• **Increased energy expenditure:** Stimulates thermogenesis and metabolic rate</li>
                        <li>• **Enhanced fat oxidation:** Promotes breakdown of stored fat for energy</li>
                        <li>• **Hepatic glucose output:** Balanced by GLP-1 action to prevent hyperglycemia</li>
                        <li>• **Lipolysis stimulation:** Direct effects on adipose tissue breakdown</li>
                        <li>• **Lean mass preservation:** Helps maintain muscle while losing fat</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Synergistic Triple Mechanism</h3>
                    <p className="text-slate-700 leading-relaxed">
                      The combination of GIP, GLP-1, and glucagon receptor activation creates synergistic effects that explain retatrutide's record-breaking efficacy. While GIP and GLP-1 work together to suppress appetite and improve insulin sensitivity (as in tirzepatide), the addition of glucagon receptor activation **amplifies energy expenditure and fat oxidation** without causing hyperglycemia (prevented by concurrent GLP-1 action). This triple pathway activation results in **24.2% weight loss**—significantly greater than tirzepatide's 20.9% and semaglutide's 14.9%.
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
              {/* Phase 2 Obesity Trial */}
              <Card className="border-l-4 border-l-indigo-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-indigo-700 border-indigo-300">891 Citations</Badge>
                    <Badge variant="secondary">NEJM 2023</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Triple-Hormone-Receptor Agonist Retatrutide for Obesity—A Phase 2 Trial
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Jastreboff AM, Kaplan LM, Frías JP, et al. N Engl J Med. 2023;389(6):514-526.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>48-week trial:</strong> 338 adults with obesity (BMI ≥30) without diabetes</li>
                      <li>• <strong>Weight loss (1mg):</strong> -8.7% vs -1.6% placebo</li>
                      <li>• <strong>Weight loss (4mg):</strong> -17.3% vs -1.6% placebo</li>
                      <li>• <strong>Weight loss (8mg):</strong> -22.8% vs -1.6% placebo</li>
                      <li>• <strong>Weight loss (12mg):</strong> -24.2% vs -1.6% placebo</li>
                      <li>• <strong>No plateau:</strong> Continued weight loss through 48 weeks without leveling off</li>
                      <li>• <strong>≥5% weight loss:</strong> 92% (12mg) vs 27% placebo</li>
                      <li>• <strong>≥15% weight loss:</strong> 75% (12mg) vs 2% placebo</li>
                      <li>• <strong>≥20% weight loss:</strong> 60% (12mg) vs 0% placebo</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Type 2 Diabetes Trial */}
              <Card className="border-l-4 border-l-indigo-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-indigo-700 border-indigo-300">171 Citations</Badge>
                    <Badge variant="secondary">Nat Med 2024</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Triple Hormone Receptor Agonist Retatrutide for Metabolic Dysfunction-Associated Steatohepatitis
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Sanyal AJ, Kaplan LM, Frias JP, et al. Nat Med. 2024;30(5):1445-1452.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Type 2 diabetes cohort:</strong> Significant weight loss and HbA1c reduction</li>
                      <li>• <strong>NASH improvement:</strong> Liver fat reduction and fibrosis regression</li>
                      <li>• <strong>Cardiometabolic benefits:</strong> Improvements in blood pressure, lipids, inflammatory markers</li>
                      <li>• <strong>Body composition:</strong> Preferential fat mass loss with lean mass preservation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Mechanism Study */}
              <Card className="border-l-4 border-l-indigo-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-indigo-700 border-indigo-300">23 Citations</Badge>
                    <Badge variant="secondary">Cell Discov 2024</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Structural Insights into the Triple Agonism at GLP-1R, GIPR and GCGR Manifested by Retatrutide
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Li W, Zhou Q, Cong Z, et al. Cell Discov. 2024;10(1):75.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Structural basis:</strong> Cryo-EM structures reveal how retatrutide binds all three receptors</li>
                      <li>• <strong>Balanced agonism:</strong> Optimized potency across GIP, GLP-1, and glucagon receptors</li>
                      <li>• <strong>Receptor selectivity:</strong> Designed to avoid off-target effects</li>
                      <li>• <strong>Pharmacokinetics:</strong> Extended half-life enables once-weekly dosing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Comparative Analysis */}
              <Card className="border-l-4 border-l-indigo-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-indigo-700 border-indigo-300">35 Citations</Badge>
                    <Badge variant="secondary">Eur J Clin Pharmacol 2024</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    A Review of Investigational Drug Retatrutide: A Novel Triple Agonist for Obesity
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Kaur M, Misra S. Eur J Clin Pharmacol. 2024;80(4):487-496.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Superior to tirzepatide:</strong> Greater weight loss (24.2% vs 20.9%)</li>
                      <li>• <strong>Superior to semaglutide:</strong> Nearly double the weight loss (24.2% vs 14.9%)</li>
                      <li>• <strong>Safety profile:</strong> Similar to GLP-1 agonists (primarily GI side effects)</li>
                      <li>• <strong>Clinical development:</strong> Phase 3 trials ongoing for obesity, T2D, NASH</li>
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
                  <h3 className="font-semibold mb-3">Obesity Management (Phase 3)</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Adults with BMI ≥30 kg/m² (obesity)</li>
                    <li>• Adults with BMI ≥27 kg/m² (overweight) with comorbidities</li>
                    <li>• Record-breaking weight loss efficacy (up to 24.2%)</li>
                    <li>• Long-term weight maintenance potential</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Type 2 Diabetes (Phase 3)</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Glycemic control with substantial weight loss</li>
                    <li>• HbA1c reduction comparable to GLP-1 agonists</li>
                    <li>• Cardiovascular risk factor improvement</li>
                    <li>• Potential beta cell preservation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">NASH/MASH (Phase 2)</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Liver fat reduction and fibrosis regression</li>
                    <li>• Metabolic dysfunction-associated steatohepatitis</li>
                    <li>• Non-alcoholic fatty liver disease (NAFLD)</li>
                    <li>• Potential disease-modifying therapy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Metabolic Syndrome</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Comprehensive metabolic optimization</li>
                    <li>• Dyslipidemia management</li>
                    <li>• Blood pressure reduction</li>
                    <li>• Inflammatory marker improvement</li>
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
            <h2 className="text-3xl font-bold mb-6">Research Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                    <p className="text-sm font-medium text-amber-900 mb-2">⚠️ Investigational Status</p>
                    <p className="text-sm text-amber-800">
                      Retatrutide is currently in Phase 3 clinical trials and is NOT FDA-approved. The following dosing information is based on Phase 2 research protocols. Not available for clinical use outside of clinical trials.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Phase 2 Dosing Schedule</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-medium text-slate-700 mb-2">Dose Escalation Protocol (from Phase 2 trial):</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Weeks 1-4:</strong> 2 mg once weekly (initiation dose)</li>
                        <li><strong>Weeks 5-8:</strong> 4 mg once weekly</li>
                        <li><strong>Weeks 9-12:</strong> 4 mg once weekly (continued)</li>
                        <li><strong>Weeks 13-24:</strong> Target dose (1mg, 4mg, 8mg, or 12mg once weekly)</li>
                        <li><strong>Weeks 25-48:</strong> Maintenance at target dose</li>
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
                      <li>• <strong>Dose escalation:</strong> Gradual escalation to minimize GI side effects</li>
                      <li>• <strong>Optimal dose:</strong> 8-12 mg weekly for maximum weight loss in Phase 2</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Clinical Considerations</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Weight loss trajectory:</strong> No plateau observed through 48 weeks</li>
                      <li>• <strong>Diabetes patients:</strong> Monitor blood glucose; may need to reduce other medications</li>
                      <li>• <strong>GI tolerability:</strong> Gradual dose escalation minimizes nausea</li>
                      <li>• <strong>Phase 3 trials:</strong> Ongoing for obesity, type 2 diabetes, and NASH</li>
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
                    <h3 className="font-semibold mb-2">Common Side Effects (Phase 2 Trial)</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Gastrointestinal:</strong> Nausea (most common), diarrhea, vomiting, constipation</li>
                      <li>• <strong>Severity:</strong> Primarily mild-to-moderate, dose-dependent</li>
                      <li>• <strong>Timing:</strong> Most common during dose escalation, decreases over time</li>
                      <li>• <strong>Discontinuation:</strong> Similar rates to GLP-1 agonists (~5-10%)</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Serious Adverse Events</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Pancreatitis:</strong> Rare, similar to GLP-1 agonists</li>
                      <li>• <strong>Gallbladder disease:</strong> Increased risk with rapid weight loss</li>
                      <li>• <strong>Hypoglycemia:</strong> Risk when combined with insulin or sulfonylureas</li>
                      <li>• <strong>Thyroid concerns:</strong> Similar precautions as GLP-1 agonists (MTC/MEN 2)</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Comparative Safety</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Similar to GLP-1 agonists:</strong> Safety profile comparable to semaglutide and tirzepatide</li>
                      <li>• <strong>Glucagon component:</strong> No evidence of increased cardiovascular risk</li>
                      <li>• <strong>Long-term safety:</strong> Phase 3 trials ongoing to establish extended safety data</li>
                      <li>• <strong>Benefit-risk ratio:</strong> Favorable given unprecedented weight loss efficacy</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Phase 2 Safety Summary</p>
                    <p className="text-sm text-blue-800">
                      Retatrutide demonstrated a safety profile consistent with incretin-based therapies in Phase 2 trials. The most common adverse events were gastrointestinal and generally mild-to-moderate. No unexpected safety signals were observed with the addition of glucagon receptor agonism. Phase 3 trials are ongoing to further establish long-term safety and cardiovascular outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade Retatrutide</h2>
            <p className="text-lg mb-6 text-indigo-50">
              For pharmaceutical-grade retatrutide and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-indigo-600 hover:text-indigo-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-indigo-100">
              Available in 5mg vials for research purposes
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
                    1. Jastreboff AM, Kaplan LM, Frías JP, et al. Triple-hormone-receptor agonist retatrutide for obesity—a phase 2 trial. N Engl J Med. 2023;389(6):514-526. doi:10.1056/NEJMoa2301972
                  </li>
                  <li>
                    2. Sanyal AJ, Kaplan LM, Frias JP, et al. Triple hormone receptor agonist retatrutide for metabolic dysfunction-associated steatohepatitis. Nat Med. 2024;30(5):1445-1452. doi:10.1038/s41591-024-03018-2
                  </li>
                  <li>
                    3. Li W, Zhou Q, Cong Z, et al. Structural insights into the triple agonism at GLP-1R, GIPR and GCGR manifested by retatrutide. Cell Discov. 2024;10(1):75. doi:10.1038/s41421-024-00700-0
                  </li>
                  <li>
                    4. Kaur M, Misra S. A review of an investigational drug retatrutide, a novel triple agonist agent for the treatment of obesity. Eur J Clin Pharmacol. 2024;80(4):487-496. doi:10.1007/s00228-024-03646-0
                  </li>
                  <li>
                    5. Eli Lilly and Company. Lilly's phase 2 retatrutide results published in The New England Journal of Medicine. June 26, 2023.
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
