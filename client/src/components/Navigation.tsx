import { useState } from "react";
// Updated branding to Peptide Education Hub
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Microscope, Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import GlobalSearch from "@/components/GlobalSearch";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for collapsible mobile menu sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const peptideCategories = {
    "Weight Loss & Metabolism": [
      { name: "Semaglutide", path: "/peptides/semaglutide" },
      { name: "Tirzepatide", path: "/peptides/tirzepatide" },
      { name: "Cagrilintide", path: "/peptides/cagrilintide" },
      { name: "Retatrutide", path: "/peptides/retatrutide" },
      { name: "AOD-9604", path: "/peptides/aod-9604" },
      { name: "5-Amino-1MQ", path: "/peptides/5-amino-1mq" },
      { name: "GLP-1", path: "/peptides/glp-1" },
    ],
    "Recovery & Healing": [
      { name: "BPC-157", path: "/peptides/bpc-157" },
      { name: "TB-500", path: "/peptides/tb-500" },
      { name: "GHK-Cu", path: "/peptides/ghk-cu" },
      { name: "MGF", path: "/peptides/mgf" },
      { name: "Thymosin Alpha-1", path: "/peptides/thymosin-alpha-1" },
      { name: "BPC-157 Capsules", path: "/peptides/bpc-157-capsules" },
      { name: "GHK-Cu Serum", path: "/peptides/ghk-cu-serum" },
    ],
    "Growth Hormone": [
      { name: "CJC-1295", path: "/peptides/cjc-1295" },
      { name: "Ipamorelin", path: "/peptides/ipamorelin" },
      { name: "GHRP-2", path: "/peptides/ghrp-2" },
      { name: "GHRP-6", path: "/peptides/ghrp-6" },
      { name: "Sermorelin", path: "/peptides/sermorelin" },
      { name: "Tesamorelin", path: "/peptides/tesamorelin" },
      { name: "Ibutamoren", path: "/peptides/ibutamoren" },
      { name: "IGF-1 LR3", path: "/peptides/igf-1-lr3" },
    ],
    "Cognitive & Neuroprotection": [
      { name: "Semax", path: "/peptides/semax" },
      { name: "Selank", path: "/peptides/selank" },
      { name: "Dihexa", path: "/peptides/dihexa" },
    ],
    "Longevity & Anti-Aging": [
      { name: "Epithalon", path: "/peptides/epithalon" },
      { name: "Humanin", path: "/peptides/humanin" },
      { name: "MOTSc", path: "/peptides/mots-c" },
      { name: "SS-31", path: "/peptides/ss-31" },
      { name: "SLUPP-332", path: "/peptides/slu-pp-332" },
      { name: "NAD+", path: "/peptides/nad" },
      { name: "NAD+ Nasal Spray", path: "/peptides/nad-nasal-spray" },
      { name: "Pinealon", path: "/peptides/pinealon" },
    ],
    "Immune & Inflammatory": [
      { name: "LL-37", path: "/peptides/ll-37" },
      { name: "KPV", path: "/peptides/kpv" },
      { name: "Glutathione", path: "/peptides/glutathione" },
    ],
    "Sexual Health": [
      { name: "PT-141", path: "/peptides/pt-141" },
      { name: "Kisspeptin-10", path: "/peptides/kisspeptin-10" },
      { name: "Oxytocin", path: "/peptides/oxytocin" },
    ],
    "Aesthetic & Beauty": [
      { name: "Melanotan 1", path: "/peptides/melanotan-1" },
      { name: "Melanotan 2", path: "/peptides/melanotan-2" },
    ],
    "Sleep & Recovery": [
      { name: "DSIP", path: "/peptides/dsip" },
    ],
  };

  const blendCategories = {
    "Beauty Blends": [
      { name: "Glow Core", path: "/peptides/glow-core" },
      { name: "Glow Plus", path: "/peptides/glow-plus" },
      { name: "Glow Ultra", path: "/peptides/glow-ultra" },
      { name: "GLOW Capsules", path: "/peptides/glow-blend-capsules" },
      { name: "KLOW Capsules", path: "/peptides/klow-blend-capsules" },
    ],
    "Recovery Blends": [
      { name: "BPC-157 + TB-500", path: "/peptides/bpc-157-tb-500" },
      { name: "BPC Wolverine", path: "/peptides/bpc-wolverine" },
    ],
    "Weight Loss Blends": [
      { name: "Semaglutide + BPC-157", path: "/peptides/semaglutide-bpc-157" },
      { name: "Tirzepatide + BPC-157", path: "/peptides/tirzepatide-bpc-157" },
    ],
    "Growth Hormone Blends": [
      { name: "CJC-1295 + Ipamorelin", path: "/peptides/cjc-1295-ipamorelin" },
      { name: "Tesamorelin + Ipamorelin", path: "/peptides/tesamorelin-ipamorelin" },
    ],
    "Cognitive Blends": [
      { name: "Selank + Semax", path: "/peptides/selank-semax" },
    ],
    "Longevity Blends": [
      { name: "Formula M-51", path: "/peptides/formula-m-51" },
      { name: "Formula N-5550", path: "/peptides/formula-n-5550" },
      { name: "Formula RG-5555", path: "/peptides/formula-rg-5555" },
    ],
  };

  const toolsLinks = [
    { name: "Dosage Calculator", path: "/tools/dosage-calculator" },
    { name: "Interaction Checker", path: "/tools/interaction-checker" },
    { name: "Protocol Builder", path: "/tools/protocol-builder" },
    { name: "Progress Tracker", path: "/tools/progress-tracker" },
    { name: "Patient Handouts", path: "/tools/patient-handouts" },
    { name: "Biomarker Tracker", path: "/tools/biomarker-tracker" },
    { name: "Practice Assessment Quiz", path: "/tools/practice-assessment" },
    { name: "Peptide Comparison", path: "/comparison-tool" },
    { name: "Cost Calculator", path: "/tools/cost-calculator" },
  ];

  const resourcesLinks = [
    { name: "Video Library", path: "/video-library" },
    { name: "Downloadable Resources", path: "/downloads" },
    { name: "Resource Library", path: "/resources" },
    { name: "Regulatory & Legal Guidance", path: "/regulatory-guidance" },
    { name: "Supplier Directory", path: "/supplier-directory" },
    { name: "Patient Education", path: "/patient-education" },
    { name: "FAQ & Glossary", path: "/faq" },
    { name: "Clinical Case Studies", path: "/case-studies" },
    { name: "Safety & Adverse Events", path: "/safety-management" },
    { name: "Insurance & Billing", path: "/insurance-billing" },
    { name: "Practice Toolkit", path: "/practice-toolkit" },
  ];

  return (
    <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Microscope className="h-8 w-8 text-teal-600" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Peptide Education Hub</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center">
            <GlobalSearch />
            <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">
              Home
            </Link>

            {/* Peptides Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors flex items-center gap-1">
                Peptides <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 max-h-[600px] overflow-y-auto">
                {Object.entries(peptideCategories).map(([category, peptides]) => (
                  <DropdownMenuSub key={category}>
                    <DropdownMenuSubTrigger>{category}</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="max-h-[400px] overflow-y-auto">
                      {peptides.map((peptide) => (
                        <DropdownMenuItem key={peptide.path} asChild>
                          <Link href={peptide.path} className="cursor-pointer">
                            {peptide.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blends Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors flex items-center gap-1">
                Blends <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 max-h-[600px] overflow-y-auto">
                {Object.entries(blendCategories).map(([category, blends]) => (
                  <DropdownMenuSub key={category}>
                    <DropdownMenuSubTrigger>{category}</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      {blends.map((blend) => (
                        <DropdownMenuItem key={blend.path} asChild>
                          <Link href={blend.path} className="cursor-pointer">
                            {blend.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors flex items-center gap-1">
                Tools <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {toolsLinks.map((tool) => (
                  <DropdownMenuItem key={tool.path} asChild>
                    <Link href={tool.path} className="cursor-pointer">
                      {tool.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">
              Blog
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resourcesLinks.map((resource) => (
                  <DropdownMenuItem key={resource.path} asChild>
                    <Link href={resource.path} className="cursor-pointer">
                      {resource.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/research" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">
              Research
            </Link>
            <Link href="/training" className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors">
              Training
            </Link>

            <SourcePeptidesButton size="default" className="" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Collapsible Sections */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Peptides Section - Collapsible */}
              <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                <button
                  onClick={() => toggleSection('peptides')}
                  className="flex items-center justify-between w-full py-2 font-semibold text-slate-900 dark:text-white"
                >
                  <span>Peptides</span>
                  {expandedSections['peptides'] ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedSections['peptides'] && (
                  <div className="ml-4 space-y-1 mt-2">
                    {Object.entries(peptideCategories).map(([category, peptides]) => (
                      <div key={category} className="space-y-1">
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 py-1">{category}</div>
                        {peptides.map((peptide) => (
                          <Link
                            key={peptide.path}
                            href={peptide.path}
                            className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {peptide.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Blends Section - Collapsible */}
              <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                <button
                  onClick={() => toggleSection('blends')}
                  className="flex items-center justify-between w-full py-2 font-semibold text-slate-900 dark:text-white"
                >
                  <span>Blends</span>
                  {expandedSections['blends'] ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedSections['blends'] && (
                  <div className="ml-4 space-y-1 mt-2">
                    {Object.entries(blendCategories).map(([category, blends]) => (
                      <div key={category} className="space-y-1">
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 py-1">{category}</div>
                        {blends.map((blend) => (
                          <Link
                            key={blend.path}
                            href={blend.path}
                            className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {blend.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Tools Section - Collapsible */}
              <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                <button
                  onClick={() => toggleSection('tools')}
                  className="flex items-center justify-between w-full py-2 font-semibold text-slate-900 dark:text-white"
                >
                  <span>Tools</span>
                  {expandedSections['tools'] ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedSections['tools'] && (
                  <div className="ml-4 space-y-1 mt-2">
                    {toolsLinks.map((tool) => (
                      <Link
                        key={tool.path}
                        href={tool.path}
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Blog Link */}
              <Link
                href="/blog"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors py-2 border-b border-slate-200 dark:border-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Resources Section - Collapsible */}
              <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                <button
                  onClick={() => toggleSection('resources')}
                  className="flex items-center justify-between w-full py-2 font-semibold text-slate-900 dark:text-white"
                >
                  <span>Resources</span>
                  {expandedSections['resources'] ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedSections['resources'] && (
                  <div className="ml-4 space-y-1 mt-2">
                    {resourcesLinks.map((resource) => (
                      <Link
                        key={resource.path}
                        href={resource.path}
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Research Link */}
              <Link
                href="/research"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors py-2 border-b border-slate-200 dark:border-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </Link>

              {/* Training Link */}
              <Link
                href="/training"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors py-2 border-b border-slate-200 dark:border-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training
              </Link>

              {/* Source Peptides Button */}
              <div className="pt-4">
                <SourcePeptidesButton className="w-full" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
