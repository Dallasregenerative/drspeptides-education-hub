import { usePageTitle } from '../hooks/usePageTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { DollarSign, FileText, ClipboardCheck, AlertCircle, Download, CheckCircle } from 'lucide-react';

export default function InsuranceBilling() {
  usePageTitle('Insurance & Billing Guide', { description: 'Complete insurance billing guide with 20+ CPT codes, 30+ ICD-10 codes, and prior authorization templates. Maximize reimbursement with step-by-step workflows, appeal letters, and cash-pay pricing strategies for peptide therapy.' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <DollarSign className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Insurance & Billing Guide
          </h1>
          <p className="text-xl text-center text-emerald-50 max-w-3xl mx-auto mb-8">
            Comprehensive guide to insurance coverage, billing codes, documentation requirements, and reimbursement strategies for peptide therapy
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-sm text-emerald-100">CPT Codes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm text-emerald-100">ICD-10 Codes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-emerald-100">Templates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">2025</div>
              <div className="text-sm text-emerald-100">Latest Updates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 p-4 rounded">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">Insurance Coverage Varies Widely</h3>
              <div className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                <p className="mb-2">
                  Most peptide therapies are NOT covered by insurance and are typically self-pay. However, some FDA-approved peptides (like Semaglutide for diabetes/obesity) may be covered with proper documentation.
                </p>
                <p>
                  Always verify coverage with the patient's specific insurance plan before initiating therapy. This guide provides billing strategies for both covered and non-covered scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="cpt-codes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="cpt-codes">
              <FileText className="h-4 w-4 mr-2" />
              CPT Codes
            </TabsTrigger>
            <TabsTrigger value="icd-10">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              ICD-10 Codes
            </TabsTrigger>
            <TabsTrigger value="documentation">
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </TabsTrigger>
            <TabsTrigger value="templates">
              <Download className="h-4 w-4 mr-2" />
              Templates
            </TabsTrigger>
            <TabsTrigger value="strategies">
              <DollarSign className="h-4 w-4 mr-2" />
              Strategies
            </TabsTrigger>
            <TabsTrigger value="appeals">
              <CheckCircle className="h-4 w-4 mr-2" />
              Appeals
            </TabsTrigger>
          </TabsList>

          {/* CPT Codes */}
          <TabsContent value="cpt-codes" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Current Procedural Terminology (CPT) Codes for Peptide Therapy
              </h2>

              <div className="space-y-6">
                {/* Evaluation & Management */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                      <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Evaluation & Management (E/M) Codes
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">CPT Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Typical Use</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">2025 RVU</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99203</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">New patient, 30-44 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Initial peptide consultation</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">2.60</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99204</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">New patient, 45-59 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Complex initial evaluation</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">3.91</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99205</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">New patient, 60-74 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Comprehensive initial visit</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">5.22</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99213</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Established patient, 20-29 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Follow-up visits</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">1.50</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99214</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Established patient, 30-39 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Complex follow-up, dose adjustments</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">2.25</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99215</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Established patient, 40-54 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Comprehensive follow-up</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">3.11</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      <strong>Billing Tip:</strong> E/M codes are based on time OR medical decision making (MDM). Document total time spent on the date of encounter and/or MDM complexity to support your code selection.
                    </p>
                  </div>
                </div>

                {/* Injection Codes */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                      <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Injection Administration Codes
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">CPT Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Typical Use</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">2025 RVU</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">96372</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Therapeutic/diagnostic injection, SC/IM</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Most peptide injections</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">0.17</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">96401</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Chemotherapy administration, SC/IM</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Not typically used for peptides</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">0.48</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Unclassified drug</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Peptide drug itself (if billable)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Varies</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3590</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Unclassified biologics</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Alternative for peptide drug</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Varies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                    <p className="text-sm text-purple-900 dark:text-purple-100">
                      <strong>Important:</strong> Code 96372 is for the ADMINISTRATION of the injection. The drug itself is billed separately using J-codes. Most compounded peptides do NOT have specific J-codes and use J3490 or J3590.
                    </p>
                  </div>
                </div>

                {/* Specific Peptide Codes */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded">
                      <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      FDA-Approved Peptides with Specific J-Codes
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">J-Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Peptide</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Dosage Unit</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Coverage Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Semaglutide (compounded)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Per mg</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Usually not covered</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Tirzepatide (compounded)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Per mg</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Usually not covered</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">BPC-157</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Per mg</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Not covered (investigational)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">CJC-1295</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Per mg</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Not covered (investigational)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">J3490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Ipamorelin</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Per mg</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Not covered (investigational)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="text-sm text-green-900 dark:text-green-100 mb-2">
                      <strong>Brand Name vs Compounded:</strong>
                    </p>
                    <ul className="text-sm text-green-800 dark:text-green-200 list-disc list-inside space-y-1">
                      <li><strong>Ozempic/Wegovy (brand semaglutide):</strong> Have specific J-codes and may be covered</li>
                      <li><strong>Mounjaro/Zepbound (brand tirzepatide):</strong> Have specific J-codes and may be covered</li>
                      <li><strong>Compounded versions:</strong> Use J3490, typically NOT covered by insurance</li>
                      <li>Always check with the patient's specific plan for coverage details</li>
                    </ul>
                  </div>
                </div>

                {/* Ancillary Services */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded">
                      <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Ancillary Services & Testing
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">CPT Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Typical Use</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">83036</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Hemoglobin A1c</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Monitoring GLP-1 therapy</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">83001</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">IGF-1 (Somatomedin-C)</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Monitoring GH secretagogues</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">80053</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Comprehensive Metabolic Panel</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Baseline and monitoring</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">80061</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Lipid Panel</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Monitoring metabolic effects</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">84443</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">TSH</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Thyroid monitoring (GLP-1s)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">97802</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Medical nutrition therapy, initial</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Nutrition counseling with weight loss</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">99490</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Chronic care management, 20 min</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Ongoing management (if eligible)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ICD-10 Codes */}
          <TabsContent value="icd-10" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                ICD-10 Diagnosis Codes for Peptide Therapy
              </h2>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 p-4 rounded mb-6">
                <p className="text-amber-900 dark:text-amber-100">
                  <strong>Medical Necessity:</strong> Insurance requires a medically necessary diagnosis to cover services. Use the most specific ICD-10 code that accurately reflects the patient's condition.
                </p>
              </div>

              <div className="space-y-6">
                {/* Weight Loss Peptides */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Weight Loss & Metabolic Peptides (Semaglutide, Tirzepatide)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">ICD-10 Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Coverage Likelihood</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E11.9</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Type 2 diabetes mellitus without complications</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 rounded text-xs">High</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E11.65</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Type 2 diabetes with hyperglycemia</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 rounded text-xs">High</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E66.01</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Morbid (severe) obesity due to excess calories</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 rounded text-xs">Moderate</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E66.09</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Other obesity due to excess calories</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded text-xs">Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E66.3</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Overweight</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">R73.03</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Prediabetes</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded text-xs">Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E78.5</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Hyperlipidemia, unspecified</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded text-xs">Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">I10</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Essential (primary) hypertension</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded text-xs">Low</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                    <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                      <strong>Coverage Requirements (typical):</strong>
                    </p>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 list-disc list-inside space-y-1">
                      <li><strong>For diabetes:</strong> Usually covered with diagnosis of E11.x</li>
                      <li><strong>For obesity:</strong> BMI ≥30 OR BMI ≥27 with weight-related comorbidity</li>
                      <li><strong>Documentation:</strong> Height, weight, BMI, failed diet/exercise attempts</li>
                      <li><strong>Prior authorization:</strong> Often required, may need step therapy</li>
                    </ul>
                  </div>
                </div>

                {/* Recovery Peptides */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Recovery & Healing Peptides (BPC-157, TB-500)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">ICD-10 Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Coverage Likelihood</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">M25.50</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Pain in unspecified joint</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">S43.429A</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Sprain of rotator cuff capsule, initial encounter</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">M76.6</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Achilles tendinitis</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">K51.90</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Ulcerative colitis, unspecified</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-sm text-red-900 dark:text-red-100">
                      <strong>Important:</strong> BPC-157 and TB-500 are investigational and NOT FDA-approved. Insurance will NOT cover these peptides regardless of diagnosis code. These are self-pay only.
                    </p>
                  </div>
                </div>

                {/* Growth Hormone */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Growth Hormone Secretagogues (CJC-1295, Ipamorelin)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">ICD-10 Code</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">Coverage Likelihood</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E23.0</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Hypopituitarism</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">E34.3</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Short stature due to endocrine disorder</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900 dark:text-white">R53.83</td>
                          <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">Other fatigue</td>
                          <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">Very Low</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-sm text-red-900 dark:text-red-100">
                      <strong>Important:</strong> Growth hormone secretagogues are NOT FDA-approved and will NOT be covered by insurance. These are self-pay only. True growth hormone deficiency requires actual GH therapy, not secretagogues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Documentation Tab */}
          <TabsContent value="documentation" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Documentation Requirements for Billing & Coverage
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Essential Documentation Elements
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Proper documentation is critical for billing compliance and insurance reimbursement. Every encounter should include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Clinical Documentation</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Chief complaint and history of present illness</li>
                        <li>Relevant medical history</li>
                        <li>Physical examination findings</li>
                        <li>Assessment and diagnosis</li>
                        <li>Treatment plan and patient education</li>
                        <li>Time spent (for time-based billing)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Peptide-Specific Documentation</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Medical necessity for peptide therapy</li>
                        <li>Failed conventional treatments (if applicable)</li>
                        <li>Specific peptide name and dose</li>
                        <li>Route and frequency of administration</li>
                        <li>Expected outcomes and monitoring plan</li>
                        <li>Informed consent obtained</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Medical Necessity Documentation (for Insurance)
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      To establish medical necessity for peptide therapy, document:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">1. Baseline Measurements</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li><strong>Weight loss peptides:</strong> Height, weight, BMI, waist circumference</li>
                          <li><strong>Diabetes:</strong> HbA1c, fasting glucose, diabetes complications</li>
                          <li><strong>Obesity:</strong> Weight-related comorbidities (hypertension, sleep apnea, osteoarthritis)</li>
                          <li><strong>Lab values:</strong> Lipids, liver function, kidney function</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">2. Failed Conservative Treatment</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Document at least 6 months of lifestyle modification attempts</li>
                          <li>Specific diet plans tried (Mediterranean, low-carb, calorie restriction)</li>
                          <li>Exercise regimen and frequency</li>
                          <li>Previous weight loss medications tried and results</li>
                          <li>Behavioral counseling or weight loss programs attended</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">3. Contraindications to Alternatives</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Why other medications are not appropriate</li>
                          <li>Adverse reactions to previous treatments</li>
                          <li>Medical contraindications to surgery (if applicable)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">4. Expected Outcomes</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Specific, measurable treatment goals</li>
                          <li>Timeline for reassessment</li>
                          <li>Criteria for continuing or discontinuing therapy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Time-Based Billing Documentation
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      When billing E/M codes based on time, document:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 list-disc list-inside">
                      <li><strong>Total time:</strong> "Total time spent on date of encounter: 45 minutes"</li>
                      <li><strong>Activities included:</strong> Face-to-face time, chart review, ordering tests, care coordination</li>
                      <li><strong>Complexity justification:</strong> Why this amount of time was necessary</li>
                    </ul>
                    <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                      <p className="text-sm text-purple-900 dark:text-purple-100">
                        <strong>Example:</strong> "Total time spent on 3/15/2025: 52 minutes. This included 30 minutes face-to-face discussing peptide therapy options, risks, benefits, and alternatives; 12 minutes reviewing labs and prior treatment history; 10 minutes coordinating with compounding pharmacy and documenting treatment plan. Time justified by complexity of medication management and extensive patient education required."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Injection Documentation
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      For billing injection codes (96372), document:
                    </p>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                      <li>Medication name and dose (e.g., "Semaglutide 0.5mg")</li>
                      <li>Route (subcutaneous, intramuscular)</li>
                      <li>Injection site (e.g., "left abdomen")</li>
                      <li>Who administered (provider, nurse)</li>
                      <li>Patient tolerance</li>
                      <li>Post-injection monitoring if applicable</li>
                    </ul>
                    <div className="mt-4 bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                      <p className="text-sm text-orange-900 dark:text-orange-100">
                        <strong>Example:</strong> "Semaglutide 0.5mg administered subcutaneously to left abdomen by RN. Patient tolerated well, no immediate adverse reactions. Post-injection observation 15 minutes, vital signs stable. Patient educated on self-administration technique for home use."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Downloadable Billing Templates & Forms
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Letter of Medical Necessity */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Letter of Medical Necessity
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Comprehensive template for documenting medical necessity for GLP-1 agonist therapy. Includes sections for diagnosis, failed treatments, and expected outcomes.
                  </p>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Template
                  </button>
                </div>

                {/* Prior Authorization Form */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <ClipboardCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Prior Authorization Form
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Standard prior authorization request form for peptide therapy. Includes all required clinical information and supporting documentation checklist.
                  </p>
                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Template
                  </button>
                </div>

                {/* Appeal Letter Template */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-600 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Insurance Appeal Letter
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Template for appealing insurance denials. Includes evidence-based arguments, clinical trial references, and cost-effectiveness data.
                  </p>
                  <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Template
                  </button>
                </div>

                {/* Superbill Template */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Superbill Template
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Customizable superbill for self-pay patients to submit to insurance for out-of-network reimbursement. Includes all common CPT and ICD-10 codes.
                  </p>
                  <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Template
                  </button>
                </div>

                {/* Financial Policy */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-600 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Financial Policy Template
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Sample financial policy for peptide therapy practice. Covers payment expectations, insurance vs. self-pay, and refund policies.
                  </p>
                  <button className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Template
                  </button>
                </div>

                {/* Cost Estimate Worksheet */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-600 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Cost Estimate Worksheet
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Calculator template for providing patients with accurate cost estimates for peptide therapy programs. Includes medication, visits, and monitoring costs.
                  </p>
                  <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Template
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Strategies Tab */}
          <TabsContent value="strategies" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Reimbursement Strategies & Best Practices
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Self-Pay vs. Insurance: Strategic Approach
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Self-Pay Model (Recommended for Most Peptides)</h4>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded">
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                          <strong>Advantages:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                          <li>No prior authorization delays</li>
                          <li>No insurance denials or appeals</li>
                          <li>Predictable revenue stream</li>
                          <li>Faster patient onboarding</li>
                          <li>Freedom to use compounded peptides</li>
                          <li>Simplified billing process</li>
                        </ul>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-3 mb-2">
                          <strong>Best Practices:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                          <li>Clear pricing transparency upfront</li>
                          <li>Provide superbills for patient submission</li>
                          <li>Offer payment plans for affordability</li>
                          <li>Package pricing (medication + visits)</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Insurance Billing (FDA-Approved Peptides Only)</h4>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded">
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                          <strong>When to Pursue:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                          <li>FDA-approved peptides (Ozempic, Wegovy, Mounjaro)</li>
                          <li>Clear medical necessity (diabetes, BMI ≥30)</li>
                          <li>Patient has good insurance coverage</li>
                          <li>Patient unable to afford self-pay</li>
                        </ul>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-3 mb-2">
                          <strong>Requirements:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                          <li>Verify benefits before initiating</li>
                          <li>Obtain prior authorization</li>
                          <li>Document medical necessity thoroughly</li>
                          <li>Use brand name (not compounded)</li>
                          <li>Prepare for potential denials/appeals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Maximizing Reimbursement for E/M Services
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Even if the peptide itself is not covered, you can still bill for E/M services:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">1. Bill Appropriate Level E/M Codes</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li><strong>Initial consultation:</strong> 99204 or 99205 (45-74 minutes)</li>
                          <li><strong>Follow-ups:</strong> 99214 or 99215 (30-54 minutes)</li>
                          <li>Document time spent and/or medical decision making complexity</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">2. Bundle Related Services</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Chronic care management (99490) - 20 min/month</li>
                          <li>Nutrition counseling (97802, 97803)</li>
                          <li>Preventive medicine counseling (99401-99404)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">3. Bill for Ancillary Services</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Lab monitoring (HbA1c, lipids, CMP)</li>
                          <li>Injection administration (96372)</li>
                          <li>Patient education materials</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Pricing Strategies for Self-Pay Peptide Programs
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Package Pricing Model (Recommended)</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          Bundle medication, visits, and monitoring into monthly packages:
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded">
                          <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                            <strong>Example: Semaglutide Weight Loss Program</strong>
                          </p>
                          <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                            <li><strong>Month 1:</strong> $497 (includes initial consultation, medication, supplies)</li>
                            <li><strong>Months 2-6:</strong> $397/month (includes medication, monthly check-in, labs at month 3)</li>
                            <li><strong>Maintenance:</strong> $297/month (medication only, quarterly visits)</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">À La Carte Pricing</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          Separate charges for each component:
                        </p>
                        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                          <li>Initial consultation: $250-400</li>
                          <li>Follow-up visits: $150-250</li>
                          <li>Medication: $200-400/month (varies by peptide)</li>
                          <li>Lab monitoring: $50-150 per panel</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Membership Model</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          Monthly membership fee covers all services, medication at cost:
                        </p>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>$199/month membership (unlimited visits, labs, education)</li>
                          <li>Peptides at wholesale cost + 20% markup</li>
                          <li>Predictable revenue, high patient retention</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Common Billing Mistakes to Avoid
                  </h3>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">❌</span>
                        <div>
                          <strong>Billing insurance for compounded peptides</strong>
                          <p className="text-sm">Compounded versions are NOT covered. Only bill for FDA-approved brand names.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">❌</span>
                        <div>
                          <strong>Upcoding E/M visits</strong>
                          <p className="text-sm">Code level must match time spent or MDM complexity. Document thoroughly.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">❌</span>
                        <div>
                          <strong>Inadequate medical necessity documentation</strong>
                          <p className="text-sm">Must document diagnosis, failed treatments, and expected outcomes.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">❌</span>
                        <div>
                          <strong>Not verifying benefits before treatment</strong>
                          <p className="text-sm">Always verify coverage and obtain prior authorization before starting therapy.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">❌</span>
                        <div>
                          <strong>Billing for "cosmetic" indications</strong>
                          <p className="text-sm">Weight loss for appearance only is not covered. Must have medical necessity (BMI, comorbidities).</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Appeals Tab */}
          <TabsContent value="appeals" className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Insurance Appeals Process & Strategies
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Understanding Insurance Denials
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-3">
                    Common reasons for peptide therapy denials:
                  </p>
                  <ul className="space-y-1 text-blue-800 dark:text-blue-200 list-disc list-inside text-sm">
                    <li><strong>Not medically necessary:</strong> Insufficient documentation of need</li>
                    <li><strong>Experimental/investigational:</strong> Peptide not FDA-approved for indication</li>
                    <li><strong>Step therapy not met:</strong> Must try other medications first</li>
                    <li><strong>Formulary exclusion:</strong> Drug not on plan's covered list</li>
                    <li><strong>Prior authorization not obtained:</strong> Administrative denial</li>
                    <li><strong>Compounded medication:</strong> Plan doesn't cover compounded drugs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Appeals Process Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 1: Internal Appeal (30-60 days)</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          Submit appeal to insurance company's internal review board
                        </p>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                          <li>Gather all supporting documentation</li>
                          <li>Write detailed appeal letter</li>
                          <li>Include clinical evidence and guidelines</li>
                          <li>Submit within plan's deadline (usually 180 days from denial)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 2: External Review (45-60 days)</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          Request independent third-party review if Level 1 denied
                        </p>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                          <li>File with state insurance department or independent review organization</li>
                          <li>Provide all previous appeal documentation</li>
                          <li>Add any new supporting evidence</li>
                          <li>Decision is binding on insurance company</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 3: State or Federal Appeal (Varies)</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          Final option if external review denied
                        </p>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
                          <li>File complaint with state insurance commissioner</li>
                          <li>Contact Department of Labor (if employer plan)</li>
                          <li>Consider legal action (rare, expensive)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Building a Strong Appeal
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      <strong>Key Components of Successful Appeals:</strong>
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">1. Clear Medical Necessity Statement</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Specific diagnosis with ICD-10 code</li>
                          <li>Severity of condition and impact on patient's life</li>
                          <li>Why this treatment is necessary NOW</li>
                          <li>Expected outcomes with treatment</li>
                          <li>Risks of NOT treating</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">2. Documentation of Failed Alternatives</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>List all previous treatments tried</li>
                          <li>Dates, doses, duration of each treatment</li>
                          <li>Why each treatment failed (lack of efficacy, adverse effects)</li>
                          <li>Patient's response to each treatment</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">3. Clinical Evidence & Guidelines</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Peer-reviewed studies supporting peptide use</li>
                          <li>Professional society guidelines (ADA, Endocrine Society)</li>
                          <li>FDA approval information</li>
                          <li>Comparative effectiveness data</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">4. Cost-Effectiveness Argument</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>Compare cost of peptide vs. alternative treatments</li>
                          <li>Include cost of complications if untreated</li>
                          <li>Long-term savings from improved outcomes</li>
                          <li>Reduced need for other medications/procedures</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">5. Patient Impact Statement</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                          <li>How condition affects daily life, work, family</li>
                          <li>Patient's own words about need for treatment</li>
                          <li>Quality of life improvements expected</li>
                          <li>Emotional and psychological impact</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Appeal Letter Template Structure
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded">
                    <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <div className="bg-white dark:bg-slate-800 p-3 rounded">
                        <p className="font-semibold mb-1">Opening Paragraph</p>
                        <p className="text-xs">State purpose of appeal, patient name, policy number, date of denial, and specific medication being appealed.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-3 rounded">
                        <p className="font-semibold mb-1">Patient Background</p>
                        <p className="text-xs">Age, relevant medical history, diagnosis, severity of condition, impact on quality of life.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-3 rounded">
                        <p className="font-semibold mb-1">Treatment History</p>
                        <p className="text-xs">Chronological list of all treatments tried, with dates, doses, and reasons for failure.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-3 rounded">
                        <p className="font-semibold mb-1">Medical Necessity</p>
                        <p className="text-xs">Why THIS medication is necessary, expected outcomes, risks of not treating, clinical evidence supporting use.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-3 rounded">
                        <p className="font-semibold mb-1">Supporting Evidence</p>
                        <p className="text-xs">Attach clinical studies, guidelines, FDA approval documents, cost-effectiveness data.</p>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-3 rounded">
                        <p className="font-semibold mb-1">Closing Paragraph</p>
                        <p className="text-xs">Summarize request, express urgency, provide contact information, thank reviewer for consideration.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Tips for Increasing Appeal Success Rate
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Do's</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Submit appeal within deadline</li>
                        <li>Use professional, respectful tone</li>
                        <li>Provide comprehensive documentation</li>
                        <li>Include peer-reviewed evidence</li>
                        <li>Follow up regularly on status</li>
                        <li>Keep copies of everything submitted</li>
                        <li>Consider having patient write personal statement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Don'ts</h4>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-sm">
                        <li>Don't use emotional or accusatory language</li>
                        <li>Don't submit incomplete documentation</li>
                        <li>Don't miss deadlines</li>
                        <li>Don't give up after first denial</li>
                        <li>Don't rely solely on anecdotal evidence</li>
                        <li>Don't forget to document all communications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help with Billing & Reimbursement?
          </h2>
          <p className="text-xl text-emerald-50 mb-6 max-w-2xl mx-auto">
            Download our comprehensive billing templates and appeal letter guides
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
            Download All Templates
          </button>
        </div>
      </div>
    </div>
  );
}
