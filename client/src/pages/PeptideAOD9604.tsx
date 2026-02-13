import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, TrendingDown, Flame, Shield, Activity } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideAOD9604() {
  return (
    <>
    <Helmet>
        <title>AOD-9604 | DrsPeptides</title>
        <meta name="description" content="Clinical guide to AOD-9604 fragment for fat loss and metabolic enhancement. Mechanisms, dosing protocols, safety data, and practice implementation for healthcare providers." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AOD-9604 | DrsPeptides" />
        <meta property="og:description" content="Clinical guide to AOD-9604 fragment for fat loss and metabolic enhancement. Mechanisms, dosing protocols, safety data, and practice implementation for healthcare providers." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AOD-9604 | DrsPeptides" />
        <meta name="twitter:description" content="Clinical guide to AOD-9604 fragment for fat loss and metabolic enhancement. Mechanisms, dosing protocols, safety data, and practice implementation for healthcare providers." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "AOD-9604",
          "description": "Clinical guide to AOD-9604 fragment for fat loss and metabolic enhancement. Mechanisms, dosing protocols, safety data, and practice implementation for healthcare providers.",
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AOD-9604</h1>
            <p className="text-xl text-orange-50 mb-6">
              Modified fragment of human growth hormone (hGH 176-191). Selective fat-burning peptide without GH side effects. Stimulates lipolysis (fat breakdown) while preserving lean muscle mass.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Fat Loss Fragment</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Injectable</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">No GH Side Effects</span>
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
                  <CardTitle>What is AOD-9604?</CardTitle>
                  <CardDescription>Modified hGH fragment (176-191) for selective fat loss without GH side effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    AOD-9604 (Anti-Obesity Drug 9604) is a <strong>modified fragment</strong> of the C-terminal region of human growth hormone (hGH), specifically amino acids 176-191. It was developed by Metabolic Pharmaceuticals in the 1990s as a targeted fat-loss agent that retains GH's lipolytic (fat-burning) effects while <strong>eliminating side effects</strong> associated with full-length GH (e.g., insulin resistance, joint pain, water retention).
                  </p>
                  <p>
                    AOD-9604 works by mimicking the way natural GH regulates fat metabolism. It stimulates <strong>lipolysis</strong> (breakdown of fat) and <strong>inhibits lipogenesis</strong> (formation of new fat), particularly targeting <strong>visceral and subcutaneous fat</strong>. Importantly, AOD-9604 does <strong>not bind to GH receptors</strong>, so it does not affect blood sugar, IGF-1 levels, or muscle growth—making it a "pure" fat-loss peptide.
                  </p>
                  <p>
                    AOD-9604 was investigated in clinical trials for obesity treatment but did not receive FDA approval due to modest efficacy in large-scale trials. However, it remains popular in the biohacking and bodybuilding communities for <strong>targeted fat loss</strong>, <strong>body recomposition</strong>, and <strong>cutting phases</strong>.
                  </p>
                  <p>
                    <strong>Key advantage:</strong> AOD-9604 provides fat-burning benefits without the metabolic side effects of full-length GH, making it safer for individuals concerned about insulin resistance or joint issues.
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
                      <Flame className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Selective Lipolysis</h3>
                        <p className="text-sm text-gray-600">Stimulates fat breakdown; targets visceral and subcutaneous fat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">No GH Side Effects</h3>
                        <p className="text-sm text-gray-600">Does not bind GH receptors; no insulin resistance, joint pain, or water retention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Inhibits Lipogenesis</h3>
                        <p className="text-sm text-gray-600">Prevents new fat formation; supports body recomposition</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Preserves Lean Mass</h3>
                        <p className="text-sm text-gray-600">Fat loss without muscle catabolism; ideal for cutting phases</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Investigational (not FDA-approved):</strong> Obesity treatment, metabolic syndrome. <strong>Off-label uses:</strong> Targeted fat loss, body recomposition, cutting phases (bodybuilding), visceral fat reduction. <strong>Advantages:</strong> Selective fat-burning without GH side effects (no insulin resistance, joint pain, or water retention); preserves lean muscle mass.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Mimics GH's lipolytic effects without GH receptor activation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Selective Lipolysis (Fat Breakdown)</h3>
                    <p className="text-sm text-gray-700">
                      AOD-9604 mimics the C-terminal region of GH (amino acids 176-191), which is responsible for GH's <strong>lipolytic effects</strong>. It stimulates the breakdown of triglycerides in adipocytes (fat cells) into free fatty acids and glycerol, which are then released into the bloodstream and oxidized (burned) for energy. This process is particularly effective in <strong>visceral fat</strong> (abdominal fat) and <strong>subcutaneous fat</strong>.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Inhibits Lipogenesis (New Fat Formation)</h3>
                    <p className="text-sm text-gray-700">
                      In addition to promoting fat breakdown, AOD-9604 <strong>inhibits lipogenesis</strong>—the process by which the body converts excess carbohydrates and calories into stored fat. This dual action (increased lipolysis + decreased lipogenesis) makes AOD-9604 highly effective for fat loss and body recomposition.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. No GH Receptor Binding (Key Safety Feature)</h3>
                    <p className="text-sm text-gray-700">
                      Unlike full-length GH, AOD-9604 <strong>does not bind to GH receptors</strong>. This means it does not stimulate IGF-1 production, does not affect blood sugar or insulin sensitivity, and does not cause water retention, joint pain, or other GH-related side effects. This makes AOD-9604 a "pure" fat-loss peptide with a superior safety profile.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Preserves Lean Muscle Mass</h3>
                    <p className="text-sm text-gray-700">
                      AOD-9604 selectively targets fat tissue without affecting muscle protein synthesis or breakdown. This allows for <strong>fat loss without muscle catabolism</strong>, making it ideal for cutting phases, body recomposition, or individuals seeking to reduce body fat while maintaining strength and lean mass.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Potential Cartilage Regeneration (Emerging Research)</h3>
                    <p className="text-sm text-gray-700">
                      Preliminary studies suggest AOD-9604 may have <strong>cartilage-protective</strong> and <strong>regenerative effects</strong>, potentially benefiting joint health. This is an area of ongoing research and not yet established clinically.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> ~2 hours (short-acting)<br/>
                      <strong>Peak fat-burning effect:</strong> 1-3 hours post-injection<br/>
                      <strong>Duration of lipolytic activity:</strong> 4-6 hours<br/>
                      <strong>Frequency:</strong> 1-2x daily (typically morning fasted and/or pre-workout)
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
                  <CardDescription>Investigated for obesity treatment; modest efficacy in large-scale trials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Development & Clinical Trials</h3>
                    <p className="text-sm text-gray-700">
                      AOD-9604 was developed by Metabolic Pharmaceuticals in the 1990s as a targeted obesity treatment. Early Phase II trials showed promising fat loss (2-3 kg over 12 weeks) with good tolerability. However, larger Phase III trials failed to demonstrate statistically significant weight loss compared to placebo, leading to discontinuation of FDA approval efforts.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Fat Loss & Body Composition</h3>
                    <p className="text-sm text-gray-700">
                      Studies in obese adults show AOD-9604 produces modest fat loss (1-3 kg over 12 weeks) with preferential reduction in <strong>visceral fat</strong> (abdominal fat). Effects are dose-dependent and enhanced when combined with caloric restriction and exercise. Lean muscle mass is preserved or slightly increased.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Safety Profile (No GH Side Effects)</h3>
                    <p className="text-sm text-gray-700">
                      Clinical trials demonstrate AOD-9604 does not affect blood glucose, insulin sensitivity, IGF-1 levels, or thyroid function. No significant adverse events were reported. This confirms AOD-9604's selective fat-burning action without GH-related metabolic side effects.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Why Not FDA-Approved?</h3>
                    <p className="text-sm text-gray-700">
                      Despite a favorable safety profile, AOD-9604 did not receive FDA approval due to <strong>modest efficacy</strong> in large-scale trials. Weight loss was statistically significant but clinically modest (~2-3 kg over 12 weeks), which did not meet FDA's efficacy thresholds for obesity drugs. However, it remains popular for targeted fat loss in biohacking and bodybuilding communities.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Cartilage Regeneration (Emerging Research)</h3>
                    <p className="text-sm text-gray-700">
                      Preliminary animal studies suggest AOD-9604 may stimulate cartilage repair and protect against osteoarthritis. Human trials are limited, but this represents a potential additional benefit beyond fat loss.
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
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Selective Fat Loss</h3>
                      <p className="text-sm text-orange-800">1-3 kg fat loss over 12 weeks; preferential visceral fat reduction</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">No GH Side Effects</h3>
                      <p className="text-sm text-orange-800">No impact on glucose, insulin, IGF-1, or thyroid; superior safety profile</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Lean Mass Preservation</h3>
                      <p className="text-sm text-orange-800">Fat loss without muscle catabolism; ideal for body recomposition</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Cartilage Protection</h3>
                      <p className="text-sm text-orange-800">Preliminary evidence for cartilage regeneration (animal studies)</p>
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
                      <strong>Dose:</strong> 300-500mcg per injection, subcutaneous<br/>
                      <strong>Frequency:</strong> Once daily (morning fasted) or twice daily (morning fasted + pre-workout)<br/>
                      <strong>Timing:</strong> Fasted state optimal (30+ minutes before meals); pre-workout enhances fat oxidation<br/>
                      <strong>Duration:</strong> 8-12 weeks, then reassess; can continue long-term with periodic breaks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Fat loss (cutting):</strong> 500mcg twice daily (morning fasted, pre-workout); combine with caloric deficit and cardio (8-12 weeks)<br/>
                      <strong>Body recomposition:</strong> 300-500mcg once daily (morning fasted); combine with resistance training and moderate caloric deficit (12+ weeks)<br/>
                      <strong>Visceral fat reduction:</strong> 500mcg once daily (morning fasted); focus on HIIT and caloric deficit (8-12 weeks)<br/>
                      <strong>Maintenance:</strong> 300mcg 3-5x weekly (morning fasted) to prevent fat regain after cutting phase
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Route:</strong> Subcutaneous injection (abdomen, thigh)<br/>
                      <strong>Reconstitution:</strong> Bacteriostatic water (typical: 2ml water per 5mg vial = 500mcg per 0.2ml)<br/>
                      <strong>Storage:</strong> Reconstituted vials refrigerated; use within 30 days<br/>
                      <strong>Timing:</strong> Fasted state critical (maximizes lipolysis); avoid eating 30+ minutes post-injection
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
                        <li>Mild increase in energy (enhanced fat oxidation)</li>
                        <li>Slight reduction in appetite (some users)</li>
                        <li>No significant weight loss yet (early lipolysis)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Noticeable Fat Loss</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>0.5-1 kg fat loss (with caloric deficit)</li>
                        <li>Improved body composition (leaner appearance)</li>
                        <li>Preferential visceral fat reduction (abdominal area)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Fat Loss</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>1-2 kg additional fat loss (total 1.5-3 kg)</li>
                        <li>Visible reduction in waist circumference</li>
                        <li>Lean muscle mass preserved or slightly increased</li>
                        <li>Improved metabolic markers (if overweight/obese)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Peak Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Total fat loss 2-4 kg (with caloric deficit and exercise)</li>
                        <li>Sustained body recomposition (lower body fat %)</li>
                        <li>Consider maintenance dose or break to prevent tolerance</li>
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
                  <CardDescription>Excellent safety profile; no GH-related side effects in clinical trials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      AOD-9604 has an <strong>excellent safety profile</strong> in clinical trials. No significant adverse events reported. Does not affect glucose, insulin, IGF-1, thyroid, or other metabolic markers. No GH-related side effects (water retention, joint pain, insulin resistance).
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications (Theoretical)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Theoretical concern (no evidence of tumor promotion, but caution advised)</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Severe eating disorders:</strong> May exacerbate unhealthy weight loss behaviors</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects (Rare)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      AOD-9604 is exceptionally well-tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (rare)</li>
                      <li><strong>Headache:</strong> Occasional, mild</li>
                      <li><strong>Nausea:</strong> Rare</li>
                      <li><strong>Fatigue:</strong> Rare (may indicate excessive caloric deficit, not peptide)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> AOD-9604 is not FDA-approved; sourced as research chemical. Require:<br/>
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
                  <CardDescription>Track body composition and metabolic markers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline body composition:</strong> DEXA scan or bioimpedance (track fat mass, lean mass, visceral fat)</li>
                      <li><strong>Baseline labs (optional):</strong> Fasting glucose, lipid panel, thyroid function (for metabolic health tracking)</li>
                      <li><strong>Medical history:</strong> Eating disorders, cancer history</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (injection site reactions, subjective effects)</p>
                      <p><strong>Week 4:</strong> Body composition reassessment (track fat loss, lean mass preservation)</p>
                      <p><strong>Week 8:</strong> Body composition reassessment; metabolic labs (optional: glucose, lipids)</p>
                      <p><strong>Week 12:</strong> Final body composition assessment; decide on continuation or maintenance dose</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Fat loss:</strong> 1-3 kg over 8-12 weeks (with caloric deficit and exercise)</li>
                      <li><strong>Visceral fat reduction:</strong> Preferential abdominal fat loss (waist circumference decrease)</li>
                      <li><strong>Lean mass preservation:</strong> No muscle loss; may see slight increase with training</li>
                      <li><strong>Body fat % reduction:</strong> 1-3% decrease over 8-12 weeks</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe fatigue:</strong> May indicate excessive caloric deficit (not peptide-related)</li>
                      <li><strong>Rapid weight loss:</strong> &gt;1 kg/week (adjust caloric intake; may lose muscle)</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, rotate sites)</li>
                      <li>Fasted state timing (critical for lipolysis)</li>
                      <li>Combine with caloric deficit and exercise for optimal results</li>
                      <li>Storage and reconstitution (bacteriostatic water, refrigeration)</li>
                      <li>Realistic expectations (1-3 kg fat loss over 8-12 weeks)</li>
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
