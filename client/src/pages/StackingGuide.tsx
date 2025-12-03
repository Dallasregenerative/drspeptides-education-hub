import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle, Layers, Activity, Zap, Heart, Brain, Moon, Shield, TrendingUp, Syringe, Clock, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function StackingGuide() {
  usePageTitle("Stacking Guide - Peptide Combinations");
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Peptide Education Hub
              </a>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/"><a className="text-gray-600 hover:text-teal-600 transition-colors">Home</a></Link>
              <Link href="/protocols/metabolism"><a className="text-gray-600 hover:text-teal-600 transition-colors">Protocols</a></Link>
              <Link href="/safety-standards"><a className="text-gray-600 hover:text-teal-600 transition-colors">Safety</a></Link>
            </nav>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              Visit DrsPeptides.com →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Advanced Peptide Protocols</Badge>
              <h1 className="text-5xl font-bold mb-6">Peptide Stacking Guide</h1>
              <p className="text-xl text-white/90 mb-8">
                Strategic combinations of peptides for multi-targeted approaches to recovery, muscle gain, fat loss, anti-aging, cognitive enhancement, and more. Based on Ben Greenfield's proven protocols and clinical research.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <Layers className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white mb-2">8 Proven Stacks</div>
                    <div className="text-white/80 text-sm">From recovery to longevity</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <Activity className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white mb-2">Synergistic Effects</div>
                    <div className="text-white/80 text-sm">Compounds benefits, shorter results</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <Syringe className="h-8 w-8 text-white mb-2" />
                    <div className="text-2xl font-bold text-white mb-2">Detailed Protocols</div>
                    <div className="text-white/80 text-sm">Dosing, timing, cycling strategies</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Stack Peptides?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-teal-600" />
                      Single Peptide Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-gray-700 text-sm">
                    <p>• Targets single pathway or mechanism</p>
                    <p>• Great precision for specific goals</p>
                    <p>• Examples: BPC-157 (inflammation), LL-37 (immune), Semax (cognitive)</p>
                    <p>• Simpler protocol, easier to manage</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-purple-600" />
                      Stacking Approach ✨
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-gray-700 text-sm">
                    <p>• <strong>Multi-targeted approach</strong> for broader health goals</p>
                    <p>• <strong>Benefits compound</strong> and become more powerful</p>
                    <p>• <strong>Significant improvement in shorter time</strong></p>
                    <p>• Synergistic effects greater than sum of parts</p>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <AlertDescription>
                  <p className="text-blue-900 font-semibold mb-2">Ben Greenfield's Philosophy</p>
                  <p className="text-blue-800 text-sm">
                    "When you 'stack' multiple peptides and use them together in a multi-targeted approach for a broader health goal, their benefits can compound and become even more powerful—often helping you experience significant improvement in a much shorter period of time."
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Stacks Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="wolverine" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
                <TabsTrigger value="wolverine">Recovery</TabsTrigger>
                <TabsTrigger value="lean">Muscle/Fat</TabsTrigger>
                <TabsTrigger value="fatloss">Fat Loss</TabsTrigger>
                <TabsTrigger value="antiaging">Anti-Aging</TabsTrigger>
                <TabsTrigger value="immune">Immune</TabsTrigger>
                <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
                <TabsTrigger value="sleep">Sleep</TabsTrigger>
                <TabsTrigger value="mito">Mitochondrial</TabsTrigger>
              </TabsList>

              {/* Recover Like Wolverine Stack */}
              <TabsContent value="wolverine" className="space-y-8">
                <Card className="border-2 border-teal-200">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Activity className="h-7 w-7 text-teal-600" />
                      "Recover Like Wolverine" Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-green-900 font-semibold mb-2">Ben's Personal Testimonial</p>
                        <p className="text-green-800 text-sm">
                          "One of my first serious forays into peptides was to heal an annoying, persistent, and quite painful torn upper hamstring by using what I call the 'Recover Like Wolverine' stack. <strong>And it worked—with pretty surprising speed, no less.</strong>"
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="font-semibold text-teal-900 mb-2">Joint Pain</p>
                          <p className="text-teal-800 text-sm">Chronic pain that won't go away</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-semibold text-blue-900 mb-2">Muscle Tears</p>
                          <p className="text-blue-800 text-sm">Tears, sprains, strains</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="font-semibold text-indigo-900 mb-2">Athletic Recovery</p>
                          <p className="text-indigo-800 text-sm">Enhanced post-workout healing</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">5 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        {/* BPC-157 */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">BPC-157 (Body Protecting Compound)</h5>
                              <p className="text-gray-600 text-sm">Regenerative effects, angiogenesis, anti-inflammatory</p>
                            </div>
                            <Badge className="bg-red-100 text-red-800 border-red-200">WADA Banned</Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing Options:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Injection:</strong> 250–350mcg 2x/day</li>
                                <li>• <strong>Injection:</strong> 500–700mcg 1x/day</li>
                                <li>• <strong>Oral:</strong> 500mcg capsules for 30-day cycle</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous (systemic healing)</li>
                                <li>• Intramuscular (targeted healing)</li>
                                <li>• Oral (gut healing/convenience)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Heals muscles, tendons, ligaments, bones, skin; increases blood flow; powerful anti-inflammatory</p>
                        </div>

                        {/* TB-500 */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">TB-500 (Thymosin Beta-4)</h5>
                              <p className="text-gray-600 text-sm">Best peptide for muscle repair, actin regulation</p>
                            </div>
                            <Badge className="bg-red-100 text-red-800 border-red-200">WADA Banned</Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>2.5–5mg, 2–3x/week</strong></li>
                                <li>• 25mL of 3000mcg/mL solution daily for 20-day cycle</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous injection</li>
                                <li>• Intramuscular injection</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Repairs heart, skin, tissue, ligaments, organs; provides pain relief; acts on actin/myosin fibers</p>
                        </div>

                        {/* Ipamorelin */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Ipamorelin</h5>
                              <p className="text-gray-600 text-sm">Growth hormone secretagogue, accelerates healing</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>100–500mcg 1–3x/day</strong></li>
                                <li>• 10mL of 2000mcg/mL solution 1x/day, 5 days/week</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Timing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Same time daily</li>
                                <li>• Avoid food 1 hour before/after</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Enhances recovery through GH activation; relatively free of side effects; won't interfere with natural GH production</p>
                        </div>

                        {/* Tesamorelin */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Tesamorelin</h5>
                              <p className="text-gray-600 text-sm">Growth hormone stimulating hormone, ipamorelin's cousin</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>1mg 1–2x/day, 5 days/week, 6–8 week cycle</strong></li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Timing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Before bed:</strong> 90 min after eating</li>
                                <li>• <strong>Upon waking:</strong> Before exercise/eating</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Promotes recovery through GH pathways; similar potency as endogenous HGH without unwanted side effects</p>
                        </div>

                        {/* GHK-Cu */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">GHK-Cu (Copper Peptide)</h5>
                              <p className="text-gray-600 text-sm">Tissue remodeling, anti-inflammatory, wound healing</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>5mg 1x/day for 5–10 day cycle</strong></li>
                                <li>• 2mL of 10mg/mL solution 2x/day</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous (recovery)</li>
                                <li>• Topical (skin/hair)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Controls oxidative damage post-injury; signals tissue remodeling; generates new, healthy tissue</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>BPC-157 + TB-500:</strong> Synergistic tissue repair and inflammation reduction</li>
                          <li>• <strong>Ipamorelin + Tesamorelin:</strong> Dual GH pathway activation for accelerated healing</li>
                          <li>• <strong>GHK-Cu:</strong> Tissue remodeling and healthy regeneration (not just scar tissue)</li>
                          <li>• <strong>Multi-mechanism approach:</strong> Angiogenesis + inflammation control + GH optimization + tissue remodeling</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Lean and Mean Stack */}
              <TabsContent value="lean" className="space-y-8">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <TrendingUp className="h-7 w-7 text-blue-600" />
                      "Lean and Mean" Stack (Muscle Gain & Fat Loss)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertDescription>
                        <p className="text-blue-900 font-semibold mb-2">Ben's Philosophy</p>
                        <p className="text-blue-800 text-sm">
                          "Muscle mass is not only helpful for staying strong and looking good naked ;), it's also essential to maintaining a long and healthy life. If you're interested in getting bigger, stronger, sexier, and faster with age—in addition to lifting heavy things, eating adequate protein, and avoiding inflammatory foods—peptides can be another tool in your toolkit to help you <strong>simultaneously build muscle and burn fat</strong>."
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-semibold text-blue-900 mb-2">Build Muscle</p>
                          <p className="text-blue-800 text-sm">Hyperplasia (new muscle fibers) + hypertrophy</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="font-semibold text-indigo-900 mb-2">Burn Fat</p>
                          <p className="text-indigo-800 text-sm">Simultaneous fat loss while gaining muscle</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="font-semibold text-purple-900 mb-2">Morning Workouts</p>
                          <p className="text-purple-800 text-sm">Ideal for fasted training sessions</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">4 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        {/* IGF-1 LR3 */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">IGF-1 LR3</h5>
                              <p className="text-gray-600 text-sm">Long-acting IGF-1, potent anabolic peptide</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>50–150mcg 1x/day for 4-week cycle</strong></li>
                                <li>• 4mL of 620mcg/mL solution 1x/day</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Mechanism:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Hyperplasia:</strong> Increases muscle fiber number</li>
                                <li>• vs hypertrophy (fiber size)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Increases muscle mass through new muscle fiber creation; potent anabolic effects</p>
                        </div>

                        {/* Ipamorelin */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Ipamorelin</h5>
                              <p className="text-gray-600 text-sm">GH secretagogue for muscle building</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>100–500mcg 1–3x/day for 12-week cycle</strong></li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Timing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Same time daily</li>
                                <li>• Avoid food 1 hour before/after</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Increases GH secretion for muscle building; major effects on skeletal muscle and function</p>
                        </div>

                        {/* CJC-1295 */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">CJC-1295 (without DAC)</h5>
                              <p className="text-gray-600 text-sm">GH releasing hormone, synergistic with ipamorelin</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Typically combined with ipamorelin</strong></li>
                                <li>• 200–300mcg per dose</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Synergy:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Works through different GH pathway</li>
                                <li>• Amplifies ipamorelin effects</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Stimulates GH release; synergistic with ipamorelin for enhanced muscle building</p>
                        </div>

                        {/* Tesamorelin */}
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Tesamorelin</h5>
                              <p className="text-gray-600 text-sm">GH stimulating hormone for muscle gain</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>1mg 1–2x/day, 5 days/week, 6–8 week cycle</strong></li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Timing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Before bed: 90 min after eating</li>
                                <li>• Upon waking: Before exercise</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Binds to GH receptors with similar potency as endogenous HGH; promotes muscle growth and fat loss</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>IGF-1 LR3:</strong> Creates new muscle fibers (hyperplasia) - unique mechanism</li>
                          <li>• <strong>Ipamorelin + CJC-1295:</strong> Synergistic GH release through two different pathways</li>
                          <li>• <strong>Tesamorelin:</strong> Additional GH stimulation for enhanced muscle building</li>
                          <li>• <strong>Triple GH pathway activation:</strong> Maximizes anabolic environment for muscle gain and fat loss</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Additional stacks would continue here... */}
              {/* For brevity, I'll add placeholders for the remaining stacks */}

              <TabsContent value="fatloss" className="space-y-8">
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <TrendingUp className="h-7 w-7 text-green-600" />
                      Fat Loss Stack (GLP-1 + GH Optimization)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-green-200 bg-green-50">
                      <AlertDescription>
                        <p className="text-green-900 font-semibold mb-2">Clinical Evidence</p>
                        <p className="text-green-800 text-sm">
                          NEJM Study (4,430 citations): Semaglutide 2.4mg weekly produced <strong>14.9-17.4% mean weight loss</strong> in overweight/obesity patients. JAMA Study (230 citations): Clinically effective at 3 and 6 months, reduces visceral fat while <strong>preserving lean muscle mass</strong>. Combined with GH secretagogues for enhanced fat loss + muscle preservation.
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="font-semibold text-green-900 mb-2">Appetite Suppression</p>
                          <p className="text-green-800 text-sm">GLP-1 mechanism reduces hunger & cravings</p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <p className="font-semibold text-emerald-900 mb-2">Visceral Fat Loss</p>
                          <p className="text-emerald-800 text-sm">Targets dangerous abdominal fat</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="font-semibold text-teal-900 mb-2">Muscle Preservation</p>
                          <p className="text-teal-800 text-sm">GH support prevents muscle loss</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">3 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Semaglutide (Wegovy)</h5>
                              <p className="text-gray-600 text-sm">GLP-1 receptor agonist, FDA-approved for weight management</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800 border-green-200">FDA Approved</Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing (Titration Schedule):</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Week 1-4:</strong> 0.25mg weekly</li>
                                <li>• <strong>Week 5-8:</strong> 0.5mg weekly</li>
                                <li>• <strong>Week 9-12:</strong> 1mg weekly</li>
                                <li>• <strong>Week 13-16:</strong> 1.7mg weekly</li>
                                <li>• <strong>Week 17+:</strong> 2.4mg weekly (maintenance)</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous injection</li>
                                <li>• Once weekly, same day each week</li>
                                <li>• Abdomen, thigh, or upper arm</li>
                                <li>• Can be taken with or without food</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Appetite suppression, reduced hunger & cravings, decreased energy intake, visceral fat loss, cardiovascular risk reduction, blood sugar control</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">CJC-1295 (without DAC)</h5>
                              <p className="text-gray-600 text-sm">GH releasing hormone for muscle preservation during fat loss</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>200–300mcg per dose</strong></li>
                                <li>• Combined with ipamorelin</li>
                                <li>• 2-3x per week</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Timing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Before bed (optimal GH release)</li>
                                <li>• Upon waking (fasted state)</li>
                                <li>• Avoid food 1 hour before/after</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Preserves lean muscle mass during caloric deficit; enhances fat metabolism; improves body composition; supports metabolic rate</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Ipamorelin</h5>
                              <p className="text-gray-600 text-sm">GH secretagogue, synergistic with CJC-1295</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>200–300mcg per dose</strong></li>
                                <li>• Combined with CJC-1295</li>
                                <li>• 2-3x per week</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Synergy:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Works through different GH pathway than CJC</li>
                                <li>• Amplifies GH pulse</li>
                                <li>• Minimal side effects</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Enhances fat oxidation; preserves muscle during weight loss; improves sleep quality; supports recovery; no appetite stimulation (unlike GHRP-6)</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>Semaglutide:</strong> Primary fat loss driver through appetite suppression & metabolic optimization</li>
                          <li>• <strong>CJC-1295 + Ipamorelin:</strong> Dual GH pathway activation prevents muscle loss during caloric deficit</li>
                          <li>• <strong>Synergistic mechanism:</strong> GLP-1 reduces intake, GH preserves muscle = optimal body recomposition</li>
                          <li>• <strong>Clinical evidence:</strong> Semaglutide alone reduces visceral fat while preserving lean mass; GH support enhances this effect</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-yellow-900 font-semibold mb-2">Important Considerations</p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• <strong>Semaglutide side effects:</strong> Nausea, vomiting, diarrhea (usually mild, resolve with titration)</li>
                          <li>• <strong>Slow titration essential:</strong> Follow 17-week ramp-up schedule to minimize GI side effects</li>
                          <li>• <strong>Protein intake critical:</strong> Maintain 1g/lb bodyweight to preserve muscle mass</li>
                          <li>• <strong>Resistance training required:</strong> Essential for muscle preservation during weight loss</li>
                          <li>• <strong>Medical supervision:</strong> Semaglutide requires prescription; monitor for gallbladder issues, pancreatitis</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="antiaging" className="space-y-8">
                <Card className="border-2 border-indigo-200">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Heart className="h-7 w-7 text-indigo-600" />
                      Anti-Aging Stack (Cellular Regeneration & Longevity)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-indigo-200 bg-indigo-50">
                      <AlertDescription>
                        <p className="text-indigo-900 font-semibold mb-2">The Multi-Front War on Aging</p>
                        <p className="text-indigo-800 text-sm">
                          <strong>Epithalon:</strong> 42% lifespan increase in mice, telomerase activation, circadian rhythm restoration. <strong>FOXO4-DRI:</strong> Senolytic "cellular cleanup" removes toxic senescent cells. <strong>Humanin:</strong> Naturally occurring peptide that drops with age, exercise mimicking effect. Combined approach targets aging through <strong>three pathways:</strong> cellular regeneration, immune bolstering, and stress resilience at the cellular level.
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="font-semibold text-indigo-900 mb-2">Cellular Regeneration</p>
                          <p className="text-indigo-800 text-sm">Telomere lengthening & senescent cell clearance</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="font-semibold text-purple-900 mb-2">Metabolic Restoration</p>
                          <p className="text-purple-800 text-sm">Reverse age-related metabolic slowdown</p>
                        </div>
                        <div className="bg-violet-50 p-4 rounded-lg">
                          <p className="font-semibold text-violet-900 mb-2">Longevity Extension</p>
                          <p className="text-violet-800 text-sm">120+ year vision through cellular optimization</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">3 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Epithalon (Epitalon)</h5>
                              <p className="text-gray-600 text-sm">Telomerase activator, pineal gland support, circadian rhythm restoration</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>5-10mg per dose</strong></li>
                                <li>• Once daily for 10-20 days</li>
                                <li>• Typical cycle: 20 days on, 4-6 months off</li>
                                <li>• 2-3 cycles per year</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous or intramuscular injection</li>
                                <li>• Before bed (supports melatonin production)</li>
                                <li>• Can be taken with or without food</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Increases telomere length in human cell lines; 42% lifespan increase in mice; restores circadian rhythms; normalizes melatonin production in elderly; supports pineal gland function; anti-cancer effects; improves sleep quality</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">FOXO4-DRI (Proxofim)</h5>
                              <p className="text-gray-600 text-sm">Senolytic peptide - "taking out the cellular trash"</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Research dosing: 5-10mg per dose</strong></li>
                                <li>• 2-3 times per week</li>
                                <li>• Cycle: 4-8 weeks on, 8-12 weeks off</li>
                                <li>• Emerging research, dosing protocols evolving</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Mechanism:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Selectively removes senescent cells</li>
                                <li>• Modified FOXO4 protein with extended half-life</li>
                                <li>• Targets p53-FOXO4 interaction</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Clears toxic senescent cells that have lost ability to divide; improves metabolic biomarkers; supports tissue regeneration; alleviates age-related testosterone decline; improves testicular function in aged mice; cartilage formation support</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Humanin</h5>
                              <p className="text-gray-600 text-sm">Naturally occurring mitochondrial peptide, drops with age</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>1-5mg per dose</strong></li>
                                <li>• 3-5 times per week</li>
                                <li>• Cycle: 8-12 weeks on, 4-8 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Unique Properties:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Positively impacts OTHER peptide signaling</li>
                                <li>• Combinatorial therapy potential</li>
                                <li>• Exercise mimicking effect</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Reverses age-related metabolic slowdown; anti-apoptotic (prevents cell death); improves insulin sensitivity; neuroprotective effects; enhances effects of other metabolic peptides; supports mitochondrial function; cardiovascular protection</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>Epithalon:</strong> Lengthens telomeres (cellular aging clock), restores circadian rhythms for optimal hormone production</li>
                          <li>• <strong>FOXO4-DRI:</strong> Removes senescent "zombie cells" that secrete inflammatory factors and accelerate aging</li>
                          <li>• <strong>Humanin:</strong> Restores mitochondrial function and enhances signaling of other peptides (synergistic amplification)</li>
                          <li>• <strong>Three-pathway approach:</strong> Cellular regeneration + immune bolstering + stress resilience = comprehensive anti-aging</li>
                          <li>• <strong>Vision:</strong> 60-70 year olds with bodies from their 30s; mountain climbing in 80s and 90s; 120+ year lifespans</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-yellow-900 font-semibold mb-2">Important Considerations</p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• <strong>FOXO4-DRI emerging research:</strong> Senolytic peptides are cutting-edge; dosing protocols still being established</li>
                          <li>• <strong>Cycling essential:</strong> All three peptides require proper cycling to maintain effectiveness and safety</li>
                          <li>• <strong>Lifestyle integration:</strong> Stack works best with healthy diet, exercise, stress management, and sleep optimization</li>
                          <li>• <strong>Medical supervision recommended:</strong> Especially for FOXO4-DRI due to emerging nature of senolytic research</li>
                          <li>• <strong>Long-term commitment:</strong> Anti-aging benefits accumulate over months to years, not days to weeks</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="immune" className="space-y-8">
                <Card className="border-2 border-blue-200">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Shield className="h-7 w-7 text-blue-600" />
                      Immune Support Stack (Antimicrobial & Immune Modulation)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertDescription>
                        <p className="text-blue-900 font-semibold mb-2">Clinical Evidence for Immune Enhancement</p>
                        <p className="text-blue-800 text-sm">
                          <strong>LL-37:</strong> Master antimicrobial peptide (254 citations), broad spectrum antibacterial, links host defense with inflammation and angiogenesis. <strong>Thymosin Alpha-1:</strong> Naturally occurring thymus peptide (67+ citations), proven efficacy in severe sepsis, hepatitis B, melanoma, COVID-19 trials. <strong>KPV:</strong> Anti-inflammatory tripeptide (184 citations), mucosal healing, ulcerative colitis treatment. Combined approach provides <strong>antimicrobial + immune modulation + inflammation control</strong>.
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-semibold text-blue-900 mb-2">Antimicrobial Defense</p>
                          <p className="text-blue-800 text-sm">Broad spectrum protection against pathogens</p>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                          <p className="font-semibold text-cyan-900 mb-2">Immune Modulation</p>
                          <p className="text-cyan-800 text-sm">Restore & enhance immune function</p>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-lg">
                          <p className="font-semibold text-sky-900 mb-2">Inflammation Control</p>
                          <p className="text-sky-800 text-sm">Reduce chronic inflammatory responses</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">3 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">LL-37</h5>
                              <p className="text-gray-600 text-sm">Master antimicrobial peptide, broad spectrum defense</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>200-500mcg per dose</strong></li>
                                <li>• 1-2 times daily</li>
                                <li>• Cycle: 4-8 weeks on, 2-4 weeks off</li>
                                <li>• Can be used during acute infections</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous injection (systemic)</li>
                                <li>• Topical application (skin infections)</li>
                                <li>• Nasal spray (respiratory infections)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Broad spectrum antibacterial activity; antiviral effects; antifungal properties; wound healing acceleration; angiogenesis promotion; immune response modulation; protection against sepsis; skin barrier function enhancement</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Thymosin Alpha-1</h5>
                              <p className="text-gray-600 text-sm">Naturally occurring thymus peptide, immune system restoration</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>1.6mg per dose (typical)</strong></li>
                                <li>• 2-3 times per week</li>
                                <li>• Cycle: 8-12 weeks on, 4-8 weeks off</li>
                                <li>• Higher doses for acute conditions</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Clinical Applications:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Severe sepsis treatment (proven efficacy)</li>
                                <li>• Hepatitis B and C</li>
                                <li>• Cancer immunotherapy support</li>
                                <li>• Vaccine response enhancement</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Modifies, enhances, and restores immune function; increases T-cell production; improves response to vaccines in elderly; proven efficacy in severe sepsis; supports cancer treatment; reduces immunosenescence; balances Th1/Th2 response; COVID-19 immune support</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">KPV</h5>
                              <p className="text-gray-600 text-sm">Anti-inflammatory tripeptide, mucosal healing</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Oral: 500-1000mcg per dose</strong></li>
                                <li>• <strong>Subcutaneous: 200-500mcg per dose</strong></li>
                                <li>• 1-3 times daily</li>
                                <li>• Cycle: 4-8 weeks on, 2-4 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Delivery Methods:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Oral (GI conditions - hyaluronic acid delivery)</li>
                                <li>• Subcutaneous (systemic inflammation)</li>
                                <li>• Topical (skin inflammation)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Potent anti-inflammatory effects; mucosal healing acceleration; ulcerative colitis treatment; reduces pro-inflammatory cytokines; suppresses local and systemic immune responses; protects against oxidative stress; wound healing support; antimicrobial properties</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>LL-37:</strong> First line defense - broad spectrum antimicrobial kills pathogens directly while modulating immune response</li>
                          <li>• <strong>Thymosin Alpha-1:</strong> Immune system restoration - enhances T-cell production and balances immune response for optimal function</li>
                          <li>• <strong>KPV:</strong> Inflammation control - reduces excessive inflammatory responses that can damage tissues during immune activation</li>
                          <li>• <strong>Synergistic mechanism:</strong> Antimicrobial defense + immune enhancement + inflammation control = comprehensive immune optimization</li>
                          <li>• <strong>Clinical validation:</strong> All three peptides have extensive research supporting immune benefits (254, 67, 184 citations respectively)</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-yellow-900 font-semibold mb-2">Important Considerations</p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• <strong>Autoimmune conditions:</strong> Consult physician before use - immune modulation may affect autoimmune disease activity</li>
                          <li>• <strong>Acute vs chronic use:</strong> Can increase dosing during acute infections, reduce for maintenance</li>
                          <li>• <strong>Thymosin Alpha-1 clinical use:</strong> Approved in 35+ countries for immune enhancement, extensive safety data</li>
                          <li>• <strong>KPV delivery method matters:</strong> Oral for GI conditions, subcutaneous for systemic effects</li>
                          <li>• <strong>Cycling recommended:</strong> Prevents immune system adaptation and maintains effectiveness</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cognitive" className="space-y-8">
                <Card className="border-2 border-violet-200">
                  <CardHeader className="bg-gradient-to-r from-violet-50 to-fuchsia-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Brain className="h-7 w-7 text-violet-600" />
                      Cognitive Enhancement Stack (Nootropic & Neuroprotection)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-violet-200 bg-violet-50">
                      <AlertDescription>
                        <p className="text-violet-900 font-semibold mb-2">Clinical Evidence for Cognitive Enhancement</p>
                        <p className="text-violet-800 text-sm">
                          <strong>Semax:</strong> BDNF/trkB system modulation (99 citations), stimulates memory and attention in humans via intranasal application. <strong>Selank:</strong> Strong antianxiety and neuroprotective effects (26 citations), approved in Russia for GAD, no sedation or cognitive impairment. <strong>Dihexa:</strong> Angiotensin IV analog (94 citations), rescues cognitive impairment, increases synapses, Alzheimer's research applications. Combined approach provides <strong>memory enhancement + anxiety reduction + synaptogenesis</strong>.
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-violet-50 p-4 rounded-lg">
                          <p className="font-semibold text-violet-900 mb-2">Memory Enhancement</p>
                          <p className="text-violet-800 text-sm">BDNF upregulation & synapse formation</p>
                        </div>
                        <div className="bg-fuchsia-50 p-4 rounded-lg">
                          <p className="font-semibold text-fuchsia-900 mb-2">Anxiety Reduction</p>
                          <p className="text-fuchsia-800 text-sm">Non-sedating anxiolytic effects</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="font-semibold text-purple-900 mb-2">Neuroprotection</p>
                          <p className="text-purple-800 text-sm">Protects against cognitive decline</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">3 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Semax</h5>
                              <p className="text-gray-600 text-sm">ACTH(4-10) analog, BDNF modulator, memory & attention enhancer</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Intranasal: 300-600mcg per dose</strong></li>
                                <li>• <strong>Subcutaneous: 250-500mcg per dose</strong></li>
                                <li>• 1-2 times daily (morning and/or early afternoon)</li>
                                <li>• Cycle: 4-8 weeks on, 2-4 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Intranasal spray (preferred for cognitive effects)</li>
                                <li>• Subcutaneous injection (systemic neuroprotection)</li>
                                <li>• Avoid evening dosing (may affect sleep)</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Stimulates memory and attention; increases BDNF expression in hippocampus; improves trophic supply to brain; protects nervous system; enhances learning; improves focus and concentration; neuroprotective effects; reduces oxidative stress</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Selank</h5>
                              <p className="text-gray-600 text-sm">Tuftsin analog, anxiolytic, cognitive function support</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Intranasal: 300-600mcg per dose</strong></li>
                                <li>• <strong>Subcutaneous: 250-500mcg per dose</strong></li>
                                <li>• 1-3 times daily</li>
                                <li>• Cycle: 4-8 weeks on, 2-4 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Clinical Use:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Approved in Russia for GAD treatment</li>
                                <li>• No sedation or cognitive impairment</li>
                                <li>• Can be used long-term with cycling</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Strong antianxiety effects without sedation; neuroprotective properties; improves cognitive function; regulates BDNF content; protects against ethanol-induced memory impairment; reduces stress; improves mood; enhances mental clarity</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Dihexa</h5>
                              <p className="text-gray-600 text-sm">Angiotensin IV analog, synaptogenesis promoter</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Oral: 5-10mg per dose</strong></li>
                                <li>• <strong>Subcutaneous: 1-5mg per dose</strong></li>
                                <li>• Once daily (morning)</li>
                                <li>• Cycle: 4-8 weeks on, 4-8 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Research Applications:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Alzheimer's disease research</li>
                                <li>• Dementia and Parkinson's</li>
                                <li>• Traumatic brain injury</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Rescues cognitive impairment; increases synapse formation; improves memory in APP/PS1 mouse model; penetrates blood-brain barrier; encourages new neural connections; PI3K/AKT signaling pathway activation; neuroprotective effects; cognitive recovery support</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>Semax:</strong> Increases BDNF expression in hippocampus - enhances memory formation and learning capacity</li>
                          <li>• <strong>Selank:</strong> Reduces anxiety without sedation - allows optimal cognitive performance without stress interference</li>
                          <li>• <strong>Dihexa:</strong> Promotes synaptogenesis - creates new neural connections for enhanced cognitive capacity</li>
                          <li>• <strong>Synergistic mechanism:</strong> Memory enhancement + anxiety reduction + synapse formation = comprehensive cognitive optimization</li>
                          <li>• <strong>Clinical validation:</strong> Semax and Selank approved in Russia; Dihexa showing promise in Alzheimer's research (94 citations)</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-yellow-900 font-semibold mb-2">Important Considerations</p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• <strong>Intranasal preferred for Semax/Selank:</strong> Better bioavailability for cognitive effects, direct nose-to-brain delivery</li>
                          <li>• <strong>Avoid evening dosing:</strong> Semax can be stimulating; take morning and early afternoon only</li>
                          <li>• <strong>Dihexa emerging research:</strong> Powerful synaptogenic effects require careful dosing and cycling</li>
                          <li>• <strong>Cycling essential:</strong> Prevents receptor desensitization and maintains long-term effectiveness</li>
                          <li>• <strong>Lifestyle integration:</strong> Stack works best with adequate sleep, stress management, and cognitive challenges</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sleep" className="space-y-8">
                <Card className="border-2 border-indigo-200">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Moon className="h-7 w-7 text-indigo-600" />
                      Sleep Optimization Stack (Deep Sleep & Recovery)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-indigo-200 bg-indigo-50">
                      <AlertDescription>
                        <p className="text-indigo-900 font-semibold mb-2">Clinical Evidence for Sleep Enhancement</p>
                        <p className="text-indigo-800 text-sm">
                          <strong>DSIP:</strong> Higher sleep efficiency and shorter sleep latency vs placebo (21 citations), improves sleep quality in chronic insomnia, stress regulation (40 citations). <strong>Ipamorelin:</strong> Improved sleep efficiency and slow-wave sleep duration, restores natural sleep patterns through GH optimization. Combined approach provides <strong>sleep induction + deep sleep enhancement + stress reduction</strong> for comprehensive sleep optimization.
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <p className="font-semibold text-indigo-900 mb-2">Sleep Induction</p>
                          <p className="text-indigo-800 text-sm">Shorter sleep latency & easier sleep initiation</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-semibold text-blue-900 mb-2">Deep Sleep Enhancement</p>
                          <p className="text-blue-800 text-sm">Increased slow-wave sleep duration</p>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-lg">
                          <p className="font-semibold text-sky-900 mb-2">Recovery Optimization</p>
                          <p className="text-sky-800 text-sm">GH release during sleep for tissue repair</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">2 Peptides in This Stack</h4>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">DSIP (Delta Sleep-Inducing Peptide)</h5>
                              <p className="text-gray-600 text-sm">Isolated from rabbit cerebral venous blood, sleep induction & stress regulation</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>100-300mcg per dose</strong></li>
                                <li>• Once daily, 30-60 minutes before bed</li>
                                <li>• Cycle: 4-8 weeks on, 2-4 weeks off</li>
                                <li>• Can be used nightly during cycle</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Administration:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Subcutaneous injection (preferred)</li>
                                <li>• Intranasal administration (alternative)</li>
                                <li>• Take on empty stomach for best absorption</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Higher sleep efficiency; shorter sleep latency (fall asleep faster); improves sleep quality in chronic insomnia; induces delta waves; stress regulation and resistance to emotional stress; motor function recovery; reduces pain perception; neuroprotective effects</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Ipamorelin</h5>
                              <p className="text-gray-600 text-sm">Growth hormone secretagogue, deep sleep & recovery enhancement</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>200-300mcg per dose</strong></li>
                                <li>• Once daily before bed (primary dose)</li>
                                <li>• Optional: Second dose upon waking (for recovery)</li>
                                <li>• Cycle: 8-12 weeks on, 4-8 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Sleep Benefits:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Improved sleep efficiency</li>
                                <li>• Increased slow-wave sleep duration</li>
                                <li>• Restores natural sleep patterns</li>
                                <li>• GH release during deep sleep</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Improved sleep efficiency and slow-wave sleep; restores natural sleep patterns; growth hormone plays role in deep sleep cycles; enhanced recovery during sleep; tissue repair and regeneration; improved energy upon waking; lean muscle preservation; fat metabolism during sleep</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>DSIP:</strong> Directly induces sleep and delta waves - helps you fall asleep faster and stay asleep longer</li>
                          <li>• <strong>Ipamorelin:</strong> Optimizes GH release during deep sleep - enhances recovery, tissue repair, and metabolic processes</li>
                          <li>• <strong>Complementary mechanisms:</strong> DSIP handles sleep induction and stress reduction; Ipamorelin optimizes sleep quality and recovery</li>
                          <li>• <strong>Clinical validation:</strong> DSIP shows higher sleep efficiency vs placebo (21 citations); Ipamorelin improves slow-wave sleep duration</li>
                          <li>• <strong>Stress resilience:</strong> DSIP improves resistance to emotional stress (40 citations) - better sleep despite life stressors</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Sleep Hygiene Integration</h4>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-900 font-semibold mb-2">Maximize Stack Effectiveness</p>
                        <ul className="space-y-1 text-blue-800 text-sm">
                          <li>• <strong>Consistent schedule:</strong> Same bedtime and wake time daily (even weekends)</li>
                          <li>• <strong>Light exposure:</strong> Bright light in morning, dim lights 2 hours before bed</li>
                          <li>• <strong>Temperature:</strong> Cool bedroom (65-68°F optimal for deep sleep)</li>
                          <li>• <strong>Avoid stimulants:</strong> No caffeine after 2pm, no alcohol close to bedtime</li>
                          <li>• <strong>Timing:</strong> DSIP 30-60 min before bed, Ipamorelin right before bed</li>
                          <li>• <strong>Empty stomach:</strong> Light dinner 3-4 hours before bed for optimal peptide absorption</li>
                        </ul>
                      </div>
                    </div>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-yellow-900 font-semibold mb-2">Important Considerations</p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• <strong>Timing critical:</strong> Take DSIP 30-60 min before bed, Ipamorelin right before bed for optimal effects</li>
                          <li>• <strong>Empty stomach:</strong> Both peptides work best without food interference</li>
                          <li>• <strong>Cycling prevents tolerance:</strong> 4-12 week cycles maintain effectiveness long-term</li>
                          <li>• <strong>Sleep hygiene essential:</strong> Peptides enhance but don't replace good sleep practices</li>
                          <li>• <strong>Individual response varies:</strong> Some feel effects immediately, others need 1-2 weeks</li>
                          <li>• <strong>Morning grogginess:</strong> If present, reduce DSIP dose or take earlier in evening</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mitochondrial" className="space-y-8">
                <Card className="border-2 border-emerald-200">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Zap className="h-7 w-7 text-emerald-600" />
                      Mitochondrial Optimization Stack (Cellular Energy & Longevity)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <Alert className="border-emerald-200 bg-emerald-50">
                      <AlertDescription>
                        <p className="text-emerald-900 font-semibold mb-2">The Powerhouse of Cellular Health</p>
                        <p className="text-emerald-800 text-sm">
                          <strong>MOTS-c:</strong> Exercise mimicker that doubled running capacity in mice, improves glucose metabolism and insulin sensitivity. <strong>Humanin:</strong> Naturally occurring peptide that drops with age, positively impacts OTHER peptide signaling for combinatorial power. <strong>SS-31:</strong> Binds to cardiolipin in mitochondrial membrane, enhances ATP production, clinical stage development. <strong>SLU-PP-332:</strong> Activates ERRα master regulator of mitochondrial biogenesis. Combined approach provides <strong>energy + metabolism + neuroprotection + longevity</strong> through mitochondrial optimization.
                        </p>
                      </AlertDescription>
                    </Alert>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Purpose & Applications</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <p className="font-semibold text-emerald-900 mb-2">Energy Production</p>
                          <p className="text-emerald-800 text-sm">ATP enhancement & cellular power</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="font-semibold text-teal-900 mb-2">Metabolic Health</p>
                          <p className="text-teal-800 text-sm">Glucose metabolism & insulin sensitivity</p>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                          <p className="font-semibold text-cyan-900 mb-2">Neuroprotection</p>
                          <p className="text-cyan-800 text-sm">Cognitive function & Alzheimer's research</p>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-lg">
                          <p className="font-semibold text-sky-900 mb-2">Longevity</p>
                          <p className="text-sky-800 text-sm">Age-related decline reversal</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">4 Mitochondrial Peptides in This Stack</h4>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">MOTS-c</h5>
                              <p className="text-gray-600 text-sm">Mitochondrial-derived peptide, "exercise mimicker", glucose metabolism</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>5-15mg per dose</strong></li>
                                <li>• 3-5 times per week</li>
                                <li>• Cycle: 8-12 weeks on, 4-8 weeks off</li>
                                <li>• Can time around workouts for enhanced effect</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Research Findings:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Doubled running capacity in mice</li>
                                <li>• Improves glucose metabolism</li>
                                <li>• Maintains insulin sensitivity</li>
                                <li>• Benefits even healthy organisms</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Exercise mimicking effects; doubled running capacity in mice; improves glucose metabolism; maintains insulin sensitivity; energy expenditure optimization; obesity and diabetes management; heart health support; improved work capacity</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">Humanin</h5>
                              <p className="text-gray-600 text-sm">Naturally occurring, drops with age, combinatorial therapy potential</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>1-5mg per dose</strong></li>
                                <li>• 3-5 times per week</li>
                                <li>• Cycle: 8-12 weeks on, 4-8 weeks off</li>
                                <li>• Synergizes with other mitochondrial peptides</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Unique Properties:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Positively impacts OTHER peptide signaling</li>
                                <li>• Combinatorial therapy potential</li>
                                <li>• Levels drop significantly with age</li>
                                <li>• Exercise mimicking effect</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Reverses age-related metabolic slowdown; exercise mimicking effect; positively impacts signaling of other metabolic peptides; combinatorial therapies more powerful than individual peptides; anti-apoptotic; improves insulin sensitivity; neuroprotective; cardiovascular protection</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">SS-31 (Elamipretide)</h5>
                              <p className="text-gray-600 text-sm">Mitochondrial membrane stabilizer, cardiolipin binding, clinical stage</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Research dosing: 5-40mg per dose</strong></li>
                                <li>• Once daily (subcutaneous)</li>
                                <li>• Cycle: 8-12 weeks on, 4-8 weeks off</li>
                                <li>• Clinical stage development - dosing evolving</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Mechanism:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Binds to cardiolipin (inner membrane lipid)</li>
                                <li>• Stabilizes mitochondrial structure</li>
                                <li>• Enhances ATP production</li>
                                <li>• Reduces oxidative stress</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Binds to cardiolipin in mitochondrial membrane; stabilizes mitochondrial structure; enhances ATP production; reduces oxidative stress; improves mitochondrial efficiency; protects neurons; improves cognitive function; slows Alzheimer's progression; longevity; metabolic restoration</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-gray-900">SLU-PP-332</h5>
                              <p className="text-gray-600 text-sm">ERRα activator, master regulator of mitochondrial biogenesis</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Dosing:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• <strong>Research compound - dosing emerging</strong></li>
                                <li>• Typical research: 10-50mg oral</li>
                                <li>• Once daily</li>
                                <li>• Cycle: 4-8 weeks on, 4-8 weeks off</li>
                              </ul>
                            </div>
                            <div>
                              <p className="text-gray-700 font-semibold text-sm mb-2">Mechanism:</p>
                              <ul className="space-y-1 text-gray-600 text-sm">
                                <li>• Activates ERRα (master regulator)</li>
                                <li>• Mitochondrial biogenesis activation</li>
                                <li>• Enhances cellular energy output</li>
                                <li>• Dual metabolic + neuroprotective benefits</li>
                              </ul>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm"><strong>Benefits:</strong> Activates ERRα master regulator; mitochondrial biogenesis activation; enhances mitochondrial function; improves metabolic health; reduces age-related decline; supports tissue regeneration; protects against Alzheimer's; improves neuronal energy efficiency; reduces oxidative stress; longevity promotion</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <p className="text-purple-900 font-semibold mb-2">Why This Stack Works</p>
                        <ul className="space-y-1 text-purple-800 text-sm">
                          <li>• <strong>MOTS-c:</strong> Exercise mimicker improves glucose metabolism and insulin sensitivity - foundational metabolic optimization</li>
                          <li>• <strong>Humanin:</strong> Unique ability to enhance OTHER peptide signaling - amplifies effects of MOTS-c, SS-31, and SLU-PP-332</li>
                          <li>• <strong>SS-31:</strong> Stabilizes mitochondrial membranes and enhances ATP production - direct energy optimization</li>
                          <li>• <strong>SLU-PP-332:</strong> Activates ERRα master regulator - creates NEW mitochondria (biogenesis) for long-term capacity increase</li>
                          <li>• <strong>Synergistic mechanism:</strong> Metabolism + membrane stabilization + ATP enhancement + biogenesis = comprehensive mitochondrial optimization</li>
                          <li>• <strong>Cross-domain benefits:</strong> Energy, longevity, cognition, and metabolic health all improve through mitochondrial optimization</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="ml-2">
                        <p className="text-yellow-900 font-semibold mb-2">Important Considerations</p>
                        <ul className="space-y-1 text-yellow-800 text-sm">
                          <li>• <strong>SS-31 and SLU-PP-332 emerging research:</strong> Clinical stage compounds with evolving dosing protocols</li>
                          <li>• <strong>Humanin amplification effect:</strong> Take with other mitochondrial peptides for synergistic benefits</li>
                          <li>• <strong>Lifestyle integration critical:</strong> Exercise, sleep, and nutrition directly impact mitochondrial health</li>
                          <li>• <strong>Long-term commitment:</strong> Mitochondrial optimization benefits accumulate over months, not days</li>
                          <li>• <strong>Medical supervision recommended:</strong> Especially for SS-31 and SLU-PP-332 due to emerging research status</li>
                          <li>• <strong>Cycling maintains effectiveness:</strong> Prevents adaptation and maintains long-term mitochondrial benefits</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>         </Tabs>
          </div>
        </section>

        {/* Timing & Administration Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Timing & Administration Strategies</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-teal-600" />
                    Timing Around Meals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-yellow-200 bg-yellow-50">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <AlertDescription className="ml-2">
                      <p className="text-yellow-900 font-semibold mb-2">Critical Timing Rule</p>
                      <p className="text-yellow-800 text-sm">
                        High-protein meals can reduce the effectiveness of most peptides. Avoid food and large amounts of liquids at least <strong>1 hour before and after</strong> peptide administration.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Before Bed</p>
                      <p className="text-blue-800 text-sm">Tesamorelin: 90 minutes after eating</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Upon Waking</p>
                      <p className="text-green-800 text-sm">Before exercise and eating (fasted state)</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Consistent Timing</p>
                      <p className="text-purple-800 text-sm">Same time daily for optimal results</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Syringe className="h-6 w-6 text-teal-600" />
                    Administration Routes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Injection Methods</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-teal-600 pl-4">
                          <p className="font-semibold text-gray-900 text-sm">Subcutaneous</p>
                          <p className="text-gray-600 text-sm">For systemic healing effects</p>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold text-gray-900 text-sm">Intramuscular</p>
                          <p className="text-gray-600 text-sm">For targeted healing near injury site</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Alternative Routes</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-indigo-600 pl-4">
                          <p className="font-semibold text-gray-900 text-sm">Oral</p>
                          <p className="text-gray-600 text-sm">For gut healing or convenience (BPC-157)</p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <p className="font-semibold text-gray-900 text-sm">Topical/Transdermal</p>
                          <p className="text-gray-600 text-sm">For skin/hair applications (GHK-Cu)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cycling Protocols</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-green-900 mb-2">Short Cycles</p>
                        <p className="text-green-800 text-sm mb-2">5-10 days</p>
                        <p className="text-green-700 text-xs">GHK-Cu, DSIP</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-2">Medium Cycles</p>
                        <p className="text-blue-800 text-sm mb-2">20-30 days</p>
                        <p className="text-blue-700 text-xs">BPC-157, TB-500</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="font-semibold text-indigo-900 mb-2">Long Cycles</p>
                        <p className="text-indigo-800 text-sm mb-2">4-12 weeks</p>
                        <p className="text-indigo-700 text-xs">Ipamorelin, IGF-1 LR3, Semax</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="font-semibold text-purple-900 mb-2">Annual Cycles</p>
                        <p className="text-purple-800 text-sm mb-2">1-3x/year</p>
                        <p className="text-purple-700 text-xs">Epithalon, FOXO4-DRI, Humanin</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Compliance</h2>
              
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-5 w-5 text-red-600" />
                <AlertDescription className="ml-2">
                  <p className="text-red-900 font-semibold mb-2">Anti-Doping Awareness</p>
                  <ul className="space-y-1 text-red-800 text-sm">
                    <li>• <strong>BPC-157:</strong> Banned by WADA as of January 1, 2022</li>
                    <li>• <strong>TB-500:</strong> Banned by WADA and most global sporting organizations</li>
                    <li>• <strong>Most peptides:</strong> Prohibited in sanctioned sports (UFC, NFL, NCAA, MLB)</li>
                    <li>• <strong>Check status:</strong> Visit globaldro.com for legal status by country</li>
                    <li>• <strong>Consequences:</strong> Sanctions, suspensions, or disqualification</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <AlertDescription className="ml-2">
                  <p className="text-yellow-900 font-semibold mb-2">Medical Oversight Required</p>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Peptide therapy considered "experimental"</li>
                    <li>• Lacks long-term clinical research</li>
                    <li>• Requires licensed medical professional consultation</li>
                    <li>• Start low, go slow approach</li>
                    <li>• Monitor for adverse effects</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Standards for Stacking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      When stacking multiple peptides, quality becomes even more critical. Each peptide in your stack must meet pharmaceutical-grade standards to ensure safety and effectiveness.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                      <p className="text-green-900 font-semibold mb-2">Required Standards for Each Peptide:</p>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li>• &gt;98% purity with Certificate of Analysis (COA)</li>
                        <li>• Endotoxin testing (&lt;10 EU/mg)</li>
                        <li>• cGMP manufacturing standards</li>
                        <li>• Third-party testing verification</li>
                        <li>• Proper storage (refrigerated, protected from light)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Source Medical-Grade Peptides for Stacking?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              DrsPeptides.com provides USA-manufactured, cGMP-certified peptides with third-party testing for healthcare providers nationwide.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Visit DrsPeptides.com →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About This Resource</h3>
              <p className="text-sm">
                An educational hub providing evidence-based information on peptide therapy for healthcare practitioners.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/"><a className="hover:text-white transition-colors">Home</a></Link></li>
                <li><Link href="/protocols/metabolism"><a className="hover:text-white transition-colors">Protocols</a></Link></li>
                <li><Link href="/safety-standards"><a className="hover:text-white transition-colors">Safety Standards</a></Link></li>
                <li><a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DrsPeptides.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Disclaimer</h3>
              <p className="text-sm">
                This website is for educational purposes only and is not medical advice. Consult with a healthcare professional before implementing peptide therapy.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Peptide Education Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
