import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Beaker, Syringe, Heart } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideThymalin() {
  usePageTitle("Thymalin - Thymic Peptide", {
    description: "Comprehensive guide to Thymalin for immune restoration, T-cell immunity, and anti-aging. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Thymalin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Thymic Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Immune</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">400+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">IM Injection</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Thymalin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Thymalin is a polypeptide extract derived from the thymus gland, first developed in Russia by Professor Vladimir Khavinson. It is a bioregulator designed to restore thymic function, which naturally declines with age (a process known as thymic involution).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    This decline in thymic activity leads to a weakened immune system, or immunosenescence, increasing vulnerability to infections, autoimmune conditions, and cancer. Thymalin works by replenishing the pool of active thymic peptides, thereby restoring T-cell immunity and rebalancing the immune system.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    It is considered a cornerstone of peptide-based immune restoration and has been extensively studied for its anti-aging and longevity-promoting effects. Its use is prevalent in Eastern Europe for a wide range of conditions related to immune dysfunction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Immune Restoration</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Restores T-cell populations and function in cases of immunodeficiency and aging.</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Anti-Aging & Longevity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Combats immunosenescence and has been shown in studies to extend lifespan.</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Cancer Adjuvant Therapy</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Helps restore immune function following chemotherapy and radiation.</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Chronic Infection Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances the body's ability to fight chronic viral and bacterial infections.</p>
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
                      <h4 className="font-semibold mb-2">1. T-Cell Differentiation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Thymalin promotes the maturation of progenitor cells into various T-lymphocyte subpopulations (T-helpers, T-killers, T-suppressors), normalizing their ratios.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Restoration of Thymic Function</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">It stimulates the activity of the thymus gland itself, encouraging the natural production of thymic hormones and enhancing the immune response.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Gene Expression Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">As a peptide bioregulator, Thymalin interacts with DNA to regulate the expression of genes involved in immune cell proliferation and function.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Cytokine Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">It helps to balance the production of pro-inflammatory and anti-inflammatory cytokines, preventing excessive inflammation while ensuring an effective immune response.</p>
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
                    <h4 className="font-semibold mb-2">Longevity and Aging Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Landmark long-term studies by Khavinson et al. demonstrated that regular courses of Thymalin in elderly patients led to a significant reduction in mortality (up to 2.1-fold) and a decreased incidence of acute respiratory diseases over 6-12 years.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Post-Chemotherapy Immune Recovery</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials have shown that Thymalin effectively restores lymphocyte counts and immune parameters in cancer patients undergoing radiation and chemotherapy, reducing treatment-related complications.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Infectious Diseases</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research indicates Thymalin's effectiveness in the complex treatment of various infectious diseases, including tuberculosis and severe viral infections like COVID-19, by correcting secondary immunodeficiency.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Standard Immune Restoration Cycle</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 10-20mg</li>
                      <li>• Frequency: Once daily</li>
                      <li>• Administration: Intramuscular (IM) injection</li>
                      <li>• Duration: 5-10 consecutive days</li>
                      <li>• Cycle Frequency: Cycles can be repeated every 3-6 months.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Prophylactic (Preventative) Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 5-10mg</li>
                      <li>• Frequency: Once daily</li>
                      <li>• Administration: Intramuscular (IM) injection</li>
                      <li>• Duration: 3-5 consecutive days</li>
                      <li>• Cycle Frequency: Often performed before seasonal changes (e.g., autumn/winter).</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Thymalin is reconstituted with 1-2ml of bacteriostatic water or saline.</li>
                      <li>• Injections are typically given in a large muscle (glute or thigh).</li>
                      <li>• Always consult a qualified healthcare provider for personalized dosing.</li>
                      <li>• Often used in combination with Epithalamin (pineal peptide) for synergistic anti-aging effects.</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">High Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Thymalin has been used clinically for over 40 years with an excellent safety record. As a natural polypeptide complex, it is well-tolerated by the body.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Allergic reactions are possible but extremely rare.</li>
                      <li>• Minor pain or redness at the injection site.</li>
                      <li>• No significant adverse effects have been reported in long-term clinical use.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Known hypersensitivity to the components.</li>
                      <li>• Should be used with caution during pregnancy (consult a physician).</li>
                      <li>• Not typically used in conditions of immune over-activation without medical supervision.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring & Lab Work</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    While Thymalin is very safe, monitoring key immune markers can help assess its efficacy and guide treatment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Baseline Labs</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Complete Blood Count (CBC) with Differential</li>
                        <li>Lymphocyte Subsets (CD3, CD4, CD8)</li>
                        <li>C-Reactive Protein (CRP)</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Follow-up Labs</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                        <li>Repeat labs 1-3 months after a cycle to assess changes in T-cell counts and ratios.</li>
                        <li>Monitor clinical symptoms (e.g., frequency of infections).</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

          <PeptideCTA>
            <SourcePeptidesButton />
          </PeptideCTA>

        </div>
      </section>
    </div>
  );
}
