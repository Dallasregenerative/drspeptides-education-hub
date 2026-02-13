import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import BackToTop from '../components/BackToTop';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Peptide Education Hub</title>
        <meta name="description" content="Privacy Policy for Peptide Education Hub by Dallas Regenerative LLC. Learn how we collect, use, and protect your information." />
        <link rel="canonical" href="https://pepedhub.com/privacy" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Last updated: February 12, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Peptide Education Hub ("we," "our," or "us"), operated by Dallas Regenerative LLC, is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at pepedhub.com (the "Site").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Information You Provide</h3>
              <p className="text-slate-700 dark:text-slate-300">
                We may collect information you voluntarily provide when you:
              </p>
              <ul className="text-slate-700 dark:text-slate-300 list-disc pl-6 space-y-2">
                <li>Submit a contact form or inquiry</li>
                <li>Subscribe to our newsletter</li>
                <li>Request peptide sourcing information</li>
                <li>Use our clinical tools (data is processed locally in your browser and is not transmitted to our servers)</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300">
                This may include your name, email address, professional credentials, phone number, and practice information.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6">Automatically Collected Information</h3>
              <p className="text-slate-700 dark:text-slate-300">
                When you visit our Site, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar tracking technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. How We Use Your Information</h2>
              <p className="text-slate-700 dark:text-slate-300">We use the information we collect to:</p>
              <ul className="text-slate-700 dark:text-slate-300 list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested information</li>
                <li>Send newsletters and educational content you've opted into</li>
                <li>Connect you with peptide sourcing options through our partner pharmacies</li>
                <li>Improve our website, tools, and educational content</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Clinical Tool Data</h2>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Important:</strong> All clinical tools on Peptide Education Hub (dosage calculators, interaction checkers, protocol builders, progress trackers, etc.) process data entirely within your web browser. No patient data, calculation inputs, or clinical information is transmitted to or stored on our servers. Your clinical data remains on your device at all times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Data Sharing</h2>
              <p className="text-slate-700 dark:text-slate-300">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="text-slate-700 dark:text-slate-300 list-disc pl-6 space-y-2">
                <li><strong>Service providers:</strong> Third-party services that help us operate our website (e.g., hosting, analytics, email delivery)</li>
                <li><strong>Partner pharmacies:</strong> When you explicitly request peptide sourcing assistance, we may share your contact information with 503A/503B compounding pharmacies</li>
                <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Cookies</h2>
              <p className="text-slate-700 dark:text-slate-300">
                We use cookies and similar technologies to enhance your browsing experience, remember your preferences (such as dark mode settings), and analyze site traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Data Security</h2>
              <p className="text-slate-700 dark:text-slate-300">
                We implement appropriate technical and organizational measures to protect your personal information. Our site is served over HTTPS, and we regularly review our security practices. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">8. Your Rights</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at{' '}
                <a href="mailto:info@peptideeducationhub.com" className="text-teal-600 hover:text-teal-700">info@peptideeducationhub.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">9. Changes to This Policy</h2>
              <p className="text-slate-700 dark:text-slate-300">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">10. Contact Us</h2>
              <p className="text-slate-700 dark:text-slate-300">
                If you have questions about this Privacy Policy, please contact us at:
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
