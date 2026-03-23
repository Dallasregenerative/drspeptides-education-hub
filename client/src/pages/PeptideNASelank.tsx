import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Brain, Beaker, Heart } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideNASelank() {
  usePageTitle("NA-Selank - Enhanced Anxiolytic Peptide", {
    description: "Comprehensive guide to NA-Selank for cognitive enhancement, anxiety reduction, and neuroprotection. Mechanisms, dosing, and research."
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
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">NA-Selank</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Enhanced Anxiolytic & Nootropic Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive Enhancement</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">150+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Intranasal/Subcutaneous</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is NA-Selank?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    NA-Selank (N-Acetyl Selank Amidate) is a synthetic derivative of the natural tuftsin-like peptide Selank. The addition of an N-Acetyl group and amidation at the C-terminus significantly enhances its stability, bioavailability, and duration of action compared to the original Selank peptide.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    It is primarily known for its potent anxiolytic (anti-anxiety) and nootropic (cognitive-enhancing) effects. Unlike traditional anxiolytics, NA-Selank does not cause sedation or cognitive impairment, making it a focus of research for anxiety disorders, stress reduction, and learning enhancement.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    By modulating key neurotransmitter systems and neurotrophic factors, NA-Selank helps to stabilize mood, improve mental clarity, and protect the brain from stress-related damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Anxiety & Stress Reduction</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Effectively reduces generalized anxiety and stress without sedation.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves memory formation, focus, and mental acuity.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects neurons and supports recovery from neurological stress.</p>
                    </div>
                    <div className="p-4 bg-sky-50 dark:bg-sky-950 rounded-lg">
                      <h4 className="font-semibold text-sky-900 dark:text-sky-100 mb-2">Mood Stabilization</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Balances neurotransmitter activity to promote a stable, positive mood.</p>
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
                      <h4 className="font-semibold mb-2">1. GABAergic System Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NA-Selank influences the GABA system, a primary inhibitory system in the brain, which helps to reduce neuronal excitability and promote a state of calm.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Monoamine Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">It modulates the levels and reuptake of key monoamine neurotransmitters like serotonin and dopamine, contributing to its anxiolytic and mood-lifting properties.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. BDNF Expression</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NA-Selank rapidly increases the expression of Brain-Derived Neurotrophic Factor (BDNF), a crucial protein for neurogenesis, synaptic plasticity, and long-term memory.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Enkephalin Stability</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">It inhibits enzymes that break down enkephalins, natural opioid peptides in the brain that regulate stress response and pain, leading to a more resilient state.</p>
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
                    <h4 className="font-semibold mb-2">Anxiolytic Effects in GAD</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies on Selank (the parent compound) have shown efficacy in treating Generalized Anxiety Disorder (GAD) comparable to benzodiazepines but without the sedative side effects. NA-Selank is believed to have superior potency.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cognitive Benefits in Healthy Subjects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research indicates that Selank can improve memory and cognitive processing speed under conditions of mental fatigue or stress. The enhanced bioavailability of NA-Selank suggests more pronounced effects.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neurorestorative Potential</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Due to its effect on BDNF, NA-Selank is being investigated for its potential to aid in recovery from neurological insults like stroke and to mitigate cognitive decline.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Intranasal Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 250-750 mcg (1-3 sprays)</li>
                      <li>• Frequency: 1-2 times daily</li>
                      <li>• Duration: 10-14 day cycles, followed by a break</li>
                      <li>• Administration: Spray into nasal passage, alternating nostrils.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Subcutaneous Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 250-500 mcg</li>
                      <li>• Frequency: Once daily</li>
                      <li>• Duration: 10-14 day cycles</li>
                      <li>• Administration: Subcutaneous injection in the abdomen.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Start with the lowest effective dose.</li>
                      <li>• Effects can be immediate but may build over several days.</li>
                      <li>• Store reconstituted peptide in the refrigerator.</li>
                      <li>• Cycling is recommended to maintain sensitivity.</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well-Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">NA-Selank has a high safety profile with minimal side effects reported in research, especially when compared to conventional anxiolytics.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Nasal irritation or dryness (intranasal use)</li>
                      <li>• Mild fatigue or lethargy at higher doses</li>
                      <li>• Occasional headache</li>
                      <li>• Injection site redness (subcutaneous use)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Long-term safety data is limited.</li>
                      <li>• Potential interactions with other psychoactive substances are not well studied.</li>
                      <li>• Not recommended for individuals with a history of psychosis.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring Guidelines</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Subjective anxiety and stress levels (e.g., GAD-7 scale).</li>
                      <li>• Baseline cognitive testing (e.g., memory, reaction time).</li>
                      <li>• Review of current medications and supplements.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track changes in mood, anxiety, and cognitive function.</li>
                      <li>• Monitor for any emergent side effects.</li>
                      <li>• Adjust dosage based on response and tolerance.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Acute anxiolytic effects: Within 30-60 minutes.</li>
                      <li>• Cognitive benefits: Noticeable within 3-5 days of consistent use.</li>
                      <li>• Mood stabilization: May take 1-2 weeks to become apparent.</li>
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
