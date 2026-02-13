import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, TrendingUp, Zap, Shield, Activity } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideGHRP2() {
  return (
    <>
    <Helmet>
        <title>GHRP-2 | DrsPeptides</title>
        <meta name="description" content="Clinical guide to GHRP-2 growth hormone releasing peptide. Mechanisms, dosing protocols, combination strategies, safety considerations, and evidence for healthcare providers." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GHRP-2 | DrsPeptides" />
        <meta property="og:description" content="Clinical guide to GHRP-2 growth hormone releasing peptide. Mechanisms, dosing protocols, combination strategies, safety considerations, and evidence for healthcare providers." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GHRP-2 | DrsPeptides" />
        <meta name="twitter:description" content="Clinical guide to GHRP-2 growth hormone releasing peptide. Mechanisms, dosing protocols, combination strategies, safety considerations, and evidence for healthcare providers." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "GHRP-2",
          "description": "Clinical guide to GHRP-2 growth hormone releasing peptide. Mechanisms, dosing protocols, combination strategies, safety considerations, and evidence for healthcare providers.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2026-02-12",
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

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GHRP-2</h1>
            <p className="text-xl text-indigo-50 mb-6">
              Growth Hormone Releasing Peptide-2. Potent GH secretagogue with strong appetite stimulation, muscle growth, fat loss, and recovery benefits.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">GH Secretagogue</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Muscle Growth</span>
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
                  <CardTitle>What is GHRP-2?</CardTitle>
                  <CardDescription>Second-generation growth hormone releasing peptide with potent GH secretion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GHRP-2 (Growth Hormone Releasing Peptide-2) is a synthetic hexapeptide that stimulates the pituitary gland to release <strong>growth hormone (GH)</strong>. It belongs to the <strong>growth hormone secretagogue (GHS)</strong> class and acts primarily through the <strong>ghrelin receptor</strong> (GHS-R1a), also known as the "hunger receptor."
                  </p>
                  <p>
                    GHRP-2 is one of the most <strong>potent GH-releasing peptides</strong>, producing GH pulses 2-3x higher than GHRP-6 and comparable to Ipamorelin (but with stronger appetite stimulation). It is widely used for <strong>muscle growth</strong>, <strong>fat loss</strong>, <strong>recovery</strong>, <strong>anti-aging</strong>, and <strong>injury healing</strong>.
                  </p>
                  <p>
                    Unlike exogenous GH (which suppresses natural production), GHRP-2 <strong>preserves pulsatile GH secretion</strong>, maintaining the body's natural rhythm. This makes it safer for long-term use and less likely to cause side effects like insulin resistance.
                  </p>
                  <p>
                    GHRP-2 is often combined with <strong>CJC-1295</strong> (a GHRH analog) for synergistic GH release. This combination amplifies GH pulses and extends their duration, maximizing anabolic and recovery benefits.
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
                      <TrendingUp className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Potent GH Release</h3>
                        <p className="text-sm text-gray-600">2-3x stronger GH pulses than GHRP-6; comparable to Ipamorelin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Appetite Stimulation</h3>
                        <p className="text-sm text-gray-600">Strong ghrelin receptor activation; increases hunger (useful for bulking)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Muscle Growth & Fat Loss</h3>
                        <p className="text-sm text-gray-600">Anabolic effects via GH/IGF-1 axis; lipolysis (fat breakdown)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Preserves Natural GH Rhythm</h3>
                        <p className="text-sm text-gray-600">Pulsatile secretion maintained; safer than exogenous GH</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Muscle hypertrophy, fat loss, injury recovery, anti-aging, sleep quality improvement. <strong>Synergistic combinations:</strong> Often paired with CJC-1295 (GHRH analog) for amplified GH release. <strong>Appetite benefits:</strong> Useful for individuals struggling to gain weight or increase caloric intake (bulking phases).
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Ghrelin receptor (GHS-R1a) activation triggering pituitary GH release</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Ghrelin Receptor Activation</h3>
                    <p className="text-sm text-gray-700">
                      GHRP-2 binds to the <strong>ghrelin receptor (GHS-R1a)</strong> on pituitary somatotrophs (GH-secreting cells). This triggers intracellular calcium release and activates signaling pathways (PKC, MAPK) that stimulate GH secretion. The ghrelin receptor is also expressed in the hypothalamus and other tissues, contributing to appetite stimulation and metabolic effects.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Pituitary GH Release</h3>
                    <p className="text-sm text-gray-700">
                      GHRP-2 induces a <strong>pulsatile GH surge</strong> within 15-30 minutes of administration. Peak GH levels are 2-3x higher than GHRP-6 and comparable to Ipamorelin. Unlike exogenous GH, GHRP-2 preserves the body's natural GH rhythm, reducing the risk of receptor desensitization and metabolic side effects.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. IGF-1 Production</h3>
                    <p className="text-sm text-gray-700">
                      GH released by GHRP-2 travels to the liver, where it stimulates production of <strong>insulin-like growth factor 1 (IGF-1)</strong>. IGF-1 mediates most of GH's anabolic effects: muscle protein synthesis, bone growth, tissue repair, and lipolysis (fat breakdown).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Appetite Stimulation (Ghrelin Mimetic)</h3>
                    <p className="text-sm text-gray-700">
                      GHRP-2's activation of the ghrelin receptor (the "hunger hormone" receptor) <strong>increases appetite</strong>. This is beneficial for individuals struggling to gain weight, but may be undesirable for those focused on fat loss. Appetite stimulation is stronger than Ipamorelin but weaker than GHRP-6.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Synergy with GHRH Analogs (CJC-1295)</h3>
                    <p className="text-sm text-gray-700">
                      GHRP-2 works synergistically with <strong>GHRH analogs</strong> (e.g., CJC-1295, Sermorelin). GHRH stimulates GH release via a different receptor (GHRHR), while GHRP-2 acts via GHS-R1a. Combined use amplifies GH pulses and extends their duration, maximizing anabolic effects.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> ~30 minutes (short-acting)<br/>
                      <strong>Peak GH release:</strong> 15-30 minutes post-injection<br/>
                      <strong>Duration of elevated GH:</strong> 2-3 hours<br/>
                      <strong>Frequency:</strong> 1-3x daily for sustained GH elevation
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
                  <CardDescription>Extensive human studies demonstrating GH release, body composition, and metabolic effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">GH Release & IGF-1 Elevation</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Multiple studies confirm GHRP-2's potent GH-releasing effects. A dose of 100mcg produces GH levels 2-3x higher than GHRP-6, with peak GH occurring 15-30 minutes post-injection. Chronic use (weeks to months) sustains elevated IGF-1 levels without tachyphylaxis (tolerance).
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/8954023/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Bowers et al. (1996) - GHRP-2 GH release in humans
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Body Composition & Muscle Growth</h3>
                    <p className="text-sm text-gray-700">
                      Studies in GH-deficient adults show GHRP-2 increases lean body mass, reduces fat mass, and improves muscle strength. Effects are dose-dependent and enhanced when combined with resistance training.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Appetite Stimulation</h3>
                    <p className="text-sm text-gray-700">
                      GHRP-2's ghrelin receptor activation significantly increases appetite and food intake in human trials. This effect is stronger than Ipamorelin but weaker than GHRP-6. Useful for cachexia (muscle wasting), eating disorders, or bulking phases.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sleep Quality & Recovery</h3>
                    <p className="text-sm text-gray-700">
                      GH is released during deep sleep (slow-wave sleep). GHRP-2 administered before bed enhances sleep quality and promotes recovery. Users report deeper sleep, improved morning energy, and faster recovery from training.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging & Longevity</h3>
                    <p className="text-sm text-gray-700">
                      GH and IGF-1 decline with age (somatopause). GHRP-2 restores youthful GH levels, improving skin quality, bone density, cognitive function, and overall vitality. Long-term safety data is limited, but short-term use (months) appears safe.
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
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Potent GH Release</h3>
                      <p className="text-sm text-indigo-800">2-3x stronger GH pulses than GHRP-6; comparable to Ipamorelin (Bowers 1996)</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Lean Mass Increase</h3>
                      <p className="text-sm text-indigo-800">Increases lean body mass and reduces fat mass in GH-deficient adults</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Appetite Stimulation</h3>
                      <p className="text-sm text-indigo-800">Strong ghrelin receptor activation; useful for bulking and cachexia treatment</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Sleep & Recovery</h3>
                      <p className="text-sm text-indigo-800">Enhances deep sleep quality and accelerates recovery from training</p>
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
                  <CardDescription>Based on clinical research and expert recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Monotherapy (GHRP-2 Alone)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 100-300mcg per injection, subcutaneous<br/>
                      <strong>Frequency:</strong> 1-3x daily (morning, post-workout, before bed)<br/>
                      <strong>Timing:</strong> On empty stomach (30+ minutes before meals or 2+ hours after)<br/>
                      <strong>Duration:</strong> 8-12 weeks, then 4-week break to prevent desensitization
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Synergistic Protocol: GHRP-2 + CJC-1295</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>GHRP-2:</strong> 100-200mcg per injection<br/>
                      <strong>CJC-1295 (no DAC):</strong> 100mcg per injection (same syringe as GHRP-2)<br/>
                      <strong>Frequency:</strong> 2-3x daily (morning, post-workout, before bed)<br/>
                      <strong>Rationale:</strong> CJC-1295 (GHRH analog) + GHRP-2 (GHS) amplify GH pulses synergistically<br/>
                      <strong>Duration:</strong> 8-12 weeks, then 4-week break
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Muscle growth (bulking):</strong> 200-300mcg GHRP-2 + 100mcg CJC-1295, 3x daily (leverage appetite stimulation)<br/>
                      <strong>Fat loss:</strong> 100-200mcg GHRP-2 + 100mcg CJC-1295, 2x daily (morning fasted, before bed); manage appetite with meal timing<br/>
                      <strong>Recovery & anti-aging:</strong> 100-200mcg GHRP-2 before bed (enhance deep sleep and overnight GH release)<br/>
                      <strong>Injury healing:</strong> 200mcg GHRP-2 + 100mcg CJC-1295, 2-3x daily for 4-8 weeks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Route:</strong> Subcutaneous injection (abdomen, thigh)<br/>
                      <strong>Reconstitution:</strong> Bacteriostatic water (typical: 2ml water per 5mg vial = 250mcg per 0.1ml)<br/>
                      <strong>Storage:</strong> Reconstituted vials refrigerated; use within 30 days<br/>
                      <strong>Timing:</strong> Empty stomach critical (food/insulin blunts GH release)
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
                        <li>Enhanced recovery from training (reduced soreness)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Body Composition Changes</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Mild increase in lean muscle mass (especially with training)</li>
                        <li>Gradual fat loss (enhanced lipolysis)</li>
                        <li>Improved skin quality (collagen synthesis)</li>
                        <li>Increased energy and vitality</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Gains</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable muscle hypertrophy (2-4 lbs lean mass gain typical)</li>
                        <li>Visible fat loss (especially abdominal fat)</li>
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
                        <li>Consider 4-week break to prevent receptor desensitization</li>
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
                  <CardDescription>Generally well-tolerated; side effects are mild and transient</CardDescription>
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
                      GHRP-2 is generally well-tolerated. Side effects are mild and often resolve with continued use or dose adjustment.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Increased appetite:</strong> Strong ghrelin activation; manage with meal timing</li>
                      <li><strong>Water retention:</strong> Mild, transient (GH effect)</li>
                      <li><strong>Tingling/numbness (hands/feet):</strong> Carpal tunnel-like symptoms (rare, dose-dependent)</li>
                      <li><strong>Headache:</strong> Occasional, mild</li>
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (rare)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Glucose & Insulin Sensitivity</h3>
                    <p className="text-sm text-yellow-800">
                      GH has <strong>anti-insulin effects</strong> (increases blood glucose). GHRP-2 may transiently raise blood sugar, especially in diabetics or insulin-resistant individuals. Monitor fasting glucose and HbA1c if using long-term. Consider berberine or metformin to support insulin sensitivity.
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
                      <p><strong>Week 1:</strong> Tolerability check (appetite, sleep, injection site reactions)</p>
                      <p><strong>Week 4:</strong> IGF-1 level (confirm GH axis activation; target upper-normal range)</p>
                      <p><strong>Week 8:</strong> Fasting glucose, HbA1c (monitor insulin sensitivity); body composition reassessment</p>
                      <p><strong>Week 12:</strong> Comprehensive labs (IGF-1, glucose, lipids); decide on continuation or break</p>
                      <p><strong>Every 3 months (long-term use):</strong> IGF-1, glucose, HbA1c, lipid panel</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>IGF-1 elevation:</strong> Target upper-normal range (250-350 ng/mL for adults; age-dependent)</li>
                      <li><strong>Lean mass increase:</strong> 2-4 lbs over 8-12 weeks (with training)</li>
                      <li><strong>Fat loss:</strong> 2-5% body fat reduction over 8-12 weeks</li>
                      <li><strong>Improved sleep quality:</strong> Subjective improvement in deep sleep and recovery</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe water retention:</strong> Edema, swelling, rapid weight gain</li>
                      <li><strong>Persistent tingling/numbness:</strong> Carpal tunnel symptoms (reduce dose or discontinue)</li>
                      <li><strong>Elevated fasting glucose:</strong> &gt;100 mg/dL (monitor closely; consider insulin sensitizers)</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, rotate sites)</li>
                      <li>Empty stomach timing (critical for GH release)</li>
                      <li>Storage and reconstitution (bacteriostatic water, refrigeration)</li>
                      <li>Cycling protocol (8-12 weeks on, 4 weeks off to prevent desensitization)</li>
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
