import { usePageTitle } from '../hooks/usePageTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Building2, Shield, AlertTriangle, CheckCircle, ExternalLink, Search, FileCheck, XCircle, ArrowLeft} from "lucide-react";
import { Link } from "wouter";

export default function SupplierDirectory() {
  usePageTitle('Supplier Directory & Quality Assurance Guide', { description: 'Verified compounding pharmacy directory with quality assurance standards. Access FDA\'s 93 registered 503B facilities, learn COA interpretation, identify red flags, and ensure medical-grade peptide sourcing for your practice.' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Home Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Home
            </a>
          </Link>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Peptide Education Hub</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
              <Building2 className="w-10 h-10 text-green-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Supplier Directory & Quality Assurance
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Verified compounding pharmacies, quality standards, and red flags to help you source pharmaceutical-grade peptides safely and legally
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300">93</div>
                <div className="text-sm text-green-100">FDA-Registered 503B Facilities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300">2</div>
                <div className="text-sm text-green-100">Compounding Frameworks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300">10+</div>
                <div className="text-sm text-green-100">Quality Standards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300">2025</div>
                <div className="text-sm text-green-100">Latest FDA Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Alert */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 max-w-7xl mx-auto my-8">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Due Diligence is Critical</h3>
            <p className="text-yellow-800">
              Not all compounding pharmacies meet quality standards. Some have received FDA warning letters for using 
              non-pharmaceutical-grade ingredients. Always verify suppliers before ordering. Updated 11/26/2025.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="verification" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="verification">Verification Process</TabsTrigger>
            <TabsTrigger value="503b-directory">503B Directory</TabsTrigger>
            <TabsTrigger value="quality-standards">Quality Standards</TabsTrigger>
            <TabsTrigger value="red-flags">Red Flags</TabsTrigger>
            <TabsTrigger value="coa-guide">COA Guide</TabsTrigger>
          </TabsList>

          {/* Verification Process Tab */}
          <TabsContent value="verification" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10-Step Verification Process</h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Before working with any compounding pharmacy, complete this verification process to ensure quality, 
                  safety, and regulatory compliance. This protects both you and your patients.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Verify 503B Registration on FDA Website',
                    description: 'Check the official FDA database to confirm the facility is currently registered as a 503B outsourcing facility. Registration must be renewed annually.',
                    action: 'Visit FDA Registered Outsourcing Facilities',
                    link: 'https://www.fda.gov/drugs/human-drug-compounding/registered-outsourcing-facilities'
                  },
                  {
                    step: 2,
                    title: 'Check Inspection History',
                    description: 'Review the facility\'s inspection history. Look for recent inspections, Form 483 issuances (violations found), and any enforcement actions.',
                    action: 'Search FDA Inspection Database',
                    link: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations'
                  },
                  {
                    step: 3,
                    title: 'Search for Warning Letters',
                    description: 'FDA issues warning letters for serious violations. Any facility with a recent warning letter should be avoided until issues are resolved.',
                    action: 'Search Warning Letters',
                    link: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters'
                  },
                  {
                    step: 4,
                    title: 'Request Certificate of Analysis (COA)',
                    description: 'Ask for a COA for a sample batch. This should include HPLC testing, mass spectrometry, sterility testing (for injectables), and endotoxin testing.',
                    action: null,
                    link: null
                  },
                  {
                    step: 5,
                    title: 'Verify API Manufacturer',
                    description: 'Confirm the Active Pharmaceutical Ingredient (API) manufacturer is FDA-listed. Request documentation showing the source of raw materials.',
                    action: null,
                    link: null
                  },
                  {
                    step: 6,
                    title: 'Check for PCAB or ACHC Accreditation',
                    description: 'Pharmacy Compounding Accreditation Board (PCAB) or Accreditation Commission for Health Care (ACHC) accreditation indicates higher quality standards.',
                    action: 'PCAB Accredited Pharmacies',
                    link: 'https://www.achc.org/'
                  },
                  {
                    step: 7,
                    title: 'Confirm Sterility Testing Protocols',
                    description: 'For injectable peptides, verify the pharmacy performs USP &lt;71&gt; sterility testing and USP &lt;85&gt; endotoxin testing on every batch.',
                    action: null,
                    link: null
                  },
                  {
                    step: 8,
                    title: 'Review Storage and Shipping Protocols',
                    description: 'Peptides are temperature-sensitive. Confirm proper cold-chain storage (2-8°C for most peptides) and insulated shipping with temperature monitoring.',
                    action: null,
                    link: null
                  },
                  {
                    step: 9,
                    title: 'Verify State Pharmacy License',
                    description: 'Check with the state board of pharmacy to confirm the facility holds a valid license and has no disciplinary actions.',
                    action: 'Find State Boards',
                    link: 'https://nabp.pharmacy/boards-of-pharmacy/'
                  },
                  {
                    step: 10,
                    title: 'Check References from Other Providers',
                    description: 'Ask for references from other healthcare providers who use the pharmacy. Contact them to verify quality, reliability, and customer service.',
                    action: null,
                    link: null
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-3">{item.description}</p>
                        {item.action && item.link && (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
                          >
                            {item.action}
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  Best Practice: Document Everything
                </h3>
                <p className="text-gray-700 text-sm">
                  Maintain a file for each compounding pharmacy you work with, including: registration verification, 
                  COAs, inspection reports, correspondence, and quality documentation. This protects you in case of 
                  regulatory inquiry or patient adverse event.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* 503B Directory Tab */}
          <TabsContent value="503b-directory" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Search className="w-8 h-8 text-green-600 mr-3" />
                FDA-Registered 503B Outsourcing Facilities
              </h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">93 Registered Facilities (as of 11/26/2025)</h3>
                <p className="text-gray-700 mb-4">
                  The FDA maintains an official, searchable database of all registered 503B outsourcing facilities. 
                  This is the ONLY authoritative source for verification. The list is updated weekly.
                </p>
                <a 
                  href="https://www.fda.gov/drugs/human-drug-compounding/registered-outsourcing-facilities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search FDA Official Database
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Use the FDA Database</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">1.</span>
                      <span>Visit the FDA Registered Outsourcing Facilities page</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">2.</span>
                      <span>Use the search box to find a specific facility by name or location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">3.</span>
                      <span>Review the "Last Inspection" column - more recent is better</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">4.</span>
                      <span>Check "Form 483 Issued?" - "No" is ideal, "Yes" means violations were found</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">5.</span>
                      <span>Look at "Action Based on Last Inspection" - "Closed" is good, "Open" or "Warning Letter" is concerning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">6.</span>
                      <span>Verify "Most Recent Registration Date" is current year (registration expires annually)</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Inspection Status</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">Low Risk</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Recently inspected</li>
                      <li>• No Form 483 issued</li>
                      <li>• Status: "Closed"</li>
                      <li>• No recalls</li>
                      <li>• Current registration</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                      <h4 className="font-semibold text-yellow-900">Moderate Risk</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Form 483 issued</li>
                      <li>• Status: "Open"</li>
                      <li>• Minor violations found</li>
                      <li>• Facility responding to FDA</li>
                      <li>• Use with caution</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <XCircle className="w-6 h-6 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-900">High Risk - AVOID</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Warning letter issued</li>
                      <li>• Multiple Form 483s</li>
                      <li>• Recalls conducted</li>
                      <li>• Serious violations</li>
                      <li>• Do not use</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Major National 503B Providers</h3>
                <p className="text-gray-700 mb-4">
                  These are some of the larger, well-established 503B outsourcing facilities. Always verify current 
                  status on the FDA website before ordering.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Empower Pharmacy',
                      location: 'Houston, TX',
                      website: 'https://www.empowerpharmacy.com/',
                      note: 'Nation\'s largest 503A + 503B facility',
                      status: 'Verify on FDA site'
                    },
                    {
                      name: 'Olympia Pharmaceuticals',
                      location: 'Various locations',
                      website: 'https://www.olympiapharmacy.com/',
                      note: '503A + 503B dual registration',
                      status: 'Verify on FDA site'
                    },
                    {
                      name: 'AnazaoHealth Corporation',
                      location: 'Las Vegas, NV',
                      website: null,
                      note: 'Registered since 2014',
                      status: 'Check inspection history'
                    }
                  ].map((facility, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{facility.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{facility.location}</p>
                          <p className="text-sm text-gray-700 mt-2">{facility.note}</p>
                          <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                            {facility.status}
                          </span>
                        </div>
                        {facility.website && (
                          <a 
                            href={facility.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-green-600 hover:text-green-800"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-6">
                  <strong>Disclaimer:</strong> This is not an endorsement. Always complete the full 10-step verification 
                  process before working with any compounding pharmacy, regardless of size or reputation.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Quality Standards Tab */}
          <TabsContent value="quality-standards" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Quality Standards & Testing Requirements
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Pharmaceutical-grade peptides must meet rigorous quality standards. Understanding these standards 
                  helps you evaluate supplier quality and protect patient safety.
                </p>
              </div>

              <div className="space-y-8">
                {/* USP Standards */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">USP Compounding Standards</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">USP &lt;795&gt; - Non-Sterile Compounding</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Standards for compounding non-sterile preparations (oral, topical, nasal)
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Personnel training and qualification</li>
                        <li>• Facility and equipment standards</li>
                        <li>• Component quality and handling</li>
                        <li>• Beyond-use dating (BUD)</li>
                        <li>• Labeling requirements</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">USP &lt;797&gt; - Sterile Compounding</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Critical standards for injectable peptides (subcutaneous, intramuscular, intravenous)
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Cleanroom classification (ISO 5, 7, 8)</li>
                        <li>• Environmental monitoring</li>
                        <li>• Sterility testing (USP &lt;71&gt;)</li>
                        <li>• Endotoxin testing (USP &lt;85&gt;)</li>
                        <li>• Personnel garbing and aseptic technique</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testing Requirements */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Required Testing for Injectable Peptides</h3>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">1. Identity Testing (HPLC)</h4>
                      <p className="text-sm text-gray-700">
                        High-Performance Liquid Chromatography confirms the peptide is what it claims to be. 
                        Should match reference standard within 98-102% purity.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">2. Purity Testing (Mass Spectrometry)</h4>
                      <p className="text-sm text-gray-700">
                        Mass spec identifies impurities, degradation products, and confirms molecular weight. 
                        Pharmaceutical-grade should be ≥95% pure.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">3. Sterility Testing (USP &lt;71&gt;)</h4>
                      <p className="text-sm text-gray-700">
                        Confirms absence of viable microorganisms. Required for all injectable products. 
                        Takes 14 days to complete.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">4. Endotoxin Testing (USP &lt;85&gt;)</h4>
                      <p className="text-sm text-gray-700">
                        Detects bacterial endotoxins that can cause fever and inflammation. Must be &lt;0.5 EU/mL 
                        for most injectable products.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">5. Potency Testing</h4>
                      <p className="text-sm text-gray-700">
                        Confirms the actual concentration matches the labeled concentration. Should be within 90-110% 
                        of stated potency.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">6. pH Testing</h4>
                      <p className="text-sm text-gray-700">
                        Ensures the solution pH is appropriate for injection (typically 5.0-8.0). Incorrect pH can 
                        cause pain, tissue damage, or degradation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accreditations */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Accreditations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">PCAB (Pharmacy Compounding Accreditation Board)</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Voluntary accreditation program that verifies compliance with USP standards and quality systems.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• On-site inspections</li>
                        <li>• Quality management systems review</li>
                        <li>• Personnel qualifications verification</li>
                        <li>• Facility and equipment assessment</li>
                      </ul>
                      <a 
                        href="https://www.achc.org/pcab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-green-600 hover:text-green-800 text-sm font-semibold"
                      >
                        Learn More About PCAB
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">ACHC (Accreditation Commission for Health Care)</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Accredits compounding pharmacies for compliance with federal and state regulations.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Comprehensive quality review</li>
                        <li>• Regulatory compliance verification</li>
                        <li>• Patient safety standards</li>
                        <li>• Continuous quality improvement</li>
                      </ul>
                      <a 
                        href="https://www.achc.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800 text-sm font-semibold"
                      >
                        Learn More About ACHC
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Storage and Handling */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Storage & Handling Requirements</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Storage Conditions</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Lyophilized (powder):</strong> Store at -20°C (freezer) or 2-8°C (refrigerator)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Reconstituted (liquid):</strong> Store at 2-8°C (refrigerator), use within 30 days</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Protect from light:</strong> Use amber vials or store in dark</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Avoid freeze-thaw cycles:</strong> Degrades peptides</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Shipping Requirements</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Insulated packaging:</strong> Styrofoam or thermal bags</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Ice packs or dry ice:</strong> Maintain 2-8°C during transit</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Temperature monitoring:</strong> Data loggers to verify cold chain</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Expedited shipping:</strong> 1-2 day delivery to minimize exposure</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Red Flags Tab */}
          <TabsContent value="red-flags" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                Red Flags & Warning Signs
              </h2>
              
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-red-900 mb-2">Critical: Avoid These Suppliers</h3>
                <p className="text-red-800">
                  If you encounter ANY of these red flags, do not order from that supplier. These indicate serious 
                  quality, safety, or legal issues that put you and your patients at risk.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    category: 'Regulatory Red Flags',
                    color: 'red',
                    flags: [
                      'Not registered as 503A or 503B facility',
                      'Recent FDA warning letter (within past 2 years)',
                      'Multiple Form 483 violations',
                      'Suspended or revoked state pharmacy license',
                      'Willing to compound Category 2 peptides under 503A',
                      'Claims to be "FDA-approved" (compounded drugs are never FDA-approved)',
                      'Operates from outside the United States without FDA registration'
                    ]
                  },
                  {
                    category: 'Quality Red Flags',
                    color: 'orange',
                    flags: [
                      'Cannot or will not provide Certificate of Analysis (COA)',
                      'COA shows purity below 95%',
                      'No sterility testing for injectable products',
                      'No endotoxin testing for injectable products',
                      'Uses "research grade" or "not for human use" peptides',
                      'Cannot verify API manufacturer or source',
                      'No cleanroom or ISO classification for sterile compounding',
                      'Expired or missing beyond-use dates (BUD)'
                    ]
                  },
                  {
                    category: 'Business Practice Red Flags',
                    color: 'yellow',
                    flags: [
                      'Prices significantly below market (50%+ cheaper)',
                      'Sells directly to consumers without prescription',
                      'Markets peptides for "research only" but clearly intended for human use',
                      'Pressure tactics or "limited time offers"',
                      'No pharmacist available for consultation',
                      'Poor communication or unresponsive customer service',
                      'No clear return or complaint policy',
                      'Accepts cryptocurrency only (avoiding banking oversight)'
                    ]
                  },
                  {
                    category: 'Shipping & Handling Red Flags',
                    color: 'blue',
                    flags: [
                      'Ships without temperature control (no ice packs)',
                      'No insulated packaging for temperature-sensitive peptides',
                      'Takes weeks to ship (peptides may degrade)',
                      'Arrives warm or thawed',
                      'No temperature monitoring during shipping',
                      'Packaging appears unprofessional or reused',
                      'Vials are unlabeled or poorly labeled'
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className={`bg-${section.color}-50 border-2 border-${section.color}-300 rounded-lg p-6`}>
                    <h3 className={`text-xl font-semibold text-${section.color}-900 mb-4`}>{section.category}</h3>
                    <ul className="space-y-2">
                      {section.flags.map((flag, flagIndex) => (
                        <li key={flagIndex} className="flex items-start text-gray-700">
                          <XCircle className={`w-5 h-5 text-${section.color}-600 mr-2 flex-shrink-0 mt-0.5`} />
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-900 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What To Do If You Encounter Red Flags</h3>
                <ol className="space-y-2 text-gray-200">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>Stop ordering immediately - do not use products already received</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>Document all red flags with screenshots, emails, and product photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>Report to FDA MedWatch if you suspect counterfeit or contaminated products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span>Report to your state board of pharmacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span>Notify any patients who received products from that supplier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">6.</span>
                    <span>Consult with your healthcare attorney about potential liability</span>
                  </li>
                </ol>
                <a 
                  href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Report to FDA MedWatch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </TabsContent>

          {/* COA Guide Tab */}
          <TabsContent value="coa-guide" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileCheck className="w-8 h-8 text-purple-600 mr-3" />
                Certificate of Analysis (COA) Interpretation Guide
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  A Certificate of Analysis (COA) is the most important quality document for peptides. It proves the 
                  product has been tested and meets specifications. Learn how to read and interpret COAs to verify quality.
                </p>
              </div>

              <div className="space-y-8">
                {/* What is a COA */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is a Certificate of Analysis?</h3>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      A COA is a document issued by a testing laboratory that certifies a product meets its specifications. 
                      For peptides, it should include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Product name and batch/lot number</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Manufacturing date and expiration date</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Test methods used (HPLC, mass spec, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Test results with specifications</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Purity percentage</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Sterility and endotoxin results (for injectables)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Laboratory name and signature</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Date of testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How to Read COA */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Read a COA: Key Sections</h3>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">1. Product Identification</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>What to check:</strong> Product name matches what you ordered, batch/lot number is unique
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> "Semaglutide Acetate, Batch #SEM-2025-001"
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">2. Purity (HPLC)</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>What to check:</strong> Purity should be ≥95% for pharmaceutical-grade, ≥98% for highest quality
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> "Purity: 98.2% (Specification: ≥95%)" = <span className="text-green-600 font-semibold">PASS</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Red flag:</strong> "Purity: 92.1%" = <span className="text-red-600 font-semibold">FAIL</span>
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">3. Identity (Mass Spectrometry)</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>What to check:</strong> Molecular weight matches expected value (within 1-2 Da)
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> "Observed MW: 4113.5 Da (Expected: 4113.6 Da)" = <span className="text-green-600 font-semibold">PASS</span>
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">4. Sterility (USP &lt;71&gt;)</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>What to check:</strong> Must show "No growth" or "Sterile" for injectable products
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> "Sterility: No growth detected after 14 days" = <span className="text-green-600 font-semibold">PASS</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Red flag:</strong> No sterility testing listed for injectable = <span className="text-red-600 font-semibold">MAJOR CONCERN</span>
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">5. Endotoxin (USP &lt;85&gt;)</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>What to check:</strong> Must be &lt;0.5 EU/mL for most injectables
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> "Endotoxin: &lt;0.25 EU/mL (Specification: &lt;0.5 EU/mL)" = <span className="text-green-600 font-semibold">PASS</span>
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">6. Potency/Concentration</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>What to check:</strong> Should be 90-110% of labeled concentration
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> "Potency: 5.1 mg/mL (Label claim: 5.0 mg/mL, 102%)" = <span className="text-green-600 font-semibold">PASS</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flags in COAs */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">COA Red Flags</h3>
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>Generic or template COA:</strong> Same COA used for multiple batches (batch number doesn't match your product)</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>No laboratory information:</strong> COA doesn't identify the testing lab or provide contact info</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>Missing critical tests:</strong> No sterility or endotoxin testing for injectables</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>Out-of-spec results:</strong> Purity &lt;95%, potency outside 90-110%, endotoxin &gt;0.5 EU/mL</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>Suspicious dates:</strong> COA dated months before or after manufacturing date</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>Poor quality document:</strong> Blurry, pixelated, or appears edited/forged</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span><strong>No signature or stamp:</strong> COA not signed by laboratory director or quality manager</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Verifying COA Authenticity */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Verifying COA Authenticity</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4 font-semibold">
                      Don't just accept a COA at face value. Verify it's legitimate:
                    </p>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">1.</span>
                        <span>Contact the testing laboratory directly to confirm they issued the COA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">2.</span>
                        <span>Verify the batch number on your product vial matches the COA batch number</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">3.</span>
                        <span>Check that the testing date is recent (within 6 months of manufacturing)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">4.</span>
                        <span>Request a new COA for each batch you order (don't accept old COAs)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">5.</span>
                        <span>If in doubt, send a sample to an independent lab for verification testing</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Supplier Quality?</h2>
          <p className="text-xl text-green-100 mb-8">
            Use our comprehensive verification process to ensure you're working with legitimate, 
            high-quality compounding pharmacies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.fda.gov/drugs/human-drug-compounding/registered-outsourcing-facilities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <Search className="w-5 h-5 mr-2" />
              Search FDA Database
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="/regulatory-guidance"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Regulatory Guidance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
