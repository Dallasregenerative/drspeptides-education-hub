import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideRapamycin() {
  usePageTitle("Rapamycin - mTOR Inhibitor", {
    description: "Comprehensive guide to Rapamycin for longevity, autophagy enhancement, and healthspan extension. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Rapamycin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">mTOR Inhibitor & Longevity Compound</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">25,000+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Rapamycin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Rapamycin (also known as Sirolimus) is a macrolide compound originally discovered in soil bacteria from Easter Island (Rapa Nui). Initially developed as an antifungal, it was later found to have immunosuppressive properties and is now FDA-approved for preventing organ transplant rejection.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    In the longevity field, rapamycin has emerged as one of the most promising interventions. It is the only compound consistently shown to extend lifespan across multiple species—from yeast to mice—and is now being studied for human longevity applications.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Rapamycin works by inhibiting mTOR (mechanistic Target of Rapamycin), a master regulator of cell growth and metabolism. By suppressing mTOR, rapamycin mimics aspects of caloric restriction and enhances autophagy—the cellular recycling process that declines with age.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Longevity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Extends lifespan in multiple species</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Autophagy Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes cellular recycling and cleanup</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Immunomodulation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Paradoxically improves immune function at low doses</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Cancer Prevention</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces cancer incidence in animal models</p>
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
                      <h4 className="font-semibold mb-2">1. mTORC1 Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Rapamycin binds to FKBP12, and this complex inhibits mTORC1, reducing protein synthesis and cell growth while enhancing autophagy.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Autophagy Induction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">mTOR inhibition activates autophagy, allowing cells to clear damaged proteins, dysfunctional mitochondria, and other cellular debris.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Senescence Reduction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces the conversion of quiescent cells to senescent cells, limiting accumulation of zombie cells with age.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Stem Cell Preservation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Maintains stem cell function and regenerative capacity by preventing stem cell exhaustion.</p>
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
                    <h4 className="font-semibold mb-2">ITP Mouse Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">The Interventions Testing Program showed rapamycin extends mouse lifespan by 9-14%, even when started late in life. This is the most robust lifespan extension by any drug.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">PEARL Trial (Elderly Immune Function)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Low-dose rapamycin (0.5mg daily or 5mg weekly) improved immune response to influenza vaccination in elderly subjects by 20%.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Dog Aging Project</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Ongoing studies in companion dogs show improved cardiac function and potential lifespan extension with low-dose rapamycin.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Human Longevity Trials</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Multiple clinical trials are underway studying rapamycin for age-related conditions including cognitive decline, frailty, and immune aging.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Prescription Required</h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200">Rapamycin is a prescription medication. Longevity use is off-label and should be supervised by a knowledgeable physician.</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Intermittent Low-Dose Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 3-6mg once weekly</li>
                      <li>• Timing: Same day each week</li>
                      <li>• Duration: Ongoing with monitoring</li>
                      <li>• Take with or without food</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Conservative Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 1-3mg once weekly</li>
                      <li>• Or: 5mg every 2 weeks</li>
                      <li>• Lower risk of side effects</li>
                      <li>• Good for initial trial</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Cycling Approach</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• 8 weeks on, 4 weeks off</li>
                      <li>• Allows immune recovery</li>
                      <li>• May reduce side effects</li>
                      <li>• Popular among longevity practitioners</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Intermittent Dosing Safety</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Low-dose intermittent rapamycin appears well-tolerated in studies, with fewer side effects than daily immunosuppressive dosing.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mouth sores (aphthous ulcers)</li>
                      <li>• Lipid changes (increased LDL, triglycerides)</li>
                      <li>• Glucose intolerance</li>
                      <li>• Delayed wound healing</li>
                      <li>• Increased infection risk (high doses)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Active infections</li>
                      <li>• Planned surgery</li>
                      <li>• Severe immunocompromise</li>
                      <li>• Pregnancy/breastfeeding</li>
                      <li>• Uncontrolled diabetes</li>
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
                      <li>• Lipid panel</li>
                      <li>• Fasting glucose and HbA1c</li>
                      <li>• Liver function tests</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring (Every 3-6 months)</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Lipid panel (watch for increases)</li>
                      <li>• Fasting glucose</li>
                      <li>• CBC with differential</li>
                      <li>• Oral examination for ulcers</li>
                      <li>• Rapamycin blood levels (optional)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Autophagy activation: Within hours</li>
                      <li>• Immune modulation: 4-8 weeks</li>
                      <li>• Metabolic effects: 2-3 months</li>
                      <li>• Longevity benefits: Long-term</li>
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
