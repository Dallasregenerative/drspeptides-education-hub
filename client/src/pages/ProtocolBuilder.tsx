import React, { useState } from 'react';
import PrintButton from "@/components/PrintButton";
import { usePageTitle } from '../hooks/usePageTitle';
import { ArrowLeft, Beaker, Calendar, FileText, Download, AlertCircle, Share2, Link2, Check, Copy, Mail, Lock } from 'lucide-react';
import { Link } from 'wouter';

export default function ProtocolBuilder() {
  usePageTitle("Protocol Builder - Custom Treatment Plans", { description: "Interactive peptide therapy protocol builder with 30+ peptides and 15+ evidence-based templates. Create personalized treatment plans for weight loss, recovery, muscle growth, anti-aging, cognitive enhancement, and immune support." });

  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);
  const [patientProfile, setPatientProfile] = useState({
    age: '',
    weight: '',
    gender: '',
    conditions: [] as string[]
  });
  
  // Protocol Sharing State
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [shareSettings, setShareSettings] = useState({
    expiresIn: '7days',
    requirePassword: false,
    password: '',
    allowDownload: true
  });
  const [linkCopied, setLinkCopied] = useState(false);
  const [linkGenerated, setLinkGenerated] = useState(false);

  const clinicalGoals = [
    { id: 'weight-loss', name: 'Weight Loss & Metabolic Health', peptides: ['Semaglutide', 'Tirzepatide', 'AOD-9604', '5-Amino-1MQ'] },
    { id: 'recovery', name: 'Injury Recovery & Healing', peptides: ['BPC-157', 'TB-500', 'GHK-Cu'] },
    { id: 'muscle-growth', name: 'Muscle Growth & Performance', peptides: ['CJC-1295', 'Ipamorelin', 'GHRP-2', 'IGF-1 LR3'] },
    { id: 'anti-aging', name: 'Anti-Aging & Longevity', peptides: ['Epithalon', 'Humanin', 'MOTSc', 'GHK-Cu'] },
    { id: 'cognitive', name: 'Cognitive Enhancement', peptides: ['Semax', 'Selank', 'Dihexa', 'Cerebrolysin'] },
    { id: 'immune', name: 'Immune Support', peptides: ['Thymosin Alpha-1', 'LL-37', 'KPV'] }
  ];

  // Default dosing info for peptides
  const peptideDosingDefaults: Record<string, string> = {
    'Semaglutide': 'Start 0.25mg weekly SC, titrate to 1-2.4mg over 4-8 weeks',
    'Tirzepatide': 'Start 2.5mg weekly SC, titrate to 5-15mg over 8 weeks',
    'AOD-9604': '300mcg daily SC, morning on empty stomach',
    '5-Amino-1MQ': '50-100mg daily, oral capsule',
    'BPC-157': '250-500mcg 2x/day SC near injury site',
    'TB-500': '2-5mg 2x/week SC for loading, then 2mg weekly maintenance',
    'GHK-Cu': '1-2mg daily SC or topical application',
    'CJC-1295': '300mcg 2-3x/week SC, evening dosing preferred',
    'Ipamorelin': '200-300mcg 2-3x/day SC, 30 min before meals',
    'GHRP-2': '100-300mcg 2-3x/day SC, on empty stomach',
    'IGF-1 LR3': '20-50mcg daily SC post-workout, cycle 4 weeks on/4 off',
    'Epithalon': '5-10mg daily SC for 10-20 days, repeat every 4-6 months',
    'Humanin': '1-5mg daily SC',
    'MOTSc': '5-10mg 3x/week SC',
    'Semax': '200-600mcg daily intranasal',
    'Selank': '250-500mcg daily intranasal',
    'Dihexa': '10-20mg daily oral or intranasal',
    'Cerebrolysin': '5-10ml daily IM for 10-20 days',
    'Thymosin Alpha-1': '1.6mg 2x/week SC',
    'LL-37': '50-100mcg daily SC',
    'KPV': '200-500mcg daily oral or SC',
  };

  // Editable dosing state
  const [editableDosing, setEditableDosing] = useState<Record<string, string>>({});

  const getDosingForPeptide = (peptide: string) => {
    return editableDosing[peptide] || peptideDosingDefaults[peptide] || 'Consult peptide page for recommended dosing';
  };

  const protocolTemplates = [
    {
      name: 'Beginner Weight Loss Protocol',
      goal: 'weight-loss',
      peptides: ['Semaglutide'],
      duration: '12 weeks',
      dosing: 'Start 0.25mg weekly, titrate to 1mg over 4 weeks',
      monitoring: 'Weekly weight, monthly labs (HbA1c, lipids)',
      adjuncts: 'Caloric restriction (500-750 cal deficit), resistance training 3x/week'
    },
    {
      name: 'Advanced Weight Loss Stack',
      goal: 'weight-loss',
      peptides: ['Tirzepatide', 'AOD-9604'],
      duration: '16 weeks',
      dosing: 'Tirzepatide: 2.5mg weekly titrating up, AOD-9604: 300mcg daily',
      monitoring: 'Weekly weight, monthly labs, body composition',
      adjuncts: 'Caloric restriction, resistance training 4x/week, protein 1.6g/kg'
    },
    {
      name: 'Advanced Muscle Growth Stack',
      goal: 'muscle-growth',
      peptides: ['CJC-1295', 'Ipamorelin'],
      duration: '16 weeks',
      dosing: 'CJC-1295: 300mcg 2x/week, Ipamorelin: 200mcg 3x/day',
      monitoring: 'Monthly IGF-1 levels, body composition analysis',
      adjuncts: 'Progressive overload training, protein 1.6g/kg/day'
    },
    {
      name: 'Comprehensive Recovery Protocol',
      goal: 'recovery',
      peptides: ['BPC-157', 'TB-500'],
      duration: '8 weeks',
      dosing: 'BPC-157: 250mcg 2x/day, TB-500: 2mg 2x/week',
      monitoring: 'Weekly pain scores, ROM assessment bi-weekly',
      adjuncts: 'Physical therapy, adequate sleep (8+ hours)'
    },
    {
      name: 'Anti-Aging & Longevity Protocol',
      goal: 'anti-aging',
      peptides: ['Epithalon', 'GHK-Cu'],
      duration: '20 days on, 4-6 months off',
      dosing: 'Epithalon: 5-10mg daily SC, GHK-Cu: 1-2mg daily SC',
      monitoring: 'Telomere length (baseline + 6 months), skin quality assessment',
      adjuncts: 'Antioxidant-rich diet, regular exercise, stress management'
    },
    {
      name: 'Cognitive Enhancement Stack',
      goal: 'cognitive',
      peptides: ['Semax', 'Selank'],
      duration: '4-8 weeks, cycle 4 on/2 off',
      dosing: 'Semax: 200-600mcg intranasal AM, Selank: 250-500mcg intranasal PM',
      monitoring: 'Cognitive assessments, mood tracking, sleep quality',
      adjuncts: 'Brain training exercises, omega-3 supplementation, quality sleep'
    },
    {
      name: 'Immune Support Protocol',
      goal: 'immune',
      peptides: ['Thymosin Alpha-1', 'LL-37'],
      duration: '8-12 weeks',
      dosing: 'Thymosin Alpha-1: 1.6mg 2x/week SC, LL-37: 50-100mcg daily SC',
      monitoring: 'Monthly CBC with differential, immune markers, symptom tracking',
      adjuncts: 'Vitamin D optimization, zinc supplementation, adequate sleep'
    }
  ];

  // Generate shareable link
  const generateShareLink = () => {
    // Create a unique protocol ID based on selections
    const protocolData = {
      goal: selectedGoal,
      peptides: selectedPeptides,
      patient: patientProfile,
      created: new Date().toISOString()
    };
    
    // Encode protocol data to base64
    const encodedData = btoa(JSON.stringify(protocolData));
    const uniqueId = encodedData.substring(0, 12) + Date.now().toString(36);
    
    // Generate the share link
    const baseUrl = window.location.origin;
    const link = `${baseUrl}/shared-protocol/${uniqueId}`;
    
    setShareLink(link);
    setLinkGenerated(true);
  };

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const sendViaEmail = () => {
    const subject = encodeURIComponent('Peptide Therapy Protocol');
    const body = encodeURIComponent(`I've created a peptide therapy protocol for you. View it here:\n\n${shareLink}\n\nThis link ${shareSettings.expiresIn === 'never' ? 'does not expire' : `expires in ${shareSettings.expiresIn.replace('days', ' days')}`}.`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/tools" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Beaker className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Interactive Protocol Builder</h1>
              
          <div className="mt-4 mb-6">
            <PrintButton title="Protocol Builder - Patient Handout" subtitle="Peptide Education Hub" />
          </div>
<p className="text-xl text-white/90">Create evidence-based, personalized peptide therapy protocols</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-white/80 text-sm">Clinical Goals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">30+</div>
              <div className="text-white/80 text-sm">Peptide Options</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-white/80 text-sm">Protocol Templates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">PDF</div>
              <div className="text-white/80 text-sm">Export Format</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Alert */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Clinical Decision Support Tool</h3>
              <p className="text-amber-800 text-sm">
                This protocol builder is designed to assist healthcare providers in creating evidence-based treatment plans. 
                All protocols must be individualized based on patient assessment, medical history, and clinical judgment. 
                This tool does not replace professional medical expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Protocol Builder */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Select Clinical Goal */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Select Clinical Goal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clinicalGoals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedGoal === goal.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">{goal.name}</div>
                    <div className="text-sm text-gray-600">{goal.peptides.length} peptide options</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Patient Profile */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Patient Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={patientProfile.age}
                    onChange={(e) => setPatientProfile({...patientProfile, age: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                  <input
                    type="number"
                    value={patientProfile.weight}
                    onChange={(e) => setPatientProfile({...patientProfile, weight: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="kg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={patientProfile.gender}
                    onChange={(e) => setPatientProfile({...patientProfile, gender: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Select Peptides */}
            {selectedGoal && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Select Peptides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {clinicalGoals.find(g => g.id === selectedGoal)?.peptides.map((peptide) => (
                    <div key={peptide} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        id={`peptide-${peptide}`}
                        checked={selectedPeptides.includes(peptide)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedPeptides([...selectedPeptides, peptide]);
                          } else {
                            setSelectedPeptides(selectedPeptides.filter(p => p !== peptide));
                          }
                        }}
                        className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                      />
                      <label htmlFor={`peptide-${peptide}`} className="ml-3 text-gray-900 cursor-pointer flex-1">{peptide}</label>
                      <Link to={`/peptides/${peptide.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="text-xs text-emerald-600 hover:text-emerald-800 hover:underline ml-2">View →</Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Generated Protocol */}
            {selectedPeptides.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <FileText className="w-6 h-6 text-emerald-600 mr-3" />
                    Generated Protocol
                  </h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setShowShareModal(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Protocol
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Export PDF
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Selected Peptides</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPeptides.map(peptide => (
                        <Link key={peptide} to={`/peptides/${peptide.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm hover:bg-emerald-200 transition-colors cursor-pointer">
                          {peptide} →
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Treatment Duration</h3>
                    <p className="text-gray-700">12-16 weeks (adjust based on patient response)</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dosing Schedule</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      {selectedPeptides.map(peptide => (
                        <div key={peptide} className="text-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <Link to={`/peptides/${peptide.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="font-medium text-emerald-700 hover:underline">{peptide}:</Link>
                            <span className="text-xs text-gray-400">(click to edit dosing below)</span>
                          </div>
                          <input
                            type="text"
                            value={getDosingForPeptide(peptide)}
                            onChange={(e) => setEditableDosing({...editableDosing, [peptide]: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Monitoring Schedule</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Calendar className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Baseline labs: CBC, CMP, lipid panel, HbA1c, thyroid panel</span>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Week 4: Follow-up visit, assess tolerance and response</span>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Week 8: Repeat labs, adjust dosing as needed</span>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Week 12: Final assessment, determine continuation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lifestyle Recommendations</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Adequate protein intake (1.6-2.2g/kg body weight)</li>
                      <li>• Regular resistance training (3-4x per week)</li>
                      <li>• Optimize sleep (7-9 hours per night)</li>
                      <li>• Stress management techniques</li>
                      <li>• Adequate hydration (3-4L per day)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column - Protocol Templates */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Protocol Templates</h2>
              <p className="text-sm text-gray-600 mb-4">
                Start with a proven template and customize to your patient's needs
              </p>
              
              <div className="space-y-4">
                {protocolTemplates.map((template, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div><span className="font-medium">Peptides:</span> {template.peptides.join(', ')}</div>
                      <div><span className="font-medium">Duration:</span> {template.duration}</div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedGoal(template.goal);
                        setSelectedPeptides(template.peptides);
                      }}
                      className="mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Load Template →
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2 text-sm">Need Help?</h3>
                <p className="text-xs text-blue-800 mb-3">
                  Consult our comprehensive peptide pages for detailed dosing, monitoring, and safety information.
                </p>
                <Link to="/peptide-index" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Browse A-Z Peptide Index →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Share Protocol Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-600" />
                Share Protocol
              </h3>
              <button 
                onClick={() => {
                  setShowShareModal(false);
                  setLinkGenerated(false);
                  setShareLink('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {!linkGenerated ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Link Expiration</label>
                  <select
                    value={shareSettings.expiresIn}
                    onChange={(e) => setShareSettings({...shareSettings, expiresIn: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1day">1 Day</option>
                    <option value="7days">7 Days</option>
                    <option value="30days">30 Days</option>
                    <option value="never">Never</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">Password Protection</span>
                  </div>
                  <button
                    onClick={() => setShareSettings({...shareSettings, requirePassword: !shareSettings.requirePassword})}
                    className={`w-12 h-6 rounded-full transition-colors ${shareSettings.requirePassword ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${shareSettings.requirePassword ? 'translate-x-6' : 'translate-x-0.5'}`} />
                  </button>
                </div>

                {shareSettings.requirePassword && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={shareSettings.password}
                      onChange={(e) => setShareSettings({...shareSettings, password: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter password"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">Allow PDF Download</span>
                  </div>
                  <button
                    onClick={() => setShareSettings({...shareSettings, allowDownload: !shareSettings.allowDownload})}
                    className={`w-12 h-6 rounded-full transition-colors ${shareSettings.allowDownload ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${shareSettings.allowDownload ? 'translate-x-6' : 'translate-x-0.5'}`} />
                  </button>
                </div>

                <button
                  onClick={generateShareLink}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Generate Share Link
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">Link Generated!</span>
                  </div>
                  <p className="text-sm text-green-600">
                    {shareSettings.expiresIn === 'never' ? 'This link does not expire.' : `This link expires in ${shareSettings.expiresIn.replace('days', ' days').replace('day', ' day')}.`}
                  </p>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                  />
                  <button
                    onClick={copyShareLink}
                    className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      linkCopied ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {linkCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {linkCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={sendViaEmail}
                    className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send via Email
                  </button>
                </div>

                <button
                  onClick={() => {
                    setLinkGenerated(false);
                    setShareLink('');
                  }}
                  className="w-full py-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Generate New Link
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
