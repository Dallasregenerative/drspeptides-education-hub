import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintButton from "@/components/PrintButton";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowLeft, Brain, FlaskConical, Pill, Shield } from "lucide-react";
import { Link } from "wouter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";

export default function PeptideLL37() {
  usePageTitle("LL-37 Guide - Antimicrobial Peptide Protocols", {
    description: "Complete LL-37 clinical guide. Cathelicidin antimicrobial peptide protocols and immune support.",
    keywords: "LL-37, cathelicidin, antimicrobial peptide, immune peptide, wound healing, infection support",
    schema: generatePeptideSchema({
      name: "LL-37",
      alternateName: ['Cathelicidin', 'Human Cathelicidin Antimicrobial Peptide'],
      description: "Complete LL-37 clinical guide. Cathelicidin antimicrobial peptide protocols and immune support.",
      path: "/peptides/ll-37",
      fdaStatus: "Investigational",
      category: "Immune Support"
    })
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-50 via-background to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
              Antimicrobial & Immune Modulation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              LL-37
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The only human cathelicidin antimicrobial peptide. Master immune modulator with broad-spectrum antimicrobial activity, wound healing promotion, and dual immunomodulatory functions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">145</div>
                <div className="text-sm text-muted-foreground">Academic Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Only</div>
                <div className="text-sm text-muted-foreground">Human Cathelicidin</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Broad</div>
                <div className="text-sm text-muted-foreground">Antimicrobial Spectrum</div>
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
              <strong>Investigational Peptide:</strong> LL-37 is not FDA-approved as a therapeutic agent. This information is for healthcare provider education only. Consult with a qualified physician before considering peptide therapy.
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
                  <CardTitle>What is LL-37?</CardTitle>
                  <CardDescription>The only human cathelicidin antimicrobial peptide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    LL-37, also called <strong>cathelicidin</strong>, is the <strong>only cathelicidin antimicrobial peptide found in humans</strong>. It is encoded by the CAMP gene on chromosome 3p21.3 and is cleaved from the precursor protein hCAP18 (human cationic antimicrobial peptide 18 kDa) by protease-3 to produce the active 37-amino acid peptide starting with two leucine residues (hence "LL-37").
                  </p>
                  <p>
                    LL-37 is an <strong>important part of the human innate immune system</strong>, capable of resisting various pathogens including bacteria, viruses, and fungi. Beyond its direct antimicrobial activity, it has <strong>multifunctional immunomodulatory effects</strong> that bridge innate and adaptive immunity, regulate inflammation, promote wound healing, and influence cancer biology.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Key Characteristics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Sequence:</strong> LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES (37 amino acids)</li>
                      <li><strong>Structure:</strong> Amphipathic α-helix (cationic, net charge +6)</li>
                      <li><strong>Gene:</strong> CAMP (cathelicidin antimicrobial peptide)</li>
                      <li><strong>Precursor:</strong> hCAP18 (cleaved by protease-3)</li>
                      <li><strong>Expression:</strong> Neutrophils, epithelial cells, NK cells, mast cells</li>
                      <li><strong>Primary effects:</strong> Antimicrobial, immunomodulation, wound healing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Primary Applications</CardTitle>
                  <CardDescription>Clinical and research uses of LL-37</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Antimicrobial Activity</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Broad-spectrum antibacterial (Gram+ and Gram-)</li>
                        <li>Antiviral activity</li>
                        <li>Antifungal effects</li>
                        <li>Anti-biofilm properties</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Wound Healing</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Accelerated wound closure</li>
                        <li>Angiogenesis promotion (VEGF-A stimulation)</li>
                        <li>Keratinocyte migration</li>
                        <li>Diabetic wound healing enhancement</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Immune Modulation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Chemotaxis (immune cell recruitment)</li>
                        <li>Cytokine/chemokine regulation</li>
                        <li>Pro-inflammatory and anti-inflammatory balance</li>
                        <li>Bridge between innate and adaptive immunity</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Inflammatory Diseases</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Sepsis treatment potential</li>
                        <li>Inflammatory skin conditions</li>
                        <li>Respiratory infections</li>
                        <li>Autoimmune disease modulation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dual Immunomodulatory Functions</CardTitle>
                  <CardDescription>Context-dependent pro- and anti-inflammatory effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    LL-37 exhibits <strong>two distinct functions in different tissues and microenvironments</strong> - a phenomenon described as "two sides of the same coin." This context-dependent activity allows it to maintain immune equilibrium.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Pro-Inflammatory Side</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Promotes inflammation and immune response</li>
                        <li>Anti-infective effects</li>
                        <li>Antitumor activity</li>
                        <li>Immune cell recruitment</li>
                        <li>Cytokine production stimulation</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Anti-Inflammatory Side</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Inhibits excessive inflammation</li>
                        <li>LPS neutralization (endotoxin binding)</li>
                        <li>Prevents cytokine storm</li>
                        <li>Tissue repair promotion</li>
                        <li>Resolution of inflammation</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Clinical significance:</strong> This dual functionality allows LL-37 to fight infections while preventing excessive inflammatory damage. Defects in LL-37 expression or processing can break this balance, resulting in immune abnormalities.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mechanisms Tab */}
            <TabsContent value="mechanisms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanisms of Action</CardTitle>
                  <CardDescription>How LL-37 exerts antimicrobial and immunomodulatory effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Direct Antimicrobial Activity</h4>
                      <p className="text-sm text-muted-foreground">
                        LL-37's <strong>cationic amphipathic α-helix structure</strong> enables it to interact with negatively charged bacterial cell walls, leading to membrane disruption and cell death.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Membrane disruption:</strong> Inserts into bacterial membranes, forming pores</li>
                        <li><strong>LPS binding:</strong> Neutralizes endotoxin from Gram-negative bacteria</li>
                        <li><strong>Broad spectrum:</strong> Active against Gram+ and Gram- bacteria</li>
                        <li><strong>Anti-biofilm:</strong> Disrupts bacterial biofilm formation</li>
                        <li><strong>Antiviral:</strong> Inhibits viral entry and replication</li>
                        <li><strong>Antifungal:</strong> Disrupts fungal cell membranes</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Chemotaxis & Immune Cell Recruitment</h4>
                      <p className="text-sm text-muted-foreground">
                        LL-37 acts as a <strong>chemoattractant</strong>, recruiting immune cells to sites of infection or injury through specific receptor activation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Neutrophil recruitment:</strong> Attracts first-line defenders</li>
                        <li><strong>Monocyte/macrophage chemotaxis:</strong> Enhances phagocytic response</li>
                        <li><strong>T cell recruitment:</strong> Bridges innate and adaptive immunity</li>
                        <li><strong>Mast cell activation:</strong> Promotes degranulation and mediator release</li>
                        <li><strong>Receptor activation:</strong> Works through FPRL1/FPR2 and other receptors</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Cytokine & Chemokine Regulation</h4>
                      <p className="text-sm text-muted-foreground">
                        LL-37 regulates the production of <strong>pro- and anti-inflammatory cytokines</strong>, maintaining the fine balance between immune activation and resolution.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Pro-inflammatory:</strong> Induces IL-1β, TNF-α, IL-6 (infection context)</li>
                        <li><strong>Anti-inflammatory:</strong> Suppresses excessive cytokine production</li>
                        <li><strong>Chemokine induction:</strong> Stimulates IL-8, MCP-1, RANTES</li>
                        <li><strong>Context-dependent:</strong> Effect varies by tissue and microenvironment</li>
                        <li><strong>Balance maintenance:</strong> Prevents both immunodeficiency and hyperinflammation</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Wound Healing & Angiogenesis</h4>
                      <p className="text-sm text-muted-foreground">
                        LL-37 promotes <strong>wound closure through multiple mechanisms</strong> including angiogenesis, cell migration, and tissue remodeling.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>VEGF-A stimulation:</strong> Promotes new blood vessel formation</li>
                        <li><strong>Keratinocyte migration:</strong> Accelerates re-epithelialization</li>
                        <li><strong>Fibroblast activation:</strong> Enhances collagen deposition</li>
                        <li><strong>Angiogenesis:</strong> Critical for wound vascularization</li>
                        <li><strong>Clinical evidence:</strong> Accelerates diabetic wound healing</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">LPS Neutralization & Endotoxin Binding</h4>
                      <p className="text-sm text-muted-foreground">
                        LL-37's cationic surface enables it to <strong>bind and neutralize lipopolysaccharide (LPS)</strong>, preventing excessive inflammatory responses in sepsis.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>LPS sequestration:</strong> Binds negatively charged endotoxin</li>
                        <li><strong>TLR4 blockade:</strong> Prevents excessive TLR4 activation</li>
                        <li><strong>Cytokine storm prevention:</strong> Reduces sepsis-related inflammation</li>
                        <li><strong>Sepsis treatment potential:</strong> Therapeutic target for severe infections</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-2">
                      <h4 className="font-semibold text-lg">Adaptive Immunity Modulation</h4>
                      <p className="text-sm text-muted-foreground">
                        LL-37 <strong>bridges innate and adaptive immunity</strong> by modulating dendritic cell function and T cell responses.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Dendritic cell maturation:</strong> Enhances antigen presentation</li>
                        <li><strong>T cell activation:</strong> Promotes adaptive immune responses</li>
                        <li><strong>Immune memory:</strong> Facilitates long-term protection</li>
                        <li><strong>Autoimmunity modulation:</strong> Can influence autoimmune disease progression</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Structural Basis for Activity</CardTitle>
                  <CardDescription>How LL-37's structure enables its functions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Amphipathic α-Helix</h4>
                      <p className="text-sm">
                        At neutral pH, LL-37 forms an <strong>amphipathic α-helix</strong> with a cationic hydrophobic surface. This structure is critical for membrane interaction and antimicrobial activity.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Three Functional Regions</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>N-terminal helix (residues 2-30):</strong> Peptide oligomerization, chemotaxis, hemolytic activity</li>
                        <li><strong>C-terminal helix:</strong> Antipathogen effect, antimicrobial activity</li>
                        <li><strong>C-terminal tail (residues 31-37):</strong> Tetramer formation, effector cell activation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cationic Charge (+6)</h4>
                      <p className="text-sm">
                        The net positive charge enables LL-37 to interact with negatively charged bacterial membranes, LPS, and nucleotides - essential for antimicrobial and immunomodulatory functions.
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
                  <CardDescription>Evidence from clinical and preclinical studies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Immunomodulation & Disease Outcome Review</h4>
                        <Badge variant="outline" className="text-xs">145 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yang B et al. (2020)</strong> - PMC7246396, Biomed Res Int
                      </p>
                      <p className="text-sm">
                        Comprehensive review demonstrating that LL-37 has <strong>multifunctional immunomodulatory effects</strong> beyond antimicrobial activity. Shows dual functionality: promotes inflammation/immune response for anti-infective/antitumor effects, while also inhibiting excessive inflammation.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Dual functions:</strong> Pro- and anti-inflammatory depending on context</li>
                        <li><strong>Immune regulation:</strong> Bridges innate and adaptive immunity</li>
                        <li><strong>Cytokine balance:</strong> Maintains pro-/anti-inflammatory equilibrium</li>
                        <li><strong>Disease implications:</strong> Key factor in inflammation-related diseases and cancers</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Wound Healing Activity</h4>
                        <Badge variant="outline" className="text-xs">324 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Ramos R et al. (2011)</strong> - PubMed 21693141
                      </p>
                      <p className="text-sm">
                        Demonstrated that LL-37 has a <strong>key role in wound regeneration through vascularization</strong>. LL-37 promotes angiogenesis and accelerates wound closure.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Accelerated wound healing rates</li>
                        <li>VEGF-A production stimulation</li>
                        <li>Angiogenesis promotion</li>
                        <li>Vascularization enhancement</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Diabetic Wound Healing Enhancement</h4>
                        <Badge variant="outline" className="text-xs">87 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Yang X et al. (2020)</strong> - Chitosan hydrogel study
                      </p>
                      <p className="text-sm">
                        LL-37 <strong>accelerated wound healing rates and stimulated VEGF-A production</strong> within wound tissue in diabetic models. Chitosan hydrogel encapsulated with LL-37 promoted wound healing.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Accelerated diabetic wound closure</li>
                        <li>VEGF-A upregulation in wound tissue</li>
                        <li>Enhanced angiogenesis in diabetic wounds</li>
                        <li>Clinical potential for chronic wounds</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">LL-37 Cream in Diabetic Foot Ulcers</h4>
                        <Badge variant="outline" className="text-xs">26 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Miranda E et al. (2023)</strong> - Clinical efficacy study
                      </p>
                      <p className="text-sm">
                        Clinical study analyzing the efficacy of <strong>LL-37 cream in enhancing wound healing rate</strong> and decreasing inflammatory markers (IL-1α, TNF-α) in diabetic foot ulcers.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Enhanced wound healing rate</li>
                        <li>Decreased IL-1α levels</li>
                        <li>Reduced TNF-α levels</li>
                        <li>Clinical application for diabetic ulcers</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Antimicrobial & Anti-Biofilm Activity</h4>
                        <Badge variant="outline" className="text-xs">332 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Duplantier AJ et al. (2013)</strong> - Frontiers in Immunology
                      </p>
                      <p className="text-sm">
                        LL-37 demonstrated <strong>antimicrobial and anti-biofilm activity against multiple Gram-positive and Gram-negative bacteria</strong>. Effective against resistant strains and biofilms.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Broad-spectrum antibacterial activity</li>
                        <li>Anti-biofilm properties</li>
                        <li>Effective against resistant bacteria</li>
                        <li>Potential for antibiotic-resistant infections</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Cathelicidin in Inflammatory Skin Disease</h4>
                        <Badge variant="outline" className="text-xs">58 Citations</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Moreno-Angarita A et al. (2019)</strong> - PMC7388365
                      </p>
                      <p className="text-sm">
                        LL-37 plays a critical role in <strong>inflammatory skin diseases</strong> including rosacea, psoriasis, and atopic dermatitis. Dysregulated LL-37 processing contributes to disease pathogenesis.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rosacea: Disturbed cathelicidin processing</li>
                        <li>Psoriasis: Elevated LL-37 levels</li>
                        <li>Atopic dermatitis: Reduced LL-37 expression</li>
                        <li>Therapeutic target for skin conditions</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">Atherosclerosis & Cardiovascular Disease</h4>
                        <Badge variant="outline" className="text-xs">Multiple Studies</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>AHA Journals</strong> - Atherosclerosis research
                      </p>
                      <p className="text-sm">
                        LL-37 is produced in <strong>atherosclerotic lesions</strong>, where it may function as an immune modulator by activating adhesion molecule and chemokine expression.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Present in atherosclerotic plaques</li>
                        <li>Modulates vascular inflammation</li>
                        <li>Influences plaque stability</li>
                        <li>Potential cardiovascular therapeutic target</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clinical Applications Under Investigation</CardTitle>
                  <CardDescription>Therapeutic potential in various conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Infectious Diseases</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Antibiotic-resistant bacterial infections</li>
                        <li>Biofilm-associated infections</li>
                        <li>Sepsis treatment adjunct</li>
                        <li>Respiratory infections</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Wound Healing</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Diabetic foot ulcers</li>
                        <li>Chronic non-healing wounds</li>
                        <li>Surgical wound healing</li>
                        <li>Burn wound recovery</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Inflammatory Conditions</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Inflammatory skin diseases (rosacea, psoriasis)</li>
                        <li>Inflammatory bowel disease</li>
                        <li>Autoimmune disorders</li>
                        <li>Chronic inflammatory conditions</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Cancer</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Antitumor immune responses</li>
                        <li>Cancer immunotherapy adjunct</li>
                        <li>Tumor microenvironment modulation</li>
                        <li>Context-dependent effects (pro- or anti-tumor)</li>
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
                      <strong>Important:</strong> LL-37 is not FDA-approved as a therapeutic agent. The following protocols are based on research studies and are for healthcare provider reference only. All use must be under physician supervision.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Topical Application (Wound Healing)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">LL-37 Cream/Gel:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Formulation:</strong> 0.1-1% LL-37 cream or hydrogel</li>
                          <li><strong>Application:</strong> Apply to wound bed 1-2 times daily</li>
                          <li><strong>Duration:</strong> Until wound closure achieved</li>
                          <li><strong>Indications:</strong> Diabetic ulcers, chronic wounds, burns</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-3 rounded space-y-2">
                        <p className="text-sm font-medium">Clinical Evidence:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Accelerated healing in diabetic foot ulcers (Miranda 2023)</li>
                          <li>Reduced inflammatory markers (IL-1α, TNF-α)</li>
                          <li>Enhanced VEGF-A production and angiogenesis</li>
                          <li>Well-tolerated with minimal side effects</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Subcutaneous Injection (Systemic Effects)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Injectable Dosing (Investigational):</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 1-5 mg per injection (based on preclinical scaling)</li>
                          <li><strong>Frequency:</strong> 3-5 times per week</li>
                          <li><strong>Administration:</strong> Subcutaneous, abdomen or thigh</li>
                          <li><strong>Duration:</strong> 4-8 week cycles</li>
                        </ul>
                      </div>
                      <Alert className="mt-3 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                          <strong>Note:</strong> Systemic LL-37 administration is highly experimental with limited human data. Use only under strict medical supervision.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 space-y-3">
                      <h4 className="font-semibold text-lg">Immune Support Protocol (Theoretical)</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Systemic Immune Modulation:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li><strong>Dose:</strong> 2-3 mg subcutaneous, 3x per week</li>
                          <li><strong>Timing:</strong> Morning or early afternoon</li>
                          <li><strong>Duration:</strong> 4-8 weeks</li>
                          <li><strong>Goal:</strong> Enhanced antimicrobial defense, immune balance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administration Guidelines</CardTitle>
                  <CardDescription>Best practices for LL-37 use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Topical Application</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Clean wound bed before application</li>
                        <li>Apply thin layer to entire wound surface</li>
                        <li>Cover with appropriate dressing</li>
                        <li>Monitor for signs of infection or irritation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Subcutaneous Injection</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rotate injection sites</li>
                        <li>Use sterile technique</li>
                        <li>Inject slowly to minimize discomfort</li>
                        <li>Monitor injection sites for reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Storage</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Refrigerate at 2-8°C (36-46°F)</li>
                        <li>Protect from light</li>
                        <li>Topical: Use within 30 days of opening</li>
                        <li>Injectable: Use within 30 days of reconstitution</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Track wound healing progress (topical)</li>
                        <li>Monitor for signs of infection</li>
                        <li>Assess inflammatory markers if systemic use</li>
                        <li>Regular physician follow-up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Synergistic Combinations</CardTitle>
                  <CardDescription>Peptides that may work well with LL-37</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Thymosin Alpha-1 (Immune Synergy)</h4>
                      <p className="text-sm">
                        <strong>Complementary immune modulation.</strong> Thymosin Alpha-1 enhances T cell function while LL-37 provides antimicrobial defense and innate immunity - synergistic for infections and sepsis.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>LL-37: 2-3 mg subcutaneous, 3x per week</li>
                        <li>Thymosin Alpha-1: 1.6 mg subcutaneous, 2x per week</li>
                        <li>See <Link href="/stacking-guide"><a className="text-emerald-600 dark:text-emerald-400 hover:underline">Immune Support Stack</a></Link></li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">KPV (Anti-Inflammatory)</h4>
                      <p className="text-sm">
                        <strong>Balanced inflammation control.</strong> KPV provides potent anti-inflammatory effects while LL-37 maintains antimicrobial defense - ideal for inflammatory conditions with infection risk.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>LL-37: 2 mg subcutaneous, 3x per week</li>
                        <li>KPV: 500-1000 mcg subcutaneous, daily</li>
                        <li>4-8 week cycles</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-rose-600 dark:text-rose-400">BPC-157 (Wound Healing)</h4>
                      <p className="text-sm">
                        <strong>Enhanced tissue repair.</strong> BPC-157's systemic healing effects complement LL-37's wound healing and antimicrobial properties - powerful combination for injury recovery.
                      </p>
                      <p className="text-sm font-medium">Protocol:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>LL-37: Topical cream to wound + 2 mg subcutaneous 3x/week</li>
                        <li>BPC-157: 250-500 mcg subcutaneous, daily</li>
                        <li>Until wound healing complete</li>
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
                        <li>Known hypersensitivity to LL-37 or related peptides</li>
                        <li>Active malignancy (context-dependent cancer effects)</li>
                        <li>Pregnancy and breastfeeding (insufficient safety data)</li>
                        <li>Severe autoimmune disease (may exacerbate in some contexts)</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Relative Contraindications</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Inflammatory skin conditions (rosacea, psoriasis) - may worsen</li>
                        <li>Atherosclerosis (LL-37 found in plaques - effects unclear)</li>
                        <li>Uncontrolled inflammatory disorders</li>
                        <li>Children under 18 (insufficient pediatric data)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                      <h4 className="font-semibold">Pre-Treatment Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Comprehensive medical history and physical examination</li>
                        <li>Cancer screening (due to context-dependent cancer effects)</li>
                        <li>Autoimmune disease assessment</li>
                        <li>Skin condition evaluation (if topical use)</li>
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
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Topical Use (Generally Well-Tolerated)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Mild irritation:</strong> Occasional, usually transient</li>
                        <li><strong>Redness:</strong> Localized to application site</li>
                        <li><strong>Itching:</strong> Rare, typically mild</li>
                        <li><strong>Clinical studies:</strong> Minimal side effects reported</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Systemic Use (Limited Human Data)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Injection site reactions:</strong> Redness, swelling, discomfort</li>
                        <li><strong>Flu-like symptoms:</strong> Possible with immune activation</li>
                        <li><strong>Inflammatory flares:</strong> In susceptible individuals</li>
                        <li><strong>Unknown long-term effects:</strong> Insufficient human data</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Theoretical Concerns</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Cancer:</strong> Context-dependent effects (pro- or anti-tumor)</li>
                        <li><strong>Autoimmunity:</strong> May exacerbate certain autoimmune conditions</li>
                        <li><strong>Inflammatory skin disease:</strong> Can worsen rosacea, psoriasis</li>
                        <li><strong>Atherosclerosis:</strong> Role in cardiovascular disease unclear</li>
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
                      <h4 className="font-semibold">Topical Use Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly wound assessment (size, depth, appearance)</li>
                        <li>Signs of infection monitoring</li>
                        <li>Local reaction assessment</li>
                        <li>Healing progress documentation</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Systemic Use Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Weekly check-ins during initial phase (weeks 1-4)</li>
                        <li>Inflammatory marker monitoring (CRP, ESR)</li>
                        <li>Immune function assessment</li>
                        <li>Side effect tracking</li>
                        <li>Monthly follow-up after initial phase</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <h4 className="font-semibold">Long-Term Monitoring</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Quarterly comprehensive evaluations</li>
                        <li>Annual cancer screening</li>
                        <li>Autoimmune marker monitoring (if applicable)</li>
                        <li>Cardiovascular risk assessment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality & Sourcing Standards</CardTitle>
                  <CardDescription>Ensuring pharmaceutical-grade LL-37</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical:</strong> Only use LL-37 from verified compounding pharmacies with proper quality control. Gray and black market sources pose serious health risks.
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
                      <li><strong>Research status:</strong> Clinical trials ongoing for wound healing</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      <strong>Important:</strong> LL-37 is not FDA-approved and is considered investigational. Use must be under physician supervision through licensed compounding pharmacies.
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
                <h3 className="text-2xl font-bold">Ready to Source Medical-Grade LL-37?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DrsPeptides.com provides &gt;99% purity LL-37 from cGMP-certified compounding pharmacies with comprehensive third-party testing and physician oversight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="#" onClick={(e) => { e.preventDefault(); }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    Visit DrsPeptides.com
                  </a>
                  <Link href="/stacking-guide">
                    <a className="inline-flex items-center justify-center rounded-md border border-emerald-600 bg-background px-8 py-3 text-sm font-medium text-emerald-600 shadow-sm transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
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
    </div>
  );
}
