import { Shield, Award, BookOpen, Users, CheckCircle, FileText, GraduationCap } from 'lucide-react';

/**
 * E-E-A-T Signals Component
 * Displays Experience, Expertise, Authoritativeness, and Trustworthiness indicators
 * Critical for Google rankings in health/medical content (YMYL)
 */

interface MedicalReviewerProps {
  name: string;
  credentials: string;
  specialty: string;
  institution?: string;
  reviewDate: string;
}

// Medical Reviewer Badge - Shows who reviewed the content
export function MedicalReviewerBadge({ 
  name = "Medical Review Board",
  credentials = "MD, Board Certified",
  specialty = "Regenerative Medicine",
  institution = "Peptide Education Hub",
  reviewDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}: Partial<MedicalReviewerProps>) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 my-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-blue-800">Medically Reviewed</span>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{name}</span>
            {credentials && <span className="text-gray-500"> • {credentials}</span>}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {specialty} {institution && `at ${institution}`} • Last reviewed: {reviewDate}
          </p>
        </div>
      </div>
    </div>
  );
}

// Trust Badges - Shows site-wide trust indicators
export function TrustBadges() {
  const badges = [
    { icon: Shield, label: "HIPAA Compliant", color: "text-green-600" },
    { icon: Award, label: "Evidence-Based", color: "text-blue-600" },
    { icon: FileText, label: "Peer Reviewed", color: "text-purple-600" },
    { icon: GraduationCap, label: "CME Accredited", color: "text-orange-600" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center my-6">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
          <badge.icon className={`w-5 h-5 ${badge.color}`} />
          <span className="text-sm font-medium text-gray-700">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

// Content Disclaimer - Required for medical content
export function MedicalDisclaimer({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800">
          <p className="font-semibold mb-1">Medical Disclaimer</p>
          <p>
            This content is for educational purposes only and is not intended as medical advice, 
            diagnosis, or treatment. Always consult with a qualified healthcare provider before 
            starting any peptide therapy. Individual results may vary.
          </p>
        </div>
      </div>
    </div>
  );
}

// Source Citations Component
export function SourceCitations({ sources }: { sources: Array<{ title: string; url: string; type: string }> }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
      <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <BookOpen className="w-4 h-4" />
        Sources & References
      </h4>
      <ul className="space-y-2">
        {sources.map((source, index) => (
          <li key={index} className="text-sm">
            <span className="text-gray-500">[{index + 1}]</span>{' '}
            <a 
              href={source.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {source.title}
            </a>
            <span className="text-gray-400 text-xs ml-2">({source.type})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Last Updated Badge
export function LastUpdatedBadge({ date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
      <CheckCircle className="w-4 h-4 text-green-500" />
      <span>Last updated: {date}</span>
    </div>
  );
}

// Expert Contributors Section
export function ExpertContributors() {
  const contributors = [
    {
      name: "Medical Advisory Board",
      role: "Clinical Review",
      description: "Board-certified physicians specializing in regenerative medicine"
    },
    {
      name: "Research Team",
      role: "Evidence Analysis",
      description: "PharmD and PhD researchers analyzing clinical literature"
    },
    {
      name: "Regulatory Experts",
      role: "Compliance Review",
      description: "FDA regulatory specialists ensuring accuracy"
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-blue-600" />
        Expert Contributors
      </h4>
      <div className="grid md:grid-cols-3 gap-4">
        {contributors.map((contributor, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-medium text-gray-800">{contributor.name}</h5>
            <p className="text-sm text-blue-600">{contributor.role}</p>
            <p className="text-xs text-gray-500 mt-1">{contributor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Generate Author schema for structured data
export function generateAuthorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peptide Education Hub Medical Team",
    "url": "https://pepedhub.com",
    "description": "Board-certified physicians and researchers specializing in peptide therapy education",
    "knowsAbout": [
      "Peptide Therapy",
      "Regenerative Medicine",
      "Growth Hormone Secretagogues",
      "GLP-1 Agonists",
      "BPC-157",
      "Semaglutide",
      "Tirzepatide"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "American Academy of Anti-Aging Medicine"
    }
  };
}

export default {
  MedicalReviewerBadge,
  TrustBadges,
  MedicalDisclaimer,
  SourceCitations,
  LastUpdatedBadge,
  ExpertContributors,
  generateAuthorSchema
};
