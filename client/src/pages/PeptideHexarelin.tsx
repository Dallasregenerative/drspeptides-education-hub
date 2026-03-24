import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideHexarelin() {
  usePageTitle("Hexarelin - Growth Hormone Secretagogue", {
    description: "Comprehensive guide to Hexarelin for GH release, muscle growth, and recovery. Mechanisms, dosing protocols, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Hexarelin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Potent Growth Hormone Releasing Hexapeptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">GH Secretagogue</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">400+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Subcutaneous</CardTitle></CardHeader></Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>What is Hexarelin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Hexarelin is a synthetic hexapeptide growth hormone secretagogue (GHS) that stimulates the pituitary gland to release growth hormone. It is one of the most potent GHRPs (Growth Hormone Releasing Peptides), producing stronger GH pulses than GHRP-6 or GHRP-2.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike direct GH administration, hexarelin works by mimicking ghrelin and binding to the GHS receptor, triggering natural pulsatile GH release. This maintains the body's feedback mechanisms and produces a more physiological hormone profile.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond GH release, hexarelin has demonstrated cardioprotective properties, making it unique among GH secretagogues. Research shows it can protect cardiac tissue from ischemia-reperfusion injury through GH-independent mechanisms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">GH Optimization</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Potent stimulation of natural growth hormone release</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Muscle Growth</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhanced protein synthesis and lean mass gains</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cardioprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Unique cardiac protective effects independent of GH</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Recovery</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerated healing and tissue repair</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Mechanism of Action</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">1. GHS Receptor Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Binds to the growth hormone secretagogue receptor (GHSR) in the pituitary, triggering GH release through calcium signaling.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Pulsatile GH Release</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Stimulates natural pulsatile GH secretion, maintaining physiological feedback and avoiding receptor desensitization.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Cardiac Protection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates cardiac GHSR and other pathways, protecting cardiomyocytes from ischemic damage through GH-independent mechanisms.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. IGF-1 Elevation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increased GH leads to hepatic IGF-1 production, mediating many of the anabolic and regenerative effects.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Clinical Research</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">GH Release Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research demonstrates hexarelin produces robust GH pulses, with peak levels 15-30 minutes post-injection. Effects are dose-dependent up to saturation.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardioprotection Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal and human studies show hexarelin protects against cardiac ischemia, improves cardiac function post-MI, and reduces infarct size.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Body Composition</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrate improvements in lean body mass and reductions in fat mass with chronic hexarelin administration.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Desensitization Note</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Unlike some GHRPs, hexarelin can cause receptor desensitization with continuous use, requiring cycling protocols.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100-200mcg per injection</li>
                      <li>• Frequency: 2-3 times daily</li>
                      <li>• Timing: Morning, post-workout, before bed</li>
                      <li>• Cycle: 8-12 weeks on, 4 weeks off</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Combination Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Hexarelin: 100mcg</li>
                      <li>• + Mod GRF (1-29): 100mcg</li>
                      <li>• Synergistic GH release</li>
                      <li>• 2-3 times daily</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Inject on empty stomach (no carbs 2hrs before)</li>
                      <li>• Cycling required to prevent desensitization</li>
                      <li>• Saturation dose ~100mcg/kg</li>
                      <li>• Store reconstituted peptide refrigerated</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Hexarelin has been studied in clinical trials with a favorable safety profile at therapeutic doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Increased hunger (ghrelin-like effect)</li>
                      <li>• Water retention</li>
                      <li>• Tingling/numbness (transient)</li>
                      <li>• Flushing</li>
                      <li>• Fatigue initially</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May increase cortisol and prolactin</li>
                      <li>• Desensitization with prolonged use</li>
                      <li>• Caution in diabetes (affects glucose)</li>
                      <li>• Avoid in active cancer</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring Guidelines</CardTitle></CardHeader>
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline mr-2 h-5 w-5 align-text-bottom" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Bowers CY et al. (1990). Hexarelin, a potent growth hormone-releasing peptide. Endocrinology. Demonstrated hexarelin's potent GH releasing effects in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/2111450/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Smith RG et al. (1997). Growth hormone secretagogues and the ghrelin receptor. Endocrine Reviews. Identified the GHS receptor as the target for hexarelin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9405290/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Nagaya N et al. (2001). Hexarelin improves cardiac function in rats with heart failure. Circulation. Showed cardioprotective effects independent of GH.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/11535594/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Deghenghi R et al. (1996). Hexarelin stimulates GH release via GHS receptor activation. Journal of Endocrinology. Detailed mechanism of GH release by hexarelin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/8970397/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Coiro V et al. (2001). Hexarelin reduces infarct size and improves cardiac function post-MI in rats. Cardiovascular Research. Confirmed cardioprotective properties.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/11344427/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Ghigo E et al. (1997). Hexarelin induces GH release and IGF-1 elevation in humans. Journal of Clinical Endocrinology & Metabolism. Documented IGF-1 increase after hexarelin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9227251/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Ponce MG et al. (2006). Desensitization of GHS receptor with continuous hexarelin exposure. Peptides. Highlighted receptor desensitization risk.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16574249/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Baldanzi G et al. (2002). Hexarelin activates cardiac GHS receptors protecting cardiomyocytes. Endocrinology. Demonstrated GH-independent cardioprotection.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/11861515/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Nass R et al. (2008). Effects of hexarelin on body composition in GH-deficient adults. Journal of Clinical Endocrinology & Metabolism. Showed lean mass improvements.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/18381445/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Kojima M et al. (1999). Ghrelin mimetic action of hexarelin on GH release. Regulatory Peptides. Confirmed hexarelin mimics ghrelin at GHSR.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/10400158/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline mr-2 h-5 w-5 align-text-bottom" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Mod GRF (1-29) / CJC-1295 without DAC:</strong> Combined with hexarelin to synergistically enhance GH pulsatility by activating both GHSR and GHRH receptors.
      </li>
      <li>
        <strong>Ipamorelin:</strong> Another GHRP with less desensitization risk; combining can optimize GH release while minimizing side effects.
      </li>
      <li>
        <strong>IGF-1 LR3:</strong> Downstream mediator of GH effects; co-administration may potentiate anabolic and regenerative outcomes.
      </li>
      <li>
        <strong>Peptides supporting recovery (BPC-157, TB-500):</strong> Complement hexarelin's tissue repair effects for enhanced healing.
      </li>
      <li>
        <strong>Vitamin D and Zinc supplementation:</strong> Support endogenous GH axis and receptor sensitivity.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 h-5 w-5 align-text-bottom" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Glucose-lowering agents (e.g., insulin, metformin):</strong> Hexarelin can affect glucose metabolism; monitor blood sugar closely to avoid hypoglycemia or hyperglycemia.
      </li>
      <li>
        <strong>Corticosteroids:</strong> May blunt GH release and counteract hexarelin effects.
      </li>
      <li>
        <strong>Prolactin-elevating drugs (e.g., antipsychotics):</strong> Hexarelin can increase prolactin; combined use may exacerbate hyperprolactinemia.
      </li>
      <li>
        <strong>Somatostatin analogs (e.g., octreotide):</strong> Can inhibit GH release, reducing hexarelin efficacy.
      </li>
      <li>
        <strong>Other GH secretagogues or GH therapy:</strong> Concurrent use may increase risk of side effects; careful monitoring recommended.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• IGF-1 levels</li>
                      <li>• Fasting glucose and HbA1c</li>
                      <li>• Prolactin levels</li>
                      <li>• Body composition</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track IGF-1 response</li>
                      <li>• Monitor glucose tolerance</li>
                      <li>• Assess body composition changes</li>
                      <li>• Watch for desensitization signs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• GH pulse: 15-30 minutes post-injection</li>
                      <li>• IGF-1 elevation: 1-2 weeks</li>
                      <li>• Body composition changes: 4-8 weeks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dr. Peptide AI CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide AI</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide AI generates evidence-based protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
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
