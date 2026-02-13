import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import BackToTop from '../components/BackToTop';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Peptide Education Hub</title>
        <meta name="description" content="Terms of Service for Peptide Education Hub by Dallas Regenerative LLC. Review the terms governing your use of our educational platform." />
        <link rel="canonical" href="https://pepedhub.com/terms" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Last updated: February 12, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-slate-700 dark:text-slate-300">
                By accessing and using Peptide Education Hub (pepedhub.com), operated by Dallas Regenerative LLC ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Educational Purpose</h2>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Peptide Education Hub is an educational resource designed for licensed healthcare professionals.</strong> All content, tools, protocols, and information provided on this site are for informational and educational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                The information provided should not be used as a substitute for professional medical judgment. Healthcare providers should always exercise independent clinical judgment and consult current clinical guidelines, manufacturer prescribing information, and applicable regulations before implementing any peptide therapy protocol.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Intended Audience</h2>
              <p className="text-slate-700 dark:text-slate-300">
                This website is intended for use by licensed healthcare professionals including physicians (MD, DO), nurse practitioners (NP), physician assistants (PA), pharmacists (PharmD), and other qualified medical professionals. While the site is publicly accessible, the clinical tools and protocols are designed for professional use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Clinical Tools Disclaimer</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Our clinical tools (dosage calculators, interaction checkers, protocol builders, etc.) are provided as educational aids. While we strive for accuracy:
              </p>
              <ul className="text-slate-700 dark:text-slate-300 list-disc pl-6 space-y-2">
                <li>All calculations should be independently verified before clinical use</li>
                <li>Drug interaction data may not be exhaustive — always check primary pharmacological references</li>
                <li>Dosing recommendations are general guidelines and may need adjustment for individual patients</li>
                <li>Protocol templates are starting points and should be customized based on clinical assessment</li>
                <li>We are not liable for any clinical decisions made based on tool outputs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Intellectual Property</h2>
              <p className="text-slate-700 dark:text-slate-300">
                All content on Peptide Education Hub, including text, graphics, logos, tools, and software, is the property of Dallas Regenerative LLC and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Healthcare providers may print or download content for personal educational use and may generate patient handouts using our tools for use in their clinical practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Peptide Sourcing</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Peptide Education Hub may facilitate connections between healthcare providers and compounding pharmacies through our sourcing request forms. We do not sell peptides directly. All sourcing is handled through licensed 503A and 503B compounding pharmacies. We do not guarantee availability, pricing, or quality of products from third-party pharmacies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Limitation of Liability</h2>
              <p className="text-slate-700 dark:text-slate-300">
                To the fullest extent permitted by law, Dallas Regenerative LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website, including but not limited to damages arising from clinical decisions, patient outcomes, or reliance on information provided on this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">8. Accuracy of Information</h2>
              <p className="text-slate-700 dark:text-slate-300">
                We make reasonable efforts to ensure the accuracy and currency of all information on this site. However, peptide therapy is a rapidly evolving field, and information may become outdated. We do not warrant that all information is complete, accurate, or current. Users should verify all clinical information against primary sources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">9. External Links</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Our website may contain links to external websites, including research databases (PubMed, ClinicalTrials.gov), partner pharmacies, and other resources. We are not responsible for the content, accuracy, or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">10. Modifications</h2>
              <p className="text-slate-700 dark:text-slate-300">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the site after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">11. Governing Law</h2>
              <p className="text-slate-700 dark:text-slate-300">
                These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">12. Contact</h2>
              <p className="text-slate-700 dark:text-slate-300">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mt-4">
                <p className="text-slate-700 dark:text-slate-300 font-semibold">Dallas Regenerative LLC</p>
                <p className="text-slate-600 dark:text-slate-400">Email: info@peptideeducationhub.com</p>
                <p className="text-slate-600 dark:text-slate-400">Website: pepedhub.com</p>
              </div>
            </section>
          </div>
        </main>
      </div>
      <BackToTop />
    </>
  );
}
