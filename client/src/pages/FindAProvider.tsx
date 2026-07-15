import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin, Search, Award, ExternalLink, Phone, Globe,
  CheckCircle, ChevronRight, Users, BookOpen, Microscope,
  Filter, X, Lightbulb, Star, Brain
} from "lucide-react";
import { ALL_MEMBERS, PROVIDERS_DATA, CONTRIBUTORS_DATA, PROVIDER_SPECIALTIES } from "@/data/providersData";

// Inline SVG social icons for reliability
const FacebookIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const SPECIALTY_COLORS: Record<string, string> = {
  "Functional Medicine": "bg-teal-100 text-teal-800 border-teal-200",
  "Integrative Medicine": "bg-cyan-100 text-cyan-800 border-cyan-200",
  "Anti-Aging & Longevity": "bg-purple-100 text-purple-800 border-purple-200",
  "Regenerative Medicine": "bg-blue-100 text-blue-800 border-blue-200",
  "Aesthetics & Med Spa": "bg-pink-100 text-pink-800 border-pink-200",
  "Weight Management & Metabolic": "bg-orange-100 text-orange-800 border-orange-200",
  "OB/GYN & Women's Health": "bg-rose-100 text-rose-800 border-rose-200",
  "Sports Medicine & Orthopedics": "bg-green-100 text-green-800 border-green-200",
  "Plastic & Cosmetic Surgery": "bg-violet-100 text-violet-800 border-violet-200",
  "Naturopathic Medicine": "bg-lime-100 text-lime-800 border-lime-200",
  "Family Medicine & Primary Care": "bg-sky-100 text-sky-800 border-sky-200",
  "Mental Health & Psychiatry": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "Concierge Medicine": "bg-amber-100 text-amber-800 border-amber-200",
  "Physical Therapy & Rehabilitation": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Holistic & Wellness": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Internal Medicine": "bg-slate-100 text-slate-800 border-slate-200",
  "Geriatrics": "bg-stone-100 text-stone-800 border-stone-200",
};

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC"
];

function ProviderAvatar({ provider }: { provider: any }) {
  const initials = provider.name
    .split(' ')
    .map((n: string) => n[0])
    .filter((c: string) => /[A-Za-z]/.test(c))
    .slice(0, 2)
    .join('')
    .toUpperCase();

  if (provider.photo) {
    return (
      <img
        src={provider.photo}
        alt={provider.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.innerHTML = `<span class="text-white font-bold text-sm">${initials}</span>`;
        }}
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );
}

export default function FindAProvider() {
  usePageTitle(
    "Find a Peptide Therapy Practitioner Near You | Peptide Education Hub",
    {
      description: "Find a verified peptide therapy practitioner near you. Browse our directory of 64+ contributing practitioners offering personalized peptide protocols for weight loss, hormone optimization, anti-aging, and more.",
      suffix: ""
    }
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const filteredProviders = useMemo(() => {
    return PROVIDERS_DATA.filter(p => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        (p.city && p.city.toLowerCase().includes(q)) ||
        (p.state && p.state.toLowerCase().includes(q)) ||
        (p.practice && p.practice.toLowerCase().includes(q)) ||
        p.specialty_category.toLowerCase().includes(q) ||
        (p.conditions_treated && p.conditions_treated.toLowerCase().includes(q));
      const matchesState = !selectedState || p.state === selectedState;
      const matchesSpecialty = !selectedSpecialty || p.specialty_category === selectedSpecialty;
      return matchesSearch && matchesState && matchesSpecialty;
    });
  }, [searchQuery, selectedState, selectedSpecialty]);

  const hasFilters = searchQuery || selectedState || selectedSpecialty;

  const byState = useMemo(() => {
    const map: Record<string, number> = {};
    PROVIDERS_DATA.forEach(p => {
      if (p.state && p.state !== "Not found" && p.state !== "") {
        map[p.state] = (map[p.state] || 0) + 1;
      }
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, []);

  const specialtyBadgeClass = (spec: string) =>
    SPECIALTY_COLORS[spec] || "bg-slate-100 text-slate-800 border-slate-200";

  const locationStr = (p: any) => {
    const parts = [];
    if (p.city && p.city !== "Not found" && p.city !== "") parts.push(p.city);
    if (p.state && p.state !== "Not found" && p.state !== "") parts.push(p.state);
    if (p.country && !["USA", "US", "United States", ""].includes(p.country)) parts.push(p.country);
    return parts.join(", ");
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Peptide Education Hub - Find a Provider",
    "description": "Find verified peptide therapy practitioners near you. Browse our network of certified providers offering AI-powered, evidence-based peptide protocols.",
    "url": "https://pepedhub.com/find-a-provider",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": ["Peptide Therapy", "Hormone Optimization", "Anti-Aging Medicine", "Weight Loss", "Regenerative Medicine"],
    "provider": {
      "@type": "Organization",
      "name": "Peptide Education Hub",
      "url": "https://pepedhub.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-5">
            <MapPin className="h-4 w-4 text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Verified Peptide Practitioners</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Find a Peptide Therapy Practitioner Near You
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Browse our network of verified practitioners. Every provider uses AI-powered, evidence-based protocols personalized to your labs and health goals.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-400">{PROVIDERS_DATA.length}+</div>
              <div className="text-slate-400 text-xs md:text-sm">Verified Practitioners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-400">{byState.length}</div>
              <div className="text-slate-400 text-xs md:text-sm">States & Regions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-400">2,800+</div>
              <div className="text-slate-400 text-xs md:text-sm">Studies Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-400">AI</div>
              <div className="text-slate-400 text-xs md:text-sm">Personalized Protocols</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-3 md:p-4 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search by name, city, state, or condition..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 h-11 text-sm border-0 bg-slate-50 dark:bg-slate-700 rounded-xl"
                />
              </div>
              <select
                value={selectedState}
                onChange={e => setSelectedState(e.target.value)}
                className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm min-w-[110px]"
              >
                <option value="">All States</option>
                {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <select
                value={selectedSpecialty}
                onChange={e => setSelectedSpecialty(e.target.value)}
                className="h-11 px-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white text-sm min-w-[160px]"
              >
                <option value="">All Specialties</option>
                {PROVIDER_SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Filter Tabs — sticky, scrollable */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-2.5 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setSelectedSpecialty("")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                !selectedSpecialty
                  ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-teal-400 hover:text-teal-600"
              }`}
            >
              All ({PROVIDERS_DATA.length})
            </button>
            {PROVIDER_SPECIALTIES.map(spec => {
              const count = PROVIDERS_DATA.filter(p => p.specialty_category === spec).length;
              return (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(selectedSpecialty === spec ? "" : spec)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                    selectedSpecialty === spec
                      ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-teal-400 hover:text-teal-600"
                  }`}
                >
                  {spec} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <Tabs defaultValue="providers">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <TabsList className="bg-slate-100 dark:bg-slate-800 h-10">
              <TabsTrigger value="providers" className="gap-1.5 text-sm px-4">
                <Award className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Practitioners</span>
                <span className="sm:hidden">Providers</span>
                <span className="text-xs opacity-70">({filteredProviders.length})</span>
              </TabsTrigger>
              <TabsTrigger value="contributors" className="gap-1.5 text-sm px-4">
                <Brain className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Thought Leaders</span>
                <span className="sm:hidden">Leaders</span>
                <span className="text-xs opacity-70">({CONTRIBUTORS_DATA.length})</span>
              </TabsTrigger>
            </TabsList>
            {hasFilters && (
              <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedState(""); setSelectedSpecialty(""); }} className="text-xs h-8">
                <X className="h-3.5 w-3.5 mr-1" /> Clear Filters
              </Button>
            )}
          </div>

          {/* PROVIDERS TAB */}
          <TabsContent value="providers">
            {filteredProviders.length === 0 ? (
              <div className="text-center py-20">
                <MapPin className="h-14 w-14 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">No practitioners found</h3>
                <p className="text-slate-500 mb-4 text-sm">Try adjusting your search or filters.</p>
                <Button variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedState(""); setSelectedSpecialty(""); }}>Clear All Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProviders.map(provider => {
                  const loc = locationStr(provider);
                  return (
                    <Link key={provider.slug} href={provider.url_path}>
                      <Card className="h-full hover:shadow-xl transition-all duration-200 cursor-pointer border-slate-200 hover:border-teal-300 dark:border-slate-700 dark:hover:border-teal-600 group overflow-hidden">
                        <CardHeader className="pb-2 pt-4 px-4">
                          <div className="flex items-start gap-3">
                            {/* Photo / Avatar */}
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-sm">
                              <ProviderAvatar provider={provider} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-1 mb-0.5">
                                <CardTitle className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight line-clamp-2">
                                  {provider.name}
                                </CardTitle>
                              </div>
                              {/* Role Badge */}
                              <div className="flex items-center gap-1 mt-1">
                                {provider.role === 'contributing_practitioner' ? (
                                  <span className="inline-flex items-center gap-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                    <Award className="h-2.5 w-2.5" /> Contributing
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                    <CheckCircle className="h-2.5 w-2.5" /> Practitioner
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="px-4 pb-4 space-y-2">
                          {/* Practice name */}
                          {provider.practice && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{provider.practice}</p>
                          )}
                          {/* Location */}
                          {loc && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                              <MapPin className="h-3 w-3 text-teal-500 shrink-0" />
                              <span className="truncate">{loc}</span>
                            </div>
                          )}
                          {/* Specialty badge */}
                          <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border ${specialtyBadgeClass(provider.specialty_category)}`}>
                            {provider.specialty_category}
                          </span>
                          {/* Social icons */}
                          {(provider.facebook || provider.linkedin || provider.instagram) && (
                            <div className="flex gap-2 pt-0.5">
                              {provider.facebook && (
                                <a href={provider.facebook} target="_blank" rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  className="text-blue-500 hover:text-blue-700 transition-colors" title="Facebook">
                                  <FacebookIcon />
                                </a>
                              )}
                              {provider.linkedin && (
                                <a href={provider.linkedin} target="_blank" rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  className="text-blue-600 hover:text-blue-800 transition-colors" title="LinkedIn">
                                  <LinkedInIcon />
                                </a>
                              )}
                              {provider.instagram && (
                                <a href={provider.instagram} target="_blank" rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  className="text-pink-500 hover:text-pink-700 transition-colors" title="Instagram">
                                  <InstagramIcon />
                                </a>
                              )}
                            </div>
                          )}
                          <div className="flex items-center text-teal-600 dark:text-teal-400 text-xs font-semibold pt-1">
                            View Profile <ChevronRight className="h-3.5 w-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}
          </TabsContent>

          {/* THOUGHT LEADERS / CONTRIBUTORS TAB */}
          <TabsContent value="contributors">
            {/* What is a Thought Leader — with the definition you wanted */}
            <div className="mb-6 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-5 md:p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                  <Brain className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">Thought Leaders & Contributing Partners</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Contributing Practitioners help shape this platform and evolve Dr. Peptide's collective consciousness — feeding real-world clinical outcomes, research insights, and expert feedback directly into the AI. Their contributions make every protocol smarter, safer, and more effective for every patient in the network.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {CONTRIBUTORS_DATA.map(contributor => {
                const loc = locationStr(contributor);
                return (
                  <Link key={contributor.slug} href={contributor.url_path}>
                    <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-slate-200 hover:border-slate-400 dark:border-slate-700 group overflow-hidden">
                      <CardHeader className="pb-2 pt-4 px-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-sm">
                            <ProviderAvatar provider={contributor} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-slate-600 transition-colors leading-tight line-clamp-2">
                              {contributor.name}
                            </CardTitle>
                            <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1">
                              <Brain className="h-2.5 w-2.5" /> Thought Leader
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-4 pb-4 space-y-2">
                        {contributor.practice && (
                          <p className="text-xs text-slate-500 truncate">{contributor.practice}</p>
                        )}
                        {loc && (
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
                            <span className="truncate">{loc}</span>
                          </div>
                        )}
                        <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border bg-slate-100 text-slate-700 border-slate-200">
                          {contributor.specialty_category}
                        </span>
                        {(contributor.facebook || contributor.linkedin || contributor.instagram) && (
                          <div className="flex gap-2 pt-0.5">
                            {contributor.facebook && (
                              <a href={contributor.facebook} target="_blank" rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="text-blue-500 hover:text-blue-700 transition-colors">
                                <FacebookIcon />
                              </a>
                            )}
                            {contributor.linkedin && (
                              <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="text-blue-600 hover:text-blue-800 transition-colors">
                                <LinkedInIcon />
                              </a>
                            )}
                            {contributor.instagram && (
                              <a href={contributor.instagram} target="_blank" rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="text-pink-500 hover:text-pink-700 transition-colors">
                                <InstagramIcon />
                              </a>
                            )}
                          </div>
                        )}
                        <div className="flex items-center text-slate-500 text-xs font-medium pt-1">
                          View Profile <ChevronRight className="h-3.5 w-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Browse by State */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-5 text-center">
            Browse Peptide Practitioners by State
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
            {byState.map(([state, count]) => (
              <button
                key={state}
                onClick={() => { setSelectedState(state); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center p-2.5 md:p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600">{state}</span>
                <span className="text-[10px] text-slate-500 mt-0.5">{count} {count !== 1 ? "providers" : "provider"}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Patient CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-teal-900 py-14 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Lightbulb className="h-10 w-10 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Not Sure Where to Start?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Every practitioner in our network uses AI-powered, personalized protocols. Browse by specialty or location to find the right fit for your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setSelectedSpecialty("Functional Medicine"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
              Find a Functional Medicine Doctor
            </button>
            <button
              onClick={() => { setSelectedSpecialty("Anti-Aging & Longevity"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
              Find an Anti-Aging Specialist
            </button>
          </div>
        </div>
      </section>

      {/* Practitioner CTA */}
      <section className="bg-teal-600 py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Users className="h-10 w-10 text-teal-200 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-white mb-2">Are You a Peptide Therapy Practitioner?</h2>
          <p className="text-teal-100 mb-5 text-sm max-w-xl mx-auto">
            Join our network. Get listed in this directory, help shape the AI, and receive free lifetime access to the platform.
          </p>
          <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8">
              Apply to Be a Contributing Practitioner
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
