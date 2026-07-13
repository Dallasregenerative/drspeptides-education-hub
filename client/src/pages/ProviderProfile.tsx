import { useRoute, Link } from "wouter";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin, Globe, Phone, Award, CheckCircle, ArrowLeft,
  ExternalLink, Users, Brain, Shield, Facebook, Linkedin,
  Instagram, MessageCircle, Star, Calendar, ChevronRight,
  Microscope, Heart, Zap, Activity, BookOpen
} from "lucide-react";
import { ALL_MEMBERS } from "@/data/providersData";
import { usePageTitle } from "@/hooks/usePageTitle";
import NotFound from "./NotFound";

// Condition icons map
const CONDITION_ICONS: Record<string, React.ReactNode> = {
  default: <Activity className="h-4 w-4 text-teal-500" />,
};

// FAQ data for each specialty
const SPECIALTY_FAQS: Record<string, { q: string; a: string }[]> = {
  default: [
    { q: "What is peptide therapy?", a: "Peptide therapy uses short chains of amino acids (peptides) to signal the body to perform specific functions — from healing tissue and optimizing hormones to boosting energy and slowing aging. Unlike synthetic drugs, peptides work with your body's natural signaling pathways." },
    { q: "Is peptide therapy safe?", a: "When prescribed and supervised by a qualified medical professional, peptide therapy has an excellent safety profile. All protocols are tailored to your individual labs, genetics, and health history to minimize risk and maximize benefit." },
    { q: "How long before I see results?", a: "Most patients notice initial improvements within 4-8 weeks, with optimal results typically seen at the 90-day mark. Results vary based on the specific peptides used, your health baseline, and adherence to the protocol." },
    { q: "Do I need labs before starting?", a: "Yes. A thorough lab panel is essential for personalizing your protocol. Your practitioner will review your bloodwork to identify deficiencies, hormonal imbalances, and metabolic markers before recommending any peptides." },
    { q: "How much does peptide therapy cost?", a: "Costs vary by protocol and provider. Most comprehensive peptide programs range from $200-$600 per month depending on the peptides prescribed. Many patients find the investment worthwhile given the broad health benefits." },
  ],
};

export default function ProviderProfile() {
  const [, params] = useRoute("/find-a-provider/:state/:city/:slug");
  const slug = params?.slug;

  const provider = ALL_MEMBERS.find(p => p.slug === slug);

  if (!provider) {
    return <NotFound />;
  }

  const locationStr = [
    provider.city !== "Not found" ? provider.city : null,
    provider.state !== "Not found" ? provider.state : null,
  ].filter(Boolean).join(", ");

  const conditions = provider.conditions_treated
    ? provider.conditions_treated.split(",").map(c => c.trim()).filter(Boolean)
    : [];

  const faqs = SPECIALTY_FAQS[provider.specialty_category] || SPECIALTY_FAQS.default;

  // Build page title with geo keywords
  const geoTitle = locationStr
    ? `${provider.name} | Peptide Therapy in ${locationStr}`
    : `${provider.name} | Peptide Therapy Practitioner`;

  const metaDesc = `${provider.name}${provider.practice && provider.practice !== provider.name ? ` at ${provider.practice}` : ""}${locationStr ? ` in ${locationStr}` : ""}. ${provider.patient_description ? provider.patient_description.slice(0, 130) : "Verified peptide therapy practitioner offering personalized protocols."}`;

  usePageTitle(geoTitle, { description: metaDesc, suffix: "" });

  // JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": provider.practice || provider.name,
    "description": metaDesc,
    "url": provider.website || `https://pepedhub.com${provider.url_path}`,
    ...(provider.phone ? { "telephone": provider.phone } : {}),
    ...(locationStr ? {
      "address": {
        "@type": "PostalAddress",
        "addressLocality": provider.city !== "Not found" ? provider.city : undefined,
        "addressRegion": provider.state !== "Not found" ? provider.state : undefined,
        "addressCountry": provider.country === "Canada" ? "CA" : "US"
      }
    } : {}),
    "medicalSpecialty": provider.specialty_category,
    "employee": {
      "@type": "Physician",
      "name": provider.name,
      "medicalSpecialty": provider.specialty_category,
      ...(provider.linkedin ? { "sameAs": [provider.linkedin] } : {}),
    },
    ...(provider.seo_keywords ? {
      "keywords": provider.seo_keywords
    } : {}),
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const hasSocial = provider.facebook || provider.linkedin || provider.instagram;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <Navigation />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-3 text-sm text-slate-500">
          <Link href="/">Home</Link> / <Link href="/find-a-provider" className="hover:text-teal-600">Find a Provider</Link>
          {provider.state !== "Not found" && <> / <button onClick={() => window.location.href=`/find-a-provider?state=${provider.state}`} className="hover:text-teal-600">{provider.state}</button></>}
          {provider.city !== "Not found" && <> / <span className="text-slate-700">{provider.city}</span></>}
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-14 px-4">
          <div className="container mx-auto max-w-5xl">
            <Link href="/find-a-provider">
              <Button variant="ghost" className="text-slate-300 hover:text-white mb-5 -ml-2">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Directory
              </Button>
            </Link>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar / Photo */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 shadow-xl border-2 border-teal-500/40">
                {provider.photo ? (
                  <img
                    src={provider.photo}
                    alt={`${provider.name} - Peptide Therapy Practitioner`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-3xl font-bold">
                    {provider.name.split(' ').map((n: string) => n[0]).filter((c: string) => /[A-Z]/.test(c)).slice(0, 2).join('') || provider.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {provider.role === 'contributing_practitioner' ? (
                    <Badge className="bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs">
                      <Award className="h-3 w-3 mr-1" /> Contributing Practitioner
                    </Badge>
                  ) : provider.role === 'practitioner' ? (
                    <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" /> Practitioner
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs">
                      <BookOpen className="h-3 w-3 mr-1" /> Contributing Partner
                    </Badge>
                  )}
                  {provider.specialty_category && (
                    <Badge variant="outline" className="text-slate-300 border-slate-600 text-xs">
                      {provider.specialty_category}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{provider.name}</h1>
                {provider.practice && provider.practice !== provider.name && (
                  <p className="text-lg text-teal-300 mb-2">{provider.practice}</p>
                )}
                {locationStr && (
                  <div className="flex items-center gap-2 text-slate-300 mb-3">
                    <MapPin className="h-4 w-4 text-teal-400 shrink-0" />
                    <span>{locationStr}{provider.country && provider.country !== "USA" ? ` (${provider.country})` : ""}</span>
                  </div>
                )}
                {/* Social links */}
                {hasSocial && (
                  <div className="flex gap-3 mt-2">
                    {provider.facebook && (
                      <a href={provider.facebook} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-blue-300 hover:text-blue-200 bg-blue-900/30 hover:bg-blue-900/50 px-3 py-1.5 rounded-full transition-all border border-blue-700/40">
                        <Facebook className="h-3.5 w-3.5" /> Facebook
                      </a>
                    )}
                    {provider.linkedin && (
                      <a href={provider.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-blue-300 hover:text-blue-200 bg-blue-900/30 hover:bg-blue-900/50 px-3 py-1.5 rounded-full transition-all border border-blue-700/40">
                        <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                      </a>
                    )}
                    {provider.instagram && (
                      <a href={provider.instagram} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-pink-300 hover:text-pink-200 bg-pink-900/30 hover:bg-pink-900/50 px-3 py-1.5 rounded-full transition-all border border-pink-700/40">
                        <Instagram className="h-3.5 w-3.5" /> Instagram
                      </a>
                    )}
                  </div>
                )}
              </div>
              {/* Quick CTA */}
              {provider.website && (
                <div className="shrink-0">
                  <a href={provider.website} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold shadow-xl">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Button>
                  </a>
                  {provider.phone && (
                    <a href={`tel:${provider.phone}`} className="block text-center text-teal-300 text-sm mt-2 hover:text-teal-200">
                      <Phone className="inline h-3.5 w-3.5 mr-1" />{provider.phone}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-10 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">

              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Microscope className="h-5 w-5 text-teal-600" />
                    About {provider.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {provider.patient_description ||
                      `${provider.name} is a verified peptide therapy practitioner${locationStr ? ` based in ${locationStr}` : ""}. As a contributing member of the Peptide Education Hub, they actively contribute to the advancement of evidence-based peptide therapy protocols, helping patients achieve optimal health through personalized, science-backed treatment plans.`}
                  </p>
                </CardContent>
              </Card>

              {/* Conditions Treated */}
              {conditions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="h-5 w-5 text-teal-600" />
                      Conditions & Goals Treated
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {conditions.map((condition, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
                          <CheckCircle className="h-4 w-4 text-teal-600 shrink-0" />
                          <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Why Choose a Contributing Practitioner */}
              <Card className="border-teal-100 dark:border-teal-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="h-5 w-5 text-teal-600" />
                    Why Choose a PeptideProtocols.ai Practitioner?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { icon: <Brain className="h-5 w-5 text-teal-600" />, title: "AI-Powered Personalized Protocols", desc: "Your practitioner uses Dr. Peptide AI to generate protocols based on your specific labs, genetics, weight, and health goals — not a generic stack." },
                      { icon: <Shield className="h-5 w-5 text-teal-600" />, title: "Evidence-Based & Safety-Screened", desc: "Every recommendation is backed by 2,800+ peer-reviewed studies and cross-checked against your current medications for drug interactions." },
                      { icon: <Users className="h-5 w-5 text-teal-600" />, title: "Collective Intelligence Network", desc: "This practitioner feeds real-world outcomes back into the AI, making protocols smarter for every future patient in the network." },
                      { icon: <Activity className="h-5 w-5 text-teal-600" />, title: "Longitudinal Progress Tracking", desc: "Your results are tracked across visits so your protocol can be refined based on how your body responds over time." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-9 h-9 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</div>
                          <div className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageCircle className="h-5 w-5 text-teal-600" />
                    Frequently Asked Questions About Peptide Therapy
                    {locationStr && <span className="text-slate-500 font-normal text-sm">in {locationStr}</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1.5">{faq.q}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* SEO hidden keywords */}
              {provider.seo_keywords && (
                <div className="sr-only" aria-hidden="true">
                  <p>Keywords: {provider.seo_keywords}</p>
                  {locationStr && <p>Peptide therapy {locationStr}. Peptide doctor {locationStr}. {provider.specialty_category} {locationStr}.</p>}
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              {/* Contact Card */}
              <Card className="border-teal-200 dark:border-teal-800 shadow-lg sticky top-24">
                <CardHeader className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-slate-800 rounded-t-xl pb-3">
                  <CardTitle className="text-teal-800 dark:text-teal-300 text-base">Contact & Book</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  {locationStr && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Location</div>
                        <div className="text-slate-900 dark:text-white text-sm">{locationStr}</div>
                      </div>
                    </div>
                  )}
                  {provider.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Phone</div>
                        <a href={`tel:${provider.phone}`} className="text-teal-600 dark:text-teal-400 text-sm hover:underline font-medium">{provider.phone}</a>
                      </div>
                    </div>
                  )}
                  {provider.website && (
                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Website</div>
                        <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 text-sm hover:underline break-all">
                          {provider.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  {hasSocial && (
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Follow</div>
                      <div className="flex flex-wrap gap-2">
                        {provider.facebook && (
                          <a href={provider.facebook} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-colors">
                            <Facebook className="h-3 w-3" /> Facebook
                          </a>
                        )}
                        {provider.linkedin && (
                          <a href={provider.linkedin} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 transition-colors">
                            <Linkedin className="h-3 w-3" /> LinkedIn
                          </a>
                        )}
                        {provider.instagram && (
                          <a href={provider.instagram} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 px-2.5 py-1.5 rounded-lg border border-pink-200 dark:border-pink-800 hover:bg-pink-100 transition-colors">
                            <Instagram className="h-3 w-3" /> Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Primary CTA */}
                  {provider.website && (
                    <a href={provider.website} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 mt-2 font-semibold">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Consultation
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </a>
                  )}
                  {provider.phone && (
                    <a href={`tel:${provider.phone}`}>
                      <Button variant="outline" className="w-full border-teal-300 text-teal-700 hover:bg-teal-50">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>

              {/* Contributing Badge */}
              <Card className="border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-slate-800">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-7 w-7 text-teal-600" />
                    <div>
                      <div className="font-bold text-teal-800 dark:text-teal-300 text-sm">
                        {provider.role === 'contributing_practitioner' ? 'Contributing Practitioner' : provider.role === 'practitioner' ? 'Practitioner' : 'Contributing Partner'}
                      </div>
                      <div className="text-xs text-teal-600 dark:text-teal-400">PeptideProtocols.ai Network</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {provider.role === 'contributing_practitioner'
                      ? 'This practitioner actively contributes clinical outcomes and feedback to improve peptide therapy protocols for all patients in the network.'
                      : provider.role === 'practitioner'
                      ? 'This practitioner is a licensed medical professional in our network offering personalized peptide therapy consultations.'
                      : 'This partner contributes research, education, and expertise to improve the Peptide Education Hub\'s AI and protocol library.'}
                  </p>
                </CardContent>
              </Card>

              {/* Back */}
              <Link href="/find-a-provider">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-teal-700 to-teal-600 py-12 px-4 mt-8">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Start Your Peptide Therapy Journey{locationStr ? ` in ${locationStr}` : ""}?
            </h2>
            <p className="text-teal-100 mb-6">
              {provider.name} uses AI-powered protocols backed by 2,800+ studies to create a personalized plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {provider.website && (
                <a href={provider.website} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </Button>
                </a>
              )}
              <Link href="/find-a-provider">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-600 px-8">
                  Browse All Practitioners
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <BackToTop />
      </div>
    </>
  );
}
