import { Button } from "@/components/ui/button";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideFOXO4DRI() {
  usePageTitle("FOXO4-DRI - Senolytic Peptide", {
    description: "Comprehensive guide to FOXO4-DRI for selective senescent cell elimination. Mechanisms, research, and longevity applications."
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
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">FOXO4-DRI</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Senolytic Cell-Penetrating Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity/Senolytic</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">100+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Subcutaneous/IV</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is FOXO4-DRI?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    FOXO4-DRI is a cell-penetrating peptide designed to selectively eliminate senescent cells—damaged cells that have stopped dividing but refuse to die. These "zombie cells" accumulate with age and secrete inflammatory factors (SASP) that damage surrounding tissues and accelerate aging.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Developed by researchers at Erasmus University Medical Center in the Netherlands, FOXO4-DRI works by disrupting the interaction between FOXO4 and p53 proteins. In senescent cells, FOXO4 sequesters p53 in the nucleus, preventing apoptosis. FOXO4-DRI competes for this binding, releasing p53 to trigger cell death.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The "DRI" stands for D-Retro-Inverso, meaning the peptide is made with D-amino acids in reverse order. This modification makes it resistant to proteolytic degradation, increasing its stability and half-life in the body.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Senescent Cell Clearance</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Selectively eliminates zombie cells</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Longevity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Extends healthspan by reducing cellular burden</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Tissue Rejuvenation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves tissue function by removing damaged cells</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Anti-Inflammatory</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces SASP-driven chronic inflammation</p>
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
                      <h4 className="font-semibold mb-2">1. FOXO4-p53 Disruption</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">FOXO4-DRI competes with endogenous FOXO4 for binding to p53, disrupting the complex that keeps senescent cells alive.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. p53 Release</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Once released from FOXO4 sequestration, p53 translocates to the cytoplasm and mitochondria, initiating apoptotic pathways.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Selective Targeting</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Normal cells have low FOXO4-p53 interaction, so FOXO4-DRI preferentially affects senescent cells with high levels of this complex.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. SASP Reduction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Elimination of senescent cells reduces the secretion of inflammatory cytokines, proteases, and growth factors that damage tissues.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Studies</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Original Mouse Study (2017)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Published in Cell, researchers showed FOXO4-DRI restored fitness, fur density, and renal function in aged mice. Treated mice showed improved healthspan markers.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Chemotherapy Recovery</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrated that FOXO4-DRI could clear senescent cells induced by chemotherapy, potentially reducing long-term side effects of cancer treatment.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Tissue-Specific Effects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research shows effects in liver, kidney, and skin tissues, with improvements in organ function and appearance following treatment.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Human Trials Status</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">As of 2026, no completed human clinical trials. The peptide remains in preclinical/early clinical development.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Experimental Compound</h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200">FOXO4-DRI is a research compound without established human dosing. These protocols are based on animal studies and early human experimentation.</p>
                  </div>
                  <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Research Protocol (Extrapolated)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 2-5mg/kg body weight</li>
                      <li>• Frequency: 3 times per week</li>
                      <li>• Duration: 3-4 weeks</li>
                      <li>• Route: Subcutaneous or IV</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cycling Approach</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Treatment phase: 3-4 weeks</li>
                      <li>• Rest phase: 2-3 months</li>
                      <li>• Repeat as needed</li>
                      <li>• Monitor senescence markers</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Synergistic Approaches</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• + Dasatinib/Quercetin (complementary senolytics)</li>
                      <li>• + Fisetin (additional senolytic)</li>
                      <li>• + NMN/NAD+ precursors (cellular support)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Limited Safety Data</h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200">Human safety data is limited. Animal studies show good tolerability, but long-term effects are unknown.</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Observed in Animal Studies</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• No significant toxicity at therapeutic doses</li>
                      <li>• Selective for senescent cells</li>
                      <li>• Normal cells largely unaffected</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Concerns</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Temporary flu-like symptoms</li>
                      <li>• Fatigue during treatment</li>
                      <li>• Unknown long-term effects</li>
                      <li>• Potential effects on wound healing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Active cancer (theoretical concern)</li>
                      <li>• Immunocompromised states</li>
                      <li>• Pregnancy/breastfeeding</li>
                      <li>• Recent surgery or wounds</li>
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
                      <li>• Complete blood count</li>
                      <li>• Comprehensive metabolic panel</li>
                      <li>• Inflammatory markers (CRP, IL-6)</li>
                      <li>• p16INK4a levels if available</li>
                      <li>• Organ function tests</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">During Treatment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Weekly blood counts</li>
                      <li>• Monitor energy and wellbeing</li>
                      <li>• Track any adverse effects</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Senescent cell clearance: 2-4 weeks</li>
                      <li>• Inflammatory marker reduction: 4-8 weeks</li>
                      <li>• Functional improvements: 1-3 months</li>
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
