import { useState } from "react";
import { Printer, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrintButtonProps {
  title: string;
  subtitle?: string;
  contentId?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showLabel?: boolean;
}

export default function PrintButton({
  title,
  subtitle,
  contentId,
  variant = "outline",
  size = "default",
  className = "",
  showLabel = true,
}: PrintButtonProps) {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);

    // Create a print-friendly version
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      setIsPrinting(false);
      alert('Please allow pop-ups to print this content');
      return;
    }

    // Get the content to print
    let contentToPrint = '';
    if (contentId) {
      const element = document.getElementById(contentId);
      if (element) {
        contentToPrint = element.innerHTML;
      }
    } else {
      // Get main content area
      const mainContent = document.querySelector('main') || document.querySelector('.print-content') || document.body;
      contentToPrint = mainContent.innerHTML;
    }

    // Create print-optimized HTML
    const printHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title} - Patient Handout</title>
  <style>
    /* Reset and base styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 12pt;
      line-height: 1.6;
      color: #1a1a1a;
      padding: 0.5in;
      max-width: 8.5in;
      margin: 0 auto;
    }
    
    /* Header */
    .print-header {
      border-bottom: 3px solid #0d9488;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    
    .print-header h1 {
      font-size: 24pt;
      color: #0d9488;
      margin-bottom: 5px;
    }
    
    .print-header .subtitle {
      font-size: 14pt;
      color: #64748b;
    }
    
    .print-header .source {
      font-size: 10pt;
      color: #94a3b8;
      margin-top: 10px;
    }
    
    /* Content styles */
    h1, h2, h3, h4, h5, h6 {
      color: #0f172a;
      margin-top: 1em;
      margin-bottom: 0.5em;
      page-break-after: avoid;
    }
    
    h2 {
      font-size: 16pt;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 5px;
    }
    
    h3 {
      font-size: 14pt;
      color: #334155;
    }
    
    p {
      margin-bottom: 0.75em;
    }
    
    ul, ol {
      margin-left: 1.5em;
      margin-bottom: 1em;
    }
    
    li {
      margin-bottom: 0.25em;
    }
    
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;
      font-size: 11pt;
    }
    
    th, td {
      border: 1px solid #cbd5e1;
      padding: 8px 12px;
      text-align: left;
    }
    
    th {
      background-color: #f1f5f9;
      font-weight: 600;
      color: #334155;
    }
    
    tr:nth-child(even) {
      background-color: #f8fafc;
    }
    
    /* Info boxes */
    .info-box, .warning-box, .note-box {
      padding: 12px 15px;
      margin: 1em 0;
      border-radius: 4px;
      page-break-inside: avoid;
    }
    
    .info-box {
      background-color: #f0fdfa;
      border-left: 4px solid #0d9488;
    }
    
    .warning-box {
      background-color: #fef3c7;
      border-left: 4px solid #f59e0b;
    }
    
    .note-box {
      background-color: #f1f5f9;
      border-left: 4px solid #64748b;
    }
    
    /* Footer */
    .print-footer {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #e2e8f0;
      font-size: 9pt;
      color: #64748b;
    }
    
    .print-footer .disclaimer {
      font-style: italic;
      margin-bottom: 10px;
    }
    
    .print-footer .contact {
      display: flex;
      justify-content: space-between;
    }
    
    /* Hide non-printable elements */
    button, .no-print, nav, header, footer, 
    .navigation, .sidebar, .menu, .social-share,
    .newsletter, iframe, video, audio,
    [class*="hover:"], [class*="cursor-pointer"] {
      display: none !important;
    }
    
    /* Page breaks */
    .page-break {
      page-break-before: always;
    }
    
    /* Links */
    a {
      color: #0d9488;
      text-decoration: none;
    }
    
    a::after {
      content: none;
    }
    
    /* Images */
    img {
      max-width: 100%;
      height: auto;
    }
    
    /* Cards and boxes */
    .card, [class*="rounded"], [class*="shadow"] {
      border: 1px solid #e2e8f0;
      padding: 15px;
      margin: 10px 0;
      border-radius: 4px;
    }
    
    /* Badge styles */
    .badge, [class*="badge"] {
      display: inline-block;
      padding: 2px 8px;
      background-color: #f1f5f9;
      border-radius: 3px;
      font-size: 10pt;
      margin-right: 5px;
    }
    
    /* Print-specific adjustments */
    @media print {
      body {
        padding: 0;
      }
      
      .print-header {
        position: running(header);
      }
      
      @page {
        margin: 0.75in;
        @top-center {
          content: element(header);
        }
      }
    }
  </style>
</head>
<body>
  <div class="print-header">
    <h1>${title}</h1>
    ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ''}
    <div class="source">Source: Peptide Education Hub | DrsPeptides.com</div>
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
      <span>Peptide Education Hub - DrsPeptides.com</span>
      <span>Printed: ${new Date().toLocaleDateString()}</span>
    </div>
  </div>
  
  <script>
    window.onload = function() {
      window.print();
      window.onafterprint = function() {
        window.close();
      };
    };
  </script>
</body>
</html>
    `;

    printWindow.document.write(printHTML);
    printWindow.document.close();

    setTimeout(() => {
      setIsPrinting(false);
    }, 1000);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
      onClick={handlePrint}
      disabled={isPrinting}
    >
      {isPrinting ? (
        <>
          <Check className="h-4 w-4" />
          {showLabel && "Preparing..."}
        </>
      ) : (
        <>
          <Printer className="h-4 w-4" />
          {showLabel && "Print for Patient"}
        </>
      )}
    </Button>
  );
}

// Simplified version for inline use
export function PrintIconButton({ 
  title, 
  contentId,
  className = "" 
}: { 
  title: string; 
  contentId?: string;
  className?: string;
}) {
  return (
    <PrintButton
      title={title}
      contentId={contentId}
      variant="ghost"
      size="icon"
      showLabel={false}
      className={className}
    />
  );
}

// Patient handout specific button
export function PatientHandoutButton({
  title,
  subtitle,
  contentId,
  className = "",
}: {
  title: string;
  subtitle?: string;
  contentId?: string;
  className?: string;
}) {
  return (
    <PrintButton
      title={title}
      subtitle={subtitle}
      contentId={contentId}
      variant="default"
      className={`bg-teal-600 hover:bg-teal-700 text-white ${className}`}
      showLabel={true}
    />
  );
}
