import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, Heart, Brain, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptidePT141() {
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
      <section className="py-12 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-rose-600">FDA Approved</Badge>
              <Badge variant="outline" className="border-rose-300 text-rose-700">Melanocortin Agonist</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              PT-141 (Bremelanotide)
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              FDA-Approved Treatment for Hypoactive Sexual Desire Disorder
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              PT-141 (bremelanotide) is an FDA-approved melanocortin receptor agonist indicated for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. Marketed as **Vyleesi™**, it represents a breakthrough approach to female sexual dysfunction by modulating central nervous system pathways involved in sexual desire and arousal. Unlike hormone-based therapies, bremelanotide works through melanocortin-4 receptor (MC4R) activation in the hypothalamus, increasing dopamine release and enhancing sexual motivation. Two pivotal Phase 3 RECONNECT trials with 1,267 women demonstrated statistically significant improvements in sexual desire and reductions in distress, establishing PT-141 as the first on-demand treatment for HSDD.
            </p>
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
                <Heart className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="font-semibold mb-2">Sexual Desire Enhancement</h3>
                <p className="text-sm text-slate-600">
                  Statistically significant increases in sexual desire (FSFI-D score +0.35, p&lt;0.001)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="font-semibold mb-2">Central Mechanism</h3>
                <p className="text-sm text-slate-600">
                  MC4R activation in hypothalamus increases dopamine release and sexual motivation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="font-semibold mb-2">Distress Reduction</h3>
                <p className="text-sm text-slate-600">
                  Significant reductions in distress related to low sexual desire (FSDS-DAO -0.33, p&lt;0.001)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FlaskConical className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="font-semibold mb-2">On-Demand Dosing</h3>
                <p className="text-sm text-slate-600">
                  Subcutaneous injection ~45 minutes before anticipated sexual activity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FDA Approval */}
      <section className="py-12 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">FDA Approval</h2>
            <Card className="border-l-4 border-l-rose-600">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vyleesi™ (Bremelanotide Injection)</h3>
                    <p className="text-slate-700 mb-3">
                      **Approved:** June 21, 2019 by the U.S. Food and Drug Administration
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li>• **Indication:** Treatment of acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women</li>
                        <li>• **Administration:** Subcutaneous injection, as needed</li>
                        <li>• **Dosing:** 1.75 mg administered approximately 45 minutes before anticipated sexual activity</li>
                        <li>• **Frequency:** Maximum one dose per 24 hours, no more than 8 doses per month</li>
                        <li>• **Trade name:** Vyleesi™ (AMAG Pharmaceuticals / Palatin Technologies)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mechanism of Action</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-rose-600" />
                      Melanocortin Receptor Agonism
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Bremelanotide is a cyclic heptapeptide analog of α-melanocyte-stimulating hormone (α-MSH) with high affinity for melanocortin receptors, particularly **MC3R and MC4R**. Unlike peripheral melanocortin effects (skin pigmentation), PT-141 acts centrally in the hypothalamus to modulate sexual desire through neurotransmitter pathway activation.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Central Nervous System Modulation</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      The mechanism involves activation of presynaptic MC4 receptors on neurons in the **medial preoptic area (mPOA)** of the hypothalamus, a critical region for sexual motivation and behavior. This activation leads to:
                    </p>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <ul className="text-sm text-rose-900 space-y-1">
                        <li>• **Dopamine release:** Increased dopaminergic neurotransmission in reward pathways</li>
                        <li>• **Sexual motivation:** Enhanced appetitive sexual behaviors and desire</li>
                        <li>• **Arousal pathways:** Activation of excitatory neural circuits in limbic system</li>
                        <li>• **Inhibition reduction:** Decreased activity of inhibitory pathways suppressing sexual desire</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Neurotransmitter Balance</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Hypoactive sexual desire disorder is thought to result from an imbalance between excitatory (dopamine, norepinephrine) and inhibitory (serotonin, endogenous opioids) neurotransmitter systems. Bremelanotide restores this balance by preferentially enhancing excitatory pathways through MC4R-mediated dopamine release, without directly affecting hormonal systems (estrogen, testosterone). This non-hormonal mechanism distinguishes PT-141 from traditional hormone replacement therapies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Clinical Evidence</h2>
            
            <div className="space-y-6">
              {/* RECONNECT Trials */}
              <Card className="border-l-4 border-l-rose-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-rose-700 border-rose-300">152 Citations</Badge>
                    <Badge variant="secondary">Obstet Gynecol 2019</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    RECONNECT Phase 3 Trials: Bremelanotide for Hypoactive Sexual Desire Disorder
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Kingsberg SA, Clayton AH, Portman D, et al. Obstet Gynecol. 2019;134(5):899-908.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Study design:</strong> Two identical Phase 3, randomized, double-blind, placebo-controlled trials</li>
                      <li>• <strong>Population:</strong> 1,267 premenopausal women with acquired, generalized HSDD</li>
                      <li>• <strong>Duration:</strong> 24 weeks of treatment (as-needed dosing)</li>
                      <li>• <strong>Sexual desire improvement:</strong> Statistically significant increase (FSFI-D +0.35, p&lt;0.001)</li>
                      <li>• <strong>Distress reduction:</strong> Significant decrease in distress (FSDS-DAO -0.33, p&lt;0.001)</li>
                      <li>• <strong>Safety:</strong> Favorable profile; most common AEs were nausea, flushing, headache (mild-moderate)</li>
                      <li>• <strong>Conclusion:</strong> Both coprimary endpoints met with statistical significance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Long-term Safety */}
              <Card className="border-l-4 border-l-rose-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-rose-700 border-rose-300">59 Citations</Badge>
                    <Badge variant="secondary">Obstet Gynecol 2019</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Long-Term Safety and Efficacy of Bremelanotide
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Simon JA, Kingsberg SA, Portman D, et al. Obstet Gynecol. 2019;134(5):909-917.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Duration:</strong> 52-week open-label extension study</li>
                      <li>• <strong>Sustained efficacy:</strong> Improvements in sexual desire and distress maintained over long-term use</li>
                      <li>• <strong>Safety profile:</strong> Consistent with core studies; no new safety signals</li>
                      <li>• <strong>Tolerability:</strong> Most AEs were mild-moderate; discontinuation rate low</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Neurobiology */}
              <Card className="border-l-4 border-l-rose-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-rose-700 border-rose-300">28 Citations</Badge>
                    <Badge variant="secondary">Pharmacol Res 2022</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    The Neurobiology of Bremelanotide for Female Sexual Desire
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Pfaus JG, Shadiack A, Van Soest T, et al. Pharmacol Res. 2022;175:105965.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>MC4R mechanism:</strong> Activation of presynaptic MC4Rs in medial preoptic area (mPOA)</li>
                      <li>• <strong>Dopamine release:</strong> Increased dopaminergic neurotransmission in reward pathways</li>
                      <li>• <strong>Sexual motivation:</strong> Enhanced appetitive sexual behaviors</li>
                      <li>• <strong>Central action:</strong> Non-hormonal mechanism targeting CNS pathways</li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-bold mb-6">Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">FDA-Approved Dosing (Vyleesi™)</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Dose:</strong> 1.75 mg subcutaneous injection</li>
                        <li><strong>Timing:</strong> Administer approximately 45 minutes before anticipated sexual activity</li>
                        <li><strong>Frequency:</strong> As needed; maximum one dose per 24 hours</li>
                        <li><strong>Monthly limit:</strong> No more than 8 doses per month</li>
                        <li><strong>Route:</strong> Subcutaneous injection (abdomen or thigh)</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Administration Guidelines</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Injection sites:</strong> Abdomen or thigh (rotate sites)</li>
                      <li>• <strong>Onset:</strong> Effects typically begin within 45-60 minutes</li>
                      <li>• <strong>Duration:</strong> Sexual desire enhancement may last several hours</li>
                      <li>• <strong>Storage:</strong> Refrigerate; protect from light</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Important Considerations</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Blood pressure:</strong> Monitor for transient increases (typically mild)</li>
                      <li>• <strong>Nausea management:</strong> May decrease with continued use; consider anti-nausea medication if needed</li>
                      <li>• <strong>Discontinuation:</strong> Evaluate benefit after 8 weeks; discontinue if no improvement</li>
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
                    <h3 className="font-semibold mb-2">Common Adverse Events (≥10% incidence)</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Nausea:</strong> Most common AE; typically mild-moderate, may decrease with continued use</li>
                      <li>• <strong>Flushing:</strong> Transient warmth/redness, usually resolves within hours</li>
                      <li>• <strong>Headache:</strong> Generally mild; responsive to standard analgesics</li>
                      <li>• <strong>Injection site reactions:</strong> Mild erythema, pain, or bruising</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Warnings & Precautions</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Blood pressure:</strong> Transient increases may occur; use caution in uncontrolled hypertension</li>
                      <li>• <strong>Skin hyperpigmentation:</strong> Focal darkening possible with melanocortin agonists (rare with PT-141)</li>
                      <li>• <strong>Cardiovascular disease:</strong> Limited data in patients with CV disease; use with caution</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Contraindications</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Uncontrolled hypertension:</strong> Contraindicated in patients with uncontrolled high blood pressure</li>
                      <li>• <strong>Cardiovascular disease:</strong> Known cardiovascular disease is a contraindication</li>
                      <li>• <strong>Pregnancy/lactation:</strong> Not indicated for use during pregnancy or breastfeeding</li>
                    </ul>
                  </div>

                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4">
                    <p className="text-sm font-medium text-rose-900 mb-2">Safety Summary</p>
                    <p className="text-sm text-rose-800">
                      The RECONNECT trials demonstrated a favorable safety profile for bremelanotide. Most treatment-emergent adverse events were related to tolerability (nausea, flushing, headache) and were mild to moderate in intensity. Discontinuation rates due to adverse events were low, and no serious safety signals emerged during long-term follow-up.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade PT-141</h2>
            <p className="text-lg mb-6 text-rose-50">
              For pharmaceutical-grade PT-141 (bremelanotide) and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-rose-600 hover:text-rose-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-rose-100">
              Available in 10mg vials
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
                    1. Kingsberg SA, Clayton AH, Portman D, et al. Bremelanotide for the treatment of hypoactive sexual desire disorder: two randomized phase 3 trials. Obstet Gynecol. 2019;134(5):899-908. doi:10.1097/AOG.0000000000003500
                  </li>
                  <li>
                    2. Simon JA, Kingsberg SA, Portman D, et al. Long-term safety and efficacy of bremelanotide for hypoactive sexual desire disorder in premenopausal women. Obstet Gynecol. 2019;134(5):909-917. doi:10.1097/AOG.0000000000003496
                  </li>
                  <li>
                    3. Pfaus JG, Shadiack A, Van Soest T, et al. The neurobiology of bremelanotide for the treatment of hypoactive sexual desire disorder. Pharmacol Res. 2022;175:105965. doi:10.1016/j.phrs.2021.105965
                  </li>
                  <li>
                    4. Edinoff AN, Kaplan LA, Khan S, et al. Bremelanotide for treatment of female hypoactive sexual desire disorder. Sexes. 2022;14(1):6. doi:10.3390/sexes4010002
                  </li>
                  <li>
                    5. FDA. Vyleesi (bremelanotide) injection prescribing information. June 2019. Accessed November 2025.
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
