import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Shield, Flame, Activity, FlaskConical, AlertCircle } from "lucide-react";

export default function BlendFormulaRG5555() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <FlaskConical className="w-4 h-4 mr-2 inline" />
            Regeneration & Gut Health Blend
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Formula RG-5555
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            BPC-157 + TB-500 + KPV + Larazotide
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive four-component blend targeting tissue regeneration, immune modulation, inflammatory response, and gut barrier integrity for systemic cellular health
          </p>
        </div>
      </section>

      {/* Composition Section */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Activity className="w-8 h-8 text-primary" />
              Synergistic Composition
            </CardTitle>
            <CardDescription>
              Four peptides targeting complementary regenerative and protective pathways
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">BPC-157</CardTitle>
                  <Badge variant="secondary">500mcg per capsule</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pentadecapeptide investigated for tissue regeneration and cellular pathway modulation. Targets VEGFR2 activation, NO-system modulation, and gastrointestinal protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">TB-500</CardTitle>
                  <Badge variant="secondary">500mcg per capsule</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Thymosin Beta-4 fragment studied for cell migration, angiogenesis, and tissue repair. Promotes actin polymerization and wound healing through multiple pathways.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">KPV</CardTitle>
                  <Badge variant="secondary">500mcg per capsule</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Melanocortin-derived tripeptide investigated for anti-inflammatory effects. PepT1-mediated transport enables targeted delivery to inflammatory sites, especially in IBD.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Larazotide</CardTitle>
                  <Badge variant="secondary">500mcg per capsule</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Zonulin antagonist explored for gut barrier integrity. Modulates tight junction permeability to reduce intestinal hyperpermeability and associated inflammation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Synergistic Benefits */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Synergistic Mechanisms</h2>
            <p className="text-lg text-muted-foreground">
              Four complementary pathways for comprehensive regeneration and gut health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Tissue Regeneration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">BPC-157 + TB-500 Synergy</h4>
                  <p className="text-sm text-muted-foreground">
                    BPC-157 activates VEGFR2 for angiogenesis while TB-500 promotes cell migration through actin polymerization. Complementary pathways accelerate wound healing and tissue repair.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Enhanced Recovery</h4>
                  <p className="text-sm text-muted-foreground">
                    Dual angiogenic stimulation + cellular migration creates optimal microenvironment for tissue regeneration. Studied for tendon, ligament, muscle, and gastrointestinal repair.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-primary" />
                  Anti-Inflammatory Action
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">KPV Contribution</h4>
                  <p className="text-sm text-muted-foreground">
                    PepT1-mediated transport delivers KPV directly to inflammatory sites. Inhibits NF-κB activation and pro-inflammatory cytokine production, especially effective in IBD models.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">BPC-157 Anti-Inflammatory Effects</h4>
                  <p className="text-sm text-muted-foreground">
                    NO-system modulation and VEGFR2 activation provide additional anti-inflammatory benefits. Synergizes with KPV for comprehensive inflammatory response modulation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Gut Barrier Integrity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Larazotide Mechanism</h4>
                  <p className="text-sm text-muted-foreground">
                    Zonulin antagonist that modulates tight junction permeability. Reduces intestinal hyperpermeability ("leaky gut") associated with inflammatory and autoimmune conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">BPC-157 Gastrointestinal Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    Studied for ulcer healing, IBD protection, and mucosal integrity. Complements Larazotide's barrier function with direct tissue regeneration and cytoprotection.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Systemic Cellular Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Multi-System Benefits</h4>
                  <p className="text-sm text-muted-foreground">
                    TB-500's systemic effects on cell migration and differentiation extend beyond local tissue repair. Investigated for cardiovascular, neurological, and immune system support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comprehensive Approach</h4>
                  <p className="text-sm text-muted-foreground">
                    Tissue regeneration (BPC-157, TB-500) + inflammation control (KPV, BPC-157) + barrier protection (Larazotide) = holistic cellular health optimization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Applications */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Research Applications</CardTitle>
            <CardDescription>
              Investigated areas for Formula RG-5555 synergistic blend
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Gastrointestinal Health</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Inflammatory bowel disease (IBD)</li>
                  <li>• Intestinal permeability disorders</li>
                  <li>• Ulcer healing and mucosal protection</li>
                  <li>• Post-surgical gastrointestinal recovery</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Musculoskeletal Repair</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tendon and ligament injuries</li>
                  <li>• Muscle tears and strains</li>
                  <li>• Joint health and cartilage support</li>
                  <li>• Post-injury recovery acceleration</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Inflammatory Conditions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chronic inflammatory disorders</li>
                  <li>• Autoimmune-related inflammation</li>
                  <li>• Systemic inflammatory response</li>
                  <li>• Inflammatory pain management</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Wound Healing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Surgical wound recovery</li>
                  <li>• Chronic wound management</li>
                  <li>• Burn healing support</li>
                  <li>• Tissue regeneration optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Research Protocols */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Research Protocols</CardTitle>
            <CardDescription>
              Investigational dosing based on individual component research
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Standard Research Protocol</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p><strong>Dosage:</strong> 1-2 capsules daily (500mcg each component per capsule)</p>
                  <p><strong>Timing:</strong> Morning and/or evening, with or without food</p>
                  <p><strong>Duration:</strong> Investigational cycles typically 4-12 weeks</p>
                  <p><strong>Monitoring:</strong> Symptom tracking, inflammatory markers, gut health assessments</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">Component Dosing Rationale</h3>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="font-semibold">Equal Dosing (500mcg each)</p>
                    <p className="text-sm text-muted-foreground">
                      Balanced approach ensures all four pathways are adequately supported. Individual components typically studied at 250-1000mcg daily, making 500mcg a moderate, well-tolerated dose.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="font-semibold">Synergistic Optimization</p>
                    <p className="text-sm text-muted-foreground">
                      Lower individual doses may achieve superior results through synergistic interactions compared to higher doses of single components. Reduces side effect risk while maintaining efficacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Safety Considerations */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto border-amber-200 dark:border-amber-900">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <AlertCircle className="w-8 h-8 text-amber-600" />
              Safety Considerations
            </CardTitle>
            <CardDescription>
              Important information for research use
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-3">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">Contraindications</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-amber-800 dark:text-amber-200">
                <li>Active malignancy (angiogenic peptides may theoretically promote tumor growth)</li>
                <li>Pregnancy or breastfeeding (insufficient safety data)</li>
                <li>Severe kidney or liver disease</li>
                <li>Known hypersensitivity to any component</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg space-y-3">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Potential Side Effects</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Generally well-tolerated in research settings. Possible effects include mild gastrointestinal upset, injection site reactions (if applicable), headache, or fatigue. Most side effects are transient and resolve with continued use or dose adjustment.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Drug Interactions</h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Limited interaction data available. Theoretical concerns with anticoagulants (TB-500 may affect clotting), immunosuppressants (KPV has immunomodulatory effects), and medications affecting gut permeability. Consult healthcare provider regarding all medications.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Source & Ordering */}
      <section className="container py-12 pb-20">
        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl">Pharmaceutical-Grade Source</CardTitle>
            <CardDescription>
              Research-quality Formula RG-5555 from DrsPeptides.com
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Third-party tested for purity and potency. Manufactured in cGMP-compliant facilities with rigorous quality control for all four components.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Research-Grade Formulation</h4>
                  <p className="text-sm text-muted-foreground">
                    Precise 500mcg dosing of each component in enteric-coated capsules for optimal bioavailability and gastrointestinal protection. 60 capsules per bottle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Healthcare Provider Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Available exclusively through licensed healthcare providers. Not for direct consumer purchase.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Formula RG-5555 is available exclusively through DrsPeptides.com for licensed healthcare providers conducting research or treating patients under appropriate medical supervision.
              </p>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href="https://drspeptides.com/products/formula-rg-5555-capsules-500-500-500-500mcg" target="_blank" rel="noopener noreferrer">
                  View Formula RG-5555 at DrsPeptides.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
