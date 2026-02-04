import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNAC() {
  usePageTitle("NAC - N-Acetyl Cysteine", {
    description: "Comprehensive guide to NAC for glutathione support, respiratory health, and detoxification. Mechanisms, dosing, and clinical applications."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Microscope className="h-8 w-8 text-teal-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
          </div>
          <Link href="/"><Button variant="ghost" className="gap-2"><ArrowLeft className="h-4 w-4" />Back to Home</Button></Link>
            <PrintButton title="N A C - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">NAC</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">N-Acetyl Cysteine - Master Antioxidant Precursor</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Immune/Antioxidant</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">5,000+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral/IV</CardTitle></CardHeader></Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>What is NAC?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    N-Acetyl Cysteine (NAC) is the acetylated form of the amino acid L-cysteine. It serves as a precursor to glutathione, the body's master antioxidant, and has been used medically for over 50 years, initially as a mucolytic agent and acetaminophen overdose antidote.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    NAC's ability to replenish glutathione makes it invaluable for detoxification, immune function, and protection against oxidative stress. It also has direct antioxidant properties through its thiol group and can modulate glutamate neurotransmission.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond its traditional uses, NAC has shown promise in mental health conditions, respiratory diseases, fertility, and as an adjunct in various chronic conditions where oxidative stress plays a role.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                      <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Glutathione Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Primary precursor for cellular glutathione synthesis</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Respiratory Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Mucolytic action and lung protection</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Detoxification</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Supports liver function and toxin elimination</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Mental Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Glutamate modulation for OCD, addiction, and mood</p>
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
                      <h4 className="font-semibold mb-2">1. Glutathione Precursor</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Provides cysteine, the rate-limiting amino acid for glutathione synthesis, boosting cellular antioxidant capacity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Direct Antioxidant</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The thiol (-SH) group directly scavenges free radicals and reactive oxygen species.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Mucolytic Action</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Breaks disulfide bonds in mucus glycoproteins, reducing mucus viscosity and improving clearance.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Glutamate Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Regulates glutamate homeostasis through the cystine-glutamate antiporter, relevant to addiction and OCD.</p>
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
                    <h4 className="font-semibold mb-2">Acetaminophen Overdose</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">NAC is the standard of care for acetaminophen toxicity, with IV administration preventing liver failure when given within 8-10 hours of overdose.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Respiratory Conditions</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Meta-analyses show NAC reduces exacerbations in COPD patients and improves symptoms in chronic bronchitis.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mental Health</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Studies demonstrate benefits in OCD, trichotillomania, addiction, and as adjunctive therapy in bipolar disorder and schizophrenia.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Fertility</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Research shows improved outcomes in PCOS, endometriosis, and male factor infertility through antioxidant mechanisms.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">General Antioxidant Support</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 600-1800mg daily</li>
                      <li>• Frequency: Divided into 2-3 doses</li>
                      <li>• Duration: Ongoing</li>
                      <li>• Take on empty stomach for best absorption</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Respiratory Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 600mg twice daily</li>
                      <li>• Or 1200mg once daily (sustained release)</li>
                      <li>• Duration: Long-term for COPD</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Mental Health Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 1200-2400mg daily</li>
                      <li>• Divided doses</li>
                      <li>• Allow 8-12 weeks for full effect</li>
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
                    <p className="text-sm text-slate-700 dark:text-slate-300">NAC has been used safely for over 50 years with extensive clinical experience. Generally well-tolerated at recommended doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• GI upset (nausea, diarrhea)</li>
                      <li>• Sulfur odor (breath, urine)</li>
                      <li>• Headache</li>
                      <li>• Rare: anaphylactoid reactions (IV)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• May increase bleeding risk (caution with anticoagulants)</li>
                      <li>• Asthma: May cause bronchospasm (rare)</li>
                      <li>• Avoid with nitroglycerin (potentiates effects)</li>
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
                      <li>• Glutathione levels (if available)</li>
                      <li>• Liver function tests</li>
                      <li>• Oxidative stress markers</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Track respiratory symptoms (if applicable)</li>
                      <li>• Monitor mental health symptoms</li>
                      <li>• Assess energy and wellbeing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected Timeline</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Mucolytic effects: Days</li>
                      <li>• Antioxidant benefits: 1-2 weeks</li>
                      <li>• Mental health effects: 8-12 weeks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="border-t bg-slate-50 dark:bg-slate-900 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Peptide Education Hub. For educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}
