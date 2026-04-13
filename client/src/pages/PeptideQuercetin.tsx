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

export default function PeptideQuercetin() {
  usePageTitle("Quercetin - Senolytic Flavonoid", {
    description: "Comprehensive guide to Quercetin for senolytic therapy, immune support, and anti-inflammatory effects. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

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
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline mr-2 h-5 w-5" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Zhu et al. (2015). The Achilles’ heel of senescent cells: from transcriptome to senolytic drugs. Aging Cell. Demonstrated senolytic effects of Dasatinib and Quercetin combination.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26399448/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        D’Andrea (2015). Quercetin: A flavonol with multifaceted therapeutic applications? Fitoterapia. Reviewed antioxidant and anti-inflammatory properties of quercetin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25661320/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Batiha et al. (2020). Chemical, pharmacological and therapeutic potential of quercetin: A comprehensive review. Phytotherapy Research. Summarized antiviral and immune-modulating effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32089954/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Egert et al. (2009). Quercetin reduces systolic blood pressure and plasma oxidized LDL concentrations in overweight subjects with a high-cardiovascular disease risk phenotype: a double-blinded, placebo-controlled cross-over study. Br J Nutr. Clinical trial showing cardiovascular benefits of quercetin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19296833/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Ganesan et al. (2012). Quercetin inhibits mast cell activation and reduces allergic inflammation in vivo. J Nutr. Demonstrated mast cell stabilization and anti-allergic effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22301923/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Colunga Biancatelli et al. (2020). Quercetin and Vitamin C: An Experimental, Synergistic Therapy for the Prevention and Treatment of SARS-CoV-2 Related Disease (COVID-19). Front Immunol. Highlighted zinc ionophore activity and antiviral synergy.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32850141/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Bjelakovic et al. (2013). Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases. Cochrane Database Syst Rev. Meta-analysis discussing safety and efficacy of antioxidants including quercetin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23440782/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Kawabata et al. (2015). Role of intestinal microbiota in the bioavailability and physiological functions of dietary polyphenols. Molecules. Discussed absorption and metabolism of quercetin and phytosomal forms.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26006204/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Ghosh et al. (2012). Quercetin inhibits inflammatory cytokine production and NF-κB activation in human monocytes. J Nutr Biochem. Demonstrated NF-κB inhibition mechanism.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22387232/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Li et al. (2016). Quercetin inhibits PI3K/Akt/mTOR signaling pathway and induces apoptosis in human breast cancer cells. Oncol Lett. Provided insight into PI3K pathway inhibition relevant to senolytic activity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/27073518/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
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
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Dasatinib + Quercetin (D+Q):</strong> Synergistic senolytic effect by targeting multiple pathways in senescent cells, improving clearance efficacy (Zhu et al., 2015).
      </li>
      <li>
        <strong>Quercetin + Vitamin C:</strong> Vitamin C stabilizes quercetin and enhances its antioxidant capacity; also supports immune function (Colunga Biancatelli et al., 2020).
      </li>
      <li>
        <strong>Quercetin + Zinc:</strong> Quercetin acts as a zinc ionophore, improving intracellular zinc uptake which is critical for antiviral activity.
      </li>
      <li>
        <strong>Quercetin + Resveratrol:</strong> Combined antioxidant and anti-inflammatory effects may provide enhanced cardiovascular and longevity benefits.
      </li>
      <li>
        <strong>Phytosomal Quercetin:</strong> Complexed with phospholipids to improve bioavailability and absorption, enhancing clinical efficacy (Kawabata et al., 2015).
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 h-5 w-5" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>CYP3A4 Inhibition:</strong> Quercetin can inhibit CYP3A4 enzyme, potentially increasing plasma levels of drugs metabolized by this pathway (e.g., statins, calcium channel blockers).
      </li>
      <li>
        <strong>Blood Thinners:</strong> May potentiate effects of anticoagulants like warfarin, increasing bleeding risk; monitor INR closely.
      </li>
      <li>
        <strong>Antibiotics:</strong> Quercetin may chelate certain antibiotics (e.g., fluoroquinolones), reducing their absorption and efficacy.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> Potential interaction due to modulation of immune pathways; caution advised.
      </li>
      <li>
        <strong>Chemotherapy Agents:</strong> Possible interference with drug metabolism; consult oncology specialists before use.
      </li>
    </ul>
  </CardContent>
</Card>

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
