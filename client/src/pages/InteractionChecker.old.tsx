import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Shield, AlertTriangle, CheckCircle2, XCircle, Info, Search } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";

interface Peptide {
  id: string;
  name: string;
  category: string;
}

interface Interaction {
  type: "safe" | "caution" | "contraindicated";
  peptides: string[];
  description: string;
  recommendation: string;
}

const PEPTIDES: Peptide[] = [
  // Weight Loss
  { id: "semaglutide", name: "Semaglutide", category: "Weight Loss" },
  { id: "tirzepatide", name: "Tirzepatide", category: "Weight Loss" },
  { id: "cagrilintide", name: "Cagrilintide", category: "Weight Loss" },
  { id: "retatrutide", name: "Retatrutide", category: "Weight Loss" },
  { id: "aod9604", name: "AOD-9604", category: "Weight Loss" },
  { id: "5amino1mq", name: "5-Amino-1MQ", category: "Weight Loss" },
  
  // Recovery
  { id: "bpc157", name: "BPC-157", category: "Recovery" },
  { id: "tb500", name: "TB-500", category: "Recovery" },
  { id: "mgf", name: "MGF", category: "Recovery" },
  
  // Growth Hormone
  { id: "cjc1295", name: "CJC-1295", category: "Growth Hormone" },
  { id: "ipamorelin", name: "Ipamorelin", category: "Growth Hormone" },
  { id: "sermorelin", name: "Sermorelin", category: "Growth Hormone" },
  { id: "tesamorelin", name: "Tesamorelin", category: "Growth Hormone" },
  { id: "ghrp2", name: "GHRP-2", category: "Growth Hormone" },
  { id: "ghrp6", name: "GHRP-6", category: "Growth Hormone" },
  { id: "ibutamoren", name: "Ibutamoren", category: "Growth Hormone" },
  
  // Anti-Aging
  { id: "ghkcu", name: "GHK-Cu", category: "Anti-Aging" },
  { id: "epithalon", name: "Epithalon", category: "Anti-Aging" },
  { id: "pinealon", name: "Pinealon", category: "Anti-Aging" },
  { id: "nad", name: "NAD+", category: "Anti-Aging" },
  
  // Cognitive
  { id: "semax", name: "Semax", category: "Cognitive" },
  { id: "selank", name: "Selank", category: "Cognitive" },
  { id: "dihexa", name: "Dihexa", category: "Cognitive" },
];

const INTERACTIONS: Interaction[] = [
  // Safe Combinations
  {
    type: "safe",
    peptides: ["bpc157", "tb500"],
    description: "Synergistic healing and recovery effects. Well-tolerated combination.",
    recommendation: "Safe to combine. Often used together for enhanced tissue repair and recovery."
  },
  {
    type: "safe",
    peptides: ["cjc1295", "ipamorelin"],
    description: "Complementary GH secretagogue effects. Standard combination for GH optimization.",
    recommendation: "Safe to combine. Classic combination for growth hormone optimization."
  },
  {
    type: "safe",
    peptides: ["semax", "selank"],
    description: "Complementary cognitive and anxiolytic effects. No known interactions.",
    recommendation: "Safe to combine. Synergistic cognitive enhancement and stress reduction."
  },
  {
    type: "safe",
    peptides: ["semaglutide", "bpc157"],
    description: "BPC-157 may help mitigate GI side effects of semaglutide.",
    recommendation: "Safe to combine. BPC-157 can protect against GLP-1 induced nausea."
  },
  {
    type: "safe",
    peptides: ["tirzepatide", "bpc157"],
    description: "BPC-157 may help mitigate GI side effects of tirzepatide.",
    recommendation: "Safe to combine. BPC-157 can protect against dual agonist GI effects."
  },
  
  // Caution Combinations
  {
    type: "caution",
    peptides: ["semaglutide", "tirzepatide"],
    description: "Both are GLP-1 agonists. Combining increases hypoglycemia risk and GI side effects.",
    recommendation: "Use caution. Generally not recommended to combine. Choose one or the other."
  },
  {
    type: "caution",
    peptides: ["semaglutide", "cagrilintide"],
    description: "Additive effects on appetite suppression and gastric emptying. May increase nausea.",
    recommendation: "Use caution. Monitor closely for excessive GI side effects. Consider lower doses."
  },
  {
    type: "caution",
    peptides: ["cjc1295", "ibutamoren"],
    description: "Both increase GH/IGF-1. May cause excessive elevation and side effects.",
    recommendation: "Use caution. Monitor IGF-1 levels. Consider alternating rather than combining."
  },
  {
    type: "caution",
    peptides: ["ghrp2", "ghrp6"],
    description: "Similar mechanisms. Combining may not provide additional benefit.",
    recommendation: "Use caution. Generally unnecessary to combine. Choose one based on goals."
  },
  
  // Contraindicated
  {
    type: "contraindicated",
    peptides: ["semaglutide", "retatrutide"],
    description: "Both are potent GLP-1 agonists. Combining significantly increases hypoglycemia and GI risks.",
    recommendation: "Contraindicated. Do not combine. Retatrutide already includes GLP-1 activity."
  },
  {
    type: "contraindicated",
    peptides: ["tirzepatide", "retatrutide"],
    description: "Both are multi-agonists with overlapping mechanisms. Excessive metabolic suppression.",
    recommendation: "Contraindicated. Do not combine. Choose one based on patient needs."
  },
];

export default function InteractionChecker() {
  usePageTitle("Interaction Checker - Peptide Safety Tool");
  
  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [results, setResults] = useState<Interaction[]>([]);
  const [showResults, setShowResults] = useState(false);

  const togglePeptide = (peptideId: string) => {
    setSelectedPeptides(prev =>
      prev.includes(peptideId)
        ? prev.filter(id => id !== peptideId)
        : [...prev, peptideId]
    );
  };

  const checkInteractions = () => {
    if (selectedPeptides.length < 2) {
      alert("Please select at least 2 peptides to check interactions");
      return;
    }

    const foundInteractions = INTERACTIONS.filter(interaction => {
      return interaction.peptides.every(p => selectedPeptides.includes(p));
    });

    setResults(foundInteractions);
    setShowResults(true);
  };

  const resetChecker = () => {
    setSelectedPeptides([]);
    setResults([]);
    setShowResults(false);
  };

  const categories = Array.from(new Set(PEPTIDES.map(p => p.category)));

  const getInteractionIcon = (type: string) => {
    switch (type) {
      case "safe":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "caution":
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case "contraindicated":
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getInteractionColor = (type: string) => {
    switch (type) {
      case "safe":
        return "border-green-200 bg-green-50";
      case "caution":
        return "border-amber-200 bg-amber-50";
      case "contraindicated":
        return "border-red-200 bg-red-50";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Interaction Checker</h1>
            </div>
            <p className="text-xl text-purple-50 mb-6">
              Professional tool for checking peptide interactions, contraindications, and safe combination protocols. 
              Designed to help healthcare providers make informed decisions about peptide stacking and combination therapy.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Peptide Selection */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-purple-600" />
                    Select Peptides
                  </CardTitle>
                  <CardDescription>
                    Choose 2 or more peptides to check for interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>Selected:</strong> {selectedPeptides.length} peptide{selectedPeptides.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                    {categories.map(category => (
                      <div key={category}>
                        <h3 className="font-semibold text-sm text-gray-700 mb-3">{category}</h3>
                        <div className="space-y-2">
                          {PEPTIDES.filter(p => p.category === category).map(peptide => (
                            <div key={peptide.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={peptide.id}
                                checked={selectedPeptides.includes(peptide.id)}
                                onCheckedChange={() => togglePeptide(peptide.id)}
                              />
                              <label
                                htmlFor={peptide.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                              >
                                {peptide.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-6 border-t mt-6">
                    <Button onClick={checkInteractions} className="flex-1 gap-2">
                      <Shield className="w-4 h-4" />
                      Check Interactions
                    </Button>
                    <Button onClick={resetChecker} variant="outline">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              {showResults ? (
                <>
                  {results.length > 0 ? (
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Info className="w-5 h-5 text-purple-600" />
                            Interaction Results
                          </CardTitle>
                          <CardDescription>
                            Found {results.length} interaction{results.length !== 1 ? 's' : ''} for selected peptides
                          </CardDescription>
                        </CardHeader>
                      </Card>

                      {results.map((interaction, index) => (
                        <Card key={index} className={getInteractionColor(interaction.type)}>
                          <CardHeader>
                            <div className="flex items-start gap-3">
                              {getInteractionIcon(interaction.type)}
                              <div className="flex-1">
                                <CardTitle className="text-lg">
                                  {interaction.peptides.map(id => 
                                    PEPTIDES.find(p => p.id === id)?.name
                                  ).join(" + ")}
                                </CardTitle>
                                <Badge 
                                  variant="outline" 
                                  className={
                                    interaction.type === "safe" ? "border-green-600 text-green-700" :
                                    interaction.type === "caution" ? "border-amber-600 text-amber-700" :
                                    "border-red-600 text-red-700"
                                  }
                                >
                                  {interaction.type === "safe" ? "Safe Combination" :
                                   interaction.type === "caution" ? "Use Caution" :
                                   "Contraindicated"}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <p className="text-sm font-semibold mb-1">Description:</p>
                              <p className="text-sm text-gray-700">{interaction.description}</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold mb-1">Recommendation:</p>
                              <p className="text-sm text-gray-700">{interaction.recommendation}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-900">
                          <CheckCircle2 className="w-5 h-5" />
                          No Known Interactions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-800">
                          No specific interactions found for the selected peptide combination. 
                          However, always monitor patients when combining peptides and adjust dosing as needed.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Info className="w-5 h-5" />
                        General Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-blue-900">
                      <p>• Start with lower doses when combining peptides</p>
                      <p>• Monitor patients closely for adverse effects</p>
                      <p>• Consider timing of administration (separate by 2-4 hours if needed)</p>
                      <p>• Assess individual peptide tolerance before combining</p>
                      <p>• Regular lab monitoring for hormone levels and metabolic markers</p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-600">
                      <Shield className="w-5 h-5" />
                      Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-400">
                      <Shield className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>Select peptides and click Check Interactions to see results</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <AlertTriangle className="w-5 h-5" />
                    Important Safety Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-amber-900">
                  <p>• This tool provides general guidance only</p>
                  <p>• Always review current literature and prescribing information</p>
                  <p>• Consider patient-specific factors (age, comorbidities, medications)</p>
                  <p>• Monitor for unexpected interactions or adverse effects</p>
                  <p>• Consult with specialists for complex cases</p>
                  <p>• Document all peptide combinations in patient records</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reference Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Common Safe Combinations</CardTitle>
              <CardDescription>Well-established peptide stacks with synergistic effects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Recovery Stack
                  </h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• BPC-157 + TB-500</li>
                    <li>• BPC-157 + GHK-Cu</li>
                    <li>• TB-500 + MGF</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Growth Hormone Stack
                  </h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• CJC-1295 + Ipamorelin</li>
                    <li>• Sermorelin + GHRP-2</li>
                    <li>• Tesamorelin + Ipamorelin</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Cognitive Stack
                  </h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Semax + Selank</li>
                    <li>• Semax + NAD+</li>
                    <li>• Selank + Dihexa</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Professional interaction checker for healthcare providers. For educational and clinical use only. 
            Always verify interactions and monitor patients closely.
          </p>
        </div>
      </footer>
    </div>
  );
}
