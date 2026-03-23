import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Zap, Target, FlaskConical, ShieldCheck, Dna } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideMetformin() {
  usePageTitle("Metformin - Anti-Aging Compound", {
    description: "In-depth guide to Metformin for longevity and metabolic optimization, covering mechanisms, research like the TAME trial, and clinical protocols."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link href="/peptides">
          <Button variant="outline" className="mb-4"><ArrowLeft className="w-4 h-4 mr-2" />Back to Peptide Index</Button>
        </Link>
      </div>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl">
              <Dna className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Metformin</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">A Biguanide for Longevity and Metabolic Optimization</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Anti-Aging</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Primary Target</CardDescription><CardTitle className="text-2xl">AMPK</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Metformin?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Metformin is a first-line biguanide medication for the treatment of type 2 diabetes that has been repurposed for its potential anti-aging and metabolic optimization benefits. Its ability to improve insulin sensitivity and influence fundamental cellular aging pathways has made it a focal point of longevity research.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond its glucose-lowering effects, Metformin activates AMP-activated protein kinase (AMPK), a master regulator of metabolism and energy homeostasis. This activation triggers a cascade of downstream effects that mimic caloric restriction, a known longevity intervention. It also inhibits the mammalian target of rapamycin (mTOR) pathway, which is implicated in cellular senescence and aging.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The landmark Targeting Aging with Metformin (TAME) trial is currently investigating whether Metformin can delay the onset of age-related diseases in non-diabetic individuals, potentially providing the first FDA-approved indication for an anti-aging drug.
                  </p>
                </CardContent>
              </Card>
              <PeptideCTA />
            </TabsContent>

            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Mechanism of Action</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center"><Zap className="w-5 h-5 mr-2 text-yellow-500" />AMPK Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Metformin's primary mechanism is the activation of AMP-activated protein kinase (AMPK). It achieves this by mildly inhibiting Complex I of the mitochondrial respiratory chain, which increases the cellular AMP:ATP ratio. Activated AMPK then works to restore energy balance by stimulating catabolic processes (like glucose uptake and fatty acid oxidation) and inhibiting anabolic processes (like protein synthesis and gluconeogenesis).</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center"><Target className="w-5 h-5 mr-2 text-red-500" />mTOR Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Metformin inhibits the mTORC1 pathway, a central regulator of cell growth, proliferation, and survival. This inhibition occurs both through AMPK-dependent and AMPK-independent mechanisms. By downregulating mTOR, Metformin promotes autophagy (the cellular process of cleaning out damaged components) and reduces cellular senescence, key factors in the aging process.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center"><Dna className="w-5 h-5 mr-2 text-blue-500" />Cancer Risk Reduction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Research suggests Metformin may reduce the risk of certain cancers. This is attributed to its ability to inhibit mTOR, reduce insulin levels (a growth factor for many tumors), and activate AMPK, which can suppress tumor cell growth and proliferation.</p>
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
                    <h4 className="font-semibold mb-2 flex items-center"><FlaskConical className="w-5 h-5 mr-2 text-green-500" />The TAME (Targeting Aging with Metformin) Trial</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">The TAME trial is a groundbreaking, large-scale clinical study designed to test the hypothesis that Metformin can delay the development or progression of major age-related chronic diseases—such as cardiovascular disease, cancer, and cognitive decline—in non-diabetic individuals. Its results could pave the way for a new 'geroprotective' class of drugs.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Anti-Aging Applications Beyond Diabetes</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Observational studies in diabetic populations have shown that Metformin users have lower all-cause mortality and a reduced incidence of age-related diseases compared to non-diabetics. This has spurred significant interest in its 'off-label' use for longevity and healthspan extension in the general population.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Combination with Peptide Therapies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Metformin's metabolic benefits can be synergistic with various peptide therapies. For example, when combined with GLP-1 agonists like Semaglutide, it can enhance glycemic control and weight loss. Its systemic anti-inflammatory and pro-autophagy effects may also complement the regenerative actions of peptides like BPC-157 and GHK-Cu.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Longevity & Metabolic Optimization (Oral)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Starting Dose: 500 mg once daily with the evening meal.</li>
                      <li>• Titration: Increase by 500 mg every 1-2 weeks as tolerated, based on GI side effects.</li>
                      <li>• Target Dose: 1500-2000 mg per day, typically divided into two doses (e.g., 1000 mg with breakfast and 1000 mg with dinner).</li>
                      <li>• Formulation: Extended-release (ER) is often preferred to minimize gastrointestinal side effects.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Take with food to reduce gastrointestinal upset.</li>
                      <li>• Monitor kidney function (eGFR) and Vitamin B12 levels periodically.</li>
                      <li>• Consider dose reduction or cessation in individuals with declining renal function.</li>
                      <li>• The use of Metformin for anti-aging is not yet an FDA-approved indication and should be discussed with a qualified healthcare provider.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety & Side Effects</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center"><ShieldCheck className="w-5 h-5 mr-2" />Gastrointestinal Side Effects</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">The most common side effects are gastrointestinal, including diarrhea, nausea, and abdominal discomfort. These are often transient and can be managed by starting with a low dose, titrating slowly, and taking the medication with meals. Using the extended-release (ER) formulation can also significantly improve tolerability.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Lactic Acidosis</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">A rare but serious risk, lactic acidosis is most likely to occur in patients with significant renal impairment, liver disease, or acute illness. It is a contraindication in patients with an eGFR &lt; 30 mL/min/1.73m².</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Vitamin B12 Deficiency</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Long-term use of Metformin can interfere with Vitamin B12 absorption. Regular monitoring of B12 levels is recommended, with supplementation as needed.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="flex justify-between items-center mt-8">
            <SourcePeptidesButton />
            <PrintButton />
          </div>
        </div>
      </section>
    </div>
  );
}
