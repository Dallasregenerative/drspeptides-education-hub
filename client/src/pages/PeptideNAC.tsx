import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideNAC() {
  usePageTitle("NAC - N-Acetyl Cysteine", {
    description: "Comprehensive guide to NAC for glutathione support, respiratory health, and detoxification. Mechanisms, dosing, and clinical applications."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

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
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <BookOpen className="inline mr-2 h-5 w-5 align-text-bottom" />
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Prescott LF et al. (1977). Treatment of paracetamol (acetaminophen) poisoning with N-acetylcysteine. Lancet. Established NAC as an effective antidote for acetaminophen toxicity.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/618617/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        De Flora S et al. (1997). Mechanisms of N-acetylcysteine in the prevention of DNA damage and cancer, with special reference to smoking-related lung cancer. Carcinogenesis. Demonstrated NAC's antioxidant and DNA protective effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/9250143/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Cazzola M et al. (2010). N-acetylcysteine in the management of chronic obstructive pulmonary disease. Expert Opin Pharmacother. Meta-analysis showing NAC reduces COPD exacerbations.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/20423346/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Berk M et al. (2013). N-acetyl cysteine as a glutathione precursor for schizophrenia—a double-blind, randomized, placebo-controlled trial. Biol Psychiatry. Found NAC improved symptoms in schizophrenia.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23623523/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Deepmala et al. (2015). Clinical trials of N-acetylcysteine in psychiatry and neurology: A systematic review. Neurosci Biobehav Rev. Comprehensive review of NAC in neuropsychiatric disorders.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/25446638/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Samuni Y et al. (2013). The chemistry and biological activities of N-acetylcysteine. Biochim Biophys Acta. Detailed review of NAC's antioxidant mechanisms.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23402803/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Zhang M et al. (2018). N-acetylcysteine improves pregnancy outcomes in women with polycystic ovary syndrome: A meta-analysis. Reprod Biol Endocrinol. NAC improves fertility outcomes in PCOS.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29921331/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Dean O et al. (2011). N-acetylcysteine in psychiatry: current therapeutic evidence and potential mechanisms of action. J Psychiatry Neurosci. Summarizes NAC's psychiatric benefits and mechanisms.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21166987/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Millea PJ. (2009). N-acetylcysteine: multiple clinical applications. Am Fam Physician. Overview of NAC uses and safety profile.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19778700/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
      <li>
        Samuni Y et al. (2013). The chemistry and biological activities of N-acetylcysteine. Biochim Biophys Acta. Comprehensive review of NAC's antioxidant and mucolytic properties.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/23402803/" target="_blank" rel="noopener noreferrer" className="underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <Sparkles className="inline mr-2 h-5 w-5 align-text-bottom" />
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Glutathione (reduced form):</strong> Direct supplementation complements NAC's precursor role, enhancing antioxidant capacity.
      </li>
      <li>
        <strong>Alpha-Lipoic Acid:</strong> Regenerates glutathione and other antioxidants, synergizing with NAC for oxidative stress reduction.
      </li>
      <li>
        <strong>Vitamin C & E:</strong> Antioxidants that work alongside NAC to reduce oxidative damage and support immune function.
      </li>
      <li>
        <strong>Magnesium:</strong> Supports enzymatic reactions involved in glutathione synthesis and overall cellular health.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids:</strong> Anti-inflammatory effects complement NAC's antioxidant and mucolytic actions.
      </li>
      <li>
        <strong>Peptides like Thymosin Beta-4:</strong> May enhance tissue repair and immune modulation when combined with NAC.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      <AlertTriangle className="inline mr-2 h-5 w-5 align-text-bottom" />
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Anticoagulants (e.g., Warfarin):</strong> NAC may increase bleeding risk; monitor INR closely.
      </li>
      <li>
        <strong>Nitroglycerin and other nitrates:</strong> NAC can potentiate vasodilatory effects, leading to hypotension or headaches.
      </li>
      <li>
        <strong>Cisplatin:</strong> NAC may reduce nephrotoxicity but could potentially interfere with anticancer efficacy; use cautiously.
      </li>
      <li>
        <strong>Activated Charcoal:</strong> May reduce NAC absorption if taken simultaneously.
      </li>
      <li>
        <strong>Medications metabolized by glutathione-dependent pathways:</strong> NAC may alter metabolism; clinical significance varies.
      </li>
    </ul>
  </CardContent>
</Card>

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
