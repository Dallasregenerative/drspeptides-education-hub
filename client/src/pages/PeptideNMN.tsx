import { Button } from "@/components/ui/button";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNMN() {
  usePageTitle("NMN - Nicotinamide Mononucleotide for Longevity", {
    description: "Comprehensive guide to NMN for NAD+ restoration, cellular energy, and anti-aging. Mechanisms, dosing protocols, and clinical research."
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
            <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">NMN</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Nicotinamide Mononucleotide - NAD+ Precursor</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">800+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral/Sublingual</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is NMN?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Nicotinamide Mononucleotide (NMN) is a nucleotide derived from ribose and nicotinamide. It serves as a direct precursor to NAD+ (Nicotinamide Adenine Dinucleotide), a critical coenzyme found in every cell of the body that is essential for energy metabolism, DNA repair, and cellular signaling.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    NAD+ levels decline significantly with age—by age 50, levels may be half of what they were at age 20. This decline is associated with many hallmarks of aging, including mitochondrial dysfunction, DNA damage accumulation, and metabolic disorders.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    NMN supplementation has emerged as a promising strategy to restore NAD+ levels and potentially reverse or slow aspects of cellular aging. Research by Dr. David Sinclair and others has brought significant attention to NMN as a longevity intervention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Cellular Energy</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Restores NAD+ for optimal mitochondrial function and ATP production</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">DNA Repair</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Supports PARP enzymes critical for DNA damage repair</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Sirtuin Activation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Activates longevity genes (SIRT1-7) for anti-aging effects</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Metabolic Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves insulin sensitivity and metabolic function</p>
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
                      <h4 className="font-semibold mb-2">1. NAD+ Biosynthesis</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NMN is converted to NAD+ via the enzyme NMNAT, rapidly increasing intracellular NAD+ levels and restoring cellular energy capacity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Sirtuin Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NAD+ is a required cofactor for sirtuins (SIRT1-7), which regulate metabolism, stress resistance, DNA repair, and longevity pathways.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. PARP Support</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NAD+ fuels PARP enzymes essential for DNA repair, preventing accumulation of DNA damage associated with aging and cancer.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Mitochondrial Function</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Restores mitochondrial NAD+ pools, improving oxidative phosphorylation and cellular energy production.</p>
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
                    <h4 className="font-semibold mb-2">Human Clinical Trials</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Multiple human trials demonstrate NMN safely increases NAD+ levels. Studies show improvements in muscle insulin sensitivity, aerobic capacity, and metabolic parameters in older adults.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Aging Reversal Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal studies show NMN reverses age-related decline in energy metabolism, muscle function, and cognitive performance, with some studies showing lifespan extension.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Benefits</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research indicates NMN improves vascular function, reduces arterial stiffness, and may protect against age-related cardiovascular decline.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 250-500mg daily</li>
                      <li>• Timing: Morning, before or with breakfast</li>
                      <li>• Duration: Ongoing (long-term supplementation)</li>
                      <li>• Form: Capsules, powder, or sublingual</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Advanced Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 500-1000mg daily</li>
                      <li>• Split dosing: 500mg AM, 500mg PM</li>
                      <li>• Consider sublingual for better absorption</li>
                      <li>• Combine with resveratrol for synergy</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Synergistic Combinations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Resveratrol: 500-1000mg (activates SIRT1)</li>
                      <li>• TMG: 500-1000mg (methyl donor support)</li>
                      <li>• Fisetin: 100-500mg (senolytic)</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Human clinical trials up to 1250mg/day show NMN is well-tolerated with no significant adverse effects. Long-term safety data continues to accumulate.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects (Rare)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild GI discomfort</li>
                      <li>• Flushing (usually transient)</li>
                      <li>• Headache</li>
                      <li>• Increased energy (may affect sleep if taken late)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Theoretical concern: May fuel cancer cell growth (no evidence in humans)</li>
                      <li>• Pregnancy/breastfeeding: Insufficient data</li>
                      <li>• Active cancer: Consult oncologist</li>
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
                      <li>• NAD+ levels (if available)</li>
                      <li>• Fasting glucose and HbA1c</li>
                      <li>• Lipid panel</li>
                      <li>• Energy and cognitive baseline</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track energy levels</li>
                      <li>• Monitor sleep quality</li>
                      <li>• Assess exercise performance</li>
                      <li>• Periodic metabolic panels</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• NAD+ increase: Within hours to days</li>
                      <li>• Subjective energy: 1-4 weeks</li>
                      <li>• Metabolic benefits: 2-3 months</li>
                      <li>• Longevity effects: Long-term</li>
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
