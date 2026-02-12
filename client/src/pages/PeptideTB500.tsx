import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Activity, Shield, Zap, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideTB500() {
  usePageTitle("TB-500 - Thymosin Beta-4", {
    description: "Evidence-based guide to TB-500 (Thymosin Beta-4) for injury recovery, tissue regeneration, and inflammation reduction. Clinical protocols and safety considerations."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Thymosin Beta-4 Fragment
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              TB-500 (Thymosin Beta-4)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Developmentally essential secreted peptide with regenerative capacity across cardiac, neurological, and musculoskeletal systems. Naturally occurring 43-amino acid peptide critical during embryonic development.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Cardiac</p>
                  <p className="text-gray-600 text-sm">Regeneration</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Activity className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Tissue</p>
                  <p className="text-gray-600 text-sm">Repair</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Anti</p>
                  <p className="text-gray-600 text-sm">Inflammatory</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Neuro</p>
                  <p className="text-gray-600 text-sm">Protection</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clinical Evidence Alert */}
          <Alert className="mb-8 border-teal-200 bg-teal-50">
            <AlertDescription>
              <p className="text-teal-900 font-semibold mb-2">Peer-Reviewed Research Foundation</p>
              <p className="text-teal-800 text-sm">
                <strong>PMC8228050:</strong> "Utilizing Developmentally Essential Secreted Peptides Such as Thymosin Beta-4 to Remind the Adult Organs of Their Embryonic State—New Directions in Anti-Aging Regenerative Therapies" - Comprehensive review of TB-500's regenerative capacity across cardiac repair, wound healing, anti-inflammatory effects, and sepsis applications. <strong>Key finding:</strong> Naturally occurring peptide critical during embryonic development with potential to reverse age-related tissue damage through systemic administration.
              </p>
            </AlertDescription>
          </Alert>

          {/* Main Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is TB-500?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    TB-500 is a synthetic fraction of the naturally occurring peptide <strong>Thymosin Beta-4 (Tβ4)</strong>, a 43-amino acid protein that plays critical roles during embryonic development and tissue repair. Unlike many regenerative molecules that work primarily within cells, TB-500 is a <strong>secreted peptide</strong> that can be administered systemically to promote healing across multiple organ systems.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Developmental Biology Insight</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      The conceptual approach: <strong>"Remind adult organs of their embryonic state."</strong> During embryonic development, Thymosin Beta-4 is highly expressed and facilitates rapid tissue formation, cell migration, and organ development. As we age, expression decreases, and regenerative capacity diminishes. Systemic administration of TB-500 aims to <strong>reactivate these embryonic regenerative pathways</strong> in adult tissues.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Applications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Cardiac Regeneration</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Post-infarction cardiac repair</li>
                          <li>• Cardiomyocyte survival</li>
                          <li>• Vessel growth (angiogenesis)</li>
                          <li>• Improved cardiac function</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Musculoskeletal Healing</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Muscle tear recovery</li>
                          <li>• Tendon/ligament repair</li>
                          <li>• Joint pain reduction</li>
                          <li>• Athletic injury healing</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Neuroprotection</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Reduces neuroinflammation</li>
                          <li>• Oxidative stress reduction</li>
                          <li>• Tissue repair in CNS</li>
                          <li>• Motor function recovery</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Anti-Inflammatory</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Sepsis treatment potential</li>
                          <li>• Wound healing acceleration</li>
                          <li>• Reduces chronic inflammation</li>
                          <li>• Immune modulation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">1. Actin Regulation & Cell Migration</h4>
                    <p className="text-gray-700 mb-3">
                      TB-500's primary mechanism involves <strong>binding to G-actin</strong> (globular actin monomers), preventing polymerization into F-actin filaments. This regulation of the actin cytoskeleton enables:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Enhanced cell migration:</strong> Cells can move more freely to sites of injury</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Tissue remodeling:</strong> Facilitates reorganization of damaged tissue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Wound contraction:</strong> Promotes closure of tissue defects</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">2. Angiogenesis (New Blood Vessel Formation)</h4>
                    <p className="text-gray-700 mb-3">
                      TB-500 promotes the formation of new blood vessels through multiple pathways:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Endothelial cell migration:</strong> Stimulates movement of vessel-forming cells</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>VEGF upregulation:</strong> Increases vascular endothelial growth factor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Capillary density increase:</strong> Improves oxygen/nutrient delivery to healing tissues</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">3. Anti-Inflammatory Effects</h4>
                    <p className="text-gray-700 mb-3">
                      TB-500 modulates inflammatory responses to prevent excessive tissue damage:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Cytokine regulation:</strong> Reduces pro-inflammatory cytokines (TNF-α, IL-6)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Neutrophil infiltration reduction:</strong> Decreases excessive immune cell accumulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Tissue protection:</strong> Prevents collateral damage from inflammatory cascade</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">4. Cardiac-Specific Mechanisms</h4>
                    <p className="text-gray-700 mb-3">
                      In the heart, TB-500 demonstrates unique regenerative properties:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Cardiomyocyte survival:</strong> Protects heart cells from hypoxic death</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Progenitor cell recruitment:</strong> Attracts stem cells to damaged cardiac tissue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Fetal gene program activation:</strong> Reactivates embryonic repair pathways</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Contractility improvement:</strong> Enhances cardiac function post-infarction</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">Systemic Administration Advantage</h4>
                    <p className="text-purple-800 text-sm leading-relaxed">
                      Unlike many regenerative molecules that work intracellularly (requiring gene therapy or direct injection), TB-500 is a <strong>secreted peptide</strong> that can be administered systemically (subcutaneous or intramuscular injection) and still reach target tissues effectively. This makes it <strong>clinically practical</strong> for broad therapeutic applications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertDescription>
                      <p className="text-blue-900 font-semibold mb-2">Key Academic Source</p>
                      <p className="text-blue-800 text-sm">
                        <strong>PMC8228050:</strong> "Utilizing Developmentally Essential Secreted Peptides Such as Thymosin Beta-4 to Remind the Adult Organs of Their Embryonic State" (Cells. 2021) - Comprehensive review establishing TB-500 as a developmentally critical peptide with regenerative capacity across multiple organ systems.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Cardiac Regeneration Research</h4>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Post-Infarction Cardiac Repair</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> Systemic administration of TB-500 following myocardial infarction resulted in:
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Improved cardiac function and contractility</li>
                          <li>• Reduced infarct size (area of dead tissue)</li>
                          <li>• Enhanced angiogenesis in border zones</li>
                          <li>• Cardiomyocyte survival in hypoxic conditions</li>
                          <li>• Recruitment of cardiac progenitor cells</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-2">
                          <strong>Mechanism:</strong> TB-500 reactivates fetal gene programs (ANF, TGF-β, c-myc) that promote tissue repair rather than scar formation.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Ischemic Preconditioning Effects</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> TB-500 mimics effects of remote ischemic preconditioning (RIP):
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Activates cardioprotective mechanisms</li>
                          <li>• Enhances cardiomyocyte tolerance to ischemia</li>
                          <li>• Protection transferable across species via plasma dialysate</li>
                          <li>• Triggers signal transduction (adenosine, bradykinin, cytokines)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Wound Healing & Tissue Repair</h4>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Accelerated Wound Closure</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> TB-500 application to wounds demonstrated:
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Faster epithelialization (skin regrowth)</li>
                          <li>• Enhanced collagen deposition</li>
                          <li>• Improved tensile strength of healed tissue</li>
                          <li>• Reduced scar formation</li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Musculoskeletal Applications</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> Athletic injury recovery benefits:
                        </p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Accelerated muscle tear healing</li>
                          <li>• Tendon/ligament repair enhancement</li>
                          <li>• Joint pain reduction</li>
                          <li>• Improved range of motion post-injury</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-2">
                          <strong>Note:</strong> Ben Greenfield's "Recover Like Wolverine" stack includes TB-500 for injury healing with "pretty surprising speed."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Neuroprotection Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Neuroinflammation & Oxidative Stress</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> TB-500 demonstrated neuroprotective effects:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Reduces neuroinflammation in CNS</li>
                        <li>• Decreases oxidative stress markers</li>
                        <li>• Supports tissue repair in brain/spinal cord</li>
                        <li>• Potential applications in Alzheimer's, Parkinson's</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Anti-Inflammatory & Sepsis Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Sepsis Treatment Potential</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> TB-500 showed promise in sepsis models:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Reduced mortality in septic shock models</li>
                        <li>• Modulated excessive inflammatory response</li>
                        <li>• Protected organ function during systemic inflammation</li>
                        <li>• Potential adjunct therapy for severe infections</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-3">Research Limitations</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• Most research conducted in animal models (mice, rats, rabbits)</li>
                      <li>• Limited large-scale human clinical trials</li>
                      <li>• Optimal dosing protocols still being established</li>
                      <li>• Long-term safety data in humans incomplete</li>
                      <li>• Regulatory status varies by country (not FDA-approved for human use in US)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols & Administration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-purple-200 bg-purple-50">
                    <AlertDescription>
                      <p className="text-purple-900 font-semibold mb-2">Ben Greenfield's "Recover Like Wolverine" Stack</p>
                      <p className="text-purple-800 text-sm">
                        TB-500 is a core component of Ben Greenfield's proven injury healing protocol, combined with BPC-157, Ipamorelin, Tesamorelin, and GHK-Cu. Ben's testimonial: "It worked—with pretty surprising speed" for joint pain and muscle tears. See full protocol in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Standard Dosing Protocol</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Loading Phase (Acute Injury)</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 5-10mg per injection</li>
                          <li><strong>Frequency:</strong> 2-3 times per week</li>
                          <li><strong>Duration:</strong> 4-6 weeks</li>
                          <li><strong>Goal:</strong> Saturate tissues, initiate repair</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Maintenance Phase</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 2-5mg per injection</li>
                          <li><strong>Frequency:</strong> 1-2 times per week</li>
                          <li><strong>Duration:</strong> 4-8 weeks</li>
                          <li><strong>Goal:</strong> Sustain healing, prevent re-injury</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Administration Routes</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Subcutaneous Injection (Most Common)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Location:</strong> Abdomen, thigh, or upper arm (rotate injection sites)
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Advantages:</strong> Easy self-administration, systemic distribution, consistent absorption
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Technique:</strong> Pinch skin, insert needle at 45-90° angle, inject slowly
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Intramuscular Injection</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Location:</strong> Deltoid, gluteus, vastus lateralis
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Advantages:</strong> Faster absorption, higher bioavailability for some individuals
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Note:</strong> May cause more discomfort than subcutaneous
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Local Injection (Injury Site)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Application:</strong> Direct injection into or near injured tissue (tendon, ligament, muscle)
                        </p>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Advantages:</strong> High local concentration, targeted healing
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Caution:</strong> Requires medical professional for precise placement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Timing Strategies</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Post-workout:</strong> Inject within 1-2 hours after training to enhance recovery</li>
                        <li><strong>Before bed:</strong> Capitalize on natural GH release during sleep (if stacking with GH secretagogues)</li>
                        <li><strong>Acute injury:</strong> Begin protocol immediately after injury for best results</li>
                        <li><strong>Consistency:</strong> Maintain regular injection schedule (e.g., Monday/Thursday for 2x/week)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Cycling Protocols</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Recommended Cycling</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Standard cycle:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        <li><strong>Acute injury cycle:</strong> 4-6 weeks loading + 4-8 weeks maintenance, then off</li>
                        <li><strong>Chronic condition cycle:</strong> 12 weeks on, 8 weeks off, repeat as needed</li>
                        <li><strong>Rationale:</strong> Prevents receptor downregulation, maintains effectiveness long-term</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Synergistic Combinations</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">TB-500 + BPC-157 (Most Common Stack)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Synergy:</strong> Complementary mechanisms - TB-500 focuses on angiogenesis and systemic healing, BPC-157 targets gut-body axis and local tissue repair
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Protocol:</strong> Inject both peptides simultaneously or within same day
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">TB-500 + GH Secretagogues (Ipamorelin, CJC-1295)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Synergy:</strong> TB-500 provides direct tissue repair, GH secretagogues enhance overall recovery and muscle preservation
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Protocol:</strong> See "Recover Like Wolverine" stack in Stacking Guide
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">TB-500 + GHK-Cu</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Synergy:</strong> TB-500 handles systemic healing, GHK-Cu provides collagen synthesis and tissue remodeling
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Protocol:</strong> Both can be injected subcutaneously in same session
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Considerations & Contraindications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-red-200 bg-red-50">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="ml-2">
                      <p className="text-red-900 font-semibold mb-2">Critical Safety Warning</p>
                      <p className="text-red-800 text-sm">
                        TB-500 is <strong>NOT FDA-approved</strong> for human use in the United States. It is sold for research purposes only. Any therapeutic use should be under direct supervision of a qualified healthcare provider. <strong>WADA-banned substance</strong> for competitive athletes.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Absolute Contraindications</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Active Cancer or Recent Cancer History</p>
                          <p className="text-red-800 text-sm">TB-500 promotes angiogenesis (new blood vessel formation), which could theoretically support tumor growth. <strong>Avoid if cancer diagnosed within past 5 years.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Pregnancy or Breastfeeding</p>
                          <p className="text-red-800 text-sm">No safety data available for pregnant/nursing women. <strong>Do not use.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Known Hypersensitivity to Thymosin Beta-4</p>
                          <p className="text-red-800 text-sm">Allergic reactions possible. Discontinue immediately if rash, swelling, or breathing difficulty occurs.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Relative Contraindications (Use with Caution)</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Family History of Cancer</p>
                          <p className="text-yellow-800 text-sm">Increased caution warranted. Discuss with oncologist before use.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Autoimmune Conditions</p>
                          <p className="text-yellow-800 text-sm">TB-500 modulates immune function. Monitor closely if you have lupus, rheumatoid arthritis, or other autoimmune diseases.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Diabetic Retinopathy or Macular Degeneration</p>
                          <p className="text-yellow-800 text-sm">Angiogenic peptides may worsen retinal conditions. Ophthalmologist consultation required.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Pre-Treatment Requirements</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Physician consultation:</strong> Mandatory before starting TB-500 therapy</li>
                        <li><strong>Cancer screening:</strong> Comprehensive screening (especially for angiogenic peptides)</li>
                        <li><strong>Baseline labs:</strong> CBC, CMP, inflammatory markers (CRP, ESR)</li>
                        <li><strong>Medical history review:</strong> Disclose all conditions, medications, supplements</li>
                        <li><strong>Source verification:</strong> Ensure pharmaceutical-grade, &gt;98% purity, COA available</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Monitoring During Treatment</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Regular physician check-ins:</strong> Every 4-8 weeks during active treatment</li>
                        <li><strong>Cancer screening:</strong> Every 6 months for angiogenic peptides (TB-500, BPC-157)</li>
                        <li><strong>Inflammatory markers:</strong> Monitor CRP, ESR to track healing progress</li>
                        <li><strong>Adverse event tracking:</strong> Log any side effects, injection site reactions</li>
                        <li><strong>Efficacy assessment:</strong> Track pain levels, range of motion, functional improvements</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Reported Side Effects</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Common (Generally Mild)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Injection site reactions (redness, swelling)</li>
                          <li>• Temporary fatigue or lethargy</li>
                          <li>• Mild headaches</li>
                          <li>• Increased hunger (some users)</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Rare (Seek Medical Attention)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Allergic reactions (rash, hives, difficulty breathing)</li>
                          <li>• Severe injection site pain or abscess</li>
                          <li>• Unexplained weight changes</li>
                          <li>• Vision changes (if diabetic retinopathy risk)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Quality & Sourcing Standards</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Required Quality Standards:</p>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li>• <strong>Purity:</strong> &gt;98% (verified by HPLC)</li>
                        <li>• <strong>Certificate of Analysis (COA):</strong> Must be provided by supplier</li>
                        <li>• <strong>Endotoxin testing:</strong> &lt;0.1 EU/mg (prevents bacterial contamination)</li>
                        <li>• <strong>GMP compliance:</strong> Manufactured in cGMP-certified facility</li>
                        <li>• <strong>Third-party testing:</strong> Independent lab verification preferred</li>
                      </ul>
                      <p className="text-green-800 text-sm mt-3">
                        <strong>Red flags to avoid:</strong> No COA provided, international sources without credentials, "research chemicals" labeling, suspiciously low prices, no contact information.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Anti-Doping Considerations</h4>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="font-semibold text-red-900 mb-2">WADA-Banned Substance</p>
                      <p className="text-red-800 text-sm">
                        TB-500 (Thymosin Beta-4) is <strong>prohibited at all times</strong> by the World Anti-Doping Agency (WADA) for competitive athletes. Use will result in positive drug test and potential sanctions. <strong>Do not use if subject to drug testing.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitoring & Follow-Up</h2>
                  
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="text-red-900">
                      <strong>Critical Safety Note:</strong> TB-500 (synthetic thymosin beta-4) has <strong>NO dedicated human safety studies</strong>. All monitoring protocols are extrapolated from TB4 (natural form) research and theoretical risk assessment. Use represents off-label, experimental therapy.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Treatment Screening</h3>
                      <p className="text-gray-700 mb-4">
                        Comprehensive baseline assessment is essential before initiating TB-500 therapy, particularly given the lack of human safety data and theoretical cancer risk from angiogenic properties.
                      </p>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">Required Baseline Labs</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li><strong>Complete Blood Count (CBC)</strong> - Baseline hematologic status, rule out anemia or thrombocytosis</li>
                          <li><strong>Comprehensive Metabolic Panel (CMP)</strong> - Liver/kidney function, electrolytes</li>
                          <li><strong>Cancer Screening</strong> - Age-appropriate screening (colonoscopy, mammography, PSA) to rule out occult malignancy before initiating angiogenic peptide</li>
                          <li><strong>Inflammatory Markers</strong> - CRP, ESR (baseline for assessing anti-inflammatory effects)</li>
                          <li><strong>Coagulation Panel</strong> - PT/INR, aPTT (TB-500 may affect platelet function)</li>
                          <li><strong>Imaging</strong> - Consider baseline MRI/ultrasound of target injury site for objective healing assessment</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Monitoring Schedule</h3>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left">Timepoint</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Assessments</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 font-semibold">Week 2-4</td>
                              <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc list-inside text-sm">
                                  <li>Injection site evaluation</li>
                                  <li>Symptom assessment (pain, swelling, function)</li>
                                  <li>Adverse event screening</li>
                                </ul>
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-sm">
                                Early tolerance check. TB-500 generally well-tolerated but monitor for injection site reactions.
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2 font-semibold">Month 1-2</td>
                              <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc list-inside text-sm">
                                  <li>Repeat CBC, CMP</li>
                                  <li>Inflammatory markers (CRP, ESR)</li>
                                  <li>Functional assessment of target injury</li>
                                  <li>Imaging (if applicable) to assess healing</li>
                                </ul>
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-sm">
                                Assess therapeutic response and safety. Expect measurable improvements in pain/function by 4-6 weeks.
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 font-semibold">Month 3</td>
                              <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc list-inside text-sm">
                                  <li>Comprehensive labs (CBC, CMP, coagulation)</li>
                                  <li>Cancer surveillance (clinical exam, symptom review)</li>
                                  <li>Efficacy reassessment</li>
                                </ul>
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-sm">
                                Determine continuation vs. discontinuation. Most injuries show significant healing by 3 months.
                              </td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2 font-semibold">Every 6 months</td>
                              <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc list-inside text-sm">
                                  <li>Comprehensive metabolic surveillance</li>
                                  <li>Age-appropriate cancer screening</li>
                                  <li>Risk-benefit evaluation</li>
                                </ul>
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-sm">
                                Long-term safety surveillance, particularly for angiogenesis-related cancer risk.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Warning Signs & When to Stop</h3>
                      
                      <div className="bg-red-50 p-6 rounded-lg mb-4">
                        <h4 className="font-semibold text-red-900 mb-3">Discontinue Immediately If:</h4>
                        <ul className="space-y-2 text-red-800">
                          <li><strong>New mass or tumor</strong> - Any unexplained lump, swelling, or growth (angiogenesis concern)</li>
                          <li><strong>Severe injection site reaction</strong> - Abscess, cellulitis, or persistent inflammation</li>
                          <li><strong>Unexplained bleeding/bruising</strong> - May indicate platelet dysfunction or coagulopathy</li>
                          <li><strong>Systemic allergic reaction</strong> - Rash, hives, angioedema, anaphylaxis</li>
                          <li><strong>Laboratory abnormalities</strong> - Significant liver enzyme elevation, kidney dysfunction, or hematologic changes</li>
                          <li><strong>Cancer diagnosis</strong> - Discontinue immediately if malignancy detected (theoretical tumor growth support)</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-3">Seek Medical Attention For:</h4>
                        <ul className="space-y-2 text-yellow-800">
                          <li><strong>Injection site infection</strong> - Warmth, redness, purulent drainage, fever</li>
                          <li><strong>Cardiovascular symptoms</strong> - Chest pain, palpitations, shortness of breath (angiogenesis may affect vascular stability)</li>
                          <li><strong>Neurological changes</strong> - Severe headache, vision changes, weakness (rare but monitor given neuroprotective claims)</li>
                          <li><strong>Unexplained symptoms</strong> - Persistent fatigue, weight loss, night sweats (cancer red flags)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Monitoring Considerations</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Cancer Risk Surveillance</h4>
                          <p className="text-sm text-gray-700">
                            TB-500's angiogenic properties (VEGFR2 activation) theoretically support tumor growth. Maintain age-appropriate cancer screening. <strong>Contraindicated in active malignancy or history of cancer within 5 years.</strong>
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-indigo-900 mb-2">Metabolite Discovery (2024)</h4>
                          <p className="text-sm text-gray-700">
                            Recent research suggests TB-500's metabolite (Ac-LKKTE) may be the actual active compound, not TB-500 itself. Implications for dosing/monitoring unclear. See <a href="https://www.innerbody.com/thymosin-beta-4-and-tb-500" target="_blank" rel="noopener noreferrer" className="underline">Innerbody 2024 review</a>.
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">Pregnancy/Breastfeeding</h4>
                          <p className="text-sm text-gray-700">
                            <strong>Absolutely contraindicated.</strong> TB-500 is developmentally essential during embryogenesis; exogenous administration may disrupt fetal development. No human safety data.
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-pink-900 mb-2">WADA Prohibited Substance</h4>
                          <p className="text-sm text-gray-700">
                            TB-500 banned by World Anti-Doping Agency. Competitive athletes subject to drug testing must avoid. Detection window unknown but likely weeks to months.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Research References</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>
                            <a href="https://www.innerbody.com/thymosin-beta-4-and-tb-500" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              Innerbody (2024) - Thymosin Beta-4 and TB-500: Comprehensive Safety Review
                            </a> - Critical analysis of lack of human safety data, metabolite discovery, cancer concerns
                          </li>
                          <li>
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              PMC12313605 - BPC-157 and TB-500 Safety Profile
                            </a> - Comparative analysis showing ZERO human clinical safety data for TB-500
                          </li>
                          <li>
                            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8228050/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              PMC8228050 - Utilizing Developmentally Essential Secreted Peptides
                            </a> - Review of TB4 regenerative capacity, embryonic development role
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Alert className="border-orange-200 bg-orange-50">
                      <AlertDescription className="text-orange-900">
                        <strong>Experimental Therapy Disclaimer:</strong> TB-500 is NOT FDA-approved for any indication. Use represents experimental, off-label therapy with unknown long-term safety profile. Proceed only under medical supervision with informed consent and comprehensive monitoring.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
