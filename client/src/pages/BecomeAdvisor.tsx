import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Send, Shield, Users, BookOpen, Microscope } from "lucide-react";

export default function BecomeAdvisor() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Send form data via mailto as a fallback
    const subject = encodeURIComponent(
      `Advisor/Contributor Application - ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `New Advisor/Contributor Application\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nOrganization / Practice: ${formData.organization || "Not provided"}\nReason for Interest:\n${formData.reason}`
    );
    window.location.href = `mailto:info@dallasregenerative.com?subject=${subject}&body=${body}`;

    // Show success state after a brief delay
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Apply to Be a Contributor or Advisor | Peptide Education Hub</title>
        <meta
          name="description"
          content="Apply to join our clinical advisory network. Contribute to peptide education, review content, and help shape the future of evidence-based peptide therapy resources."
        />
        <link rel="canonical" href="https://pepedhub.com/become-advisor" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        {/* Back link */}
        <div className="max-w-2xl mx-auto pt-8 px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Peptide Education Hub
          </Link>
        </div>

        {/* Main content */}
        <div className="max-w-2xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Apply to Be a Contributor or Advisor
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Help shape the most comprehensive peptide education resource for practitioners. All participation is confidential.
            </p>
          </div>

          {/* Benefits - compact grid */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Review & Contribute</p>
                <p className="text-slate-400 text-xs mt-1">Help develop evidence-based content</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Microscope className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Clinical Insight</p>
                <p className="text-slate-400 text-xs mt-1">Share real-world clinical experience</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Users className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Advisory Network</p>
                <p className="text-slate-400 text-xs mt-1">Connect with leading practitioners</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Shield className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Fully Confidential</p>
                <p className="text-slate-400 text-xs mt-1">Your participation is never published</p>
              </div>
            </div>
          </div>

          {/* Form card */}
          {!submitted ? (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Submit Your Application
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Fill out the form below and our team will review your application. This program covers both Peptide Education Hub and PeptideProtocols.ai.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Organization / Practice
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Reason for Interest <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder=""
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Application Submitted
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Thank you for your interest. Our team will review your application and reach out via email.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Peptide Education Hub
              </Link>
            </div>
          )}

          {/* Footer note */}
          <p className="text-center text-slate-500 text-xs mt-8">
            Your information is kept strictly confidential and will never be published or shared publicly.
          </p>
        </div>
      </div>
    </>
  );
}
