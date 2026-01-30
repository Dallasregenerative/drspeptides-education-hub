import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, Zap, Brain, Heart, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNAD() {
  return (
    <>
    <Helmet>
        <title>NAD+ (Nicotinamide Adenine Dinucleotide) | DrsPeptides</title>
        <meta name="description" content="Evidence-based guide to NAD+ supplementation for cellular energy, DNA repair, and longevity. Mechanisms, clinical benefits, administration protocols, and dosing guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NAD+ (Nicotinamide Adenine Dinucleotide) | DrsPeptides" />
        <meta property="og:description" content="Evidence-based guide to NAD+ supplementation for cellular energy, DNA repair, and longevity. Mechanisms, clinical benefits, administration protocols, and dosing guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAD+ (Nicotinamide Adenine Dinucleotide) | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based guide to NAD+ supplementation for cellular energy, DNA repair, and longevity. Mechanisms, clinical benefits, administration protocols, and dosing guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "NAD+ (Nicotinamide Adenine Dinucleotide)",
          "description": "Evidence-based guide to NAD+ supplementation for cellular energy, DNA repair, and longevity. Mechanisms, clinical benefits, administration protocols, and dosing guidelines.",
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

      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Essential Coenzyme</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NAD+ (Nicotinamide Adenine Dinucleotide)</h1>
            <p className="text-xl text-amber-50 mb-6">
              Essential coenzyme present in every cell, critical for energy production, DNA repair, cellular metabolism, and longevity. NAD+ levels decline 50% by age 50, contributing to aging and disease. Supplementation restores cellular function, enhances energy, supports cognitive health, and promotes healthy aging.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Cellular Energy</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Anti-Aging</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">DNA Repair</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Longevity</span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
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

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is NAD+?</CardTitle>
                  <CardDescription>Essential coenzyme for cellular function and longevity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell, essential for fundamental biological processes: energy production (ATP synthesis in mitochondria), DNA repair, cellular metabolism, sirtuin activation (longevity proteins), and circadian rhythm regulation. NAD+ exists in two forms: NAD+ (oxidized) and NADH (reduced), which shuttle electrons in metabolic reactions. NAD+ levels decline dramatically with age—by approximately 50% between ages 40-60—contributing to cellular dysfunction, mitochondrial decline, and age-related diseases. Restoring NAD+ levels through supplementation has emerged as a promising anti-aging and health optimization strategy.
                  </p>
                  <p>
                    NAD+ cannot be supplemented directly (it's not bioavailable orally and degrades rapidly), so supplementation uses precursors that cells convert to NAD+: nicotinamide riboside (NR), nicotinamide mononucleotide (NMN), nicotinamide (NAM), and niacin (vitamin B3). IV and subcutaneous NAD+ administration bypasses oral absorption issues and delivers NAD+ directly to cells. Different delivery methods (IV, subcutaneous, nasal spray, oral) offer varying bioavailability, onset, and clinical applications. Understanding these differences helps clinicians select the optimal approach for each patient's needs.
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
                      <Zap className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Enhanced Energy</h3>
                        <p className="text-sm text-gray-600">Improved mitochondrial function and ATP production</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Cognitive Enhancement</h3>
                        <p className="text-sm text-gray-600">Improved mental clarity, focus, and neuroprotection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Cellular Repair</h3>
                        <p className="text-sm text-gray-600">Enhanced DNA repair and cellular maintenance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Healthy Aging</h3>
                        <p className="text-sm text-gray-600">Sirtuin activation and longevity pathway support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-600 pl-4">
                      <h3 className="font-semibold">IV NAD+</h3>
                      <p className="text-sm text-gray-600">Direct infusion, 100% bioavailability, rapid effects. 250-1000mg per session. Best for acute benefits.</p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-4">
                      <h3 className="font-semibold">Subcutaneous NAD+</h3>
                      <p className="text-sm text-gray-600">Self-administered injection, high bioavailability, convenient. 50-100mg daily. Good for maintenance.</p>
                    </div>
                    <div className="border-l-4 border-yellow-600 pl-4">
                      <h3 className="font-semibold">Nasal Spray NAD+</h3>
                      <p className="text-sm text-gray-600">Intranasal delivery, bypasses first-pass metabolism. 25-50mg daily. Rapid onset, convenient.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h3 className="font-semibold">Oral Precursors (NR, NMN)</h3>
                      <p className="text-sm text-gray-600">Oral supplementation, variable bioavailability. 250-1000mg daily. Most convenient, lowest cost.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-amber-800">
                  <strong>Primary uses:</strong> Age-related decline, fatigue, cognitive decline, metabolic dysfunction, addiction recovery. <strong>Secondary benefits:</strong> Athletic performance, neuroprotection, cardiovascular health, metabolic optimization. <strong>Emerging applications:</strong> Neurodegenerative diseases, chronic fatigue syndrome, long COVID.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How NAD+ works in the body</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Energy Production and Mitochondrial Function</h3>
                    <p className="text-sm text-gray-700">
                      NAD+ is essential for cellular respiration and ATP production. In mitochondria, NAD+ accepts electrons during glycolysis, the citric acid cycle, and the electron transport chain, enabling ATP synthesis. As NAD+ levels decline with age, mitochondrial function decreases, leading to fatigue, reduced cellular energy, and metabolic dysfunction. Restoring NAD+ enhances mitochondrial efficiency, increases ATP production, and improves overall energy levels.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Sirtuin Activation and Longevity</h3>
                    <p className="text-sm text-gray-700">
                      Sirtuins (SIRT1-7) are NAD+-dependent enzymes that regulate cellular health, metabolism, and longevity. Sirtuins require NAD+ as a cofactor to function. They promote DNA repair, enhance mitochondrial biogenesis, reduce inflammation, improve insulin sensitivity, and extend lifespan in animal models. Age-related NAD+ decline impairs sirtuin function. NAD+ supplementation reactivates sirtuins, promoting healthy aging and longevity pathways.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. DNA Repair and Cellular Maintenance</h3>
                    <p className="text-sm text-gray-700">
                      NAD+ is required for PARP (poly ADP-ribose polymerase) enzymes that repair DNA damage. DNA damage accumulates with age and environmental stressors. PARPs consume large amounts of NAD+ during repair processes. When NAD+ is depleted, DNA repair is impaired, leading to cellular dysfunction and accelerated aging. NAD+ supplementation ensures adequate substrate for DNA repair, maintaining genomic stability and cellular health.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4. Neuroprotection and Cognitive Function</h3>
                    <p className="text-sm text-gray-700">
                      The brain has high energy demands and is particularly sensitive to NAD+ decline. NAD+ supports neuronal energy production, protects against oxidative stress, promotes neuroplasticity, and maintains neurotransmitter synthesis. NAD+ supplementation improves cognitive function, protects against neurodegenerative diseases, enhances mental clarity and focus, and supports overall brain health. Clinical studies show improvements in memory, attention, and processing speed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence supporting NAD+ supplementation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">NAD+ Decline with Aging</h3>
                    <p className="text-sm text-gray-700">
                      Gomes AP et al. Cell 2013 - Demonstrated NAD+ levels decline with age in multiple tissues, contributing to age-related mitochondrial dysfunction. NAD+ restoration reverses age-related decline in mice.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/24239849/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">NMN Improves Metabolic Function in Humans</h3>
                    <p className="text-sm text-gray-700">
                      Yoshino J et al. Cell Metab 2018 - NMN supplementation increases NAD+ levels and improves insulin sensitivity in postmenopausal women with prediabetes. First human trial demonstrating metabolic benefits.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/29514064/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">NAD+ and Cognitive Function</h3>
                    <p className="text-sm text-gray-700">
                      Hou Y et al. Neurobiol Aging 2018 - NAD+ supplementation improves cognitive function, reduces neuroinflammation, and protects against age-related cognitive decline in animal models.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/29679847/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Administration guidelines for NAD+ supplementation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">IV NAD+ Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 250-1000mg per infusion<br/>
                      <strong>Frequency:</strong> 1-3 times per week initially, then monthly maintenance<br/>
                      <strong>Duration:</strong> 1-3 hours per infusion<br/>
                      <strong>Best for:</strong> Acute benefits, addiction recovery, rapid restoration
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Subcutaneous NAD+ Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 50-100mg daily or 3-5 times per week<br/>
                      <strong>Administration:</strong> Self-injection, abdomen or thigh<br/>
                      <strong>Duration:</strong> Ongoing maintenance<br/>
                      <strong>Best for:</strong> Consistent levels, convenience, cost-effectiveness
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Nasal Spray NAD+ Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 25-50mg daily (1-2 sprays per nostril)<br/>
                      <strong>Timing:</strong> Morning for energy, evening for sleep support<br/>
                      <strong>Duration:</strong> Ongoing use<br/>
                      <strong>Best for:</strong> Rapid onset, convenience, needle-free
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Oral Precursors (NR/NMN) Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>NMN dose:</strong> 250-1000mg daily<br/>
                      <strong>NR dose:</strong> 300-1000mg daily<br/>
                      <strong>Timing:</strong> Morning with or without food<br/>
                      <strong>Best for:</strong> Maintenance, prevention, cost-effectiveness
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Safety information for NAD+ supplementation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      NAD+ and its precursors have excellent safety profiles with minimal side effects. Oral precursors (NR, NMN) have been studied in multiple clinical trials with good tolerability.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Theoretical concern about supporting cancer cell metabolism (limited evidence)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>IV NAD+:</strong> Nausea, cramping during infusion (dose/rate dependent)</li>
                      <li><strong>Subcutaneous:</strong> Injection site reactions (rare, mild)</li>
                      <li><strong>Nasal spray:</strong> Nasal irritation (rare)</li>
                      <li><strong>Oral precursors:</strong> Mild GI upset, flushing (with niacin)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Tracking NAD+ supplementation progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline symptoms:</strong> Energy, cognitive function, sleep quality</li>
                      <li><strong>Medical history:</strong> Screen for contraindications</li>
                      <li><strong>Optional labs:</strong> NAD+ levels (research assays available)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1-2:</strong> Assess tolerance, initial response</p>
                      <p><strong>Week 2-4:</strong> Monitor energy, cognitive improvements</p>
                      <p><strong>Month 1-3:</strong> Assess sustained benefits, optimize dosing</p>
                      <p><strong>Month 3+:</strong> Ongoing maintenance, periodic reassessment</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Energy levels:</strong> Noticeable improvement within 1-4 weeks</li>
                      <li><strong>Cognitive function:</strong> Improved clarity, focus, memory</li>
                      <li><strong>Sleep quality:</strong> Better sleep architecture, reduced fatigue</li>
                      <li><strong>Overall well-being:</strong> Enhanced vitality, resilience</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. NAD+ and precursors are available as supplements or prescription compounds. 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
