import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, ExternalLink, FileText, Microscope, Shield, TrendingUp, Zap, Brain, Heart, Layers, Pill } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import AIAgentBanner from "@/components/AIAgentBanner";
import AnimatedStats from "@/components/AnimatedStats";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  usePageTitle(
    "DrsPeptides - Peptide Therapy Education for Healthcare Providers",
    {
      description: "Comprehensive educational resource for healthcare providers practicing peptide therapy. Clinical guides, quality standards, and evidence-based protocols for BPC-157, TB-500, Semaglutide, Tirzepatide, and more."
    }
  );
  
  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            The Complete Guide to <span className="text-teal-600">Peptide Therapy</span> for Healthcare Providers
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Evidence-based education, clinical protocols, and quality standards for practitioners integrating peptide therapy into their practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                Explore Educational Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get Medical-Grade Peptides
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* AI Agent Banner */}
      <AIAgentBanner />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stats Section */}
      <section className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$81.5B</div>
              <div className="text-teal-100">Projected U.S. Market by 2034</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Clinical Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%+</div>
              <div className="text-teal-100">Purity Standard Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Essential Knowledge for Peptide Therapy Practitioners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-10 w-10 text-teal-600 mb-2" />
              <CardTitle>Quality & Safety Standards</CardTitle>
              <CardDescription>Huberman Lab framework: Three-tier classification & compounding pharmacy requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/safety-standards">
                <Button variant="link" className="p-0 text-teal-600">
                  View Framework <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-teal-600 mb-2" />
              <CardTitle>GLP-1 Therapy</CardTitle>
              <CardDescription>Clinical guide to Semaglutide and Tirzepatide for weight management</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/blog/glp1-therapy">
                <Button variant="link" className="p-0 text-teal-600">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Microscope className="h-10 w-10 text-teal-600 mb-2" />
              <CardTitle>BPC-157 vs TB-500</CardTitle>
              <CardDescription>Comparative analysis of regenerative peptides for injury recovery</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/blog/bpc157-tb500">
                <Button variant="link" className="p-0 text-teal-600">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-10 w-10 text-teal-600 mb-2" />
              <CardTitle>Storage & Handling</CardTitle>
              <CardDescription>Best practices for maintaining peptide potency and safety</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/blog/storage-handling">
                <Button variant="link" className="p-0 text-teal-600">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-teal-600 mb-2" />
              <CardTitle>Practice ROI</CardTitle>
              <CardDescription>Building a profitable peptide therapy service line</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/blog/practice-roi">
                <Button variant="link" className="p-0 text-teal-600">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-teal-600 mb-2" />
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Complete guide to launching a peptide therapy practice in 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/blog/getting-started">
                <Button variant="link" className="p-0 text-teal-600">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <Zap className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle className="text-purple-900">Metabolism Optimization</CardTitle>
              <CardDescription>5 cutting-edge peptides for weight loss, energy, and cellular health</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/protocols/metabolism">
                <Button variant="link" className="p-0 text-purple-600">
                  View Protocol <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-indigo-200 bg-gradient-to-br from-white to-indigo-50">
            <CardHeader>
              <Heart className="h-10 w-10 text-indigo-600 mb-2" />
              <CardTitle className="text-indigo-900">Longevity & Healthspan</CardTitle>
              <CardDescription>The multi-front war on aging—120+ years is coming</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/protocols/longevity">
                <Button variant="link" className="p-0 text-indigo-600">
                  View Protocol <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <CardHeader>
              <Brain className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle className="text-blue-900">Cognitive Health & Neuroprotection</CardTitle>
              <CardDescription>Fighting Alzheimer's with 4 neuroprotective peptides</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/protocols/cognitive">
                <Button variant="link" className="p-0 text-blue-600">
                  View Protocol <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-purple-200 bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <Layers className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle className="text-purple-900">Peptide Stacking Guide</CardTitle>
              <CardDescription>Ben Greenfield's proven stacks: Recovery, muscle gain, fat loss, anti-aging</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/stacking-guide">
                <Button variant="link" className="p-0 text-purple-600">
                  View Stacking Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Tools Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Professional Clinical Tools
            </h3>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto">
              Interactive calculators and checkers designed for healthcare providers to optimize peptide therapy protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/tools/dosage-calculator">
              <Card className="hover:shadow-2xl transition-all hover:scale-105 h-full border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl text-blue-900">Dosage Calculator</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Calculate reconstitution volumes, syringe measurements, and injection schedules with precision
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Reconstitution calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Syringe unit conversions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Vial duration estimates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Administration instructions
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Open Calculator <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/tools/interaction-checker">
              <Card className="hover:shadow-2xl transition-all hover:scale-105 h-full border-2 border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl text-purple-900">Interaction Checker</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Check peptide interactions, contraindications, and safe combination protocols
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Drug interaction analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Contraindication warnings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Safe stacking protocols
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Clinical recommendations
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    Check Interactions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Peptide Profiles Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Peptide Profiles
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            In-depth profiles featuring mechanisms, clinical research, dosing protocols, and safety considerations for each peptide
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="metabolic">Metabolic</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
            <TabsTrigger value="longevity">Longevity</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/peptides/bpc-157">
                <Card className="hover:shadow-lg transition-shadow h-full border-emerald-200 bg-gradient-to-br from-white to-emerald-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-emerald-600 mb-2" />
                    <CardTitle className="text-emerald-900">BPC-157</CardTitle>
                    <CardDescription>Tissue repair & gut healing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Recovery | Wolverine Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/tb-500">
                <Card className="hover:shadow-lg transition-shadow h-full border-emerald-200 bg-gradient-to-br from-white to-emerald-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-emerald-600 mb-2" />
                    <CardTitle className="text-emerald-900">TB-500</CardTitle>
                    <CardDescription>Actin regulation & angiogenesis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Recovery | Wolverine Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/ipamorelin">
                <Card className="hover:shadow-lg transition-shadow h-full border-blue-200 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Ipamorelin</CardTitle>
                    <CardDescription>Selective GH secretagogue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Recovery | Multiple Stacks</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/cjc-1295">
                <Card className="hover:shadow-lg transition-shadow h-full border-blue-200 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">CJC-1295</CardTitle>
                    <CardDescription>GHRH analog with/without DAC</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Recovery | Fat Loss Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/ghk-cu">
                <Card className="hover:shadow-lg transition-shadow h-full border-amber-200 bg-gradient-to-br from-white to-amber-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-amber-600 mb-2" />
                    <CardTitle className="text-amber-900">GHK-Cu</CardTitle>
                    <CardDescription>31.2% genome regulation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Recovery | Wolverine Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/tesamorelin">
                <Card className="hover:shadow-lg transition-shadow h-full border-purple-200 bg-gradient-to-br from-white to-purple-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-purple-900">Tesamorelin</CardTitle>
                    <CardDescription>FDA-approved visceral fat reduction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Metabolic | FDA-Approved</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/igf-1-lr3">
                <Card className="hover:shadow-lg transition-shadow h-full border-indigo-200 bg-gradient-to-br from-white to-indigo-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-indigo-600 mb-2" />
                    <CardTitle className="text-indigo-900">IGF-1 LR3</CardTitle>
                    <CardDescription>Hyperplasia & muscle fiber creation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Metabolic | Lean Mean Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/semaglutide">
                <Card className="hover:shadow-lg transition-shadow h-full border-rose-200 bg-gradient-to-br from-white to-rose-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-rose-600 mb-2" />
                    <CardTitle className="text-rose-900">Semaglutide</CardTitle>
                    <CardDescription>14.9-17.4% weight loss (FDA-approved)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Metabolic | Fat Loss Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/epithalon">
                <Card className="hover:shadow-lg transition-shadow h-full border-violet-200 bg-gradient-to-br from-white to-violet-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-violet-600 mb-2" />
                    <CardTitle className="text-violet-900">Epithalon</CardTitle>
                    <CardDescription>Telomerase activation & longevity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Longevity | Anti-Aging Stack</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="recovery" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/peptides/bpc-157">
                <Card className="hover:shadow-lg transition-shadow h-full border-emerald-200 bg-gradient-to-br from-white to-emerald-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-emerald-600 mb-2" />
                    <CardTitle className="text-emerald-900">BPC-157</CardTitle>
                    <CardDescription>Tissue repair & gut healing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Wolverine Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/tb-500">
                <Card className="hover:shadow-lg transition-shadow h-full border-emerald-200 bg-gradient-to-br from-white to-emerald-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-emerald-600 mb-2" />
                    <CardTitle className="text-emerald-900">TB-500</CardTitle>
                    <CardDescription>Actin regulation & angiogenesis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Wolverine Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/ipamorelin">
                <Card className="hover:shadow-lg transition-shadow h-full border-blue-200 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Ipamorelin</CardTitle>
                    <CardDescription>Selective GH secretagogue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Multiple Stacks</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/cjc-1295">
                <Card className="hover:shadow-lg transition-shadow h-full border-blue-200 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">CJC-1295</CardTitle>
                    <CardDescription>GHRH analog with/without DAC</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Fat Loss Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/ghk-cu">
                <Card className="hover:shadow-lg transition-shadow h-full border-amber-200 bg-gradient-to-br from-white to-amber-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-amber-600 mb-2" />
                    <CardTitle className="text-amber-900">GHK-Cu</CardTitle>
                    <CardDescription>31.2% genome regulation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Wolverine Stack</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="metabolic" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/peptides/tesamorelin">
                <Card className="hover:shadow-lg transition-shadow h-full border-purple-200 bg-gradient-to-br from-white to-purple-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-purple-900">Tesamorelin</CardTitle>
                    <CardDescription>FDA-approved visceral fat reduction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">FDA-Approved</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/igf-1-lr3">
                <Card className="hover:shadow-lg transition-shadow h-full border-indigo-200 bg-gradient-to-br from-white to-indigo-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-indigo-600 mb-2" />
                    <CardTitle className="text-indigo-900">IGF-1 LR3</CardTitle>
                    <CardDescription>Hyperplasia & muscle fiber creation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Lean Mean Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/peptides/semaglutide">
                <Card className="hover:shadow-lg transition-shadow h-full border-rose-200 bg-gradient-to-br from-white to-rose-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-rose-600 mb-2" />
                    <CardTitle className="text-rose-900">Semaglutide</CardTitle>
                    <CardDescription>14.9-17.4% weight loss (FDA-approved)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Fat Loss Stack</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="cognitive" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow h-full border-slate-200 bg-gradient-to-br from-white to-slate-50 opacity-60">
                <CardHeader>
                  <Pill className="h-8 w-8 text-slate-400 mb-2" />
                  <CardTitle className="text-slate-600">Semax</CardTitle>
                  <CardDescription>BDNF modulation (Coming Soon)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Cognitive Enhancement Stack</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full border-slate-200 bg-gradient-to-br from-white to-slate-50 opacity-60">
                <CardHeader>
                  <Pill className="h-8 w-8 text-slate-400 mb-2" />
                  <CardTitle className="text-slate-600">Selank</CardTitle>
                  <CardDescription>Anxiolytic & neuroprotective (Coming Soon)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Cognitive Enhancement Stack</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full border-slate-200 bg-gradient-to-br from-white to-slate-50 opacity-60">
                <CardHeader>
                  <Pill className="h-8 w-8 text-slate-400 mb-2" />
                  <CardTitle className="text-slate-600">Dihexa</CardTitle>
                  <CardDescription>Synaptogenesis (Coming Soon)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Cognitive Enhancement Stack</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="longevity" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/peptides/epithalon">
                <Card className="hover:shadow-lg transition-shadow h-full border-violet-200 bg-gradient-to-br from-white to-violet-50">
                  <CardHeader>
                    <Pill className="h-8 w-8 text-violet-600 mb-2" />
                    <CardTitle className="text-violet-900">Epithalon</CardTitle>
                    <CardDescription>Telomerase activation & longevity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">Anti-Aging Stack</p>
                  </CardContent>
                </Card>
              </Link>

              <Card className="hover:shadow-lg transition-shadow h-full border-slate-200 bg-gradient-to-br from-white to-slate-50 opacity-60">
                <CardHeader>
                  <Pill className="h-8 w-8 text-slate-400 mb-2" />
                  <CardTitle className="text-slate-600">FOXO4-DRI</CardTitle>
                  <CardDescription>Senolytic cellular cleanup (Coming Soon)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Anti-Aging Stack</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full border-slate-200 bg-gradient-to-br from-white to-slate-50 opacity-60">
                <CardHeader>
                  <Pill className="h-8 w-8 text-slate-400 mb-2" />
                  <CardTitle className="text-slate-600">Humanin</CardTitle>
                  <CardDescription>Mitochondrial peptide (Coming Soon)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">Anti-Aging Stack</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Looking for personalized peptide recommendations?
          </p>
          <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
              Try Dr.Peptide AI Selection Tool
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-slate-500 mt-2">Interactive questionnaire by PeptideProtocols.ai</p>
        </div>
      </section>

      {/* Visual Resources Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Clinical Reference Materials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
              <img src="/drspeptides_infographic_bpc157.png" alt="BPC-157 Benefits Infographic" className="w-full rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">BPC-157 Clinical Guide</h4>
              <p className="text-slate-600 dark:text-slate-400">Comprehensive overview of mechanisms and applications</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
              <img src="/drspeptides_comparison_chart.png" alt="Peptide Category Comparison" className="w-full rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Peptide Category Comparison</h4>
              <p className="text-slate-600 dark:text-slate-400">Quick reference for clinical applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Animated Stats */}
      <AnimatedStats />

      {/* Testimonials */}
      <TestimonialsCarousel />

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Source Medical-Grade Peptides?</h3>
          <p className="text-xl mb-8 text-teal-50">
            DrsPeptides.com provides USA-manufactured, cGMP-certified peptides with third-party testing for healthcare providers nationwide.
          </p>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About This Resource</h4>
              <p className="text-slate-400">
                An educational hub providing evidence-based information on peptide therapy for healthcare practitioners.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="hover:text-teal-400 transition-colors">Resources</Link></li>
                <li><a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">DrsPeptides.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Disclaimer</h4>
              <p className="text-slate-400 text-sm">
                This content is for educational purposes only and is not medical advice. Consult with qualified healthcare professionals before implementing peptide therapy.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Peptide Education Hub. Educational resource supporting DrsPeptides.com</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
