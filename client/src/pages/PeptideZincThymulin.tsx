import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideZincThymulin() {
  usePageTitle("Zinc Thymulin - Thymic Peptide Complex", {
    description: "Comprehensive guide to Zinc Thymulin for immune restoration, T-cell function, and thymic regeneration. Mechanisms, dosing, and research."
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
            <PrintButton title="Zinc Thymulin - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          </div></div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Zinc Thymulin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Thymic Nonapeptide-Zinc Complex</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Immune</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">300+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Subcutaneous/Topical</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Zinc Thymulin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Zinc Thymulin (also known as Facteur Thymique Sérique or FTS) is a nonapeptide hormone naturally produced by the thymus gland. It requires zinc for biological activity, forming a zinc-peptide complex that is essential for T-cell maturation and immune function.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    As we age, thymic function declines dramatically (thymic involution), leading to reduced thymulin production and impaired T-cell immunity. This contributes to immunosenescence—the age-related decline in immune function that increases susceptibility to infections and cancer.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Zinc Thymulin supplementation aims to restore youthful immune function by providing the active form of this thymic hormone. It has shown promise in immune restoration, hair regrowth, and anti-aging applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Immune Restoration</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Restores T-cell function and thymic activity</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Anti-Aging</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reverses aspects of immunosenescence</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Hair Regrowth</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Topical application promotes hair follicle health</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Infection Resistance</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances defense against pathogens</p>
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
                      <h4 className="font-semibold mb-2">1. T-Cell Maturation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes differentiation of immature thymocytes into mature, functional T-cells capable of immune responses.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Thymic Regeneration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">May stimulate thymic epithelial cells, potentially reversing age-related thymic atrophy.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Zinc-Dependent Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Zinc binding is essential for biological activity; the complex interacts with specific receptors on immune cells.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Hair Follicle Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Topically, modulates local immune environment and growth factors in hair follicles, promoting anagen phase.</p>
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
                    <h4 className="font-semibold mb-2">Immune Function Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research in elderly and immunocompromised subjects shows thymulin can restore T-cell function and improve immune markers.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Hair Loss Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Topical zinc thymulin studies demonstrate significant improvements in hair density and thickness in alopecia patients.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Zinc Deficiency Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research confirms that zinc deficiency impairs thymulin activity, and supplementation restores function in deficient individuals.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Immune Support Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 1-5mcg subcutaneous</li>
                      <li>• Frequency: 2-3 times weekly</li>
                      <li>• Duration: 8-12 weeks</li>
                      <li>• Ensure adequate zinc status</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Hair Regrowth Protocol (Topical)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Concentration: 0.01-0.1%</li>
                      <li>• Application: Daily to scalp</li>
                      <li>• Duration: 6+ months</li>
                      <li>• Often combined with other agents</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Optimize zinc levels first</li>
                      <li>• Very low doses are effective</li>
                      <li>• Store properly (temperature sensitive)</li>
                      <li>• Combine with Thymalin for synergy</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">Zinc Thymulin is a naturally occurring hormone with minimal reported side effects at therapeutic doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Injection site reactions (rare)</li>
                      <li>• Mild flu-like symptoms initially</li>
                      <li>• Scalp irritation (topical)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Avoid in autoimmune conditions (may stimulate)</li>
                      <li>• Caution in organ transplant recipients</li>
                      <li>• Monitor zinc levels</li>
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
                      <li>• Zinc levels (serum and RBC)</li>
                      <li>• Complete blood count with differential</li>
                      <li>• T-cell subsets (CD4, CD8)</li>
                      <li>• Thymulin levels if available</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track immune markers</li>
                      <li>• Monitor infection frequency</li>
                      <li>• For hair: photo documentation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Immune marker changes: 4-8 weeks</li>
                      <li>• Clinical immune benefits: 8-12 weeks</li>
                      <li>• Hair regrowth: 3-6 months</li>
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
