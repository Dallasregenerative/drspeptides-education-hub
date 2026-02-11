import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, AlertTriangle, Shield, Zap, Heart, Microscope, Target, ArrowLeft} from "lucide-react";
import { Link } from "wouter";

export default function ProtocolLongevity() {
  return (
    <>
    <Helmet>
        <title>Peptide Education Hub | DrsPeptides</title>
        <meta name="description" content="Advanced peptide protocols for longevity and anti-aging. Epithalon, NAD+, mitochondrial peptides, telomere support, dosing schedules, and evidence-based longevity strategies." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Peptide Education Hub | DrsPeptides" />
        <meta property="og:description" content="Advanced peptide protocols for longevity and anti-aging. Epithalon, NAD+, mitochondrial peptides, telomere support, dosing schedules, and evidence-based longevity strategies." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptide Education Hub | DrsPeptides" />
        <meta name="twitter:description" content="Advanced peptide protocols for longevity and anti-aging. Epithalon, NAD+, mitochondrial peptides, telomere support, dosing schedules, and evidence-based longevity strategies." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Peptide Education Hub",
          "description": "Advanced peptide protocols for longevity and anti-aging. Epithalon, NAD+, mitochondrial peptides, telomere support, dosing schedules, and evidence-based longevity strategies.",
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
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900">Peptide Education Hub</h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Protocol Longevity - Patient Handout" subtitle="Peptide Education Hub" />
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Extreme Longevity Protocol</Badge>
            <h1 className="text-5xl font-bold mb-6">Longevity & Healthspan Optimization</h1>
            <p className="text-xl text-white/90 mb-4">
              The multi-front war on aging through cellular regeneration, immune bolstering, and stress resilience. 
              Not just adding years to life, but adding life to years.
            </p>
            <p className="text-2xl font-semibold text-white mb-8 italic">
              "120+ years is coming faster than we think"
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

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Only Race That Really Matters</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 italic mb-6">
                "Longevity is simply defined as 'long.' As simplistic as that sounds, it really is the only race that 
                really matters. The objective function of life is to live as long as possible. Survival is key; without 
                it, nothing else matters. Time is the one finite resource that matters above all else."
              </p>
              
              <p>
                Recent breakthroughs in peptide research are giving us increased options in our fight for longevity. 
                Based on numbers trending today, it is not unreasonable to predict the average lifespan to increase 
                to 100 years and beyond. Modern medicine, preventative care, and increased focus on proper diet and 
                exercise have already more than doubled the average life expectancy.
              </p>
              
              <p>
                But longevity is less about adding more years and more about adding <strong>better quality years</strong>. 
                Increased vitality, bone strength, skin health, improvements in libido and mood are every bit as important 
                as keeping body fat under control and the heart healthy. Mountain climbing well into the 80 and 90 year 
                range is coming faster than we think.
              </p>
            </div>

            <Card className="mb-8 border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <CardTitle className="text-amber-900">Medical Supervision Required</CardTitle>
                    <CardDescription className="text-amber-700">
                      All longevity peptide protocols must be implemented under the guidance of a board-certified physician 
                      with expertise in regenerative medicine and anti-aging therapies.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Three-Pathway Framework */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">The Multi-Front War on Aging</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Longevity is a war with battles on many fronts. When combined effectively, these strategies 
              are going to blow open the doors limiting lifespan.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Zap className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-2xl">Pathway 1: Cellular Regeneration</CardTitle>
                  <CardDescription className="text-base">Enzyme-level support for cell division and growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The ability to regenerate cells, supported at the enzyme level, is one obvious path to longer lifespans. 
                    Maintaining cellular division and growth capacity long past natural decline.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-purple-900">Key Mechanisms:</p>
                    <ul className="text-sm text-purple-800 space-y-1 mt-2">
                      <li>• Clearing senescent cells</li>
                      <li>• Supporting mitochondrial function</li>
                      <li>• Enhancing DNA repair</li>
                      <li>• Promoting tissue regeneration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200">
                <CardHeader>
                  <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                  <CardTitle className="text-2xl">Pathway 2: Immune Bolstering</CardTitle>
                  <CardDescription className="text-base">Powerful and under-discussed longevity tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    A bolstered immune system is a powerful tool in the longevity arsenal. Research peptides have been 
                    showing great success in immunity enhancement and immune system optimization.
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-indigo-900">Key Mechanisms:</p>
                    <ul className="text-sm text-indigo-800 space-y-1 mt-2">
                      <li>• Thymus function restoration</li>
                      <li>• T-cell optimization</li>
                      <li>• Inflammatory modulation</li>
                      <li>• Pathogen resistance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-200">
                <CardHeader>
                  <Heart className="h-12 w-12 text-rose-600 mb-4" />
                  <CardTitle className="text-2xl">Pathway 3: Stress Resilience</CardTitle>
                  <CardDescription className="text-base">Stress is the stimulus of decline</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our ability to withstand stress relates directly to how long we live. Addressing damage from stress 
                    at a cellular level raises the bar of possibility for extreme longevity.
                  </p>
                  <div className="bg-rose-50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-rose-900">Key Mechanisms:</p>
                    <ul className="text-sm text-rose-800 space-y-1 mt-2">
                      <li>• Oxidative stress reduction</li>
                      <li>• Cortisol regulation</li>
                      <li>• Cellular stress response</li>
                      <li>• Resilience enhancement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900">The Aggregated Effect</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800">
                <p className="mb-4">
                  We could see years added from the aggregation of improved immunity, improved cellular maintenance, 
                  and maintaining a physiology that is both <strong>resilient to stress AND regenerative</strong> long 
                  beyond our natural timelines.
                </p>
                <p className="italic font-semibold">
                  "Combining a healthy and active lifestyle with tools that support the cell's ability to maintain itself 
                  could optimally result in examples of extreme longevity, possibly 120 years and beyond."
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
            <h2 className="text-4xl font-bold mb-4 text-center">Longevity-Enhancing Peptides</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Cutting-edge compounds targeting cellular senescence, growth hormone optimization, 
              and cellular energy pathways for extreme longevity.
            </p>

            <Tabs defaultValue="foxo4-dri" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="foxo4-dri">FOX04-DRI</TabsTrigger>
                <TabsTrigger value="cjc-ipa">CJC-1295-Ipamorelin</TabsTrigger>
                <TabsTrigger value="nad">NAD+</TabsTrigger>
              </TabsList>

              {/* FOX04-DRI */}
              <TabsContent value="foxo4-dri">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">FOX04-DRI (Proxofim)</CardTitle>
                        <CardDescription className="text-lg">
                          Senolytic Peptide | Cellular Senescence Targeting
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">Frontline Anti-Aging</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        FOX04-DRI (also known as Proxofim) is a synthetic, slightly modified version of the standard FOXO4 
                        protein. The modification specifically extends the half-life, allowing for more prolonged activity 
                        and potentially more results. This puts FOX04-DRI on the frontline of the battle against aging.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">The Senescence Problem</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <p className="text-purple-900">
                          <strong>Cellular Senescence:</strong> The condition or process of deterioration with age. On a 
                          cellular level, it is the loss of a cell's power of division and growth. This is the underlying 
                          mechanism for age and stress-related decline.
                        </p>
                      </div>
                      <p className="text-gray-700">
                        Senescent cells accumulate with age and become toxic, losing their ability to divide and grow into 
                        new healthy cells. FOX04-DRI represents a "chemical version of taking out the trash and making way 
                        for new, healthy, and youthful cells to perform optimally."
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Clears away toxic senescent cells that have lost division capability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Targets the underlying mechanism of age and stress-related decline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Makes way for new, healthy, youthful cells to perform optimally</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Extended half-life for prolonged senolytic activity</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Primary Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Cellular senescence clearance</li>
                            <li>• Age-related decline reversal</li>
                            <li>• Tissue rejuvenation</li>
                            <li>• Cellular cleanup and renewal</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-indigo-700">Secondary Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Heart health improvement</li>
                            <li>• Metabolic biomarker optimization</li>
                            <li>• Stress resilience enhancement</li>
                            <li>• Healthy aging support</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Incredible Potential</h4>
                      <p className="text-purple-800 text-sm">
                        While FOX04-DRI has shown positive impacts on heart health and metabolic biomarkers, this peptide 
                        is showing incredible potential in the realm of senescence—the frontline of the battle against aging.
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

              {/* CJC-1295-Ipamorelin */}
              <TabsContent value="cjc-ipa">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">CJC-1295-Ipamorelin Blend</CardTitle>
                        <CardDescription className="text-lg">
                          Growth Hormone Secretagogue Combination | Synergistic GH Release
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Synergistic Blend</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The CJC-1295 and Ipamorelin blend synergistically stimulates natural growth hormone (GH) release 
                        through distinct yet complementary pathways. This combination enhances natural IGF-1 production, 
                        supporting tissue repair, fat metabolism, and lean muscle preservation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Dual-Pathway Mechanism</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                          <h4 className="font-semibold text-indigo-900 mb-2">CJC-1295</h4>
                          <p className="text-indigo-800 text-sm">
                            Acts on <strong>GHRH receptors</strong> to stimulate growth hormone release. Provides sustained 
                            GH elevation through extended half-life.
                          </p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Ipamorelin</h4>
                          <p className="text-purple-800 text-sm">
                            Targets <strong>ghrelin receptors</strong> for pulsatile GH release. Provides natural, 
                            physiological GH secretion pattern.
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        The combination of these two pathways creates a synergistic effect more powerful than either 
                        compound alone, mimicking natural GH secretion patterns while providing sustained elevation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Growth Hormone & IGF-1 Benefits</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span><strong>Tissue Repair:</strong> Supports cellular regeneration and wound healing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span><strong>Fat Metabolism:</strong> Enhances lipolysis and body composition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span><strong>Lean Muscle Preservation:</strong> Maintains muscle mass during aging</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span><strong>Mitochondrial Function:</strong> Improves cellular energy production</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span><strong>Neuroprotection:</strong> Protective effects against cognitive decline</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Longevity Applications</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-blue-900">
                          <strong>Research Suggests:</strong> GH and IGF-1 play roles in cellular regeneration, mitochondrial 
                          function, and neuroprotection, potentially improving metabolic health, slowing age-related decline, 
                          and offering protective effects against cognitive disorders such as Alzheimer's disease.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-indigo-700">Metabolic Health</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Body composition optimization</li>
                            <li>• Fat metabolism enhancement</li>
                            <li>• Muscle mass preservation</li>
                            <li>• Metabolic rate support</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Regeneration</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Tissue repair acceleration</li>
                            <li>• Cellular regeneration</li>
                            <li>• Mitochondrial function</li>
                            <li>• Recovery enhancement</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Neuroprotection</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Cognitive decline prevention</li>
                            <li>• Alzheimer's protection</li>
                            <li>• Brain health support</li>
                            <li>• Neuronal resilience</li>
                          </ul>
                        </div>
                      </div>
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

              {/* NAD+ */}
              <TabsContent value="nad">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">NAD+ (Nicotinamide Adenine Dinucleotide)</CardTitle>
                        <CardDescription className="text-lg">
                          Essential Coenzyme | Cellular Energy & Longevity Pathways
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">Essential Coenzyme</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        NAD+ (nicotinamide adenine dinucleotide) is an essential coenzyme that fuels cellular energy 
                        production, supports DNA repair, and regulates key longevity pathways. It is fundamental to 
                        life itself, present in every cell of the body.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">The Age-Related Decline Problem</h3>
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-4">
                        <p className="text-rose-900">
                          <strong>Critical Issue:</strong> As we age, NAD+ levels naturally decline, contributing to 
                          mitochondrial dysfunction, metabolic slowdown, and increased cellular damage. This decline is 
                          a key driver of the aging process.
                        </p>
                      </div>
                      <p className="text-gray-700">
                        By age 50, NAD+ levels can be reduced by up to 50% compared to youth. This decline impacts every 
                        system in the body, from energy production to DNA repair to cellular communication.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Core Functions</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Cellular Energy Production:</strong> Fuels mitochondrial ATP synthesis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>DNA Repair:</strong> Supports cellular repair mechanisms and genomic stability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Longevity Pathway Regulation:</strong> Activates sirtuins and other longevity genes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span><strong>Cellular Communication:</strong> Enables critical signaling pathways</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Benefits of NAD+ Restoration</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                          <h4 className="font-semibold text-emerald-900 mb-2">Metabolic Benefits</h4>
                          <ul className="text-sm text-emerald-800 space-y-1">
                            <li>• Enhanced mitochondrial efficiency</li>
                            <li>• Improved metabolic health</li>
                            <li>• Increased cellular energy</li>
                            <li>• Metabolic flexibility restoration</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Neuroprotective Benefits</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Reduced neuroinflammation</li>
                            <li>• Protection against Alzheimer's</li>
                            <li>• Cognitive function support</li>
                            <li>• Neuronal health promotion</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Scientific Research</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-blue-900">
                          <strong>Research Findings:</strong> Scientific research suggests that restoring NAD+ levels may 
                          enhance mitochondrial efficiency, improve metabolic health, and reduce neuroinflammation—offering 
                          protective benefits against age-related conditions such as Alzheimer's disease while promoting 
                          overall cellular health and longevity.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-emerald-700">Energy & Metabolism</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Age-related fatigue</li>
                            <li>• Metabolic decline</li>
                            <li>• Mitochondrial dysfunction</li>
                            <li>• Cellular energy deficit</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Longevity</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Healthy aging support</li>
                            <li>• DNA repair enhancement</li>
                            <li>• Sirtuin activation</li>
                            <li>• Cellular resilience</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Neuroprotection</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Cognitive decline prevention</li>
                            <li>• Neuroinflammation reduction</li>
                            <li>• Alzheimer's protection</li>
                            <li>• Brain health optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-900 mb-2">Foundation of Longevity</h4>
                      <p className="text-emerald-800 text-sm">
                        NAD+ restoration is increasingly recognized as a foundational intervention for healthy aging, 
                        supporting cellular health and longevity across multiple systems and pathways.
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

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Beautiful Future</h2>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              "There could be little more exciting than the possibilities of spending more time doing what we love, 
              with the people that we love. It goes by fast enough, there is no reason not to hope for more years, 
              and for those years to be full of vitality."
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">120+ Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Extreme longevity through cellular regeneration, immune bolstering, and stress resilience
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Quality Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Not just adding years to life, but adding life to years with vitality and function
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Sharp Minds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Lives that include not only physical health in abundance, but sharp functional minds as well
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                Start Your Longevity Journey
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
