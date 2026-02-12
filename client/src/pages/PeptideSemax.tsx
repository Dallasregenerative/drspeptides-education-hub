import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Microscope, FileText, Shield, ExternalLink, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function PeptideSemax() {
  usePageTitle("Semax Guide - Nootropic Peptide for Cognitive Enhancement", {
    description: "Comprehensive semax clinical guide. Nootropic peptide dosing, cognitive enhancement protocols, and neuroprotection applications.",
    keywords: "semax, nootropic peptide, cognitive enhancement, brain peptide, BDNF, neuroprotection, semax dosing, mental clarity",
    schema: generatePeptideSchema({
      name: "Semax",
      alternateName: ['ACTH 4-10 Analog', 'Heptapeptide Semax'],
      description: "Comprehensive semax clinical guide. Nootropic peptide dosing, cognitive enhancement protocols, and neuroprotection applications.",
      path: "/peptides/semax",
      fdaStatus: "Investigational",
      category: "Cognitive Enhancement"
    })
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
          </div>
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
            <PrintButton title="Semax - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          
          </div></div></div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Semax</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">BDNF Modulation & Cognitive Enhancement</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Category</CardDescription>
                <CardTitle className="text-2xl">Cognitive</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Research Citations</CardDescription>
                <CardTitle className="text-2xl">99+</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Administration</CardDescription>
                <CardTitle className="text-2xl">Intranasal</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-8 border-blue-200 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-slate-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-600" />
                Featured in Cognitive Enhancement Stack
              </CardTitle>
              <CardDescription>
                Part of the comprehensive cognitive enhancement protocol combining Semax, Selank, and Dihexa for synergistic neuroprotective and cognitive benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/stacking-guide">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Full Stacking Guide
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
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

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Semax?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax is a synthetic peptide derived from the adrenocorticotropic hormone (ACTH) fragment ACTH(4-10). Originally developed in Russia, Semax has been extensively studied for its nootropic and neuroprotective properties. The peptide modulates the BDNF/trkB system, which plays a crucial role in cognitive brain functions including memory formation, learning, and neuroplasticity.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Unlike traditional cognitive enhancers or stimulants, Semax works by enhancing the brain's natural neurotroph systems rather than directly stimulating neurotransmitter release. This mechanism provides cognitive benefits without the side effects commonly associated with stimulants, such as jitteriness, anxiety, or subsequent crashes.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax is particularly valued for its ability to improve focus, memory, and mental clarity while simultaneously providing neuroprotective effects against oxidative stress and excitotoxicity. The peptide has been used clinically in Russia for decades to treat cognitive impairments, stroke recovery, and attention disorders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves memory, attention, and learning capacity through BDNF modulation</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects neurons from oxidative stress and excitotoxic damage</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Stroke Recovery</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerates neurological recovery following ischemic events</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Attention Disorders</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhances focus and concentration without stimulant side effects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Intranasal Administration:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Bypasses blood-brain barrier for direct CNS delivery</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">No Stimulant Effects:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Enhances cognition without jitteriness, anxiety, or crashes</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">BDNF Modulation:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Enhances neuroplasticity and long-term cognitive function</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Rapid Onset:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Effects typically noticed within 15-30 minutes of administration</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Extensive Clinical Use:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Decades of clinical application in Russia with established safety profile</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>BDNF/trkB System Modulation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax's primary mechanism involves modulation of the brain-derived neurotrophic factor (BDNF) and its receptor tyrosine kinase B (trkB). BDNF is one of the most important neurotrophic factors in the brain, playing critical roles in neuronal survival, growth, differentiation, and synaptic plasticity.
                  </p>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Pathway Effects:</h4>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• <strong>Upregulates BDNF expression:</strong> Increases production of this critical neurotrophin</li>
                      <li>• <strong>Enhances trkB receptor sensitivity:</strong> Improves cellular response to BDNF signaling</li>
                      <li>• <strong>Promotes neuroplasticity:</strong> Facilitates formation of new neural connections</li>
                      <li>• <strong>Supports synaptic strengthening:</strong> Enhances long-term potentiation (LTP)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Neuroprotective Mechanisms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond cognitive enhancement, Semax provides robust neuroprotection through multiple pathways:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Antioxidant Effects</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Reduces oxidative stress by enhancing endogenous antioxidant systems and scavenging free radicals. Protects neurons from reactive oxygen species (ROS) damage.
                      </p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Anti-Excitotoxicity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Protects against glutamate-induced excitotoxicity by modulating NMDA receptor activity and calcium homeostasis. Critical for preventing neuronal death in ischemic conditions.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Trophic Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Improves trophic supply to neurons by enhancing microcirculation and nutrient delivery. Supports cellular energy metabolism and mitochondrial function.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cognitive Enhancement Pathways</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax enhances cognitive function through multiple complementary mechanisms:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Memory Consolidation:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Enhances hippocampal long-term potentiation (LTP), the cellular basis of learning and memory</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Attention Enhancement:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Modulates dopaminergic and noradrenergic systems in prefrontal cortex</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Processing Speed:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Improves neural transmission efficiency and synaptic response times</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-slate-900 dark:text-white">Neurogenesis Support:</strong>
                        <span className="text-slate-700 dark:text-slate-300"> Promotes formation of new neurons in hippocampus through BDNF signaling</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Studies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">BDNF/trkB System Modulation (99 Citations)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Comprehensive research demonstrates that Semax modulates the BDNF/trkB system, which affects cognitive brain functions including memory, learning, and neuroplasticity. This mechanism underlies many of Semax's cognitive-enhancing effects.
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Key Finding: BDNF upregulation correlates with improved cognitive performance in both animal and human studies
                    </p>
                  </div>

                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg border-l-4 border-cyan-600">
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Trophic Support & Neuroprotection (57 Citations)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Research shows Semax improves trophic supply to the nervous system and provides robust neuroprotection against various insults including oxidative stress, excitotoxicity, and ischemia.
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Key Finding: Significant reduction in infarct size and improved neurological outcomes in stroke models
                    </p>
                  </div>

                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg border-l-4 border-indigo-600">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Memory & Attention Enhancement</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Studies in both rodents and humans demonstrate that intranasal Semax administration stimulates memory formation and enhances attention. Effects are dose-dependent and typically observed within 15-30 minutes of administration.
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Key Finding: Improved performance on memory tasks and sustained attention tests without stimulant side effects
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stroke Recovery Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax has been extensively studied for stroke recovery, with clinical use in Russia for acute ischemic stroke. Research demonstrates:
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• <strong>Reduced infarct volume:</strong> Smaller areas of brain damage when administered early after stroke</li>
                    <li>• <strong>Improved neurological outcomes:</strong> Better recovery of motor and cognitive function</li>
                    <li>• <strong>Enhanced neuroplasticity:</strong> Facilitates brain reorganization and functional recovery</li>
                    <li>• <strong>Neuroprotective window:</strong> Most effective when administered within 6-12 hours of stroke onset</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cognitive Enhancement in Healthy Individuals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond clinical applications, research in healthy individuals shows:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Working Memory</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improved performance on working memory tasks, particularly under cognitive load</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Sustained Attention</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Enhanced ability to maintain focus during prolonged cognitive tasks</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Processing Speed</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Faster reaction times and improved information processing efficiency</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Mental Clarity</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Subjective reports of improved mental clarity and reduced brain fog</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Dosing Protocols</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Intranasal Administration (Primary Route)</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Cognitive Enhancement:</p>
                        <p className="text-slate-700 dark:text-slate-300">• 200-600 mcg per dose, 1-2x daily</p>
                        <p className="text-slate-700 dark:text-slate-300">• Typically administered in morning and/or early afternoon</p>
                        <p className="text-slate-700 dark:text-slate-300">• Effects onset within 15-30 minutes, duration 4-6 hours</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Neuroprotection/Stroke Recovery:</p>
                        <p className="text-slate-700 dark:text-slate-300">• 600-1,200 mcg per dose, 2-3x daily</p>
                        <p className="text-slate-700 dark:text-slate-300">• Higher doses used in acute clinical settings</p>
                        <p className="text-slate-700 dark:text-slate-300">• Duration: 10-30 days depending on indication</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">Subcutaneous/Intramuscular (Clinical Use)</h4>
                    <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <p>• 300-1,000 mcg per dose, 1-2x daily</p>
                      <p>• Primarily used in clinical/hospital settings</p>
                      <p>• Higher bioavailability than intranasal route</p>
                      <p>• Typically reserved for acute neurological conditions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Timing & Administration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Optimal Timing</h4>
                      <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>• <strong>Morning dose:</strong> Upon waking or before cognitively demanding tasks</li>
                        <li>• <strong>Afternoon dose:</strong> Early afternoon (before 3 PM) to avoid sleep disruption</li>
                        <li>• <strong>Avoid evening use:</strong> May interfere with sleep in some individuals</li>
                        <li>• <strong>Consistency:</strong> Regular timing helps optimize effects</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Intranasal Technique</h4>
                      <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Clear nasal passages before administration</li>
                        <li>• Tilt head back slightly during administration</li>
                        <li>• Alternate nostrils if using multiple sprays</li>
                        <li>• Remain upright for 5-10 minutes after administration</li>
                        <li>• Avoid blowing nose for 15 minutes post-administration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cycling Protocols</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    While Semax does not appear to cause significant tolerance, cycling is often recommended for optimal long-term benefits:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Standard Cycle</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• 4-6 weeks on, 2-4 weeks off</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Maintains sensitivity to cognitive effects</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Allows assessment of baseline cognitive function</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Extended Use</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Continuous use for 2-3 months possible</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Take 1-2 month break after extended cycles</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Monitor for any reduction in effects</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">As-Needed Use</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• 2-3 times per week for specific cognitive demands</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Maintains effectiveness without continuous use</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">• Suitable for periodic cognitive enhancement needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax combines synergistically with other cognitive-enhancing peptides and compounds:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Semax + Selank</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Synergy:</strong> Complementary mechanisms - Semax for cognitive enhancement, Selank for anxiety reduction and emotional stability
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>Protocol:</strong> 200-400 mcg each, administered together or Semax in morning, Selank in afternoon
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Semax + Dihexa</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Synergy:</strong> BDNF modulation (Semax) + synaptogenesis (Dihexa) for comprehensive cognitive enhancement
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        <strong>Protocol:</strong> Semax 200-400 mcg + Dihexa 1-5 mg, both intranasal, 1-2x daily
                      </p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Cognitive Enhancement Stack</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Full Stack:</strong> Semax + Selank + Dihexa for maximum cognitive and neuroprotective benefits
                      </p>
                      <Link href="/stacking-guide">
                        <Button variant="link" className="p-0 text-cyan-600 text-sm">
                          View Full Cognitive Enhancement Stack Protocol
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                    <AlertTriangle className="h-5 w-5" />
                    Important Safety Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax has an established safety profile from decades of clinical use in Russia. However, as with all peptides, proper medical oversight and quality sourcing are essential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contraindications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Absolute Contraindications:</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li>• Known hypersensitivity to Semax or related peptides</li>
                        <li>• Pregnancy or breastfeeding (insufficient safety data)</li>
                        <li>• Active seizure disorders (may lower seizure threshold)</li>
                        <li>• Acute psychotic episodes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Relative Contraindications:</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li>• Bipolar disorder (may trigger manic episodes)</li>
                        <li>• Severe anxiety disorders (start with lower doses)</li>
                        <li>• Chronic nasal conditions (may affect absorption)</li>
                        <li>• Cardiovascular disease (monitor blood pressure)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Side Effects & Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax is generally well-tolerated with minimal side effects. Most adverse effects are mild and transient:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Common (Mild)</h4>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Nasal irritation or dryness (intranasal use)</li>
                        <li>• Mild headache (usually resolves with continued use)</li>
                        <li>• Slight increase in energy (may affect sleep if dosed late)</li>
                        <li>• Temporary changes in sense of smell</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Uncommon</h4>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Anxiety or restlessness (reduce dose)</li>
                        <li>• Sleep disturbances (avoid late-day dosing)</li>
                        <li>• Mild blood pressure changes (monitor if hypertensive)</li>
                        <li>• Emotional sensitivity (may enhance emotional responses)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoring During Treatment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Baseline Assessment</h4>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Cognitive function assessment (optional but helpful)</li>
                        <li>• Blood pressure measurement</li>
                        <li>• Mental health screening</li>
                        <li>• Current medication review</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Ongoing Monitoring</h4>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Subjective cognitive effects tracking</li>
                        <li>• Sleep quality monitoring</li>
                        <li>• Blood pressure checks (if hypertensive)</li>
                        <li>• Mental state assessment</li>
                        <li>• Nasal health (if using intranasal route)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border-l-4 border-amber-600">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Critical Quality Requirements</h4>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• <strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                      <li>• <strong>Certificate of Analysis (COA):</strong> Must include purity, identity, and endotoxin testing</li>
                      <li>• <strong>Endotoxin levels:</strong> &lt;1 EU/mg for intranasal use</li>
                      <li>• <strong>Storage:</strong> Lyophilized powder stored at -20°C, reconstituted solution refrigerated</li>
                      <li>• <strong>Sterility:</strong> Sterile filtration for intranasal/injectable preparations</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Note:</strong> Semax is not FDA-approved in the United States. It is available for research purposes or through compounding pharmacies. Always work with qualified healthcare providers and use pharmaceutical-grade sources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drug Interactions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Semax has relatively few known drug interactions, but caution is advised with:
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• <strong>Stimulants:</strong> May potentiate stimulant effects (caffeine, amphetamines)</li>
                    <li>• <strong>Antihypertensives:</strong> May affect blood pressure regulation</li>
                    <li>• <strong>Antidepressants:</strong> Theoretical interaction with serotonergic drugs (monitor)</li>
                    <li>• <strong>Anticoagulants:</strong> Limited data; monitor if using blood thinners</li>
                  </ul>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                    Always inform your healthcare provider of all medications, supplements, and peptides you are using.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-teal-200 bg-teal-50 dark:bg-teal-950">
                <CardHeader>
                  <CardTitle className="text-teal-900 dark:text-teal-100">Medical Oversight Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Semax should only be used under the guidance of a qualified healthcare provider familiar with peptide therapy. This is particularly important for:
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Individuals with pre-existing medical conditions</li>
                    <li>• Those taking multiple medications</li>
                    <li>• First-time peptide users</li>
                    <li>• Anyone experiencing unexpected side effects</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Comprehensive monitoring protocols for Semax therapy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Baseline cognitive assessment</li>
                      <li>Blood pressure monitoring</li>
                      <li>Neurological examination</li>
                      <li>Medical history screening</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 2:</strong> Tolerability assessment, blood pressure</p>
                      <p><strong>Month 1:</strong> Cognitive response evaluation</p>
                      <p><strong>Month 3:</strong> Comprehensive safety and efficacy check</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Severe headaches or migraines</li>
                      <li>Blood pressure changes</li>
                      <li>Anxiety or agitation</li>
                      <li>Pregnancy (discontinue immediately)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
