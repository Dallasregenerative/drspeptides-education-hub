import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Activity, Shield, Beaker, FileText, Clock } from "lucide-react";

export default function Epitalon() {
  return (
    <>
      <Helmet>
        <title>Epitalon: Telomerase Activator & Longevity Peptide | DrsPeptides</title>
        <meta name="description" content="Comprehensive guide to Epitalon (Epithalon): telomerase activation, anti-aging mechanisms, dosing protocols, clinical research, and longevity applications." />
        <meta name="keywords" content="epitalon, epithalon, telomerase, longevity peptide, anti-aging, telomere length, pineal peptide" />
        <link rel="canonical" href="https://education.drspeptides.com/peptides/epitalon" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <Navigation />

        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="default" className="bg-purple-600">Longevity</Badge>
              <Badge variant="outline">Anti-Aging</Badge>
              <Badge variant="outline">Telomerase Activator</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Epitalon (Epithalon)
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Synthetic tetrapeptide that activates telomerase, extends telomere length, and promotes cellular longevity.
            </p>
          </div>

          {/* Quick Facts */}
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Quick Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Sequence:</strong> Ala-Glu-Asp-Gly (AEDG)
                </div>
                <div>
                  <strong>Molecular Weight:</strong> 390.35 g/mol
                </div>
                <div>
                  <strong>Half-Life:</strong> ~6 hours
                </div>
                <div>
                  <strong>Administration:</strong> Subcutaneous, Intramuscular
                </div>
                <div>
                  <strong>Storage:</strong> Lyophilized: -20°C; Reconstituted: 2-8°C
                </div>
                <div>
                  <strong>Typical Dosage:</strong> 5-10mg per day for 10-20 days
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
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
                  <CardTitle>What is Epitalon?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Epitalon</strong> (also spelled Epithalon) is a synthetic tetrapeptide consisting of four amino acids: Alanine-Glutamic Acid-Aspartic Acid-Glycine (AEDG). It was developed by Russian scientist Professor Vladimir Khavinson based on the naturally occurring pineal peptide epithalamin.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Epitalon is primarily known for its ability to <strong>activate telomerase</strong>, the enzyme responsible for maintaining and extending telomeres—the protective caps at the ends of chromosomes. Telomere shortening is associated with cellular aging, and Epitalon's ability to extend telomere length has positioned it as a leading longevity peptide.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>✓ Activates telomerase enzyme</li>
                      <li>✓ Extends telomere length in human cells</li>
                      <li>✓ Regulates circadian rhythm and melatonin production</li>
                      <li>✓ Demonstrates anti-aging effects in animal studies</li>
                      <li>✓ May reduce cancer incidence in long-term studies</li>
                      <li>✓ Supports immune system function</li>
                      <li>✓ Protects against oxidative stress</li>
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
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h4 className="font-semibold mb-2">Longevity & Anti-Aging</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Primary application. Used in 1-2 cycles per year to support cellular longevity, telomere maintenance, and healthy aging processes.
                      </p>
                    </div>
                    <div className="border-l-4 border-pink-600 pl-4">
                      <h4 className="font-semibold mb-2">Sleep & Circadian Rhythm</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Regulates pineal gland function and melatonin production, improving sleep quality and circadian rhythm in elderly patients.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold mb-2">Immune Function</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Supports immune system recalibration and may enhance immune response in aging populations.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-semibold mb-2">Cancer Prevention</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Animal studies show reduced cancer incidence with long-term Epitalon administration, though human data is limited.
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
                    <Beaker className="h-5 w-5 text-purple-600" />
                    Mechanism of Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Telomerase Activation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Epitalon induces expression of telomerase enzyme components (hTERT) and increases telomerase activity in human cells. Studies show telomere length increases by 10-30% after Epitalon treatment.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded text-xs">
                      <strong>Research:</strong> Al-Dulaimi et al. (2025) demonstrated Epitalon increased telomere length in human cell lines through telomerase induction.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Epigenetic Regulation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Epitalon interacts with histones (H1, H2b, H3) and may regulate gene expression through site-specific interactions with chromatin, influencing cellular function and longevity pathways.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded text-xs">
                      <strong>Research:</strong> Khavinson et al. (2020) suggested AEDG peptide regulates cell functions through interactions with histone proteins.
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">3. Pineal Gland Regulation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Stimulates melatonin production in elderly adults with pineal gland dysfunction, restoring circadian rhythm and improving sleep quality.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">4. Antioxidant Activity</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Demonstrates antioxidant properties, protecting cells from oxidative stress and supporting cellular resilience against age-related damage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dosing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    Dosing Protocols
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-3">Standard Longevity Protocol</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> 5-10mg per day</p>
                      <p><strong>Duration:</strong> 10-20 days per cycle</p>
                      <p><strong>Frequency:</strong> 1-2 cycles per year (every 6-12 months)</p>
                      <p><strong>Administration:</strong> Subcutaneous or intramuscular injection</p>
                      <p><strong>Timing:</strong> Divided into 2 doses (morning and evening) or single daily dose</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-3">Intensive Protocol</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> 10mg per day</p>
                      <p><strong>Duration:</strong> 20 days</p>
                      <p><strong>Frequency:</strong> 2 cycles per year</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        Note: Some Russian studies used this protocol annually for up to 12 years in elderly patients with good safety profile.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-3">Maintenance Protocol</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Dosage:</strong> 5mg per day</p>
                      <p><strong>Duration:</strong> 10 days</p>
                      <p><strong>Frequency:</strong> Every 6 months</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        Note: Lower dose for maintenance of benefits achieved with initial cycles.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-4 py-2">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Important:</strong> Epitalon is typically used in cycles rather than continuously. The intermittent approach maintains benefits without constant administration.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reconstitution & Storage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <strong>Reconstitution:</strong> Add 2ml bacteriostatic water to 10mg vial = 5mg/ml concentration
                  </div>
                  <div>
                    <strong>Lyophilized Storage:</strong> -20°C (freezer) for 2-3 years
                  </div>
                  <div>
                    <strong>Reconstituted Storage:</strong> 2-8°C (refrigerator) for up to 30 days
                  </div>
                  <div>
                    <strong>Protection:</strong> Keep away from light, store in original packaging
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Clinical Research & Studies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Telomere Length Extension (2025)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Al-Dulaimi et al. demonstrated Epitalon increased telomere length in human cell lines through induction of telomerase enzyme activity.
                    </p>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12411320/" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Epigenetic Regulation (2020)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Khavinson et al. found AEDG peptide stimulates gene expression through site-specific interactions with histone proteins H1, H2b, and H3.
                    </p>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7037223/" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Cancer Prevention in Animals (2002)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Anisimov et al. demonstrated inhibitory effect of Epitalon on colon carcinogenesis in animal models.
                    </p>
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304383502000903" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                    <h4 className="font-semibold mb-2">Melatonin Regulation (2004)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Korkushko et al. showed Epithalamin (precursor to Epitalon) stimulates melatonin production in elderly adults with pineal gland dysfunction.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Antioxidant Effects (2025)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Gatta et al. demonstrated antioxidant tetrapeptide Epitalon enhances delayed wound healing and cellular protection.
                    </p>
                    <a href="https://link.springer.com/article/10.1007/s12015-025-10911-x" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline flex items-center gap-1">
                      View Study <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Research Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Epitalon has been studied extensively in Russia since the 1980s, with over 40 years of research. While human clinical trials are limited in Western literature, Russian studies demonstrate consistent safety and efficacy in elderly populations over long-term use (up to 12 years).
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Current Status:</strong> Mechanistically robust with strong in vitro and animal data. Human clinical data primarily from Russian studies. Positioned as a serious contender in longevity protocols but requires more Western clinical validation.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    Safety Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Excellent Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Epitalon has demonstrated excellent safety in both animal studies and human use over 40+ years. Russian studies show safe use in elderly patients for up to 12 years with annual cycles.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Common Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Mild injection site reactions (rare)</li>
                      <li>• Temporary drowsiness (first few days)</li>
                      <li>• Vivid dreams (due to melatonin regulation)</li>
                    </ul>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                      Note: Side effects are minimal and typically resolve within first week of use.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pregnancy and breastfeeding (no data available)</li>
                      <li>• Active cancer (theoretical concern about telomerase activation)</li>
                      <li>• Children and adolescents (no pediatric data)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Drug Interactions</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      No significant drug interactions reported. May enhance effects of melatonin supplements. Consult healthcare provider if taking immunosuppressants or cancer medications.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Monitoring</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      No specific laboratory monitoring required for healthy individuals. Consider baseline and follow-up assessments of:
                    </p>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 mt-2">
                      <li>• Sleep quality and circadian rhythm</li>
                      <li>• Subjective well-being and energy levels</li>
                      <li>• Immune function markers (optional)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Content */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle>Related Longevity Peptides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-1">MOTS-c</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Mitochondrial-derived peptide for metabolic health</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-1">Thymosin Alpha-1</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Immune system optimization and longevity</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-1">GHK-Cu</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Tissue repair and anti-aging copper peptide</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
