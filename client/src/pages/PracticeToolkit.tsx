import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { ArrowLeft, Briefcase, Download, CheckCircle, FileText, Users, DollarSign, Shield } from 'lucide-react';
import { Link } from 'wouter';

export default function PracticeToolkit() {
  usePageTitle("Practice Implementation Toolkit - Start Offering Peptide Therapy", { description: "Complete practice implementation toolkit with 4-phase roadmap, 50+ templates, startup cost breakdown ($10-30K), revenue projections, and ROI analysis. Launch your peptide therapy practice in 6-8 weeks." });

  const implementationSteps = [
    {
      phase: 'Phase 1: Foundation (Weeks 1-2)',
      tasks: [
        'Complete peptide therapy certification',
        'Review FDA regulatory guidance',
        'Establish relationship with 503B compounding pharmacy',
        'Obtain malpractice insurance coverage confirmation',
        'Set up secure peptide storage (refrigeration)',
        'Create patient intake forms and consent templates'
      ]
    },
    {
      phase: 'Phase 2: Clinical Setup (Weeks 3-4)',
      tasks: [
        'Develop standard treatment protocols for top 5 peptides',
        'Create patient education materials',
        'Establish lab monitoring schedules',
        'Set up adverse event reporting system',
        'Train staff on peptide handling and administration',
        'Create emergency response protocols'
      ]
    },
    {
      phase: 'Phase 3: Business Operations (Weeks 5-6)',
      tasks: [
        'Determine pricing structure (cash-pay vs insurance)',
        'Set up billing codes and documentation',
        'Create marketing materials (website, social media)',
        'Develop patient referral program',
        'Establish inventory management system',
        'Create financial projections and ROI analysis'
      ]
    },
    {
      phase: 'Phase 4: Launch & Scale (Week 7+)',
      tasks: [
        'Soft launch with existing patients',
        'Collect feedback and refine protocols',
        'Expand peptide offerings based on demand',
        'Implement patient tracking and outcomes measurement',
        'Scale marketing efforts',
        'Consider hiring additional staff or expanding hours'
      ]
    }
  ];

  const downloadableResources = [
    {
      category: 'Legal & Compliance',
      icon: Shield,
      color: 'blue',
      items: [
        { name: 'Informed Consent Template - Semaglutide', format: 'PDF' },
        { name: 'Informed Consent Template - BPC-157', format: 'PDF' },
        { name: 'Medical Necessity Documentation Template', format: 'DOCX' },
        { name: 'HIPAA Compliance Checklist', format: 'PDF' },
        { name: 'Adverse Event Reporting Form', format: 'PDF' },
        { name: 'State Prescribing Laws Summary', format: 'PDF' }
      ]
    },
    {
      category: 'Clinical Operations',
      icon: FileText,
      color: 'emerald',
      items: [
        { name: 'Patient Intake Questionnaire', format: 'PDF' },
        { name: 'Lab Monitoring Schedule Template', format: 'XLSX' },
        { name: 'Treatment Protocol Checklist', format: 'PDF' },
        { name: 'Dosing Calculator Spreadsheet', format: 'XLSX' },
        { name: 'Patient Progress Tracking Form', format: 'PDF' },
        { name: 'Emergency Response Protocol', format: 'PDF' }
      ]
    },
    {
      category: 'Business & Marketing',
      icon: DollarSign,
      color: 'purple',
      items: [
        { name: 'Pricing Strategy Guide', format: 'PDF' },
        { name: 'ROI Calculator', format: 'XLSX' },
        { name: 'Patient Education Handouts (15 peptides)', format: 'ZIP' },
        { name: 'Social Media Content Templates', format: 'PDF' },
        { name: 'Website Copy Examples', format: 'DOCX' },
        { name: 'Patient Referral Program Template', format: 'PDF' }
      ]
    },
    {
      category: 'Staff Training',
      icon: Users,
      color: 'amber',
      items: [
        { name: 'Staff Training Manual', format: 'PDF' },
        { name: 'Peptide Handling SOP', format: 'PDF' },
        { name: 'Patient Counseling Scripts', format: 'PDF' },
        { name: 'Phone Screening Questionnaire', format: 'PDF' },
        { name: 'Injection Technique Guide', format: 'PDF' },
        { name: 'Storage & Handling Checklist', format: 'PDF' }
      ]
    }
  ];

  const startupCosts = [
    { item: 'Certification & Training', cost: '$2,000 - $5,000', frequency: 'One-time' },
    { item: 'Initial Peptide Inventory', cost: '$3,000 - $10,000', frequency: 'One-time' },
    { item: 'Medical Refrigerator', cost: '$500 - $2,000', frequency: 'One-time' },
    { item: 'Lab Testing Setup', cost: '$1,000 - $3,000', frequency: 'One-time' },
    { item: 'Marketing & Website', cost: '$2,000 - $5,000', frequency: 'One-time' },
    { item: 'Ongoing Peptide Costs', cost: '$1,000 - $5,000/month', frequency: 'Monthly' },
    { item: 'Lab Monitoring', cost: '$500 - $2,000/month', frequency: 'Monthly' },
    { item: 'Total Startup Investment', cost: '$10,000 - $30,000', frequency: 'One-time', highlight: true }
  ];

  const revenueProjections = [
    { scenario: 'Conservative (10 patients/month)', monthly: '$5,000 - $10,000', annual: '$60,000 - $120,000' },
    { scenario: 'Moderate (25 patients/month)', monthly: '$12,500 - $25,000', annual: '$150,000 - $300,000' },
    { scenario: 'Aggressive (50 patients/month)', monthly: '$25,000 - $50,000', annual: '$300,000 - $600,000' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      purple: 'bg-purple-100 text-purple-600',
      amber: 'bg-amber-100 text-amber-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Practice Implementation Toolkit</h1>
              <p className="text-xl text-white/90">Everything you need to start offering peptide therapy in your practice</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-white/80 text-sm">Implementation Phases</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-white/80 text-sm">Downloadable Templates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">6-8</div>
              <div className="text-white/80 text-sm">Weeks to Launch</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">$10-30K</div>
              <div className="text-white/80 text-sm">Startup Investment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Implementation Roadmap */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6-8 Week Implementation Roadmap</h2>
          <div className="space-y-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.phase}</h3>
                <ul className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${getColorClasses(category.color)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">{item.name}</span>
                        <button onClick={() => { alert(`${item.name} (${item.format}) - Templates are available through our Practice Implementation Program. Contact us for access.`); }} className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                          <Download className="w-4 h-4" />
                          <span className="text-xs">{item.format}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Financial Planning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Startup Costs */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Startup Costs</h2>
            <div className="space-y-3">
              {startupCosts.map((cost, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center py-3 ${
                    cost.highlight ? 'border-t-2 border-indigo-500 pt-4 mt-4' : 'border-b border-gray-100'
                  }`}
                >
                  <div>
                    <div className={`${cost.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                      {cost.item}
                    </div>
                    <div className="text-sm text-gray-500">{cost.frequency}</div>
                  </div>
                  <div className={`${cost.highlight ? 'text-xl font-bold text-indigo-600' : 'font-semibold text-gray-900'}`}>
                    {cost.cost}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Projections */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Revenue Projections</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Based on average revenue of $500-1,000 per patient per month
            </p>
            <div className="space-y-4">
              {revenueProjections.map((projection, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-3">{projection.scenario}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Monthly Revenue</div>
                      <div className="font-bold text-emerald-600">{projection.monthly}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Annual Revenue</div>
                      <div className="font-bold text-emerald-600">{projection.annual}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <p className="text-sm text-emerald-800">
                <strong>ROI Potential:</strong> Most practices achieve positive cash flow within 3-6 months 
                and full ROI within 12-18 months with proper implementation.
              </p>
            </div>
          </div>

        </div>

        {/* Success Factors */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Keys to Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Clinical Excellence</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Evidence-based protocols</li>
                <li>• Comprehensive patient monitoring</li>
                <li>• Proper adverse event management</li>
                <li>• Ongoing education and training</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Patient Experience</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Clear communication and education</li>
                <li>• Responsive support</li>
                <li>• Convenient scheduling</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Operations</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Efficient workflows</li>
                <li>• Proper documentation</li>
                <li>• Effective marketing</li>
                <li>• Strong supplier relationships</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
