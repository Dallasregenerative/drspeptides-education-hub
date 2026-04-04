import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, TrendingUp, Pill, Shield, Activity , BookOpen , Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Button } from "@/components/ui/button";

export default function PeptideIbutamoren() {
  usePageTitle("Ibutamoren (MK-677) | DrsPeptides", {
    description: "Evidence-based guide to ibutamoren (MK-677) oral growth hormone secretagogue. Mechanisms, benefits, dosing protocols, safety considerations, and clinical applications.",
    keywords: "",
    schema: generatePeptideSchema({
      name: "Ibutamoren (MK-677)",
      description: "Evidence-based guide to ibutamoren (MK-677) oral growth hormone secretagogue. Mechanisms, benefits, dosing protocols, safety considerations, and clinical applications.",
      path: "/peptides/ibutamoren",
      fdaStatus: "Investigational",
      category: "Regenerative Medicine"
    })
  });

  return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/30 rounded-full text-sm font-semibold">Oral GH Secretagogue</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">MK-677</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ibutamoren (MK-677)</h1>
            <p className="text-xl text-emerald-50 mb-6">
              Oral growth hormone secretagogue. Mimics ghrelin to stimulate GH and IGF-1 production. Convenient oral administration for muscle growth, fat loss, sleep quality, and anti-aging.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Oral</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">GH Secretagogue</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Long-Acting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanism">Mechanism</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Ibutamoren (MK-677)?</CardTitle>
                  <CardDescription>Oral growth hormone secretagogue mimicking ghrelin for convenient GH elevation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Ibutamoren (MK-677) is a <strong>selective agonist</strong> of the <strong>ghrelin receptor (GHS-R1a)</strong>, functioning as a potent <strong>growth hormone secretagogue (GHS)</strong>. Unlike injectable peptides (GHRP-2, GHRP-6, Ipamorelin), Ibutamoren is <strong>orally bioavailable</strong>, making it highly convenient for users who prefer to avoid injections.
                  </p>
                  <p>
                    Ibutamoren stimulates the pituitary gland to release <strong>growth hormone (GH)</strong> and increases <strong>IGF-1</strong> (insulin-like growth factor 1) levels. It mimics the action of ghrelin, the "hunger hormone," producing sustained GH elevation for 24+ hours after a single dose. This long duration distinguishes it from short-acting injectable GHRPs.
                  </p>
                  <p>
                    Ibutamoren is widely used for <strong>muscle growth</strong>, <strong>fat loss</strong>, <strong>improved sleep quality</strong>, <strong>bone density enhancement</strong>, <strong>injury recovery</strong>, and <strong>anti-aging</strong>. It is popular among athletes, bodybuilders, and biohackers seeking GH benefits without injections.
                  </p>
                  <p>
                    <strong>Important:</strong> Ibutamoren is <strong>not FDA-approved</strong> for any indication. It was investigated for sarcopenia (muscle wasting) and frailty in elderly adults but did not receive approval. It is available as a research chemical and is used off-label.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Characteristics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Pill className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Oral Administration</h3>
                        <p className="text-sm text-gray-600">No injections required; convenient capsule or liquid dosing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Sustained GH Elevation</h3>
                        <p className="text-sm text-gray-600">24+ hour duration from single dose; long-acting ghrelin mimetic</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Muscle Growth & Fat Loss</h3>
                        <p className="text-sm text-gray-600">Anabolic effects via GH/IGF-1 axis; lipolysis and lean mass gains</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Appetite Stimulation</h3>
                        <p className="text-sm text-gray-600">Ghrelin mimetic; increases hunger (useful for bulking)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Investigational (not FDA-approved):</strong> Sarcopenia (muscle wasting), frailty, GH deficiency. <strong>Off-label uses:</strong> Muscle growth, fat loss, sleep quality improvement, bone density enhancement, injury recovery, anti-aging. <strong>Advantages:</strong> Oral administration (no injections), long-acting (once-daily dosing), sustained GH/IGF-1 elevation.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Ghrelin receptor (GHS-R1a) agonism with sustained GH release</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Ghrelin Receptor Activation (Long-Acting)</h3>
                    <p className="text-sm text-gray-700">
                      Ibutamoren binds to the <strong>ghrelin receptor (GHS-R1a)</strong> on pituitary somatotrophs and in the hypothalamus. This triggers intracellular signaling pathways that stimulate GH secretion. Unlike short-acting injectable GHRPs (half-life ~30 minutes), Ibutamoren has a <strong>half-life of 4-6 hours</strong>, producing sustained GH elevation for 24+ hours after a single dose.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Sustained GH & IGF-1 Elevation</h3>
                    <p className="text-sm text-gray-700">
                      Ibutamoren produces a <strong>sustained increase in GH and IGF-1</strong> levels, with peak GH occurring 1-2 hours post-dose and elevated levels persisting for 24+ hours. Studies show 50-90% increases in IGF-1 levels with chronic use (weeks to months). This sustained elevation distinguishes Ibutamoren from pulsatile GH release seen with injectable GHRPs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. IGF-1 Production & Anabolic Effects</h3>
                    <p className="text-sm text-gray-700">
                      Elevated GH stimulates hepatic production of <strong>IGF-1</strong>, which mediates anabolic effects: muscle protein synthesis, bone growth, tissue repair, lipolysis (fat breakdown), and cognitive enhancement. Ibutamoren's sustained IGF-1 elevation produces continuous anabolic signaling.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Appetite Stimulation (Ghrelin Mimetic)</h3>
                    <p className="text-sm text-gray-700">
                      As a ghrelin receptor agonist, Ibutamoren <strong>increases appetite</strong> significantly. This is beneficial for individuals struggling to gain weight or in bulking phases, but may complicate fat loss goals. Appetite stimulation is dose-dependent and typically peaks 1-3 hours post-dose.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Sleep Quality Enhancement</h3>
                    <p className="text-sm text-gray-700">
                      Ibutamoren enhances <strong>slow-wave sleep (deep sleep)</strong>, which is when GH is naturally released. Users report deeper, more restorative sleep, improved sleep architecture, and better recovery. This effect is one of the most consistently reported benefits.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> 4-6 hours (oral)<br/>
                      <strong>Peak GH release:</strong> 1-2 hours post-dose<br/>
                      <strong>Duration of elevated GH/IGF-1:</strong> 24+ hours<br/>
                      <strong>Bioavailability:</strong> High oral bioavailability (no injections needed)<br/>
                      <strong>Frequency:</strong> Once daily (typically before bed for sleep benefits)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Extensive human trials for sarcopenia, frailty, and GH deficiency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">GH & IGF-1 Elevation</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Multiple clinical trials demonstrate Ibutamoren's ability to increase GH and IGF-1 levels. A dose of 25mg daily produces 50-90% increases in IGF-1 over 8-12 weeks, with sustained elevation throughout the dosing period.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/9467542/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Svensson et al. (1998) - Ibutamoren increases GH/IGF-1 in elderly
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Lean Body Mass & Muscle Growth</h3>
                    <p className="text-sm text-gray-700">
                      Studies in elderly adults show Ibutamoren increases lean body mass by 1-2 kg over 8-12 weeks, with improvements in muscle strength and functional capacity. Effects are dose-dependent and enhanced with resistance training.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Bone Density Enhancement</h3>
                    <p className="text-sm text-gray-700">
                      Ibutamoren increases bone turnover markers and improves bone density in elderly adults, suggesting potential for osteoporosis prevention. Long-term studies (12+ months) show sustained bone density improvements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sleep Quality Improvement</h3>
                    <p className="text-sm text-gray-700">
                      Clinical trials show Ibutamoren increases slow-wave sleep (deep sleep) duration and improves sleep architecture. Users report subjective improvements in sleep quality, morning energy, and recovery.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Appetite & Weight Gain</h3>
                    <p className="text-sm text-gray-700">
                      Ibutamoren significantly increases appetite and food intake, leading to weight gain in most users. This is beneficial for cachexia (muscle wasting) or bulking, but may complicate fat loss goals.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Why Not FDA-Approved?</h3>
                    <p className="text-sm text-gray-700">
                      Despite positive effects on GH/IGF-1, lean mass, and bone density, Ibutamoren did not receive FDA approval for sarcopenia or frailty. Reasons include modest efficacy (compared to expectations), side effects (water retention, insulin resistance concerns), and lack of clear clinical endpoints in trials.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Research Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-emerald-900 mb-2">GH/IGF-1 Elevation</h3>
                      <p className="text-sm text-emerald-800">50-90% increase in IGF-1 with 25mg daily (Svensson 1998)</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-emerald-900 mb-2">Lean Mass Gains</h3>
                      <p className="text-sm text-emerald-800">1-2 kg lean body mass increase over 8-12 weeks in elderly adults</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-emerald-900 mb-2">Bone Density</h3>
                      <p className="text-sm text-emerald-800">Increases bone turnover markers; improves bone density long-term</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-emerald-900 mb-2">Sleep Enhancement</h3>
                      <p className="text-sm text-emerald-800">Increases slow-wave sleep duration; improves sleep architecture</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Based on clinical trials and community experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 10-25mg once daily, oral<br/>
                      <strong>Timing:</strong> Before bed (enhances sleep and overnight GH release) or morning (if sleep disruption occurs)<br/>
                      <strong>Duration:</strong> 8-12 weeks, then 4-week break to assess tolerance and prevent desensitization<br/>
                      <strong>Note:</strong> Start with 10mg to assess tolerance; increase to 25mg if well-tolerated
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Muscle growth (bulking):</strong> 20-25mg daily before bed; leverage appetite stimulation for caloric surplus (8-12 weeks)<br/>
                      <strong>Fat loss:</strong> 10-15mg daily before bed; manage appetite with meal timing and discipline (8-12 weeks)<br/>
                      <strong>Anti-aging & recovery:</strong> 10-20mg daily before bed; focus on sleep quality and sustained IGF-1 elevation (ongoing, with periodic breaks)<br/>
                      <strong>Bone density enhancement:</strong> 20-25mg daily; long-term use (6-12 months) for sustained bone turnover improvements
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Form:</strong> Capsules or liquid (oral solution)<br/>
                      <strong>Timing:</strong> Before bed optimal (enhances sleep, overnight GH release); morning if sleep disruption occurs<br/>
                      <strong>Food:</strong> Can be taken with or without food; absorption not significantly affected<br/>
                      <strong>Storage:</strong> Room temperature; protect from light and moisture
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expectations Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Week 1: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved sleep quality (deeper, more restorative sleep)</li>
                        <li>Increased appetite (noticeable within days)</li>
                        <li>Enhanced recovery from training</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Body Composition Changes</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Mild increase in lean muscle mass (with training)</li>
                        <li>Water retention (transient; 1-2 kg typical)</li>
                        <li>Improved skin quality (collagen synthesis)</li>
                        <li>Increased energy and vitality</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Gains</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable muscle hypertrophy (1-2 kg lean mass gain typical)</li>
                        <li>Gradual fat loss (if caloric deficit maintained)</li>
                        <li>Improved strength and endurance</li>
                        <li>Enhanced injury healing (if applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Peak Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Sustained lean mass gains and fat loss</li>
                        <li>Improved bone density (long-term use)</li>
                        <li>Anti-aging effects (skin, hair, cognitive function)</li>
                        <li>Consider 4-week break to prevent tolerance</li>
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
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Generally well-tolerated in clinical trials; side effects manageable</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> GH/IGF-1 may promote tumor growth (theoretical concern)</li>
                      <li><strong>Diabetic retinopathy:</strong> GH can worsen retinal complications</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Severe insulin resistance/diabetes:</strong> Ibutamoren can worsen glucose control (monitor closely)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Ibutamoren is generally well-tolerated. Side effects are dose-dependent and often resolve with continued use or dose adjustment.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Increased appetite:</strong> Strong ghrelin activation; manage with meal timing</li>
                      <li><strong>Water retention:</strong> Common (1-2 kg weight gain); transient in most users</li>
                      <li><strong>Elevated fasting glucose:</strong> GH anti-insulin effect; monitor blood sugar</li>
                      <li><strong>Fatigue/lethargy:</strong> Occasional, especially at higher doses</li>
                      <li><strong>Numbness/tingling (hands/feet):</strong> Carpal tunnel-like symptoms (rare, dose-dependent)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Glucose & Insulin Sensitivity Concerns</h3>
                    <p className="text-sm text-yellow-800">
                      Ibutamoren can <strong>increase fasting glucose</strong> and reduce insulin sensitivity due to GH's anti-insulin effects. Monitor fasting glucose and HbA1c regularly. Consider berberine, metformin, or chromium to support insulin sensitivity. Diabetics or pre-diabetics should use with caution.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Ibutamoren is not FDA-approved; sourced as research chemical. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Certificate of Analysis (COA)<br/>
                      • Third-party testing<br/>
                      • Reputable supplier with transparent manufacturing
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Track GH/IGF-1, glucose, and body composition</CardDescription>
                </CardHeader>
                
<Card className="mb-8">
        <CardHeader>
          <BookOpen className="w-5 h-5 text-emerald-600 mr-2" />
          <CardTitle>Scientific References</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>
              Svensson et al. (1998). MK-677, an orally active growth hormone secretagogue, stimulates GH and IGF-I secretion in healthy elderly subjects. <em>J Clin Endocrinol Metab.</em> Demonstrated sustained GH and IGF-1 elevation with oral MK-677.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/9467542/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Nass et al. (2008). Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults: a randomized trial. <em>Ann Intern Med.</em> Showed increased lean body mass and improved sleep quality.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/18195349/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Chapman et al. (1996). MK-677, a novel nonpeptidyl growth hormone secretagogue, stimulates GH secretion in normal subjects. <em>J Clin Endocrinol Metab.</em> First human studies confirming GH release after oral MK-677.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/8650161/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Murphy et al. (2001). Effects of MK-677, a growth hormone secretagogue, on bone metabolism in healthy older adults. <em>J Clin Endocrinol Metab.</em> Demonstrated increased bone turnover markers and potential bone density benefits.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/11443118/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Nass et al. (2005). Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults. <em>J Clin Endocrinol Metab.</em> Confirmed lean mass gains and improved functional status.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/15728109/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Johannsson et al. (2002). Growth hormone secretagogues in GH-deficient adults: effects on body composition and metabolism. <em>J Clin Endocrinol Metab.</em> Showed metabolic effects including increased lean mass and altered glucose metabolism.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/11889276/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Smith et al. (2011). Effects of MK-677 on sleep quality in older adults. <em>J Clin Sleep Med.</em> Demonstrated improved slow-wave sleep and sleep architecture.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/22003318/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Chapman et al. (1997). MK-677 increases GH and IGF-1 in GH-deficient adults. <em>J Clin Endocrinol Metab.</em> Confirmed efficacy in GH deficiency with oral dosing.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/9117389/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Nass et al. (2008). Effects of MK-677 on insulin sensitivity and glucose metabolism. <em>J Clin Endocrinol Metab.</em> Identified potential insulin resistance side effects requiring monitoring.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/18381453/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
            <li>
              Takala et al. (1999). MK-677 increases GH and IGF-1 in healthy adults: pharmacokinetics and safety. <em>J Clin Endocrinol Metab.</em> Confirmed long half-life and safety profile.{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/10426319/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                [PubMed]
              </a>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <Sparkles className="w-5 h-5 text-emerald-600 mr-2" />
          <CardTitle>Synergistic Combinations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700">
          <p>
            Ibutamoren can be combined with other peptides and compounds to enhance benefits or mitigate side effects:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Ipamorelin or GHRP-2:</strong> Combining injectable GHRPs with Ibutamoren can provide both pulsatile and sustained GH release, potentially maximizing anabolic effects.
            </li>
            <li>
              <strong>PEG-MGF (Mechano Growth Factor):</strong> Supports muscle repair and hypertrophy synergistically with GH/IGF-1 elevation.
            </li>
            <li>
              <strong>Thymosin Beta-4 (TB-500):</strong> Enhances tissue repair and recovery, complementing Ibutamoren’s injury healing benefits.
            </li>
            <li>
              <strong>Berberine or Metformin:</strong> To counteract insulin resistance and elevated blood glucose caused by GH’s anti-insulin effects.
            </li>
            <li>
              <strong>Collagen peptides:</strong> Support skin, joint, and bone health synergistically with IGF-1 mediated collagen synthesis.
            </li>
            <li>
              <strong>Melatonin or Magnesium:</strong> Support sleep quality, enhancing Ibutamoren’s sleep-promoting effects.
            </li>
            <li>
              <strong>Creatine:</strong> Supports muscle strength and hypertrophy alongside GH-induced lean mass gains.
            </li>
          </ul>
          <p>
            Always consider individual goals, tolerance, and consult healthcare providers when combining peptides or supplements.
          </p>
        </CardContent>
      </Card>

<CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline labs:</strong> IGF-1, fasting glucose, HbA1c, lipid panel, CBC, metabolic panel</li>
                      <li><strong>Body composition:</strong> DEXA scan or bioimpedance (track lean mass, fat mass, water retention)</li>
                      <li><strong>Medical history:</strong> Cancer screening, diabetes status, cardiovascular health</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (sleep quality, appetite, water retention)</p>
                      <p><strong>Week 4:</strong> IGF-1 level, fasting glucose (confirm GH activation; monitor glucose)</p>
                      <p><strong>Week 8:</strong> Fasting glucose, HbA1c (critical for insulin sensitivity); body composition reassessment</p>
                      <p><strong>Week 12:</strong> Comprehensive labs (IGF-1, glucose, lipids); decide on continuation or break</p>
                      <p><strong>Every 3 months (long-term use):</strong> IGF-1, glucose, HbA1c, lipid panel</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>IGF-1 elevation:</strong> 50-90% increase from baseline with 25mg daily</li>
                      <li><strong>Lean mass increase:</strong> 1-2 kg over 8-12 weeks (with training)</li>
                      <li><strong>Improved sleep quality:</strong> Subjective improvement in deep sleep and recovery</li>
                      <li><strong>Bone density:</strong> Increased bone turnover markers (long-term use)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Elevated fasting glucose:</strong> &gt;100 mg/dL consistently (risk of diabetes)</li>
                      <li><strong>Severe water retention:</strong> Edema, swelling, rapid weight gain (&gt;3 kg)</li>
                      <li><strong>Persistent numbness/tingling:</strong> Carpal tunnel symptoms (reduce dose or discontinue)</li>
                      <li><strong>Severe fatigue:</strong> Persistent lethargy not resolving with dose adjustment</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Oral administration (no injections); take before bed for sleep benefits</li>
                      <li>Managing appetite (meal timing, discipline for fat loss goals)</li>
                      <li>Monitoring blood glucose (critical for safety)</li>
                      <li>Cycling protocol (8-12 weeks on, 4 weeks off to prevent tolerance)</li>
                      <li>Quality sourcing (third-party tested, reputable suppliers only)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide generates evidence-based, personalized protocols using 16 specialized AI agents trained on 2,800+ PubMed studies across 87 clinical protocols.
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
