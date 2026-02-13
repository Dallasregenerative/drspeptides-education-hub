import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Activity, Beaker, FileText, Shield, Pill, Stethoscope, Heart, Zap, Shield as ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function PeptideBPC157Capsules() {
  return (
    <>
    <Helmet>
        <title>BPC-157 Capsules | DrsPeptides</title>
        <meta name="description" content="Comprehensive guide to oral BPC-157 capsules for gut health and systemic healing. Bioavailability, dosing protocols, clinical applications, and evidence-based guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BPC-157 Capsules | DrsPeptides" />
        <meta property="og:description" content="Comprehensive guide to oral BPC-157 capsules for gut health and systemic healing. Bioavailability, dosing protocols, clinical applications, and evidence-based guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BPC-157 Capsules | DrsPeptides" />
        <meta name="twitter:description" content="Comprehensive guide to oral BPC-157 capsules for gut health and systemic healing. Bioavailability, dosing protocols, clinical applications, and evidence-based guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "BPC-157 Capsules",
          "description": "Comprehensive guide to oral BPC-157 capsules for gut health and systemic healing. Bioavailability, dosing protocols, clinical applications, and evidence-based guidelines.",
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
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Oral Formulation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BPC-157 Capsules</h1>
            <p className="text-xl text-emerald-50 mb-6">
              Oral BPC-157 formulation providing gastric-stable healing support. Convenient capsule delivery for gut health, systemic tissue repair, and anti-inflammatory benefits without injections.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Oral Delivery</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gut Healing</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Gastric Stable</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">No Injections</span>
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
                  <CardTitle>What are BPC-157 Capsules?</CardTitle>
                  <CardDescription>Oral formulation of the gastric-protective peptide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    BPC-157 Capsules provide oral delivery of Body Protection Compound-157, a synthetic pentadecapeptide derived from a protective protein found in human gastric juice. Unlike many peptides that degrade in the digestive system, BPC-157 is remarkably stable in gastric acid, making it uniquely suited for oral administration. Oral BPC-157 provides targeted gastrointestinal healing while also offering systemic tissue repair and anti-inflammatory benefits.
                  </p>
                  <p>
                    The oral route is particularly advantageous for BPC-157 because it delivers the peptide directly to the gastrointestinal tract, where it can exert powerful local healing effects on the gastric mucosa, intestinal lining, and gut barrier. This makes oral BPC-157 especially effective for conditions like gastric ulcers, inflammatory bowel disease, leaky gut syndrome, and other GI disorders. The peptide is then absorbed systemically to support healing throughout the body.
                  </p>
                  <p>
                    BPC-157 Capsules offer convenience and ease of use compared to injectable forms. They are ideal for individuals seeking gut health support, those with needle aversion, or patients requiring long-term healing protocols. Enteric-coated capsules further enhance bioavailability by protecting the peptide until it reaches optimal absorption sites in the small intestine.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gastrointestinal Healing</h3>
                        <p className="text-sm text-gray-600">Direct healing of gastric ulcers, intestinal inflammation, and mucosal damage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Gut Barrier Protection</h3>
                        <p className="text-sm text-gray-600">Restores intestinal permeability and treats leaky gut syndrome</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Systemic Tissue Repair</h3>
                        <p className="text-sm text-gray-600">Absorbed systemically for tendon, ligament, and muscle healing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Anti-Inflammatory Effects</h3>
                        <p className="text-sm text-gray-600">Reduces inflammation in gut and throughout the body</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Gastric ulcers, IBD (Crohn's, ulcerative colitis), leaky gut, GERD, IBS, NSAID-induced GI damage. <strong>Secondary benefits:</strong> Systemic tissue repair, joint health, post-surgical healing. <strong>Advantages:</strong> No injections required, direct GI delivery, excellent gastric stability.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Oral vs Injectable BPC-157</h3>
                <p className="text-sm text-amber-800">
                  <strong>Oral (Capsules):</strong> Best for GI conditions, convenient, no needles, direct gut delivery<br/>
                  <strong>Injectable:</strong> Higher systemic bioavailability, better for localized injuries (tendons, joints)<br/>
                  <strong>Choose Oral for:</strong> Gut health, ulcers, IBD, leaky gut, general maintenance<br/>
                  <strong>Choose Injectable for:</strong> Specific injury sites, maximum systemic exposure
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>How oral BPC-157 works in the body</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Gastric Stability and Absorption</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 is remarkably stable in gastric juice, resisting degradation by stomach acid and digestive enzymes. This unique property allows oral administration to be effective. The peptide is absorbed through the gastric mucosa and small intestine, providing both local GI effects and systemic distribution. Enteric-coated capsules further enhance bioavailability by protecting the peptide until it reaches the small intestine, where absorption is optimal.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Gastrointestinal Mucosal Healing</h3>
                    <p className="text-sm text-gray-700">
                      Oral BPC-157 directly contacts and heals the GI mucosa. It promotes angiogenesis (new blood vessel formation) in damaged tissue, accelerates epithelial cell migration to close ulcers and wounds, and stimulates production of growth factors (VEGF, EGF) that support tissue regeneration. This mechanism is particularly effective for gastric ulcers, where the peptide can work locally at the site of damage.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Gut Barrier Restoration</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 strengthens tight junctions between intestinal epithelial cells, reducing intestinal permeability (leaky gut). It modulates inflammatory cytokines in the gut wall, reducing chronic inflammation that damages the barrier. This restoration of gut barrier function has systemic benefits, as it reduces translocation of bacterial endotoxins and food antigens that trigger systemic inflammation and autoimmune responses.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Systemic Absorption and Tissue Repair</h3>
                    <p className="text-sm text-gray-700">
                      After absorption, BPC-157 circulates systemically and supports healing throughout the body. It promotes collagen synthesis for tendon and ligament repair, enhances angiogenesis in injured tissues, and modulates inflammatory pathways. While oral bioavailability is lower than injectable, the systemic effects are still clinically relevant, especially with consistent daily dosing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Cytoprotective Mechanisms</h3>
                    <p className="text-sm text-gray-700">
                      BPC-157 protects gastric cells from damage by NSAIDs, alcohol, and other noxious agents. It stabilizes gastric microcirculation, preventing ischemic damage. The peptide also modulates nitric oxide (NO) pathways, balancing protective and damaging NO effects in the GI tract. These cytoprotective mechanisms make oral BPC-157 valuable for preventing and treating medication-induced GI damage.
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
                  <CardDescription>Evidence supporting oral BPC-157</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Gastric Stability and Oral Efficacy</h3>
                    <p className="text-sm text-gray-700">
                      Sikiric P et al. Frontiers in Pharmacology. 2021 - BPC-157 demonstrates remarkable stability in gastric juice and maintains biological activity after oral administration. Studies show effective healing of gastric ulcers and intestinal lesions with oral dosing, confirming that the peptide survives the GI environment and exerts therapeutic effects.
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7096228/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 ml-1">
                        View study <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Inflammatory Bowel Disease Models</h3>
                    <p className="text-sm text-gray-700">
                      Multiple preclinical studies demonstrate that oral BPC-157 significantly reduces intestinal inflammation, accelerates healing of colonic lesions, and improves gut barrier function in IBD models. The peptide reduces inflammatory cytokines (TNF-α, IL-6) and promotes mucosal repair.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">NSAID-Induced GI Damage Protection</h3>
                    <p className="text-sm text-gray-700">
                      Research shows that oral BPC-157 prevents and heals NSAID-induced gastric and intestinal damage. This cytoprotective effect makes it valuable for patients requiring long-term NSAID therapy who are at risk for GI complications.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Systemic Effects After Oral Administration</h3>
                    <p className="text-sm text-gray-700">
                      Studies demonstrate that oral BPC-157 produces systemic healing effects, including tendon repair, bone healing, and wound closure, confirming that the peptide is absorbed and distributed throughout the body after oral administration.
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
                      <h3 className="font-semibold text-emerald-900 mb-2">Gastric Acid Stability</h3>
                      <p className="text-sm text-emerald-800">Unique stability in gastric juice allows effective oral delivery without degradation.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-teal-900 mb-2">Ulcer Healing</h3>
                      <p className="text-sm text-teal-800">Accelerates healing of gastric and duodenal ulcers through angiogenesis and epithelial repair.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Gut Barrier Restoration</h3>
                      <p className="text-sm text-blue-800">Strengthens tight junctions and reduces intestinal permeability (leaky gut).</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Systemic Absorption</h3>
                      <p className="text-sm text-purple-800">Absorbed systemically to support healing throughout the body after oral administration.</p>
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
                    <h3 className="font-semibold mb-2">Gastric Ulcer/GERD Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 500mcg twice daily (morning and evening)<br/>
                      <strong>Timing:</strong> Empty stomach (30 min before meals)<br/>
                      <strong>Duration:</strong> 4-8 weeks for acute ulcers, then maintenance<br/>
                      <strong>Best for:</strong> Active gastric ulcers, GERD, gastritis
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">IBD/Leaky Gut Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 500-1000mcg twice daily<br/>
                      <strong>Timing:</strong> Empty stomach or with meals<br/>
                      <strong>Duration:</strong> 8-12 weeks intensive, then reduce to maintenance<br/>
                      <strong>Best for:</strong> Crohn's disease, ulcerative colitis, leaky gut syndrome
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">General Gut Health/Maintenance Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 250-500mcg once daily<br/>
                      <strong>Timing:</strong> Morning, empty stomach<br/>
                      <strong>Duration:</strong> Continuous for long-term gut health<br/>
                      <strong>Best for:</strong> IBS, general gut health, NSAID protection
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Systemic Healing Protocol</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 500-1000mcg twice daily<br/>
                      <strong>Timing:</strong> Empty stomach for maximum absorption<br/>
                      <strong>Duration:</strong> 4-8 weeks for injury healing<br/>
                      <strong>Best for:</strong> Tendon/ligament injuries, post-surgical healing
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration Tips</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Enteric coating:</strong> Preferred for enhanced bioavailability<br/>
                      <strong>Empty stomach:</strong> Best absorption 30 min before meals<br/>
                      <strong>Consistency:</strong> Daily dosing provides best results<br/>
                      <strong>Hydration:</strong> Take with adequate water<br/>
                      <strong>Combination:</strong> Can be combined with probiotics for gut health
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
                      <h3 className="font-semibold">Week 1-2: Initial GI Improvements</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Reduced gastric discomfort and pain</li>
                        <li>Improved digestion</li>
                        <li>Decreased reflux symptoms</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Mucosal Healing</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Ulcer healing begins (confirmed by endoscopy)</li>
                        <li>Reduced intestinal inflammation</li>
                        <li>Improved bowel regularity</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Healing</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Substantial ulcer healing or complete resolution</li>
                        <li>Gut barrier restoration (reduced leaky gut)</li>
                        <li>Systemic inflammation reduction</li>
                        <li>Improved energy and overall well-being</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 8-12: Maintenance Phase</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Complete mucosal healing</li>
                        <li>Stable gut health</li>
                        <li>Transition to lower maintenance dose</li>
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
                  <CardDescription>Safety information for oral BPC-157</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      BPC-157 has demonstrated no toxicity in animal or human studies. Oral administration is particularly safe, as it provides lower systemic exposure than injectable forms while maintaining therapeutic efficacy for GI conditions. The peptide is derived from a naturally occurring gastric protein, contributing to its excellent tolerability.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> Theoretical concern with angiogenic peptides (limited data)</li>
                      <li><strong>Pregnancy/breastfeeding:</strong> Insufficient safety data, avoid use</li>
                      <li><strong>Known allergy:</strong> To BPC-157 or any capsule component</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Oral BPC-157 is extremely well tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>GI effects:</strong> Mild nausea (rare), changes in bowel movements (transient)</li>
                      <li><strong>Headache:</strong> Rare, mild, usually resolves quickly</li>
                      <li><strong>Fatigue:</strong> Rare, may occur during initial healing phase</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable manufacturers with quality testing. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Enteric coating for enhanced bioavailability<br/>
                      • Third-party testing and COA<br/>
                      • GMP manufacturing standards<br/>
                      • Proper storage (cool, dry conditions)
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
                  <CardDescription>Tracking progress with oral BPC-157</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Medical history:</strong> Document GI symptoms, previous ulcers, IBD diagnosis</li>
                      <li><strong>Baseline endoscopy:</strong> For ulcers or IBD (if clinically indicated)</li>
                      <li><strong>Symptom severity:</strong> Rate pain, reflux, bowel symptoms on 1-10 scale</li>
                      <li><strong>Medication review:</strong> Document NSAIDs, PPIs, other GI medications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Assess initial symptom response, check for side effects</p>
                      <p><strong>Week 2:</strong> Evaluate GI symptom improvement</p>
                      <p><strong>Week 4:</strong> Significant assessment - symptom reduction, functional improvement</p>
                      <p><strong>Week 8:</strong> Consider repeat endoscopy for ulcers (if applicable)</p>
                      <p><strong>Week 12:</strong> Final assessment, determine maintenance protocol</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Symptom reduction:</strong> Decreased pain, reflux, bloating, diarrhea</li>
                      <li><strong>Ulcer healing:</strong> Confirmed by endoscopy (if applicable)</li>
                      <li><strong>Bowel function:</strong> Improved regularity and consistency</li>
                      <li><strong>Systemic improvements:</strong> Better energy, reduced inflammation markers</li>
                      <li><strong>Quality of life:</strong> Improved daily function and comfort</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe abdominal pain:</strong> Especially if sudden or worsening</li>
                      <li><strong>Blood in stool or vomit:</strong> May indicate active bleeding</li>
                      <li><strong>Persistent vomiting:</strong> Unable to keep food/fluids down</li>
                      <li><strong>Worsening symptoms:</strong> Despite treatment</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Take on empty stomach for best absorption (30 min before meals)</li>
                      <li>Maintain consistent daily dosing for optimal results</li>
                      <li>Avoid NSAIDs if possible (or use with caution)</li>
                      <li>Support gut health with probiotics, anti-inflammatory diet</li>
                      <li>Stay hydrated and avoid alcohol during healing</li>
                      <li>Be patient - mucosal healing takes 4-8 weeks</li>
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
