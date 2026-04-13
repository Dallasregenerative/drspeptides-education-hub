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

export default function PeptideGDF11() {
  usePageTitle("GDF-11 - Growth Differentiation Factor 11", {
    description: "Comprehensive guide to GDF-11 for rejuvenation, tissue regeneration, and anti-aging. Mechanisms, research, and clinical applications."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

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
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline mr-2 h-5 w-5 align-text-bottom" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Loffredo FS et al. (2013). Growth differentiation factor 11 is a circulating factor that reverses age-related cardiac hypertrophy. <i>Cell</i>. Demonstrated GDF-11 reverses cardiac hypertrophy in aged mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23415223/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Katsimpardi L et al. (2014). Vascular and neurogenic rejuvenation of the aging mouse brain by young systemic factors. <i>Science</i>. Showed GDF-11 promotes neurogenesis and vascular remodeling in aged brains.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25258099/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Sinha M et al. (2014). Restoring systemic GDF11 levels reverses age-related dysfunction in mouse skeletal muscle. <i>Science</i>. Found GDF-11 restores satellite cell function and muscle regeneration.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25258098/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Egerman MA et al. (2015). GDF11 increases with age and inhibits skeletal muscle regeneration. <i>Cell Metabolism</i>. Reported conflicting data showing GDF-11 may inhibit muscle regeneration.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25651177/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Smith SC et al. (2015). GDF11 does not rescue aging-related pathological hypertrophy. <i>Circulation Research</i>. Challenged earlier findings on cardiac benefits of GDF-11.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25651176/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Walker RG et al. (2016). Biochemical characterization of GDF11 and myostatin. <i>Scientific Reports</i>. Differentiated GDF-11 from myostatin and clarified receptor binding.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27306552/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Katsimpardi L, Lledo PM. (2018). Regulation of neurogenesis in the adult and aging brain by systemic factors. <i>Current Opinion in Neurobiology</i>. Reviewed systemic factors including GDF-11 in neurogenesis.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29396032/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Alipour F et al. (2020). GDF11 and aging: A controversial molecule. <i>Ageing Research Reviews</i>. Comprehensive review of GDF-11 biology and controversies.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31933168/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Katsimpardi L et al. (2021). Systemic rejuvenation of the aged brain by GDF11. <i>Nature Aging</i>. Confirmed rejuvenating effects of GDF-11 on aged brain vasculature and neurogenesis.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/34257837/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Egerman MA, Glass DJ. (2014). Signaling pathways controlling skeletal muscle mass. <i>Critical Reviews in Biochemistry and Molecular Biology</i>. Discussed TGF-β family members including GDF-11 in muscle regulation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24961738/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline mr-2 h-5 w-5 align-text-bottom" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Thymosin Beta-4:</strong> Enhances tissue repair and angiogenesis; may complement GDF-11's vascular and regenerative effects.
      </li>
      <li>
        <strong>BPC-157:</strong> Promotes healing and angiogenesis; synergistic for vascular and muscle regeneration.
      </li>
      <li>
        <strong>Epitalon:</strong> Telomerase activator that may synergize with GDF-11's anti-aging and regenerative properties.
      </li>
      <li>
        <strong>IGF-1 LR3:</strong> Supports muscle growth and repair; may counterbalance potential muscle inhibitory effects of GDF-11.
      </li>
      <li>
        <strong>Selank:</strong> Neuroprotective and cognitive enhancing; may augment GDF-11's neuroregenerative benefits.
      </li>
      <li>
        <strong>Peptides targeting TGF-β pathway modulation:</strong> Combining with agents that modulate TGF-β signaling may optimize therapeutic outcomes.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 h-5 w-5 align-text-bottom" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Immunosuppressants:</strong> GDF-11 modulates TGF-β pathways which may interact with immunosuppressive drugs, potentially altering immune responses.
      </li>
      <li>
        <strong>Anticancer agents:</strong> Since TGF-β signaling is involved in cancer biology, caution is advised when combining GDF-11 with chemotherapy or targeted cancer therapies.
      </li>
      <li>
        <strong>Myostatin inhibitors:</strong> Concurrent use with myostatin-blocking agents may have additive or unpredictable effects on muscle mass.
      </li>
      <li>
        <strong>Hormonal therapies:</strong> Potential interactions with anabolic steroids or growth hormone therapies require monitoring.
      </li>
      <li>
        <strong>Anticoagulants:</strong> Limited data, but vascular remodeling effects suggest monitoring when combined with blood thinners.
      </li>
    </ul>
  </CardContent>
</Card>

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
