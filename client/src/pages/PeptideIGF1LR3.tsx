import { Helmet } from "react-helmet-async";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ExternalLink, Dna, Activity, FlaskConical, Syringe, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptideIGF1LR3() {
  return (
    <>
    <Helmet>
        <title>IGF-1 LR3 (Long R3 IGF-I) | DrsPeptides</title>
        <meta name="description" content="Evidence-based guide to IGF-1 LR3 for muscle growth and recovery. Mechanisms, dosing protocols, safety considerations, clinical applications, and practice guidelines." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IGF-1 LR3 (Long R3 IGF-I) | DrsPeptides" />
        <meta property="og:description" content="Evidence-based guide to IGF-1 LR3 for muscle growth and recovery. Mechanisms, dosing protocols, safety considerations, clinical applications, and practice guidelines." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IGF-1 LR3 (Long R3 IGF-I) | DrsPeptides" />
        <meta name="twitter:description" content="Evidence-based guide to IGF-1 LR3 for muscle growth and recovery. Mechanisms, dosing protocols, safety considerations, clinical applications, and practice guidelines." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "IGF-1 LR3 (Long R3 IGF-I)",
          "description": "Evidence-based guide to IGF-1 LR3 for muscle growth and recovery. Mechanisms, dosing protocols, safety considerations, clinical applications, and practice guidelines.",
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
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <PrintButton title="I G F 1 L R 3 - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
            <a
              href="#" onClick={(e) => { e.preventDefault(); }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="gap-2">
                Get Medical-Grade Peptides
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Dna className="h-4 w-4" />
              Hyperplasia Mechanism - Creates New Muscle Fibers
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              IGF-1 LR3 (Long R3 IGF-I)
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Optimized insulin-like growth factor with extended half-life, reduced binding protein affinity, and unique hyperplasia mechanism that creates new muscle fibers—not just enlarges existing ones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-purple-600 mb-2">20-30 hrs</div>
                <div className="text-sm text-gray-600">Extended Half-Life</div>
                <div className="text-xs text-gray-500 mt-1">vs 10 min for regular IGF-1</div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-indigo-600 mb-2">2,373</div>
                <div className="text-sm text-gray-600">Research Citations</div>
                <div className="text-xs text-gray-500 mt-1">Stitt TN et al. 2004</div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur">
                <div className="text-3xl font-bold text-blue-600 mb-2">Hyperplasia</div>
                <div className="text-sm text-gray-600">New Fiber Creation</div>
                <div className="text-xs text-gray-500 mt-1">Permanent growth potential</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-6 h-auto">
                <TabsTrigger value="overview" className="flex flex-col gap-1 py-3">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="mechanisms" className="flex flex-col gap-1 py-3">
                  <Dna className="h-4 w-4" />
                  <span className="text-xs">Mechanisms</span>
                </TabsTrigger>
                <TabsTrigger value="research" className="flex flex-col gap-1 py-3">
                  <FlaskConical className="h-4 w-4" />
                  <span className="text-xs">Research</span>
                </TabsTrigger>
                <TabsTrigger value="protocols" className="flex flex-col gap-1 py-3">
                  <Syringe className="h-4 w-4" />
                  <span className="text-xs">Protocols</span>
                </TabsTrigger>
                <TabsTrigger value="safety" className="flex flex-col gap-1 py-3">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs">Safety</span>
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">What is IGF-1 LR3?</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      IGF-1 LR3 (Long R3 Insulin-Like Growth Factor-I) is an optimized analog of human IGF-1 featuring a <strong>13 amino acid N-terminal extension</strong> and an <strong>arginine substitution at position 3</strong>. These modifications dramatically extend its half-life from approximately 10 minutes (regular IGF-1) to <strong>20-30 hours</strong>, while significantly reducing its affinity for IGF binding proteins (IGFBPs), resulting in greater bioavailability and sustained anabolic effects.
                    </p>

                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">Unique Hyperplasia Mechanism</h3>
                      <p className="text-purple-800 mb-0">
                        Unlike most growth factors that only cause <strong>hypertrophy</strong> (enlargement of existing muscle cells), IGF-1 LR3 induces <strong>hyperplasia</strong>—the creation of entirely new muscle fibers through mitogenesis. This represents a permanent increase in muscle growth potential, as the new fibers can then be trained and enlarged through exercise.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Primary Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <Card className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50">
                        <h4 className="font-semibold text-purple-900 mb-2">Muscle Development</h4>
                        <p className="text-sm text-gray-700">Hyperplasia and hypertrophy for permanent muscle growth potential and enhanced athletic performance</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50">
                        <h4 className="font-semibold text-indigo-900 mb-2">Metabolic Optimization</h4>
                        <p className="text-sm text-gray-700">Improved insulin sensitivity, enhanced fat metabolism, increased lean body mass</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <h4 className="font-semibold text-blue-900 mb-2">Injury Recovery</h4>
                        <p className="text-sm text-gray-700">Accelerated tissue repair, enhanced wound healing, post-surgical recovery</p>
                      </Card>
                      <Card className="p-4 bg-gradient-to-br from-cyan-50 to-teal-50">
                        <h4 className="font-semibold text-cyan-900 mb-2">Age-Related Sarcopenia</h4>
                        <p className="text-sm text-gray-700">Muscle wasting prevention, strength maintenance, functional capacity preservation</p>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">LR3 Modifications Explained</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Structural Changes:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Long R3</strong> = 13 amino acid N-terminal extension</li>
                            <li><strong>Arg substitution</strong> at position 3 (instead of glutamic acid)</li>
                            <li><strong>Total length:</strong> 83 amino acids (vs 70 for regular IGF-1)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Functional Advantages:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Reduced IGFBP binding</strong> - More "free" IGF-1 available for receptor activation</li>
                            <li><strong>Extended half-life</strong> - Sustained anabolic effect over hours to days</li>
                            <li><strong>Greater bioavailability</strong> - Higher percentage reaches target tissues</li>
                            <li><strong>Systemic distribution</strong> - Prolonged action throughout the body</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-amber-900 mb-3">⚠️ Regulatory Status</h3>
                      <p className="text-amber-800 mb-3">
                        IGF-1 LR3 is <strong>NOT FDA-approved</strong> for human use and is classified as a research chemical. It is <strong>banned by WADA</strong> (World Anti-Doping Agency) for competitive athletes.
                      </p>
                      <p className="text-amber-800 mb-0">
                        Use should only occur under physician supervision as part of research protocols or off-label therapeutic applications. Quality and purity standards are critical—only pharmaceutical-grade sources should be considered.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Featured in Stacking Protocols</h3>
                  <p className="text-gray-700 mb-6">
                    IGF-1 LR3 is a key component of advanced muscle-building protocols. See the comprehensive stacking guide for detailed combination strategies:
                  </p>
                  <Link href="/stacking-guide">
                    <Button className="gap-2">
                      View Complete Stacking Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </TabsContent>

              {/* Mechanisms Tab */}
              <TabsContent value="mechanisms" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Mechanisms of Action</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Hyperplasia - New Muscle Fiber Creation</h3>
                    <div className="bg-purple-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        IGF-1 LR3's most unique mechanism is its ability to induce <strong>hyperplasia</strong>—the creation of entirely new muscle fibers through <strong>mitogenesis</strong> (development of new muscle cells from satellite cells).
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Hyperplasia Process:</h4>
                          <ol className="list-decimal list-inside text-gray-700 space-y-1">
                            <li>Activates satellite cells (muscle stem cells)</li>
                            <li>Promotes satellite cell proliferation and differentiation</li>
                            <li>Facilitates myoblast fusion to form new myotubes</li>
                            <li>Creates entirely new muscle fibers (not just enlarges existing ones)</li>
                            <li>Permanently increases muscle growth potential</li>
                          </ol>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-purple-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Clinical Significance:</strong> Hyperplasia represents a permanent increase in muscle fiber number. Once created, these new fibers can be trained and enlarged through exercise, providing lasting enhancement to muscle growth capacity—unlike hypertrophy alone, which only enlarges existing fibers.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. PI3K/Akt/mTOR Pathway Activation</h3>
                    <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        <strong>Source:</strong> Yoshida T et al. (2020) - <em>Mechanisms of IGF-1-Mediated Regulation of Skeletal Muscle</em> - <strong>704 citations</strong>
                      </p>
                      <p className="text-gray-700 mb-4">
                        IGF-1 LR3 binds to the IGF-1 receptor (IGF-1R), triggering the <strong>PI3K/Akt/mTOR signaling cascade</strong>—the master regulator of muscle protein synthesis.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-indigo-900 mb-2">Signaling Cascade:</h4>
                          <ol className="list-decimal list-inside text-gray-700 space-y-1">
                            <li><strong>IGF-1R activation</strong> → Receptor autophosphorylation</li>
                            <li><strong>IRS-1 recruitment</strong> → Insulin receptor substrate-1 binding</li>
                            <li><strong>PI3K activation</strong> → Phosphoinositide 3-kinase phosphorylates PIP2 to PIP3</li>
                            <li><strong>Akt phosphorylation</strong> → Protein kinase B activation</li>
                            <li><strong>mTOR activation</strong> → Mammalian target of rapamycin stimulates protein synthesis</li>
                            <li><strong>S6K and 4E-BP1 phosphorylation</strong> → Ribosomal protein synthesis machinery activation</li>
                          </ol>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-indigo-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Result:</strong> Dramatic increase in muscle protein synthesis, leading to rapid muscle growth and enhanced recovery from training or injury.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Anti-Atrophy Effects (FoxO Inhibition)</h3>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        <strong>Source:</strong> Stitt TN et al. (2004) - <em>The IGF-1/PI3K/Akt Pathway Prevents Expression of Muscle Atrophy Genes</em> - <strong>2,373 citations</strong>
                      </p>
                      <p className="text-gray-700 mb-4">
                        IGF-1 LR3 doesn't just build muscle—it actively <strong>prevents muscle breakdown</strong> by suppressing atrophy gene expression.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Anti-Catabolic Mechanism:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Akt phosphorylates FoxO</strong> transcription factors (FoxO1, FoxO3, FoxO4)</li>
                            <li><strong>Phosphorylated FoxO is excluded from nucleus</strong> → Cannot activate atrophy genes</li>
                            <li><strong>Suppresses MuRF1 and MAFbx/atrogin-1</strong> → Muscle-specific ubiquitin ligases (E3 ligases)</li>
                            <li><strong>Prevents ubiquitin-proteasome pathway activation</strong> → Blocks protein degradation</li>
                            <li><strong>Maintains muscle mass during stress, aging, or caloric restriction</strong></li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Dual Action:</strong> IGF-1 LR3 simultaneously promotes muscle growth (anabolic) while preventing muscle breakdown (anti-catabolic), making it exceptionally effective for both muscle building and preservation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. PI3K/Akt/GSK3β Pathway</h3>
                    <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        An alternative downstream pathway from PI3K/Akt activation that regulates glycogen synthesis and muscle metabolism.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-cyan-900 mb-2">Metabolic Effects:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Akt phosphorylates GSK3β</strong> → Inactivates glycogen synthase kinase 3-beta</li>
                            <li><strong>Glycogen synthase activation</strong> → Increased glycogen storage in muscle</li>
                            <li><strong>Enhanced glucose uptake</strong> → Improved insulin sensitivity</li>
                            <li><strong>Nutrient partitioning</strong> → More calories directed to muscle vs fat</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Reduced IGFBP Binding</h3>
                    <div className="bg-teal-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        The LR3 modifications dramatically reduce IGF-1's affinity for IGF binding proteins (IGFBPs), which normally sequester IGF-1 in the extracellular matrix and limit its bioavailability.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-teal-900 mb-2">Bioavailability Advantage:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Regular IGF-1:</strong> &gt;99% bound to IGFBPs (especially IGFBP-3)</li>
                            <li><strong>IGF-1 LR3:</strong> Significantly reduced IGFBP binding</li>
                            <li><strong>Result:</strong> More "free" IGF-1 available for receptor activation</li>
                            <li><strong>Clinical impact:</strong> Greater biological activity at lower doses</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Extended Half-Life</h3>
                    <div className="bg-purple-50 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">
                        The 13 amino acid N-terminal extension dramatically extends IGF-1 LR3's circulating half-life from approximately 10 minutes (regular IGF-1) to <strong>20-30 hours</strong>.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Pharmacokinetic Advantages:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Sustained anabolic effect</strong> over hours to days</li>
                            <li><strong>Less frequent dosing</strong> required (1-2x daily vs continuous infusion)</li>
                            <li><strong>Stable blood levels</strong> with once-daily administration</li>
                            <li><strong>Prolonged receptor activation</strong> for enhanced protein synthesis</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-600">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">Synergistic Mechanisms Summary</h3>
                      <p className="text-gray-700 mb-0">
                        IGF-1 LR3's unique combination of <strong>hyperplasia</strong> (new fiber creation), <strong>hypertrophy</strong> (fiber enlargement via mTOR), <strong>anti-atrophy effects</strong> (FoxO inhibition), <strong>metabolic optimization</strong> (GSK3β pathway), <strong>extended half-life</strong>, and <strong>reduced IGFBP binding</strong> creates an exceptionally powerful anabolic environment for muscle development that surpasses regular IGF-1 or other single-pathway growth factors.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Research Tab */}
              <TabsContent value="research" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Clinical & Preclinical Research</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-8">
                      While IGF-1 LR3 itself has limited direct human clinical trials (due to its research chemical status), extensive research on IGF-1 mechanisms, pathways, and therapeutic applications provides strong scientific foundation for understanding its effects.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Landmark Studies</h3>

                    <div className="space-y-6">
                      {/* Study 1 */}
                      <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                            1
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              Mechanisms of IGF-1-Mediated Regulation of Skeletal Muscle
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              <strong>Authors:</strong> Yoshida T, Delafontaine P<br />
                              <strong>Journal:</strong> Cells. 2020 Sep;9(9):1970<br />
                              <strong>Citations:</strong> 704
                            </p>
                            <div className="bg-white p-4 rounded-lg mb-3">
                              <h5 className="font-semibold text-gray-900 mb-2">Key Findings:</h5>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>IGF-1 increases skeletal muscle protein synthesis via <strong>PI3K/Akt/mTOR</strong> and <strong>PI3K/Akt/GSK3β</strong> pathways</li>
                                <li>PI3K/Akt can inhibit FoxOs and suppress transcription of muscle atrophy genes</li>
                                <li>mTOR is the master regulator of protein synthesis in muscle cells</li>
                                <li>Dual pathway activation provides both anabolic and anti-catabolic effects</li>
                              </ul>
                            </div>
                            <p className="text-sm text-gray-700">
                              <strong>Clinical Relevance:</strong> Establishes the molecular mechanisms by which IGF-1 (and by extension, IGF-1 LR3) drives muscle protein synthesis and prevents muscle breakdown.
                            </p>
                          </div>
                        </div>
                      </Card>

                      {/* Study 2 */}
                      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                            2
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              The IGF-1/PI3K/Akt Pathway Prevents Expression of Muscle Atrophy Genes
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              <strong>Authors:</strong> Stitt TN, Drujan D, Clarke BA, et al.<br />
                              <strong>Journal:</strong> Molecular Cell. 2004<br />
                              <strong>Citations:</strong> 2,373
                            </p>
                            <div className="bg-white p-4 rounded-lg mb-3">
                              <h5 className="font-semibold text-gray-900 mb-2">Key Findings:</h5>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>"The IGF-1/PI3K/Akt pathway, which has been shown to induce hypertrophy, <strong>prevents induction of requisite atrophy mediators</strong>"</li>
                                <li>Specifically blocks muscle-specific ubiquitin ligases (MuRF1 and MAFbx/atrogin-1)</li>
                                <li>Prevents protein degradation through ubiquitin-proteasome pathway</li>
                                <li>Provides simultaneous anabolic (growth) and anti-catabolic (anti-breakdown) effects</li>
                              </ul>
                            </div>
                            <p className="text-sm text-gray-700">
                              <strong>Clinical Relevance:</strong> Most highly cited paper on IGF-1 mechanisms. Demonstrates that IGF-1 doesn't just build muscle—it actively prevents muscle loss, making it exceptionally effective for both muscle building and preservation during aging, disease, or caloric restriction.
                            </p>
                          </div>
                        </div>
                      </Card>

                      {/* Study 3 */}
                      <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                            3
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              Regulation of Muscle Mass by Growth Hormone and IGF-I
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              <strong>Authors:</strong> Velloso CP<br />
                              <strong>Journal:</strong> British Journal of Pharmacology. 2008<br />
                              <strong>PMCID:</strong> PMC2439518<br />
                              <strong>Citations:</strong> 665
                            </p>
                            <div className="bg-white p-4 rounded-lg mb-3">
                              <h5 className="font-semibold text-gray-900 mb-2">Key Findings:</h5>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>"IGF-I clearly has anabolic activity but its mechanism of action as an <strong>endocrine, circulating hormone may be distinct from its activity as an autocrine/paracrine factor</strong>"</li>
                                <li>Circulating IGF-I (from liver) has systemic effects</li>
                                <li>Locally produced IGF-I (in muscle) has more potent local effects</li>
                                <li>Local IGF-I may be more important for muscle hypertrophy than circulating levels</li>
                              </ul>
                            </div>
                            <p className="text-sm text-gray-700">
                              <strong>Clinical Relevance:</strong> Explains why exogenous IGF-1 LR3 administration (which mimics local autocrine/paracrine signaling) may be more effective for muscle growth than simply elevating circulating IGF-1 through GH administration.
                            </p>
                          </div>
                        </div>
                      </Card>

                      {/* Study 4 */}
                      <Card className="p-6 bg-gradient-to-br from-cyan-50 to-teal-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                            4
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              Insulin-Like Growth Factor-1 (IGF-1) Inversely Regulates Atrophy-Induced Genes
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              <strong>Authors:</strong> Latres E, Amini AR, Amini AA, et al.<br />
                              <strong>Journal:</strong> Journal of Biological Chemistry. 2005<br />
                              <strong>Citations:</strong> 658
                            </p>
                            <div className="bg-white p-4 rounded-lg mb-3">
                              <h5 className="font-semibold text-gray-900 mb-2">Key Findings:</h5>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>Identified specific signaling pathway downstream of IGF-1 that mediates inverse regulation of atrophy-induced genes</li>
                                <li>IGF-1 prevents muscle wasting through specific gene expression changes</li>
                                <li>Demonstrates molecular mechanisms of IGF-1's anti-catabolic effects</li>
                              </ul>
                            </div>
                            <p className="text-sm text-gray-700">
                              <strong>Clinical Relevance:</strong> Provides molecular evidence for IGF-1's ability to prevent muscle loss during aging, disease, or metabolic stress.
                            </p>
                          </div>
                        </div>
                      </Card>

                      {/* Study 5 */}
                      <Card className="p-6 bg-gradient-to-br from-teal-50 to-green-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                            5
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              Optimizing IGF-I for Skeletal Muscle Therapeutics
                            </h4>
                            <p className="text-sm text-gray-600 mb-3">
                              <strong>Authors:</strong> Philippou A, Barton ER<br />
                              <strong>Journal:</strong> Growth Horm IGF Res. 2014 Jun 19;24(5):157–163<br />
                              <strong>PMCID:</strong> PMC4665094<br />
                              <strong>Citations:</strong> 84
                            </p>
                            <div className="bg-white p-4 rounded-lg mb-3">
                              <h5 className="font-semibold text-gray-900 mb-2">Key Findings:</h5>
                              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                                <li>"IGF-I coordinates with additional growth factors to promote <strong>myoblast proliferation, differentiation, and fiber formation</strong> during normal growth as well as during regeneration after injury"</li>
                                <li>"Skeletal muscle is both a sink and source for IGF-I"</li>
                                <li>"Enhancing either production or retention of IGF-I in this tissue could lead to increased muscle mass"</li>
                                <li>Reviews clinical trials of systemic IGF-I delivery for muscle therapeutics</li>
                                <li>Discusses strategies to optimize IGF-I bioavailability, potency, and tissue response</li>
                              </ul>
                            </div>
                            <p className="text-sm text-gray-700">
                              <strong>Clinical Relevance:</strong> Comprehensive review of IGF-I optimization strategies for muscle therapeutics. Directly relevant to understanding why IGF-1 LR3's modifications (extended half-life, reduced IGFBP binding) make it superior to regular IGF-1 for muscle applications.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900">Clinical Trials (Regular IGF-1)</h3>
                    <p className="text-gray-700 mb-6">
                      While IGF-1 LR3 lacks direct human clinical trials, extensive research on regular recombinant human IGF-1 (rhIGF-1) provides insight into IGF-1's therapeutic potential:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Indication</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Subjects</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Dosing</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Outcome</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Sarcopenia</strong></td>
                            <td className="border border-gray-300 px-4 py-2">Elderly women (N=14)</td>
                            <td className="border border-gray-300 px-4 py-2">15–60 μg/kg SQ BID × 1 month</td>
                            <td className="border border-gray-300 px-4 py-2">Increased whole body and muscle protein synthesis</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2"><strong>GH Deficiency</strong></td>
                            <td className="border border-gray-300 px-4 py-2">Young adults (N=8)</td>
                            <td className="border border-gray-300 px-4 py-2">60 μg/kg SQ BID × 8 weeks</td>
                            <td className="border border-gray-300 px-4 py-2">Increased fat-free mass and protein synthesis rates</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>AIDS Wasting</strong></td>
                            <td className="border border-gray-300 px-4 py-2">Patients (N=60)</td>
                            <td className="border border-gray-300 px-4 py-2">5 mg IGF SQ BID × 12 weeks</td>
                            <td className="border border-gray-300 px-4 py-2">Increased lean body mass; combined GH/IGF-1 most effective</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2"><strong>Type 2 Diabetes</strong></td>
                            <td className="border border-gray-300 px-4 py-2">Subjects (N=8)</td>
                            <td className="border border-gray-300 px-4 py-2">80 μg/kg SQ BID × 7 days</td>
                            <td className="border border-gray-300 px-4 py-2">Improved hepatic and muscle insulin sensitivity</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                      <h3 className="text-xl font-bold text-amber-900 mb-3">⚠️ Research Limitations</h3>
                      <ul className="list-disc list-inside text-amber-800 space-y-2">
                        <li><strong>No direct IGF-1 LR3 human clinical trials</strong> - Most data extrapolated from regular IGF-1 studies</li>
                        <li><strong>Long-term safety data lacking</strong> - Chronic use effects unknown</li>
                        <li><strong>Optimal dosing protocols not established</strong> - Current protocols based on anecdotal reports and animal studies</li>
                        <li><strong>Combination therapy research needed</strong> - Synergistic effects with other peptides or hormones not well-studied</li>
                        <li><strong>Cancer risk unclear</strong> - Theoretical concern given IGF-1's role in cell proliferation</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-600">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">Research Summary</h3>
                      <p className="text-gray-700 mb-0">
                        While direct human clinical trials of IGF-1 LR3 are lacking, the extensive research on IGF-1 mechanisms (704-2,373 citations per study) provides robust scientific foundation for understanding its effects. The modifications in IGF-1 LR3 (extended half-life, reduced IGFBP binding) theoretically enhance the well-documented anabolic, anti-catabolic, and metabolic effects of regular IGF-1, though clinical validation is needed.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Protocols Tab */}
              <TabsContent value="protocols" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Dosing Protocols & Administration</h2>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">⚠️ Critical Disclaimer</h3>
                    <p className="text-amber-800 mb-0">
                      IGF-1 LR3 is <strong>NOT FDA-approved</strong> for human use and is classified as a research chemical. The following protocols are for <strong>educational purposes only</strong> and are based on anecdotal reports, animal studies, and extrapolation from regular IGF-1 research. <strong>Use should only occur under physician supervision</strong> as part of research protocols or off-label therapeutic applications.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Standard Dosing Protocols</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
                        <h4 className="text-xl font-bold text-purple-900 mb-4">Conservative Protocol</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Dosage:</div>
                            <div className="text-lg font-bold text-purple-600">20-40 mcg per day</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Frequency:</div>
                            <div className="text-gray-900">Once daily</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Timing:</div>
                            <div className="text-gray-900">Post-workout or before bed</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Cycle:</div>
                            <div className="text-gray-900">4-6 weeks on, 4 weeks off</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Best For:</div>
                            <div className="text-gray-900">First-time users, injury recovery, general wellness</div>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50">
                        <h4 className="text-xl font-bold text-indigo-900 mb-4">Advanced Protocol</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Dosage:</div>
                            <div className="text-lg font-bold text-indigo-600">40-80 mcg per day</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Frequency:</div>
                            <div className="text-gray-900">Split into 2 doses (morning + post-workout or before bed)</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Timing:</div>
                            <div className="text-gray-900">Upon waking (fasted) + post-workout or before bed</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Cycle:</div>
                            <div className="text-gray-900">4-6 weeks on, 4-6 weeks off</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-700">Best For:</div>
                            <div className="text-gray-900">Experienced users, muscle building, athletic performance</div>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Administration Routes</h3>
                    <div className="space-y-4 mb-8">
                      <Card className="p-6 bg-blue-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                            1
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-blue-900 mb-2">Subcutaneous Injection (Preferred)</h4>
                            <p className="text-gray-700 text-sm mb-2">
                              <strong>Sites:</strong> Abdomen, thighs, upper arms (rotate injection sites)
                            </p>
                            <p className="text-gray-700 text-sm mb-2">
                              <strong>Needle:</strong> 29-31 gauge, 1/2 inch insulin syringe
                            </p>
                            <p className="text-gray-700 text-sm">
                              <strong>Advantages:</strong> Slower absorption, sustained release, less painful, easier self-administration
                            </p>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6 bg-indigo-50">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                            2
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-indigo-900 mb-2">Intramuscular Injection (Alternative)</h4>
                            <p className="text-gray-700 text-sm mb-2">
                              <strong>Sites:</strong> Deltoids, glutes, vastus lateralis (thigh)
                            </p>
                            <p className="text-gray-700 text-sm mb-2">
                              <strong>Needle:</strong> 23-25 gauge, 1-1.5 inch
                            </p>
                            <p className="text-gray-700 text-sm">
                              <strong>Advantages:</strong> Faster absorption, higher bioavailability, may be preferred for larger volumes
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Timing Strategies</h3>
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">🌅 Morning (Fasted):</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Rationale:</strong> Maximizes fat burning and nutrient partitioning</li>
                            <li><strong>Protocol:</strong> Inject upon waking, wait 30-60 minutes before eating</li>
                            <li><strong>Best for:</strong> Fat loss, body recomposition, metabolic optimization</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-900 mb-2">🏋️ Post-Workout:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Rationale:</strong> Enhances muscle protein synthesis and recovery</li>
                            <li><strong>Protocol:</strong> Inject immediately after training, consume protein/carbs 30-60 min later</li>
                            <li><strong>Best for:</strong> Muscle building, hypertrophy, athletic performance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">🌙 Before Bed:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Rationale:</strong> Supports overnight recovery and protein synthesis</li>
                            <li><strong>Protocol:</strong> Inject 30-60 minutes before sleep on empty stomach</li>
                            <li><strong>Best for:</strong> Recovery, injury healing, general wellness</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cycling Protocols</h3>
                    <div className="space-y-4 mb-8">
                      <Card className="p-6 bg-purple-50">
                        <h4 className="font-bold text-purple-900 mb-3">Short Cycle (Conservative)</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Duration:</strong> 4 weeks on, 4 weeks off</p>
                          <p><strong>Rationale:</strong> Minimizes receptor downregulation, maintains sensitivity</p>
                          <p><strong>Best for:</strong> First-time users, injury recovery, periodic performance enhancement</p>
                        </div>
                      </Card>

                      <Card className="p-6 bg-indigo-50">
                        <h4 className="font-bold text-indigo-900 mb-3">Medium Cycle (Standard)</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Duration:</strong> 6 weeks on, 4-6 weeks off</p>
                          <p><strong>Rationale:</strong> Balances efficacy with safety, allows receptor recovery</p>
                          <p><strong>Best for:</strong> Muscle building, body recomposition, athletic training cycles</p>
                        </div>
                      </Card>

                      <Card className="p-6 bg-blue-50">
                        <h4 className="font-bold text-blue-900 mb-3">Extended Cycle (Advanced)</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Duration:</strong> 8-12 weeks on, 8-12 weeks off</p>
                          <p><strong>Rationale:</strong> Maximizes anabolic effects, requires careful monitoring</p>
                          <p><strong>Best for:</strong> Experienced users, competitive athletes (off-season only), severe muscle wasting</p>
                          <p className="text-amber-700 font-semibold">⚠️ Increased risk of receptor downregulation and side effects</p>
                        </div>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Synergistic Combinations</h3>
                    <p className="text-gray-700 mb-6">
                      IGF-1 LR3 is featured in Ben Greenfield's <strong>"Lean and Mean" Stack</strong> for simultaneous muscle gain and fat loss. See the complete stacking guide for detailed combination protocols.
                    </p>

                    <div className="space-y-4 mb-8">
                      <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
                        <h4 className="font-bold text-purple-900 mb-3">IGF-1 LR3 + Growth Hormone Secretagogues</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Combination:</strong> IGF-1 LR3 (40-80 mcg/day) + Ipamorelin (200-300 mcg/day) + CJC-1295 no DAC (100-200 mcg/day)</p>
                          <p><strong>Synergy:</strong> GH secretagogues stimulate endogenous GH release, which then converts to additional IGF-1 in the liver. Combined with exogenous IGF-1 LR3, this creates a powerful multi-pathway anabolic environment.</p>
                          <p><strong>Applications:</strong> Muscle building, body recomposition, athletic performance</p>
                          <p><strong>Timing:</strong> GH secretagogues before bed, IGF-1 LR3 post-workout or morning fasted</p>
                        </div>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50">
                        <h4 className="font-bold text-indigo-900 mb-3">IGF-1 LR3 + Tissue Repair Peptides</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Combination:</strong> IGF-1 LR3 (20-40 mcg/day) + BPC-157 (250-500 mcg/day) + TB-500 (2-5 mg/week)</p>
                          <p><strong>Synergy:</strong> BPC-157 and TB-500 enhance tissue repair and angiogenesis, while IGF-1 LR3 drives muscle protein synthesis and new fiber creation. Comprehensive recovery support.</p>
                          <p><strong>Applications:</strong> Injury recovery, post-surgical healing, chronic pain management</p>
                          <p><strong>Timing:</strong> BPC-157 and TB-500 near injury site, IGF-1 LR3 systemically</p>
                        </div>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <h4 className="font-bold text-blue-900 mb-3">IGF-1 LR3 + Tesamorelin</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>Combination:</strong> IGF-1 LR3 (40-60 mcg/day) + Tesamorelin (2 mg/day)</p>
                          <p><strong>Synergy:</strong> Tesamorelin (GHRH analog) stimulates pulsatile GH release with visceral fat-specific targeting. IGF-1 LR3 provides direct anabolic effects. Powerful for body recomposition.</p>
                          <p><strong>Applications:</strong> Visceral fat reduction, muscle preservation during fat loss, metabolic optimization</p>
                          <p><strong>Timing:</strong> Tesamorelin before bed, IGF-1 LR3 morning fasted or post-workout</p>
                        </div>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Reconstitution & Storage</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Reconstitution:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Use bacteriostatic water (0.9% benzyl alcohol) for multi-dose vials</li>
                            <li>Typical concentration: 1 mg (1000 mcg) per mL</li>
                            <li>Add water slowly down the side of the vial, avoid shaking</li>
                            <li>Gently swirl until fully dissolved (clear solution)</li>
                            <li>Do not shake vigorously—peptides are fragile</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Storage:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Lyophilized (powder):</strong> Store at 2-8°C (refrigerator) or -20°C (freezer) for up to 2 years</li>
                            <li><strong>Reconstituted (liquid):</strong> Store at 2-8°C (refrigerator) for up to 30 days</li>
                            <li>Protect from light (use amber vials or wrap in foil)</li>
                            <li>Do not freeze reconstituted solution</li>
                            <li>Discard if solution becomes cloudy or contains particles</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-600">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">Protocol Summary</h3>
                      <p className="text-gray-700 mb-0">
                        IGF-1 LR3 protocols typically range from <strong>20-80 mcg per day</strong>, administered subcutaneously in 1-2 divided doses. Timing can be optimized for specific goals (morning fasted for fat loss, post-workout for muscle building, before bed for recovery). Cycling is essential to prevent receptor downregulation—standard cycles are <strong>4-6 weeks on, 4-6 weeks off</strong>. Synergistic combinations with GH secretagogues, tissue repair peptides, or GHRH analogs can enhance results but require careful monitoring.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Featured in Ben Greenfield's Stacking Protocols</h3>
                  <p className="text-gray-700 mb-6">
                    IGF-1 LR3 is a key component of the <strong>"Lean and Mean" Stack</strong> for simultaneous muscle gain and fat loss. See the comprehensive stacking guide for complete protocols, dosing strategies, and synergistic combinations:
                  </p>
                  <Link href="/stacking-guide">
                    <Button className="gap-2">
                      View Complete Stacking Guide
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </TabsContent>

              {/* Safety Tab */}
              <TabsContent value="safety" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Safety Considerations & Contraindications</h2>
                  
                  <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-3">🚨 Critical Safety Warning</h3>
                    <p className="text-red-800 mb-3">
                      IGF-1 LR3 is <strong>NOT FDA-approved</strong> for human use and is classified as a research chemical. It is <strong>banned by WADA</strong> for competitive athletes. Use carries significant risks and should <strong>only occur under physician supervision</strong>.
                    </p>
                    <p className="text-red-800 mb-0">
                      The following safety information is for educational purposes only and does not constitute medical advice. <strong>Consult a qualified healthcare provider</strong> before considering any peptide therapy.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Absolute Contraindications</h3>
                    <div className="bg-red-50 p-6 rounded-lg mb-8">
                      <p className="text-gray-700 mb-4 font-semibold">
                        IGF-1 LR3 should <strong>NEVER</strong> be used in the following circumstances:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Active cancer or cancer history</strong> - IGF-1 promotes cell proliferation and may accelerate tumor growth</li>
                        <li><strong>Pregnancy or breastfeeding</strong> - Effects on fetal development and infant safety unknown</li>
                        <li><strong>Children and adolescents</strong> - May interfere with natural growth and development</li>
                        <li><strong>Diabetic retinopathy</strong> - IGF-1 may worsen retinal neovascularization</li>
                        <li><strong>Known allergy to IGF-1 or excipients</strong> - Risk of anaphylaxis</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Relative Contraindications</h3>
                    <div className="bg-amber-50 p-6 rounded-lg mb-8">
                      <p className="text-gray-700 mb-4 font-semibold">
                        Use with <strong>extreme caution</strong> and enhanced medical monitoring:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Family history of cancer</strong> - Increased theoretical risk given IGF-1's role in cell proliferation</li>
                        <li><strong>Diabetes (Type 1 or 2)</strong> - Risk of hypoglycemia; requires careful blood glucose monitoring</li>
                        <li><strong>Cardiovascular disease</strong> - IGF-1 affects cardiac function and vascular remodeling</li>
                        <li><strong>Kidney disease</strong> - Altered IGF-1 metabolism and clearance</li>
                        <li><strong>Liver disease</strong> - Impaired IGF-1 metabolism</li>
                        <li><strong>Acromegaly or gigantism history</strong> - Excessive GH/IGF-1 exposure</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Pre-Treatment Requirements</h3>
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <p className="text-gray-700 mb-4 font-semibold">
                        Before initiating IGF-1 LR3 therapy, the following assessments are recommended:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Medical Evaluation:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Comprehensive medical history and physical examination</li>
                            <li>Review of current medications and supplements</li>
                            <li>Assessment of cardiovascular, metabolic, and endocrine health</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Laboratory Testing:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Baseline IGF-1 and IGFBP-3 levels</strong> - Establish pre-treatment reference</li>
                            <li><strong>Fasting glucose and HbA1c</strong> - Assess diabetes risk</li>
                            <li><strong>Lipid panel</strong> - Cardiovascular risk assessment</li>
                            <li><strong>Liver function tests (ALT, AST, bilirubin)</strong> - Hepatic health</li>
                            <li><strong>Kidney function (creatinine, eGFR)</strong> - Renal health</li>
                            <li><strong>Complete blood count (CBC)</strong> - General health screening</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Cancer Screening:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Age-appropriate cancer screening</strong> (colonoscopy, mammography, PSA, etc.)</li>
                            <li><strong>Tumor marker testing</strong> if cancer history or high-risk family history</li>
                            <li><strong>Dermatological examination</strong> - Skin cancer screening</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Monitoring During Treatment</h3>
                    <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                      <p className="text-gray-700 mb-4 font-semibold">
                        Regular monitoring is essential to detect adverse effects early:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-indigo-900 mb-2">Frequent Monitoring (Every 2-4 Weeks):</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Blood glucose</strong> - Fasting and post-prandial (especially first 2 weeks)</li>
                            <li><strong>Subjective effects</strong> - Hypoglycemia symptoms, joint pain, edema</li>
                            <li><strong>Injection site reactions</strong> - Redness, swelling, pain</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-900 mb-2">Periodic Monitoring (Every 3-6 Months):</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>IGF-1 and IGFBP-3 levels</strong> - Ensure not excessively elevated</li>
                            <li><strong>HbA1c</strong> - Long-term glucose control</li>
                            <li><strong>Lipid panel</strong> - Cardiovascular risk</li>
                            <li><strong>Liver and kidney function</strong> - Organ health</li>
                            <li><strong>Cancer screening</strong> - Age-appropriate and risk-based</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-indigo-900 mb-2">Clinical Assessment:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Body composition</strong> - Lean mass, fat mass, visceral fat</li>
                            <li><strong>Strength and performance</strong> - Objective measures of efficacy</li>
                            <li><strong>Joint health</strong> - Pain, swelling, range of motion</li>
                            <li><strong>Cardiovascular health</strong> - Blood pressure, heart rate, ECG if indicated</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Potential Side Effects</h3>
                    <div className="space-y-4 mb-8">
                      <Card className="p-6 bg-amber-50">
                        <h4 className="font-bold text-amber-900 mb-3">Common (&gt;10%)</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li><strong>Hypoglycemia</strong> - Low blood sugar (shakiness, sweating, confusion)</li>
                          <li><strong>Injection site reactions</strong> - Redness, swelling, pain</li>
                          <li><strong>Headache</strong> - Mild to moderate</li>
                          <li><strong>Joint pain (arthralgia)</strong> - Especially in hands and wrists</li>
                          <li><strong>Fluid retention (edema)</strong> - Swelling in extremities</li>
                        </ul>
                      </Card>

                      <Card className="p-6 bg-orange-50">
                        <h4 className="font-bold text-orange-900 mb-3">Uncommon (1-10%)</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li><strong>Carpal tunnel syndrome</strong> - Wrist pain, numbness, tingling</li>
                          <li><strong>Jaw pain</strong> - Temporomandibular joint discomfort</li>
                          <li><strong>Gynecomastia</strong> - Breast tissue development in males</li>
                          <li><strong>Acne</strong> - Increased sebum production</li>
                          <li><strong>Fatigue</strong> - Especially if hypoglycemia occurs</li>
                        </ul>
                      </Card>

                      <Card className="p-6 bg-red-50">
                        <h4 className="font-bold text-red-900 mb-3">Rare but Serious (&lt;1%)</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li><strong>Severe hypoglycemia</strong> - Loss of consciousness, seizures</li>
                          <li><strong>Tumor growth acceleration</strong> - Theoretical risk in undiagnosed cancer</li>
                          <li><strong>Diabetic retinopathy progression</strong> - Worsening of retinal disease</li>
                          <li><strong>Cardiac hypertrophy</strong> - Enlargement of heart muscle</li>
                          <li><strong>Organ enlargement</strong> - Acromegaly-like effects with chronic high-dose use</li>
                        </ul>
                      </Card>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Drug Interactions</h3>
                    <div className="bg-purple-50 p-6 rounded-lg mb-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Insulin and Oral Hypoglycemics:</h4>
                          <p className="text-gray-700">
                            IGF-1 LR3 has insulin-like effects and can cause hypoglycemia when combined with diabetes medications. <strong>Dose reduction of diabetes medications may be necessary.</strong> Close glucose monitoring is essential.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Corticosteroids:</h4>
                          <p className="text-gray-700">
                            May antagonize IGF-1 effects and reduce efficacy. Consider higher IGF-1 LR3 doses or alternative timing.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Growth Hormone:</h4>
                          <p className="text-gray-700">
                            Synergistic effects possible. Combined use may enhance anabolic effects but also increases risk of side effects (edema, joint pain, glucose intolerance). Requires careful monitoring.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-2">Anabolic Steroids:</h4>
                          <p className="text-gray-700">
                            Synergistic effects on muscle growth. Combined use common in bodybuilding but increases cardiovascular and metabolic risks. Not recommended without medical supervision.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Quality & Sourcing Standards</h3>
                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <p className="text-gray-700 mb-4 font-semibold">
                        Given IGF-1 LR3's research chemical status, quality and purity are critical safety concerns:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Required Quality Standards:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Purity ≥98%</strong> (ideally ≥99%) verified by HPLC</li>
                            <li><strong>Certificate of Analysis (COA)</strong> from independent third-party lab</li>
                            <li><strong>Endotoxin testing</strong> (LAL assay) - &lt;0.5 EU/mg</li>
                            <li><strong>Sterility testing</strong> for injectable preparations</li>
                            <li><strong>Proper storage conditions</strong> maintained throughout supply chain</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Red Flags (Avoid These Sources):</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>No COA provided or COA from manufacturer (not independent lab)</li>
                            <li>Prices significantly below market average (likely underdosed or counterfeit)</li>
                            <li>No pharmaceutical-grade certification</li>
                            <li>International sources without proper import documentation</li>
                            <li>Labeled as "for research use only" but marketed for human consumption</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">WADA Ban & Athletic Competition</h3>
                    <div className="bg-red-50 p-6 rounded-lg mb-8">
                      <p className="text-gray-700 mb-4 font-semibold">
                        IGF-1 LR3 is <strong>banned by the World Anti-Doping Agency (WADA)</strong> under Section S2 (Peptide Hormones, Growth Factors, Related Substances, and Mimetics).
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-red-900 mb-2">Competitive Athletes:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Prohibited at all times</strong> (in-competition and out-of-competition)</li>
                            <li><strong>Detection window:</strong> Unknown (limited testing methods available)</li>
                            <li><strong>Penalties:</strong> 2-4 year ban for first offense, lifetime ban for second offense</li>
                            <li><strong>Therapeutic Use Exemption (TUE):</strong> Not available for IGF-1 LR3</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-red-600">
                          <p className="text-sm text-gray-700 mb-0">
                            <strong>Important:</strong> Even if you are not a professional athlete, many amateur sports organizations and military branches also prohibit IGF-1 LR3 use. Check your organization's policies before use.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-600">
                      <h3 className="text-xl font-bold text-red-900 mb-3">Safety Summary</h3>
                      <p className="text-gray-700 mb-3">
                        IGF-1 LR3 carries significant risks including <strong>hypoglycemia, cancer growth acceleration (theoretical), organ enlargement, and cardiovascular effects</strong>. It is NOT FDA-approved and should only be used under physician supervision with comprehensive pre-treatment evaluation, regular monitoring, and pharmaceutical-grade sourcing.
                      </p>
                      <p className="text-gray-700 mb-0">
                        <strong>Absolute contraindications</strong> include active cancer, pregnancy, and diabetic retinopathy. <strong>Relative contraindications</strong> include family history of cancer, diabetes, and cardiovascular disease. <strong>WADA ban</strong> prohibits use by competitive athletes. Quality and purity standards are critical—only pharmaceutical-grade sources with independent COA should be considered.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Learn More About Peptide Safety</h3>
                  <p className="text-gray-700 mb-6">
                    For comprehensive safety standards, three-tier classification system, and compounding pharmacy quality requirements, see the dedicated safety page:
                  </p>
                  <Link href="/safety-standards">
                    <Button className="gap-2">
                      View Safety & Quality Standards
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </TabsContent>
            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Baseline labs and medical history</li>
                      <li>Relevant organ function tests</li>
                      <li>Cancer screening (age-appropriate)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 4:</strong> Tolerability assessment</p>
                      <p><strong>Month 3:</strong> Clinical response evaluation</p>
                      <p><strong>Month 6:</strong> Comprehensive safety check</p>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Severe adverse reactions</li>
                      <li>Unexpected symptoms</li>
                      <li>Pregnancy (discontinue immediately)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This educational resource is for healthcare providers and researchers. IGF-1 LR3 is NOT FDA-approved for human use.
            </p>
            <p>
              For pharmaceutical-grade peptides and medical consultation, visit{" "}
              <a
                href="#" onClick={(e) => { e.preventDefault(); }}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DrsPeptides.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
