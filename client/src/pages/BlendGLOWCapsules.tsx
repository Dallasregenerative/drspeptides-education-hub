import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, Pill, Sparkles, Droplets, Heart } from "lucide-react";
import { Link } from "wouter";

export default function BlendGLOWCapsules() {
  return (
    <>
    <Helmet>
        <title>GLOW Blend Capsules | DrsPeptides</title>
        <meta name="description" content="GLOW oral capsules for skin, hair, and anti-aging. Comprehensive guide to ingredients, bioavailability, dosing protocols, and clinical benefits for aesthetic medicine." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GLOW Blend Capsules | DrsPeptides" />
        <meta property="og:description" content="GLOW oral capsules for skin, hair, and anti-aging. Comprehensive guide to ingredients, bioavailability, dosing protocols, and clinical benefits for aesthetic medicine." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GLOW Blend Capsules | DrsPeptides" />
        <meta name="twitter:description" content="GLOW oral capsules for skin, hair, and anti-aging. Comprehensive guide to ingredients, bioavailability, dosing protocols, and clinical benefits for aesthetic medicine." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "GLOW Blend Capsules",
          "description": "GLOW oral capsules for skin, hair, and anti-aging. Comprehensive guide to ingredients, bioavailability, dosing protocols, and clinical benefits for aesthetic medicine.",
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
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GLOW Blend Capsules</h1>
            <p className="text-xl text-pink-50 mb-6">
              Convenient oral capsule formulation combining GHK-Cu (2mg), BPC-157 (500mcg), TB-500 (500mcg), and Hyaluronic Acid (100mg) for systemic beauty and regeneration support. No injections required.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Oral Formulation</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">No Injections</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Daily Convenience</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">+ Hyaluronic Acid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanism" className="gap-2">
                <Activity className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanism</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="gap-2">
                <Beaker className="h-4 w-4" />
                <span className="hidden sm:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="gap-2">
                <Pill className="h-4 w-4" />
                <span className="hidden sm:inline">Protocols</span>
              </TabsTrigger>
              <TabsTrigger value="safety" className="gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Safety</span>
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
                  <CardTitle>What are GLOW Blend Capsules?</CardTitle>
                  <CardDescription>Oral beauty and regeneration supplement - no injections needed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GLOW Blend Capsules provide a convenient oral alternative to injectable peptide protocols, combining four powerful compounds: GHK-Cu (2mg), BPC-157 (500mcg), TB-500 (500mcg), and Hyaluronic Acid (100mg). This formulation is designed for individuals who prefer oral supplementation, are needle-averse, or want to complement their injectable peptide regimens with convenient daily support.
                  </p>
                  <p>
                    While oral bioavailability of peptides is lower than injectable forms due to gastric acid and enzymatic degradation, modern enteric-coated capsules and absorption enhancers improve peptide delivery to systemic circulation. The addition of Hyaluronic Acid (HA) provides unique benefits not present in injectable GLOW formulations, including superior skin hydration and joint lubrication. HA is well-absorbed orally and has demonstrated clinical efficacy for skin moisture and wrinkle reduction.
                  </p>
                  <p>
                    GLOW Capsules are ideal for maintenance protocols, long-term daily supplementation, or as an adjunct to periodic injectable cycles. They provide whole-body regenerative support through the gut-skin axis, systemic collagen stimulation, and continuous low-dose peptide exposure that supports cellular repair and anti-aging processes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Capsule Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">Formula per Capsule</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 1</p>
                        <p className="text-2xl font-bold text-pink-600">2mg</p>
                        <p className="font-semibold">GHK-Cu</p>
                        <p className="text-xs text-gray-600 mt-1">Copper Peptide</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 2</p>
                        <p className="text-2xl font-bold text-purple-600">500mcg</p>
                        <p className="font-semibold">BPC-157</p>
                        <p className="text-xs text-gray-600 mt-1">Body Protection</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 3</p>
                        <p className="text-2xl font-bold text-rose-600">500mcg</p>
                        <p className="font-semibold">TB-500</p>
                        <p className="text-xs text-gray-600 mt-1">Thymosin Beta-4</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 4</p>
                        <p className="text-2xl font-bold text-blue-600">100mg</p>
                        <p className="font-semibold">Hyaluronic Acid</p>
                        <p className="text-xs text-gray-600 mt-1">Moisture Retention</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Pill className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Convenient Oral Delivery</h3>
                        <p className="text-sm text-gray-600">No injections, no reconstitution - simple daily capsule</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplets className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Enhanced Hydration</h3>
                        <p className="text-sm text-gray-600">100mg Hyaluronic Acid for superior skin moisture</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Systemic Beauty Support</h3>
                        <p className="text-sm text-gray-600">Collagen synthesis, skin health, anti-aging from within</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gut-Skin Axis</h3>
                        <p className="text-sm text-gray-600">BPC-157 supports gut health which reflects in skin quality</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Daily beauty maintenance, skin hydration, anti-aging support, needle-free peptide therapy. <strong>Secondary benefits:</strong> Joint health, gut support, systemic repair. <strong>Advantages:</strong> Convenient oral dosing, addition of Hyaluronic Acid, suitable for long-term daily use.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">GLOW vs KLOW Capsules</h3>
                <p className="text-sm text-amber-800">
                  <strong>GLOW Blend:</strong> GHK-Cu, BPC-157, TB-500, HA - general beauty and regeneration<br/>
                  <strong>KLOW Blend:</strong> Adds KPV (500mcg) for enhanced anti-inflammatory and skin brightening effects<br/>
                  <strong>Choose GLOW for:</strong> General maintenance, hydration focus<br/>
                  <strong>Choose KLOW for:</strong> Inflammatory skin conditions, hyperpigmentation, gut issues
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How oral peptide capsules work systemically</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Oral Peptide Absorption</h3>
                    <p className="text-sm text-gray-700">
                      Oral peptides face challenges including gastric acid degradation and enzymatic breakdown in the GI tract. However, modern enteric-coated capsules protect peptides through the stomach, releasing them in the small intestine where specialized peptide transporters (PepT1, PepT2) facilitate absorption. While bioavailability is lower than injectable forms (estimated 5-15% for small peptides), consistent daily dosing provides sustained systemic exposure. BPC-157 in particular has demonstrated oral bioactivity in numerous studies, suggesting effective GI absorption.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. GHK-Cu: Systemic Collagen Stimulation</h3>
                    <p className="text-sm text-gray-700">
                      Once absorbed, GHK-Cu circulates systemically and modulates gene expression in target tissues. Even at lower oral doses (2mg), GHK-Cu can influence collagen synthesis, antioxidant enzyme activity, and tissue remodeling pathways. The copper complex enhances absorption and provides additional benefits through copper-dependent enzyme activation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. BPC-157: Gut-Skin Axis Activation</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 exerts local effects in the GI tract, promoting gut healing and reducing intestinal inflammation. This gut health improvement directly impacts skin quality through the gut-skin axis. Systemically absorbed BPC-157 also promotes angiogenesis and tissue repair throughout the body. The oral route may provide superior gut benefits compared to injection.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. TB-500: Systemic Repair Signaling</h3>
                    <p className="text-sm text-gray-700">
                      TB-500 (Thymosin Beta-4 fragment) absorbed orally enters circulation and promotes cell migration, angiogenesis, and tissue repair. While oral bioavailability is limited, even small amounts can trigger repair signaling cascades. TB-500 also supports joint health and reduces systemic inflammation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Hyaluronic Acid: Superior Oral Bioavailability</h3>
                    <p className="text-sm text-gray-700">
                      Hyaluronic Acid (HA) has excellent oral bioavailability. Studies show that oral HA (100mg dose) increases skin moisture content, reduces wrinkle depth, and improves skin elasticity. HA is absorbed in the GI tract and distributes to skin, joints, and connective tissues. It retains up to 1,000x its weight in water, providing superior hydration benefits. The 100mg dose is clinically validated for skin and joint benefits.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Synergistic Oral Formulation</h3>
                    <p className="text-sm text-gray-700">
                      The combination provides multi-pathway support: GHK-Cu for collagen synthesis, BPC-157 for gut health and systemic repair, TB-500 for tissue regeneration, and HA for hydration. Daily oral dosing provides consistent low-level exposure that supports ongoing cellular repair and anti-aging processes without the peaks and valleys of periodic injections.
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
                  <CardDescription>Evidence supporting oral peptide and HA supplementation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Oral Hyaluronic Acid: Skin Benefits</h3>
                    <p className="text-sm text-gray-700">
                      Multiple clinical trials have demonstrated that oral HA supplementation (80-200mg daily) significantly increases skin moisture content, reduces wrinkle depth, and improves skin elasticity. A 2017 meta-analysis found that oral HA supplementation for 8-12 weeks produced measurable improvements in skin hydration and anti-aging effects. The 100mg dose in GLOW Capsules is within the clinically effective range.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">BPC-157: Oral Bioactivity</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 has been extensively studied via oral administration in animal models, demonstrating gastric protection, intestinal healing, and systemic tissue repair effects. Studies show that oral BPC-157 promotes healing of gastric ulcers, inflammatory bowel disease, and various tissue injuries. While human clinical trials are limited, preclinical evidence strongly supports oral bioactivity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">GHK-Cu: Systemic Effects</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu has been studied in various formulations including oral delivery. Research demonstrates that GHK-Cu modulates gene expression, stimulates collagen synthesis, and provides antioxidant benefits. While injectable forms have higher bioavailability, oral GHK-Cu can still exert systemic effects, particularly with consistent daily dosing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Peptide Absorption Enhancement</h3>
                    <p className="text-sm text-gray-700">
                      Modern formulation strategies including enteric coating, absorption enhancers, and targeted delivery systems have significantly improved oral peptide bioavailability. While still lower than injection, these technologies enable clinically meaningful systemic peptide exposure from oral dosing.
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
                      <h3 className="font-semibold text-blue-900 mb-2">HA Hydration</h3>
                      <p className="text-sm text-blue-800">Oral HA (100mg) demonstrated significant increases in skin moisture and wrinkle reduction in clinical trials.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">BPC-157 Gut Health</h3>
                      <p className="text-sm text-purple-800">Oral BPC-157 showed potent gastric and intestinal healing effects in multiple preclinical studies.</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">GHK-Cu Collagen</h3>
                      <p className="text-sm text-pink-800">GHK-Cu stimulates collagen synthesis and gene modulation even at lower oral doses.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Convenience Factor</h3>
                      <p className="text-sm text-rose-800">Oral formulations enable consistent daily dosing without injection barriers, improving long-term compliance.</p>
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
                  <CardDescription>Oral supplementation guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Daily Protocol (Recommended)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 1-2 capsules daily<br/>
                      <strong>Timing:</strong> With or without food (consistent timing recommended)<br/>
                      <strong>Duration:</strong> Continuous daily supplementation for best results<br/>
                      <strong>Best for:</strong> Long-term beauty maintenance, daily anti-aging support
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Intensive Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 2 capsules twice daily (morning and evening)<br/>
                      <strong>Timing:</strong> With meals for optimal absorption<br/>
                      <strong>Duration:</strong> 8-12 weeks intensive, then reduce to maintenance<br/>
                      <strong>Best for:</strong> Addressing specific skin concerns, accelerated results
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Complementary Protocol (With Injectables)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 1 capsule daily<br/>
                      <strong>Timing:</strong> On non-injection days or daily alongside injection protocols<br/>
                      <strong>Duration:</strong> Continuous to support injectable cycles<br/>
                      <strong>Best for:</strong> Enhancing injectable peptide protocols with oral support
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Consistency:</strong> Take at the same time daily for optimal results<br/>
                      <strong>Hydration:</strong> Drink adequate water to support HA hydration effects<br/>
                      <strong>Food:</strong> Can be taken with or without food; with food may enhance absorption<br/>
                      <strong>Storage:</strong> Store in cool, dry place away from direct sunlight<br/>
                      <strong>Patience:</strong> Oral formulations require 4-8 weeks for visible benefits
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
                      <h3 className="font-semibold">Week 1-2: Initial Hydration</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved skin hydration from Hyaluronic Acid</li>
                        <li>Enhanced skin plumpness and moisture</li>
                        <li>Subtle improvements in skin texture</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 3-6: Gut and Skin Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Improved gut health from BPC-157 (better digestion, reduced inflammation)</li>
                        <li>Skin quality improvements via gut-skin axis</li>
                        <li>Continued hydration and moisture retention</li>
                        <li>Beginning of collagen synthesis effects</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 6-12: Visible Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable reduction in fine lines and wrinkles</li>
                        <li>Improved skin firmness and elasticity</li>
                        <li>Enhanced overall skin quality and glow</li>
                        <li>Joint comfort improvements (from HA and TB-500)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 12+: Sustained Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Optimal anti-aging and beauty benefits</li>
                        <li>Sustained skin hydration and collagen support</li>
                        <li>Continue daily for long-term maintenance</li>
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
                  <CardDescription>Safety information for oral peptide capsules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      GLOW Capsules combine well-tolerated compounds with established safety profiles. Oral peptides have lower systemic exposure than injectables, reducing theoretical risks. Hyaluronic Acid is a naturally occurring substance with extensive safety data. The oral route avoids injection site reactions and is suitable for long-term daily use.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Theoretical concern with growth-promoting peptides (limited data)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Known allergy:</strong> To any component of the formulation</li>
                      <li><strong>Severe GI disorders:</strong> Consult healthcare provider before use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      GLOW Capsules are very well tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>GI effects:</strong> Mild nausea, bloating, or digestive changes (rare, typically resolves)</li>
                      <li><strong>Headache:</strong> Rare, mild, transient</li>
                      <li><strong>No injection site reactions:</strong> Major advantage of oral formulation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable manufacturers with quality testing. Require:<br/>
                      • &gt;98% purity for all peptide components<br/>
                      • High molecular weight HA (verified)<br/>
                      • Enteric coating for peptide protection<br/>
                      • Third-party testing and COA<br/>
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
                  <CardDescription>Tracking progress with oral supplementation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline photos:</strong> Document skin condition before starting</li>
                      <li><strong>Medical history:</strong> Screen for contraindications</li>
                      <li><strong>Skin assessment:</strong> Evaluate hydration, wrinkles, overall quality</li>
                      <li><strong>Gut health:</strong> Assess digestive symptoms (BPC-157 may improve)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 2:</strong> Assess initial hydration improvements, check for any GI effects</p>
                      <p><strong>Week 4:</strong> Evaluate skin moisture, texture changes</p>
                      <p><strong>Week 8:</strong> Document visible improvements with photos</p>
                      <p><strong>Week 12:</strong> Comprehensive assessment, determine long-term protocol</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Skin hydration:</strong> Improved moisture, plumpness</li>
                      <li><strong>Wrinkle reduction:</strong> Decreased fine lines, improved texture</li>
                      <li><strong>Skin quality:</strong> Enhanced glow, clarity, overall appearance</li>
                      <li><strong>Gut health:</strong> Improved digestion, reduced inflammation</li>
                      <li><strong>Joint comfort:</strong> Reduced stiffness, improved mobility (from HA)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe allergic reaction:</strong> Difficulty breathing, severe swelling, anaphylaxis</li>
                      <li><strong>Persistent GI symptoms:</strong> Severe nausea, vomiting, abdominal pain</li>
                      <li><strong>Unexpected symptoms:</strong> Any concerning or unusual reactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Combine with quality skincare routine for optimal results</li>
                      <li>Maintain adequate hydration (8+ glasses water daily) to support HA effects</li>
                      <li>Be patient - oral formulations take 4-8 weeks for visible benefits</li>
                      <li>Consistency is key - daily dosing provides best results</li>
                      <li>Can be combined with injectable protocols for enhanced benefits</li>
                      <li>Support with healthy diet rich in collagen-building nutrients</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. GLOW Blend Capsules are dietary supplements. 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
