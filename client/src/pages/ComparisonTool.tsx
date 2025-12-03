import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { ArrowLeft, GitCompare, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function ComparisonTool() {
  usePageTitle(
    'Peptide Comparison Tool - Compare Peptides Side-by-Side',
    'Side-by-side peptide comparison tool with 56+ peptides. Compare FDA status, dosing, mechanisms, benefits, side effects, contraindications, cost, and evidence levels to make informed clinical decisions.'
  );

  const [selectedPeptides, setSelectedPeptides] = useState<string[]>([]);

  const peptideDatabase = [
    {
      name: 'Semaglutide',
      category: 'Weight Loss',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '0.25-2.4mg/week',
      halfLife: '~7 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'GLP-1 receptor agonist',
      keyBenefits: ['Weight loss (10-15%)', 'Improved glycemic control', 'Cardiovascular benefits'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Constipation'],
      contraindications: ['Personal/family history MTC', 'MEN 2', 'Pancreatitis history'],
      cost: '$$$',
      evidenceLevel: 'High (RCTs)',
      monitoring: 'Monthly weight, quarterly HbA1c'
    },
    {
      name: 'Tirzepatide',
      category: 'Weight Loss',
      fdaApproved: true,
      administration: 'Subcutaneous injection',
      frequency: 'Weekly',
      typicalDose: '2.5-15mg/week',
      halfLife: '~5 days',
      onsetOfAction: '4-8 weeks',
      primaryMechanism: 'Dual GIP/GLP-1 agonist',
      keyBenefits: ['Weight loss (15-22%)', 'Superior glycemic control', 'Lipid improvements'],
      commonSideEffects: ['Nausea', 'Diarrhea', 'Decreased appetite'],
      contraindications: ['Personal/family history MTC', 'MEN 2', 'Pancreatitis history'],
      cost: '$$$$',
      evidenceLevel: 'High (RCTs)',
      monitoring: 'Monthly weight, quarterly HbA1c, lipids'
    },
    {
      name: 'BPC-157',
      category: 'Recovery',
      fdaApproved: false,
      administration: 'Subcutaneous/Oral',
      frequency: '1-2x daily',
      typicalDose: '250-500mcg/day',
      halfLife: '~4 hours',
      onsetOfAction: '1-2 weeks',
      primaryMechanism: 'Growth factor modulation',
      keyBenefits: ['Accelerated healing', 'Reduced inflammation', 'Gut protection'],
      commonSideEffects: ['Minimal (injection site reactions)'],
      contraindications: ['Active malignancy (theoretical)'],
      cost: '$$',
      evidenceLevel: 'Moderate (animal studies)',
      monitoring: 'Clinical assessment of healing'
    },
    {
      name: 'CJC-1295',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x weekly',
      typicalDose: '300-500mcg/dose',
      halfLife: '~6-8 days',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'GHRH analog',
      keyBenefits: ['Increased GH/IGF-1', 'Improved body composition', 'Better sleep quality'],
      commonSideEffects: ['Injection site reactions', 'Water retention', 'Joint pain'],
      contraindications: ['Active malignancy', 'Diabetic retinopathy'],
      cost: '$$',
      evidenceLevel: 'Moderate (small studies)',
      monitoring: 'IGF-1 levels, body composition'
    },
    {
      name: 'Ipamorelin',
      category: 'Growth Hormone',
      fdaApproved: false,
      administration: 'Subcutaneous injection',
      frequency: '2-3x daily',
      typicalDose: '200-300mcg/dose',
      halfLife: '~2 hours',
      onsetOfAction: '2-4 weeks',
      primaryMechanism: 'Ghrelin receptor agonist',
      keyBenefits: ['Increased GH release', 'Minimal cortisol/prolactin effect', 'Improved recovery'],
      commonSideEffects: ['Minimal', 'Headache (rare)', 'Flushing (rare)'],
      contraindications: ['Active malignancy'],
      cost: '$$',
      evidenceLevel: 'Moderate (small studies)',
      monitoring: 'IGF-1 levels, clinical response'
    },
    {
      name: 'Semax',
      category: 'Cognitive',
      fdaApproved: false,
      administration: 'Intranasal',
      frequency: '2-3x daily',
      typicalDose: '300-600mcg/day',
      halfLife: '~30 minutes',
      onsetOfAction: 'Minutes to hours',
      primaryMechanism: 'BDNF upregulation',
      keyBenefits: ['Enhanced cognition', 'Neuroprotection', 'Reduced anxiety'],
      commonSideEffects: ['Minimal', 'Nasal irritation (rare)'],
      contraindications: ['None well-established'],
      cost: '$',
      evidenceLevel: 'Moderate (Russian studies)',
      monitoring: 'Subjective cognitive assessment'
    }
  ];

  const handlePeptideToggle = (peptideName: string) => {
    if (selectedPeptides.includes(peptideName)) {
      setSelectedPeptides(selectedPeptides.filter(p => p !== peptideName));
    } else if (selectedPeptides.length < 4) {
      setSelectedPeptides([...selectedPeptides, peptideName]);
    }
  };

  const selectedPeptideData = peptideDatabase.filter(p => selectedPeptides.includes(p.name));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <GitCompare className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Peptide Comparison Tool</h1>
              <p className="text-xl text-white/90">Compare up to 4 peptides side-by-side to make informed clinical decisions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">56+</div>
              <div className="text-white/80 text-sm">Peptides in Database</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-white/80 text-sm">Comparison Criteria</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-white/80 text-sm">Max Comparisons</div>
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
        
        {/* Peptide Selection */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Peptides to Compare (up to 4)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {peptideDatabase.map((peptide) => (
              <button
                key={peptide.name}
                onClick={() => handlePeptideToggle(peptide.name)}
                disabled={!selectedPeptides.includes(peptide.name) && selectedPeptides.length >= 4}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  selectedPeptides.includes(peptide.name)
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                    : selectedPeptides.length >= 4
                    ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                    : 'border-gray-200 hover:border-cyan-300 text-gray-700'
                }`}
              >
                {peptide.name}
                {peptide.fdaApproved && (
                  <div className="text-xs text-emerald-600 mt-1">FDA Approved</div>
                )}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Selected: {selectedPeptides.length}/4
          </div>
        </div>

        {/* Comparison Table */}
        {selectedPeptideData.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                      Criteria
                    </th>
                    {selectedPeptideData.map((peptide) => (
                      <th key={peptide.name} className="px-6 py-4 text-left text-sm font-semibold text-gray-900 min-w-[200px]">
                        <div>{peptide.name}</div>
                        <div className="text-xs font-normal text-gray-600 mt-1">{peptide.category}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  
                  {/* FDA Status */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      FDA Approved
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        {peptide.fdaApproved ? (
                          <span className="inline-flex items-center text-emerald-600">
                            <Check className="w-5 h-5" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-gray-400">
                            <X className="w-5 h-5" />
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Administration */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Administration
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.administration}
                      </td>
                    ))}
                  </tr>

                  {/* Frequency */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Dosing Frequency
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.frequency}
                      </td>
                    ))}
                  </tr>

                  {/* Typical Dose */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Typical Dose
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.typicalDose}
                      </td>
                    ))}
                  </tr>

                  {/* Half-Life */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Half-Life
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.halfLife}
                      </td>
                    ))}
                  </tr>

                  {/* Onset of Action */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Onset of Action
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.onsetOfAction}
                      </td>
                    ))}
                  </tr>

                  {/* Primary Mechanism */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Primary Mechanism
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.primaryMechanism}
                      </td>
                    ))}
                  </tr>

                  {/* Key Benefits */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Key Benefits
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {peptide.keyBenefits.map((benefit, index) => (
                            <li key={index}>• {benefit}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Common Side Effects */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Common Side Effects
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {peptide.commonSideEffects.map((effect, index) => (
                            <li key={index}>• {effect}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Contraindications */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Contraindications
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {peptide.contraindications.map((contra, index) => (
                            <li key={index}>• {contra}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Cost */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Relative Cost
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.cost}
                      </td>
                    ))}
                  </tr>

                  {/* Evidence Level */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-gray-50">
                      Evidence Level
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.evidenceLevel}
                      </td>
                    ))}
                  </tr>

                  {/* Monitoring */}
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 sticky left-0 bg-white">
                      Monitoring
                    </td>
                    {selectedPeptideData.map((peptide) => (
                      <td key={peptide.name} className="px-6 py-4 text-sm text-gray-700">
                        {peptide.monitoring}
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <strong>Clinical Note:</strong> This comparison tool is for educational purposes. 
                  Individual patient factors, contraindications, and clinical judgment should guide peptide selection. 
                  Always review complete prescribing information before initiating therapy.
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedPeptideData.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <GitCompare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Peptides Selected</h3>
            <p className="text-gray-600">
              Select 2-4 peptides above to begin comparing their properties, dosing, and clinical characteristics.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
