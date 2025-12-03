import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, Activity, Dumbbell, Heart, Zap } from "lucide-react";
import { Link } from "wouter";

export default function PeptideSLUPP332() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/peptides">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Peptides
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-orange-600">Exercise Mimetic</Badge>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              SLU-PP-332
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              Synthetic ERR Agonist - Exercise in a Molecule
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              SLU-PP-332 is a breakthrough synthetic pan-agonist of estrogen-related receptors (ERRα/β/γ) that mimics the metabolic benefits of aerobic exercise without requiring physical activity. This first-in-class exercise mimetic activates the same genetic programs triggered by endurance training, offering potential therapeutic applications for metabolic disorders, obesity, and age-related decline in physical function.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Dumbbell className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-semibold mb-2">Exercise Mimetic</h3>
                <p className="text-sm text-slate-600">
                  Induces acute aerobic exercise genetic program and enhances endurance capacity by 70% without physical training
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-semibold mb-2">Metabolic Enhancement</h3>
                <p className="text-sm text-slate-600">
                  Increases energy expenditure and fatty acid oxidation by 25%, reduces fat mass accumulation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Activity className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-semibold mb-2">Mitochondrial Function</h3>
                <p className="text-sm text-slate-600">
                  Enhances mitochondrial respiration and increases type IIa oxidative muscle fibers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-semibold mb-2">Insulin Sensitivity</h3>
                <p className="text-sm text-slate-600">
                  Improves glucose tolerance and insulin sensitivity in metabolic syndrome models
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mechanism of Action</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-orange-600" />
                      ERR Pan-Agonist Activity
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      SLU-PP-332 is a synthetic agonist that targets all three estrogen-related receptor isoforms (ERRα, ERRβ, ERRγ) with highest potency for ERRα (EC50 = 98 nM). Unlike traditional estrogen receptors, ERRs are constitutively active orphan nuclear receptors that regulate energy metabolism without requiring endogenous ligands. SLU-PP-332 enhances their transcriptional activity beyond baseline levels.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Molecular Design</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      The compound was rationally designed by optimizing the ERRβ/γ selective agonist scaffold GSK4716 for ERRα activity, achieving 50-fold improvement in ERRα potency. The naphthalene substituent creates π-π interactions with Phe328 (specific to ERRα), enabling selective activation while maintaining pan-ERR activity.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-orange-900">Selectivity Profile:</p>
                      <ul className="text-sm text-orange-800 mt-2 space-y-1">
                        <li>• ERRα: EC50 = 98 nM (highest potency)</li>
                        <li>• ERRβ: EC50 = 230 nM (2.3-fold less potent)</li>
                        <li>• ERRγ: EC50 = 430 nM (4.4-fold less potent)</li>
                        <li>• No activity on ERα, ERβ, or other nuclear receptors</li>
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Exercise-Mimetic Pathway</h3>
                    <p className="text-slate-700 leading-relaxed">
                      ERRs are highly expressed in tissues with high energy demand (skeletal muscle, heart, liver) and regulate genes involved in fatty acid oxidation, mitochondrial biogenesis, the TCA cycle, and oxidative phosphorylation. SLU-PP-332 activation induces an ERRα-dependent acute aerobic exercise genetic program, replicating the molecular signature of endurance training without physical activity.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Metabolic Reprogramming</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Treatment shifts fuel utilization from carbohydrates to lipids (decreased respiratory exchange ratio within 2 hours), increases fatty acid oxidation by 25%, enhances energy expenditure, and promotes oxidative muscle fiber transformation. These adaptations mirror those induced by chronic aerobic exercise training.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Evidence */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Research Evidence</h2>
            
            <div className="space-y-6">
              {/* Study 1 */}
              <Card className="border-l-4 border-l-orange-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-orange-700 border-orange-300">36 Citations</Badge>
                    <Badge variant="secondary">ACS Chem Biol 2023</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Synthetic ERRα/β/γ Agonist Induces an ERRα-Dependent Acute Aerobic Exercise Response and Enhances Exercise Capacity
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Billon C, et al. ACS Chemical Biology. 2023;18(4):756-771.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Exercise capacity:</strong> Enhanced endurance by 70% (run time) and 45% (distance) in mice</li>
                      <li>• <strong>Muscle transformation:</strong> Increased type IIa oxidative muscle fibers without training</li>
                      <li>• <strong>Acute response:</strong> Induced ERRα-specific aerobic exercise genetic program</li>
                      <li>• <strong>Mitochondrial function:</strong> Enhanced cellular respiration in skeletal muscle cell lines</li>
                      <li>• <strong>ERRα dependence:</strong> Effects abolished in ERRα knockout mice, confirming mechanism</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Study 2 */}
              <Card className="border-l-4 border-l-orange-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-orange-700 border-orange-300">29 Citations</Badge>
                    <Badge variant="secondary">J Pharmacol Exp Ther 2024</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    A Synthetic ERR Agonist Alleviates Metabolic Syndrome
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Billon C, et al. Journal of Pharmacology and Experimental Therapeutics. 2024;388(2):232-240.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Fatty acid oxidation:</strong> Increased by 25% compared to vehicle-treated animals</li>
                      <li>• <strong>Fat mass:</strong> Decreased accumulation despite no change in food intake or activity</li>
                      <li>• <strong>Energy expenditure:</strong> Increased resting metabolic rate in obesity models</li>
                      <li>• <strong>Fuel utilization:</strong> Shifted from carbohydrates to lipids within 2 hours of first dose</li>
                      <li>• <strong>Insulin sensitivity:</strong> Improved glucose tolerance in diet-induced obesity and ob/ob mice</li>
                      <li>• <strong>No appetite suppression:</strong> Pure metabolic effect without affecting food intake</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Study 3 */}
              <Card className="border-l-4 border-l-orange-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-orange-700 border-orange-300">38 Citations</Badge>
                    <Badge variant="secondary">Circulation 2023</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Estrogen-Related Receptor Agonism Reverses Mitochondrial Dysfunction and Inflammation in Aging Mouse Heart
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Wang XX, et al. Circulation. 2023;148(Suppl_1):A15879.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Cardiac aging:</strong> Reversed mitochondrial dysfunction in aging mouse hearts</li>
                      <li>• <strong>Inflammation:</strong> Reduced age-related cardiac inflammation</li>
                      <li>• <strong>Cardioprotection:</strong> Improved cardiac metabolism and function</li>
                      <li>• <strong>Heart failure:</strong> Restored mitochondrial function and reversed pathology</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Clinical Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Metabolic Disorders</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Obesity and metabolic syndrome</li>
                    <li>• Type 2 diabetes and insulin resistance</li>
                    <li>• Non-alcoholic fatty liver disease</li>
                    <li>• Dyslipidemia and cardiovascular risk</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Physical Function</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Age-related muscle atrophy (sarcopenia)</li>
                    <li>• Exercise intolerance</li>
                    <li>• Physical inactivity-related decline</li>
                    <li>• Mitochondrial dysfunction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Cardiovascular Health</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Heart failure with preserved ejection fraction</li>
                    <li>• Cardiac aging and dysfunction</li>
                    <li>• Metabolic cardiomyopathy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Special Populations</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Individuals unable to exercise (disability, injury)</li>
                    <li>• Elderly with mobility limitations</li>
                    <li>• Bedridden or hospitalized patients</li>
                    <li>• Augmentation of exercise training programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Protocol */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Research Dosing Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Preclinical Dosing (Mouse Studies)</h3>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Acute exercise response:</strong> 30 mg/kg i.p. single dose</li>
                        <li><strong>Chronic metabolic effects:</strong> 50 mg/kg i.p. twice daily for 28 days</li>
                        <li><strong>Exercise capacity enhancement:</strong> 50 mg/kg i.p. twice daily for 8 weeks</li>
                        <li><strong>Pharmacokinetics:</strong> Plasma exposure 0.2 μM, muscle exposure 0.6 μM at 6 hours post-injection</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-sm font-medium text-amber-900 mb-2">⚠️ Research Compound Status</p>
                    <p className="text-sm text-amber-800">
                      SLU-PP-332 is currently a research chemical tool compound. Human dosing protocols have not been established. The compound is being developed for potential clinical trials in metabolic disorders and muscle function improvement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Timing</h3>
                    <p className="text-sm text-slate-700">
                      In preclinical studies, twice-daily dosing was performed at Zeitgeber time 0 (lights on) and Zeitgeber time 12 (lights off) to maintain consistent ERR activation throughout the circadian cycle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safety Profile</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Preclinical Safety Observations</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>No appetite suppression:</strong> No effect on food intake or feeding behavior</li>
                      <li>• <strong>No hyperactivity:</strong> No increase in locomotor activity or spontaneous movement</li>
                      <li>• <strong>Selective mechanism:</strong> No activity on estrogen receptors or other nuclear receptors</li>
                      <li>• <strong>Well-tolerated:</strong> 28-day treatment in mice showed no overt toxicity</li>
                      <li>• <strong>Minimal liver effects:</strong> Only minor changes in liver enzyme levels</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Theoretical Considerations</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>ERRα knockout mice:</strong> Susceptible to heart failure under stress, suggesting importance of careful cardiovascular monitoring</li>
                      <li>• <strong>Metabolic stress:</strong> Chronic ERR activation may require adequate nutritional support</li>
                      <li>• <strong>Exercise replacement:</strong> Should not replace physical activity benefits beyond metabolism (bone health, mental health, etc.)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Clinical Development Status</p>
                    <p className="text-sm text-blue-800">
                      SLU-PP-332 is in preclinical development with plans to advance to human clinical trials. Comprehensive safety, toxicology, and pharmacokinetic studies in humans have not yet been completed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade SLU-PP-332</h2>
            <p className="text-lg mb-6 text-orange-50">
              For research-grade SLU-PP-332 and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-orange-600 hover:text-orange-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-orange-100">
              Formula M-51 contains SLU-PP-332 combined with 5-Amino-1MQ for synergistic metabolic benefits
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
                <ol className="space-y-3 text-sm text-slate-700">
                  <li>
                    1. Billon C, Sitaula S, Banerjee S, et al. Synthetic ERRα/β/γ agonist induces an ERRα-dependent acute aerobic exercise response and enhances exercise capacity. ACS Chem Biol. 2023;18(4):756-771. doi:10.1021/acschembio.2c00720
                  </li>
                  <li>
                    2. Billon C, Schoepke E, Avdagic A, et al. A synthetic ERR agonist alleviates metabolic syndrome. J Pharmacol Exp Ther. 2024;388(2):232-240. doi:10.1124/jpet.123.001733
                  </li>
                  <li>
                    3. Wang XX, Zhu M, Evans RM, Burris TP. Estrogen-related receptor agonism reverses mitochondrial dysfunction and inflammation in aging mouse heart. Circulation. 2023;148(Suppl_1):A15879.
                  </li>
                  <li>
                    4. Narkar VA, Fan W, Downes M, et al. Exercise and PGC-1α-independent synchronization of type I muscle metabolism and vasculature by ERRγ. Cell Metab. 2011;13(3):283-293.
                  </li>
                  <li>
                    5. Rangwala SM, Wang X, Calvo JA, et al. Estrogen-related receptor gamma is a key regulator of muscle mitochondrial activity and oxidative capacity. J Biol Chem. 2010;285(29):22619-22629.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
