import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, AlertTriangle, Brain, Heart, Shield, TrendingUp, Users, ArrowLeft} from "lucide-react";
import { Link } from "wouter";

export default function ProtocolCognitive() {
  return (
    <>
    <Helmet>
        <title>Peptide Education Hub | DrsPeptides</title>
        <meta name="description" content="Evidence-based peptide protocols for cognitive enhancement and neuroprotection. Semax, Selank, Dihexa, nootropic stacks, dosing guidelines, and clinical applications." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Peptide Education Hub | DrsPeptides" />
        <meta property="og:description" content="Evidence-based peptide protocols for cognitive enhancement and neuroprotection. Semax, Selank, Dihexa, nootropic stacks, dosing guidelines, and clinical applications." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptide Education Hub | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based peptide protocols for cognitive enhancement and neuroprotection. Semax, Selank, Dihexa, nootropic stacks, dosing guidelines, and clinical applications." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Peptide Education Hub",
          "description": "Evidence-based peptide protocols for cognitive enhancement and neuroprotection. Semax, Selank, Dihexa, nootropic stacks, dosing guidelines, and clinical applications.",
          "url": ${window.location.href},
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900">Peptide Education Hub</h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Protocol Cognitive - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
</div>
          <Link href="/" className="md:hidden inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-sm"><ArrowLeft className="h-4 w-4" />Home</Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-slate-700 hover:text-teal-600 transition-colors">Home</Link>
            <Link href="/blog" className="text-slate-700 hover:text-teal-600 transition-colors">Blog</Link>
            <Link href="/resources" className="text-slate-700 hover:text-teal-600 transition-colors">Resources</Link>
            <Link href="/research" className="text-slate-700 hover:text-teal-600 transition-colors">Research</Link>
          </nav>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Critical Battle</Badge>
            <h1 className="text-5xl font-bold mb-6">Cognitive Health & Neuroprotection Protocol</h1>
            <p className="text-xl text-white/90 mb-4">
              Fighting the enemy of the cruelest kind. Advanced peptide strategies for memory enhancement, 
              neuroregeneration, and protection against Alzheimer's disease.
            </p>
            <p className="text-2xl font-semibold text-white mb-8 italic">
              "Our minds are our most important faculty"
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="#peptides">View Peptides</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/research">Research Studies</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Devastating Statistics */}
      <section className="py-16 bg-rose-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-rose-900">The Brutal Reality of Alzheimer's Disease</h2>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Anyone who has a loved one affected by Alzheimer's Disease will testify to the destructive nature 
              of the disease. The impact on the individual is massive and just as damaging to the afflicted's 
              loved ones, who must sit by helplessly and watch them slip away.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-rose-300 bg-white">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-rose-600 mb-2" />
                  <CardTitle className="text-4xl font-bold text-rose-700">145%</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    Increase in Alzheimer's deaths over past 20 years (while heart disease deaths decreased 7.3%)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-rose-300 bg-white">
                <CardHeader>
                  <Users className="h-12 w-12 text-rose-600 mb-2" />
                  <CardTitle className="text-4xl font-bold text-rose-700">1 in 3</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    Seniors dies from Alzheimer's or similar dementia—more than breast and prostate cancer combined
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-rose-300 bg-white">
                <CardHeader>
                  <Heart className="h-12 w-12 text-rose-600 mb-2" />
                  <CardTitle className="text-4xl font-bold text-rose-700">11M</CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    People providing unpaid care for Alzheimer's sufferers—emotional devastation is incalculable
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-rose-200 bg-rose-50 mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-rose-900 mb-3">The Escalating Crisis</h3>
                    <ul className="space-y-2 text-rose-800">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 mt-1">•</span>
                        <span><strong>6 million people</strong> currently living with Alzheimer's diagnosis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 mt-1">•</span>
                        <span><strong>After age 65:</strong> Risk of developing the disease doubles every 5 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 mt-1">•</span>
                        <span><strong>5th leading cause</strong> of death in Americans over 65</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 mt-1">•</span>
                        <span><strong>As we gain ground</strong> on cancer and heart disease, Alzheimer's becomes more prominent</span>
                      </li>
                    </ul>
                    <p className="mt-4 italic font-semibold text-rose-900">
                      "Peptide research has never been more critical if we are to have a fighting chance."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8 border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <CardTitle className="text-amber-900">Neurologist Supervision Required</CardTitle>
                    <CardDescription className="text-amber-700">
                      All cognitive health peptide protocols must be implemented under the guidance of a board-certified 
                      neurologist or physician with expertise in neurodegenerative disease and neuroprotective therapies.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Two-Strategy Framework */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Two Major Research Strategies</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Peptide research is exploring Alzheimer's from two complementary angles: enhancing cognitive function 
              and targeting the underlying disease mechanisms.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <Brain className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">Strategy 1: Bolster Mind Functions</CardTitle>
                  <CardDescription className="text-base">Symptom Management & Cognitive Enhancement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on memory and recall improvement through peptides showing neuroregenerative (forming neural 
                    pathways) and neuroprotective (defending healthy neurons and maintaining connections) capabilities.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Key Mechanisms:</p>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Neuroregeneration (forming neural pathways)</li>
                      <li>• Neuroprotection (defending healthy neurons)</li>
                      <li>• Memory and recall enhancement</li>
                      <li>• Cognitive performance optimization</li>
                    </ul>
                    <p className="text-sm text-blue-700 mt-3 italic">
                      "This focuses on treating symptoms and not the underlying causes of AD, but every bit helps in this battle."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Shield className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-2xl">Strategy 2: Target Root Causes</CardTitle>
                  <CardDescription className="text-base">Amyloid Plaques & Disease Modification</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Improve our ability to directly target the Amyloid Plaques that are the direct cause of Alzheimer's 
                    at the cellular level. This area of research is showing promise with in vitro studies and cognitive 
                    performance improvements in mice.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-purple-900 mb-2">Key Mechanisms:</p>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Amyloid plaque inhibition and clearance</li>
                      <li>• Tau protein formation prevention</li>
                      <li>• Neuroinflammation reduction</li>
                      <li>• Oxidative stress mitigation</li>
                    </ul>
                    <p className="text-sm text-purple-700 mt-3 italic">
                      "Addressing the underlying pathology, not just symptoms—the holy grail of Alzheimer's research."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-indigo-200 bg-indigo-50">
              <CardHeader>
                <CardTitle className="text-indigo-900">Dual-Strategy Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-indigo-800">
                <p className="mb-4">
                  The most promising protocols combine both strategies: enhancing cognitive resilience while simultaneously 
                  targeting disease mechanisms. Some peptides (like N-Acetyl Semax) help in both recovery and maintenance, 
                  while others (like P21) specifically target amyloid and tau pathology.
                </p>
                <p className="italic font-semibold">
                  "Given the scope of suffering and the alarming increase of severity, this is one of the more critical 
                  areas of peptide research—one that is poised to have a profound positive impact."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Peptides Section */}
      <section id="peptides" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Neuroprotective Peptides</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Four cutting-edge compounds showing breakthrough promise in cognitive enhancement, neuroregeneration, 
              and protection against Alzheimer's disease.
            </p>

            <Tabs defaultValue="semax" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="semax">N-Acetyl Semax</TabsTrigger>
                <TabsTrigger value="pinealon">Pinealon</TabsTrigger>
                <TabsTrigger value="p21">P21 (P021)</TabsTrigger>
                <TabsTrigger value="tb500">TB-500</TabsTrigger>
              </TabsList>

              {/* N-Acetyl Semax */}
              <TabsContent value="semax">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">N-Acetyl Semax</CardTitle>
                        <CardDescription className="text-lg">
                          Neuroprotective & Neuroregenerative | Dual-Strategy Peptide
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">Dual Action</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        N-Acetyl Semax belongs to a class of peptides demonstrating powerful neuroprotective and 
                        neuroregenerative actions. Research from Russia has shown this peptide to boost neuroregeneration 
                        in patients who have suffered a stroke, speaking volumes to the potential this peptide may have 
                        in long-term brain health and longevity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Breakthrough Research Findings</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-blue-900 mb-3">
                          <strong>Stroke Recovery:</strong> Clinical research has demonstrated that Semax boosts 
                          neuroregeneration in patients who have suffered a stroke, indicating powerful regenerative 
                          capabilities even in severe brain trauma situations.
                        </p>
                        <p className="text-blue-900">
                          <strong>Healthy Subjects:</strong> Lab research shows these results are not exclusive to 
                          post-brain trauma situations. Even in healthy mice, we see increased cognition and improvements 
                          in memory.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Neuroregeneration:</strong> Promotes formation of new neural pathways and connections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Neuroprotection:</strong> Defends healthy neurons and maintains existing connections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Cognitive Enhancement:</strong> Increases cognition and memory in healthy individuals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span><strong>Brain Trauma Recovery:</strong> Accelerates recovery from stroke and brain injury</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Alzheimer's Applications</h3>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4">
                        <p className="text-indigo-900">
                          <strong>Dual Strategy:</strong> In the area of Alzheimer's research, this peptide seems to help 
                          in BOTH the recovery and maintenance strategies. It enhances cognitive function (Strategy 1) while 
                          also providing neuroprotection that may slow disease progression (Strategy 2).
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Primary Indications</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Stroke recovery and rehabilitation</li>
                            <li>• Traumatic brain injury</li>
                            <li>• Alzheimer's disease (dual strategy)</li>
                            <li>• Age-related cognitive decline</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-indigo-700">Cognitive Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Memory enhancement</li>
                            <li>• Cognitive performance optimization</li>
                            <li>• Neural pathway formation</li>
                            <li>• Long-term brain health support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Speaks Volumes to Potential</h4>
                      <p className="text-blue-800 text-sm">
                        The ability to boost neuroregeneration in stroke patients speaks volumes to the potential this 
                        peptide may have in long-term brain health and longevity. Results are not exclusive to trauma—even 
                        healthy subjects show cognitive improvements.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <a href="/research" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Research Studies
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                          Consult Healthcare Provider
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pinealon */}
              <TabsContent value="pinealon">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">Pinealon</CardTitle>
                        <CardDescription className="text-lg">
                          Synthetic Tripeptide | Circadian Rhythm & CNS Aging
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">3 Amino Acids</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Pinealon is a synthetic peptide just three amino acids in length. Despite its small size, it has 
                        undergone extensive research for its ability to alter circadian rhythm, improve memory, and enhance 
                        learning. It has been shown to offset the effects of aging, particularly in the central nervous system.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Unique Mechanisms</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span><strong>Circadian Rhythm Modulation:</strong> Alters sleep-wake cycles for optimal brain function</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span><strong>Hypoxia Protection:</strong> Protects cell types against effects of oxygen deprivation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span><strong>Behavior Modification:</strong> Shown to modify behavior patterns beneficially</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span><strong>CNS Aging Offset:</strong> Particularly effective in central nervous system aging</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cognitive Benefits</h3>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Memory</h4>
                          <p className="text-sm text-purple-800">
                            Extensive research demonstrates memory improvement capabilities across various cognitive tasks.
                          </p>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                          <h4 className="font-semibold text-indigo-900 mb-2">Learning</h4>
                          <p className="text-sm text-indigo-800">
                            Enhances learning capacity and information retention in research subjects.
                          </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Aging Offset</h4>
                          <p className="text-sm text-blue-800">
                            Shown to offset effects of aging specifically in the central nervous system.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Alzheimer's Applications</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <p className="text-purple-900">
                          <strong>Cognitive Disorder Treatment:</strong> May be useful in treating cognitive disorders like 
                          Alzheimer's disease through its ability to improve memory, enhance learning, and offset CNS aging. 
                          The circadian rhythm modulation may also support better sleep quality, which is critical for brain 
                          health and amyloid clearance.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Primary Indications</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Alzheimer's disease</li>
                            <li>• Age-related cognitive decline</li>
                            <li>• Central nervous system aging</li>
                            <li>• Circadian rhythm disorders</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-indigo-700">Secondary Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Memory enhancement</li>
                            <li>• Learning capacity improvement</li>
                            <li>• Hypoxia protection</li>
                            <li>• Sleep quality optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Extensive Research Foundation</h4>
                      <p className="text-purple-800 text-sm">
                        Pinealon has undergone extensive research for its cognitive benefits. Despite being only three 
                        amino acids in length, it demonstrates remarkable efficacy in CNS protection and cognitive enhancement.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <a href="/research" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Research Studies
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                          Consult Healthcare Provider
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* P21 */}
              <TabsContent value="p21">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">P21 (P021)</CardTitle>
                        <CardDescription className="text-lg">
                          Nootropic Peptide | BDNF Booster & Amyloid Inhibitor
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">Root Cause Targeting</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        P21 is a nootropic peptide targeting improved neurogenesis. In animal studies, P21 has been shown 
                        to boost levels of BDNF (Brain-derived neurotrophic factor), thus promoting neurogenesis (nerve growth) 
                        and inhibiting the formation of Amyloid plaques and Tau proteins seen in Alzheimer's disease.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">BDNF: The Master Regulator</h3>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                        <p className="text-emerald-900 mb-3">
                          <strong>Brain-Derived Neurotrophic Factor (BDNF)</strong> is a critical protein that supports 
                          the survival of existing neurons and encourages the growth and differentiation of new neurons 
                          and synapses.
                        </p>
                        <p className="text-emerald-900">
                          BDNF has been linked not just to enhanced neurogenesis, but to the <strong>down-regulation of 
                          certain enzymes responsible for tau and amyloid plaque formation in Alzheimer's brains</strong>. 
                          This makes BDNF elevation a dual-action strategy.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Dual Mechanism of Action</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Promotes Healthy Growth</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Boosts BDNF levels</li>
                            <li>• Promotes neurogenesis (nerve growth)</li>
                            <li>• Enhances synaptic plasticity</li>
                            <li>• Supports neuron survival</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Prevents Pathology</h4>
                          <ul className="text-sm text-purple-800 space-y-1">
                            <li>• <strong>Inhibits amyloid plaque formation</strong></li>
                            <li>• <strong>Inhibits tau protein formation</strong></li>
                            <li>• Down-regulates pathological enzymes</li>
                            <li>• Targets root causes of Alzheimer's</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Research Findings</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <p className="text-purple-900">
                          <strong>Animal Model Success:</strong> P21 has been shown to improve cognition in animal models 
                          while simultaneously reducing the pathological hallmarks of Alzheimer's disease (amyloid plaques 
                          and tau proteins). This dual action makes it one of the most promising peptides for disease modification.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Why This Matters for Alzheimer's</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Targets Root Cause:</strong> Directly inhibits amyloid and tau formation (Strategy 2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Enhances Cognition:</strong> Improves cognitive function through BDNF (Strategy 1)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Promotes Neurogenesis:</strong> Supports growth of new healthy neurons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Down-Regulates Pathology:</strong> Reduces enzymes responsible for disease progression</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-emerald-700">Primary Indications</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Alzheimer's disease (disease modification)</li>
                            <li>• Mild cognitive impairment</li>
                            <li>• Age-related cognitive decline</li>
                            <li>• Neurodegeneration prevention</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Cognitive Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Improved cognition (animal models)</li>
                            <li>• Enhanced neurogenesis</li>
                            <li>• Memory support</li>
                            <li>• Synaptic plasticity enhancement</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-900 mb-2">Holy Grail Potential</h4>
                      <p className="text-emerald-800 text-sm">
                        P21's ability to simultaneously promote healthy brain growth (via BDNF) while preventing pathological 
                        protein formation (amyloid and tau) represents the "holy grail" of Alzheimer's research—addressing 
                        both symptoms and root causes.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <a href="/research" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Research Studies
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                          Consult Healthcare Provider
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* TB-500 */}
              <TabsContent value="tb500">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">TB-500 (Thymosin Beta-4)</CardTitle>
                        <CardDescription className="text-lg">
                          Naturally Occurring | Neuroinflammation & Regeneration
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-teal-100 text-teal-800">Multi-System</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        TB-500 (Thymosin Beta-4 / Tβ4) is a naturally occurring peptide that plays a vital role in cellular 
                        repair, regeneration, and anti-inflammatory processes. Its regenerative properties support muscle 
                        and organ repair, potentially improving metabolic resilience and extending health span.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Neuroprotective Mechanisms</h3>
                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
                        <p className="text-teal-900 mb-3">
                          <strong>Key Factors in Alzheimer's Disease:</strong> Research suggests Tβ4 may protect neurons, 
                          reduce oxidative stress, and inhibit neuroinflammation—all key factors in Alzheimer's disease progression.
                        </p>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span><strong>Neuronal Protection:</strong> Protects neurons from damage and degeneration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span><strong>Oxidative Stress Reduction:</strong> Reduces harmful oxidative damage to brain cells</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span><strong>Neuroinflammation Inhibition:</strong> Key mechanism in Alzheimer's pathology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span><strong>Mitochondrial Function:</strong> Enhances cellular energy production in neurons</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Broader Regenerative Benefits</h3>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Tissue Healing</h4>
                          <p className="text-sm text-blue-800">
                            Promotes tissue healing and cellular repair across multiple organ systems.
                          </p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Angiogenesis</h4>
                          <p className="text-sm text-purple-800">
                            Supports formation of new blood vessels for improved circulation and nutrient delivery.
                          </p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                          <h4 className="font-semibold text-emerald-900 mb-2">Anti-Inflammatory</h4>
                          <p className="text-sm text-emerald-800">
                            Powerful anti-inflammatory processes throughout the body and brain.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Multi-Domain Applications</h3>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4">
                        <p className="text-indigo-900">
                          <strong>Promising Candidate Across Multiple Domains:</strong> TB-500's regenerative properties 
                          make it a promising candidate in aging research, metabolism optimization, and neurodegenerative 
                          disease research (including Alzheimer's). Its ability to support muscle and organ repair potentially 
                          improves metabolic resilience and extends health span.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-teal-700">Neuroprotection</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Alzheimer's disease</li>
                            <li>• Neuroinflammation reduction</li>
                            <li>• Oxidative stress mitigation</li>
                            <li>• Neuronal health support</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Regeneration</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Tissue repair acceleration</li>
                            <li>• Muscle and organ repair</li>
                            <li>• Cellular regeneration</li>
                            <li>• Angiogenesis support</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Longevity</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Metabolic resilience</li>
                            <li>• Health span extension</li>
                            <li>• Mitochondrial function</li>
                            <li>• Aging research applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                      <h4 className="font-semibold text-teal-900 mb-2">Naturally Occurring Advantage</h4>
                      <p className="text-teal-800 text-sm">
                        As a naturally occurring peptide, TB-500 plays a vital role in the body's own repair and regeneration 
                        processes. Supplementation may restore youthful levels of this critical regenerative factor.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <a href="/research" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Research Studies
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                          Consult Healthcare Provider
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Promise of a Beautiful Future</h2>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              "The promise of treating these conditions gives us hope that we are in for a beautiful future. 
              One where people can live longer, more vibrant lives. Lives that not only include physical health 
              in abundance, but sharp functional minds as well."
            </p>
            <p className="text-xl text-white/80 mb-8 italic">
              "Please keep the research alive. It's what our future generations deserve."
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                Join the Fight Against Alzheimer's
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About This Resource</h3>
              <p className="text-slate-300">
                An educational hub providing evidence-based information on peptide therapy for healthcare practitioners.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
                <li><Link href="/resources" className="text-slate-300 hover:text-white">Resources</Link></li>
                <li><a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">DrsPeptides.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
              <p className="text-slate-300 text-sm">
                This content is for educational purposes only and is not medical advice. Consult with qualified healthcare providers.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2025 Peptide Education Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
