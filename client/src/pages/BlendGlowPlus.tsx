import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Syringe, Stethoscope, Sparkles, Heart, Zap, Sun } from "lucide-react";
import { Link } from "wouter";

export default function BlendGlowPlus() {
  return (
    <>
    <Helmet>
        <title>Glow Plus | DrsPeptides</title>
        <meta name="description" content="Glow Plus advanced anti-aging blend with enhanced peptide complex. Evidence-based guide to mechanisms, clinical applications, dosing, and aesthetic medicine protocols." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glow Plus | DrsPeptides" />
        <meta property="og:description" content="Glow Plus advanced anti-aging blend with enhanced peptide complex. Evidence-based guide to mechanisms, clinical applications, dosing, and aesthetic medicine protocols." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glow Plus | DrsPeptides" />
        <meta name="twitter:description" content="Glow Plus advanced anti-aging blend with enhanced peptide complex. Evidence-based guide to mechanisms, clinical applications, dosing, and aesthetic medicine protocols." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Glow Plus",
          "description": "Glow Plus advanced anti-aging blend with enhanced peptide complex. Evidence-based guide to mechanisms, clinical applications, dosing, and aesthetic medicine protocols.",
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
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Glow Plus</h1>
            <p className="text-xl text-pink-50 mb-6">
              Enhanced Glow formula adding KPV for superior anti-inflammatory and skin brightening effects. Combines GHK-Cu (50mg), TB-500 (10mg), BPC-157 (10mg), and KPV (10mg) for comprehensive beauty and regeneration with targeted inflammation control.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Enhanced Beauty Blend</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Anti-Inflammatory</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Skin Brightening</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gut-Skin Axis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 6 Tabs */}
      <main className="flex-1 py-12">
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
              <TabsTrigger value="research" className="gap-2">
                <Beaker className="h-4 w-4" />
                <span className="hidden sm:inline">Research</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="gap-2">
                <Syringe className="h-4 w-4" />
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
                  <CardTitle>What is Glow Plus?</CardTitle>
                  <CardDescription>Enhanced beauty blend with anti-inflammatory KPV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Glow Plus builds upon the foundational Glow Core formula by adding KPV (Lys-Pro-Val), a potent anti-inflammatory tripeptide derived from α-MSH (alpha-melanocyte stimulating hormone). This enhanced blend combines GHK-Cu (50mg), TB-500 (10mg), BPC-157 (10mg), and KPV (10mg) to provide comprehensive beauty and regeneration benefits with superior inflammation control and skin brightening effects.
                  </p>
                  <p>
                    The addition of KPV specifically targets inflammatory skin conditions, hyperpigmentation, and the gut-skin axis. KPV inhibits NF-κB activation, a master regulator of inflammation, and reduces pro-inflammatory cytokines. This makes Glow Plus particularly effective for individuals with rosacea, acne, inflammatory hyperpigmentation, or gut-related skin issues. The four-peptide combination addresses skin health from multiple angles: collagen synthesis (GHK-Cu), tissue repair (TB-500, BPC-157), and inflammation control (KPV).
                  </p>
                  <p>
                    Glow Plus represents the mid-tier option in the Glow series, offering enhanced benefits over Glow Core for those with inflammatory skin concerns, while Glow Ultra provides maximum collagen stimulation with higher GHK-Cu concentration. Choose Glow Plus when inflammation, redness, or hyperpigmentation are primary concerns alongside general anti-aging goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Blend Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold mb-4">Formula per Vial</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 1</p>
                        <p className="text-2xl font-bold text-pink-600">50mg</p>
                        <p className="font-semibold">GHK-Cu</p>
                        <p className="text-xs text-gray-600 mt-1">Copper Peptide</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 2</p>
                        <p className="text-2xl font-bold text-rose-600">10mg</p>
                        <p className="font-semibold">TB-500</p>
                        <p className="text-xs text-gray-600 mt-1">Thymosin Beta-4</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 3</p>
                        <p className="text-2xl font-bold text-purple-600">10mg</p>
                        <p className="font-semibold">BPC-157</p>
                        <p className="text-xs text-gray-600 mt-1">Body Protection</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Component 4</p>
                        <p className="text-2xl font-bold text-indigo-600">10mg</p>
                        <p className="font-semibold">KPV</p>
                        <p className="text-xs text-gray-600 mt-1">Anti-Inflammatory</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">All Glow Core Benefits</h3>
                        <p className="text-sm text-gray-600">Skin rejuvenation, collagen synthesis, wound healing, anti-aging</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Enhanced Anti-Inflammatory</h3>
                        <p className="text-sm text-gray-600">KPV reduces skin inflammation, redness, and inflammatory conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Skin Brightening</h3>
                        <p className="text-sm text-gray-600">Superior melanin regulation for even tone and reduced hyperpigmentation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gut-Skin Axis Support</h3>
                        <p className="text-sm text-gray-600">KPV supports gut health which reflects in skin quality</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Inflammatory skin conditions (rosacea, acne), hyperpigmentation, skin rejuvenation, anti-aging. <strong>Secondary benefits:</strong> Gut health support, wound healing, scar reduction. <strong>Advantages:</strong> Combines collagen stimulation with targeted inflammation control for superior results in inflammatory skin conditions.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How Glow Plus works at the cellular level</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. GHK-Cu: Collagen Synthesis and Gene Regulation</h3>
                    <p className="text-sm text-gray-700">
                      GHK-Cu modulates over 30% of human genes, stimulating collagen types I, II, and III synthesis, elastin production, and glycosaminoglycan formation. It regulates metalloproteinases (MMPs) and their inhibitors (TIMPs) for optimal skin matrix turnover. The copper complex enhances antioxidant enzyme activity and reduces oxidative stress, protecting skin from environmental damage.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. TB-500: Angiogenesis and Cell Migration</h3>
                    <p className="text-sm text-gray-700">
                      TB-500 regulates actin polymerization, facilitating cell migration to injury sites. It promotes angiogenesis through VEGF upregulation, improving blood supply to healing tissues. TB-500 reduces inflammation by modulating cytokine production and inhibits fibrosis, supporting smooth tissue regeneration without excessive scarring.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. BPC-157: Growth Factor Upregulation</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 accelerates healing by upregulating VEGF, EGF, and FGF growth factors. It enhances nitric oxide production, improving blood flow to injured tissues. BPC-157 demonstrates cytoprotective effects through FAK-paxillin pathway modulation and exhibits anti-inflammatory properties by reducing pro-inflammatory cytokines.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. KPV: NF-κB Inhibition and Anti-Inflammatory Action</h3>
                    <p className="text-sm text-gray-700">
                      KPV is a tripeptide fragment of α-MSH that potently inhibits NF-κB activation, a master regulator of inflammatory responses. It reduces production of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and modulates immune cell activity. KPV is transported into cells via PepT1 transporters, allowing it to exert intracellular anti-inflammatory effects. It also regulates melanin production pathways, contributing to skin brightening and even tone.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Synergistic Four-Peptide Action</h3>
                    <p className="text-sm text-gray-700">
                      The combination creates comprehensive regenerative and anti-inflammatory effects: GHK-Cu builds structural proteins, TB-500 ensures vascularization and cell migration, BPC-157 accelerates healing through growth factors, and KPV controls inflammation that can impair healing and cause hyperpigmentation. This multi-pathway approach addresses both the building and protective aspects of skin health.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>GHK-Cu:</strong> 0.5-1 hour circulation, prolonged effects via gene modulation<br/>
                      <strong>TB-500:</strong> Hours to days tissue binding<br/>
                      <strong>BPC-157:</strong> Short half-life, prolonged tissue effects<br/>
                      <strong>KPV:</strong> Rapidly absorbed via PepT1, sustained anti-inflammatory action<br/>
                      <strong>Route:</strong> Subcutaneous injection for sustained release<br/>
                      <strong>Onset:</strong> Anti-inflammatory effects within days, peak benefits 4-8 weeks
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
                  <CardDescription>Scientific evidence supporting Glow Plus components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">KPV: Anti-Inflammatory Tripeptide</h3>
                    <p className="text-sm text-gray-700">
                      Dalmasso G et al. Gastroenterology. 2008 - KPV possesses potent anti-inflammatory properties through PepT1-mediated cellular uptake. Demonstrated efficacy in reducing inflammatory markers and protecting against colitis-associated inflammation.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/18226596/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (131+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">KPV: NF-κB Pathway Inhibition</h3>
                    <p className="text-sm text-gray-700">
                      Land SC et al. Peptides. 2012 - KPV suppresses both local and systemic immune responses by inhibiting NF-κB activation. Demonstrated reduction in inflammatory cytokines and immune-mediated tissue damage.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/22504022/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (20+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">GHK-Cu: Regenerative Actions</h3>
                    <p className="text-sm text-gray-700">
                      Pickart L, Margolina A. Int J Mol Sci. 2018 - Comprehensive review of GHK-Cu's regenerative and protective actions including collagen synthesis, gene modulation, and anti-inflammatory effects. Clinical studies demonstrated improved skin appearance and density.
                      <a href="https://pubmed.ncbi.nlm.nih.gov/29986520/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                      (186+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Combination Rationale</h3>
                    <p className="text-sm text-gray-700">
                      The addition of KPV to the Glow Core formula specifically targets inflammatory pathways that can impair healing and cause hyperpigmentation. By combining collagen-stimulating peptides (GHK-Cu) with healing peptides (TB-500, BPC-157) and anti-inflammatory action (KPV), Glow Plus provides comprehensive support for inflammatory skin conditions while maintaining all regenerative benefits.
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
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">Anti-Inflammatory Power</h3>
                      <p className="text-sm text-pink-800">KPV demonstrated potent NF-κB inhibition and reduction in pro-inflammatory cytokines, making it highly effective for inflammatory skin conditions.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Skin Brightening</h3>
                      <p className="text-sm text-purple-800">KPV's melanin regulation properties combined with GHK-Cu's skin remodeling create superior brightening and tone-evening effects.</p>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-rose-900 mb-2">Gut-Skin Connection</h3>
                      <p className="text-sm text-rose-800">KPV supports gut health through anti-inflammatory action, which reflects in improved skin quality via the gut-skin axis.</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-indigo-900 mb-2">Enhanced Healing</h3>
                      <p className="text-sm text-indigo-800">Four-peptide synergy provides superior wound healing and tissue repair compared to individual components alone.</p>
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
                  <CardDescription>Evidence-based administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Inflammatory Skin Conditions Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous (abdomen, thigh, or upper arm)<br/>
                      <strong>Frequency:</strong> Daily or 5-6 times weekly for active inflammation<br/>
                      <strong>Duration:</strong> 6-8 weeks intensive, then transition to maintenance (2-3x weekly)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Hyperpigmentation/Brightening Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous<br/>
                      <strong>Frequency:</strong> 3-4 times weekly<br/>
                      <strong>Duration:</strong> 8-12 weeks for optimal melanin regulation and tone evening
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">General Anti-Aging/Maintenance Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1.0mL per injection<br/>
                      <strong>Route:</strong> Subcutaneous<br/>
                      <strong>Frequency:</strong> 2-3 times weekly<br/>
                      <strong>Duration:</strong> 8-12 week cycles with 4-week breaks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Reconstitution:</strong> Add 2-3mL bacteriostatic water to vial. Gently swirl (do not shake).<br/>
                      <strong>Storage:</strong> Refrigerate reconstituted solution (2-8°C). Use within 30 days.<br/>
                      <strong>Timing:</strong> Can be administered any time. Evening dosing may support overnight repair.<br/>
                      <strong>Injection sites:</strong> Rotate sites to prevent irritation. Abdomen, thighs, upper arms are common.<br/>
                      <strong>Best for:</strong> Those with inflammatory skin conditions, rosacea, acne, hyperpigmentation, or gut-related skin issues.
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
                      <h3 className="font-semibold">Day 1-7: Initial Anti-Inflammatory Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Reduction in skin redness and inflammation</li>
                        <li>Improved skin hydration and glow</li>
                        <li>Decreased sensitivity and irritation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Visible Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable reduction in inflammatory lesions (acne, rosacea flares)</li>
                        <li>Improved skin texture and tone</li>
                        <li>Beginning of hyperpigmentation fading</li>
                        <li>Enhanced healing of blemishes</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Transformation</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Marked improvement in inflammatory skin conditions</li>
                        <li>Visible skin brightening and tone evening</li>
                        <li>Reduction in fine lines and wrinkles</li>
                        <li>Improved skin firmness from collagen synthesis</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Peak Results</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Maximum anti-inflammatory and brightening effects</li>
                        <li>Optimal collagen remodeling and skin quality</li>
                        <li>Sustained improvement in inflammatory conditions</li>
                        <li>Transition to maintenance protocol for long-term benefits</li>
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
                  <CardDescription>Comprehensive safety information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      Glow Plus combines four well-tolerated peptides with established safety profiles. GHK-Cu is naturally occurring, TB-500 and BPC-157 have extensive preclinical safety data, and KPV has been studied for inflammatory conditions with minimal adverse effects. The combination has been used clinically for beauty and inflammatory skin conditions with high patient satisfaction.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Growth-promoting effects may theoretically affect tumor growth (limited data, theoretical concern)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Known allergy:</strong> To any component of the blend</li>
                      <li><strong>Active severe infection:</strong> Immune modulation may affect infection response</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Glow Plus is generally very well tolerated. Most users experience no significant side effects.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Mild redness, swelling, or bruising (5-10% of users, typically resolves quickly)</li>
                      <li><strong>Skin purging:</strong> Temporary increase in cellular turnover may cause minor breakouts initially (resolves within 1-2 weeks)</li>
                      <li><strong>Mild GI effects:</strong> Rare, may occur due to KPV's gut activity (nausea, mild cramping)</li>
                      <li><strong>Flushing:</strong> Rare, mild, transient (related to increased blood flow)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable suppliers with third-party testing. Require:<br/>
                      • &gt;98% purity for all components (HPLC verified)<br/>
                      • Certificate of Analysis (COA)<br/>
                      • Endotoxin testing (&lt;1 EU/mg)<br/>
                      • GMP manufacturing standards<br/>
                      • Proper lyophilization and sterile compounding
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
                  <CardDescription>Tracking progress and safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline photos:</strong> Document skin condition, inflammation, hyperpigmentation before starting</li>
                      <li><strong>Medical history:</strong> Screen for contraindications, assess inflammatory conditions</li>
                      <li><strong>Skin assessment:</strong> Evaluate rosacea, acne severity, hyperpigmentation extent</li>
                      <li><strong>Gut health:</strong> Assess digestive symptoms if gut-skin connection suspected</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Check for injection site reactions, assess initial anti-inflammatory response</p>
                      <p><strong>Week 2-3:</strong> Evaluate reduction in inflammation, redness, and active lesions</p>
                      <p><strong>Week 4:</strong> Document progress with photos, assess brightening effects</p>
                      <p><strong>Week 8:</strong> Comprehensive assessment of skin improvements, adjust protocol if needed</p>
                      <p><strong>Week 12:</strong> Final assessment, determine maintenance protocol</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Inflammation reduction:</strong> Decreased redness, fewer inflammatory lesions</li>
                      <li><strong>Skin brightening:</strong> More even tone, reduced hyperpigmentation</li>
                      <li><strong>Texture improvement:</strong> Smoother, more refined skin</li>
                      <li><strong>Acne/rosacea control:</strong> Fewer flares, reduced severity</li>
                      <li><strong>Collagen effects:</strong> Improved firmness, reduced fine lines</li>
                      <li><strong>Overall skin quality:</strong> Enhanced glow, hydration, appearance</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe allergic reaction:</strong> Difficulty breathing, severe swelling, anaphylaxis</li>
                      <li><strong>Persistent injection site infection:</strong> Increasing redness, warmth, pus, fever</li>
                      <li><strong>Worsening inflammation:</strong> Paradoxical increase in skin inflammation or lesions</li>
                      <li><strong>Severe GI symptoms:</strong> Persistent nausea, vomiting, severe abdominal pain</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Combine with gentle, anti-inflammatory skincare routine</li>
                      <li>Use sun protection (SPF 30+) especially when treating hyperpigmentation</li>
                      <li>Avoid inflammatory triggers (harsh products, excessive sun, smoking)</li>
                      <li>Support gut health with probiotics and anti-inflammatory diet</li>
                      <li>Be patient with brightening effects - melanin regulation takes time</li>
                      <li>Maintain adequate hydration and nutrition for optimal results</li>
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
            Educational resource for healthcare providers. Glow Plus is a research peptide blend. 
            Always consult qualified healthcare professionals before use.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
