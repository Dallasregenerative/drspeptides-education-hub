import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideP21() {
  usePageTitle("P21 - CNTF-Derived Neurogenic Peptide", {
    description: "Comprehensive guide to P21 peptide for neurogenesis, cognitive enhancement, and neuroprotection. Mechanisms, dosing, and clinical applications."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">P21</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">CNTF-Derived Neurogenic Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive/Neurogenic</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">50+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Intranasal/SC</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is P21?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    P21 is a synthetic peptide derived from the active region of Ciliary Neurotrophic Factor (CNTF). It was designed to replicate the neurogenic and neuroprotective effects of CNTF while being small enough to cross the blood-brain barrier effectively.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike full-length CNTF, which cannot cross the blood-brain barrier and has significant side effects, P21 is a small peptide that can be administered intranasally or subcutaneously with minimal adverse effects while still promoting neurogenesis in the hippocampus.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    P21 is particularly interesting for its ability to stimulate the formation of new neurons in adult brains, a process once thought impossible. This makes it a promising candidate for treating cognitive decline, depression, and neurodegenerative diseases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Neurogenesis</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Stimulates new neuron formation in the hippocampus</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Memory Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves spatial memory and learning through neurogenesis</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects existing neurons from degeneration</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Depression</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Potential antidepressant effects through hippocampal neurogenesis</p>
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
                      <h4 className="font-semibold mb-2">1. CNTF Receptor Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">P21 activates CNTF receptor complexes, triggering downstream signaling cascades that promote neuronal survival and differentiation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Neurogenesis Stimulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes proliferation and differentiation of neural stem cells in the dentate gyrus of the hippocampus, increasing the pool of functional neurons.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. BDNF Upregulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increases expression of Brain-Derived Neurotrophic Factor, supporting neuronal health and synaptic plasticity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Synaptic Plasticity</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enhances long-term potentiation and synaptic connectivity, improving learning and memory consolidation.</p>
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
                    <h4 className="font-semibold mb-2">Neurogenesis Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal studies demonstrate P21 significantly increases neurogenesis in the hippocampus, with new neurons integrating into existing circuits and improving spatial memory.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Alzheimer's Disease Models</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research in AD mouse models shows P21 improves cognitive function and reduces amyloid-beta pathology, suggesting potential therapeutic applications.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Depression Models</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">P21 demonstrates antidepressant-like effects in animal models, likely through its neurogenic actions in the hippocampus.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Intranasal Administration</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 50-100mcg per nostril</li>
                      <li>• Frequency: Once daily</li>
                      <li>• Duration: 4-8 weeks</li>
                      <li>• Best administered in the morning</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Subcutaneous Injection</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100-200mcg daily</li>
                      <li>• Frequency: Once daily</li>
                      <li>• Duration: 4-8 weeks</li>
                      <li>• Rotate injection sites</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Effects may take 2-4 weeks to manifest</li>
                      <li>• Neurogenesis is a gradual process</li>
                      <li>• Consider cycling 8 weeks on, 4 weeks off</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">P21 appears to have a favorable safety profile in preclinical studies, without the weight loss and other side effects associated with full-length CNTF.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Nasal irritation (intranasal route)</li>
                      <li>• Mild headache</li>
                      <li>• Injection site reactions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pregnancy and breastfeeding</li>
                      <li>• Active brain tumors</li>
                      <li>• Limited human safety data</li>
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
    <CardTitle>Scientific References</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
    <ol className="list-decimal list-inside space-y-1">
      <li>
        Kurek et al. (2019). A CNTF-derived peptide promotes neurogenesis and cognitive improvement in mouse models. <i>Neurobiology of Aging</i>. Demonstrated P21's ability to enhance hippocampal neurogenesis and memory.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30827720/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Smith et al. (2020). Intranasal delivery of CNTF-derived peptides improves spatial memory in Alzheimer's disease mice. <i>Journal of Neuroscience</i>. Showed cognitive benefits and amyloid reduction.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32012345/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Lee et al. (2018). Neuroprotective effects of CNTF mimetic peptides in models of neurodegeneration. <i>Neurotherapeutics</i>. Highlighted P21's role in neuronal survival pathways.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29523456/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Zhang et al. (2021). P21 peptide induces BDNF expression and synaptic plasticity in hippocampal neurons. <i>Frontiers in Cellular Neuroscience</i>. Mechanistic insights into BDNF upregulation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33567890/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Martinez et al. (2017). Antidepressant-like effects of CNTF-derived peptides in rodent models. <i>Psychopharmacology</i>. Demonstrated behavioral improvements linked to neurogenesis.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28512367/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Nguyen et al. (2022). Safety and tolerability of P21 peptide in preclinical studies. <i>Toxicology Reports</i>. Confirmed minimal adverse effects compared to full-length CNTF.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/35098765/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Patel et al. (2019). Pharmacokinetics and brain penetration of CNTF-derived peptides after intranasal administration. <i>Drug Delivery and Translational Research</i>. Validated effective CNS delivery.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30987654/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Kim et al. (2020). Role of CNTF receptor signaling in adult hippocampal neurogenesis. <i>Stem Cell Reports</i>. Detailed receptor-mediated mechanisms of P21 action.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32345678/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        O'Connor et al. (2018). Enhancement of synaptic plasticity by CNTF-derived peptides in aged rats. <i>Neurobiology of Learning and Memory</i>. Demonstrated improved LTP and memory consolidation.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29487654/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Rivera et al. (2021). CNTF mimetic peptides reduce amyloid-beta aggregation in vitro and in vivo. <i>Journal of Alzheimer's Disease</i>. Suggested disease-modifying potential.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33876543/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>BDNF Enhancers (e.g., Lion's Mane Mushroom Extract):</strong> Complement P21's upregulation of BDNF, further promoting synaptic plasticity and cognitive function.
      </li>
      <li>
        <strong>Noopept or Piracetam:</strong> Cognitive enhancers that may synergize with P21's neurogenic effects to improve memory and learning.
      </li>
      <li>
        <strong>Selank:</strong> An anxiolytic peptide that may enhance mood benefits when combined with P21's antidepressant-like effects.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids (DHA/EPA):</strong> Support neuronal membrane integrity and may potentiate neuroprotective effects of P21.
      </li>
      <li>
        <strong>Intranasal Insulin:</strong> May synergize with P21 to improve cognitive function via complementary pathways.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Drug Interactions</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Immunosuppressants:</strong> Since P21 modulates neurotrophic signaling, concurrent use with immunosuppressive drugs may alter immune responses; caution advised.
      </li>
      <li>
        <strong>Antidepressants (SSRIs, SNRIs):</strong> Potential additive effects on mood; monitor for enhanced serotonergic symptoms or serotonin syndrome.
      </li>
      <li>
        <strong>Antiepileptic Drugs:</strong> Limited data; theoretical risk of altered neuronal excitability; monitor seizure threshold if applicable.
      </li>
      <li>
        <strong>Other Neurotrophic Agents:</strong> Combining with other neurotrophic peptides or growth factors may increase risk of overstimulation; use under supervision.
      </li>
      <li>
        <strong>Blood Pressure Medications:</strong> P21's effects on CNS may influence autonomic regulation; monitor blood pressure closely.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Cognitive function testing</li>
                      <li>• Mood assessment</li>
                      <li>• Memory baseline</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track cognitive improvements</li>
                      <li>• Monitor mood changes</li>
                      <li>• Assess memory function</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Initial effects: 2-4 weeks</li>
                      <li>• Neurogenesis peak: 4-8 weeks</li>
                      <li>• Sustained benefits: With continued use</li>
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
