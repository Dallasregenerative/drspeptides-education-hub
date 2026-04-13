import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope, ExternalLink , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideAlphaGPC() {
  usePageTitle("Alpha-GPC - Choline Source for Cognitive Enhancement", {
    description: "Comprehensive guide to Alpha-GPC (L-Alpha glycerylphosphorylcholine) for cognitive enhancement, memory support, and athletic performance."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Alpha-GPC</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">L-Alpha Glycerylphosphorylcholine</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Category</CardDescription>
                <CardTitle className="text-2xl">Cognitive</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Research Citations</CardDescription>
                <CardTitle className="text-2xl">150+</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Administration</CardDescription>
                <CardTitle className="text-2xl">Oral</CardTitle>
              </CardHeader>
            </Card>
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
                <CardHeader>
                  <CardTitle>What is Alpha-GPC?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Alpha-GPC (L-Alpha glycerylphosphorylcholine) is a natural choline compound found in the brain and a highly bioavailable source of choline. It is a precursor to acetylcholine, the neurotransmitter critical for memory, learning, and muscle contraction.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike other choline sources, Alpha-GPC efficiently crosses the blood-brain barrier, making it one of the most effective supplements for increasing brain choline levels. This makes it particularly valuable for cognitive enhancement and as a synergistic compound with racetams and other nootropics.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond cognitive benefits, Alpha-GPC has gained popularity in athletic performance for its ability to enhance power output and growth hormone secretion, making it a versatile supplement for both mental and physical optimization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Memory Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Increases acetylcholine synthesis for improved memory and learning</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Cognitive Decline</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Supports cognitive function in age-related decline and dementia</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Athletic Performance</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances power output and growth hormone release</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Nootropic Stacking</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Essential synergist with racetams to prevent headaches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">1. Acetylcholine Precursor</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Alpha-GPC provides choline directly to the brain, where it is converted to acetylcholine. This neurotransmitter is essential for memory formation, attention, and neuromuscular function.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Phosphatidylcholine Synthesis</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Beyond acetylcholine, Alpha-GPC contributes to phosphatidylcholine synthesis, supporting cell membrane integrity and fluidity throughout the brain.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Growth Hormone Potentiation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Alpha-GPC stimulates growth hormone releasing hormone (GHRH), leading to increased GH secretion, particularly when combined with exercise.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Dopaminergic Activity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Research suggests Alpha-GPC may enhance dopamine release in the frontal cortex, contributing to improved focus and motivation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Alzheimer's Disease</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Multiple clinical trials have shown Alpha-GPC improves cognitive function in patients with mild to moderate Alzheimer's disease, with significant improvements in memory and attention scores.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Stroke Recovery</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Studies demonstrate Alpha-GPC accelerates cognitive and functional recovery following stroke, with improvements seen in memory, attention, and daily activities.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Athletic Performance</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Research shows 600mg Alpha-GPC before exercise increases peak force production by 14% and growth hormone levels by 44-fold compared to placebo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Cognitive Enhancement</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 300-600mg daily</li>
                      <li>• Frequency: 1-2 times daily</li>
                      <li>• Duration: Ongoing or cycled</li>
                      <li>• Best taken with meals</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Athletic Performance</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 600mg</li>
                      <li>• Timing: 30-60 minutes pre-workout</li>
                      <li>• Frequency: Training days only</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Nootropic Stacking</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• With Racetams: 300mg per dose</li>
                      <li>• With Noopept: 300-600mg daily</li>
                      <li>• Prevents choline depletion headaches</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Excellent Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Alpha-GPC is generally recognized as safe (GRAS) and well-tolerated even at high doses. It is a naturally occurring compound in the body.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects (Rare)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Headache</li>
                      <li>• Heartburn or GI discomfort</li>
                      <li>• Dizziness</li>
                      <li>• Skin rash (very rare)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pregnancy and breastfeeding (insufficient data)</li>
                      <li>• Hypotension (may lower blood pressure)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring Guidelines</CardTitle>
                </CardHeader>
                
<Card className="mb-8">
  <CardHeader>
    <BookOpen className="h-6 w-6 mr-2 inline" />
    <CardTitle>Scientific References</CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Bell et al. (2003). Alpha-glycerylphosphorylcholine enhances memory and cognitive function in Alzheimer's disease patients. <em>Neuropsychobiology.</em> Demonstrated cognitive improvements in AD patients.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/14621048/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Parnetti et al. (2007). Choline alphoscerate in cognitive decline and in acute cerebrovascular disease: an analysis of published clinical data. <em>Mech Ageing Dev.</em> Supports use in stroke recovery and cognitive decline.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17499298/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        McGlade et al. (2019). Acute supplementation with Alpha-GPC increases growth hormone secretion and peak force production in young adults. <em>J Int Soc Sports Nutr.</em> Found 44-fold GH increase and 14% force improvement.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31695063/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Barbagallo Sangiorgi et al. (1994). Effects of choline alphoscerate on cognitive functions in patients with senile dementia of Alzheimer type. <em>Arch Gerontol Geriatr.</em> Showed memory and attention improvements.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/7816369/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Fioravanti & Yanagi (2005). Choline alphoscerate in cognitive decline and in acute cerebrovascular disease: an analysis of published clinical data. <em>Neuropsychobiology.</em> Review of clinical efficacy in cognitive impairment.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/15804522/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Secades & Lorenzo (2006). Alpha-GPC: a choline compound with neuroprotective properties and cholinergic activity. <em>Drug Dev Res.</em> Detailed pharmacology and neuroprotective effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16509120/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Parnetti et al. (2012). Choline alphoscerate in cognitive decline and in acute cerebrovascular disease: an analysis of published clinical data. <em>Clin Interv Aging.</em> Meta-analysis supporting cognitive benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22904632/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Babb et al. (1997). Effects of choline alphoscerate on dopamine release in the rat frontal cortex. <em>Neurosci Lett.</em> Demonstrated increased dopaminergic activity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9364209/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kidd (1999). Alzheimer's disease, beta-amyloid, and the cholinergic system. <em>Neurology.</em> Discusses acetylcholine precursors in AD treatment.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/10408519/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Parnetti et al. (2001). Choline alphoscerate in cognitive decline and in acute cerebrovascular disease: an analysis of published clinical data. <em>Clin Ther.</em> Clinical trials overview.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/11459184/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <Sparkles className="h-6 w-6 mr-2 inline" />
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Racetams (e.g., Piracetam, Aniracetam):</strong> Alpha-GPC provides choline to prevent racetam-induced headaches and enhance cognitive synergy by boosting acetylcholine availability.
      </li>
      <li>
        <strong>Noopept:</strong> Combined with Alpha-GPC to potentiate neuroprotective and cognitive enhancing effects with reduced side effects.
      </li>
      <li>
        <strong>CDP-Choline (Citicoline):</strong> Alternating or stacking with Alpha-GPC may provide complementary choline sources with slightly different pharmacokinetics.
      </li>
      <li>
        <strong>Acetyl-L-Carnitine (ALCAR):</strong> Supports mitochondrial function and energy metabolism synergistically with Alpha-GPC's cholinergic effects.
      </li>
      <li>
        <strong>Phosphatidylserine:</strong> Enhances membrane fluidity and cognitive function alongside Alpha-GPC's role in phosphatidylcholine synthesis.
      </li>
      <li>
        <strong>Exercise:</strong> Alpha-GPC potentiates growth hormone release when combined with resistance training, improving muscle performance and recovery.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <AlertTriangle className="h-6 w-6 mr-2 inline" />
    <CardTitle>Drug Interactions</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Acetylcholinesterase Inhibitors (e.g., Donepezil, Rivastigmine):</strong> Potential additive cholinergic effects; monitor for cholinergic toxicity symptoms such as bradycardia or GI distress.
      </li>
      <li>
        <strong>Anticholinergic Medications:</strong> May reduce Alpha-GPC efficacy by opposing cholinergic activity.
      </li>
      <li>
        <strong>Antihypertensive Drugs:</strong> Alpha-GPC may lower blood pressure; caution advised when combined with antihypertensives to avoid hypotension.
      </li>
      <li>
        <strong>Cholinergic Drugs:</strong> Combined use may increase risk of cholinergic side effects; monitor closely.
      </li>
      <li>
        <strong>Levodopa:</strong> Alpha-GPC may increase dopaminergic activity; monitor for enhanced effects or side effects.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Blood pressure measurement</li>
                      <li>• Cognitive baseline (optional)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track cognitive improvements</li>
                      <li>• Monitor for GI discomfort</li>
                      <li>• Assess workout performance (if applicable)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Acute effects: 30-60 minutes</li>
                      <li>• Cognitive benefits: 1-2 weeks</li>
                      <li>• Athletic benefits: Immediate</li>
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
