import { useState, useEffect } from "react";
import { useLocation } from "wouter";

/**
 * PractitionerToolbar - A floating toolbar for healthcare practitioners
 * Provides Print for Patient, Email, Copy Link, Copy Content, and Share functionality
 * Only appears on /peptides/* pages (individual peptide, blend, and formula pages)
 */
export default function PractitionerToolbar() {
  const [location] = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Only show on peptide/blend/formula pages, not on index pages
  const shouldShow =
    location.startsWith("/peptides/") &&
    !location.includes("/peptides/index") &&
    !location.includes("/peptides/glossary") &&
    !location.includes("/peptides/statistics") &&
    location !== "/peptides/" &&
    location !== "/peptides";

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowShareMenu(false);
    if (showShareMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showShareMenu]);

  // Auto-clear copy success message
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => setCopySuccess(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  // Add bottom padding to body when toolbar is visible so content isn't hidden behind it
  useEffect(() => {
    if (shouldShow) {
      document.body.style.paddingBottom = '72px';
      return () => { document.body.style.paddingBottom = ''; };
    }
  }, [shouldShow]);

  if (!shouldShow) return null;

  const pageUrl = window.location.href;
  const pageTitle = document.title.split("|")[0]?.trim() || document.title;

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      window.print();
      return;
    }

    const mainContent = document.querySelector("main") || document.querySelector("#root");
    const contentHtml = mainContent?.innerHTML || "";

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${pageTitle} - Patient Information</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 30px;
          }
          .print-header {
            border-bottom: 3px solid #0d6b4e;
            padding-bottom: 15px;
            margin-bottom: 25px;
          }
          .print-header h1 {
            color: #0d6b4e;
            font-size: 24px;
            margin-bottom: 5px;
          }
          .print-header p {
            color: #666;
            font-size: 12px;
          }
          h1, h2, h3, h4 { color: #0d6b4e; margin: 20px 0 10px; }
          h1 { font-size: 22px; }
          h2 { font-size: 18px; }
          h3 { font-size: 16px; }
          h4 { font-size: 14px; }
          p, li { font-size: 13px; margin-bottom: 8px; }
          ul, ol { padding-left: 20px; }
          table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; font-size: 12px; }
          th { background: #f0f7f4; color: #0d6b4e; }
          .disclaimer {
            margin-top: 30px;
            padding: 15px;
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 5px;
            font-size: 11px;
            color: #856404;
          }
          .footer-info {
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
            font-size: 11px;
            color: #999;
            text-align: center;
          }
          nav, footer, button, input, .practitioner-toolbar,
          [class*="toolbar"], [class*="newsletter"], [class*="Subscribe"],
          [class*="modal"], [class*="toast"] { display: none !important; }
          img { max-width: 100%; height: auto; }
          .print-nav {
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 10px 0;
            margin-bottom: 15px;
            border-bottom: 1px solid #e5e7eb;
          }
          .print-nav a, .print-nav button {
            display: inline-flex !important;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            border: none;
          }
          .print-nav .back-btn {
            background: #0d6b4e;
            color: white;
          }
          .print-nav .back-btn:hover { background: #095c42; }
          .print-nav .print-btn {
            background: #f0f7f4;
            color: #0d6b4e;
            border: 1px solid #0d6b4e;
          }
          .print-nav .print-btn:hover { background: #e0f0ea; }
          .print-nav .close-btn {
            background: #f3f4f6;
            color: #374151;
            margin-left: auto;
          }
          .print-nav .close-btn:hover { background: #e5e7eb; }
          @media print {
            body { padding: 20px; }
            .disclaimer { break-inside: avoid; }
            .print-nav { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div class="print-nav">
          <a href="https://pepedhub.com" class="back-btn">
            &#8592; Back to PepEdHub
          </a>
          <button onclick="window.print()" class="print-btn">
            &#128424; Print
          </button>
          <button onclick="window.close()" class="close-btn">
            &#10005; Close
          </button>
        </div>
        <div class="print-header">
          <h1>${pageTitle}</h1>
          <p>Patient Education Material | Peptide Education Hub</p>
          <p>Printed: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        ${contentHtml}
        <div class="disclaimer">
          <strong>Medical Disclaimer:</strong> This information is for educational purposes only and is not intended as medical advice.
          Peptide therapies should only be administered under the supervision of a qualified healthcare provider.
          Always consult your physician before starting any new treatment.
        </div>
        <div class="footer-info">
          <p>Source: Peptide Education Hub &mdash; pepedhub.com</p>
          <p>For more information, visit: ${pageUrl}</p>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Peptide Information: ${pageTitle}`);
    const body = encodeURIComponent(
      `I wanted to share this peptide information with you:\n\n` +
        `${pageTitle}\n\n` +
        `You can read the full details here:\n${pageUrl}\n\n` +
        `This information is provided by Peptide Education Hub for educational purposes.\n` +
        `Always consult with your healthcare provider before starting any peptide therapy.`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopySuccess("Link Copied!");
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = pageUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopySuccess("Link Copied!");
    }
  };

  const handleCopyContent = async () => {
    try {
      const mainContent =
        document.querySelector("main")?.textContent ||
        document.querySelector("#root")?.textContent ||
        "";
      const cleanText = mainContent
        .replace(/\s+/g, " ")
        .replace(/Subscribe.*?resources\./g, "")
        .trim();
      await navigator.clipboard.writeText(
        `${pageTitle}\n\n${cleanText}\n\nSource: ${pageUrl}`
      );
      setCopySuccess("Content Copied!");
    } catch {
      setCopySuccess("Copy failed");
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: pageTitle,
          text: `Check out this peptide information: ${pageTitle}`,
          url: pageUrl,
        })
        .catch(() => {
          setShowShareMenu(!showShareMenu);
        });
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      "_blank"
    );
    setShowShareMenu(false);
  };

  const shareViaSMS = () => {
    window.open(
      `sms:?body=${encodeURIComponent(`${pageTitle}: ${pageUrl}`)}`,
      "_self"
    );
    setShowShareMenu(false);
  };

  const btnBase =
    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap";
  const btnPrimary = `${btnBase} bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm`;
  const btnSecondary = `${btnBase} bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm`;

  return (
    <>
      <style>{`@media print { .practitioner-toolbar { display: none !important; } }
        @media (max-width: 767px) { .practitioner-toolbar-expanded { display: none !important; } }`}</style>

      {/* Mobile: Single share button in bottom-right */}
      <div className="practitioner-toolbar fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={handleShare}
          className="bg-emerald-600 text-white p-3 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-200"
          title="Share"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </div>

      <div
        className="practitioner-toolbar fixed bottom-4 right-4 z-50 hidden md:flex flex-col items-end gap-2"
        style={{ maxWidth: "calc(100vw - 32px)" }}
      >
        {copySuccess && (
          <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            {copySuccess}
          </div>
        )}

        {showShareMenu && (
          <div
            className="bg-white rounded-xl shadow-2xl border border-gray-200 p-2 min-w-[180px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={shareToTwitter}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
            >
              Twitter / X
            </button>
            <button
              onClick={shareToLinkedIn}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
            >
              LinkedIn
            </button>
            <button
              onClick={shareToFacebook}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
            >
              Facebook
            </button>
            <button
              onClick={shareViaSMS}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
            >
              Text Message
            </button>
          </div>
        )}

        {isExpanded ? (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 p-2 hidden md:flex flex-col sm:flex-row gap-1.5">
            <button onClick={handlePrint} className={btnPrimary} title="Print for Patient">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span className="hidden sm:inline">Print for Patient</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button onClick={handleEmail} className={btnSecondary} title="Email to Patient">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="hidden sm:inline">Email</span>
            </button>

            <button onClick={handleCopyLink} className={btnSecondary} title="Copy Link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span className="hidden sm:inline">Copy Link</span>
            </button>

            <button onClick={handleCopyContent} className={btnSecondary} title="Copy Content">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span className="hidden sm:inline">Copy</span>
            </button>

            <button onClick={handleShare} className={btnSecondary} title="Share">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={() => setIsExpanded(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              title="Minimize toolbar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-emerald-600 text-white p-3 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-200 hover:scale-105 hidden md:flex"
            title="Open Practitioner Tools"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
