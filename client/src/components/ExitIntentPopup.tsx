import { useState, useEffect, useCallback } from "react";
import { X, Download, BookOpen, Shield, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (hasTriggered) return;
      // Only trigger when mouse moves toward the top of the viewport (leaving page)
      if (e.clientY <= 5 && e.relatedTarget === null) {
        // Check if user has dismissed before (stored in localStorage)
        const dismissed = localStorage.getItem("exitPopupDismissed");
        const dismissedAt = dismissed ? parseInt(dismissed) : 0;
        const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
        if (Date.now() - dismissedAt < threeDaysMs) return;

        setIsVisible(true);
        setHasTriggered(true);
      }
    },
    [hasTriggered]
  );

  useEffect(() => {
    // Don't show on mobile (no mouse leave event anyway)
    if (window.innerWidth < 768) return;

    // Wait 15 seconds before enabling exit intent to avoid annoying quick visitors
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("exitPopupDismissed", Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Submit to Netlify Forms
      const formData = new URLSearchParams();
      formData.append("form-name", "newsletter");
      formData.append("email", email);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      setSubmitted(true);
      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("exitPopupDismissed", Date.now().toString());
      }, 3000);
    } catch {
      // Still show success to not block the user
      setSubmitted(true);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-4 max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>

        {/* Gradient header */}
        <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 px-6 py-8 text-white text-center">
          <div className="flex justify-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Beaker className="h-6 w-6" />
            </div>
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Shield className="h-6 w-6" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Wait! Don't Miss This Free Guide
          </h2>
          <p className="text-white/90 text-sm">
            Join 1,200+ practitioners who trust PepEdHub
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {!submitted ? (
            <>
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Download className="h-5 w-5 text-teal-600" />
                  Free: Peptide Therapy Quick-Start Guide
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">&#10003;</span>
                    <span>Top 10 peptides every practitioner should know</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">&#10003;</span>
                    <span>Dosing cheat sheet with reconstitution math</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">&#10003;</span>
                    <span>Patient consent form templates (state-specific)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold mt-0.5">&#10003;</span>
                    <span>2026 regulatory compliance checklist</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold text-base transition-all"
                >
                  Get My Free Guide
                </Button>
              </form>

              <p className="text-xs text-slate-400 text-center mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">&#10003;</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                You're In!
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Check your inbox for the Peptide Therapy Quick-Start Guide.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
