import { Button } from "@/components/ui/button";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function PeptideAlphaGPC() {
  usePageTitle("Alpha-GPC - Choline Source for Cognitive Enhancement", {
    description: "Comprehensive guide to Alpha-GPC (L-Alpha glycerylphosphorylcholine) for cognitive enhancement, memory support, and athletic performance."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

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

      <footer className="border-t bg-slate-50 dark:bg-slate-900 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Peptide Education Hub. For educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
