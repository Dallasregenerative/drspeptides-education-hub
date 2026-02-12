import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptidePterostilbene() {
  usePageTitle("Pterostilbene - Enhanced Resveratrol Analog", {
    description: "Comprehensive guide to Pterostilbene for longevity, cognitive health, and metabolic support. Superior bioavailability compared to resveratrol."
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
            <PrintButton title="Pterostilbene - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          </div></div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Pterostilbene</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Methylated Resveratrol with Superior Bioavailability</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">800+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Pterostilbene?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Pterostilbene is a naturally occurring stilbenoid found in blueberries, grapes, and certain tree barks. It is structurally similar to resveratrol but has two methoxy groups instead of hydroxyl groups, making it significantly more lipophilic and bioavailable.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    With approximately 4x better oral bioavailability than resveratrol and a longer half-life (105 minutes vs 14 minutes), pterostilbene achieves higher and more sustained tissue concentrations. This makes it potentially more effective for the same mechanisms of action.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Like resveratrol, pterostilbene activates SIRT1 and AMPK, but its enhanced bioavailability means these effects are more pronounced at lower doses. It also crosses the blood-brain barrier more effectively, making it particularly interesting for cognitive applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Cognitive Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Superior BBB penetration for neuroprotection</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Longevity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">SIRT1 activation with better bioavailability</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Metabolic Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves lipid profiles and glucose metabolism</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Antioxidant</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Potent free radical scavenging activity</p>
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
                      <h4 className="font-semibold mb-2">1. Enhanced SIRT1 Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates SIRT1 more effectively than resveratrol due to higher tissue concentrations and longer half-life.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. AMPK Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Potently activates AMPK, improving mitochondrial function, fat oxidation, and cellular energy homeostasis.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Blood-Brain Barrier Penetration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Lipophilic structure allows efficient CNS penetration, providing direct neuroprotective effects.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. PPARα Agonism</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates PPARα, improving lipid metabolism and reducing triglycerides.</p>
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
                    <h4 className="font-semibold mb-2">Cognitive Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials show improved working memory and cognitive flexibility in older adults with pterostilbene supplementation.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Effects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Human studies demonstrate reductions in blood pressure and improvements in lipid profiles, particularly LDL cholesterol.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Bioavailability Comparison</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Pharmacokinetic studies confirm 80% oral bioavailability for pterostilbene vs ~20% for resveratrol, with 4x longer half-life.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 50-150mg daily</li>
                      <li>• Timing: With or without food</li>
                      <li>• Duration: Ongoing</li>
                      <li>• Lower doses needed vs resveratrol</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cognitive Focus Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100-250mg daily</li>
                      <li>• Morning dosing preferred</li>
                      <li>• Combine with omega-3s</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Synergistic Combinations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• + NMN (NAD+ optimization)</li>
                      <li>• + Resveratrol (complementary effects)</li>
                      <li>• + Quercetin (senolytic stack)</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Pterostilbene has GRAS (Generally Recognized as Safe) status and is well-tolerated in clinical trials up to 250mg/day.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild GI discomfort (rare)</li>
                      <li>• Possible LDL increase at high doses</li>
                      <li>• Headache (uncommon)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May affect drug metabolism (CYP enzymes)</li>
                      <li>• Monitor LDL at doses greater than 100mg</li>
                      <li>• Caution with blood thinners</li>
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
                      <li>• Lipid panel (especially LDL)</li>
                      <li>• Cognitive baseline testing</li>
                      <li>• Blood pressure</li>
                      <li>• Fasting glucose</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Lipid panel at 3 months</li>
                      <li>• Track cognitive function</li>
                      <li>• Monitor energy and wellbeing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Antioxidant effects: Immediate</li>
                      <li>• Cognitive benefits: 4-8 weeks</li>
                      <li>• Metabolic improvements: 8-12 weeks</li>
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
