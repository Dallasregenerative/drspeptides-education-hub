import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Megaphone, TrendingUp, Bot, Phone, CheckCircle, Star, Globe, Users } from "lucide-react";
import { Link } from "wouter";
import { usePageTitle } from "@/hooks/usePageTitle";
import Navigation from "@/components/Navigation";

export default function PracticeMarketing() {
  usePageTitle("Practice Building & Marketing | Help My Medical Practice");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                <Megaphone className="w-3 h-3 mr-1" />
                Verified Practice Growth Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Building & Marketing</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Medical marketing and practice development designed specifically for regenerative medicine, anti-aging, and peptide therapy practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Help My Medical Practice Feature Card */}
          <Card className="border-2 border-blue-400 hover:shadow-2xl transition-shadow relative overflow-hidden mb-12">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">
                <Star className="w-3 h-3 mr-1" />
                Featured Practice Growth Partner
              </span>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Megaphone className="w-8 h-8 text-blue-600" />
                <div>
                  <CardTitle className="text-3xl mb-1">Help My Medical Practice</CardTitle>
                  <p className="text-blue-600 font-semibold text-lg">"Marketing That Heals Your Practice"</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Medical marketing and practice development company specializing in helping regenerative medicine, anti-aging, functional medicine, and integrative medicine practices grow. From SEO and patient acquisition to AI-driven chatbots that reduce no-shows, Help My Medical Practice offers a full suite of services designed specifically for healthcare providers.
              </p>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6 py-4">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Digital Marketing Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Medical practice SEO & Google visibility",
                      "Patient acquisition & lead generation",
                      "Social media & reputation management",
                      "Website design & conversion optimization",
                      "Google Ads & paid media management",
                      "Content marketing & blog strategy",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Practice Growth Services
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "AI-driven chatbot implementation",
                      "Revenue cycle management",
                      "Patient retention programs",
                      "Appointment scheduling optimization",
                      "No-show reduction strategies",
                      "Free Practice Performance Assessment™",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Why This Matters for Peptide Practices */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  Why This Matters for Peptide Practices
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Peptide therapy is a rapidly growing field, but many practitioners struggle with patient acquisition because traditional medical marketing doesn't understand the nuances of regenerative medicine. Help My Medical Practice specializes in this exact niche — they know how to attract patients searching for peptide therapy, hormone optimization, and regenerative treatments.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">SEO</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Rank for peptide therapy keywords</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">AI</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Chatbots reduce no-shows</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">ROI</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Measurable practice growth</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span><strong>Quintin L. Gunn Sr., CSO</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>(407) 702-4408</span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  Email: info@helpmymdpractice.com
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://www.helpmymdpractice.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit Help My Medical Practice
                  </Button>
                </a>
                <a href="https://www.helpmymdpractice.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Practice Assessment
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Why Marketing Matters */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Marketing Matters for Peptide Practices</h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
              You can have the best clinical skills and the most effective protocols, but without patients finding you, your practice won't grow. The peptide therapy market is expanding rapidly, and practitioners who invest in proper marketing now will establish themselves as the go-to providers in their area.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              Help My Medical Practice understands the unique challenges of marketing peptide therapy services — from navigating advertising restrictions to educating patients about treatments they may not know exist. Their specialized approach ensures your practice reaches the right patients at the right time.
            </p>
          </div>

          {/* CTA to PeptideProtocols.ai */}
          <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Build Your Clinical Foundation First</h3>
            <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
              Great marketing starts with great protocols. Dr. Peptide AI helps you build evidence-based, PubMed-cited protocols that give your patients — and your marketing — real results to showcase.
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
