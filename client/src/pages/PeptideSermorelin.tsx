import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, TrendingUp, Moon, Shield, Activity } from "lucide-react";
import { Link } from "wouter";

export default function PeptideSermorelin() {
  return (
    <>
    <Helmet>
        <title>Sermorelin | DrsPeptides</title>
        <meta name="description" content="Evidence-based guide to sermorelin GHRH for growth hormone optimization. Mechanisms, anti-aging benefits, dosing protocols, clinical applications, and safety guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sermorelin | DrsPeptides" />
        <meta property="og:description" content="Evidence-based guide to sermorelin GHRH for growth hormone optimization. Mechanisms, anti-aging benefits, dosing protocols, clinical applications, and safety guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sermorelin | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based guide to sermorelin GHRH for growth hormone optimization. Mechanisms, anti-aging benefits, dosing protocols, clinical applications, and safety guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Sermorelin",
          "description": "Evidence-based guide to sermorelin GHRH for growth hormone optimization. Mechanisms, anti-aging benefits, dosing protocols, clinical applications, and safety guidelines.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2025-12-01",
          "medicalAudience": {
                    "@type": "MedicalAudience",
                    "audienceType": "Physician"
          },
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Peptides
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermorelin</h1>
            <p className="text-xl text-blue-50 mb-6">
              GHRH analog (Growth Hormone Releasing Hormone). FDA-approved for pediatric GH deficiency. Stimulates natural GH production for anti-aging, muscle growth, fat loss, and recovery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">GHRH Analog</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FDA-Approved</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Injectable</span>
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
                  <CardTitle>What is Sermorelin?</CardTitle>
                  <CardDescription>FDA-approved GHRH analog for stimulating natural GH production</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Sermorelin is a synthetic analog of <strong>Growth Hormone Releasing Hormone (GHRH)</strong>, specifically the first 29 amino acids of the full 44-amino acid GHRH molecule. It is <strong>FDA-approved</strong> for diagnostic testing of GH deficiency in children and has been used off-label for anti-aging and performance enhancement in adults.
                  </p>
                  <p>
                    Sermorelin works by binding to <strong>GHRH receptors (GHRHR)</strong> on pituitary somatotrophs, stimulating the release of <strong>growth hormone (GH)</strong>. Unlike exogenous GH (which suppresses natural production), Sermorelin <strong>preserves pulsatile GH secretion</strong>, maintaining the body's natural rhythm and reducing the risk of side effects like insulin resistance.
                  </p>
                  <p>
                    Sermorelin is widely used for <strong>anti-aging</strong> (restoring youthful GH levels), <strong>muscle growth</strong>, <strong>fat loss</strong>, <strong>improved sleep quality</strong>, <strong>enhanced recovery</strong>, and <strong>cognitive function</strong>. It is often combined with <strong>GHRPs</strong> (e.g., GHRP-2, GHRP-6, Ipamorelin) for synergistic GH release.
                  </p>
                  <p>
                    Sermorelin is considered <strong>safer than exogenous GH</strong> because it works through the body's natural feedback mechanisms. The pituitary regulates GH release in response to Sermorelin, preventing excessive GH levels and associated side effects.
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
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Natural GH Stimulation</h3>
                        <p className="text-sm text-gray-600">Activates GHRH receptors; preserves pulsatile GH secretion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">FDA-Approved</h3>
                        <p className="text-sm text-gray-600">Approved for pediatric GH deficiency diagnostic testing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Moon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Sleep Quality Enhancement</h3>
                        <p className="text-sm text-gray-600">Promotes deep sleep (slow-wave sleep); enhances recovery</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Synergy with GHRPs</h3>
                        <p className="text-sm text-gray-600">Amplifies GH release when combined with GHRP-2, GHRP-6, or Ipamorelin</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>FDA-approved:</strong> Diagnostic testing for GH deficiency in children. <strong>Off-label uses:</strong> Anti-aging (restoring youthful GH levels), muscle growth, fat loss, sleep quality improvement, injury recovery, cognitive enhancement. <strong>Synergistic combinations:</strong> Often paired with GHRPs (GHRP-2, GHRP-6, Ipamorelin) for amplified GH release.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>GHRH receptor (GHRHR) activation on pituitary somatotrophs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. GHRH Receptor Activation</h3>
                    <p className="text-sm text-gray-700">
                      Sermorelin binds to <strong>GHRH receptors (GHRHR)</strong> on pituitary somatotrophs (GH-secreting cells). This activates intracellular signaling pathways (cAMP/PKA) that stimulate GH synthesis and release. Sermorelin mimics the action of endogenous GHRH, which is produced by the hypothalamus to regulate GH secretion.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Pulsatile GH Release (Preserves Natural Rhythm)</h3>
                    <p className="text-sm text-gray-700">
                      Sermorelin induces a <strong>pulsatile GH surge</strong> within 15-30 minutes of administration. Unlike exogenous GH (which provides constant GH levels and suppresses natural production), Sermorelin preserves the body's natural pulsatile GH rhythm. This reduces the risk of receptor desensitization, insulin resistance, and other side effects associated with exogenous GH.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. IGF-1 Production</h3>
                    <p className="text-sm text-gray-700">
                      GH released by Sermorelin travels to the liver, where it stimulates production of <strong>insulin-like growth factor 1 (IGF-1)</strong>. IGF-1 mediates most of GH's anabolic effects: muscle protein synthesis, bone growth, tissue repair, lipolysis (fat breakdown), and cognitive enhancement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Negative Feedback Regulation (Safety Mechanism)</h3>
                    <p className="text-sm text-gray-700">
                      The pituitary's response to Sermorelin is regulated by <strong>negative feedback</strong> from GH and IGF-1. When GH/IGF-1 levels are sufficient, the pituitary reduces GH secretion in response to Sermorelin. This self-regulating mechanism prevents excessive GH levels, making Sermorelin safer than exogenous GH.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Synergy with GHRPs (Dual-Pathway Stimulation)</h3>
                    <p className="text-sm text-gray-700">
                      Sermorelin works synergistically with <strong>GHRPs</strong> (e.g., GHRP-2, GHRP-6, Ipamorelin). Sermorelin acts via GHRHR, while GHRPs act via the ghrelin receptor (GHS-R1a). Combined use amplifies GH pulses and extends their duration, maximizing anabolic and recovery benefits. This is the most popular peptide combination for anti-aging and performance enhancement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> ~10-20 minutes (short-acting; rapidly degraded)<br/>
                      <strong>Peak GH release:</strong> 15-30 minutes post-injection<br/>
                      <strong>Duration of elevated GH:</strong> 2-3 hours<br/>
                      <strong>Frequency:</strong> 1-2x daily (typically before bed for sleep/recovery benefits)
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
                  <CardDescription>FDA-approved for pediatric use; extensive off-label research in adults</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">FDA Approval & Pediatric Use</h3>
                    <p className="text-sm text-gray-700">
                      Sermorelin is FDA-approved as a diagnostic agent for assessing GH secretion in children with suspected GH deficiency. It is administered as a stimulation test: GH levels are measured before and after Sermorelin injection to determine if the pituitary can respond appropriately.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging & GH Restoration in Adults</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      GH and IGF-1 levels decline with age (somatopause), contributing to muscle loss, fat gain, reduced bone density, and cognitive decline. Studies show Sermorelin restores youthful GH levels in adults, improving body composition, energy, sleep quality, and overall vitality.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/8954023/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Walker et al. (1996) - Sermorelin in aging adults
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Body Composition & Muscle Growth</h3>
                    <p className="text-sm text-gray-700">
                      Studies in GH-deficient adults show Sermorelin increases lean body mass, reduces fat mass (especially visceral fat), and improves muscle strength. Effects are dose-dependent and enhanced when combined with resistance training.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sleep Quality & Recovery</h3>
                    <p className="text-sm text-gray-700">
                      GH is released during deep sleep (slow-wave sleep). Sermorelin administered before bed enhances sleep quality, increases slow-wave sleep duration, and promotes recovery. Users report deeper sleep, improved morning energy, and faster recovery from training.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Cognitive Function & Neuroprotection</h3>
                    <p className="text-sm text-gray-700">
                      GH and IGF-1 have neuroprotective effects, promoting neurogenesis, synaptic plasticity, and cognitive function. Sermorelin may improve memory, focus, and mental clarity in aging adults, though large-scale trials are needed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Synergy with GHRPs</h3>
                    <p className="text-sm text-gray-700">
                      Combining Sermorelin with GHRPs (GHRP-2, GHRP-6, Ipamorelin) produces synergistic GH release, with GH pulses 2-3x higher than either peptide alone. This combination is widely used in anti-aging and performance enhancement protocols.
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
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">FDA-Approved Diagnostic</h3>
                      <p className="text-sm text-blue-800">Approved for GH deficiency testing in children; established safety profile</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Anti-Aging Benefits</h3>
                      <p className="text-sm text-blue-800">Restores youthful GH levels; improves body composition, energy, and vitality (Walker 1996)</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Sleep Enhancement</h3>
                      <p className="text-sm text-blue-800">Increases slow-wave sleep; promotes recovery and GH release during sleep</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Synergy with GHRPs</h3>
                      <p className="text-sm text-blue-800">Amplifies GH pulses 2-3x when combined with GHRP-2, GHRP-6, or Ipamorelin</p>
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
                  <CardDescription>Based on clinical research and expert anti-aging protocols</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Monotherapy (Sermorelin Alone)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 200-500mcg per injection, subcutaneous<br/>
                      <strong>Frequency:</strong> Once daily, before bed (enhances sleep and overnight GH release)<br/>
                      <strong>Timing:</strong> On empty stomach (2+ hours after last meal)<br/>
                      <strong>Duration:</strong> 3-6 months for anti-aging; ongoing for long-term benefits
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Synergistic Protocol: Sermorelin + GHRP (Most Popular)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sermorelin:</strong> 200-300mcg per injection<br/>
                      <strong>GHRP-2 or Ipamorelin:</strong> 100-200mcg per injection (same syringe as Sermorelin)<br/>
                      <strong>Frequency:</strong> 1-2x daily (before bed, and optionally morning or post-workout)<br/>
                      <strong>Rationale:</strong> Sermorelin (GHRH) + GHRP (GHS) amplify GH pulses synergistically (2-3x higher)<br/>
                      <strong>Duration:</strong> 3-6 months, then reassess; can continue long-term with periodic breaks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Anti-aging & longevity:</strong> 200-300mcg Sermorelin + 100mcg Ipamorelin, once daily before bed (3-6 months, then ongoing)<br/>
                      <strong>Muscle growth (bulking):</strong> 300mcg Sermorelin + 200mcg GHRP-2, 2x daily (morning and before bed; 3-6 months)<br/>
                      <strong>Fat loss:</strong> 200mcg Sermorelin + 100mcg Ipamorelin, 2x daily fasted (morning and before bed; 3-6 months)<br/>
                      <strong>Sleep & recovery:</strong> 200-300mcg Sermorelin before bed (ongoing; enhances deep sleep and overnight GH release)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Route:</strong> Subcutaneous injection (abdomen, thigh)<br/>
                      <strong>Reconstitution:</strong> Bacteriostatic water (typical: 2ml water per 5mg vial = 250mcg per 0.1ml)<br/>
                      <strong>Storage:</strong> Reconstituted vials refrigerated; use within 30 days<br/>
                      <strong>Timing:</strong> Empty stomach critical (food/insulin blunts GH release); before bed optimal for sleep/recovery
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
                      <h3 className="font-semibold">Week 1-2: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved sleep quality (deeper, more restorative sleep)</li>
                        <li>Enhanced recovery from training (reduced soreness)</li>
                        <li>Increased energy and vitality</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Body Composition Changes</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Mild increase in lean muscle mass (especially with training)</li>
                        <li>Gradual fat loss (enhanced lipolysis)</li>
                        <li>Improved skin quality (collagen synthesis)</li>
                        <li>Better mood and mental clarity</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Month 2-3: Significant Gains</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable muscle hypertrophy (2-4 lbs lean mass gain typical)</li>
                        <li>Visible fat loss (especially abdominal fat)</li>
                        <li>Improved strength and endurance</li>
                        <li>Enhanced injury healing (if applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Month 3-6: Peak Anti-Aging Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Sustained lean mass gains and fat loss</li>
                        <li>Improved bone density (long-term use)</li>
                        <li>Anti-aging effects (skin elasticity, hair quality, cognitive function)</li>
                        <li>Reduced biological age markers</li>
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
                  <CardDescription>FDA-approved with established safety; well-tolerated in clinical use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> GH/IGF-1 may promote tumor growth (theoretical concern; no direct evidence in humans)</li>
                      <li><strong>Diabetic retinopathy:</strong> GH can worsen retinal complications</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Severe insulin resistance/diabetes:</strong> GH can worsen glucose control (monitor closely)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Sermorelin is generally well-tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (rare)</li>
                      <li><strong>Headache:</strong> Occasional, mild</li>
                      <li><strong>Flushing:</strong> Transient warmth or redness (rare)</li>
                      <li><strong>Dizziness:</strong> Rare</li>
                      <li><strong>Nausea:</strong> Rare</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Glucose & Insulin Sensitivity</h3>
                    <p className="text-sm text-yellow-800">
                      GH has <strong>anti-insulin effects</strong> (increases blood glucose). Sermorelin may transiently raise blood sugar, especially in diabetics or insulin-resistant individuals. Monitor fasting glucose and HbA1c if using long-term. Consider berberine or metformin to support insulin sensitivity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Advantages Over Exogenous GH</h3>
                    <p className="text-sm text-gray-700">
                      Sermorelin is <strong>safer than exogenous GH</strong> because:<br/>
                      • Preserves pulsatile GH secretion (natural rhythm)<br/>
                      • Regulated by negative feedback (prevents excessive GH)<br/>
                      • Lower risk of insulin resistance and side effects<br/>
                      • Does not suppress natural GH production
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable suppliers with third-party testing. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Certificate of Analysis (COA)<br/>
                      • Endotoxin testing (&lt;1 EU/mg)<br/>
                      • GMP manufacturing standards
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
                  <CardDescription>Track GH/IGF-1 levels, body composition, and metabolic markers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline labs:</strong> IGF-1, fasting glucose, HbA1c, lipid panel, CBC, metabolic panel</li>
                      <li><strong>Body composition:</strong> DEXA scan or bioimpedance (track lean mass and fat mass)</li>
                      <li><strong>Medical history:</strong> Cancer screening, diabetes status, cardiovascular health</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (sleep quality, injection site reactions, subjective effects)</p>
                      <p><strong>Month 1:</strong> IGF-1 level (confirm GH axis activation; target upper-normal range for age)</p>
                      <p><strong>Month 3:</strong> Fasting glucose, HbA1c (monitor insulin sensitivity); body composition reassessment</p>
                      <p><strong>Month 6:</strong> Comprehensive labs (IGF-1, glucose, lipids); decide on continuation</p>
                      <p><strong>Every 6 months (long-term use):</strong> IGF-1, glucose, HbA1c, lipid panel, body composition</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>IGF-1 elevation:</strong> Target upper-normal range for age (e.g., 200-300 ng/mL for 40-50 year-olds)</li>
                      <li><strong>Lean mass increase:</strong> 2-4 lbs over 3-6 months (with training)</li>
                      <li><strong>Fat loss:</strong> 2-5% body fat reduction over 3-6 months</li>
                      <li><strong>Improved sleep quality:</strong> Subjective improvement in deep sleep and recovery</li>
                      <li><strong>Enhanced vitality:</strong> Increased energy, mood, cognitive function</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe water retention:</strong> Edema, swelling, rapid weight gain</li>
                      <li><strong>Persistent headache:</strong> Severe or worsening</li>
                      <li><strong>Elevated fasting glucose:</strong> &gt;100 mg/dL (monitor closely; consider insulin sensitizers)</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, rotate sites)</li>
                      <li>Empty stomach timing (critical for GH release)</li>
                      <li>Before-bed administration (optimal for sleep and overnight GH release)</li>
                      <li>Storage and reconstitution (bacteriostatic water, refrigeration)</li>
                      <li>Long-term use considerations (periodic labs, body composition tracking)</li>
                      <li>Quality sourcing (third-party tested peptides only)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
    </div>
    </>
  );
}
