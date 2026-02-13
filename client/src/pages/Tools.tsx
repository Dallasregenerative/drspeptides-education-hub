import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { 
  Calculator, 
  DollarSign, 
  AlertTriangle, 
  FileText, 
  TrendingUp, 
  ClipboardCheck,
  GitCompare,
  Beaker,
  FlaskConical,
  Syringe
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "Dosage Calculator",
    description: "Calculate precise peptide dosages based on patient weight, vial concentration, and reconstitution volume. Includes unit conversions and injection volume calculations.",
    icon: Calculator,
    href: "/tools/dosage-calculator",
    color: "bg-blue-500",
    features: ["Weight-based calculations", "Unit conversions", "Injection volumes"]
  },
  {
    title: "Cost Calculator",
    description: "Estimate treatment costs for peptide therapy protocols. Compare pricing across different peptides and calculate monthly/yearly expenses.",
    icon: DollarSign,
    href: "/tools/cost-calculator",
    color: "bg-green-500",
    features: ["Protocol cost estimates", "Price comparisons", "ROI calculations"]
  },
  {
    title: "Interaction Checker",
    description: "Check for potential drug-drug and drug-peptide interactions. Essential for patient safety when combining multiple therapies.",
    icon: AlertTriangle,
    href: "/tools/interaction-checker",
    color: "bg-amber-500",
    features: ["Drug interactions", "Peptide combinations", "Safety alerts"]
  },
  {
    title: "Protocol Builder",
    description: "Create comprehensive, evidence-based peptide therapy protocols. Generate professional treatment plans with dosing schedules and monitoring parameters.",
    icon: FileText,
    href: "/tools/protocol-builder",
    color: "bg-purple-500",
    features: ["Template protocols", "Custom schedules", "PDF export"]
  },
  {
    title: "Progress Tracker",
    description: "Monitor patient progress throughout peptide therapy. Track weight, body composition, energy levels, and other key metrics with visual analytics.",
    icon: TrendingUp,
    href: "/tools/progress-tracker",
    color: "bg-cyan-500",
    features: ["Progress charts", "Metric tracking", "Data export"]
  },
  {
    title: "Practice Assessment",
    description: "Discover which peptides and protocols are best suited for your practice focus and patient population with our quick assessment quiz.",
    icon: ClipboardCheck,
    href: "/tools/practice-assessment",
    color: "bg-rose-500",
    features: ["Personalized results", "Protocol suggestions", "5 quick questions"]
  },
  {
    title: "Comparison Tool",
    description: "Compare up to 4 peptides side-by-side across 15+ criteria including mechanisms, dosing, side effects, and clinical applications.",
    icon: GitCompare,
    href: "/tools/comparison-tool",
    color: "bg-indigo-500",
    features: ["54 peptides", "15+ criteria", "Side-by-side view"]
  },
  {
    title: "Reconstitution Calculator",
    description: "Calculate precise reconstitution volumes for lyophilized peptides. Determine bacteriostatic water amounts for desired concentrations.",
    icon: FlaskConical,
    href: "/tools/reconstitution-calculator",
    color: "bg-teal-500",
    features: ["Volume calculations", "Concentration targets", "Step-by-step guide"]
  },
  {
    title: "Enhanced Dosing Calculator",
    description: "Advanced dosing calculator with titration schedules, loading dose calculations, and protocol-specific recommendations.",
    icon: Syringe,
    href: "/tools/enhanced-dosing-calculator",
    color: "bg-orange-500",
    features: ["Titration schedules", "Loading doses", "Protocol integration"]
  },
  {
    title: "Biomarker Tracker",
    description: "Track patient biomarkers over time including hormone panels, inflammatory markers, metabolic indicators, and treatment response metrics.",
    icon: TrendingUp,
    href: "/tools/biomarker-tracker",
    color: "bg-emerald-500",
    features: ["Hormone panels", "Trend analysis", "Reference ranges"]
  },
  {
    title: "Patient Handout Generator",
    description: "Generate professional, customizable patient education materials for peptide therapies. Includes administration guides, safety information, and FAQ sheets.",
    icon: FileText,
    href: "/tools/patient-handouts",
    color: "bg-sky-500",
    features: ["Customizable content", "PDF export", "Patient-friendly language"]
  }
];

export default function Tools() {
  return (
    <>
      <Helmet>
        <title>Clinical Tools for Peptide Therapy | Peptide Education Hub</title>
        <meta name="description" content="Professional clinical tools for peptide therapy practitioners. Dosage calculators, interaction checkers, protocol builders, and more." />
        <meta name="keywords" content="peptide calculator, dosage calculator, interaction checker, protocol builder, peptide therapy tools" />
        <link rel="canonical" href="https://pepedhub.com/tools" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Beaker className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Clinical Practice Tools
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional-grade tools designed for healthcare providers implementing peptide therapy protocols
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{tools.length}</span> Tools Available
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">Free</span> for All Practitioners
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">Evidence-Based</span> Calculations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.href} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`${tool.color} p-3 rounded-xl text-white`}>
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{tool.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {tool.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href={tool.href}>
                    <Button className="w-full" variant="outline">
                      Open Tool →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Toolkit CTA */}
        <div className="bg-white border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Implement Peptide Therapy?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Access our complete Practice Implementation Toolkit with templates, checklists, and resources to start offering peptide therapy in your practice.
              </p>
              <Link href="/practice-toolkit">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  View Practice Toolkit →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
