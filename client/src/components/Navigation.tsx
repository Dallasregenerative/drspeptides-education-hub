import { useState } from "react";
// Updated branding to Peptide Education Hub
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Microscope, Menu, X, ChevronDown, ExternalLink } from "lucide-react";
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
                <DropdownMenuItem asChild>
                  <Link href="/tools/dosage-calculator" className="cursor-pointer">
                    Dosage Calculator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tools/interaction-checker" className="cursor-pointer">
                    Interaction Checker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tools/protocol-builder" className="cursor-pointer">
                    Protocol Builder
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tools/progress-tracker" className="cursor-pointer">
                    Progress Tracker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tools/patient-handouts" className="cursor-pointer">
                    Patient Handouts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tools/biomarker-tracker" className="cursor-pointer">
                    Biomarker Tracker
                  </Link>
                </DropdownMenuItem>
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
                <DropdownMenuItem asChild>
                  <Link href="/resources" className="cursor-pointer">
                    Resource Library
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/regulatory-guidance" className="cursor-pointer">
                    Regulatory & Legal Guidance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/supplier-directory" className="cursor-pointer">
                    Supplier Directory
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/patient-education" className="cursor-pointer">
                    Patient Education
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="cursor-pointer">
                    FAQ & Glossary
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/case-studies" className="cursor-pointer">
                    Clinical Case Studies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/safety-management" className="cursor-pointer">
                    Safety & Adverse Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/insurance-billing" className="cursor-pointer">
                    Insurance & Billing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/protocol-builder" className="cursor-pointer">
                    Protocol Builder
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/practice-toolkit" className="cursor-pointer">
                    Practice Toolkit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comparison-tool" className="cursor-pointer">
                    Peptide Comparison
                  </Link>
                </DropdownMenuItem>
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Peptides Section */}
              <div className="space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white">Peptides</div>
                {Object.entries(peptideCategories).map(([category, peptides]) => (
                  <div key={category} className="ml-4 space-y-1">
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{category}</div>
                    {peptides.map((peptide) => (
                      <Link
                        key={peptide.path}
                        href={peptide.path}
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {peptide.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile Blends Section */}
              <div className="space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white">Blends</div>
                {Object.entries(blendCategories).map(([category, blends]) => (
                  <div key={category} className="ml-4 space-y-1">
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{category}</div>
                    {blends.map((blend) => (
                      <Link
                        key={blend.path}
                        href={blend.path}
                        className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {blend.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile Tools Section */}
              <div className="space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white">Tools</div>
                <Link
                  href="/tools/dosage-calculator"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dosage Calculator
                </Link>
                <Link
                  href="/tools/interaction-checker"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Interaction Checker
                </Link>
                <Link
                  href="/tools/protocol-builder"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Protocol Builder
                </Link>
                <Link
                  href="/tools/progress-tracker"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Progress Tracker
                </Link>
                <Link
                  href="/tools/patient-handouts"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patient Handouts
                </Link>
                <Link
                  href="/tools/biomarker-tracker"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Biomarker Tracker
                </Link>
              </div>

              <Link
                href="/blog"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile Resources Section */}
              <div className="space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white">Resources</div>
                <Link
                  href="/resources"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resource Library
                </Link>
                <Link
                  href="/regulatory-guidance"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Regulatory & Legal Guidance
                </Link>
                <Link
                  href="/supplier-directory"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Supplier Directory
                </Link>
                <Link
                  href="/patient-education"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patient Education
                </Link>
                <Link
                  href="/faq"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ & Glossary
                </Link>
                <Link
                  href="/case-studies"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Clinical Case Studies
                </Link>
                <Link
                  href="/safety-management"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Safety & Adverse Events
                </Link>
                <Link
                  href="/insurance-billing"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insurance & Billing
                </Link>
                <Link
                  href="/protocol-builder"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Protocol Builder
                </Link>
                <Link
                  href="/practice-toolkit"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Practice Toolkit
                </Link>
                <Link
                  href="/comparison-tool"
                  className="block text-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors ml-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Peptide Comparison
                </Link>
              </div>
              
              <Link
                href="/research"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/training"
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Training
              </Link>

              <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-600 hover:bg-teal-700 w-full">
                  Visit DrsPeptides.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
