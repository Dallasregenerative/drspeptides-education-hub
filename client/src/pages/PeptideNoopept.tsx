import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope, FileText, Shield, ExternalLink, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNoopept() {
  usePageTitle("Noopept - Cognitive Enhancement Peptide", {
    description: "Comprehensive guide to Noopept cognitive enhancer. Mechanisms, dosing protocols, research, and clinical applications for memory and neuroprotection."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
          </div>
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
            <PrintButton title="Noopept - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          
          </div></div></div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Noopept</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">N-Phenylacetyl-L-prolylglycine Ethyl Ester</p>
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
                <CardTitle className="text-2xl">200+</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Administration</CardDescription>
                <CardTitle className="text-2xl">Oral/Sublingual</CardTitle>
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
                  <CardTitle>What is Noopept?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Noopept (N-phenylacetyl-L-prolylglycine ethyl ester) is a synthetic nootropic compound developed in Russia in the 1990s. It is a dipeptide-derived compound that is structurally similar to piracetam but is estimated to be 1,000 times more potent on a per-milligram basis.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike traditional racetams, Noopept works through multiple mechanisms including BDNF and NGF modulation, AMPA receptor sensitization, and antioxidant effects. This multi-modal action provides comprehensive cognitive enhancement and neuroprotection.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Noopept is particularly valued for its rapid onset of action (typically within 15-20 minutes) and its ability to enhance memory consolidation, learning capacity, and mental clarity without the stimulant-like side effects of other cognitive enhancers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Memory Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves memory consolidation and retrieval through NGF/BDNF modulation</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects against oxidative stress and excitotoxicity</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cognitive Decline</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">May slow age-related cognitive decline and neurodegeneration</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Focus & Clarity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances mental clarity and sustained attention</p>
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
                  <p className="text-slate-700 dark:text-slate-300">
                    Noopept exerts its cognitive-enhancing effects through multiple interconnected pathways:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">1. Neurotrophin Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Noopept increases the expression of both Brain-Derived Neurotrophic Factor (BDNF) and Nerve Growth Factor (NGF) in the hippocampus and cortex. These neurotrophins are essential for neuronal survival, synaptic plasticity, and memory formation.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. AMPA Receptor Sensitization</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        The compound enhances AMPA receptor-mediated glutamatergic transmission, improving synaptic signaling efficiency and long-term potentiation (LTP), the cellular basis of learning and memory.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Antioxidant Activity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Noopept demonstrates significant antioxidant properties, reducing oxidative stress markers and protecting neurons from free radical damage, particularly in conditions of ischemia or neurotoxicity.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Anti-inflammatory Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        The compound reduces neuroinflammation by modulating inflammatory cytokine expression, contributing to its neuroprotective profile.
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
                    <h4 className="font-semibold mb-2">Cognitive Enhancement in Healthy Adults</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Multiple studies have demonstrated Noopept's ability to improve memory consolidation, attention, and learning in healthy individuals. Effects are typically observed within 1-2 weeks of consistent use.
                    </p>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm flex items-center gap-1">
                      View Research <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neuroprotection in Cognitive Impairment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Russian clinical trials showed significant improvements in patients with mild cognitive impairment and early-stage dementia, with improvements in memory, attention, and daily functioning.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Stroke Recovery</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      Studies indicate Noopept may accelerate cognitive recovery following ischemic stroke by protecting surviving neurons and promoting neuroplasticity.
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
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 10-30mg daily</li>
                      <li>• Frequency: 1-3 times daily</li>
                      <li>• Duration: 1.5-3 months cycles</li>
                      <li>• Administration: Oral or sublingual</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cognitive Enhancement</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Start: 10mg twice daily</li>
                      <li>• Optimal: 20mg twice daily</li>
                      <li>• Maximum: 30mg three times daily</li>
                      <li>• Best taken with meals</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Sublingual administration provides faster onset</li>
                      <li>• Effects typically noticed within 15-20 minutes</li>
                      <li>• Cycle off for 1 month after 3 months of use</li>
                      <li>• Stack well with choline sources (Alpha-GPC)</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Noopept has an excellent safety profile with minimal side effects reported in clinical studies. Most users experience no adverse effects at recommended doses.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Headache (often due to choline depletion)</li>
                      <li>• Irritability at high doses</li>
                      <li>• Sleep disturbances if taken late in day</li>
                      <li>• Mild GI discomfort (rare)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pregnancy and breastfeeding</li>
                      <li>• Severe hypertension</li>
                      <li>• History of seizures</li>
                      <li>• Concurrent use of stimulants (caution)</li>
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
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Cognitive function testing (optional)</li>
                      <li>• Blood pressure measurement</li>
                      <li>• Sleep quality assessment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track cognitive improvements subjectively</li>
                      <li>• Monitor sleep quality</li>
                      <li>• Note any mood changes</li>
                      <li>• Assess for headaches (add choline if needed)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Acute effects: 15-20 minutes post-dose</li>
                      <li>• Full benefits: 1-2 weeks of consistent use</li>
                      <li>• Optimal results: 4-8 weeks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
