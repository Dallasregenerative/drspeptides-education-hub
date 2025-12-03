import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, TrendingUp, Brain, Activity, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptideSermorelin() {
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
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-600">GHRH Analog</Badge>
              <Badge variant="outline" className="border-blue-300 text-blue-700">Natural GH Stimulation</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              Sermorelin
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              Growth Hormone-Releasing Hormone Analog - Preserves Pituitary Function
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sermorelin (GHRH 1-29 NH₂) is a bioidentical synthetic analog of growth hormone-releasing hormone (GHRH) that stimulates the pituitary gland to produce and secrete endogenous human growth hormone (hGH). Unlike direct growth hormone replacement therapy, sermorelin works through the body's natural regulatory mechanisms, preserving the growth hormone neuroendocrine axis and avoiding the risks associated with exogenous hormone administration. This approach maintains physiological feedback loops, prevents tachyphylaxis, and supports long-term pituitary health during aging.
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
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Pituitary Preservation</h3>
                <p className="text-sm text-slate-600">
                  Stimulates pituitary gene transcription, increasing GH reserve and preserving the neuroendocrine axis
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Natural Regulation</h3>
                <p className="text-sm text-slate-600">
                  Works through somatostatin feedback - prevents overdose and maintains physiological GH secretion patterns
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Activity className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Episodic Release</h3>
                <p className="text-sm text-slate-600">
                  Produces pulsatile GH secretion mimicking natural physiology - avoids "square wave" exposure
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">No Tachyphylaxis</h3>
                <p className="text-sm text-slate-600">
                  Maintains long-term efficacy without receptor desensitization or tolerance development
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
                      GHRH Receptor Agonism
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Sermorelin is a 29-amino acid peptide that represents the biologically active portion of native GHRH (1-44). It binds to specific GHRH receptors on somatotroph cells in the anterior pituitary gland, stimulating the synthesis and secretion of endogenous human growth hormone. This mechanism fundamentally differs from direct GH administration by working through the body's natural regulatory pathways.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pituitary Gene Transcription</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      A unique advantage of sermorelin is its ability to stimulate pituitary gene transcription of hGH messenger RNA, thereby **increasing pituitary reserve** and preserving the growth hormone neuroendocrine axis—the first hormonal system to fail during aging. This genomic effect supports long-term pituitary health rather than simply extracting existing hormone stores.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="text-sm text-blue-900 space-y-1">
                        <li>• **Gene expression:** Upregulates GH gene transcription in somatotrophs</li>
                        <li>• **Pituitary reserve:** Increases capacity for GH synthesis and storage</li>
                        <li>• **Axis preservation:** Maintains hypothalamic-pituitary-IGF-1 feedback loops</li>
                        <li>• **Pituitary recrudescence:** May reverse age-related pituitary atrophy</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Natural Feedback Regulation</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Unlike exogenous GH administration, sermorelin-induced GH release is regulated by negative feedback involving somatostatin (growth hormone-inhibiting hormone). This creates a self-limiting system where:
                    </p>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <ul className="text-sm text-cyan-900 space-y-1">
                        <li>• **Overdose prevention:** Somatostatin inhibits excessive GH release</li>
                        <li>• **Episodic secretion:** GH is released in pulses, not continuously</li>
                        <li>• **Physiological patterns:** Mimics natural circadian GH secretion</li>
                        <li>• **No tachyphylaxis:** Maintains sensitivity to GHRH stimulation</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Advantages Over Direct GH Replacement</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Sermorelin offers several physiological advantages over recombinant human growth hormone (rhGH) therapy. By stimulating endogenous production rather than providing exogenous hormone, it avoids "square wave" pharmacological exposure, maintains normal feedback regulation, preserves pituitary function, and reduces the risk of side effects associated with supraphysiological GH levels. Additionally, sermorelin is not subject to the same legal restrictions as rhGH for anti-aging use.
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
              {/* Walker Review */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">35 Citations</Badge>
                    <Badge variant="secondary">Clin Interv Aging 2006</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Sermorelin: A Better Approach to Management of Adult-Onset Growth Hormone Insufficiency?
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Walker RF. Clin Interv Aging. 2006;1(4):307-308.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Pituitary preservation:</strong> Stimulates gene transcription, increasing GH reserve</li>
                      <li>• <strong>Natural regulation:</strong> Somatostatin feedback prevents overdose</li>
                      <li>• <strong>Episodic release:</strong> Mimics physiological pulsatile GH secretion</li>
                      <li>• <strong>No tachyphylaxis:</strong> Avoids receptor desensitization seen with rhGH</li>
                      <li>• <strong>Axis preservation:</strong> Maintains hypothalamic-pituitary function during aging</li>
                      <li>• <strong>Legal status:</strong> Off-label use not prohibited by federal law (unlike rhGH)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Khorram Study */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">67 Citations</Badge>
                    <Badge variant="secondary">J Clin Endocrinol Metab 1997</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Endocrine and Metabolic Effects of Long-Term Administration of GHRH Analog
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Khorram O, Laughlin GA, Yen SS. J Clin Endocrinol Metab. 1997;82(5):1472-1479.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Long-term efficacy:</strong> Sustained GH and IGF-1 increases over extended treatment</li>
                      <li>• <strong>Body composition:</strong> Improvements in lean mass and fat distribution</li>
                      <li>• <strong>Metabolic effects:</strong> Enhanced protein synthesis and nitrogen retention</li>
                      <li>• <strong>Safety profile:</strong> Generally well-tolerated with fewer side effects than rhGH</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Prakash Review */}
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-blue-700 border-blue-300">43 Citations</Badge>
                    <Badge variant="secondary">Paediatr Drugs 1999</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Sermorelin: A Review of Its Use in the Diagnosis and Treatment of Children with Idiopathic Growth Hormone Deficiency
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Prakash A, Goa KL. Paediatr Drugs. 1999;1(2):139-156.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Diagnostic utility:</strong> Effective provocative test for GH deficiency</li>
                      <li>• <strong>Therapeutic use:</strong> Promotes growth in children with GHD</li>
                      <li>• <strong>Well-tolerated:</strong> Favorable safety profile in pediatric populations</li>
                      <li>• <strong>GHRH analog:</strong> Suitable alternative to direct GH testing</li>
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
                  <h3 className="font-semibold mb-3">Adult Growth Hormone Insufficiency</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Age-related GH decline (somatopause)</li>
                    <li>• Body composition optimization (lean mass, fat reduction)</li>
                    <li>• Energy and vitality enhancement</li>
                    <li>• Sleep quality improvement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Metabolic Health</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Protein synthesis and nitrogen retention</li>
                    <li>• Bone density maintenance</li>
                    <li>• Lipid profile improvement</li>
                    <li>• Insulin sensitivity enhancement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Cognitive & Physical Performance</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Cognitive function support</li>
                    <li>• Exercise capacity and recovery</li>
                    <li>• Muscle strength and endurance</li>
                    <li>• Skin health and appearance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Diagnostic Use</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Provocative test for GH deficiency</li>
                    <li>• Pituitary function assessment</li>
                    <li>• Alternative to insulin tolerance test</li>
                    <li>• Safer than direct GH stimulation tests</li>
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
            <h2 className="text-3xl font-bold mb-6">Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Dosing</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Typical dose:</strong> 200-300 mcg subcutaneously before bedtime</li>
                        <li><strong>Frequency:</strong> Daily administration (5-7 days per week)</li>
                        <li><strong>Timing:</strong> Evening dosing aligns with natural GH secretion patterns</li>
                        <li><strong>Duration:</strong> Continuous therapy or cyclical protocols (e.g., 3 months on, 1 month off)</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Administration Guidelines</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Route:</strong> Subcutaneous injection (abdomen, thigh, or upper arm)</li>
                      <li>• <strong>Reconstitution:</strong> Mix with bacteriostatic water per instructions</li>
                      <li>• <strong>Storage:</strong> Refrigerate after reconstitution; use within 30 days</li>
                      <li>• <strong>Rotation:</strong> Rotate injection sites to prevent lipohypertrophy</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Optimization Strategies</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Combination therapy:</strong> Often combined with GHRP-2 or GHRP-6 for synergistic effects</li>
                      <li>• <strong>Monitoring:</strong> Track IGF-1 levels to assess response and adjust dosing</li>
                      <li>• <strong>Lifestyle factors:</strong> Optimize sleep, exercise, and nutrition for maximum benefit</li>
                      <li>• <strong>Cycling:</strong> Some protocols use intermittent dosing to prevent receptor downregulation</li>
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
                    <h3 className="font-semibold mb-2">Common Side Effects</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Injection site reactions:</strong> Redness, swelling, or mild discomfort (usually transient)</li>
                      <li>• <strong>Flushing or warmth:</strong> Temporary sensation shortly after injection</li>
                      <li>• <strong>Headache:</strong> Occasional, typically mild and self-limiting</li>
                      <li>• <strong>Dizziness:</strong> Rare, usually resolves quickly</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Advantages Over rhGH</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Lower side effect risk:</strong> Natural feedback regulation prevents overdose</li>
                      <li>• <strong>No tachyphylaxis:</strong> Maintains long-term efficacy</li>
                      <li>• <strong>Reduced metabolic disruption:</strong> Avoids risks of supraphysiological GH levels</li>
                      <li>• <strong>Pituitary preservation:</strong> Supports rather than suppresses endogenous function</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Contraindications & Precautions</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Active malignancy:</strong> Avoid in patients with active cancer</li>
                      <li>• <strong>Diabetic retinopathy:</strong> Use with caution; monitor closely</li>
                      <li>• <strong>Pregnancy/lactation:</strong> Safety not established; avoid use</li>
                      <li>• <strong>Pituitary tumors:</strong> Contraindicated in patients with pituitary adenomas</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Safety Summary</p>
                    <p className="text-sm text-blue-800">
                      Sermorelin has demonstrated a favorable safety profile in clinical use, with significantly fewer side effects than direct growth hormone replacement therapy. Its mechanism of working through natural regulatory pathways reduces the risk of adverse metabolic effects and maintains long-term pituitary health.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade Sermorelin</h2>
            <p className="text-lg mb-6 text-blue-50">
              For pharmaceutical-grade sermorelin and comprehensive peptide solutions, visit our trusted partner.
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
              Available in 2mg and 5mg vials
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
                    1. Walker RF. Sermorelin: A better approach to management of adult-onset growth hormone insufficiency? Clin Interv Aging. 2006;1(4):307-308. doi:10.2147/ciia.2006.1.4.307
                  </li>
                  <li>
                    2. Khorram O, Laughlin GA, Yen SS. Endocrine and metabolic effects of long-term administration of [Nle27]growth hormone-releasing hormone-(1-29)-NH2 in age-advanced men and women. J Clin Endocrinol Metab. 1997;82(5):1472-1479. doi:10.1210/jcem.82.5.3881
                  </li>
                  <li>
                    3. Prakash A, Goa KL. Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency. Paediatr Drugs. 1999;1(2):139-156. doi:10.2165/00128072-199901020-00007
                  </li>
                  <li>
                    4. Merriam GR, Barness S, Buchner D, et al. Growth hormone releasing hormone treatment in normal aging. J Anti-Aging Med. 2001;4:331-343.
                  </li>
                  <li>
                    5. Russell-Aulet M, Dimaraki EV, Jaffe CA, et al. Aging-related growth hormone (GH) decrease is a selective hypothalamic GH-releasing hormone pulse amplitude mediated phenomenon. J Gerontol A Biol Sci Med Sci. 2001;56(2):M124-129. doi:10.1093/gerona/56.2.m124
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
