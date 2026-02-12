import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";

export default function PeptideDihexa() {
  usePageTitle("Dihexa Guide - Cognitive Enhancement Peptide", {
    description: "Comprehensive dihexa guide for medical professionals. Nootropic peptide protocols and cognitive enhancement.",
    keywords: "dihexa, nootropic peptide, cognitive enhancement, brain peptide, memory, neuroprotection, HGF mimetic",
    schema: generatePeptideSchema({
      name: "Dihexa",
      alternateName: ['N-hexanoic-Tyr-Ile-(6) aminohexanoic amide'],
      description: "Comprehensive dihexa guide for medical professionals. Nootropic peptide protocols and cognitive enhancement.",
      path: "/peptides/dihexa",
      fdaStatus: "Investigational",
      category: "Cognitive Enhancement"
    })
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:via-background dark:to-cyan-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Cognitive Enhancement & Synaptogenesis
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Dihexa
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              N-hexanoic-Tyr-Ile-(6) aminohexanoic amide. Orally active, blood-brain barrier permeable peptide that induces synaptogenesis at picomolar concentrations through HGF/c-Met activation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">64</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10⁷x</div>
                <div className="text-sm text-muted-foreground">More Potent Than BDNF</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Oral</div>
                <div className="text-sm text-muted-foreground">Administration Route</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Investigational Peptide:</strong> Dihexa is not FDA-approved and is considered experimental. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview" className="gap-2">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanisms" className="gap-2">
                <FlaskConical className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanisms</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="gap-2">
                <FlaskConical className="h-4 w-4" />
                <span className="hidden sm:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="gap-2">
                <Pill className="h-4 w-4" />
                <span className="hidden sm:inline">Protocols</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Dihexa?</CardTitle>
                  <CardDescription>Breakthrough synaptogenic peptide for cognitive enhancement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a <strong>metabolically stabilized angiotensin IV analog</strong> developed specifically to overcome the limitations of earlier peptide-based cognitive enhancers. It represents a major breakthrough in peptide therapeutics due to its <strong>oral bioavailability, blood-brain barrier permeability, and exceptional potency</strong>.
                  </p>
                  <p>
                    The peptide was engineered through systematic medicinal chemistry modifications to enhance metabolic stability and hydrophobicity while preserving the core procognitive activity of angiotensin IV. The result is a <strong>potent synaptogenic agent</strong> capable of inducing new synapse formation at <strong>picomolar concentrations</strong> - approximately <strong>10 million times more potent than brain-derived neurotrophic factor (BDNF)</strong> in promoting synaptogenesis.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Chemical name:</strong> N-hexanoic-Tyr-Ile-(6) aminohexanoic amide</li>
                      <li><strong>Mechanism:</strong> HGF/c-Met receptor system activation</li>
                      <li><strong>Administration:</strong> Orally active (crosses gut barrier)</li>
                      <li><strong>BBB permeability:</strong> Excellent (designed for CNS penetration)</li>
                      <li><strong>Potency:</strong> Picomolar range (10⁻¹² M)</li>
                      <li><strong>Primary effect:</strong> Synaptogenesis (new synapse formation)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of Dihexa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Cognitive Enhancement</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Memory consolidation and recall</li>
                        <li>Learning enhancement</li>
                        <li>Spatial memory improvement</li>
                        <li>Reversal of scopolamine-induced deficits</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Alzheimer's Disease Potential</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Synaptic connectivity restoration</li>
                        <li>Cognitive function improvement</li>
                        <li>Hippocampal synaptogenesis</li>
                        <li>Age-related cognitive decline reversal</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Neuroprotection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Protection against neurotoxic insults</li>
                        <li>Ischemia recovery support</li>
                        <li>Traumatic brain injury recovery</li>
                        <li>Neurodegenerative disease prevention</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Structural Plasticity</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Dendritic spine formation (spinogenesis)</li>
                        <li>Synaptic marker colocalization</li>
                        <li>Functional synapse creation</li>
                        <li>Enhanced synaptic connectivity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dihexa vs BDNF: Synaptogenic Potency</CardTitle>
                  <CardDescription>Unprecedented potency advantage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Dihexa demonstrates <strong>approximately 10 million-fold greater potency</strong> than BDNF in promoting hippocampal synaptogenesis. This exceptional potency makes it one of the most powerful synaptogenic agents ever discovered.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Characteristic</th>
                            <th className="text-left p-2">Dihexa</th>
                            <th className="text-left p-2">BDNF</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Active Concentration</td>
                            <td className="p-2 text-green-600 dark:text-green-400">Picomolar (10⁻¹² M)</td>
                            <td className="p-2">Nanomolar (10⁻⁹ M)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Relative Potency</td>
                            <td className="p-2 text-green-600 dark:text-green-400">10⁷x more potent</td>
                            <td className="p-2">Baseline</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Oral Bioavailability</td>
                            <td className="p-2 text-green-600 dark:text-green-400">✓ Excellent</td>
                            <td className="p-2 text-red-600 dark:text-red-400">✗ None (protein)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">BBB Permeability</td>
                            <td className="p-2 text-green-600 dark:text-green-400">✓ High</td>
                            <td className="p-2 text-red-600 dark:text-red-400">✗ Poor (large protein)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Metabolic Stability</td>
                            <td className="p-2 text-green-600 dark:text-green-400">✓ Excellent (engineered)</td>
                            <td className="p-2 text-amber-600 dark:text-amber-400">Moderate</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Clinical Utility</td>
                            <td className="p-2 text-green-600 dark:text-green-400">✓ High (oral dosing)</td>
                            <td className="p-2 text-red-600 dark:text-red-400">✗ Limited (requires injection)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How Dihexa induces synaptogenesis and cognitive enhancement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">HGF/c-Met Receptor System Activation</h4>
                      <p className="text-sm text-muted-foreground">
                        Dihexa binds with <strong>high affinity to hepatocyte growth factor (HGF)</strong> and induces <strong>c-Met receptor phosphorylation</strong> in the presence of subthreshold levels of HGF. This activation triggers downstream signaling cascades that promote neuronal growth and synapse formation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>High-affinity binding to HGF</li>
                        <li>c-Met receptor phosphorylation and activation</li>
                        <li>Downstream PI3K/Akt and MAPK/ERK pathway activation</li>
                        <li>Synergistic effect with endogenous HGF</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Spinogenesis (Dendritic Spine Formation)</h4>
                      <p className="text-sm text-muted-foreground">
                        Dihexa stimulates the formation of new <strong>dendritic spines</strong> - the small protrusions on dendrites where most excitatory synapses form. This spinogenesis is the structural basis for new synapse formation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rapid spine formation in hippocampal neurons</li>
                        <li>Increased spine density</li>
                        <li>Maturation of newly formed spines</li>
                        <li>Active at picomolar concentrations</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Synaptogenesis (Functional Synapse Formation)</h4>
                      <p className="text-sm text-muted-foreground">
                        Beyond structural spine formation, Dihexa induces <strong>functional synaptogenesis</strong> - the creation of new working synapses with proper pre- and postsynaptic machinery.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Colocalization of presynaptic markers (synaptophysin)</li>
                        <li>Colocalization of postsynaptic markers (PSD-95)</li>
                        <li>Enhanced miniature excitatory postsynaptic currents (mEPSCs)</li>
                        <li>Increased functional synaptic connectivity</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Blood-Brain Barrier Penetration</h4>
                      <p className="text-sm text-muted-foreground">
                        Dihexa was specifically engineered for <strong>BBB permeability</strong> through medicinal chemistry modifications that increased hydrophobicity and decreased hydrogen bonding potential.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>N-terminal hexanoic acid modification (increased lipophilicity)</li>
                        <li>C-terminal aminohexanoic amide (reduced hydrogen bonding)</li>
                        <li>Small molecular size (relative to proteins)</li>
                        <li>Excellent CNS penetration after oral or systemic administration</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Metabolic Stability</h4>
                      <p className="text-sm text-muted-foreground">
                        Unlike earlier angiotensin IV analogs, Dihexa exhibits <strong>exceptional metabolic stability</strong> due to strategic chemical modifications that protect against peptidase degradation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>N-terminal protection against aminopeptidase cleavage</li>
                        <li>C-terminal amide protection against carboxypeptidase</li>
                        <li>Extended serum half-life</li>
                        <li>Slow clearance from blood compartment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Comparison to Angiotensin IV Parent Compound</CardTitle>
                  <CardDescription>Engineering improvements over natural peptide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Dihexa retains the procognitive activity of angiotensin IV while overcoming its pharmaceutical limitations:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Angiotensin IV Limitations</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rapid metabolic degradation (minutes)</li>
                        <li>Poor BBB penetration</li>
                        <li>No oral bioavailability</li>
                        <li>Requires injection</li>
                        <li>Large hydration sphere</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Dihexa Advantages</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Excellent metabolic stability</li>
                        <li>High BBB permeability</li>
                        <li>Orally active</li>
                        <li>Convenient dosing</li>
                        <li>Increased hydrophobicity</li>
                        <li>10⁷x more potent than BDNF</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Landmark Research</CardTitle>
                  <CardDescription>Preclinical evidence for Dihexa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Metabolically Stabilized Angiotensin IV Analogs</h4>
                        <Badge variant="outline" className="text-xs">64 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>McCoy AT et al. (2013)</strong> - PMC3533412, J Pharmacol Exp Ther
                      </p>
                      <p className="text-sm">
                        Landmark study demonstrating that Dihexa is an <strong>orally active, blood-brain barrier permeable, metabolically stabilized analog</strong> that exhibits excellent antidementia activity in scopolamine and aged rat models with marked synaptogenic activity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Picomolar potency:</strong> Active at 10⁻¹² M concentrations</li>
                        <li><strong>Synaptogenesis:</strong> Induces spinogenesis and functional synapse formation</li>
                        <li><strong>Morris water maze:</strong> Reverses scopolamine-induced cognitive deficits</li>
                        <li><strong>Aged rats:</strong> Improves cognitive function in aging model</li>
                        <li><strong>Metabolic stability:</strong> Dramatically improved vs parent compounds</li>
                        <li><strong>BBB penetration:</strong> Confirmed CNS access after systemic administration</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Hippocampal Synaptogenesis Evidence</h4>
                        <Badge variant="outline" className="text-xs">Multiple Studies</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Benoist et al. (2011)</strong> - Referenced in McCoy 2013
                      </p>
                      <p className="text-sm">
                        Earlier work demonstrated that angiotensin IV-derived peptides augment <strong>synaptic connectivity through induction of new functional synapses</strong>. Dihexa retained and enhanced this activity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Augmented spinogenesis in hippocampal neurons</li>
                        <li>Colocalization of synaptic markers on newly formed spines</li>
                        <li>Enhanced miniature excitatory postsynaptic currents (mEPSCs)</li>
                        <li>Increased functional connectivity</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">HGF/c-Met Mechanism Confirmation</h4>
                        <Badge variant="outline" className="text-xs">29 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Atkinson E et al. (2023)</strong> - Growth factors and peptide mimetics
                      </p>
                      <p className="text-sm">
                        Confirmed that Dihexa stimulates <strong>spinogenesis and synaptogenesis in rat hippocampal neurons</strong> through activation of the HGF/c-Met receptor system, working synergistically with subthreshold levels of HGF.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>High-affinity binding to HGF</li>
                        <li>c-Met receptor phosphorylation</li>
                        <li>Synergistic effect with endogenous HGF</li>
                        <li>HGF antagonist blocks Dihexa effects (mechanism confirmation)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Alzheimer's Disease Therapeutic Potential</h4>
                        <Badge variant="outline" className="text-xs">Multiple Reviews</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Wright JW et al. (2021)</strong> - Brain HGF/c-Met system review
                      </p>
                      <p className="text-sm">
                        Dihexa may have <strong>therapeutic potential for Alzheimer's disease</strong> where augmented synaptic connectivity may be beneficial. Synaptic loss is the strongest correlate of cognitive decline in AD.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Addresses synaptic loss (primary AD pathology)</li>
                        <li>Restores cognitive function in dementia models</li>
                        <li>Promotes neuroplasticity and connectivity</li>
                        <li>Potential disease-modifying mechanism</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Cognitive Rescue in Multiple Dementia Models</h4>
                        <Badge variant="outline" className="text-xs">Historical AngIV Data</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Multiple Studies</strong> - Wright et al. 1996-2001
                      </p>
                      <p className="text-sm">
                        Parent compound angiotensin IV (which Dihexa mimics) reversed cognitive deficits in multiple dementia models:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Scopolamine model:</strong> Cholinergic blockade reversal</li>
                        <li><strong>Kainic acid:</strong> Hippocampal damage recovery</li>
                        <li><strong>Perforant path cuts:</strong> Structural damage compensation</li>
                        <li><strong>Ischemia:</strong> Four-vessel occlusion recovery</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pharmacokinetics & Pharmacodynamics</CardTitle>
                  <CardDescription>ADME properties and duration of action</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Absorption</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Oral bioavailability:</strong> Excellent (crosses gut barrier)</li>
                        <li><strong>BBB penetration:</strong> High (engineered for CNS access)</li>
                        <li><strong>Onset:</strong> Rapid (within hours of administration)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Distribution</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>CNS penetration:</strong> Confirmed in preclinical studies</li>
                        <li><strong>Hippocampal targeting:</strong> High affinity for memory centers</li>
                        <li><strong>Tissue distribution:</strong> Widespread with CNS preference</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Metabolism</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Stability:</strong> Excellent (engineered resistance to peptidases)</li>
                        <li><strong>Half-life:</strong> Extended vs parent compounds (hours vs minutes)</li>
                        <li><strong>Clearance:</strong> Slow from blood compartment</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Duration of Action</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Acute effects:</strong> Cognitive enhancement within hours</li>
                        <li><strong>Structural effects:</strong> Synaptogenesis peaks at 24-72 hours</li>
                        <li><strong>Long-term effects:</strong> Sustained synaptic connectivity with repeated dosing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Evidence-based administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Dihexa is experimental and not FDA-approved. The following protocols are based on preclinical research and are for healthcare provider reference only. All use must be under physician supervision.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Oral Administration (Primary Route)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Research-Based Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Starting dose:</strong> 1-2 mg daily</li>
                          <li><strong>Target dose:</strong> 3-5 mg daily</li>
                          <li><strong>Maximum dose:</strong> 10 mg daily (based on preclinical scaling)</li>
                          <li><strong>Timing:</strong> Morning or early afternoon (cognitive activity period)</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Example Protocol:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Week 1-2:</strong> 1 mg daily (assess tolerance)</li>
                          <li><strong>Week 3-4:</strong> 2-3 mg daily (titrate to effect)</li>
                          <li><strong>Maintenance:</strong> 3-5 mg daily</li>
                          <li><strong>Duration:</strong> 4-12 weeks, then reassess</li>
                        </ul>
                      </div>
                      <Alert className="mt-3 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                          <strong>Note:</strong> Human dosing is extrapolated from animal studies. Start low and titrate slowly under medical supervision.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Subcutaneous Injection (Alternative)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Injectable Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 0.5-2 mg per injection</li>
                          <li><strong>Frequency:</strong> 3-5 times per week</li>
                          <li><strong>Administration:</strong> Subcutaneous, abdomen or thigh</li>
                          <li><strong>Duration:</strong> 4-8 week cycles</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Cognitive Enhancement Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Healthy Adult Use:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-3 mg oral, daily</li>
                          <li><strong>Timing:</strong> Morning with breakfast</li>
                          <li><strong>Duration:</strong> 4-8 weeks on, 2-4 weeks off</li>
                          <li><strong>Goal:</strong> Enhanced learning, memory, cognitive performance</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Cognitive Decline/Alzheimer's Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Therapeutic Use:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 3-5 mg oral, daily (higher end of range)</li>
                          <li><strong>Timing:</strong> Morning, consistent daily dosing</li>
                          <li><strong>Duration:</strong> 12+ weeks (long-term therapy)</li>
                          <li><strong>Goal:</strong> Synaptic restoration, cognitive function improvement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for Dihexa use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Oral Administration</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Can be taken with or without food</li>
                        <li>Consistent daily timing recommended</li>
                        <li>Avoid evening doses (may affect sleep)</li>
                        <li>Swallow capsules whole with water</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Timing Strategies</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Morning: Optimal for cognitive enhancement</li>
                        <li>Pre-learning: 1-2 hours before study/work</li>
                        <li>Consistent schedule: Same time daily</li>
                        <li>Avoid late afternoon/evening</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light and moisture</li>
                        <li>Oral: Room temperature acceptable for 30 days</li>
                        <li>Injectable: Use within 30 days of reconstitution</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Cycling</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>4-12 week treatment cycles</li>
                        <li>2-4 week breaks between cycles (conservative)</li>
                        <li>Long-term use: Physician monitoring required</li>
                        <li>Tolerance: Not well-characterized in humans</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with Dihexa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                      <strong>Caution:</strong> Dihexa combinations are theoretical and not well-studied. Use extreme caution and physician supervision when combining peptides.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Semax (BDNF Pathway)</h4>
                      <p className="text-sm">
                        <strong>Theoretical synergy:</strong> Semax activates BDNF/trkB pathway while Dihexa works through HGF/c-Met - complementary synaptogenic mechanisms.
                      </p>
                      <p className="text-sm font-medium">Hypothetical Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Dihexa: 2-3 mg oral, morning</li>
                        <li>Semax: 300-600 mcg intranasal, 2x daily</li>
                        <li>See <Link href="/stacking-guide"><a className="text-blue-600 dark:text-blue-400 hover:underline">Cognitive Enhancement Stack</a></Link></li>
                      </ul>
                    </div>

                    <div className="bg-violet-50 dark:bg-violet-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Selank (Anxiolytic Support)</h4>
                      <p className="text-sm">
                        <strong>Theoretical synergy:</strong> Selank reduces anxiety that may interfere with learning while Dihexa enhances synaptic plasticity.
                      </p>
                      <p className="text-sm font-medium">Hypothetical Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Dihexa: 2-3 mg oral, morning</li>
                        <li>Selank: 250-500 mcg intranasal, 2x daily</li>
                        <li>4-8 week cycles</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-rose-600 dark:text-rose-400">BPC-157 (Neuroprotection)</h4>
                      <p className="text-sm">
                        <strong>Theoretical synergy:</strong> BPC-157 provides neuroprotection and neurotransmitter modulation while Dihexa drives synaptogenesis.
                      </p>
                      <p className="text-sm font-medium">Hypothetical Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Dihexa: 2-3 mg oral, daily</li>
                        <li>BPC-157: 250-500 mcg subcutaneous, daily</li>
                        <li>4-8 week cycles</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Contraindications and precautions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Critical Warning:</strong> Dihexa is experimental with limited human safety data. The following contraindications are based on mechanism of action and theoretical concerns.
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Cancer history:</strong> Synaptogenic mechanisms may theoretically promote tumor growth (HGF/c-Met pathway)</li>
                        <li>Pregnancy and breastfeeding (no safety data)</li>
                        <li>Active malignancy or cancer within 5 years</li>
                        <li>Severe psychiatric disorders without supervision</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Uncontrolled seizure disorder (synaptogenesis effects unknown)</li>
                        <li>Severe cardiovascular disease</li>
                        <li>Children under 18 (no pediatric data)</li>
                        <li>Cognitive disorders of unknown etiology</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cancer screening:</strong> Mandatory before initiating therapy</li>
                        <li>Comprehensive medical history and physical examination</li>
                        <li>Neurological assessment if cognitive symptoms present</li>
                        <li>Discussion of experimental status and limited human data</li>
                        <li>Informed consent regarding unknown long-term effects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Side Effects & Safety Data</CardTitle>
                  <CardDescription>Known and theoretical adverse events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Limited Human Data:</strong> Most safety information is from animal studies. Human side effect profile is not well-characterized.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Preclinical Safety (Animal Studies)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Well-tolerated:</strong> No major adverse events in rodent studies</li>
                        <li><strong>No behavioral toxicity:</strong> Normal motor function maintained</li>
                        <li><strong>No acute toxicity:</strong> Wide therapeutic window observed</li>
                        <li><strong>Cognitive benefits:</strong> Consistent across multiple models</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Theoretical Concerns</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Excessive synaptogenesis:</strong> Unknown effects of uncontrolled synapse formation</li>
                        <li><strong>HGF/c-Met activation:</strong> Pathway implicated in some cancers (theoretical risk)</li>
                        <li><strong>Long-term brain changes:</strong> Durability and reversibility unknown</li>
                        <li><strong>Seizure risk:</strong> Increased connectivity may lower seizure threshold (theoretical)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Anecdotal Reports (Unverified)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Headache:</strong> Occasional, usually mild</li>
                        <li><strong>Vivid dreams:</strong> Reported by some users</li>
                        <li><strong>Insomnia:</strong> If dosed too late in day</li>
                        <li><strong>Cognitive overstimulation:</strong> Rare, dose-dependent</li>
                      </ul>
                      <p className="text-xs italic mt-2">Note: These are unverified anecdotal reports and not from controlled studies.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoring During Treatment</CardTitle>
                  <CardDescription>Recommended follow-up and assessments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Initial Phase (Weeks 1-4)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly check-ins with healthcare provider</li>
                        <li>Cognitive function tracking (MoCA, MMSE, or similar)</li>
                        <li>Side effect monitoring (headache, sleep, mood)</li>
                        <li>Dose optimization based on response and tolerance</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Maintenance Phase (After Week 4)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Monthly follow-up visits</li>
                        <li>Continued cognitive assessment</li>
                        <li>Evaluation of treatment goals</li>
                        <li>Cancer surveillance (annual screening recommended)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Long-Term Use (Beyond 12 Weeks)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Quarterly comprehensive evaluations</li>
                        <li>Neurological examination</li>
                        <li>Reassessment of need for continued therapy</li>
                        <li>Consideration of cycling protocols</li>
                        <li>Annual cancer screening (due to HGF/c-Met concerns)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade Dihexa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Due to Dihexa's experimental status and potent effects, quality control is paramount. Only use from verified compounding pharmacies with proper testing.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                        <li><strong>Identity confirmation:</strong> LC-MS verification of structure</li>
                        <li><strong>Certificate of Analysis (COA):</strong> Third-party tested</li>
                        <li><strong>Endotoxin testing:</strong> &lt;1 EU/mg</li>
                        <li><strong>Sterility:</strong> USP &lt;71&gt; compliant (injectable)</li>
                        <li><strong>cGMP compliance:</strong> Current Good Manufacturing Practices</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Red Flags to Avoid</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>No pharmacy credentials or licensing</li>
                        <li>Labeled as "research chemicals" or "not for human use"</li>
                        <li>Suspiciously low prices</li>
                        <li>International sources without US pharmacy license</li>
                        <li>No COA or batch testing documentation</li>
                        <li>No physician prescription required</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">DrsPeptides.com Quality Commitment</h4>
                    <p className="text-sm">
                      All peptides from DrsPeptides.com meet or exceed pharmaceutical standards:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>&gt;99% purity (HPLC verified)</li>
                      <li>LC-MS identity confirmation</li>
                      <li>cGMP-certified compounding facilities</li>
                      <li>Comprehensive third-party testing</li>
                      <li>Full chain-of-custody documentation</li>
                      <li>Physician oversight required for all orders</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Status</CardTitle>
                  <CardDescription>Legal and regulatory considerations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-600 dark:text-amber-400">United States</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Status:</strong> Not FDA-approved, experimental</li>
                      <li><strong>Availability:</strong> Compounding pharmacies only</li>
                      <li><strong>Requirement:</strong> Physician prescription mandatory</li>
                      <li><strong>Research status:</strong> Preclinical only (no human trials)</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> Dihexa is not FDA-approved and is considered highly experimental. Use must be under close physician supervision through licensed compounding pharmacies. Long-term safety in humans is unknown.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Baseline labs and medical history</li>
                      <li>Relevant organ function tests</li>
                      <li>Cancer screening (age-appropriate)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability assessment</p>
                      <p><strong>Month 3:</strong> Clinical response evaluation</p>
                      <p><strong>Month 6:</strong> Comprehensive safety check</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Severe adverse reactions</li>
                      <li>Unexpected symptoms</li>
                      <li>Pregnancy (discontinue immediately)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Interested in Dihexa for Cognitive Enhancement?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity Dihexa from cGMP-certified compounding pharmacies with comprehensive third-party testing and mandatory physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="#" onClick={(e) => { e.preventDefault(); }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-background px-8 py-3 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                      View Cognitive Enhancement Stack
                    </a>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
