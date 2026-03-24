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

export default function PeptideOrexinA() {
  usePageTitle(
    "Orexin A: Comprehensive Clinical Guide | Peptide Education Hub",
    "Comprehensive evidence-based guide to Orexin A (Hypocretin-1, OXA, Hcrt 1). Mechanism of action, clinical applications, dosing protocols, safety profile, and research references for healthcare providers.",
    generatePeptideSchema({
      name: "Orexin A",
      alternateName: "Hypocretin-1, OXA, Hcrt 1",
      description: "Comprehensive evidence-based guide to Orexin A for healthcare providers.",
      url: "https://pepedhub.com/peptides/orexin-a",
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
                <h1 className="text-4xl font-bold">Orexin A</h1>
                <Badge className="bg-white/20 text-white">Neuropeptide</Badge>
              </div>
              <p className="text-teal-100 text-lg">Orexin A</p>
              <p className="text-teal-200 text-sm mt-1">Also known as: Hypocretin-1, OXA, Hcrt 1</p>
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
                  Orexin A Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Orexin A is a 33-amino acid neuropeptide produced in the lateral hypothalamus from the precursor prepro-orexin. It exerts its effects by binding to two G-protein coupled receptors, the Orexin 1 Receptor (OX1R) and Orexin 2 Receptor (OX2R). Orexin A has a high affinity for both receptors. These receptors are widely distributed throughout the central nervous system, including the cerebral cortex, hippocampus, limbic system, and brainstem, as well as in peripheral tissues such as the gut, pancreas, and adrenal glands.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    The orexin system plays a crucial role in regulating several physiological functions, most notably the sleep-wake cycle, arousal, appetite, and energy homeostasis. Orexin neurons in the hypothalamus integrate signals from the periphery, such as glucose levels, leptin, and ghrelin, to modulate these functions. The activation of orexin neurons promotes wakefulness and arousal, while a deficiency in orexin signaling is a key factor in narcolepsy.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    In addition to its role in arousal and feeding, Orexin A is involved in the gut-brain axis, influencing gut motility, secretions, and the response to gut pain. It also interacts with stress systems and has been implicated in the body's response to stress. The widespread distribution of orexin receptors suggests that Orexin A has a broad range of effects on the body, acting as a key regulator of various physiological and behavioral processes.
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
                    Orexin A is a 33-amino acid neuropeptide produced in the lateral hypothalamus from the precursor prepro-orexin. It exerts its effects by binding to two G-protein coupled receptors, the Orexin 1 Receptor (OX1R) and Orexin 2 Receptor (OX2R). Orexin A has a high affinity for both receptors. These receptors are widely distributed throughout the central nervous system, including the cerebral cortex, hippocampus, limbic system, and brainstem, as well as in peripheral tissues such as the gut, pancreas, and adrenal glands.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    The orexin system plays a crucial role in regulating several physiological functions, most notably the sleep-wake cycle, arousal, appetite, and energy homeostasis. Orexin neurons in the hypothalamus integrate signals from the periphery, such as glucose levels, leptin, and ghrelin, to modulate these functions. The activation of orexin neurons promotes wakefulness and arousal, while a deficiency in orexin signaling is a key factor in narcolepsy.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    In addition to its role in arousal and feeding, Orexin A is involved in the gut-brain axis, influencing gut motility, secretions, and the response to gut pain. It also interacts with stress systems and has been implicated in the body's response to stress. The widespread distribution of orexin receptors suggests that Orexin A has a broad range of effects on the body, acting as a key regulator of various physiological and behavioral processes.
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
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Narcolepsy</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Orexin A deficiency is a primary cause of narcolepsy, a sleep disorder characterized by excessive daytime sleepiness and cataplexy. Orexin A replacement therapy is a promising treatment strategy to restore wakefulness and reduce symptoms.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sleep Deprivation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Orexin A has been shown to counteract the cognitive deficits induced by sleep deprivation. It can improve alertness and performance on cognitive tasks in sleep-deprived individuals.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Appetite Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Orexin A is involved in the regulation of feeding behavior. It can stimulate food intake, and its role in appetite control is being investigated for potential therapeutic applications in eating disorders.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Anesthesia and Sedation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Orexin A can promote arousal and wakefulness, making it a potential agent to reverse the effects of anesthesia and sedation.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Pain Management</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Orexin A has demonstrated analgesic properties in preclinical studies, suggesting a potential role in pain management.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Addiction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The orexin system is implicated in reward-seeking behavior and addiction. Orexin antagonists are being explored as potential treatments for substance use disorders.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Anxiety and Depression</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The orexin system is involved in the regulation of mood and emotions. Dysregulation of the orexin system has been linked to anxiety and depression, and targeting this system may offer new therapeutic avenues.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Neurodegenerative Diseases</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Orexin A has shown neuroprotective effects in preclinical models of neurodegenerative diseases, such as Parkinson's disease. Its potential to slow disease progression is an area of active research.</p>
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
                    Research on Orexin A dosing in humans is still in its early stages, and there are no established clinical guidelines. However, preclinical studies in nonhuman primates provide some insights into potential dosing strategies. Intravenous (IV) Administration: In rhesus monkeys, intravenous doses of 2.5-10.0 μg/kg have been used to study the effects of Orexin A on cognitive performance after sleep deprivation. The higher dose of 10.0 μg/kg was effective in improving performance. Intranasal Administration: Intranasal delivery of Orexin A has been shown to be a more effective method of administration than intravenous injection in nonhuman primates. An estimated dose of 1.0 μg/kg delivered via a nasal atomizer spray significantly improved cognitive performance in sleep-deprived monkeys. It is important to note that these are research doses and not clinical recommendations. The optimal dosing, frequency, and route of administration for Orexin A in humans will require further investigation through clinical trials.
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
                    As an endogenous neuropeptide, Orexin A is generally considered safe when present at physiological levels. However, the administration of exogenous Orexin A, particularly at supraphysiologic doses, may carry potential risks. Much of the available safety data comes from studies of orexin receptor antagonists, which block the effects of orexin and are used to treat insomnia. While these are pharmacologically different from Orexin A (an agonist), they provide insights into the potential consequences of modulating the orexin system. Orexin receptor antagonists have been associated with side effects such as somnolence, headache, and dizziness. More serious but less common adverse events have been reported, including narcolepsy-like symptoms such as sleep paralysis, and complex sleep-related behaviors. There have also been reports of psychiatric side effects, including depression and suicidal ideation, with some orexin antagonists. It is important to note that these are risks associated with *blocking* orexin signaling, and the risks of *enhancing* orexin signaling with an agonist like Orexin A may be different. For example, excessive orexin stimulation could potentially lead to insomnia, anxiety, or over-arousal. Further research is needed to fully characterize the safety profile of exogenous Orexin A administration in humans. Clinical trials will be essential to determine the potential side effects, contraindications, and long-term safety of Orexin A as a therapeutic agent.
                  </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Drug Interactions</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Information on specific drug interactions with Orexin A is limited. However, based on its mechanism of action and the metabolism of related compounds, several potential interactions can be anticipated. Orexin A is a peptide, and its metabolism is likely to involve peptidases rather than the cytochrome P450 (CYP) enzyme system that metabolizes many small-molecule drugs. This suggests that Orexin A may have a lower potential for CYP-mediated drug interactions compared to small-molecule orexin receptor modulators. However, this needs to be confirmed through further research. Given its role in promoting wakefulness and arousal, Orexin A may have pharmacodynamic interactions with other drugs that affect the central nervous system. For example, co-administration of Orexin A with CNS stimulants could have additive effects, potentially leading to overstimulation, anxiety, or insomnia. Conversely, Orexin A may counteract the effects of CNS depressants, such as sedatives, hypnotics, and alcohol. It is also possible that drugs that affect the synthesis or release of Orexin A could interact with exogenously administered Orexin A. For example, certain medications or substances that alter hypothalamic function could potentially modulate the effects of Orexin A. As with the safety profile, more research is needed to fully understand the drug interaction potential of Orexin A. Healthcare providers should exercise caution when considering the use of Orexin A in patients who are taking other medications, particularly those that act on the central nervous system.
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
                      Sakurai, T. et al. (1998). Orexins and orexin receptors: a family of hypothalamic neuropeptides and G protein-coupled receptors that regulate feeding behavior. Cell.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Chemelli, R. M. et al. (1999). Narcolepsy in orexin knockout mice: molecular genetics of sleep regulation. Cell.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Peyron, C. et al. (2000). A mutation in a case of early onset narcolepsy and a generalized absence of hypocretin peptides in human narcoleptic brains. Nature Medicine.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Hara, J. et al. (2001). Orexin-A-like immunoreactivity in the rat brain after stress. Brain Research.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Deadwyler, S. A. et al. (2007). Systemic and nasal delivery of orexin-A (hypocretin-1) reduces the effects of sleep deprivation on cognitive performance in nonhuman primates. Journal of Neuroscience.
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
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>
        Sakurai T, et al. "Orexins and orexin receptors: a family of hypothalamic neuropeptides and G protein-coupled receptors that regulate feeding behavior." <em>Cell</em>. 1998;92(4):573-85.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9491897/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 9491897</a>
      </li>
      <li>
        de Lecea L, et al. "The hypocretins: hypothalamus-specific peptides with neuroexcitatory activity." <em>Proc Natl Acad Sci U S A</em>. 1998;95(1):322-7.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9419374/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 9419374</a>
      </li>
      <li>
        Chemelli RM, et al. "Narcolepsy in orexin knockout mice: molecular genetics of sleep regulation." <em>Cell</em>. 1999;98(4):437-51.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/10481910/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 10481910</a>
      </li>
      <li>
        Sakurai T. "The role of orexin in motivated behaviours." <em>Nat Rev Neurosci</em>. 2014;15(11):719-31.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25349919/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 25349919</a>
      </li>
      <li>
        Hara J, et al. "Genetic ablation of orexin neurons in mice results in narcolepsy, hypophagia, and obesity." <em>Neuron</em>. 2001;30(2):345-54.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/11395000/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 11395000</a>
      </li>
      <li>
        Willie JT, et al. "Distinct narcolepsy syndromes in orexin receptor-2 and orexin null mice." <em>Neuron</em>. 2003;38(5):715-30.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/12797997/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 12797997</a>
      </li>
      <li>
        Johnson PL, et al. "Orexin, stress, and anxiety/panic states." <em>Prog Brain Res</em>. 2012;198:133-61.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22340912/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 22340912</a>
      </li>
      <li>
        Mahler SV, et al. "Orexin/hypocretin signaling in the paraventricular nucleus of the thalamus regulates cue-induced reinstatement of cocaine seeking." <em>J Neurosci</em>. 2014;34(8):2693-705.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24553952/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 24553952</a>
      </li>
      <li>
        Mieda M, et al. "Orexin peptides prevent cataplexy and improve wakefulness in an orexin neuron-ablated model of narcolepsy in mice." <em>Proc Natl Acad Sci U S A</em>. 2004;101(13):4649-54.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/15070777/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 15070777</a>
      </li>
      <li>
        Tsujino N, Sakurai T. "Role of orexin in modulating arousal, feeding, and motivation." <em>Front Behav Neurosci</em>. 2013;7:28.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23565000/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">PMID: 23565000</a>
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm">
      Orexin A's effects on wakefulness and energy metabolism can be potentiated by combining with the following compounds:
    </p>
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>
        <strong>Modafinil:</strong> Enhances wake-promoting effects via complementary mechanisms on the central nervous system.
      </li>
      <li>
        <strong>Caffeine:</strong> Synergizes to improve alertness and cognitive function.
      </li>
      <li>
        <strong>Melatonin antagonists (e.g., Ramelteon):</strong> May help regulate circadian rhythm alongside orexin pathways.
      </li>
      <li>
        <strong>Histamine H3 receptor antagonists:</strong> Support increased histaminergic tone, complementing orexin-induced arousal.
      </li>
      <li>
        <strong>Exercise and physical activity:</strong> Natural stimuli that enhance endogenous orexin release and improve overall efficacy.
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
    <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm">
      Safety considerations when using Orexin A include:
    </p>
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
      <li>
        <strong>Contraindications:</strong> Avoid use in patients with uncontrolled hypertension, severe cardiovascular disease, or known hypersensitivity to orexin peptides.
      </li>
      <li>
        <strong>Drug Interactions:</strong> Caution with CNS stimulants (e.g., amphetamines, modafinil) due to potential additive effects on blood pressure and heart rate.
      </li>
      <li>
        <strong>Psychiatric Conditions:</strong> Use cautiously in patients with anxiety disorders or psychosis, as orexin may exacerbate symptoms.
      </li>
      <li>
        <strong>Pregnancy and Lactation:</strong> Insufficient data; use only if clearly needed and under medical supervision.
      </li>
      <li>
        <strong>Monitoring:</strong> Regular cardiovascular and neurological assessment recommended during therapy.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Orexin B (Hypocretin-2)</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Prepro-orexin</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Secretin/Glucagon Superfamily</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Dr. Peptide AI CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Orexin A Protocol</h2>
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
