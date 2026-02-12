import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { 
  Sparkles, 
  Heart, 
  Brain, 
  Dumbbell, 
  Scale,
  Zap,
  FlaskConical,
  Beaker,
  Pill,
  Activity
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blendCategories = [
  {
    category: "Beauty Blends",
    icon: Sparkles,
    color: "bg-pink-500",
    description: "Advanced skin rejuvenation and anti-aging formulations",
    blends: [
      { name: "Glow Core", path: "/peptides/glow-core", description: "Foundation skin health and collagen support" },
      { name: "Glow Plus", path: "/peptides/glow-plus", description: "Enhanced skin rejuvenation with growth factors" },
      { name: "Glow Ultra", path: "/peptides/glow-ultra", description: "Maximum potency anti-aging formula" },
      { name: "GLOW Capsules", path: "/peptides/glow-blend-capsules", description: "Oral beauty supplement blend" },
      { name: "KLOW Capsules", path: "/peptides/klow-blend-capsules", description: "Comprehensive beauty from within" },
    ]
  },
  {
    category: "Recovery Blends",
    icon: Heart,
    color: "bg-red-500",
    description: "Tissue repair and accelerated healing combinations",
    blends: [
      { name: "BPC-157 + TB-500", path: "/peptides/bpc-157-tb-500", description: "Gold standard healing combination" },
      { name: "BPC Wolverine", path: "/peptides/bpc-wolverine", description: "Maximum recovery and regeneration" },
    ]
  },
  {
    category: "Weight Loss Blends",
    icon: Scale,
    color: "bg-green-500",
    description: "GLP-1 combinations for metabolic optimization",
    blends: [
      { name: "Semaglutide + BPC-157", path: "/peptides/semaglutide-bpc-157", description: "Weight loss with GI protection" },
      { name: "Tirzepatide + BPC-157", path: "/peptides/tirzepatide-bpc-157", description: "Dual-agonist with gut healing support" },
    ]
  },
  {
    category: "Growth Hormone Blends",
    icon: Dumbbell,
    color: "bg-blue-500",
    description: "Synergistic GH secretagogue combinations",
    blends: [
      { name: "CJC-1295 + Ipamorelin", path: "/peptides/cjc-1295-ipamorelin", description: "Sustained GH release combination" },
    ]
  },
  {
    category: "Cognitive Blends",
    icon: Brain,
    color: "bg-purple-500",
    description: "Nootropic peptide combinations for mental performance",
    blends: [
      { name: "Selank + Semax", path: "/peptides/selank-semax", description: "Anxiolytic + cognitive enhancement" },
    ]
  },
  {
    category: "Neuro Series (N)",
    icon: Zap,
    color: "bg-indigo-500",
    description: "Proprietary neurological optimization formulas",
    blends: [
      { name: "N-259 Sleep & Circadian", path: "/peptides/formula-n-259", description: "Circadian rhythm and sleep quality" },
      { name: "N-69 Sexual Enhancement", path: "/peptides/formula-n-69", description: "Sexual health and performance" },
      { name: "N-111 Cognitive Enhancement", path: "/peptides/formula-n-111", description: "Focus, memory, and mental clarity" },
      { name: "N-5550 Multi-Target Cognitive", path: "/peptides/formula-n-5550", description: "Comprehensive cognitive support" },
      { name: "N-2331 Neuro-Cognitive & NAD+", path: "/peptides/formula-n-2331", description: "Neuroprotection with NAD+ support" },
    ]
  },
  {
    category: "Regenerative Series (RG)",
    icon: Activity,
    color: "bg-teal-500",
    description: "Advanced tissue repair and regeneration formulas",
    blends: [
      { name: "RG-5555 Healing & Recovery", path: "/peptides/formula-rg-5555", description: "Multi-pathway healing acceleration" },
    ]
  },
  {
    category: "Metabolic Series (M)",
    icon: FlaskConical,
    color: "bg-orange-500",
    description: "Mitochondrial and metabolic optimization formulas",
    blends: [
      { name: "M-51 Exercise Mimetic", path: "/peptides/formula-m-51", description: "Exercise pathway activation" },
      { name: "M-2531 Mitochondrial", path: "/peptides/formula-m-2531", description: "Mitochondrial biogenesis support" },
    ]
  },
  {
    category: "Weight Loss Series (WL)",
    icon: Scale,
    color: "bg-emerald-500",
    description: "Targeted metabolic health formulations",
    blends: [
      { name: "WL-1175 Metabolic Health", path: "/peptides/formula-wl-1175", description: "Comprehensive metabolic support" },
    ]
  },
];

const totalBlends = blendCategories.reduce((sum, cat) => sum + cat.blends.length, 0);

export default function Blends() {
  return (
    <>
      <Helmet>
        <title>Peptide Blends & Proprietary Formulas | Peptide Education Hub</title>
        <meta name="description" content="Comprehensive guide to peptide blend formulations including beauty blends, recovery combinations, weight loss protocols, cognitive enhancers, and proprietary series formulas." />
        <meta name="keywords" content="peptide blends, peptide combinations, BPC-157 TB-500, semaglutide blend, growth hormone blend, cognitive peptide blend, beauty peptide blend" />
        <link rel="canonical" href="https://pepedhub.com/blends" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Beaker className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Peptide Blends & Formulas
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Evidence-based peptide combinations and proprietary formulations for enhanced clinical outcomes
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{totalBlends}</span> Blend Profiles
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{blendCategories.length}</span> Categories
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">Synergistic</span> Combinations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blends by Category */}
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-12">
            {blendCategories.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${category.color} p-3 rounded-xl text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.category}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {category.blends.length} blend{category.blends.length > 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.blends.map((blend) => (
                    <Link key={blend.path} href={blend.path}>
                      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-purple-300 h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{blend.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">{blend.description}</CardDescription>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details →
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Looking for Individual Peptides?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Browse our comprehensive A-Z index of individual peptide profiles with detailed dosing, mechanisms, and clinical applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/peptide-index">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Browse A-Z Peptide Index →
                  </Button>
                </Link>
                <Link href="/comparison-tool">
                  <Button size="lg" variant="outline">
                    Compare Peptides →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
