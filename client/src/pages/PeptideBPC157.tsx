import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function PeptideBPC157() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 hover:bg-yellow-600">Research/Investigational - Not FDA Approved</Badge>
            <h1 className="text-5xl font-bold mb-4">BPC-157</h1>
            <p className="text-2xl text-teal-100 mb-6">
              Body Protection Compound-157: Synthetic Pentadecapeptide for Tissue Repair
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                <span>Not FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <span>No Human Safety Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Extensive Animal Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanism" className="gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanism</span>
              </TabsTrigger>
              <TabsTrigger value="clinical" className="gap-2">
                <Beaker className="h-4 w-4" />
                <span className="hidden sm:inline">Clinical Data</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
              </TabsTrigger>
              <TabsTrigger value="protocol" className="gap-2">
                <Syringe className="h-4 w-4" />
                <span className="hidden sm:inline">Protocol</span>
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Monitoring</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Overview & Characteristics</CardTitle>
                  <CardDescription>
                    Comprehensive introduction to BPC-157's research profile and regulatory status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Critical Safety Notice</h3>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>BPC-157 has ZERO human clinical safety data.</strong> All safety and efficacy data comes from animal studies. It is not FDA approved and is classified as a research peptide. The FDA and USADA have issued warnings that BPC-157 "may lead to negative health effects."
                        </p>
                        <a 
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-700 hover:text-yellow-900 font-medium mt-2"
                        >
                          View Comprehensive Safety Review (NCBI)
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="text-gray-700 leading-relaxed">
                      BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide consisting of 15 amino acids derived from a protective protein found in human gastric juice. Originally studied for gastroprotective effects, research has expanded to investigate its potential role in tissue repair, wound healing, and regeneration across multiple organ systems. Despite extensive animal research, BPC-157 remains investigational with no approved clinical applications.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Characteristics</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Molecular Structure</h4>
                        <p className="text-sm text-gray-700">15-amino acid sequence: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Half-Life</h4>
                        <p className="text-sm text-gray-700">Unknown in humans; animal studies suggest rapid clearance</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Administration</h4>
                        <p className="text-sm text-gray-700">Subcutaneous or intramuscular injection (research protocols)</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Stability</h4>
                        <p className="text-sm text-gray-700">Stable in gastric juice; resistant to enzymatic degradation</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Regulatory Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900">Not FDA Approved</p>
                          <p className="text-sm text-gray-700 mt-1">
                            BPC-157 is not approved by the FDA for any indication. It is classified as a research chemical and is not intended for human consumption.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900">USADA Warning</p>
                          <p className="text-sm text-gray-700 mt-1">
                            The U.S. Anti-Doping Agency warns that BPC-157 is prohibited in sport and "may lead to negative health effects" due to lack of safety data.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-yellow-900">Research/Investigational Use Only</p>
                          <p className="text-sm text-gray-700 mt-1">
                            BPC-157 is available for research purposes only. Any human use is off-label and at the user's own risk.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Research History</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>1990s:</strong> Initial discovery and gastroprotective research in Croatia</p>
                      <p><strong>2000s:</strong> Expansion to tissue repair and wound healing animal studies</p>
                      <p><strong>2010s:</strong> Growing interest in tendon/ligament repair applications</p>
                      <p><strong>2020-Present:</strong> Increased scrutiny from FDA and USADA; warnings issued about lack of human safety data</p>
                      <p><strong>2024:</strong> Comprehensive safety review published highlighting absence of human clinical trials</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Investigated Applications (Animal Studies Only)</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Tendon and ligament repair</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Muscle injury healing</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Bone fracture healing</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Gastrointestinal ulcer protection</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Inflammatory bowel disease</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Neuroprotection and brain injury</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Cardiovascular protection</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm text-gray-700">• Wound healing and angiogenesis</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Note: All applications based on animal research only. No human clinical trials have been conducted.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Proposed Mechanisms of Action</CardTitle>
                  <CardDescription>
                    Theoretical mechanisms based on animal research - not validated in humans
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> All proposed mechanisms are derived from animal studies. The relevance and applicability to human physiology remain unvalidated.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Primary Proposed Mechanisms</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                        <h4 className="font-semibold text-cyan-900 mb-2">1. Angiogenesis Promotion</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Animal studies suggest BPC-157 promotes blood vessel formation via VEGFR2 (vascular endothelial growth factor receptor 2) pathway activation. This may enhance tissue perfusion and nutrient delivery to injured areas.
                        </p>
                        <div className="p-3 bg-red-50 border border-red-200 rounded mt-2">
                          <p className="text-sm text-red-800">
                            <strong>⚠️ Cancer Risk Concern:</strong> Angiogenesis promotion could theoretically support tumor growth and metastasis. No human safety data exists to assess this risk.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                        <h4 className="font-semibold text-cyan-900 mb-2">2. Growth Factor Modulation</h4>
                        <p className="text-sm text-gray-700">
                          Research suggests BPC-157 may modulate expression of growth factors including VEGF, EGF (epidermal growth factor), and FGF (fibroblast growth factor), potentially accelerating tissue repair processes.
                        </p>
                      </div>

                      <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                        <h4 className="font-semibold text-cyan-900 mb-2">3. Collagen Formation Enhancement</h4>
                        <p className="text-sm text-gray-700">
                          Animal studies indicate increased collagen synthesis and organization in healing tissues, particularly in tendons and ligaments. Mechanism may involve upregulation of collagen-producing fibroblasts.
                        </p>
                      </div>

                      <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                        <h4 className="font-semibold text-cyan-900 mb-2">4. Anti-Inflammatory Effects</h4>
                        <p className="text-sm text-gray-700">
                          Research suggests modulation of inflammatory cytokines (IL-6, TNF-α) and reduction of oxidative stress in animal models of injury and inflammation.
                        </p>
                      </div>

                      <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                        <h4 className="font-semibold text-cyan-900 mb-2">5. Nitric Oxide (NO) Pathway Interaction</h4>
                        <p className="text-sm text-gray-700">
                          Studies suggest BPC-157 may interact with the NO system, potentially explaining cardiovascular and neuroprotective effects observed in animal models.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pharmacokinetics (Animal Data)</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">Absorption</p>
                        <p className="text-sm text-gray-700">Rapid absorption after subcutaneous or intramuscular injection in animal models. Oral bioavailability suggested but not well-characterized.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">Distribution</p>
                        <p className="text-sm text-gray-700">Unknown in humans. Animal studies suggest systemic distribution with accumulation in injured tissues.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">Metabolism</p>
                        <p className="text-sm text-gray-700">Likely proteolytic degradation. Specific metabolic pathways unknown. Resistant to gastric acid degradation.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-2">Elimination</p>
                        <p className="text-sm text-gray-700">Half-life unknown in humans. Animal data suggests rapid clearance, necessitating frequent dosing in research protocols.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Clinical Data Tab */}
            <TabsContent value="clinical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Evidence & Clinical Data</CardTitle>
                  <CardDescription>
                    Comprehensive review of animal research - NO human clinical trials exist
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-6 w-6 text-red-600 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-900 mb-2">NO Human Clinical Trials</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Despite 30+ years of research and 50+ animal studies, <strong>BPC-157 has ZERO published human clinical trials</strong>. All efficacy and safety data comes from rodent and other animal models. The applicability of these findings to humans is completely unknown.
                        </p>
                        <a 
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-red-700 hover:text-red-900 font-medium mt-2"
                        >
                          View 2024 Comprehensive Safety Review
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Animal Research Summary</h3>
                    <p className="text-gray-700 mb-4">
                      Over 50 animal studies have investigated BPC-157 across various injury and disease models. Key findings include:
                    </p>
                    <div className="space-y-4">
                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Tendon & Ligament Healing (Rodent Studies)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Multiple studies in rats demonstrate accelerated healing of Achilles tendon transection, improved collagen organization, and enhanced biomechanical strength of repaired tendons.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Typical doses: 10 μg/kg to 10 mg/kg daily, administered locally or systemically
                        </p>
                      </div>

                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Muscle Injury (Rodent Studies)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Studies show reduced muscle damage markers, faster recovery of muscle function, and enhanced regeneration in crush injury and laceration models.
                        </p>
                      </div>

                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Gastrointestinal Protection (Rodent Studies)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Original research focus. Studies demonstrate protection against NSAID-induced ulcers, inflammatory bowel disease models, and fistula healing in rats.
                        </p>
                      </div>

                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Bone Healing (Rodent Studies)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Research suggests accelerated fracture healing, improved bone density, and enhanced integration of bone grafts in animal models.
                        </p>
                      </div>

                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                        <h4 className="font-semibold text-teal-900 mb-2">Neuroprotection (Rodent Studies)</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Studies show potential protective effects in traumatic brain injury, spinal cord injury, and stroke models in rats. Mechanisms unclear.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dose Range in Animal Studies</h3>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 mb-3">
                        Animal studies have used doses ranging from <strong>6 μg/kg to 20 mg/kg</strong> body weight, administered daily via injection. This represents a 3,000-fold dose range, making human dose extrapolation highly uncertain.
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Note: There is no established human equivalent dose. Any human use is purely speculative and not based on clinical evidence.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Limitations of Animal Research</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Most studies conducted in rodents; limited large animal data</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Short-term studies (typically 2-4 weeks); no long-term safety data</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Small sample sizes; limited statistical power</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Publication bias likely (negative studies may not be published)</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Unknown translation to human physiology and pathology</p>
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
                  <CardTitle>Safety Profile & Risk Assessment</CardTitle>
                  <CardDescription>
                    Critical safety concerns and absence of human safety data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-900 mb-2">ZERO Human Safety Data</h3>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>BPC-157 has never been tested in humans for safety.</strong> There are no Phase 1, 2, or 3 clinical trials. All safety assumptions are based on animal studies, which may not predict human responses. The FDA and USADA warn that BPC-157 "may lead to negative health effects."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Animal Toxicity Studies</h3>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
                      <h4 className="font-semibold text-green-900 mb-2">No Acute Toxicity Observed (Animal Studies)</h4>
                      <p className="text-sm text-gray-700">
                        Animal studies using doses from 6 μg/kg to 20 mg/kg showed no acute toxicity, organ damage, or mortality. However, these were short-term studies (2-4 weeks) and do not assess long-term safety or chronic toxicity.
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      Important: Absence of acute toxicity in animals does not guarantee human safety. Many drugs safe in animals have proven toxic in humans.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Theoretical Safety Concerns</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Cancer Risk (Angiogenesis Promotion)
                        </h4>
                        <p className="text-sm text-gray-700">
                          <strong>Major Concern:</strong> BPC-157 promotes angiogenesis via VEGFR2 activation. Angiogenesis is essential for tumor growth and metastasis. Theoretically, BPC-157 could support existing tumors or increase cancer risk. <strong>No human data exists to assess this risk.</strong>
                        </p>
                        <a 
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-red-700 hover:text-red-900 mt-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Reference: 2024 Safety Review
                        </a>
                      </div>

                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Unknown Long-Term Effects</h4>
                        <p className="text-sm text-gray-700">
                          No long-term safety studies exist in any species. Chronic effects on organ systems, hormonal balance, immune function, and cancer risk are completely unknown.
                        </p>
                      </div>

                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Unknown Drug Interactions</h4>
                        <p className="text-sm text-gray-700">
                          No studies have investigated interactions with medications, supplements, or other peptides. Potential interactions with anticoagulants, NSAIDs, or immunosuppressants are unknown.
                        </p>
                      </div>

                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Immunogenicity Risk</h4>
                        <p className="text-sm text-gray-700">
                          As a synthetic peptide, BPC-157 could potentially trigger immune responses or antibody formation in humans. This has not been studied.
                        </p>
                      </div>

                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Product Quality Concerns</h4>
                        <p className="text-sm text-gray-700">
                          BPC-157 is not FDA-approved, so sources are unregulated. Purity, sterility, and actual peptide content vary widely. Contamination with endotoxins, heavy metals, or other peptides is possible.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contraindications (Theoretical)</h3>
                    <p className="text-gray-700 mb-4">
                      Since no human safety data exists, these contraindications are based on theoretical concerns and mechanism of action:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Active cancer or history of cancer (angiogenesis concerns)</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Pregnancy or breastfeeding (no safety data)</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Pediatric use (no safety data)</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded">
                        <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Known hypersensitivity to peptides</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Diabetic retinopathy or other angiogenesis-sensitive conditions (theoretical concern)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Reported Adverse Effects (Anecdotal)</h3>
                    <p className="text-gray-700 mb-4">
                      No systematic adverse event reporting exists for BPC-157. Anecdotal reports from online forums and uncontrolled use include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Reported Side Effects</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Injection site reactions (pain, redness)</li>
                          <li>• Headaches</li>
                          <li>• Nausea</li>
                          <li>• Fatigue</li>
                          <li>• Dizziness</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Serious Concerns (Unverified)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Abnormal tissue growth</li>
                          <li>• Hormonal changes</li>
                          <li>• Immune system effects</li>
                          <li>• Unknown long-term consequences</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Note: These reports are anecdotal and unverified. True incidence and causality cannot be determined without controlled studies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Regulatory Warnings</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">FDA Position</h4>
                        <p className="text-sm text-gray-700">
                          The FDA has not approved BPC-157 for any use. It is not recognized as safe or effective. The FDA has issued warning letters to companies marketing BPC-157 for human use.
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">USADA Warning</h4>
                        <p className="text-sm text-gray-700">
                          "BPC-157 is prohibited at all times under the WADA Prohibited List and may lead to negative health effects due to lack of safety data."
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocol Tab */}
            <TabsContent value="protocol" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Protocols & Dosing</CardTitle>
                  <CardDescription>
                    Investigational protocols based on animal research - NOT clinical recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-900 mb-2">Disclaimer</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The following information is provided for research purposes only. <strong>BPC-157 is not approved for human use.</strong> Any human administration is off-label, experimental, and at the user's own risk. This is NOT medical advice or a clinical recommendation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Animal Study Dosing (Reference Only)</h3>
                    <p className="text-gray-700 mb-4">
                      Animal studies have used a wide range of doses. There is no established human equivalent dose.
                    </p>
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Low Dose Range (Animal Studies)</h4>
                        <p className="text-sm text-gray-700">6-10 μg/kg body weight daily</p>
                        <p className="text-xs text-gray-600 mt-1">Used in some gastric protection studies</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Moderate Dose Range (Animal Studies)</h4>
                        <p className="text-sm text-gray-700">10-100 μg/kg body weight daily</p>
                        <p className="text-xs text-gray-600 mt-1">Most common range in tissue repair studies</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">High Dose Range (Animal Studies)</h4>
                        <p className="text-sm text-gray-700">1-20 mg/kg body weight daily</p>
                        <p className="text-xs text-gray-600 mt-1">Used in some acute injury models</p>
                      </div>
                    </div>
                    <p className="text-sm text-red-600 mt-4 font-semibold">
                      ⚠️ Human dose extrapolation from animal data is highly uncertain and potentially dangerous. No safe or effective human dose has been established.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Anecdotal Human Use Patterns (Unverified)</h3>
                    <p className="text-gray-700 mb-4">
                      Based on uncontrolled reports from online forums and self-experimentation. <strong>These are NOT validated protocols.</strong>
                    </p>
                    <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Commonly Reported Dosing (Unverified):</strong>
                      </p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Dose:</strong> 250-500 μg daily (some reports up to 1000 μg)</li>
                        <li>• <strong>Route:</strong> Subcutaneous injection</li>
                        <li>• <strong>Frequency:</strong> Once or twice daily</li>
                        <li>• <strong>Duration:</strong> 2-6 weeks for acute injuries; longer for chronic conditions</li>
                        <li>• <strong>Administration:</strong> Near injury site (local) or abdomen (systemic)</li>
                      </ul>
                      <p className="text-xs text-red-600 mt-3 font-semibold">
                        ⚠️ These patterns are anecdotal, uncontrolled, and not based on clinical evidence. Safety and efficacy are unknown.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Administration Considerations (Research Context)</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Route Options (Animal Studies)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Subcutaneous:</strong> Most common in research; allows systemic distribution</li>
                          <li>• <strong>Intramuscular:</strong> Used in some animal studies</li>
                          <li>• <strong>Local injection:</strong> Direct injection near injury site in animal models</li>
                          <li>• <strong>Oral:</strong> Some animal studies suggest oral bioavailability, but data limited</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Reconstitution (If Using Lyophilized Powder)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Use bacteriostatic water for injection</li>
                          <li>• Typical concentration: 2-5 mg/mL</li>
                          <li>• Gently swirl to dissolve; do not shake vigorously</li>
                          <li>• Refrigerate after reconstitution; use within 30 days</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Injection Technique (Research Context)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Use sterile technique to minimize infection risk</li>
                          <li>• Rotate injection sites to prevent lipodystrophy</li>
                          <li>• Typical injection volume: 0.1-0.5 mL</li>
                          <li>• Use insulin syringes (29-31 gauge) for subcutaneous injection</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Expectations Timeline (Anecdotal - Unverified)</h3>
                    <p className="text-gray-700 mb-4">
                      Based on uncontrolled anecdotal reports. <strong>No validated timeline exists.</strong>
                    </p>
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-1">Days 1-7</p>
                        <p className="text-sm text-gray-700">
                          Some users report reduced pain and inflammation. Mechanism unclear. May be placebo effect.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-1">Weeks 2-4</p>
                        <p className="text-sm text-gray-700">
                          Reports of improved mobility and function in injured areas. Objective measurements lacking.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold mb-1">Weeks 4-8</p>
                        <p className="text-sm text-gray-700">
                          Some users report continued healing and tissue repair. Long-term outcomes unknown.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 italic">
                      Note: These timelines are purely anecdotal. Controlled studies are needed to establish actual efficacy and timeline.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Quality Standards (Critical)</h3>
                    <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
                      <p className="text-gray-700 mb-3">
                        <strong>Major Concern:</strong> BPC-157 is not FDA-regulated, so product quality varies dramatically. Many sources provide impure, contaminated, or mislabeled products.
                      </p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Minimum Quality Standards (If Sourcing):</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• ≥98% peptide purity with Certificate of Analysis (COA)</li>
                        <li>• Endotoxin testing (&lt;10 EU/mg)</li>
                        <li>• Third-party testing verification (HPLC, mass spectrometry)</li>
                        <li>• Sterile manufacturing for injectable products</li>
                        <li>• Proper storage conditions (refrigerated)</li>
                        <li>• Avoid sources without COA or testing documentation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Risk Management</CardTitle>
                  <CardDescription>
                    Theoretical monitoring framework - no validated protocols exist
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Important:</strong> Since BPC-157 has no human safety data, there are no validated monitoring protocols. The following represents a theoretical framework based on mechanism of action and potential risks.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pre-Use Screening (Theoretical)</h3>
                    <p className="text-gray-700 mb-4">
                      If considering BPC-157 use (research context only), comprehensive screening should include:
                    </p>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Medical History</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Personal or family history of cancer</li>
                          <li>• History of abnormal tissue growth or tumors</li>
                          <li>• Cardiovascular disease</li>
                          <li>• Autoimmune conditions</li>
                          <li>• Allergies to peptides or medications</li>
                          <li>• Current medications and supplements</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Baseline Laboratory Testing (Theoretical)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Complete blood count (CBC)</li>
                          <li>• Comprehensive metabolic panel (CMP)</li>
                          <li>• Liver function tests (ALT, AST, ALP)</li>
                          <li>• Kidney function (creatinine, BUN, eGFR)</li>
                          <li>• Inflammatory markers (CRP, ESR)</li>
                          <li>• Tumor markers if cancer risk factors present</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Physical Assessment</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Baseline vital signs (BP, HR, temp)</li>
                          <li>• Skin examination for abnormal growths</li>
                          <li>• Lymph node examination</li>
                          <li>• Injury site assessment (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ongoing Monitoring (Theoretical Framework)</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                        <p className="font-semibold text-green-900 mb-2">Weekly (First Month)</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Monitor injection site for reactions</li>
                          <li>• Assess for any new symptoms or side effects</li>
                          <li>• Track pain levels and functional improvement (if treating injury)</li>
                          <li>• Monitor for signs of infection</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                        <p className="font-semibold text-green-900 mb-2">Monthly (If Continuing Beyond 4 Weeks)</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Repeat CBC, CMP, liver/kidney function</li>
                          <li>• Monitor for abnormal tissue growth or masses</li>
                          <li>• Assess cardiovascular parameters (BP, HR)</li>
                          <li>• Document efficacy (or lack thereof)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                        <p className="font-semibold text-green-900 mb-2">Every 3-6 Months (Long-Term)</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Comprehensive physical examination</li>
                          <li>• Cancer screening appropriate for age/risk factors</li>
                          <li>• Imaging if indicated (ultrasound, MRI for tissue assessment)</li>
                          <li>• Reassess risk-benefit ratio</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Warning Signs - Immediate Discontinuation</h3>
                    <p className="text-gray-700 mb-4">
                      Discontinue BPC-157 immediately and seek medical evaluation if any of the following occur:
                    </p>
                    <div className="space-y-3">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Abnormal Tissue Growth
                        </h4>
                        <p className="text-sm text-gray-700">
                          New lumps, masses, or abnormal tissue growth anywhere in the body. Given angiogenesis concerns, any unexplained growth warrants immediate evaluation.
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Severe Allergic Reaction
                        </h4>
                        <p className="text-sm text-gray-700">
                          Rash, hives, difficulty breathing, swelling of face/throat, rapid heart rate. Seek emergency medical care.
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Cardiovascular Symptoms
                        </h4>
                        <p className="text-sm text-gray-700">
                          Chest pain, irregular heartbeat, severe hypertension, shortness of breath. Unknown cardiovascular effects require immediate assessment.
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Severe Injection Site Reactions
                        </h4>
                        <p className="text-sm text-gray-700">
                          Severe pain, spreading redness, warmth, pus, or signs of infection. May indicate contaminated product or severe local reaction.
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Neurological Symptoms
                        </h4>
                        <p className="text-sm text-gray-700">
                          Severe headaches, vision changes, seizures, numbness, weakness. Unknown neurological effects require evaluation.
                        </p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Abnormal Laboratory Results
                        </h4>
                        <p className="text-sm text-gray-700">
                          Significant changes in liver enzymes, kidney function, blood counts, or other lab values. May indicate organ toxicity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Long-Term Surveillance (Theoretical)</h3>
                    <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                      <p className="text-gray-700 mb-3">
                        <strong>Critical Concern:</strong> Long-term effects of BPC-157 are completely unknown. Even if short-term use appears safe, delayed effects (cancer, organ damage, immune dysfunction) could emerge years later.
                      </p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Recommended Long-Term Surveillance:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Annual comprehensive physical examinations</li>
                        <li>• Age-appropriate cancer screening (enhanced vigilance)</li>
                        <li>• Periodic imaging of previously injured areas</li>
                        <li>• Monitoring for autoimmune or inflammatory conditions</li>
                        <li>• Documentation of any unusual health changes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Risk-Benefit Assessment</h3>
                    <p className="text-gray-700 mb-4">
                      Before considering BPC-157 use, carefully weigh:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">Known Risks</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Zero human safety data</li>
                          <li>• Theoretical cancer risk (angiogenesis)</li>
                          <li>• Unknown long-term effects</li>
                          <li>• Product quality concerns</li>
                          <li>• Regulatory warnings (FDA, USADA)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Potential Benefits (Unproven)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Accelerated tissue repair (animal data only)</li>
                          <li>• Reduced inflammation (animal data only)</li>
                          <li>• Improved healing (animal data only)</li>
                          <li>• Anecdotal human reports (unverified)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-red-600 mt-4 font-semibold">
                      ⚠️ Given the absence of human safety data and theoretical cancer risks, the risk-benefit ratio of BPC-157 is highly unfavorable for most individuals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Research-Grade Peptides?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            DrsPeptides.com provides pharmaceutical-grade peptides with comprehensive quality assurance for research and healthcare provider use.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="gap-2">
                Visit DrsPeptides.com
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
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
