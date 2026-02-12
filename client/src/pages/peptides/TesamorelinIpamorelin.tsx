import { ArrowLeft, Activity, Zap, Shield, Clock, Beaker, FlaskConical } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function TesamorelinIpamorelin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <Badge className="mb-4">Synergistic Blend Formula</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Tesamorelin & Ipamorelin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dual-pathway growth hormone optimization combining GHRH analog (Tesamorelin) with selective GH secretagogue (Ipamorelin) for synergistic pituitary stimulation, visceral fat reduction, and metabolic enhancement.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <Activity className="h-5 w-5 text-blue-600 mb-2" />
                  <CardTitle className="text-2xl">15.2%</CardTitle>
                  <CardDescription>Visceral Fat Reduction</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Zap className="h-5 w-5 text-cyan-600 mb-2" />
                  <CardTitle className="text-2xl">238</CardTitle>
                  <CardDescription>NEJM Citations</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Shield className="h-5 w-5 text-green-600 mb-2" />
                  <CardTitle className="text-2xl">FDA</CardTitle>
                  <CardDescription>Tesamorelin Approved</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Clock className="h-5 w-5 text-purple-600 mb-2" />
                  <CardTitle className="text-2xl">219</CardTitle>
                  <CardDescription>Ipamorelin Citations</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Composition */}
            <Card className="mb-8 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-blue-600" />
                  Blend Composition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Tesamorelin (GHRH Analog)</span>
                    <Badge variant="outline" className="text-blue-600">10mg</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Ipamorelin (GH Secretagogue)</span>
                    <Badge variant="outline" className="text-cyan-600">5mg</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Source:</strong> Verified composition from <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> official catalog
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="pb-20">
        <div className="container">
          <Tabs defaultValue="overview" className="max-w-4xl">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanisms">Mechanisms</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Growth Hormone Optimization</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <p>
                    The <strong>Tesamorelin & Ipamorelin</strong> blend represents an advanced dual-pathway approach to growth hormone optimization, combining the FDA-approved GHRH analog Tesamorelin with the selective GH secretagogue Ipamorelin. This synergistic combination stimulates endogenous growth hormone production through complementary mechanisms while maintaining physiological pulsatility and minimizing side effects.
                  </p>
                  
                  <h3>Why Combine Tesamorelin & Ipamorelin?</h3>
                  <p>
                    <strong>Tesamorelin</strong> (GHRH analog) directly stimulates the anterior pituitary to produce growth hormone by binding to GHRH receptors, while <strong>Ipamorelin</strong> (ghrelin mimetic) acts on the ghrelin receptor (GHSR-1a) to amplify GH release. This dual-pathway stimulation creates synergistic effects that exceed either peptide alone, resulting in more robust and sustained GH elevation with preserved pulsatility.
                  </p>

                  <h3>Clinical Applications</h3>
                  <ul>
                    <li><strong>Visceral Fat Reduction:</strong> Tesamorelin FDA-approved for HIV-associated lipodystrophy with 15.2% visceral adipose tissue reduction</li>
                    <li><strong>Metabolic Enhancement:</strong> Improved insulin sensitivity, lipid profiles, and body composition</li>
                    <li><strong>Lean Mass Preservation:</strong> Synergistic GH stimulation supports muscle maintenance during caloric restriction</li>
                    <li><strong>Cognitive Function:</strong> Tesamorelin crosses blood-brain barrier with potential neuroprotective effects</li>
                    <li><strong>Sleep Quality:</strong> Ipamorelin enhances slow-wave sleep duration and quality</li>
                    <li><strong>Recovery Optimization:</strong> Dual-pathway GH elevation supports tissue repair and regeneration</li>
                  </ul>

                  <h3>Advantages Over Single-Peptide Approaches</h3>
                  <ul>
                    <li><strong>Synergistic Potentiation:</strong> Dual-pathway stimulation produces greater GH elevation than either peptide alone</li>
                    <li><strong>Physiological Pulsatility:</strong> Maintains natural GH pulse patterns rather than supraphysiological spikes</li>
                    <li><strong>Visceral Fat Specificity:</strong> Tesamorelin preferentially targets harmful visceral adipose tissue</li>
                    <li><strong>Minimal Side Effects:</strong> Ipamorelin highly selective with no cortisol/prolactin elevation</li>
                    <li><strong>FDA-Approved Component:</strong> Tesamorelin has established safety profile from clinical trials</li>
                    <li><strong>Preserved Feedback Loops:</strong> Does not suppress endogenous GH production like exogenous GH</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Landmark Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold">Tesamorelin for Visceral Adiposity (NEJM 2010)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Falutz et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/21073363/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 21073363</a> | <Badge variant="secondary">238 citations</Badge>
                    </p>
                    <p className="text-sm">
                      Phase 3 trial demonstrating 15.2% reduction in visceral adipose tissue with tesamorelin in HIV patients with abdominal fat accumulation. Significant improvements in triglycerides (-27.9 mg/dL) without adverse effects on glucose metabolism. Led to FDA approval for HIV-associated lipodystrophy.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-600 pl-4">
                    <p className="font-semibold">Ipamorelin: Selective GH Secretagogue (Eur J Endocrinol 1998)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Raun et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/9924354/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 9924354</a> | <Badge variant="secondary">219 citations</Badge>
                    </p>
                    <p className="text-sm">
                      First characterization of ipamorelin as highly selective GHSR-1a agonist with potent GH-releasing activity in rats. Peak GH levels at 0.67 hours post-administration with minimal effects on cortisol, prolactin, or ACTH. Established ipamorelin's superior selectivity profile compared to GHRP-6 and GHRP-2.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold">Tesamorelin Cognitive Effects (Neurology 2013)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Falutz et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/23897874/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 23897874</a> | <Badge variant="secondary">89 citations</Badge>
                    </p>
                    <p className="text-sm">
                      Tesamorelin improved executive function and working memory in HIV patients with cognitive impairment. Mechanism involves direct CNS effects as tesamorelin crosses blood-brain barrier. Suggests potential neuroprotective applications beyond metabolic effects.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold">Ipamorelin Bone Growth Effects (Growth Horm IGF Res 2000)</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Svensson et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/10936877/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 10936877</a> | <Badge variant="secondary">46 citations</Badge>
                    </p>
                    <p className="text-sm">
                      Ipamorelin stimulated longitudinal bone growth in hypophysectomized rats comparable to GH treatment. Effects mediated through IGF-1 elevation and direct effects on growth plate chondrocytes. Demonstrates anabolic potential beyond GH secretion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dual-Pathway GH Stimulation</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate max-w-none">
                  <h3>Tesamorelin: GHRH Receptor Agonism</h3>
                  <p>
                    Tesamorelin is a synthetic analog of human growth hormone-releasing hormone (GHRH) with enhanced stability and potency. It binds to GHRH receptors on somatotroph cells in the anterior pituitary, activating adenylyl cyclase and increasing intracellular cAMP. This triggers calcium influx and stimulates transcription of the GH gene, resulting in both immediate GH secretion and sustained production.
                  </p>
                  <ul>
                    <li><strong>Direct Pituitary Stimulation:</strong> Binds GHRH receptors on somatotrophs with high affinity</li>
                    <li><strong>Enhanced Stability:</strong> Modified structure resists enzymatic degradation (half-life ~30 minutes vs ~7 minutes for native GHRH)</li>
                    <li><strong>Preserved Pulsatility:</strong> Maintains physiological GH pulse patterns regulated by somatostatin</li>
                    <li><strong>CNS Penetration:</strong> Crosses blood-brain barrier for potential direct cognitive effects</li>
                  </ul>

                  <h3>Ipamorelin: Ghrelin Receptor Activation</h3>
                  <p>
                    Ipamorelin is a pentapeptide ghrelin mimetic that selectively activates the growth hormone secretagogue receptor (GHSR-1a) on pituitary somatotrophs. Unlike other ghrelin analogs, ipamorelin demonstrates exceptional selectivity with minimal effects on cortisol, prolactin, or ACTH secretion. It acts synergistically with GHRH to amplify GH release through a complementary signaling pathway.
                  </p>
                  <ul>
                    <li><strong>GHSR-1a Selectivity:</strong> Highly selective ghrelin receptor agonism without off-target effects</li>
                    <li><strong>Synergistic Amplification:</strong> Potentiates GHRH-induced GH release through distinct pathway</li>
                    <li><strong>No Desensitization:</strong> Maintains efficacy with chronic administration unlike some GH secretagogues</li>
                    <li><strong>Minimal Side Effects:</strong> No cortisol or prolactin elevation (unlike GHRP-2, GHRP-6)</li>
                  </ul>

                  <h3>Synergistic Mechanisms</h3>
                  <p>
                    The combination of Tesamorelin and Ipamorelin produces synergistic GH elevation that exceeds the additive effects of either peptide alone. GHRH receptor activation by tesamorelin primes somatotrophs for enhanced responsiveness to ghrelin receptor stimulation by ipamorelin. This dual-pathway approach mimics the natural physiological regulation of GH secretion while amplifying the magnitude of GH pulses.
                  </p>
                  <ul>
                    <li><strong>Complementary Pathways:</strong> GHRH and ghrelin receptors activate distinct but convergent signaling cascades</li>
                    <li><strong>Amplified GH Pulses:</strong> Synergistic stimulation produces greater peak GH levels than either peptide alone</li>
                    <li><strong>Sustained Elevation:</strong> Prolonged GH secretion window from combined half-lives</li>
                    <li><strong>Preserved Feedback:</strong> Maintains somatostatin-mediated negative feedback for physiological control</li>
                  </ul>

                  <h3>Metabolic Effects</h3>
                  <ul>
                    <li><strong>Visceral Fat Mobilization:</strong> GH stimulates hormone-sensitive lipase for preferential visceral adipose breakdown</li>
                    <li><strong>Lipolysis Enhancement:</strong> Increased free fatty acid oxidation and energy expenditure</li>
                    <li><strong>Insulin Sensitivity:</strong> Improved glucose disposal and reduced insulin resistance</li>
                    <li><strong>Lipid Profile Improvement:</strong> Reduced triglycerides and improved HDL/LDL ratios</li>
                    <li><strong>Lean Mass Preservation:</strong> Anabolic effects support muscle protein synthesis during caloric restriction</li>
                  </ul>

                  <h3>Cognitive & Neuroprotective Effects</h3>
                  <ul>
                    <li><strong>Direct CNS Action:</strong> Tesamorelin crosses blood-brain barrier for direct brain effects</li>
                    <li><strong>BDNF Upregulation:</strong> GH/IGF-1 axis stimulates brain-derived neurotrophic factor</li>
                    <li><strong>Neurogenesis:</strong> IGF-1 promotes hippocampal neurogenesis and synaptic plasticity</li>
                    <li><strong>Amyloid Clearance:</strong> Enhanced clearance of amyloid-beta peptides</li>
                    <li><strong>Executive Function:</strong> Improved working memory and cognitive processing speed</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Evidence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Visceral Fat Reduction</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">NEJM Phase 3 Trial (2010) - 238 citations</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Falutz et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/21073363/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 21073363</a>
                        </p>
                        <p className="text-sm mb-2">
                          <strong>Design:</strong> Randomized, double-blind, placebo-controlled trial in 412 HIV patients with abdominal fat accumulation
                        </p>
                        <p className="text-sm mb-2">
                          <strong>Results:</strong> Tesamorelin 2mg daily for 26 weeks produced 15.2% reduction in visceral adipose tissue (VAT) measured by CT scan. Triglycerides decreased by 27.9 mg/dL. No adverse effects on glucose metabolism or HbA1c.
                        </p>
                        <p className="text-sm">
                          <strong>Significance:</strong> Led to FDA approval for HIV-associated lipodystrophy. Demonstrates preferential visceral fat targeting with metabolic benefits.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Long-term Efficacy Study (J Clin Endocrinol Metab 2012)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Stanley et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/22238393/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 22238393</a> | <Badge variant="secondary">67 citations</Badge>
                        </p>
                        <p className="text-sm">
                          52-week extension study demonstrating sustained VAT reduction with tesamorelin. Visceral fat remained 18% below baseline at 52 weeks. Improvements in triglycerides and quality of life measures maintained throughout treatment period.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Growth Hormone Secretion</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Ipamorelin Selectivity Profile (Eur J Endocrinol 1998)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Raun et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/9924354/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 9924354</a> | <Badge variant="secondary">219 citations</Badge>
                        </p>
                        <p className="text-sm">
                          First characterization of ipamorelin as highly selective GHSR-1a agonist. Peak GH levels at 0.67 hours with rapid decline by 6 hours. No significant effects on cortisol, prolactin, or ACTH at doses producing maximal GH stimulation. Superior selectivity compared to GHRP-6 and GHRP-2.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Synergistic GH Release (J Clin Endocrinol Metab 2005)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Bowers et al. | <Badge variant="secondary">156 citations</Badge>
                        </p>
                        <p className="text-sm">
                          Combined GHRH and ghrelin receptor stimulation produces synergistic GH elevation exceeding additive effects. Mechanism involves complementary signaling pathways converging on somatotroph GH secretion. Dual stimulation maintains physiological pulsatility while amplifying pulse magnitude.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Cognitive & Neuroprotective Effects</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Tesamorelin Cognitive Enhancement (Neurology 2013)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Falutz et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/23897874/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 23897874</a> | <Badge variant="secondary">89 citations</Badge>
                        </p>
                        <p className="text-sm">
                          Tesamorelin improved executive function (Stroop test) and working memory in HIV patients with cognitive impairment. Effects independent of visceral fat reduction, suggesting direct CNS action. Tesamorelin crosses blood-brain barrier for potential neuroprotective effects.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">GH/IGF-1 Neuroprotection (Endocr Rev 2009)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Sonntag et al. | <Badge variant="secondary">342 citations</Badge>
                        </p>
                        <p className="text-sm">
                          Comprehensive review of GH/IGF-1 axis in brain aging and neuroprotection. IGF-1 promotes hippocampal neurogenesis, enhances synaptic plasticity, and improves amyloid-beta clearance. Age-related GH decline correlates with cognitive impairment; restoration shows neuroprotective potential.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Body Composition & Anabolic Effects</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Ipamorelin Bone Growth (Growth Horm IGF Res 2000)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Svensson et al. | <a href="https://pubmed.ncbi.nlm.nih.gov/10936877/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 10936877</a> | <Badge variant="secondary">46 citations</Badge>
                        </p>
                        <p className="text-sm">
                          Ipamorelin stimulated longitudinal bone growth in hypophysectomized rats comparable to GH replacement. Effects mediated through IGF-1 elevation and direct effects on growth plate chondrocytes. Demonstrates anabolic potential beyond GH secretion.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Lean Mass Preservation (Obesity 2011)</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Stanley et al. | <Badge variant="secondary">78 citations</Badge>
                        </p>
                        <p className="text-sm">
                          Tesamorelin preserved lean body mass during visceral fat reduction in HIV patients. Unlike caloric restriction alone, tesamorelin-induced fat loss occurred without muscle wasting. Suggests GH stimulation protects against sarcopenia during weight loss interventions.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">⚕️ Healthcare Provider Consultation Required</p>
                    <p className="text-sm text-blue-800">
                      The following protocols are for educational purposes only. Peptide therapy should only be initiated under the supervision of a qualified healthcare provider who can assess individual health status, monitor response, and adjust protocols as needed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Standard Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                      <div>
                        <p className="font-semibold mb-1">Tesamorelin Component</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong>Dose:</strong> 1-2mg daily (from 10mg vial)</li>
                          <li>• <strong>Timing:</strong> Before bedtime on empty stomach</li>
                          <li>• <strong>Route:</strong> Subcutaneous injection (abdomen preferred)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Ipamorelin Component</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong>Dose:</strong> 200-300mcg daily (from 5mg vial)</li>
                          <li>• <strong>Timing:</strong> 30 minutes before tesamorelin administration</li>
                          <li>• <strong>Route:</strong> Subcutaneous injection</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Rationale:</strong> Sequential administration allows ipamorelin to prime ghrelin receptors before tesamorelin stimulates GHRH receptors, maximizing synergistic GH release. Bedtime dosing aligns with natural nocturnal GH pulse.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Split-Dose Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                      <div>
                        <p className="font-semibold mb-1">Morning Dose</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Ipamorelin 200mcg upon waking (fasted)</li>
                          <li>• Tesamorelin 1mg 30 minutes after ipamorelin</li>
                          <li>• Wait 30 minutes before eating</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Evening Dose</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Ipamorelin 200mcg before bedtime (2-3 hours post-meal)</li>
                          <li>• Tesamorelin 1mg 30 minutes after ipamorelin</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Rationale:</strong> Twice-daily dosing mimics physiological GH pulsatility with peaks during fasting and sleep. May provide more sustained GH elevation throughout 24-hour period.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Administration Guidelines</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Reconstitution</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Tesamorelin 10mg: Reconstitute with 2mL bacteriostatic water (5mg/mL concentration)</li>
                          <li>• Ipamorelin 5mg: Reconstitute with 2.5mL bacteriostatic water (2mg/mL concentration)</li>
                          <li>• Inject water slowly down vial side, gently swirl (do not shake)</li>
                          <li>• Allow to dissolve completely before use (2-3 minutes)</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Injection Technique</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Use insulin syringe (0.5mL or 1mL with 29-31 gauge needle)</li>
                          <li>• Rotate injection sites (abdomen, thighs, upper arms)</li>
                          <li>• Pinch skin, insert at 45-90° angle, inject slowly</li>
                          <li>• Apply gentle pressure after injection (do not rub)</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Storage</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Unreconstituted: Store at room temperature or refrigerated (2-8°C)</li>
                          <li>• Reconstituted: Refrigerate at 2-8°C, use within 14-21 days</li>
                          <li>• Protect from light and extreme temperatures</li>
                          <li>• Discard if solution becomes cloudy or discolored</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Cycling Strategies</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Continuous Protocol (FDA-Approved)</p>
                        <p className="text-sm mb-2">
                          Based on FDA approval studies for tesamorelin in HIV-associated lipodystrophy. Continuous daily administration for 26-52 weeks demonstrated sustained visceral fat reduction without tachyphylaxis.
                        </p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Duration: 26-52 weeks continuous</li>
                          <li>• Monitoring: Monthly body composition, quarterly metabolic panels</li>
                          <li>• Reassessment: Evaluate response at 12 weeks, continue if beneficial</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Intermittent Protocol</p>
                        <p className="text-sm mb-2">
                          Alternative approach using periodic cycles to minimize adaptation and maintain receptor sensitivity.
                        </p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• 12 weeks on / 4 weeks off cycle</li>
                          <li>• Maintain benefits during off-cycle with lifestyle optimization</li>
                          <li>• Resume at same dose after off-cycle (no taper needed)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Synergistic Combinations</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Tesamorelin/Ipamorelin + CJC-1295 (No DAC)</p>
                        <p className="text-sm mb-2">
                          Adding CJC-1295 (no DAC) provides additional GHRH receptor stimulation with extended half-life for more sustained GH elevation.
                        </p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• CJC-1295 (no DAC): 100-200mcg before bed, 3-4x weekly</li>
                          <li>• Continue standard Tesamorelin/Ipamorelin protocol</li>
                          <li>• Enhanced GH pulsatility and IGF-1 elevation</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Tesamorelin/Ipamorelin + BPC-157</p>
                        <p className="text-sm mb-2">
                          Combining with BPC-157 enhances tissue repair and gut health during metabolic optimization.
                        </p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• BPC-157: 250-500mcg twice daily (separate from GH peptides)</li>
                          <li>• Synergistic effects on tissue regeneration and metabolic health</li>
                          <li>• Useful during caloric restriction or training intensification</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Tesamorelin/Ipamorelin + GHK-Cu</p>
                        <p className="text-sm mb-2">
                          GHK-Cu complements GH optimization with additional tissue remodeling and anti-inflammatory effects.
                        </p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• GHK-Cu: 1-2mg subcutaneous 3-5x weekly</li>
                          <li>• Enhanced skin quality, wound healing, and tissue regeneration</li>
                          <li>• Comprehensive anti-aging and recovery protocol</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Monitoring & Optimization</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Recommended Assessments</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Baseline:</strong> IGF-1, fasting glucose, HbA1c, lipid panel, body composition (DEXA or CT)</li>
                        <li>• <strong>4 weeks:</strong> IGF-1 (assess response, adjust dose if needed)</li>
                        <li>• <strong>12 weeks:</strong> Full metabolic panel, body composition reassessment</li>
                        <li>• <strong>26 weeks:</strong> Comprehensive evaluation including visceral fat measurement</li>
                        <li>• <strong>Ongoing:</strong> Monitor for side effects (joint pain, edema, glucose changes)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Related Protocols</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore comprehensive stacking protocols featuring Tesamorelin and Ipamorelin:
                  </p>
                  <div className="space-y-2">
                    <Link href="/stacking/fat-loss">
                      <Button variant="outline" className="w-full justify-start">
                        <Beaker className="h-4 w-4 mr-2" />
                        Fat Loss Stack - GLP-1 + GH Optimization
                      </Button>
                    </Link>
                    <Link href="/stacking/anti-aging">
                      <Button variant="outline" className="w-full justify-start">
                        <Beaker className="h-4 w-4 mr-2" />
                        Anti-Aging Stack - Comprehensive Longevity Protocol
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile & Contraindications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Important Safety Information</p>
                    <p className="text-sm text-amber-800">
                      Tesamorelin is FDA-approved for HIV-associated lipodystrophy but remains investigational for other indications. Ipamorelin is not FDA-approved and is available only for research purposes. This information is educational only and does not constitute medical advice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Absolute Contraindications</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Active Malignancy:</strong> GH stimulation may promote tumor growth (theoretical risk)</li>
                        <li>• <strong>Disrupted Hypothalamic-Pituitary Axis:</strong> Pituitary tumors, recent pituitary surgery</li>
                        <li>• <strong>Diabetic Retinopathy:</strong> GH may worsen retinal complications</li>
                        <li>• <strong>Pregnancy/Breastfeeding:</strong> Safety not established, avoid use</li>
                        <li>• <strong>Known Hypersensitivity:</strong> Allergic reactions to tesamorelin, ipamorelin, or excipients</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Relative Contraindications</h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Diabetes Mellitus:</strong> Monitor glucose closely; GH can impair insulin sensitivity</li>
                        <li>• <strong>Prediabetes:</strong> Increased risk of progression to diabetes; frequent monitoring required</li>
                        <li>• <strong>History of Cancer:</strong> Consult oncologist; minimum 5-year remission recommended</li>
                        <li>• <strong>Carpal Tunnel Syndrome:</strong> GH may worsen symptoms through fluid retention</li>
                        <li>• <strong>Sleep Apnea:</strong> GH may exacerbate upper airway obstruction</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Common Side Effects</h3>
                    <div className="space-y-3">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Tesamorelin-Specific (from FDA trials)</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong>Injection Site Reactions (35%):</strong> Erythema, pruritus, pain (usually mild, transient)</li>
                          <li>• <strong>Arthralgia (13%):</strong> Joint pain, typically mild and self-limiting</li>
                          <li>• <strong>Peripheral Edema (6%):</strong> Fluid retention, usually resolves with continued use</li>
                          <li>• <strong>Myalgia (5%):</strong> Muscle pain or stiffness</li>
                          <li>• <strong>Paresthesias (4%):</strong> Tingling or numbness in extremities</li>
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Ipamorelin-Specific</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong>Minimal Side Effects:</strong> Highly selective profile with rare adverse events</li>
                          <li>• <strong>Transient Flushing:</strong> Occasional warmth or redness (5-10 minutes post-injection)</li>
                          <li>• <strong>Mild Headache:</strong> Rare, typically with higher doses</li>
                          <li>• <strong>Increased Appetite:</strong> Ghrelin receptor activation may stimulate hunger</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Serious Adverse Events (Rare)</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Glucose Intolerance:</strong> Monitor fasting glucose and HbA1c; discontinue if diabetes develops</li>
                        <li>• <strong>Hypersensitivity Reactions:</strong> Rash, urticaria, anaphylaxis (extremely rare)</li>
                        <li>• <strong>IGF-1 Elevation:</strong> Excessive IGF-1 may increase cancer risk (theoretical)</li>
                        <li>• <strong>Fluid Retention:</strong> Severe edema or carpal tunnel syndrome requiring discontinuation</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pre-Treatment Requirements</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Comprehensive Medical History:</strong> Screen for contraindications and risk factors</li>
                        <li>• <strong>Cancer Screening:</strong> Age-appropriate screening (mammogram, colonoscopy, PSA) up to date</li>
                        <li>• <strong>Baseline Laboratory Testing:</strong> IGF-1, glucose, HbA1c, lipids, liver/kidney function</li>
                        <li>• <strong>Ophthalmologic Exam:</strong> For diabetic patients to rule out retinopathy</li>
                        <li>• <strong>Body Composition Assessment:</strong> DEXA, CT, or MRI to establish baseline</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Monitoring Protocol</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Ongoing Surveillance</p>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Monthly (First 3 Months):</strong> Symptom review, injection site assessment, weight/body composition</li>
                        <li>• <strong>IGF-1 Monitoring:</strong> 4 weeks, then quarterly; maintain in upper-normal physiological range</li>
                        <li>• <strong>Glucose Monitoring:</strong> Fasting glucose and HbA1c at baseline, 12 weeks, then quarterly</li>
                        <li>• <strong>Lipid Panel:</strong> Baseline, 12 weeks, then every 6 months</li>
                        <li>• <strong>Body Composition:</strong> DEXA or CT at baseline, 12 weeks, 26 weeks to assess visceral fat</li>
                        <li>• <strong>Adverse Event Monitoring:</strong> Report joint pain, edema, vision changes, or glucose elevation</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Drug Interactions</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Insulin/Oral Hypoglycemics:</strong> GH may impair insulin sensitivity; monitor glucose closely, adjust diabetes medications</li>
                        <li>• <strong>Glucocorticoids:</strong> Oppose GH effects; may require higher peptide doses</li>
                        <li>• <strong>Thyroid Hormones:</strong> GH may unmask hypothyroidism; monitor TSH</li>
                        <li>• <strong>Estrogen Therapy:</strong> May reduce IGF-1 response; consider dose adjustment</li>
                        <li>• <strong>Somatostatin Analogs:</strong> Directly oppose GH secretion; avoid concurrent use</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Quality & Sourcing Standards</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm mb-3">
                        Peptide quality is critical for both efficacy and safety. Only use peptides from reputable sources with rigorous quality control.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Purity:</strong> Minimum 98% purity verified by HPLC (High-Performance Liquid Chromatography)</li>
                        <li>• <strong>Certificate of Analysis (COA):</strong> Third-party testing documentation for each batch</li>
                        <li>• <strong>Sterility Testing:</strong> Endotoxin levels &lt;10 EU/mg, negative bacterial/fungal cultures</li>
                        <li>• <strong>GMP Compliance:</strong> Manufactured in facilities following Good Manufacturing Practices</li>
                        <li>• <strong>Proper Storage:</strong> Maintained at appropriate temperature throughout supply chain</li>
                        <li>• <strong>Reconstitution Standards:</strong> Use bacteriostatic water, sterile technique, proper dilution</li>
                      </ul>
                      <p className="text-sm mt-3 text-muted-foreground">
                        <strong>Recommended Source:</strong> <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">drspeptides.com</a> provides pharmaceutical-grade peptides with full COA documentation and GMP compliance.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Regulatory Status</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <ul className="text-sm space-y-2">
                        <li>• <strong>Tesamorelin:</strong> FDA-approved (2010) for HIV-associated lipodystrophy; off-label use for other indications</li>
                        <li>• <strong>Ipamorelin:</strong> Not FDA-approved; available for research purposes only</li>
                        <li>• <strong>WADA Status:</strong> Both peptides prohibited in competitive sports (S2 category)</li>
                        <li>• <strong>Compounding Pharmacy:</strong> Available through licensed compounding pharmacies with valid prescription</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
