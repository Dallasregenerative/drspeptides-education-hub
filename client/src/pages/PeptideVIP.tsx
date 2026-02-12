import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideVIP() {
  usePageTitle("VIP - Vasoactive Intestinal Peptide", {
    description: "Comprehensive guide to VIP for immune modulation, CIRS treatment, and neuroprotection. Mechanisms, dosing, and clinical applications."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
          </div>
          <div className="flex items-center gap-2">
          <Link href="/"><Button variant="ghost" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
            <PrintButton title="V I P - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        
          </div></div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">VIP</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Vasoactive Intestinal Peptide</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Immune/Regulatory</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">3,000+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Intranasal/SC</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is VIP?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Vasoactive Intestinal Peptide (VIP) is a 28-amino acid neuropeptide that functions as a neurotransmitter and neuromodulator throughout the body. Despite its name, VIP has effects far beyond the intestines, playing crucial roles in immune regulation, neuroprotection, and circadian rhythm maintenance.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    VIP has gained significant attention in the treatment of Chronic Inflammatory Response Syndrome (CIRS), a multi-system illness often triggered by biotoxin exposure (mold, Lyme disease). Dr. Ritchie Shoemaker's research has established VIP as a key therapeutic in the CIRS treatment protocol.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    VIP deficiency is common in CIRS patients and contributes to symptoms including fatigue, cognitive dysfunction, and inflammatory dysregulation. Replacement therapy can restore immune balance and improve quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">CIRS Treatment</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Key therapy for mold illness and biotoxin-related conditions</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Immune Modulation</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Balances Th1/Th2 response and reduces inflammation</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects neurons and supports cognitive function</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Pulmonary Function</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Bronchodilation and pulmonary artery pressure regulation</p>
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
                      <h4 className="font-semibold mb-2">1. VPAC Receptor Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">VIP binds to VPAC1 and VPAC2 receptors, activating cAMP signaling pathways that modulate immune cell function and reduce inflammation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Regulatory T Cell Induction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes the generation of regulatory T cells (Tregs) that suppress excessive immune responses and maintain tolerance.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Cytokine Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces pro-inflammatory cytokines (TNF-α, IL-6, IL-12) while promoting anti-inflammatory mediators (IL-10).</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Circadian Regulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">VIP is essential for synchronizing the suprachiasmatic nucleus, the brain's master clock, affecting sleep-wake cycles.</p>
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
                    <h4 className="font-semibold mb-2">CIRS Studies (Shoemaker Protocol)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research demonstrates VIP nasal spray improves symptoms, normalizes inflammatory markers, and restores quality of life in CIRS patients who have completed prior treatment steps.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Pulmonary Hypertension</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies show VIP reduces pulmonary artery pressure and improves exercise capacity in pulmonary arterial hypertension patients.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Autoimmune Conditions</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Animal and early human studies suggest VIP may benefit rheumatoid arthritis, multiple sclerosis, and other autoimmune conditions through immune modulation.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">CIRS Protocol (Shoemaker)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 50mcg per spray</li>
                      <li>• Frequency: 4 sprays, 4 times daily</li>
                      <li>• Total: 800mcg daily</li>
                      <li>• Duration: 1-3 months minimum</li>
                      <li>• Prerequisites: Complete prior CIRS steps first</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">General Immune Support</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 50-100mcg per administration</li>
                      <li>• Frequency: 2-4 times daily</li>
                      <li>• Route: Intranasal or subcutaneous</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Must pass VCS test before starting (CIRS)</li>
                      <li>• MARCoNS must be treated first</li>
                      <li>• Requires compounding pharmacy</li>
                      <li>• Store refrigerated</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">VIP is an endogenous peptide with a good safety profile when used appropriately. Most patients tolerate it well.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Nasal congestion or irritation</li>
                      <li>• Headache</li>
                      <li>• Flushing</li>
                      <li>• Diarrhea (high doses)</li>
                      <li>• Hypotension (rare)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Active MARCoNS infection (treat first)</li>
                      <li>• Untreated mold exposure (remove from environment)</li>
                      <li>• Pregnancy (insufficient data)</li>
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
                    <h4 className="font-semibold mb-2">Baseline Assessment (CIRS)</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• VCS (Visual Contrast Sensitivity) test</li>
                      <li>• MARCoNS nasal culture</li>
                      <li>• Inflammatory markers (C4a, TGF-β1, MMP-9)</li>
                      <li>• MSH, VIP levels</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Repeat VCS testing</li>
                      <li>• Track symptom improvement</li>
                      <li>• Monitor inflammatory markers</li>
                      <li>• Lipase levels (pancreatic safety)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Initial improvement: 1-2 weeks</li>
                      <li>• Significant benefits: 1-3 months</li>
                      <li>• Full protocol: 3-6 months</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
