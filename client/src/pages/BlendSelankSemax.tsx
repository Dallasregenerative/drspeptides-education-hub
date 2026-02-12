import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, Brain, Smile, Zap, Heart } from "lucide-react";
import { Link } from "wouter";

export default function BlendSelankSemax() {
  return (
    <>
    <Helmet>
        <title>Selank + Semax Blend | DrsPeptides</title>
        <meta name="description" content="Selank and Semax cognitive enhancement stack for focus and anxiety reduction. Evidence-based protocols, optimal dosing ratios, safety guidelines, and clinical applications." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Selank + Semax Blend | DrsPeptides" />
        <meta property="og:description" content="Selank and Semax cognitive enhancement stack for focus and anxiety reduction. Evidence-based protocols, optimal dosing ratios, safety guidelines, and clinical applications." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Selank + Semax Blend | DrsPeptides" />
        <meta name="twitter:description" content="Selank and Semax cognitive enhancement stack for focus and anxiety reduction. Evidence-based protocols, optimal dosing ratios, safety guidelines, and clinical applications." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Selank + Semax Blend",
          "description": "Selank and Semax cognitive enhancement stack for focus and anxiety reduction. Evidence-based protocols, optimal dosing ratios, safety guidelines, and clinical applications.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2025-12-01",
          "medicalAudience": {
                    "@type": "MedicalAudience",
                    "audienceType": "Physician"
          },
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Nootropic Blend</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Selank + Semax Blend</h1>
            <p className="text-xl text-indigo-50 mb-6">
              Synergistic nootropic combination for cognitive enhancement and anxiety reduction. Semax boosts focus, memory, and mental clarity, while Selank provides anxiolytic effects and mood stabilization. Together, they create balanced cognitive optimization without overstimulation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Nootropic</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Anxiolytic</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Cognitive Enhancement</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Mood Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanism" className="gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanism</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="gap-2">
                <Beaker className="h-4 w-4" />
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
              <TabsTrigger value="monitoring" className="gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Monitoring</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Selank + Semax Blend?</CardTitle>
                  <CardDescription>Synergistic nootropic peptide combination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Selank + Semax blend combines two complementary Russian-developed nootropic peptides with distinct but synergistic mechanisms. Semax (ACTH 4-10 analog) is a pro-cognitive peptide that enhances focus, memory, learning capacity, and mental energy through BDNF upregulation and neurotransmitter modulation. Selank (tuftsin analog) is an anxiolytic peptide that reduces anxiety, stabilizes mood, and promotes calm focus through GABAergic and enkephalin-mediated pathways. Together, they provide balanced cognitive enhancement without the jitteriness or anxiety often associated with stimulant-based nootropics.
                  </p>
                  <p>
                    This combination is particularly valuable because Semax provides the cognitive activation and mental clarity, while Selank prevents overstimulation and anxiety, creating a smooth, focused mental state. Semax increases BDNF (brain-derived neurotrophic factor), promoting neuroplasticity and neuroprotection, while Selank modulates GABA-A receptors and enkephalin degradation, producing anxiolytic effects without sedation. The blend is ideal for high-performance cognitive tasks, studying, creative work, or managing stress while maintaining productivity.
                  </p>
                  <p>
                    Both peptides are administered intranasally or subcutaneously, with intranasal being the most common route for rapid brain access. The combination has been extensively studied in Russia and Eastern Europe for decades, with a strong safety profile and minimal side effects. Unlike pharmaceutical stimulants or benzodiazepines, the Selank/Semax blend works through natural neurochemical pathways, providing cognitive enhancement and anxiety reduction without tolerance, dependence, or withdrawal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Enhanced Cognition</h3>
                        <p className="text-sm text-gray-600">Improved focus, memory, learning, and mental clarity from Semax</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smile className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Anxiety Reduction</h3>
                        <p className="text-sm text-gray-600">Calm, balanced mood without sedation from Selank</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Mental Energy</h3>
                        <p className="text-sm text-gray-600">Sustained cognitive energy without overstimulation or crash</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Neuroprotection</h3>
                        <p className="text-sm text-gray-600">BDNF upregulation and neuroplasticity support from Semax</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Cognitive enhancement, anxiety management, focus improvement, stress resilience. <strong>Secondary benefits:</strong> Mood stabilization, neuroprotection, learning enhancement. <strong>Advantages:</strong> Balanced effects (cognitive + anxiolytic), no tolerance, rapid intranasal delivery, minimal side effects.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Semax vs Selank vs Combination</h3>
                <p className="text-sm text-amber-800">
                  <strong>Semax alone:</strong> Pro-cognitive, focus-enhancing, may cause overstimulation in some users<br/>
                  <strong>Selank alone:</strong> Anxiolytic, calming, may lack cognitive activation<br/>
                  <strong>Combination:</strong> Balanced cognitive enhancement + anxiety reduction, smooth focus without jitters<br/>
                  <strong>Choose Combination for:</strong> High-stress cognitive tasks, studying with anxiety, balanced nootropic effects<br/>
                  <strong>Choose Semax alone for:</strong> Pure cognitive enhancement, no anxiety issues<br/>
                  <strong>Choose Selank alone for:</strong> Anxiety management without cognitive stimulation
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How Selank + Semax blend works</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Semax: BDNF Upregulation and Neuroplasticity</h3>
                    <p className="text-sm text-gray-700">
                      Semax increases brain-derived neurotrophic factor (BDNF), a key protein that promotes neuronal survival, growth, and differentiation. Elevated BDNF enhances synaptic plasticity, facilitating learning and memory formation. This mechanism underlies Semax's pro-cognitive effects and neuroprotective properties. BDNF also protects against neurodegeneration and supports recovery from brain injury or stress.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Semax: Neurotransmitter Modulation</h3>
                    <p className="text-sm text-gray-700">
                      Semax modulates dopamine, serotonin, and norepinephrine systems, enhancing neurotransmitter availability and receptor sensitivity. It increases dopamine in the prefrontal cortex, improving executive function, attention, and motivation. Serotonin modulation contributes to mood enhancement and stress resilience. These effects create a state of focused mental clarity and cognitive activation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Selank: GABAergic Anxiolytic Effects</h3>
                    <p className="text-sm text-gray-700">
                      Selank acts as a positive allosteric modulator of GABA-A receptors, enhancing inhibitory neurotransmission in the central nervous system. This produces anxiolytic effects similar to benzodiazepines but without sedation, cognitive impairment, or dependence. Selank reduces anxiety, promotes calm focus, and stabilizes mood through this GABAergic mechanism.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Selank: Enkephalin System Modulation</h3>
                    <p className="text-sm text-gray-700">
                      Selank inhibits enzymes that degrade enkephalins, endogenous opioid peptides involved in stress response and emotional regulation. Increased enkephalin activity contributes to Selank's anxiolytic, antidepressant, and stress-protective effects. This mechanism provides mood stabilization and emotional resilience without the risks of exogenous opioids.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Synergistic Cognitive + Anxiolytic Effects</h3>
                    <p className="text-sm text-gray-700">
                      The combination provides balanced cognitive enhancement without overstimulation. Semax activates cognitive circuits (prefrontal cortex, hippocampus) while Selank prevents anxiety-related interference with cognitive performance. This synergy creates a smooth, focused mental state ideal for complex cognitive tasks. The blend addresses both cognitive performance and emotional regulation simultaneously.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">6. Neuroprotection and Stress Resilience</h3>
                    <p className="text-sm text-gray-700">
                      Both peptides provide neuroprotective effects through different mechanisms. Semax protects against oxidative stress, excitotoxicity, and hypoxia through BDNF and antioxidant pathways. Selank protects against stress-induced neuronal damage through GABAergic and enkephalin-mediated mechanisms. Together, they enhance stress resilience and protect brain health during chronic stress or cognitive demands.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence supporting Selank + Semax combination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Functional Connectivity Changes with Selank and Semax</h3>
                    <p className="text-sm text-gray-700">
                      Panikratova YR et al. PMC. 2020 - Functional MRI study showing Selank and Semax produce distinct but complementary changes in brain connectivity. Semax enhanced connectivity in cognitive control networks, while Selank modulated emotional regulation networks. The combination provides balanced effects on both cognitive and emotional brain systems.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/32342318/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Selank Anxiolytic and Cognitive Effects</h3>
                    <p className="text-sm text-gray-700">
                      Volkova A et al. PMC. 2016 - Selank demonstrates pronounced anxiolytic activity and acts as a stable neuropsychotropic, antidepressant, and antistress drug. It relieves aggression and enhances cognitive function. Selank modulates gene expression related to GABAergic neurotransmission and stress response, explaining its broad therapeutic effects.
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Molecular Mechanisms of Selank</h3>
                    <p className="text-sm text-gray-700">
                      Vyunova TV et al. PMC. 2018 - Research showing Selank's anti-anxiety molecular mechanisms involve subtype-selective, concentration-dependent modulation of GABA-A receptors. This selective modulation explains why Selank provides anxiolytic effects without the sedation and cognitive impairment seen with benzodiazepines.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/30255741/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Clinical Use in Russia and Eastern Europe</h3>
                    <p className="text-sm text-gray-700">
                      Both Semax and Selank have been approved and widely used in Russia for decades for cognitive enhancement, anxiety disorders, depression, and neuroprotection. Extensive clinical experience demonstrates safety and efficacy for long-term use. The combination is commonly prescribed together for balanced cognitive and emotional optimization.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Research Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Complementary Brain Effects</h3>
                      <p className="text-sm text-indigo-800">Semax enhances cognitive networks, Selank modulates emotional networks - balanced optimization.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">No Tolerance or Dependence</h3>
                      <p className="text-sm text-blue-800">Unlike stimulants or benzodiazepines, no tolerance develops with long-term use.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">BDNF Upregulation</h3>
                      <p className="text-sm text-amber-800">Semax increases BDNF, promoting neuroplasticity and neuroprotection.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Selective GABA Modulation</h3>
                      <p className="text-sm text-rose-800">Selank provides anxiolytic effects without sedation or cognitive impairment.</p>
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
                  <CardDescription>Intranasal and subcutaneous administration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cognitive Enhancement Protocol (Intranasal)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Semax dose:</strong> 300-600mcg (1-2 sprays) per nostril<br/>
                      <strong>Selank dose:</strong> 300-600mcg (1-2 sprays) per nostril<br/>
                      <strong>Timing:</strong> Morning and/or early afternoon<br/>
                      <strong>Frequency:</strong> Daily or 5 days per week<br/>
                      <strong>Duration:</strong> Cycles of 4-6 weeks, then 1-2 week break<br/>
                      <strong>Best for:</strong> Focus, productivity, studying, cognitive performance
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Anxiety Management Protocol (Intranasal)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Semax dose:</strong> 300mcg (1 spray) per nostril<br/>
                      <strong>Selank dose:</strong> 600-900mcg (2-3 sprays) per nostril<br/>
                      <strong>Timing:</strong> Morning and/or as needed for anxiety<br/>
                      <strong>Frequency:</strong> Daily or as needed<br/>
                      <strong>Duration:</strong> Can be used continuously or as needed<br/>
                      <strong>Best for:</strong> Anxiety disorders, stress management, social anxiety
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Balanced Nootropic Protocol (Subcutaneous)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Semax dose:</strong> 500-1000mcg subcutaneous<br/>
                      <strong>Selank dose:</strong> 500-1000mcg subcutaneous<br/>
                      <strong>Timing:</strong> Morning<br/>
                      <strong>Frequency:</strong> Daily or 5 days per week<br/>
                      <strong>Duration:</strong> 4-6 week cycles<br/>
                      <strong>Best for:</strong> Longer-lasting effects, convenience (once daily)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">High-Performance Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Semax dose:</strong> 600-900mcg intranasal<br/>
                      <strong>Selank dose:</strong> 600-900mcg intranasal<br/>
                      <strong>Timing:</strong> 30-60 minutes before cognitive tasks<br/>
                      <strong>Frequency:</strong> As needed for high-demand situations<br/>
                      <strong>Best for:</strong> Exams, presentations, creative work, high-stress tasks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Intranasal:</strong> Most common route, rapid brain access (15-30 min onset)<br/>
                      <strong>Subcutaneous:</strong> Longer duration (4-6 hours), once-daily dosing<br/>
                      <strong>Timing:</strong> Avoid evening use (may interfere with sleep)<br/>
                      <strong>Cycling:</strong> 4-6 weeks on, 1-2 weeks off to prevent tolerance (though minimal)<br/>
                      <strong>Stacking:</strong> Can combine with other nootropics (racetams, choline)<br/>
                      <strong>Storage:</strong> Refrigerate for extended shelf life
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expectations Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Minutes 15-30: Rapid Onset (Intranasal)</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Increased mental clarity and alertness</li>
                        <li>Improved focus and concentration</li>
                        <li>Reduced anxiety and calm mood</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Day 1-7: Initial Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Enhanced cognitive performance</li>
                        <li>Better stress management</li>
                        <li>Improved mood and motivation</li>
                        <li>Smooth, sustained focus without jitters</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Sustained Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Consistent cognitive enhancement</li>
                        <li>Reduced baseline anxiety</li>
                        <li>Improved learning and memory</li>
                        <li>Enhanced stress resilience</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-6: Maximum Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Optimized cognitive function</li>
                        <li>Stable mood and emotional regulation</li>
                        <li>Neuroprotective effects (cellular level)</li>
                        <li>Peak performance state</li>
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
                  <CardDescription>Safety information for Selank + Semax blend</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Both Semax and Selank have excellent safety profiles with decades of clinical use in Russia and Eastern Europe. They are well-tolerated with minimal side effects. Unlike stimulants or benzodiazepines, they do not cause tolerance, dependence, or withdrawal. The intranasal route provides rapid brain access with minimal systemic exposure.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Severe nasal conditions:</strong> Active nasal infections, severe congestion</li>
                      <li><strong>Known allergy:</strong> To peptide components</li>
                      <li><strong>Bipolar disorder:</strong> Use with caution, may trigger mania (theoretical)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Side effects are rare and typically mild. Most users report no adverse effects.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nasal irritation:</strong> Mild, transient (intranasal route)</li>
                      <li><strong>Headache:</strong> Rare, mild, usually with high doses</li>
                      <li><strong>Overstimulation:</strong> Rare, if Semax dose too high or taken late in day</li>
                      <li><strong>Drowsiness:</strong> Rare, if Selank dose too high</li>
                      <li><strong>Injection site reactions:</strong> Mild (subcutaneous route)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable peptide suppliers. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Pharmaceutical-grade synthesis<br/>
                      • Third-party testing and COA<br/>
                      • Proper pH buffering for nasal formulations<br/>
                      • Sterile production<br/>
                      • Refrigerated storage and shipping
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Tracking progress with Selank + Semax blend</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline symptoms:</strong> Document cognitive function, anxiety levels, mood</li>
                      <li><strong>Medical history:</strong> Screen for contraindications</li>
                      <li><strong>Goals:</strong> Define specific objectives (focus, anxiety reduction, etc.)</li>
                      <li><strong>Nasal health:</strong> Ensure no active infections (if using intranasal)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Day 1:</strong> Assess immediate response, check for adverse effects</p>
                      <p><strong>Week 1:</strong> Evaluate cognitive and anxiolytic improvements</p>
                      <p><strong>Week 2-4:</strong> Monitor sustained benefits and optimize dosing</p>
                      <p><strong>Week 4-6:</strong> Assess maximum benefits, consider cycling</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Cognitive function:</strong> Improved focus, memory, mental clarity</li>
                      <li><strong>Anxiety reduction:</strong> Decreased anxiety, calm mood</li>
                      <li><strong>Productivity:</strong> Enhanced work/study performance</li>
                      <li><strong>Mood:</strong> Improved motivation and well-being</li>
                      <li><strong>Stress resilience:</strong> Better stress management</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe nasal irritation:</strong> Persistent pain, bleeding (intranasal)</li>
                      <li><strong>Allergic reaction:</strong> Difficulty breathing, severe swelling</li>
                      <li><strong>Severe overstimulation:</strong> Anxiety, agitation, insomnia</li>
                      <li><strong>Mood changes:</strong> Depression, mania, severe mood swings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Use proper intranasal technique for optimal absorption</li>
                      <li>Avoid evening use to prevent sleep disruption</li>
                      <li>Start with lower doses and titrate up as needed</li>
                      <li>Consider cycling (4-6 weeks on, 1-2 weeks off)</li>
                      <li>Combine with healthy lifestyle (sleep, exercise, nutrition)</li>
                      <li>Track subjective improvements in cognition and mood</li>
                      <li>Store in refrigerator for extended shelf life</li>
                      <li>No tolerance or dependence with long-term use</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
    </div>
    </>
  );
}
