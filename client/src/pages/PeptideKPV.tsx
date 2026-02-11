import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PeptideKPV() {
  usePageTitle("KPV Guide - Anti-Inflammatory Peptide", {
    description: "Evidence-based KPV guide for healthcare providers. Alpha-MSH fragment protocols for inflammation and gut health.",
    keywords: "KPV, anti-inflammatory peptide, alpha-MSH, gut health, IBD, skin inflammation, melanocortin",
    schema: generatePeptideSchema({
      name: "KPV",
      alternateName: ['Alpha-MSH Fragment', 'Lys-Pro-Val'],
      description: "Evidence-based KPV guide for healthcare providers. Alpha-MSH fragment protocols for inflammation and gut health.",
      path: "/peptides/kpv",
      fdaStatus: "Investigational",
      category: "Immune Support"
    })
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
            <PrintButton title="K P V - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:via-background dark:to-amber-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800">
              Potent Anti-Inflammatory
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              KPV
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Melanocortin-derived tripeptide (Lys-Pro-Val) with potent PepT1-mediated anti-inflammatory effects. Proven efficacy in inflammatory bowel disease models through NF-κB and MAPK pathway inhibition.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">131</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">nM</div>
                <div className="text-sm text-muted-foreground">Nanomolar Potency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">Oral</div>
                <div className="text-sm text-muted-foreground">Bioavailability</div>
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
              <strong>Investigational Peptide:</strong> KPV is not FDA-approved as a therapeutic agent. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
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
                  <CardTitle>What is KPV?</CardTitle>
                  <CardDescription>Melanocortin-derived tripeptide with potent anti-inflammatory properties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    KPV is a <strong>tripeptide (Lys-Pro-Val)</strong> derived from the <strong>C-terminal sequence of α-melanocyte stimulating hormone (α-MSH)</strong>. It possesses potent anti-inflammatory properties and represents a promising therapeutic agent for inflammatory bowel disease (IBD) and other inflammatory conditions.
                  </p>
                  <p>
                    Unlike full-length α-MSH, KPV exerts its anti-inflammatory effects through a <strong>unique PepT1-mediated mechanism</strong> rather than through melanocortin receptors. This allows it to be transported into cells via the di/tripeptide transporter PepT1, which is upregulated in inflamed colonic tissue, enabling targeted delivery to sites of inflammation.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Structure:</strong> Tripeptide (Lys-Pro-Val) - C-terminal fragment of α-MSH</li>
                      <li><strong>Potency:</strong> Nanomolar concentrations inhibit inflammatory pathways</li>
                      <li><strong>Transport:</strong> PepT1-mediated cellular uptake (upregulated in IBD)</li>
                      <li><strong>Mechanism:</strong> Inhibits NF-κB and MAPK inflammatory signaling</li>
                      <li><strong>Bioavailability:</strong> Oral administration effective in animal models</li>
                      <li><strong>Primary effects:</strong> Potent anti-inflammatory, IBD treatment potential</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of KPV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Inflammatory Bowel Disease</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Crohn's disease treatment potential</li>
                        <li>Ulcerative colitis symptom reduction</li>
                        <li>Colonic inflammation suppression</li>
                        <li>Pro-inflammatory cytokine reduction</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Systemic Inflammation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic inflammatory conditions</li>
                        <li>Autoimmune disease modulation</li>
                        <li>Inflammatory skin conditions</li>
                        <li>Wound healing enhancement</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Airway Inflammation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Local immune response suppression</li>
                        <li>Systemic immune modulation</li>
                        <li>Airway damage prevention</li>
                        <li>Respiratory inflammation control</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Gut Barrier Restoration</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Mucosal barrier repair</li>
                        <li>Intestinal permeability reduction</li>
                        <li>Epithelial healing promotion</li>
                        <li>Leaky gut syndrome treatment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PepT1-Mediated Mechanism</CardTitle>
                  <CardDescription>Unique targeted delivery to inflamed tissue</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    KPV's anti-inflammatory effect is mediated through the <strong>di/tripeptide transporter PepT1</strong>, which is normally expressed in the small intestine but is <strong>upregulated in colonic epithelial and immune cells during inflammatory bowel disease</strong>. This provides targeted delivery to sites of inflammation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">PepT1 Upregulation in IBD</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Normally low/absent in colon</li>
                        <li>Induced in inflamed colonic epithelium</li>
                        <li>Expressed in immune cells (macrophages, T cells)</li>
                        <li>Provides targeted drug delivery opportunity</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Intracellular Accumulation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>PepT1 transports KPV into cytosol</li>
                        <li>Intracellular accumulation in immune cells</li>
                        <li>Direct inhibition of signaling pathways</li>
                        <li>Sustained anti-inflammatory effect</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical significance:</strong> This PepT1-mediated mechanism allows KPV to selectively target inflamed tissue while minimizing systemic exposure, potentially reducing side effects compared to traditional anti-inflammatory drugs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advantages Over Full-Length α-MSH</CardTitle>
                  <CardDescription>Why the C-terminal tripeptide is therapeutically superior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Smaller Size = Better Stability</h4>
                      <p className="text-sm">
                        As a tripeptide, KPV is <strong>more stable and easier to synthesize</strong> than full-length α-MSH (13 amino acids), while retaining potent anti-inflammatory activity.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">PepT1-Mediated vs. Receptor-Mediated</h4>
                      <p className="text-sm">
                        KPV's anti-inflammatory effect is <strong>not mediated via melanocortin receptors</strong> but through PepT1 transport, allowing targeted delivery to inflamed tissue where PepT1 is upregulated.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Oral Bioavailability</h4>
                      <p className="text-sm">
                        KPV can be <strong>orally administered</strong> and remains effective, as demonstrated in DSS- and TNBS-induced colitis models where KPV was added to drinking water.
                      </p>
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
                  <CardDescription>How KPV exerts potent anti-inflammatory effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">NF-κB Pathway Inhibition</h4>
                      <p className="text-sm text-muted-foreground">
                        KPV at <strong>nanomolar concentrations inhibits the activation of NF-κB</strong>, a master regulator of inflammatory gene expression and one of the most important signaling pathways in IBD pathogenesis.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Potent inhibition:</strong> Effective at nanomolar (nM) concentrations</li>
                        <li><strong>Transcription blockade:</strong> Prevents NF-κB nuclear translocation</li>
                        <li><strong>Cytokine suppression:</strong> Reduces pro-inflammatory cytokine synthesis</li>
                        <li><strong>IBD relevance:</strong> NF-κB is central to IBD pathogenesis</li>
                        <li><strong>Broad anti-inflammatory:</strong> Affects multiple downstream targets</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">MAPK Cascade Pathway Inhibition</h4>
                      <p className="text-sm text-muted-foreground">
                        KPV reduces the <strong>MAP kinase (MAPK) inflammatory signaling pathway</strong>, the second critical pathway in IBD pathogenesis alongside NF-κB.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Dual pathway inhibition:</strong> Targets both NF-κB and MAPK</li>
                        <li><strong>ERK/p38/JNK:</strong> Inhibits multiple MAPK family members</li>
                        <li><strong>Synergistic effect:</strong> Combined inhibition more effective than single pathway</li>
                        <li><strong>Inflammatory gene suppression:</strong> Blocks MAPK-dependent transcription</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Pro-Inflammatory Cytokine Reduction</h4>
                      <p className="text-sm text-muted-foreground">
                        KPV reduces the synthesis and secretion of <strong>pro-inflammatory cytokines</strong> including TNF-α, IL-1β, IL-6, and IL-8.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>TNF-α suppression:</strong> Key driver of IBD inflammation</li>
                        <li><strong>IL-1β reduction:</strong> Decreases intestinal inflammation</li>
                        <li><strong>IL-6 inhibition:</strong> Reduces systemic inflammatory response</li>
                        <li><strong>IL-8 blockade:</strong> Prevents neutrophil recruitment</li>
                        <li><strong>mRNA and protein:</strong> Reduces both transcription and secretion</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">PepT1-Mediated Cellular Uptake</h4>
                      <p className="text-sm text-muted-foreground">
                        KPV is <strong>transported into cells by PepT1</strong>, a di/tripeptide transporter upregulated in inflamed colonic epithelial and immune cells.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Targeted delivery:</strong> PepT1 upregulated in IBD</li>
                        <li><strong>Epithelial cells:</strong> Transported into inflamed colonic epithelium</li>
                        <li><strong>Immune cells:</strong> Jurkat T cells and macrophages express functional PepT1</li>
                        <li><strong>Intracellular action:</strong> Accumulates in cytosol to inhibit signaling</li>
                        <li><strong>Competitive inhibition:</strong> Blocked by PepT1 substrates (Gly-Leu)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Immune Cell Modulation</h4>
                      <p className="text-sm text-muted-foreground">
                        KPV suppresses <strong>both local and systemic immune responses</strong> by acting on T cells and macrophages that express PepT1.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>T cell suppression:</strong> Inhibits inflammatory signaling in Jurkat T cells</li>
                        <li><strong>Macrophage modulation:</strong> Reduces macrophage-mediated inflammation</li>
                        <li><strong>Immune cell recruitment:</strong> Decreases inflammatory cell infiltration</li>
                        <li><strong>Local and systemic:</strong> Affects both tissue-resident and circulating immune cells</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Gut Mucosal Barrier Restoration</h4>
                      <p className="text-sm text-muted-foreground">
                        KPV promotes <strong>restoration of gut mucosal barrier function</strong> in inflamed colon, reducing intestinal permeability.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Barrier repair:</strong> Restores epithelial integrity</li>
                        <li><strong>Permeability reduction:</strong> Decreases "leaky gut"</li>
                        <li><strong>Tight junction restoration:</strong> Enhances epithelial barrier</li>
                        <li><strong>Clinical significance:</strong> Addresses root cause of IBD</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Melanocortin Receptor-Independent</h4>
                      <p className="text-sm text-muted-foreground">
                        Unlike full-length α-MSH, KPV's anti-inflammatory effect is <strong>not mediated via melanocortin receptors (MCRs)</strong> but through PepT1 transport.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>MCR-independent:</strong> Does not activate MC1R, MC3R, MC4R, MC5R</li>
                        <li><strong>PepT1-dependent:</strong> Anti-inflammatory effect requires PepT1 expression</li>
                        <li><strong>Unique mechanism:</strong> Different from α-MSH and other melanocortins</li>
                        <li><strong>Therapeutic advantage:</strong> Avoids MCR-mediated side effects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Molecular Targets</CardTitle>
                  <CardDescription>Specific signaling molecules inhibited by KPV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">NF-κB Signaling Components</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>IκB degradation inhibition</li>
                        <li>p65/RelA nuclear translocation blockade</li>
                        <li>NF-κB DNA binding reduction</li>
                        <li>Inflammatory gene transcription suppression</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">MAPK Family Members</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ERK1/2 phosphorylation reduction</li>
                        <li>p38 MAPK activation inhibition</li>
                        <li>JNK pathway suppression</li>
                        <li>AP-1 transcription factor blockade</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Pro-Inflammatory Cytokines</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>TNF-α (mRNA and protein)</li>
                        <li>IL-1β (mRNA and protein)</li>
                        <li>IL-6 (mRNA and protein)</li>
                        <li>IL-8 (mRNA and protein)</li>
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
                        <h4 className="font-semibold">PepT1-Mediated Anti-Inflammatory Mechanism</h4>
                        <Badge variant="outline" className="text-xs">131 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Dalmasso G et al. (2008)</strong> - PMC2431115, Gastroenterology
                      </p>
                      <p className="text-sm">
                        Landmark study demonstrating that <strong>KPV is transported into cells by PepT1 and might be a new therapeutic agent for IBD</strong>. Showed that nanomolar concentrations inhibit NF-κB and MAPK pathways, and oral administration reduces DSS- and TNBS-induced colitis.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Nanomolar potency:</strong> Effective at nM concentrations</li>
                        <li><strong>Dual pathway inhibition:</strong> NF-κB and MAPK suppression</li>
                        <li><strong>PepT1-mediated:</strong> Transported by di/tripeptide transporter</li>
                        <li><strong>Oral efficacy:</strong> Effective when added to drinking water</li>
                        <li><strong>Colitis reduction:</strong> Decreased inflammation in two mouse models</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Anti-Inflammatory Potential in Murine IBD Models</h4>
                        <Badge variant="outline" className="text-xs">67 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Kannengiesser K et al. (2008)</strong> - Inflamm Bowel Dis
                      </p>
                      <p className="text-sm">
                        Demonstrated <strong>profound anti-inflammatory activity of KPV in two different animal models</strong>. In DSS colitis, KPV application led to significant reduction in inflammation and pro-inflammatory cytokines.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Significant anti-inflammatory effects in DSS colitis</li>
                        <li>Effective in TNBS-induced colitis model</li>
                        <li>Reduced histological inflammation scores</li>
                        <li>Decreased pro-inflammatory cytokine expression</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">α-MSH Related Peptides as Anti-Inflammatory Agents</h4>
                        <Badge variant="outline" className="text-xs">86 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Luger TA et al. (2007)</strong> - Review article
                      </p>
                      <p className="text-sm">
                        Comprehensive review positioning <strong>KPV as a new class of anti-inflammatory agents</strong> derived from α-MSH. Highlighted K(D)PT derivative with potent anti-inflammatory effects.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>KPV: C-terminal tripeptide of α-MSH</li>
                        <li>K(D)PT: Derivative corresponding to IL-1β(193-195)</li>
                        <li>Potent anti-inflammatory properties</li>
                        <li>New therapeutic class for inflammatory diseases</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Mechanism of KPV Action and MC3R Agonists</h4>
                        <Badge variant="outline" className="text-xs">20 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Land SC et al. (2012)</strong> - PMC3403564
                      </p>
                      <p className="text-sm">
                        Confirmed that <strong>KPV suppresses both local and systemic immune responses which commonly induce airway damage</strong>. Demonstrated broad anti-inflammatory effects beyond IBD.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Suppresses local immune responses</li>
                        <li>Modulates systemic immunity</li>
                        <li>Prevents airway damage</li>
                        <li>Broader applications beyond IBD</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">KPV-Binding Hydrogel for Gut Barrier Restoration</h4>
                        <Badge variant="outline" className="text-xs">31 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Zhao Y et al. (2022)</strong> - Advanced delivery system
                      </p>
                      <p className="text-sm">
                        Developed a <strong>KPV-binding double-network hydrogel that restores gut mucosal barrier in inflamed colon</strong>. Provides targeted delivery and prolonged retention in inflamed tissue.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Targeted delivery to inflamed colon</li>
                        <li>Prolonged retention in diseased tissue</li>
                        <li>Improved KPV stability</li>
                        <li>Gut mucosal barrier restoration</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Critical Role of PepT1 in Colitis-Associated Cancer</h4>
                        <Badge variant="outline" className="text-xs">37 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Viennois E et al. (2016)</strong> - Cell Mol Gastroenterol Hepatol
                      </p>
                      <p className="text-sm">
                        Demonstrated <strong>therapeutic benefits of anti-inflammatory PepT1-mediated tripeptide KPV in preventing colon cancer</strong> in murine colitis-associated cancer model.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Prevents colitis-associated cancer</li>
                        <li>PepT1-mediated therapeutic delivery</li>
                        <li>Reduces chronic inflammation</li>
                        <li>Cancer prevention potential</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Melanocortin System in IBD</h4>
                        <Badge variant="outline" className="text-xs">29 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Gravina AG et al. (2023)</strong> - Recent review
                      </p>
                      <p className="text-sm">
                        Comprehensive review of <strong>melanocortin-derived tripeptide KPV's anti-inflammatory potential in murine models of IBD</strong>. Positioned KPV as promising therapeutic for IBD.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Anti-inflammatory potential in IBD</li>
                        <li>Effective in murine models</li>
                        <li>Promising therapeutic candidate</li>
                        <li>Melanocortin system modulation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Transdermal Iontophoretic Delivery</h4>
                        <Badge variant="outline" className="text-xs">18 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Pawar K et al. (2017)</strong> - J Pharm Sci
                      </p>
                      <p className="text-sm">
                        Investigated <strong>transdermal iontophoretic delivery of KPV</strong> as alternative route of administration. Demonstrated KPV's potent anti-inflammatory properties can be delivered via skin.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Transdermal delivery feasibility</li>
                        <li>Iontophoresis-enhanced penetration</li>
                        <li>Alternative to oral/injectable routes</li>
                        <li>Systemic anti-inflammatory effects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Applications Under Investigation</CardTitle>
                  <CardDescription>Therapeutic potential across inflammatory conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Inflammatory Bowel Disease</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Crohn's disease</li>
                        <li>Ulcerative colitis</li>
                        <li>Colitis-associated cancer prevention</li>
                        <li>Gut mucosal barrier restoration</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Systemic Inflammation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chronic inflammatory conditions</li>
                        <li>Autoimmune diseases</li>
                        <li>Inflammatory arthritis</li>
                        <li>Systemic immune dysregulation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Respiratory Conditions</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Airway inflammation</li>
                        <li>Asthma</li>
                        <li>COPD</li>
                        <li>Respiratory immune modulation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Skin & Wound Healing</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Inflammatory skin conditions</li>
                        <li>Wound healing enhancement</li>
                        <li>Psoriasis</li>
                        <li>Dermatitis</li>
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
                      <strong>Important:</strong> KPV is not FDA-approved as a therapeutic agent. The following protocols are based on research studies and are for healthcare provider reference only. All use must be under physician supervision.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Subcutaneous Injection Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Standard Dosing:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 500-1000 mcg per injection</li>
                          <li><strong>Frequency:</strong> Once daily</li>
                          <li><strong>Administration:</strong> Subcutaneous, abdomen or thigh</li>
                          <li><strong>Duration:</strong> 4-8 week cycles</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Clinical Rationale:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Nanomolar potency demonstrated in research</li>
                          <li>Systemic anti-inflammatory effects</li>
                          <li>Well-tolerated in animal models</li>
                          <li>Effective for systemic inflammation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Oral Administration Protocol (Investigational)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Oral Dosing (Based on Animal Models):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-5 mg oral, 1-2 times daily</li>
                          <li><strong>Timing:</strong> With or without food</li>
                          <li><strong>Duration:</strong> Continuous for IBD management</li>
                          <li><strong>Indication:</strong> Inflammatory bowel disease, gut inflammation</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Effective when added to drinking water in mice</li>
                          <li>Reduced DSS- and TNBS-induced colitis</li>
                          <li>PepT1-mediated uptake in inflamed colon</li>
                          <li>Targeted delivery to sites of inflammation</li>
                        </ul>
                      </div>
                      <Alert className="mt-3 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                          <strong>Note:</strong> Oral KPV is highly experimental with limited human data. Bioavailability and optimal dosing in humans not yet established.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Topical/Transdermal Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Topical Application:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Formulation:</strong> 0.5-2% KPV cream or gel</li>
                          <li><strong>Application:</strong> Apply to affected area 1-2 times daily</li>
                          <li><strong>Iontophoresis:</strong> Can enhance penetration</li>
                          <li><strong>Indications:</strong> Inflammatory skin conditions, wound healing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">IBD-Specific Protocol</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Inflammatory Bowel Disease:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Route:</strong> Oral preferred (targets inflamed colon via PepT1)</li>
                          <li><strong>Dose:</strong> 2-5 mg oral, twice daily</li>
                          <li><strong>Alternative:</strong> 500-1000 mcg subcutaneous daily</li>
                          <li><strong>Duration:</strong> Continuous for symptom management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for KPV use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Subcutaneous Injection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Inject slowly to minimize discomfort</li>
                        <li>Monitor injection sites for reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Oral Administration</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Can be taken with or without food</li>
                        <li>Consistent timing for best results</li>
                        <li>Empty stomach may enhance absorption</li>
                        <li>Monitor for GI side effects</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light</li>
                        <li>Reconstituted: Use within 30 days</li>
                        <li>Lyophilized: Stable at room temp for weeks</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Track inflammatory symptoms</li>
                        <li>Monitor CRP, ESR (inflammatory markers)</li>
                        <li>Assess clinical response</li>
                        <li>Regular physician follow-up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with KPV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Thymosin Alpha-1 (Immune Balance)</h4>
                      <p className="text-sm">
                        <strong>Balanced immune modulation.</strong> Thymosin Alpha-1 enhances immunity while KPV controls excessive inflammation - ideal for autoimmune conditions and inflammatory diseases.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>KPV: 500-1000 mcg subcutaneous, daily</li>
                        <li>Thymosin Alpha-1: 1.6 mg subcutaneous, 2x per week</li>
                        <li>4-8 week cycles</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-rose-600 dark:text-rose-400">BPC-157 (Gut Healing)</h4>
                      <p className="text-sm">
                        <strong>Synergistic gut repair.</strong> BPC-157's systemic healing effects complement KPV's anti-inflammatory and barrier-restoring properties - powerful combination for IBD and leaky gut.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>KPV: 500-1000 mcg subcutaneous or 2-5 mg oral, daily</li>
                        <li>BPC-157: 250-500 mcg subcutaneous, daily</li>
                        <li>8-12 week cycles for IBD</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">LL-37 (Antimicrobial + Anti-Inflammatory)</h4>
                      <p className="text-sm">
                        <strong>Infection control with inflammation suppression.</strong> LL-37 provides antimicrobial defense while KPV controls inflammation - useful for infections with inflammatory complications.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>KPV: 500-1000 mcg subcutaneous, daily</li>
                        <li>LL-37: 2 mg subcutaneous, 3x per week</li>
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
                  <Alert className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
                    <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      <strong>Generally Well-Tolerated:</strong> Animal studies demonstrate excellent tolerability with minimal side effects. Nanomolar potency suggests low doses are effective.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
                    <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    <AlertDescription className="text-red-800 dark:text-red-200">
                      <strong>Absolute Contraindications:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Known hypersensitivity to KPV or related peptides</li>
                        <li>Pregnancy and breastfeeding (insufficient safety data)</li>
                        <li>Active severe infections requiring immune response (may suppress immunity excessively)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Immunocompromised states (may further suppress immunity)</li>
                        <li>Active malignancy (insufficient data on cancer effects)</li>
                        <li>Children under 18 (no pediatric safety data)</li>
                        <li>Severe liver or kidney disease (metabolism/excretion unclear)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical examination</li>
                        <li>Baseline inflammatory markers (CRP, ESR)</li>
                        <li>Rule out active infections</li>
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
                        <li><strong>Injection site reactions:</strong> Mild, transient (if applicable)</li>
                        <li><strong>GI symptoms:</strong> Rare with oral administration</li>
                        <li><strong>Overall:</strong> Well-tolerated in murine colitis models</li>
                        <li><strong>No serious adverse events:</strong> Reported in research studies</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Theoretical Concerns (Limited Human Data)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Excessive immunosuppression:</strong> May impair infection response</li>
                        <li><strong>Allergic reactions:</strong> Possible with any peptide</li>
                        <li><strong>Long-term effects:</strong> Unknown in humans</li>
                        <li><strong>Drug interactions:</strong> Not well-studied</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Advantages of PepT1-Mediated Mechanism</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Targeted delivery:</strong> Accumulates in inflamed tissue</li>
                        <li><strong>Reduced systemic exposure:</strong> Minimizes off-target effects</li>
                        <li><strong>MCR-independent:</strong> Avoids melanocortin receptor side effects</li>
                        <li><strong>Nanomolar potency:</strong> Low doses required</li>
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
                      <h4 className="font-semibold">IBD Treatment Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly symptom assessment (first month)</li>
                        <li>Monthly inflammatory markers (CRP, fecal calprotectin)</li>
                        <li>Colonoscopy as clinically indicated</li>
                        <li>Monitor for infection signs</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">General Anti-Inflammatory Use</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Baseline and monthly CRP, ESR</li>
                        <li>Clinical response assessment</li>
                        <li>Side effect tracking</li>
                        <li>Quarterly comprehensive evaluation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Safety Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Monitor for signs of infection</li>
                        <li>Complete blood count (quarterly)</li>
                        <li>Liver and kidney function tests (quarterly)</li>
                        <li>Immune function assessment if prolonged use</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade KPV</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Only use KPV from verified compounding pharmacies with proper quality control. Gray and black market sources pose serious health risks.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Required Quality Standards</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Purity:</strong> ≥98% (verified by HPLC)</li>
                        <li><strong>Sequence verification:</strong> Mass spectrometry confirmation (Lys-Pro-Val)</li>
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
                      <li><strong>Research status:</strong> Investigational for IBD</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> KPV is not FDA-approved and is considered investigational. Use must be under physician supervision through licensed compounding pharmacies.
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
          <Card className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade KPV?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity KPV from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="#" onClick={(e) => { e.preventDefault(); }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-orange-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-orange-600 bg-background px-8 py-3 text-sm font-medium text-orange-600 shadow-sm transition-colors hover:bg-orange-50 dark:hover:bg-orange-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600">
                      View Anti-Inflammatory Stack
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
