import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import BackToTop from '../components/BackToTop';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      alert("There was an error submitting the form. Please try emailing us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Peptide Education Hub</title>
        <meta name="description" content="Contact the Peptide Education Hub team. Reach out for questions about peptide therapy education, sourcing, or partnership opportunities." />
        <link rel="canonical" href="https://pepedhub.com/contact" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-teal-100">
              Questions about peptide therapy education or sourcing? We're here to help.
            </p>
          </div>
        </div>

        <main className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                    <a href="mailto:info@peptideeducationhub.com" className="text-teal-600 hover:text-teal-700">
                      info@peptideeducationhub.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">Dallas, Texas</p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm">Dallas Regenerative LLC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ExternalLink className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Peptide Sourcing</h3>
                    <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">
                      DrsPeptides.com
                    </a>
                    <p className="text-slate-500 dark:text-slate-500 text-sm">For pharmaceutical-grade peptide sourcing</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">For Healthcare Providers</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  If you're a licensed healthcare provider interested in integrating peptide therapy into your practice, we offer:
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> 503A & 503B pharmacy sourcing assistance</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Clinical protocol guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Practice implementation support</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Educational resources and training</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. We'll get back to you within 1-2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h2>
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                        <input type="text" name="first-name" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                        <input type="text" name="last-name" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                      <input type="email" name="email" required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Credentials (e.g., MD, DO, NP, PA)</label>
                      <input type="text" name="credentials" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                      <select name="subject" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                        <option value="general">General Inquiry</option>
                        <option value="sourcing">Peptide Sourcing</option>
                        <option value="education">Education & Training</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="technical">Technical Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                      <textarea name="message" rows={5} required className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold disabled:opacity-50"
                    >
                      <Send className="w-5 h-5" />
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
      <BackToTop />
    </>
  );
}
