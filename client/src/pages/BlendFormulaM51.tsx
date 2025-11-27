import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, Zap, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";

export default function BlendFormulaM51() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-purple-600">Synergistic Blend</Badge>
              <Badge variant="outline" className="border-purple-300 text-purple-700">Metabolic Enhancement</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              Formula M-51
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              Advanced Metabolic Enhancement: 5-Amino-1MQ + SLU-PP-332
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Formula M-51 represents a breakthrough synergistic combination of **5-Amino-1MQ** (NNMT inhibitor) and **SLU-PP-332** (ERR agonist exercise mimetic) designed to maximize metabolic enhancement through complementary mechanisms. This advanced blend targets both cellular NAD+ metabolism and mitochondrial biogenesis to create a powerful fat-loss and energy-boosting effect that surpasses either compound alone. By inhibiting nicotinamide N-methyltransferase (NNMT) while simultaneously activating estrogen-related receptors (ERRs), Formula M-51 enhances metabolic rate, increases fatty acid oxidation, improves insulin sensitivity, and mimics the beneficial effects of aerobic exercise—all without requiring changes in diet or physical activity.
            </p>
          </div>
        </div>
      </section>

      {/* Component Peptides */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Component Peptides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">5-Amino-1MQ</h3>
                <p className="text-sm text-slate-700 mb-3">
                  **NNMT Inhibitor for NAD+ Enhancement**
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Inhibits nicotinamide N-methyltransferase (NNMT)</li>
                  <li>• Increases cellular NAD+ levels</li>
                  <li>• Enhances mitochondrial function</li>
                  <li>• Reduces visceral fat accumulation</li>
                  <li>• Improves insulin sensitivity</li>
                </ul>
                <Link href="/peptides/5-amino-1mq">
                  <Button variant="outline" size="sm" className="mt-4">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-pink-600">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3">SLU-PP-332</h3>
                <p className="text-sm text-slate-700 mb-3">
                  **ERR Agonist Exercise Mimetic**
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Pan-ERR (estrogen-related receptor) agonist</li>
                  <li>• Induces mitochondrial biogenesis</li>
                  <li>• Increases oxidative muscle fibers</li>
                  <li>• Enhances endurance (+70% run time)</li>
                  <li>• Boosts fatty acid oxidation (+25%)</li>
                </ul>
                <Link href="/peptides/slu-pp-332">
                  <Button variant="outline" size="sm" className="mt-4">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Synergistic Benefits */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Synergistic Benefits</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-purple-600" />
                      Complementary Metabolic Pathways
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      The synergy between 5-Amino-1MQ and SLU-PP-332 creates a **dual-action metabolic enhancement** that addresses both cellular energy production and mitochondrial capacity:
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li>• <strong>NAD+ elevation (5-Amino-1MQ):</strong> Provides the cellular fuel needed for enhanced mitochondrial function</li>
                        <li>• <strong>Mitochondrial biogenesis (SLU-PP-332):</strong> Creates more mitochondria to utilize the elevated NAD+</li>
                        <li>• <strong>Synergistic fat oxidation:</strong> NNMT inhibition + ERR activation maximizes fatty acid metabolism</li>
                        <li>• <strong>Exercise-independent benefits:</strong> Metabolic improvements occur without requiring physical activity</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enhanced Fat Loss</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Formula M-51's dual mechanism creates superior fat-loss effects compared to either compound alone. 5-Amino-1MQ reduces visceral fat accumulation and white adipose tissue mass, while SLU-PP-332 increases fatty acid oxidation by 25% and shifts muscle fiber composition toward oxidative (fat-burning) phenotypes. Together, they create a powerful metabolic state that preferentially burns fat for fuel.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Metabolic Flexibility</h3>
                    <p className="text-slate-700 leading-relaxed">
                      The combination enhances **metabolic flexibility**—the ability to efficiently switch between glucose and fat as fuel sources. This is particularly beneficial for individuals with metabolic syndrome, insulin resistance, or those seeking to optimize body composition without dietary restrictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Accelerated Fat Loss</h3>
                <p className="text-sm text-slate-600">
                  Dual-action fat burning through NNMT inhibition and enhanced fatty acid oxidation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Increased Energy</h3>
                <p className="text-sm text-slate-600">
                  Elevated NAD+ levels and mitochondrial biogenesis boost cellular energy production
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <FlaskConical className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Exercise Mimetic Effects</h3>
                <p className="text-sm text-slate-600">
                  SLU-PP-332 induces aerobic exercise adaptations without requiring physical activity
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Insulin Sensitivity</h3>
                <p className="text-sm text-slate-600">
                  Both compounds improve glucose metabolism and insulin signaling
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Metabolic Rate Boost</h3>
                <p className="text-sm text-slate-600">
                  Increased basal metabolic rate through enhanced mitochondrial function
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">No Diet/Exercise Required</h3>
                <p className="text-sm text-slate-600">
                  Metabolic benefits occur independently of lifestyle changes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Clinical Applications</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Weight Management & Fat Loss</h3>
                    <p className="text-sm text-slate-700">
                      Primary application for individuals seeking accelerated fat loss, particularly visceral adiposity reduction. Ideal for those with stubborn fat deposits resistant to diet and exercise.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Metabolic Syndrome</h3>
                    <p className="text-sm text-slate-700">
                      Addresses multiple components of metabolic syndrome: insulin resistance, visceral obesity, dyslipidemia. The dual NAD+ enhancement and mitochondrial biogenesis improve metabolic health markers.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging & Longevity</h3>
                    <p className="text-sm text-slate-700">
                      NAD+ elevation and mitochondrial function are key longevity pathways. Formula M-51 targets both simultaneously for comprehensive metabolic rejuvenation.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Athletic Performance</h3>
                    <p className="text-sm text-slate-700">
                      SLU-PP-332's exercise mimetic effects (70% endurance increase) combined with 5-Amino-1MQ's energy enhancement create a powerful performance stack.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dosing Protocol */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>5-Amino-1MQ:</strong> 50-100 mg once daily (oral or subcutaneous)</li>
                        <li><strong>SLU-PP-332:</strong> 10-20 mg once daily (oral)</li>
                        <li><strong>Timing:</strong> Morning administration on empty stomach for optimal absorption</li>
                        <li><strong>Duration:</strong> 8-12 week cycles with 4-week breaks</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Optimization Tips</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Fasted administration:</strong> Take on empty stomach for maximum NAD+ elevation</li>
                      <li>• <strong>Consistent timing:</strong> Daily dosing at same time maintains stable levels</li>
                      <li>• <strong>Monitor response:</strong> Track body composition, energy levels, metabolic markers</li>
                      <li>• <strong>Hydration:</strong> Maintain adequate hydration to support increased metabolic rate</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Considerations */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safety Considerations</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Generally Well-Tolerated</h3>
                    <p className="text-sm text-slate-700">
                      Both 5-Amino-1MQ and SLU-PP-332 have demonstrated favorable safety profiles in research studies. The combination is generally well-tolerated with minimal adverse effects.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Potential Considerations</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Metabolic acceleration:</strong> Increased energy expenditure may require caloric adjustment</li>
                      <li>• <strong>Individual response:</strong> Effects may vary based on baseline metabolic status</li>
                      <li>• <strong>Long-term use:</strong> Cycle usage recommended (8-12 weeks on, 4 weeks off)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <p className="text-sm font-medium text-purple-900 mb-2">Safety Summary</p>
                    <p className="text-sm text-purple-800">
                      Formula M-51 combines two well-researched compounds with established safety profiles. The synergistic blend is designed for individuals seeking metabolic enhancement without the risks associated with traditional stimulant-based fat burners.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Blend */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Formula M-51</h2>
            <p className="text-lg mb-6 text-purple-50">
              For pharmaceutical-grade Formula M-51 and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-purple-100">
              Pre-formulated synergistic blend for optimal metabolic enhancement
            </p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-slate-600 mb-4">
                  For detailed research citations, please refer to the individual component pages:
                </p>
                <div className="space-y-2">
                  <Link href="/peptides/5-amino-1mq">
                    <Button variant="outline" size="sm" className="mr-2">
                      5-Amino-1MQ Research →
                    </Button>
                  </Link>
                  <Link href="/peptides/slu-pp-332">
                    <Button variant="outline" size="sm">
                      SLU-PP-332 Research →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
