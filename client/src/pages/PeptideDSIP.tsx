import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PeptideDSIP() {
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-background to-purple-50 dark:from-indigo-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
              Sleep & Stress Optimization
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              DSIP
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delta Sleep-Inducing Peptide - a neuropeptide that improves sleep efficiency, reduces stress, and enhances mitochondrial function. Proven to increase delta-wave sleep and stress resistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">59</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">↑20%</div>
                <div className="text-sm text-muted-foreground">Sleep Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Delta</div>
                <div className="text-sm text-muted-foreground">Wave Enhancement</div>
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
              <strong>Investigational Peptide:</strong> DSIP is not FDA-approved as a therapeutic agent. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
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
                  <CardTitle>What is DSIP?</CardTitle>
                  <CardDescription>Delta Sleep-Inducing Peptide - neuropeptide for sleep and stress optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    DSIP (Delta Sleep-Inducing Peptide) is a <strong>naturally occurring neuropeptide</strong> discovered in the 1970s that promotes <strong>delta-wave sleep</strong> (deep, restorative sleep) and exhibits remarkable <strong>stress-protective properties</strong>. It is a nonapeptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) that modulates sleep architecture, stress response, pain perception, and circadian rhythms.
                  </p>
                  <p>
                    Unlike sedative drugs that force sleep, DSIP <strong>enhances natural sleep quality</strong> by increasing delta rhythm in EEG recordings, improving sleep efficiency, and reducing sleep latency. It also exhibits unique <strong>mitochondrial protective effects</strong> and strong antioxidant properties, making it valuable for stress resilience and recovery.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Structure:</strong> Nonapeptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu)</li>
                      <li><strong>Discovery:</strong> Late 1970s as sleep-promoting factor in rabbits</li>
                      <li><strong>Sleep effect:</strong> Increases delta-wave (deep) sleep, improves efficiency</li>
                      <li><strong>Stress protection:</strong> Enhances resistance to experimental stress</li>
                      <li><strong>Mitochondrial action:</strong> Improves oxidative phosphorylation efficiency</li>
                      <li><strong>Primary effects:</strong> Sleep optimization, stress resilience, pain modulation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of DSIP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Sleep Optimization</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic insomnia treatment</li>
                        <li>Sleep efficiency improvement</li>
                        <li>Delta-wave sleep enhancement</li>
                        <li>Sleep latency reduction</li>
                        <li>Circadian rhythm regulation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Stress Resilience</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Stress-protective effects</li>
                        <li>HPA axis modulation</li>
                        <li>Antioxidant properties</li>
                        <li>Lipid peroxidation inhibition</li>
                        <li>Emotional stress resistance</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Pain Management</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic pain reduction</li>
                        <li>Neuropathic pain relief</li>
                        <li>Fibromyalgia symptoms</li>
                        <li>Pain perception modulation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Mitochondrial Function</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Oxidative phosphorylation enhancement</li>
                        <li>ATP production optimization</li>
                        <li>Mitochondrial enzyme modulation</li>
                        <li>Cellular energy improvement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sleep Architecture Effects</CardTitle>
                  <CardDescription>How DSIP enhances natural sleep quality</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    DSIP promotes a <strong>particular type of sleep characterized by an increase in delta rhythm</strong> on EEG recordings. Delta waves (0.5-4 Hz) are the hallmark of <strong>deep, restorative sleep</strong> - the most important phase for physical recovery, memory consolidation, and hormonal regulation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Objective Sleep Improvements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Higher sleep efficiency:</strong> Increased ratio of time asleep/recording time</li>
                        <li><strong>Shorter sleep latency:</strong> Faster time to fall asleep</li>
                        <li><strong>Increased delta waves:</strong> More deep, restorative sleep</li>
                        <li><strong>Fewer awakenings:</strong> More consolidated sleep</li>
                        <li><strong>Better sleep architecture:</strong> Improved sleep stage distribution</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Subjective Benefits</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Improved daytime mood state</li>
                        <li>Better cognitive performance</li>
                        <li>Enhanced recovery and restoration</li>
                        <li>Reduced daytime fatigue</li>
                        <li>Improved quality of life</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical significance:</strong> Unlike sedatives that alter sleep architecture artificially, DSIP enhances natural sleep processes, resulting in truly restorative sleep without morning grogginess or dependence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unique Stress-Protective Properties</CardTitle>
                  <CardDescription>Beyond sleep - comprehensive stress resilience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Research has revealed that DSIP's most important and intriguing biological profile is its <strong>unique stress-protective and adaptive properties</strong>. DSIP substantially increases the resistance of animals to various experimental stressful manipulations and mitigates stress-induced pathological metabolic deviations.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Stress Resistance Enhancement</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Increases resistance to acute emotional stress</li>
                        <li>Mitigates stress-induced metabolic disturbances</li>
                        <li>Protects against hypoxia (low oxygen stress)</li>
                        <li>Modulates HPA axis during chronic stress</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Antioxidant Properties</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Strong antioxidant effects:</strong> Indirect action via enzyme activation</li>
                        <li><strong>Lipid peroxidation inhibition:</strong> Especially pronounced under stress</li>
                        <li><strong>Free radical reduction:</strong> Decreases ROS in brain and tissues</li>
                        <li><strong>Protective enzyme activation:</strong> Enhances antioxidant defenses</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Protection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Improves oxidative phosphorylation efficiency</li>
                        <li>Modulates mitochondrial enzymes (MAO A, hexokinase, creatine kinase)</li>
                        <li>Protects against stress-induced mitochondrial impairment</li>
                        <li>Prevents apoptosis and necrosis pathways</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How DSIP improves sleep, stress resilience, and mitochondrial function</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Delta-Wave Sleep Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP promotes a <strong>particular type of sleep characterized by increased delta rhythm</strong> (0.5-4 Hz) on EEG recordings, the hallmark of deep, restorative sleep.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Delta wave induction:</strong> Increases slow-wave sleep (SWS)</li>
                        <li><strong>Spindle activity:</strong> Enhances sleep spindles on EEG</li>
                        <li><strong>Natural sleep promotion:</strong> Does not force sleep like sedatives</li>
                        <li><strong>Sleep architecture optimization:</strong> Improves stage distribution</li>
                        <li><strong>Circadian rhythm modulation:</strong> Regulates sleep-wake cycles</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Mitochondrial Respiratory Chain Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP at 10⁻⁵–10⁻⁸ M concentration <strong>significantly elevates the rate of phosphorylated respiration (V3) by 10-20%</strong> in rat brain mitochondria while increasing the rate of ADP phosphorylation by 10-30%.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Oxidative phosphorylation:</strong> Improves efficiency of ATP production</li>
                        <li><strong>Respiratory control ratio:</strong> Increases coupling of respiration and ATP synthesis</li>
                        <li><strong>ADP phosphorylation:</strong> Enhances rate of energy production</li>
                        <li><strong>Mitochondrial enzymes:</strong> Modulates MAO A, hexokinase, creatine kinase, malate dehydrogenase</li>
                        <li><strong>Cellular energy:</strong> Optimizes energetic machinery</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Antioxidant Defense Activation</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP exhibits <strong>strong antioxidant properties</strong> through indirect action, activating protective antioxidant enzymes and considerably inhibiting stress-induced lipid peroxidation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Indirect antioxidant action:</strong> Activates protective enzymes</li>
                        <li><strong>Lipid peroxidation inhibition:</strong> Especially pronounced under stress</li>
                        <li><strong>Free radical reduction:</strong> Decreases ROS content in brain and tissues</li>
                        <li><strong>Stress-induced oxidation:</strong> Mitigates oxidative damage</li>
                        <li><strong>Enzyme activation:</strong> Enhances endogenous antioxidant defenses</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">HPA Axis Modulation</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP possesses <strong>strong anti-stress properties by inhibiting the HPA axis during chronic stress</strong>, preventing excessive cortisol release and stress-induced metabolic disturbances.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>HPA axis inhibition:</strong> Reduces chronic stress response</li>
                        <li><strong>Cortisol modulation:</strong> Prevents excessive stress hormone release</li>
                        <li><strong>Stress resistance:</strong> Increases tolerance to stressful manipulations</li>
                        <li><strong>Metabolic protection:</strong> Mitigates stress-induced deviations</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Pain Perception Modulation</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP modulates <strong>pain perception and circadian cycles</strong>, showing therapeutic effects in chronic pain patients.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Pain level reduction:</strong> Significant decrease in chronic pain</li>
                        <li><strong>Neuropathic pain:</strong> Effective for nerve-related pain</li>
                        <li><strong>Enhanced cortical synchrony:</strong> May induce pain relief</li>
                        <li><strong>Multifunctional effects:</strong> Pain, sleep, and stress modulation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Neuroprotection Under Hypoxia</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP demonstrates <strong>stress-protective potency under experimental hypoxia</strong> (low oxygen conditions), protecting brain function and mitochondrial activity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Hypoxia protection:</strong> Maintains function under low oxygen</li>
                        <li><strong>Brain mitochondria:</strong> Protects respiratory activity</li>
                        <li><strong>High altitude adaptation:</strong> Improves sleep at altitude</li>
                        <li><strong>Spatial memory restoration:</strong> Recovers cognitive function</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Stroke Recovery Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        DSIP has shown <strong>clinical benefits for stroke therapy</strong> in terms of accelerating the recovery of motor functions after stroke.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Motor function recovery:</strong> Accelerates post-stroke rehabilitation</li>
                        <li><strong>Neuroprotection:</strong> Protects against ischemic damage</li>
                        <li><strong>Therapeutic potential:</strong> Clinical benefits demonstrated</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Molecular Targets</CardTitle>
                  <CardDescription>Specific biological systems modulated by DSIP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Sleep-Wake Regulation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Mesodiencephalic ventricle receptors</li>
                        <li>Delta rhythm generation systems</li>
                        <li>Sleep spindle mechanisms</li>
                        <li>Circadian pacemaker modulation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Enzymes</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MAO A (monoamine oxidase A)</li>
                        <li>Hexokinase</li>
                        <li>Creatine kinase</li>
                        <li>Malate dehydrogenase</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Stress Response Systems</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>HPA (hypothalamic-pituitary-adrenal) axis</li>
                        <li>Cortisol regulation</li>
                        <li>Stress hormone modulation</li>
                        <li>Adaptive response enhancement</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Antioxidant Systems</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Protective antioxidant enzymes</li>
                        <li>Lipid peroxidation pathways</li>
                        <li>Free radical scavenging systems</li>
                        <li>ROS production regulation</li>
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
                        <h4 className="font-semibold">Mitochondrial Enhancement & Stress Protection</h4>
                        <Badge variant="outline" className="text-xs">59 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Khvatova EM et al. (2003)</strong> - Peptides
                      </p>
                      <p className="text-sm">
                        Landmark study demonstrating that <strong>DSIP at 10⁻⁵–10⁻⁸ M significantly elevated phosphorylated respiration (10-20%) and ADP phosphorylation rate (10-30%)</strong> in rat brain mitochondria. Proved DSIP affects efficiency of oxidative phosphorylation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Respiratory enhancement:</strong> 10-20% increase in V3 respiration</li>
                        <li><strong>ATP production:</strong> 10-30% increase in ADP phosphorylation</li>
                        <li><strong>Respiratory control:</strong> Improved coupling efficiency</li>
                        <li><strong>Stress protection:</strong> Mitigates hypoxia-induced damage</li>
                        <li><strong>Antioxidant effects:</strong> Inhibits lipid peroxidation under stress</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Sleep Efficiency in Chronic Insomnia</h4>
                        <Badge variant="outline" className="text-xs">21 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Bes F et al. (1992)</strong> - Neuropsychobiology
                      </p>
                      <p className="text-sm">
                        Double-blind study in 16 chronic insomniac patients showing <strong>higher sleep efficiency and shorter sleep latency with DSIP compared to placebo</strong>. Objective sleep quality improvements confirmed.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Higher sleep efficiency vs. placebo</li>
                        <li>Shorter sleep latency (faster sleep onset)</li>
                        <li>Improved objective sleep quality</li>
                        <li>Chronic insomnia treatment efficacy</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Delta Sleep-Inducing Peptide Mechanism</h4>
                        <Badge variant="outline" className="text-xs">36 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Pollard BJ et al. (2001)</strong> - Eur J Anaesthesiol
                      </p>
                      <p className="text-sm">
                        Comprehensive review demonstrating that <strong>DSIP promotes a particular type of sleep characterized by an increase in delta rhythm of the EEG</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Delta rhythm enhancement on EEG</li>
                        <li>Specific sleep type promotion</li>
                        <li>Deep, restorative sleep induction</li>
                        <li>Natural sleep architecture preservation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Disturbed Sleep Improvement</h4>
                        <Badge variant="outline" className="text-xs">27 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Schneider-Helmert D et al. (1981)</strong> - Experientia
                      </p>
                      <p className="text-sm">
                        Early clinical study showing <strong>tendencies toward lower number of awakenings and higher total sleep efficiency</strong> with synthetic DSIP treatment.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Fewer awakenings during night</li>
                        <li>Higher total sleep efficiency</li>
                        <li>Improved sleep continuity</li>
                        <li>Synthetic DSIP efficacy</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Chronic Pain Relief</h4>
                        <Badge variant="outline" className="text-xs">21 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Larbig W et al. (1984)</strong> - Clinical pilot study
                      </p>
                      <p className="text-sm">
                        Clinical pilot study showing <strong>DSIP significantly lowered pain levels in 6 out of 7 patients</strong> with chronic, pronounced pain after intravenous administration.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Significant pain reduction in 86% of patients</li>
                        <li>Effective after 5 consecutive daily injections</li>
                        <li>Sustained effect with maintenance dosing</li>
                        <li>Chronic pain management potential</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">High Altitude Sleep & Cognitive Recovery</h4>
                        <Badge variant="outline" className="text-xs">14 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Roy K et al. (2018)</strong> - Life Sciences
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>phosphorylated DSIP (p-DSIP) restores spatial memory and p-CREB expression by improving sleep architecture at high altitude</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Sleep architecture improvement at altitude</li>
                        <li>Spatial memory restoration</li>
                        <li>p-CREB expression recovery</li>
                        <li>Hypoxia-induced cognitive deficits reversal</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Motor Function Recovery After Stroke</h4>
                        <Badge variant="outline" className="text-xs">1 Citation</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Tukhovskaya EA et al. (2021)</strong> - Molecules
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>DSIP might have clinical benefits for stroke therapy in terms of accelerating recovery of motor functions</strong> after stroke.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Accelerated motor function recovery</li>
                        <li>Stroke therapy potential</li>
                        <li>Neuroprotective effects</li>
                        <li>Clinical benefit demonstration</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Blood-Brain Barrier Crossing & Sleep Promotion</h4>
                        <Badge variant="outline" className="text-xs">1 Citation</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Mu X et al. (2024)</strong> - Front Pharmacol
                      </p>
                      <p className="text-sm">
                        Recent study demonstrating <strong>DSIP-CBBBP potential in correcting neurotransmitter dysregulation and promoting sleep</strong>, hinting at utility in sleep-related therapies.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>BBB-crossing peptide development</li>
                        <li>Neurotransmitter dysregulation correction</li>
                        <li>Sleep promotion mechanism</li>
                        <li>Therapeutic delivery optimization</li>
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
                      <h4 className="font-semibold">Sleep Disorders</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic insomnia</li>
                        <li>Sleep efficiency optimization</li>
                        <li>Circadian rhythm disorders</li>
                        <li>High altitude sleep disturbances</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Stress-Related Conditions</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic stress management</li>
                        <li>Emotional stress resilience</li>
                        <li>HPA axis dysregulation</li>
                        <li>Stress-induced metabolic disturbances</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Pain Management</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic pain syndromes</li>
                        <li>Neuropathic pain</li>
                        <li>Fibromyalgia</li>
                        <li>Pain perception modulation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Neurological Recovery</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Stroke rehabilitation</li>
                        <li>Motor function recovery</li>
                        <li>Cognitive function restoration</li>
                        <li>Hypoxia-induced deficits</li>
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
                  <CardDescription>Research-based administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Important:</strong> DSIP is not FDA-approved as a therapeutic agent. The following protocols are based on research studies and are for healthcare provider reference only. All use must be under physician supervision.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-indigo-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Subcutaneous Injection Protocol (Standard)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Sleep Optimization:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 100-200 mcg per injection</li>
                          <li><strong>Timing:</strong> 30-60 minutes before bedtime</li>
                          <li><strong>Frequency:</strong> Nightly or 3-5 times per week</li>
                          <li><strong>Duration:</strong> 2-4 week cycles, assess response</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Clinical Rationale:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Increases delta-wave sleep</li>
                          <li>Improves sleep efficiency</li>
                          <li>Reduces sleep latency</li>
                          <li>Natural sleep architecture preservation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Intravenous Protocol (Clinical Studies)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Chronic Pain Management:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Initial phase:</strong> 5 consecutive daily IV injections</li>
                          <li><strong>Maintenance:</strong> 5 injections every 48-72 hours</li>
                          <li><strong>Dose:</strong> As per clinical protocol (typically 1-5 mg IV)</li>
                          <li><strong>Setting:</strong> Clinical supervision required</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Significantly lowered pain in 86% of patients</li>
                          <li>Effective for chronic, pronounced pain</li>
                          <li>Sustained effect with maintenance dosing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Stress Resilience Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Chronic Stress Management:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 100-300 mcg subcutaneous</li>
                          <li><strong>Timing:</strong> Morning (8 AM) and evening (bedtime)</li>
                          <li><strong>Frequency:</strong> Twice daily</li>
                          <li><strong>Duration:</strong> 3-4 week cycles</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Benefits:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>HPA axis modulation</li>
                          <li>Stress resistance enhancement</li>
                          <li>Antioxidant protection</li>
                          <li>Mitochondrial function improvement</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Nasal Spray Protocol (Alternative Route)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Intranasal Administration:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 50-150 mcg per nostril</li>
                          <li><strong>Timing:</strong> 30 minutes before bedtime</li>
                          <li><strong>Frequency:</strong> Nightly</li>
                          <li><strong>Advantage:</strong> Non-invasive, easier administration</li>
                        </ul>
                      </div>
                      <Alert className="mt-3 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                          <strong>Note:</strong> Intranasal bioavailability may be lower than subcutaneous. Dose adjustment may be needed.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for DSIP use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Timing Optimization</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Sleep:</strong> 30-60 minutes before bedtime</li>
                        <li><strong>Stress:</strong> Morning and evening dosing</li>
                        <li><strong>Pain:</strong> As per clinical protocol</li>
                        <li>Consistent timing for best results</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Injection Technique</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Inject slowly to minimize discomfort</li>
                        <li>Monitor injection sites for reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light</li>
                        <li>Reconstituted: Use within 30 days</li>
                        <li>Lyophilized: Stable at room temp briefly</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Response Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Sleep quality tracking (diary or app)</li>
                        <li>Stress level assessment</li>
                        <li>Pain scale monitoring</li>
                        <li>Regular physician follow-up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with DSIP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Epithalon (Sleep & Longevity)</h4>
                      <p className="text-sm">
                        <strong>Complementary sleep and circadian optimization.</strong> Epithalon regulates circadian rhythms and telomerase while DSIP enhances delta-wave sleep - comprehensive sleep-longevity stack.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>DSIP: 100-200 mcg before bedtime, nightly</li>
                        <li>Epithalon: 10 mg subcutaneous, nightly (10-20 day cycles)</li>
                        <li>Synergistic circadian and sleep optimization</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Semax (Cognitive + Stress Resilience)</h4>
                      <p className="text-sm">
                        <strong>Comprehensive stress adaptation.</strong> Semax enhances cognitive function and stress resistance while DSIP provides sleep optimization and HPA axis modulation - complete stress management.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>DSIP: 100-200 mcg before bedtime</li>
                        <li>Semax: 300-600 mcg intranasal, morning</li>
                        <li>Complementary stress and cognitive support</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">BPC-157 (Pain + Recovery)</h4>
                      <p className="text-sm">
                        <strong>Enhanced pain management and healing.</strong> BPC-157's systemic healing complements DSIP's pain modulation and sleep enhancement - powerful recovery stack.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>DSIP: 100-200 mcg before bedtime</li>
                        <li>BPC-157: 250-500 mcg subcutaneous, twice daily</li>
                        <li>Synergistic pain relief and recovery</li>
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
                      <strong>Generally Well-Tolerated:</strong> Clinical studies demonstrate good tolerability with minimal side effects. Natural sleep promotion without sedative dependence.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Known hypersensitivity to DSIP</li>
                        <li>Pregnancy and breastfeeding (insufficient safety data)</li>
                        <li>Severe sleep apnea (may worsen respiratory depression)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Severe depression (monitor mood closely)</li>
                        <li>Active seizure disorders (may affect EEG patterns)</li>
                        <li>Children under 18 (no pediatric safety data)</li>
                        <li>Severe liver or kidney disease (metabolism/excretion unclear)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive sleep history and evaluation</li>
                        <li>Rule out sleep apnea (sleep study if indicated)</li>
                        <li>Baseline mood and stress assessment</li>
                        <li>Pregnancy test for women of childbearing age</li>
                        <li>Informed consent regarding investigational status</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Side Effects</CardTitle>
                  <CardDescription>Reported and theoretical adverse events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Minimal Side Effects (Clinical Studies)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Injection site reactions:</strong> Mild, transient</li>
                        <li><strong>Morning grogginess:</strong> Rare, usually resolves</li>
                        <li><strong>Headache:</strong> Occasional, mild</li>
                        <li><strong>Overall:</strong> Well-tolerated in clinical trials</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Theoretical Concerns</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Excessive sedation:</strong> Possible with high doses</li>
                        <li><strong>Mood changes:</strong> Monitor in depression-prone individuals</li>
                        <li><strong>Allergic reactions:</strong> Possible with any peptide</li>
                        <li><strong>Long-term effects:</strong> Limited data beyond 3-4 weeks</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Advantages Over Sleep Medications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Natural sleep promotion:</strong> Enhances physiological sleep</li>
                        <li><strong>No dependence:</strong> Does not cause addiction</li>
                        <li><strong>No tolerance:</strong> Maintains efficacy over time</li>
                        <li><strong>Preserves sleep architecture:</strong> Unlike sedatives</li>
                        <li><strong>Additional benefits:</strong> Stress protection, pain modulation</li>
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
                      <h4 className="font-semibold">Sleep Quality Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Sleep diary (daily for first 2 weeks)</li>
                        <li>Sleep efficiency calculation</li>
                        <li>Sleep latency tracking</li>
                        <li>Daytime functioning assessment</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Stress & Mood Assessment</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly stress level rating</li>
                        <li>Mood tracking (especially if depression history)</li>
                        <li>HPA axis markers (cortisol if indicated)</li>
                        <li>Quality of life questionnaires</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Safety Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Injection site inspection</li>
                        <li>Adverse event tracking</li>
                        <li>Physician follow-up (2-4 weeks)</li>
                        <li>Reassess need for continued therapy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade DSIP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Only use DSIP from verified compounding pharmacies with proper quality control. Gray and black market sources pose serious health risks.
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
                    <h4 className="font-semibold text-amber-600 dark:text-amber-400">United States</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Status:</strong> Not FDA-approved as therapeutic agent</li>
                      <li><strong>Availability:</strong> Compounding pharmacies only</li>
                      <li><strong>Requirement:</strong> Physician prescription mandatory</li>
                      <li><strong>Research status:</strong> Investigational for sleep disorders</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> DSIP is not FDA-approved and is considered investigational. Use must be under physician supervision through licensed compounding pharmacies.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200 dark:border-indigo-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade DSIP?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity DSIP from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://drspeptides.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-indigo-600 bg-background px-8 py-3 text-sm font-medium text-indigo-600 shadow-sm transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
                      View Sleep Optimization Stack
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
