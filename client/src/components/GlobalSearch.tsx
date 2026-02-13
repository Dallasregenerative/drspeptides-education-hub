import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'wouter';
import Fuse from 'fuse.js';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

const searchData: SearchResult[] = [
  // Peptides
  { title: "BPC-157", description: "Body Protection Compound for injury healing and gut health", url: "/peptides/bpc-157", category: "Peptide" },
  { title: "TB-500", description: "Thymosin Beta-4 for tissue repair and recovery", url: "/peptides/tb-500", category: "Peptide" },
  { title: "Semaglutide", description: "GLP-1 agonist for weight management", url: "/peptides/semaglutide", category: "Peptide" },
  { title: "Tirzepatide", description: "Dual GIP/GLP-1 agonist for weight loss", url: "/peptides/tirzepatide", category: "Peptide" },
  { title: "Retatrutide", description: "Triple agonist for metabolic health", url: "/peptides/retatrutide", category: "Peptide" },
  { title: "CJC-1295", description: "Growth hormone releasing hormone analog", url: "/peptides/cjc-1295", category: "Peptide" },
  { title: "Ipamorelin", description: "Growth hormone secretagogue", url: "/peptides/ipamorelin", category: "Peptide" },
  { title: "Tesamorelin", description: "GHRH analog for visceral fat reduction", url: "/peptides/tesamorelin", category: "Peptide" },
  { title: "Sermorelin", description: "Growth hormone releasing hormone", url: "/peptides/sermorelin", category: "Peptide" },
  { title: "GHK-Cu", description: "Copper peptide for skin and wound healing", url: "/peptides/ghk-cu", category: "Peptide" },
  { title: "Epithalon", description: "Telomerase activator for longevity", url: "/peptides/epithalon", category: "Peptide" },
  { title: "Semax", description: "Nootropic peptide for cognitive enhancement", url: "/peptides/semax", category: "Peptide" },
  { title: "Selank", description: "Anxiolytic peptide for stress and anxiety", url: "/peptides/selank", category: "Peptide" },
  { title: "Dihexa", description: "Cognitive enhancer and neuroprotective peptide", url: "/peptides/dihexa", category: "Peptide" },
  { title: "NAD+", description: "Nicotinamide adenine dinucleotide for cellular energy", url: "/peptides/nad", category: "Peptide" },
  { title: "Glutathione", description: "Master antioxidant for detoxification", url: "/peptides/glutathione", category: "Peptide" },
  { title: "PT-141", description: "Melanocortin receptor agonist for sexual health", url: "/peptides/pt-141", category: "Peptide" },
  { title: "Melanotan 2", description: "Melanocortin receptor agonist for tanning", url: "/peptides/melanotan-2", category: "Peptide" },
  { title: "AOD-9604", description: "Fragment of growth hormone for fat loss", url: "/peptides/aod-9604", category: "Peptide" },
  { title: "5-Amino-1MQ", description: "NNMT inhibitor for metabolism", url: "/peptides/5-amino-1mq", category: "Peptide" },
  
  // Blends
  { title: "BPC-157 + TB-500", description: "Synergistic blend for injury healing", url: "/peptides/bpc-157-tb-500", category: "Blend" },
  { title: "Wolverine Blend", description: "Advanced recovery and healing blend", url: "/peptides/wolverine", category: "Blend" },
  { title: "CJC-1295 + Ipamorelin", description: "Growth hormone optimization blend", url: "/peptides/cjc-1295-ipamorelin-blend", category: "Blend" },
  { title: "Selank + Semax", description: "Cognitive and mood enhancement blend", url: "/peptides/selank-semax", category: "Blend" },
  { title: "Semaglutide + BPC-157", description: "Weight loss with gut protection", url: "/peptides/semaglutide-bpc-157", category: "Blend" },
  
  // Protocols
  { title: "Weight Loss Protocol", description: "Comprehensive peptide protocol for weight management", url: "/protocols/weight-loss", category: "Protocol" },
  { title: "Injury Healing Protocol", description: "Accelerated recovery and tissue repair protocol", url: "/protocols/injury-healing", category: "Protocol" },
  { title: "Longevity Protocol", description: "Anti-aging and healthspan extension protocol", url: "/protocols/longevity", category: "Protocol" },
  { title: "Cognitive Enhancement Protocol", description: "Brain health and neuroprotection protocol", url: "/protocols/cognitive", category: "Protocol" },
  { title: "Metabolic Optimization Protocol", description: "Energy and metabolic health protocol", url: "/protocols/metabolism", category: "Protocol" },
  
  // Tools
  { title: "Dosage Calculator", description: "Calculate peptide dosages and reconstitution", url: "/tools/dosage-calculator", category: "Tool" },
  { title: "Interaction Checker", description: "Check peptide and drug interactions", url: "/tools/interaction-checker", category: "Tool" },
  { title: "Protocol Builder", description: "Build custom peptide protocols", url: "/tools/protocol-builder", category: "Tool" },
  { title: "Comparison Tool", description: "Compare peptides side-by-side", url: "/tools/comparison-tool", category: "Tool" },
  { title: "A-Z Peptide Index", description: "Complete directory of 85+ peptides and compounds", url: "/peptide-index", category: "Tool" },
  { title: "Practice Toolkit", description: "Resources for implementing peptide therapy", url: "/practice-toolkit", category: "Tool" },
  
  // Resources
  { title: "Patient Education", description: "Educational materials for patients", url: "/resources/patient-education", category: "Resource" },
  { title: "FAQ & Glossary", description: "Frequently asked questions and terminology", url: "/resources/faq", category: "Resource" },
  { title: "Case Studies", description: "Real-world clinical case examples", url: "/resources/case-studies", category: "Resource" },
  { title: "Safety Management", description: "Adverse event reporting and safety protocols", url: "/resources/safety", category: "Resource" },
  { title: "Insurance & Billing", description: "Billing codes and insurance information", url: "/resources/insurance", category: "Resource" },
  { title: "Supplier Directory", description: "Vetted peptide suppliers and quality standards", url: "/resources/supplier-directory", category: "Resource" },
  { title: "Regulatory Guidance", description: "Legal and regulatory information", url: "/resources/regulatory", category: "Resource" },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = new Fuse(searchData, {
    keys: ['title', 'description', 'category'],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query).slice(0, 8);
      setResults(searchResults.map(result => result.item));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      window.location.href = results[selectedIndex].url;
      setIsOpen(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Peptide': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Blend': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Protocol': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Tool': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Resource': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm">
          <div
            ref={searchRef}
            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search peptides, protocols, tools..."
                className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
              >
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => (
                    <Link
                      key={result.url}
                      href={result.url}
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`px-4 py-3 cursor-pointer transition-colors ${
                          index === selectedIndex
                            ? 'bg-slate-100 dark:bg-slate-800'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-slate-900 dark:text-white truncate">
                              {result.title}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 truncate">
                              {result.description}
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${getCategoryColor(result.category)}`}>
                            {result.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                  <div className="text-sm">Start typing to search...</div>
                  <div className="mt-2 text-xs">
                    Try "BPC-157", "weight loss", or "dosage calculator"
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">↵</kbd>
                    to select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">esc</kbd>
                    to close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
