import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle, Layers, Activity, Zap, Heart, Brain, Moon, Shield, TrendingUp, Syringe, Clock, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function StackingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Peptide Therapy Hub
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

              <TabsContent value="fatloss">
                <Card>
                  <CardHeader>
                    <CardTitle>Fat Loss Stack - Coming Soon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Semaglutide + CJC-1295 + Ipamorelin protocol details coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="antiaging">
                <Card>
                  <CardHeader>
                    <CardTitle>Anti-Aging Stack - Coming Soon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Epithalon + Humanin + FOXO4-DRI protocol details coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="immune">
                <Card>
                  <CardHeader>
                    <CardTitle>Immune Support Stack - Coming Soon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">LL-37 + Thymosin Alpha-1 + KPV protocol details coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cognitive">
                <Card>
                  <CardHeader>
                    <CardTitle>Cognitive Enhancement Stack - Coming Soon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Semax + Selank + Dihexa protocol details coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sleep">
                <Card>
                  <CardHeader>
                    <CardTitle>Sleep Optimization Stack - Coming Soon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">DSIP + Ipamorelin protocol details coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mito">
                <Card>
                  <CardHeader>
                    <CardTitle>Mitochondrial Optimization Stack - Coming Soon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">MOTS-c + Humanin + SS-31 + SLU-PP-332 protocol details coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
            <p>© 2025 Peptide Therapy Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
