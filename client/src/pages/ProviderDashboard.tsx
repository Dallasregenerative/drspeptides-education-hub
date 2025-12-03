import { useState } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Calculator, 
  AlertTriangle, 
  FileText, 
  TrendingUp, 
  Users, 
  Beaker,
  Calendar,
  BookOpen,
  Target,
  Clipboard,
  ArrowRight,
  Sparkles,
  BarChart3,
  FileCheck,
  Pill,
  Shield,
  DollarSign,
  GraduationCap,
  Search
} from "lucide-react";

export default function ProviderDashboard() {
  usePageTitle({
    title: "Provider Dashboard - Complete Peptide Therapy Platform",
    description: "Comprehensive dashboard for healthcare providers with clinical tools, patient management, protocols, education, and practice resources all in one place."
  });

  const [stats] = useState({
    totalPeptides: 42,
    totalBlends: 14,
    totalProtocols: 5,
    totalResources: 87
  });

  const clinicalTools = [
    {
      title: "Advanced Dosage Calculator",
      description: "Multi-peptide calculator with weight-based dosing and PDF export",
      icon: Calculator,
      link: "/tools/dosage-calculator",
      color: "bg-blue-500",
      badge: "Enhanced"
    },
    {
      title: "Interaction Checker",
      description: "Clinical-grade database for drug-peptide interactions",
      icon: AlertTriangle,
      link: "/tools/interaction-checker",
      color: "bg-red-500",
      badge: "Clinical"
    },
    {
      title: "Protocol Builder",
      description: "Evidence-based templates for common conditions",
      icon: FileText,
      link: "/tools/protocol-builder",
      color: "bg-teal-500",
      badge: "New"
    },
    {
      title: "Progress Tracker",
      description: "Patient monitoring with charts and analytics",
      icon: TrendingUp,
      link: "/tools/progress-tracker",
      color: "bg-green-500",
      badge: "New"
    },
    {
      title: "Patient Handouts",
      description: "Generate professional education materials",
      icon: FileCheck,
      link: "/tools/patient-handouts",
      color: "bg-purple-500",
      badge: "New"
    },
    {
      title: "Peptide Comparison",
      description: "Side-by-side analysis of up to 4 peptides",
      icon: BarChart3,
      link: "/comparison-tool",
      color: "bg-orange-500",
      badge: "Pro"
    }
  ];

  const educationResources = [
    {
      title: "Peptide Database",
      description: "42 peptides with comprehensive clinical information",
      icon: Pill,
      link: "/",
      count: stats.totalPeptides
    },
    {
      title: "Blend Formulas",
      description: "14 synergistic peptide combinations",
      icon: Beaker,
      link: "/",
      count: stats.totalBlends
    },
    {
      title: "Clinical Protocols",
      description: "Evidence-based treatment protocols",
      icon: Clipboard,
      link: "/protocols/metabolism",
      count: stats.totalProtocols
    },
    {
      title: "Case Studies",
      description: "Real-world clinical experiences",
      icon: BookOpen,
      link: "/case-studies",
      count: "12+"
    }
  ];

  const practiceResources = [
    {
      title: "Regulatory Guidance",
      description: "FDA, DEA, and state regulations",
      icon: Shield,
      link: "/regulatory-guidance"
    },
    {
      title: "Insurance & Billing",
      description: "CPT codes and reimbursement strategies",
      icon: DollarSign,
      link: "/insurance-billing"
    },
    {
      title: "Safety Management",
      description: "Adverse event reporting and protocols",
      icon: Target,
      link: "/safety-management"
    },
    {
      title: "Training & Certification",
      description: "Professional development resources",
      icon: GraduationCap,
      link: "/training"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-teal-600" />
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Provider Dashboard
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            Your complete peptide therapy platform. Access clinical tools, patient management, 
            evidence-based protocols, and practice resources all in one place.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">{stats.totalPeptides}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Peptides</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stats.totalBlends}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Blends</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">{stats.totalProtocols}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Protocols</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">{stats.totalResources}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Resources</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-teal-600" />
            Clinical Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalTools.map((tool, index) => (
              <Link key={index} href={tool.link}>
                <a>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className={`${tool.color} p-3 rounded-lg`}>
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        {tool.badge && (
                          <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-xs px-2 py-1 rounded-full font-semibold">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-between">
                        Open Tool
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Education Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-teal-600" />
            Education Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationResources.map((resource, index) => (
              <Link key={index} href={resource.link}>
                <a>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6">
                      <resource.icon className="h-8 w-8 text-teal-600 mb-3" />
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        {resource.description}
                      </p>
                      <div className="text-2xl font-bold text-teal-600">
                        {resource.count}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Practice Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-teal-600" />
            Practice Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceResources.map((resource, index) => (
              <Link key={index} href={resource.link}>
                <a>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="pt-6">
                      <resource.icon className="h-8 w-8 text-blue-600 mb-3" />
                      <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {resource.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Help Finding Something?</h3>
                <p className="text-teal-50">
                  Use our global search (⌘K) to instantly find any peptide, protocol, or resource
                </p>
              </div>
              <Button size="lg" variant="secondary" className="gap-2">
                <Search className="h-5 w-5" />
                Open Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                What's New
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded">
                  <FileText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Protocol Builder</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    5 evidence-based templates
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Progress Tracker</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Charts and analytics
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded">
                  <FileCheck className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Patient Handouts</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Professional templates
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-500" />
                Most Popular
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/peptides/semaglutide">
                <a className="flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded">
                  <span className="text-sm font-medium">Semaglutide</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <Link href="/peptides/bpc-157">
                <a className="flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded">
                  <span className="text-sm font-medium">BPC-157</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <Link href="/peptides/cjc-1295-ipamorelin">
                <a className="flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded">
                  <span className="text-sm font-medium">CJC-1295 + Ipamorelin</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/supplier-directory">
                <a className="flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded">
                  <span className="text-sm font-medium">Supplier Directory</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <Link href="/patient-education">
                <a className="flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded">
                  <span className="text-sm font-medium">Patient Education</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <Link href="/faq">
                <a className="flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded">
                  <span className="text-sm font-medium">FAQ & Glossary</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Comprehensive platform for healthcare providers practicing peptide therapy
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Educational resource supporting DrsPeptides.com
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
