import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Beaker, Heart, TestTubeDiagonal } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideBPC157ArginateSalt() {
  usePageTitle("BPC-157 Arginate Salt - Advanced Gut Healing", {
    description: "Explore the stabilized arginine salt form of BPC-157, its enhanced oral bioavailability, and its applications for gastrointestinal healing and tissue regeneration."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link href="/peptides">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Peptide Index
          </Button>
        </Link>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">BPC-157 Arginate Salt</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Stabilized Regenerative Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Regenerative</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Primary Use</CardDescription><CardTitle className="text-2xl">Gut Health</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral/Injectable</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is BPC-157 Arginate Salt?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    BPC-157 Arginate Salt is an advanced, stabilized form of the regenerative peptide BPC-157. This formulation pairs the 15-amino-acid peptide with an arginine salt, which significantly enhances its stability, particularly in the harsh acidic environment of the stomach.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    This improved stability makes the arginate form far superior for oral administration compared to the standard acetate salt, leading to greater bioavailability and more effective systemic delivery for healing. It is renowned for its potent cytoprotective and organo-protective effects, especially within the gastrointestinal tract.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Clinicians utilize BPC-157 Arginate for a wide range of applications, including healing gut inflammation, repairing tissue damage, reducing pain, and accelerating recovery from injuries.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Gastrointestinal Healing</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Addresses conditions like IBD, leaky gut syndrome, and ulcers.</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Tissue Regeneration</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Accelerates repair of muscles, tendons, ligaments, and bone.</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Anti-Inflammatory Effects</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Modulates inflammatory pathways to reduce systemic inflammation.</p>
                    </div>
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Enhanced Oral Bioavailability</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Superior stability allows for effective oral use, unlike the acetate form.</p>
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
                      <h4 className="font-semibold mb-2">1. Arginine Salt Stabilization</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The key innovation of this form is the use of an arginine salt as a stabilizer. Arginine acts as a buffer, protecting the BPC-157 peptide from rapid degradation by gastric acid. Research indicates that while the acetate form degrades by nearly 60% in 30 minutes at a pH of 3.0, the arginate form degrades by less than 2%. This preserves the peptide's integrity for absorption in the intestines.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Angiogenesis and VEGF Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">BPC-157 upregulates Vascular Endothelial Growth Factor (VEGF), a key signaling protein that promotes the formation of new blood vessels (angiogenesis). This enhanced blood supply is critical for delivering nutrients and oxygen to damaged tissues, accelerating the healing process.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Growth Hormone Receptor Upregulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The peptide has been shown to increase the expression of growth hormone receptors on cells, making tissues more responsive to the body's natural repair signals and enhancing the anabolic effects of growth hormone.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Nitric Oxide (NO) Pathway Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">BPC-157 influences the nitric oxide system, which plays a crucial role in vasodilation, blood flow, and cytoprotection. This helps protect endothelial tissues and maintain gut integrity, counteracting the effects of agents that cause gut lining damage.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Clinical Research & Evidence</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Superior Stability (Oral vs. Injectable)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">The primary advantage of the arginate salt is its stability in gastric acid, making it the preferred form for oral administration. While injectable BPC-157 (typically acetate) offers direct systemic delivery, oral arginate provides a non-invasive method to achieve systemic healing, with a particular emphasis on the GI tract. Studies by the original patent holder, Diagen, confirm the arginate form's superior resistance to degradation.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Gastrointestinal Conditions (IBD, Leaky Gut)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A large body of preclinical research demonstrates BPC-157's efficacy in healing various GI tract issues. It has been shown to protect the gut lining from NSAID-induced damage, reduce inflammation in models of Inflammatory Bowel Disease (IBD), and improve the integrity of the gut barrier, making it a promising therapy for "leaky gut" syndrome.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Tendon, Ligament, and Muscle Repair</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Extensive animal studies have shown that BPC-157 significantly accelerates the healing of transected Achilles tendons, crushed muscles, and damaged ligaments. It promotes collagen synthesis and cellular regeneration at the site of injury, leading to faster and more robust recovery.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Oral Administration Protocol (Arginate Salt)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                      <li><strong>Dose:</strong> 500 mcg to 1 mg per day.</li>
                      <li><strong>Frequency:</strong> Can be taken once daily or split into two doses (e.g., 250-500 mcg twice daily).</li>
                      <li><strong>Administration:</strong> Taken on an empty stomach for optimal absorption.</li>
                      <li><strong>Use Case:</strong> Primarily for gastrointestinal issues, systemic inflammation, and general wellness.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Injectable Protocol (Subcutaneous)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                      <li><strong>Dose:</strong> 250 mcg to 500 mcg per day.</li>
                      <li><strong>Frequency:</strong> Once daily injection.</li>
                      <li><strong>Administration:</strong> Injected subcutaneously near the site of injury for localized repair, or in the abdomen for systemic effects.</li>
                      <li><strong>Use Case:</strong> Targeted treatment for musculoskeletal injuries (tendons, muscles) and acute trauma.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Clinical Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                      <li>Protocols should be tailored to the individual's condition, weight, and clinical response.</li>
                      <li>The choice between oral and injectable routes depends on the primary therapeutic goal (gut health vs. localized injury).</li>
                      <li>Cycling strategies (e.g., 5 days on, 2 days off, or 4-6 week cycles) are common to maintain sensitivity.</li>
                      <li>Always ensure the use of high-purity, third-party tested peptides from a reliable source.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety & Contraindications</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">High Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">BPC-157 is derived from a naturally occurring peptide in human gastric juice and has demonstrated a very high safety profile in preclinical studies with no significant adverse effects reported at therapeutic doses.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Potential Side Effects</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Side effects are rare and typically mild. They may include dizziness, fatigue, or changes in bowel habits as the gut microbiome adjusts. Injection site reactions (redness, itching) can occur with subcutaneous administration.</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Contraindications & Precautions</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                      <li><strong>Cancer:</strong> Due to its angiogenic properties (promoting new blood vessel growth), there is a theoretical risk associated with active cancer. It is contraindicated in patients with a history of or active cancer.</li>
                      <li><strong>Pregnancy and Lactation:</strong> BPC-157 has not been studied in pregnant or breastfeeding women and should be avoided.</li>
                      <li><strong>Drug Interactions:</strong> Caution is advised when using with blood pressure medications or anticoagulants due to its effects on the vascular system.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <PeptideCTA />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <PrintButton />
            <SourcePeptidesButton />
          </div>

        </div>
      </section>
    </div>
  );
}