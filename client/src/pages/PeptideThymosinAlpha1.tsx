import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PeptideThymosinAlpha1() {
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Immune Modulation & Sepsis Treatment
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Thymosin Alpha-1
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              FDA-approved orphan drug (Thymalfasin/Zadaxin) for immune deficiencies and malignancies. Proven efficacy in sepsis mortality reduction, T cell restoration, and vaccine response enhancement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">67</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">FDA</div>
                <div className="text-sm text-muted-foreground">Orphan Drug Status</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">35+</div>
                <div className="text-sm text-muted-foreground">Countries Approved</div>
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
              <strong>FDA Orphan Drug:</strong> Thymalfasin (Zadaxin) is FDA-approved for specific conditions including DiGeorge syndrome, chronic hepatitis B, hepatocellular carcinoma, and malignant melanoma. Consult with a qualified physician before considering peptide therapy.
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
                  <CardTitle>What is Thymosin Alpha-1?</CardTitle>
                  <CardDescription>Naturally occurring thymic peptide with proven immune-modulating properties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Thymosin Alpha-1 (Tα1) is a <strong>28-amino acid peptide naturally occurring in the thymus</strong> that has long been recognized for modifying, enhancing, and restoring immune function. Originally isolated from thymic tissue in 1977, it plays a fundamental role in the control of inflammation, immunity, and tolerance.
                  </p>
                  <p>
                    The <strong>synthetic form, thymalfasin (Zadaxin)</strong>, is <strong>FDA-approved as an orphan drug</strong> and approved in over 35 countries for treatment of hepatitis B and C, immune deficiencies, and as an immune enhancer in various diseases. It has been utilized in the treatment of immunocompromised states and malignancies, as an enhancer of vaccine response, and as a means of curbing morbidity and mortality in sepsis and numerous infections.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Structure:</strong> 28-amino acid peptide with distorted helical configuration</li>
                      <li><strong>Source:</strong> Naturally produced by thymus gland</li>
                      <li><strong>Synthetic form:</strong> Thymalfasin (Zadaxin) - FDA-approved orphan drug</li>
                      <li><strong>Mechanism:</strong> TLR-2 and TLR-9 agonist, T cell maturation enhancer</li>
                      <li><strong>FDA status:</strong> Approved for DiGeorge syndrome, hepatitis B, hepatocellular carcinoma, melanoma</li>
                      <li><strong>Primary effects:</strong> Immune modulation, T cell restoration, sepsis mortality reduction</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>FDA-approved and investigational uses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">FDA-Approved Indications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>DiGeorge syndrome with immune defects</li>
                        <li>Chronic active hepatitis B</li>
                        <li>Hepatocellular carcinoma</li>
                        <li>Malignant melanoma</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Sepsis & Critical Illness</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Sepsis mortality reduction (proven efficacy)</li>
                        <li>Severe bacterial infections</li>
                        <li>Immunosuppression in critical illness</li>
                        <li>HLA-DR restoration on monocytes</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Immune Deficiencies</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>T cell lymphopenia restoration</li>
                        <li>Chemotherapy-induced immunosuppression</li>
                        <li>HIV-related immune dysfunction</li>
                        <li>Age-related immune decline</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Cancer Immunotherapy</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Non-small cell lung cancer</li>
                        <li>Renal cell carcinoma</li>
                        <li>Hepatocellular carcinoma</li>
                        <li>Chemotherapy toxicity reduction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Immune Modulation Mechanisms</CardTitle>
                  <CardDescription>How Thymosin Alpha-1 enhances and restores immune function</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Thymosin Alpha-1 has a <strong>wide range of biological activities</strong> that range from anti-tumor to immune-modulating properties. The immune response is due to its action in elevating T cell maturation, activating natural killer cells and CD8+ T cells, and modulating cytokine expression.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">T Cell Enhancement</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Promotes T cell maturation into CD4+/CD8+ cells</li>
                        <li>Increases T cell rosette percentages</li>
                        <li>Restores T cell counts in lymphopenia</li>
                        <li>Prevents excessive T cell activation</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">TLR Agonist Activity</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>TLR-2 and TLR-9 agonist</li>
                        <li>Activates dendritic cells (APCs)</li>
                        <li>Stimulates adaptive immune response</li>
                        <li>Enhances posterior humoral immunity</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Cytokine Modulation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Increases IL-2, IL-10, IL-12 levels</li>
                        <li>Enhances IFN-α and IFN-γ production</li>
                        <li>Decreases IL-1β and TNF-α (anti-inflammatory)</li>
                        <li>Prevents cytokine storm in sepsis</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-cyan-600 dark:text-cyan-400">Innate Immunity</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Directly activates natural killer (NK) cells</li>
                        <li>Enhances CD8+ T cell cytotoxicity</li>
                        <li>Increases macrophage antigen presentation</li>
                        <li>Kills virally infected cells</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vaccine Response Enhancement</CardTitle>
                  <CardDescription>Thymosin Alpha-1 as a vaccine adjuvant</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    The role of Thymosin Alpha-1 in <strong>stimulating T-cell dependent antibody production</strong> has led to its consideration as a vaccine adjuvant for enhancing response to vaccines. It is used to enhance the efficacy of influenza and hepatitis B vaccines in immunocompromised patients.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Vaccine Applications:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Influenza vaccines:</strong> Enhanced response in elderly and immunocompromised</li>
                      <li><strong>Hepatitis B vaccines:</strong> Improved seroconversion rates</li>
                      <li><strong>COVID-19:</strong> Investigated as adjuvant therapy</li>
                      <li><strong>Mechanism:</strong> Stimulates T-cell dependent antibody production</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How Thymosin Alpha-1 modulates immune function</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">TLR-2 and TLR-9 Agonist Activity</h4>
                      <p className="text-sm text-muted-foreground">
                        Thymosin Alpha-1 functions as a <strong>toll-like receptor (TLR)-9 and TLR-2 agonist</strong> in both myeloid and dendritic cells, the professional antigen-presenting cells.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>TLR activation:</strong> Stimulates adaptive immune response</li>
                        <li><strong>Dendritic cell activation:</strong> Enhances antigen presentation</li>
                        <li><strong>Broad spectrum:</strong> Effective against viral, bacterial, fungal infections</li>
                        <li><strong>Cancer immunity:</strong> Stimulates anti-tumor immune responses</li>
                        <li><strong>Humoral immunity:</strong> Promotes posterior antibody production</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">T Cell Maturation & Restoration</h4>
                      <p className="text-sm text-muted-foreground">
                        Thymosin Alpha-1 <strong>elevates T cell maturation into CD4+/CD8+ T cells</strong> and modulates T-lymphocyte numbers and function.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>CD4+/CD8+ maturation:</strong> Promotes differentiation of T cell progenitors</li>
                        <li><strong>T cell rosette increase:</strong> Demonstrated in T cell lymphopenia patients</li>
                        <li><strong>Lymphopenia restoration:</strong> Restores T cell counts in severe deficiency</li>
                        <li><strong>Prevents overactivation:</strong> Balances excessive T cell activation</li>
                        <li><strong>Thymic function:</strong> Mimics natural thymic hormone activity</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Natural Killer Cell & CD8+ T Cell Activation</h4>
                      <p className="text-sm text-muted-foreground">
                        Thymosin Alpha-1 <strong>directly activates natural killer (NK) cells and CD8+ T cells</strong>, through which it kills virally infected cells and tumor cells.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>NK cell activation:</strong> Direct enhancement of innate immunity</li>
                        <li><strong>CD8+ cytotoxicity:</strong> Kills virally infected cells</li>
                        <li><strong>Anti-tumor activity:</strong> Cytotoxic T cell-mediated tumor killing</li>
                        <li><strong>Viral clearance:</strong> Enhanced elimination of infected cells</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Cytokine & Chemokine Regulation</h4>
                      <p className="text-sm text-muted-foreground">
                        Thymosin Alpha-1 <strong>increases pro-inflammatory cytokines while decreasing excessive inflammation</strong>, maintaining immune balance.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Pro-inflammatory:</strong> Increases IL-2, IL-10, IL-12, IFN-α, IFN-γ</li>
                        <li><strong>Anti-inflammatory:</strong> Decreases IL-1β and TNF-α</li>
                        <li><strong>Balanced response:</strong> Prevents cytokine storm while maintaining immunity</li>
                        <li><strong>Sepsis benefit:</strong> Reduces excessive inflammation in critical illness</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">MHC Class I & Viral Antigen Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        Thymosin Alpha-1 <strong>increases the prominence of major histocompatibility complex (MHC) I/viral antigens</strong> on infected cells and decreases viral replication.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>MHC I upregulation:</strong> Enhanced antigen presentation</li>
                        <li><strong>Viral antigen display:</strong> Improved immune recognition</li>
                        <li><strong>Viral replication inhibition:</strong> Direct antiviral effects</li>
                        <li><strong>Immune targeting:</strong> Facilitates T cell recognition of infected cells</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">HLA-DR Restoration on Monocytes</h4>
                      <p className="text-sm text-muted-foreground">
                        In sepsis patients, Thymosin Alpha-1 <strong>improves the expression of HLA-DR on monocytes</strong>, a key marker of immune function restoration.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>HLA-DR expression:</strong> Marker of monocyte immune competence</li>
                        <li><strong>Sepsis recovery:</strong> Restoration predicts improved outcomes</li>
                        <li><strong>Immunosuppression reversal:</strong> Counters sepsis-induced immune paralysis</li>
                        <li><strong>Clinical significance:</strong> Validated biomarker in sepsis trials</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Anti-Tumor Mechanisms</h4>
                      <p className="text-sm text-muted-foreground">
                        Thymosin Alpha-1 exhibits <strong>anti-proliferative properties and restrains tumor growth</strong> through immune stimulation and direct anti-tumor effects.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Immune-mediated:</strong> Stimulates anti-tumor immune responses</li>
                        <li><strong>Direct anti-proliferative:</strong> Inhibits tumor cell growth</li>
                        <li><strong>Metastasis inhibition:</strong> Demonstrated in lung and liver metastases</li>
                        <li><strong>Best efficacy:</strong> Small tumor size (Moody et al.)</li>
                        <li><strong>Oxidative protection:</strong> Protects against oxidative damage</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Biochemical Structure</CardTitle>
                  <CardDescription>Molecular basis for Thymosin Alpha-1 activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">28-Amino Acid Peptide</h4>
                      <p className="text-sm">
                        Thymosin Alpha-1 is a <strong>28-residue polypeptide chain</strong> with a distorted helical configuration consisting of two stable regions: an alpha-helix site from residues 14-26 and two double turns in the β region in the N-terminal site (residues 1-12).
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Positively Charged Peptide</h4>
                      <p className="text-sm">
                        Thymosin proteins are <strong>short, positively charged, and inherently unregulated peptides</strong>. The positive charge enables interaction with cell surface receptors (TLR-2, TLR-9) and facilitates cellular uptake.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Synthetic Form: Thymalfasin</h4>
                      <p className="text-sm">
                        The synthetic analog <strong>thymalfasin (Zadaxin)</strong> is produced via solid-phase synthesis and is the only form accepted for clinical use. It is chemically identical to the natural peptide and exhibits the same biological activities.
                      </p>
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
                  <CardDescription>Evidence from clinical trials and systematic reviews</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Comprehensive Literature Review</h4>
                        <Badge variant="outline" className="text-xs">67 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Dominari A et al. (2020)</strong> - PMC7747025, World J Virol
                      </p>
                      <p className="text-sm">
                        Comprehensive review demonstrating that Thymosin Alpha-1 has been <strong>utilized in treatment of immunocompromised states and malignancies, as an enhancer of vaccine response, and as a means of curbing morbidity and mortality in sepsis and numerous infections</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>TLR-2 and TLR-9 agonist:</strong> Activates dendritic cells and adaptive immunity</li>
                        <li><strong>T cell restoration:</strong> Increases CD4+/CD8+ maturation</li>
                        <li><strong>Cytokine modulation:</strong> Increases IL-2, IL-10, IL-12, IFN-α, IFN-γ; decreases IL-1β, TNF-α</li>
                        <li><strong>FDA approval:</strong> Orphan drug status for multiple indications</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Sepsis Mortality Reduction Meta-Analysis</h4>
                        <Badge variant="outline" className="text-xs">57 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Li C et al. (2015)</strong> - Int J Infect Dis
                      </p>
                      <p className="text-sm">
                        Meta-analysis demonstrating that <strong>Thymosin Alpha-1 based immunomodulatory therapy could significantly reduce the risk of all-cause mortality among septic patients</strong>.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Significant mortality reduction in sepsis</li>
                        <li>Improved immune function markers</li>
                        <li>HLA-DR restoration on monocytes</li>
                        <li>Safe and well-tolerated</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Sepsis Immunomodulation Efficacy</h4>
                        <Badge variant="outline" className="text-xs">63 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Liu F et al. (2016)</strong> - BMC Infect Dis
                      </p>
                      <p className="text-sm">
                        Systematic review showing that <strong>Tα1 may be beneficial to sepsis patients in reducing mortality and modulating inflammation reactions</strong>. However, noted that quality of evidence requires further high-quality trials.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Reduced mortality in sepsis patients</li>
                        <li>Modulated inflammatory responses</li>
                        <li>Improved immune function</li>
                        <li>Call for larger randomized trials</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Expert Opinion on Sepsis Treatment</h4>
                        <Badge variant="outline" className="text-xs">51 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Pei F et al. (2018)</strong> - Expert Opinion
                      </p>
                      <p className="text-sm">
                        Expert review concluding that <strong>single or combined treatment with Tα1 reduced the mortality rate of sepsis, improved the expression of HLA-DR on monocyte</strong>, and enhanced immune function.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Reduced sepsis mortality</li>
                        <li>HLA-DR expression improvement (immune recovery marker)</li>
                        <li>Combination therapy potential</li>
                        <li>Expert consensus on efficacy</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">COVID-19 T Cell Restoration</h4>
                        <Badge variant="outline" className="text-xs">Recent</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Multiple studies (2020-2021)</strong> - COVID-19 research
                      </p>
                      <p className="text-sm">
                        Studies demonstrated that <strong>Thymosin Alpha-1 significantly promoted the proliferation of activated T cells and prevented lymphopenia</strong> in severely ill COVID-19 patients. Reduced mortality in severe COVID-19.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Restored T cell counts in severe lymphocytopenia</li>
                        <li>Prevented excessive T cell activation</li>
                        <li>Reduced mortality in severe COVID-19</li>
                        <li>10 mg subcutaneous daily for 7 days protocol</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Th1, Th2, Th17, Treg Modulation</h4>
                        <Badge variant="outline" className="text-xs">41 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yang X et al. (2011)</strong> - PMC3854146
                      </p>
                      <p className="text-sm">
                        Study showing that <strong>Thymosin Alpha-1 has beneficial effects on numerous immune system parameters</strong>, including modulation of T helper cell subpopulations (Th1, Th2, Th17, Treg).
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Modulates Th1/Th2 balance</li>
                        <li>Regulates Th17 and Treg populations</li>
                        <li>Comprehensive immune system effects</li>
                        <li>Beneficial in immune dysregulation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Cancer Immunotherapy Applications</h4>
                        <Badge variant="outline" className="text-xs">Multiple Studies</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Various clinical trials</strong> - Oncology applications
                      </p>
                      <p className="text-sm">
                        Clinical trials demonstrated efficacy in <strong>non-small cell lung cancer, hepatocellular carcinoma, renal cell carcinoma, and melanoma</strong>. Reduces chemotherapy-induced toxicity and enhances anti-tumor immunity.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>FDA-approved for melanoma and hepatocellular carcinoma</li>
                        <li>Reduces chemotherapy toxicity</li>
                        <li>Enhances anti-tumor immune responses</li>
                        <li>Best efficacy with small tumor burden</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Safety & Efficacy Review (11,000+ Patients)</h4>
                        <Badge variant="outline" className="text-xs">6 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Dinetz E et al. (2024)</strong> - Comprehensive safety review
                      </p>
                      <p className="text-sm">
                        Comprehensive narrative review of <strong>clinical studies involving over 11,000 patients</strong> assessing the safety and efficacy of Thymosin Alpha-1. Demonstrated excellent safety profile.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Over 11,000 patients reviewed</li>
                        <li>Excellent safety profile</li>
                        <li>Well-tolerated across indications</li>
                        <li>Minimal adverse events</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Applications by Indication</CardTitle>
                  <CardDescription>Evidence-based uses across medical specialties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Sepsis & Critical Illness</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Proven mortality reduction (multiple meta-analyses)</li>
                        <li>HLA-DR restoration on monocytes</li>
                        <li>Reverses sepsis-induced immunosuppression</li>
                        <li>Modulates excessive inflammation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Viral Infections</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic hepatitis B and C (FDA-approved)</li>
                        <li>HIV-related immune dysfunction</li>
                        <li>COVID-19 lymphopenia restoration</li>
                        <li>Enhances antiviral immunity</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cancer Immunotherapy</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Melanoma (FDA-approved)</li>
                        <li>Hepatocellular carcinoma (FDA-approved)</li>
                        <li>Non-small cell lung cancer</li>
                        <li>Renal cell carcinoma</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Immune Deficiencies</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>DiGeorge syndrome (FDA-approved)</li>
                        <li>Chemotherapy-induced immunosuppression</li>
                        <li>Age-related immune decline</li>
                        <li>T cell lymphopenia</li>
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
                  <CardDescription>Evidence-based administration guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>FDA-Approved Drug:</strong> Thymalfasin (Zadaxin) is FDA-approved for specific indications. All use must be under physician supervision with proper prescription.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Sepsis & Critical Illness Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Standard Sepsis Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1.6 mg subcutaneous injection</li>
                          <li><strong>Frequency:</strong> Twice weekly (every 3-4 days)</li>
                          <li><strong>Duration:</strong> Until immune recovery (HLA-DR normalization)</li>
                          <li><strong>Monitoring:</strong> HLA-DR expression on monocytes, T cell counts</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Clinical Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Significant mortality reduction in multiple meta-analyses</li>
                          <li>Improved HLA-DR expression (immune recovery marker)</li>
                          <li>Modulated inflammatory responses</li>
                          <li>Well-tolerated with minimal side effects</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Severe Infection Protocol (COVID-19 Model)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Severe Lymphopenia Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 10 mg subcutaneous injection</li>
                          <li><strong>Frequency:</strong> Once daily</li>
                          <li><strong>Duration:</strong> At least 7 consecutive days</li>
                          <li><strong>Indication:</strong> CD8 cells &lt;400/μL and CD4 cells &lt;650/μL</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Clinical Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Restored T cell counts in severe lymphocytopenia</li>
                          <li>Prevented excessive T cell activation</li>
                          <li>Reduced mortality in severe COVID-19</li>
                          <li>Promoted activated T cell proliferation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Chronic Hepatitis B/C Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">FDA-Approved Hepatitis Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1.6 mg subcutaneous injection</li>
                          <li><strong>Frequency:</strong> Twice weekly</li>
                          <li><strong>Duration:</strong> 6-12 months (or longer based on response)</li>
                          <li><strong>Combination:</strong> Often combined with interferon or antivirals</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Cancer Immunotherapy Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Oncology Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1.6 mg subcutaneous injection</li>
                          <li><strong>Frequency:</strong> Twice weekly</li>
                          <li><strong>Duration:</strong> Throughout chemotherapy and 3-6 months post-treatment</li>
                          <li><strong>Goal:</strong> Reduce chemotherapy toxicity, enhance anti-tumor immunity</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Immune Support & Prevention Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">General Immune Enhancement:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1.6 mg subcutaneous injection</li>
                          <li><strong>Frequency:</strong> 2-3 times per week</li>
                          <li><strong>Duration:</strong> 4-8 week cycles</li>
                          <li><strong>Indications:</strong> Age-related decline, immunosuppression, vaccine adjuvant</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for Thymosin Alpha-1 use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Injection Technique</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Subcutaneous injection (abdomen or thigh)</li>
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Inject slowly to minimize discomfort</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Timing</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Morning or early afternoon preferred</li>
                        <li>Consistent timing for twice-weekly dosing</li>
                        <li>Can be taken with or without food</li>
                        <li>For sepsis: Start as early as possible</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Store at -20°C for long-term</li>
                        <li>Lyophilized: Stable 3 weeks at room temp</li>
                        <li>Reconstituted: 2-7 days at 4°C</li>
                        <li>Avoid repeated freeze-thaw cycles</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>T cell counts (CD4+, CD8+)</li>
                        <li>HLA-DR expression (sepsis)</li>
                        <li>Inflammatory markers (CRP, IL-6)</li>
                        <li>Clinical response assessment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that work well with Thymosin Alpha-1</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">LL-37 (Antimicrobial Synergy)</h4>
                      <p className="text-sm">
                        <strong>Complementary immune defense.</strong> Thymosin Alpha-1 enhances T cell function while LL-37 provides direct antimicrobial activity - powerful combination for sepsis and severe infections.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Thymosin Alpha-1: 1.6 mg subcutaneous, 2x per week</li>
                        <li>LL-37: 2-3 mg subcutaneous, 3x per week</li>
                        <li>See <Link href="/stacking-guide"><a className="text-emerald-600 dark:text-emerald-400 hover:underline">Immune Support Stack</a></Link></li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">KPV (Anti-Inflammatory)</h4>
                      <p className="text-sm">
                        <strong>Balanced immune modulation.</strong> Thymosin Alpha-1 enhances immunity while KPV controls excessive inflammation - ideal for autoimmune conditions and inflammatory diseases.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Thymosin Alpha-1: 1.6 mg subcutaneous, 2x per week</li>
                        <li>KPV: 500-1000 mcg subcutaneous, daily</li>
                        <li>4-8 week cycles</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Epithalon (Longevity Synergy)</h4>
                      <p className="text-sm">
                        <strong>Comprehensive anti-aging.</strong> Thymosin Alpha-1 restores immune function while Epithalon promotes telomere elongation - synergistic for age-related immune decline.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Thymosin Alpha-1: 1.6 mg subcutaneous, 2x per week (continuous)</li>
                        <li>Epithalon: 10 mg subcutaneous, daily for 10-20 days (cycles)</li>
                        <li>Epithalon: 2-4 cycles per year</li>
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
                      <strong>Excellent Safety Profile:</strong> Comprehensive review of over 11,000 patients demonstrated excellent safety and tolerability. FDA-approved orphan drug with decades of clinical use.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Known hypersensitivity to thymosin alpha-1 or thymalfasin</li>
                        <li>Pregnancy and breastfeeding (insufficient safety data)</li>
                        <li>Active autoimmune disease exacerbation (may enhance immune response)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Uncontrolled autoimmune disorders (use with caution)</li>
                        <li>Organ transplant recipients (may interfere with immunosuppression)</li>
                        <li>Children under 18 (limited pediatric data, except DiGeorge syndrome)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical examination</li>
                        <li>Baseline immune function assessment (T cell counts)</li>
                        <li>Autoimmune disease screening</li>
                        <li>Pregnancy test for women of childbearing age</li>
                        <li>Physician prescription required (FDA-approved drug)</li>
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
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Minimal Side Effects (Excellent Tolerability)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Injection site reactions:</strong> Mild redness, swelling (rare, transient)</li>
                        <li><strong>Flu-like symptoms:</strong> Occasional, mild, resolves quickly</li>
                        <li><strong>Fatigue:</strong> Rare, usually mild</li>
                        <li><strong>Overall:</strong> Extremely well-tolerated in over 11,000 patients reviewed</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Rare Adverse Events</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Allergic reactions:</strong> Very rare, typically mild</li>
                        <li><strong>Autoimmune flares:</strong> Rare in predisposed individuals</li>
                        <li><strong>Headache:</strong> Occasional, mild</li>
                        <li><strong>Nausea:</strong> Rare</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">No Significant Safety Concerns</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Long-term use:</strong> Safe for extended periods (years)</li>
                        <li><strong>No organ toxicity:</strong> No liver, kidney, or cardiac toxicity</li>
                        <li><strong>No drug interactions:</strong> Minimal interactions with other medications</li>
                        <li><strong>Decades of clinical use:</strong> Established safety profile</li>
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
                      <h4 className="font-semibold">Sepsis/Critical Illness Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Daily clinical assessment</li>
                        <li>HLA-DR expression on monocytes (immune recovery marker)</li>
                        <li>T cell counts (CD4+, CD8+)</li>
                        <li>Inflammatory markers (CRP, IL-6, procalcitonin)</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">General Immune Support Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Baseline and monthly T cell counts</li>
                        <li>Quarterly comprehensive immune panel</li>
                        <li>Side effect tracking</li>
                        <li>Clinical response assessment</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cancer Therapy Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly during chemotherapy</li>
                        <li>Complete blood count monitoring</li>
                        <li>Immune function assessment</li>
                        <li>Tumor response evaluation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade Thymosin Alpha-1</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>FDA-Approved Drug:</strong> Thymalfasin (Zadaxin) is FDA-approved. Only use from verified compounding pharmacies or approved manufacturers with proper quality control.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                        <li><strong>Sequence verification:</strong> Mass spectrometry confirmation</li>
                        <li><strong>Synthesis method:</strong> Solid-phase synthesis (only accepted method)</li>
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
                      <li>Solid-phase synthesis (FDA-accepted method)</li>
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
                      <li><strong>Status:</strong> FDA-approved orphan drug (Thymalfasin/Zadaxin)</li>
                      <li><strong>Approved indications:</strong> DiGeorge syndrome, chronic hepatitis B, hepatocellular carcinoma, malignant melanoma</li>
                      <li><strong>Availability:</strong> Prescription required from licensed physician</li>
                      <li><strong>Compounding:</strong> Available from licensed compounding pharmacies</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">International</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Approval:</strong> Approved in over 35 countries</li>
                      <li><strong>Primary uses:</strong> Hepatitis B and C, immune enhancement</li>
                      <li><strong>Widespread clinical use:</strong> Decades of established use</li>
                    </ul>
                  </div>

                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>FDA-Approved Drug:</strong> Thymalfasin (Zadaxin) is FDA-approved for specific indications. Use must be under physician supervision with proper prescription.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source FDA-Approved Thymosin Alpha-1?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity Thymosin Alpha-1 (Thymalfasin) from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://drspeptides.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-background px-8 py-3 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                      View Immune Support Stack
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
