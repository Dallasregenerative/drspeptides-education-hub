import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Flame, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideAdipotide() {
  usePageTitle("Adipotide (FTPP) - Targeted Fat Cell Apoptosis", {
    description: "Comprehensive guide to Adipotide for targeted fat loss through adipose tissue vascular disruption. Mechanisms, research, and safety considerations."
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
            <PrintButton title="Adipotide - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl">
              <Flame className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Adipotide (FTPP)</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Pro-Apoptotic Peptide for Fat Reduction</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Fat Loss</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">50+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Adipotide?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Adipotide (also known as FTPP - Fat-Targeted Pro-apoptotic Peptide) is a peptidomimetic compound developed at MD Anderson Cancer Center. It was originally designed as an anti-cancer agent but showed remarkable fat-reducing properties in primate studies.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike other fat loss compounds that work by increasing metabolism or reducing appetite, Adipotide works by targeting and destroying the blood vessels that supply white adipose tissue. This causes fat cells to undergo apoptosis (programmed cell death) due to lack of blood supply.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The peptide contains a targeting sequence that binds to prohibitin on the surface of blood vessels in fat tissue, coupled with a pro-apoptotic sequence that triggers cell death. This dual mechanism makes it highly specific for adipose tissue.
                  </p>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Research Compound</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Adipotide is an experimental research compound with significant safety concerns. It has not been approved for human use and requires careful medical supervision.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Targeted Fat Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Destroys adipose tissue blood supply</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Obesity Research</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Studied for severe obesity treatment</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Metabolic Research</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improved insulin sensitivity in studies</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Cancer Research</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Original development for tumor targeting</p>
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
                      <h4 className="font-semibold mb-2">1. Prohibitin Targeting</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The targeting sequence (CKGGRAKDC) binds specifically to prohibitin, a protein highly expressed on blood vessels in white adipose tissue.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Pro-Apoptotic Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The second sequence (GG-D(KLAKLAK)2) is a mitochondrial membrane-disrupting peptide that triggers apoptosis in targeted cells.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Vascular Disruption</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Destruction of blood vessels in adipose tissue cuts off nutrient supply, leading to fat cell death and tissue resorption.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Metabolic Improvements</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduction in visceral fat leads to improved insulin sensitivity and metabolic markers.</p>
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
                    <h4 className="font-semibold mb-2">Rhesus Monkey Study (2011)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Obese rhesus monkeys treated with Adipotide lost 11% body weight and 39% abdominal fat over 4 weeks. Improved insulin resistance was observed.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mechanism Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research confirmed specific targeting of adipose vasculature with minimal effects on other tissues when properly dosed.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Safety Concerns</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies noted dose-dependent kidney effects, including renal tubular necrosis at higher doses. This remains a significant concern for human use.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Experimental Only</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">These are research protocols only. Adipotide is not approved for human use and carries significant risks.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Research Protocol (Primate Studies)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.5-1mg/kg body weight</li>
                      <li>• Frequency: Daily injection</li>
                      <li>• Duration: 4 weeks</li>
                      <li>• Route: Subcutaneous</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Critical Requirements</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Extensive kidney function monitoring</li>
                      <li>• Adequate hydration essential</li>
                      <li>• Medical supervision mandatory</li>
                      <li>• Regular blood work required</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Significant Safety Concerns</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Adipotide has documented nephrotoxicity and is NOT approved for human use. Use only in controlled research settings.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Known Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Kidney damage (dose-dependent)</li>
                      <li>• Dehydration</li>
                      <li>• Fatigue</li>
                      <li>• Potential muscle loss</li>
                      <li>• Unknown long-term effects</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Any kidney disease</li>
                      <li>• Dehydration risk</li>
                      <li>• Concurrent nephrotoxic medications</li>
                      <li>• Pregnancy/breastfeeding</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring Guidelines</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Mandatory Monitoring</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Due to nephrotoxicity risk, extensive monitoring is absolutely required if used in research settings.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Required Tests</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• BUN and Creatinine (daily during use)</li>
                      <li>• Urinalysis</li>
                      <li>• GFR estimation</li>
                      <li>• Electrolytes</li>
                      <li>• Liver function tests</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Stop Immediately If</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Creatinine rises significantly</li>
                      <li>• Dark or reduced urine output</li>
                      <li>• Flank pain</li>
                      <li>• Signs of dehydration</li>
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
