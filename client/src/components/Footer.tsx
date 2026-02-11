import { Link } from 'wouter';
import { Microscope, Mail, Heart, ExternalLink, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const peptideCategories = [
    { name: 'Weight Loss Peptides', path: '/peptides/semaglutide' },
    { name: 'Recovery Peptides', path: '/peptides/bpc-157' },
    { name: 'Growth Hormone', path: '/peptides/cjc-1295' },
    { name: 'Cognitive Peptides', path: '/peptides/semax' },
    { name: 'Longevity Peptides', path: '/peptides/epithalon' },
    { name: 'All Peptides', path: '/peptides' },
  ];

  const practitionerTools = [
    { name: 'Dosage Calculator', path: '/tools/dosage-calculator' },
    { name: 'Cost Calculator', path: '/tools/cost-calculator' },
    { name: 'Interaction Checker', path: '/tools/interaction-checker' },
    { name: 'Protocol Builder', path: '/tools/protocol-builder' },
    { name: 'Progress Tracker', path: '/tools/progress-tracker' },
    { name: 'Practice Assessment', path: '/tools/practice-assessment' },
    { name: 'Comparison Tool', path: '/comparison-tool' },
    { name: 'Reconstitution Calculator', path: '/tools/reconstitution-calculator' },
    { name: 'A-Z Peptide Index', path: '/peptide-index' },
  ];

  const resources = [
    { name: 'Video Library', path: '/video-library' },
    { name: 'Research Studies', path: '/research' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Safety Guidelines', path: '/safety-management' },
    { name: 'Regulatory Guidance', path: '/regulatory-guidance' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 print:hidden">
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <NewsletterSignup variant="footer" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 mb-4 cursor-pointer">
                <Microscope className="h-8 w-8 text-teal-500" />
                <span className="text-xl font-bold text-white">Peptide Education Hub</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              The most comprehensive peptide education resource for healthcare practitioners.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Peptides</h3>
            <ul className="space-y-2">
              {peptideCategories.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Practitioner Tools</h3>
            <ul className="space-y-2">
              {practitionerTools.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Contact</h4>
              <a href="mailto:info@peptideeducationhub.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-teal-500">
                <Mail className="h-4 w-4" />
                info@peptideeducationhub.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-slate-500 text-center max-w-4xl mx-auto">
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended as medical advice. Peptide therapies should only be administered under the supervision of a qualified healthcare provider.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© {currentYear} Peptide Education Hub. All rights reserved.</p>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for healthcare practitioners
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy"><span className="text-slate-500 hover:text-teal-500 cursor-pointer">Privacy</span></Link>
              <Link href="/terms"><span className="text-slate-500 hover:text-teal-500 cursor-pointer">Terms</span></Link>
              <a href="https://drspeptides.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-500 flex items-center gap-1">
                DrsPeptides.com <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
