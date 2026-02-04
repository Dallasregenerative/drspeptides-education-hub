import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, AlertTriangle, Zap, Activity, Heart, Brain, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function ProtocolMetabolism() {
  return (
    <>
    <Helmet>
        <title>Peptide Education Hub | DrsPeptides</title>
        <meta name="description" content="Comprehensive peptide protocols for metabolic optimization and energy enhancement. MOTS-c, 5-Amino-1MQ, mitochondrial support, dosing strategies, and clinical guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Peptide Education Hub | DrsPeptides" />
        <meta property="og:description" content="Comprehensive peptide protocols for metabolic optimization and energy enhancement. MOTS-c, 5-Amino-1MQ, mitochondrial support, dosing strategies, and clinical guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptide Education Hub | DrsPeptides" />
        <meta name="twitter:description" content="Comprehensive peptide protocols for metabolic optimization and energy enhancement. MOTS-c, 5-Amino-1MQ, mitochondrial support, dosing strategies, and clinical guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Peptide Education Hub",
          "description": "Comprehensive peptide protocols for metabolic optimization and energy enhancement. MOTS-c, 5-Amino-1MQ, mitochondrial support, dosing strategies, and clinical guidelines.",
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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900">Peptide Education Hub</h1>
          
          <div className="mt-4 mb-6">
            <PrintButton title="Protocol Metabolism - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
</div>
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
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Advanced Protocol</Badge>
            <h1 className="text-5xl font-bold mb-6">Metabolism Optimization Protocol</h1>
            <p className="text-xl text-white/90 mb-8">
              Cutting-edge peptide therapies for metabolic restoration, energy optimization, and cellular health. 
              Based on breakthrough research in mitochondrial function and metabolic signaling.
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

      {/* Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Metabolic Optimization</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Metabolism encompasses the entirety of biochemical processes impacting energy production, weight management, 
                and hormone functions. The modern world inadvertently attacks biology from every direction through sedentary 
                lifestyles, processed foods, and environmental stressors. Obesity, heart disease, and diabetes are all metabolic 
                processes that have reached epidemic proportions.
              </p>
              
              <p>
                Between ages 30-40, significant metabolic decline begins. Hormone production slows down, and the body begins 
                to reprioritize its energy allocations. Maintaining a fertile body with vigorous energy is not an efficient 
                use of fuel for organisms attempting to maintain homeostasis. Research peptides provide the stimulus necessary 
                to keep cells producing energy, dividing, and replicating efficiently long past the point of natural decline.
              </p>
            </div>

            <Card className="mb-8 border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <CardTitle className="text-amber-900">Healthcare Provider Oversight Required</CardTitle>
                    <CardDescription className="text-amber-700">
                      All metabolic peptide protocols must be implemented under the guidance of a board-certified physician. 
                      These compounds require proper medical evaluation, monitoring, and pharmaceutical-grade sourcing.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-teal-600 mb-2" />
                  <CardTitle>Energy Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Optimize mitochondrial function and cellular ATP production for sustained energy and work capacity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Weight Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Address obesity through metabolic signaling pathways that influence fat cell size and quantity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-rose-600 mb-2" />
                  <CardTitle>Cellular Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Support healthy anabolic/catabolic balance and efficient disposal of degraded cellular matter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Peptides Section */}
      <section id="peptides" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Metabolic Optimization Peptides</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Five cutting-edge compounds showing breakthrough promise in metabolism research, 
              mitochondrial function, and cellular energy optimization.
            </p>

            <Tabs defaultValue="5-amino-1mq" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="5-amino-1mq">5-Amino-1MQ</TabsTrigger>
                <TabsTrigger value="mots-c">MOTS-c</TabsTrigger>
                <TabsTrigger value="humanin">Humanin</TabsTrigger>
                <TabsTrigger value="slu-pp-332">SLU-PP-332</TabsTrigger>
                <TabsTrigger value="ss-31">SS-31</TabsTrigger>
              </TabsList>

              {/* 5-Amino-1MQ */}
              <TabsContent value="5-amino-1mq">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">5-Amino-1MQ</CardTitle>
                        <CardDescription className="text-lg">
                          Weight Loss Breakthrough | Metabolic Activator
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Research Stage</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        5-Amino-1MQ is a new compound making significant impact in metabolic research. Studies demonstrate 
                        remarkable potential for weight loss without requiring major dietary modifications. This represents 
                        a potential breakthrough in addressing the obesity epidemic affecting over 40% of Americans.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Inhibits NNMT (nicotinamide N-methyltransferase) enzyme activity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Increases NAD+ availability for cellular energy metabolism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Reduces fatty tissue cell size and quantity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>Activates metabolic pathways for fat oxidation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Research Findings</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <p className="text-blue-900">
                          <strong>Preclinical Studies:</strong> Mice studies showed statistically significant drops in fatty 
                          tissue cells both in size and quantity, with weight loss occurring without major dietary changes.
                        </p>
                      </div>
                      <p className="text-gray-700">
                        Research suggests 5-Amino-1MQ could be "the most impactful shift in general health and wellness in history" 
                        by providing an effective solution for clinical obesity. Obesity-related conditions are the leading causes 
                        of preventable, premature deaths according to the CDC, with medical costs approximately $1,500 more per 
                        year than for those within healthy weight ranges.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-teal-700">Primary Indications</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Obesity management</li>
                            <li>• Metabolic syndrome</li>
                            <li>• Weight loss resistance</li>
                            <li>• Fat loss optimization</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Secondary Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Reduced cardiovascular risk</li>
                            <li>• Improved insulin sensitivity</li>
                            <li>• Enhanced cellular energy</li>
                            <li>• Metabolic flexibility</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Research Status & Safety
                      </h4>
                      <p className="text-amber-800 text-sm">
                        5-Amino-1MQ is currently in research stages. Not FDA-approved for human use. All protocols must be 
                        implemented under physician supervision with pharmaceutical-grade compounds from licensed compounding pharmacies.
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

              {/* MOTS-c */}
              <TabsContent value="mots-c">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">MOTS-c</CardTitle>
                        <CardDescription className="text-lg">
                          Mitochondrial-Derived Peptide | Exercise Mimicker
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">Mitochondrial</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        MOTS-c is a mitochondrial-derived peptide showing remarkable promise in glucose metabolism, insulin 
                        sensitivity, and energy expenditure. Often referred to as an "exercise mimicker," research demonstrates 
                        it can double the running capacity of mice while improving metabolic health markers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Regulates nuclear gene expression from mitochondria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Improves glucose metabolism and insulin sensitivity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Activates AMPK pathway for metabolic regulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Enhances mitochondrial biogenesis and function</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Increases cellular energy production and work capacity</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Research Findings</h3>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <p className="text-purple-900">
                          <strong>Exercise Mimicking Effect:</strong> Studies show MOTS-c can double the running capacity of mice, 
                          demonstrating significant improvements in energy expenditure and work capacity through different pathways 
                          than traditional exercise.
                        </p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Research indicates MOTS-c is particularly helpful for obesity and diabetes, as both conditions are heavily 
                        influenced by glucose utilization. Even in healthy organisms, this peptide has potential to improve energy 
                        levels and metabolic efficiency.
                      </p>
                      <p className="text-gray-700 italic">
                        "The world is a demanding and exhausting place. More energy and a more efficient metabolism is paramount 
                        in navigating the expectations of the modern world."
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Metabolic Health</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Glucose metabolism optimization</li>
                            <li>• Insulin sensitivity improvement</li>
                            <li>• Obesity management</li>
                            <li>• Diabetes support</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Performance & Energy</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Enhanced work capacity</li>
                            <li>• Improved energy levels</li>
                            <li>• Exercise performance</li>
                            <li>• Heart health support</li>
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

              {/* Humanin */}
              <TabsContent value="humanin">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">Humanin</CardTitle>
                        <CardDescription className="text-lg">
                          Naturally Occurring Mitochondrial Peptide | Age-Related Decline
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Endogenous</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Humanin is a naturally occurring mitochondrial-derived peptide that significantly declines with age. 
                        This decrease cascades into systemic metabolic slowdown, making it increasingly difficult to reinvigorate 
                        these systems. Research suggests Humanin supplementation may allow for exercise mimicking effects through 
                        different pathways than MOTS-c.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Protects against cellular apoptosis (programmed cell death)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Improves insulin sensitivity and glucose metabolism</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Positively impacts signaling of other metabolic peptides</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>Supports mitochondrial function and cellular energy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>May provide neuroprotective and cardioprotective effects</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Combinatorial Therapy Potential</h3>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4">
                        <p className="text-indigo-900">
                          <strong>Synergistic Effects:</strong> Research shows Humanin positively impacts the signaling of other 
                          peptides with metabolic benefits. This suggests combinatorial therapies may be more powerful than 
                          individual peptides alone, opening new avenues for optimized treatment protocols.
                        </p>
                      </div>
                      <p className="text-gray-700">
                        The ability of Humanin to enhance other peptide signaling pathways makes it a promising candidate for 
                        peptide stacking protocols. Further research is exploring optimal combinations for maximum metabolic benefit.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-indigo-700">Age-Related Decline</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Metabolic slowdown reversal</li>
                            <li>• Cellular energy restoration</li>
                            <li>• Mitochondrial function support</li>
                            <li>• Age-related insulin resistance</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-purple-700">Protective Effects</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Neuroprotection</li>
                            <li>• Cardioprotection</li>
                            <li>• Anti-apoptotic signaling</li>
                            <li>• Metabolic disease prevention</li>
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

              {/* SLU-PP-332 */}
              <TabsContent value="slu-pp-332">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">SLU-PP-332</CardTitle>
                        <CardDescription className="text-lg">
                          ERRα Activator | Mitochondrial Biogenesis Master Regulator
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-rose-100 text-rose-800">Small Molecule</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        SLU-PP-332 is a small-molecule compound that activates ERRα (Estrogen-Related Receptor Alpha), a master 
                        regulator of mitochondrial biogenesis and energy metabolism. By enhancing mitochondrial function and 
                        cellular energy output, SLU-PP-332 may improve metabolic health, reduce age-related decline, and support 
                        tissue regeneration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 mt-1">•</span>
                          <span>Activates ERRα (Estrogen-Related Receptor Alpha)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 mt-1">•</span>
                          <span>Master regulator of mitochondrial biogenesis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 mt-1">•</span>
                          <span>Enhances cellular energy metabolism and ATP production</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 mt-1">•</span>
                          <span>Improves neuronal energy efficiency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 mt-1">•</span>
                          <span>Reduces oxidative stress in neurons and other tissues</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Dual-Action Benefits</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                          <h4 className="font-semibold text-rose-900 mb-2 flex items-center gap-2">
                            <Heart className="h-5 w-5" />
                            Metabolic Health
                          </h4>
                          <p className="text-rose-800 text-sm">
                            Improves metabolic health, reduces age-related decline, and supports tissue regeneration through 
                            enhanced mitochondrial function.
                          </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <Brain className="h-5 w-5" />
                            Neuroprotection
                          </h4>
                          <p className="text-blue-800 text-sm">
                            Protects against neurodegenerative diseases like Alzheimer's by improving neuronal energy efficiency 
                            and reducing oxidative stress.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-rose-700">Metabolic Applications</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Metabolic health optimization</li>
                            <li>• Age-related decline reversal</li>
                            <li>• Tissue regeneration support</li>
                            <li>• Cellular energy enhancement</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Cognitive Health</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Alzheimer's disease research</li>
                            <li>• Cognitive function improvement</li>
                            <li>• Neuronal energy optimization</li>
                            <li>• Oxidative stress reduction</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Longevity & Cognitive Health Promise</h4>
                      <p className="text-blue-800 text-sm">
                        SLU-PP-332 is a promising candidate for promoting longevity and cognitive health through mitochondrial 
                        optimization. Research suggests potential for both metabolic restoration and neuroprotection.
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

              {/* SS-31 */}
              <TabsContent value="ss-31">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">SS-31 (Elamipretide)</CardTitle>
                        <CardDescription className="text-lg">
                          Mitochondrial Membrane Stabilizer | Cardiolipin Binder
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">Clinical Stage</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Overview</h3>
                      <p className="text-gray-700 leading-relaxed">
                        SS-31 (also known as Elamipretide) is a mitochondria-targeting peptide that binds to cardiolipin, a key 
                        lipid in the inner mitochondrial membrane. By stabilizing mitochondrial structure and enhancing ATP 
                        production, SS-31 supports cellular energy, metabolic health, and resilience against age-related decline.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mechanism of Action</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Binds to cardiolipin in inner mitochondrial membrane</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Stabilizes mitochondrial structure and cristae organization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Enhances ATP production and cellular energy output</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Reduces oxidative stress and reactive oxygen species (ROS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>Improves mitochondrial efficiency across all tissues</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Research Findings</h3>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                        <p className="text-emerald-900">
                          <strong>Clinical Development:</strong> SS-31 has advanced to clinical trials for various mitochondrial 
                          diseases and age-related conditions. Research indicates it may protect neurons, improve cognitive function, 
                          and slow progression of neurodegenerative diseases like Alzheimer's.
                        </p>
                      </div>
                      <p className="text-gray-700">
                        By reducing oxidative stress and improving mitochondrial efficiency, SS-31 supports cellular energy, 
                        metabolic health, and resilience against age-related decline. The peptide shows particular promise in 
                        conditions where mitochondrial dysfunction is a primary driver of pathology.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-emerald-700">Metabolic Health</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Metabolic restoration</li>
                            <li>• Cellular energy support</li>
                            <li>• Age-related decline</li>
                            <li>• Mitochondrial diseases</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-700">Brain Health</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Neuroprotection</li>
                            <li>• Cognitive function</li>
                            <li>• Alzheimer's research</li>
                            <li>• Neuronal energy</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-rose-700">Longevity</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Healthy aging</li>
                            <li>• Oxidative stress reduction</li>
                            <li>• Tissue resilience</li>
                            <li>• Cellular optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Therapeutic Promise</h4>
                      <p className="text-blue-800 text-sm">
                        SS-31 is a promising therapeutic candidate for longevity, metabolic restoration, and brain health. 
                        Its unique mechanism of directly stabilizing mitochondrial membranes sets it apart from other metabolic peptides.
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

      {/* Protocol Implementation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Protocol Implementation Framework</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Comprehensive metabolic assessment</li>
                    <li>• Baseline energy and vitality markers</li>
                    <li>• Body composition analysis</li>
                    <li>• Hormone panel evaluation</li>
                    <li>• Cardiovascular risk factors</li>
                    <li>• Current medications and supplements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Diagnostic Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Fasting glucose and insulin</li>
                    <li>• HbA1c for glucose control</li>
                    <li>• Lipid panel and inflammatory markers</li>
                    <li>• Thyroid function (TSH, T3, T4)</li>
                    <li>• Comprehensive metabolic panel</li>
                    <li>• Body composition scan (DEXA)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integrative Modalities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Nutritional optimization (low glycemic, anti-inflammatory)</li>
                    <li>• Exercise prescription (resistance + cardiovascular)</li>
                    <li>• Sleep optimization protocols</li>
                    <li>• Stress management techniques</li>
                    <li>• Supplemental support (NAD+, CoQ10, etc.)</li>
                    <li>• Continuous glucose monitoring (if indicated)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Monthly progress assessments</li>
                    <li>• Quarterly lab work and body composition</li>
                    <li>• Energy and vitality tracking</li>
                    <li>• Weight and metabolic markers</li>
                    <li>• Dose titration based on response</li>
                    <li>• Adverse event monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-teal-200 bg-teal-50">
              <CardHeader>
                <CardTitle className="text-teal-900">Combinatorial Therapy Considerations</CardTitle>
              </CardHeader>
              <CardContent className="text-teal-800">
                <p className="mb-4">
                  Research suggests that combining metabolic peptides may produce synergistic effects more powerful than 
                  individual compounds alone. Humanin, in particular, has been shown to positively impact signaling of other 
                  metabolic peptides.
                </p>
                <p className="font-semibold">
                  Common combinations under clinical investigation:
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• MOTS-c + Humanin for comprehensive metabolic support</li>
                  <li>• 5-Amino-1MQ + MOTS-c for weight loss and energy</li>
                  <li>• SS-31 + SLU-PP-332 for mitochondrial optimization</li>
                  <li>• Humanin + SS-31 for neuroprotection and metabolism</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Quality Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Safety & Quality Standards</h2>
            
            <div className="space-y-6">
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    Pharmaceutical-Grade Sources Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-800 space-y-3">
                  <p>
                    All metabolic peptides must be sourced from licensed compounding pharmacies that meet GMP (Good Manufacturing 
                    Practice) standards. This ensures purity, sterility, and proper handling.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-amber-300">
                    <p className="font-semibold mb-2">Quality Requirements:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Certificate of Analysis (COA) with &gt;98% purity</li>
                      <li>• Endotoxin testing for LPS contamination</li>
                      <li>• Sterility certification</li>
                      <li>• Proper refrigeration and storage</li>
                      <li>• Licensed compounding pharmacy source</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contraindications & Precautions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-700">Absolute Contraindications</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Active cancer or recent cancer history</li>
                        <li>• Pregnancy or breastfeeding</li>
                        <li>• Uncontrolled diabetes</li>
                        <li>• Severe cardiovascular disease</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-700">Relative Contraindications</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Family history of cancer</li>
                        <li>• Autoimmune conditions (case-by-case)</li>
                        <li>• Hormone-sensitive conditions</li>
                        <li>• Metabolic disorders requiring monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Pre-Treatment Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Medical Evaluation:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Board-certified physician consultation</li>
                      <li>• Comprehensive health history</li>
                      <li>• Physical examination</li>
                      <li>• Baseline laboratory testing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Cancer Screening:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Age-appropriate cancer screening current</li>
                      <li>• No active tumors or suspicious lesions</li>
                      <li>• Clear imaging if clinically indicated</li>
                      <li>• Ongoing monitoring during treatment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Metabolism?</h2>
            <p className="text-xl text-white/90 mb-8">
              Work with healthcare providers who understand cutting-edge peptide protocols and can implement 
              evidence-based metabolic optimization strategies.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://www.drspeptides.com" target="_blank" rel="noopener noreferrer">
                  Find a Provider
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/research">
                  View Research Studies
                </a>
              </Button>
            </div>
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
