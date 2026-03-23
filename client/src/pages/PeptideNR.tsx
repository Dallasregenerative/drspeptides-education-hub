import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Zap, Dna, Microscope, FlaskConical, Heart } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideNR() {
  usePageTitle("NR (Nicotinamide Riboside) - NAD+ Precursor", {
    description: "In-depth guide on Nicotinamide Riboside (NR), a NAD+ precursor for cellular energy, longevity, and anti-aging. Explore mechanisms, research, and protocols."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/peptides">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">NR (Nicotinamide Riboside)</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">A NAD+ precursor vitamin B3 derivative for cellular energy and longevity.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Anti-Aging</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">500+</CardTitle></CardHeader></Card>
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
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>What is Nicotinamide Riboside (NR)?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Nicotinamide Riboside (NR) is a pyridine-nucleoside form of vitamin B3 that functions as a precursor to nicotinamide adenine dinucleotide (NAD+). NAD+ is an essential coenzyme found in all living cells, playing a critical role in energy metabolism and cellular signaling.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    As organisms age, NAD+ levels decline, which is linked to a wide range of age-related diseases. Supplementing with NAD+ precursors like NR has emerged as a promising strategy to boost NAD+ levels, thereby promoting cellular health, energy production, and longevity.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    NR is orally bioavailable and has been shown to effectively increase NAD+ levels in humans. It is being extensively studied for its potential to mitigate age-related physiological decline and improve overall healthspan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Cellular Energy</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Boosts NAD+ levels to enhance mitochondrial ATP production.</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Longevity & Anti-Aging</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Activates sirtuins and other longevity-associated pathways.</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Cardiovascular Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Supports endothelial function and protects against oxidative stress.</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Metabolic Function</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves insulin sensitivity and metabolic health in preclinical models.</p>
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
                      <h4 className="font-semibold mb-2">1. NAD+ Biosynthesis Pathway</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NR is converted to nicotinamide mononucleotide (NMN) by nicotinamide riboside kinases (NRKs). NMN is then converted to NAD+ by NMN adenylyltransferases (NMNATs). This salvage pathway is a highly efficient route for NAD+ production.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Sirtuin Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Sirtuins are a class of NAD+-dependent deacetylases that regulate cellular health and longevity. By increasing NAD+ availability, NR enhances sirtuin activity, particularly SIRT1 and SIRT3, which are crucial for mitochondrial function, DNA repair, and inflammation control.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Mitochondrial Function</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NAD+ is essential for the mitochondrial electron transport chain and ATP production. By replenishing NAD+ pools, NR supports robust mitochondrial function, enhances cellular energy, and reduces oxidative stress.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Comparison with NMN</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Both NR and NMN are effective NAD+ precursors. While NMN is one step closer to NAD+ in the salvage pathway, some research suggests that NMN must be converted to NR to enter the cell, where it is then converted back to NMN. The debate on which precursor is superior is ongoing, but both have demonstrated efficacy in raising NAD+ levels.</p>
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
                    <h4 className="font-semibold mb-2">Aging Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Human clinical trials have shown that NR supplementation safely and effectively increases NAD+ levels in a dose-dependent manner. Studies have observed improvements in blood pressure and aortic stiffness in middle-aged and older adults, suggesting benefits for cardiovascular aging.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cardiovascular Benefits</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Preclinical studies demonstrate that NR can protect against heart failure by improving mitochondrial function and reducing oxidative stress. Human studies have shown modest improvements in systolic blood pressure and arterial stiffness, indicating a potential role in cardiovascular health.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Metabolic Health</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">In animal models of obesity and type 2 diabetes, NR has been shown to improve insulin sensitivity and glucose tolerance. Human studies are exploring these effects, with some showing potential benefits for individuals with metabolic syndrome.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">General Anti-Aging & Healthspan Protocol (Oral)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 250 - 1000 mg per day</li>
                      <li>• Frequency: Taken once daily, typically in the morning.</li>
                      <li>• Duration: Long-term use is common for sustained benefits.</li>
                      <li>• Note: Start with a lower dose (250-300mg) and titrate up as needed.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Combination with Other Longevity Compounds</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Pterostilbene: Often combined with NR to enhance sirtuin activation.</li>
                      <li>• Resveratrol: Another sirtuin activator that may work synergistically with NR.</li>
                      <li>• Metformin: May be used alongside NR to target different aging pathways.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Look for products with third-party testing for purity and potency.</li>
                      <li>• Effects are often subtle and accumulate over time.</li>
                      <li>• Consistent daily use is key to maintaining elevated NAD+ levels.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Recognized as Safe (GRAS)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">NR is well-tolerated by most individuals. The FDA has granted GRAS status for NR for use in foods and supplements up to certain doses.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Potential Side Effects</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Side effects are rare and typically mild, including nausea, fatigue, headaches, and stomach discomfort, especially at higher doses.</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Contraindications & Considerations</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">There is a theoretical concern that boosting NAD+ could promote the growth of existing cancer cells. Individuals with active cancer should consult their oncologist before using NR. Long-term effects of sustained NAD+ elevation are still being studied.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

          <div className="mt-12 text-center">
            <PeptideCTA peptideName="NR (Nicotinamide Riboside)" />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <PrintButton />
            <SourcePeptidesButton />
          </div>

        </div>
      </section>
    </div>
  );
}