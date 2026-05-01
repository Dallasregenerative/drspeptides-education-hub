import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Send, Calendar, Clock, Users, Video } from "lucide-react";

export default function Walkthrough() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    practiceName: "",
    role: "",
    preferredDay: "",
    preferredTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formPayload = new URLSearchParams();
      formPayload.append("form-name", "walkthrough-request");
      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("practiceName", formData.practiceName || "Not provided");
      formPayload.append("role", formData.role || "Not provided");
      formPayload.append("preferredDay", formData.preferredDay || "Flexible");
      formPayload.append("preferredTime", formData.preferredTime || "Flexible");
      formPayload.append("message", formData.message || "No additional message");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formPayload.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Walkthrough request submission error:", error);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a 15-Minute Platform Walkthrough | Peptide Education Hub</title>
        <meta
          name="description"
          content="Schedule a 15-minute walkthrough of Dr. Peptide and the contributing-practitioner program. See the AI live, ask clinical questions, and learn how to get lifetime free access."
        />
        <link rel="canonical" href="https://pepedhub.com/walkthrough" />
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
              Book a 15-Minute Platform Walkthrough
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              We'll show you Dr. Peptide live, walk through the contributing-practitioner program, and answer your clinical questions one-on-one.
            </p>
          </div>

          {/* Benefits - compact grid */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Video className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Live Demo</p>
                <p className="text-slate-400 text-xs mt-1">See Dr. Peptide answer real clinical questions</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Users className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Contributing Program</p>
                <p className="text-slate-400 text-xs mt-1">Lifetime free access for contributors</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Calendar className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">15 Minutes</p>
                <p className="text-slate-400 text-xs mt-1">Quick onboarding, no commitment</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 flex items-start gap-3">
              <Clock className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Flexible Scheduling</p>
                <p className="text-slate-400 text-xs mt-1">Pick a day and time that works for you</p>
              </div>
            </div>
          </div>

          {/* Form card */}
          {!submitted ? (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Request Your Walkthrough
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Fill out the form below and we'll reach out to confirm your walkthrough time.
              </p>

              {/* Hidden Netlify form for bot detection */}
              <form name="walkthrough-request" data-netlify="true" hidden>
                <input type="text" name="fullName" />
                <input type="email" name="email" />
                <input type="text" name="practiceName" />
                <input type="text" name="role" />
                <input type="text" name="preferredDay" />
                <input type="text" name="preferredTime" />
                <textarea name="message"></textarea>
              </form>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="walkthrough-request" />

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
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
                    name="email"
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
                    Practice Name
                  </label>
                  <input
                    type="text"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={(e) =>
                      setFormData({ ...formData, practiceName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select your role</option>
                    <option value="Physician (MD/DO)">Physician (MD/DO)</option>
                    <option value="Nurse Practitioner">Nurse Practitioner</option>
                    <option value="Physician Assistant">Physician Assistant</option>
                    <option value="Naturopathic Doctor">Naturopathic Doctor</option>
                    <option value="Pharmacist">Pharmacist</option>
                    <option value="Practice Manager">Practice Manager</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Preferred Day
                    </label>
                    <select
                      name="preferredDay"
                      value={formData.preferredDay}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDay: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Flexible</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Preferred Time Window
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Flexible</option>
                      <option value="Morning (8am–11am CT)">Morning (8am–11am CT)</option>
                      <option value="Midday (11am–1pm CT)">Midday (11am–1pm CT)</option>
                      <option value="Afternoon (1pm–4pm CT)">Afternoon (1pm–4pm CT)</option>
                      <option value="Late Afternoon (4pm–6pm CT)">Late Afternoon (4pm–6pm CT)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any specific questions or topics you'd like covered?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Submitting..." : "Request My Walkthrough"}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Walkthrough Requested
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Thank you! We'll reach out to <strong>{formData.email}</strong> within 24 hours to confirm your walkthrough time.
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
            Questions? Email <a href="mailto:ac@dallasregenerativellc.com" className="text-teal-400 hover:text-teal-300">ac@dallasregenerativellc.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
