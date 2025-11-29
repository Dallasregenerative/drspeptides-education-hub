import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Dna, Clock, Shield, Beaker, FileText } from "lucide-react";

export default function PeptideEpithalon() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Dna className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">DrsPeptides</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container py-12">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-lg px-4 py-1">
                <Clock className="mr-2 h-4 w-4" />
                Longevity Peptide
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-1">
                Telomerase Activator
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Epithalon (Epitalon)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Tetrapeptide telomerase activator that extends telomere length, restores pineal gland function, and acts as a multi-pathway geroprotector targeting 5 hallmarks of aging.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="mechanisms" className="flex items-center gap-2">
                <Dna className="h-4 w-4" />
                Mechanisms
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center gap-2">
                <Beaker className="h-4 w-4" />
                Research
              </TabsTrigger>
              <TabsTrigger value="protocols" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Protocols
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Safety
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Epithalon?</CardTitle>
                  <CardDescription>
                    Pineal gland-derived tetrapeptide with telomerase activation and longevity properties
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p>
                    <strong>Epithalon (also spelled Epitalon)</strong> is a synthetic tetrapeptide (AEDG: Alanine-Glutamic acid-Aspartic acid-Glycine) first identified in pineal gland extract and based on the polypeptide Epithalamin. The body naturally produces very small amounts of this peptide, but it is available as a synthetic supplement for research purposes.
                  </p>

                  <p>
                    Epithalon is unique among anti-aging peptides because it directly activates <strong>telomerase enzyme activity</strong>, resulting in telomere length extension in normal human cells. Recent research (PMC12411320, 2025) demonstrates dose-dependent telomere lengthening through hTERT mRNA upregulation and telomerase activation.
                  </p>

                  <h3>Primary Applications</h3>
                  <ul>
                    <li><strong>Longevity optimization</strong> - 42% lifespan increase in mice, multi-pathway geroprotection</li>
                    <li><strong>Cellular aging reversal</strong> - Telomere extension counteracts 70 bp/year shortening</li>
                    <li><strong>Telomere maintenance</strong> - Prevents Hayflick limit (cellular senescence)</li>
                    <li><strong>Pineal gland restoration</strong> - Normalizes melatonin production and circadian rhythms</li>
                    <li><strong>Circadian rhythm support</strong> - Restores age-related decline in sleep-wake cycles</li>
                  </ul>

                  <h3>Why Telomeres Matter for Aging</h3>
                  <p>
                    Telomeres are protective caps at the ends of chromosomes consisting of TTAGGG DNA repeats bound to the shelterin protein complex. Normal human somatic cells experience <strong>telomere shortening of ~70 base pairs per year</strong> due to the "end replication problem." When telomeres become critically short, cells can no longer divide and enter senescence (the <strong>Hayflick limit</strong>).
                  </p>

                  <p>
                    <strong>Telomere length is considered a biomarker of aging</strong> and can predict organismal age. Research shows that increasing telomere length by overexpressing telomerase may increase the lifespan of healthy mammals by up to <strong>24%</strong> (de Jesus et al. 2012).
                  </p>

                  <h3>Multi-Pathway Geroprotector</h3>
                  <p>
                    Unlike most anti-aging interventions that target a single hallmark of aging, Epithalon acts on <strong>five hallmarks simultaneously</strong>:
                  </p>
                  <ol>
                    <li><strong>Telomere attrition</strong> - Direct telomerase activation</li>
                    <li><strong>Cellular senescence</strong> - Prevents Hayflick limit</li>
                    <li><strong>Epigenetic alterations</strong> - Gene expression modulation</li>
                    <li><strong>Mitochondrial dysfunction</strong> - Cellular energy optimization</li>
                    <li><strong>Loss of proteostasis</strong> - Protein homeostasis support</li>
                  </ol>

                  <h3>Comparison to Other Anti-Aging Compounds</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Compound</th>
                        <th>Mechanism</th>
                        <th>Evidence Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Epithalon</strong></td>
                        <td>Telomerase activation, telomere extension</td>
                        <td>42% lifespan increase (mice), PMC research</td>
                      </tr>
                      <tr>
                        <td>TA-65</td>
                        <td>Telomerase activation</td>
                        <td>Telomere maintenance (Bernardes de Jesus 2011)</td>
                      </tr>
                      <tr>
                        <td>Resveratrol</td>
                        <td>Sirtuin activation, telomere support</td>
                        <td>Telomere length increase (Zhou et al 2021)</td>
                      </tr>
                      <tr>
                        <td>Omega-3 fatty acids</td>
                        <td>Anti-inflammatory, telomere maintenance</td>
                        <td>Telomere preservation (Bischoff-Ferrari 2025)</td>
                      </tr>
                      <tr>
                        <td>Metformin</td>
                        <td>AMPK activation, glucose regulation</td>
                        <td>Human trials ongoing (Du et al 2024)</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How Epithalon Works</CardTitle>
                  <CardDescription>
                    Telomerase activation, hTERT upregulation, and multi-pathway anti-aging effects
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3>1. Telomerase Activation (Primary Mechanism)</h3>
                  <p>
                    Epithalon's signature mechanism is the activation of <strong>telomerase enzyme</strong>, which synthesizes telomeric DNA (TTAGGG repeats) at chromosome ends. The telomerase enzyme consists of two subunits:
                  </p>
                  <ul>
                    <li><strong>hTERT</strong> (human telomerase reverse transcriptase) - Catalytic component</li>
                    <li><strong>hTR</strong> (human telomerase RNA) - RNA template for TTAGGG synthesis</li>
                  </ul>

                  <p>
                    <strong>Epithalon upregulates hTERT mRNA expression</strong>, leading to increased telomerase enzyme activity and subsequent telomere lengthening. This mechanism has been quantitatively demonstrated in recent research (PMC12411320, 2025) showing dose-dependent effects.
                  </p>

                  <h3>2. Telomere Length Extension</h3>
                  <p>
                    Normal human somatic cells experience telomere shortening of approximately <strong>70 base pairs per year</strong>. This progressive shortening eventually leads to the <strong>Hayflick limit</strong>—the point at which telomeres become too short to support cell division, triggering cellular senescence.
                  </p>

                  <p>
                    Epithalon reverses this process through:
                  </p>
                  <ul>
                    <li><strong>Dose-dependent telomere extension</strong> - Higher doses (1.0 μg/mL) show greater effect</li>
                    <li><strong>hTERT upregulation</strong> - Increases expression of telomerase reverse transcriptase</li>
                    <li><strong>Telomerase enzyme activity increase</strong> - Activates the enzyme responsible for telomere synthesis</li>
                    <li><strong>Prevention of Hayflick limit</strong> - Maintains telomere length above critical threshold</li>
                  </ul>

                  <h3>3. Alternative Lengthening of Telomeres (ALT) - Cancer Cell Specific</h3>
                  <p>
                    Interestingly, research shows that Epithalon can also activate <strong>ALT (Alternative Lengthening of Telomeres)</strong> pathways in cancer cells, while showing only minor ALT activation in normal cells. This suggests cell-type-specific mechanisms.
                  </p>

                  <h3>4. Pineal Gland Function Restoration</h3>
                  <p>
                    Epithalon was first identified in <strong>pineal gland extract</strong> and is based on the polypeptide Epithalamin. The pineal gland produces melatonin, which regulates circadian rhythms and has anti-aging properties.
                  </p>

                  <p>
                    <strong>Age-related pineal gland decline</strong> leads to:
                  </p>
                  <ul>
                    <li>Decreased melatonin production</li>
                    <li>Disrupted circadian rhythms</li>
                    <li>Sleep disturbances</li>
                    <li>Accelerated aging</li>
                  </ul>

                  <p>
                    Epithalon <strong>restores pineal gland function</strong>, normalizing melatonin production and circadian rhythms in elderly individuals (Khavinson et al).
                  </p>

                  <h3>5. Gene Expression Modulation</h3>
                  <p>
                    Research shows that Epithalon changes the expression of <strong>144 gene clones</strong>, with 98 clones affected specifically by Epithalon (Khavinson et al). This widespread gene expression modulation contributes to its multi-pathway anti-aging effects.
                  </p>

                  <h3>6. Cellular Aging Reversal Pathways</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Pathway</th>
                        <th>Mechanism</th>
                        <th>Anti-Aging Effect</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Telomerase activation</strong></td>
                        <td>hTERT upregulation → telomere synthesis</td>
                        <td>Prevents cellular senescence, extends lifespan</td>
                      </tr>
                      <tr>
                        <td><strong>Melatonin restoration</strong></td>
                        <td>Pineal gland function normalization</td>
                        <td>Circadian rhythm support, sleep quality, antioxidant</td>
                      </tr>
                      <tr>
                        <td><strong>Gene expression</strong></td>
                        <td>144 gene clone modulation</td>
                        <td>Multi-pathway geroprotection</td>
                      </tr>
                      <tr>
                        <td><strong>Mitochondrial support</strong></td>
                        <td>Cellular energy optimization</td>
                        <td>Reduces oxidative stress, improves function</td>
                      </tr>
                      <tr>
                        <td><strong>Proteostasis</strong></td>
                        <td>Protein homeostasis maintenance</td>
                        <td>Prevents protein aggregation, cellular dysfunction</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>7. Comparison to Natural Telomerase Expression</h3>
                  <p>
                    <strong>Normal somatic cells:</strong> Telomerase is absent, leading to progressive telomere shortening and eventual senescence.
                  </p>

                  <p>
                    <strong>Cancer cells:</strong> Telomerase is reactivated in 90% of all human cancers, allowing unlimited replicative potential.
                  </p>

                  <p>
                    <strong>Epithalon-treated cells:</strong> Controlled telomerase activation extends telomere length without triggering cancer-like unlimited proliferation. The dose-dependent nature and cycling protocols help maintain safety.
                  </p>

                  <h3>Molecular Cascade</h3>
                  <p className="bg-muted p-4 rounded-lg">
                    <strong>Epithalon administration</strong> →
                    <strong>hTERT mRNA upregulation</strong> →
                    <strong>Telomerase enzyme synthesis</strong> →
                    <strong>Telomeric DNA (TTAGGG) addition</strong> →
                    <strong>Telomere length extension</strong> →
                    <strong>Prevention of Hayflick limit</strong> →
                    <strong>Extended cellular lifespan</strong> →
                    <strong>Organismal longevity increase</strong>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical & Preclinical Research</CardTitle>
                  <CardDescription>
                    Comprehensive evidence from PMC studies, animal models, and clinical trials
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3>Latest Research: PMC12411320 (2025)</h3>
                  <p>
                    <strong>Title:</strong> "Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity"
                    <br />
                    <strong>Authors:</strong> Sarah Al-dulaimi, Ross Thomas, Sheila Matta, Terry Roberts
                    <br />
                    <strong>Journal:</strong> Biogerontology. 2025 Sep 4;26(5):178
                    <br />
                    <strong>Citation:</strong> 1 citation (recent publication)
                  </p>

                  <p>
                    <strong>Key Findings:</strong>
                  </p>
                  <ul>
                    <li><strong>Dose-dependent telomere length extension</strong> in normal cells (epithelial HMEC, fibroblast IBR.3)</li>
                    <li><strong>hTERT mRNA upregulation</strong> - Quantitative qPCR data</li>
                    <li><strong>Telomerase enzyme activity increase</strong> - TRAP assay quantification</li>
                    <li><strong>ALT activation in cancer cells</strong> - C-circle assay (21NT, BT474 breast cancer)</li>
                    <li><strong>Minor ALT in normal cells</strong> - Cell-type-specific mechanisms</li>
                  </ul>

                  <p>
                    <strong>Dosing in Study:</strong>
                  </p>
                  <ul>
                    <li><strong>Cancer cells:</strong> 0.1, 0.2, 0.5, 1.0 μg/mL daily for 4 days</li>
                    <li><strong>Normal cells:</strong> 1.0 μg/mL daily for 3 weeks</li>
                    <li><strong>Result:</strong> Dose-dependent response, higher doses = greater telomere extension</li>
                  </ul>

                  <h3>Animal Studies: Lifespan Extension</h3>
                  <p>
                    <strong>Khavinson et al (2003a, 2003b, 2000, 2017):</strong>
                  </p>
                  <ul>
                    <li><strong>42% lifespan increase</strong> in CBA mice</li>
                    <li><strong>41% decreased aging rate</strong> in treated mice</li>
                    <li><strong>Melatonin restoration</strong> in elderly animals</li>
                    <li><strong>Pineal gland function normalization</strong></li>
                  </ul>

                  <p>
                    <strong>Anisimov and Khavinson (2010):</strong>
                  </p>
                  <ul>
                    <li>Longevity mechanisms through multiple pathways</li>
                    <li>Telomerase activation confirmed</li>
                    <li>Gene expression modulation (144 clones affected)</li>
                  </ul>

                  <h3>Telomerase Overexpression Research</h3>
                  <p>
                    <strong>de Jesus et al (2012):</strong>
                  </p>
                  <ul>
                    <li><strong>24% lifespan increase</strong> in healthy mammals via telomerase overexpression</li>
                    <li>Establishes upper bound for telomerase-mediated longevity</li>
                    <li>Epithalon's 42% increase in mice suggests additional mechanisms beyond telomerase</li>
                  </ul>

                  <h3>Russian Clinical Trials</h3>
                  <p>
                    <strong>Extensive clinical trials</strong> conducted in Russia (Khavinson et al, multiple studies):
                  </p>
                  <ul>
                    <li><strong>Mortality decrease</strong> in older adults with cardiovascular disease</li>
                    <li><strong>Endocrine dysfunction restoration</strong> in primates (Goncharova et al 2005, 76 citations)</li>
                    <li><strong>Age-related disturbances normalized</strong> in primate models</li>
                    <li><strong>Promising remedy</strong> for age-related endocrine dysfunctions</li>
                  </ul>

                  <h3>Telomere Biology Context</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Finding</th>
                        <th>Data</th>
                        <th>Implication</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Normal telomere shortening</strong></td>
                        <td>~70 bp/year</td>
                        <td>Progressive aging, eventual senescence</td>
                      </tr>
                      <tr>
                        <td><strong>Hayflick limit</strong></td>
                        <td>~50-70 divisions</td>
                        <td>Critically short telomeres → cell cycle arrest</td>
                      </tr>
                      <tr>
                        <td><strong>Telomerase in cancer</strong></td>
                        <td>90% reactivation</td>
                        <td>Unlimited replicative potential</td>
                      </tr>
                      <tr>
                        <td><strong>Epithalon effect</strong></td>
                        <td>Dose-dependent extension</td>
                        <td>Controlled telomerase activation, safe cycling</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Comparison to Other Telomere-Targeting Compounds</h3>
                  <p>
                    <strong>TA-65</strong> (Bernardes de Jesus et al 2011):
                  </p>
                  <ul>
                    <li>Telomerase activator from Astragalus</li>
                    <li>Telomere maintenance demonstrated</li>
                    <li>Commercial availability, extensive use</li>
                  </ul>

                  <p>
                    <strong>Resveratrol</strong> (Zhou et al 2021):
                  </p>
                  <ul>
                    <li>Sirtuin activation, telomere support</li>
                    <li>Telomere length increase shown</li>
                    <li>Multiple anti-aging pathways</li>
                  </ul>

                  <p>
                    <strong>Omega-3 fatty acids</strong> (Bischoff-Ferrari et al 2025, Kiecolt-Glaser et al 2013):
                  </p>
                  <ul>
                    <li>Anti-inflammatory, telomere preservation</li>
                    <li>Telomere maintenance (not extension)</li>
                    <li>Cardiovascular + longevity benefits</li>
                  </ul>

                  <p>
                    <strong>Epithalon advantage:</strong> Direct telomerase activation with quantitative telomere extension data, plus multi-pathway geroprotection (5 hallmarks of aging).
                  </p>

                  <h3>Aging-Related Disease Context</h3>
                  <p>
                    Telomere attrition is linked to numerous age-related diseases:
                  </p>
                  <ul>
                    <li><strong>Alzheimer's disease</strong> - Cognitive decline, neurodegeneration</li>
                    <li><strong>Dementia</strong> - Memory impairment, executive dysfunction</li>
                    <li><strong>Sarcopenia</strong> - Muscle mass loss, frailty</li>
                    <li><strong>Arthritis</strong> - Joint degeneration, inflammation</li>
                    <li><strong>Parkinson's disease</strong> - Motor dysfunction, tremors</li>
                    <li><strong>Osteoporosis</strong> - Bone density loss, fracture risk</li>
                    <li><strong>Maculopathy</strong> - Vision loss, retinal degeneration</li>
                    <li><strong>COPD</strong> - Respiratory decline, lung function loss</li>
                    <li><strong>Cancer</strong> - Genomic instability, uncontrolled proliferation</li>
                  </ul>

                  <p>
                    <strong>Epithalon's multi-pathway approach</strong> may address multiple disease mechanisms simultaneously by targeting fundamental aging processes.
                  </p>

                  <h3>Evidence Quality Assessment</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Evidence Type</th>
                        <th>Quality</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>In vitro (cell culture)</strong></td>
                        <td>High</td>
                        <td>PMC12411320 (2025) - Quantitative qPCR, TRAP, C-circle assays</td>
                      </tr>
                      <tr>
                        <td><strong>Animal studies (mice)</strong></td>
                        <td>High</td>
                        <td>42% lifespan increase, multiple Khavinson studies</td>
                      </tr>
                      <tr>
                        <td><strong>Primate studies</strong></td>
                        <td>Moderate</td>
                        <td>Goncharova et al 2005 - Endocrine restoration</td>
                      </tr>
                      <tr>
                        <td><strong>Human clinical trials</strong></td>
                        <td>Moderate</td>
                        <td>Russian trials - Mortality decrease, limited English publications</td>
                      </tr>
                      <tr>
                        <td><strong>FDA approval</strong></td>
                        <td>None</td>
                        <td>Research use only, not approved for human therapeutic use</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing & Administration Protocols</CardTitle>
                  <CardDescription>
                    Research-based dosing, cycling strategies, and synergistic combinations
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 mb-6">
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      ⚠️ RESEARCH USE ONLY
                    </p>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Epithalon is NOT FDA-approved for human therapeutic use. The following protocols are based on research studies and are provided for educational purposes only. Always consult with a qualified healthcare provider before considering any peptide therapy.
                    </p>
                  </div>

                  <h3>Standard Dosing Protocol (Based on Research)</h3>
                  <p>
                    <strong>Subcutaneous Injection:</strong>
                  </p>
                  <ul>
                    <li><strong>Dose:</strong> 5-10mg per cycle</li>
                    <li><strong>Frequency:</strong> Once daily before bed</li>
                    <li><strong>Duration:</strong> 10-20 days per cycle</li>
                    <li><strong>Cycling:</strong> 10-20 days on, 4-6 months off</li>
                    <li><strong>Annual frequency:</strong> 1-2 cycles per year</li>
                  </ul>

                  <p>
                    <strong>Rationale:</strong> Short intensive cycles followed by long rest periods allow for telomerase activation and telomere extension without continuous stimulation. This mimics the dose-dependent effects seen in PMC12411320 (2025) research.
                  </p>

                  <h3>Research-Based Dosing (PMC12411320, 2025)</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Cell Type</th>
                        <th>Dose</th>
                        <th>Duration</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Normal cells</strong></td>
                        <td>1.0 μg/mL</td>
                        <td>3 weeks daily</td>
                        <td>Telomere extension via hTERT/telomerase</td>
                      </tr>
                      <tr>
                        <td><strong>Cancer cells</strong></td>
                        <td>0.1-1.0 μg/mL</td>
                        <td>4 days daily</td>
                        <td>Dose-dependent telomere extension via ALT</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    <strong>Note:</strong> In vitro concentrations do not directly translate to human dosing. Subcutaneous injection protocols are based on Russian clinical trial experience.
                  </p>

                  <h3>Administration Routes</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Route</th>
                        <th>Bioavailability</th>
                        <th>Pros</th>
                        <th>Cons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Subcutaneous injection</strong></td>
                        <td>High (~80-90%)</td>
                        <td>Most effective, research-validated</td>
                        <td>Requires injection, sterile technique</td>
                      </tr>
                      <tr>
                        <td><strong>Intramuscular injection</strong></td>
                        <td>High (~80-90%)</td>
                        <td>Effective, faster absorption</td>
                        <td>More invasive, injection required</td>
                      </tr>
                      <tr>
                        <td><strong>Intranasal</strong></td>
                        <td>Moderate (~40-60%)</td>
                        <td>Non-invasive, convenient</td>
                        <td>Lower bioavailability, less research</td>
                      </tr>
                      <tr>
                        <td><strong>Sublingual</strong></td>
                        <td>Low-Moderate (~20-40%)</td>
                        <td>Easy administration</td>
                        <td>Peptide degradation, inconsistent absorption</td>
                      </tr>
                      <tr>
                        <td><strong>Oral</strong></td>
                        <td>Very Low (&lt;10%)</td>
                        <td>Convenient</td>
                        <td>Gastric degradation, poor absorption</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    <strong>Recommendation:</strong> Subcutaneous injection is the gold standard based on research studies and clinical trials.
                  </p>

                  <h3>Timing Strategies</h3>
                  <p>
                    <strong>Before bed (preferred):</strong>
                  </p>
                  <ul>
                    <li>Aligns with natural melatonin production</li>
                    <li>Supports pineal gland function restoration</li>
                    <li>Enhances circadian rhythm normalization</li>
                    <li>Growth hormone release during deep sleep</li>
                  </ul>

                  <p>
                    <strong>Morning (alternative):</strong>
                  </p>
                  <ul>
                    <li>Fasted state may enhance absorption</li>
                    <li>Convenient for daily routine</li>
                    <li>Less research support for this timing</li>
                  </ul>

                  <h3>Cycling Protocols</h3>
                  <p>
                    <strong>Short Cycle (10-day protocol):</strong>
                  </p>
                  <ul>
                    <li><strong>Duration:</strong> 10 consecutive days</li>
                    <li><strong>Dose:</strong> 5-10mg daily</li>
                    <li><strong>Rest period:</strong> 4-6 months</li>
                    <li><strong>Frequency:</strong> 2 cycles per year (every 6 months)</li>
                    <li><strong>Best for:</strong> Maintenance, preventive anti-aging</li>
                  </ul>

                  <p>
                    <strong>Long Cycle (20-day protocol):</strong>
                  </p>
                  <ul>
                    <li><strong>Duration:</strong> 20 consecutive days</li>
                    <li><strong>Dose:</strong> 5-10mg daily</li>
                    <li><strong>Rest period:</strong> 6 months</li>
                    <li><strong>Frequency:</strong> 1-2 cycles per year</li>
                    <li><strong>Best for:</strong> Intensive telomere restoration, advanced aging</li>
                  </ul>

                  <p>
                    <strong>Rationale for cycling:</strong> Short intensive cycles allow for telomerase activation and telomere extension, while long rest periods prevent continuous stimulation and potential cancer risk from sustained telomerase activity.
                  </p>

                  <h3>Synergistic Combinations</h3>
                  <p>
                    <strong>Anti-Aging Stack (from Stacking Guide):</strong>
                  </p>
                  <ul>
                    <li><strong>Epithalon</strong> - Telomerase activation, telomere extension</li>
                    <li><strong>Humanin</strong> - Mitochondrial support, metabolic optimization</li>
                    <li><strong>FOXO4-DRI</strong> - Senolytic (removes senescent cells)</li>
                  </ul>
                  <p>
                    <strong>Synergy:</strong> Epithalon extends telomeres (prevents senescence), FOXO4-DRI removes existing senescent cells, Humanin optimizes mitochondrial function. Three-pathway approach to longevity.
                  </p>
                  <p>
                    <Link href="/stacking-guide">
                      <a className="text-primary hover:underline">→ View complete Anti-Aging Stack protocol</a>
                    </Link>
                  </p>

                  <p>
                    <strong>Pineal Gland Support Stack:</strong>
                  </p>
                  <ul>
                    <li><strong>Epithalon</strong> - Pineal gland function restoration</li>
                    <li><strong>Melatonin</strong> - Direct circadian rhythm support</li>
                    <li><strong>DSIP</strong> - Sleep quality enhancement</li>
                  </ul>
                  <p>
                    <strong>Synergy:</strong> Epithalon restores natural melatonin production, exogenous melatonin provides immediate support, DSIP improves sleep efficiency.
                  </p>

                  <p>
                    <strong>Mitochondrial Optimization Stack:</strong>
                  </p>
                  <ul>
                    <li><strong>Epithalon</strong> - Cellular aging reversal, telomere maintenance</li>
                    <li><strong>MOTS-c</strong> - Mitochondrial-derived peptide, exercise mimicker</li>
                    <li><strong>SS-31</strong> - Mitochondrial membrane stabilizer</li>
                    <li><strong>Humanin</strong> - Mitochondrial function optimization</li>
                  </ul>
                  <p>
                    <strong>Synergy:</strong> Epithalon addresses telomere attrition, while mitochondrial peptides optimize cellular energy production. Comprehensive cellular aging intervention.
                  </p>

                  <h3>Reconstitution & Storage</h3>
                  <p>
                    <strong>Reconstitution:</strong>
                  </p>
                  <ul>
                    <li>Use bacteriostatic water (0.9% benzyl alcohol)</li>
                    <li>Typical concentration: 2.5 mg/mL (10mg in 4mL)</li>
                    <li>Gently swirl, do not shake vigorously</li>
                    <li>Allow to dissolve completely before use</li>
                  </ul>

                  <p>
                    <strong>Storage:</strong>
                  </p>
                  <ul>
                    <li><strong>Lyophilized (powder):</strong> 2-8°C (refrigerator) for up to 2 years</li>
                    <li><strong>Reconstituted solution:</strong> 2-8°C (refrigerator) for up to 30 days</li>
                    <li><strong>Long-term storage:</strong> -20°C (freezer) for extended periods</li>
                    <li>Protect from light and heat</li>
                    <li>Do not freeze-thaw repeatedly</li>
                  </ul>

                  <h3>Monitoring During Treatment</h3>
                  <p>
                    <strong>Recommended monitoring:</strong>
                  </p>
                  <ul>
                    <li><strong>Telomere length testing</strong> - Before and after cycles (SpectraCell, TeloYears)</li>
                    <li><strong>Sleep quality tracking</strong> - Subjective assessment, wearable devices</li>
                    <li><strong>Circadian rhythm markers</strong> - Melatonin levels, cortisol awakening response</li>
                    <li><strong>Cancer screening</strong> - Annual checkups, especially if family history</li>
                    <li><strong>Comprehensive metabolic panel</strong> - Baseline and periodic monitoring</li>
                  </ul>

                  <p>
                    <strong>Telomere length testing:</strong> Commercial tests like SpectraCell's Telomere Test or TeloYears can measure average telomere length before and after Epithalon cycles to assess efficacy.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Considerations & Contraindications</CardTitle>
                  <CardDescription>
                    Critical safety information, cancer risk assessment, and quality standards
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-4 mb-6">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">
                      ⚠️ CRITICAL SAFETY WARNING
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Epithalon activates telomerase, which is reactivated in 90% of all human cancers. While research shows controlled cycling appears safe, the long-term cancer risk in humans is unknown. Mandatory cancer screening and physician oversight are essential.
                    </p>
                  </div>

                  <h3>Absolute Contraindications (DO NOT USE)</h3>
                  <ul>
                    <li><strong>Active cancer</strong> - Any type, any stage (telomerase activation may accelerate tumor growth)</li>
                    <li><strong>Recent cancer history</strong> - Within past 5 years (risk of recurrence)</li>
                    <li><strong>Pregnancy or breastfeeding</strong> - Unknown effects on fetal development</li>
                    <li><strong>Known telomerase-related disorders</strong> - Dyskeratosis congenita, other telomeropathies</li>
                    <li><strong>Uncontrolled proliferative disorders</strong> - Myeloproliferative neoplasms, etc.</li>
                  </ul>

                  <h3>Relative Contraindications (Use with Extreme Caution)</h3>
                  <ul>
                    <li><strong>Family history of cancer</strong> - Especially multiple first-degree relatives</li>
                    <li><strong>Genetic cancer predisposition</strong> - BRCA1/2, Lynch syndrome, Li-Fraumeni, etc.</li>
                    <li><strong>Precancerous lesions</strong> - Dysplasia, polyps, abnormal moles</li>
                    <li><strong>Immunocompromised state</strong> - HIV/AIDS, immunosuppressive medications</li>
                    <li><strong>Autoimmune conditions</strong> - May alter immune surveillance of cancer cells</li>
                    <li><strong>Age &lt; 30 years</strong> - Telomeres naturally long, intervention unnecessary</li>
                  </ul>

                  <h3>Cancer Risk Assessment</h3>
                  <p>
                    <strong>Telomerase and Cancer:</strong>
                  </p>
                  <ul>
                    <li><strong>90% of cancers</strong> reactivate telomerase for unlimited replicative potential</li>
                    <li><strong>10% of cancers</strong> use ALT (Alternative Lengthening of Telomeres)</li>
                    <li><strong>Normal cells</strong> have absent telomerase, limiting lifespan (Hayflick limit)</li>
                  </ul>

                  <p>
                    <strong>Epithalon's Cancer Risk Profile:</strong>
                  </p>
                  <ul>
                    <li><strong>Short cycling protocols</strong> (10-20 days) minimize continuous telomerase activation</li>
                    <li><strong>Long rest periods</strong> (4-6 months) allow immune surveillance of abnormal cells</li>
                    <li><strong>Animal studies</strong> (42% lifespan increase) did not show increased cancer incidence</li>
                    <li><strong>Russian clinical trials</strong> reported mortality decrease, not increase</li>
                    <li><strong>However:</strong> Long-term human data is limited, cancer risk cannot be ruled out</li>
                  </ul>

                  <p>
                    <strong>Risk Mitigation Strategies:</strong>
                  </p>
                  <ul>
                    <li><strong>Mandatory cancer screening</strong> before starting (colonoscopy, mammogram, PSA, etc.)</li>
                    <li><strong>Annual screening</strong> during use (more frequent if high-risk)</li>
                    <li><strong>Genetic testing</strong> for cancer predisposition (BRCA1/2, etc.) if family history</li>
                    <li><strong>Strict cycling protocols</strong> - Never use continuously</li>
                    <li><strong>Physician oversight</strong> - Qualified healthcare provider monitoring</li>
                  </ul>

                  <h3>Pre-Treatment Requirements</h3>
                  <p>
                    <strong>Mandatory before first use:</strong>
                  </p>
                  <ul>
                    <li><strong>Comprehensive cancer screening</strong> appropriate for age and risk factors</li>
                    <li><strong>Physician consultation</strong> with qualified healthcare provider</li>
                    <li><strong>Baseline telomere length testing</strong> (optional but recommended)</li>
                    <li><strong>Comprehensive metabolic panel</strong> - Liver, kidney, thyroid function</li>
                    <li><strong>Complete blood count</strong> - Assess for hematologic abnormalities</li>
                  </ul>

                  <h3>Monitoring During Treatment</h3>
                  <p>
                    <strong>Regular monitoring:</strong>
                  </p>
                  <ul>
                    <li><strong>Cancer screening</strong> - Annual minimum, more frequent if high-risk</li>
                    <li><strong>Physician check-ins</strong> - After each cycle, report any concerning symptoms</li>
                    <li><strong>Telomere length testing</strong> - Before and after cycles to assess efficacy</li>
                    <li><strong>Self-monitoring</strong> - New lumps, moles, unexplained weight loss, fatigue</li>
                  </ul>

                  <p>
                    <strong>Warning signs (STOP immediately and seek medical attention):</strong>
                  </p>
                  <ul>
                    <li>New or changing moles</li>
                    <li>Unexplained lumps or masses</li>
                    <li>Persistent cough or hoarseness</li>
                    <li>Changes in bowel or bladder habits</li>
                    <li>Unexplained bleeding</li>
                    <li>Unexplained weight loss</li>
                    <li>Persistent fatigue or weakness</li>
                  </ul>

                  <h3>Side Effects</h3>
                  <p>
                    <strong>Common (generally mild):</strong>
                  </p>
                  <ul>
                    <li>Injection site reactions (redness, swelling, mild pain)</li>
                    <li>Transient fatigue (first few days)</li>
                    <li>Mild headache</li>
                    <li>Changes in sleep patterns (usually improvement)</li>
                  </ul>

                  <p>
                    <strong>Uncommon:</strong>
                  </p>
                  <ul>
                    <li>Vivid dreams (related to pineal gland/melatonin effects)</li>
                    <li>Mild mood changes</li>
                    <li>Temporary changes in appetite</li>
                  </ul>

                  <p>
                    <strong>Serious (rare, seek immediate medical attention):</strong>
                  </p>
                  <ul>
                    <li>Severe allergic reaction (anaphylaxis)</li>
                    <li>Signs of cancer (see warning signs above)</li>
                    <li>Severe or persistent side effects</li>
                  </ul>

                  <h3>Quality & Sourcing Standards</h3>
                  <p>
                    <strong>Required quality standards:</strong>
                  </p>
                  <ul>
                    <li><strong>Purity: &gt;98%</strong> (HPLC verified)</li>
                    <li><strong>Certificate of Analysis (COA)</strong> from independent lab</li>
                    <li><strong>Endotoxin testing</strong> (&lt;1.0 EU/mg)</li>
                    <li><strong>Heavy metals testing</strong> (lead, mercury, arsenic, cadmium)</li>
                    <li><strong>Sterility testing</strong> (bacteria, fungi)</li>
                    <li><strong>Correct amino acid sequence</strong> (AEDG - Ala-Glu-Asp-Gly)</li>
                  </ul>

                  <p>
                    <strong>Manufacturing standards:</strong>
                  </p>
                  <ul>
                    <li><strong>cGMP (current Good Manufacturing Practice)</strong> facility</li>
                    <li><strong>ISO certification</strong> (ISO 9001 or equivalent)</li>
                    <li><strong>Pharmaceutical-grade synthesis</strong></li>
                    <li><strong>Proper storage and handling</strong> (temperature-controlled)</li>
                  </ul>

                  <p>
                    <strong>Red flags to avoid:</strong>
                  </p>
                  <ul>
                    <li>No COA provided or refuses to provide</li>
                    <li>Purity &lt;98%</li>
                    <li>Suspiciously low prices</li>
                    <li>No manufacturing facility information</li>
                    <li>International sources with no quality verification</li>
                    <li>"Research chemical" labeling without proper documentation</li>
                  </ul>

                  <h3>Regulatory Status</h3>
                  <p>
                    <strong>United States:</strong>
                  </p>
                  <ul>
                    <li><strong>NOT FDA-approved</strong> for human therapeutic use</li>
                    <li><strong>Research use only</strong> - Not for human consumption</li>
                    <li><strong>Not regulated as a drug or supplement</strong></li>
                    <li>Possession for personal research is generally legal</li>
                  </ul>

                  <p>
                    <strong>International:</strong>
                  </p>
                  <ul>
                    <li><strong>Russia:</strong> Extensive clinical trial history, more accepted use</li>
                    <li><strong>Europe:</strong> Varies by country, generally research use only</li>
                    <li><strong>Other countries:</strong> Check local regulations</li>
                  </ul>

                  <h3>Drug Interactions</h3>
                  <p>
                    <strong>Potential interactions (theoretical, limited data):</strong>
                  </p>
                  <ul>
                    <li><strong>Immunosuppressants</strong> - May alter immune surveillance of cancer cells</li>
                    <li><strong>Chemotherapy agents</strong> - Contraindicated (cancer treatment)</li>
                    <li><strong>Melatonin supplements</strong> - Additive effects on circadian rhythm</li>
                    <li><strong>Other telomerase activators</strong> - TA-65, etc. (additive effects, unknown safety)</li>
                  </ul>

                  <p>
                    <strong>Always inform your physician</strong> of all medications, supplements, and peptides you are using.
                  </p>

                  <h3>Special Populations</h3>
                  <p>
                    <strong>Elderly (age &gt; 65):</strong>
                  </p>
                  <ul>
                    <li>May benefit most from telomere extension</li>
                    <li>Higher cancer risk requires more frequent screening</li>
                    <li>Start with lower doses and shorter cycles</li>
                    <li>Close physician monitoring essential</li>
                  </ul>

                  <p>
                    <strong>Young adults (age &lt; 30):</strong>
                  </p>
                  <ul>
                    <li>Telomeres naturally long, intervention likely unnecessary</li>
                    <li>Risk-benefit ratio unfavorable</li>
                    <li>Not recommended unless specific indication</li>
                  </ul>

                  <p>
                    <strong>Athletes:</strong>
                  </p>
                  <ul>
                    <li>No known anti-doping violations (not on WADA list)</li>
                    <li>However, check sport-specific regulations</li>
                    <li>Telomere extension may support recovery from training stress</li>
                  </ul>

                  <h3>Huberman Lab Safety Framework Compliance</h3>
                  <p>
                    <Link href="/safety-standards">
                      <a className="text-primary hover:underline">→ View complete Safety & Quality Standards page</a>
                    </Link>
                  </p>

                  <p>
                    <strong>Three-Tier Classification:</strong>
                  </p>
                  <ul>
                    <li><strong>Tier 2: Gray Market Peptide</strong> - Not FDA-approved, research use only</li>
                    <li><strong>Quality cannot be guaranteed</strong> without proper sourcing</li>
                    <li><strong>Physician oversight mandatory</strong> due to cancer risk</li>
                  </ul>

                  <p>
                    <strong>DrsPeptides.com Quality Commitment:</strong>
                  </p>
                  <ul>
                    <li>&gt;99% purity (exceeds industry standard)</li>
                    <li>cGMP manufacturing facility</li>
                    <li>Comprehensive COA (purity, endotoxin, heavy metals, sterility)</li>
                    <li>Pharmaceutical-grade synthesis</li>
                    <li>Temperature-controlled storage and shipping</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            {{/* Monitoring Tab */}}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Baseline labs and medical history</li>
                      <li>Relevant organ function tests</li>
                      <li>Cancer screening (age-appropriate)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability assessment</p>
                      <p><strong>Month 3:</strong> Clinical response evaluation</p>
                      <p><strong>Month 6:</strong> Comprehensive safety check</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Severe adverse reactions</li>
                      <li>Unexpected symptoms</li>
                      <li>Pregnancy (discontinue immediately)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {{/* Monitoring Tab */}}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Baseline labs and medical history</li>
                      <li>Relevant organ function tests</li>
                      <li>Cancer screening (age-appropriate)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability assessment</p>
                      <p><strong>Month 3:</strong> Clinical response evaluation</p>
                      <p><strong>Month 6:</strong> Comprehensive safety check</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Severe adverse reactions</li>
                      <li>Unexpected symptoms</li>
                      <li>Pregnancy (discontinue immediately)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link href="/">
              <a className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 DrsPeptides. Educational resource for peptide therapy research.
          </p>
          <div className="flex gap-4">
            <Link href="/safety-standards">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Safety Standards
              </a>
            </Link>
            <Link href="/stacking-guide">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Stacking Guide
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
