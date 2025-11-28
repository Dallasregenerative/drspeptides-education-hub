import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Beaker, Activity, Heart, Scale, Shield, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function BlendTirzepatideBPC157() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="default" className="text-sm">Synergistic Blend</Badge>
                <Badge variant="outline" className="text-sm">Weight Management + Healing</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tirzepatide/BPC-157
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Next-generation dual GIP/GLP-1 agonist combined with tissue repair peptide for superior metabolic regulation, cellular protection, and comprehensive weight management support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Composition */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="h-5 w-5 text-primary" />
                Blend Composition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Two Strength Options:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Standard Strength</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Tirzepatide: <span className="font-semibold">30mg</span></li>
                      <li>• BPC-157: <span className="font-semibold">1.3mg</span></li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="font-semibold text-primary mb-2">High Strength</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Tirzepatide: <span className="font-semibold">60mg</span></li>
                      <li>• BPC-157: <span className="font-semibold">2.6mg</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Synergistic Mechanisms:</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Scale className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Tirzepatide (Dual GIP/GLP-1 Agonist)</p>
                      <p className="text-sm text-muted-foreground">
                        Superior weight loss (up to 24% body weight reduction) through dual incretin receptor activation, enhanced glucose control, and powerful appetite suppression.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">BPC-157 (Tissue Repair & Protection)</p>
                      <p className="text-sm text-muted-foreground">
                        Promotes gastrointestinal integrity, supports cellular healing, modulates inflammation, and may protect against GIP/GLP-1-related GI side effects.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Enhanced Tolerability</p>
                      <p className="text-sm text-muted-foreground">
                        BPC-157's gastroprotective properties may mitigate nausea and GI discomfort commonly associated with incretin-based therapies, improving adherence and outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Quick Reference
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Primary Applications</p>
                <ul className="text-sm space-y-1">
                  <li>• Superior weight management</li>
                  <li>• Metabolic optimization</li>
                  <li>• GI health support</li>
                  <li>• Tissue protection</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Administration</p>
                <p className="text-sm">Subcutaneous injection</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Typical Protocol</p>
                <p className="text-sm">Weekly dosing with gradual titration</p>
              </div>
              <div className="pt-4 border-t">
                <a 
                  href="https://drspeptides.com/products/tirzepatide-bpc-157" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on DrsPeptides.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Applications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Research Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Superior Weight Management</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Tirzepatide clinical trials demonstrate up to 24% body weight reduction</li>
                  <li>• Dual GIP/GLP-1 activation provides synergistic metabolic benefits</li>
                  <li>• Superior efficacy compared to single-receptor agonists</li>
                  <li>• Improved glycemic control and cardiovascular outcomes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Cellular Protection & Healing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BPC-157 promotes mucosal healing and barrier integrity</li>
                  <li>• May reduce incretin-associated nausea and GI discomfort</li>
                  <li>• Supports tissue repair during metabolic transition</li>
                  <li>• Anti-inflammatory effects complement metabolic improvements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety & Considerations */}
        <Card>
          <CardHeader>
            <CardTitle>Safety Profile & Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Common Considerations</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Nausea, vomiting, diarrhea (typically mild with BPC-157 co-administration)</li>
                <li>• Injection site reactions</li>
                <li>• Gradual dose titration essential to minimize GI side effects</li>
                <li>• Monitor blood glucose in diabetic patients</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contraindications</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personal or family history of medullary thyroid carcinoma</li>
                <li>• Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                <li>• Pregnancy or breastfeeding</li>
                <li>• Severe gastrointestinal disease</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm">
                <span className="font-semibold">Medical Supervision Required:</span> This combination should only be used under qualified healthcare provider supervision with appropriate monitoring and dose titration protocols.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Source Pharmaceutical-Grade Peptides</h3>
              <p className="text-muted-foreground mb-4 max-w-xl">
                DrsPeptides.com provides research-grade Tirzepatide/BPC-157 blend with verified purity and composition for qualified healthcare providers.
              </p>
              <Button asChild size="lg">
                <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
                  Visit DrsPeptides.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
