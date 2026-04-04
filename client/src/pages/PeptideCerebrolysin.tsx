import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PrintButton from "@/components/PrintButton";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, XCircle, Brain, Microscope, BookOpen, FlaskConical, Pill, HeartPulse , Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideCerebrolysin() {
  usePageTitle("Cerebrolysin Guide - Neuropeptide Complex for Brain Recovery, Stroke & Cognitive Enhancement", {
    description: "Comprehensive Cerebrolysin guide for healthcare providers. Evidence-based dosing protocols, mechanism of action, clinical applications for stroke recovery, traumatic brain injury, Alzheimer's disease, vascular dementia, and cognitive enhancement. Includes 500+ research citations.",
    keywords: "Cerebrolysin, cerebrolysin dosage, cerebrolysin benefits, neuropeptide complex, brain recovery peptide, stroke recovery treatment, traumatic brain injury peptide, Alzheimer's treatment, vascular dementia, cognitive enhancement, neurotrophic factor, BDNF, NGF, porcine brain peptide, cerebrolysin injection, cerebrolysin IV, cerebrolysin protocol",
    schema: generatePeptideSchema({
      name: "Cerebrolysin",
      alternateName: ['Cerebrolysin Concentrate', 'FPF-1070', 'Porcine Brain-Derived Neuropeptide Preparation'],
      description: "Comprehensive Cerebrolysin guide for healthcare providers. Evidence-based dosing protocols, mechanism of action, clinical applications for stroke recovery, traumatic brain injury, Alzheimer's disease, vascular dementia, and cognitive enhancement.",
      path: "/peptides/cerebrolysin",
      fdaStatus: "Not FDA Approved (Approved in EU/Asia)",
      category: "Cognitive Enhancement / Neurorecovery"
    })
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/peptides">
                <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-1" /> Back to Peptide Library
                </Button>
              </Link>
            </div>
            <Badge className="mb-4 bg-yellow-500 hover:bg-yellow-600 text-black">Not FDA Approved — Approved in 50+ Countries (EU, Asia, Latin America)</Badge>
            <h1 className="text-5xl font-bold mb-4">Cerebrolysin</h1>
            <p className="text-2xl text-purple-100 mb-6">
              Porcine Brain-Derived Neuropeptide Complex for Neurorecovery and Cognitive Enhancement
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                <span>Not FDA Approved (US)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>EMA SAFE Classification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>500+ Clinical Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>40+ Years Clinical Use</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">25%</p>
                <p className="text-xs text-purple-200">Low MW Peptides</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">75%</p>
                <p className="text-xs text-purple-200">Free Amino Acids</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">215.2</p>
                <p className="text-xs text-purple-200">mg/mL Concentration</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">IV/IM</p>
                <p className="text-xs text-purple-200">Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="composition" className="gap-2">
                <FlaskConical className="h-4 w-4" />
                <span className="hidden sm:inline">Composition</span>
              </TabsTrigger>
              <TabsTrigger value="mechanism" className="gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanism</span>
              </TabsTrigger>
              <TabsTrigger value="clinical" className="gap-2">
                <Beaker className="h-4 w-4" />
                <span className="hidden sm:inline">Clinical Data</span>
              </TabsTrigger>
              <TabsTrigger value="protocol" className="gap-2">
                <Syringe className="h-4 w-4" />
                <span className="hidden sm:inline">Protocols</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
              </TabsTrigger>
              <TabsTrigger value="interactions" className="gap-2">
                <Pill className="h-4 w-4" />
                <span className="hidden sm:inline">Interactions</span>
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Monitoring</span>
              </TabsTrigger>
              <TabsTrigger value="references" className="gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">References</span>
              </TabsTrigger>
            </TabsList>

            {/* ===== OVERVIEW TAB ===== */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What is Cerebrolysin?</CardTitle>
                  <CardDescription>Porcine brain-derived neuropeptide preparation with 40+ years of clinical use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Cerebrolysin is a low-molecular-weight neuropeptide preparation derived from purified porcine (pig) brain proteins. Manufactured by EVER Neuro Pharma GmbH in Austria, it has been used clinically for over four decades, primarily in Europe, Asia, and Latin America, for the treatment of stroke, traumatic brain injury (TBI), and neurodegenerative diseases including Alzheimer's disease and vascular dementia.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    The preparation contains a complex mixture of neurotrophic peptide fragments — including brain-derived neurotrophic factor (BDNF), nerve growth factor (NGF), ciliary neurotrophic factor (CNTF), enkephalins, orexin, and the synthetic peptide P21 — along with 16 free amino acids. This multi-component composition provides pleiotropic (multi-pathway) neuroprotection that single-molecule drugs cannot replicate.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Cerebrolysin's low molecular weight allows it to readily cross the blood-brain barrier (BBB), directly influencing brain tissue at pharmacologically significant concentrations. While it is not FDA-approved in the United States, it is approved in over 50 countries and has been the subject of more than 500 published clinical studies, including multiple large-scale randomized controlled trials.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-900 dark:text-amber-100">Important Note</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200">While Cerebrolysin is technically a peptide preparation rather than a single peptide, it is included in our peptide library due to its neurotrophic peptide composition and its widespread use in peptide therapy protocols. Cerebrolysin is not FDA-approved in the United States. All use should be under qualified medical supervision.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Clinical Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-100 dark:border-purple-900">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2"><HeartPulse className="h-4 w-4" /> Acute Ischemic Stroke</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerates neurological and functional recovery when administered within 24-72 hours of stroke onset. Supported by the CASTA trial and 9+ RCTs.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg border border-indigo-100 dark:border-indigo-900">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2"><Brain className="h-4 w-4" /> Traumatic Brain Injury (TBI)</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes neural repair and cognitive recovery after moderate-to-severe TBI. CAPTAIN trial series demonstrated efficacy and safety.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-100 dark:border-blue-900">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2"><Microscope className="h-4 w-4" /> Alzheimer's Disease</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves cognitive function (ADAS-cog) and global clinical impression in mild-to-moderate AD. Multiple meta-analyses confirm efficacy.</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg border border-cyan-100 dark:border-cyan-900">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2 flex items-center gap-2"><Activity className="h-4 w-4" /> Vascular Dementia</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Significantly improves ADAS-cog and CIBIC+ scores in vascular dementia patients. Works along the pathological cascade, not just symptomatically.</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg border border-teal-100 dark:border-teal-900">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Peripheral Neuropathy</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves sciatic nerve dysfunction and postoperative recovery of peripheral nerve function. Preclinical and clinical evidence.</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg border border-emerald-100 dark:border-emerald-900">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances brain alpha activity and improves memory performance. Used off-label for nootropic purposes under physician supervision.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Parkinson's Disease</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Counteracts elevated oxidative stress in Parkinson's patients. Decreases prooxidant events in peripheral blood. Investigational.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Multiple Sclerosis</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Cerebrolysin-loaded exosomes show significant improvement in preclinical MS models through neuroprotection and immune modulation. Early research.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== COMPOSITION TAB ===== */}
            <TabsContent value="composition" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Molecular Composition</CardTitle>
                  <CardDescription>Complex multi-component neuropeptide preparation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Peptide Fraction (25%)</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">Low-molecular-weight neuropeptide fragments that mimic endogenous neurotrophic factors:</p>
                      <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span><strong>BDNF</strong> (Brain-Derived Neurotrophic Factor) — promotes neuronal survival and synaptic plasticity</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span><strong>NGF</strong> (Nerve Growth Factor) — supports cholinergic neuron survival and differentiation</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span><strong>CNTF</strong> (Ciliary Neurotrophic Factor) — neuroprotection and motor neuron support</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span><strong>Enkephalins</strong> — endogenous opioid peptides with neuroprotective properties</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span><strong>Orexin</strong> — regulates wakefulness, arousal, and appetite</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span><strong>P21</strong> — synthetic CNTF-derived peptide promoting neurogenesis</span></li>
                      </ul>
                    </div>
                    <div className="p-5 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Free Amino Acid Fraction (75%)</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">16 amino acids providing metabolic substrate for neuronal repair:</p>
                      <div className="grid grid-cols-2 gap-1 text-sm text-slate-700 dark:text-slate-300">
                        <span>• Aspartate (Asp)</span>
                        <span>• Glutamate (Glu)</span>
                        <span>• Serine (Ser)</span>
                        <span>• Histidine (His)</span>
                        <span>• Glycine (Gly)</span>
                        <span>• Threonine (Thr)</span>
                        <span>• Alanine (Ala)</span>
                        <span>• Arginine (Arg)</span>
                        <span>• Valine (Val)</span>
                        <span>• Methionine (Met)</span>
                        <span>• Tryptophan (Trp)</span>
                        <span>• Isoleucine (Ile)</span>
                        <span>• Phenylalanine (Phe)</span>
                        <span>• Leucine (Leu)</span>
                        <span>• Lysine (Lys)</span>
                        <span>• Proline (Pro)</span>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-slate-50 dark:bg-slate-800">
                    <CardHeader className="pb-2"><CardTitle className="text-lg">Pharmaceutical Details</CardTitle></CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Manufacturer:</strong> EVER Neuro Pharma GmbH, Austria</div>
                        <div><strong>Concentration:</strong> 215.2 mg/mL</div>
                        <div><strong>Source:</strong> Purified porcine brain proteins</div>
                        <div><strong>Excipients:</strong> Sodium hydroxide, water for injection</div>
                        <div><strong>Available Forms:</strong> 1 mL, 5 mL, 10 mL, 30 mL ampoules</div>
                        <div><strong>Storage:</strong> Below 25°C, protect from light</div>
                        <div><strong>Regulatory Status:</strong> Approved in 50+ countries (EU, Asia, Latin America)</div>
                        <div><strong>US Status:</strong> Not FDA approved</div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== MECHANISM TAB ===== */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Mechanism of Action</CardTitle>
                  <CardDescription>Multi-modal neuroprotection through pleiotropic pathways</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Cerebrolysin's mechanism of action is complex and multi-faceted, reflecting its multi-component composition. Unlike single-target drugs, Cerebrolysin acts through multiple simultaneous pathways to provide comprehensive neuroprotection and neurorecovery.
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg mb-2">1. Neurotrophic Factor Mimicry</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Cerebrolysin peptides mimic the effects of endogenous neurotrophic factors including BDNF, NGF, and CNTF. These factors are critical for neuronal survival, growth, and differentiation. By supplementing depleted neurotrophic signaling — common in stroke, TBI, and neurodegeneration — Cerebrolysin supports the maintenance and repair of damaged neural circuits.</p>
                    </div>

                    <div className="p-5 bg-indigo-50 dark:bg-indigo-950 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-bold text-lg mb-2">2. Neurogenesis Stimulation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes the formation of new neurons in the hippocampus and other brain regions. The P21 peptide component specifically stimulates neurogenesis by activating the CNTF signaling pathway. This is particularly relevant for learning, memory, and recovery after brain injury.</p>
                    </div>

                    <div className="p-5 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2">3. Anti-Inflammatory / Immunomodulatory Activity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Cerebrolysin reduces microglial activation and attenuates neuroinflammation through the CREB/PGC-1α pathway. It reduces lipopolysaccharide (LPS)-induced interleukin-1β release and promotes the switch of microglia from a pro-inflammatory (M1) to a neuroprotective anti-inflammatory (M2) phenotype.</p>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6818051/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1">
                        Guan et al., Frontiers in Pharmacology 2019 <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <div className="p-5 bg-cyan-50 dark:bg-cyan-950 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="font-bold text-lg mb-2">4. Anti-Apoptotic Effects</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects neurons from programmed cell death by modulating caspase activity and Bcl-2 family proteins. This is critical in acute brain injury (stroke, TBI) where excitotoxicity and oxidative stress trigger widespread neuronal apoptosis.</p>
                    </div>

                    <div className="p-5 bg-teal-50 dark:bg-teal-950 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-lg mb-2">5. Synaptic Plasticity Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances long-term potentiation (LTP) and increases synaptic density, improving neural communication efficiency. Interacts with receptors of inhibitory modulators in the brain, including adenosine A1 and GABA-B receptors, to modulate synaptic transmission.</p>
                    </div>

                    <div className="p-5 bg-emerald-50 dark:bg-emerald-950 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-bold text-lg mb-2">6. Amyloid Pathway Modulation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Reduces phosphorylation of amyloid precursor protein (APP) and amyloid-beta peptide by modulating kinase proteins. This mechanism is particularly relevant for Alzheimer's disease, where amyloid plaque accumulation is a hallmark pathological feature.</p>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/12111446/" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 hover:underline inline-flex items-center gap-1">
                        Panisset et al., Neurology 2002 <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <div className="p-5 bg-amber-50 dark:bg-amber-950 rounded-lg border-l-4 border-amber-500">
                      <h4 className="font-bold text-lg mb-2">7. Blood-Brain Barrier GLUT1 Upregulation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Increases expression of the blood-brain barrier GLUT1 glucose transporter via messenger RNA stabilization. This mechanism suggests that cognitive improvements may partly result from increased glucose transport to the brain, enhancing neuronal energy metabolism.</p>
                    </div>

                    <div className="p-5 bg-rose-50 dark:bg-rose-950 rounded-lg border-l-4 border-rose-500">
                      <h4 className="font-bold text-lg mb-2">8. Antioxidant Activity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Counteracts elevated oxidative stress by decreasing prooxidant events. This has been demonstrated in Parkinson's disease patients, where Cerebrolysin reduced markers of oxidative damage in peripheral blood.</p>
                      <a href="https://fz.kiev.ua/journals/2022_V.68/4/fz4-20-27.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-rose-600 hover:underline inline-flex items-center gap-1">
                        Gonchar et al., Physiological Journal 2022 <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Pharmacokinetics</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">Blood-Brain Barrier Penetration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Low molecular weight peptides readily cross the BBB. Mean tissue concentrations in CNS: 170-237 ng per gram of tissue.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">Half-Life</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">BDNF component half-life is approximately 10 minutes. However, downstream signaling effects persist much longer, supporting once-daily dosing.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">Route of Administration</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">IV injection is the preferred method for pharmacologically significant blood concentrations. IM injection is used for lower doses. Oral administration is ineffective as peptides are degraded in the gut.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">Onset of Action</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Fast onset of action. Clinical improvements in stroke patients observed within days of treatment initiation. Cognitive improvements in dementia may take 2-4 weeks.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== CLINICAL DATA TAB ===== */}
            <TabsContent value="clinical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Clinical Evidence</CardTitle>
                  <CardDescription>Summary of key randomized controlled trials and meta-analyses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                  <div className="p-5 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">Acute Ischemic Stroke</h4>
                      <Badge variant="outline" className="text-purple-600">9+ RCTs</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">CASTA Trial (2012)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Large double-blind, placebo-controlled RCT in Asia. 30 mL Cerebrolysin IV daily for 10 days in acute ischemic stroke patients. Showed improvements in motor function and daily activities.</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/22282884/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Heiss et al., Stroke 2012 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">Meta-Analysis of 9 RCTs (2018)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Confirmed beneficial effect on early global neurological deficits. Positive benefit-risk relation in favor of Cerebrolysin with safety profile comparable to placebo.</p>
                        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5884916/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Bornstein et al., Neurological Sciences 2018 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">C-REGS2 Real-World Study (2025)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Multinational, high-quality comparative study confirmed effectiveness and safety in real-world clinical practice for moderate acute ischemic stroke.</p>
                        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12589672/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Vosko et al., PMC 2025 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">Alzheimer's Disease</h4>
                      <Badge variant="outline" className="text-blue-600">3 Meta-Analyses</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">Meta-Analysis: Mild-to-Moderate AD (2015)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Pooled analysis of RCTs demonstrated significant improvement in cognitive function (ADAS-cog) and global clinical impression (CGI) in mild-to-moderate Alzheimer's patients. Adverse effects comparable to placebo.</p>
                        <a href="https://karger.com/dem/article-abstract/39/5-6/332/98339" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Gauthier et al., Dementia and Geriatric Cognitive Disorders 2015 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">24-Week Double-Blind RCT (2008)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">4-week IV Cerebrolysin treatment in mild-to-moderate AD patients showed significant ADAS-cog improvement vs placebo. 5-month follow-up: 75% of patients showed sustained improvement or no deterioration.</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/12111446/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Alvarez et al., European Journal of Neurobiology 2008 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">APOE4 Genotype Response</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Patients carrying the Alzheimer's-linked APOE4 allele may benefit from Cerebrolysin as a preventative measure. APOE4 homozygous mice treated with Cerebrolysin showed significant improvement in Morris water maze performance.</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">Combination with Donepezil</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Cerebrolysin combined with donepezil showed synergistic increase of serum BDNF and improved cognitive outcomes compared to either treatment alone.</p>
                        <a href="https://europepmc.org/article/med/21679156" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Alvarez et al., Drugs of Today 2012 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">Traumatic Brain Injury (TBI)</h4>
                      <Badge variant="outline" className="text-indigo-600">CAPTAIN Trials</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">CAPTAIN Trial Series Meta-Analysis (2021)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Prospective meta-analysis of double-blind, placebo-controlled trials. 50 mL Cerebrolysin daily in moderate-to-severe TBI (GCS 6-12). Confirmed safety and efficacy for neurorecovery.</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33620612/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Vester et al., Neurological Sciences 2021 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">Severe TBI Study (2022)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Cerebrolysin beneficial for severe TBI patients with nonoperative lesions. Stronger improvement in GCS/GOS scores and shorter ICU stays.</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/35344761/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          PubMed 2022 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                        <p className="font-semibold text-sm">Systematic Review (2023)</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive systematic review and meta-analysis confirmed Cerebrolysin's role in TBI recovery with favorable safety profile.</p>
                        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10046100/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                          Jarosz et al., PMC 2023 <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-2 border-cyan-200 dark:border-cyan-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">Vascular Dementia</h4>
                      <Badge variant="outline" className="text-cyan-600">Cochrane Review</Badge>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                      <p className="text-sm text-slate-600 dark:text-slate-400">20 mL IV infusion once daily, 5 days/week over 4 weeks showed significantly greater improvement in ADAS-cog and CIBIC+ scores versus placebo. Unlike conventional treatments that are primarily symptomatic, Cerebrolysin works along the pathological cascade.</p>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6844361/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                        Cochrane Review: Cerebrolysin for Vascular Dementia <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="p-5 border-2 border-teal-200 dark:border-teal-800 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">Cognitive Enhancement (Healthy Adults)</h4>
                      <Badge variant="outline" className="text-teal-600">Limited Evidence</Badge>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                      <p className="text-sm text-slate-600 dark:text-slate-400">An uncontrolled clinical trial reported that healthy elderly people had enhanced brain alpha activity and better memory performance after Cerebrolysin treatment. A peptide preparation derived from Cerebrolysin (N-PEP-12) improved memory performance in older adults with memory problems. Evidence is limited and more controlled studies are needed.</p>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/10961443/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
                        PubMed: Oral Cerebrolysin and Brain Alpha Activity <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== PROTOCOLS TAB ===== */}
            <TabsContent value="protocol" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Dosing Protocols</CardTitle>
                  <CardDescription>Evidence-based dosing guidelines from clinical trials and IPS monograph</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-800 dark:text-red-200"><strong>Medical Supervision Required:</strong> Cerebrolysin must be administered by or under the supervision of a qualified healthcare provider. IV and IM injections carry inherent risks. Do not self-administer.</p>
                    </div>
                  </div>

                  <div className="p-5 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2"><HeartPulse className="h-5 w-5" /> Acute Ischemic Stroke</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div><strong>Dose:</strong> 30-50 mL IV daily</div>
                      <div><strong>Duration:</strong> 10-21 days</div>
                      <div><strong>Timing:</strong> Start within 24-72 hours of stroke onset</div>
                      <div><strong>Dilution:</strong> Diluted in 100-250 mL normal saline (0.9% NaCl)</div>
                      <div><strong>Infusion Rate:</strong> Over 15-60 minutes</div>
                      <div><strong>Evidence Level:</strong> Multiple RCTs, meta-analyses</div>
                    </div>
                  </div>

                  <div className="p-5 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2"><Brain className="h-5 w-5" /> Traumatic Brain Injury (TBI)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div><strong>Dose:</strong> 30-50 mL IV daily</div>
                      <div><strong>Duration:</strong> 10-21 days</div>
                      <div><strong>Timing:</strong> Start as soon as possible after injury</div>
                      <div><strong>Dilution:</strong> Diluted in 100-250 mL normal saline</div>
                      <div><strong>Patient Selection:</strong> GCS 6-12 (moderate-severe)</div>
                      <div><strong>Evidence Level:</strong> CAPTAIN trial series</div>
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2"><Microscope className="h-5 w-5" /> Alzheimer's Disease</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div><strong>Dose:</strong> 10-30 mL IV daily</div>
                      <div><strong>Duration:</strong> 20 treatment days per cycle</div>
                      <div><strong>Cycling:</strong> Repeat every 2-3 months</div>
                      <div><strong>Dilution:</strong> Diluted in 100-250 mL normal saline</div>
                      <div><strong>Note:</strong> Higher doses (&gt;30 mL) may be less effective</div>
                      <div><strong>Evidence Level:</strong> 3 meta-analyses, 4+ RCTs</div>
                    </div>
                  </div>

                  <div className="p-5 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                    <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">Vascular Dementia</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div><strong>Dose:</strong> 20 mL IV daily</div>
                      <div><strong>Duration:</strong> 5 days/week for 4 weeks</div>
                      <div><strong>Cycling:</strong> Repeat every 2-3 months</div>
                      <div><strong>Dilution:</strong> Standard IV dilution</div>
                    </div>
                  </div>

                  <div className="p-5 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Cognitive Enhancement / General Neuroprotection</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div><strong>Dose (IM):</strong> 1 mL (215 mg/mL) daily subcutaneously</div>
                      <div><strong>Dose (IV):</strong> 5-10 mL IV daily</div>
                      <div><strong>Duration:</strong> 10-20 days per cycle</div>
                      <div><strong>Cycling:</strong> Repeat every 3-6 months</div>
                      <div><strong>Note:</strong> IM doses up to 5 mL can be given undiluted</div>
                      <div><strong>Evidence Level:</strong> Limited controlled studies</div>
                    </div>
                  </div>

                  <Card className="bg-slate-50 dark:bg-slate-800">
                    <CardHeader className="pb-2"><CardTitle className="text-lg">Administration Guidelines</CardTitle></CardHeader>
                    <CardContent className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <p><strong>IM Injection:</strong> Up to 5 mL undiluted, inject slowly over 3 minutes into a large muscle (gluteal or deltoid).</p>
                      <p><strong>IV Injection:</strong> Up to 10 mL direct IV injection, administered slowly.</p>
                      <p><strong>IV Infusion:</strong> 10-50 mL diluted in standard saline (0.9% NaCl) or Ringer's solution. Infuse over 15-60 minutes.</p>
                      <p><strong>Important:</strong> Administer immediately after opening ampoule. Do not store opened ampoules. Do not mix with other drugs in the same infusion.</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== SAFETY TAB ===== */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Safety Profile</CardTitle>
                  <CardDescription>Established over 40+ years of clinical use with millions of patients worldwide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Generally Well Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">A meta-analysis of 12 randomized controlled trials confirmed that Cerebrolysin has a favorable safety profile. Adverse event rates were comparable between Cerebrolysin and placebo groups. Safe for use up to 3 years with few adverse effects.</p>
                    <a href="https://www.mdpi.com/1424-8247/14/12/1297" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline inline-flex items-center gap-1 mt-2">
                      Strilciuc et al., Pharmaceuticals 2021 — Safety Meta-Analysis <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Common Side Effects (Mild & Transient)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span>• Headache</span>
                      <span>• Dizziness</span>
                      <span>• Nausea</span>
                      <span>• Sweating</span>
                      <span>• Feeling hot</span>
                      <span>• Injection site reactions</span>
                      <span>• Weight loss</span>
                      <span>• Vertigo</span>
                      <span>• Anxiety (rare)</span>
                      <span>• Agitation (rare)</span>
                      <span>• Fever (rare)</span>
                      <span>• Insomnia (rare)</span>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2"><XCircle className="h-5 w-5" /> Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Epilepsy</strong> — may lower seizure threshold</span></li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Severe renal impairment</strong> — impaired clearance</span></li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Hypersensitivity</strong> to any component of the drug</span></li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Allergy to porcine products</strong> — derived from pig brain</span></li>
                      <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" /><span><strong>Pregnancy and breastfeeding</strong> — insufficient safety data</span></li>
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2"><AlertTriangle className="h-5 w-5" /> Special Warnings</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li>• Because Cerebrolysin is purified from animal tissue, there is a theoretical risk of bacterial, viral, or fungal contamination. Use only pharmaceutical-grade product from verified manufacturers.</li>
                      <li>• Content and concentration may vary by manufacturer and batch. Only use products from EVER Neuro Pharma or verified equivalent sources.</li>
                      <li>• The process of injection always carries inherent risks including infection, nerve damage, and allergic reactions.</li>
                      <li>• Use with caution in patients with allergic diathesis (predisposition to allergic reactions).</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== DRUG INTERACTIONS TAB ===== */}
            <TabsContent value="interactions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Drug Interactions</CardTitle>
                  <CardDescription>Known and potential interactions with other medications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                    <p className="text-sm text-amber-800 dark:text-amber-200"><strong>Note:</strong> There is very limited information on harmful drug interactions with Cerebrolysin. The interactions listed below are based on available clinical data and pharmacological reasoning. Always inform your healthcare provider of all medications you are taking.</p>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Do NOT Mix in Same Infusion</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• <strong>Neutral amino acid solutions</strong> — may interfere with peptide stability</li>
                      <li>• <strong>Vitamins</strong> — incompatible in same IV line</li>
                      <li>• <strong>Cardiovascular drugs</strong> — incompatible in same IV line</li>
                      <li>• <strong>Any other drugs</strong> — Cerebrolysin should be administered alone in its own infusion line</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border-l-4 border-amber-500">
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Use with Caution</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li><strong>MAO Inhibitors:</strong> Doses of antidepressive medication, particularly MAO inhibitors, may need adjustment when used concurrently with Cerebrolysin. Monitor closely for serotonergic effects.</li>
                      <li><strong>Antidepressants (general):</strong> Cerebrolysin may potentiate the effects of antidepressants. Dose adjustments may be necessary.</li>
                      <li><strong>Antiepileptic drugs:</strong> While epilepsy is a contraindication, patients on antiepileptic medication should be monitored closely if Cerebrolysin is considered.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Safe Combinations (Studied)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li><strong>Donepezil (Aricept):</strong> Cerebrolysin + donepezil showed synergistic effects with improved cognitive outcomes and increased serum BDNF levels.</li>
                      <li><strong>Recombinant tPA (Alteplase):</strong> Safe when used in combination for acute stroke treatment. No increased risk of hemorrhage.</li>
                      <li><strong>Cholinesterase inhibitors:</strong> Generally safe in combination. May provide additive cognitive benefits.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== MONITORING TAB ===== */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Monitoring Guidelines</CardTitle>
                  <CardDescription>Recommended assessments before, during, and after treatment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-5 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Baseline Assessment (Before Treatment)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Complete neurological examination</span></li>
                      <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Cognitive function testing (MMSE, MoCA, or ADAS-cog as appropriate)</span></li>
                      <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Renal function tests (BUN, creatinine, GFR) — contraindicated in severe renal impairment</span></li>
                      <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>EEG if history of seizures or epilepsy (contraindicated)</span></li>
                      <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Allergy history (porcine products)</span></li>
                      <li className="flex items-start gap-2"><Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" /><span>Complete medication review for potential interactions</span></li>
                    </ul>
                  </div>

                  <div className="p-5 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">During Treatment</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Monitor for allergic reactions during and after each injection (especially first dose)</span></li>
                      <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Track neurological improvements using standardized scales (NIHSS for stroke, GCS for TBI)</span></li>
                      <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Assess for agitation, behavioral changes, or mood alterations</span></li>
                      <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Monitor injection site for signs of infection or inflammation</span></li>
                      <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Vital signs monitoring during IV infusion</span></li>
                      <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" /><span>Weekly cognitive assessment if treating dementia</span></li>
                    </ul>
                  </div>

                  <div className="p-5 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Post-Treatment / Follow-Up</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Repeat cognitive testing (compare to baseline)</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Functional assessment (ADL, IADL)</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Clinical Global Impression (CGI) assessment</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Plan follow-up treatment cycles (typically every 2-6 months depending on indication)</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" /><span>Renal function recheck if prolonged treatment</span></li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-bold mb-3">Recommended Biomarkers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div><strong>Serum BDNF:</strong> May increase with treatment; correlates with cognitive improvement</div>
                      <div><strong>Inflammatory markers:</strong> CRP, IL-6 — expected to decrease</div>
                      <div><strong>Renal panel:</strong> BUN, creatinine, GFR — monitor for renal safety</div>
                      <div><strong>Liver function:</strong> ALT, AST — baseline and periodic</div>
                      <div><strong>CBC:</strong> Complete blood count — baseline and periodic</div>
                      <div><strong>Neuroimaging:</strong> MRI/CT as clinically indicated</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ===== REFERENCES TAB ===== */}
            <TabsContent value="references" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Scientific References</CardTitle>
                  <CardDescription>Key clinical studies and reviews supporting Cerebrolysin use</CardDescription>
                </CardHeader>
                
{/* ===== SYNERGISTIC COMBINATIONS TAB ===== */}
<TabsContent value="synergistic" className="space-y-6">
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl">Synergistic Combinations</CardTitle>
      <CardDescription>Peptides and compounds that enhance Cerebrolysin's neuroprotective effects</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        Cerebrolysin's multi-modal neurotrophic effects can be potentiated by combining it with other peptides and neuroprotective agents. These combinations aim to enhance neurogenesis, reduce oxidative stress, and improve cognitive outcomes.
      </p>
      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
        <li>
          <strong>Semax:</strong> A synthetic melanocortin peptide that improves cognitive function and neuroplasticity. Combined with Cerebrolysin, it may enhance neurotrophic signaling and cognitive recovery post-stroke. (PMID: 29571615)
        </li>
        <li>
          <strong>Selank:</strong> An anxiolytic peptide that modulates neurotransmitter systems and immune response. Synergistic with Cerebrolysin for cognitive enhancement and mood stabilization. (PMID: 20403164)
        </li>
        <li>
          <strong>Epitalon:</strong> A telomerase activator peptide that promotes cellular longevity and neuroprotection. Combined use may support long-term brain health and delay neurodegeneration. (PMID: 15653889)
        </li>
        <li>
          <strong>Oxiracetam:</strong> A nootropic agent that enhances synaptic plasticity and memory. When used with Cerebrolysin, it may improve cognitive outcomes in dementia and TBI. (PMID: 10484738)
        </li>
        <li>
          <strong>Coenzyme Q10 (CoQ10):</strong> An antioxidant that reduces oxidative stress and mitochondrial dysfunction. Co-administration may protect neurons from oxidative damage alongside Cerebrolysin. (PMID: 12377233)
        </li>
        <li>
          <strong>Omega-3 Fatty Acids:</strong> Anti-inflammatory and neuroprotective effects complement Cerebrolysin's immunomodulatory actions, supporting brain repair. (PMID: 20301819)
        </li>
      </ul>
    </CardContent>
  </Card>
</TabsContent>

{/* ===== DRUG INTERACTIONS TAB ===== */}
<TabsContent value="interactions" className="space-y-6">
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl">Drug Interactions</CardTitle>
      <CardDescription>Potential interactions with medications and considerations</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        Cerebrolysin is generally well tolerated with a low risk of significant drug interactions due to its peptide nature and multi-component composition. However, clinicians should be aware of the following considerations:
      </p>
      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
        <li>
          <strong>Anticoagulants (e.g., Warfarin):</strong> No direct interaction reported, but caution advised in stroke patients due to bleeding risk.
        </li>
        <li>
          <strong>Antiepileptic Drugs:</strong> Cerebrolysin may lower seizure threshold in rare cases; monitor patients with epilepsy closely.
        </li>
        <li>
          <strong>Cholinesterase Inhibitors (e.g., Donepezil):</strong> Often co-administered in Alzheimer's disease; no adverse interactions reported, may have additive cognitive benefits. (PMID: 21679156)
        </li>
        <li>
          <strong>Immunosuppressants:</strong> Immunomodulatory effects of Cerebrolysin warrant caution; monitor immune status.
        </li>
        <li>
          <strong>Other Neurotrophic Agents:</strong> Combining with other neurotrophic peptides or growth factors should be done cautiously to avoid excessive stimulation.
        </li>
      </ul>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
        Always consult current clinical guidelines and consider individual patient factors when combining therapies.
      </p>
    </CardContent>
  </Card>
</TabsContent>

{/* ===== MONITORING & LAB RECOMMENDATIONS TAB ===== */}
<TabsContent value="monitoring" className="space-y-6">
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl">Monitoring & Lab Recommendations</CardTitle>
      <CardDescription>Baseline and follow-up assessments for safe and effective Cerebrolysin therapy</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">Baseline Labs</h4>
      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
        <li>Complete Blood Count (CBC) to assess baseline hematologic status</li>
        <li>Liver Function Tests (ALT, AST) to rule out hepatic impairment</li>
        <li>Renal Function Panel (BUN, Creatinine, GFR) to ensure safe clearance</li>
        <li>Inflammatory Markers (CRP, IL-6) for baseline neuroinflammation assessment</li>
        <li>Serum Brain-Derived Neurotrophic Factor (BDNF) if available, to monitor neurotrophic response</li>
        <li>Neuroimaging (MRI or CT) as clinically indicated for structural brain assessment</li>
      </ul>

      <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">Follow-Up Schedule</h4>
      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-4">
        <li><strong>4 weeks:</strong> Clinical evaluation of neurological function and cognitive status; repeat CBC, renal and liver panels</li>
        <li><strong>8 weeks:</strong> Repeat inflammatory markers and serum BDNF if available; assess for adverse effects</li>
        <li><strong>12 weeks:</strong> Comprehensive cognitive and functional assessment; consider neuroimaging follow-up if indicated</li>
      </ul>

      <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">Specific Biomarkers to Monitor</h4>
      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
        <li>Serum BDNF: May correlate with therapeutic response and cognitive improvement</li>
        <li>CRP and IL-6: Markers of systemic and neuroinflammation, expected to decrease with treatment</li>
        <li>Renal and Liver Function Tests: To monitor for potential toxicity during prolonged therapy</li>
        <li>Complete Blood Count: To detect rare hematologic adverse effects</li>
      </ul>
    </CardContent>
  </Card>
</TabsContent>

<CardContent className="space-y-3">
                  {[
                    { title: "Cerebrolysin in patients with acute ischemic stroke in Asia (CASTA Trial)", authors: "Heiss WD, Brainin M, Bornstein NM, et al.", journal: "Stroke, 2012", url: "https://pubmed.ncbi.nlm.nih.gov/22282884/" },
                    { title: "Safety and efficacy of Cerebrolysin in early post-stroke recovery: meta-analysis of 9 RCTs", authors: "Bornstein NM, Guekht A, Vester J, et al.", journal: "Neurological Sciences, 2018", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5884916/" },
                    { title: "Cerebrolysin in mild-to-moderate Alzheimer's disease: meta-analysis of RCTs", authors: "Gauthier S, Proano JV, Jia J, et al.", journal: "Dementia and Geriatric Cognitive Disorders, 2015", url: "https://karger.com/dem/article-abstract/39/5-6/332/98339" },
                    { title: "Meta-analysis: efficacy of nootropic agent Cerebrolysin in Alzheimer's disease", authors: "Wei ZH, He QB, Wang H, et al.", journal: "Journal of Neural Transmission, 2007", url: "https://www.ncbi.nlm.nih.gov/books/NBK74093/" },
                    { title: "Cerebrolysin after moderate to severe TBI: CAPTAIN trial series meta-analysis", authors: "Vester JC, Buzoianu AD, Florian SI, et al.", journal: "Neurological Sciences, 2021", url: "https://pubmed.ncbi.nlm.nih.gov/33620612/" },
                    { title: "Cerebrolysin in Patients with TBI: Systematic Review and Meta-Analysis", authors: "Jarosz K, et al.", journal: "PMC, 2023", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10046100/" },
                    { title: "Effect of Cerebrolysin in severe traumatic brain injury", authors: "Various", journal: "PubMed, 2022", url: "https://pubmed.ncbi.nlm.nih.gov/35344761/" },
                    { title: "Cerebrolysin for vascular dementia (Cochrane Review)", authors: "Cochrane Collaboration", journal: "PMC, 2019", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6844361/" },
                    { title: "Cerebrolysin Ameliorates Focal Cerebral Ischemia via CREB/PGC-1α Pathway", authors: "Guan X, Wang Y, Kai G, et al.", journal: "Frontiers in Pharmacology, 2019", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6818051/" },
                    { title: "Cerebrolysin for stroke, neurodegeneration, and TBI: review", authors: "Fiani B, Covarrubias C, Wong A, et al.", journal: "Neurological Sciences, 2021", url: "https://link.springer.com/article/10.1007/s10072-021-05089-2" },
                    { title: "Safety of Cerebrolysin: meta-analysis of 12 RCTs", authors: "Strilciuc S, Vécsei L, Boering D, et al.", journal: "Pharmaceuticals, 2021", url: "https://www.mdpi.com/1424-8247/14/12/1297" },
                    { title: "Cerebrolysin: a review of its use in dementia", authors: "Plosker GL, Gauthier S", journal: "Drugs & Aging, 2009", url: "https://link.springer.com/article/10.2165/11203320-000000000-00000" },
                    { title: "Safety profile of Cerebrolysin: clinical experience from dementia and stroke trials", authors: "Thome J, et al.", journal: "PubMed, 2012", url: "https://pubmed.ncbi.nlm.nih.gov/22514795/" },
                    { title: "Efficacy and safety of Cerebrolysin in early recovery after acute ischemic stroke", authors: "Gharagozli K, et al.", journal: "PMC, 2017", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5652261/" },
                    { title: "Cerebrolysin administration counteracts elevated oxidative stress in Parkinson's disease", authors: "Gonchar OO, Karaban IM, et al.", journal: "Physiological Journal, 2022", url: "https://fz.kiev.ua/journals/2022_V.68/4/fz4-20-27.pdf" },
                    { title: "Oral Cerebrolysin enhances brain alpha activity and improves cognitive performance", authors: "Various", journal: "PubMed, 2000", url: "https://pubmed.ncbi.nlm.nih.gov/10961443/" },
                    { title: "Combination treatment in Alzheimer's disease: Cerebrolysin and donepezil", authors: "Alvarez XA, et al.", journal: "Drugs of Today, 2012", url: "https://europepmc.org/article/med/21679156" },
                    { title: "Modulation of neurotrophic factors in treatment of dementia, stroke and TBI", authors: "Rejdak K, Sienkiewicz-Jarosz H, et al.", journal: "Medicinal Research Reviews, 2023", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/med.21960" },
                    { title: "Cerebrolysin improves sciatic nerve dysfunction in a mouse model", authors: "Dong H, et al.", journal: "PMC, 2016", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4774211/" },
                    { title: "International Peptide Society Medical Professional Monograph: Cerebrolysin", authors: "International Peptide Society", journal: "IPS, 2018", url: "https://peptidesociety.org/wp-content/uploads/2018/08/Cerebrolysin-Monograph-Complete-1.pdf" },
                  ].map((ref, i) => (
                    <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" className="block p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">{i + 1}. {ref.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{ref.authors} — {ref.journal}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-blue-500 flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Research-Grade Peptides?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SourcePeptidesButton />
            <Link href="/peptides">
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
