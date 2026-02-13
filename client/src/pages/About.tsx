import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import BackToTop from '../components/BackToTop';
import { Link } from 'wouter';
import { Award, BookOpen, Users, Shield, Microscope, Heart, Target, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Peptide Education Hub</title>
        <meta name="description" content="Learn about Peptide Education Hub by Dallas Regenerative LLC — the most comprehensive evidence-based educational resource for healthcare providers practicing peptide therapy." />
        <link rel="canonical" href="https://pepedhub.com/about" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Peptide Education Hub</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              The most comprehensive evidence-based educational resource for healthcare providers practicing peptide therapy, powered by Dallas Regenerative LLC.
            </p>
          </div>
        </div>

        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Mission */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Peptide Education Hub exists to bridge the gap between cutting-edge peptide research and clinical practice. We provide healthcare providers with the tools, knowledge, and resources they need to safely and effectively integrate peptide therapy into their patient care protocols.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Our platform covers 85+ therapeutic peptides, blends, and proprietary formulas with evidence-based content drawn from over 2,800 clinical studies. Every protocol, dosing recommendation, and safety guideline is designed for licensed healthcare professionals.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: "85+ Peptide Profiles", desc: "Comprehensive monographs covering mechanisms, dosing, safety, and clinical evidence for every major therapeutic peptide." },
                { icon: Microscope, title: "11 Clinical Tools", desc: "Professional-grade calculators, interaction checkers, protocol builders, and assessment tools for daily practice." },
                { icon: Shield, title: "Evidence-Based Protocols", desc: "Detailed treatment protocols for weight loss, recovery, longevity, cognitive enhancement, and more." },
                { icon: Users, title: "Practitioner Resources", desc: "Patient handout generators, biomarker trackers, and practice assessment tools to streamline your workflow." },
                { icon: Award, title: "2,800+ Study References", desc: "Every claim backed by peer-reviewed research with direct links to PubMed and clinical trial databases." },
                { icon: Heart, title: "Patient Education", desc: "Downloadable guides, reconstitution instructions, and safety materials for patient counseling." },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
                  <item.icon className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* About Dallas Regenerative */}
          <section className="mb-16 bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Dallas Regenerative LLC</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Dallas Regenerative LLC is a leader in regenerative medicine education and pharmaceutical-grade peptide sourcing. Through our clinical platform at{' '}
                <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">DrsPeptides.com</a>,
                we connect healthcare providers with 503A and 503B compounding pharmacies to ensure access to the highest quality peptide therapeutics.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Our team includes physicians, pharmacists, and researchers dedicated to advancing the field of peptide therapy through education, clinical tools, and evidence-based practice guidelines.
              </p>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Our Commitment</h2>
            <div className="space-y-4">
              {[
                "All content is reviewed for clinical accuracy and updated regularly",
                "Dosing information is consistent with current clinical guidelines",
                "Drug interaction data is sourced from pharmacological databases",
                "Safety guidelines follow FDA and USP standards",
                "All tools are free for licensed healthcare providers",
                "Patient privacy and data security are paramount — no patient data is stored",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-16">
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">Medical Disclaimer</h3>
            <p className="text-amber-800 dark:text-amber-200">
              Peptide Education Hub is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. All peptide therapies should be prescribed and supervised by licensed healthcare providers. Always consult manufacturer guidelines and current clinical literature before implementing any protocol.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Explore?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/tools" className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                Explore Clinical Tools
              </Link>
              <Link href="/peptide-index" className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-800 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors font-semibold">
                Browse Peptide Index
              </Link>
            </div>
          </section>
        </main>
      </div>
      <BackToTop />
    </>
  );
}
