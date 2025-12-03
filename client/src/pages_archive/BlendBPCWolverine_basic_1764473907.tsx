import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Zap, Shield, Activity, FlaskConical, AlertCircle, Dumbbell } from "lucide-react";

export default function BlendBPCWolverine() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Dumbbell className="w-4 h-4 mr-2 inline" />
            Ultimate Recovery Stack
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            BPC-Wolverine
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            BPC-157 + TB-500 + MGF Triple-Action Recovery
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced three-peptide formula combining tissue regeneration, cell migration, and muscle-specific protein synthesis for comprehensive musculoskeletal recovery
          </p>
        </div>
      </section>

      {/* Composition */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Activity className="w-8 h-8 text-primary" />
              Triple-Action Composition
            </CardTitle>
            <CardDescription>10mg BPC-157 + 2.5mg TB-500 + 1mg MGF per vial</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">BPC-157</CardTitle>
                  <Badge variant="secondary">10mg</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Mechanism:</strong> VEGFR2 activation, angiogenesis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Role:</strong> Tissue regeneration foundation, vascular support
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">TB-500</CardTitle>
                  <Badge variant="secondary">2.5mg</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Mechanism:</strong> Actin polymerization, cell migration
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Role:</strong> Cell migration, flexibility, systemic distribution
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">MGF</CardTitle>
                  <Badge variant="secondary">1mg</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Mechanism:</strong> Satellite cell activation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Role:</strong> Muscle-specific regeneration, hypertrophy
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
            <h2 className="text-3xl font-bold">Triple-Action Synergy</h2>
            <p className="text-lg text-muted-foreground">
              Three complementary mechanisms create superior recovery effects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Enhanced Angiogenesis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  BPC-157 + TB-500 dual angiogenic stimulation creates robust vascular network. MGF adds localized muscle capillarization for superior nutrient delivery.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Muscle-Specific Repair
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  MGF uniquely targets satellite cell activation for muscle regeneration. BPC-157 + TB-500 provide structural support and anti-inflammatory environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Multi-Pathway Anti-Inflammatory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  BPC-157 modulates inflammatory cytokines. TB-500 reduces acute inflammation. Combined effects create optimal healing environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Comprehensive Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Local effects (BPC-157 + MGF) target specific injury sites. Systemic effects (TB-500) provide whole-body regenerative support.
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
            <CardDescription>Optimal use cases for BPC-Wolverine</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Athletic Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Accelerated recovery from training</li>
                  <li>• Muscle microtrauma repair</li>
                  <li>• Injury prevention</li>
                  <li>• Enhanced adaptation</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Musculoskeletal Injuries</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Severe tendon/ligament tears</li>
                  <li>• Muscle strains and tears</li>
                  <li>• Joint injuries</li>
                  <li>• Post-surgical recovery</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Chronic Conditions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tendinopathy</li>
                  <li>• Degenerative joint conditions</li>
                  <li>• Muscle wasting</li>
                  <li>• Inflammatory disorders</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Performance Enhancement</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lean muscle optimization</li>
                  <li>• Enhanced training capacity</li>
                  <li>• Reduced downtime</li>
                  <li>• Improved tissue quality</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Safety */}
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
                <li>Active malignancy</li>
                <li>Pregnancy or breastfeeding</li>
                <li>Known hypersensitivity</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Source */}
      <section className="container py-12 pb-20">
        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl">Pharmaceutical-Grade Source</CardTitle>
            <CardDescription>Research-quality BPC-Wolverine from DrsPeptides.com</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Third-party tested for purity and potency. cGMP-compliant facilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Pre-Mixed Formula</h4>
                  <p className="text-sm text-muted-foreground">
                    Precisely formulated 10/2.5/1mg ratio. Lyophilized powder for reconstitution.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                BPC-Wolverine available exclusively through DrsPeptides.com for licensed healthcare providers.
              </p>
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href="https://drspeptides.com/products/bpc-wolverine-bpc-157-tb-500-mgf-10-2-5-1" target="_blank" rel="noopener noreferrer">
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
