import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Activity, Shield, Beaker, FileText, Clock } from "lucide-react";

export default function MOTSc() {
  return (
    <>
      <Helmet>
        <title>MOTS-c: Mitochondrial Peptide for Metabolism & Longevity | DrsPeptides</title>
        <meta name="description" content="Complete guide to MOTS-c: mitochondrial-derived peptide for metabolic health, insulin sensitivity, exercise performance, and longevity. Dosing, research, safety." />
        <meta name="keywords" content="MOTS-c, mitochondrial peptide, metabolic health, insulin sensitivity, longevity peptide, exercise performance" />
        <link rel="canonical" href="https://education.drspeptides.com/peptides/mots-c" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <Navigation />

        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="default" className="bg-green-600">Metabolism</Badge>
              <Badge variant="outline">Longevity</Badge>
              <Badge variant="outline">Exercise Performance</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              MOTS-c
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Mitochondrial-encoded peptide that regulates metabolism, enhances insulin sensitivity, and promotes longevity.
            </p>
          </div>

          <Card className="mb-8 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                Quick Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>Source:</strong> Mitochondrial 12S rRNA gene</div>
                <div><strong>Amino Acids:</strong> 16 amino acids</div>
                <div><strong>Half-Life:</strong> ~4-6 hours</div>
                <div><strong>Administration:</strong> Subcutaneous, Intramuscular</div>
                <div><strong>Storage:</strong> Lyophilized: -20°C; Reconstituted: 2-8°C</div>
                <div><strong>Typical Dosage:</strong> 5-15mg, 2-3x per week</div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanism">Mechanism</TabsTrigger>
              <TabsTrigger value="dosing">Dosing</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is MOTS-c?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>MOTS-c</strong> (Mitochondrial ORF of the 12S rRNA type-c) is a 16-amino acid peptide encoded by the mitochondrial genome. It represents a novel class of mitochondrial-derived peptides (MDPs) that serve as signaling molecules between mitochondria and the nucleus.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    MOTS-c is significantly expressed in response to metabolic stress or exercise and plays a crucial role in regulating cellular metabolism, insulin sensitivity, and longevity. It translocates to the nucleus under stress conditions to regulate gene expression and metabolic adaptation.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>✓ Enhances insulin sensitivity and glucose metabolism</li>
                      <li>✓ Promotes fat oxidation and weight loss</li>
                      <li>✓ Improves exercise performance and endurance</li>
                      <li>✓ Supports mitochondrial function and biogenesis</li>
                      <li>✓ Extends healthspan in animal studies</li>
                      <li>✓ Reduces age-related metabolic decline</li>
                      <li>✓ Activates AMPK signaling pathway</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-semibold mb-2">Metabolic Health & Weight Loss</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Improves insulin sensitivity, glucose homeostasis, and promotes fat oxidation. Effective for metabolic syndrome, prediabetes, and weight management.
                      </p>
                    </div>
                    <div className="border-l-4 border-teal-600 pl-4">
                      <h4 className="font-semibold mb-2">Exercise Performance</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Exercise-induced peptide that enhances endurance, muscle function, and recovery. Popular among athletes and fitness enthusiasts.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold mb-2">Longevity & Anti-Aging</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Extends healthspan by improving mitochondrial function, reducing oxidative stress, and supporting metabolic adaptation to aging.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h4 className="font-semibold mb-2">Bone Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Recent studies show MOTS-c regulates bone formation and resorption, potentially beneficial for osteoporosis prevention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Beaker className="h-5 w-5 text-green-600" />
                    Mechanism of Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. AMPK Activation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      MOTS-c activates AMPK (AMP-activated protein kinase), the master regulator of cellular energy metabolism. This enhances glucose uptake, fat oxidation, and mitochondrial biogenesis.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded text-xs">
                      <strong>Research:</strong> Reynolds et al. (2021) demonstrated MOTS-c promotes metabolic homeostasis via AMPK activation.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Nuclear Translocation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Under metabolic stress, MOTS-c translocates from mitochondria to the nucleus where it directly regulates gene expression, promoting metabolic adaptation and stress resistance.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded text-xs">
                      <strong>Research:</strong> Kim et al. (2018) showed MOTS-c translocates to nucleus and regulates nuclear gene expression following metabolic stress.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Insulin Sensitivity Enhancement</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      MOTS-c reduces insulin resistance by improving glucose uptake in skeletal muscle and enhancing insulin signaling pathways, making it effective for type 2 diabetes management.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded text-xs">
                      <strong>Research:</strong> Kong et al. (2023) reported MOTS-c reduces insulin resistance in T2DM pathologies.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Mitochondrial Function</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Enhances mitochondrial respiration, ATP production, and protects against mitochondrial dysfunction associated with aging and metabolic disease.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dosing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    Dosing Protocols
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-3">Standard Metabolic Health Protocol</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> 5-10mg per dose</p>
                      <p><strong>Frequency:</strong> 2-3 times per week</p>
                      <p><strong>Duration:</strong> 8-12 weeks, then reassess</p>
                      <p><strong>Administration:</strong> Subcutaneous injection</p>
                      <p><strong>Timing:</strong> Morning or pre-workout</p>
                    </div>
                  </div>

                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                    <h4 className="font-semibold mb-3">Exercise Performance Protocol</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> 10-15mg per dose</p>
                      <p><strong>Frequency:</strong> 3 times per week</p>
                      <p><strong>Timing:</strong> 30-60 minutes pre-workout</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        Note: Higher doses used in athletic performance contexts. Monitor response and adjust accordingly.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-3">Longevity Protocol</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> 5mg per dose</p>
                      <p><strong>Frequency:</strong> 2 times per week</p>
                      <p><strong>Duration:</strong> Ongoing with periodic breaks (1 week off every 12 weeks)</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        Note: Based on animal studies showing healthspan extension with intermittent dosing (3x/week, 15mg/kg/day).
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-4 py-2">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Important:</strong> MOTS-c is typically used 2-3x per week rather than daily. This intermittent approach mimics natural exercise-induced expression patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reconstitution & Storage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div><strong>Reconstitution:</strong> Add 2ml bacteriostatic water to 10mg vial = 5mg/ml</div>
                  <div><strong>Lyophilized Storage:</strong> -20°C for 2-3 years</div>
                  <div><strong>Reconstituted Storage:</strong> 2-8°C for up to 30 days</div>
                  <div><strong>Protection:</strong> Keep away from light</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    Clinical Research & Studies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Exercise-Induced Metabolic Regulator (2021)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Reynolds et al. demonstrated MOTS-c is exercise-induced and promotes metabolic homeostasis via AMPK. Intermittent treatment improved healthspan in animal models.
                    </p>
                    <a href="https://www.nature.com/articles/s41467-020-20790-0" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Nuclear Translocation & Gene Regulation (2018)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Kim et al. showed MOTS-c translocates to nucleus and regulates nuclear gene expression following metabolic stress, revealing novel mitonuclear communication mechanism.
                    </p>
                    <a href="https://www.sciencedirect.com/science/article/pii/S1550413118303905" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Diabetes & Aging-Related Diseases (2023)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Kong et al. reviewed MOTS-c as therapeutic target for diabetes and aging-related diseases including neurodegeneration, osteoporosis, and cardiovascular disease.
                    </p>
                    <a href="https://www.e-dmj.org/journal/view.php?doi=10.4093/dmj.2022.0333" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Comprehensive Review (2023)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Wan et al. comprehensive review of MOTS-c mechanisms: mitochondrial signaling, metabolic regulation, and therapeutic potential for aging-related diseases.
                    </p>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9854231/" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Bone Metabolism (2023)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Yi et al. demonstrated MOTS-c regulates bone formation and resorption, suggesting potential for osteoporosis treatment.
                    </p>
                    <a href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2023.1149120/full" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    MOTS-c analog <strong>CB4211</strong> has entered Phase 1a clinical trials (double-blind, placebo-controlled) testing single and multiple ascending doses in humans. Results pending.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Current Status:</strong> Strong preclinical data with robust mechanism. Early-stage human clinical trials underway. Widely used off-label for metabolic health and performance enhancement.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Safety Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Excellent Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      MOTS-c is a naturally occurring mitochondrial peptide with excellent safety in animal studies. No significant adverse effects reported in preclinical research or anecdotal human use.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild injection site reactions (rare)</li>
                      <li>• Temporary flushing (uncommon)</li>
                      <li>• Increased energy (desired effect)</li>
                    </ul>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                      Note: Side effects are minimal. Most users report only positive effects.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pregnancy and breastfeeding (no data)</li>
                      <li>• Children and adolescents (no pediatric data)</li>
                      <li>• Hypoglycemia risk (monitor if on diabetes medications)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Drug Interactions</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      May enhance effects of diabetes medications (metformin, insulin). Monitor blood glucose if combining. May synergize with other metabolic peptides or supplements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Monitoring</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Consider monitoring:
                    </p>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 mt-2">
                      <li>• Fasting glucose and insulin (baseline and follow-up)</li>
                      <li>• HbA1c (if diabetic or prediabetic)</li>
                      <li>• Body composition changes</li>
                      <li>• Exercise performance metrics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle>Related Metabolic Peptides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-1">Semaglutide</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">GLP-1 agonist for weight loss and diabetes</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-1">AOD-9604</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Fat-burning peptide fragment</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-1">Tesamorelin</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Growth hormone for visceral fat reduction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="bg-slate-900 text-white py-12 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400">© 2024 DrsPeptides Education Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
