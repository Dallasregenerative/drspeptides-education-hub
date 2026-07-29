import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertTriangle, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <Helmet>
        <title>Terms of Service | Peptide Education Hub</title>
        <meta name="description" content="Terms of Service for Peptide Education Hub. Read our terms and conditions for using our educational platform and provider directory." />
        <link rel="canonical" href="https://pepedhub.com/terms" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 px-8 py-12 text-center">
            <FileText className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-slate-300">Last Updated: July 28, 2026</p>
          </div>

          <div className="p-8 prose prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Peptide Education Hub (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2>2. Educational Purpose Only</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
              <p className="text-amber-800 m-0 font-medium">
                The content on Peptide Education Hub is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.
            </p>

            <h2>3. Provider Directory</h2>
            <p>
              The provider directory is provided as a convenience to users. We do not endorse, recommend, or guarantee the services of any specific practitioner listed in the directory. Users are responsible for verifying the credentials, qualifications, and suitability of any healthcare provider they choose to consult.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              The Website and its original content, features, and functionality are owned by Peptide Education Hub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2>5. User Contributions</h2>
            <p>
              By submitting content to the Website (including but not limited to practitioner profiles, comments, or articles), you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable, perpetual license to use, display, edit, modify, reproduce, distribute, store, and prepare derivative works of your content.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Peptide Education Hub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
