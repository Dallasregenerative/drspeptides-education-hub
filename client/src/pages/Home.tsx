import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, ExternalLink, FileText, Microscope, Shield, TrendingUp, Zap, Brain, Heart, Layers, Pill, Search, BookOpen } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import AIAgentBanner from "@/components/AIAgentBanner";
import AnimatedStats from "@/components/AnimatedStats";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TrustBadges from "@/components/TrustBadges";
import IndustryStatsBar from "@/components/IndustryStatsBar";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import PeptideCard from "@/components/PeptideCard";
import { 
  allPeptides, 
  getRecoveryPeptides, 
  getMetabolicPeptides, 
  getCognitivePeptides, 
  getLongevityPeptides,
  getNonBlendPeptides
} from "@/data/peptideData";

export default function Home() {
  usePageTitle(
    "Peptide Education Hub - Peptide Therapy Education for Healthcare Providers",
    {
      description: "Comprehensive educational resource for healthcare providers practicing peptide therapy. Clinical guides, quality standards, and evidence-based protocols for BPC-157, TB-500, Semaglutide, Tirzepatide, and more."
    }
  );
  
  // Get peptides by category (excluding blends for category tabs)
  const recoveryPeptides = getRecoveryPeptides();
  const metabolicPeptides = getMetabolicPeptides();
  const cognitivePeptides = getCognitivePeptides();
  const longevityPeptides = getLongevityPeptides();
  const allNonBlendPeptides = getNonBlendPeptides();
  
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
            The Most Comprehensive Evidence-Based <span className="text-teal-600">Peptide Resource</span> for Healthcare Providers 2026
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
            Evidence-based education, clinical protocols, and quality standards for practitioners integrating peptide therapy into their practice. Powered by a Self-Evolving Collective Intelligence that gets smarter with every practitioner who joins.
          </p>
          {/* CMA_READY: Uncomment when Dr. Sethuraman agrees
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">Chief Medical Advisor: Dr. Venkat Sethuraman, MD, MBA, FAAOS, ABAARM — Mayo Clinic / Wharton</p>
          */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                Explore Educational Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <SourcePeptidesButton size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Industry Stats Bar */}
      <IndustryStatsBar />

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
              <CardDescription>Comprehensive guide to launching a peptide therapy practice in 2026</CardDescription>
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

      {/* AI Agent Banner - positioned after educational content */}
      <AIAgentBanner />

      {/* Professional Tools Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Professional Clinical Tools
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Interactive calculators and checkers designed for healthcare providers to optimize peptide therapy protocols
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/tools/dosage-calculator">
              <Card className="hover:shadow-xl transition-shadow h-full bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Pill className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg text-blue-900">Dosage Calculator</CardTitle>
                  </div>
                  <CardDescription>Reconstitution volumes, syringe measurements, and injection schedules</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/tools/interaction-checker">
              <Card className="hover:shadow-xl transition-shadow h-full bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg text-purple-900">Interaction Checker</CardTitle>
                  </div>
                  <CardDescription>Drug interactions, contraindications, and safe combination protocols</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/tools/cost-calculator">
              <Card className="hover:shadow-xl transition-shadow h-full bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg text-green-900">Cost Calculator</CardTitle>
                  </div>
                  <CardDescription>Compare costs across 60+ peptides from different supplier tiers</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/tools/protocol-builder">
              <Card className="hover:shadow-xl transition-shadow h-full bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <FileText className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg text-indigo-900">Protocol Builder</CardTitle>
                  </div>
                  <CardDescription>Build custom protocols from templates with dosing schedules and PDF export</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/tools/comparison-tool">
              <Card className="hover:shadow-xl transition-shadow h-full bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Layers className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg text-orange-900">Comparison Tool</CardTitle>
                  </div>
                  <CardDescription>Side-by-side comparison of peptides by mechanism, dosing, and evidence</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/tools/reconstitution-calculator">
              <Card className="hover:shadow-xl transition-shadow h-full bg-white/95 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Microscope className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-lg text-teal-900">Reconstitution Calculator</CardTitle>
                  </div>
                  <CardDescription>Calculate BAC water volumes and concentration per unit for any vial size</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/tools">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 text-lg px-8">
                View All 11 Clinical Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Peptide Profiles Section - Now with ALL peptides */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Peptide Profiles
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            In-depth profiles featuring mechanisms, clinical research, dosing protocols, and safety considerations for {allNonBlendPeptides.length}+ peptides
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap w-full max-w-3xl mx-auto h-auto gap-1 mb-8">
            <TabsTrigger value="all">Featured</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="metabolic">Metabolic</TabsTrigger>
            <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
            <TabsTrigger value="longevity">Longevity</TabsTrigger>
            <TabsTrigger value="immune">Immune</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allNonBlendPeptides.slice(0, 12).map((peptide) => (
                <PeptideCard key={peptide.slug} peptide={peptide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recovery" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recoveryPeptides.slice(0, 8).map((peptide) => (
                <PeptideCard key={peptide.slug} peptide={peptide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="metabolic" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metabolicPeptides.slice(0, 8).map((peptide) => (
                <PeptideCard key={peptide.slug} peptide={peptide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cognitive" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cognitivePeptides.slice(0, 8).map((peptide) => (
                <PeptideCard key={peptide.slug} peptide={peptide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="longevity" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {longevityPeptides.slice(0, 8).map((peptide) => (
                <PeptideCard key={peptide.slug} peptide={peptide} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="immune" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allPeptides.filter(p => p.category === 'immune').slice(0, 8).map((peptide) => (
                <PeptideCard key={peptide.slug} peptide={peptide} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Link href="/peptide-index">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
              View All {allNonBlendPeptides.length}+ Peptide Profiles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-lg flex-shrink-0">
                <img src="/dr-peptide-logo.png" alt="Dr. Peptide" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div>
                <p className="text-teal-300 text-sm font-semibold uppercase tracking-wide mb-1">The World's First Clinical AI Agent</p>
                <p className="text-white text-lg font-bold mb-2">Looking for personalized peptide protocols?</p>
                <p className="text-slate-300 text-sm mb-4">Dr. Peptide integrates patient genetics, lab biomarkers, and collective practitioner intelligence to generate precision peptide protocols — with every recommendation PubMed-cited and verifiable.</p>
                <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold">
                    Build a Precision Protocol
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A-Z Peptide Index CTA */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Complete Reference
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              A-Z Peptide Index
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Browse our complete directory of 85+ peptides, blends, and proprietary formulas. Search by name, filter by category, or navigate alphabetically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/peptide-index">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 shadow-lg">
                  <Search className="mr-2 h-5 w-5" />
                  Browse All Peptides
                </Button>
              </Link>
              <Link href="/tools">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Clinical Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {['BPC-157', 'Semaglutide', 'Tirzepatide', 'CJC-1295', 'Ipamorelin', 'TB-500', 'Sermorelin', 'GHK-Cu'].map(name => (
                <Link key={name} href={`/peptides/${name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-400 hover:border-teal-400 hover:text-teal-600 transition-colors cursor-pointer">
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
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
              <img src="/drspeptides_infographic_bpc157.webp" alt="BPC-157 Benefits Infographic" className="w-full rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">BPC-157 Clinical Guide</h4>
              <p className="text-slate-600 dark:text-slate-400">Comprehensive overview of mechanisms and applications</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
              <img src="/drspeptides_comparison_chart.webp" alt="Peptide Category Comparison" className="w-full rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Peptide Category Comparison</h4>
              <p className="text-slate-600 dark:text-slate-400">Quick reference for clinical applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Quick-Start Guide Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Free Resource
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Peptide Therapy Quick-Start Guide
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Everything you need to confidently integrate peptide therapy into your clinical practice.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-teal-200 dark:border-teal-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg shrink-0">
                      <Pill className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Top 10 Peptides Every Practitioner Should Know</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">From BPC-157 to Semaglutide — the essential peptides for any regenerative medicine practice, with clinical context and evidence summaries.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-teal-200 dark:border-teal-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                      <Microscope className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Dosing Cheat Sheet with Reconstitution Math</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Quick-reference dosing tables, BAC water calculations, and injection volume formulas — no more guesswork at the point of care.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-teal-200 dark:border-teal-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg shrink-0">
                      <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Patient Consent Form Templates</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">State-specific consent forms for Texas, California, Florida, New York, and a standard US template — ready to customize for your practice.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-teal-200 dark:border-teal-800 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg shrink-0">
                      <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">2026 Regulatory Compliance Checklist</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Stay compliant with the latest FDA guidance, state board requirements, and documentation best practices for peptide therapy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/downloads">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 shadow-lg">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Download Free Resources
                  </Button>
                </Link>
                <Link href="/downloads">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Shield className="mr-2 h-5 w-5" />
                    View Consent Forms
                  </Button>
                </Link>
              </div>
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
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 rounded-2xl p-12 text-white shadow-2xl">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-2xl shadow-teal-500/20">
              <img src="/dr-peptide-logo.png" alt="Dr. Peptide - AI Clinical Agent" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div>
              <p className="text-teal-300 text-sm font-semibold uppercase tracking-wide mb-2">Pre-Release Access Available</p>
              <h3 className="text-3xl font-bold mb-3">Get a Personalized Peptide Protocol</h3>
              <p className="text-teal-100/80 italic mb-2">The World's First Clinical AI Agent for Peptide Therapy</p>
              <p className="text-xl mb-4 text-slate-300">
                Dr. Peptide analyzes your patient's genetics and labs, applies predictive analytics, and draws on collective practitioner intelligence to build precision protocols — every recommendation cited and verifiable.
              </p>
              {/* CMA_READY: Uncomment when Dr. Sethuraman agrees
              <p className="text-sm text-teal-400/80 mb-6">Chief Medical Advisor: Dr. Venkat Sethuraman, MD, MBA, FAAOS, ABAARM — Mayo Clinic / Wharton</p>
              */}
            </div>
            <SourcePeptidesButton size="lg" variant="secondary" className="text-lg px-8" />
          </div>
        </div>
      </section>


    </div>
    </>
  );
}
