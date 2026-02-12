import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";

export default function PeptideSS31() {
  usePageTitle("SS-31 (Elamipretide) - Mitochondrial Protector", {
    description: "Evidence-based guide to SS-31 (Elamipretide) for mitochondrial health and cardioprotection. Mechanisms, clinical trials, and therapeutic applications."
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 via-background to-pink-50 dark:from-red-950/20 dark:via-background dark:to-pink-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800">
              FDA-Approved Mitochondrial Therapy
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              SS-31 (Elamipretide)
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              FDA-approved mitochondrial-targeted tetrapeptide that binds cardiolipin, stabilizes mitochondrial membranes, reduces ROS, and reverses cardiac aging. First treatment for Barth syndrome (Forzinity™).
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">400+</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">Sept 2025</div>
                <div className="text-sm text-muted-foreground">FDA Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">8 Weeks</div>
                <div className="text-sm text-muted-foreground">Reverses Cardiac Aging</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <Alert className="mb-8 border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
            <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>FDA-Approved Drug:</strong> Elamipretide (Forzinity™) received FDA accelerated approval in September 2025 as the first treatment for Barth syndrome. This page provides healthcare provider education on this breakthrough mitochondrial therapy.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview" className="gap-2">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="mechanisms" className="gap-2">
                <FlaskConical className="h-4 w-4" />
                <span className="hidden sm:inline">Mechanisms</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="gap-2">
                <FlaskConical className="h-4 w-4" />
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
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is SS-31 (Elamipretide)?</CardTitle>
                  <CardDescription>FDA-approved mitochondrial-targeted cardiolipin-binding peptide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    SS-31 (elamipretide, trade name <strong>Forzinity™</strong>) is a <strong>synthetic tetrapeptide (D-Arg-Dmt-Lys-Phe-NH₂)</strong> that selectively targets the inner mitochondrial membrane by binding to cardiolipin. In September 2025, it became the <strong>first FDA-approved treatment for Barth syndrome</strong>, a rare mitochondrial disorder causing severe heart failure.
                  </p>
                  <p>
                    SS-31 <strong>stabilizes cardiolipin structure</strong>, preventing its oxidation and loss during stress. This preserves mitochondrial cristae architecture, optimizes electron transport chain efficiency, reduces ROS production, and enhances ATP synthesis. Landmark research demonstrates that <strong>8-week treatment reverses pre-existing cardiac aging phenotypes</strong> in old mice.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Structure:</strong> Tetrapeptide (D-Arg-Dmt-Lys-Phe-NH₂)</li>
                      <li><strong>Target:</strong> Cardiolipin on inner mitochondrial membrane</li>
                      <li><strong>FDA approval:</strong> September 2025 (Barth syndrome)</li>
                      <li><strong>Trade name:</strong> Forzinity™</li>
                      <li><strong>Mechanism:</strong> Cardiolipin stabilization, ROS reduction</li>
                      <li><strong>Cardiac aging:</strong> Reverses dysfunction in 8 weeks</li>
                      <li><strong>Clinical efficacy:</strong> 45% muscle strength, 40% heart function improvement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FDA Approval - Barth Syndrome (2025)</CardTitle>
                  <CardDescription>First treatment for rare mitochondrial disorder</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>Historic Milestone:</strong> On September 19, 2025, the FDA granted accelerated approval to Forzinity (elamipretide) as the first treatment for Barth syndrome, showcasing the FDA's commitment to bringing effective therapies to patients with rare diseases.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Barth Syndrome Overview</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Rare mitochondrial disorder:</strong> Primarily affects males</li>
                        <li><strong>Severe heart failure:</strong> Typically starts in infancy</li>
                        <li><strong>Premature death:</strong> Causes shortened lifespans</li>
                        <li><strong>Survivors:</strong> Fatigue, poor stamina, exercise intolerance</li>
                        <li><strong>Quality of life:</strong> Significantly affected throughout life</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Forzinity Mechanism & Approval</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Binding site:</strong> Inner mitochondrial membrane</li>
                        <li><strong>Effect:</strong> Improves mitochondrial structure and function</li>
                        <li><strong>Approval basis:</strong> Improved knee muscle strength (reasonably likely to predict patient benefit)</li>
                        <li><strong>Expected benefits:</strong> Ability to stand more easily, walk farther</li>
                        <li><strong>Accelerated approval:</strong> Post-approval trial required to confirm patient benefit</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Clinical Trial Results (TAZPOWER)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Muscle strength:</strong> 45% improvement</li>
                        <li><strong>Heart function:</strong> 40% improvement</li>
                        <li><strong>Administration:</strong> Once daily subcutaneous injection</li>
                        <li><strong>Side effects:</strong> Mild-to-moderate injection site reactions (most common)</li>
                        <li><strong>Long-term safety:</strong> 168-week open-label extension demonstrated sustained efficacy</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Regulatory designations:</strong> Priority review, rare pediatric disease designation, and rare pediatric disease priority review voucher granted to Stealth Biotherapeutics Inc.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of SS-31/elamipretide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">FDA-Approved (Forzinity™)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Barth syndrome (first treatment)</li>
                        <li>Mitochondrial structure/function improvement</li>
                        <li>Muscle strength enhancement</li>
                        <li>Heart function optimization</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Cardiac Aging Reversal</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Diastolic dysfunction reversal (8 weeks)</li>
                        <li>Cardiac hypertrophy regression</li>
                        <li>Myocardial performance improvement</li>
                        <li>Exercise tolerance enhancement</li>
                        <li>Late-life intervention efficacy</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Mitochondrial Protection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cardiolipin stabilization</li>
                        <li>ROS reduction (superoxide, H₂O₂)</li>
                        <li>Mitochondrial cristae preservation</li>
                        <li>ATP production enhancement</li>
                        <li>Protein oxidation prevention</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Heart Failure</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Failing human mitochondrial function improvement</li>
                        <li>Pressure overload-induced failure prevention</li>
                        <li>Cardiac hypertrophy attenuation</li>
                        <li>Left ventricular relaxation improvement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Late-Life Cardiac Aging Reversal</CardTitle>
                  <CardDescription>8-week treatment reverses pre-existing dysfunction in old mice</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/20">
                    <AlertCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <AlertDescription className="text-purple-800 dark:text-purple-200">
                      <strong>Breakthrough Discovery:</strong> SS-31 demonstrates that pre-existing cardiac aging phenotypes can be reversed by targeting mitochondrial dysfunction - not just prevented, but actually reversed in late life!
                    </AlertDescription>
                  </Alert>

                  <p className="text-sm">
                    Landmark eLife study (2020, 127 citations) showed that <strong>8-week treatment of 24-month-old mice</strong> (equivalent to ~70 human years) with SS-31 substantially reversed cardiac aging deficits.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Diastolic Function Reversal</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Ea/Aa ratio:</strong> Increased (improved diastolic function)</li>
                        <li><strong>MPI:</strong> Decreased (enhanced myocardial performance)</li>
                        <li><strong>Time course:</strong> Significant improvement at 8 weeks</li>
                        <li><strong>Both sexes:</strong> Effective in male and female mice</li>
                        <li><strong>Persistence:</strong> Benefits maintained 2 weeks after cessation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cardiac Hypertrophy Regression</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Heart weight/tibia length:</strong> Reduced in treated old mice</li>
                        <li><strong>Age-related enlargement:</strong> Reversed</li>
                        <li><strong>Structural remodeling:</strong> Regression of hypertrophy</li>
                        <li><strong>Functional correlation:</strong> Aligned with improved function</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Exercise Performance Improvement</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Treadmill running:</strong> Significantly longer in treated old mice</li>
                        <li><strong>Exercise tolerance:</strong> Restored toward young levels</li>
                        <li><strong>Functional capacity:</strong> Improved despite advanced age</li>
                        <li><strong>Clinical relevance:</strong> Diastolic dysfunction correlates with exercise intolerance</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Function Restoration</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Proton leak:</strong> Normalized to young levels</li>
                        <li><strong>ROS production:</strong> Reduced (superoxide, H₂O₂)</li>
                        <li><strong>Protein oxidation:</strong> Decreased</li>
                        <li><strong>Redox state:</strong> Shift toward more reduced thiol state</li>
                        <li><strong>Respiratory control:</strong> Partially restored</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Translational potential:</strong> Late-life interventions targeting pathological mitochondrial ROS offer better translational potential than lifelong interventions, avoiding age-dependent pleiotropy of mitochondrial ROS.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cardiolipin - The Key Target</CardTitle>
                  <CardDescription>Why SS-31's cardiolipin binding is revolutionary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Cardiolipin is a <strong>unique phospholipid found exclusively in the inner mitochondrial membrane</strong>. Its tetra-acyl structure creates the optimal environment for electron transport chain complexes and ATP synthase. SS-31's selective binding to cardiolipin is the foundation of its therapeutic effects.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cardiolipin Structure & Function</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Unique lipid:</strong> Four fatty acid chains (tetra-acyl)</li>
                        <li><strong>Location:</strong> Exclusively inner mitochondrial membrane</li>
                        <li><strong>Role:</strong> Stabilizes cristae, optimizes ETC efficiency</li>
                        <li><strong>Vulnerability:</strong> Highly susceptible to oxidation</li>
                        <li><strong>Aging/disease:</strong> Cardiolipin loss and oxidation</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">SS-31 Cardiolipin Binding</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Selective targeting:</strong> Concentrates in inner membrane</li>
                        <li><strong>Stabilization:</strong> Preserves tetra-acyl structure</li>
                        <li><strong>Oxidation prevention:</strong> Protects from ROS damage</li>
                        <li><strong>Loss prevention:</strong> Maintains cardiolipin content</li>
                        <li><strong>Cristae preservation:</strong> Maintains mitochondrial architecture</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Functional Consequences</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>ETC optimization:</strong> Enhanced electron transport efficiency</li>
                        <li><strong>ATP synthesis:</strong> Increased production</li>
                        <li><strong>ROS reduction:</strong> Less electron leak</li>
                        <li><strong>Membrane integrity:</strong> Preserved barrier function</li>
                        <li><strong>Protein function:</strong> Optimal environment for complexes</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical significance:</strong> Cardiolipin deficiency is central to Barth syndrome and accumulates in heart failure. SS-31's cardiolipin stabilization addresses the root mitochondrial dysfunction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Heart Failure - Improving Failing Human Mitochondria</CardTitle>
                  <CardDescription>JACC study demonstrates efficacy in human heart failure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Landmark JACC study (2019, 120 citations) demonstrated that <strong>elamipretide significantly improved failing human mitochondrial function</strong> in patients with heart failure.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Dysfunction in HF</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cardiolipin loss:</strong> Central to heart failure pathology</li>
                        <li><strong>Oxidative damage:</strong> Accumulated protein/lipid oxidation</li>
                        <li><strong>ATP deficiency:</strong> Impaired energy production</li>
                        <li><strong>ROS excess:</strong> Vicious cycle of damage</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Elamipretide Effects in HF</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mitochondrial function:</strong> Significant improvement</li>
                        <li><strong>ATP production:</strong> Enhanced</li>
                        <li><strong>ROS reduction:</strong> Decreased oxidative stress</li>
                        <li><strong>Cardiolipin preservation:</strong> Stabilized</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical trials:</strong> Ongoing studies investigating elamipretide in heart failure with reduced ejection fraction, demonstrating potential as novel therapeutic approach.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How SS-31 protects and restores mitochondrial function</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Cardiolipin Stabilization (Primary Mechanism)</h4>
                      <p className="text-sm text-muted-foreground">
                        SS-31 <strong>selectively binds to cardiolipin</strong> on the inner mitochondrial membrane, stabilizing its unique tetra-acyl structure and preventing oxidation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Selective targeting:</strong> Concentrates in inner mitochondrial membrane</li>
                        <li><strong>Cardiolipin binding:</strong> Stabilizes tetra-acyl structure</li>
                        <li><strong>Oxidation prevention:</strong> Protects from ROS damage</li>
                        <li><strong>Loss prevention:</strong> Maintains cardiolipin content during stress</li>
                        <li><strong>Cristae preservation:</strong> Maintains optimal mitochondrial architecture</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">ROS Reduction</h4>
                      <p className="text-sm text-muted-foreground">
                        By optimizing electron transport chain efficiency, SS-31 <strong>reduces mitochondrial ROS production</strong> at the source.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Superoxide reduction:</strong> Decreased MitoSOX signal</li>
                        <li><strong>H₂O₂ reduction:</strong> Decreased MitoPY1 signal</li>
                        <li><strong>Proton leak normalization:</strong> Reduced uncoupling</li>
                        <li><strong>Electron leak prevention:</strong> Optimized ETC efficiency</li>
                        <li><strong>Protein oxidation:</strong> Reduced damage</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">ATP Production Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        Stabilized cardiolipin and optimized cristae architecture <strong>enhance ATP synthase efficiency</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Skeletal muscle ATP:</strong> Increased production</li>
                        <li><strong>Cardiac ATP:</strong> Enhanced energy availability</li>
                        <li><strong>Respiratory control:</strong> Improved RCR</li>
                        <li><strong>Coupling efficiency:</strong> Optimized</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Mitochondrial Protein Interactions</h4>
                      <p className="text-sm text-muted-foreground">
                        PNAS study (2020, 167 citations) mapped <strong>SS-31 protein interaction landscape</strong> using chemical cross-linking/mass spectrometry.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>ATP production components:</strong> Direct interactions</li>
                        <li><strong>2-oxoglutarate metabolism:</strong> Signaling modulation</li>
                        <li><strong>ETC complexes:</strong> Functional optimization</li>
                        <li><strong>Mechanistic insight:</strong> Protein-level effects beyond cardiolipin</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Redox Signaling Normalization</h4>
                      <p className="text-sm text-muted-foreground">
                        SS-31 treatment shifts protein thiol redox state toward <strong>more reduced (healthier) state</strong> in old hearts.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Protein thiol state:</strong> Shift toward reduced</li>
                        <li><strong>Oxidative damage:</strong> Reduced protein oxidation</li>
                        <li><strong>Redox signaling:</strong> Normalized pathways</li>
                        <li><strong>Cellular health:</strong> Restored redox homeostasis</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Cardiac Contractile Protein Modulation</h4>
                      <p className="text-sm text-muted-foreground">
                        Improved diastolic function correlates with <strong>increased phosphorylation of cardiac myosin binding protein C (cMyBP-C Ser282)</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>cMyBP-C Ser282:</strong> Increased phosphorylation</li>
                        <li><strong>Diastolic function:</strong> Improved relaxation</li>
                        <li><strong>Titin-independent:</strong> Not via isoform shift</li>
                        <li><strong>Contractile optimization:</strong> Enhanced cardiac performance</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Mitochondrial-Targeted Catalase Overlap</h4>
                      <p className="text-sm text-muted-foreground">
                        SS-31 effects overlap with mitochondrial-targeted catalase (mCAT), implicating <strong>normalizing mitochondrial oxidative stress</strong> as shared mechanism.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>mCAT similarity:</strong> Similar cardiac benefits</li>
                        <li><strong>No additive effect:</strong> SS-31 doesn't improve old mCAT mice</li>
                        <li><strong>Shared pathway:</strong> Mitochondrial ROS normalization</li>
                        <li><strong>Therapeutic target:</strong> Pathological mitochondrial oxidative stress</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Pressure Overload Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        SS-31 treatment <strong>prevents pressure overload-induced cardiac hypertrophy and failure</strong> in manner highly similar to mCAT.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cardiac hypertrophy:</strong> Prevention</li>
                        <li><strong>Heart failure:</strong> Attenuation</li>
                        <li><strong>Mitochondrial damage:</strong> Reduced oxidative damage</li>
                        <li><strong>Functional preservation:</strong> Maintained cardiac performance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Molecular Targets</CardTitle>
                  <CardDescription>Specific proteins and lipids regulated by SS-31</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Primary Target</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cardiolipin:</strong> Unique phospholipid in inner mitochondrial membrane (tetra-acyl structure stabilization)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Protein Interactions (PNAS 2020)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>ATP production components:</strong> Functional interactions</li>
                        <li><strong>2-oxoglutarate metabolism:</strong> Signaling proteins</li>
                        <li><strong>ETC complexes:</strong> Optimization of function</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Contractile Proteins</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>cMyBP-C Ser282:</strong> Increased phosphorylation (diastolic function)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Landmark Research</CardTitle>
                  <CardDescription>Evidence from preclinical and clinical studies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Late-Life Restoration Reverses Cardiac Dysfunction</h4>
                        <Badge variant="outline" className="text-xs">127 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Chiao YA et al. (2020)</strong> - eLife
                      </p>
                      <p className="text-sm">
                        Landmark study demonstrating that <strong>8-week treatment of old mice (24 months) with SS-31 substantially reverses pre-existing cardiac aging phenotypes</strong>. First proof that cardiac aging can be reversed, not just prevented.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Diastolic function:</strong> Reversed to young levels (Ea/Aa increased)</li>
                        <li><strong>Myocardial performance:</strong> Enhanced (MPI decreased)</li>
                        <li><strong>Cardiac hypertrophy:</strong> Regression of age-related enlargement</li>
                        <li><strong>Exercise performance:</strong> Significantly improved treadmill running</li>
                        <li><strong>Mitochondrial ROS:</strong> Normalized proton leak, reduced superoxide/H₂O₂</li>
                        <li><strong>Protein oxidation:</strong> Reduced, shift to more reduced redox state</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Mitochondrial Protein Interaction Landscape</h4>
                        <Badge variant="outline" className="text-xs">167 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Chavez JD et al. (2020)</strong> - PNAS
                      </p>
                      <p className="text-sm">
                        Chemical cross-linking/mass spectrometry study providing <strong>direct evidence for specific SS-31 interactions with mitochondrial proteins</strong>. Identified functional components in ATP production and 2-oxoglutarate metabolism.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>ATP production:</strong> Direct protein interactions</li>
                        <li><strong>2-oxoglutarate metabolism:</strong> Signaling modulation</li>
                        <li><strong>Mechanistic insight:</strong> Protein-level effects beyond cardiolipin</li>
                        <li><strong>Clinical trials:</strong> Undergoing trials for heart failure, mitochondrial myopathy</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Elamipretide Improves Mitochondrial Function in Heart Failure</h4>
                        <Badge variant="outline" className="text-xs">120 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Chatfield KC et al. (2019)</strong> - JACC
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>elamipretide significantly improved failing human mitochondrial function</strong>. Central role of cardiolipin in heart failure noted.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Failing human mitochondrial function improvement</li>
                        <li>Cardiolipin central to heart failure pathology</li>
                        <li>Therapeutic potential in HF</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Improving Mitochondrial Function Reverses Age-Related Cardiac Dysfunction</h4>
                        <Badge variant="outline" className="text-xs">136 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Campbell MD et al. (2018)</strong> - PMC
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>SS-31 preferentially interacts with cardiolipin</strong> to stabilize its unique tetra-acyl structure during elevated oxidative stress.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cardiolipin stabilization during oxidative stress</li>
                        <li>Age-related cardiac dysfunction reversal</li>
                        <li>Tetra-acyl structure preservation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">The Mitochondria-Targeted Peptide SS-31 Binds Lipid Bilayers</h4>
                        <Badge variant="outline" className="text-xs">117 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Mitchell W et al. (2020)</strong> - J Biol Chem
                      </p>
                      <p className="text-sm">
                        Found that <strong>SS-31 binding does not destabilize lamellar bilayers</strong> even at highest concentrations, but causes saturable alterations in membrane properties.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>No bilayer destabilization</li>
                        <li>Saturable membrane alterations</li>
                        <li>Safety profile support</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">SS-31 Treatment Ameliorates Cardiac Mitochondrial Dysfunction in Barth Syndrome</h4>
                        <Badge variant="outline" className="text-xs">17 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Russo S et al. (2024)</strong> - Nature Scientific Reports
                      </p>
                      <p className="text-sm">
                        Found that <strong>in vivo treatment of Taz KD mice (Barth syndrome model) with SS-31 restored mitochondrial morphology</strong> in tafazzin-deficient hearts.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Mitochondrial morphology restoration</li>
                        <li>Tafazzin-deficient heart improvement</li>
                        <li>Barth syndrome therapeutic validation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">168-Week Open-Label Extension of TAZPOWER Trial</h4>
                        <Badge variant="outline" className="text-xs">27 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Thompson WR et al. (2024)</strong> - PubMed
                      </p>
                      <p className="text-sm">
                        Evaluated <strong>long-term efficacy and safety of elamipretide</strong> during open-label extension of TAZPOWER trial in Barth syndrome patients.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Long-term safety demonstrated</li>
                        <li>Sustained efficacy over 168 weeks</li>
                        <li>Barth syndrome patient benefit</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">FDA Grants Accelerated Approval to First Treatment for Barth Syndrome</h4>
                        <Badge variant="outline" className="text-xs">FDA Approval</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>FDA (2025)</strong> - Press Announcement
                      </p>
                      <p className="text-sm">
                        On September 19, 2025, <strong>FDA granted accelerated approval to Forzinity (elamipretide) as first treatment for Barth syndrome</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Approval basis:</strong> Improved knee muscle strength (reasonably likely to predict patient benefit)</li>
                        <li><strong>Clinical efficacy:</strong> 45% muscle strength, 40% heart function improvement</li>
                        <li><strong>Administration:</strong> Once daily subcutaneous injection</li>
                        <li><strong>Side effects:</strong> Mild-to-moderate injection site reactions (most common)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Applications Under Investigation</CardTitle>
                  <CardDescription>Therapeutic potential across multiple conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">FDA-Approved</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Barth syndrome (first treatment)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cardiac Aging & Heart Failure</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Diastolic dysfunction reversal</li>
                        <li>Heart failure with reduced ejection fraction</li>
                        <li>Pressure overload-induced failure</li>
                        <li>Cardiac hypertrophy</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Diseases</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Primary mitochondrial myopathy</li>
                        <li>Mitochondrial dysfunction disorders</li>
                        <li>Cardiolipin deficiency conditions</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">General Aging</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Age-related mitochondrial decline</li>
                        <li>Exercise performance improvement</li>
                        <li>Healthspan optimization</li>
                      </ul>
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
                  <CardDescription>Research-based and FDA-approved administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>FDA-Approved Drug:</strong> Elamipretide (Forzinity™) is FDA-approved for Barth syndrome. The following protocols include both FDA-approved dosing and research-based protocols for investigational uses.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">FDA-Approved Protocol (Forzinity™ for Barth Syndrome)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Barth Syndrome Treatment:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 40 mg daily</li>
                          <li><strong>Route:</strong> Subcutaneous injection</li>
                          <li><strong>Frequency:</strong> Once daily</li>
                          <li><strong>Patient weight:</strong> ≥30 kg</li>
                          <li><strong>Duration:</strong> Long-term/continuous</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Clinical Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Muscle strength:</strong> 45% improvement</li>
                          <li><strong>Heart function:</strong> 40% improvement</li>
                          <li><strong>Long-term safety:</strong> 168-week extension demonstrated</li>
                          <li><strong>Approval basis:</strong> Improved knee muscle strength</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Research Protocol - Cardiac Aging Reversal</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Late-Life Intervention (Investigational):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 3-5 mg/kg</li>
                          <li><strong>Route:</strong> Subcutaneous or intraperitoneal</li>
                          <li><strong>Frequency:</strong> Daily</li>
                          <li><strong>Duration:</strong> 8 weeks minimum for cardiac reversal</li>
                          <li><strong>Initiation:</strong> Effective even in late life (24-month mice ≈ 70 human years)</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence (Mouse Studies):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Diastolic function:</strong> Reversed to young levels in 8 weeks</li>
                          <li><strong>Cardiac hypertrophy:</strong> Regression of age-related enlargement</li>
                          <li><strong>Exercise performance:</strong> Significantly improved</li>
                          <li><strong>Persistence:</strong> Benefits maintained 2 weeks after cessation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Research Protocol - Heart Failure</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Heart Failure with Reduced Ejection Fraction (Investigational):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> Variable (clinical trials ongoing)</li>
                          <li><strong>Route:</strong> Intravenous or subcutaneous</li>
                          <li><strong>Duration:</strong> Under investigation</li>
                          <li><strong>Monitoring:</strong> Cardiac function, mitochondrial markers</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Improved failing human mitochondrial function</li>
                          <li>Cardiolipin stabilization</li>
                          <li>Clinical trials ongoing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Research Protocol - Mitochondrial Myopathy</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Primary Mitochondrial Myopathy (Investigational):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> Under investigation</li>
                          <li><strong>Route:</strong> Subcutaneous</li>
                          <li><strong>Clinical trials:</strong> Ongoing</li>
                          <li><strong>Target:</strong> Mitochondrial dysfunction improvement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for SS-31/elamipretide use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Injection Technique (FDA-Approved)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Subcutaneous administration</li>
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Monitor for injection site reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Timing Optimization</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Barth syndrome:</strong> Once daily (FDA-approved)</li>
                        <li><strong>Cardiac aging:</strong> Daily for 8+ weeks (research)</li>
                        <li><strong>Consistent schedule:</strong> Same time each day</li>
                        <li><strong>Long-term:</strong> Continuous for sustained benefit</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Follow manufacturer instructions</li>
                        <li>Refrigerate as directed</li>
                        <li>Protect from light</li>
                        <li>Do not freeze</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Response Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cardiac function (echocardiography)</li>
                        <li>Exercise performance</li>
                        <li>Muscle strength assessments</li>
                        <li>Regular physician follow-up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with SS-31</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">MOTS-c (Mitochondrial Synergy)</h4>
                      <p className="text-sm">
                        <strong>Complementary mitochondrial peptides.</strong> SS-31 stabilizes cardiolipin and reduces ROS while MOTS-c enhances metabolic fitness - comprehensive mitochondrial optimization.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>SS-31: Per FDA/research protocol</li>
                        <li>MOTS-c: 10-15 mg, 3x per week</li>
                        <li>Synergistic mitochondrial and metabolic benefits</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Humanin (Longevity Stack)</h4>
                      <p className="text-sm">
                        <strong>Dual mitochondrial-derived peptides.</strong> SS-31 optimizes mitochondrial function while Humanin extends lifespan and protects against neurodegeneration.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>SS-31: Per FDA/research protocol</li>
                        <li>Humanin: 1-5 mg, 2-3x per week</li>
                        <li>Comprehensive mitochondrial longevity stack</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">NAD+ Precursors (Energy Enhancement)</h4>
                      <p className="text-sm">
                        <strong>Synergistic energy production.</strong> SS-31 optimizes mitochondrial structure while NAD+ enhances sirtuins and energy metabolism.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>SS-31: Per FDA/research protocol</li>
                        <li>NAD+ precursor: 250-500 mg NMN/NR daily</li>
                        <li>Enhanced cellular energy and longevity</li>
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
                  <CardDescription>Contraindications and precautions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>FDA-Approved Safety:</strong> Elamipretide (Forzinity™) has undergone rigorous FDA review and received approval based on demonstrated safety and efficacy. 168-week open-label extension demonstrated long-term safety.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Known hypersensitivity to elamipretide or any component</li>
                        <li>Pregnancy and breastfeeding (insufficient safety data for non-approved uses)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Children &lt;30 kg (for Barth syndrome indication)</li>
                        <li>Severe liver or kidney disease (for investigational uses)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical</li>
                        <li>Baseline cardiac function assessment (echocardiography)</li>
                        <li>Muscle strength testing (if for Barth syndrome)</li>
                        <li>Pregnancy test for women of childbearing age (investigational uses)</li>
                        <li>Informed consent</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Side Effects</CardTitle>
                  <CardDescription>Reported adverse events from clinical trials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Most Common (FDA-Approved Use)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Injection site reactions:</strong> Mild-to-moderate (most common)</li>
                        <li><strong>Overall:</strong> Well-tolerated in clinical trials</li>
                        <li><strong>Long-term:</strong> 168-week extension demonstrated sustained safety</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Serious Reactions (Reported)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Serious reactions:</strong> Have been reported (per FDA label)</li>
                        <li><strong>Monitoring:</strong> Required during treatment</li>
                        <li><strong>Reporting:</strong> Adverse events should be reported to physician immediately</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Advantages of Mitochondrial Targeting</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Selective targeting:</strong> Concentrates in mitochondria</li>
                        <li><strong>No bilayer destabilization:</strong> Safe membrane interaction</li>
                        <li><strong>Physiological mechanism:</strong> Cardiolipin stabilization</li>
                        <li><strong>FDA approval:</strong> Rigorous safety review</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoring During Treatment</CardTitle>
                  <CardDescription>Recommended follow-up and assessments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cardiac Function (if for cardiac indications)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Echocardiography (baseline, 4 weeks, 8 weeks, then quarterly)</li>
                        <li>Diastolic function parameters (Ea/Aa, MPI)</li>
                        <li>Systolic function (fractional shortening)</li>
                        <li>Heart size assessment</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Muscle Strength (if for Barth syndrome)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Knee muscle strength testing</li>
                        <li>Functional assessments</li>
                        <li>Exercise tolerance</li>
                        <li>Quality of life measures</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Safety Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Injection site inspection</li>
                        <li>Adverse event tracking</li>
                        <li>Complete blood count (quarterly)</li>
                        <li>Physician follow-up (monthly initially, then quarterly)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Markers (Research)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ROS levels (if available)</li>
                        <li>ATP production</li>
                        <li>Cardiolipin content</li>
                        <li>Protein oxidation markers</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade SS-31/elamipretide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>FDA-Approved Drug:</strong> For Barth syndrome, use only FDA-approved Forzinity™ from licensed pharmacies. For investigational uses, only use elamipretide from verified compounding pharmacies with proper quality control.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                        <li><strong>Sequence verification:</strong> Mass spectrometry confirmation</li>
                        <li><strong>Certificate of Analysis (COA):</strong> Third-party tested</li>
                        <li><strong>Endotoxin testing:</strong> &lt;1 EU/mg</li>
                        <li><strong>Sterility:</strong> USP &lt;71&gt; compliant</li>
                        <li><strong>cGMP compliance:</strong> Current Good Manufacturing Practices</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Red Flags to Avoid</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>No pharmacy credentials or licensing</li>
                        <li>Labeled as "research chemicals" or "not for human use"</li>
                        <li>Suspiciously low prices</li>
                        <li>International sources without US pharmacy license</li>
                        <li>No COA or batch testing documentation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">DrsPeptides.com Quality Commitment</h4>
                    <p className="text-sm">
                      All peptides from DrsPeptides.com meet or exceed pharmaceutical standards:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>&gt;99% purity (HPLC verified)</li>
                      <li>Mass spectrometry sequence confirmation</li>
                      <li>cGMP-certified compounding facilities</li>
                      <li>Comprehensive third-party testing</li>
                      <li>Full chain-of-custody documentation</li>
                      <li>Physician oversight required for all orders</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Status</CardTitle>
                  <CardDescription>Legal and regulatory considerations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">United States</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>FDA-approved:</strong> Forzinity™ (elamipretide) for Barth syndrome (September 2025)</li>
                      <li><strong>Accelerated approval:</strong> Based on improved muscle strength</li>
                      <li><strong>Post-approval requirement:</strong> Confirmatory trial required</li>
                      <li><strong>Investigational uses:</strong> Compounding pharmacies only (physician prescription mandatory)</li>
                      <li><strong>Clinical trials:</strong> Ongoing for heart failure, mitochondrial myopathy</li>
                    </ul>
                  </div>

                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>Historic Milestone:</strong> Elamipretide (Forzinity™) is the first FDA-approved treatment for Barth syndrome, representing a major breakthrough in mitochondrial medicine.
                    </AlertDescription>
                  </Alert>
                </CardContent>
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

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade SS-31/Elamipretide?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity SS-31 from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="#" onClick={(e) => { e.preventDefault(); }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-red-600 bg-background px-8 py-3 text-sm font-medium text-red-600 shadow-sm transition-colors hover:bg-red-50 dark:hover:bg-red-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600">
                      View Mitochondrial Stack
                    </a>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
