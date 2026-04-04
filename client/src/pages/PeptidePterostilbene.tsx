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

export default function PeptidePterostilbene() {
  usePageTitle("Pterostilbene - Enhanced Resveratrol Analog", {
    description: "Comprehensive guide to Pterostilbene for longevity, cognitive health, and metabolic support. Superior bioavailability compared to resveratrol."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Pterostilbene</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Methylated Resveratrol with Superior Bioavailability</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">800+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Pterostilbene?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Pterostilbene is a naturally occurring stilbenoid found in blueberries, grapes, and certain tree barks. It is structurally similar to resveratrol but has two methoxy groups instead of hydroxyl groups, making it significantly more lipophilic and bioavailable.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    With approximately 4x better oral bioavailability than resveratrol and a longer half-life (105 minutes vs 14 minutes), pterostilbene achieves higher and more sustained tissue concentrations. This makes it potentially more effective for the same mechanisms of action.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Like resveratrol, pterostilbene activates SIRT1 and AMPK, but its enhanced bioavailability means these effects are more pronounced at lower doses. It also crosses the blood-brain barrier more effectively, making it particularly interesting for cognitive applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cognitive Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Superior BBB penetration for neuroprotection</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Longevity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">SIRT1 activation with better bioavailability</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Metabolic Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves lipid profiles and glucose metabolism</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Antioxidant</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Potent free radical scavenging activity</p>
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
                      <h4 className="font-semibold mb-2">1. Enhanced SIRT1 Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates SIRT1 more effectively than resveratrol due to higher tissue concentrations and longer half-life.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. AMPK Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Potently activates AMPK, improving mitochondrial function, fat oxidation, and cellular energy homeostasis.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Blood-Brain Barrier Penetration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Lipophilic structure allows efficient CNS penetration, providing direct neuroprotective effects.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. PPARα Agonism</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates PPARα, improving lipid metabolism and reducing triglycerides.</p>
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
                    <h4 className="font-semibold mb-2">Cognitive Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials show improved working memory and cognitive flexibility in older adults with pterostilbene supplementation.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Effects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Human studies demonstrate reductions in blood pressure and improvements in lipid profiles, particularly LDL cholesterol.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Bioavailability Comparison</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Pharmacokinetic studies confirm 80% oral bioavailability for pterostilbene vs ~20% for resveratrol, with 4x longer half-life.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 50-150mg daily</li>
                      <li>• Timing: With or without food</li>
                      <li>• Duration: Ongoing</li>
                      <li>• Lower doses needed vs resveratrol</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cognitive Focus Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100-250mg daily</li>
                      <li>• Morning dosing preferred</li>
                      <li>• Combine with omega-3s</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Synergistic Combinations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• + NMN (NAD+ optimization)</li>
                      <li>• + Resveratrol (complementary effects)</li>
                      <li>• + Quercetin (senolytic stack)</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Pterostilbene has GRAS (Generally Recognized as Safe) status and is well-tolerated in clinical trials up to 250mg/day.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild GI discomfort (rare)</li>
                      <li>• Possible LDL increase at high doses</li>
                      <li>• Headache (uncommon)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May affect drug metabolism (CYP enzymes)</li>
                      <li>• Monitor LDL at doses greater than 100mg</li>
                      <li>• Caution with blood thinners</li>
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
        McCormack D, McFadden D. (2012). A review of pterostilbene antioxidant activity and disease modification. Oxid Med Cell Longev. Demonstrates pterostilbene’s potent antioxidant and anti-inflammatory effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22500145/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kapetanovic IM et al. (2011). Pharmacokinetics, oral bioavailability, and metabolic profile of pterostilbene in rats. Drug Metab Dispos. Shows superior bioavailability and longer half-life compared to resveratrol.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21183674/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Riche DM et al. (2014). Pterostilbene effects on lipid profiles and blood pressure in humans: a randomized controlled trial. J Clin Lipidol. Demonstrates lipid-lowering and antihypertensive effects in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25019005/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Remsberg CM et al. (2008). Pharmacokinetics and metabolism of pterostilbene in rats and humans. J Agric Food Chem. Details metabolic pathways and safety profile.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/18327949/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Chang WL et al. (2012). Neuroprotective effects of pterostilbene in Alzheimer's disease models. J Alzheimers Dis. Shows cognitive benefits and neuroprotection in preclinical models.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22233781/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Lin HY et al. (2017). Pterostilbene activates AMPK and PPARα to improve lipid metabolism in obese mice. Mol Nutr Food Res. Demonstrates mechanism of metabolic improvements.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28259465/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Paul S et al. (2010). Pterostilbene induces apoptosis and cell cycle arrest in cancer cells. Mol Cancer Ther. Highlights potential anticancer properties.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20460444/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kapetanovic IM et al. (2014). Safety assessment of pterostilbene in humans. Food Chem Toxicol. Confirms safety and tolerability up to 250mg/day.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24631930/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Lin HW et al. (2019). Pterostilbene crosses the blood-brain barrier and reduces neuroinflammation. Brain Res. Demonstrates CNS penetration and anti-inflammatory effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30817503/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Choi YJ et al. (2017). Pterostilbene improves glucose homeostasis via AMPK activation in diabetic mice. Nutr Metab (Lond). Shows improved glucose metabolism and insulin sensitivity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28288535/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
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
        <strong>NMN (Nicotinamide Mononucleotide):</strong> Enhances NAD+ levels complementing pterostilbene’s SIRT1 activation for improved mitochondrial function and longevity.
      </li>
      <li>
        <strong>Resveratrol:</strong> Combined use may provide additive or synergistic effects on SIRT1 and AMPK pathways despite pterostilbene’s superior bioavailability.
      </li>
      <li>
        <strong>Quercetin:</strong> Acts as a senolytic agent; combined with pterostilbene may enhance cellular senescence clearance and anti-aging effects.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids:</strong> Supports cognitive health and anti-inflammatory effects, complementing pterostilbene’s neuroprotective properties.
      </li>
      <li>
        <strong>Coenzyme Q10:</strong> Supports mitochondrial energy production synergistically with AMPK activation by pterostilbene.
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
        <strong>CYP450 Substrates and Inhibitors:</strong> Pterostilbene may inhibit CYP3A4 and CYP2C9 enzymes, potentially increasing plasma levels of drugs metabolized by these pathways (e.g., statins, calcium channel blockers, warfarin).
      </li>
      <li>
        <strong>Anticoagulants and Antiplatelets:</strong> Caution advised due to potential additive effects increasing bleeding risk.
      </li>
      <li>
        <strong>Antihypertensive Medications:</strong> May potentiate blood pressure lowering effects; monitor blood pressure closely.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> Potential interaction via CYP metabolism; clinical significance unknown but caution warranted.
      </li>
      <li>
        <strong>Diabetes Medications:</strong> Pterostilbene may improve glucose metabolism; monitor blood glucose to avoid hypoglycemia when combined with antidiabetic drugs.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Lipid panel (especially LDL)</li>
                      <li>• Cognitive baseline testing</li>
                      <li>• Blood pressure</li>
                      <li>• Fasting glucose</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Lipid panel at 3 months</li>
                      <li>• Track cognitive function</li>
                      <li>• Monitor energy and wellbeing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Antioxidant effects: Immediate</li>
                      <li>• Cognitive benefits: 4-8 weeks</li>
                      <li>• Metabolic improvements: 8-12 weeks</li>
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
