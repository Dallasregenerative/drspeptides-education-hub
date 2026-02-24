import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { useState } from "react";

export default function ConsentFormNewYork() {
  usePageTitle("Form 4: New York Peptide Therapy Informed Consent");
  const [clinicName, setClinicName] = useState("");

  const handlePrint = () => window.print();

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto consent-form-printable">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold mb-2">Form 4: New York Peptide Therapy Informed Consent</CardTitle>
                <p className="text-sm text-gray-500">Governing Law: NY Public Health Law Article 24-A, §2442</p>
              </div>
              <Badge variant="secondary">Official Form</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-sm">
              <div className="space-y-2 ">
                <label htmlFor="clinicName" className="print-hide" className="font-semibold">Clinic Name</label>
                <Input 
                  id="clinicName" 
                  value={clinicName} 
                  onChange={(e) => setClinicName(e.target.value)} 
                  placeholder="Enter Clinic Name" 
                  className="max-w-sm"
                />
              </div>

              {clinicName && <h2 className="text-xl font-bold text-center py-4 bg-gray-100 rounded-md">{clinicName}</h2>}

              <p className="text-xs text-center font-semibold p-2 bg-yellow-100 border border-yellow-300 rounded-md">
                For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.
              </p>

              <div className="prose prose-sm max-w-none">
                <h3 className="font-bold text-lg">Patient Information</h3>
                <div className="grid grid-cols-2 gap-4 border p-4 rounded-md">
                  <p><strong>Name:</strong> _________________________</p>
                  <p><strong>Date of Birth:</strong> _________________________</p>
                  <p><strong>Address:</strong> _________________________</p>
                  <p><strong>Phone:</strong> _________________________</p>
                </div>

                <h3 className="font-bold text-lg mt-6">1. Purpose and Nature of Treatment (Human Research)</h3>
                <p>
                  In accordance with New York Public Health Law §2441, you are being asked to participate in a research study. The purpose of this study is to evaluate the therapeutic effects of research-grade peptides, such as BPC-157. These products are not approved by the FDA for any clinical use in humans and are intended for laboratory research purposes only. Your participation involves the self-administration of these peptides under the guidance of a supervising practitioner. This treatment is considered <strong>"human research"</strong> as defined by state law.
                </p>

                <h3 className="font-bold text-lg mt-6">2. Risk Disclosures for Research-Grade BPC-157</h3>
                <p>
                  You understand that BPC-157 is a research compound and has not undergone extensive clinical trials to establish its safety and efficacy in humans. Potential risks, though not fully known, may include but are not limited to:
                </p>
                <ul className="list-disc list-inside">
                  <li>Nausea, dizziness, or fatigue.</li>
                  <li>Changes in blood pressure or heart rate.</li>
                  <li>Unknown long-term effects due to lack of clinical studies.</li>
                  <li>Interactions with other medications or supplements.</li>
                  <li>The product is not sterile and is not intended for injection without proper filtering and preparation by a qualified professional. Improper handling can lead to infection or other serious harm.</li>
                </ul>

                <h3 className="font-bold text-lg mt-6">3. No Waiver of Legal Rights</h3>
                <p>
                  Pursuant to NY Public Health Law §2442, your consent to participate in this research does not waive any of your legal rights. You are not releasing the researchers, sponsors, or institutions from liability for negligence.
                </p>

                <h3 className="font-bold text-lg mt-6">4. Confidentiality</h3>
                <p>
                  Your research records will be kept confidential to the extent permitted by law, modeled on the principles of 21 CFR Part 50. Your identity will not be disclosed in any publication or presentation resulting from this research. However, regulatory agencies and the institutional review board may have access to your records.
                </p>

                <h3 className="font-bold text-lg mt-6">5. Compensation for Injury</h3>
                <p>
                  If you are injured as a direct result of your participation in this research, necessary medical treatment will be made available to you. However, you will be responsible for the costs of this treatment. No other financial compensation is available.
                </p>

                <h3 className="font-bold text-lg mt-6">6. Alternative Treatments</h3>
                <p>
                  Alternative treatments for your condition may include conventional medical therapies, physical therapy, or other established interventions. You should discuss these options with your primary healthcare provider.
                </p>

                <h3 className="font-bold text-lg mt-6">7. Right to Withdraw</h3>
                <p>
                  Your participation is voluntary. You have the right to refuse to participate or to withdraw from the research at any time without penalty or loss of benefits to which you are otherwise entitled.
                </p>

                <h3 className="font-bold text-lg mt-6">8. Signatures</h3>
                <p>By signing below, I acknowledge that I have read and understood this consent form, and I voluntarily agree to participate in this research.</p>
                <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t">
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
                    <p><strong>Supervising Practitioner Signature</strong></p>
                  </div>
                  <div>
                    <p>_________________________________________</p>
                    <p><strong>Date</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-8">
              <Button variant="outline" onClick={handlePrint}>Download / Print</Button>
              <Link href="/resources/consent-forms">
                <Button variant="secondary">Back to Hub</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <p className="text-xs text-center text-gray-500 mt-8">
          Disclaimer: For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.
        </p>
      </div>
    </>
  );
}
