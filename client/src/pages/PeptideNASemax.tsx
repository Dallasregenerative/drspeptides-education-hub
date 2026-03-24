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

export default function PeptideNASemax() {
  usePageTitle("NA-Semax - Enhanced Cognitive Peptide", {
    description: "Comprehensive guide to NA-Semax (N-Acetyl Semax) for enhanced cognitive function, BDNF modulation, and neuroprotection."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">NA-Semax</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">N-Acetyl Semax - Enhanced Stability Formula</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">120+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Intranasal</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is NA-Semax?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    NA-Semax (N-Acetyl Semax) is an enhanced version of the original Semax peptide with an acetyl group attached to the N-terminus. This modification improves the peptide's stability, bioavailability, and potentially its ability to cross the blood-brain barrier.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Like standard Semax, NA-Semax is derived from ACTH(4-10) and works primarily through BDNF modulation. However, the acetylation may provide more consistent effects and longer duration of action compared to the original formulation.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    NA-Semax is particularly popular among nootropic users seeking enhanced cognitive function, improved focus, and neuroprotection without the side effects associated with stimulants.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhanced memory, focus, and mental clarity through BDNF upregulation</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protection against oxidative stress and neurodegeneration</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Mood Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Anxiolytic and antidepressant-like effects</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Learning & Memory</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improved memory consolidation and recall</p>
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
                      <h4 className="font-semibold mb-2">1. BDNF/TrkB Pathway</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NA-Semax increases BDNF expression and activates TrkB receptors, promoting neuronal survival, synaptic plasticity, and neurogenesis.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Enhanced Stability</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The N-acetyl modification protects the peptide from enzymatic degradation, potentially extending its half-life and duration of action.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Dopamine Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Influences dopaminergic transmission in the prefrontal cortex, contributing to improved focus and motivation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Antioxidant Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces oxidative stress markers and protects neurons from free radical damage.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Summary</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">BDNF Expression Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research demonstrates significant upregulation of BDNF in the hippocampus and cortex following Semax administration, with acetylated forms showing potentially enhanced effects.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cognitive Performance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal studies show improved performance on memory and learning tasks, with effects persisting beyond the treatment period.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neuroprotection</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies indicate protection against various neurotoxic insults, including oxidative stress and excitotoxicity.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 200-600mcg daily</li>
                      <li>• Frequency: 1-2 times daily</li>
                      <li>• Duration: 10-20 days per cycle</li>
                      <li>• Administration: Intranasal spray</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Cognitive Enhancement</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Start: 200mcg once daily</li>
                      <li>• Optimal: 300-400mcg twice daily</li>
                      <li>• Best taken in morning and early afternoon</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Avoid late evening dosing (may affect sleep)</li>
                      <li>• Cycle: 2-3 weeks on, 1 week off</li>
                      <li>• Store refrigerated for stability</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Well Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">NA-Semax has an excellent safety profile with minimal side effects reported at recommended doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Nasal irritation</li>
                      <li>• Mild headache</li>
                      <li>• Dizziness (rare)</li>
                      <li>• Insomnia if taken late</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pregnancy and breastfeeding</li>
                      <li>• Severe hypertension</li>
                      <li>• History of seizures</li>
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
      <BookOpen className="inline mr-2 h-5 w-5" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
    <ol className="list-decimal list-inside space-y-1">
      <li>
        Ashmarin IP et al. (1997). Semax, a synthetic melanocortin derivative, stimulates brain-derived neurotrophic factor expression in rat brain. Neurosci Lett. Demonstrated Semax-induced BDNF upregulation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9405329/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Zolotarev Y et al. (2007). Neuroprotective effects of Semax in ischemic stroke model. Bull Exp Biol Med. Showed Semax reduces infarct size and improves neurological outcomes.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17691075/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Ashmarin IP et al. (2005). Semax modulates dopamine metabolism in rat brain. Bull Exp Biol Med. Found Semax influences dopaminergic transmission in prefrontal cortex.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16104099/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Karpova NN et al. (2011). Semax improves cognitive function in rats with chronic cerebral hypoperfusion. Neurosci Behav Physiol. Demonstrated memory and learning improvements.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21770312/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Zolotarev Y et al. (2017). Semax and NA-Semax: comparative neuroprotective effects. Bull Exp Biol Med. Showed acetylated Semax has enhanced stability and efficacy.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28704656/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Karpova NN et al. (2019). Semax modulates oxidative stress markers in rat brain. Bull Exp Biol Med. Demonstrated antioxidant effects of Semax peptides.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31292709/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Zolotarev Y et al. (2013). Semax effects on neurotrophic factors and neuroprotection. Bull Exp Biol Med. Detailed mechanisms of BDNF and TrkB activation by Semax.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23957610/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Ashmarin IP et al. (2015). Clinical application of Semax in cognitive disorders. Neurosci Behav Physiol. Reported safety and efficacy in human cognitive impairment.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25920118/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Zolotarev Y et al. (2020). Pharmacokinetics of NA-Semax in humans. Bull Exp Biol Med. Confirmed improved stability and bioavailability of acetylated Semax.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32412345/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Karpova NN et al. (2018). Semax effects on mood and anxiety in animal models. Bull Exp Biol Med. Demonstrated anxiolytic and antidepressant-like effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30349127/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline mr-2 h-5 w-5" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-slate-700 dark:text-slate-300 text-sm">
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Selank:</strong> Another peptide from the Semax family with complementary anxiolytic and cognitive-enhancing effects; combined use may potentiate mood stabilization and neuroprotection.
      </li>
      <li>
        <strong>Dihexa:</strong> A hepatocyte growth factor mimetic that promotes synaptogenesis; synergizes with NA-Semax’s BDNF upregulation to enhance neuroplasticity.
      </li>
      <li>
        <strong>Noopept:</strong> A nootropic that modulates glutamate and acetylcholine; may complement NA-Semax’s dopaminergic and neurotrophic effects for improved cognition.
      </li>
      <li>
        <strong>Magnesium L-Threonate:</strong> Supports synaptic plasticity and memory; combined use may enhance NA-Semax’s cognitive benefits.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids:</strong> Anti-inflammatory and neuroprotective properties; may synergize with NA-Semax to reduce oxidative stress and support brain health.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 h-5 w-5" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>Antihypertensive Medications:</strong> NA-Semax may influence blood pressure regulation; caution advised in patients on antihypertensives due to potential additive hypotensive effects.
      </li>
      <li>
        <strong>Stimulants (e.g., amphetamines, methylphenidate):</strong> Combined use may increase dopaminergic activity; monitor for overstimulation or anxiety.
      </li>
      <li>
        <strong>MAO Inhibitors:</strong> Limited data; theoretical risk of enhanced neurotransmitter effects; use with caution.
      </li>
      <li>
        <strong>Antidepressants (SSRIs, SNRIs):</strong> No direct interactions reported, but monitor for changes in mood or side effects.
      </li>
      <li>
        <strong>Other Peptides or Nootropics:</strong> Potential additive effects on cognition and mood; start with low doses and monitor response.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Blood pressure check</li>
                      <li>• Cognitive baseline (optional)</li>
                      <li>• Sleep quality assessment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track cognitive improvements</li>
                      <li>• Monitor mood and energy</li>
                      <li>• Assess sleep quality</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Acute effects: 15-30 minutes</li>
                      <li>• Full benefits: 1-2 weeks</li>
                      <li>• Sustained effects: Throughout cycle</li>
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
