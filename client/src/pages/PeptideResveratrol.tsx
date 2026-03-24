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

export default function PeptideResveratrol() {
  usePageTitle("Resveratrol - Sirtuin Activator", {
    description: "Comprehensive guide to Resveratrol for longevity, cardiovascular health, and metabolic benefits. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-red-600 rounded-2xl">
              <Clock className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Resveratrol</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Polyphenol Sirtuin Activator</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Longevity</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">12,000+</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Resveratrol?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Resveratrol is a natural polyphenol found in red grapes, berries, peanuts, and Japanese knotweed. It gained fame as the compound potentially responsible for the "French Paradox"—the observation that French populations have lower cardiovascular disease despite high-fat diets.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    As a potent activator of SIRT1 (sirtuin 1), resveratrol mimics many of the beneficial effects of caloric restriction, including improved mitochondrial function, enhanced autophagy, and extended lifespan in model organisms.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond longevity, resveratrol has demonstrated cardiovascular protective effects, anti-inflammatory properties, and potential benefits in metabolic syndrome, neurodegeneration, and cancer prevention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Longevity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">SIRT1 activation mimics caloric restriction benefits</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Cardiovascular Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves endothelial function and reduces oxidative stress</p>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
                      <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Metabolic Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances insulin sensitivity and mitochondrial function</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects neurons and may reduce neurodegeneration risk</p>
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
                      <h4 className="font-semibold mb-2">1. SIRT1 Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Directly activates SIRT1, a NAD+-dependent deacetylase that regulates metabolism, stress resistance, and longevity pathways.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. AMPK Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Activates AMP-activated protein kinase, the master metabolic regulator that enhances fat oxidation and mitochondrial biogenesis.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. NF-κB Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Suppresses the inflammatory master switch NF-κB, reducing chronic inflammation associated with aging.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Antioxidant Activity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Scavenges free radicals and upregulates endogenous antioxidant enzymes through Nrf2 activation.</p>
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
                    <h4 className="font-semibold mb-2">Cardiovascular Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Meta-analyses show resveratrol improves flow-mediated dilation, reduces blood pressure, and lowers LDL cholesterol in human trials.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Metabolic Effects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials demonstrate improved insulin sensitivity and glucose control in type 2 diabetics and metabolic syndrome patients.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cognitive Function</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies show improved cerebral blood flow and cognitive performance in older adults with resveratrol supplementation.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
                    <h4 className="font-semibold mb-2">Bioavailability Note</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Oral bioavailability is low (~1%). Enhanced formulations (micronized, liposomal) significantly improve absorption.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 250-500mg daily</li>
                      <li>• Timing: With fat-containing meal</li>
                      <li>• Duration: Ongoing</li>
                      <li>• Use trans-resveratrol form</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">High-Dose Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 1000-2000mg daily</li>
                      <li>• Divided into 2 doses</li>
                      <li>• For specific therapeutic goals</li>
                      <li>• Monitor for GI tolerance</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Synergistic Combinations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• + Quercetin (senolytic stack)</li>
                      <li>• + NMN (NAD+ optimization)</li>
                      <li>• + Pterostilbene (enhanced bioavailability)</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Safe</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Resveratrol is a natural food component with extensive safety data. Doses up to 5g/day have been used in clinical trials.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• GI upset at high doses</li>
                      <li>• Diarrhea</li>
                      <li>• Headache</li>
                      <li>• Rare: tendinitis reports</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Drug Interactions</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May inhibit CYP enzymes</li>
                      <li>• Caution with blood thinners</li>
                      <li>• May affect estrogen-sensitive conditions</li>
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
        Baur et al. (2006). Resveratrol improves health and survival of mice on a high-calorie diet. <i>Nature</i>. Demonstrated lifespan extension and metabolic benefits in mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17086191/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Timmers et al. (2011). Calorie restriction-like effects of 30 days of resveratrol supplementation on energy metabolism and metabolic profile in obese humans. <i>Cell Metabolism</i>. Showed improved metabolic parameters in obese subjects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22055512/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Wightman et al. (2014). Effects of resveratrol on cerebral blood flow and cognitive performance in humans: A randomized controlled trial. <i>Journal of Psychopharmacology</i>. Found improved cerebral blood flow and cognition.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24452539/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Szkudelska & Szkudelski (2010). Resveratrol and diabetes: from animal to human studies. <i>Biochimica et Biophysica Acta</i>. Reviewed anti-diabetic effects of resveratrol.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20026393/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Poulsen et al. (2013). High-dose resveratrol supplementation in obese men: a randomized, placebo-controlled clinical trial. <i>Diabetes, Obesity and Metabolism</i>. Assessed safety and metabolic effects at high doses.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23768245/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Patel et al. (2011). Clinical pharmacology of resveratrol and its metabolites in humans. <i>Clinical Pharmacology & Therapeutics</i>. Detailed pharmacokinetics and bioavailability challenges.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21346788/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Berman et al. (2017). The therapeutic potential of resveratrol: a review of clinical trials. <i>NPJ Precision Oncology</i>. Summarized clinical evidence for multiple indications.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29250001/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Smoliga et al. (2011). Resveratrol bioavailability and toxicity in humans. <i>Annals of the New York Academy of Sciences</i>. Discussed dosing, safety, and bioavailability.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21749236/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Walle et al. (2004). High absorption but very low bioavailability of oral resveratrol in humans. <i>Drug Metabolism and Disposition</i>. Confirmed low oral bioavailability despite good absorption.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/14722017/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Howitz et al. (2003). Small molecule activators of sirtuins extend Saccharomyces cerevisiae lifespan. <i>Nature</i>. Identified resveratrol as a sirtuin activator extending lifespan in yeast.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/12660744/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
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
        <strong>NMN (Nicotinamide Mononucleotide):</strong> Boosts NAD+ levels, enhancing SIRT1 activation by resveratrol for improved mitochondrial function and longevity.
      </li>
      <li>
        <strong>Quercetin:</strong> Senolytic agent that complements resveratrol's anti-inflammatory and antioxidant effects, potentially improving cellular health.
      </li>
      <li>
        <strong>Pterostilbene:</strong> A resveratrol analog with higher bioavailability, combining both may enhance overall polyphenol benefits.
      </li>
      <li>
        <strong>Curcumin:</strong> Anti-inflammatory and antioxidant properties synergize with resveratrol to reduce chronic inflammation.
      </li>
      <li>
        <strong>Coenzyme Q10:</strong> Supports mitochondrial electron transport chain, complementing resveratrol’s mitochondrial biogenesis effects.
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
        <strong>Anticoagulants and Antiplatelets:</strong> Resveratrol may increase bleeding risk by inhibiting platelet aggregation and CYP enzymes; caution with warfarin, aspirin, clopidogrel.
      </li>
      <li>
        <strong>CYP450 Substrates:</strong> Potential inhibition of CYP3A4, CYP2C9, and CYP2D6 can alter metabolism of drugs like statins, calcium channel blockers, and antidepressants.
      </li>
      <li>
        <strong>Estrogenic Drugs:</strong> Resveratrol has phytoestrogenic activity; caution when combined with hormone replacement therapy or selective estrogen receptor modulators.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> Possible interaction altering drug levels; monitor closely if combined with agents like cyclosporine.
      </li>
      <li>
        <strong>Antidiabetic Medications:</strong> May potentiate hypoglycemic effects; monitor blood glucose closely when combined with insulin or oral hypoglycemics.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Lipid panel</li>
                      <li>• Fasting glucose and HbA1c</li>
                      <li>• Inflammatory markers (CRP)</li>
                      <li>• Blood pressure</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track cardiovascular markers</li>
                      <li>• Monitor energy and wellbeing</li>
                      <li>• Assess cognitive function</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Antioxidant effects: Immediate</li>
                      <li>• Cardiovascular benefits: 4-8 weeks</li>
                      <li>• Metabolic improvements: 8-12 weeks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dr. Peptide AI CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide AI</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide AI generates evidence-based protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
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
