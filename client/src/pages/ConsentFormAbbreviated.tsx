import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { useState } from "react";

export default function ConsentFormAbbreviated() {
  usePageTitle("Form 6: Abbreviated Single-Peptide Consent Form");
  const [clinicName, setClinicName] = useState("");

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto consent-form-printable">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold">Form 6: Abbreviated Single-Peptide Consent Form</CardTitle>
                <p className="text-sm text-gray-500 mt-1">A streamlined, one-page consent form for straightforward, single-peptide protocols.</p>
              </div>
              <Badge variant="secondary">Research-Grade</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8 print-container">
              <div className="text-center mb-8">
                <input
                  type="text"
                  placeholder="[Clinic Name]"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="text-3xl font-bold text-center border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full max-w-md mx-auto"
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Patient Consent for Peptide Protocol</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                    <div className="mt-1 p-2 border-b border-gray-300 h-10"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <div className="mt-1 p-2 border-b border-gray-300 h-10"></div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">Peptide Name</label>
                  <div className="mt-1 p-2 border-b border-gray-300 h-10">[Placeholder for Single Peptide Name]</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">1. Understanding Research-Grade Peptides</h4>
                <p className="text-sm text-gray-600">
                  I understand that the peptide I am consenting to use is a "research-grade" product. This means it is supplied for laboratory research purposes only and is not manufactured to the same standards as pharmaceutical drugs. I acknowledge this is not a pharmacy-compounded product.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Key Risks</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li><b>Not for Human Consumption:</b> Officially sold for research/laboratory use only.</li>
                  <li><b>No cGMP Standards:</b> The manufacturing process does not follow Current Good Manufacturing Practices (cGMP), which are the standards required for human pharmaceuticals.</li>
                  <li><b>No Sterility Guarantee:</b> Products are not guaranteed to be sterile. Use may introduce a risk of infection.</li>
                  <li><b>Batch Variability:</b> Purity and concentration may vary between different production batches.</li>
                  <li><b>BPC-157 Specific Risks (if applicable):</b> Potential for unknown long-term effects as human data is limited.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">3. Potential Benefits & Alternatives</h4>
                <p className="text-sm text-gray-600">I have discussed the potential benefits and the alternatives to this protocol with my supervising practitioner. I believe the potential benefits outweigh the risks for my specific situation.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">4. Voluntary Participation</h4>
                <p className="text-sm text-gray-600">My participation in this protocol is completely voluntary. I can choose to stop at any time.</p>
              </div>

              <div className="border-t pt-6 mt-8">
                <h4 className="font-semibold text-lg mb-4">Signature</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="mt-1 p-2 border-b border-gray-300 h-12"></div>
                    <p className="text-sm text-gray-600 mt-2">Patient Signature</p>
                  </div>
                  <div>
                    <div className="mt-1 p-2 border-b border-gray-300 h-12"></div>
                    <p className="text-sm text-gray-600 mt-2">Date</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-center text-gray-500">
              <p><b>Disclaimer:</b> For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
            </div>

            <div className="flex justify-end space-x-4 mt-8 no-print">
              <Button variant="outline" onClick={handlePrint}>Download / Print</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <style jsx global>{`
        @media print {
          .no-print {
            display: none;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-container {
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
          }
        }
      `}</style>
    </>
  );
}
