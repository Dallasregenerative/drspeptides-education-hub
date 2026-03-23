import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Beaker, Brain, Heart } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideLarazotide() {
  usePageTitle("Larazotide - Gut Barrier Peptide", {
    description: "Comprehensive guide to Larazotide (AT-1001) for celiac disease, leaky gut, and tight junction regulation. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Larazotide</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Gut Barrier Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Immune</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Larazotide?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Larazotide acetate (AT-1001) is a synthetic octapeptide that acts as a tight junction regulator. It is designed to combat the effects of "leaky gut" by preventing the breakdown of the intestinal barrier. It is the first in a new class of drugs targeting tight junction integrity.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    In conditions like celiac disease, the protein zonulin is overproduced, leading to the opening of tight junctions between intestinal cells. This allows harmful substances like gluten fragments to pass into the bloodstream, triggering an immune response. Larazotide works by blocking this process.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    It has been extensively studied in Phase 3 clinical trials as an adjunct treatment for celiac disease, aiming to reduce symptoms in patients who do not fully respond to a gluten-free diet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Celiac Disease</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces symptoms in patients with persistent gluten exposure.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Leaky Gut Syndrome</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Restores intestinal barrier function and reduces permeability.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Inflammatory Conditions</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">May have potential in other conditions linked to intestinal permeability.</p>
                    </div>
                    <div className="p-4 bg-sky-50 dark:bg-sky-950 rounded-lg">
                      <h4 className="font-semibold text-sky-900 dark:text-sky-100 mb-2">Long COVID</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Being investigated for gastrointestinal symptoms in Long COVID.</p>
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
                      <h4 className="font-semibold mb-2">1. Zonulin Antagonist</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Larazotide is a competitive antagonist of the zonulin receptor. Zonulin is a protein that modulates the permeability of tight junctions between cells of the wall of the digestive tract.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Tight Junction Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">By blocking zonulin, Larazotide prevents the disassembly of tight junctions, particularly the zonula occludens-1 (ZO-1) and occludin proteins, thus keeping the intestinal barrier intact.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Reduces Antigen Trafficking</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">This action prevents undigested gluten fragments and other antigens from crossing the intestinal barrier and triggering an inflammatory immune response in the lamina propria.</p>
                    </div>
                     <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Local Action</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Larazotide is minimally absorbed and acts locally in the lumen of the small intestine, which contributes to its favorable safety profile.</p>
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
                    <h4 className="font-semibold mb-2">Phase 3 Celiac Disease Trials</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Multiple Phase 3 trials have evaluated Larazotide for persistent symptoms in celiac disease. While one trial was discontinued, others showed a statistically significant reduction in symptoms at the 0.5 mg dose.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Gluten Challenge Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Early studies demonstrated that Larazotide prevented an increase in intestinal permeability in celiac patients challenged with gluten, compared to placebo.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Long COVID Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A clinical trial is underway to evaluate the safety and efficacy of Larazotide for treating gastrointestinal symptoms associated with Long COVID in children and adults.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Celiac Disease Adjunct Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 0.5mg - 1mg</li>
                      <li>• Frequency: Three times daily (TID)</li>
                      <li>• Administration: Orally, 15 minutes before meals</li>
                      <li>• Duration: Ongoing, as an adjunct to a gluten-free diet</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Not a substitute for a gluten-free diet.</li>
                      <li>• Minimal systemic absorption.</li>
                      <li>• Store at room temperature.</li>
                      <li>• Most effective when taken before meals.</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Excellent Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Across multiple clinical trials, Larazotide has demonstrated a safety profile comparable to placebo, with no significant adverse effects.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Headache (most common, similar to placebo)</li>
                      <li>• Urinary tract infection (rare)</li>
                      <li>• No evidence of systemic toxicity</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Safety in pregnancy and lactation has not been established.</li>
                      <li>• Use with caution in patients with severe renal impairment.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring Guidelines</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline Assessment</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Celiac disease serology (tTG-IgA)</li>
                      <li>• Celiac Disease Symptom Diary (CDSD) or similar symptom score</li>
                      <li>• Assessment of gluten-free diet adherence</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track gastrointestinal symptoms (bloating, pain, diarrhea)</li>
                      <li>• Monitor for improvement in quality of life scores</li>
                      <li>• Follow-up serology as per standard celiac care</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Symptom improvement may be seen within 2-4 weeks.</li>
                      <li>• Consistent benefits typically observed after 8-12 weeks of treatment.</li>
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
