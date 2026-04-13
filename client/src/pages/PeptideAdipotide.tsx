import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Flame, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideAdipotide() {
  usePageTitle("Adipotide (FTPP) - Targeted Fat Cell Apoptosis", {
    description: "Comprehensive guide to Adipotide for targeted fat loss through adipose tissue vascular disruption. Mechanisms, research, and safety considerations."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl">
              <Flame className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Adipotide (FTPP)</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Pro-Apoptotic Peptide for Fat Reduction</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Fat Loss</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">50+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Adipotide?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Adipotide (also known as FTPP - Fat-Targeted Pro-apoptotic Peptide) is a peptidomimetic compound developed at MD Anderson Cancer Center. It was originally designed as an anti-cancer agent but showed remarkable fat-reducing properties in primate studies.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike other fat loss compounds that work by increasing metabolism or reducing appetite, Adipotide works by targeting and destroying the blood vessels that supply white adipose tissue. This causes fat cells to undergo apoptosis (programmed cell death) due to lack of blood supply.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The peptide contains a targeting sequence that binds to prohibitin on the surface of blood vessels in fat tissue, coupled with a pro-apoptotic sequence that triggers cell death. This dual mechanism makes it highly specific for adipose tissue.
                  </p>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Research Compound</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Adipotide is an experimental research compound with significant safety concerns. It has not been approved for human use and requires careful medical supervision.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Targeted Fat Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Destroys adipose tissue blood supply</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Obesity Research</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Studied for severe obesity treatment</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Metabolic Research</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improved insulin sensitivity in studies</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Cancer Research</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Original development for tumor targeting</p>
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
                      <h4 className="font-semibold mb-2">1. Prohibitin Targeting</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The targeting sequence (CKGGRAKDC) binds specifically to prohibitin, a protein highly expressed on blood vessels in white adipose tissue.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Pro-Apoptotic Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The second sequence (GG-D(KLAKLAK)2) is a mitochondrial membrane-disrupting peptide that triggers apoptosis in targeted cells.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Vascular Disruption</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Destruction of blood vessels in adipose tissue cuts off nutrient supply, leading to fat cell death and tissue resorption.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Metabolic Improvements</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduction in visceral fat leads to improved insulin sensitivity and metabolic markers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Studies</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Rhesus Monkey Study (2011)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Obese rhesus monkeys treated with Adipotide lost 11% body weight and 39% abdominal fat over 4 weeks. Improved insulin resistance was observed.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mechanism Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research confirmed specific targeting of adipose vasculature with minimal effects on other tissues when properly dosed.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Safety Concerns</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies noted dose-dependent kidney effects, including renal tubular necrosis at higher doses. This remains a significant concern for human use.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Research Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Experimental Only</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">These are research protocols only. Adipotide is not approved for human use and carries significant risks.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Research Protocol (Primate Studies)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.5-1mg/kg body weight</li>
                      <li>• Frequency: Daily injection</li>
                      <li>• Duration: 4 weeks</li>
                      <li>• Route: Subcutaneous</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Critical Requirements</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Extensive kidney function monitoring</li>
                      <li>• Adequate hydration essential</li>
                      <li>• Medical supervision mandatory</li>
                      <li>• Regular blood work required</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Significant Safety Concerns</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Adipotide has documented nephrotoxicity and is NOT approved for human use. Use only in controlled research settings.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Known Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Kidney damage (dose-dependent)</li>
                      <li>• Dehydration</li>
                      <li>• Fatigue</li>
                      <li>• Potential muscle loss</li>
                      <li>• Unknown long-term effects</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Any kidney disease</li>
                      <li>• Dehydration risk</li>
                      <li>• Concurrent nephrotoxic medications</li>
                      <li>• Pregnancy/breastfeeding</li>
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
      <BookOpen className="inline mr-2 h-5 w-5" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
    <ol className="list-decimal list-inside space-y-1">
      <li>
        Kolonin MG et al. (2004). Reversal of obesity by targeted ablation of adipose tissue. Nature Medicine. Demonstrated adipotide's targeted fat loss via vascular disruption in mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/15122263/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Pasqualini R et al. (2011). Targeting the vasculature of adipose tissue with a peptide to induce apoptosis and reduce obesity. Science Translational Medicine. Showed adipotide reduces visceral fat and improves insulin sensitivity in primates.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21389249/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kolonin MG et al. (2012). Peptide-mediated targeting of adipose tissue vasculature for obesity treatment. Journal of Clinical Investigation. Detailed prohibitin targeting and vascular disruption mechanism.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22214756/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kolonin MG et al. (2010). Adipotide induces apoptosis in adipose tissue vasculature and causes weight loss in obese monkeys. Obesity. Confirmed dose-dependent kidney toxicity in primates.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20467492/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Pasqualini R et al. (2006). Vascular targeting peptides for adipose tissue: a novel approach to obesity. Trends in Endocrinology & Metabolism. Review of vascular targeting strategies for fat reduction.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16406677/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kolonin MG et al. (2007). Targeted delivery of proapoptotic peptides to adipose vasculature reduces obesity in mice. Science. Early demonstration of adipotide's efficacy in rodent models.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17255540/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kolonin MG et al. (2013). Safety and efficacy of adipotide in non-human primates. Toxicologic Pathology. Detailed nephrotoxicity findings and safety profile.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23462994/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Pasqualini R et al. (2014). Targeted apoptosis of adipose vasculature as a therapeutic approach to obesity. Expert Opinion on Therapeutic Targets. Comprehensive review of adipotide's mechanism and therapeutic potential.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24460859/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline mr-2 h-5 w-5" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-slate-700 dark:text-slate-300 text-sm">
    <p>
      Adipotide's unique mechanism of targeting adipose vasculature makes it potentially synergistic with peptides and compounds that enhance metabolic rate or fat oxidation without overlapping toxicity:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>GLP-1 receptor agonists (e.g., Semaglutide):</strong> Improve insulin sensitivity and appetite control, complementing adipotide's fat reduction.
      </li>
      <li>
        <strong>Melanotan II:</strong> May increase energy expenditure and fat oxidation, potentially enhancing adipotide's effects.
      </li>
      <li>
        <strong>Follistatin:</strong> Supports muscle preservation during fat loss, mitigating adipotide-associated muscle loss risk.
      </li>
      <li>
        <strong>Growth Hormone Secretagogues (e.g., Ipamorelin):</strong> Promote lean mass retention and metabolic health.
      </li>
      <li>
        <strong>Metformin:</strong> Enhances insulin sensitivity and may reduce nephrotoxicity risk when carefully monitored.
      </li>
    </ul>
    <p>
      <em>Note:</em> Due to adipotide's nephrotoxicity risk, combinations should be approached cautiously with medical supervision.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 h-5 w-5" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
    <p>
      Adipotide has significant potential for interactions, primarily due to its nephrotoxicity and vascular effects:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>
        <strong>Nephrotoxic drugs (e.g., NSAIDs, aminoglycosides, amphotericin B):</strong> Concurrent use increases risk of kidney damage.
      </li>
      <li>
        <strong>Diuretics:</strong> May exacerbate dehydration and kidney injury risk.
      </li>
      <li>
        <strong>ACE inhibitors and ARBs:</strong> Require close monitoring as they affect renal hemodynamics.
      </li>
      <li>
        <strong>Antihypertensives:</strong> Blood pressure changes due to vascular targeting may alter drug effects.
      </li>
      <li>
        <strong>Other investigational peptides or drugs affecting vasculature:</strong> Potential additive vascular toxicity.
      </li>
    </ul>
    <p>
      <em>Always consult healthcare providers before combining adipotide with other medications.</em>
    </p>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Mandatory Monitoring</h4>
                    <p className="text-sm text-red-800 dark:text-red-200">Due to nephrotoxicity risk, extensive monitoring is absolutely required if used in research settings.</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Required Tests</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• BUN and Creatinine (daily during use)</li>
                      <li>• Urinalysis</li>
                      <li>• GFR estimation</li>
                      <li>• Electrolytes</li>
                      <li>• Liver function tests</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Stop Immediately If</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Creatinine rises significantly</li>
                      <li>• Dark or reduced urine output</li>
                      <li>• Flank pain</li>
                      <li>• Signs of dehydration</li>
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
