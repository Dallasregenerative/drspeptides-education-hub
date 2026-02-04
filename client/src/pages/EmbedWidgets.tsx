import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Copy, Check, Calculator, Beaker, Scale, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function EmbedWidgets() {
  usePageTitle("Free Embeddable Peptide Calculators & Widgets", {
    description: "Free embeddable peptide calculators for your website. Reconstitution calculator, dosage calculator, and BMI calculator widgets with easy copy-paste code. Perfect for medical blogs and health websites.",
    keywords: "embeddable calculator, peptide calculator widget, reconstitution calculator embed, dosage calculator widget, free medical calculators, health website widgets"
  });

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const widgets = [
    {
      id: "reconstitution",
      name: "Peptide Reconstitution Calculator",
      description: "Help your visitors calculate proper peptide reconstitution ratios. Enter peptide amount and bacteriostatic water volume to get concentration per unit.",
      icon: Beaker,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      embedCode: `<!-- Peptide Reconstitution Calculator by Peptide Education Hub -->
<iframe 
  src="https://pepedhub.com/embed/reconstitution-calculator" 
  width="100%" 
  height="400" 
  frameborder="0" 
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
  title="Peptide Reconstitution Calculator"
></iframe>
<p style="font-size: 12px; color: #6b7280; margin-top: 8px;">
  Calculator by <a href="https://pepedhub.com" target="_blank" rel="noopener" style="color: #2563eb;">Peptide Education Hub</a>
</p>`,
      previewUrl: "/tools/reconstitution-calculator"
    },
    {
      id: "dosage",
      name: "Peptide Dosage Calculator",
      description: "Calculate accurate peptide dosages based on body weight and protocol requirements. Supports multiple peptides with customizable parameters.",
      icon: Calculator,
      color: "text-green-600",
      bgColor: "bg-green-50",
      embedCode: `<!-- Peptide Dosage Calculator by Peptide Education Hub -->
<iframe 
  src="https://pepedhub.com/embed/dosage-calculator" 
  width="100%" 
  height="500" 
  frameborder="0" 
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
  title="Peptide Dosage Calculator"
></iframe>
<p style="font-size: 12px; color: #6b7280; margin-top: 8px;">
  Calculator by <a href="https://pepedhub.com" target="_blank" rel="noopener" style="color: #2563eb;">Peptide Education Hub</a>
</p>`,
      previewUrl: "/tools/dosage-calculator"
    },
    {
      id: "bmi",
      name: "BMI Calculator for Peptide Therapy",
      description: "Calculate BMI to help determine appropriate peptide therapy protocols. Includes weight loss peptide recommendations based on BMI category.",
      icon: Scale,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      embedCode: `<!-- BMI Calculator for Peptide Therapy by Peptide Education Hub -->
<iframe 
  src="https://pepedhub.com/embed/bmi-calculator" 
  width="100%" 
  height="450" 
  frameborder="0" 
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
  title="BMI Calculator for Peptide Therapy"
></iframe>
<p style="font-size: 12px; color: #6b7280; margin-top: 8px;">
  Calculator by <a href="https://pepedhub.com" target="_blank" rel="noopener" style="color: #2563eb;">Peptide Education Hub</a>
</p>`,
      previewUrl: "/tools/cost-calculator"
    }
  ];

  const jsWidgetCode = `<!-- Peptide Education Hub Widget Loader -->
<div id="pep-hub-widget" data-widget="reconstitution"></div>
<script src="https://pepedhub.com/widget.js" async></script>`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-200 border-indigo-400">
              100% Free
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Embeddable Peptide Calculators
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Add professional peptide calculators to your website with simple copy-paste code. 
              Perfect for medical blogs, health websites, and practitioner portals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="h-4 w-4" />
                <span>No API Key Required</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="h-4 w-4" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="h-4 w-4" />
                <span>Always Up-to-Date</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Choose Your Widget
        </h2>
        
        <div className="space-y-8">
          {widgets.map((widget) => (
            <Card key={widget.id} className="overflow-hidden">
              <CardHeader className={widget.bgColor}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-white rounded-lg shadow-sm`}>
                      <widget.icon className={`h-6 w-6 ${widget.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{widget.name}</CardTitle>
                      <CardDescription className="mt-1">{widget.description}</CardDescription>
                    </div>
                  </div>
                  <a href={widget.previewUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Preview
                    </Button>
                  </a>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="iframe">
                  <TabsList>
                    <TabsTrigger value="iframe">iFrame Embed</TabsTrigger>
                    <TabsTrigger value="js">JavaScript Widget</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="iframe" className="mt-4">
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{widget.embedCode}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-2 right-2 gap-2"
                        onClick={() => copyToClipboard(widget.embedCode, `${widget.id}-iframe`)}
                      >
                        {copiedCode === `${widget.id}-iframe` ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy Code
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="js" className="mt-4">
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{jsWidgetCode.replace('reconstitution', widget.id)}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-2 right-2 gap-2"
                        onClick={() => copyToClipboard(jsWidgetCode.replace('reconstitution', widget.id), `${widget.id}-js`)}
                      >
                        {copiedCode === `${widget.id}-js` ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy Code
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Usage Guidelines
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Free for Commercial & Non-Commercial Use</p>
                      <p className="text-sm text-gray-600">Use these widgets on any website, blog, or application at no cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Attribution Required</p>
                      <p className="text-sm text-gray-600">Please keep the "Calculator by Peptide Education Hub" link visible. This helps us continue providing free tools.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">No Modification of Calculations</p>
                      <p className="text-sm text-gray-600">Do not modify the calculation logic or medical information displayed.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Medical Disclaimer</p>
                      <p className="text-sm text-gray-600">These calculators are for educational purposes only. Always consult a healthcare provider.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 container mx-auto px-4">
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Widgets?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We can create custom peptide calculators and tools tailored to your specific needs. 
              Contact us for white-label solutions and API access.
            </p>
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* SEO Footer */}
      <section className="py-8 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">
          Free peptide calculators provided by Peptide Education Hub
        </p>
        <p className="text-xs text-gray-500 mt-2">
          © 2026 Peptide Education Hub. Widgets may be embedded with attribution.
        </p>
      </section>
    </div>
  );
}
