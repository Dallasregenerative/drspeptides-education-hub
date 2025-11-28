import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Zap, Shield, Activity, FlaskConical, AlertCircle, TrendingUp } from "lucide-react";

export default function BlendCJC1295Ipamorelin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2 inline" />
            GH Optimization Stack
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            CJC-1295 & Ipamorelin
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Gold Standard Growth Hormone Optimization
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Synergistic GHRH and ghrelin receptor agonist combination for sustained, pulsatile GH release with minimal side effects
          </p>
        </div>
      </section>

      {/* Composition */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Dual-Action Composition</CardTitle>
            <CardDescription>5mg CJC-1295 (No DAC) + 5mg Ipamorelin per vial</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">CJC-1295 (No DAC)</CardTitle>
                <Badge variant="secondary">5mg</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mechanism:</strong> GHRH analog, pituitary stimulation
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Role:</strong> Amplifies natural GH pulses, extends GH half-life
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Ipamorelin</CardTitle>
                <Badge variant="secondary">5mg</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mechanism:</strong> Ghrelin receptor agonist
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Role:</strong> Initiates GH pulses, selective GH release
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>

      {/* Synergy */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Synergistic Amplification</h2>
            <p className="text-lg text-muted-foreground">
              Dual-pathway GH stimulation creates superior effects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Enhanced GH Release
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ipamorelin initiates GH pulses. CJC-1295 amplifies and extends them. Combined effect produces 3-5x greater GH elevation than either alone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Preserved Pulsatility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintains natural GH pulse patterns. Avoids receptor desensitization. Preserves negative feedback mechanisms for long-term safety.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Minimal Side Effects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ipamorelin's selectivity avoids cortisol/prolactin elevation. CJC-1295 (No DAC) short half-life prevents excessive accumulation. Clean GH optimization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Comprehensive Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lean mass gains, fat loss, improved sleep quality, enhanced recovery, skin/hair improvements, cognitive benefits from sustained GH elevation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Research Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Anti-Aging & Longevity</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• GH restoration in aging adults</li>
                  <li>• Improved body composition</li>
                  <li>• Enhanced vitality and energy</li>
                  <li>• Skin elasticity and hair quality</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Athletic Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lean muscle mass gains</li>
                  <li>• Accelerated recovery</li>
                  <li>• Enhanced endurance</li>
                  <li>• Improved sleep quality</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Metabolic Optimization</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Visceral fat reduction</li>
                  <li>• Insulin sensitivity improvement</li>
                  <li>• Metabolic rate enhancement</li>
                  <li>• Lipid profile optimization</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recovery & Healing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Post-surgical recovery</li>
                  <li>• Injury rehabilitation</li>
                  <li>• Bone density support</li>
                  <li>• Tissue regeneration</li>
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
                <li>Diabetic retinopathy</li>
                <li>Pregnancy or breastfeeding</li>
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
            <CardDescription>Research-quality blend from DrsPeptides.com</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                CJC-1295 & Ipamorelin blend available exclusively through DrsPeptides.com
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
