import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Heart, Activity, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function BlendBPC157TB500() {
  return (
    <>
    <Helmet>
        <title>BPC-157 & TB-500 | DrsPeptides</title>
        <meta name="description" content="Synergistic BPC-157 and TB-500 healing stack for maximum tissue repair and recovery. Clinical protocols, dosing strategies, and evidence for the most powerful regenerative peptide combination." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BPC-157 & TB-500 | DrsPeptides" />
        <meta property="og:description" content="Synergistic BPC-157 and TB-500 healing stack for maximum tissue repair and recovery. Clinical protocols, dosing strategies, and evidence for the most powerful regenerative peptide combination." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BPC-157 & TB-500 | DrsPeptides" />
        <meta name="twitter:description" content="Synergistic BPC-157 and TB-500 healing stack for maximum tissue repair and recovery. Clinical protocols, dosing strategies, and evidence for the most powerful regenerative peptide combination." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "BPC-157 & TB-500",
          "description": "Synergistic BPC-157 and TB-500 healing stack for maximum tissue repair and recovery. Clinical protocols, dosing strategies, and evidence for the most powerful regenerative peptide combination.",
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
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/30 rounded-full text-sm font-semibold">Classic Healing Stack</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Synergistic Blend</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BPC-157 & TB-500</h1>
            <p className="text-xl text-teal-50 mb-6">
              The gold standard tissue repair combination. Complementary angiogenic and cell migration pathways for accelerated healing, injury recovery, and tissue regeneration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Recovery</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tissue Repair</span>
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
                  <CardTitle>What is BPC-157 & TB-500?</CardTitle>
                  <CardDescription>The most researched and widely-used peptide combination for tissue repair</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The BPC-157 & TB-500 combination represents the <strong>gold standard</strong> in peptide-based tissue repair and recovery. This synergistic blend combines two complementary healing peptides that work through distinct but overlapping mechanisms to accelerate tissue regeneration, reduce inflammation, and promote systemic recovery.
                  </p>
                  <p>
                    <strong>BPC-157</strong> (Body Protection Compound-157) is a synthetic pentadecapeptide derived from a protective gastric protein. It promotes angiogenesis (new blood vessel formation) via VEGFR2 activation and modulates the nitric oxide (NO) system, enhancing tissue repair in tendons, ligaments, muscles, and the GI tract.
                  </p>
                  <p>
                    <strong>TB-500</strong> (Thymosin Beta-4 fragment) is a synthetic version of a naturally occurring peptide that regulates actin polymerization and cell migration. It promotes cell migration to injury sites, reduces inflammation, and supports angiogenesis through pathways distinct from BPC-157, creating powerful synergy.
                  </p>
                  <p>
                    This combination is favored by athletes, biohackers, and clinicians for <strong>injury recovery</strong> (tendon, ligament, muscle tears), <strong>post-surgical healing</strong>, <strong>chronic pain reduction</strong>, and <strong>gut health restoration</strong>. The blend is featured in Ben Greenfield's "Recover Like Wolverine" protocol.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Composition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">BPC-157</h3>
                      <p className="text-sm text-teal-800 mb-2"><strong>Mechanism:</strong> VEGFR2 activation, NO-system modulation, angiogenesis</p>
                      <p className="text-sm text-teal-800 mb-2"><strong>Research:</strong> 491+ combined citations (tendon healing 173, NO-system 155, GI protection 163)</p>
                      <p className="text-sm text-teal-800"><strong>Key Benefits:</strong> Tissue regeneration, ulcer healing, tendon/ligament repair, anti-inflammatory</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">TB-500</h3>
                      <p className="text-sm text-blue-800 mb-2"><strong>Mechanism:</strong> Actin polymerization, cell migration, angiogenesis, anti-inflammatory</p>
                      <p className="text-sm text-blue-800 mb-2"><strong>Research:</strong> PMC8228050 comprehensive review (developmental biology framework)</p>
                      <p className="text-sm text-blue-800"><strong>Key Benefits:</strong> Cell migration, flexibility, reduced inflammation, systemic tissue repair</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Why Combine BPC-157 & TB-500?</h3>
                <p className="text-sm text-blue-800">
                  <strong>Complementary mechanisms:</strong> BPC-157 focuses on angiogenesis and NO-system modulation, while TB-500 drives cell migration and actin dynamics. Together, they address multiple aspects of tissue repair simultaneously. <strong>Synergistic effects:</strong> Studies suggest combined use accelerates healing beyond either peptide alone. <strong>Broad applicability:</strong> Effective for musculoskeletal injuries, GI issues, post-surgical recovery, and chronic inflammation.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Dual-pathway approach to tissue regeneration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">BPC-157 Mechanisms</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>1. VEGFR2 Activation & Angiogenesis:</strong> BPC-157 activates vascular endothelial growth factor receptor 2 (VEGFR2), promoting new blood vessel formation (angiogenesis). Increased vascularization delivers oxygen and nutrients to injured tissues, accelerating healing.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>2. Nitric Oxide (NO) System Modulation:</strong> BPC-157 modulates the NO pathway, which regulates blood flow, inflammation, and cellular signaling. This contributes to its anti-inflammatory and cytoprotective effects.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>3. Tendon & Ligament Healing:</strong> BPC-157 promotes collagen synthesis and tendon-to-bone healing, making it highly effective for sports injuries (Achilles tendon, rotator cuff, etc.).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">TB-500 Mechanisms</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>1. Actin Regulation & Cell Migration:</strong> TB-500 binds to actin monomers, preventing polymerization and allowing cells to migrate more freely. This enables stem cells, immune cells, and fibroblasts to reach injury sites efficiently.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>2. Angiogenesis (Complementary Pathway):</strong> TB-500 promotes angiogenesis through mechanisms distinct from BPC-157, including upregulation of VEGF and other pro-angiogenic factors.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>3. Anti-Inflammatory Effects:</strong> TB-500 reduces pro-inflammatory cytokines (TNF-α, IL-6) and promotes anti-inflammatory pathways, reducing pain and swelling.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Synergistic Interaction</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 and TB-500 work synergistically by targeting different but complementary aspects of tissue repair. BPC-157's angiogenic and NO-modulating effects combine with TB-500's cell migration and anti-inflammatory actions to create a comprehensive healing environment. This dual-pathway approach is why the combination is more effective than either peptide alone.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>BPC-157:</strong> Highly stable, systemic distribution, effects last 4-6 hours per dose<br/>
                      <strong>TB-500:</strong> Half-life ~10 days (loading phase builds tissue levels), systemic effects<br/>
                      <strong>Combined:</strong> Complementary pharmacokinetics allow for flexible dosing schedules
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
                  <CardDescription>Extensive preclinical and clinical evidence for both peptides</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">BPC-157 Research</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Tendon Healing:</strong> Studies demonstrate BPC-157 accelerates Achilles tendon healing, improves biomechanical strength, and promotes tendon-to-bone integration.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/21030672/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Krivic et al. (2006) - Achilles tendon healing
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(173 citations)
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>GI Protection:</strong> BPC-157 heals gastric ulcers, protects against NSAID damage, and promotes intestinal anastomosis healing.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/8950532/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Sikiric et al. (1996) - Gastric ulcer healing
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(163 citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">TB-500 Research</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Wound Healing & Tissue Repair:</strong> TB-500 accelerates wound closure, promotes hair follicle regeneration, and enhances tissue remodeling.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/34228050/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Peng et al. (2021) - Comprehensive review of Thymosin Beta-4
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(PMC8228050)
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Cardiac Regeneration:</strong> TB-500 promotes cardiac repair after myocardial infarction, reduces scar tissue, and improves cardiac function in animal models.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Combined Use (Anecdotal & Clinical)</h3>
                    <p className="text-sm text-gray-700">
                      While no large-scale human trials have tested BPC-157 + TB-500 combination directly, extensive anecdotal evidence from athletes, clinicians, and biohackers (including Ben Greenfield's "Recover Like Wolverine" protocol) suggests synergistic benefits. Users report faster injury recovery, reduced pain, improved flexibility, and enhanced post-surgical healing compared to either peptide alone.
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
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">Tendon Healing (BPC-157)</h3>
                      <p className="text-sm text-teal-800">173 citations: Accelerates Achilles tendon repair, improves biomechanical strength</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">GI Protection (BPC-157)</h3>
                      <p className="text-sm text-teal-800">163 citations: Heals gastric ulcers, protects against NSAID damage</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Tissue Repair (TB-500)</h3>
                      <p className="text-sm text-blue-800">PMC8228050: Comprehensive developmental biology framework, wound healing, cardiac regeneration</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Cell Migration (TB-500)</h3>
                      <p className="text-sm text-blue-800">Actin regulation enables efficient stem cell and immune cell migration to injury sites</p>
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
                  <CardDescription>Based on clinical research and expert protocols (Ben Greenfield, etc.)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Combined Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>BPC-157:</strong> 250-500mcg subcutaneous injection, twice daily (morning and evening)<br/>
                      <strong>TB-500:</strong> 2-2.5mg subcutaneous injection, twice weekly (loading phase), then once weekly (maintenance)<br/>
                      <strong>Duration:</strong> 4-8 weeks for acute injuries; 8-12 weeks for chronic conditions
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Ben Greenfield "Recover Like Wolverine" Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>BPC-157:</strong> 500mcg daily (subcutaneous, near injury site or abdomen)<br/>
                      <strong>TB-500:</strong> 2mg twice weekly for 4 weeks (loading), then 2mg weekly (maintenance)<br/>
                      <strong>Additional peptides:</strong> Often combined with Ipamorelin, Tesamorelin, GHK-Cu for comprehensive recovery<br/>
                      <strong>Timing:</strong> BPC-157 morning/evening; TB-500 Monday/Thursday
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Injury-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Acute injury (tendon tear, muscle strain):</strong> High-dose BPC-157 (500mcg 2x/day) + TB-500 (2.5mg 2x/week) for 4-6 weeks<br/>
                      <strong>Chronic pain/inflammation:</strong> Moderate-dose BPC-157 (250mcg 2x/day) + TB-500 (2mg 1x/week) for 8-12 weeks<br/>
                      <strong>Post-surgical recovery:</strong> Standard protocol starting 1-2 weeks post-op (with physician approval)<br/>
                      <strong>GI issues (ulcers, IBD):</strong> BPC-157 (250-500mcg 2x/day) + TB-500 (2mg 1x/week) for 6-8 weeks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>BPC-157:</strong> Subcutaneous injection near injury site (local effect) or abdomen (systemic). Reconstitute with bacteriostatic water.<br/>
                      <strong>TB-500:</strong> Subcutaneous injection (abdomen, thigh). Systemic distribution regardless of injection site.<br/>
                      <strong>Storage:</strong> Reconstituted vials refrigerated; use within 30 days
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
                        <li>Reduced pain and inflammation (BPC-157 acts quickly)</li>
                        <li>Improved sleep quality (TB-500 anti-inflammatory effects)</li>
                        <li>Minimal side effects (well-tolerated)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Tissue Repair Acceleration</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Noticeable improvement in mobility and flexibility</li>
                        <li>Reduced swelling and bruising</li>
                        <li>Faster wound healing (if applicable)</li>
                        <li>TB-500 tissue levels build (loading phase)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Healing</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Substantial pain reduction or resolution</li>
                        <li>Improved strength and function in injured area</li>
                        <li>Return to training or activity (gradual progression)</li>
                        <li>GI symptoms improve (if treating gut issues)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Full Recovery & Maintenance</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Near-complete or complete injury resolution</li>
                        <li>Transition to maintenance dosing or discontinue</li>
                        <li>Long-term benefits: improved tissue quality, reduced re-injury risk</li>
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
                  <CardDescription>Both peptides have excellent safety profiles; well-tolerated in research and anecdotal use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Both peptides promote angiogenesis and cell proliferation; theoretical concern for tumor growth (no human data)</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Severe cardiovascular disease:</strong> TB-500 affects cardiac tissue; use caution</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Both BPC-157 and TB-500 are <strong>remarkably well-tolerated</strong>. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (rare)</li>
                      <li><strong>Headache:</strong> Occasional, mild (more common with TB-500)</li>
                      <li><strong>Fatigue:</strong> Transient, resolves within days</li>
                      <li><strong>Nausea:</strong> Rare</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">WADA Ban (Athletes)</h3>
                    <p className="text-sm text-yellow-800">
                      <strong>TB-500 is banned by WADA</strong> (World Anti-Doping Agency) for competitive athletes. BPC-157 is also prohibited. Use will result in positive drug tests and sanctions. Non-competitive athletes and general users are not affected.
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
                  <CardDescription>Track healing progress and adjust protocols as needed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline injury assessment:</strong> Pain scale (0-10), range of motion, functional limitations</li>
                      <li><strong>Imaging (if applicable):</strong> MRI, ultrasound to document injury severity</li>
                      <li><strong>Medical history:</strong> Cancer screening, cardiovascular status</li>
                      <li><strong>Baseline labs:</strong> CBC, metabolic panel (optional, for long-term use)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (injection site reactions, headache, fatigue)</p>
                      <p><strong>Week 2:</strong> Pain and inflammation assessment (expect improvement)</p>
                      <p><strong>Week 4:</strong> Functional assessment (range of motion, strength testing)</p>
                      <p><strong>Week 8:</strong> Comprehensive evaluation; consider imaging to confirm healing</p>
                      <p><strong>Monthly (long-term use):</strong> Reassess need for continued therapy, monitor for side effects</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Pain reduction:</strong> 50%+ reduction in pain scale by week 2-4</li>
                      <li><strong>Improved mobility:</strong> Increased range of motion, reduced stiffness</li>
                      <li><strong>Functional recovery:</strong> Return to activity, improved strength</li>
                      <li><strong>Imaging improvement:</strong> Reduced inflammation, tissue healing on MRI/ultrasound</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Worsening pain or swelling:</strong> Possible infection or adverse reaction</li>
                      <li><strong>Severe allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                      <li><strong>New symptoms:</strong> Unexplained fatigue, weight loss, fever (rule out underlying conditions)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, rotate sites)</li>
                      <li>Storage and reconstitution (bacteriostatic water, refrigeration)</li>
                      <li>Gradual return to activity (avoid re-injury during healing)</li>
                      <li>Realistic expectations (healing takes weeks, not days)</li>
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
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. BPC-157 and TB-500 are not FDA-approved. 
            Consult qualified healthcare providers before use.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Source peptides by clicking "Source Medical Grade Peptides Now" above
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
