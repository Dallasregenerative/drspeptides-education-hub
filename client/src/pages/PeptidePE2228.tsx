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

export default function PeptidePE2228() {
  usePageTitle(
    "PE-22-28: Comprehensive Clinical Guide | Peptide Education Hub",
    "Comprehensive evidence-based guide to PE-22-28 (Mini-Spadin). Mechanism of action, clinical applications, dosing protocols, safety profile, and research references for healthcare providers.",
    generatePeptideSchema({
      name: "PE-22-28",
      alternateName: "Mini-Spadin",
      description: "Comprehensive evidence-based guide to PE-22-28 for healthcare providers.",
      url: "https://pepedhub.com/peptides/pe-22-28",
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-12">
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
                <h1 className="text-4xl font-bold">PE-22-28</h1>
                <Badge className="bg-white/20 text-white">Neuropeptide, TREK-1 inhibitor</Badge>
              </div>
              <p className="text-teal-100 text-lg">PE 22-28 peptide</p>
              <p className="text-teal-200 text-sm mt-1">Also known as: Mini-Spadin</p>
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
                  PE-22-28 Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    PE-22-28 is a synthetic heptapeptide and a shortened, optimized analog of the naturally occurring peptide spadin. Its primary mechanism of action is the potent and selective inhibition of the two-pore domain potassium channel TREK-1 (TWIK-related K+ channel 1). TREK-1 channels are crucial for maintaining the resting membrane potential of neurons, and their inhibition leads to increased neuronal excitability. By blocking TREK-1, PE-22-28 promotes neuronal depolarization, which is thought to be a key factor in its antidepressant and neurogenic effects.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    In addition to its direct action on TREK-1 channels, PE-22-28 also enhances serotonergic neurotransmission. It has been shown to increase the firing rate of serotonin neurons in the raphe nuclei and to facilitate serotonin release in the hippocampus. This modulation of the serotonin system is a well-established mechanism for many antidepressant drugs, and PE-22-28 appears to achieve this effect more rapidly than traditional antidepressants like SSRIs.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Furthermore, PE-22-28 has been shown to promote neuroplasticity and neurogenesis. It upregulates the expression of brain-derived neurotrophic factor (BDNF), a key molecule involved in neuronal survival, growth, and differentiation. By stimulating BDNF, PE-22-28 enhances synaptogenesis, the formation of new synapses between neurons, which is crucial for learning, memory, and mood regulation. This neurotrophic activity may contribute to its long-lasting therapeutic effects and its potential for treating neurodegenerative conditions.
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
                    PE-22-28 is a synthetic heptapeptide and a shortened, optimized analog of the naturally occurring peptide spadin. Its primary mechanism of action is the potent and selective inhibition of the two-pore domain potassium channel TREK-1 (TWIK-related K+ channel 1). TREK-1 channels are crucial for maintaining the resting membrane potential of neurons, and their inhibition leads to increased neuronal excitability. By blocking TREK-1, PE-22-28 promotes neuronal depolarization, which is thought to be a key factor in its antidepressant and neurogenic effects.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    In addition to its direct action on TREK-1 channels, PE-22-28 also enhances serotonergic neurotransmission. It has been shown to increase the firing rate of serotonin neurons in the raphe nuclei and to facilitate serotonin release in the hippocampus. This modulation of the serotonin system is a well-established mechanism for many antidepressant drugs, and PE-22-28 appears to achieve this effect more rapidly than traditional antidepressants like SSRIs.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Furthermore, PE-22-28 has been shown to promote neuroplasticity and neurogenesis. It upregulates the expression of brain-derived neurotrophic factor (BDNF), a key molecule involved in neuronal survival, growth, and differentiation. By stimulating BDNF, PE-22-28 enhances synaptogenesis, the formation of new synapses between neurons, which is crucial for learning, memory, and mood regulation. This neurotrophic activity may contribute to its long-lasting therapeutic effects and its potential for treating neurodegenerative conditions.
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
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Major Depressive Disorder</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Preclinical studies show rapid and sustained antidepressant effects.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Treatment-Resistant Depression</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">May offer an alternative for patients who do not respond to traditional antidepressants.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Improves memory consolidation and may protect against neurodegenerative diseases.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Shows potential in protecting against age-related cognitive decline and ischemic brain injury.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Anxiety Disorders</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">May help reduce anxiety and promote a sense of calm.</p>
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
                    PE-22-28 is an investigational peptide and does not have FDA-approved dosing guidelines for human use. Research protocols in animal models have typically used intraperitoneal (IP) injections. In humans, administration is expected to be via subcutaneous injection, intranasal spray, or intramuscular injection due to poor oral bioavailability. Any use should be under the strict supervision of a qualified medical professional in a research setting.
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
                    The safety profile of PE-22-28 has not been extensively studied in humans, as it is still in the preclinical and research phases of development. Animal studies have shown it to be well-tolerated at therapeutic doses, with a low incidence of side effects. The most commonly reported adverse effect in research settings is mild and transient injection site reactions, such as redness or swelling.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    There is a theoretical concern that modulating potassium channels like TREK-1 could potentially lower the seizure threshold in susceptible individuals, although this has not been observed in preclinical studies. Due to the lack of human safety data, PE-22-28 is contraindicated in individuals with active psychotic disorders, as well as in pregnant or breastfeeding women. As with any investigational compound, its use should be approached with caution and under the guidance of a qualified healthcare professional.
                  </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Drug Interactions</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    There is currently no clinical data on specific drug interactions with PE-22-28. However, due to its mechanism of action on the TREK-1 channel and serotonergic system, there is a theoretical potential for interactions with other medications that affect these pathways, such as SSRIs, MAOIs, and other antidepressants. Caution is advised when co-administering with other psychoactive compounds.
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
                      Djillani A, Pietri M, Moreno S, Heurteaux C, Mazella J, Borsotto M. (2017). Shortened Spadin Analogs Display Better TREK-1 Inhibition, In Vivo Stability and Antidepressant Activity. Frontiers in Pharmacology.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Heurteaux C, Lucas G, Guy N, et al. (2006). Deletion of the background potassium channel TREK-1 results in a depression-resistant phenotype. Nature Neuroscience.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Moha Ou Maati H, Veyssière J, Labbal F, et al. (2012). Spadin, a new antidepressant drug, is devoid of psychotomimetic-like effects and addictive properties. Neuropsychopharmacology.
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
    <ol className="list-decimal list-inside space-y-1 text-sm">
      <li>
        Heurteaux C, et al. "Deletion of the background potassium channel TREK-1 results in a depression-resistant phenotype." Nat Neurosci. 2006 Apr;9(4):1134-41.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16604014/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 16604014
        </a>
      </li>
      <li>
        Mazella J, et al. "Spadin, a sortilin-derived peptide, targeting rodent TREK-1 channels: a new concept in the antidepressant drug design." PLoS Biol. 2010 Apr 27;8(4):e1000355.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20485497/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 20485497
        </a>
      </li>
      <li>
        Borsotto M, et al. "TREK-1 potassium channel is involved in neuroprotection and general anesthesia." J Neurosci. 2007 Oct 3;27(40):10488-98.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/17989245/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 17989245
        </a>
      </li>
      <li>
        Noël J, et al. "The mechano-activated K+ channels TRAAK and TREK-1 control both warm and cold perception." EMBO J. 2009 Apr 15;28(8):1308-18.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19219066/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 19219066
        </a>
      </li>
      <li>
        Duprat F, et al. "The neuroprotective agent riluzole activates the two-pore domain K+ channels TREK-1 and TRAAK." Mol Pharmacol. 2000 Nov;57(5):906-12.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/10869307/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 10869307
        </a>
      </li>
      <li>
        Alloui A, et al. "TREK-1, a K+ channel involved in polymodal pain perception." EMBO J. 2006 Jul 5;25(11):2368-76.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/16751762/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 16751762
        </a>
      </li>
      <li>
        Blondeau N, et al. "Polyunsaturated fatty acids are potent neuroprotectors." EMBO J. 2002 Jul 15;21(14):2107-16.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/12093773/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 12093773
        </a>
      </li>
      <li>
        Noël J, et al. "The mechano-activated K+ channels TRAAK and TREK-1 control both warm and cold perception." EMBO J. 2009 Apr 15;28(8):1308-18.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19219066/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 19219066
        </a>
      </li>
      <li>
        Mazella J, et al. "Spadin, a sortilin-derived peptide, targeting rodent TREK-1 channels: a new concept in the antidepressant drug design." PLoS Biol. 2010 Apr 27;8(4):e1000355.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20485497/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">
          PMID: 20485497
        </a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm">
      <li>
        <strong>SSRIs (Selective Serotonin Reuptake Inhibitors):</strong> PE-22-28’s TREK-1 inhibition may enhance antidepressant effects when combined with SSRIs, potentially improving mood regulation.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids:</strong> These neuroprotective agents may complement PE-22-28’s neuroprotective properties, supporting neuronal health and cognitive function.
      </li>
      <li>
        <strong>BDNF Enhancers (e.g., exercise, certain nootropics):</strong> Since TREK-1 inhibition can increase BDNF expression, combining PE-22-28 with BDNF enhancers may synergistically promote neuroplasticity.
      </li>
      <li>
        <strong>Riluzole:</strong> A known activator of TREK-1 channels, riluzole’s effects may be modulated by PE-22-28, suggesting careful monitoring if co-administered.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Stethoscope className="h-5 w-5" />
      Drug Interactions &amp; Contraindications
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm">
      <li>
        <strong>Drug Interactions:</strong> Caution is advised when combining PE-22-28 with other CNS-active agents, especially antidepressants and neuroleptics, due to potential additive effects on mood and CNS excitability.
      </li>
      <li>
        <strong>Contraindications:</strong> Not recommended for patients with known hypersensitivity to peptide components or those with unstable psychiatric disorders without close medical supervision.
      </li>
      <li>
        <strong>Monitoring:</strong> Patients should be monitored for signs of mood changes, neurological symptoms, or adverse reactions during therapy.
      </li>
      <li>
        <strong>Pregnancy &amp; Lactation:</strong> Safety has not been established; use only if potential benefits justify the risks.
      </li>
      <li>
        <strong>Renal or Hepatic Impairment:</strong> Use with caution; pharmacokinetic data are limited.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Spadin</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Selank</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Semax</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized PE-22-28 Protocol</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
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
