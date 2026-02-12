import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideCerebrolysin() {
  usePageTitle("Cerebrolysin - Neuropeptide Complex for Brain Recovery", {
    description: "Comprehensive guide to Cerebrolysin neuropeptide complex for stroke recovery, traumatic brain injury, and cognitive enhancement."
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
          <Link href="/"><Button variant="ghost" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
            <PrintButton title="Cerebrolysin - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          </div></div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Cerebrolysin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Porcine Brain-Derived Neuropeptide Complex</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive/Neurorecovery</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">500+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">IV/IM Injection</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Cerebrolysin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Cerebrolysin is a porcine brain-derived peptide preparation containing low-molecular-weight neuropeptides and free amino acids. Developed in Austria, it has been used clinically for over 40 years, primarily in Europe and Asia, for the treatment of stroke, traumatic brain injury, and neurodegenerative diseases.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The preparation mimics the action of endogenous neurotrophic factors, promoting neuronal survival, neuroplasticity, and neurogenesis. Unlike single-molecule drugs, Cerebrolysin's complex composition provides multi-modal neuroprotection through multiple pathways simultaneously.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Cerebrolysin is particularly valued for its ability to cross the blood-brain barrier and directly influence brain tissue, making it effective for conditions where other treatments have limited efficacy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Stroke Recovery</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerates neurological and functional recovery post-stroke</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Traumatic Brain Injury</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes neural repair and cognitive recovery after TBI</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Alzheimer's Disease</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Slows cognitive decline and improves daily functioning</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Vascular Dementia</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves cognitive function in vascular cognitive impairment</p>
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
                      <h4 className="font-semibold mb-2">1. Neurotrophic Activity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Cerebrolysin contains peptides that mimic the effects of BDNF, NGF, and CNTF, promoting neuronal survival and synaptic plasticity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Neurogenesis Stimulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes the formation of new neurons in the hippocampus and other brain regions, supporting learning and memory.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Anti-Apoptotic Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Protects neurons from programmed cell death by modulating caspase activity and Bcl-2 family proteins.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Synaptic Plasticity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enhances long-term potentiation (LTP) and synaptic density, improving neural communication efficiency.</p>
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
                    <h4 className="font-semibold mb-2">CASTA Trial (Stroke)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Large randomized controlled trial showing significant improvement in motor function and daily activities in acute stroke patients treated with Cerebrolysin.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Alzheimer's Disease Trials</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Multiple studies demonstrate improvements in cognitive function, global clinical impression, and daily activities in mild to moderate Alzheimer's patients.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Traumatic Brain Injury</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials show accelerated recovery of consciousness and cognitive function in TBI patients receiving Cerebrolysin.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Acute Stroke</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 30-50ml IV daily</li>
                      <li>• Duration: 10-21 days</li>
                      <li>• Start within 24-72 hours of stroke</li>
                      <li>• Diluted in 100-250ml saline</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cognitive Enhancement</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 5-10ml IM daily</li>
                      <li>• Duration: 10-20 days</li>
                      <li>• Repeat cycles every 3-6 months</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Alzheimer's Disease</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 10-30ml IV daily</li>
                      <li>• Duration: 20 treatment days</li>
                      <li>• Repeat every 3-6 months</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Cerebrolysin has an excellent safety profile established over 40+ years of clinical use with millions of patients treated worldwide.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Injection site reactions</li>
                      <li>• Headache</li>
                      <li>• Dizziness</li>
                      <li>• Agitation (rare)</li>
                      <li>• Fever (rare)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Epilepsy or seizure disorders</li>
                      <li>• Severe renal impairment</li>
                      <li>• Allergy to porcine products</li>
                      <li>• Pregnancy and breastfeeding</li>
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
                      <li>• Neurological examination</li>
                      <li>• Cognitive function testing (MMSE, MoCA)</li>
                      <li>• Renal function tests</li>
                      <li>• EEG (if seizure history)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">During Treatment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Monitor for allergic reactions</li>
                      <li>• Track neurological improvements</li>
                      <li>• Assess for agitation or behavioral changes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Post-Treatment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Repeat cognitive testing</li>
                      <li>• Functional assessment</li>
                      <li>• Plan follow-up cycles</li>
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
