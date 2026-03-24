import { Button } from "@/components/ui/button";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, Microscope, Beaker, Brain, Heart, Bone , BookOpen , Sparkles , AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";

export default function PeptidePentosanPolysulfate() {
  usePageTitle("Pentosan Polysulfate - Joint Health & Regeneration", {
    description: "Comprehensive guide to Pentosan Polysulfate (PPS) for joint health, osteoarthritis, and chondroprotection. Mechanisms, dosing, and research."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">

      <Navigation />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <Bone className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Pentosan Polysulfate</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Semi-Synthetic Glycosaminoglycan</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card><CardHeader className="pb-3"><CardDescription>Category</CardDescription><CardTitle className="text-2xl">Regenerative</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Research Citations</CardDescription><CardTitle className="text-2xl">150+</CardTitle></CardHeader></Card>
            <Card><CardHeader className="pb-3"><CardDescription>Administration</CardDescription><CardTitle className="text-2xl">Oral/Subcutaneous</CardTitle></CardHeader></Card>
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
                <CardHeader><CardTitle>What is Pentosan Polysulfate?</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Pentosan polysulfate sodium (PPS) is a semi-synthetic glycosaminoglycan (GAG) derived from beechwood hemicellulose. It is known for its anti-inflammatory, chondroprotective, and mild anticoagulant properties. While FDA-approved under the name Elmiron® for treating interstitial cystitis (a bladder pain syndrome), it is widely used off-label for its significant benefits in managing osteoarthritis and promoting joint health.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    PPS functions as a disease-modifying osteoarthritis drug (DMOAD) by addressing the underlying pathology of joint degeneration, rather than just masking symptoms. It helps replenish the protective glycosaminoglycan layer in cartilage and has a positive effect on synovial fluid, improving joint lubrication and function.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Primary Applications</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Osteoarthritis (OA)</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Reduces pain, inflammation, and cartilage breakdown</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Joint Repair & Health</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Stimulates cartilage synthesis and protects existing tissue</p>
                    </div>
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Interstitial Cystitis</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">FDA-approved use for bladder pain and inflammation</p>
                    </div>
                    <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                      <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Bone Bruising</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Helps resolve subchondral bone marrow edema</p>
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
                      <h4 className="font-semibold mb-2">1. Chondroprotection</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Inhibits catabolic enzymes (like MMPs) that degrade cartilage and stimulates the production of new glycosaminoglycans (GAGs) and hyaluronan.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">2. Anti-inflammatory Effects</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduces inflammation within the joint by inhibiting pro-inflammatory cytokines (e.g., TNF-α, IL-1β) and blocking complement activation.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">3. Fibrinolysis and Improved Blood Flow</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Promotes the breakdown of micro-clots (fibrin) in the subchondral bone, improving blood flow and nutrient supply to the cartilage and bone.</p>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <h4 className="font-semibold mb-2">4. GAG Layer Replenishment</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">In interstitial cystitis, it is believed to restore the damaged GAG layer on the surface of the bladder epithelium, protecting it from irritants.</p>
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
                    <h4 className="font-semibold mb-2">Osteoarthritis Studies</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Clinical trials have shown that PPS can significantly improve pain, stiffness, and function in patients with knee osteoarthritis. Studies highlight its ability to improve cartilage metabolism and reduce bone bruising. [1]</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Interstitial Cystitis Trials</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">As an FDA-approved treatment, numerous studies support the efficacy of oral pentosan polysulfate in reducing bladder pain and discomfort associated with interstitial cystitis. [2]</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Veterinary Use</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">PPS has a long history of successful use in veterinary medicine, particularly in horses and dogs, for treating degenerative joint disease, demonstrating its profound effects on joint health across species. [3]</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Dosing Protocols</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Joint Health (Subcutaneous)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 2 mg/kg body weight</li>
                      <li>• Frequency: Twice weekly</li>
                      <li>• Duration: 4-6 week course, repeated as needed</li>
                      <li>• Often administered in cycles</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Interstitial Cystitis (Oral)</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Dose: 100 mg</li>
                      <li>• Frequency: Three times daily (TID)</li>
                      <li>• Duration: Long-term, may take 3-6 months for effect</li>
                      <li>• Take with water at least 1 hour before or 2 hours after meals</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Important Notes</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Protocols are for informational purposes and require medical supervision.</li>
                      <li>• Subcutaneous route is preferred for joint-related issues due to higher bioavailability.</li>
                      <li>• Oral bioavailability is low (~3-6%).</li>
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
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Generally Well-Tolerated</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">PPS is generally considered safe, especially via injection which avoids most GI side effects. Its anticoagulant effect is mild at therapeutic doses.</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Potential Side Effects</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Oral: Nausea, diarrhea, headache</li>
                      <li>• Injection: Bruising or pain at injection site</li>
                      <li>• Rare: Hair loss (usually temporary), elevated liver enzymes</li>
                      <li>• Long-term high-dose oral use has been linked to pigmentary maculopathy. [4]</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Contraindications</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Active bleeding or bleeding disorders</li>
                      <li>• Hypersensitivity to PPS or related compounds</li>
                      <li>• Caution with other anticoagulants (e.g., warfarin, heparin)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6 mt-6">
              <Card>
                <CardHeader><CardTitle>Monitoring & Follow-Up</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Baseline & Periodic Bloodwork</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Prior to starting, a complete blood count (CBC) and liver function tests (LFTs) are recommended. Periodic monitoring may be advised, especially with long-term use.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Ophthalmologic Exams</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">For patients on long-term oral therapy (Elmiron®), regular retinal exams are crucial to monitor for pigmentary maculopathy, a potential vision-threatening side effect.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Clinical Assessment</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Regular follow-up with a healthcare provider is essential to assess treatment efficacy, monitor for side effects, and adjust protocols as needed based on clinical response and joint function.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

          <div className="mt-12 text-center">
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        Pavelka K et al. (2010). Efficacy and safety of pentosan polysulfate in patients with knee osteoarthritis: a randomized, double-blind, placebo-controlled trial. Osteoarthritis Cartilage. Demonstrated significant improvement in pain and function in knee OA patients. <a href="https://pubmed.ncbi.nlm.nih.gov/20034655/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Nickel JC et al. (2005). Pentosan polysulfate sodium for interstitial cystitis: a randomized, double-blind, placebo-controlled trial. J Urol. Confirmed efficacy of oral PPS in reducing bladder pain and urinary symptoms. <a href="https://pubmed.ncbi.nlm.nih.gov/15788052/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        McIlwraith CW et al. (2012). Clinical efficacy of pentosan polysulfate sodium in horses with osteoarthritis. Vet J. Showed PPS improves joint function and reduces lameness in equine OA models. <a href="https://pubmed.ncbi.nlm.nih.gov/22036210/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Pearce WA et al. (2018). Pentosan polysulfate maculopathy: risk factors, screening, and management. Retina. Identified pigmentary maculopathy as a rare but serious side effect of long-term PPS use. <a href="https://pubmed.ncbi.nlm.nih.gov/29627144/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Setnikar I et al. (1993). Pharmacokinetics and metabolism of pentosan polysulfate sodium in humans. Arzneimittelforschung. Detailed PPS absorption, bioavailability, and metabolism characteristics. <a href="https://pubmed.ncbi.nlm.nih.gov/8494981/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Moreland LW et al. (1997). Pentosan polysulfate sodium in the treatment of osteoarthritis: a multicenter, double-blind, placebo-controlled trial. Arthritis Rheum. Demonstrated disease-modifying effects on cartilage and synovial fluid. <a href="https://pubmed.ncbi.nlm.nih.gov/9221513/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Lee JH et al. (2014). Anti-inflammatory effects of pentosan polysulfate sodium on IL-1β-stimulated human chondrocytes. Inflammation. Showed PPS inhibits pro-inflammatory cytokine production in cartilage cells. <a href="https://pubmed.ncbi.nlm.nih.gov/24477843/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Kawcak CE et al. (2001). Effects of pentosan polysulfate on subchondral bone perfusion and cartilage in an experimental model of osteoarthritis. Osteoarthritis Cartilage. PPS improved subchondral bone blood flow and reduced cartilage degradation. <a href="https://pubmed.ncbi.nlm.nih.gov/11323131/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Kahan A et al. (2009). Long-term safety and efficacy of pentosan polysulfate sodium in osteoarthritis patients. Clin Rheumatol. Reported favorable safety profile and sustained symptom relief with PPS. <a href="https://pubmed.ncbi.nlm.nih.gov/19130009/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
      <li>
        Lee JH et al. (2017). Pentosan polysulfate sodium promotes glycosaminoglycan synthesis in human chondrocytes. Connect Tissue Res. Demonstrated stimulation of cartilage matrix synthesis by PPS. <a href="https://pubmed.ncbi.nlm.nih.gov/27899243/" target="_blank" rel="noopener noreferrer">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Synergistic Combinations
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Hyaluronic Acid (HA):</strong> Combined with PPS, HA enhances joint lubrication and cartilage protection, providing complementary chondroprotective effects.
      </li>
      <li>
        <strong>Glucosamine & Chondroitin Sulfate:</strong> These substrates support cartilage matrix synthesis and may synergize with PPS’s stimulation of GAG production.
      </li>
      <li>
        <strong>Platelet-Rich Plasma (PRP):</strong> PPS may improve the microenvironment for PRP’s regenerative growth factors, enhancing cartilage repair.
      </li>
      <li>
        <strong>Low-Dose Naltrexone (LDN):</strong> LDN’s anti-inflammatory and immune-modulating effects can complement PPS’s cytokine inhibition in joint disease.
      </li>
      <li>
        <strong>Omega-3 Fatty Acids:</strong> Anti-inflammatory properties of omega-3s may augment PPS’s reduction of joint inflammation.
      </li>
    </ul>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Drug Interactions
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
      <li>
        <strong>Anticoagulants (e.g., Warfarin, Heparin):</strong> PPS has mild anticoagulant effects and may potentiate bleeding risk when combined with other blood thinners.
      </li>
      <li>
        <strong>Nonsteroidal Anti-Inflammatory Drugs (NSAIDs):</strong> Concurrent use may increase bleeding risk due to additive effects on platelet function.
      </li>
      <li>
        <strong>Platelet Aggregation Inhibitors (e.g., Aspirin, Clopidogrel):</strong> May increase risk of bleeding when used with PPS.
      </li>
      <li>
        <strong>Other Glycosaminoglycans (e.g., Heparin):</strong> Potential additive anticoagulant effects; caution advised.
      </li>
      <li>
        <strong>Drugs Affecting Liver Enzymes:</strong> PPS metabolism is minimal but caution is advised if combined with hepatotoxic drugs due to rare liver enzyme elevations.
      </li>
    </ul>
  </CardContent>
</Card>


            <PeptideCTA peptideName="Pentosan Polysulfate" />
          </div>

        </div>
      </section>
    </div>
  );
}

