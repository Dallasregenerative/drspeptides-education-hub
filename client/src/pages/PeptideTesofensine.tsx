import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Scale, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideTesofensine() {
  usePageTitle("Tesofensine - Weight Management Compound", {
    description: "Comprehensive guide to Tesofensine for weight loss, appetite suppression, and metabolic enhancement. Mechanisms, dosing, and research."
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
            <PrintButton title="Tesofensine - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl">
              <Scale className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Tesofensine</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Triple Monoamine Reuptake Inhibitor for Weight Loss</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Weight Management</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">150+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Tesofensine?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Tesofensine is a novel triple monoamine reuptake inhibitor that was originally developed for Parkinson's disease and Alzheimer's disease. During clinical trials, researchers discovered its remarkable weight loss effects, leading to its repositioning as an anti-obesity medication.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    By inhibiting the reuptake of norepinephrine, dopamine, and serotonin, tesofensine reduces appetite, increases satiety, and may enhance thermogenesis. Phase II clinical trials demonstrated weight loss of 10-13% over 24 weeks—significantly more than other approved weight loss medications.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    While not yet FDA-approved, tesofensine is available through compounding pharmacies and has gained attention in the medical weight loss community for its efficacy in treatment-resistant obesity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Weight Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Significant weight reduction in clinical trials (10-13%)</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Appetite Suppression</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces hunger and increases feelings of fullness</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Metabolic Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">May increase resting metabolic rate and thermogenesis</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Mood Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Dopamine and serotonin effects may improve mood during dieting</p>
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
                      <h4 className="font-semibold mb-2">1. Norepinephrine Reuptake Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increases norepinephrine signaling, suppressing appetite and potentially increasing thermogenesis and fat oxidation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Dopamine Reuptake Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enhances dopamine signaling, reducing reward-seeking eating behavior and improving motivation during caloric restriction.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Serotonin Reuptake Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increases serotonin levels, promoting satiety and reducing carbohydrate cravings.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Hypothalamic Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Acts on appetite-regulating centers in the hypothalamus to reduce food intake.</p>
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
                    <h4 className="font-semibold mb-2">TIPO-1 Trial</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Phase II trial showed 0.5mg tesofensine produced 12.8% weight loss over 24 weeks compared to 2.2% with placebo. This exceeded results seen with other approved medications.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Metabolic Effects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrated improvements in waist circumference, blood lipids, and insulin sensitivity alongside weight loss.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Appetite Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research confirmed significant reductions in hunger ratings and increased satiety, with reduced caloric intake of approximately 25%.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Starting dose: 0.25mg daily</li>
                      <li>• Titrate to: 0.5mg daily after 2 weeks</li>
                      <li>• Maximum: 1.0mg daily (if needed)</li>
                      <li>• Timing: Morning (to avoid sleep issues)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Combination Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Often combined with other weight loss peptides</li>
                      <li>• Tesofensine + Semaglutide (synergistic)</li>
                      <li>• Lower doses may be effective in combination</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Requires physician supervision</li>
                      <li>• Not FDA-approved (investigational)</li>
                      <li>• Available through compounding pharmacies</li>
                      <li>• Combine with diet and exercise</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Cardiovascular Considerations</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Tesofensine can increase heart rate and blood pressure. Careful monitoring is required, especially in patients with cardiovascular risk factors.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dry mouth</li>
                      <li>• Insomnia</li>
                      <li>• Constipation</li>
                      <li>• Increased heart rate</li>
                      <li>• Headache</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Uncontrolled hypertension</li>
                      <li>• Cardiovascular disease</li>
                      <li>• History of stroke</li>
                      <li>• MAO inhibitor use</li>
                      <li>• Glaucoma</li>
                      <li>• Hyperthyroidism</li>
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
                      <li>• Blood pressure and heart rate</li>
                      <li>• ECG (if cardiovascular risk factors)</li>
                      <li>• Metabolic panel</li>
                      <li>• Body composition</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Weekly BP/HR initially</li>
                      <li>• Monthly weight and measurements</li>
                      <li>• Monitor for mood changes</li>
                      <li>• Sleep quality assessment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Appetite reduction: 1-2 weeks</li>
                      <li>• Measurable weight loss: 2-4 weeks</li>
                      <li>• Significant results: 12-24 weeks</li>
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
