import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideHexarelin() {
  usePageTitle("Hexarelin - Growth Hormone Secretagogue", {
    description: "Comprehensive guide to Hexarelin for GH release, muscle growth, and recovery. Mechanisms, dosing protocols, and research."
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
            <PrintButton title="Hexarelin - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Hexarelin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Potent Growth Hormone Releasing Hexapeptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">GH Secretagogue</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">400+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Subcutaneous</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Hexarelin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Hexarelin is a synthetic hexapeptide growth hormone secretagogue (GHS) that stimulates the pituitary gland to release growth hormone. It is one of the most potent GHRPs (Growth Hormone Releasing Peptides), producing stronger GH pulses than GHRP-6 or GHRP-2.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike direct GH administration, hexarelin works by mimicking ghrelin and binding to the GHS receptor, triggering natural pulsatile GH release. This maintains the body's feedback mechanisms and produces a more physiological hormone profile.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond GH release, hexarelin has demonstrated cardioprotective properties, making it unique among GH secretagogues. Research shows it can protect cardiac tissue from ischemia-reperfusion injury through GH-independent mechanisms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">GH Optimization</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Potent stimulation of natural growth hormone release</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Muscle Growth</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhanced protein synthesis and lean mass gains</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cardioprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Unique cardiac protective effects independent of GH</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Recovery</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerated healing and tissue repair</p>
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
                      <h4 className="font-semibold mb-2">1. GHS Receptor Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Binds to the growth hormone secretagogue receptor (GHSR) in the pituitary, triggering GH release through calcium signaling.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Pulsatile GH Release</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Stimulates natural pulsatile GH secretion, maintaining physiological feedback and avoiding receptor desensitization.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Cardiac Protection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates cardiac GHSR and other pathways, protecting cardiomyocytes from ischemic damage through GH-independent mechanisms.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. IGF-1 Elevation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increased GH leads to hepatic IGF-1 production, mediating many of the anabolic and regenerative effects.</p>
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
                    <h4 className="font-semibold mb-2">GH Release Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research demonstrates hexarelin produces robust GH pulses, with peak levels 15-30 minutes post-injection. Effects are dose-dependent up to saturation.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardioprotection Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal and human studies show hexarelin protects against cardiac ischemia, improves cardiac function post-MI, and reduces infarct size.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Body Composition</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrate improvements in lean body mass and reductions in fat mass with chronic hexarelin administration.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Desensitization Note</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Unlike some GHRPs, hexarelin can cause receptor desensitization with continuous use, requiring cycling protocols.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100-200mcg per injection</li>
                      <li>• Frequency: 2-3 times daily</li>
                      <li>• Timing: Morning, post-workout, before bed</li>
                      <li>• Cycle: 8-12 weeks on, 4 weeks off</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Combination Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Hexarelin: 100mcg</li>
                      <li>• + Mod GRF (1-29): 100mcg</li>
                      <li>• Synergistic GH release</li>
                      <li>• 2-3 times daily</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Inject on empty stomach (no carbs 2hrs before)</li>
                      <li>• Cycling required to prevent desensitization</li>
                      <li>• Saturation dose ~100mcg/kg</li>
                      <li>• Store reconstituted peptide refrigerated</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Hexarelin has been studied in clinical trials with a favorable safety profile at therapeutic doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Increased hunger (ghrelin-like effect)</li>
                      <li>• Water retention</li>
                      <li>• Tingling/numbness (transient)</li>
                      <li>• Flushing</li>
                      <li>• Fatigue initially</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May increase cortisol and prolactin</li>
                      <li>• Desensitization with prolonged use</li>
                      <li>• Caution in diabetes (affects glucose)</li>
                      <li>• Avoid in active cancer</li>
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
                      <li>• IGF-1 levels</li>
                      <li>• Fasting glucose and HbA1c</li>
                      <li>• Prolactin levels</li>
                      <li>• Body composition</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track IGF-1 response</li>
                      <li>• Monitor glucose tolerance</li>
                      <li>• Assess body composition changes</li>
                      <li>• Watch for desensitization signs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• GH pulse: 15-30 minutes post-injection</li>
                      <li>• IGF-1 elevation: 1-2 weeks</li>
                      <li>• Body composition changes: 4-8 weeks</li>
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
