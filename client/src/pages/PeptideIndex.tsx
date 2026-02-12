import { useState, useMemo } from "react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Search, Filter, ArrowRight, Beaker, FlaskConical, Pill, Brain, Heart, Dumbbell, Scale, Shield, Sparkles, Moon, ArrowLeft} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PeptideEntry {
  route: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  dose?: string;
}

const peptides: PeptideEntry[] = [
  // Individual Peptides
  { route: "/peptides/5-amino-1mq", name: "5-Amino-1MQ", description: "NAD+ boosting compound for metabolic optimization and fat loss", category: "Metabolic", tags: ["weight loss", "NAD+", "metabolism"], dose: "50-100mg/day oral" },
  { route: "/peptides/adipotide", name: "Adipotide (FTPP)", description: "Targeted fat cell apoptosis peptide for body composition", category: "Metabolic", tags: ["weight loss", "fat loss", "body composition"] },
  { route: "/peptides/alpha-gpc", name: "Alpha-GPC", description: "Choline source for cognitive enhancement and brain health", category: "Cognitive", tags: ["nootropic", "brain health", "choline"] },
  { route: "/peptides/aod-9604", name: "AOD-9604", description: "Anti-obesity drug derived from growth hormone fragment", category: "Metabolic", tags: ["weight loss", "fat loss", "GH fragment"], dose: "300mcg/day SC" },
  { route: "/peptides/bpc-157", name: "BPC-157", description: "Body Protection Compound for tissue repair, gut healing, and recovery", category: "Recovery", tags: ["healing", "gut health", "tissue repair", "popular"], dose: "250-500mcg/day SC" },
  { route: "/peptides/bpc-157-capsules", name: "BPC-157 Capsules", description: "Oral BPC-157 for convenient gut healing and systemic recovery", category: "Recovery", tags: ["oral", "gut health", "capsules"] },
  { route: "/peptides/cagrilintide", name: "Cagrilintide", description: "Long-acting amylin analog for weight management", category: "Metabolic", tags: ["weight loss", "amylin", "appetite"] },
  { route: "/peptides/cerebrolysin", name: "Cerebrolysin", description: "Neuropeptide complex for brain recovery and neuroprotection", category: "Cognitive", tags: ["neuroprotection", "brain recovery", "TBI"] },
  { route: "/peptides/cjc-1295", name: "CJC-1295", description: "Growth hormone releasing hormone analog for anti-aging", category: "Growth Hormone", tags: ["GHRH", "anti-aging", "growth hormone"], dose: "100-200mcg 2-3x/wk SC" },
  { route: "/peptides/cortexin", name: "Cortexin", description: "Polypeptide brain complex for cognitive support", category: "Cognitive", tags: ["neuropeptide", "brain health", "cognitive"] },
  { route: "/peptides/dihexa", name: "Dihexa", description: "Potent cognitive enhancement peptide for memory and learning", category: "Cognitive", tags: ["nootropic", "memory", "learning"] },
  { route: "/peptides/dsip", name: "DSIP", description: "Delta sleep-inducing peptide for sleep optimization", category: "Sleep", tags: ["sleep", "circadian", "recovery"], dose: "100-200mcg before bed" },
  { route: "/peptides/epithalon", name: "Epithalon", description: "Telomerase activator for longevity and anti-aging", category: "Longevity", tags: ["telomeres", "anti-aging", "longevity"], dose: "5-10mg/day SC x10 days" },
  { route: "/peptides/fisetin", name: "Fisetin", description: "Senolytic flavonoid for longevity and cellular health", category: "Longevity", tags: ["senolytic", "longevity", "flavonoid"] },
  { route: "/peptides/foxo4-dri", name: "FOXO4-DRI", description: "Senolytic peptide targeting senescent cells", category: "Longevity", tags: ["senolytic", "anti-aging", "cellular health"] },
  { route: "/peptides/fragment-176-191", name: "Fragment 176-191", description: "HGH fat loss fragment for targeted body composition", category: "Metabolic", tags: ["fat loss", "GH fragment", "body composition"], dose: "250-500mcg/day SC" },
  { route: "/peptides/gdf-11", name: "GDF-11", description: "Growth differentiation factor for rejuvenation", category: "Longevity", tags: ["rejuvenation", "anti-aging", "growth factor"] },
  { route: "/peptides/ghk-cu", name: "GHK-Cu", description: "Copper peptide for skin regeneration and tissue repair", category: "Skin & Beauty", tags: ["skin", "collagen", "wound healing"], dose: "1-2mg/day SC" },
  { route: "/peptides/ghk-cu-serum", name: "GHK-Cu Serum", description: "Topical copper peptide serum for skin rejuvenation", category: "Skin & Beauty", tags: ["topical", "skin", "anti-aging"] },
  { route: "/peptides/ghrp-2", name: "GHRP-2", description: "Growth hormone releasing peptide for GH stimulation", category: "Growth Hormone", tags: ["GHRP", "growth hormone", "appetite"] },
  { route: "/peptides/ghrp-6", name: "GHRP-6", description: "Growth hormone releasing peptide with appetite stimulation", category: "Growth Hormone", tags: ["GHRP", "growth hormone", "appetite"] },
  { route: "/peptides/glp-1", name: "GLP-1", description: "Glucagon-like peptide for metabolic health and weight management", category: "Metabolic", tags: ["weight loss", "diabetes", "metabolic"] },
  { route: "/peptides/glutathione", name: "Glutathione", description: "Master antioxidant for detoxification and cellular protection", category: "Longevity", tags: ["antioxidant", "detox", "immune"] },
  { route: "/peptides/hexarelin", name: "Hexarelin", description: "Growth hormone secretagogue with cardiac benefits", category: "Growth Hormone", tags: ["GH secretagogue", "cardiac", "growth hormone"] },
  { route: "/peptides/humanin", name: "Humanin", description: "Mitochondrial-derived longevity peptide", category: "Longevity", tags: ["mitochondrial", "longevity", "neuroprotection"] },
  { route: "/peptides/ibutamoren", name: "Ibutamoren (MK-677)", description: "Oral growth hormone secretagogue for GH optimization", category: "Growth Hormone", tags: ["oral", "GH secretagogue", "growth hormone"] },
  { route: "/peptides/igf-1-lr3", name: "IGF-1 LR3", description: "Long-acting insulin-like growth factor for muscle growth", category: "Growth Hormone", tags: ["IGF-1", "muscle growth", "growth factor"] },
  { route: "/peptides/ipamorelin", name: "Ipamorelin", description: "Selective growth hormone secretagogue with minimal side effects", category: "Growth Hormone", tags: ["GH secretagogue", "anti-aging", "popular"], dose: "200-300mcg 2-3x/day SC" },
  { route: "/peptides/kisspeptin-10", name: "Kisspeptin-10", description: "Reproductive hormone peptide for fertility and libido", category: "Hormonal", tags: ["fertility", "libido", "reproductive"] },
  { route: "/peptides/kpv", name: "KPV", description: "Anti-inflammatory peptide for gut health and immune modulation", category: "Immune", tags: ["anti-inflammatory", "gut health", "immune"], dose: "200-500mcg/day SC" },
  { route: "/peptides/ll-37", name: "LL-37", description: "Antimicrobial peptide for immune defense and wound healing", category: "Immune", tags: ["antimicrobial", "immune", "wound healing"], dose: "50-100mcg/day SC" },
  { route: "/peptides/melanotan-1", name: "Melanotan 1", description: "Photoprotective peptide for skin pigmentation", category: "Skin & Beauty", tags: ["tanning", "photoprotection", "skin"] },
  { route: "/peptides/melanotan-2", name: "Melanotan II", description: "Tanning peptide with sexual wellness benefits", category: "Skin & Beauty", tags: ["tanning", "sexual wellness", "skin"] },
  { route: "/peptides/mgf", name: "MGF", description: "Mechano growth factor for muscle repair and growth", category: "Recovery", tags: ["muscle", "recovery", "growth factor"] },
  { route: "/peptides/mots-c", name: "MOTS-c", description: "Mitochondrial peptide for metabolic health and exercise mimetic", category: "Metabolic", tags: ["mitochondrial", "exercise", "metabolism"], dose: "5-10mg 3x/wk SC" },
  { route: "/peptides/na-semax", name: "NA-Semax", description: "Enhanced cognitive peptide with improved bioavailability", category: "Cognitive", tags: ["nootropic", "cognitive", "enhanced"] },
  { route: "/peptides/nac", name: "NAC", description: "N-Acetyl Cysteine for antioxidant and liver support", category: "Longevity", tags: ["antioxidant", "liver", "glutathione"] },
  { route: "/peptides/nad", name: "NAD+", description: "Nicotinamide adenine dinucleotide for cellular energy", category: "Longevity", tags: ["NAD+", "energy", "longevity"] },
  { route: "/peptides/nad-nasal-spray", name: "NAD+ Nasal Spray", description: "Intranasal NAD+ for enhanced brain bioavailability", category: "Longevity", tags: ["NAD+", "nasal", "brain"] },
  { route: "/peptides/nmn", name: "NMN", description: "Nicotinamide mononucleotide for longevity and NAD+ support", category: "Longevity", tags: ["NAD+", "longevity", "anti-aging"] },
  { route: "/peptides/noopept", name: "Noopept", description: "Cognitive enhancement peptide for memory and focus", category: "Cognitive", tags: ["nootropic", "memory", "focus"] },
  { route: "/peptides/oxytocin", name: "Oxytocin", description: "Social bonding peptide for emotional wellness", category: "Hormonal", tags: ["social", "bonding", "emotional"] },
  { route: "/peptides/p21", name: "P21", description: "CNTF-derived neurogenic peptide for brain health", category: "Cognitive", tags: ["neurogenic", "brain health", "CNTF"] },
  { route: "/peptides/pinealon", name: "Pinealon", description: "Pineal gland peptide for sleep and circadian rhythm", category: "Sleep", tags: ["sleep", "pineal", "circadian"] },
  { route: "/peptides/pt-141", name: "PT-141 (Bremelanotide)", description: "FDA-approved peptide for sexual wellness and libido", category: "Hormonal", tags: ["sexual wellness", "libido", "FDA-approved"], dose: "1-2mg as needed SC" },
  { route: "/peptides/pterostilbene", name: "Pterostilbene", description: "Enhanced resveratrol analog for longevity", category: "Longevity", tags: ["antioxidant", "longevity", "sirtuin"] },
  { route: "/peptides/quercetin", name: "Quercetin", description: "Senolytic flavonoid for cellular health", category: "Longevity", tags: ["senolytic", "flavonoid", "immune"] },
  { route: "/peptides/rapamycin", name: "Rapamycin", description: "mTOR inhibitor for longevity and immune modulation", category: "Longevity", tags: ["mTOR", "longevity", "immune"] },
  { route: "/peptides/resveratrol", name: "Resveratrol", description: "Sirtuin activator for cardiovascular and longevity benefits", category: "Longevity", tags: ["sirtuin", "cardiovascular", "longevity"] },
  { route: "/peptides/retatrutide", name: "Retatrutide", description: "Triple agonist for weight loss (GLP-1/GIP/Glucagon)", category: "Metabolic", tags: ["weight loss", "triple agonist", "GLP-1"] },
  { route: "/peptides/selank", name: "Selank", description: "Anxiolytic peptide for stress reduction and cognitive support", category: "Cognitive", tags: ["anxiety", "stress", "cognitive"] },
  { route: "/peptides/semaglutide", name: "Semaglutide", description: "GLP-1 receptor agonist for weight loss (Ozempic/Wegovy)", category: "Metabolic", tags: ["weight loss", "GLP-1", "FDA-approved", "popular"], dose: "0.25-2.4mg/wk SC" },
  { route: "/peptides/semax", name: "Semax", description: "Nootropic peptide for cognitive enhancement and neuroprotection", category: "Cognitive", tags: ["nootropic", "cognitive", "neuroprotection"] },
  { route: "/peptides/sermorelin", name: "Sermorelin", description: "GHRH analog for growth hormone optimization", category: "Growth Hormone", tags: ["GHRH", "growth hormone", "anti-aging"], dose: "200-500mcg/day SC" },
  { route: "/peptides/slu-pp-332", name: "SLU-PP-332", description: "Exercise mimetic compound for metabolic benefits", category: "Metabolic", tags: ["exercise mimetic", "metabolism", "endurance"] },
  { route: "/peptides/spermidine", name: "Spermidine", description: "Autophagy-inducing longevity compound", category: "Longevity", tags: ["autophagy", "longevity", "cellular health"] },
  { route: "/peptides/ss-31", name: "SS-31 (Elamipretide)", description: "Mitochondrial protector for cellular energy", category: "Longevity", tags: ["mitochondrial", "energy", "cardioprotection"] },
  { route: "/peptides/tb-500", name: "TB-500", description: "Thymosin Beta-4 for tissue repair and wound healing", category: "Recovery", tags: ["healing", "tissue repair", "popular"], dose: "2-5mg 2x/wk SC" },
  { route: "/peptides/tesamorelin", name: "Tesamorelin", description: "FDA-approved GHRH analog for visceral fat reduction", category: "Growth Hormone", tags: ["GHRH", "fat loss", "FDA-approved"], dose: "2mg/day SC" },
  { route: "/peptides/tesofensine", name: "Tesofensine", description: "Weight management compound targeting neurotransmitters", category: "Metabolic", tags: ["weight loss", "neurotransmitter", "appetite"] },
  { route: "/peptides/thymosin-alpha-1", name: "Thymosin Alpha-1", description: "Immune modulation peptide for immune system optimization", category: "Immune", tags: ["immune", "thymus", "viral defense"], dose: "1.6mg 2x/wk SC" },
  { route: "/peptides/tirzepatide", name: "Tirzepatide", description: "Dual GLP-1/GIP agonist for weight loss (Mounjaro/Zepbound)", category: "Metabolic", tags: ["weight loss", "GLP-1", "GIP", "FDA-approved", "popular"], dose: "2.5-15mg/wk SC" },
  { route: "/peptides/vip", name: "VIP", description: "Vasoactive intestinal peptide for CIRS and immune regulation", category: "Immune", tags: ["CIRS", "immune", "vasoactive"] },
  { route: "/peptides/zinc-thymulin", name: "Zinc Thymulin", description: "Thymic peptide complex for immune and hair restoration", category: "Immune", tags: ["immune", "hair loss", "thymus"] },
  // Blends & Formulas
  { route: "/peptides/bpc-157-tb-500", name: "BPC-157 & TB-500 Stack", description: "Synergistic healing stack for maximum tissue repair and recovery", category: "Blend", tags: ["healing", "recovery", "stack"] },
  { route: "/peptides/bpc-wolverine", name: "BPC Wolverine", description: "Advanced recovery protocol with BPC-157, TB-500, and growth factors", category: "Blend", tags: ["healing", "recovery", "advanced"] },
  { route: "/peptides/cjc-1295-ipamorelin", name: "CJC-1295 & Ipamorelin", description: "Growth hormone optimization stack for anti-aging", category: "Blend", tags: ["growth hormone", "anti-aging", "stack"] },
  { route: "/peptides/selank-semax", name: "Selank + Semax", description: "Cognitive enhancement stack for focus and anxiety reduction", category: "Blend", tags: ["cognitive", "anxiety", "stack"] },
  { route: "/peptides/semaglutide-bpc-157", name: "Semaglutide + BPC-157", description: "Weight loss with gut protection combination", category: "Blend", tags: ["weight loss", "gut health", "stack"] },
  { route: "/peptides/tirzepatide-bpc-157", name: "Tirzepatide + BPC-157", description: "Weight loss with tissue protection combination", category: "Blend", tags: ["weight loss", "recovery", "stack"] },
  { route: "/peptides/glow-core", name: "Glow Core", description: "Foundational anti-aging blend for skin rejuvenation", category: "Glow Series", tags: ["skin", "anti-aging", "beauty"] },
  { route: "/peptides/glow-plus", name: "Glow Plus", description: "Advanced anti-aging blend with enhanced peptide complex", category: "Glow Series", tags: ["skin", "anti-aging", "advanced"] },
  { route: "/peptides/glow-ultra", name: "Glow Ultra", description: "Premium anti-aging blend with maximum peptide concentration", category: "Glow Series", tags: ["skin", "anti-aging", "premium"] },
  { route: "/peptides/glow-blend-capsules", name: "GLOW Capsules", description: "Oral capsules for skin, hair, and anti-aging benefits", category: "Glow Series", tags: ["oral", "skin", "capsules"] },
  { route: "/peptides/klow-blend-capsules", name: "KLOW Capsules", description: "Oral capsules for metabolic health and weight management", category: "Blend", tags: ["oral", "metabolic", "capsules"] },
  // Proprietary Formulas
  { route: "/peptides/formula-m-51", name: "Formula M-51", description: "Metabolic series peptide blend for metabolic optimization", category: "Formula", tags: ["metabolic", "proprietary", "formula"] },
  { route: "/peptides/formula-m-2531", name: "Formula M-2531", description: "Metabolic series for advanced metabolic optimization", category: "Formula", tags: ["metabolic", "proprietary", "formula"] },
  { route: "/peptides/formula-n-69", name: "Formula N-69", description: "Sexual enhancement and intimacy formula", category: "Formula", tags: ["sexual wellness", "proprietary", "formula"] },
  { route: "/peptides/formula-n-111", name: "Formula N-111", description: "Neuro series for neuroprotection and cognitive support", category: "Formula", tags: ["cognitive", "proprietary", "formula"] },
  { route: "/peptides/formula-n-259", name: "Formula N-259", description: "Sleep and circadian optimization formula", category: "Formula", tags: ["sleep", "proprietary", "formula"] },
  { route: "/peptides/formula-n-2331", name: "Formula N-2331", description: "Neuro series enhancement with NAD+ support", category: "Formula", tags: ["cognitive", "NAD+", "proprietary", "formula"] },
  { route: "/peptides/formula-n-5550", name: "Formula N-5550", description: "Multi-target neuro series for comprehensive brain support", category: "Formula", tags: ["cognitive", "multi-target", "proprietary", "formula"] },
  { route: "/peptides/formula-rg-5555", name: "Formula RG-5555", description: "Multi-peptide regenerative series for total body recovery", category: "Formula", tags: ["regenerative", "proprietary", "formula"] },
  { route: "/peptides/formula-wl-1175", name: "Formula WL-1175", description: "Metabolic health support formula for weight management", category: "Formula", tags: ["weight loss", "proprietary", "formula"] },
];

const categories = [
  { name: "All", icon: Beaker, color: "bg-gray-100 text-gray-800" },
  { name: "Metabolic", icon: Scale, color: "bg-green-100 text-green-800" },
  { name: "Recovery", icon: Heart, color: "bg-red-100 text-red-800" },
  { name: "Cognitive", icon: Brain, color: "bg-purple-100 text-purple-800" },
  { name: "Growth Hormone", icon: Dumbbell, color: "bg-blue-100 text-blue-800" },
  { name: "Longevity", icon: Sparkles, color: "bg-amber-100 text-amber-800" },
  { name: "Immune", icon: Shield, color: "bg-teal-100 text-teal-800" },
  { name: "Skin & Beauty", icon: Sparkles, color: "bg-pink-100 text-pink-800" },
  { name: "Hormonal", icon: FlaskConical, color: "bg-orange-100 text-orange-800" },
  { name: "Sleep", icon: Moon, color: "bg-indigo-100 text-indigo-800" },
  { name: "Blend", icon: FlaskConical, color: "bg-cyan-100 text-cyan-800" },
  { name: "Glow Series", icon: Sparkles, color: "bg-pink-100 text-pink-800" },
  { name: "Formula", icon: Pill, color: "bg-violet-100 text-violet-800" },
];

export default function PeptideIndex() {
  usePageTitle("A-Z Peptide Index - Complete Directory of 85+ Peptides & Compounds", {
    description: "Comprehensive A-Z directory of all peptides, blends, and proprietary formulas. Browse by category, search by name, or explore our complete peptide database for healthcare providers.",
    keywords: "peptide index, peptide directory, peptide list, all peptides, peptide database, peptide catalog, A-Z peptides",
    canonical: "https://pepedhub.com/peptide-index",
  });

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return peptides.filter(p => {
      const matchesSearch = search === "" || 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Group by first letter for A-Z display
  const grouped = useMemo(() => {
    const groups: Record<string, PeptideEntry[]> = {};
    filtered.forEach(p => {
      const letter = p.name.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(p);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const letters = grouped.map(([letter]) => letter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Home Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Home
            </a>
          </Link>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Peptide Education Hub</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A-Z Peptide Index
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Complete directory of {peptides.length} peptides, blends, and proprietary formulas with evidence-based clinical information for healthcare providers.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search peptides by name, category, or use case..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 py-6 text-lg bg-white text-gray-900 border-0 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-6xl">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <Button
              key={cat.name}
              variant={activeCategory === cat.name ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.name)}
              className={`gap-1.5 ${activeCategory === cat.name ? "" : "hover:bg-gray-100"}`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="text-center text-sm text-gray-500 mb-6">
          Showing <span className="font-semibold text-gray-700">{filtered.length}</span> of {peptides.length} compounds
          {activeCategory !== "All" && <span> in <Badge variant="secondary">{activeCategory}</Badge></span>}
          {search && <span> matching "<span className="font-medium">{search}</span>"</span>}
        </div>

        {/* Letter Quick Nav */}
        <div className="flex flex-wrap gap-1 justify-center mb-8">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                letters.includes(letter)
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  : "bg-gray-50 text-gray-300 cursor-default"
              }`}
              onClick={(e) => {
                if (!letters.includes(letter)) e.preventDefault();
              }}
            >
              {letter}
            </a>
          ))}
        </div>

        {/* A-Z Grouped Listings */}
        {grouped.map(([letter, items]) => (
          <div key={letter} id={`letter-${letter}`} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                {letter}
              </div>
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">{items.length} compound{items.length > 1 ? "s" : ""}</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map(peptide => (
                <Link key={peptide.route} href={peptide.route}>
                  <Card className="hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                            {peptide.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{peptide.description}</p>
                          {peptide.dose && (
                            <p className="text-[10px] text-teal-600 font-medium mt-1">Typical: {peptide.dose}</p>
                          )}
                          <div className="flex flex-wrap gap-1 mt-2">
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                              {peptide.category}
                            </Badge>
                            {peptide.tags.includes("popular") && (
                              <Badge className="text-[10px] px-1.5 py-0 bg-amber-100 text-amber-700 hover:bg-amber-100">
                                Popular
                              </Badge>
                            )}
                            {peptide.tags.includes("FDA-approved") && (
                              <Badge className="text-[10px] px-1.5 py-0 bg-green-100 text-green-700 hover:bg-green-100">
                                FDA-Approved
                              </Badge>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600">No peptides found</h3>
            <p className="text-gray-400 mt-1">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
