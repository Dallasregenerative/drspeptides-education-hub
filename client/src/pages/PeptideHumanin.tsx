import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PeptideHumanin() {
  usePageTitle("Humanin - Mitochondrial-Derived Longevity Peptide", {
    description: "Comprehensive guide to humanin mitochondrial peptide for neuroprotection and longevity. Mechanisms, research data, and clinical considerations."
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
            <PrintButton title="Humanin - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 via-background to-indigo-50 dark:from-purple-950/20 dark:via-background dark:to-indigo-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800">
              Longevity & Neuroprotection Pioneer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Humanin
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              First mitochondrial-derived peptide discovered - extends lifespan, protects against Alzheimer's disease, inhibits apoptosis, and improves healthspan. Centenarians' offspring have significantly elevated levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">404+</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2001</div>
                <div className="text-sm text-muted-foreground">First Discovery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">+19%</div>
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
              <strong>Investigational Peptide:</strong> Humanin is not FDA-approved as a therapeutic agent. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
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
                  <CardTitle>What is Humanin?</CardTitle>
                  <CardDescription>First mitochondrial-derived peptide with longevity and neuroprotection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Humanin is a <strong>24-amino acid peptide encoded in the mitochondrial 16S rRNA gene</strong> - the first member of a new family of mitochondrial-derived peptides (MDPs). Discovered in 2001 during screening for factors protecting against Alzheimer's disease, humanin is <strong>highly conserved across species</strong> and exhibits both neuroprotective and cytoprotective properties.
                  </p>
                  <p>
                    Humanin is the <strong>first mitochondrial-encoded peptide shown to extend lifespan</strong> (in C. elegans) and improve healthspan. Remarkably, <strong>children of centenarians have significantly higher humanin levels</strong> than age-matched controls, and the longest-lived rodent (naked mole-rat) maintains stable humanin levels throughout life while other species show age-related decline.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Structure:</strong> 24-amino acid peptide (MAPRGFSCLLLLTSEIDLPVKRRA)</li>
                      <li><strong>Origin:</strong> Encoded in mitochondrial 16S rRNA gene</li>
                      <li><strong>Conservation:</strong> Highly conserved from nematodes to humans</li>
                      <li><strong>Lifespan:</strong> First MDP shown to extend lifespan (+19% in worms)</li>
                      <li><strong>Longevity marker:</strong> Elevated in centenarians' offspring</li>
                      <li><strong>Neuroprotection:</strong> Protects against ALL familial AD genes</li>
                      <li><strong>Cytoprotection:</strong> Inhibits BAX-mediated apoptosis</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of humanin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Longevity & Healthspan</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Lifespan extension (first MDP proven)</li>
                        <li>Healthspan improvement</li>
                        <li>Age-related disease prevention</li>
                        <li>Metabolic health optimization</li>
                        <li>Visceral fat reduction</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Neuroprotection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Alzheimer's disease protection</li>
                        <li>Familial AD gene antagonism</li>
                        <li>Amyloid-β toxicity prevention</li>
                        <li>Cognitive decline reversal</li>
                        <li>Stroke protection</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Cytoprotection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>BAX-mediated apoptosis inhibition</li>
                        <li>Oxidative stress protection</li>
                        <li>Toxic insult resistance</li>
                        <li>Mitochondrial dysfunction prevention</li>
                        <li>Cell survival enhancement</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Metabolic Health</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>IGF-I reduction</li>
                        <li>Leptin modulation</li>
                        <li>Body composition improvement</li>
                        <li>Lean mass preservation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Centenarian Connection</CardTitle>
                  <CardDescription>Humanin as a longevity biomarker</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    One of the most remarkable findings in humanin research: <strong>children of centenarians have significantly higher circulating humanin levels</strong> than age-matched controls, suggesting humanin is a heritable longevity factor.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Centenarians' Offspring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Significantly elevated</strong> humanin levels</li>
                        <li>Higher likelihood of becoming centenarians themselves</li>
                        <li>Heritable longevity advantage</li>
                        <li>Protected against age-related diseases</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Age-Related Decline</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mice:</strong> ~40% decrease over 18 months</li>
                        <li><strong>Rhesus macaques:</strong> Dramatic decline 19-25 years</li>
                        <li><strong>Naked mole-rat:</strong> Stable over 2 decades (negligible senescence)</li>
                        <li><strong>Humans:</strong> Generally decline with age</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical significance:</strong> Humanin levels may serve as a biomarker of aging and longevity potential. Therapeutic supplementation could compensate for age-related decline.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lifespan Extension - First Proven MDP</CardTitle>
                  <CardDescription>Humanin extends lifespan in C. elegans</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Humanin is the <strong>first mitochondrial-derived peptide shown to extend lifespan</strong>, demonstrating that aging is regulated by genes encoded in both nuclear and mitochondrial genomes.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">C. elegans Lifespan Extension</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>+19% lifespan increase:</strong> 19.0 days vs. 17.7 days (wild-type)</li>
                        <li><strong>daf-16/FOXO dependent:</strong> Requires insulin/IGF signaling pathway</li>
                        <li><strong>Consistent effect:</strong> Small but significant across multiple trials</li>
                        <li><strong>Phenotypic changes:</strong> Decreased body size, fat, reproduction</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Transgenic Mouse Phenotypes</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Phenocopy worms:</strong> Similar changes in body size and fertility</li>
                        <li><strong>Toxic insult protection:</strong> Cyclophosphamide resistance</li>
                        <li><strong>Lymphocyte preservation:</strong> Protected from chemotherapy effects</li>
                        <li><strong>Germ cell protection:</strong> Reduced apoptosis under stress</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mechanism:</strong> Lifespan extension is mediated through the conserved insulin/IGF signaling pathway (daf-16/FOXO), linking humanin to fundamental aging mechanisms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Middle-Age Treatment - Healthspan Improvements</CardTitle>
                  <CardDescription>HNG (potent humanin analogue) improves metabolic health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Treating <strong>18-month-old (middle-aged) mice twice weekly with HNG</strong> (humanin analogue) for 14 months produced significant healthspan improvements without extending lifespan at this dose.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Body Composition Improvements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Body weight:</strong> Significantly reduced (without food intake change)</li>
                        <li><strong>Visceral fat:</strong> Decreased</li>
                        <li><strong>Lean body mass:</strong> Increased</li>
                        <li><strong>Subcutaneous fat:</strong> No change</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Metabolic Markers</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>IGF-I:</strong> Significant decrease (longevity marker)</li>
                        <li><strong>Leptin:</strong> Trend toward decrease</li>
                        <li><strong>Inflammatory markers:</strong> Reduced</li>
                        <li><strong>Healthspan parameters:</strong> Overall improvement</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical relevance:</strong> Middle-age initiation of humanin treatment improves metabolic healthspan, suggesting therapeutic potential for age-related metabolic decline.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alzheimer's Disease Protection</CardTitle>
                  <CardDescription>Comprehensive neuroprotection against AD-relevant insults</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Humanin was <strong>discovered in 2001 during screening for factors protecting against Alzheimer's disease</strong>. It provides comprehensive neuroprotection against ALL familial AD genes and amyloid-β toxicity.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Familial AD Gene Protection</h4>
                      <p className="text-sm">Humanin antagonizes neurotoxicity from ALL familial AD mutations:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>APP mutations:</strong> V642I, V642F, V642G, A617G, L648P, K595N/M596L</li>
                        <li><strong>Presenilin-1:</strong> M146L, A246E, L286V, C410Y, H163R</li>
                        <li><strong>Presenilin-2:</strong> N141I</li>
                        <li><strong>Unique specificity:</strong> Only humanin protects against ALL variants</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Amyloid-β Protection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Aβ1-43:</strong> Complete protection</li>
                        <li><strong>Aβ1-42:</strong> Neuroprotection</li>
                        <li><strong>Aβ25-35:</strong> Toxicity prevention</li>
                        <li><strong>APP stimulation:</strong> Anti-APP antibody protection</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Clinical Evidence</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>CSF levels:</strong> Significantly lower in AD patients vs. controls</li>
                        <li><strong>Cognitive decline:</strong> HNG delays decline in mice</li>
                        <li><strong>Hippocampal acetylcholine:</strong> Improved in AD models</li>
                        <li><strong>Stroke protection:</strong> Novel neuroprotective agent</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Unique advantage:</strong> Unlike other neurotrophic factors (ADNF, IGF-I, bFGF) that only protect against Aβ, humanin is the ONLY factor that protects against all familial AD genes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Naked Mole-Rat - Model of Negligible Senescence</CardTitle>
                  <CardDescription>Stable humanin levels in longest-lived rodent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    The naked mole-rat (Heterocephalus glaber) is the <strong>longest-lived rodent (30+ years) with negligible senescence</strong> - no increase in mortality risk with age. Remarkably, humanin levels remain <strong>stable over 2 decades</strong> while declining dramatically in other species.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Naked Mole-Rat</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Stable humanin:</strong> No decline over 20+ years</li>
                        <li><strong>4-fold higher:</strong> Than young mice baseline</li>
                        <li><strong>Negligible senescence:</strong> No age-related mortality increase</li>
                        <li><strong>Exceptional longevity:</strong> 30+ years (vs. 2-3 for mice)</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Short-Lived Species</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mice:</strong> 40% decline over 18 months</li>
                        <li><strong>Rhesus macaques:</strong> Dramatic decline 19-25 years</li>
                        <li><strong>Humans:</strong> Generally decline with age</li>
                        <li><strong>Correlation:</strong> Humanin decline tracks with aging</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Longevity insight:</strong> Stable humanin levels in the naked mole-rat suggest that maintaining humanin throughout life may be a key mechanism of negligible senescence and exceptional longevity.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How humanin protects cells and extends lifespan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">BAX Inhibition (Anti-Apoptotic)</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin <strong>directly binds and inhibits BAX</strong>, the pro-apoptotic protein that permeabilizes mitochondrial membranes to trigger cell death.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>BAX binding:</strong> Induces conformational changes in BAX</li>
                        <li><strong>Fiber sequestration:</strong> Sequesters BAX into fibers</li>
                        <li><strong>MOMP prevention:</strong> Prevents mitochondrial outer-membrane permeabilization</li>
                        <li><strong>Apoptosis inhibition:</strong> Blocks BAX-mediated cell death</li>
                        <li><strong>Specificity:</strong> Also inhibits BimEL but not BimL/BimS</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">IGFBP-3 Binding</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin <strong>binds insulin-like growth factor binding protein 3 (IGFBP-3)</strong>, modulating IGF signaling and cellular survival pathways.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>IGFBP-3 interaction:</strong> Modulates IGF-I signaling</li>
                        <li><strong>Insulin/IGF pathway:</strong> Conserved longevity mechanism</li>
                        <li><strong>daf-16/FOXO:</strong> Lifespan extension requires this pathway</li>
                        <li><strong>IGF-I reduction:</strong> Decreases circulating IGF-I (longevity marker)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Familial AD Gene Antagonism</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin <strong>antagonizes neurotoxicity from ALL familial Alzheimer's disease genes</strong> through multiple protective mechanisms.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>APP mutants:</strong> Blocks toxicity from all APP variants</li>
                        <li><strong>Presenilin mutants:</strong> Protects against PS1 and PS2 mutations</li>
                        <li><strong>Amyloid-β:</strong> Prevents Aβ-induced neurotoxicity</li>
                        <li><strong>Unique specificity:</strong> Only humanin protects against ALL AD genes</li>
                        <li><strong>Structure-activity:</strong> Cys8 and Ser14 essential for protection</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Cytoprotection Against Toxic Insults</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin provides <strong>broad cytoprotection</strong> against multiple forms of cellular stress and toxic insults.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Oxidative stress:</strong> Protects against ROS damage</li>
                        <li><strong>Serum starvation:</strong> Enhances survival under nutrient deprivation</li>
                        <li><strong>Hypoxia:</strong> Protects against oxygen deprivation</li>
                        <li><strong>Heat shock:</strong> Protects yeast from lethal heat stress</li>
                        <li><strong>Chemotherapy:</strong> Cyclophosphamide toxicity protection</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Mitochondrial-Nuclear Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        As a mitochondrial-derived peptide, humanin represents <strong>retrograde signaling from mitochondria to nucleus</strong>, coordinating cellular responses.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mitochondrial origin:</strong> Encoded in 16S rRNA gene</li>
                        <li><strong>Cytoplasmic translation:</strong> Uses standard genetic code</li>
                        <li><strong>Secreted signal:</strong> Acts as endocrine "mitokine"</li>
                        <li><strong>Nuclear effects:</strong> Modulates gene expression</li>
                        <li><strong>Systemic action:</strong> Circulates to affect distant tissues</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Metabolic Regulation</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin <strong>improves metabolic health parameters</strong> including body composition and inflammatory markers.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Visceral fat:</strong> Decreased (without food intake change)</li>
                        <li><strong>Lean mass:</strong> Increased</li>
                        <li><strong>IGF-I:</strong> Reduced (longevity marker)</li>
                        <li><strong>Leptin:</strong> Trend toward decrease</li>
                        <li><strong>Inflammation:</strong> Reduced inflammatory markers</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Cardiovascular Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin <strong>protects against cardiovascular disease</strong> through anti-apoptotic and anti-inflammatory mechanisms.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Atherosclerosis:</strong> Protects against plaque formation</li>
                        <li><strong>Stroke:</strong> Novel neuroprotective agent</li>
                        <li><strong>Cardiac apoptosis:</strong> Inhibits cardiomyocyte death</li>
                        <li><strong>Endothelial function:</strong> Improves vascular health</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Germ Cell Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        Humanin <strong>protects germ cells from apoptosis</strong> induced by toxic stress, preserving reproductive capacity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cyclophosphamide:</strong> Protected from chemotherapy-induced apoptosis</li>
                        <li><strong>Spermatogenic stages:</strong> Protection across all stages</li>
                        <li><strong>BAX neutralization:</strong> Endogenous humanin binds BAX after stress</li>
                        <li><strong>Fertility preservation:</strong> Maintains reproductive function</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Structure-Activity Relationship</CardTitle>
                  <CardDescription>Essential residues for humanin activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Detailed structure-function studies identified <strong>essential residues</strong> required for humanin's neuroprotective and cytoprotective actions.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Essential Residues</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cys8:</strong> Critical for all protective activities</li>
                        <li><strong>Ser14:</strong> Essential for neuroprotection</li>
                        <li><strong>Pro3 to Pro19:</strong> Core domain responsible for rescue action</li>
                        <li><strong>Seven residues:</strong> Within core domain are essential</li>
                        <li><strong>S14G variant (HNG):</strong> Potent humanin analogue</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Humanin Sequence</h4>
                      <p className="text-sm font-mono bg-background p-2 rounded">
                        MAPRGFSCLLLLTSEIDLPVKRRA
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>24 amino acids</strong></li>
                        <li><strong>75% identity</strong> to naked mole-rat homologue</li>
                        <li><strong>Highly conserved</strong> from nematodes to humans</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Molecular Targets</CardTitle>
                  <CardDescription>Specific proteins and pathways regulated by humanin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Direct Binding Targets</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>BAX:</strong> Pro-apoptotic protein (conformational change, fiber sequestration)</li>
                        <li><strong>IGFBP-3:</strong> Insulin-like growth factor binding protein 3</li>
                        <li><strong>BimEL:</strong> Pro-apoptotic BH3-only protein (but not BimL/BimS)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Signaling Pathways</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Insulin/IGF signaling:</strong> daf-16/FOXO pathway (lifespan extension)</li>
                        <li><strong>Apoptosis pathway:</strong> BAX/mitochondrial death cascade</li>
                        <li><strong>Stress response:</strong> Cellular adaptation mechanisms</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Disease-Related Targets</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>APP mutants:</strong> All familial AD variants</li>
                        <li><strong>Presenilin mutants:</strong> PS1 and PS2 mutations</li>
                        <li><strong>Amyloid-β:</strong> Aβ1-43, Aβ1-42, Aβ25-35</li>
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
                        <h4 className="font-semibold">Humanin Regulates Lifespan and Healthspan</h4>
                        <Badge variant="outline" className="text-xs">111 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yen K et al. (2020)</strong> - Aging
                      </p>
                      <p className="text-sm">
                        Landmark study demonstrating that <strong>humanin overexpression extends lifespan in C. elegans (+19%) and improves healthspan in mice</strong>. Centenarians' offspring have significantly higher humanin levels.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Lifespan extension:</strong> +19% in C. elegans (19.0 vs. 17.7 days)</li>
                        <li><strong>daf-16 dependent:</strong> Requires insulin/IGF signaling pathway</li>
                        <li><strong>Centenarians' offspring:</strong> Significantly elevated humanin</li>
                        <li><strong>Naked mole-rat:</strong> Stable levels over 2 decades</li>
                        <li><strong>Middle-age treatment:</strong> Improved metabolic health</li>
                        <li><strong>Disease correlation:</strong> Low in AD and MELAS patients</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Neuroprotection Against Alzheimer's Disease</h4>
                        <Badge variant="outline" className="text-xs">293 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Hashimoto Y et al. (2001)</strong> - J Neurosci
                      </p>
                      <p className="text-sm">
                        Original discovery demonstrating that <strong>humanin antagonizes neurotoxicity from ALL familial AD genes and amyloid-β peptides</strong>. Only humanin (not ADNF, IGF-I, or bFGF) protects against all AD-relevant insults.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>All APP mutants:</strong> V642I/F/G, A617G, L648P, K595N/M596L</li>
                        <li><strong>All PS1 mutants:</strong> M146L, A246E, L286V, C410Y, H163R</li>
                        <li><strong>PS2 mutants:</strong> N141I</li>
                        <li><strong>All Aβ peptides:</strong> Aβ1-43, Aβ1-42, Aβ25-35</li>
                        <li><strong>Structure-activity:</strong> Cys8 and Ser14 essential</li>
                        <li><strong>Unique specificity:</strong> Only humanin protects against ALL</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Humanin in Cardiovascular Disorders</h4>
                        <Badge variant="outline" className="text-xs">177 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Barreca A et al. (2011)</strong> - J Mol Endocrinol
                      </p>
                      <p className="text-sm">
                        Comprehensive review of <strong>humanin's emerging role in cardiovascular disease</strong>. Protects cells from oxidative stress, serum starvation, hypoxia, and improves cardiovascular outcomes.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Oxidative stress protection</li>
                        <li>Serum starvation survival</li>
                        <li>Hypoxia resistance</li>
                        <li>Cardiovascular disease improvement</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Humanin Novel Neuroprotective Agent Against Stroke</h4>
                        <Badge variant="outline" className="text-xs">212 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Xu X et al. (2006)</strong> - Stroke
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>humanin is a novel neuroprotective agent against stroke</strong>. Best known for suppressing neuronal cell death induced by AD-related insults.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Stroke neuroprotection</li>
                        <li>Neuronal cell death suppression</li>
                        <li>Familial AD protein protection</li>
                        <li>Therapeutic potential for cerebrovascular disease</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Cytoprotective Peptide Humanin Binds and Inhibits Proapoptotic Bcl-2/Bax Family Protein BimEL</h4>
                        <Badge variant="outline" className="text-xs">145 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Luciano F et al. (2005)</strong> - J Biol Chem
                      </p>
                      <p className="text-sm">
                        Identified that <strong>humanin binds and inhibits BimEL</strong> (but not BimL/BimS), expanding understanding of humanin's anti-apoptotic mechanisms.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>BimEL binding and inhibition</li>
                        <li>Specificity for BimEL (not BimL/BimS)</li>
                        <li>Apoptosis protection</li>
                        <li>Gene transfection studies</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Mitochondria-Derived Peptides in Aging and Healthspan</h4>
                        <Badge variant="outline" className="text-xs">97 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Miller B et al. (2022)</strong> - J Clin Invest
                      </p>
                      <p className="text-sm">
                        Comprehensive review showing <strong>humanin mitigates Alzheimer's disease pathology in rodents</strong>, and its levels/genetic variation associate with age and longevity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>AD pathology mitigation in rodents</li>
                        <li>Age and longevity association</li>
                        <li>Genetic variation effects</li>
                        <li>Therapeutic potential</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Humanin Prevents Age-Related Cognitive Decline</h4>
                        <Badge variant="outline" className="text-xs">91 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yen K et al. (2018)</strong> - Sci Rep
                      </p>
                      <p className="text-sm">
                        Mounting evidence that <strong>humanin and other MDPs play a role in several age-related conditions</strong> including cognitive decline prevention.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cognitive decline prevention in mice</li>
                        <li>Age-related condition protection</li>
                        <li>MDP family effects</li>
                        <li>Therapeutic applications</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Mitochondrial-Derived Peptides in Aging and Age-Related Diseases</h4>
                        <Badge variant="outline" className="text-xs">70 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Kim SJ et al. (2020)</strong> - GeroScience
                      </p>
                      <p className="text-sm">
                        Review demonstrating that <strong>decline in MDP levels contributes to aging and age-related diseases</strong>, with humanin as key example.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MDP decline with aging</li>
                        <li>Age-related disease contribution</li>
                        <li>Therapeutic supplementation rationale</li>
                        <li>Longevity mechanisms</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Humanin Released by Astrocytes</h4>
                        <Badge variant="outline" className="text-xs">64 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Zárate SC et al. (2019)</strong> - Front Aging Neurosci
                      </p>
                      <p className="text-sm">
                        Demonstrated that <strong>humanin is localized in tissues with high metabolic rate and expression decreases with age</strong>. Found in glial cells in brain.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>High metabolic rate tissues</li>
                        <li>Age-dependent decline</li>
                        <li>Brain glial cell expression</li>
                        <li>Astrocyte release</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Humanin Induces Conformational Changes in BAX</h4>
                        <Badge variant="outline" className="text-xs">39 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Morris DL et al. (2019)</strong> - Proc Natl Acad Sci
                      </p>
                      <p className="text-sm">
                        Mechanistic study showing <strong>humanin induces conformational changes in BAX and sequesters it into fibers</strong>, preventing mitochondrial outer-membrane permeabilization.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>BAX conformational changes</li>
                        <li>Fiber sequestration</li>
                        <li>MOMP prevention</li>
                        <li>Anti-apoptotic mechanism</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Humanin and Alzheimer's Disease: Beginning of New Era</h4>
                        <Badge variant="outline" className="text-xs">35 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Niikura T et al. (2022)</strong> - Neurochem Int
                      </p>
                      <p className="text-sm">
                        Major conclusions: <strong>Humanin exhibits multiple intracellular and extracellular anti-cell death actions</strong> and antagonizes various AD-associated insults.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Multiple anti-cell death actions</li>
                        <li>Intracellular and extracellular effects</li>
                        <li>AD-associated insult antagonism</li>
                        <li>Therapeutic development potential</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Cytoprotective Role of Humanin in Lens Epithelial Cells</h4>
                        <Badge variant="outline" className="text-xs">24 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yang H et al. (2020)</strong> - Mol Med Rep
                      </p>
                      <p className="text-sm">
                        Demonstrated <strong>humanin's cytoprotective role extends to lens epithelial cells</strong>, suppressing apoptosis by interfering with BAX activation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Lens epithelial cell protection</li>
                        <li>BAX activation interference</li>
                        <li>Apoptosis suppression</li>
                        <li>Broad cytoprotective effects</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Neuroprotective Action of Humanin Analogues</h4>
                        <Badge variant="outline" className="text-xs">14 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Karachaliou CE et al. (2023)</strong> - Biology
                      </p>
                      <p className="text-sm">
                        Review presenting <strong>research results supporting neuroprotective action of humanin and specific humanin analogues</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Humanin analogue development</li>
                        <li>Neuroprotective mechanisms</li>
                        <li>Structure-activity relationships</li>
                        <li>Therapeutic optimization</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Neuroprotective Role of Humanin in Alzheimer's Disease</h4>
                        <Badge variant="outline" className="text-xs">3 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Alqahtani SM et al. (2025)</strong> - Brain Res
                      </p>
                      <p className="text-sm">
                        Recent study showing <strong>humanin has neuroprotective effect against AD and other neurodegenerative diseases</strong> by improving hippocampal acetylcholine.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Alzheimer's disease protection</li>
                        <li>Neurodegenerative disease effects</li>
                        <li>Hippocampal acetylcholine improvement</li>
                        <li>Cognitive function enhancement</li>
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
                      <h4 className="font-semibold">Neurodegenerative Diseases</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Alzheimer's disease (all forms)</li>
                        <li>Cognitive decline prevention</li>
                        <li>Stroke neuroprotection</li>
                        <li>General neurodegeneration</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Healthy Aging & Longevity</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Lifespan extension</li>
                        <li>Healthspan improvement</li>
                        <li>Age-related disease prevention</li>
                        <li>Metabolic health optimization</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cardiovascular Disease</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Atherosclerosis prevention</li>
                        <li>Cardiac apoptosis inhibition</li>
                        <li>Endothelial function improvement</li>
                        <li>Vascular health</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Mitochondrial Diseases</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MELAS syndrome</li>
                        <li>Mitochondrial dysfunction</li>
                        <li>Energy metabolism disorders</li>
                        <li>Oxidative stress conditions</li>
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
                      <strong>Important:</strong> Humanin is not FDA-approved as a therapeutic agent. The following protocols are based on research studies and are for healthcare provider reference only. All use must be under physician supervision.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Standard Protocol (HNG Analogue)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Healthspan & Metabolic Optimization:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-5 mg per injection (HNG - potent analogue)</li>
                          <li><strong>Frequency:</strong> 2-3 times per week (e.g., Mon/Thu or Mon/Wed/Fri)</li>
                          <li><strong>Route:</strong> Subcutaneous or intraperitoneal</li>
                          <li><strong>Duration:</strong> Long-term/continuous for healthspan benefits</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence (Mouse Studies):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>4 mg/kg twice weekly: Improved metabolic health</li>
                          <li>14-month treatment: Reduced visceral fat, increased lean mass</li>
                          <li>IGF-I reduction: Longevity marker improvement</li>
                          <li>Middle-age initiation: Effective when started at 18 months</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Neuroprotection Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Alzheimer's Disease & Cognitive Decline:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-5 mg HNG per injection</li>
                          <li><strong>Frequency:</strong> 2-3 times per week</li>
                          <li><strong>Duration:</strong> Long-term for cognitive protection</li>
                          <li><strong>Monitoring:</strong> Cognitive function assessments</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Bi-weekly HNG: Delays cognitive decline in mice</li>
                          <li>Protects against ALL familial AD genes</li>
                          <li>Amyloid-β toxicity prevention</li>
                          <li>CSF levels: Lower in AD patients (supplementation rationale)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Longevity Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Lifespan & Healthspan Extension:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-5 mg HNG</li>
                          <li><strong>Frequency:</strong> 2-3 times per week</li>
                          <li><strong>Initiation:</strong> Middle-age or earlier</li>
                          <li><strong>Duration:</strong> Lifelong for maximum benefit</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Lifespan extension:</strong> +19% in C. elegans</li>
                          <li><strong>daf-16/FOXO dependent:</strong> Conserved longevity pathway</li>
                          <li><strong>Centenarians:</strong> Offspring have elevated levels</li>
                          <li><strong>Naked mole-rat:</strong> Stable levels correlate with negligible senescence</li>
                        </ul>
                      </div>
                      <Alert className="mt-3 border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/20">
                        <AlertCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        <AlertDescription className="text-purple-800 dark:text-purple-200 text-sm">
                          <strong>Longevity insight:</strong> Humanin is the first mitochondrial-encoded peptide proven to extend lifespan!
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Cytoprotection Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Toxic Insult & Stress Protection:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-5 mg HNG</li>
                          <li><strong>Timing:</strong> Before/during anticipated stress</li>
                          <li><strong>Frequency:</strong> As needed or 2-3x weekly</li>
                          <li><strong>Applications:</strong> Chemotherapy, oxidative stress, hypoxia</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Cyclophosphamide: Protected lymphocytes and germ cells</li>
                          <li>Oxidative stress: Cellular protection</li>
                          <li>Serum starvation: Enhanced survival</li>
                          <li>Hypoxia: Resistance to oxygen deprivation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for humanin use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Injection Technique</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Subcutaneous preferred (research standard)</li>
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Monitor injection sites for reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Timing Optimization</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Morning:</strong> General healthspan optimization</li>
                        <li><strong>Twice weekly:</strong> Mon/Thu or similar spacing</li>
                        <li><strong>Consistent schedule:</strong> For best results</li>
                        <li><strong>Long-term:</strong> Continuous for longevity benefits</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light</li>
                        <li>Reconstituted: Use within 30 days</li>
                        <li>Lyophilized: Stable at room temp briefly</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Response Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cognitive function assessments</li>
                        <li>Body composition analysis</li>
                        <li>IGF-I and leptin levels</li>
                        <li>Regular physician follow-up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with humanin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">MOTS-c (Mitochondrial Synergy)</h4>
                      <p className="text-sm">
                        <strong>Complementary mitochondrial-derived peptides.</strong> Humanin protects against age-related decline while MOTS-c enhances metabolic fitness and physical performance - comprehensive MDP stack.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Humanin: 1-5 mg, 2-3x per week</li>
                        <li>MOTS-c: 10-15 mg, 3x per week</li>
                        <li>Synergistic longevity and metabolic benefits</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Semax/Selank (Neuroprotection Stack)</h4>
                      <p className="text-sm">
                        <strong>Enhanced cognitive protection.</strong> Humanin protects against AD while Semax/Selank enhance cognition and reduce anxiety - comprehensive neuroprotection.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Humanin: 1-5 mg, 2-3x per week</li>
                        <li>Semax: 300-600 mcg intranasal, daily</li>
                        <li>Selank: 250-500 mcg intranasal, daily</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Epithalon (Longevity Stack)</h4>
                      <p className="text-sm">
                        <strong>Synergistic lifespan extension.</strong> Humanin extends lifespan via insulin/IGF pathway while Epithalon activates telomerase - dual longevity mechanisms.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Humanin: 1-5 mg, 2-3x per week (continuous)</li>
                        <li>Epithalon: 5-10 mg, daily for 10-20 days (cycles)</li>
                        <li>Complementary aging mechanisms</li>
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
                      <strong>Excellent Safety Profile:</strong> Extensive animal studies demonstrate excellent tolerability. Naturally occurring peptide encoded in mitochondrial DNA with broad cytoprotective effects.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Known hypersensitivity to humanin</li>
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
                        <li>Mitochondrial diseases (monitor closely)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical</li>
                        <li>Baseline cognitive function assessment (if for AD)</li>
                        <li>Body composition analysis</li>
                        <li>IGF-I and leptin levels</li>
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
                        <li><strong>Long-term safety:</strong> 14-month treatment well-tolerated</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Theoretical Concerns (Limited Human Data)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Allergic reactions:</strong> Possible with any peptide</li>
                        <li><strong>Long-term human effects:</strong> Limited data</li>
                        <li><strong>Drug interactions:</strong> Not well-studied</li>
                        <li><strong>Fertility effects:</strong> Decreased in transgenic models</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Advantages of Natural Peptide</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Endogenous peptide:</strong> Naturally encoded in mtDNA</li>
                        <li><strong>Highly conserved:</strong> Ancient mitochondrial signal</li>
                        <li><strong>Broad benefits:</strong> Neuroprotection, cytoprotection, longevity</li>
                        <li><strong>Centenarian marker:</strong> Elevated in long-lived individuals</li>
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
                      <h4 className="font-semibold">Cognitive Function (if for AD)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Mini-Mental State Examination (MMSE)</li>
                        <li>Montreal Cognitive Assessment (MoCA)</li>
                        <li>Memory and executive function tests</li>
                        <li>Quarterly assessments</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Metabolic Markers</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>IGF-I levels (longevity marker)</li>
                        <li>Leptin levels</li>
                        <li>Inflammatory markers</li>
                        <li>Body composition (DEXA or bioimpedance)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Longevity Biomarkers</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Circulating humanin levels (if available)</li>
                        <li>mtDNA copy number</li>
                        <li>Telomere length (if combined with Epithalon)</li>
                        <li>Biological age assessments</li>
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
                  <CardDescription>Ensuring pharmaceutical-grade humanin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Only use humanin from verified compounding pharmacies with proper quality control. Gray and black market sources pose serious health risks.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                        <li><strong>Sequence verification:</strong> Mass spectrometry confirmation (24-aa)</li>
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
                      <li><strong>Research status:</strong> Investigational for AD and aging</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> Humanin is not FDA-approved and is considered investigational. Use must be under physician supervision through licensed compounding pharmacies.
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
          <Card className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-200 dark:border-purple-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade Humanin?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity humanin from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="#" onClick={(e) => { e.preventDefault(); }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-purple-600 bg-background px-8 py-3 text-sm font-medium text-purple-600 shadow-sm transition-colors hover:bg-purple-50 dark:hover:bg-purple-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600">
                      View Longevity Stack
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
