import { usePageTitle } from '../hooks/usePageTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Scale, AlertTriangle, FileText, MapPin, Shield, Gavel, Download, ExternalLink } from 'lucide-react';

export default function RegulatoryGuidance() {
  usePageTitle(
    'Regulatory & Legal Guidance for Peptide Therapy',
    'Comprehensive FDA regulations, state-by-state prescribing laws, and legal compliance guide for peptide therapy. 30+ Category 2 peptides, 503A/503B compounding framework, billing codes, and risk mitigation strategies for healthcare providers.'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
              <Scale className="w-10 h-10 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Regulatory & Legal Guidance Center
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive regulatory information to help healthcare providers navigate FDA regulations, state laws, and legal requirements for peptide therapy practice
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">30+</div>
                <div className="text-sm text-blue-100">Category 2 Peptides</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">48</div>
                <div className="text-sm text-blue-100">States Allow Prescribing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">2</div>
                <div className="text-sm text-blue-100">Compounding Frameworks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">2025</div>
                <div className="text-sm text-blue-100">Latest FDA Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Alert Banner */}
      <div className="bg-red-50 border-l-4 border-red-500 p-6 max-w-7xl mx-auto my-8">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-900 mb-2">Important Legal Disclaimer</h3>
            <p className="text-red-800">
              This information is for educational purposes only and does not constitute legal advice. 
              Regulatory requirements vary by jurisdiction and change frequently. Always consult with a 
              qualified healthcare attorney and your state medical board before offering peptide therapy services.
              FDA regulations were last updated July 8, 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="fda-status" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 gap-2">
            <TabsTrigger value="fda-status">FDA Status</TabsTrigger>
            <TabsTrigger value="state-laws">State Laws</TabsTrigger>
            <TabsTrigger value="compounding">Compounding</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="billing">Billing & Coding</TabsTrigger>
            <TabsTrigger value="risk-mitigation">Risk Mitigation</TabsTrigger>
          </TabsList>

          {/* FDA Regulatory Status Tab */}
          <TabsContent value="fda-status" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FDA Regulatory Framework</h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  The FDA regulates peptide therapy through its compounding framework under Sections 503A and 503B 
                  of the Federal Food, Drug, and Cosmetic Act. Understanding these regulations is critical for legal 
                  practice.
                </p>
              </div>

              {/* FDA-Approved Peptides */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-2" />
                  FDA-Approved Peptides (Lowest Risk)
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    These peptides have completed FDA approval process and can be prescribed for approved indications:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Semaglutide</h4>
                      <p className="text-sm text-gray-600">Brand: Ozempic, Wegovy</p>
                      <p className="text-sm text-gray-600">Approved: Type 2 diabetes, weight management</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        FDA APPROVED
                      </span>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Tirzepatide</h4>
                      <p className="text-sm text-gray-600">Brand: Mounjaro, Zepbound</p>
                      <p className="text-sm text-gray-600">Approved: Type 2 diabetes, weight management</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        FDA APPROVED
                      </span>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Tesamorelin</h4>
                      <p className="text-sm text-gray-600">Brand: Egrifta</p>
                      <p className="text-sm text-gray-600">Approved: HIV-associated lipodystrophy</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        FDA APPROVED
                      </span>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Sermorelin</h4>
                      <p className="text-sm text-gray-600">Brand: Geref</p>
                      <p className="text-sm text-gray-600">Approved: Growth hormone deficiency diagnosis</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        FDA APPROVED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2 Peptides - High Risk */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  Category 2 Peptides (Significant Safety Risks)
                </h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4 font-semibold">
                    FDA has identified these peptides as presenting "potential significant safety risks." 
                    Compounding is restricted under 503A. Last updated: September 29, 2023
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        name: 'BPC-157',
                        category: '503A',
                        risks: 'Immunogenicity risk, peptide-related impurities, API characterization complexities. FDA lacks sufficient safety information.'
                      },
                      {
                        name: 'Cathelicidin LL-37',
                        category: '503A',
                        risks: 'Immunogenicity risk, detrimental effects on male reproduction, potentially protumorigenic in some tissues.'
                      },
                      {
                        name: 'Dihexa acetate',
                        category: '503A',
                        risks: 'No human exposure data. Unknown safety profile.'
                      },
                      {
                        name: 'Emideltide (DSIP)',
                        category: '503A',
                        risks: 'Immunogenicity risk, peptide impurities, insufficient safety data.'
                      },
                      {
                        name: 'Epitalon',
                        category: '503A',
                        risks: 'Immunogenicity risk due to aggregation potential, insufficient safety data.'
                      },
                      {
                        name: 'GHK-Cu (injectable)',
                        category: '503A',
                        risks: 'Immunogenicity risk, limited human safety data.'
                      },
                      {
                        name: 'GHRP-2',
                        category: '503B',
                        risks: 'Reports of serious adverse events including death in critically ill, infection, pancreatitis.'
                      },
                      {
                        name: 'GHRP-6',
                        category: '503B',
                        risks: 'Effects on cortisol, increased blood glucose, decreased insulin sensitivity.'
                      },
                      {
                        name: 'Ibutamoren mesylate',
                        category: '503A/503B',
                        risks: 'Potential for congestive heart failure. Trial terminated early due to safety signal.'
                      },
                      {
                        name: 'Ipamorelin acetate',
                        category: '503B',
                        risks: 'Serious adverse events including death when administered intravenously.'
                      },
                      {
                        name: 'Kisspeptin-10',
                        category: '503A',
                        risks: 'Immunogenicity risk, insufficient safety data.'
                      },
                      {
                        name: 'KPV',
                        category: '503A',
                        risks: 'No human exposure data. Unknown safety profile.'
                      },
                      {
                        name: 'Melanotan II',
                        category: '503A',
                        risks: 'Case reports of melanoma, posterior reversible encephalopathy syndrome, priapism.'
                      },
                      {
                        name: 'MOTs-C',
                        category: '503A',
                        risks: 'No human exposure data. Unknown safety profile.'
                      },
                      {
                        name: 'Semax (heptapeptide)',
                        category: '503A',
                        risks: 'Immunogenicity risk, insufficient safety data.'
                      },
                      {
                        name: 'Thymosin beta-4 fragment',
                        category: '503A',
                        risks: 'No human exposure data. Unknown safety profile.'
                      }
                    ].map((peptide, index) => (
                      <div key={index} className="bg-white border border-red-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{peptide.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{peptide.risks}</p>
                          </div>
                          <span className="ml-4 px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full whitespace-nowrap">
                            {peptide.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-red-300">
                    <p className="text-sm text-gray-700">
                      <strong>FDA Standard Language:</strong> "FDA lacks sufficient information to know whether the drug 
                      would cause harm when administered to humans." This means compounding is restricted and carries 
                      significant regulatory and legal risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* GLP-1 Shortage Resolution */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Recent FDA Updates (2025)</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">GLP-1 Shortage Resolution (February 21, 2025)</h4>
                  <p className="text-gray-700 mb-4">
                    FDA determined the shortage of semaglutide and tirzepatide injection products is <strong>RESOLVED</strong>. 
                    This means compounding restrictions are now in effect for these medications.
                  </p>
                  <a 
                    href="https://www.fda.gov/drugs/drug-safety-and-availability/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read FDA Announcement
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Common Safety Concerns */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Safety Concerns for Peptides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Immunogenicity Risk</h4>
                    <p className="text-sm text-gray-700">Body may develop immune response to peptide, reducing effectiveness or causing adverse reactions</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Peptide-Related Impurities</h4>
                    <p className="text-sm text-gray-700">Manufacturing quality issues can lead to contamination or degradation</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">API Characterization Complexities</h4>
                    <p className="text-sm text-gray-700">Difficult to verify purity and identity of active pharmaceutical ingredient</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Aggregation Potential</h4>
                    <p className="text-sm text-gray-700">Peptides may clump together, affecting potency and safety</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Lack of Human Safety Data</h4>
                    <p className="text-sm text-gray-700">Insufficient clinical testing means unknown long-term effects</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Route-Specific Risks</h4>
                    <p className="text-sm text-gray-700">Safety may vary significantly by administration route (IV, SC, IM, nasal)</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* State Laws Tab */}
          <TabsContent value="state-laws" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                State-by-State Prescribing Laws
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Key Finding: 48 States Allow Peptide Prescribing</h3>
                <p className="text-gray-700 mb-4">
                  As of July 2025, peptide therapy is available in 48 states, with 2 states having significant restrictions. 
                  However, each state has unique requirements for prescribing, telehealth, and patient examinations.
                </p>
                <p className="text-sm text-gray-600">
                  Source: LifespanningRx announcement, July 8, 2025
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">State Requirements Vary By:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Telehealth Regulations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Most states require live audio-video consultation (not just phone)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Online questionnaires alone are generally inadequate</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Some states require initial in-person physical examination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Provider must be licensed in patient's state of residence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">"Good Faith Exam" Protocols</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Detailed medical history required</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Assessment of patient's condition and needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Discussion of risks, benefits, and alternatives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Establishment of physician-patient relationship</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Licensing Requirements</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Active medical license in state where patient is located</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>DEA registration for controlled substances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>State medical board registration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Malpractice insurance requirements vary</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Prescribing Restrictions</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Some states limit quantities or duration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Certain peptides may be prohibited in specific states</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Follow-up requirements vary</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Documentation standards differ by state</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    Action Required
                  </h4>
                  <p className="text-gray-700">
                    Before prescribing peptides, you MUST research your specific state's requirements. Contact your 
                    state medical board and consult with a healthcare attorney familiar with your jurisdiction. 
                    Requirements change frequently.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Helpful Resources</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://www.cchpca.org/topic/online-prescribing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Center for Connected Health Policy - State Telehealth Laws
                    </a>
                    <a 
                      href="https://www.fsmb.org/advocacy/state-medical-boards/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Federation of State Medical Boards - Find Your State Board
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Compounding Tab */}
          <TabsContent value="compounding" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compounding Pharmacy Regulations</h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Understanding the difference between 503A and 503B compounding pharmacies is critical for legal 
                  peptide prescribing. Each framework has different requirements and limitations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* 503A */}
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">503A Pharmacies</h3>
                  <p className="text-sm text-gray-600 mb-4">Traditional Compounding Pharmacies</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristics:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>State-licensed pharmacies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Patient-specific prescriptions required</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Must comply with USP &lt;795&gt; and &lt;797&gt;</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>State board of pharmacy regulations apply</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Environmental monitoring required</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Cannot compound Category 2 peptides (as of Jan 2025)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Cannot compound substances without USP monographs until FDA review</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Cannot compound drugs withdrawn from market for safety</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Limited to in-state distribution in most cases</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                      <p className="text-sm text-gray-700">
                        Individual patient prescriptions, local practices, FDA-approved peptides
                      </p>
                    </div>
                  </div>
                </div>

                {/* 503B */}
                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">503B Outsourcing Facilities</h3>
                  <p className="text-sm text-gray-600 mb-4">FDA-Registered Compounding Facilities</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristics:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>FDA-registered facilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Can compound without patient-specific prescriptions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Subject to FDA inspections</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Must comply with current Good Manufacturing Practices (cGMP)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Can distribute interstate</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Higher quality standards (cGMP)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Can compound larger quantities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Interstate shipping allowed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>May compound some Category 2 peptides (GHRP-2, GHRP-6, Ipamorelin)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                      <p className="text-sm text-gray-700">
                        Larger-scale operations, multi-state practices, office-use compounding
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Standards */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Standards & Verification</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">What to Look for in a Compounding Pharmacy:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">FDA-listed API manufacturer</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Certificate of Analysis (COA) provided for each batch</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">HPLC and mass spectrometry testing</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Sterility testing for injectable products</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">PCAB or ACHC accreditation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Proper storage and handling protocols</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Beyond-use dating (BUD) compliance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">Transparent sourcing and pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Red Flags */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Red Flags to Avoid</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">No Certificate of Analysis provided</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">Prices significantly below market</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">International sources without FDA registration</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">Willing to compound Category 2 peptides under 503A</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">No state pharmacy license verification</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">Unclear storage or shipping methods</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">Marketing directly to consumers</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="text-gray-700">Recent FDA warning letters or enforcement actions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Documentation Tab */}
          <TabsContent value="documentation" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                Required Documentation & Templates
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Proper documentation is essential for legal protection, regulatory compliance, and quality patient care. 
                  These templates provide a starting point but should be reviewed by your healthcare attorney.
                </p>
              </div>

              <div className="space-y-6">
                {/* Informed Consent */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Informed Consent Template</h3>
                      <p className="text-sm text-gray-600 mt-1">Required for all peptide therapy patients</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Must Include:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Description of peptide and intended use</li>
                      <li>• FDA regulatory status (approved, investigational, compounded)</li>
                      <li>• Potential benefits and expected outcomes</li>
                      <li>• Known risks and side effects</li>
                      <li>• Alternative treatment options</li>
                      <li>• Cost and insurance coverage information</li>
                      <li>• Patient's right to refuse or discontinue</li>
                      <li>• Contact information for questions or emergencies</li>
                    </ul>
                  </div>
                </div>

                {/* Medical Necessity */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Medical Necessity Documentation</h3>
                      <p className="text-sm text-gray-600 mt-1">Required for insurance billing and legal defense</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Must Include:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Patient's diagnosis (ICD-10 code)</li>
                      <li>• Symptoms and functional limitations</li>
                      <li>• Previous treatments tried and failed</li>
                      <li>• Clinical rationale for peptide therapy</li>
                      <li>• Treatment goals and success metrics</li>
                      <li>• Monitoring plan</li>
                      <li>• Evidence-based references supporting use</li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Agreement */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Patient Treatment Agreement</h3>
                      <p className="text-sm text-gray-600 mt-1">Establishes patient responsibilities and expectations</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Should Include:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Patient agrees to follow prescribed protocol</li>
                      <li>• Patient agrees to report side effects immediately</li>
                      <li>• Patient agrees to attend follow-up appointments</li>
                      <li>• Patient agrees to proper storage and handling</li>
                      <li>• Patient agrees not to share medication</li>
                      <li>• Patient understands off-label or investigational status</li>
                      <li>• Patient financial responsibility acknowledgment</li>
                    </ul>
                  </div>
                </div>

                {/* Pre-Treatment Screening */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Pre-Treatment Screening Questionnaire</h3>
                      <p className="text-sm text-gray-600 mt-1">Identifies contraindications and risk factors</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Should Screen For:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Medical history and current conditions</li>
                      <li>• Current medications and supplements</li>
                      <li>• Allergies and previous adverse reactions</li>
                      <li>• Pregnancy or breastfeeding status</li>
                      <li>• Cancer history or active malignancy</li>
                      <li>• Cardiovascular disease</li>
                      <li>• Kidney or liver disease</li>
                      <li>• Diabetes and blood sugar control</li>
                    </ul>
                  </div>
                </div>

                {/* Progress Notes Template */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Progress Notes Template</h3>
                      <p className="text-sm text-gray-600 mt-1">For ongoing monitoring and documentation</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2"><strong>Should Document:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Date and type of visit (in-person, telehealth)</li>
                      <li>• Patient's subjective report of progress</li>
                      <li>• Objective measurements (weight, vitals, labs)</li>
                      <li>• Assessment of treatment effectiveness</li>
                      <li>• Any side effects or adverse events</li>
                      <li>• Plan for continuing, adjusting, or discontinuing therapy</li>
                      <li>• Patient education provided</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Documentation Best Practices</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Document contemporaneously (at time of service)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Be specific and objective, avoid vague language</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Include clinical reasoning for all decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Obtain signed consent before each new peptide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Keep records for minimum 7 years (varies by state)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Use HIPAA-compliant electronic health record system</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Billing & Coding Tab */}
          <TabsContent value="billing" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance Billing & Coding</h2>
              
              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  Important Note on Insurance Coverage
                </h3>
                <p className="text-gray-700">
                  Most peptide therapy is NOT covered by insurance, especially for off-label or investigational uses. 
                  However, proper coding is still important for superbills, documentation, and potential reimbursement 
                  for FDA-approved indications.
                </p>
              </div>

              <div className="space-y-8">
                {/* CPT Codes */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">CPT Codes for Peptide Administration</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">CPT Code</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Description</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Typical Use</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">96372</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Therapeutic, prophylactic, or diagnostic injection (subcutaneous or intramuscular)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Most peptide injections (SC/IM)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">96374</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Therapeutic, prophylactic, or diagnostic injection (intravenous push)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">IV peptide administration</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">96401</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Chemotherapy administration, subcutaneous or intramuscular</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Rarely applicable (specific peptides only)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">99211-99215</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Office or other outpatient visit</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Evaluation and management services</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">J3490</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Unclassified drugs</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Compounded peptides without specific J-code</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ICD-10 Codes */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common ICD-10 Diagnosis Codes</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-4">
                      Diagnosis codes must reflect the patient's actual medical condition and the medical necessity for treatment:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Weight Management</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• E66.01 - Morbid obesity due to excess calories</li>
                          <li>• E66.09 - Other obesity due to excess calories</li>
                          <li>• E66.1 - Drug-induced obesity</li>
                          <li>• E11.9 - Type 2 diabetes mellitus without complications</li>
                          <li>• E78.5 - Hyperlipidemia, unspecified</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Injury & Recovery</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• S46.011A - Strain of muscle(s) and tendon(s) of the rotator cuff</li>
                          <li>• M25.511 - Pain in right shoulder</li>
                          <li>• M79.1 - Myalgia</li>
                          <li>• S83.511A - Sprain of anterior cruciate ligament of right knee</li>
                          <li>• M76.60 - Achilles tendinitis, unspecified leg</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cognitive & Neurological</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• F41.1 - Generalized anxiety disorder</li>
                          <li>• F43.10 - Post-traumatic stress disorder, unspecified</li>
                          <li>• G93.3 - Postviral fatigue syndrome</li>
                          <li>• R41.840 - Attention and concentration deficit</li>
                          <li>• F06.8 - Other specified mental disorders due to known physiological condition</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Endocrine & Metabolic</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• E23.0 - Hypopituitarism</li>
                          <li>• E34.8 - Other specified endocrine disorders</li>
                          <li>• E89.3 - Postprocedural hypopituitarism</li>
                          <li>• R53.82 - Chronic fatigue, unspecified</li>
                          <li>• E88.89 - Other specified metabolic disorders</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cash Pay Pricing */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cash Pay Pricing Strategies</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Since most peptide therapy is self-pay, transparent pricing and value communication are essential:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Pricing Models:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Per-injection pricing:</strong> Simple, easy to understand (e.g., $50-150 per injection)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Monthly subscription:</strong> Predictable revenue, better patient retention (e.g., $300-800/month)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Program-based pricing:</strong> Includes consultation, medication, monitoring (e.g., $1,500-3,000 for 3-month program)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>Tiered packages:</strong> Basic, premium, VIP levels with different services included</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Value Communication:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Emphasize quality (pharmaceutical-grade, tested, sterile)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Highlight medical supervision and monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Compare to cost of alternatives (surgery, long-term medications)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Offer payment plans or financing options</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Superbill Template */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Superbill for Patient Reimbursement</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Provide patients with a superbill they can submit to their insurance for potential out-of-network reimbursement:
                    </p>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download Superbill Template
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                      Superbill should include: Provider NPI, Tax ID, patient demographics, date of service, CPT codes, 
                      ICD-10 codes, charges, and diagnosis description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Risk Mitigation Tab */}
          <TabsContent value="risk-mitigation" className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Gavel className="w-8 h-8 text-red-600 mr-3" />
                Legal Risk Mitigation Strategies
              </h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Offering peptide therapy carries regulatory and legal risks. These strategies can help minimize your exposure 
                  while providing quality patient care.
                </p>
              </div>

              <div className="space-y-8">
                {/* Risk Assessment */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Your Risk Level</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Lower Risk
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• FDA-approved peptides only</li>
                        <li>• On-label indications</li>
                        <li>• 503B pharmacy sources</li>
                        <li>• Comprehensive documentation</li>
                        <li>• Medical necessity established</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
                      <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Moderate Risk
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• FDA-approved peptides off-label</li>
                        <li>• Non-Category 2 compounded peptides</li>
                        <li>• 503A pharmacy sources</li>
                        <li>• Robust informed consent</li>
                        <li>• Evidence-based protocols</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Higher Risk
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Category 2 peptides</li>
                        <li>• Investigational peptides</li>
                        <li>• Unverified sources</li>
                        <li>• Inadequate documentation</li>
                        <li>• No medical necessity</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legal Protection Best Practices</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">1. Establish Medical Necessity</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Document clear diagnosis with ICD-10 code</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Show that conventional treatments have been tried or are inappropriate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Cite evidence-based literature supporting peptide use</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Establish measurable treatment goals</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">2. Obtain Comprehensive Informed Consent</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Clearly state FDA regulatory status (approved, off-label, investigational)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Disclose all known risks, including lack of long-term safety data</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Explain alternative treatment options</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Use plain language, not medical jargon</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Allow time for questions and discussion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Obtain new consent for each different peptide</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">3. Use Only Verified Suppliers</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Verify 503A or 503B status with state board or FDA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Require Certificate of Analysis for every batch</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Confirm API manufacturer is FDA-listed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Check for recent FDA warning letters or enforcement actions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Maintain records of all supplier documentation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">4. Implement Robust Monitoring Protocols</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Baseline labs and vitals before starting therapy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Regular follow-up appointments (not just refill requests)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Periodic lab monitoring based on peptide-specific risks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Document patient's response to therapy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          <span>Have clear protocols for managing adverse events</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">5. Maintain Impeccable Documentation</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Document every patient encounter contemporaneously</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Include clinical reasoning for all treatment decisions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Keep signed informed consent forms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Maintain copies of all supplier documentation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Document patient education provided</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>Record all adverse events and how they were managed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Professional Liability Insurance */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Liability Insurance</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      <strong>Critical:</strong> Verify that your malpractice insurance covers peptide therapy. Many policies 
                      have exclusions for investigational treatments or off-label use.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Contact your insurance carrier BEFORE offering peptide therapy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Request written confirmation of coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Disclose all peptides you plan to prescribe</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Consider additional coverage or rider if needed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-2">•</span>
                        <span>Review policy annually as your practice evolves</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* When to Consult an Attorney */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">When to Consult a Healthcare Attorney</h3>
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                    <p className="text-gray-700 mb-4 font-semibold">
                      Consult with a qualified healthcare attorney BEFORE:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Starting a peptide therapy practice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Prescribing Category 2 peptides</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Offering peptide therapy via telemedicine across state lines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Receiving any communication from FDA or state medical board</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Experiencing an adverse event or patient complaint</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Changing your practice structure or business model</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      An ounce of prevention is worth a pound of cure. Legal fees for proactive consultation are far less 
                      than defending against regulatory action or malpractice claims.
                    </p>
                  </div>
                </div>

                {/* FDA Enforcement Trends */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Recent FDA Enforcement Trends (2025)</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      The FDA has increased enforcement actions against peptide therapy providers in 2025. Key trends:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>GLP-1 Compounding:</strong> Warning letters to telehealth companies advertising compounded semaglutide/tirzepatide after shortage resolution (Feb 2025)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Unapproved Products:</strong> Enforcement against online sellers of unapproved peptides (USApeptide.com warning letter, Feb 2025)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Category 2 Restrictions:</strong> Tightened enforcement of interim policy on bulk drug substances (Jan 2025)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Advertising Claims:</strong> Targeting misleading marketing claims about peptide benefits</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      Stay informed about FDA enforcement actions at: 
                      <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                        FDA Warning Letters Database
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Guidance?</h2>
          <p className="text-xl text-blue-100 mb-8">
            This information is educational only. For specific legal advice about your practice, 
            consult with a qualified healthcare attorney in your jurisdiction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/training"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Find Training & Certification Programs
            </a>
            <a 
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Download Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
