import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, FlaskConical, Zap, Brain, Heart, Dna } from "lucide-react";
import { Link } from "wouter";

export default function PeptideNAD() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/peptides">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Peptides
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-violet-600">Universal Cellular Energy</Badge>
            <h1 className="text-5xl font-bold mb-4 text-slate-900">
              NAD+ (Nicotinamide Adenine Dinucleotide)
            </h1>
            <p className="text-2xl text-slate-700 mb-6">
              The Master Coenzyme of Life - Cellular Energy, DNA Repair & Longevity
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              NAD+ is a fundamental coenzyme present in every living cell, essential for energy metabolism, DNA repair, and cellular survival. As we age, NAD+ levels decline by up to 50%, contributing to cognitive decline, metabolic dysfunction, and age-related diseases. Restoring NAD+ levels through supplementation has emerged as one of the most promising interventions for extending healthspan and potentially reversing aspects of biological aging.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="font-semibold mb-2">Cellular Energy</h3>
                <p className="text-sm text-slate-600">
                  Central to ATP production through glycolysis, TCA cycle, and oxidative phosphorylation in mitochondria
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Dna className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="font-semibold mb-2">DNA Repair</h3>
                <p className="text-sm text-slate-600">
                  Essential cofactor for PARP enzymes that repair DNA damage and maintain genomic stability
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="font-semibold mb-2">Neuroprotection</h3>
                <p className="text-sm text-slate-600">
                  Improves memory, cognitive function, and protects against neurodegenerative diseases
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="font-semibold mb-2">Metabolic Health</h3>
                <p className="text-sm text-slate-600">
                  Enhances insulin sensitivity, reduces inflammation, and improves cardiovascular function
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mechanism of Action</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-violet-600" />
                      Universal Coenzyme Function
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      NAD+ serves as a critical coenzyme in over 500 enzymatic reactions throughout the cell. In its oxidized form (NAD+), it accepts electrons (hydride ions) from metabolic substrates, becoming reduced to NADH. This electron transfer is fundamental to cellular respiration, where NADH donates electrons to the electron transport chain to generate ATP, the universal energy currency of cells.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Three Biosynthetic Pathways</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      NAD+ is synthesized through three independent pathways that utilize different dietary precursors:
                    </p>
                    <div className="bg-violet-50 p-4 rounded-lg space-y-3">
                      <div>
                        <p className="font-medium text-violet-900">1. De Novo Kynurenine Pathway</p>
                        <p className="text-sm text-violet-800">Uses dietary tryptophan to generate NAD+ through quinolinic acid intermediate. Primarily active in liver.</p>
                      </div>
                      <div>
                        <p className="font-medium text-violet-900">2. Preiss-Handler Pathway</p>
                        <p className="text-sm text-violet-800">Converts dietary nicotinic acid (niacin/vitamin B3) to NAD+ through NAMN and NAAD intermediates.</p>
                      </div>
                      <div>
                        <p className="font-medium text-violet-900">3. Salvage Pathway (Primary)</p>
                        <p className="text-sm text-violet-800">Recycles nicotinamide (NAM) back to NAD+ via NAMPT enzyme. Also utilizes NR and NMN precursors. Most important pathway in mammals.</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">NAD+-Dependent Enzyme Families</h3>
                    <p className="text-slate-700 leading-relaxed mb-3">
                      NAD+ is consumed as a substrate by three major enzyme families that regulate critical cellular processes:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Sirtuins (SIRT1-7):</strong> Protein deacylases that regulate gene expression, metabolism, DNA repair, and longevity. Activation extends lifespan in model organisms.</li>
                      <li>• <strong>PARPs (Poly-ADP-Ribose Polymerases):</strong> DNA repair enzymes activated by DNA damage. Excessive PARP activation depletes NAD+ during cellular stress.</li>
                      <li>• <strong>CD38/CD157 (NAD+ Glycohydrolases):</strong> Ectoenzymes that degrade NAD+ to generate signaling molecules. CD38 expression increases with age, contributing to NAD+ decline.</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Age-Related NAD+ Decline</h3>
                    <p className="text-slate-700 leading-relaxed">
                      NAD+ levels decline by approximately 50% between ages 40-60 in multiple tissues including brain, muscle, liver, and skin. This decline results from both decreased biosynthesis (reduced NAMPT expression) and increased consumption (elevated CD38 activity, chronic PARP activation from accumulated DNA damage). The NAD+ decline is causally linked to mitochondrial dysfunction, impaired DNA repair, reduced sirtuin activity, and development of age-related diseases.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Evidence */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Research Evidence</h2>
            
            <div className="space-y-6">
              {/* Study 1 */}
              <Card className="border-l-4 border-l-violet-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-violet-700 border-violet-300">1418 Citations</Badge>
                    <Badge variant="secondary">Nat Rev Mol Cell Biol 2021</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    NAD+ Metabolism and Its Roles in Cellular Processes During Ageing
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Covarrubias AJ, Perrone R, Grozio A, Verdin E. Nature Reviews Molecular Cell Biology. 2021;22(2):119-141.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Universal decline:</strong> NAD+ levels decrease with aging in multiple organisms including humans</li>
                      <li>• <strong>Causal link:</strong> NAD+ decline directly contributes to cognitive decline, cancer, metabolic disease, sarcopenia, and frailty</li>
                      <li>• <strong>Reversibility:</strong> Many aging-associated diseases can be slowed down and even reversed by restoring NAD+ levels</li>
                      <li>• <strong>Compartmentalization:</strong> NAD+ pools in cytoplasm, mitochondria, and nucleus are independently regulated</li>
                      <li>• <strong>Therapeutic target:</strong> NAD+ restoration emerged as promising approach to extend healthspan and lifespan</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Study 2 */}
              <Card className="border-l-4 border-l-violet-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-violet-700 border-violet-300">1600 Citations</Badge>
                    <Badge variant="secondary">Trends Cell Biol 2014</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    NAD+ and Sirtuins in Aging and Disease
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Imai S, Guarente L. Trends in Cell Biology. 2014;24(8):464-471.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Sirtuin activation:</strong> NAD+ availability directly regulates sirtuin activity and longevity pathways</li>
                      <li>• <strong>NMN supplementation:</strong> Restores NAD+ levels and ameliorates age-associated functional defects</li>
                      <li>• <strong>Metabolic benefits:</strong> Improves insulin sensitivity, mitochondrial function, and energy metabolism</li>
                      <li>• <strong>Neuroprotection:</strong> Prevents cognitive decline and protects against neurodegeneration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Study 3 */}
              <Card className="border-l-4 border-l-violet-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-violet-700 border-violet-300">1375 Citations</Badge>
                    <Badge variant="secondary">Cell 2013</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    The NAD+/Sirtuin Pathway Modulates Longevity Through Activation of Mitochondrial UPR and FOXO Signaling
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Mouchiroud L, et al. Cell. 2013;154(2):430-441.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>Lifespan extension:</strong> NAD+ levels reduced in aged mice and C. elegans; restoration extends lifespan</li>
                      <li>• <strong>Mitochondrial function:</strong> NAD+ activates mitochondrial unfolded protein response (UPRmt)</li>
                      <li>• <strong>FOXO signaling:</strong> NAD+/sirtuin pathway activates FOXO transcription factors for stress resistance</li>
                      <li>• <strong>Evolutionary conservation:</strong> NAD+-longevity link conserved from worms to mammals</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Study 4 */}
              <Card className="border-l-4 border-l-violet-600">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-violet-700 border-violet-300">966 Citations</Badge>
                    <Badge variant="secondary">Nature 2016</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    CD38 Dictates Age-Related NAD Decline and Mitochondrial Dysfunction Through an SIRT3-Dependent Mechanism
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Camacho-Pereira J, et al. Cell Metabolism. 2016;23(6):1127-1139.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm font-medium">Key Findings:</p>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• <strong>CD38 mechanism:</strong> Age-related increase in CD38 expression drives NAD+ decline</li>
                      <li>• <strong>Mitochondrial dysfunction:</strong> NAD+ depletion impairs SIRT3 activity and mitochondrial function</li>
                      <li>• <strong>CD38 knockout:</strong> Mice maintain higher NAD+ levels and improved metabolic health during aging</li>
                      <li>• <strong>Therapeutic target:</strong> CD38 inhibition represents strategy to maintain NAD+ levels</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Clinical Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Aging & Longevity</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Age-related NAD+ decline reversal</li>
                    <li>• Healthspan and lifespan extension</li>
                    <li>• Cellular senescence reduction</li>
                    <li>• Mitochondrial function restoration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Neurological Health</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Alzheimer's disease prevention</li>
                    <li>• Parkinson's disease neuroprotection</li>
                    <li>• Memory and cognitive enhancement</li>
                    <li>• Axon degeneration prevention</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Metabolic Disorders</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Type 2 diabetes and insulin resistance</li>
                    <li>• Obesity and metabolic syndrome</li>
                    <li>• Non-alcoholic fatty liver disease</li>
                    <li>• Energy metabolism optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Cardiovascular Health</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Atherosclerosis prevention</li>
                    <li>• Hypertension management</li>
                    <li>• Heart failure improvement</li>
                    <li>• Vascular function enhancement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">DNA Repair & Cancer</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• PARP-mediated DNA repair support</li>
                    <li>• Genomic stability maintenance</li>
                    <li>• Cancer prevention through DNA integrity</li>
                    <li>• Radiation damage protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Muscle & Physical Function</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Sarcopenia (age-related muscle loss)</li>
                    <li>• Exercise performance enhancement</li>
                    <li>• Muscle stem cell function</li>
                    <li>• Physical endurance improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Protocol */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Supplementation Protocol</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">NAD+ Precursor Forms</h3>
                    <div className="bg-violet-50 p-4 rounded-lg space-y-3">
                      <div>
                        <p className="font-medium text-violet-900">NMN (Nicotinamide Mononucleotide)</p>
                        <p className="text-sm text-violet-800 mb-1">Most direct precursor, bypasses rate-limiting NAMPT step</p>
                        <p className="text-sm text-violet-700"><strong>Dosage:</strong> 250-500mg daily, up to 1000mg for therapeutic effects</p>
                      </div>
                      <div>
                        <p className="font-medium text-violet-900">NR (Nicotinamide Riboside)</p>
                        <p className="text-sm text-violet-800 mb-1">Well-studied precursor, readily absorbed and converted to NAD+</p>
                        <p className="text-sm text-violet-700"><strong>Dosage:</strong> 300-500mg daily, clinical trials used up to 1000mg</p>
                      </div>
                      <div>
                        <p className="font-medium text-violet-900">NAM (Nicotinamide)</p>
                        <p className="text-sm text-violet-800 mb-1">Basic form of vitamin B3, requires NAMPT conversion</p>
                        <p className="text-sm text-violet-700"><strong>Dosage:</strong> 500-1000mg daily (higher doses may inhibit sirtuins)</p>
                      </div>
                      <div>
                        <p className="font-medium text-violet-900">Niacin (Nicotinic Acid)</p>
                        <p className="text-sm text-violet-800 mb-1">Classic vitamin B3, causes flushing at higher doses</p>
                        <p className="text-sm text-violet-700"><strong>Dosage:</strong> 50-100mg daily (flushing occurs above 50mg)</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Administration Timing</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Morning dosing:</strong> Aligns with circadian NAD+ rhythms and energy demands</li>
                      <li>• <strong>With or without food:</strong> NMN and NR are well-absorbed regardless of meals</li>
                      <li>• <strong>Consistent timing:</strong> Daily supplementation maintains stable NAD+ elevation</li>
                      <li>• <strong>Cycling:</strong> Some practitioners recommend 5 days on, 2 days off to prevent tolerance</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Synergistic Compounds</h3>
                    <p className="text-sm text-slate-700 mb-2">
                      NAD+ precursors work synergistically with compounds that activate sirtuins or reduce NAD+ consumption:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• <strong>Resveratrol:</strong> Activates SIRT1, enhances NAD+ utilization efficiency</li>
                      <li>• <strong>Pterostilbene:</strong> More bioavailable resveratrol analog</li>
                      <li>• <strong>Quercetin:</strong> CD38 inhibitor, reduces NAD+ degradation</li>
                      <li>• <strong>Apigenin:</strong> CD38 inhibitor with additional anti-inflammatory effects</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm font-medium text-blue-900 mb-2">Clinical Trial Evidence</p>
                    <p className="text-sm text-blue-800">
                      Multiple human clinical trials have demonstrated safety and efficacy of NR (300-1000mg/day) and NMN (250-500mg/day) for improving NAD+ levels, insulin sensitivity, and cardiovascular function with minimal side effects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Profile */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safety Profile</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Clinical Safety Data</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Excellent tolerability:</strong> NMN and NR well-tolerated at doses up to 1000mg/day in clinical trials</li>
                      <li>• <strong>Minimal side effects:</strong> Occasional mild nausea or flushing (primarily with niacin form)</li>
                      <li>• <strong>No serious adverse events:</strong> Long-term safety studies show no significant concerns</li>
                      <li>• <strong>Bioavailability:</strong> NMN and NR efficiently absorbed and converted to NAD+ in tissues</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Contraindications & Precautions</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• <strong>Cancer considerations:</strong> Theoretical concern that NAD+ elevation could support rapidly dividing cells; consult oncologist if active cancer</li>
                      <li>• <strong>Pregnancy/lactation:</strong> Insufficient safety data; avoid unless under medical supervision</li>
                      <li>• <strong>Medication interactions:</strong> May enhance effects of diabetes medications; monitor blood glucose</li>
                      <li>• <strong>High-dose niacin:</strong> Can cause liver enzyme elevations; use lower doses or alternative forms</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Purity Considerations</h3>
                    <p className="text-sm text-slate-700">
                      NAD+ precursors vary significantly in purity and stability. Pharmaceutical-grade NMN and NR should be stored in cool, dry conditions and protected from light. Third-party testing for purity and absence of contaminants is essential for therapeutic applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source Peptide */}
      <section className="py-12 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Source Pharmaceutical-Grade NAD+ Precursors</h2>
            <p className="text-lg mb-6 text-violet-50">
              For pharmaceutical-grade NAD+ (NMN/NR) and comprehensive peptide solutions, visit our trusted partner.
            </p>
            <a 
              href="https://drspeptides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" variant="secondary" className="text-violet-600 hover:text-violet-700">
                Visit DrsPeptides.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm mt-4 text-violet-100">
              Available in 500mg vials and Formula N-5550 (NAD+ + Tesamorelin + Ibutamoren + Methylene Blue)
            </p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-3 text-sm text-slate-700">
                  <li>
                    1. Covarrubias AJ, Perrone R, Grozio A, Verdin E. NAD+ metabolism and its roles in cellular processes during ageing. Nat Rev Mol Cell Biol. 2021;22(2):119-141. doi:10.1038/s41580-020-00313-x
                  </li>
                  <li>
                    2. Imai S, Guarente L. NAD+ and sirtuins in aging and disease. Trends Cell Biol. 2014;24(8):464-471. doi:10.1016/j.tcb.2014.04.002
                  </li>
                  <li>
                    3. Mouchiroud L, Houtkooper RH, Moullan N, et al. The NAD+/sirtuin pathway modulates longevity through activation of mitochondrial UPR and FOXO signaling. Cell. 2013;154(2):430-441. doi:10.1016/j.cell.2013.06.016
                  </li>
                  <li>
                    4. Camacho-Pereira J, Tarragó MG, Chini CC, et al. CD38 dictates age-related NAD decline and mitochondrial dysfunction through an SIRT3-dependent mechanism. Cell Metab. 2016;23(6):1127-1139. doi:10.1016/j.cmet.2016.05.006
                  </li>
                  <li>
                    5. Yoshino J, Baur JA, Imai SI. NAD+ intermediates: the biology and therapeutic potential of NMN and NR. Cell Metab. 2018;27(3):513-528. doi:10.1016/j.cmet.2017.11.002
                  </li>
                  <li>
                    6. Rajman L, Chwalek K, Sinclair DA. Therapeutic potential of NAD-boosting molecules: the in vivo evidence. Cell Metab. 2018;27(3):529-547. doi:10.1016/j.cmet.2018.02.011
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
