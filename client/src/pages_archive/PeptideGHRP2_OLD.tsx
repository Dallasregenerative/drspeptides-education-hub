import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, TrendingUp, Dumbbell, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptideGHRP2() {
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
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-600">Growth Hormone Secretagogue</Badge>
              <Badge variant="outline" className="border-blue-300 text-blue-700">Ghrelin Receptor Agonist</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              GHRP-2
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              Growth Hormone Releasing Peptide-2: Potent GH Secretagogue
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              GHRP-2 (Growth Hormone Releasing Peptide-2) is a synthetic hexapeptide and potent ghrelin receptor agonist that stimulates pulsatile growth hormone (GH) release from the pituitary gland. As one of the most extensively studied growth hormone secretagogues, GHRP-2 acts through the GHS-R1a (ghrelin) receptor to trigger endogenous GH secretion, offering a more physiologic approach to GH enhancement compared to exogenous GH administration. With over **600 combined citations** across landmark studies, GHRP-2 has demonstrated efficacy in increasing lean body mass, improving growth velocity in children, enhancing appetite, and reducing body fat. Its synergistic effects with GHRH and ability to preserve natural GH pulsatility make it a cornerstone peptide for anti-aging, performance enhancement, and metabolic optimization.
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
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">GH Secretion</h3>
                <p className="text-sm text-slate-600">
                  Potent stimulation of pulsatile growth hormone release through ghrelin receptor activation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Dumbbell className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Lean Mass Increase</h3>
                <p className="text-sm text-slate-600">
                  Enhances lean body mass and reduces body fat through GH-mediated anabolic effects
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FlaskConical className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Synergistic Effects</h3>
                <p className="text-sm text-slate-600">
                  Amplifies GH release when combined with GHRH or L-arginine (75+ citations on synergy)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Appetite Enhancement</h3>
                <p className="text-sm text-slate-600">
                  Increases food intake by 36% through ghrelin-like orexigenic effects (84 citations)
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
                      <FlaskConical className="h-5 w-5 mr-2 text-blue-600" />
                      Ghrelin Receptor Agonism
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      GHRP-2 is a synthetic agonist of the **GHS-R1a (growth hormone secretagogue receptor type 1a)**, also known as the ghrelin receptor. Unlike natural ghrelin, GHRP-2 is a stable hexapeptide that resists enzymatic degradation, providing sustained receptor activation. Binding to GHS-R1a on somatotrophs in the anterior pituitary triggers intracellular calcium mobilization and cAMP signaling, leading to rapid GH secretion.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dual Mechanism: Pituitary & Hypothalamic</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      GHRP-2 acts through a **dual mechanism** to maximize GH release:
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm text-blue-900 space-y-1">
                        <li>• **Direct pituitary action:** Stimulates somatotrophs to release stored GH</li>
                        <li>• **Hypothalamic action:** Stimulates GHRH neurons while suppressing somatostatin (GH-inhibiting hormone)</li>
                        <li>• **Synergistic amplification:** When combined with GHRH, produces supraphysiologic GH peaks (75 citations)</li>
                        <li>• **Pulsatile secretion:** Preserves natural GH pulsatility rather than continuous elevation</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Downstream Effects</h3>
                    <p className="text-slate-700 leading-relaxed">
                      GH released by GHRP-2 stimulation acts on the liver and peripheral tissues to produce **IGF-1 (insulin-like growth factor-1)**, the primary mediator of GH's anabolic effects. IGF-1 promotes protein synthesis, lipolysis, and cellular proliferation while improving insulin sensitivity. GHRP-2 also exhibits direct orexigenic (appetite-stimulating) effects independent of GH, mediated through hypothalamic neuropeptide Y (NPY) and agouti-related peptide (AgRP) pathways.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Clinical Evidence</h2>
            
            <div className="space-y-6">
              {/* Comprehensive Review */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">314 Citations</Badge>
                    <Badge variant="secondary">Cell Mol Life Sci 1998</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Growth Hormone-Releasing Peptide (GHRP): Comprehensive Review
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Bowers CY. Cell Mol Life Sci. 1998;54(12):1316-1329.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Mechanism:</strong> GHRP-2 acts via specific GHS-R1a receptor distinct from GHRH receptor</li>
                      <li>• <strong>Potency:</strong> One of the most potent synthetic GH secretagogues developed</li>
                      <li>• <strong>Synergy:</strong> Amplifies GHRH-induced GH release through complementary mechanisms</li>
                      <li>• <strong>Clinical utility:</strong> Diagnostic tool for GH deficiency and therapeutic potential</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Appetite & Food Intake */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">84 Citations</Badge>
                    <Badge variant="secondary">J Clin Endocrinol Metab 2005</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    GHRP-2 Increases Food Intake in Healthy Men
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Laferrère B, et al. J Clin Endocrinol Metab. 2005;90(2):611-614.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Study design:</strong> Subcutaneous infusion (1 μg/kg/h) vs saline in 7 lean healthy males</li>
                      <li>• <strong>Food intake increase:</strong> 35.9 ± 10.9% more calories consumed with GHRP-2</li>
                      <li>• <strong>Ghrelin-like effect:</strong> Orexigenic action similar to natural ghrelin</li>
                      <li>• <strong>Clinical application:</strong> Potential for cachexia, wasting conditions, appetite disorders</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Synergy with L-Arginine */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">75 Citations</Badge>
                    <Badge variant="secondary">Am J Physiol 2000</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Synergy of L-Arginine and GHRP-2 for GH Release
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Wideman L, et al. Am J Physiol Regul Integr Comp Physiol. 2000;279(4):R1467-R1477.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Synergistic amplification:</strong> L-arginine + GHRP-2 produces greater GH response than either alone</li>
                      <li>• <strong>Exercise interaction:</strong> Exercise enhances synergistic GH release</li>
                      <li>• <strong>Mechanism:</strong> L-arginine suppresses somatostatin while GHRP-2 stimulates GH directly</li>
                      <li>• <strong>Clinical protocol:</strong> Combined administration maximizes GH secretion</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Pediatric Growth */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">66 Citations</Badge>
                    <Badge variant="secondary">J Clin Endocrinol Metab 1998</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    8-Month GHRP-2 Treatment in Children with Growth Deficiency
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Mericq V, et al. J Clin Endocrinol Metab. 1998;83(7):2355-2360.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Duration:</strong> 8 months of graded-dose GHRP-2 treatment</li>
                      <li>• <strong>Growth velocity:</strong> Improved in prepubertal children with growth deficiency</li>
                      <li>• <strong>IGF-I elevation:</strong> Dose-dependent increases in serum IGF-I and IGFBP-3</li>
                      <li>• <strong>Safety:</strong> Well-tolerated with no significant adverse events</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Safety & Efficacy Review */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">65 Citations</Badge>
                    <Badge variant="secondary">Sex Med Rev 2017</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Safety and Efficacy of Growth Hormone Secretagogues
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Sigalos JT, et al. Sex Med Rev. 2018;6(1):45-53.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Lean mass:</strong> GHSs improve lean body mass and reduce fat mass</li>
                      <li>• <strong>Bone health:</strong> Reduce bone turnover markers</li>
                      <li>• <strong>Appetite stimulation:</strong> Beneficial in wasting states and obesity</li>
                      <li>• <strong>Safety profile:</strong> Generally well-tolerated across multiple studies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Protocol */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Dosing</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Dose range:</strong> 100-300 mcg per injection</li>
                        <li><strong>Frequency:</strong> 1-3 times daily (typically before bed and/or post-workout)</li>
                        <li><strong>Route:</strong> Subcutaneous injection</li>
                        <li><strong>Timing:</strong> On empty stomach (2-3 hours after last meal)</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Synergistic Protocols</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>GHRP-2 + GHRH (CJC-1295):</strong> Amplifies GH release through complementary pathways</li>
                      <li>• <strong>GHRP-2 + L-Arginine:</strong> 3-6g L-arginine 30 min before GHRP-2 injection</li>
                      <li>• <strong>GHRP-2 + Ipamorelin:</strong> Combines potency with reduced side effects</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Optimal Timing</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Before bed:</strong> Enhances natural nocturnal GH pulse</li>
                      <li>• <strong>Post-workout:</strong> Capitalizes on exercise-induced GH sensitization</li>
                      <li>• <strong>Morning (fasted):</strong> Maximizes GH response in absence of nutrients</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safety Profile</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Common Effects</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Increased appetite:</strong> Ghrelin-like orexigenic effect (can be beneficial or unwanted)</li>
                      <li>• <strong>Water retention:</strong> Mild, transient (GH-mediated sodium retention)</li>
                      <li>• <strong>Injection site reactions:</strong> Mild redness, occasional itching</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Contraindications & Precautions</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Active cancer:</strong> GH/IGF-1 may promote tumor growth; avoid in active malignancy</li>
                      <li>• <strong>Diabetic retinopathy:</strong> Use caution; GH may worsen retinopathy</li>
                      <li>• <strong>Pregnancy/lactation:</strong> Insufficient safety data; avoid use</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Safety Summary</p>
                    <p className="text-sm text-blue-800">
                      GHRP-2 has been extensively studied across multiple clinical trials with a favorable safety profile. Most adverse events are mild and related to GH/ghrelin-mediated effects (appetite increase, transient water retention). Long-term studies in children and adults demonstrate good tolerability with appropriate dosing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade GHRP-2</h2>
            <p className="text-lg mb-6 text-blue-50">
              For pharmaceutical-grade GHRP-2 and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-blue-100">
              Available in 5mg and 10mg vials
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
                    1. Bowers CY. Growth hormone-releasing peptide (GHRP). Cell Mol Life Sci. 1998;54(12):1316-1329. doi:10.1007/s000180050257
                  </li>
                  <li>
                    2. Laferrère B, et al. Growth hormone releasing peptide-2 (GHRP-2), like ghrelin, increases food intake in healthy men. J Clin Endocrinol Metab. 2005;90(2):611-614. doi:10.1210/jc.2004-1719
                  </li>
                  <li>
                    3. Wideman L, et al. Synergy of L-arginine and GHRP-2 stimulation of growth hormone in men and women: modulation by exercise. Am J Physiol Regul Integr Comp Physiol. 2000;279(4):R1467-R1477. doi:10.1152/ajpregu.2000.279.4.R1467
                  </li>
                  <li>
                    4. Mericq V, et al. Effects of eight months treatment with graded doses of a growth hormone releasing peptide in children with growth hormone deficiency. J Clin Endocrinol Metab. 1998;83(7):2355-2360. doi:10.1210/jcem.83.7.4902
                  </li>
                  <li>
                    5. Sigalos JT, et al. The safety and efficacy of growth hormone secretagogues. Sex Med Rev. 2018;6(1):45-53. doi:10.1016/j.sxmr.2017.02.004
                  </li>
                  <li>
                    6. Thomas A, et al. Identification of the growth-hormone-releasing peptide-2 (GHRP-2) in a nutritional supplement. Drug Test Anal. 2010;2(3):144-148. doi:10.1002/dta.120
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
