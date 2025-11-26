import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PeptideSelank() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">DrsPeptides</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-violet-50 via-background to-purple-50 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-violet-200 dark:border-violet-800">
              Cognitive Enhancement & Anxiolytic
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Selank
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heptapeptide anxiolytic approved in Russia for generalized anxiety disorder (GAD) treatment. Reduces anxiety without sedation or cognitive impairment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">27</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">GAD</div>
                <div className="text-sm text-muted-foreground">Approved Indication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">No</div>
                <div className="text-sm text-muted-foreground">Sedation Effects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl">
          <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              <strong>Investigational Peptide:</strong> Selank is approved in Russia for GAD treatment but is not FDA-approved in the United States. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
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
                  <CardTitle>What is Selank?</CardTitle>
                  <CardDescription>Heptapeptide anxiolytic with neuroprotective properties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Selank is a synthetic heptapeptide (7 amino acids) developed in Russia and approved for the treatment of <strong>generalized anxiety disorder (GAD)</strong>. It is a peptide analogue of tuftsin, an immunomodulatory peptide naturally occurring in the body.
                  </p>
                  <p>
                    Unlike traditional anxiolytics such as benzodiazepines, Selank produces anxiolytic effects <strong>without causing sedation, cognitive impairment, or dependence</strong>. This unique profile makes it an attractive option for anxiety management while maintaining mental clarity and function.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Peptide structure:</strong> Heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro)</li>
                      <li><strong>Regulatory status:</strong> Approved in Russia for GAD treatment</li>
                      <li><strong>Administration:</strong> Primarily intranasal (bypasses blood-brain barrier)</li>
                      <li><strong>Half-life:</strong> Short (~minutes), requiring multiple daily doses</li>
                      <li><strong>Primary effects:</strong> Anxiolytic, neuroprotective, cognitive enhancement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of Selank</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Anxiety Management</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Generalized anxiety disorder (GAD)</li>
                        <li>Social anxiety</li>
                        <li>Performance anxiety</li>
                        <li>Stress-related anxiety</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Cognitive Enhancement</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Memory consolidation</li>
                        <li>Attention and focus</li>
                        <li>Mental clarity</li>
                        <li>Learning enhancement</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Neuroprotection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Protection against oxidative stress</li>
                        <li>BDNF regulation</li>
                        <li>Ethanol-induced memory impairment protection</li>
                        <li>Cognitive decline prevention</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Mood Regulation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Emotional stability</li>
                        <li>Stress resilience</li>
                        <li>Mood enhancement</li>
                        <li>Emotional well-being</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selank vs Traditional Anxiolytics</CardTitle>
                  <CardDescription>Advantages over benzodiazepines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Characteristic</th>
                          <th className="text-left p-2">Selank</th>
                          <th className="text-left p-2">Benzodiazepines</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Anxiolytic Effect</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ Comparable efficacy</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ Strong efficacy</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Sedation</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ None</td>
                          <td className="p-2 text-red-600 dark:text-red-400">✗ Significant</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Cognitive Impairment</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ None (enhances cognition)</td>
                          <td className="p-2 text-red-600 dark:text-red-400">✗ Significant</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Dependence Risk</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ None reported</td>
                          <td className="p-2 text-red-600 dark:text-red-400">✗ High</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Withdrawal Syndrome</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ None</td>
                          <td className="p-2 text-red-600 dark:text-red-400">✗ Severe</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Neuroprotection</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ Strong</td>
                          <td className="p-2 text-red-600 dark:text-red-400">✗ None</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">BDNF Regulation</td>
                          <td className="p-2 text-green-600 dark:text-green-400">✓ Positive modulation</td>
                          <td className="p-2 text-red-600 dark:text-red-400">✗ None</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How Selank produces anxiolytic and neuroprotective effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-violet-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">BDNF Regulation</h4>
                      <p className="text-sm text-muted-foreground">
                        Selank modulates <strong>brain-derived neurotrophic factor (BDNF)</strong> expression in the hippocampus, a key region for memory and emotional regulation. BDNF is critical for neuronal survival, growth, and synaptic plasticity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Increases BDNF mRNA expression in hippocampus</li>
                        <li>Protects against ethanol-induced BDNF reduction</li>
                        <li>Enhances neuroplasticity and learning</li>
                        <li>Supports long-term neuroprotection</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">GABAergic Modulation</h4>
                      <p className="text-sm text-muted-foreground">
                        While Selank does not directly bind to GABA receptors like benzodiazepines, it appears to modulate GABAergic neurotransmission through indirect mechanisms, producing anxiolytic effects without sedation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Enhances GABAergic tone without direct receptor binding</li>
                        <li>Maintains normal cognitive function</li>
                        <li>No tolerance or dependence development</li>
                        <li>Anxiolytic effect comparable to benzodiazepines</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Serotonergic System</h4>
                      <p className="text-sm text-muted-foreground">
                        Selank influences serotonin metabolism and receptor expression, contributing to its anxiolytic and mood-regulating effects.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Modulates serotonin receptor expression</li>
                        <li>Influences 5-HT metabolism</li>
                        <li>Contributes to mood stabilization</li>
                        <li>Enhances emotional well-being</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Immunomodulation</h4>
                      <p className="text-sm text-muted-foreground">
                        As a tuftsin analogue, Selank retains some immunomodulatory properties, potentially contributing to its overall therapeutic effects through the brain-immune axis.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Modulates cytokine production</li>
                        <li>Influences immune-brain communication</li>
                        <li>May reduce neuroinflammation</li>
                        <li>Supports overall neuroprotection</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Gene Expression</h4>
                      <p className="text-sm text-muted-foreground">
                        Selank affects the expression of multiple genes involved in neurotransmitter systems, neuroprotection, and cognitive function.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Modulates expression of neurotransmitter-related genes</li>
                        <li>Influences genes involved in neuroplasticity</li>
                        <li>Affects stress response gene expression</li>
                        <li>Long-lasting effects on brain function</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Mechanisms with Semax</CardTitle>
                  <CardDescription>Complementary cognitive enhancement and anxiolytic effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Selank and Semax are often used together due to their <strong>complementary mechanisms</strong>:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 dark:bg-violet-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Selank (Anxiolytic)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Reduces anxiety and stress</li>
                        <li>GABA modulation</li>
                        <li>Emotional stability</li>
                        <li>Calming effect</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Semax (Nootropic)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Enhances focus and attention</li>
                        <li>BDNF/trkB activation</li>
                        <li>Cognitive stimulation</li>
                        <li>Energizing effect</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Combined effect:</strong> Calm, focused mental state with enhanced cognitive performance and reduced anxiety - ideal for high-pressure situations requiring both mental clarity and emotional stability.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>Evidence from human studies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Generalized Anxiety Disorder Treatment</h4>
                        <Badge variant="outline" className="text-xs">27 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Volkova A et al. (2016)</strong> - PMC4757669
                      </p>
                      <p className="text-sm">
                        Numerous clinical studies demonstrated that Selank has <strong>strong antianxiety and neuroprotective effects</strong> in the treatment of generalized anxiety disorder (GAD). The peptide showed efficacy comparable to traditional anxiolytics but without sedation or cognitive impairment.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Approved in Russia for GAD treatment</li>
                        <li>Comparable efficacy to benzodiazepines</li>
                        <li>No sedation or cognitive impairment</li>
                        <li>Gene expression modulation in anxiety-related pathways</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Rapid and Slow Response in GAD</h4>
                        <Badge variant="outline" className="text-xs">20 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Zozulia AA et al. (2008)</strong> - PubMed 18454096
                      </p>
                      <p className="text-sm">
                        Study examined the efficacy and possible mechanisms of action of Selank in GAD treatment. Results showed <strong>increased anxiety parameter correlations</strong> during treatment, with stronger positive effects observed in patients with GAD.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Effective in both rapid and slow responders</li>
                        <li>Anxiety level reduction observed</li>
                        <li>Mechanism involves multiple neurotransmitter systems</li>
                        <li>Well-tolerated with minimal side effects</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Protection Against Ethanol-Induced Memory Impairment</h4>
                        <Badge variant="outline" className="text-xs">12 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Kolik LG et al. (2019)</strong> - PubMed 31625062
                      </p>
                      <p className="text-sm">
                        Selank (0.3 mg/kg/day for 7 days, intraperitoneally) produced a <strong>cognitive-stimulating effect</strong> in 9-month-old rats not exposed to ethanol. In rats exposed to ethanol, Selank protected against memory impairment through BDNF regulation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Protects against ethanol-induced cognitive decline</li>
                        <li>BDNF regulation in hippocampus</li>
                        <li>Cognitive enhancement in healthy subjects</li>
                        <li>Neuroprotective mechanism confirmed</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">BDNF Expression Regulation</h4>
                        <Badge variant="outline" className="text-xs">Multiple Studies</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Multiple Research Groups</strong> - ResearchGate, PMC
                      </p>
                      <p className="text-sm">
                        Intranasal administration of Selank <strong>regulates BDNF expression in the rat hippocampus in vivo</strong>. This mechanism underlies many of Selank's cognitive-enhancing and neuroprotective effects.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Increases BDNF mRNA in hippocampus</li>
                        <li>Enhances neuroplasticity</li>
                        <li>Supports long-term memory formation</li>
                        <li>Neuroprotection against various insults</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preclinical Research</CardTitle>
                  <CardDescription>Animal studies and mechanisms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Anxiolytic Effects in Animal Models</h4>
                      <p className="text-sm">
                        Selank demonstrated anxiolytic effects in multiple animal anxiety models without causing sedation or motor impairment, distinguishing it from benzodiazepines.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cognitive Enhancement</h4>
                      <p className="text-sm">
                        Improved memory consolidation and recall in rodent learning tasks, with effects mediated through BDNF upregulation and enhanced synaptic plasticity.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Neuroprotection</h4>
                      <p className="text-sm">
                        Protected against various neurotoxic insults including oxidative stress, excitotoxicity, and alcohol-induced damage through multiple mechanisms.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Gene Expression</h4>
                      <p className="text-sm">
                        Modulated expression of genes involved in neurotransmitter systems (serotonin, GABA, dopamine), neuroprotection, and immune function.
                      </p>
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
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Dosing protocols are for healthcare provider reference only. All peptide therapy must be prescribed and monitored by a qualified physician.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-violet-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Intranasal Administration (Primary Route)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Standard Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Starting dose:</strong> 250-300 mcg daily, divided into 2-3 doses</li>
                          <li><strong>Target dose:</strong> 500 mcg daily by weeks 3-4</li>
                          <li><strong>Maximum dose:</strong> 600-750 mcg daily (clinical trials)</li>
                          <li><strong>Timing:</strong> Morning and afternoon (avoid evening to prevent sleep interference)</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Example Protocol:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Weeks 1-2:</strong> 150 mcg twice daily (300 mcg total)</li>
                          <li><strong>Weeks 3-4:</strong> 250 mcg twice daily (500 mcg total)</li>
                          <li><strong>Maintenance:</strong> 250-300 mcg twice daily</li>
                          <li><strong>Duration:</strong> 4-12 weeks, then reassess</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Subcutaneous Injection (Alternative)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Injectable Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 300-500 mcg per injection</li>
                          <li><strong>Frequency:</strong> 5 days per week (Mon-Fri)</li>
                          <li><strong>Administration:</strong> Subcutaneous, abdomen or thigh</li>
                          <li><strong>Duration:</strong> 4-8 week cycles</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Acute Anxiety Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Short-Term Use:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 250-500 mcg as needed</li>
                          <li><strong>Onset:</strong> 15-30 minutes (intranasal)</li>
                          <li><strong>Duration:</strong> 4-6 hours</li>
                          <li><strong>Maximum:</strong> 2-3 doses per day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for Selank use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Intranasal Technique</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Clear nasal passages before administration</li>
                        <li>Alternate nostrils between doses</li>
                        <li>Remain upright for 5-10 minutes after dosing</li>
                        <li>Avoid blowing nose for 15 minutes</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Timing Strategies</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Morning dose: Upon waking or with breakfast</li>
                        <li>Afternoon dose: Mid-afternoon (2-4 PM)</li>
                        <li>Avoid evening doses (may interfere with sleep)</li>
                        <li>Can be taken with or without food</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light</li>
                        <li>Nasal spray: 30-day shelf life after reconstitution</li>
                        <li>Injectable: Use within 30 days of reconstitution</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Cycling</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>4-12 week treatment cycles</li>
                        <li>2-4 week breaks between cycles</li>
                        <li>No tolerance or dependence reported</li>
                        <li>Can be used long-term with physician monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that work well with Selank</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Semax (Cognitive Enhancement)</h4>
                      <p className="text-sm">
                        <strong>Most popular combination.</strong> Semax provides cognitive stimulation and focus while Selank reduces anxiety - creating a calm, focused mental state ideal for high-performance situations.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Selank: 250 mcg intranasal, 2x daily</li>
                        <li>Semax: 300-600 mcg intranasal, 2x daily</li>
                        <li>Take together in morning and afternoon</li>
                        <li>See <Link href="/stacking-guide"><a className="text-blue-600 dark:text-blue-400 hover:underline">Cognitive Enhancement Stack</a></Link></li>
                      </ul>
                    </div>

                    <div className="bg-violet-50 dark:bg-violet-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-violet-600 dark:text-violet-400">Dihexa (Synaptogenesis)</h4>
                      <p className="text-sm">
                        Dihexa increases synapse formation while Selank provides neuroprotection and BDNF support - synergistic for cognitive enhancement and brain health.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Selank: 250-500 mcg intranasal, 2x daily</li>
                        <li>Dihexa: 1-3 mg oral, once daily</li>
                        <li>4-8 week cycles</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-rose-600 dark:text-rose-400">BPC-157 (Gut-Brain Axis)</h4>
                      <p className="text-sm">
                        BPC-157's gut healing and neurotransmitter modulation complements Selank's anxiolytic effects - beneficial for anxiety related to gut dysfunction.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Selank: 250 mcg intranasal, 2x daily</li>
                        <li>BPC-157: 250-500 mcg subcutaneous, once daily</li>
                        <li>4-8 week cycles</li>
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
                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Pregnancy and breastfeeding (insufficient safety data)</li>
                        <li>Known hypersensitivity to Selank or related peptides</li>
                        <li>Severe psychiatric disorders without physician supervision</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Active psychosis or severe mental illness</li>
                        <li>Uncontrolled seizure disorder</li>
                        <li>Severe cardiovascular disease</li>
                        <li>Children under 18 (insufficient pediatric data)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical examination</li>
                        <li>Psychiatric evaluation if history of mental illness</li>
                        <li>Discussion of current medications and supplements</li>
                        <li>Informed consent regarding investigational status</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Side Effects</CardTitle>
                  <CardDescription>Reported adverse events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Common (Mild, Self-Limiting)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Nasal irritation:</strong> Mild discomfort, dryness (intranasal route)</li>
                        <li><strong>Headache:</strong> Occasional, usually mild</li>
                        <li><strong>Drowsiness:</strong> Rare, typically at higher doses</li>
                        <li><strong>Injection site reactions:</strong> Mild redness, swelling (subcutaneous route)</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Rare</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Paradoxical anxiety:</strong> Very rare, usually resolves with dose adjustment</li>
                        <li><strong>Mood changes:</strong> Uncommon, typically mild</li>
                        <li><strong>Sleep disturbances:</strong> If dosed too late in day</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Notable Absence of Side Effects</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>No sedation:</strong> Unlike benzodiazepines</li>
                        <li><strong>No cognitive impairment:</strong> Actually enhances cognition</li>
                        <li><strong>No dependence:</strong> No withdrawal syndrome reported</li>
                        <li><strong>No tolerance:</strong> Effects maintained over time</li>
                        <li><strong>No motor impairment:</strong> Safe for daily activities</li>
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
                      <h4 className="font-semibold">Initial Phase (Weeks 1-4)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly check-ins with healthcare provider</li>
                        <li>Anxiety symptom tracking (GAD-7 or similar)</li>
                        <li>Side effect monitoring</li>
                        <li>Dose optimization based on response</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Maintenance Phase (After Week 4)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Monthly follow-up visits</li>
                        <li>Continued symptom assessment</li>
                        <li>Evaluation of treatment goals</li>
                        <li>Consideration of cycling or discontinuation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Long-Term Use (Beyond 12 Weeks)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Quarterly comprehensive evaluations</li>
                        <li>Reassessment of need for continued therapy</li>
                        <li>Consideration of cycling protocols</li>
                        <li>Integration with other therapeutic modalities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade Selank</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Only use Selank from verified compounding pharmacies with proper quality control. Gray and black market sources pose serious health risks.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Russia</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Status:</strong> Approved pharmaceutical</li>
                        <li><strong>Indication:</strong> Generalized anxiety disorder</li>
                        <li><strong>Availability:</strong> Prescription medication</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">United States</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Status:</strong> Not FDA-approved</li>
                        <li><strong>Availability:</strong> Compounding pharmacies only</li>
                        <li><strong>Requirement:</strong> Physician prescription</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> Selank is not FDA-approved in the United States and is considered investigational. Use must be under physician supervision through licensed compounding pharmacies.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200 dark:border-violet-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade Selank?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity Selank from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://drspeptides.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-violet-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-violet-600 bg-background px-8 py-3 text-sm font-medium text-violet-600 shadow-sm transition-colors hover:bg-violet-50 dark:hover:bg-violet-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600">
                      View Cognitive Enhancement Stack
                    </a>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Peptide Therapy Hub. Educational resource supporting DrsPeptides.com</p>
          <p className="mt-2">
            This website is for educational purposes only and does not constitute medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
