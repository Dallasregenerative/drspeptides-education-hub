import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrintButton from "@/components/PrintButton";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function PeptideFollistatin() {
  usePageTitle(
    "Follistatin 344: Comprehensive Clinical Guide | Peptide Education Hub",
    "Comprehensive evidence-based guide to Follistatin 344 (FST-344, FS-344, Activin-Binding Protein). Mechanism of action, clinical applications, dosing protocols, safety profile, and research references for healthcare providers.",
    generatePeptideSchema({
      name: "Follistatin 344",
      alternateName: "FST-344, FS-344, Activin-Binding Protein",
      description: "Comprehensive evidence-based guide to Follistatin 344 for healthcare providers.",
      url: "https://pepedhub.com/peptides/follistatin",
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/peptide-index">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Peptide Index
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">Follistatin 344</h1>
                <Badge className="bg-white/20 text-white">Growth Factor, Glycoprotein</Badge>
              </div>
              <p className="text-teal-100 text-lg">Follistatin</p>
              <p className="text-teal-200 text-sm mt-1">Also known as: FST-344, FS-344, Activin-Binding Protein</p>
            </div>
            <div className="flex gap-2">
              <PrintButton />
              <SourcePeptidesButton />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="mechanism" className="flex items-center gap-1">
              <Beaker className="h-4 w-4" />
              Mechanism
            </TabsTrigger>
            <TabsTrigger value="clinical" className="flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              Clinical
            </TabsTrigger>
            <TabsTrigger value="dosing" className="flex items-center gap-1">
              <Syringe className="h-4 w-4" />
              Protocols
            </TabsTrigger>
            <TabsTrigger value="safety" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Safety
            </TabsTrigger>
            <TabsTrigger value="references" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              References
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-teal-600" />
                  Follistatin 344 Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Follistatin 344 is a glycoprotein that functions as a potent antagonist of myostatin, a protein that acts as a negative regulator of muscle growth. By binding to myostatin, Follistatin 344 prevents it from interacting with its receptor, Activin Receptor Type IIB (ActRIIB), on muscle cells. This inhibition of the myostatin signaling pathway leads to an increase in muscle protein synthesis and a decrease in muscle protein breakdown, resulting in muscle hypertrophy (an increase in the size of muscle cells) and hyperplasia (an increase in the number of muscle cells).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Beyond its effects on myostatin, Follistatin 344 also demonstrates muscle-enhancing effects through myostatin-independent pathways. It is known to bind to and inhibit other members of the Transforming Growth Factor-beta (TGF-β) superfamily, such as activin. Activins are involved in a wide array of biological processes, including cell proliferation, differentiation, apoptosis, and metabolism. By neutralizing activin, Follistatin 344 can further contribute to muscle growth and repair.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    The primary isoform of follistatin used in research for muscle enhancement is Follistatin 315 (encoded by the FS344 gene). This isoform is preferred because it specifically targets muscle tissue, with minimal effects on other tissues. This specificity is due to its poor affinity for heparan sulfate proteoglycans on cell surfaces, which limits its systemic activity and potential for off-target effects. This targeted action makes it a promising candidate for therapies aimed at increasing muscle mass and strength in various clinical settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mechanism Tab */}
          <TabsContent value="mechanism">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-teal-600" />
                  Mechanism of Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Follistatin 344 is a glycoprotein that functions as a potent antagonist of myostatin, a protein that acts as a negative regulator of muscle growth. By binding to myostatin, Follistatin 344 prevents it from interacting with its receptor, Activin Receptor Type IIB (ActRIIB), on muscle cells. This inhibition of the myostatin signaling pathway leads to an increase in muscle protein synthesis and a decrease in muscle protein breakdown, resulting in muscle hypertrophy (an increase in the size of muscle cells) and hyperplasia (an increase in the number of muscle cells).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Beyond its effects on myostatin, Follistatin 344 also demonstrates muscle-enhancing effects through myostatin-independent pathways. It is known to bind to and inhibit other members of the Transforming Growth Factor-beta (TGF-β) superfamily, such as activin. Activins are involved in a wide array of biological processes, including cell proliferation, differentiation, apoptosis, and metabolism. By neutralizing activin, Follistatin 344 can further contribute to muscle growth and repair.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    The primary isoform of follistatin used in research for muscle enhancement is Follistatin 315 (encoded by the FS344 gene). This isoform is preferred because it specifically targets muscle tissue, with minimal effects on other tissues. This specificity is due to its poor affinity for heparan sulfate proteoglycans on cell surfaces, which limits its systemic activity and potential for off-target effects. This targeted action makes it a promising candidate for therapies aimed at increasing muscle mass and strength in various clinical settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clinical Applications Tab */}
          <TabsContent value="clinical">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-teal-600" />
                  Clinical Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Muscle Growth</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enhances muscle mass and strength by inhibiting myostatin.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Preventing Muscle Loss</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Potential therapeutic for conditions like Becker muscular dystrophy and sarcopenia.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Baldness</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">May increase hair count and thickness in male-pattern baldness.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Reproductive Health</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Plays a role in folliculogenesis and may have therapeutic potential for reproductive issues.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Arthritis</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Shows anti-inflammatory effects and may reduce cartilage degeneration in joints.</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dosing Protocols Tab */}
          <TabsContent value="dosing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Syringe className="h-5 w-5 text-teal-600" />
                  Dosing Protocols
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-800 dark:text-amber-200">Clinical Supervision Required</p>
                        <p className="text-sm text-amber-700 dark:text-amber-300">All dosing protocols should be administered under the supervision of a qualified healthcare provider.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Typical research dosing protocols for Follistatin 344 involve subcutaneous injections of 100-300 mcg per day. These cycles usually last for 10-30 days, followed by a break of several weeks before resuming.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety Tab */}
          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-teal-600" />
                  Safety Profile & Interactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Safety Profile</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Based on preclinical studies in non-human primates, Follistatin 344 gene therapy (AAV1-FS344) has demonstrated a good safety profile. Long-term expression of the transgene did not result in any significant adverse effects on major organs, nor did it cause any abnormal changes in blood chemistry or hematology. Importantly, it did not lead to cardiac hypertrophy (enlargement of the heart muscle). Furthermore, it did not appear to interfere with the reproductive system, as hormone levels remained within the normal physiological range. Clinical trials in humans with Becker muscular dystrophy have also reported a good safety profile. However, as with any investigational compound, more research is needed to fully establish its long-term safety in humans.
                  </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Drug Interactions</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Follistatin 344 is not known to have direct interactions with pharmaceutical drugs. Its primary interactions are with endogenous proteins. It binds to and neutralizes myostatin, a negative regulator of muscle growth. It also binds to other members of the TGF-β superfamily, such as activin, which is involved in a wide range of cellular processes, including cell proliferation, differentiation, and apoptosis. By binding to these proteins, Follistatin 344 modulates their activity.
                  </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* References Tab */}
          <TabsContent value="references">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                  Key Research Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Kota, J., et al. (2009). Follistatin Gene Delivery Enhances Muscle Growth and Strength in Nonhuman Primates. Science Translational Medicine.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Mendell, J. R., et al. (2015). A phase 1/2a follistatin gene therapy trial for becker muscular dystrophy. Molecular Therapy.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Gilson, H., et al. (2009). Follistatin induces muscle hypertrophy through satellite cell proliferation and both Mstn and Act inhibition are involved in the FS-induced muscle hypertrophy. American Journal of Physiology-Endocrinology and Metabolism.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Rodino-Klapac, L. R., et al. (2009). Inhibition of myostatin with emphasis on follistatin as a therapy for muscle disease. Muscle & Nerve.
                    </li>
                    <li className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Lee, S. J., & McPherron, A. C. (2001). Regulation of myostatin activity and muscle growth. Proceedings of the National Academy of Sciences.
                    </li>
                </ol>
              </CardContent>
            </Card>

            {/* Related Peptides */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Related Peptides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Myostatin Propeptide</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">ACE-031</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Activin A</Badge>, <Badge variant="outline" className="cursor-pointer hover:bg-teal-50">GDF-11</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Dr. Peptide AI CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Follistatin 344 Protocol</h2>
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
