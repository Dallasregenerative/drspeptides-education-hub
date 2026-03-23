import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Beaker, Brain, Heart, Dna } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideACE031() {
  usePageTitle("ACE-031 - Myostatin Inhibitor", {
    description: "Comprehensive guide to ACE-031, a myostatin inhibitor for muscle growth. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl">
              <Dna className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">ACE-031</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Myostatin Inhibitor</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Growth Hormone</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">150+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Subcutaneous</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is ACE-031?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    ACE-031 is a synthetic protein designed to promote muscle growth by inhibiting myostatin. It is a soluble form of the activin receptor type IIB (ActRIIB), which acts as a "trap" for myostatin and other related proteins that limit muscle development.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Myostatin is a naturally occurring protein that puts the brakes on muscle growth. By blocking myostatin, ACE-031 allows for increased muscle mass and strength. This has made it a subject of research for conditions involving muscle wasting, such as Duchenne muscular dystrophy (DMD).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    While promising, the development of ACE-031 for clinical use has faced challenges, and it remains an investigational compound primarily used in research settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Muscle Growth</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Promotes significant increases in lean muscle mass.</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Muscle Wasting Conditions</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Investigated for use in muscular dystrophies and sarcopenia.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Strength Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">May lead to improvements in muscle strength and function.</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Research Use</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Primarily used in research to study myostatin inhibition.</p>
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
                      <h4 className="font-semibold mb-2">1. Myostatin Inhibition</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">ACE-031 is a recombinant fusion protein consisting of the extracellular domain of the human ActRIIB receptor linked to a portion of human immunoglobulin G (IgG). This structure allows it to bind to myostatin with high affinity.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Preventing Receptor Activation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">By binding to myostatin in the bloodstream, ACE-031 prevents myostatin from interacting with its natural receptor (ActRIIB) on muscle cells. This blocks the intracellular signaling cascade that would normally inhibit muscle growth (myogenesis).</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Promoting Muscle Growth</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">With the inhibitory signal of myostatin blocked, muscle precursor cells (myoblasts) are free to proliferate and differentiate into mature muscle fibers, leading to an increase in muscle size and mass.</p>
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
                    <h4 className="font-semibold mb-2">Duchenne Muscular Dystrophy (DMD)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Early clinical trials in boys with DMD showed promise in increasing lean body mass. However, the trials were halted due to safety concerns, including minor nosebleeds and gum bleeding, and the development of telangiectasias (small dilated blood vessels).</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Postmenopausal Women</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A study in healthy postmenopausal women demonstrated that a single dose of ACE-031 led to a significant increase in lean body mass and thigh muscle volume within two weeks.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Animal Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Preclinical studies in various animal models have consistently shown that ACE-031 and similar myostatin inhibitors lead to dramatic increases in muscle mass and strength.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols (Research)</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Research Protocol</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 1-3 mg/kg of body weight</li>
                      <li>• Frequency: Once every 2-4 weeks</li>
                      <li>• Administration: Subcutaneous injection</li>
                      <li>• Duration: Typically studied for up to 12 weeks</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• These are research doses and not approved for human use.</li>
                      <li>• Due to the long half-life, dosing is infrequent.</li>
                      <li>• Effects on muscle mass can be rapid and significant.</li>
                      <li>• Safety concerns have limited its development.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Safety Concerns</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Clinical development of ACE-031 was halted due to adverse events observed in a study with boys with DMD. The company decided to focus on other compounds.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Reported Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Telangiectasias (small, dilated blood vessels near the surface of the skin)</li>
                      <li>• Minor bleeding events (epistaxis/nosebleeds, gum bleeding)</li>
                      <li>• Injection site reactions</li>
                      <li>• Headaches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-950 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Not for human consumption. Research chemical only.</li>
                      <li>• History of bleeding disorders.</li>
                      <li>• Known hypersensitivity to the compound.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring (Research)</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Body Composition</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Monitor changes in lean body mass and fat mass using methods like DEXA scans.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Skin Examination</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Regularly check for the appearance of telangiectasias or other skin changes.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Bleeding</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Monitor for any signs of unusual or prolonged bleeding, such as nosebleeds or easy bruising.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Blood Markers</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">In a research context, monitor complete blood count (CBC) and coagulation panels.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

          <PeptideCTA peptideName="ACE-031" />

        </div>
      </section>
    </div>
  );
}
