import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNASemax() {
  usePageTitle("NA-Semax - Enhanced Cognitive Peptide", {
    description: "Comprehensive guide to NA-Semax (N-Acetyl Semax) for enhanced cognitive function, BDNF modulation, and neuroprotection."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
          </div>
          <Link href="/"><Button variant="ghost" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
            <PrintButton title="N A Semax - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

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
            <TabsList className="grid w-full grid-cols-6">
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

      <footer className="border-t bg-slate-50 dark:bg-slate-900 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Peptide Education Hub. For educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
