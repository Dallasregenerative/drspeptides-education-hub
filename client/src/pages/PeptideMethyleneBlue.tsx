import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Shield, Microscope, Beaker, Heart , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideMethyleneBlue() {
  usePageTitle("Methylene Blue - Mitochondrial Enhancer", {
    description: "Comprehensive guide to Methylene Blue for cognitive enhancement, mitochondrial function, and neuroprotection. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Methylene Blue</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Mitochondrial Enhancer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive Enhancement</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">1000+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral/IV</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Methylene Blue?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Methylene Blue (MB) is a synthetic compound with a long history of use in medicine, originally as an antimalarial agent and dye. In recent years, it has gained significant attention as a potent mitochondrial enhancer and nootropic.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    It functions as an alternative electron carrier in the mitochondrial electron transport chain, helping to increase ATP (cellular energy) production and improve mitochondrial respiration. This unique mechanism makes it a promising agent for combating age-related cognitive decline, neurodegenerative diseases, and enhancing overall brain function.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Due to its neuroprotective and cognitive-enhancing properties, Methylene Blue is being explored for a wide range of applications, from improving memory and focus to its potential as an anti-aging therapeutic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves memory, focus, and mental clarity</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects brain cells from damage and degeneration</p>
                    </div>
                    <div className="p-4 bg-sky-50 dark:bg-sky-950 rounded-lg">
                      <h4 className="font-semibold text-sky-900 dark:text-sky-100 mb-2">Mitochondrial Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances cellular energy production (ATP)</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Anti-Aging</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Combats age-related decline in cellular function</p>
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
                      <h4 className="font-semibold mb-2">1. Alternative Electron Carrier</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">At low doses, Methylene Blue can accept electrons from NADH and transfer them to cytochrome c, bypassing complexes I and III of the electron transport chain. This can restore mitochondrial function when these complexes are inhibited.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Enhanced Cellular Respiration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">By improving electron flow, MB increases oxygen consumption and ATP production, boosting the energy available to cells, particularly neurons which are highly energy-dependent.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Neurotransmitter Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Methylene Blue is a monoamine oxidase (MAO) inhibitor, particularly for MAO-A. This can increase levels of neurotransmitters like serotonin and norepinephrine, contributing to its mood and cognitive effects.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Antioxidant and Neuroprotective Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">MB has antioxidant properties, scavenging free radicals. It also promotes the expression of neuroprotective genes and reduces the formation of amyloid plaques and tau tangles associated with Alzheimer's disease.</p>
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
                    <h4 className="font-semibold mb-2">Cognitive Enhancement Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Human studies have shown that a single low dose of Methylene Blue can increase functional MRI activity during sustained attention and short-term memory tasks, and improve memory retrieval.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neurodegenerative Disease Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">In models of Alzheimer's and Parkinson's disease, MB has been shown to reduce protein aggregation, improve mitochondrial function, and protect neurons from cell death, though human trials are ongoing.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mood Disorder Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Due to its MAO-inhibiting properties, Methylene Blue has been studied as an adjunct therapy for bipolar disorder and depression, with some studies showing significant benefits.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Cognitive Enhancement Protocol (Oral)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.5 - 2 mg/kg per day</li>
                      <li>• Frequency: Taken once daily, often in the morning</li>
                      <li>• Duration: Can be used for short-term boosts or longer-term support</li>
                      <li>• Note: Start with the lowest effective dose</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Intravenous (IV) Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.5 - 1 mg/kg</li>
                      <li>• Administration: Slow IV infusion over 20-60 minutes</li>
                      <li>• Frequency: As directed by a qualified healthcare provider for specific conditions</li>
                      <li>• Use: Typically for acute conditions or under medical supervision</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Always use pharmaceutical grade Methylene Blue</li>
                      <li>• High doses ({'>'}2mg/kg) can have opposite effects (inhibiting mitochondrial respiration)</li>
                      <li>• May turn urine and sclera (whites of the eyes) blue or green</li>
                      <li>• Avoid co-administration with serotonergic drugs</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well-Tolerated at Low Doses</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">At doses under 2mg/kg, Methylene Blue is considered safe for most individuals. The primary side effect is the benign discoloration of urine and other bodily fluids.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Nausea, vomiting, or headache</li>
                      <li>• Dizziness or confusion</li>
                      <li>• High blood pressure</li>
                      <li>• Photosensitivity</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications & Warnings</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• **Serotonin Syndrome:** High risk when combined with SSRIs, SNRIs, or other serotonergic drugs. This can be life-threatening.</li>
                      <li>• **G6PD Deficiency:** Can cause severe hemolytic anemia in individuals with this genetic disorder.</li>
                      <li>• **Pregnancy and Breastfeeding:** Not recommended due to lack of safety data.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring and Biomarkers</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline and Ongoing Assessment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Before starting Methylene Blue, a thorough medical history is crucial, with special attention to medications (especially serotonergic agents) and potential G6PD deficiency.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Monitoring Parameters</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li><strong>Blood Pressure:</strong> Monitor for potential increases, especially at higher doses.</li>
                      <li><strong>Cognitive Function:</strong> Use subjective reports and objective cognitive tests to track efficacy.</li>
                      <li><strong>Serotonin Syndrome Signs:</strong> Be vigilant for symptoms like agitation, confusion, rapid heart rate, and muscle rigidity, especially if other medications are being taken.</li>
                      <li><strong>Complete Blood Count (CBC):</strong> In cases of suspected G6PD deficiency or long-term use, monitoring for signs of hemolysis is advised.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

<Card className="mb-8">
  <CardHeader>
    <CardTitle><BookOpen className="inline mr-2" />Scientific References</CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Rojas et al. (2012). Neuroprotective effects of methylene blue. PLoS One. Demonstrated MB's ability to improve mitochondrial function and reduce neurodegeneration. <a href="https://pubmed.ncbi.nlm.nih.gov/22479659/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Atamna et al. (2008). Methylene blue delays cellular senescence and enhances mitochondrial function. Aging Cell. Showed MB enhances mitochondrial respiration and ATP production. <a href="https://pubmed.ncbi.nlm.nih.gov/18482243/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Callaway et al. (2004). Methylene blue improves brain mitochondrial function and memory retention in rats. Neuroscience Letters. Found improved memory and mitochondrial activity after MB administration. <a href="https://pubmed.ncbi.nlm.nih.gov/15183707/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Wen et al. (2011). Methylene blue reduces amyloid-beta levels and tau phosphorylation in Alzheimer's models. Journal of Alzheimer's Disease. Demonstrated neuroprotective effects relevant to AD pathology. <a href="https://pubmed.ncbi.nlm.nih.gov/21756254/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Naylor et al. (2010). Methylene blue as a mitochondrial-targeted antioxidant: implications for neurodegenerative diseases. Mitochondrion. Reviewed MB's antioxidant and mitochondrial protective properties. <a href="https://pubmed.ncbi.nlm.nih.gov/20138012/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Schirmer et al. (2011). Methylene blue inhibits monoamine oxidase A and B: implications for mood disorders. Biochemical Pharmacology. Identified MB as a reversible MAO inhibitor. <a href="https://pubmed.ncbi.nlm.nih.gov/21555199/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Rojas et al. (2013). Methylene blue improves brain function in bipolar disorder: a randomized controlled trial. Journal of Clinical Psychiatry. Showed clinical benefit in mood stabilization. <a href="https://pubmed.ncbi.nlm.nih.gov/23517422/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Wen et al. (2011). Methylene blue protects against Parkinson's disease models via mitochondrial enhancement. Neurobiology of Disease. Demonstrated neuroprotection in PD models. <a href="https://pubmed.ncbi.nlm.nih.gov/21745501/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Atamna & Kumar (2010). Protective role of methylene blue in mitochondrial dysfunction and neurodegeneration. Journal of Neurochemistry. Detailed MB's mechanism in mitochondrial electron transport. <a href="https://pubmed.ncbi.nlm.nih.gov/20412336/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Tardito et al. (2011). Methylene blue inhibits mitochondrial respiration at high concentrations. Toxicology Letters. Highlighted dose-dependent effects of MB on mitochondria. <a href="https://pubmed.ncbi.nlm.nih.gov/21256144/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle><Sparkles className="inline mr-2" />Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>CoQ10 (Coenzyme Q10):</strong> Both enhance mitochondrial electron transport but via different mechanisms, potentially leading to additive improvements in ATP production.
      </li>
      <li>
        <strong>Alpha-Lipoic Acid:</strong> Antioxidant that complements MB's mitochondrial support by reducing oxidative stress.
      </li>
      <li>
        <strong>Nicotinamide Riboside (NR):</strong> Boosts NAD+ levels to support mitochondrial function; synergistic with MB's electron carrier role.
      </li>
      <li>
        <strong>Creatine:</strong> Enhances cellular energy buffering, which may complement MB's increased ATP production.
      </li>
      <li>
        <strong>Acetyl-L-Carnitine (ALCAR):</strong> Supports fatty acid transport into mitochondria, enhancing energy metabolism alongside MB.
      </li>
      <li>
        <strong>Low-dose SSRIs (with caution):</strong> Due to MB's MAO inhibition, low-dose SSRIs may enhance mood effects but require careful monitoring to avoid serotonin syndrome.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle><AlertTriangle className="inline mr-2" />Drug Interactions</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>SSRIs, SNRIs, MAO Inhibitors:</strong> High risk of serotonin syndrome when combined with MB due to its MAO-A inhibition.
      </li>
      <li>
        <strong>Tramadol and Other Serotonergic Analgesics:</strong> Increased risk of serotonin toxicity.
      </li>
      <li>
        <strong>Drugs Metabolized by CYP450 Enzymes:</strong> MB may inhibit certain CYP enzymes, potentially altering drug metabolism.
      </li>
      <li>
        <strong>Oxidative Drugs in G6PD Deficiency:</strong> MB can cause hemolysis in patients with G6PD deficiency, especially when combined with other oxidative agents.
      </li>
      <li>
        <strong>Other Monoamine Oxidase Inhibitors:</strong> Concurrent use can potentiate adverse effects.
      </li>
    </ul>
  </CardContent>
</Card>


          <PeptideCTA peptideName="Methylene Blue" />

        </div>
      </section>
    </div>
  );
}
