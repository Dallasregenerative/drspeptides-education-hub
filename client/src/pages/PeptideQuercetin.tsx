import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideQuercetin() {
  usePageTitle("Quercetin - Senolytic Flavonoid", {
    description: "Comprehensive guide to Quercetin for senolytic therapy, immune support, and anti-inflammatory effects. Mechanisms, dosing, and research."
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
            <PrintButton title="Quercetin - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Quercetin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Senolytic Flavonoid with Broad Benefits</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity/Senolytic</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">8,000+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Quercetin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Quercetin is a plant flavonoid found abundantly in onions, apples, berries, and green tea. It is one of the most studied natural compounds with over 8,000 research publications documenting its antioxidant, anti-inflammatory, and senolytic properties.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    When combined with Dasatinib (D+Q protocol), quercetin becomes a powerful senolytic agent capable of selectively eliminating senescent cells. Even alone, quercetin provides significant health benefits through multiple mechanisms.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Quercetin also acts as a zinc ionophore, helping transport zinc into cells where it can inhibit viral replication—a property that gained attention during the COVID-19 pandemic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Senolytic Therapy</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Combined with Dasatinib for senescent cell clearance</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Anti-Inflammatory</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces chronic inflammation and allergic responses</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Immune Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Zinc ionophore activity and antiviral properties</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Cardiovascular Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Supports blood pressure and vascular function</p>
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
                      <p className="text-sm text-slate-600 dark:text-slate-400">Inhibits PI3K and serpine pathways in senescent cells, reducing their resistance to apoptosis. Most effective when combined with Dasatinib.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Zinc Ionophore</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Facilitates zinc transport across cell membranes, enhancing intracellular zinc levels that inhibit viral RNA polymerase.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. NF-κB Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Suppresses the master inflammatory transcription factor NF-κB, reducing production of inflammatory cytokines.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Mast Cell Stabilization</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Stabilizes mast cells and reduces histamine release, providing natural antihistamine effects.</p>
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
                    <h4 className="font-semibold mb-2">Senolytic Studies (D+Q)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Mayo Clinic research demonstrated Dasatinib + Quercetin reduces senescent cell burden and improves physical function in patients with diabetic kidney disease and idiopathic pulmonary fibrosis.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Benefits</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Meta-analyses show quercetin supplementation reduces blood pressure, particularly in hypertensive individuals, with doses of 500mg+ daily.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Immune Function</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrate reduced upper respiratory infections in athletes and improved immune markers in stressed populations.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Senolytic Protocol (D+Q)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Quercetin: 1000mg</li>
                      <li>• Dasatinib: 100mg</li>
                      <li>• Duration: 3 consecutive days</li>
                      <li>• Frequency: Monthly or quarterly</li>
                      <li>• Take with fat for absorption</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">General Health Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 500-1000mg daily</li>
                      <li>• Duration: Ongoing</li>
                      <li>• Best with vitamin C for stability</li>
                      <li>• Phytosomal forms improve absorption</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Immune Support</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Quercetin: 500-1000mg daily</li>
                      <li>• Zinc: 15-30mg daily</li>
                      <li>• Synergistic combination</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Quercetin is a natural food component with extensive safety data. Doses up to 1000mg daily are well-tolerated in most individuals.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Headache</li>
                      <li>• Tingling sensations</li>
                      <li>• GI upset at high doses</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Drug Interactions</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May inhibit CYP3A4 (drug metabolism)</li>
                      <li>• Caution with blood thinners</li>
                      <li>• May affect antibiotic absorption</li>
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
                      <li>• Blood pressure</li>
                      <li>• Complete blood count</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">For Senolytic Protocol</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Monitor for fatigue post-treatment</li>
                      <li>• Track inflammatory markers</li>
                      <li>• Assess functional improvements</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Anti-inflammatory effects: 1-2 weeks</li>
                      <li>• Senolytic benefits: 2-4 weeks post-treatment</li>
                      <li>• Cardiovascular benefits: 4-8 weeks</li>
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
