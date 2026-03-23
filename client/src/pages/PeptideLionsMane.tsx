
import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Brain, Shield, Microscope, Beaker, Heart } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptideLionsMane() {
  usePageTitle("Lion's Mane - Neurotrophic & Cognitive Enhancer", {
    description: "Explore the neurotrophic and cognitive-enhancing properties of Lion's Mane (Hericium erinaceus), its mechanisms involving NGF and BDNF, research, and dosing protocols."
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
            <div className="p-4 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Lion's Mane</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Neurotrophic & Cognitive Enhancer</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Cognitive Enhancement</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Lion's Mane?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Lion's Mane (Hericium erinaceus) is a medicinal mushroom renowned for its potent neurotrophic and cognitive-enhancing properties. Used for centuries in traditional Chinese medicine, it is now gaining significant scientific interest for its ability to stimulate nerve growth factor (NGF) and brain-derived neurotrophic factor (BDNF).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    The primary bioactive compounds, hericenones and erinacines, are believed to be responsible for its neuroprotective effects. These compounds can cross the blood-brain barrier, promoting neuronal growth, differentiation, and survival. This makes Lion's Mane a promising natural agent for supporting brain health, improving memory, and potentially preventing age-related cognitive decline.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    Beyond its cognitive benefits, Lion's Mane is also studied for its positive impact on the gut-brain axis, mood regulation, and overall neurological well-being, positioning it as a key nootropic in integrative medicine.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Cognitive Enhancement</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Improves memory, focus, and mental clarity by promoting neurogenesis.</p>
                    </div>
                    <div className="p-4 bg-lime-50 dark:bg-lime-950 rounded-lg">
                      <h4 className="font-semibold text-lime-900 dark:text-lime-100 mb-2">Neuroprotection</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Protects against neuronal damage and supports recovery from nerve injury.</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Dementia Prevention</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Research suggests a role in mitigating factors related to Alzheimer's and other forms of dementia.</p>
                    </div>
                    <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                      <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Gut-Brain Axis Support</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Positively influences gut microbiota, which may benefit mood and cognitive function.</p>
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
                      <h4 className="font-semibold mb-2">1. Stimulation of Neurotrophic Factors</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The key mechanism of Lion's Mane involves its bioactive compounds, primarily hericenones (from the fruiting body) and erinacines (from the mycelium). These molecules stimulate the synthesis of Nerve Growth Factor (NGF) and Brain-Derived Neurotrophic Factor (BDNF). NGF and BDNF are crucial for the growth, maintenance, and survival of neurons, a process known as neurogenesis.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Myelination and Nerve Repair</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NGF stimulated by Lion's Mane promotes the myelination process, where a protective sheath is formed around nerve fibers. This enhances the speed and efficiency of nerve signal transmission and is vital for recovery from peripheral nerve injuries.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Anti-Inflammatory and Antioxidant Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Lion's Mane exhibits anti-inflammatory properties within the brain, reducing the production of inflammatory cytokines. It also acts as an antioxidant, protecting neurons from oxidative stress, a key factor in neurodegenerative diseases.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. Gut-Brain Axis Modulation</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Research indicates that Lion's Mane can positively modulate the gut microbiome. By promoting beneficial gut bacteria and reducing gut inflammation, it supports the gut-brain axis, which can influence mood, anxiety, and cognitive processes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Clinical and Preclinical Research</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Cognitive Enhancement in Adults</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials on older adults with mild cognitive impairment have shown that daily supplementation with Lion's Mane extract significantly improved cognitive function scores compared to placebo. These benefits, however, tended to decrease after supplementation was discontinued, suggesting a need for continuous use.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Neuroprotection and Dementia Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">In animal models of Alzheimer's disease, Lion's Mane extracts have been shown to reduce the burden of amyloid-beta plaques, a hallmark of the disease. The stimulation of NGF is a key mechanism thought to contribute to this neuroprotective effect, though large-scale human trials are still needed.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Mood and Anxiety</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Small studies in humans have suggested that Lion's Mane may have anxiolytic and antidepressant effects. These are thought to be mediated through a combination of its anti-inflammatory properties and its influence on the gut-brain axis, potentially through the modulation of neurotransmitter systems.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing and Administration Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">General Cognitive Support (Oral)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 500mg - 3,000mg (3g) per day of a high-quality extract.</li>
                      <li>• Frequency: Can be taken once daily or split into two doses.</li>
                      <li>• Formulation: Extracts standardized for both hericenones and erinacines are preferred for comprehensive benefits.</li>
                      <li>• Note: Start with a lower dose to assess individual tolerance.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-lime-50 dark:bg-lime-950 rounded-lg">
                    <h4 className="font-semibold text-lime-900 dark:text-lime-100 mb-2">Combination with Nootropic Peptides</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Stacking: Lion's Mane can be stacked with nootropic peptides like Semax, Selank, or Cerebrolysin.</li>
                      <li>• Rationale: The neurotrophic support from Lion's Mane may synergize with the mechanisms of these peptides to enhance cognitive outcomes.</li>
                      <li>• Caution: Combining agents should be done under the guidance of a knowledgeable healthcare provider.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Considerations</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Quality: Ensure the product is from a reputable source and specifies the extraction method and bioactive compound content.</li>
                      <li>• Consistency: Benefits are typically observed with consistent, long-term use.</li>
                      <li>• Full Spectrum: Using a product that contains both the fruiting body and mycelium may provide a broader range of bioactive compounds.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Safety and Contraindications</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">High Safety Profile</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Lion's Mane is considered very safe and well-tolerated by most individuals, with a long history of use as both food and medicine. No significant adverse effects have been reported in human clinical trials at standard dosages.</p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Potential Contraindications & Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Allergies: Individuals with allergies to mushrooms should avoid Lion's Mane.</li>
                      <li>• Asthma: There is a theoretical risk that it could exacerbate symptoms in those with asthma or allergies due to its immune-modulating effects, though this is not well-documented.</li>
                      <li>• Mild Discomfort: Some users report mild digestive discomfort, which often resolves with continued use or dose adjustment.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Monitoring Guidelines</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">No specific laboratory monitoring is required for Lion's Mane supplementation. Clinicians should monitor for cognitive improvements and any potential allergic reactions or digestive upset. As with any supplement, it is prudent to discuss its use with a healthcare provider, especially for individuals with pre-existing conditions or those taking other medications.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

          <div className="mt-12 text-center">
            <PeptideCTA />
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
