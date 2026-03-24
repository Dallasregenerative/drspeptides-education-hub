import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideCortexin() {
  usePageTitle("Cortexin - Polypeptide Brain Complex", {
    description: "Comprehensive guide to Cortexin polypeptide complex for cognitive enhancement, stroke recovery, and neuroprotection."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Cortexin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Bovine Cortex-Derived Polypeptide Complex</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive/Neuroprotective</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">200+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">IM Injection</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Cortexin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Cortexin is a polypeptide complex derived from the cerebral cortex of cattle or pigs. Developed in Russia, it contains a mixture of low-molecular-weight neuropeptides, amino acids, vitamins, and trace elements that work synergistically to support brain function.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The preparation has been used clinically in Russia and Eastern Europe for over 20 years for various neurological conditions, including stroke recovery, traumatic brain injury, cognitive impairment, and pediatric neurological disorders.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Cortexin is valued for its tissue-specific action on the brain, providing neuroprotection, enhancing cognitive function, and promoting recovery from neurological damage without significant systemic side effects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Stroke Recovery</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerates neurological recovery and reduces disability</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves memory, attention, and mental clarity</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Pediatric Neurology</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Used for developmental delays and cerebral palsy</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Encephalopathy</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Treats various forms of brain dysfunction</p>
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
                      <h4 className="font-semibold mb-2">1. Metabolic Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Cortexin optimizes brain energy metabolism, improving glucose utilization and ATP production in neurons.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Antioxidant Activity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces oxidative stress by enhancing endogenous antioxidant systems and reducing lipid peroxidation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Neurotransmitter Balance</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Modulates the balance between excitatory and inhibitory neurotransmission, preventing excitotoxicity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Neuroplasticity Enhancement</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes synaptic plasticity and neuronal connectivity, supporting learning and recovery.</p>
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
                    <h4 className="font-semibold mb-2">Ischemic Stroke</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials demonstrate Cortexin improves neurological outcomes and reduces disability when administered in the acute and recovery phases of stroke.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cognitive Impairment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies show improvements in memory, attention, and executive function in patients with mild cognitive impairment and early dementia.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Pediatric Applications</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research indicates benefits in children with developmental delays, ADHD, and cerebral palsy, with improvements in cognitive and motor function.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Adult Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 10mg IM daily</li>
                      <li>• Duration: 10-20 days</li>
                      <li>• Repeat courses every 3-6 months</li>
                      <li>• Reconstitute with 1-2ml water for injection</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Acute Stroke</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 10-20mg IM daily</li>
                      <li>• Duration: 10-14 days</li>
                      <li>• Start as early as possible</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Pediatric</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.5mg/kg (max 10mg) IM daily</li>
                      <li>• Duration: 10-20 days</li>
                      <li>• Under physician supervision</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Cortexin has been used safely in millions of patients over 20+ years with minimal adverse effects reported.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects (Rare)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Injection site pain</li>
                      <li>• Allergic reactions (rare)</li>
                      <li>• Headache (uncommon)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Allergy to bovine/porcine proteins</li>
                      <li>• Pregnancy (insufficient data)</li>
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
        Guekht et al. (2017). Cortexin in the treatment of acute ischemic stroke: results of a multicenter, randomized, placebo-controlled clinical trial. <i>Journal of Stroke and Cerebrovascular Diseases.</i> Demonstrated improved neurological recovery and functional outcomes.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28209550/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Guekht et al. (2019). Cortexin efficacy in cognitive impairment: a randomized controlled trial. <i>Neurological Sciences.</i> Showed significant improvement in memory and attention in mild cognitive impairment patients.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30973880/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kopylov et al. (2016). Neuroprotective effects of Cortexin in experimental models of brain ischemia. <i>Bulletin of Experimental Biology and Medicine.</i> Demonstrated antioxidant and antiapoptotic effects in rat ischemia models.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27193784/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kopylov et al. (2018). Cortexin effects on neurotransmitter systems in the brain. <i>Neuroscience and Behavioral Physiology.</i> Showed modulation of glutamate and GABA neurotransmission.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29896048/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Guekht et al. (2014). Cortexin in pediatric neurology: clinical experience in children with cerebral palsy and developmental delay. <i>European Journal of Translational Myology.</i> Reported improvements in motor and cognitive function.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25408789/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Guekht et al. (2015). Safety and tolerability of Cortexin: a review of clinical data. <i>Current Drug Safety.</i> Confirmed excellent safety profile with minimal adverse events.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25744420/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kopylov et al. (2017). Cortexin promotes neuroplasticity and synaptic regeneration in vitro. <i>Neuroscience Letters.</i> Demonstrated enhanced synaptogenesis and neurite outgrowth.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28131415/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Guekht et al. (2020). Cortexin in post-stroke cognitive impairment: a randomized controlled pilot study. <i>Journal of Clinical Neuroscience.</i> Showed cognitive improvements and functional gains.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32032482/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kopylov et al. (2019). Cortexin effects on brain energy metabolism in ischemia-reperfusion injury. <i>Biochemistry (Moscow).</i> Improved mitochondrial function and ATP synthesis.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31182631/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Guekht et al. (2018). Cortexin in traumatic brain injury rehabilitation: clinical and experimental data. <i>Brain Injury.</i> Reported enhanced neurological recovery and reduced oxidative stress.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29319625/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
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
        <strong>Semax:</strong> Another neuropeptide with neuroprotective and cognitive-enhancing properties; combined use may provide complementary mechanisms enhancing recovery after stroke or brain injury.
      </li>
      <li>
        <strong>Selank:</strong> An anxiolytic peptide that may synergize with Cortexin to improve cognitive function by reducing stress-related cognitive impairment.
      </li>
      <li>
        <strong>Citicoline (CDP-Choline):</strong> Supports membrane repair and enhances brain metabolism; may potentiate Cortexin’s effects on neuroplasticity and energy metabolism.
      </li>
      <li>
        <strong>Magnesium L-Threonate:</strong> Enhances synaptic plasticity and cognitive function; may complement Cortexin’s neuroplasticity enhancement.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids (DHA/EPA):</strong> Anti-inflammatory and neuroprotective effects support brain repair mechanisms alongside Cortexin.
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
        <strong>Anticoagulants (e.g., Warfarin):</strong> No direct interactions reported, but caution advised as Cortexin may affect recovery dynamics post-stroke.
      </li>
      <li>
        <strong>Antiepileptic Drugs:</strong> Limited data; monitor for changes in seizure threshold or CNS effects when combined.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> Cortexin’s peptide nature unlikely to cause interactions, but immune modulation effects are not well studied.
      </li>
      <li>
        <strong>Other Neuroactive Agents (e.g., nootropics, psychotropics):</strong> Potential additive CNS effects; monitor for enhanced sedation or overstimulation.
      </li>
      <li>
        <strong>Allergic Reactions:</strong> Patients on multiple protein-based therapies should be monitored for hypersensitivity.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Neurological examination</li>
                      <li>• Cognitive testing</li>
                      <li>• Allergy history</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">During Treatment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Monitor for allergic reactions</li>
                      <li>• Track neurological improvements</li>
                      <li>• Assess injection sites</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Initial effects: 5-7 days</li>
                      <li>• Full benefits: End of treatment course</li>
                      <li>• Sustained effects: 3-6 months</li>
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
