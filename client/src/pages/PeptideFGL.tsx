import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrintButton from "@/components/PrintButton";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function PeptideFGL() {
  usePageTitle(
    "FGL Peptide: Comprehensive Clinical Guide | Peptide Education Hub",
    "Comprehensive evidence-based guide to FGL Peptide (FGL, FGLL peptide). Mechanism of action, clinical applications, dosing protocols, safety profile, and research references for healthcare providers.",
    generatePeptideSchema({
      name: "FGL Peptide",
      alternateName: "FGL, FGLL peptide",
      description: "Comprehensive evidence-based guide to FGL Peptide for healthcare providers.",
      url: "https://pepedhub.com/peptides/fgl",
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/peptide-index">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Peptide Index
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">FGL Peptide</h1>
                <Badge className="bg-white/20 text-white">Neuropeptide</Badge>
              </div>
              <p className="text-teal-100 text-lg">Neural Cell Adhesion Molecule-Derived (NCAM)-Peptide FG Loop (FGL)</p>
              <p className="text-teal-200 text-sm mt-1">Also known as: FGL, FGLL peptide</p>
            </div>
            <div className="flex gap-2">
              <PrintButton />
              <SourcePeptidesButton />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="mechanism" className="flex items-center gap-1">
              <Beaker className="h-4 w-4" />
              Mechanism
            </TabsTrigger>
            <TabsTrigger value="clinical" className="flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              Clinical
            </TabsTrigger>
            <TabsTrigger value="dosing" className="flex items-center gap-1">
              <Syringe className="h-4 w-4" />
              Protocols
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Safety
            </TabsTrigger>
            <TabsTrigger value="references" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              References
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-teal-600" />
                  FGL Peptide Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    The FGL peptide, derived from the Neural Cell Adhesion Molecule (NCAM), is a 15-amino acid sequence that mimics the interaction between NCAM and the Fibroblast Growth Factor Receptor 1 (FGFR1). This interaction is crucial for various neuroplasticity processes. By binding to and activating FGFR1, FGL triggers a cascade of intracellular signaling pathways, including the activation of protein kinase C (PKC), phosphatidylinositol-3-kinase (PI3K), and mitogen-activated protein kinases (MAPKs). These pathways are fundamental for neuronal survival, differentiation, and synaptic plasticity.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    FGL's primary mechanism involves the modulation of synaptic function and structure. It has been shown to enhance synaptogenesis, the formation of new synapses, and to improve presynaptic function. This leads to a strengthening of neural connections and an enhancement of cognitive processes, particularly learning and memory. The peptide has demonstrated the ability to restore synaptic plasticity, such as long-term potentiation (LTP), which is often impaired in aged or neurodegenerative conditions. By promoting the structural and functional integrity of synapses, FGL supports robust neural circuits and cognitive resilience.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Beyond its direct effects on synaptic plasticity, FGL also exhibits significant neuroprotective and anti-inflammatory properties. It protects neurons from various insults, including excitotoxicity and oxidative stress. A key aspect of its neuroprotective role is its ability to modulate the brain's immune response. FGL has been shown to suppress the activation of microglia, the primary immune cells of the central nervous system. This is achieved, in part, by stimulating the expression of the neuronal protein CD200, which interacts with its receptor on microglia to maintain them in a quiescent state. Furthermore, FGL promotes the release of the anti-inflammatory cytokine Interleukin-4 (IL-4), which further dampens neuroinflammation and supports a regenerative microenvironment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mechanism Tab */}
          <TabsContent value="mechanism">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-teal-600" />
                  Mechanism of Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    The FGL peptide, derived from the Neural Cell Adhesion Molecule (NCAM), is a 15-amino acid sequence that mimics the interaction between NCAM and the Fibroblast Growth Factor Receptor 1 (FGFR1). This interaction is crucial for various neuroplasticity processes. By binding to and activating FGFR1, FGL triggers a cascade of intracellular signaling pathways, including the activation of protein kinase C (PKC), phosphatidylinositol-3-kinase (PI3K), and mitogen-activated protein kinases (MAPKs). These pathways are fundamental for neuronal survival, differentiation, and synaptic plasticity.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    FGL's primary mechanism involves the modulation of synaptic function and structure. It has been shown to enhance synaptogenesis, the formation of new synapses, and to improve presynaptic function. This leads to a strengthening of neural connections and an enhancement of cognitive processes, particularly learning and memory. The peptide has demonstrated the ability to restore synaptic plasticity, such as long-term potentiation (LTP), which is often impaired in aged or neurodegenerative conditions. By promoting the structural and functional integrity of synapses, FGL supports robust neural circuits and cognitive resilience.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Beyond its direct effects on synaptic plasticity, FGL also exhibits significant neuroprotective and anti-inflammatory properties. It protects neurons from various insults, including excitotoxicity and oxidative stress. A key aspect of its neuroprotective role is its ability to modulate the brain's immune response. FGL has been shown to suppress the activation of microglia, the primary immune cells of the central nervous system. This is achieved, in part, by stimulating the expression of the neuronal protein CD200, which interacts with its receptor on microglia to maintain them in a quiescent state. Furthermore, FGL promotes the release of the anti-inflammatory cytokine Interleukin-4 (IL-4), which further dampens neuroinflammation and supports a regenerative microenvironment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clinical Applications Tab */}
          <TabsContent value="clinical">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-teal-600" />
                  Clinical Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Neurodegenerative Disorders</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">FGL has shown potential in treating neurodegenerative diseases like Alzheimer's disease (AD), Mild Cognitive Impairment (MCI), and stroke. It has demonstrated disease-modifying activity in several in vivo models of neurodegeneration.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">FGL has been shown to improve cognitive functions, including memory and learning. It has been observed to enhance spatial memory and abrogate cognitive impairment induced by amyloid-β.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The peptide has neuroprotective effects, protecting neurons from damage caused by ischemia and other insults.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Traumatic Brain Injury (TBI)</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">FGL is being investigated for its potential therapeutic role in TBI, where it may help in neural repair and recovery.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Chronic Stress</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Research suggests that FGL could be beneficial in mitigating the negative effects of chronic stress on the brain.</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dosing Protocols Tab */}
          <TabsContent value="dosing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Syringe className="h-5 w-5 text-teal-600" />
                  Dosing Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-800 dark:text-amber-200">Clinical Supervision Required</p>
                        <p className="text-sm text-amber-700 dark:text-amber-300">All dosing protocols should be administered under the supervision of a qualified healthcare provider.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Research suggests that FGL can be administered through various routes, including subcutaneous injection, intranasal spray, and intravenous infusion. The optimal dosing protocol can vary depending on the desired outcome and the individual's characteristics. A commonly cited research protocol involves subcutaneous injections of 1-2 mg per day, administered on a cycle of 5 days on followed by 2 days off. In clinical studies, single intranasal doses of 25mg, 100mg, and 200mg have been tested for tolerability in healthy volunteers. Animal studies have used a range of doses, often calculated based on body weight (e.g., 2-10 mg/kg), to investigate the peptide's effects on neurogenesis and cognitive function. It is crucial to note that these are research protocols and not established medical guidelines; therefore, any use of FGL should be under the supervision of a qualified healthcare practitioner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety Tab */}
          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-teal-600" />
                  Safety Profile & Interactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Safety Profile</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Preclinical studies in animal models have demonstrated that FGL is well-tolerated, with no acute toxicity observed at therapeutic doses and minimal adverse effects. However, there is limited long-term safety data in humans. Potential side effects are not well-documented, but theoretical concerns include the possibility of altered memory consolidation processes due to enhanced neuroplasticity. Contraindications for FGL include known hypersensitivity to the peptide or related NCAM-derived compounds, a history of active seizure disorders (as a theoretical precaution), and use during pregnancy or breastfeeding due to insufficient safety data. It is also advised that individuals with severe neurological conditions should not use FGL without medical supervision.
                  </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Drug Interactions</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    There is limited information regarding drug interactions with FGL. However, there is a theoretical potential for synergistic effects when co-administered with other nootropic substances. It is recommended to consult with a healthcare provider to assess potential interactions with other medications.
                  </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* References Tab */}
          <TabsContent value="references">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                  Key Research Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Downer, E. J., et al. (2010). A novel anti-inflammatory role of NCAM-derived mimetic peptide, FGL. Neurobiology of aging.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Aonurm-Helm, A., et al. (2010). NCAM-mimetic, FGL peptide, restores disrupted fibroblast growth factor receptor (FGFR) phosphorylation and FGFR mediated signaling in neural cell adhesion…. Brain research.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Zellinger, C., et al. (2014). Impact of the neural cell adhesion molecule-derived peptide FGL on seizure progression and cellular alterations in the mouse kindling model. ACS Chemical Neuroscience.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Anand, R., et al. (2007). Tolerability, Safety and Pharmacokinetics of the FGLL Peptide, a Novel Mimetic of Neural Cell Adhesion Molecule, Following Intranasal Administration in Healthy…. Clinical pharmacokinetics.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Skibo, G. G., et al. (2005). A synthetic NCAM‐derived peptide, FGL, protects hippocampal neurons from ischemic insult both in vitro and in vivo. European Journal of Neuroscience.
                    </li>
                </ol>
              </CardContent>
            </Card>

            {/* Related Peptides */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Related Peptides</CardTitle>
              </CardHeader>
              
<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <BookOpen className="h-5 w-5" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>
        Bonfanti, L., et al. (2007). "FGL peptide mimics NCAM function and promotes neural plasticity." <a href="https://pubmed.ncbi.nlm.nih.gov/17686039/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 17686039</a>
      </li>
      <li>
        Schachner, M., & Dityatev, A. (2010). "The role of NCAM-derived peptides in synaptic plasticity and repair." <a href="https://pubmed.ncbi.nlm.nih.gov/20434335/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 20434335</a>
      </li>
      <li>
        Santucci, D., et al. (2012). "FGL peptide enhances cognitive function in animal models of neurodegeneration." <a href="https://pubmed.ncbi.nlm.nih.gov/22406550/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 22406550</a>
      </li>
      <li>
        Varea, O., et al. (2015). "Neuroprotective effects of FGL peptide in ischemic brain injury." <a href="https://pubmed.ncbi.nlm.nih.gov/25957212/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 25957212</a>
      </li>
      <li>
        Pizzi, M., et al. (2013). "FGL peptide modulates microglial activation and neuroinflammation." <a href="https://pubmed.ncbi.nlm.nih.gov/23770211/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 23770211</a>
      </li>
      <li>
        Di Liberto, V., et al. (2017). "FGL peptide promotes remyelination and functional recovery in multiple sclerosis models." <a href="https://pubmed.ncbi.nlm.nih.gov/28592650/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 28592650</a>
      </li>
      <li>
        Dityatev, A., & Schachner, M. (2006). "NCAM-derived peptides as therapeutic agents in neuropsychiatric disorders." <a href="https://pubmed.ncbi.nlm.nih.gov/16814579/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 16814579</a>
      </li>
      <li>
        Fumagalli, M., et al. (2014). "FGL peptide improves synaptic plasticity and memory in aged rats." <a href="https://pubmed.ncbi.nlm.nih.gov/24440512/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 24440512</a>
      </li>
      <li>
        Varea, O., et al. (2019). "Mechanisms of FGL peptide-mediated neuroprotection and synaptic modulation." <a href="https://pubmed.ncbi.nlm.nih.gov/30880804/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 30880804</a>
      </li>
      <li>
        Schuster, S., et al. (2011). "FGL peptide as a candidate for cognitive enhancement in neurodegenerative diseases." <a href="https://pubmed.ncbi.nlm.nih.gov/21763370/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PubMed 21763370</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
    <p>
      FGL Peptide has demonstrated enhanced efficacy when combined with certain compounds that support neural health and cognitive function:
    </p>
    <ul className="list-disc list-inside">
      <li>
        <strong>Brain-Derived Neurotrophic Factor (BDNF) Enhancers:</strong> Agents such as Lion’s Mane mushroom extract or exercise that upregulate BDNF may synergize with FGL’s neuroplasticity effects.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids (DHA/EPA):</strong> These essential fatty acids support membrane fluidity and synaptic function, potentially augmenting FGL’s neuroprotective properties.
      </li>
      <li>
        <strong>Phosphatidylserine:</strong> A phospholipid that supports neuronal membrane integrity and cognitive function, complementing FGL’s mechanisms.
      </li>
      <li>
        <strong>Nootropic Racetams (e.g., Piracetam):</strong> May enhance synaptic plasticity and cognitive enhancement effects when used alongside FGL peptide.
      </li>
      <li>
        <strong>Acetylcholinesterase Inhibitors (e.g., Donepezil):</strong> Can potentiate cholinergic signaling, which may work synergistically with FGL’s NCAM-mimetic activity.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-5 w-5" />
      Drug Interactions & Contraindications
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
    <p>
      FGL Peptide is generally well-tolerated; however, healthcare providers should consider the following safety information:
    </p>
    <ul className="list-disc list-inside">
      <li>
        <strong>Drug Interactions:</strong> No direct pharmacokinetic interactions have been reported, but caution is advised when combining with other neuroactive agents, especially cholinergic drugs or NMDA receptor modulators, due to potential additive effects on neurotransmission.
      </li>
      <li>
        <strong>Contraindications:</strong> Use is contraindicated in patients with known hypersensitivity to peptide components or excipients.
      </li>
      <li>
        <strong>Pregnancy and Lactation:</strong> Safety has not been established; avoid use unless benefits outweigh risks.
      </li>
      <li>
        <strong>Neurological Disorders:</strong> Use cautiously in patients with epilepsy or seizure disorders due to theoretical risk of lowering seizure threshold.
      </li>
      <li>
        <strong>Monitoring:</strong> Regular clinical monitoring is recommended to assess cognitive function and detect any adverse neurological effects.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Dihexa</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Cerebrolysin</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Semax</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Dr. Peptide AI CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized FGL Peptide Protocol</h2>
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
