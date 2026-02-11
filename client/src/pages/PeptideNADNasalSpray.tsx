import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, Brain, Zap, Heart, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNADNasalSpray() {
  return (
    <>
    <Helmet>
        <title>NAD+ Nasal Spray | DrsPeptides</title>
        <meta name="description" content="Evidence-based guide to NAD+ nasal spray for rapid cellular energy boost. Mechanisms, bioavailability advantages, dosing protocols, clinical benefits, and safety data." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NAD+ Nasal Spray | DrsPeptides" />
        <meta property="og:description" content="Evidence-based guide to NAD+ nasal spray for rapid cellular energy boost. Mechanisms, bioavailability advantages, dosing protocols, clinical benefits, and safety data." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAD+ Nasal Spray | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based guide to NAD+ nasal spray for rapid cellular energy boost. Mechanisms, bioavailability advantages, dosing protocols, clinical benefits, and safety data." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "NAD+ Nasal Spray",
          "description": "Evidence-based guide to NAD+ nasal spray for rapid cellular energy boost. Mechanisms, bioavailability advantages, dosing protocols, clinical benefits, and safety data.",
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
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
            <PrintButton title="N A D Nasal Spray - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          
          </div></div></div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Intranasal Delivery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NAD+ Nasal Spray</h1>
            <p className="text-xl text-indigo-50 mb-6">
              Intranasal NAD+ delivery for rapid absorption and direct brain access. Bypasses digestive degradation for superior bioavailability, providing fast-acting cellular energy, cognitive enhancement, and anti-aging benefits.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Intranasal</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Rapid Absorption</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Brain Access</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">No Needles</span>
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
                  <CardTitle>What is NAD+ Nasal Spray?</CardTitle>
                  <CardDescription>Intranasal delivery of nicotinamide adenine dinucleotide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    NAD+ Nasal Spray delivers nicotinamide adenine dinucleotide (NAD+) directly through the nasal mucosa, bypassing the digestive system for rapid absorption into the bloodstream and direct access to the brain. NAD+ is a critical coenzyme present in every cell, essential for energy production, DNA repair, cellular metabolism, and longevity. Intranasal delivery provides superior bioavailability compared to oral NAD+ supplements, which are largely degraded in the gut.
                  </p>
                  <p>
                    The nasal cavity is highly vascularized with a rich network of blood vessels and provides a direct pathway to the brain via the olfactory and trigeminal nerves. This nose-to-brain delivery allows NAD+ to reach the central nervous system within minutes, providing rapid cognitive and neuroprotective benefits. The intranasal route avoids first-pass hepatic metabolism, ensuring more NAD+ reaches target tissues intact.
                  </p>
                  <p>
                    NAD+ Nasal Spray is ideal for individuals seeking cognitive enhancement, energy optimization, anti-aging benefits, or neuroprotection. It offers convenience (no injections), rapid onset (faster than oral), and unique brain-targeting advantages. NAD+ levels naturally decline with age, and intranasal supplementation provides an efficient method to restore optimal cellular NAD+ concentrations.
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
                        <h3 className="font-semibold">Cognitive Enhancement</h3>
                        <p className="text-sm text-gray-600">Improved mental clarity, focus, memory, and processing speed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Rapid Energy Boost</h3>
                        <p className="text-sm text-gray-600">Fast-acting cellular energy via mitochondrial ATP production</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Anti-Aging Effects</h3>
                        <p className="text-sm text-gray-600">DNA repair, sirtuin activation, cellular rejuvenation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Neuroprotection</h3>
                        <p className="text-sm text-gray-600">Protects against neurodegeneration and cognitive decline</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Cognitive enhancement, energy optimization, anti-aging, neuroprotection. <strong>Secondary benefits:</strong> Metabolic support, addiction recovery, mood enhancement. <strong>Advantages:</strong> Rapid brain access, no injections, bypasses digestive degradation, convenient daily use.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">NAD+ Delivery Methods Comparison</h3>
                <p className="text-sm text-amber-800">
                  <strong>Nasal Spray:</strong> Rapid absorption, brain access, convenient, moderate bioavailability<br/>
                  <strong>IV Infusion:</strong> Highest bioavailability, clinical setting, time-intensive, expensive<br/>
                  <strong>Oral (NMN/NR precursors):</strong> Convenient, requires conversion, lower bioavailability<br/>
                  <strong>Subcutaneous Injection:</strong> Good bioavailability, requires needles, slower than nasal<br/>
                  <strong>Choose Nasal for:</strong> Daily cognitive/energy support, convenience, brain-targeted benefits
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How intranasal NAD+ works</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Intranasal Absorption and Bioavailability</h3>
                    <p className="text-sm text-gray-700">
                      The nasal mucosa is highly permeable with extensive vascularization, allowing rapid absorption of NAD+ directly into the bloodstream. Intranasal delivery bypasses the gastrointestinal tract, where NAD+ would be degraded by enzymes and stomach acid. It also avoids first-pass hepatic metabolism, ensuring higher bioavailability compared to oral administration. Absorption begins within minutes, with peak plasma levels reached in 15-30 minutes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Direct Nose-to-Brain Delivery</h3>
                    <p className="text-sm text-gray-700">
                      Intranasal administration provides a unique direct pathway to the brain via the olfactory and trigeminal nerves. NAD+ can be transported along these neural pathways, bypassing the blood-brain barrier to reach the central nervous system directly. This nose-to-brain delivery results in higher brain NAD+ concentrations compared to systemic administration, making it particularly effective for cognitive and neuroprotective applications.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Cellular Energy Production (Mitochondrial Function)</h3>
                    <p className="text-sm text-gray-700">
                      NAD+ is essential for mitochondrial ATP production through the electron transport chain. It serves as a critical electron carrier in glycolysis, the citric acid cycle, and oxidative phosphorylation. By increasing cellular NAD+ levels, intranasal NAD+ enhances mitochondrial efficiency, resulting in increased energy production. This explains the rapid energy-boosting effects reported by users.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Sirtuin Activation and Longevity Pathways</h3>
                    <p className="text-sm text-gray-700">
                      NAD+ is a required cofactor for sirtuins (SIRT1-7), a family of proteins that regulate cellular health, DNA repair, inflammation, and longevity. Sirtuins deacetylate proteins involved in metabolic regulation, stress resistance, and aging. By boosting NAD+ levels, intranasal NAD+ activates sirtuins, promoting cellular repair, reducing inflammation, and potentially extending healthspan.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. DNA Repair and Cellular Maintenance</h3>
                    <p className="text-sm text-gray-700">
                      NAD+ is consumed by PARP (poly ADP-ribose polymerase) enzymes during DNA repair processes. PARPs detect and repair DNA damage, but they deplete cellular NAD+ in the process. Supplementing with intranasal NAD+ ensures adequate NAD+ availability for continuous DNA repair, protecting against cellular aging and dysfunction. This mechanism underlies the anti-aging and neuroprotective effects of NAD+.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">6. Neuroprotection and Cognitive Enhancement</h3>
                    <p className="text-sm text-gray-700">
                      Brain cells are highly energy-dependent and vulnerable to NAD+ depletion. Intranasal NAD+ supports neuronal mitochondrial function, reduces oxidative stress, and protects against excitotoxicity. It enhances neurotransmitter synthesis and synaptic plasticity, improving cognitive function. The direct brain delivery via intranasal route makes it particularly effective for cognitive enhancement and neuroprotection against age-related decline.
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
                  <CardDescription>Evidence supporting intranasal NAD+</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Intranasal Delivery for Brain Targeting</h3>
                    <p className="text-sm text-gray-700">
                      Pandya JD et al. 2024 - Intranasal administration of mitochondria-targeted compounds demonstrates improved CNS bioavailability and reduced time to reach the brain compared to systemic routes. The nose-to-brain pathway provides direct neural transport, bypassing the blood-brain barrier.
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10874030/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">NAD+ Metabolism and Cellular Function</h3>
                    <p className="text-sm text-gray-700">
                      Xie N et al. Nature. 2020 - Comprehensive review of NAD+ metabolism showing its critical role in energy production, DNA repair, epigenetic modification, inflammation control, circadian rhythm, and stress resistance. NAD+ decline with aging contributes to metabolic dysfunction and disease.
                      <a href="https://www.nature.com/articles/s41392-020-00311-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">NAD+ in Addiction and Neurobiology</h3>
                    <p className="text-sm text-gray-700">
                      Braidy N et al. PMC. 2020 - NAD+ influences the neurobiology of addiction through effects on dopamine signaling, mitochondrial function, and neuroplasticity. NAD+ supplementation shows promise as an anti-addiction intervention, particularly for alcohol and substance use disorders.
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7278809/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Short Half-Life Favors Intranasal Route</h3>
                    <p className="text-sm text-gray-700">
                      Research indicates intracellular NAD+ has a short half-life of 1-2 hours, making intranasal administration preferable over systemic routes for maintaining therapeutic levels. The rapid absorption and direct brain access of intranasal NAD+ compensates for its short half-life.
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
                      <h3 className="font-semibold text-indigo-900 mb-2">Rapid Brain Access</h3>
                      <p className="text-sm text-indigo-800">Intranasal route provides direct nose-to-brain delivery, bypassing blood-brain barrier.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Superior Bioavailability</h3>
                      <p className="text-sm text-purple-800">Bypasses digestive degradation and first-pass metabolism for higher NAD+ levels.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Mitochondrial Enhancement</h3>
                      <p className="text-sm text-amber-800">Boosts cellular energy production through improved mitochondrial function.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Sirtuin Activation</h3>
                      <p className="text-sm text-rose-800">Activates longevity pathways and DNA repair mechanisms for anti-aging effects.</p>
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
                  <CardDescription>Intranasal administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cognitive Enhancement Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 50-100mg NAD+ per spray, 1-2 sprays per nostril<br/>
                      <strong>Timing:</strong> Morning and/or early afternoon<br/>
                      <strong>Frequency:</strong> Daily or 5 days per week<br/>
                      <strong>Best for:</strong> Mental clarity, focus, productivity, cognitive performance
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Energy Optimization Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 100-150mg NAD+ per spray, 1-2 sprays per nostril<br/>
                      <strong>Timing:</strong> Morning and mid-afternoon (avoid evening)<br/>
                      <strong>Frequency:</strong> Daily<br/>
                      <strong>Best for:</strong> Chronic fatigue, low energy, mitochondrial support
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging/Longevity Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 50-100mg NAD+ per spray, 1 spray per nostril<br/>
                      <strong>Timing:</strong> Morning, consistent daily<br/>
                      <strong>Frequency:</strong> Daily, long-term<br/>
                      <strong>Best for:</strong> Cellular rejuvenation, DNA repair, healthy aging
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Neuroprotection Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 100-150mg NAD+ per spray, 1-2 sprays per nostril<br/>
                      <strong>Timing:</strong> Morning<br/>
                      <strong>Frequency:</strong> Daily<br/>
                      <strong>Best for:</strong> Cognitive decline prevention, neurodegenerative risk, brain health
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Technique:</strong> Spray into nostril while gently inhaling<br/>
                      <strong>Positioning:</strong> Slightly tilt head back after spraying<br/>
                      <strong>Avoid:</strong> Blowing nose immediately after administration<br/>
                      <strong>Timing:</strong> Avoid evening use (may interfere with sleep)<br/>
                      <strong>Storage:</strong> Refrigerate for extended shelf life<br/>
                      <strong>Cycling:</strong> Can be used continuously or 5 days on/2 days off
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
                      <h3 className="font-semibold">Minutes 15-30: Rapid Onset</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Increased mental clarity and alertness</li>
                        <li>Improved focus and concentration</li>
                        <li>Subtle energy boost</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Day 1-7: Initial Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Enhanced cognitive performance</li>
                        <li>Improved energy levels throughout day</li>
                        <li>Better mood and motivation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Sustained Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Consistent cognitive enhancement</li>
                        <li>Reduced mental fatigue</li>
                        <li>Improved sleep quality</li>
                        <li>Enhanced physical energy</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Month 1-3: Long-Term Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Optimized cellular energy production</li>
                        <li>Anti-aging effects (cellular level)</li>
                        <li>Neuroprotection and brain health</li>
                        <li>Metabolic improvements</li>
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
                  <CardDescription>Safety information for intranasal NAD+</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Good Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      NAD+ is a naturally occurring coenzyme essential for life. Intranasal administration is generally well-tolerated with minimal side effects. The intranasal route provides lower systemic exposure than IV infusions, reducing potential adverse effects. Most users report positive experiences with no significant issues.
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
                      <li><strong>Known allergy:</strong> To NAD+ or spray components</li>
                      <li><strong>Cardiovascular concerns:</strong> Consult physician if history of arrhythmias</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Intranasal NAD+ is generally well tolerated. Side effects are typically mild and transient.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nasal irritation:</strong> Mild burning or tingling (usually resolves quickly)</li>
                      <li><strong>Headache:</strong> Rare, mild, may occur initially</li>
                      <li><strong>Flushing:</strong> Temporary facial warmth (uncommon)</li>
                      <li><strong>Overstimulation:</strong> If taken too late in day, may affect sleep</li>
                      <li><strong>Nausea:</strong> Rare, usually with high doses</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable manufacturers with quality testing. Require:<br/>
                      • &gt;99% purity NAD+ (HPLC verified)<br/>
                      • Pharmaceutical-grade formulation<br/>
                      • Third-party testing and COA<br/>
                      • Proper pH buffering for nasal mucosa<br/>
                      • Sterile production and packaging<br/>
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
                  <CardDescription>Tracking progress with NAD+ nasal spray</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline symptoms:</strong> Document energy, cognitive function, sleep quality</li>
                      <li><strong>Medical history:</strong> Screen for contraindications</li>
                      <li><strong>Goals:</strong> Define specific objectives (energy, cognition, anti-aging)</li>
                      <li><strong>Nasal health:</strong> Ensure no active infections or severe congestion</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Day 1:</strong> Assess immediate response, check for nasal irritation</p>
                      <p><strong>Week 1:</strong> Evaluate cognitive and energy improvements</p>
                      <p><strong>Week 2-4:</strong> Monitor sustained benefits and side effects</p>
                      <p><strong>Month 1-3:</strong> Assess long-term improvements and adjust dosing</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Cognitive function:</strong> Improved focus, memory, mental clarity</li>
                      <li><strong>Energy levels:</strong> Increased vitality, reduced fatigue</li>
                      <li><strong>Sleep quality:</strong> Better sleep (if not taken too late)</li>
                      <li><strong>Mood:</strong> Enhanced motivation and well-being</li>
                      <li><strong>Physical performance:</strong> Improved exercise capacity</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe nasal irritation:</strong> Persistent pain, bleeding, or damage</li>
                      <li><strong>Allergic reaction:</strong> Difficulty breathing, severe swelling, anaphylaxis</li>
                      <li><strong>Cardiovascular symptoms:</strong> Chest pain, palpitations, arrhythmias</li>
                      <li><strong>Severe headache:</strong> Persistent or worsening</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Use proper intranasal technique for optimal absorption</li>
                      <li>Avoid evening use to prevent sleep disruption</li>
                      <li>Start with lower doses and titrate up as tolerated</li>
                      <li>Combine with healthy lifestyle (sleep, exercise, nutrition)</li>
                      <li>Store in refrigerator for extended shelf life</li>
                      <li>Track subjective improvements in energy and cognition</li>
                      <li>Consider periodic breaks (e.g., 5 days on/2 days off)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. NAD+ Nasal Spray is a dietary supplement. 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
