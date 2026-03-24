import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Zap, Dna, Microscope, FlaskConical, Heart , BookOpen , Stethoscope , Sparkles , AlertTriangle } from "lucide-react";
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
<Card className="mb-8">
  <CardHeader>
    <BookOpen className="h-6 w-6 mr-2 inline" />
    <CardTitle>Scientific References</CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Trammell SAJ et al. (2016). Nicotinamide riboside is uniquely and orally bioavailable in mice and humans. Nat Commun. Demonstrated oral bioavailability and NAD+ boosting in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26853935/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Martens CR et al. (2018). Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults. Nat Commun. Showed safety and NAD+ elevation in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29636481/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Diguet N et al. (2018). Nicotinamide riboside preserves cardiac function in a mouse model of dilated cardiomyopathy. Circulation. Demonstrated cardioprotective effects via mitochondrial function.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29581299/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Yoshino J et al. (2021). Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science. Showed improved insulin sensitivity with NAD+ precursors.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/33598112/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Elhassan YS et al. (2019). Nicotinamide riboside augments the aged human skeletal muscle NAD+ metabolome and induces transcriptomic and anti-inflammatory signatures. Cell Rep. Demonstrated anti-inflammatory effects in aged muscle.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31221791/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Zhang H et al. (2016). NAD+ repletion improves mitochondrial and stem cell function and enhances life span in mice. Science. Showed lifespan extension and mitochondrial benefits in mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26912823/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Airhart SE et al. (2017). An open-label, non-randomized study of the pharmacokinetics of the nutritional supplement nicotinamide riboside (NR) and its effects on blood NAD+ levels in healthy volunteers. PLoS One. Pharmacokinetics and NAD+ elevation data in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/28257425/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Trammell SAJ et al. (2016). NAD+ metabolism and the control of energy homeostasis: a balancing act between mitochondria and the nucleus. Cell Metab. Review of NAD+ metabolism and NR's role.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/26996072/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Canto C et al. (2012). The NAD+ precursor nicotinamide riboside enhances oxidative metabolism and protects against high-fat diet-induced obesity. Cell Metab. Demonstrated metabolic benefits in mice.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22225866/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
      <li>
        Conze D et al. (2019). Safety and Metabolism of Long-term Administration of NIAGEN (Nicotinamide Riboside Chloride) in a Randomized, Double-Blind, Placebo-controlled Clinical Trial of Healthy Overweight Adults. Sci Rep. Long-term safety data in humans.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30833792/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <Stethoscope className="h-6 w-6 mr-2 inline" />
    <CardTitle>Monitoring &amp; Lab Recommendations</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
    <p>
      When initiating Nicotinamide Riboside supplementation, baseline and periodic monitoring can help assess efficacy and safety, especially in clinical or research settings.
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Baseline Labs:</strong> Complete blood count (CBC), liver function tests (ALT, AST), kidney function (creatinine, BUN), fasting glucose and insulin, lipid panel, and inflammatory markers (CRP).
      </li>
      <li>
        <strong>NAD+ Levels:</strong> Measurement of NAD+ or NAD metabolites in blood or PBMCs can be done in specialized labs to confirm NAD+ elevation.
      </li>
      <li>
        <strong>Follow-up Schedule:</strong> Repeat labs at 4 weeks, 8 weeks, and 12 weeks after starting NR to monitor biochemical changes and detect any adverse effects.
      </li>
      <li>
        <strong>Specific Biomarkers:</strong> Consider monitoring markers of mitochondrial function (e.g., lactate), oxidative stress (e.g., malondialdehyde), and metabolic health (HOMA-IR for insulin resistance).
      </li>
      <li>
        <strong>Clinical Monitoring:</strong> Monitor blood pressure, heart rate, and any reported side effects such as gastrointestinal discomfort or headaches.
      </li>
    </ul>
    <p>
      Always consult healthcare providers before starting supplementation, especially in patients with chronic conditions or those on multiple medications.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <Sparkles className="h-6 w-6 mr-2 inline" />
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
    <p>
      Nicotinamide Riboside (NR) can be combined with other compounds to enhance its effects on cellular energy, longevity, and metabolic health:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Pterostilbene:</strong> A polyphenol that activates sirtuins synergistically with NR, enhancing mitochondrial biogenesis and antioxidant defenses.
      </li>
      <li>
        <strong>Resveratrol:</strong> Another sirtuin activator that may complement NR by promoting similar longevity pathways.
      </li>
      <li>
        <strong>Metformin:</strong> An AMPK activator that works through complementary metabolic pathways; combined use may target multiple aging mechanisms.
      </li>
      <li>
        <strong>Coenzyme Q10:</strong> Supports mitochondrial electron transport chain function, potentially enhancing NR’s effects on energy production.
      </li>
      <li>
        <strong>Alpha-Lipoic Acid:</strong> An antioxidant that may reduce oxidative stress alongside NR’s mitochondrial benefits.
      </li>
      <li>
        <strong>NMN (Nicotinamide Mononucleotide):</strong> Another NAD+ precursor; some protocols alternate or combine NR and NMN for sustained NAD+ support.
      </li>
    </ul>
    <p>
      Combining these compounds should be done cautiously and ideally under medical supervision to monitor for interactions and optimize dosing.
    </p>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <AlertTriangle className="h-6 w-6 mr-2 inline" />
    <CardTitle>Drug Interactions</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
    <p>
      While Nicotinamide Riboside is generally well tolerated, potential interactions with medications should be considered:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Chemotherapy Agents:</strong> Theoretical concern that increasing NAD+ may support cancer cell metabolism; patients undergoing chemotherapy should consult oncologists before use.
      </li>
      <li>
        <strong>Immunosuppressants:</strong> NAD+ modulation may affect immune function; caution advised when combined with immunosuppressive drugs.
      </li>
      <li>
        <strong>Antidiabetic Medications:</strong> NR may improve insulin sensitivity; dose adjustments of hypoglycemic agents might be necessary to avoid hypoglycemia.
      </li>
      <li>
        <strong>Blood Pressure Medications:</strong> NR can modestly lower blood pressure; monitoring is recommended to avoid hypotension.
      </li>
      <li>
        <strong>Other NAD+ Precursors or Sirtuin Activators:</strong> Combining with high doses of niacin, nicotinamide, or potent sirtuin activators may increase risk of side effects.
      </li>
    </ul>
    <p>
      Always inform healthcare providers about NR supplementation to appropriately manage potential interactions.
    </p>
  </CardContent>
</Card>


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