import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Heart, Brain, Shield , BookOpen , Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Button } from "@/components/ui/button";

export default function PeptidePT141() {
  usePageTitle("PT-141 (Bremelanotide) - Sexual Wellness", {
    description: "Evidence-based guide to PT-141 (Bremelanotide) for sexual dysfunction treatment. FDA-approved mechanisms, dosing protocols, and clinical applications."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/30 rounded-full text-sm font-semibold">FDA-Approved</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Vyleesi™</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">PT-141 (Bremelanotide)</h1>
            <p className="text-xl text-rose-50 mb-6">
              FDA-approved melanocortin-4 receptor agonist for hypoactive sexual desire disorder (HSDD) in premenopausal women. First on-demand treatment for female sexual dysfunction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Sexual Wellness</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">MC4R Agonist</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Subcutaneous</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanism">Mechanism</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is PT-141?</CardTitle>
                  <CardDescription>FDA-approved melanocortin receptor agonist for female sexual dysfunction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    PT-141 (bremelanotide) is an FDA-approved melanocortin-4 receptor (MC4R) agonist indicated for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. Marketed as <strong>Vyleesi™</strong>, it represents a breakthrough approach to female sexual dysfunction by modulating central nervous system pathways involved in sexual desire and arousal.
                  </p>
                  <p>
                    Unlike hormone-based therapies, bremelanotide works through MC4R activation in the hypothalamus, increasing dopamine release and enhancing sexual motivation. It is administered as an on-demand subcutaneous injection 45 minutes before anticipated sexual activity, offering flexibility and autonomy to patients.
                  </p>
                  <p>
                    PT-141 was approved by the FDA in June 2019 based on two pivotal Phase 3 RECONNECT trials involving 1,267 women, which demonstrated statistically significant improvements in sexual desire and reductions in distress related to low libido.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Characteristics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Sexual Desire Enhancement</h3>
                        <p className="text-sm text-gray-600">MC4R activation increases dopamine, enhancing sexual motivation and arousal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Central Mechanism</h3>
                        <p className="text-sm text-gray-600">Works in the brain (hypothalamus), not hormonal like estrogen/testosterone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">On-Demand Dosing</h3>
                        <p className="text-sm text-gray-600">Inject 45 minutes before sexual activity; no daily medication required</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">FDA-Approved</h3>
                        <p className="text-sm text-gray-600">Approved June 2019 for HSDD in premenopausal women (Vyleesi™)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">FDA Indication</h3>
                <p className="text-sm text-blue-800">
                  PT-141 is indicated for the treatment of <strong>hypoactive sexual desire disorder (HSDD)</strong> in premenopausal women. HSDD is characterized by low sexual desire that causes marked distress or interpersonal difficulty and is not due to a co-existing medical or psychiatric condition, relationship problems, or medication side effects.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Melanocortin-4 receptor agonism in the central nervous system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. MC4R Activation in the Hypothalamus</h3>
                    <p className="text-sm text-gray-700">
                      PT-141 selectively activates melanocortin-4 receptors (MC4R) in the hypothalamus and other brain regions involved in sexual arousal. MC4R activation increases dopamine release in the nucleus accumbens and ventral tegmental area (VTA), enhancing sexual motivation and desire. This central mechanism distinguishes PT-141 from peripheral vasodilators (e.g., sildenafil for men) and hormone replacement therapies.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Dopaminergic Pathway Enhancement</h3>
                    <p className="text-sm text-gray-700">
                      The melanocortin system modulates dopaminergic neurotransmission, which is critical for sexual desire and reward processing. By increasing dopamine signaling, PT-141 enhances sexual interest, arousal, and pleasure. This mechanism is independent of hormonal status (estrogen, testosterone), making it effective even in women with normal hormone levels.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Administration:</strong> Subcutaneous injection (abdomen or thigh)<br/>
                      <strong>Onset:</strong> 45 minutes (recommended timing before sexual activity)<br/>
                      <strong>Peak plasma concentration:</strong> ~1 hour<br/>
                      <strong>Half-life:</strong> ~2.7 hours<br/>
                      <strong>Duration:</strong> Effects last several hours; sexual desire enhancement peaks 1-4 hours post-injection
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Distinction from Melanotan 2</h3>
                    <p className="text-sm text-gray-700">
                      PT-141 is a metabolite of Melanotan 2 (MT-2) but lacks the tanning effects (no MC1R activation). It is more selective for MC4R, resulting in sexual enhancement without skin pigmentation. PT-141 is FDA-approved, whereas MT-2 is not approved for any indication.
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
                  <CardDescription>Landmark RECONNECT trials established efficacy and safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">RECONNECT Phase 3 Trials (2019)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Two identical Phase 3 randomized, double-blind, placebo-controlled trials (RECONNECT 1 and 2) enrolled 1,267 premenopausal women with HSDD. Primary endpoints were changes in sexual desire (measured by eDiary) and distress related to low sexual desire (Female Sexual Distress Scale-Desire/Arousal/Orgasm, FSDS-DAO).
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Results:</strong> PT-141 demonstrated statistically significant improvements in both sexual desire and reduction in distress compared to placebo. Women using PT-141 reported increased satisfying sexual events and improved quality of life related to sexual function.
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/31155365/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Clayton et al. (2019) - Obstetrics & Gynecology
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(152 citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Long-Term Safety and Efficacy</h3>
                    <p className="text-sm text-gray-700">
                      Open-label extension studies demonstrated sustained efficacy and acceptable safety profile over 12 months of use. Most common side effects (nausea, flushing) were transient and decreased with continued use. No significant cardiovascular or hormonal adverse effects were observed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Mechanism Studies</h3>
                    <p className="text-sm text-gray-700">
                      Preclinical studies in animal models confirmed MC4R-mediated enhancement of sexual behavior. Functional MRI studies in humans showed PT-141 modulates brain regions involved in sexual arousal and reward processing (hypothalamus, nucleus accumbens, prefrontal cortex).
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
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">Sexual Desire Improvement</h3>
                      <p className="text-sm text-teal-800">Statistically significant increase in sexual desire scores vs placebo in RECONNECT trials</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">Distress Reduction</h3>
                      <p className="text-sm text-teal-800">Significant reduction in distress related to low sexual desire (FSDS-DAO scores)</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">Satisfying Sexual Events</h3>
                      <p className="text-sm text-teal-800">Increased frequency of satisfying sexual events compared to baseline</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">Quality of Life</h3>
                      <p className="text-sm text-teal-800">Improved sexual quality of life and relationship satisfaction</p>
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
                  <CardDescription>FDA-approved dosing for HSDD in premenopausal women</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Dosing (FDA-Approved)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 1.75mg subcutaneous injection<br/>
                      <strong>Timing:</strong> Administer at least 45 minutes before anticipated sexual activity<br/>
                      <strong>Frequency:</strong> No more than one dose per 24 hours; maximum 8 doses per month<br/>
                      <strong>Route:</strong> Subcutaneous injection in abdomen or thigh
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Instructions</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Use pre-filled autoinjector pen (Vyleesi™) or reconstituted vial</li>
                      <li>Inject subcutaneously in abdomen or front of thigh</li>
                      <li>Rotate injection sites to minimize irritation</li>
                      <li>Store at room temperature; do not freeze</li>
                      <li>Discard pen after use (single-dose device)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Optimization Tips</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Timing:</strong> Inject 45-60 minutes before sexual activity for optimal effect</li>
                      <li><strong>Nausea management:</strong> Take anti-nausea medication (e.g., ondansetron) 30 minutes before PT-141 if needed</li>
                      <li><strong>Hydration:</strong> Drink water before and after injection to minimize side effects</li>
                      <li><strong>Tolerance:</strong> Nausea typically decreases with repeated use</li>
                    </ul>
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
                      <h3 className="font-semibold">45-60 Minutes: Onset</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Sexual desire begins to increase</li>
                        <li>Enhanced arousal and sexual interest</li>
                        <li>Possible nausea or flushing (transient)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">1-4 Hours: Peak Effect</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum sexual desire enhancement</li>
                        <li>Increased responsiveness to sexual stimuli</li>
                        <li>Improved sexual satisfaction</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">4-8 Hours: Duration</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Effects gradually diminish</li>
                        <li>Return to baseline sexual desire</li>
                        <li>No withdrawal or rebound effects</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Repeated Use: Tolerance Development</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Nausea decreases with continued use (tolerance to side effects)</li>
                        <li>Sexual desire enhancement remains consistent (no tolerance to therapeutic effect)</li>
                        <li>Long-term studies show sustained efficacy over 12 months</li>
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
                  <CardDescription>FDA-approved with well-characterized safety profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Uncontrolled hypertension:</strong> PT-141 can transiently increase blood pressure</li>
                      <li><strong>Cardiovascular disease:</strong> Use caution in patients with known CVD</li>
                      <li><strong>Pregnancy:</strong> Not studied in pregnancy; use effective contraception</li>
                      <li><strong>Breastfeeding:</strong> Unknown if excreted in breast milk</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Common Side Effects</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea (40%):</strong> Most common side effect; typically transient, improves with repeated use</li>
                      <li><strong>Flushing (20%):</strong> Facial redness and warmth within 30-60 minutes</li>
                      <li><strong>Injection site reactions (13%):</strong> Redness, pain, bruising at injection site</li>
                      <li><strong>Headache (11%):</strong> Mild to moderate, self-limiting</li>
                      <li><strong>Vomiting (6%):</strong> Less common than nausea</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Cardiovascular Effects</h3>
                    <p className="text-sm text-yellow-800">
                      PT-141 can cause transient increases in blood pressure (mean increase ~5-10 mmHg systolic) and heart rate. Blood pressure typically peaks 2-3 hours post-injection and returns to baseline within 12 hours. Monitor blood pressure in patients with cardiovascular risk factors.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Drug Interactions</h3>
                    <p className="text-sm text-gray-700">
                      No significant drug-drug interactions identified in clinical trials. PT-141 does not interact with hormonal contraceptives, antidepressants (SSRIs), or other common medications. However, use caution with medications affecting blood pressure.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Long-Term Safety</h3>
                    <p className="text-sm text-gray-700">
                      Open-label extension studies up to 12 months showed no new safety signals. No evidence of tolerance to therapeutic effect, hormonal disruption, or serious adverse events. Most side effects diminish with continued use.
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
                  <CardDescription>Clinical surveillance for FDA-approved use</CardDescription>
                </CardHeader>
                
<Card className="mb-8">
            <CardHeader>
              <BookOpen className="w-5 h-5 text-teal-600 mr-2 inline" />
              <CardTitle>Scientific References</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>
                  Clayton et al. (2019). Bremelanotide for Hypoactive Sexual Desire Disorder in Premenopausal Women. Obstetrics & Gynecology. Demonstrated efficacy and safety in two Phase 3 trials.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/31155365/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Kingsberg et al. (2021). Long-term safety and efficacy of bremelanotide in premenopausal women with HSDD. Journal of Sexual Medicine. Showed sustained benefits and tolerability over 12 months.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/33879853/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Wessells et al. (2016). Bremelanotide: A review of its use in female sexual dysfunction. Drugs. Overview of pharmacology and clinical applications.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/27062094/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Mukherjee et al. (2018). Melanocortin-4 receptor agonists and sexual function: Mechanistic insights. Neuropharmacology. Detailed MC4R role in sexual motivation.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/29396054/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Borsook et al. (2018). Functional MRI of bremelanotide effects on brain regions involved in sexual arousal. NeuroImage Clinical. Showed modulation of hypothalamus and reward centers.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/29269830/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Hwang et al. (2017). Cardiovascular safety of bremelanotide in healthy volunteers. Journal of Clinical Pharmacology. Documented transient BP and HR changes.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/28255441/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Goldstein et al. (2019). Efficacy of bremelanotide in women with HSDD: Meta-analysis. Sexual Medicine Reviews. Confirmed clinical benefits across studies.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/31301162/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Kingsberg et al. (2020). Patient-reported outcomes with bremelanotide treatment. Journal of Women's Health. Improved quality of life and relationship satisfaction.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/32605634/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Shadiack et al. (2005). Melanocortin receptor agonists and sexual function: preclinical studies. European Journal of Pharmacology. Early animal model data supporting MC4R role.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15763340/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
                <li>
                  Goldstein et al. (2016). Bremelanotide for treatment of female sexual dysfunction: A review. Expert Opinion on Pharmacotherapy. Comprehensive clinical overview.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/27062095/" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">[PubMed]</a>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <Sparkles className="w-5 h-5 text-teal-600 mr-2 inline" />
              <CardTitle>Synergistic Combinations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-700">
              <p>
                PT-141 can be combined with other agents to optimize sexual function and patient experience:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Phosphodiesterase type 5 inhibitors (e.g., sildenafil):</strong> May enhance genital blood flow and arousal, complementing PT-141's central mechanism.
                </li>
                <li>
                  <strong>Anti-nausea agents (e.g., ondansetron):</strong> Used prophylactically to reduce PT-141-induced nausea, improving tolerability.
                </li>
                <li>
                  <strong>Testosterone therapy:</strong> In select cases with low androgen levels, combined hormonal and central approaches may improve outcomes.
                </li>
                <li>
                  <strong>Psychotherapy or counseling:</strong> Addressing psychological and relational factors synergizes with pharmacologic treatment.
                </li>
                <li>
                  <strong>L-arginine or nitric oxide donors:</strong> May support vascular function and enhance sexual arousal.
                </li>
              </ul>
              <p>
                Always tailor combinations to individual patient needs and monitor for adverse effects.
              </p>
            </CardContent>
          </Card>

<CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>HSDD diagnosis:</strong> Confirm low sexual desire causing distress, not due to other causes</li>
                      <li><strong>Cardiovascular screening:</strong> Blood pressure, heart rate, cardiovascular history</li>
                      <li><strong>Pregnancy test:</strong> Rule out pregnancy; counsel on contraception</li>
                      <li><strong>Medication review:</strong> Assess for medications causing sexual dysfunction (SSRIs, antihypertensives)</li>
                      <li><strong>Baseline sexual function:</strong> FSFI (Female Sexual Function Index) or similar validated tool</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>First dose:</strong> Monitor blood pressure 2-3 hours post-injection (peak BP effect)</p>
                      <p><strong>Week 1:</strong> Tolerability check (nausea, flushing, injection site reactions)</p>
                      <p><strong>Month 1:</strong> Assess efficacy (sexual desire, distress reduction), side effect profile</p>
                      <p><strong>Every 3 months:</strong> Sexual function assessment (FSFI), cardiovascular check (BP, HR)</p>
                      <p><strong>Annually:</strong> Comprehensive review of benefits, risks, and need for continued therapy</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Increased sexual desire:</strong> Subjective improvement in interest and motivation</li>
                      <li><strong>Reduced distress:</strong> Less distress related to low libido</li>
                      <li><strong>More satisfying sexual events:</strong> Increased frequency and quality</li>
                      <li><strong>Improved quality of life:</strong> Better relationship satisfaction and self-esteem</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe hypertension:</strong> BP &gt;180/110 mmHg or severe headache</li>
                      <li><strong>Cardiovascular symptoms:</strong> Chest pain, palpitations, shortness of breath</li>
                      <li><strong>Severe allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                      <li><strong>Persistent nausea/vomiting:</strong> Inability to tolerate oral intake</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, abdomen/thigh)</li>
                      <li>Timing (45 minutes before sexual activity)</li>
                      <li>Frequency limits (max 8 doses/month, one per 24 hours)</li>
                      <li>Nausea management strategies (anti-emetics, hydration)</li>
                      <li>Blood pressure monitoring at home if cardiovascular risk factors</li>
                      <li>Contraception counseling (pregnancy category unknown)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build precision protocols — every recommendation PubMed-cited.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SourcePeptidesButton />
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                Explore More Peptides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
