import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Award, Users, BookOpen, GraduationCap, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";

export default function TrainingPartner() {
  usePageTitle("Hands-On Peptide & Regenerative Training | 1228 Wellness");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                <GraduationCap className="w-3 h-3 mr-1" />
                Verified Training Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hands-On Peptide & Regenerative Training</h1>
            <p className="text-xl text-purple-100 max-w-3xl">
              Comprehensive hands-on training in peptide therapy, regenerative aesthetics, PRP/PRF, and practice building — from education to practice ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* 1228 Wellness Feature Card */}
          <Card className="border-2 border-purple-400 hover:shadow-2xl transition-shadow relative overflow-hidden mb-12">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300">
                <Award className="w-3 h-3 mr-1" />
                Featured Training Partner
              </span>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-8 h-8 text-purple-600" />
                <div>
                  <CardTitle className="text-3xl mb-1">1228 Wellness</CardTitle>
                  <p className="text-purple-600 font-semibold text-lg">Advanced Regenerative Aesthetic Medicine Training</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Comprehensive training program in regenerative aesthetic medicine founded by <strong>Dr. Joni Collins, DMS, PA-C, CAC</strong> and <strong>Dr. Ray Bennett, MD</strong>. With 700+ providers trained and 350+ who have launched their own practices, 1228 Wellness offers a proven pathway from education to practice ownership.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">700+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Providers Trained</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">350+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Practices Launched</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">19</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Online Modules</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">70</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Video Lessons</div>
                </div>
              </div>

              {/* Program Highlights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Program Highlights</h3>
                  <ul className="space-y-2">
                    {[
                      "19 modules, 70 lessons online",
                      "In-person hands-on training",
                      "Regenerative injectables (PRP, PRF)",
                      "Peptide protocols & compounding",
                      "Practice building & business ops",
                      "Aesthetic procedures training",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Who It's For</h3>
                  <ul className="space-y-2">
                    {[
                      "Physicians (MD/DO)",
                      "Nurse Practitioners (NP)",
                      "Physician Assistants (PA)",
                      "Registered Nurses (RN)",
                      "Healthcare providers entering regenerative medicine",
                      "Practitioners wanting to launch their own practice",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <Users className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Curriculum Overview */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Curriculum Includes
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Regenerative Medicine</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• PRP & PRF therapy</li>
                      <li>• Exosome treatments</li>
                      <li>• Stem cell applications</li>
                      <li>• Growth factor protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Peptide Therapy</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Peptide protocols</li>
                      <li>• Compounding basics</li>
                      <li>• Patient assessment</li>
                      <li>• Monitoring & follow-up</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Practice Building</h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                      <li>• Business operations</li>
                      <li>• Marketing strategies</li>
                      <li>• Patient acquisition</li>
                      <li>• Revenue optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://www.twelvetwentyeightwellness.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit 1228 Wellness
                  </Button>
                </a>
                <Link href="/training">
                  <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View All Training Options
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Why Hands-On Training Matters */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Hands-On Training Matters</h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
              Peptide therapy and regenerative medicine require more than theoretical knowledge. Proper technique in reconstitution, injection, patient assessment, and protocol design can only be mastered through supervised hands-on practice. 1228 Wellness bridges the gap between online education and clinical competency.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              Their track record speaks for itself: over 700 providers trained and more than 350 who have successfully launched their own regenerative medicine practices. This isn't just education — it's a proven pathway to practice ownership.
            </p>
          </div>

          {/* CTA to PeptideProtocols.ai */}
          <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Build Your Peptide Protocols?</h3>
            <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
              Once you've completed your training, Dr. Peptide AI helps you build precision protocols backed by PubMed citations and collective practitioner intelligence.
            </p>
            <a href="https://peptideprotocols.ai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore PeptideProtocols.ai
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
