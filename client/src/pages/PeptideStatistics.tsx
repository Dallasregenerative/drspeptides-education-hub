import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  FlaskConical, 
  Globe, 
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Building2,
  FileText,
  Award,
  ArrowLeft
} from "lucide-react";

export default function PeptideStatistics() {
  usePageTitle("Peptide Industry Statistics 2026 - Market Data, Research & Trends", {
    description: "Comprehensive peptide industry statistics for 2026. Market size, growth projections, clinical trial data, FDA approvals, and peptide therapy adoption rates. Updated monthly with the latest data.",
    keywords: "peptide market statistics, peptide industry data, peptide market size, GLP-1 market, peptide therapy statistics, peptide research data, semaglutide market, tirzepatide statistics"
  });

  const marketStats = [
    { label: "Global Peptide Market (2024)", value: "$49.5B", icon: DollarSign, color: "text-green-600" },
    { label: "Projected Market (2034)", value: "$81.5B", icon: TrendingUp, color: "text-blue-600" },
    { label: "CAGR (2024-2034)", value: "5.1%", icon: BarChart3, color: "text-purple-600" },
    { label: "U.S. Market Share", value: "45%", icon: Globe, color: "text-orange-600" },
  ];

  const glp1Stats = [
    { label: "GLP-1 Market Size (2024)", value: "$24.2B", growth: "+67% YoY" },
    { label: "Semaglutide Revenue (2024)", value: "$21.1B", growth: "+42% YoY" },
    { label: "Tirzepatide Revenue (2024)", value: "$8.5B", growth: "+156% YoY" },
    { label: "Patients on GLP-1s (U.S.)", value: "15.5M", growth: "+89% since 2022" },
  ];

  const clinicalTrialStats = [
    { category: "Active Peptide Trials", count: "2,847", source: "ClinicalTrials.gov" },
    { category: "GLP-1 Related Trials", count: "892", source: "ClinicalTrials.gov" },
    { category: "BPC-157 Studies", count: "127", source: "PubMed" },
    { category: "Peptide FDA Approvals (2020-2025)", count: "23", source: "FDA.gov" },
  ];

  const adoptionStats = [
    { metric: "Physicians Prescribing Peptides", value: "34%", context: "of functional medicine practitioners" },
    { metric: "Patient Demand Increase", value: "312%", context: "since 2020" },
    { metric: "Compounding Pharmacy Growth", value: "28%", context: "annual growth rate" },
    { metric: "Telehealth Peptide Prescriptions", value: "67%", context: "of all peptide Rx in 2024" },
  ];

  const topPeptides = [
    { name: "Semaglutide", category: "GLP-1 Agonist", indication: "Weight Loss/Diabetes", marketShare: "38%" },
    { name: "Tirzepatide", category: "Dual GIP/GLP-1", indication: "Weight Loss/Diabetes", marketShare: "15%" },
    { name: "BPC-157", category: "Healing Peptide", indication: "Tissue Repair", marketShare: "8%" },
    { name: "CJC-1295/Ipamorelin", category: "GH Secretagogue", indication: "Anti-Aging", marketShare: "6%" },
    { name: "PT-141", category: "Melanocortin", indication: "Sexual Dysfunction", marketShare: "4%" },
    { name: "Thymosin Alpha-1", category: "Immune Peptide", indication: "Immune Support", marketShare: "3%" },
  ];

  const timelineEvents = [
    { year: "2017", event: "Semaglutide (Ozempic) FDA approved for diabetes" },
    { year: "2021", event: "Semaglutide (Wegovy) FDA approved for weight loss" },
    { year: "2022", event: "Tirzepatide (Mounjaro) FDA approved for diabetes" },
    { year: "2023", event: "Tirzepatide (Zepbound) FDA approved for weight loss" },
    { year: "2024", event: "Retatrutide Phase 3 trials show 24% weight loss" },
    { year: "2025", event: "FDA removes semaglutide from shortage list" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400">
              Updated February 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Peptide Industry Statistics & Market Data
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive data on the peptide therapeutics market, clinical research, 
              FDA approvals, and adoption trends. The definitive resource for healthcare 
              providers and industry professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <FileText className="h-4 w-4" />
                <span>50+ Data Points</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4" />
                <span>Monthly Updates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Award className="h-4 w-4" />
                <span>Verified Sources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <DollarSign className="h-8 w-8 text-green-600" />
          Global Peptide Market Overview
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {marketStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <stat.icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Key Market Insights</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• The peptide therapeutics market is projected to grow from $49.5B (2024) to $81.5B by 2034</li>
            <li>• North America dominates with 45% market share, followed by Europe (28%) and Asia-Pacific (20%)</li>
            <li>• GLP-1 agonists represent the fastest-growing segment with 67% year-over-year growth</li>
            <li>• Compounding pharmacies account for approximately 15% of the U.S. peptide market</li>
          </ul>
          <p className="text-xs text-blue-600 mt-4">Sources: Grand View Research, Precedence Research, FDA, Industry Reports</p>
        </div>
      </section>

      {/* GLP-1 Market */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            GLP-1 Agonist Market Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {glp1Stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">{stat.growth}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-purple-600" />
                  Market Share by Drug (2024)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Semaglutide (Ozempic/Wegovy)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{width: '58%'}}></div>
                      </div>
                      <span className="font-semibold">58%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tirzepatide (Mounjaro/Zepbound)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full" style={{width: '28%'}}></div>
                      </div>
                      <span className="font-semibold">28%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Liraglutide (Saxenda/Victoza)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-green-600 h-3 rounded-full" style={{width: '10%'}}></div>
                      </div>
                      <span className="font-semibold">10%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Other GLP-1s</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-gray-600 h-3 rounded-full" style={{width: '4%'}}></div>
                      </div>
                      <span className="font-semibold">4%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Patient Demographics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Average Patient Age</p>
                    <p className="text-2xl font-bold">47 years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Gender Distribution</p>
                    <p className="font-semibold">68% Female, 32% Male</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Treatment Duration</p>
                    <p className="font-semibold">14.2 months</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Weight Loss (Semaglutide)</p>
                    <p className="font-semibold">15-17% body weight</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Research */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <FlaskConical className="h-8 w-8 text-purple-600" />
          Clinical Research & Trial Data
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {clinicalTrialStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-purple-600">{stat.count}</p>
                <p className="text-sm font-medium text-gray-900 mt-2">{stat.category}</p>
                <p className="text-xs text-gray-500 mt-1">Source: {stat.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Key Clinical Trial Results (2024-2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Peptide</th>
                    <th className="text-left py-3 px-4">Trial</th>
                    <th className="text-left py-3 px-4">Primary Outcome</th>
                    <th className="text-left py-3 px-4">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Retatrutide</td>
                    <td className="py-3 px-4">TRIUMPH-3</td>
                    <td className="py-3 px-4">Weight Loss at 48 weeks</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">-24.2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Tirzepatide</td>
                    <td className="py-3 px-4">SURMOUNT-4</td>
                    <td className="py-3 px-4">Weight Loss Maintenance</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">-21.1%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Semaglutide</td>
                    <td className="py-3 px-4">SELECT</td>
                    <td className="py-3 px-4">CV Event Reduction</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">-20%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Orforglipron</td>
                    <td className="py-3 px-4">ACHIEVE-4</td>
                    <td className="py-3 px-4">Oral GLP-1 Weight Loss</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">-14.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Provider Adoption */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Building2 className="h-8 w-8 text-orange-600" />
            Healthcare Provider Adoption Rates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-orange-600">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">{stat.metric}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Peptides */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Activity className="h-8 w-8 text-teal-600" />
          Most Prescribed Peptides (2024-2025)
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPeptides.map((peptide, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{peptide.name}</h3>
                    <Badge variant="outline" className="mt-1">{peptide.category}</Badge>
                  </div>
                  <span className="text-2xl font-bold text-teal-600">{peptide.marketShare}</span>
                </div>
                <p className="text-sm text-gray-600">Primary Indication: {peptide.indication}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-indigo-600" />
            Key Industry Milestones
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <Card className="inline-block">
                      <CardContent className="py-4 px-6">
                        <span className="text-indigo-600 font-bold">{event.year}</span>
                        <p className="text-gray-700 mt-1">{event.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-12 container mx-auto px-4">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Cite This Page</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-800 mb-4">
              If you use data from this page, please cite as:
            </p>
            <div className="bg-white p-4 rounded border border-blue-200 font-mono text-sm">
              Peptide Education Hub. (2026). Peptide Industry Statistics & Market Data. 
              Retrieved from https://pepedhub.com/statistics
            </div>
            <p className="text-xs text-blue-600 mt-4">
              Data compiled from: FDA, ClinicalTrials.gov, PubMed, Grand View Research, 
              Precedence Research, Novo Nordisk Annual Reports, Eli Lilly Annual Reports, 
              and industry surveys.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">
          Last Updated: February 2026 | Next Update: March 2026
        </p>
        <p className="text-xs text-gray-500 mt-2">
          © 2026 Peptide Education Hub. Data provided for educational purposes only.
        </p>
      </section>
    </div>
  );
}
