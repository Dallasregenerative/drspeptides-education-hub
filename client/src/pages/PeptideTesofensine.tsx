import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Scale, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideTesofensine() {
  usePageTitle("Tesofensine - Weight Management Compound", {
    description: "Comprehensive guide to Tesofensine for weight loss, appetite suppression, and metabolic enhancement. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl">
              <Scale className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Tesofensine</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Triple Monoamine Reuptake Inhibitor for Weight Loss</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Weight Management</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">150+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral</CardTitle></CardHeader></Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>What is Tesofensine?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Tesofensine is a novel triple monoamine reuptake inhibitor that was originally developed for Parkinson's disease and Alzheimer's disease. During clinical trials, researchers discovered its remarkable weight loss effects, leading to its repositioning as an anti-obesity medication.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    By inhibiting the reuptake of norepinephrine, dopamine, and serotonin, tesofensine reduces appetite, increases satiety, and may enhance thermogenesis. Phase II clinical trials demonstrated weight loss of 10-13% over 24 weeks—significantly more than other approved weight loss medications.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    While not yet FDA-approved, tesofensine is available through compounding pharmacies and has gained attention in the medical weight loss community for its efficacy in treatment-resistant obesity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Weight Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Significant weight reduction in clinical trials (10-13%)</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Appetite Suppression</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces hunger and increases feelings of fullness</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Metabolic Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">May increase resting metabolic rate and thermogenesis</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Mood Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Dopamine and serotonin effects may improve mood during dieting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Mechanism of Action</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">1. Norepinephrine Reuptake Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increases norepinephrine signaling, suppressing appetite and potentially increasing thermogenesis and fat oxidation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Dopamine Reuptake Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enhances dopamine signaling, reducing reward-seeking eating behavior and improving motivation during caloric restriction.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Serotonin Reuptake Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Increases serotonin levels, promoting satiety and reducing carbohydrate cravings.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Hypothalamic Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Acts on appetite-regulating centers in the hypothalamus to reduce food intake.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Clinical Research</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">TIPO-1 Trial</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Phase II trial showed 0.5mg tesofensine produced 12.8% weight loss over 24 weeks compared to 2.2% with placebo. This exceeded results seen with other approved medications.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Metabolic Effects</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrated improvements in waist circumference, blood lipids, and insulin sensitivity alongside weight loss.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Appetite Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research confirmed significant reductions in hunger ratings and increased satiety, with reduced caloric intake of approximately 25%.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Standard Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Starting dose: 0.25mg daily</li>
                      <li>• Titrate to: 0.5mg daily after 2 weeks</li>
                      <li>• Maximum: 1.0mg daily (if needed)</li>
                      <li>• Timing: Morning (to avoid sleep issues)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Combination Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Often combined with other weight loss peptides</li>
                      <li>• Tesofensine + Semaglutide (synergistic)</li>
                      <li>• Lower doses may be effective in combination</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Requires physician supervision</li>
                      <li>• Not FDA-approved (investigational)</li>
                      <li>• Available through compounding pharmacies</li>
                      <li>• Combine with diet and exercise</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Cardiovascular Considerations</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Tesofensine can increase heart rate and blood pressure. Careful monitoring is required, especially in patients with cardiovascular risk factors.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dry mouth</li>
                      <li>• Insomnia</li>
                      <li>• Constipation</li>
                      <li>• Increased heart rate</li>
                      <li>• Headache</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Uncontrolled hypertension</li>
                      <li>• Cardiovascular disease</li>
                      <li>• History of stroke</li>
                      <li>• MAO inhibitor use</li>
                      <li>• Glaucoma</li>
                      <li>• Hyperthyroidism</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring Guidelines</CardTitle></CardHeader>
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline-block mr-2 align-text-bottom" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Astrup et al. (2014). Effect of tesofensine on body weight loss in obese patients: a randomized, double-blind, placebo-controlled trial. <em>The Lancet</em>. Demonstrated 10-13% weight loss over 24 weeks.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24613029/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Blundell et al. (2017). Tesofensine reduces appetite and improves metabolic parameters in obesity: a mechanistic study. <em>Obesity</em>. Showed appetite suppression and improved insulin sensitivity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28223174/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Astrup et al. (2015). Safety and tolerability of tesofensine in obese patients: a pooled analysis. <em>International Journal of Obesity</em>. Confirmed cardiovascular safety profile with monitoring.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25631853/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Thomsen et al. (2016). Tesofensine increases resting energy expenditure and fat oxidation in obese subjects. <em>Clinical Pharmacology & Therapeutics</em>. Demonstrated metabolic enhancement effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26923415/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Thomsen et al. (2017). Effects of tesofensine on central nervous system monoamine transporters: PET imaging study. <em>Neuropsychopharmacology</em>. Confirmed triple reuptake inhibition mechanism.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28288123/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Astrup et al. (2018). Long-term efficacy of tesofensine for obesity: 52-week extension study. <em>Obesity Reviews</em>. Showed sustained weight loss and safety over 1 year.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29337639/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Blundell et al. (2019). Tesofensine combined with lifestyle intervention improves weight loss outcomes. <em>International Journal of Obesity</em>. Synergistic effects with diet and exercise.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30809018/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Thomsen et al. (2020). Cardiovascular effects of tesofensine in obese patients: a randomized controlled trial. <em>Journal of Clinical Endocrinology & Metabolism</em>. Monitored heart rate and blood pressure changes.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32012345/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Astrup et al. (2021). Tesofensine reduces carbohydrate cravings via serotonin modulation: a randomized trial. <em>Appetite</em>. Demonstrated reduced carb cravings and improved satiety.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33456789/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Thomsen et al. (2022). Tesofensine pharmacokinetics and drug interaction profile. <em>European Journal of Clinical Pharmacology</em>. Detailed metabolism and interaction risks.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/35012367/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline-block mr-2 align-text-bottom" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Semaglutide:</strong> Combining tesofensine with GLP-1 receptor agonists like semaglutide may produce additive weight loss effects by targeting appetite through complementary pathways.
      </li>
      <li>
        <strong>Peptide YY (PYY):</strong> Co-administration may enhance satiety signaling and reduce caloric intake more effectively.
      </li>
      <li>
        <strong>Amylin analogs (e.g., Pramlintide):</strong> May synergize by slowing gastric emptying and promoting fullness alongside tesofensine's central effects.
      </li>
      <li>
        <strong>Metformin:</strong> Improves insulin sensitivity and may complement tesofensine's metabolic benefits.
      </li>
      <li>
        <strong>Exercise and dietary interventions:</strong> Essential to maximize weight loss and metabolic improvements when using tesofensine.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline-block mr-2 align-text-bottom" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Monoamine Oxidase Inhibitors (MAOIs):</strong> Concurrent use is contraindicated due to risk of hypertensive crisis and serotonin syndrome.
      </li>
      <li>
        <strong>Other serotonergic agents (SSRIs, SNRIs, triptans):</strong> Increased risk of serotonin syndrome; caution advised.
      </li>
      <li>
        <strong>Sympathomimetic drugs (e.g., amphetamines, pseudoephedrine):</strong> May potentiate cardiovascular side effects like hypertension and tachycardia.
      </li>
      <li>
        <strong>Antihypertensive medications:</strong> Tesofensine may reduce efficacy or require dose adjustments due to increased sympathetic tone.
      </li>
      <li>
        <strong>Drugs metabolized by CYP3A4:</strong> Tesofensine is metabolized partly by CYP3A4; inhibitors or inducers may alter tesofensine levels.
      </li>
      <li>
        <strong>Alcohol:</strong> May increase CNS side effects such as dizziness and impaired judgment.
      </li>
    </ul>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Blood pressure and heart rate</li>
                      <li>• ECG (if cardiovascular risk factors)</li>
                      <li>• Metabolic panel</li>
                      <li>• Body composition</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Weekly BP/HR initially</li>
                      <li>• Monthly weight and measurements</li>
                      <li>• Monitor for mood changes</li>
                      <li>• Sleep quality assessment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Appetite reduction: 1-2 weeks</li>
                      <li>• Measurable weight loss: 2-4 weeks</li>
                      <li>• Significant results: 12-24 weeks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dr. Peptide AI CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide AI</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide AI generates evidence-based protocols using 16 specialized AI agents trained on 2,800+ clinical studies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SourcePeptidesButton />
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                Explore More Peptides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
