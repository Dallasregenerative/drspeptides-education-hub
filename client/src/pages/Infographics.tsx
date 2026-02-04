import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, Eye, Image, BarChart3, Beaker, TrendingUp } from "lucide-react";

export default function Infographics() {
  usePageTitle("Free Peptide Infographics & Visual Resources", {
    description: "Download free peptide therapy infographics, market statistics visuals, and educational graphics. Perfect for presentations, social media, and patient education. High-resolution PNG and SVG formats.",
    keywords: "peptide infographics, peptide statistics graphics, peptide therapy visuals, medical infographics, healthcare graphics, peptide market data visualization"
  });

  const infographics = [
    {
      id: "market-2026",
      title: "Peptide Market Statistics 2026",
      description: "Comprehensive overview of the global peptide therapeutics market including market size, growth projections, GLP-1 dominance, clinical trials, and provider adoption rates.",
      category: "Market Data",
      icon: BarChart3,
      color: "bg-blue-100 text-blue-600",
      downloads: "2.4K",
      formats: ["SVG", "PNG"],
      previewUrl: "/infographics/peptide-market-2026.svg",
      downloadUrl: "/infographics/peptide-market-2026.svg"
    },
    {
      id: "glp1-comparison",
      title: "GLP-1 Agonist Comparison Chart",
      description: "Side-by-side comparison of Semaglutide, Tirzepatide, and Retatrutide including efficacy data, dosing schedules, and clinical trial results.",
      category: "Comparison",
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
      downloads: "1.8K",
      formats: ["SVG", "PNG"],
      previewUrl: "/infographics/glp1-comparison.svg",
      downloadUrl: "/infographics/glp1-comparison.svg",
      comingSoon: true
    },
    {
      id: "bpc157-benefits",
      title: "BPC-157 Benefits & Mechanism",
      description: "Visual guide to BPC-157's mechanisms of action, clinical applications, and research-backed benefits for tissue healing and gut health.",
      category: "Peptide Profile",
      icon: Beaker,
      color: "bg-purple-100 text-purple-600",
      downloads: "3.1K",
      formats: ["SVG", "PNG"],
      previewUrl: "/infographics/bpc157-benefits.svg",
      downloadUrl: "/infographics/bpc157-benefits.svg",
      comingSoon: true
    },
    {
      id: "peptide-categories",
      title: "Peptide Categories Overview",
      description: "Visual breakdown of peptide categories: weight loss, healing, cognitive, immune, longevity, and growth hormone secretagogues with key examples.",
      category: "Educational",
      icon: Image,
      color: "bg-orange-100 text-orange-600",
      downloads: "2.0K",
      formats: ["SVG", "PNG"],
      previewUrl: "/infographics/peptide-categories.svg",
      downloadUrl: "/infographics/peptide-categories.svg",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-500/20 text-purple-200 border-purple-400">
              Free Download
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Peptide Therapy Infographics
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              High-quality visual resources for healthcare providers, educators, and content creators. 
              Free to download and share with attribution.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Download className="h-4 w-4" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Image className="h-4 w-4" />
                <span>SVG & PNG Formats</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Share2 className="h-4 w-4" />
                <span>Share with Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographics Grid */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {infographics.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                {item.comingSoon ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500 font-medium">Coming Soon</span>
                  </div>
                ) : (
                  <img 
                    src={item.previewUrl} 
                    alt={item.title}
                    className="w-full h-full object-contain p-4"
                  />
                )}
                <Badge className={`absolute top-3 left-3 ${item.color}`}>
                  {item.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {item.downloads} downloads
                    </span>
                    <span>
                      {item.formats.join(" / ")}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {!item.comingSoon && (
                      <>
                        <a href={item.previewUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            Preview
                          </Button>
                        </a>
                        <a href={item.downloadUrl} download>
                          <Button size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Usage Guidelines</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Free for Educational & Commercial Use</p>
                      <p className="text-sm text-gray-600">Use these infographics in presentations, blog posts, social media, and patient education materials.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Attribution Required</p>
                      <p className="text-sm text-gray-600">Please include "Source: pepedhub.com" or link back to our site when sharing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">No Modification of Data</p>
                      <p className="text-sm text-gray-600">Do not alter statistics, claims, or medical information displayed in the infographics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">No Resale</p>
                      <p className="text-sm text-gray-600">These graphics may not be sold or included in products for sale.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Embed Code Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Embed on Your Website</h2>
          <Card>
            <CardHeader>
              <CardTitle>Embed Code</CardTitle>
              <CardDescription>Copy and paste this code to embed the market statistics infographic on your website.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`<a href="https://pepedhub.com/statistics" target="_blank">
  <img 
    src="https://pepedhub.com/infographics/peptide-market-2026.svg" 
    alt="Peptide Market Statistics 2026 - Peptide Education Hub"
    style="max-width: 100%; height: auto;"
  />
</a>
<p style="font-size: 12px; color: #666;">
  Source: <a href="https://pepedhub.com">Peptide Education Hub</a>
</p>`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-gray-100 text-center">
        <p className="text-sm text-gray-600">
          All infographics © 2026 Peptide Education Hub
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Free to use with attribution | pepedhub.com
        </p>
      </section>
    </div>
  );
}
