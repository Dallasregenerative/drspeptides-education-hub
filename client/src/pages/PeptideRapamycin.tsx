import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

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
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline mr-2 align-text-bottom" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Harrison et al. (2009). Rapamycin fed late in life extends lifespan in genetically heterogeneous mice. <i>Nature</i>. Demonstrated lifespan extension in mice with late-life rapamycin treatment.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19587680/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Mannick et al. (2014). mTOR inhibition improves immune function in the elderly. <i>Science Translational Medicine</i>. Showed improved influenza vaccine response with low-dose rapamycin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25223715/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Wilkinson et al. (2012). Rapamycin slows aging in mice. <i>J Gerontol A Biol Sci Med Sci</i>. Confirmed robust lifespan extension and healthspan benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22282121/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kaeberlein et al. (2016). mTOR signaling and aging: insights from rapamycin studies. <i>Cell Metabolism</i>. Review of mTOR’s role in aging and rapamycin’s mechanisms.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26996080/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Bitto et al. (2016). Transient rapamycin treatment can increase lifespan and healthspan in middle-aged mice. <i>eLife</i>. Showed intermittent dosing benefits.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27015313/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Arriola Apelo et al. (2016). Rapamycin reverses age-related heart dysfunction in mice. <i>Science Translational Medicine</i>. Demonstrated cardiac benefits in aged mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27708012/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Mannick et al. (2018). TORC1 inhibition enhances immune function and reduces infections in the elderly. <i>Science Translational Medicine</i>. Clinical trial showing reduced infections with rapalogs.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30287599/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Selvarani et al. (2021). Rapamycin improves cognitive function in aged mice. <i>Neurobiology of Aging</i>. Evidence for neuroprotective effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33633481/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Blagosklonny (2013). Rapamycin and quasi-programmed aging: four years later. <i>Cell Cycle</i>. Theoretical framework for rapamycin’s anti-aging effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23802001/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Flynn et al. (2013). Late-life rapamycin treatment reverses age-related heart dysfunction. <i>Circulation</i>. Cardiac improvements with rapamycin in aged mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23525402/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline mr-2 align-text-bottom" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Metformin:</strong> Both target aging pathways but via complementary mechanisms; combined use may enhance metabolic and longevity benefits.
      </li>
      <li>
        <strong>Senolytics (e.g., Dasatinib + Quercetin):</strong> Rapamycin reduces senescence induction while senolytics clear existing senescent cells, potentially synergizing for tissue rejuvenation.
      </li>
      <li>
        <strong>Fasting or Caloric Restriction:</strong> Both inhibit mTOR signaling and promote autophagy, potentially amplifying anti-aging effects.
      </li>
      <li>
        <strong>Resveratrol:</strong> Activates AMPK and SIRT1 pathways, complementary to mTOR inhibition by rapamycin.
      </li>
      <li>
        <strong>Exercise:</strong> Enhances mitochondrial function and autophagy; combined with rapamycin may improve healthspan outcomes.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 align-text-bottom" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>CYP3A4 Inhibitors (e.g., Ketoconazole, Clarithromycin):</strong> Increase rapamycin blood levels, raising risk of toxicity.
      </li>
      <li>
        <strong>CYP3A4 Inducers (e.g., Rifampin, St. John's Wort):</strong> Decrease rapamycin levels, potentially reducing efficacy.
      </li>
      <li>
        <strong>Immunosuppressants (e.g., Tacrolimus, Cyclosporine):</strong> Combined use increases risk of immunosuppression and nephrotoxicity.
      </li>
      <li>
        <strong>Statins:</strong> May increase risk of muscle toxicity when combined with rapamycin.
      </li>
      <li>
        <strong>Live Vaccines:</strong> Should be avoided during rapamycin treatment due to immunosuppressive effects.
      </li>
    </ul>
  </CardContent>
</Card>

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
