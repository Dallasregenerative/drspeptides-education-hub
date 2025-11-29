import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Moon, Brain, Shield, Activity } from "lucide-react";
import { Link } from "wouter";

export default function PeptidePinealon() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Peptides
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pinealon</h1>
            <p className="text-xl text-indigo-50 mb-6">
              Pineal gland bioregulator peptide. Supports circadian rhythm regulation, melatonin production, sleep quality, and neuroprotection. Part of Khavinson bioregulator research with 40+ years of clinical use.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Bioregulator</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Pineal Gland</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Injectable/Oral</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanism">Mechanism</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Pinealon?</CardTitle>
                  <CardDescription>Pineal gland bioregulator for circadian rhythm, sleep, and neuroprotection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Pinealon is a <strong>bioregulator peptide</strong> developed by Professor Vladimir Khavinson and the St. Petersburg Institute of Bioregulation and Gerontology in Russia. It is a <strong>tripeptide</strong> (three amino acids: Glu-Asp-Arg) that specifically targets the <strong>pineal gland</strong>, the brain structure responsible for producing <strong>melatonin</strong> and regulating <strong>circadian rhythms</strong> (sleep-wake cycles).
                  </p>
                  <p>
                    Bioregulator peptides are short-chain peptides (typically 2-4 amino acids) that interact with specific organs or tissues to <strong>restore normal function</strong> and <strong>support cellular health</strong>. Pinealon is designed to optimize pineal gland function, which declines with age, leading to disrupted sleep, reduced melatonin production, and increased risk of neurodegenerative diseases.
                  </p>
                  <p>
                    Pinealon is widely used for <strong>sleep quality improvement</strong>, <strong>circadian rhythm optimization</strong>, <strong>neuroprotection</strong>, <strong>anti-aging</strong>, and <strong>cognitive enhancement</strong>. It is particularly beneficial for individuals with insomnia, shift work disorder, jet lag, or age-related sleep disturbances.
                  </p>
                  <p>
                    <strong>Khavinson bioregulators</strong> have been used clinically in Russia for over 40 years, with extensive research supporting their safety and efficacy. Pinealon is part of this well-established peptide bioregulation system.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Characteristics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Moon className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Circadian Rhythm Regulation</h3>
                        <p className="text-sm text-gray-600">Supports pineal gland function; optimizes sleep-wake cycles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Neuroprotection</h3>
                        <p className="text-sm text-gray-600">Protects brain cells; reduces oxidative stress and inflammation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Melatonin Production</h3>
                        <p className="text-sm text-gray-600">Supports natural melatonin synthesis; improves sleep quality</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Anti-Aging Effects</h3>
                        <p className="text-sm text-gray-600">Restores age-related decline in pineal function; longevity benefits</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Sleep quality improvement, circadian rhythm optimization, insomnia treatment, jet lag recovery, shift work disorder, neuroprotection, anti-aging. <strong>Khavinson bioregulator system:</strong> 40+ years of clinical use in Russia; extensive research supporting safety and efficacy. <strong>Target population:</strong> Individuals with sleep disturbances, aging adults, shift workers, travelers, neurodegenerative disease prevention.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Pineal gland bioregulation via gene expression modulation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Pineal Gland Targeting (Organ-Specific Bioregulation)</h3>
                    <p className="text-sm text-gray-700">
                      Pinealon is a <strong>tripeptide (Glu-Asp-Arg)</strong> that selectively targets the <strong>pineal gland</strong>. Bioregulator peptides work by interacting with DNA in target tissues, modulating <strong>gene expression</strong> to restore normal cellular function. Pinealon "reprograms" pineal gland cells to function optimally, reversing age-related decline.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Melatonin Production Enhancement</h3>
                    <p className="text-sm text-gray-700">
                      The pineal gland produces <strong>melatonin</strong>, the "sleep hormone" that regulates circadian rhythms. Melatonin production declines with age, leading to sleep disturbances. Pinealon supports the enzymatic pathways involved in melatonin synthesis (serotonin → N-acetylserotonin → melatonin), restoring youthful melatonin levels and improving sleep quality.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. Circadian Rhythm Optimization</h3>
                    <p className="text-sm text-gray-700">
                      Pinealon helps synchronize the body's <strong>circadian clock</strong> (suprachiasmatic nucleus in the hypothalamus) with environmental light-dark cycles. This improves sleep-wake timing, reduces sleep latency (time to fall asleep), and enhances sleep architecture (more deep sleep and REM sleep).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Neuroprotection & Antioxidant Effects</h3>
                    <p className="text-sm text-gray-700">
                      Pinealon has <strong>neuroprotective</strong> properties, reducing oxidative stress and inflammation in the brain. It protects neurons from damage caused by free radicals, excitotoxicity, and age-related degeneration. This may reduce the risk of neurodegenerative diseases (Alzheimer's, Parkinson's) and support cognitive function.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Anti-Aging & Longevity</h3>
                    <p className="text-sm text-gray-700">
                      The pineal gland is considered the "aging clock" of the body. Its decline is associated with systemic aging. Pinealon restores pineal function, which may have <strong>systemic anti-aging effects</strong>, including improved immune function, metabolic health, and longevity. Khavinson's research suggests bioregulators extend lifespan in animal models.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> Short (minutes to hours; typical for small peptides)<br/>
                      <strong>Bioavailability:</strong> Injectable (subcutaneous) or oral (sublingual preferred)<br/>
                      <strong>Duration of effects:</strong> Cumulative over weeks to months (gene expression modulation)<br/>
                      <strong>Frequency:</strong> Daily or every other day for 10-30 days, then periodic maintenance cycles
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
                  <CardDescription>40+ years of Khavinson bioregulator research; extensive Russian clinical use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Khavinson Bioregulator System</h3>
                    <p className="text-sm text-gray-700">
                      Professor Vladimir Khavinson developed bioregulator peptides at the St. Petersburg Institute of Bioregulation and Gerontology. Over 40 years of research and clinical use in Russia support their safety and efficacy. Pinealon is one of ~20 organ-specific bioregulators targeting the pineal gland, thymus, brain, liver, etc.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sleep Quality & Circadian Rhythm</h3>
                    <p className="text-sm text-gray-700">
                      Studies show Pinealon improves sleep quality, reduces sleep latency, and increases total sleep time in individuals with insomnia or age-related sleep disturbances. Users report deeper sleep, better morning alertness, and improved daytime energy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Neuroprotection & Cognitive Function</h3>
                    <p className="text-sm text-gray-700">
                      Animal studies demonstrate Pinealon's neuroprotective effects, reducing neuronal damage in models of stroke, traumatic brain injury, and neurodegenerative diseases. Human studies suggest improvements in cognitive function, memory, and mental clarity, particularly in aging adults.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging & Longevity</h3>
                    <p className="text-sm text-gray-700">
                      Khavinson's research shows bioregulators (including Pinealon) extend lifespan in animal models (rodents, fruit flies) by 20-40%. Human studies suggest improved markers of biological aging (telomere length, immune function, metabolic health). Long-term use may support healthy aging and longevity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Safety Profile</h3>
                    <p className="text-sm text-gray-700">
                      Extensive clinical use in Russia (40+ years) demonstrates excellent safety. No significant adverse events reported. Bioregulators are well-tolerated, with minimal side effects. They work through natural gene expression modulation, not pharmacological receptor activation.
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
                      <h3 className="font-semibold text-indigo-900 mb-2">Sleep Quality</h3>
                      <p className="text-sm text-indigo-800">Improves sleep latency, duration, and architecture in insomnia patients</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Neuroprotection</h3>
                      <p className="text-sm text-indigo-800">Reduces neuronal damage in stroke, TBI, and neurodegenerative models</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Longevity</h3>
                      <p className="text-sm text-indigo-800">Extends lifespan 20-40% in animal models (Khavinson research)</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Safety</h3>
                      <p className="text-sm text-indigo-800">40+ years clinical use; excellent safety profile; no significant adverse events</p>
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
                  <CardDescription>Based on Khavinson Institute protocols and clinical experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Protocol (Injectable)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 10-20mg per injection, subcutaneous or intramuscular<br/>
                      <strong>Frequency:</strong> Once daily or every other day<br/>
                      <strong>Duration:</strong> 10-30 days (one cycle), then 3-6 month break before repeating<br/>
                      <strong>Timing:</strong> Evening (before bed) optimal for circadian rhythm support
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Oral/Sublingual Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 10-20mg per dose, sublingual (under tongue) or oral capsule<br/>
                      <strong>Frequency:</strong> Once daily<br/>
                      <strong>Duration:</strong> 30-60 days, then 3-6 month break before repeating<br/>
                      <strong>Timing:</strong> Evening (before bed) for sleep benefits; morning for cognitive effects
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sleep quality improvement:</strong> 10-20mg daily (evening) for 10-30 days; repeat every 3-6 months<br/>
                      <strong>Jet lag/shift work:</strong> 10mg daily for 7-14 days during adjustment period<br/>
                      <strong>Neuroprotection/anti-aging:</strong> 10-20mg daily for 30 days; repeat 2-4 times per year<br/>
                      <strong>Cognitive enhancement:</strong> 10mg daily (morning) for 30 days; repeat as needed
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Injectable:</strong> Subcutaneous or intramuscular; reconstitute with bacteriostatic water<br/>
                      <strong>Oral:</strong> Capsules or sublingual tablets; sublingual preferred for better absorption<br/>
                      <strong>Storage:</strong> Reconstituted vials refrigerated; capsules/tablets at room temperature<br/>
                      <strong>Cycling:</strong> 10-30 day cycles with 3-6 month breaks (prevents tolerance; allows gene expression reset)
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
                      <h3 className="font-semibold">Week 1: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved sleep quality (deeper, more restorative sleep)</li>
                        <li>Reduced sleep latency (fall asleep faster)</li>
                        <li>Better morning alertness</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Cumulative Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Optimized circadian rhythm (consistent sleep-wake timing)</li>
                        <li>Increased daytime energy and vitality</li>
                        <li>Improved cognitive function (memory, focus, mental clarity)</li>
                        <li>Reduced anxiety and stress (melatonin's anxiolytic effects)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Month 2-3: Long-Term Effects (Ongoing Cycles)</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Sustained sleep quality improvements</li>
                        <li>Neuroprotective benefits (reduced cognitive decline risk)</li>
                        <li>Anti-aging effects (improved biological age markers)</li>
                        <li>Enhanced immune function and metabolic health</li>
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
                  <CardDescription>Excellent safety; 40+ years clinical use with no significant adverse events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Pinealon has an <strong>excellent safety profile</strong> based on 40+ years of clinical use in Russia. No significant adverse events reported. Bioregulators work through natural gene expression modulation, not pharmacological receptor activation, minimizing side effects.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications (Theoretical)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Active cancer:</strong> Theoretical concern (no evidence of tumor promotion, but caution advised)</li>
                      <li><strong>Autoimmune diseases:</strong> Consult physician (bioregulators may modulate immune function)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects (Rare)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Pinealon is exceptionally well-tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (rare, injectable form)</li>
                      <li><strong>Drowsiness:</strong> Occasional (take before bed if occurs)</li>
                      <li><strong>Vivid dreams:</strong> Some users report (melatonin effect; not harmful)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable suppliers with third-party testing. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Certificate of Analysis (COA)<br/>
                      • Khavinson Institute-approved formulations (if available)<br/>
                      • GMP manufacturing standards
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
                  <CardDescription>Track sleep quality, cognitive function, and subjective well-being</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline sleep quality:</strong> Sleep diary (sleep latency, duration, wake frequency)</li>
                      <li><strong>Cognitive function:</strong> Subjective assessment (memory, focus, mental clarity)</li>
                      <li><strong>Medical history:</strong> Sleep disorders, neurological conditions, medication use</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (sleep quality, drowsiness, subjective effects)</p>
                      <p><strong>Week 2-4:</strong> Sleep diary reassessment (track improvements in sleep latency, duration, quality)</p>
                      <p><strong>End of cycle (10-30 days):</strong> Comprehensive assessment (sleep, cognition, energy, well-being)</p>
                      <p><strong>Maintenance cycles:</strong> Repeat every 3-6 months; track long-term benefits</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Sleep quality:</strong> Reduced sleep latency, increased total sleep time, deeper sleep</li>
                      <li><strong>Circadian rhythm:</strong> Consistent sleep-wake timing; improved morning alertness</li>
                      <li><strong>Cognitive function:</strong> Improved memory, focus, mental clarity</li>
                      <li><strong>Energy & vitality:</strong> Increased daytime energy; reduced fatigue</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Excessive drowsiness:</strong> Persistent daytime sleepiness (adjust timing or dose)</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                      <li><strong>Worsening sleep:</strong> Paradoxical insomnia (rare; discontinue)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (if injectable; subcutaneous or IM)</li>
                      <li>Sublingual administration (if oral; hold under tongue 1-2 minutes)</li>
                      <li>Evening timing (optimal for sleep benefits)</li>
                      <li>Cycling protocol (10-30 day cycles with 3-6 month breaks)</li>
                      <li>Quality sourcing (Khavinson-approved formulations preferred)</li>
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
            Educational resource for healthcare providers. Pinealon is a bioregulator peptide with 40+ years of clinical use in Russia. 
            Consult qualified healthcare providers before use.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Source peptides from{" "}
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">
              drspeptides.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
