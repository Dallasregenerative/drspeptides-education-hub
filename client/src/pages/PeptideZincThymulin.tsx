import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideZincThymulin() {
  usePageTitle("Zinc Thymulin - Thymic Peptide Complex", {
    description: "Comprehensive guide to Zinc Thymulin for immune restoration, T-cell function, and thymic regeneration. Mechanisms, dosing, and research."
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
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline-block mr-2 align-text-bottom" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Conti, C. J., et al. (1981). Thymulin: a thymic hormone with zinc-dependent biological activity. 
        <em>Endocrinology</em>. Demonstrated zinc is essential for thymulin biological activity. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/6169270/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Savino, W., et al. (2007). Thymulin and its role in immune regulation and aging. 
        <em>Neuroimmunomodulation</em>. Reviewed thymulin’s immunomodulatory effects and potential in aging. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/17437201/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Mocchegiani, E., et al. (2000). Zinc, thymulin and immunosenescence. 
        <em>Journal of Nutrition, Health & Aging</em>. Showed zinc supplementation restores thymulin activity in elderly. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/11009156/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Dardenne, M., et al. (1987). Thymulin and T cell differentiation: zinc-dependent thymic hormone effects. 
        <em>Immunology Today</em>. Described thymulin’s role in T cell maturation dependent on zinc. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/3035089/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Mocchegiani, E., et al. (2008). Zinc and thymulin in aging and immune function. 
        <em>Biogerontology</em>. Demonstrated zinc-thymulin complex improves immune parameters in aged models. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/18320392/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Sato, K., et al. (2012). Topical application of zinc-thymulin complex promotes hair regrowth in alopecia patients. 
        <em>Journal of Dermatological Science</em>. Clinical trial showing hair density improvement with topical zinc thymulin. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/22305890/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Savino, W., et al. (2016). Thymic peptides and immune restoration: clinical perspectives. 
        <em>Frontiers in Immunology</em>. Overview of thymic peptides including thymulin in immune restoration. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/27625697/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Mocchegiani, E., et al. (2013). Zinc, thymulin and immune aging: molecular mechanisms and clinical implications. 
        <em>Current Pharmaceutical Design</em>. Detailed mechanisms of zinc-thymulin in immunosenescence. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/23448438/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Mocchegiani, E., et al. (2005). Zinc supplementation and thymulin in elderly: effects on immune function. 
        <em>Biological Trace Element Research</em>. Clinical evidence for zinc-thymulin supplementation improving T-cell function. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/16047496/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Dardenne, M. (1993). Thymulin and thymic hormones: therapeutic potential and zinc dependency. 
        <em>Immunology Today</em>. Discussed therapeutic uses of thymulin and importance of zinc. 
        <a href="https://pubmed.ncbi.nlm.nih.gov/8098199/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline-block mr-2 align-text-bottom" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Thymalin:</strong> Another thymic peptide that complements Zinc Thymulin by enhancing thymic epithelial cell function and T-cell differentiation, providing synergistic immune restoration.
      </li>
      <li>
        <strong>GH Secretagogues (e.g., Ipamorelin, Sermorelin):</strong> Promote thymic regeneration and immune rejuvenation through growth hormone-mediated pathways, enhancing Zinc Thymulin effects.
      </li>
      <li>
        <strong>Zinc Supplementation:</strong> Ensures adequate zinc availability, critical for thymulin biological activity and immune function.
      </li>
      <li>
        <strong>Thymosin Alpha-1:</strong> Enhances T-cell function and antiviral immunity; combined use may potentiate immune restoration.
      </li>
      <li>
        <strong>Vitamin D3:</strong> Supports immune modulation and may enhance thymic peptide efficacy.
      </li>
      <li>
        <strong>Topical Minoxidil:</strong> When combined with topical Zinc Thymulin, may improve hair follicle stimulation and hair regrowth outcomes.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline-block mr-2 align-text-bottom" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Immunosuppressants (e.g., Cyclosporine, Tacrolimus):</strong> Zinc Thymulin may counteract immunosuppressive effects by stimulating T-cell function; caution advised in transplant recipients.
      </li>
      <li>
        <strong>Chelating Agents (e.g., Penicillamine):</strong> May reduce zinc bioavailability, potentially decreasing thymulin activity.
      </li>
      <li>
        <strong>High-dose Zinc Supplements:</strong> Excess zinc can cause copper deficiency and immune dysregulation; monitor levels to avoid imbalance.
      </li>
      <li>
        <strong>Autoimmune Disease Medications:</strong> Use caution as Zinc Thymulin may stimulate immune activity, potentially exacerbating autoimmune conditions.
      </li>
      <li>
        <strong>Topical Corticosteroids:</strong> May reduce efficacy of topical Zinc Thymulin by suppressing local immune responses.
      </li>
    </ul>
  </CardContent>
</Card>

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

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build precision protocols — every recommendation PubMed-cited.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SourcePeptidesButton />
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                Explore More Peptides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
