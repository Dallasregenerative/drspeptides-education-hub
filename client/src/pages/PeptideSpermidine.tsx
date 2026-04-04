import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideSpermidine() {
  usePageTitle("Spermidine - Autophagy-Inducing Longevity Compound", {
    description: "Comprehensive guide to Spermidine for autophagy induction, cellular renewal, and longevity. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Spermidine</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Natural Polyamine Autophagy Inducer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">500+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Spermidine?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Spermidine is a naturally occurring polyamine found in all living cells. It plays essential roles in cell growth, DNA stability, and protein synthesis. More importantly for longevity, spermidine is one of the most potent natural inducers of autophagy—the cellular "self-cleaning" process that removes damaged proteins and organelles.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Endogenous spermidine levels decline with age, which correlates with reduced autophagy and accumulation of cellular damage. Dietary sources include aged cheese, wheat germ, soybeans, and mushrooms, but supplementation can provide more consistent and higher doses.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Epidemiological studies show that higher dietary spermidine intake is associated with reduced mortality and lower incidence of age-related diseases, making it one of the most promising longevity interventions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Autophagy Induction</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Activates cellular cleanup to remove damaged components</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Cardiovascular Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces arterial stiffness and supports heart function</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Cognitive Protection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects against age-related cognitive decline</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Hair Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes hair growth and follicle health</p>
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
                      <h4 className="font-semibold mb-2">1. Autophagy Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Spermidine inhibits EP300 acetyltransferase, leading to hypoacetylation of autophagy proteins and activation of the autophagic machinery.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Mitophagy Enhancement</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes selective removal of damaged mitochondria, maintaining mitochondrial quality and cellular energy production.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Anti-Inflammatory Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces chronic inflammation by modulating immune cell function and inflammatory cytokine production.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Epigenetic Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Influences histone acetylation patterns, affecting gene expression related to aging and stress resistance.</p>
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
                    <h4 className="font-semibold mb-2">Epidemiological Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Large population studies show that higher dietary spermidine intake is associated with 5-year reduced mortality and lower cardiovascular disease risk.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Benefits</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Human trials demonstrate spermidine supplementation reduces blood pressure and improves diastolic function in older adults.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cognitive Function</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies show improved memory performance in older adults with higher spermidine intake, with animal studies showing protection against neurodegeneration.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 1-6mg daily</li>
                      <li>• Timing: Morning with food</li>
                      <li>• Duration: Ongoing (long-term)</li>
                      <li>• Form: Capsules or wheat germ extract</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Therapeutic Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 5-10mg daily</li>
                      <li>• For enhanced autophagy activation</li>
                      <li>• May combine with fasting for synergy</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Dietary Sources</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Wheat germ: ~24mg/100g</li>
                      <li>• Aged cheese: ~10-20mg/100g</li>
                      <li>• Soybeans: ~20mg/100g</li>
                      <li>• Mushrooms: ~9mg/100g</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Excellent Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Spermidine is a natural compound found in food and produced endogenously. Human studies show excellent tolerability at supplemental doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects (Rare)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild GI discomfort</li>
                      <li>• Allergic reactions (wheat-derived products)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Wheat allergy: Use non-wheat sources</li>
                      <li>• Active cancer: Consult oncologist (polyamines may affect cell growth)</li>
                      <li>• Pregnancy: Insufficient data</li>
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
        Eisenberg et al. (2009). Induction of autophagy by spermidine promotes longevity. Nature Cell Biology. Demonstrated spermidine extends lifespan via autophagy induction.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19219037/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Madeo et al. (2018). Spermidine in health and disease. Science. Reviewed spermidine's role in autophagy, aging, and cardiovascular health.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29348264/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Schwarz et al. (2018). Spermidine intake is associated with reduced mortality in humans. Nature Medicine. Large epidemiological study linking dietary spermidine to longevity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29403010/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Wirth et al. (2019). Effects of spermidine supplementation on memory performance in older adults at risk for dementia: a randomized controlled trial. Cortex. Demonstrated cognitive benefits of spermidine supplementation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31104201/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Soda et al. (2009). Polyamine-rich food decreases age-associated pathology and mortality in aged mice. Experimental Gerontology. Showed dietary spermidine reduces age-related diseases in animal models.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19505518/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Puleston et al. (2019). Polyamines and autophagy: a new link to aging and disease. Trends in Cell Biology. Discussed molecular mechanisms linking spermidine to autophagy and aging.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30898689/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kiechl et al. (2018). Higher spermidine intake is linked to lower blood pressure and reduced arterial stiffness in humans. Hypertension. Clinical trial showing cardiovascular benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29581296/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Minois et al. (2011). Polyamines in aging and disease. Aging. Comprehensive review of polyamines including spermidine in aging biology.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21487414/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        LaRocca et al. (2013). Spermidine restores endothelial function in aging via autophagy induction. Journal of Clinical Investigation. Demonstrated vascular benefits mediated by autophagy.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23426105/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Eisenberg et al. (2016). Cardioprotection and lifespan extension by spermidine. Nature Medicine. Showed spermidine protects heart function and extends lifespan in mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27111542/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
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
        <strong>Fasting and Caloric Restriction:</strong> Enhances spermidine-induced autophagy synergistically, promoting cellular renewal and longevity.
      </li>
      <li>
        <strong>Resveratrol:</strong> Combined use may amplify autophagy and mitochondrial health via complementary pathways.
      </li>
      <li>
        <strong>Nicotinamide Riboside (NR):</strong> Supports mitochondrial function and NAD+ metabolism, complementing spermidine's mitophagy effects.
      </li>
      <li>
        <strong>Metformin:</strong> May synergize by activating AMPK and autophagy pathways, enhancing metabolic and cardiovascular benefits.
      </li>
      <li>
        <strong>Curcumin:</strong> Anti-inflammatory properties complement spermidine's immune modulation for enhanced systemic health.
      </li>
      <li>
        <strong>Coenzyme Q10:</strong> Supports mitochondrial energy production alongside spermidine's mitophagy enhancement.
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
        <strong>Immunosuppressants (e.g., Rapamycin):</strong> Potential additive effects on autophagy; monitor immune function closely.
      </li>
      <li>
        <strong>Cancer Chemotherapy Agents:</strong> Polyamines may promote cell growth; caution advised in active malignancy.
      </li>
      <li>
        <strong>Antihypertensive Medications:</strong> Spermidine may lower blood pressure; monitor for hypotension when combined.
      </li>
      <li>
        <strong>Monoamine Oxidase Inhibitors (MAOIs):</strong> Limited data; theoretical risk due to polyamine metabolism interactions.
      </li>
      <li>
        <strong>Anticoagulants:</strong> No direct interaction known, but monitor as spermidine may affect vascular function.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Blood pressure</li>
                      <li>• Cardiovascular markers</li>
                      <li>• Cognitive baseline</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track energy and vitality</li>
                      <li>• Monitor hair health</li>
                      <li>• Periodic cardiovascular assessment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Autophagy activation: Days</li>
                      <li>• Subjective benefits: 4-8 weeks</li>
                      <li>• Cardiovascular benefits: 3-6 months</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
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
