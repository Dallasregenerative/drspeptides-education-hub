import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, AlertCircle } from "lucide-react";

export default function BlendSelankSemax() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Brain className="w-4 h-4 mr-2 inline" />
            Cognitive Enhancement Stack
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">Selank & Semax</h1>
          <p className="text-xl text-muted-foreground">Russian Nootropic Duo for Cognitive Optimization</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Synergistic anxiolytic and cognitive enhancer combination for mental clarity, focus, and stress resilience
          </p>
        </div>
      </section>

      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Dual-Action Composition</CardTitle>
            <CardDescription>Complementary mechanisms for cognitive optimization</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Selank</CardTitle>
                <Badge variant="secondary">Anxiolytic</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mechanism:</strong> GABA modulation, anxiety reduction
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Role:</strong> Stress resilience, emotional stability, calm focus
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semax</CardTitle>
                <Badge variant="secondary">Cognitive Enhancer</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Mechanism:</strong> BDNF elevation, neuroplasticity
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Role:</strong> Mental clarity, focus, memory, learning
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Synergistic Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Enhanced Cognitive Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Semax boosts BDNF for neuroplasticity. Selank reduces anxiety-related cognitive interference. Combined: clear, focused mental performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Stress Resilience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Selank's anxiolytic effects reduce stress response. Semax protects neurons from stress-induced damage. Dual stress protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Research Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Cognitive Enhancement</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mental clarity and focus</li>
                  <li>• Memory and learning</li>
                  <li>• Processing speed</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Anxiety & Stress</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Generalized anxiety</li>
                  <li>• Performance anxiety</li>
                  <li>• Stress resilience</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12">
        <Card className="max-w-4xl mx-auto border-amber-200 dark:border-amber-900">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <AlertCircle className="w-8 h-8 text-amber-600" />
              Safety Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Generally Well-Tolerated</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Extensive Russian research shows excellent safety profile. Minimal side effects. Non-sedating.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-12 pb-20">
        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl">Pharmaceutical-Grade Source</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Selank & Semax available through DrsPeptides.com
            </p>
            <Button size="lg" asChild>
              <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
                View at DrsPeptides.com
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
