import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { 
  Printer, Mail, Link2, Share2, Check, ChevronUp, ChevronDown,
  FileText, Copy, MessageSquare, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * PractitionerToolbar - A floating toolbar that appears on all peptide/blend/formula pages
 * Provides easy access to Print for Patient, Email, Copy Link, and Share functionality
 */
export default function PractitionerToolbar() {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  // Only show on peptide/blend/formula pages
  const isPeptidePage = location.startsWith("/peptides/");
  
  // Show toolbar after scrolling down a bit
  useEffect(() => {
    if (!isPeptidePage) return;
    
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    
    // Show immediately on peptide pages
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPeptidePage, location]);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(e.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isPeptidePage) return null;

  const pageUrl = `https://pepedhub.com${location}`;
  const pageTitle = document.title?.replace(" | Peptide Education Hub", "") || "Peptide Information";

  // Get a clean text summary of the page for email/share
  const getPageSummary = (): string => {
    const main = document.querySelector("main") || document.querySelector(".max-w-6xl") || document.querySelector("[class*='container']");
    if (!main) return "";
    
    // Get all text content, clean it up
    const headings = main.querySelectorAll("h1, h2, h3, h4");
    const paragraphs = main.querySelectorAll("p");
    const lists = main.querySelectorAll("li");
    
    let summary = "";
    
    // Get the first heading as title
    if (headings.length > 0) {
      summary += headings[0].textContent?.trim() + "\n\n";
    }
    
    // Get first few paragraphs
    const paraTexts: string[] = [];
    paragraphs.forEach((p, i) => {
      if (i < 4 && p.textContent?.trim()) {
        paraTexts.push(p.textContent.trim());
      }
    });
    summary += paraTexts.join("\n\n");
    
    return summary;
  };

  // Print for Patient - creates a clean, formatted patient handout
  const handlePrint = () => {
    setIsPrinting(true);
    
    const mainContent = document.querySelector("main") || document.querySelector(".max-w-6xl") || document.querySelector("[class*='container']");
    const contentToPrint = mainContent?.innerHTML || document.body.innerHTML;

    const printHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${pageTitle} - Patient Information</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      padding: 0.5in;
      max-width: 8.5in;
      margin: 0 auto;
    }
    .print-header {
      border-bottom: 3px solid #0d9488;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .print-header h1 {
      font-size: 22pt;
      color: #0d9488;
      margin-bottom: 4px;
    }
    .print-header .subtitle {
      font-size: 11pt;
      color: #64748b;
    }
    .print-header .logo-area {
      text-align: right;
      font-size: 9pt;
      color: #94a3b8;
    }
    .print-header .logo-area strong {
      font-size: 11pt;
      color: #0d9488;
      display: block;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #0f172a;
      margin-top: 1em;
      margin-bottom: 0.5em;
      page-break-after: avoid;
    }
    h2 { font-size: 15pt; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    h3 { font-size: 13pt; color: #334155; }
    h4 { font-size: 12pt; color: #475569; }
    p { margin-bottom: 0.6em; }
    ul, ol { margin-left: 1.5em; margin-bottom: 0.8em; }
    li { margin-bottom: 0.2em; }
    table { width: 100%; border-collapse: collapse; margin: 0.8em 0; font-size: 10pt; }
    th, td { border: 1px solid #cbd5e1; padding: 6px 10px; text-align: left; }
    th { background-color: #f1f5f9; font-weight: 600; color: #334155; }
    tr:nth-child(even) { background-color: #f8fafc; }
    .info-box { padding: 10px 14px; margin: 0.8em 0; border-radius: 4px; background-color: #f0fdfa; border-left: 4px solid #0d9488; page-break-inside: avoid; }
    .warning-box { padding: 10px 14px; margin: 0.8em 0; border-radius: 4px; background-color: #fef3c7; border-left: 4px solid #f59e0b; page-break-inside: avoid; }
    a { color: #0d9488; text-decoration: none; }
    img { max-width: 100%; height: auto; }
    .card, [class*="rounded"], [class*="shadow"] { border: 1px solid #e2e8f0; padding: 12px; margin: 8px 0; border-radius: 4px; }
    .badge, [class*="badge"] { display: inline-block; padding: 2px 8px; background-color: #f1f5f9; border-radius: 3px; font-size: 9pt; margin-right: 4px; }
    .print-footer {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 2px solid #e2e8f0;
      font-size: 9pt;
      color: #64748b;
    }
    .print-footer .disclaimer { font-style: italic; margin-bottom: 8px; }
    .print-footer .contact { display: flex; justify-content: space-between; }
    /* Hide interactive elements */
    button, .no-print, nav, header, footer, .navigation, .sidebar, .menu,
    .social-share, .newsletter, iframe, video, audio, svg,
    [class*="sticky"], [class*="fixed"], [class*="modal"],
    [class*="tooltip"], [class*="dropdown"], [class*="practitioner-toolbar"] { display: none !important; }
    /* But show SVG icons inline */
    span > svg, h3 > svg, h4 > svg, div > svg { display: inline-block !important; width: 16px; height: 16px; }
    @media print {
      body { padding: 0; }
      @page { margin: 0.6in; }
    }
  </style>
</head>
<body>
  <div class="print-header">
    <div>
      <h1>${pageTitle}</h1>
      <div class="subtitle">Patient Information Sheet</div>
    </div>
    <div class="logo-area">
      <strong>Peptide Education Hub</strong>
      pepedhub.com<br/>
      DrsPeptides.com
    </div>
  </div>
  <div class="print-content">
    ${contentToPrint}
  </div>
  <div class="print-footer">
    <div class="disclaimer">
      <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. 
      Always consult with a qualified healthcare provider before starting any peptide therapy.
    </div>
    <div class="contact">
      <span>Peptide Education Hub — DrsPeptides.com</span>
      <span>Printed: ${new Date().toLocaleDateString()}</span>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); }, 300);
      window.onafterprint = function() { window.close(); };
    };
  </script>
</body>
</html>`;

    const iframe = document.createElement("iframe");
    iframe.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:none;";
    document.body.appendChild(iframe);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(printHTML);
      iframeDoc.close();
      setTimeout(() => {
        iframe.contentWindow?.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
          setIsPrinting(false);
        }, 1000);
      }, 500);
    } else {
      setIsPrinting(false);
    }
  };

  // Email to patient/colleague
  const handleEmail = () => {
    const summary = getPageSummary();
    const truncatedSummary = summary.substring(0, 1500);
    const subject = encodeURIComponent(`${pageTitle} - Peptide Information`);
    const body = encodeURIComponent(
      `${pageTitle}\n\n` +
      `${truncatedSummary}\n\n` +
      `---\n` +
      `View the full information page:\n${pageUrl}\n\n` +
      `Source: Peptide Education Hub (pepedhub.com)\n` +
      `Provided by DrsPeptides.com`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  // Copy link to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = pageUrl;
      textArea.style.cssText = "position:fixed;left:-9999px;";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Copy page content as text
  const handleCopyContent = async () => {
    const summary = getPageSummary();
    const fullText = `${pageTitle}\n\n${summary}\n\n---\nSource: ${pageUrl}\nPeptide Education Hub | DrsPeptides.com`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  // Native share (mobile) or show share menu
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageTitle,
          text: `Check out this peptide information: ${pageTitle}`,
          url: pageUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  // Social share handlers
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  // SMS / Text message share
  const handleSMS = () => {
    const text = encodeURIComponent(`${pageTitle}\n\nLearn more: ${pageUrl}`);
    window.location.href = `sms:?body=${text}`;
    setShowShareMenu(false);
  };

  return (
    <div
      className={cn(
        "practitioner-toolbar fixed z-40 transition-all duration-300 print:hidden",
        // Desktop: right side floating bar
        "right-4 bottom-20",
        // Mobile: bottom bar
        "md:right-4 md:bottom-20",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      )}
    >
      {/* Main Toolbar */}
      <div className="relative" ref={shareMenuRef}>
        {/* Share submenu (desktop fallback) */}
        {showShareMenu && (
          <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-3 min-w-[200px] animate-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100 dark:border-slate-700">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Share via</span>
              <button onClick={() => setShowShareMenu(false)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                <X className="h-3 w-3 text-slate-400" />
              </button>
            </div>
            <div className="space-y-1">
              <button onClick={shareToTwitter} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950 rounded-lg transition-colors">
                <span className="text-sky-500">𝕏</span> Twitter / X
              </button>
              <button onClick={shareToLinkedIn} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg transition-colors">
                <span className="text-blue-600">in</span> LinkedIn
              </button>
              <button onClick={shareToFacebook} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg transition-colors">
                <span className="text-indigo-600">f</span> Facebook
              </button>
              <button onClick={handleSMS} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-950 rounded-lg transition-colors">
                <MessageSquare className="h-4 w-4 text-green-600" /> Text Message
              </button>
            </div>
          </div>
        )}

        {/* Collapse/Expand toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white rounded-full p-1 shadow-lg hover:bg-teal-700 transition-colors z-10"
          title={isExpanded ? "Minimize toolbar" : "Expand toolbar"}
        >
          {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
        </button>

        {/* Toolbar container */}
        <div className={cn(
          "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300",
          isExpanded ? "p-2" : "p-1"
        )}>
          {/* Label */}
          {isExpanded && (
            <div className="px-3 pt-2 pb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Practitioner Tools
              </span>
            </div>
          )}

          <div className={cn(
            "flex gap-1",
            isExpanded ? "flex-col" : "flex-row"
          )}>
            {/* Print for Patient */}
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200",
                "hover:bg-teal-50 dark:hover:bg-teal-950 text-slate-700 dark:text-slate-300",
                "hover:text-teal-700 dark:hover:text-teal-400",
                isPrinting && "opacity-50 cursor-not-allowed"
              )}
              title="Print patient-friendly handout"
            >
              {isPrinting ? (
                <Check className="h-5 w-5 text-teal-600 flex-shrink-0" />
              ) : (
                <Printer className="h-5 w-5 text-teal-600 flex-shrink-0" />
              )}
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {isPrinting ? "Preparing..." : "Print for Patient"}
                </span>
              )}
            </button>

            {/* Email */}
            <button
              onClick={handleEmail}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400"
              title="Email this information"
            >
              <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">Email to Patient</span>
              )}
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200",
                "text-slate-700 dark:text-slate-300",
                copied 
                  ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400" 
                  : "hover:bg-purple-50 dark:hover:bg-purple-950 hover:text-purple-700 dark:hover:text-purple-400"
              )}
              title="Copy page link to clipboard"
            >
              {copied ? (
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              ) : (
                <Link2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
              )}
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {copied ? "Link Copied!" : "Copy Link"}
                </span>
              )}
            </button>

            {/* Copy Content */}
            <button
              onClick={handleCopyContent}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-amber-50 dark:hover:bg-amber-950 text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400"
              title="Copy page content as text"
            >
              <Copy className="h-5 w-5 text-amber-600 flex-shrink-0" />
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">Copy Content</span>
              )}
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400"
              title="Share this page"
            >
              <Share2 className="h-5 w-5 text-rose-600 flex-shrink-0" />
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap">Share</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
