import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Dumbbell, Zap, Shield, Activity } from "lucide-react";
import { Link } from "wouter";

export default function PeptideMGF() {
  usePageTitle("MGF - Mechano Growth Factor", {
    description: "Clinical guide to MGF (Mechano Growth Factor) for muscle repair and hypertrophy. Mechanisms, dosing, administration, and safety for healthcare providers."
  });

  return (
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
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MGF (Mechano Growth Factor)</h1>
            <p className="text-xl text-red-50 mb-6">
              Splice variant of IGF-1 released during mechanical muscle stress. Potent muscle hypertrophy and repair peptide. Activates satellite cells for new muscle fiber growth and injury recovery.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">IGF-1 Variant</span>
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
            <TabsList className="grid w-full grid-cols-6 lg:w-auto">
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
                  <CardTitle>What is MGF (Mechano Growth Factor)?</CardTitle>
                  <CardDescription>IGF-1 splice variant for muscle hypertrophy and satellite cell activation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    MGF (Mechano Growth Factor) is a <strong>splice variant</strong> of <strong>IGF-1 (insulin-like growth factor 1)</strong> that is produced locally in muscle tissue in response to <strong>mechanical stress</strong> (e.g., resistance training, muscle damage). It plays a critical role in <strong>muscle hypertrophy</strong> (growth) and <strong>muscle repair</strong> by activating <strong>satellite cells</strong>—dormant muscle stem cells that fuse with existing muscle fibers to create new muscle tissue.
                  </p>
                  <p>
                    MGF is produced through <strong>alternative splicing</strong> of the IGF-1 gene. When muscle is damaged or stressed, the body produces MGF instead of systemic IGF-1. MGF has a unique C-terminal extension (E domain) that gives it distinct biological properties, including the ability to activate satellite cells more potently than standard IGF-1.
                  </p>
                  <p>
                    MGF is widely used by athletes and bodybuilders for <strong>muscle growth</strong>, <strong>injury recovery</strong>, <strong>strength gains</strong>, and <strong>anti-aging</strong> (preserving muscle mass). It is particularly effective when administered post-workout or locally (intramuscular injection into trained muscles).
                  </p>
                  <p>
                    <strong>Key advantage:</strong> MGF's ability to activate satellite cells makes it one of the most potent peptides for <strong>hyperplasia</strong> (creation of new muscle fibers), not just hypertrophy (enlargement of existing fibers). This may lead to permanent muscle gains.
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
                      <Dumbbell className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Satellite Cell Activation</h3>
                        <p className="text-sm text-gray-600">Activates dormant muscle stem cells; creates new muscle fibers (hyperplasia)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Muscle Hypertrophy</h3>
                        <p className="text-sm text-gray-600">Potent anabolic effects; increases muscle protein synthesis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Injury Recovery</h3>
                        <p className="text-sm text-gray-600">Accelerates muscle repair; reduces recovery time from training</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Local Action</h3>
                        <p className="text-sm text-gray-600">Short half-life; acts locally in injected muscles (site-specific growth)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>Primary uses:</strong> Muscle hypertrophy, injury recovery, strength gains, anti-aging (muscle preservation), satellite cell activation. <strong>Optimal timing:</strong> Post-workout (within 30-60 minutes) or locally into trained muscles for site-specific growth. <strong>Target population:</strong> Athletes, bodybuilders, aging adults seeking muscle preservation, individuals recovering from muscle injuries.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Satellite cell activation and muscle protein synthesis via IGF-1 pathways</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Satellite Cell Activation (Hyperplasia)</h3>
                    <p className="text-sm text-gray-700">
                      MGF's most unique property is its ability to activate <strong>satellite cells</strong>—dormant muscle stem cells located between the muscle fiber and its surrounding membrane. When activated, satellite cells proliferate (multiply) and fuse with existing muscle fibers, creating <strong>new muscle nuclei</strong> and enabling <strong>hyperplasia</strong> (formation of new muscle fibers). This leads to permanent muscle gains, as new fibers remain even after training stops.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Muscle Protein Synthesis (Hypertrophy)</h3>
                    <p className="text-sm text-gray-700">
                      MGF activates the <strong>PI3K/Akt/mTOR pathway</strong>, the primary signaling cascade for muscle protein synthesis. This increases the rate at which muscle cells build new proteins, leading to <strong>hypertrophy</strong> (enlargement of existing muscle fibers). MGF's anabolic effects are comparable to or greater than systemic IGF-1.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. Local vs. Systemic Action</h3>
                    <p className="text-sm text-gray-700">
                      MGF has a <strong>very short half-life</strong> (~5-7 minutes), meaning it acts <strong>locally</strong> in the tissue where it is produced or injected. This allows for <strong>site-specific muscle growth</strong> when injected intramuscularly into trained muscles (e.g., biceps, quads). Systemic effects are minimal, reducing the risk of side effects associated with systemic IGF-1.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Injury Repair & Recovery</h3>
                    <p className="text-sm text-gray-700">
                      MGF is released naturally during muscle damage (e.g., eccentric contractions, micro-tears from training). It accelerates <strong>muscle repair</strong> by recruiting satellite cells to damaged areas and increasing protein synthesis. Exogenous MGF administration post-workout or post-injury enhances this natural recovery process.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. PEGylated MGF (Extended Half-Life)</h3>
                    <p className="text-sm text-gray-700">
                      <strong>PEG-MGF</strong> is a modified version of MGF with polyethylene glycol (PEG) attached, extending its half-life to several hours. PEG-MGF has more <strong>systemic effects</strong> and is less site-specific than native MGF. It is often used for overall muscle growth rather than targeted hypertrophy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life (native MGF):</strong> ~5-7 minutes (very short; local action)<br/>
                      <strong>Half-life (PEG-MGF):</strong> Several hours (systemic action)<br/>
                      <strong>Optimal timing:</strong> Post-workout (within 30-60 minutes) or pre-bed for recovery<br/>
                      <strong>Frequency:</strong> 3-5x weekly (post-workout days) or daily for injury recovery
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
                  <CardDescription>Extensive preclinical research; limited human trials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Discovery & Mechanism</h3>
                    <p className="text-sm text-gray-700">
                      MGF was discovered in the 1990s as a splice variant of IGF-1 produced in response to mechanical muscle stress. Research by Goldspink and colleagues demonstrated MGF's unique ability to activate satellite cells and promote muscle hypertrophy in animal models.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Muscle Hypertrophy & Satellite Cell Activation</h3>
                    <p className="text-sm text-gray-700">
                      Animal studies show MGF increases muscle mass by 20-30% over 4-8 weeks, with satellite cell proliferation confirmed via histology. MGF's effects are more pronounced than systemic IGF-1, particularly for hyperplasia (new fiber formation).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Injury Recovery & Muscle Repair</h3>
                    <p className="text-sm text-gray-700">
                      Studies in rodent models of muscle injury (e.g., cardiotoxin-induced damage) show MGF accelerates recovery, reduces fibrosis (scar tissue), and restores muscle function faster than controls. Human anecdotal evidence supports these findings, though large-scale trials are lacking.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Anti-Aging & Muscle Preservation</h3>
                    <p className="text-sm text-gray-700">
                      MGF may combat <strong>sarcopenia</strong> (age-related muscle loss) by reactivating dormant satellite cells in aging muscle. Animal studies show MGF restores muscle mass and strength in aged rodents. Human trials are needed to confirm these effects.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">PEG-MGF vs. Native MGF</h3>
                    <p className="text-sm text-gray-700">
                      PEG-MGF (PEGylated MGF) has a longer half-life and more systemic effects than native MGF. Studies suggest PEG-MGF is effective for overall muscle growth, while native MGF is better for site-specific hypertrophy (local intramuscular injection).
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
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Satellite Cell Activation</h3>
                      <p className="text-sm text-red-800">Activates dormant muscle stem cells; enables hyperplasia (new fiber formation)</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Muscle Hypertrophy</h3>
                      <p className="text-sm text-red-800">20-30% muscle mass increase in animal models over 4-8 weeks</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Injury Recovery</h3>
                      <p className="text-sm text-red-800">Accelerates muscle repair; reduces fibrosis and restores function faster</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-900 mb-2">Anti-Aging</h3>
                      <p className="text-sm text-red-800">Restores muscle mass and strength in aged animal models (sarcopenia)</p>
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
                  <CardDescription>Based on research and community experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Protocol (Native MGF)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 200-400mcg per injection, intramuscular (into trained muscles)<br/>
                      <strong>Frequency:</strong> 3-5x weekly (post-workout days)<br/>
                      <strong>Timing:</strong> Within 30-60 minutes post-workout (optimal satellite cell activation)<br/>
                      <strong>Duration:</strong> 4-8 weeks, then 4-week break to prevent desensitization
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">PEG-MGF Protocol (Systemic Effects)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 200-400mcg per injection, subcutaneous<br/>
                      <strong>Frequency:</strong> 2-3x weekly (e.g., Monday, Wednesday, Friday)<br/>
                      <strong>Timing:</strong> Pre-bed or post-workout<br/>
                      <strong>Duration:</strong> 4-8 weeks, then 4-week break
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Muscle hypertrophy (bulking):</strong> 200-400mcg native MGF post-workout (into trained muscles), 4-5x weekly (4-8 weeks)<br/>
                      <strong>Site-specific growth:</strong> 200mcg native MGF injected bilaterally into target muscles (e.g., 100mcg per bicep) post-workout<br/>
                      <strong>Injury recovery:</strong> 200-400mcg native MGF daily (into injured muscle) for 2-4 weeks<br/>
                      <strong>Overall muscle growth:</strong> 200-400mcg PEG-MGF 2-3x weekly (subcutaneous) for 4-8 weeks
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Native MGF:</strong> Intramuscular injection into trained muscles (site-specific growth)<br/>
                      <strong>PEG-MGF:</strong> Subcutaneous injection (systemic effects)<br/>
                      <strong>Reconstitution:</strong> Bacteriostatic water (typical: 2ml water per 2mg vial = 200mcg per 0.2ml)<br/>
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
                      <h3 className="font-semibold">Week 1-2: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Enhanced recovery from training (reduced soreness)</li>
                        <li>Improved muscle pumps (increased vascularity)</li>
                        <li>Mild strength gains</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Noticeable Hypertrophy</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>1-2 lbs lean muscle gain (with training and caloric surplus)</li>
                        <li>Increased muscle fullness and density</li>
                        <li>Strength gains (5-10% improvement in lifts)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 4-8: Significant Gains</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>2-5 lbs lean muscle gain (total)</li>
                        <li>Site-specific growth (if using native MGF intramuscularly)</li>
                        <li>Improved muscle symmetry and development</li>
                        <li>Enhanced injury recovery (if applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Post-Cycle: Permanent Gains</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Satellite cell activation leads to new muscle nuclei (permanent)</li>
                        <li>Muscle gains retained better than with other peptides</li>
                        <li>Consider 4-week break before repeating cycle</li>
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
                  <CardDescription>Generally well-tolerated; limited human safety data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Active cancer:</strong> IGF-1 pathway activation may promote tumor growth (theoretical concern)</li>
                      <li><strong>Diabetic retinopathy:</strong> IGF-1 can worsen retinal complications</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Severe insulin resistance/diabetes:</strong> IGF-1 can affect glucose metabolism (monitor closely)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      MGF is generally well-tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (especially with IM injections)</li>
                      <li><strong>Hypoglycemia:</strong> Rare (IGF-1 effect; monitor blood sugar if diabetic)</li>
                      <li><strong>Joint pain:</strong> Occasional (IGF-1 effect; reduce dose if occurs)</li>
                      <li><strong>Water retention:</strong> Mild (transient)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Glucose Monitoring</h3>
                    <p className="text-sm text-yellow-800">
                      MGF activates IGF-1 pathways, which can affect glucose metabolism. Monitor fasting glucose if using long-term or if diabetic/pre-diabetic. Consider berberine or chromium to support insulin sensitivity.
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
                  <CardDescription>Track muscle growth, strength, and metabolic markers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline body composition:</strong> DEXA scan or bioimpedance (track lean mass)</li>
                      <li><strong>Baseline strength:</strong> Record 1RM or working weights for key lifts</li>
                      <li><strong>Baseline labs (optional):</strong> Fasting glucose, IGF-1 (for long-term tracking)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (injection site reactions, recovery, subjective effects)</p>
                      <p><strong>Week 4:</strong> Body composition reassessment (track lean mass gains); strength testing</p>
                      <p><strong>Week 8:</strong> Final body composition and strength assessment; glucose check (if applicable)</p>
                      <p><strong>Post-cycle (4 weeks):</strong> Assess retention of gains; decide on repeat cycle</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Lean mass gains:</strong> 2-5 lbs over 4-8 weeks (with training and caloric surplus)</li>
                      <li><strong>Strength gains:</strong> 5-10% improvement in key lifts</li>
                      <li><strong>Site-specific growth:</strong> Visible hypertrophy in injected muscles (native MGF)</li>
                      <li><strong>Recovery:</strong> Reduced soreness; faster return to training</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Severe joint pain:</strong> Persistent or worsening (reduce dose or discontinue)</li>
                      <li><strong>Hypoglycemia symptoms:</strong> Dizziness, sweating, confusion (check blood sugar)</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (IM for native MGF into trained muscles; SC for PEG-MGF)</li>
                      <li>Post-workout timing (optimal for satellite cell activation)</li>
                      <li>Combine with resistance training and caloric surplus for best results</li>
                      <li>Cycling protocol (4-8 weeks on, 4 weeks off)</li>
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
            Educational resource for healthcare providers. MGF is not FDA-approved. 
            Consult qualified healthcare providers before use.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Source peptides from{" "}
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">
              drspeptides.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
