import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "wouter";
import { useState } from "react";
import { FileText, Shield, Scale, Download, AlertTriangle, Building2, MapPin } from "lucide-react";

export default function ConsentFormsHub() {
  usePageTitle("Consent Forms Hub");
  const [clinicName, setClinicName] = useState("");
  const [stateName, setStateName] = useState("");

  const forms = [
    { id: 1, title: "Texas (THSC Chapter 490)", description: "Initial-based acknowledgments, DSHS structure, physician attestation.", icon: <FileText className="w-8 h-8" />, link: "/resources/consent-forms/form-1" },
    { id: 2, title: "California (H&SC §§24170-24179)", description: "Experimental Participant's Bill of Rights, 10 rights per §24172, witness signature.", icon: <Shield className="w-8 h-8" />, link: "/resources/consent-forms/form-2" },
    { id: 3, title: "Florida (F.S. §766.103, Right to Try)", description: "Reasonable patient standard, most-likely-outcome section, insurance warning.", icon: <Scale className="w-8 h-8" />, link: "/resources/consent-forms/form-3" },
    { id: 4, title: "New York (Public Health Law Art. 24-A)", description: "Human research framing, consent doesn't waive rights, confidentiality.", icon: <FileText className="w-8 h-8" />, link: "/resources/consent-forms/form-4" },
    { id: 5, title: "Standard U.S. (21 CFR Part 50)", description: "Federal compliance, Key Information summary, telemedicine suitable.", icon: <Shield className="w-8 h-8" />, link: "/resources/consent-forms/form-5" },
    { id: 6, title: "Abbreviated Single Peptide", description: "One-page streamlined, plain language, lower-complexity.", icon: <Download className="w-8 h-8" />, link: "/resources/consent-forms/form-6" },
    { id: 7, title: "Multi-Peptide Protocol with Registry", description: "Most comprehensive, stacking risks, peptide risk table, registry enrollment.", icon: <AlertTriangle className="w-8 h-8" />, link: "/resources/consent-forms/form-7" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research Peptide Therapy Consent Forms</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">A comprehensive 7-form consent collection for practitioners utilizing research-grade peptides. Customize and download forms to ensure informed consent and mitigate liability.</p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <div className="flex items-center bg-white p-4 rounded-lg shadow">
            <Building2 className="w-6 h-6 mr-3 text-gray-500" />
            <input
              type="text"
              placeholder="Enter Clinic Name"
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow">
            <MapPin className="w-6 h-6 mr-3 text-gray-500" />
            <input
              type="text"
              placeholder="Enter State/Practice Name"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {forms.map((form) => (
            <Link key={form.id} href={form.link}>
              <a className="block transform hover:scale-105 transition-transform duration-300">
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex-row items-center space-x-4 pb-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">{form.icon}</div>
                    <CardTitle className="text-lg font-semibold">{form.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{form.description}</p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />Research-Grade Specific Language</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Products are not manufactured under cGMP conditions.</li>
                <li>No pharmacy or FDA oversight in the production process.</li>
                <li>Labeled "Not for human use" or "For research purposes only".</li>
                <li>Sterility and purity are not guaranteed to pharmaceutical standards.</li>
                <li>Certificate of Analysis (COA) may have limitations and not reflect final product.</li>
                <li>Potential for batch-to-batch variability in potency and purity.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Shield className="w-5 h-5 mr-2 text-red-500" />Important Caveats</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Consult a qualified attorney to review and tailor forms to your jurisdiction.</li>
                <li>"Right to Try" laws may not apply to research-grade substances.</li>
                <li>Verify coverage with your medical malpractice insurance carrier.</li>
                <li>Periodically review and update forms to reflect legal and regulatory changes.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Related Articles & Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a href="#" className="text-blue-600 hover:underline block">The Legal Landscape of Research Peptides in Clinical Practice</a>
              <a href="#" className="text-blue-600 hover:underline block">Informed Consent vs. Assumption of Risk: A Deep Dive</a>
              <a href="#" className="text-blue-600 hover:underline block">Navigating COAs and Third-Party Testing for Peptides</a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500">
          <p>For informational purposes only. Not a substitute for professional medical advice. Use under practitioner supervision.</p>
        </div>
      </main>
    </div>
  );
}
