import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideFisetin() {
  usePageTitle("Fisetin - Senolytic Flavonoid for Longevity", {
    description: "Comprehensive guide to Fisetin for senescent cell clearance, anti-aging, and neuroprotection. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Fisetin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Potent Senolytic Flavonoid</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity/Senolytic</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">400+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Fisetin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Fisetin is a naturally occurring flavonoid found in strawberries, apples, persimmons, onions, and cucumbers. It has emerged as one of the most potent senolytic compounds—substances that selectively eliminate senescent "zombie" cells that accumulate with age and contribute to inflammation and tissue dysfunction.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Senescent cells are damaged cells that have stopped dividing but refuse to die. They secrete inflammatory factors (SASP) that damage surrounding tissues and accelerate aging. Fisetin triggers apoptosis specifically in these cells while sparing healthy cells.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Research from the Mayo Clinic has shown fisetin to be the most effective senolytic among 10 flavonoids tested, extending healthspan and lifespan in animal models when administered even late in life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-rose-50 dark:bg-rose-950 rounded-lg">
                      <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">Senescent Cell Clearance</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Eliminates zombie cells that drive aging and inflammation</p>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
                      <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects against neurodegeneration and cognitive decline</p>
                    </div>
                    <div className="p-4 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-lg">
                      <h4 className="font-semibold text-fuchsia-900 dark:text-fuchsia-100 mb-2">Anti-Inflammatory</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces chronic inflammation and SASP factors</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Antioxidant</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Powerful free radical scavenging and oxidative stress reduction</p>
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
                      <h4 className="font-semibold mb-2">1. Senolytic Activity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Fisetin inhibits pro-survival pathways (PI3K/AKT, BCL-2 family) specifically in senescent cells, triggering apoptosis while sparing healthy cells.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. SASP Reduction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">By eliminating senescent cells, fisetin reduces the Senescence-Associated Secretory Phenotype—inflammatory cytokines that damage surrounding tissues.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Sirtuin Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates SIRT1 and other sirtuins, promoting longevity pathways similar to caloric restriction.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Nrf2 Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates the Nrf2 antioxidant pathway, enhancing cellular defenses against oxidative stress.</p>
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
                    <h4 className="font-semibold mb-2">Mayo Clinic Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research showed fisetin extended median and maximum lifespan in mice when given late in life, reducing senescent cell burden and improving tissue function.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Human Clinical Trials</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Ongoing trials are evaluating fisetin for frailty, osteoarthritis, and COVID-19 recovery. Early results suggest good tolerability and potential efficacy.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neuroprotection Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal studies demonstrate fisetin protects against Alzheimer's and Parkinson's disease models, reducing neuroinflammation and preserving cognitive function.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-rose-50 dark:bg-rose-950 rounded-lg">
                    <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">Senolytic Protocol (Intermittent)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 500-1500mg daily</li>
                      <li>• Duration: 2-3 consecutive days</li>
                      <li>• Frequency: Once monthly or quarterly</li>
                      <li>• Take with fat for absorption</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
                    <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Maintenance Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100-500mg daily</li>
                      <li>• Duration: Ongoing</li>
                      <li>• For antioxidant/neuroprotective benefits</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Liposomal forms may improve absorption</li>
                      <li>• Take with healthy fats (olive oil, avocado)</li>
                      <li>• Senolytic dosing should be intermittent, not daily</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Fisetin is a natural food component with a good safety profile. Human trials have shown tolerability at doses up to 20mg/kg.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild GI discomfort</li>
                      <li>• Headache</li>
                      <li>• Fatigue during senolytic dosing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May interact with blood thinners</li>
                      <li>• Pregnancy/breastfeeding: Avoid</li>
                      <li>• Post-surgery: Avoid for 2 weeks</li>
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
                      <li>• Inflammatory markers (CRP, IL-6)</li>
                      <li>• Complete blood count</li>
                      <li>• Liver function tests</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Post-Senolytic Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Monitor for fatigue (normal during clearance)</li>
                      <li>• Track inflammatory markers</li>
                      <li>• Assess energy and function</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Senescent cell clearance: 1-2 weeks post-dose</li>
                      <li>• Functional improvements: 2-4 weeks</li>
                      <li>• Sustained benefits: With periodic dosing</li>
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
