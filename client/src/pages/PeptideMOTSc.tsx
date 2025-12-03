import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PeptideMOTSc() {
  usePageTitle("MOTS-c - Mitochondrial Exercise Mimetic", {
    description: "Clinical guide to MOTS-c mitochondrial peptide for metabolism and longevity. Mechanisms, research findings, dosing, and potential clinical applications."
  });

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
      <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
              Exercise Mimetic & Metabolic Optimizer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              MOTS-c
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mitochondrial-derived peptide that mimics exercise benefits - enhances physical performance, reverses insulin resistance, prevents obesity, and extends healthspan. Exercise-induced "mitokine" encoded in mitochondrial DNA.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">949</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">11.9x</div>
                <div className="text-sm text-muted-foreground">Exercise Induction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">+7%</div>
                <div className="text-sm text-muted-foreground">Lifespan Extension</div>
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
              <strong>Investigational Peptide:</strong> MOTS-c is not FDA-approved as a therapeutic agent. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
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
                  <CardTitle>What is MOTS-c?</CardTitle>
                  <CardDescription>Mitochondrial-derived exercise mimetic peptide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    MOTS-c (Mitochondrial ORF of the 12S rRNA type-c) is a <strong>16-amino acid peptide encoded in mitochondrial DNA</strong> that acts as an <strong>exercise-induced "mitokine"</strong> - a signaling molecule that mimics the beneficial effects of exercise. It is the first mitochondrial-encoded peptide shown to actively regulate aging, physical performance, and metabolic homeostasis.
                  </p>
                  <p>
                    Exercise dramatically increases MOTS-c levels (<strong>11.9-fold in skeletal muscle</strong>), and exogenous MOTS-c treatment replicates many exercise benefits including enhanced physical performance, improved insulin sensitivity, obesity prevention, and extended healthspan. MOTS-c targets skeletal muscle and regulates metabolism via <strong>AMPK activation</strong> and direct nuclear gene regulation.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Structure:</strong> 16-amino acid peptide encoded in mitochondrial 12S rRNA</li>
                      <li><strong>Exercise-induced:</strong> 11.9-fold increase in muscle, 1.6-fold in circulation</li>
                      <li><strong>Exercise mimetic:</strong> Replicates exercise benefits without physical activity</li>
                      <li><strong>Metabolic regulator:</strong> Enhances insulin sensitivity, prevents obesity</li>
                      <li><strong>Physical performance:</strong> Improves capacity at all ages (young to old)</li>
                      <li><strong>Longevity effects:</strong> Late-life treatment extends healthspan and lifespan</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of MOTS-c</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Physical Performance</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Exercise capacity enhancement</li>
                        <li>Endurance and speed improvement</li>
                        <li>Physical decline reversal</li>
                        <li>Muscle homeostasis regulation</li>
                        <li>Age-dependent performance recovery</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Metabolic Optimization</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Insulin sensitivity enhancement</li>
                        <li>Obesity prevention and reversal</li>
                        <li>Glucose metabolism improvement</li>
                        <li>Metabolic homeostasis restoration</li>
                        <li>Diet-induced insulin resistance reversal</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Healthy Aging</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Healthspan extension</li>
                        <li>Lifespan extension (up to 7%)</li>
                        <li>Age-dependent decline reversal</li>
                        <li>Late-life treatment efficacy</li>
                        <li>Mitochondrial function optimization</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Skeletal Muscle Health</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Muscle metabolism regulation</li>
                        <li>Lean mass preservation</li>
                        <li>Fat mass reduction</li>
                        <li>Myoblast stress adaptation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise-Induced Mitokine</CardTitle>
                  <CardDescription>How exercise dramatically increases MOTS-c</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Human studies demonstrate that <strong>exercise induces endogenous MOTS-c expression</strong> in both skeletal muscle and circulation, suggesting it is a key mediator of exercise benefits.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Skeletal Muscle Response</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>11.9-fold increase</strong> immediately after exercise</li>
                        <li>Remains elevated after 4-hour rest</li>
                        <li>Trends toward baseline but sustained elevation</li>
                        <li>Primary site of MOTS-c action</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-teal-600 dark:text-teal-400">Circulating Levels</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>1.6-fold increase</strong> during exercise</li>
                        <li><strong>1.5-fold increase</strong> immediately after</li>
                        <li>Returns to baseline after 4-hour rest</li>
                        <li>Acts as systemic "mitokine" hormone</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical significance:</strong> MOTS-c is a naturally occurring exercise-induced peptide that can be supplemented to provide exercise-like benefits, making it valuable for those unable to exercise or seeking to enhance training adaptations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mitochondrial-Encoded Regulator of Aging</CardTitle>
                  <CardDescription>First mtDNA-encoded peptide shown to regulate lifespan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    MOTS-c represents a paradigm shift in aging biology: <strong>aging is regulated by genes encoded in both nuclear and mitochondrial genomes</strong>. Late-life initiated MOTS-c treatment extends both healthspan and maximum lifespan.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Late-Life Treatment Efficacy</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>23.5 months old:</strong> Treatment initiated (equivalent to ~70 human years)</li>
                        <li><strong>3x per week:</strong> Intermittent dosing schedule</li>
                        <li><strong>Physical capacity:</strong> Significantly increased</li>
                        <li><strong>Healthspan:</strong> Extended functional lifespan</li>
                        <li><strong>Maximum lifespan:</strong> Increased by up to 7%</li>
                        <li><strong>Hazard ratio:</strong> Reduced to 0.654 (lower mortality risk)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Age-Dependent Effects</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Young mice (2 mo.):</strong> Enhanced physical performance</li>
                        <li><strong>Middle-age (12 mo.):</strong> Maintained exercise capacity</li>
                        <li><strong>Old mice (22 mo.):</strong> Reversed age-dependent decline</li>
                        <li><strong>Very old (23.5 mo.):</strong> Extended lifespan when treatment initiated</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Breakthrough finding:</strong> MOTS-c is effective even when started in very late life, suggesting it's never too late to benefit from this mitochondrial-encoded longevity factor.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise Mimetic Properties</CardTitle>
                  <CardDescription>Replicates exercise benefits without physical activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    MOTS-c treatment provides <strong>exercise-like benefits</strong> including enhanced physical performance, improved metabolic health, and increased insulin sensitivity - even in the absence of exercise training.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Physical Performance Improvements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Treadmill running:</strong> Significantly increased time and distance</li>
                        <li><strong>Sprint capacity:</strong> 100% reached final stage (vs. 16.6% control)</li>
                        <li><strong>Rotarod test:</strong> Improved motor coordination and capacity</li>
                        <li><strong>Power output:</strong> Increased joules during exercise</li>
                        <li><strong>Effective at all ages:</strong> Young, middle-age, and old mice</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Metabolic Benefits</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Obesity prevention:</strong> Reduced fat gain on high-fat diet</li>
                        <li><strong>Lean mass increase:</strong> Preserved and enhanced muscle</li>
                        <li><strong>Insulin sensitivity:</strong> Reversed age- and diet-induced resistance</li>
                        <li><strong>Glucose metabolism:</strong> Enhanced cellular glucose flux</li>
                        <li><strong>Independent of body weight:</strong> Performance gains not explained by weight</li>
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
                  <CardDescription>How MOTS-c mimics exercise and regulates metabolism</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">AMPK Activation</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>activates AMPK (AMP-activated protein kinase)</strong>, the master regulator of cellular energy metabolism, by increasing AICAR levels more than 20-fold.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>AICAR accumulation:</strong> 20-fold increase (potent AMPK activator)</li>
                        <li><strong>AMPK phosphorylation:</strong> Enhanced activation</li>
                        <li><strong>Fatty acid oxidation:</strong> Increased fat burning</li>
                        <li><strong>Glucose utilization:</strong> Enhanced cellular glucose flux</li>
                        <li><strong>Energy metabolism:</strong> Coordinated cellular energy optimization</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Folate-Methionine Cycle Inhibition</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>inhibits the folate cycle and de novo purine biosynthesis</strong>, leading to AICAR accumulation and metabolic reprogramming.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>5-methyl-THF decrease:</strong> Folate cycle inhibition</li>
                        <li><strong>Methionine reduction:</strong> Methionine cycle modulation</li>
                        <li><strong>Homocysteine increase:</strong> Metabolic intermediate accumulation</li>
                        <li><strong>Purine synthesis:</strong> De novo biosynthesis inhibition</li>
                        <li><strong>AICAR accumulation:</strong> Leads to AMPK activation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Nuclear Gene Regulation</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>translocates to the nucleus and directly regulates adaptive nuclear gene expression</strong>, coordinating mitochondrial-nuclear communication.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Nuclear translocation:</strong> Enters nucleus to regulate genes</li>
                        <li><strong>Metabolism genes:</strong> Regulates metabolic pathways</li>
                        <li><strong>Proteostasis genes:</strong> Enhances protein quality control</li>
                        <li><strong>Stress response:</strong> Coordinates adaptive responses</li>
                        <li><strong>Mitochondrial-nuclear communication:</strong> Bidirectional signaling</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Skeletal Muscle Targeting</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>primarily targets skeletal muscle</strong>, the body's largest metabolic organ and primary site of insulin-mediated glucose disposal.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Skeletal muscle metabolism:</strong> Primary target organ</li>
                        <li><strong>Insulin sensitivity:</strong> Enhanced glucose uptake</li>
                        <li><strong>Glycolysis/PPP regulation:</strong> Metabolic pathway modulation</li>
                        <li><strong>Amino acid metabolism:</strong> Protein metabolism optimization</li>
                        <li><strong>Myoblast adaptation:</strong> Enhanced stress resistance</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">HSF1-Dependent Stress Adaptation</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>enhances myoblast adaptation to metabolic stress in an HSF1-dependent manner</strong>, improving cellular resilience.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>HSF1 activation:</strong> Heat shock factor 1 pathway</li>
                        <li><strong>Metabolic stress adaptation:</strong> Enhanced cellular resilience</li>
                        <li><strong>Proteostasis:</strong> Protein quality control improvement</li>
                        <li><strong>Stress resistance:</strong> Cellular survival enhancement</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Insulin Sensitivity Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>reverses age-dependent and diet-induced insulin resistance</strong> by enhancing skeletal muscle insulin action.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Skeletal muscle insulin action:</strong> Primary site of glucose disposal</li>
                        <li><strong>Age-dependent resistance:</strong> Reverses aging-related decline</li>
                        <li><strong>Diet-induced resistance:</strong> Prevents high-fat diet effects</li>
                        <li><strong>Glucose metabolism:</strong> Enhanced cellular glucose flux</li>
                        <li><strong>Metabolic homeostasis:</strong> Systemic metabolic balance</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Obesity Prevention</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c <strong>prevents diet-induced obesity</strong> by reducing fat accumulation while preserving or increasing lean mass.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Fat gain reduction:</strong> Significantly retarded on high-fat diet</li>
                        <li><strong>Lean mass increase:</strong> Preserved and enhanced muscle</li>
                        <li><strong>Body composition:</strong> Improved fat-to-lean ratio</li>
                        <li><strong>No food intake change:</strong> Effect independent of caloric restriction</li>
                        <li><strong>Metabolic efficiency:</strong> Enhanced energy expenditure</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Mitochondrial-Nuclear Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        MOTS-c represents a novel mechanism of <strong>retrograde signaling from mitochondria to nucleus</strong>, coordinating cellular adaptation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mitochondrial origin:</strong> Encoded in mtDNA 12S rRNA</li>
                        <li><strong>Cytoplasmic translation:</strong> Uses standard genetic code</li>
                        <li><strong>Nuclear translocation:</strong> Enters nucleus to regulate genes</li>
                        <li><strong>Bidirectional signaling:</strong> Coordinates mitochondrial-nuclear crosstalk</li>
                        <li><strong>Adaptive homeostasis:</strong> Cellular stress response coordination</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Molecular Targets</CardTitle>
                  <CardDescription>Specific pathways and metabolites regulated by MOTS-c</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Energy Metabolism Pathways</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>AMPK (AMP-activated protein kinase)</li>
                        <li>Glycolysis and pentose phosphate pathway (PPP)</li>
                        <li>Fatty acid oxidation</li>
                        <li>Glucose utilization and insulin signaling</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Metabolic Intermediates</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>AICAR (20-fold increase - AMPK activator)</li>
                        <li>5-methyl-tetrahydrofolate (5Me-THF) - decreased</li>
                        <li>Methionine - decreased</li>
                        <li>Homocysteine - increased</li>
                        <li>Purine synthesis intermediates</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Nuclear Gene Targets</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Metabolism-related genes</li>
                        <li>Proteostasis genes</li>
                        <li>Stress response genes</li>
                        <li>HSF1-dependent genes</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Amino Acid Metabolism</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Folate-methionine cycle</li>
                        <li>One-carbon metabolism</li>
                        <li>Amino acid utilization in skeletal muscle</li>
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
                        <h4 className="font-semibold">Exercise-Induced Regulator of Aging & Physical Decline</h4>
                        <Badge variant="outline" className="text-xs">182 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Reynolds JC et al. (2021)</strong> - Nature Communications
                      </p>
                      <p className="text-sm">
                        Landmark study demonstrating that <strong>MOTS-c is exercise-induced (11.9-fold in muscle) and significantly enhances physical performance in young, middle-age, and old mice</strong>. Late-life treatment extended healthspan and lifespan.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Exercise-induced:</strong> 11.9-fold increase in skeletal muscle</li>
                        <li><strong>Physical performance:</strong> Enhanced at all ages (2, 12, 22 mo.)</li>
                        <li><strong>Late-life efficacy:</strong> Treatment started at 23.5 months</li>
                        <li><strong>Lifespan extension:</strong> Increased maximum lifespan by 7%</li>
                        <li><strong>Healthspan:</strong> Improved physical capacity in old age</li>
                        <li><strong>Nuclear regulation:</strong> Regulates metabolism and proteostasis genes</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Metabolic Homeostasis & Obesity/Insulin Resistance Reversal</h4>
                        <Badge variant="outline" className="text-xs">767 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Lee C et al. (2015)</strong> - Cell Metabolism
                      </p>
                      <p className="text-sm">
                        Groundbreaking discovery that <strong>MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance</strong>. Targets skeletal muscle via AMPK activation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mitochondrial-encoded:</strong> 16-aa peptide from 12S rRNA</li>
                        <li><strong>Skeletal muscle targeting:</strong> Primary metabolic organ</li>
                        <li><strong>AMPK activation:</strong> Via 20-fold AICAR increase</li>
                        <li><strong>Insulin resistance:</strong> Reversed age- and diet-induced</li>
                        <li><strong>Obesity prevention:</strong> Prevented diet-induced obesity</li>
                        <li><strong>Glucose metabolism:</strong> Enhanced cellular glucose flux</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c: Promising Mitochondrial-Derived Peptide</h4>
                        <Badge variant="outline" className="text-xs">44 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Wan W et al. (2023)</strong> - J Transl Med
                      </p>
                      <p className="text-sm">
                        Comprehensive review of <strong>MOTS-c effects and mechanisms related to stress, metabolism, and aging</strong>. Highlighted therapeutic potential across multiple conditions.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Stress homeostasis regulation</li>
                        <li>Energy metabolism coordination</li>
                        <li>Aging process modulation</li>
                        <li>Therapeutic potential for metabolic diseases</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c and Extended Lifespan</h4>
                        <Badge variant="outline" className="text-xs">114 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Fuku N et al. (2015)</strong> - Aging Cell
                      </p>
                      <p className="text-sm">
                        Suggested <strong>biological link between MOTS-c and extended lifespan through putative endocrine action</strong> of this mitokine.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Endocrine action as "mitokine"</li>
                        <li>Longevity association</li>
                        <li>Systemic metabolic regulation</li>
                        <li>Age-related decline modulation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c Regulation in Aging Men</h4>
                        <Badge variant="outline" className="text-xs">57 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>D'Souza RF et al. (2020)</strong> - Am J Physiol Endocrinol Metab
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>circulating MOTS-c reduced with age in healthy aging men</strong>, but skeletal muscle expression maintained.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Age-dependent decline in plasma</li>
                        <li>Skeletal muscle expression preserved</li>
                        <li>Potential biomarker of aging</li>
                        <li>Therapeutic supplementation rationale</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c in Human Health and Aging</h4>
                        <Badge variant="outline" className="text-xs">36 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Mohtashami Z et al. (2022)</strong> - Int J Mol Sci
                      </p>
                      <p className="text-sm">
                        Review examining <strong>latest findings on biological effects of MOTS-c as nuclear regulatory peptide</strong>, focusing on role in aging and age-related diseases.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Nuclear regulatory functions</li>
                        <li>Aging process modulation</li>
                        <li>Age-related disease prevention</li>
                        <li>Therapeutic applications</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c and Exercise</h4>
                        <Badge variant="outline" className="text-xs">24 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yoon TK et al. (2022)</strong> - Diabetes Metab J
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>MOTS-c is most associated with exercise among mitochondrial-derived peptides</strong>. Exercise controls MOTS-c expression, and MOTS-c controls exercise performance.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Bidirectional exercise-MOTS-c relationship</li>
                        <li>Exercise-induced expression</li>
                        <li>Performance enhancement</li>
                        <li>Mitohormesis mechanism</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c Prevents Metabolic Disorders</h4>
                        <Badge variant="outline" className="text-xs">22 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Kong BS et al. (2023)</strong> - Diabetes Metab J
                      </p>
                      <p className="text-sm">
                        Reported that <strong>MOTS-c reduces insulin resistance by targeting skeletal muscle</strong> in mice fed high-fat diet. Highlighted mtDNA polymorphism effects.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Skeletal muscle insulin sensitivity</li>
                        <li>High-fat diet protection</li>
                        <li>mtDNA polymorphism influence</li>
                        <li>Personalized medicine potential</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">MOTS-c as Equal Opportunity Insulin Sensitizer</h4>
                        <Badge variant="outline" className="text-xs">19 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Kim SJ et al. (2019)</strong> - Exp Mol Med
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>MOTS-c increases NAD+ levels and SIRT1 is partially involved in MOTS-c actions</strong>. Increases insulin sensitivity in skeletal muscle.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>NAD+ level elevation</li>
                        <li>SIRT1 pathway involvement</li>
                        <li>Insulin sensitivity enhancement</li>
                        <li>Metabolic homeostasis</li>
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
                      <h4 className="font-semibold">Metabolic Disorders</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Type 2 diabetes</li>
                        <li>Insulin resistance</li>
                        <li>Obesity and metabolic syndrome</li>
                        <li>Dyslipidemia</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Physical Performance</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Exercise capacity enhancement</li>
                        <li>Athletic performance optimization</li>
                        <li>Age-related physical decline</li>
                        <li>Sarcopenia prevention</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Healthy Aging</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Healthspan extension</li>
                        <li>Lifespan extension</li>
                        <li>Age-related disease prevention</li>
                        <li>Functional capacity maintenance</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Dysfunction</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Mitochondrial diseases</li>
                        <li>Energy metabolism disorders</li>
                        <li>Oxidative stress conditions</li>
                        <li>Cellular aging</li>
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
                      <strong>Important:</strong> MOTS-c is not FDA-approved as a therapeutic agent. The following protocols are based on research studies and are for healthcare provider reference only. All use must be under physician supervision.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Standard Protocol (Daily Dosing)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Physical Performance & Metabolic Optimization:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 5-15 mg per injection (human equivalent: ~0.4-1.2 mg/kg)</li>
                          <li><strong>Frequency:</strong> Daily subcutaneous or intramuscular</li>
                          <li><strong>Duration:</strong> 2-4 week cycles</li>
                          <li><strong>Timing:</strong> Morning or pre-exercise</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence (Mouse Studies):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>5 mg/kg/day: Improved physical performance</li>
                          <li>15 mg/kg/day: Superior running capacity, 100% sprint completion</li>
                          <li>10-14 days: Significant performance improvements</li>
                          <li>Effective at all ages (young to old)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Intermittent Protocol (Longevity/Healthspan)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Late-Life Healthspan Extension:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 5-15 mg per injection</li>
                          <li><strong>Frequency:</strong> 3 times per week (e.g., Mon/Wed/Fri)</li>
                          <li><strong>Duration:</strong> Long-term/continuous</li>
                          <li><strong>Indication:</strong> Healthy aging, longevity optimization</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Late-life initiation:</strong> Effective when started at 23.5 months (very old)</li>
                          <li><strong>Physical capacity:</strong> Significantly increased</li>
                          <li><strong>Lifespan:</strong> Extended maximum lifespan by 7%</li>
                          <li><strong>Hazard ratio:</strong> Reduced to 0.654 (lower mortality)</li>
                        </ul>
                      </div>
                      <Alert className="mt-3 border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20">
                        <AlertCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <AlertDescription className="text-emerald-800 dark:text-emerald-200 text-sm">
                          <strong>Breakthrough:</strong> Effective even when initiated in very late life - never too late to benefit!
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Insulin Sensitivity Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Metabolic Syndrome & Type 2 Diabetes:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 5-15 mg daily</li>
                          <li><strong>Duration:</strong> Minimum 7-14 days for insulin sensitivity</li>
                          <li><strong>Monitoring:</strong> Fasting glucose, insulin, HOMA-IR</li>
                          <li><strong>Combination:</strong> Can be used with exercise and diet</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>7 days: Improved skeletal muscle insulin sensitivity</li>
                          <li>Reversed age-dependent insulin resistance</li>
                          <li>Prevented diet-induced insulin resistance</li>
                          <li>Enhanced glucose metabolism</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Exercise Enhancement Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Athletic Performance & Training Adaptation:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 10-15 mg</li>
                          <li><strong>Timing:</strong> 30-60 minutes pre-exercise</li>
                          <li><strong>Frequency:</strong> Training days or daily</li>
                          <li><strong>Duration:</strong> 2-4 week training blocks</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Benefits:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Enhanced endurance and speed</li>
                          <li>Improved power output</li>
                          <li>Better training adaptations</li>
                          <li>Mimics exercise benefits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for MOTS-c use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Injection Technique</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Subcutaneous or intramuscular</li>
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Monitor injection sites for reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Timing Optimization</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Morning:</strong> General metabolic optimization</li>
                        <li><strong>Pre-exercise:</strong> Performance enhancement</li>
                        <li><strong>Consistent timing:</strong> For best results</li>
                        <li><strong>Intermittent:</strong> 3x/week for longevity</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light</li>
                        <li>Reconstituted: Use within 30 days</li>
                        <li>Lyophilized: Stable at room temp briefly</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Response Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Physical performance tracking</li>
                        <li>Fasting glucose and insulin</li>
                        <li>Body composition analysis</li>
                        <li>Regular physician follow-up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with MOTS-c</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Humanin (Mitochondrial Synergy)</h4>
                      <p className="text-sm">
                        <strong>Complementary mitochondrial-derived peptides.</strong> Humanin protects against age-related decline while MOTS-c enhances metabolic fitness - comprehensive mitochondrial optimization stack.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MOTS-c: 10-15 mg, 3x per week</li>
                        <li>Humanin: 1-5 mg, 3x per week</li>
                        <li>Synergistic longevity and metabolic benefits</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">SS-31/Elamipretide (Mitochondrial Protection)</h4>
                      <p className="text-sm">
                        <strong>Enhanced mitochondrial function.</strong> SS-31 protects mitochondrial membranes while MOTS-c optimizes metabolism - powerful mitochondrial health stack.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MOTS-c: 10-15 mg, 3x per week</li>
                        <li>SS-31: 5-10 mg, daily or 3x per week</li>
                        <li>Comprehensive mitochondrial optimization</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">NAD+ Precursors (Energy Metabolism)</h4>
                      <p className="text-sm">
                        <strong>Synergistic metabolic enhancement.</strong> MOTS-c increases NAD+ levels and works via SIRT1 - combining with NAD+ precursors amplifies metabolic benefits.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MOTS-c: 10-15 mg, 3x per week</li>
                        <li>NMN or NR: 250-500 mg oral, daily</li>
                        <li>Enhanced NAD+/SIRT1 pathway activation</li>
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
                      <strong>Excellent Safety Profile:</strong> Extensive animal studies demonstrate excellent tolerability with minimal side effects. Naturally occurring peptide encoded in mitochondrial DNA.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Known hypersensitivity to MOTS-c</li>
                        <li>Pregnancy and breastfeeding (insufficient safety data)</li>
                        <li>Active malignancy (insufficient data on cancer effects)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Children under 18 (no pediatric safety data)</li>
                        <li>Severe liver or kidney disease (metabolism/excretion unclear)</li>
                        <li>Uncontrolled diabetes (monitor glucose closely)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical</li>
                        <li>Baseline metabolic panel (glucose, insulin, lipids)</li>
                        <li>Body composition analysis</li>
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
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Minimal Side Effects (Animal Studies)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Injection site reactions:</strong> Mild, transient</li>
                        <li><strong>Overall:</strong> Excellent tolerability in extensive studies</li>
                        <li><strong>No serious adverse events:</strong> Reported in research</li>
                        <li><strong>Long-term safety:</strong> Late-life treatment well-tolerated</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Theoretical Concerns (Limited Human Data)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Hypoglycemia:</strong> Possible with enhanced insulin sensitivity</li>
                        <li><strong>Allergic reactions:</strong> Possible with any peptide</li>
                        <li><strong>Long-term human effects:</strong> Limited data</li>
                        <li><strong>Drug interactions:</strong> Not well-studied</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Advantages of Natural Peptide</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Endogenous peptide:</strong> Naturally encoded in mtDNA</li>
                        <li><strong>Exercise-induced:</strong> Mimics natural physiological process</li>
                        <li><strong>Broad benefits:</strong> Multiple health improvements</li>
                        <li><strong>Late-life efficacy:</strong> Effective even when started late</li>
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
                      <h4 className="font-semibold">Metabolic Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Fasting glucose and insulin (baseline, monthly)</li>
                        <li>HOMA-IR (insulin resistance index)</li>
                        <li>Lipid panel (triglycerides, HDL, LDL)</li>
                        <li>HbA1c (if diabetic or pre-diabetic)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Physical Performance Tracking</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Exercise capacity testing</li>
                        <li>Strength and endurance measurements</li>
                        <li>Physical function assessments</li>
                        <li>Quality of life questionnaires</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Body Composition</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>DEXA or bioimpedance analysis</li>
                        <li>Lean mass and fat mass tracking</li>
                        <li>Visceral fat assessment</li>
                        <li>Monthly or quarterly measurements</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Safety Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Injection site inspection</li>
                        <li>Adverse event tracking</li>
                        <li>Complete blood count (quarterly)</li>
                        <li>Physician follow-up (monthly initially)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade MOTS-c</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Only use MOTS-c from verified compounding pharmacies with proper quality control. Gray and black market sources pose serious health risks.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                        <li><strong>Sequence verification:</strong> Mass spectrometry confirmation (16-aa)</li>
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
                      <li><strong>Research status:</strong> Investigational for metabolic/aging conditions</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> MOTS-c is not FDA-approved and is considered investigational. Use must be under physician supervision through licensed compounding pharmacies.
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
          <Card className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade MOTS-c?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity MOTS-c from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://drspeptides.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-emerald-600 bg-background px-8 py-3 text-sm font-medium text-emerald-600 shadow-sm transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
                      View Exercise Mimetic Stack
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
          <p>© 2024 Peptide Education Hub. Educational resource supporting DrsPeptides.com</p>
          <p className="mt-2">
            This website is for educational purposes only and does not constitute medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
