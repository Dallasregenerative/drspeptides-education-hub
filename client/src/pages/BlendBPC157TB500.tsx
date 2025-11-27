import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Zap, Shield, Activity, FlaskConical, AlertCircle } from "lucide-react";

export default function BlendBPC157TB500() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <FlaskConical className="w-4 h-4 mr-2 inline" />
            Classic Healing Stack
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            BPC-157 & TB-500
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            The Gold Standard Tissue Repair Combination
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most researched and widely-used peptide stack combining complementary angiogenic and cell migration pathways for accelerated tissue regeneration and recovery
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
              Two complementary peptides targeting distinct regenerative pathways
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">BPC-157</CardTitle>
                  <Badge variant="secondary">Body Protection Compound</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Mechanism:</strong> VEGFR2 activation, NO-system modulation, angiogenesis promotion
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Research:</strong> 491+ combined citations across tendon healing (173), NO-system (155), and GI protection (163) studies
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key Benefits:</strong> Tissue regeneration, ulcer healing, tendon/ligament repair, anti-inflammatory
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">TB-500</CardTitle>
                  <Badge variant="secondary">Thymosin Beta-4 Fragment</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Mechanism:</strong> Actin polymerization, cell migration, angiogenesis, anti-inflammatory
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Research:</strong> Extensively studied for wound healing, tissue repair, and cardiovascular protection
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key Benefits:</strong> Cell migration, flexibility, reduced inflammation, systemic tissue repair
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
            <h2 className="text-3xl font-bold">Why Combine BPC-157 & TB-500?</h2>
            <p className="text-lg text-muted-foreground">
              Complementary mechanisms create superior regenerative effects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Dual Angiogenic Stimulation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>BPC-157:</strong> Activates VEGFR2 for new blood vessel formation
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>TB-500:</strong> Promotes endothelial cell migration and vessel maturation
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Synergy:</strong> Enhanced vascularization accelerates nutrient delivery and waste removal for optimal healing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Complementary Tissue Repair
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>BPC-157:</strong> Stabilizes gastric juices, protects endothelium, modulates NO
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>TB-500:</strong> Promotes actin polymerization, cell differentiation, tissue remodeling
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Synergy:</strong> Structural support + cellular migration = faster, more complete tissue regeneration
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Enhanced Anti-Inflammatory
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>BPC-157:</strong> Modulates inflammatory cytokines, protects against NSAIDs
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>TB-500:</strong> Reduces acute inflammation, downregulates inflammatory genes
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Synergy:</strong> Multi-pathway inflammation control creates optimal healing environment
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Systemic vs Local Effects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>BPC-157:</strong> Strong local tissue effects, especially GI and musculoskeletal
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>TB-500:</strong> Systemic distribution, cardiovascular and neurological benefits
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Synergy:</strong> Comprehensive healing from targeted local repair to whole-body regeneration
                </p>
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
              Most commonly investigated areas for BPC-157 & TB-500 combination
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Musculoskeletal Injuries</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tendon and ligament tears</li>
                  <li>• Muscle strains and tears</li>
                  <li>• Joint injuries and arthritis</li>
                  <li>• Post-surgical recovery</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Gastrointestinal Health</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Inflammatory bowel disease</li>
                  <li>• Ulcer healing (gastric, duodenal)</li>
                  <li>• Leaky gut syndrome</li>
                  <li>• Post-surgical GI recovery</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Athletic Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Injury prevention and recovery</li>
                  <li>• Training-related microtrauma</li>
                  <li>• Flexibility and range of motion</li>
                  <li>• Reduced downtime from injuries</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Wound Healing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Surgical wound recovery</li>
                  <li>• Chronic wound management</li>
                  <li>• Burn healing support</li>
                  <li>• Scar tissue reduction</li>
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
              Common investigational dosing for BPC-157 & TB-500 combination
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3">Standard Research Protocol</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="font-semibold">BPC-157 Dosing:</p>
                    <p className="text-sm text-muted-foreground">250-500mcg twice daily (subcutaneous or oral)</p>
                  </div>
                  <div>
                    <p className="font-semibold">TB-500 Dosing:</p>
                    <p className="text-sm text-muted-foreground">2-2.5mg twice weekly (subcutaneous)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Duration:</p>
                    <p className="text-sm text-muted-foreground">4-6 weeks for acute injuries, 8-12 weeks for chronic conditions</p>
                  </div>
                  <div>
                    <p className="font-semibold">Administration:</p>
                    <p className="text-sm text-muted-foreground">Can be injected near injury site or systemically. BPC-157 also effective orally.</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">Why This Combination Works</h3>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="font-semibold">Complementary Half-Lives</p>
                    <p className="text-sm text-muted-foreground">
                      BPC-157's shorter half-life (daily dosing) provides consistent tissue protection while TB-500's longer half-life (twice weekly) maintains systemic regenerative effects.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="font-semibold">Non-Overlapping Mechanisms</p>
                    <p className="text-sm text-muted-foreground">
                      Different molecular targets mean no receptor competition or pathway saturation. Each peptide works through distinct mechanisms for additive benefits.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="font-semibold">Proven Safety Profile</p>
                    <p className="text-sm text-muted-foreground">
                      Both peptides extensively researched with excellent safety profiles. Combination well-tolerated in research settings with minimal side effects.
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
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Contraindications</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-amber-800 dark:text-amber-200">
                <li>Active malignancy (angiogenic effects may theoretically promote tumor growth)</li>
                <li>Pregnancy or breastfeeding</li>
                <li>Known hypersensitivity to either component</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Potential Side Effects</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Generally well-tolerated. Possible mild injection site reactions, temporary fatigue, or headache. Most side effects resolve quickly and are minimal.
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
              Research-quality BPC-157 & TB-500 from DrsPeptides.com
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Third-party tested for purity and potency. Manufactured in cGMP-compliant facilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Available Formats</h4>
                  <p className="text-sm text-muted-foreground">
                    Individual vials or convenient pre-mixed combination. Lyophilized powder for reconstitution.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                BPC-157 & TB-500 available exclusively through DrsPeptides.com for licensed healthcare providers.
              </p>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
                  View at DrsPeptides.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
