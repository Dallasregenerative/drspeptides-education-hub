import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import React, { useState } from "react";

export default function ConsentFormFlorida() {
  usePageTitle("Form 3: Florida Peptide Therapy Informed Consent");
  const [clinicName, setClinicName] = useState("Your Clinic Name");

  const handlePrint = () => window.print();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="border-b">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">Form 3: Florida Peptide Therapy Informed Consent</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Governing Law: F.S. §766.103, Florida Right to Try Act</p>
              </div>
              <Badge variant="secondary">State-Specific</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-bold text-blue-800">{clinicName}</h2>
              <p className="text-sm text-blue-600">Peptide Therapy Informed Consent</p>
            </div>

            <div className="space-y-2 ">
                <label htmlFor="clinicNameInput" className="block text-sm font-medium text-gray-700">Clinic Name</label>
                <input
                    id="clinicNameInput"
                    type="text"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <div className="prose max-w-none">
              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2">1. Patient Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <p><strong>Patient Name:</strong> _________________________</p>
                <p><strong>Date of Birth:</strong> _________________________</p>
              </div>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">2. Purpose and Description (Reasonable Patient Standard)</h3>
              <p>The purpose of this consent is to provide you with information to make an informed decision about peptide therapy, consistent with the 'reasonable patient' standard for disclosure in Florida. This means we will provide information that a reasonable person would want to have to make an intelligent and informed decision about their medical care. You will be receiving research-grade peptides, which are not compounded in a pharmacy but are produced for investigational purposes. Their use in this context is considered off-label.</p>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">3. BPC-157 Risk Disclosures</h3>
              <p>While BPC-157 is a popular research peptide, it is important to understand its specific risk profile. As a research-grade compound, it has not undergone extensive human clinical trials. Potential risks, though not fully established, may include but are not limited to: changes in blood pressure, nausea, dizziness, and unknown long-term effects. The full spectrum of side effects is not completely understood.</p>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">4. Realistic Most-Likely Outcome (Florida Right to Try Act)</h3>
              <p>As required by the Florida Right to Try Act, this section outlines the most likely outcome you should realistically expect. Peptide therapy is an experimental approach. While many individuals report benefits such as improved recovery, reduced inflammation, and enhanced well-being, these outcomes are not guaranteed. Your individual results will vary based on your health status, lifestyle, and adherence to the treatment plan. The most realistic expectation is a potential for modest improvement in your targeted symptoms, with the understanding that there may be no noticeable benefit.</p>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">5. Insurance Non-Coverage Warning</h3>
              <p>In accordance with the Florida Right to Try Act's framework, you are hereby warned that your health insurance plan will likely not cover the cost of research-grade peptide therapy. This is considered an investigational treatment, and you will be financially responsible for the full cost of the peptides and any related administration or monitoring fees.</p>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">6. Alternative Treatments</h3>
              <p>Alternatives to peptide therapy may include conventional medical treatments, physical therapy, lifestyle modifications (diet and exercise), and other therapeutic options. You are encouraged to discuss all available alternatives with your supervising practitioner.</p>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">7. Right to Withdraw</h3>
              <p>Your participation in peptide therapy is completely voluntary. You have the right to withdraw consent and discontinue treatment at any time, for any reason, without penalty or loss of benefits to which you are otherwise entitled.</p>

              <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mt-6">8. Signature and Acknowledgment</h3>
              <p>By signing below, I acknowledge that I have read and understood this consent form. I have had the opportunity to ask questions and have had them answered to my satisfaction. I understand the risks, benefits, and alternatives, and I voluntarily consent to receive research-grade peptide therapy under the supervision of my practitioner.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p>_________________________________________</p>
                  <p><strong>Patient Signature</strong></p>
                </div>
                <div>
                  <p>_________________________________________</p>
                  <p><strong>Date</strong></p>
                </div>
                <div>
                  <p>_________________________________________</p>
                  <p><strong>Practitioner Signature</strong></p>
                </div>
                <div>
                  <p>_________________________________________</p>
                  <p><strong>Date</strong></p>
                </div>
              </div>
            </div>

            <div className="text-xs text-center text-gray-500 pt-4 border-t mt-6">
              <p>For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <Button variant="outline" onClick={handlePrint}>Download / Print</Button>
              <Link href="/resources/consent-forms">
                <Button variant="secondary">Back to Hub</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
