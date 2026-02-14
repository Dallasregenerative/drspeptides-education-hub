import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Microscope, Search, Filter, BookOpen, FlaskConical, ArrowLeft, ChevronLeft, ChevronRight} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { useState, useMemo } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { studies, Study } from "@/data/researchStudies";

const STUDIES_PER_PAGE = 20;

export default function ResearchStudies() {
  usePageTitle("Research - Clinical Studies & Evidence");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPeptide, setSelectedPeptide] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const cats = new Set(studies.map(s => s.category));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const peptides = useMemo(() => {
    const peps = new Set(studies.map(s => s.peptide));
    return ["All", ...Array.from(peps).sort()];
  }, []);

  const filteredStudies = useMemo(() => {
    return studies.filter(study => {
      const matchesSearch = 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.keyFindings.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.peptide.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || study.category === selectedCategory;
      const matchesPeptide = selectedPeptide === "All" || study.peptide === selectedPeptide;
      
      return matchesSearch && matchesCategory && matchesPeptide;
    });
  }, [searchTerm, selectedCategory, selectedPeptide]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedPeptide]);

  const totalPages = Math.ceil(filteredStudies.length / STUDIES_PER_PAGE);
  const paginatedStudies = filteredStudies.slice(
    (currentPage - 1) * STUDIES_PER_PAGE,
    currentPage * STUDIES_PER_PAGE
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Clinical Research Database</h2>
            <p className="text-2xl text-blue-50 mb-8">
              Comprehensive collection of peer-reviewed studies on therapeutic peptides
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{studies.length}</div>
                <div className="text-sm text-blue-100">Clinical Studies</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{peptides.length - 1}</div>
                <div className="text-sm text-blue-100">Peptides Covered</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-3xl font-bold">{categories.length - 1}</div>
                <div className="text-sm text-blue-100">Research Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="md:col-span-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search studies by title, author, peptide, or findings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  <Filter className="inline h-4 w-4 mr-1" />
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Peptide Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  <FlaskConical className="inline h-4 w-4 mr-1" />
                  Peptide
                </label>
                <select
                  value={selectedPeptide}
                  onChange={(e) => setSelectedPeptide(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                >
                  {peptides.map(pep => (
                    <option key={pep} value={pep}>{pep}</option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Showing <span className="font-semibold text-teal-600">{filteredStudies.length}</span> of {studies.length} studies
                  {filteredStudies.length > STUDIES_PER_PAGE && (
                    <span> (page {currentPage} of {totalPages})</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Studies Grid */}
          <div className="grid grid-cols-1 gap-6">
            {paginatedStudies.map(study => (
              <Card key={study.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800">
                      {study.peptide}
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                      {study.category}
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                      {study.evidenceLevel}
                    </Badge>
                    {study.fdaStatus && (
                      <Badge variant={study.fdaStatus === "FDA Approved" ? "default" : "secondary"} className={study.fdaStatus === "FDA Approved" ? "bg-green-600" : ""}>
                        {study.fdaStatus}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>
                    {study.authors} ({study.year}) - <span className="italic">{study.journal}</span>
                    {study.citations && <span className="ml-2 text-teal-600 font-semibold">• {study.citations} citations</span>}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    <strong>Key Findings:</strong> {study.keyFindings}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={study.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Full Study
                      </Button>
                    </a>
                    {study.pubmedId && (
                      <a href={`https://pubmed.ncbi.nlm.nih.gov/${study.pubmedId}/`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          PubMed: {study.pubmedId}
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className={currentPage === pageNum ? "bg-teal-600 hover:bg-teal-700" : ""}
                  >
                    {pageNum}
                  </Button>
                );
              })}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}

          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <FlaskConical className="h-16 w-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-2">No studies found</h3>
              <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Access More Research</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Explore additional databases and resources for comprehensive peptide therapy research
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  PubMed
                </Button>
              </a>
              <a href="https://clinicaltrials.gov/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  ClinicalTrials.gov
                </Button>
              </a>
              <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-teal-500 text-teal-600 hover:bg-teal-50">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  PeptideProtocols.ai
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Source Medical-Grade Peptides?</h3>
          <p className="text-xl text-teal-50 mb-8">
            DrsPeptides.com provides USA-manufactured, cGMP-certified peptides with third-party testing for healthcare providers nationwide.
          </p>
          <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
              Visit DrsPeptides.com
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
