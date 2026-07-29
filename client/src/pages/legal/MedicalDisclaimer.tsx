import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Activity, Stethoscope } from 'lucide-react';

const MedicalDisclaimer = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <Helmet>
        <title>Medical Disclaimer | Peptide Education Hub</title>
        <meta name="description" content="Important medical disclaimer for Peptide Education Hub. Our content is for educational purposes only and does not constitute medical advice." />
        <link rel="canonical" href="https://pepedhub.com/medical-disclaimer" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-red-900 px-8 py-12 text-center">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-4">Medical Disclaimer</h1>
            <p className="text-red-200">Please read this important information carefully.</p>
          </div>

          <div className="p-8 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-teal-600" />
              Not Medical Advice
            </h2>
            <p className="text-lg text-slate-700 font-medium">
              The information provided on Peptide Education Hub (pepedhub.com) is for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment.
            </p>
            
            <p>
              The content on this website, including text, graphics, images, and information obtained from third parties, is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or treatment plan.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mt-8">
              <Activity className="w-6 h-6 text-teal-600" />
              FDA Status and Research Peptides
            </h2>
            <p>
              Many peptides discussed on this website are not approved by the U.S. Food and Drug Administration (FDA) for the treatment, cure, or prevention of any disease. Some peptides are classified as research chemicals and are not intended for human consumption.
            </p>
            <p>
              Information regarding the efficacy, safety, and potential applications of these substances is based on preliminary research, clinical trials, and anecdotal reports. This information is subject to change as new research emerges.
            </p>

            <h2>Provider Directory Disclaimer</h2>
            <p>
              The inclusion of a healthcare practitioner in our provider directory does not imply an endorsement or recommendation by Peptide Education Hub. We do not verify the medical licenses, qualifications, or disciplinary history of the practitioners listed. It is your responsibility to conduct due diligence before engaging the services of any healthcare provider.
            </p>

            <h2>Assumption of Risk</h2>
            <p>
              Reliance on any information provided by Peptide Education Hub, its employees, contracted writers, or medical professionals presenting content for publication to Peptide Education Hub is solely at your own risk. We are not responsible for any adverse effects, injuries, or consequences resulting from the use of any suggestions, preparations, or procedures discussed on this site.
            </p>

            <div className="bg-slate-100 p-6 rounded-xl mt-8 border border-slate-200">
              <p className="m-0 text-sm text-slate-600">
                <strong>If you think you may have a medical emergency, call your doctor, go to the emergency department, or call 911 immediately.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
