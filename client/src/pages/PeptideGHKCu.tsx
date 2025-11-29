import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Dna, TrendingUp, Shield, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PeptideGHKCu() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Peptide Therapy Hub
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Copper Peptide Complex
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              GHK-Cu
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A naturally occurring copper peptide complex that regulates <strong>31.2% of the human genome</strong> (4,200 genes). Clinically superior to Vitamin C and Retinoic Acid for collagen synthesis. Demonstrates biphasic angiogenesis, stem cell activation, and anti-inflammatory effects. Declines 60% from age 20 to 60.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Dna className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">31.2%</p>
                  <p className="text-gray-600 text-sm">Genome Regulation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">75%</p>
                  <p className="text-gray-600 text-sm">Better than Retinoic Acid</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Sparkles className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">12.5x</p>
                  <p className="text-gray-600 text-sm">Fibroblast Viability</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">408</p>
                  <p className="text-gray-600 text-sm">Neuron Genes Upregulated</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Clinical Evidence Alert */}
          <Alert className="mb-8 border-purple-200 bg-purple-50">
            <AlertDescription>
              <p className="text-purple-900 font-semibold mb-2">Landmark Research (185 Citations)</p>
              <p className="text-purple-800 text-sm">
                <strong>Pickart L et al. (2012):</strong> "The Human Tri-Peptide GHK-Cu in Prevention of Oxidative Stress and Degenerative Conditions of Aging: Implications for Cognitive Health." Published in <em>Oxidative Medicine and Cellular Longevity</em>. <strong>Key finding:</strong> GHK-Cu affects <strong>31.2% of the human genome</strong> (4,200 genes), with 2,687 genes stimulated and 1,513 genes suppressed. Some genes increased by up to <strong>1,294%</strong> (opioid receptor). <strong>Clinical significance:</strong> One of the most genomically active peptides ever studied.
              </p>
            </AlertDescription>
          </Alert>

          {/* Genome Regulation Alert */}
          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <Dna className="h-5 w-5 text-blue-600" />
            <AlertDescription className="ml-2">
              <p className="text-blue-900 font-semibold mb-2">Unprecedented Genomic Impact</p>
              <p className="text-blue-800 text-sm mb-2">
                <strong>4,200 total genes regulated:</strong> 2,687 stimulated + 1,513 suppressed = 31.2% of human genome
              </p>
              <p className="text-blue-800 text-sm mb-2">
                <strong>408 neuron-specific genes upregulated:</strong> Neuroprotection, cognitive health, brain aging
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Extreme gene expression changes:</strong> Some genes increased by 1,294% (opioid receptor), demonstrating profound regulatory capacity
              </p>
            </AlertDescription>
          </Alert>

          {/* Main Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6">
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
                  <CardTitle>What is GHK-Cu?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    GHK-Cu (Glycyl-L-Histidyl-L-Lysine-Copper) is a <strong>naturally occurring copper peptide complex</strong> consisting of three amino acids (Gly-His-Lys) bound to a copper ion (Cu²⁺). It was first discovered in human plasma and has since been identified as one of the most genomically active peptides ever studied, affecting <strong>31.2% of the entire human genome</strong>.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-3">Natural Injury Sensor & Repair Signal</h4>
                    <p className="text-purple-800 text-sm leading-relaxed mb-3">
                      GHK-Cu is <strong>released from collagen during tissue damage</strong>, acting as a natural injury sensor. When tissues are wounded, collagen breakdown releases GHK-Cu into the bloodstream, triggering a cascade of repair processes including:
                    </p>
                    <ul className="space-y-1 text-purple-800 text-sm">
                      <li>• Recruitment of immune cells to injury site</li>
                      <li>• Activation of stem cells for tissue regeneration</li>
                      <li>• Stimulation of fibroblast collagen production</li>
                      <li>• Angiogenesis for nutrient delivery</li>
                      <li>• Anti-inflammatory signaling to prevent excess damage</li>
                    </ul>
                    <p className="text-purple-800 text-sm mt-3">
                      <strong>Age-related decline:</strong> Plasma levels drop from <strong>200 ng/mL at age 20</strong> to <strong>80 ng/mL at age 60</strong> (60% decline), potentially explaining reduced healing capacity with aging.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Primary Applications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Skin & Aesthetics</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Collagen synthesis stimulation</li>
                          <li>• Wrinkle reduction (31.6% better than Matrixyl)</li>
                          <li>• Skin elasticity improvement</li>
                          <li>• Scar tissue remodeling</li>
                          <li>• Hair follicle growth support</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Wound Healing</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Accelerated tissue repair</li>
                          <li>• Improved wound contraction</li>
                          <li>• Enhanced angiogenesis</li>
                          <li>• Reduced scarring</li>
                          <li>• Diabetic ulcer healing</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Anti-Aging & Longevity</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Genome-wide anti-aging gene activation</li>
                          <li>• Stem cell "stemness" increase</li>
                          <li>• Oxidative stress reduction</li>
                          <li>• Mitochondrial function support</li>
                          <li>• Tissue regeneration capacity restoration</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Neuroprotection</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• 408 neuron-specific genes upregulated</li>
                          <li>• Cognitive function support</li>
                          <li>• Brain aging protection</li>
                          <li>• Neuroinflammation reduction</li>
                          <li>• Neurodegenerative disease research</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Clinical Superiority Data</h4>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <p className="font-semibold text-green-900 mb-3">Head-to-Head Comparison Studies</p>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-900 text-sm">vs Matrixyl® 3000 (Popular Cosmetic Peptide)</p>
                          <p className="text-green-800 text-sm"><strong>31.6% better wrinkle reduction</strong> in clinical trials</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-900 text-sm">vs Vitamin C (Gold Standard Antioxidant)</p>
                          <p className="text-green-800 text-sm"><strong>40% more women showed collagen improvement</strong> with GHK-Cu</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-900 text-sm">vs Retinoic Acid (Prescription Retinoid)</p>
                          <p className="text-green-800 text-sm"><strong>75% more women showed collagen improvement</strong> with GHK-Cu</p>
                        </div>
                      </div>
                      <p className="text-green-800 text-sm mt-3">
                        <strong>Clinical significance:</strong> GHK-Cu outperforms both over-the-counter and prescription anti-aging treatments in collagen synthesis and wrinkle reduction.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Appears in Stacking Protocols</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-900 text-sm">Recover Like Wolverine Stack</p>
                          <p className="text-blue-800 text-sm">Combined with BPC-157, TB-500, Ipamorelin, Tesamorelin for injury healing</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      See complete protocol in <Link href="/stacking-guide"><a className="underline font-semibold text-blue-600">Peptide Stacking Guide</a></Link>
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">LED Light Therapy Synergy</h4>
                    <p className="text-blue-800 text-sm leading-relaxed mb-2">
                      <strong>12.5-fold increase in fibroblast viability:</strong> When GHK-Cu is combined with LED light therapy (particularly red/near-infrared wavelengths), fibroblast cell viability increases by <strong>1,250%</strong> compared to GHK-Cu alone.
                    </p>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      <strong>Mechanism:</strong> LED photobiomodulation enhances mitochondrial ATP production, while GHK-Cu provides genomic signaling for collagen synthesis. Combined effect creates synergistic tissue repair acceleration.
                    </p>
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
                    <h4 className="font-semibold text-gray-900 mb-4">1. Genome-Wide Gene Regulation (31.2% of Human Genome)</h4>
                    <p className="text-gray-700 mb-3">
                      GHK-Cu demonstrates <strong>unprecedented genomic regulatory capacity</strong>, affecting 4,200 genes across multiple biological systems:
                    </p>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                          <p className="font-semibold text-purple-900 mb-2">2,687 Genes Stimulated (Upregulated)</p>
                          <ul className="space-y-1 text-purple-800 text-sm">
                            <li>• Collagen synthesis genes (COL1A1, COL3A1)</li>
                            <li>• Antioxidant defense genes (SOD, catalase, glutathione peroxidase)</li>
                            <li>• DNA repair genes (p53, BRCA1)</li>
                            <li>• Stem cell pluripotency genes (Oct4, Nanog)</li>
                            <li>• Neuron-specific genes (408 total - BDNF, NGF, synaptic proteins)</li>
                            <li>• Angiogenesis genes (VEGF, FGF)</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                          <p className="font-semibold text-purple-900 mb-2">1,513 Genes Suppressed (Downregulated)</p>
                          <ul className="space-y-1 text-purple-800 text-sm">
                            <li>• Pro-inflammatory cytokine genes (IL-6, TNF-α, IL-1β)</li>
                            <li>• Matrix metalloproteinase genes (MMP-1, MMP-2 - collagen breakdown)</li>
                            <li>• Oxidative stress genes</li>
                            <li>• Fibrotic scar tissue genes (TGF-β pathway modulation)</li>
                            <li>• Cancer-associated genes (in some contexts)</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-purple-800 text-sm mt-3">
                        <strong>Extreme expression changes:</strong> Some genes showed up to <strong>1,294% increase</strong> (opioid receptor), demonstrating GHK-Cu's profound regulatory capacity beyond typical peptide signaling.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">2. Copper Ion Delivery & Metalloprotein Activation</h4>
                    <p className="text-gray-700 mb-3">
                      The copper (Cu²⁺) component of GHK-Cu is essential for numerous enzymatic processes:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Lysyl oxidase activation:</strong> Copper-dependent enzyme that cross-links collagen and elastin fibers, providing structural integrity to skin and tissues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Superoxide dismutase (SOD) activation:</strong> Copper-zinc SOD is a primary antioxidant enzyme that neutralizes superoxide radicals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Cytochrome c oxidase support:</strong> Mitochondrial copper-dependent enzyme essential for ATP production</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Tyrosinase modulation:</strong> Copper-dependent enzyme involved in melanin synthesis and wound healing</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">3. Biphasic Angiogenesis (Context-Dependent Blood Vessel Regulation)</h4>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-3">Unique Dual-Phase Mechanism</p>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">Phase 1: Pro-Angiogenic (Early Wound Healing)</p>
                          <p className="text-blue-800 text-sm mb-2">
                            <strong>When:</strong> Low GHK-Cu concentrations, early tissue injury, hypoxic conditions
                          </p>
                          <p className="text-blue-800 text-sm">
                            <strong>Effect:</strong> Stimulates VEGF expression, promotes endothelial cell migration, increases blood vessel formation to deliver nutrients and oxygen to healing tissues
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">Phase 2: Anti-Angiogenic (Late Remodeling)</p>
                          <p className="text-blue-800 text-sm mb-2">
                            <strong>When:</strong> Higher GHK-Cu concentrations, later healing stages, normoxic conditions
                          </p>
                          <p className="text-blue-800 text-sm">
                            <strong>Effect:</strong> Inhibits excess blood vessel formation, prevents pathological angiogenesis (cancer, diabetic retinopathy), promotes vascular remodeling and maturation
                          </p>
                        </div>
                      </div>
                      <p className="text-blue-800 text-sm mt-3">
                        <strong>Clinical significance:</strong> This biphasic mechanism allows GHK-Cu to promote healing when needed while preventing pathological vessel overgrowth, making it safer than purely pro-angiogenic peptides.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">4. Stem Cell Activation & "Stemness" Enhancement</h4>
                    <p className="text-gray-700 mb-3">
                      GHK-Cu increases the "stemness" of epidermal basal cells, enhancing their regenerative capacity:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Pluripotency gene upregulation:</strong> Increases expression of Oct4, Nanog, and Sox2 (master stem cell transcription factors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Stem cell mobilization:</strong> Recruits stem cells to injury sites for tissue regeneration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Differentiation guidance:</strong> Directs stem cells toward appropriate lineages (fibroblasts, keratinocytes, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Niche preservation:</strong> Maintains stem cell niches in skin, hair follicles, and other tissues</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">5. Anti-Inflammatory Signaling</h4>
                    <p className="text-gray-700 mb-3">
                      GHK-Cu modulates inflammatory responses to promote healing without chronic inflammation:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Cytokine suppression:</strong> Downregulates IL-6, TNF-α, IL-1β (pro-inflammatory cytokines)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>NF-κB pathway inhibition:</strong> Reduces master inflammatory transcription factor activity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Oxidative stress reduction:</strong> Increases antioxidant enzyme expression (SOD, catalase, GPx)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Macrophage polarization:</strong> Shifts macrophages from M1 (pro-inflammatory) to M2 (pro-healing) phenotype</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">6. Collagen Synthesis & Remodeling</h4>
                    <p className="text-gray-700 mb-3">
                      GHK-Cu stimulates collagen production while preventing excessive scarring:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Type I & III collagen upregulation:</strong> Increases COL1A1 and COL3A1 gene expression</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>MMP suppression:</strong> Reduces matrix metalloproteinases (MMP-1, MMP-2) that break down collagen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>TGF-β modulation:</strong> Balances fibrotic vs regenerative healing (prevents keloid formation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Elastin production:</strong> Supports skin elasticity and resilience</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">7. Neuroprotective Mechanisms (408 Neuron Genes)</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>BDNF upregulation:</strong> Brain-derived neurotrophic factor for neuronal survival</li>
                        <li><strong>NGF stimulation:</strong> Nerve growth factor for neurite outgrowth</li>
                        <li><strong>Synaptic protein expression:</strong> Supports synaptic plasticity and memory</li>
                        <li><strong>Neuroinflammation reduction:</strong> Protects against microglial activation</li>
                        <li><strong>Mitochondrial support:</strong> Enhances neuronal energy metabolism</li>
                        <li><strong>Oxidative stress protection:</strong> Reduces ROS damage in brain tissue</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab continues with comprehensive studies... */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-purple-200 bg-purple-50">
                    <AlertDescription>
                      <p className="text-purple-900 font-semibold mb-2">Landmark Study</p>
                      <p className="text-purple-800 text-sm mb-2">
                        <strong>Pickart L et al. (2012) - 185 Citations:</strong> "The Human Tri-Peptide GHK-Cu in Prevention of Oxidative Stress and Degenerative Conditions of Aging: Implications for Cognitive Health." <em>Oxidative Medicine and Cellular Longevity.</em>
                      </p>
                      <p className="text-purple-800 text-sm">
                        <strong>Key findings:</strong> GHK-Cu regulates 31.2% of human genome (4,200 genes), with 2,687 stimulated and 1,513 suppressed. Affects 408 neuron-specific genes. Some genes increased by 1,294%. Demonstrates anti-aging, neuroprotective, and regenerative effects across multiple organ systems.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Genome-Wide Gene Regulation Studies</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">31.2% of Human Genome Affected (185 Citations)</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Pickart L et al. (2012):</strong> Comprehensive analysis of GHK-Cu's genomic effects using microarray technology.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Findings:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• <strong>4,200 total genes regulated</strong> (2,687 upregulated + 1,513 downregulated)</li>
                        <li>• <strong>408 neuron-specific genes upregulated</strong> (BDNF, NGF, synaptic proteins)</li>
                        <li>• <strong>Extreme expression changes:</strong> Up to 1,294% increase (opioid receptor)</li>
                        <li>• <strong>Anti-aging gene profile:</strong> Activates DNA repair, antioxidant defense, stem cell genes</li>
                        <li>• <strong>Anti-inflammatory profile:</strong> Suppresses IL-6, TNF-α, MMP genes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Clinical Superiority Studies</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">vs Matrixyl® 3000 (Popular Cosmetic Peptide)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> GHK-Cu demonstrated <strong>31.6% better wrinkle reduction</strong> compared to Matrixyl 3000 in head-to-head clinical trials.
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Significance:</strong> Matrixyl is one of the most popular and well-studied cosmetic peptides, making this comparison particularly meaningful for aesthetic applications.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">vs Vitamin C (Gold Standard Antioxidant)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> <strong>40% more women showed collagen improvement</strong> with GHK-Cu compared to Vitamin C in clinical trials.
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Significance:</strong> Vitamin C is considered the gold standard for collagen synthesis stimulation, yet GHK-Cu outperformed it significantly.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">vs Retinoic Acid (Prescription Retinoid)</h5>
                        <p className="text-gray-700 text-sm mb-2">
                          <strong>Finding:</strong> <strong>75% more women showed collagen improvement</strong> with GHK-Cu compared to Retinoic Acid (prescription tretinoin).
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Significance:</strong> Retinoic acid is the prescription-strength gold standard for anti-aging, yet GHK-Cu showed superior collagen synthesis with better tolerability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">LED Light Therapy Synergy Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">12.5-Fold Increase in Fibroblast Viability</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> When GHK-Cu is combined with LED light therapy (red/near-infrared wavelengths), fibroblast cell viability increases by <strong>1,250%</strong> compared to GHK-Cu alone.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Mechanism:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• LED photobiomodulation enhances mitochondrial ATP production</li>
                        <li>• GHK-Cu provides genomic signaling for collagen synthesis</li>
                        <li>• Combined effect creates synergistic tissue repair acceleration</li>
                        <li>• Optimal wavelengths: 630-670nm (red) and 810-850nm (near-infrared)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Age-Related Decline Research</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">60% Decline from Age 20 to 60</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Finding:</strong> Plasma GHK-Cu levels decline dramatically with age:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• <strong>Age 20:</strong> ~200 ng/mL (peak levels)</li>
                        <li>• <strong>Age 60:</strong> ~80 ng/mL (60% decline)</li>
                        <li>• <strong>Correlation:</strong> Decline parallels reduced healing capacity, skin aging, cognitive decline</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Implication:</strong> Supplementation may restore youthful tissue repair and regenerative capacity.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Wound Healing & Tissue Repair Studies</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Accelerated Wound Closure</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Multiple studies demonstrate:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Faster wound contraction rates (30-50% improvement)</li>
                        <li>• Enhanced re-epithelialization</li>
                        <li>• Improved wound tensile strength</li>
                        <li>• Reduced scar formation (better collagen organization)</li>
                        <li>• Diabetic ulcer healing support</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Neuroprotection Research (408 Neuron Genes)</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Cognitive Health & Brain Aging</h5>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Findings:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• <strong>408 neuron-specific genes upregulated</strong> (BDNF, NGF, synaptic proteins)</li>
                        <li>• Protects against oxidative stress in brain tissue</li>
                        <li>• Reduces neuroinflammation (microglial activation)</li>
                        <li>• Supports synaptic plasticity and memory formation</li>
                        <li>• Potential applications in neurodegenerative disease research</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-3">Research Limitations</h4>
                    <ul className="space-y-2 text-yellow-800 text-sm">
                      <li>• Most human studies focus on topical/cosmetic applications, not systemic injection</li>
                      <li>• Long-term safety data for injectable GHK-Cu limited</li>
                      <li>• Optimal dosing protocols for systemic use not fully established</li>
                      <li>• Neuroprotection studies mostly preclinical (animal models)</li>
                      <li>• Biphasic angiogenesis mechanism requires more clinical validation</li>
                      <li>• Not FDA-approved for therapeutic use (research peptide status)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab continues... */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols & Administration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertDescription>
                      <p className="text-blue-900 font-semibold mb-2">Multiple Administration Routes Available</p>
                      <p className="text-blue-800 text-sm">
                        GHK-Cu can be administered via <strong>subcutaneous injection, topical application, or oral supplementation</strong>. Each route has different bioavailability and applications. See complete protocols in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Subcutaneous Injection Protocols</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Standard Protocol (Systemic Effects)</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 1-2mg per injection</li>
                          <li><strong>Frequency:</strong> 2-3x weekly</li>
                          <li><strong>Timing:</strong> Any time of day (not timing-dependent)</li>
                          <li><strong>Duration:</strong> 8-12 weeks on, 4-8 weeks off</li>
                          <li><strong>Total weekly:</strong> 3-6mg</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Anti-aging, tissue repair, neuroprotection, systemic regeneration
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-3">Injury/Wound Healing Protocol</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Dose:</strong> 2-3mg per injection</li>
                          <li><strong>Frequency:</strong> Daily or every other day</li>
                          <li><strong>Location:</strong> Near injury site (if possible)</li>
                          <li><strong>Duration:</strong> Until wound healed + 2 weeks</li>
                          <li><strong>Total weekly:</strong> 6-15mg (higher for acute healing)</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-3">
                          <strong>Best for:</strong> Wound healing, post-surgical recovery, scar reduction
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Topical Application Protocols</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Cosmetic/Skin Health Protocol</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Concentration:</strong> 0.5-2% GHK-Cu in serum/cream</li>
                        <li><strong>Frequency:</strong> 1-2x daily (morning and/or evening)</li>
                        <li><strong>Application:</strong> Clean skin, apply to face/neck/target areas</li>
                        <li><strong>Duration:</strong> Continuous use (no cycling required for topical)</li>
                        <li><strong>Absorption:</strong> ~5-10% penetrates dermis (still effective)</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-3">
                        <strong>Best for:</strong> Wrinkle reduction, skin elasticity, collagen synthesis, anti-aging aesthetics
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>LED synergy:</strong> Apply GHK-Cu serum, then use red/NIR LED device (630-850nm) for 10-20 minutes to achieve 12.5x fibroblast viability increase
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Oral Supplementation Protocol</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Oral GHK-Cu (Lower Bioavailability)</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Dose:</strong> 50-200mg per day (higher due to poor absorption)</li>
                        <li><strong>Frequency:</strong> Once daily with food</li>
                        <li><strong>Bioavailability:</strong> ~1-5% (much lower than injection)</li>
                        <li><strong>Duration:</strong> Continuous use or 8 weeks on, 4 weeks off</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-3">
                        <strong>Best for:</strong> Convenience, general wellness, gut health support
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Note:</strong> Oral route less effective than injection for systemic effects due to poor absorption and first-pass metabolism
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Stacking Protocols</h4>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <p className="font-semibold text-green-900 mb-3">Recover Like Wolverine Stack (Ben Greenfield)</p>
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <ul className="space-y-1 text-green-800 text-sm">
                          <li>• <strong>GHK-Cu:</strong> 2mg, 3x weekly (collagen synthesis, tissue remodeling)</li>
                          <li>• <strong>BPC-157:</strong> 250-500mcg daily (gut-systemic healing, angiogenesis)</li>
                          <li>• <strong>TB-500:</strong> 2-5mg, 2x weekly (actin regulation, tissue repair)</li>
                          <li>• <strong>Ipamorelin:</strong> 200-300mcg before bed (GH optimization, recovery)</li>
                          <li>• <strong>Tesamorelin:</strong> 1mg before bed (visceral fat reduction, GH release)</li>
                        </ul>
                        <p className="text-green-800 text-sm mt-3">
                          <strong>Synergy:</strong> Multi-mechanism approach targeting angiogenesis (BPC-157), actin regulation (TB-500), collagen synthesis (GHK-Cu), and GH optimization (Ipamorelin/Tesamorelin)
                        </p>
                      </div>
                      <p className="text-green-800 text-sm mt-3">
                        See complete protocol in <Link href="/stacking-guide"><a className="underline font-semibold">Peptide Stacking Guide</a></Link>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Administration Routes Comparison</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-900">Route</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Bioavailability</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Best Applications</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Convenience</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Subcutaneous</td>
                            <td className="p-3 text-green-600">~80-90%</td>
                            <td className="p-3 text-gray-600">Systemic anti-aging, wound healing, neuroprotection</td>
                            <td className="p-3 text-yellow-600">Moderate (injection required)</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-semibold text-gray-700">Topical</td>
                            <td className="p-3 text-yellow-600">~5-10%</td>
                            <td className="p-3 text-gray-600">Cosmetic, skin health, wrinkle reduction</td>
                            <td className="p-3 text-green-600">High (easy application)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-gray-700">Oral</td>
                            <td className="p-3 text-red-600">~1-5%</td>
                            <td className="p-3 text-gray-600">General wellness, gut health, convenience</td>
                            <td className="p-3 text-green-600">High (capsule/powder)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Timing Strategies</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Not timing-dependent:</strong> GHK-Cu can be administered any time of day (unlike GH secretagogues)</li>
                        <li><strong>Topical application:</strong> Morning and/or evening after cleansing</li>
                        <li><strong>LED combination:</strong> Apply topical GHK-Cu, wait 5-10 min, then LED therapy (630-850nm, 10-20 min)</li>
                        <li><strong>Injection consistency:</strong> Same days each week maintains stable plasma levels</li>
                        <li><strong>Wound healing:</strong> Daily or every-other-day dosing for acute injuries</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Cycling Protocols</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-3">Injectable GHK-Cu Cycling</h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Standard cycle:</strong> 8-12 weeks on, 4-8 weeks off</li>
                        <li><strong>Wound healing cycle:</strong> Daily/EOD until healed + 2 weeks, then stop</li>
                        <li><strong>Rationale:</strong> Prevents potential receptor desensitization, allows natural GHK-Cu production to resume</li>
                        <li><strong>Topical use:</strong> No cycling required (low systemic absorption)</li>
                      </ul>
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
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertDescription className="ml-2">
                      <p className="text-green-900 font-semibold mb-2">Generally Well-Tolerated</p>
                      <p className="text-green-800 text-sm">
                        GHK-Cu is a <strong>naturally occurring peptide</strong> found in human plasma, making it generally well-tolerated with minimal side effects. However, <strong>NOT FDA-approved</strong> for therapeutic use. Any systemic use should be under qualified healthcare provider supervision.
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
                          <p className="text-red-800 text-sm">GHK-Cu stimulates cell proliferation and angiogenesis. While biphasic angiogenesis may be protective, <strong>avoid if cancer diagnosed within past 5 years.</strong></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Pregnancy or Breastfeeding</p>
                          <p className="text-red-800 text-sm">No safety data available for pregnant/nursing women. <strong>Do not use systemically.</strong> Topical use may be acceptable but consult physician.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-red-900 text-sm">Wilson's Disease or Copper Metabolism Disorders</p>
                          <p className="text-red-800 text-sm">GHK-Cu delivers copper ions. <strong>Avoid in copper accumulation disorders.</strong></p>
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
                          <p className="text-yellow-800 text-sm">Increased caution warranted. Discuss with oncologist before systemic use.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Diabetic Retinopathy or Macular Degeneration</p>
                          <p className="text-yellow-800 text-sm">Angiogenic effects may worsen retinal conditions. Ophthalmologist consultation required.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 text-sm">Keloid or Hypertrophic Scar History</p>
                          <p className="text-yellow-800 text-sm">GHK-Cu stimulates collagen synthesis. Monitor closely for excessive scarring.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Reported Side Effects</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Common (Generally Mild)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Injection site reactions (redness, mild swelling)</li>
                          <li>• Temporary skin flushing (topical use)</li>
                          <li>• Mild headaches (rare, usually transient)</li>
                          <li>• Metallic taste (oral supplementation)</li>
                          <li>• Minimal side effects overall (well-tolerated)</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Rare (Seek Medical Attention)</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Severe injection site pain or abscess</li>
                          <li>• Allergic reactions (rash, hives, difficulty breathing)</li>
                          <li>• Excessive scarring or keloid formation</li>
                          <li>• Vision changes (retinal concerns)</li>
                          <li>• Copper toxicity symptoms (nausea, vomiting, liver issues)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Pre-Treatment Requirements</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-blue-900 text-sm">
                        <li><strong>Physician consultation:</strong> Recommended before starting systemic GHK-Cu therapy</li>
                        <li><strong>Cancer screening:</strong> Comprehensive screening for angiogenic peptides</li>
                        <li><strong>Copper levels:</strong> Check serum copper and ceruloplasmin (especially if Wilson's disease risk)</li>
                        <li><strong>Medical history review:</strong> Disclose all conditions, medications, supplements</li>
                        <li><strong>Source verification:</strong> Ensure pharmaceutical-grade, &gt;98% purity, COA available</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Monitoring During Treatment</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Regular physician check-ins:</strong> Every 8-12 weeks during active treatment</li>
                        <li><strong>Cancer screening:</strong> Every 6-12 months for angiogenic peptides</li>
                        <li><strong>Copper levels:</strong> Monitor serum copper if using high doses long-term</li>
                        <li><strong>Skin monitoring:</strong> Watch for excessive scarring or keloid formation</li>
                        <li><strong>Efficacy assessment:</strong> Track wound healing, skin quality, energy levels</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Quality & Sourcing Standards</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Required Quality Standards:</p>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li>• <strong>Purity:</strong> &gt;98% (verified by HPLC)</li>
                        <li>• <strong>Certificate of Analysis (COA):</strong> Must be provided by supplier</li>
                        <li>• <strong>Copper content:</strong> Verified Cu²⁺ binding (not just GHK peptide alone)</li>
                        <li>• <strong>Endotoxin testing:</strong> &lt;0.1 EU/mg (prevents bacterial contamination)</li>
                        <li>• <strong>GMP compliance:</strong> Manufactured in cGMP-certified facility</li>
                        <li>• <strong>Third-party testing:</strong> Independent lab verification preferred</li>
                      </ul>
                      <p className="text-green-800 text-sm mt-3">
                        <strong>Red flags to avoid:</strong> No COA provided, unclear copper content, international sources without credentials, suspiciously low prices.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Drug Interactions</h4>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Copper supplements:</strong> May increase copper levels excessively (monitor)</li>
                        <li><strong>Zinc supplements:</strong> High-dose zinc competes with copper absorption</li>
                        <li><strong>Chelating agents:</strong> May bind copper and reduce GHK-Cu effectiveness</li>
                        <li><strong>Anticoagulants:</strong> Theoretical increased bleeding risk with angiogenic peptides (monitor)</li>
                        <li><strong>Immunosuppressants:</strong> GHK-Cu may modulate immune function (consult physician)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Safety Advantages of GHK-Cu</h4>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li>• <strong>Naturally occurring:</strong> Found in human plasma (not synthetic/foreign)</li>
                      <li>• <strong>Biphasic angiogenesis:</strong> Stimulates early, inhibits late (safer than purely pro-angiogenic peptides)</li>
                      <li>• <strong>Well-tolerated:</strong> Minimal side effects in clinical and anecdotal reports</li>
                      <li>• <strong>Multiple routes:</strong> Topical option available for those avoiding injections</li>
                      <li>• <strong>Decades of research:</strong> Extensive safety profile from cosmetic industry use</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Monitoring & Follow-Up</CardTitle>
                  <CardDescription>
                    Comprehensive monitoring protocols for GHK-Cu therapy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Pre-Treatment Screening</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Required Baseline Assessments</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li><strong>Medical History:</strong> Screen for active cancer, bleeding disorders, copper sensitivity, pregnancy</li>
                        <li><strong>Baseline Labs:</strong> CBC, CMP (liver/kidney function), serum copper levels if history of copper disorders</li>
                        <li><strong>Skin Assessment:</strong> Document baseline skin condition, wounds, scars</li>
                        <li><strong>Cancer Screening:</strong> Ensure up-to-date with age-appropriate screenings</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Monitoring Schedule</h3>
                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Week 4</h4>
                        <p className="text-sm text-gray-700">Injection site assessment, adverse event screening, early response evaluation</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">Month 3</h4>
                        <p className="text-sm text-gray-700">CBC, CMP, clinical response assessment, skin quality evaluation</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold">Month 6</h4>
                        <p className="text-sm text-gray-700">Comprehensive safety check, efficacy evaluation, risk-benefit reassessment</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-red-600">Warning Signs</h3>
                    <div className="bg-red-50 border-l-4 border-red-600 p-6">
                      <h4 className="font-semibold text-red-900 mb-3">Discontinue Immediately If:</h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>Severe allergic reaction (anaphylaxis, severe rash, angioedema)</li>
                        <li>Signs of new cancer or tumor growth</li>
                        <li>Severe bleeding or bruising</li>
                        <li>Pregnancy detected</li>
                        <li>Liver toxicity signs (jaundice, dark urine, severe fatigue)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Peptide Therapy Hub. Educational resource supporting DrsPeptides.com
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This information is for educational purposes only and is not medical advice. Consult a qualified healthcare provider before implementing peptide therapy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
