import { Button } from "@/components/ui/button";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideGDF11() {
  usePageTitle("GDF-11 - Growth Differentiation Factor 11", {
    description: "Comprehensive guide to GDF-11 for rejuvenation, tissue regeneration, and anti-aging. Mechanisms, research, and clinical applications."
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
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">GDF-11</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Growth Differentiation Factor 11 - "Young Blood" Factor</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity/Regenerative</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">300+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is GDF-11?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Growth Differentiation Factor 11 (GDF-11) is a member of the TGF-β superfamily that gained widespread attention after Harvard researchers discovered it as a key factor in "young blood" that could reverse age-related changes in older mice through parabiosis experiments.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    GDF-11 levels decline significantly with age, and this decline correlates with reduced regenerative capacity, cardiac hypertrophy, and cognitive decline. Restoring GDF-11 levels in aged animals has shown remarkable rejuvenating effects on multiple organ systems.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    While some controversy exists regarding GDF-11's role (with some studies suggesting GDF-8/myostatin may also be involved), the therapeutic potential of GDF-11 for age-related conditions continues to be actively researched.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Cardiac Rejuvenation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reverses age-related cardiac hypertrophy and improves heart function</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Neuroregeneration</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes neurogenesis and improves cognitive function in aged brains</p>
                    </div>
                    <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-lg">
                      <h4 className="font-semibold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Muscle Regeneration</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Restores muscle stem cell function and repair capacity</p>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
                      <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Vascular Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves blood vessel function and cerebral blood flow</p>
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
                      <h4 className="font-semibold mb-2">1. TGF-β Receptor Signaling</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">GDF-11 binds to activin type II receptors and signals through SMAD2/3 pathways, influencing gene expression related to growth and differentiation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Stem Cell Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Rejuvenates aged stem cell populations in muscle, brain, and other tissues, restoring their regenerative capacity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Vascular Remodeling</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes angiogenesis and improves vascular function, enhancing blood flow to tissues including the brain.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Cardiac Remodeling</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces pathological cardiac hypertrophy by modulating cardiomyocyte size and extracellular matrix composition.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Summary</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Harvard Parabiosis Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Landmark research demonstrated that factors in young blood, including GDF-11, could reverse age-related cardiac hypertrophy and improve brain function in old mice.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neurogenesis Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">GDF-11 administration increased neurogenesis in the subventricular zone and improved olfactory discrimination in aged mice.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Muscle Regeneration</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies show GDF-11 restores satellite cell function in aged muscle, improving regenerative capacity after injury.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Note: Scientific Debate</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Some studies have questioned whether GDF-11 or the closely related GDF-8 (myostatin) is responsible for observed effects. Research is ongoing to clarify mechanisms.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Research-Based Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.1-0.5mg/kg (extrapolated from animal studies)</li>
                      <li>• Frequency: Daily or every other day</li>
                      <li>• Duration: 4-8 weeks</li>
                      <li>• Route: Subcutaneous injection</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Clinical Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Start with lower doses</li>
                      <li>• Monitor for side effects</li>
                      <li>• Consider cycling protocols</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Limited human clinical data</li>
                      <li>• Protocols based on animal research</li>
                      <li>• Requires physician supervision</li>
                      <li>• Quality sourcing critical</li>
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
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Limited Human Data</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">GDF-11 is primarily studied in animal models. Human safety data is limited, requiring caution and medical supervision.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Concerns</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May affect muscle mass (myostatin-like effects)</li>
                      <li>• Potential effects on bone metabolism</li>
                      <li>• Unknown long-term effects</li>
                      <li>• Injection site reactions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Active cancer (TGF-β pathway involvement)</li>
                      <li>• Pregnancy and breastfeeding</li>
                      <li>• Severe cachexia or muscle wasting</li>
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
                      <li>• Cardiac function (echocardiogram)</li>
                      <li>• Muscle mass assessment</li>
                      <li>• Cognitive baseline testing</li>
                      <li>• Complete metabolic panel</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track energy and vitality</li>
                      <li>• Monitor muscle mass</li>
                      <li>• Assess cognitive function</li>
                      <li>• Periodic cardiac assessment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Subjective effects: 2-4 weeks</li>
                      <li>• Measurable changes: 4-8 weeks</li>
                      <li>• Optimal benefits: 8-12 weeks</li>
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
