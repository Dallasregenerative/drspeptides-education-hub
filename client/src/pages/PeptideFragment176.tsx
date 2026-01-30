import { Button } from "@/components/ui/button";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Flame, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideFragment176() {
  usePageTitle("Fragment 176-191 - HGH Fat Loss Fragment", {
    description: "Comprehensive guide to HGH Fragment 176-191 for targeted fat loss without GH side effects. Mechanisms, dosing, and research."
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
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl">
              <Flame className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Fragment 176-191</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">HGH Fat-Burning Fragment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Fat Loss</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">200+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Fragment 176-191?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Fragment 176-191 (also known as HGH Frag or AOD-9604) is a modified form of amino acids 176-191 of the human growth hormone (HGH) polypeptide. This specific region of HGH is responsible for its fat-burning properties without the growth-promoting or diabetogenic effects.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike full HGH, Fragment 176-191 does not compete for the GH receptor and does not cause hyperglycemia, insulin resistance, or acromegaly-like effects. It specifically targets adipose tissue, making it an attractive option for body recomposition.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The peptide works by mimicking the way natural growth hormone regulates fat metabolism, stimulating lipolysis (fat breakdown) and inhibiting lipogenesis (fat storage).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Targeted Fat Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Stimulates lipolysis specifically in adipose tissue</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Body Recomposition</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces fat while preserving lean mass</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Metabolic Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves fat oxidation and energy utilization</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Safe Alternative</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Fat loss benefits without full GH side effects</p>
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
                      <h4 className="font-semibold mb-2">1. Lipolysis Stimulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates beta-3 adrenergic receptors on adipocytes, triggering hormone-sensitive lipase and releasing stored fatty acids.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Lipogenesis Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces the activity of lipogenic enzymes, preventing new fat storage even during caloric surplus.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. No GH Receptor Binding</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Does not bind to the growth hormone receptor, avoiding IGF-1 elevation and associated side effects.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Glucose Neutral</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Unlike full HGH, does not impair glucose tolerance or cause insulin resistance.</p>
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
                    <h4 className="font-semibold mb-2">Obesity Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials with AOD-9604 (stabilized form) showed significant reductions in body fat in obese subjects over 12 weeks compared to placebo.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Safety Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research confirmed no effect on IGF-1 levels, glucose metabolism, or other GH-related parameters, supporting its safety profile.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mechanism Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">In vitro and animal studies demonstrated direct lipolytic action on adipocytes and inhibition of lipogenesis.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Standard Fat Loss Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 250-500mcg per injection</li>
                      <li>• Frequency: 1-2 times daily</li>
                      <li>• Timing: Morning and/or pre-workout</li>
                      <li>• Duration: 8-12 weeks</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Enhanced Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 500mcg twice daily</li>
                      <li>• Timing: Fasted morning + pre-workout</li>
                      <li>• Combine with caloric deficit</li>
                      <li>• Add cardio for enhanced results</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Inject subcutaneously near target fat</li>
                      <li>• Best on empty stomach</li>
                      <li>• Avoid eating 30 min post-injection</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Excellent Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Fragment 176-191 has a favorable safety profile due to its targeted action and lack of GH receptor binding.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Injection site reactions</li>
                      <li>• Mild headache</li>
                      <li>• Drowsiness</li>
                      <li>• Rare: hypoglycemia if fasted too long</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">What It Does NOT Cause</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• No water retention</li>
                      <li>• No insulin resistance</li>
                      <li>• No IGF-1 elevation</li>
                      <li>• No joint pain or carpal tunnel</li>
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
                      <li>• Body composition (DEXA ideal)</li>
                      <li>• Fasting glucose</li>
                      <li>• Lipid panel</li>
                      <li>• Waist circumference</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Weekly weight and measurements</li>
                      <li>• Progress photos</li>
                      <li>• Track energy levels</li>
                      <li>• Monitor appetite changes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Fat mobilization: 1-2 weeks</li>
                      <li>• Visible changes: 4-6 weeks</li>
                      <li>• Significant results: 8-12 weeks</li>
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
