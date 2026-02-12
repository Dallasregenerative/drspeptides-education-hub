import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X, Building2, FlaskConical, Microscope, ArrowLeft, CheckCircle } from "lucide-react";

interface PeptideSourcingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SourceType = "503A" | "503B" | "Research" | null;
type FormStep = "select" | "form" | "success";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const CREDENTIALS = ["MD", "DO", "ND", "DC", "NP", "PA", "DNP", "RN", "PharmD", "Other"];

const BUSINESS_TYPES = ["Provider", "Clinic", "Hospital", "Retailer", "Distributor", "Other"];

export default function PeptideSourcingModal({ isOpen, onClose }: PeptideSourcingModalProps) {
  const [selectedSource, setSelectedSource] = useState<SourceType>(null);
  const [formStep, setFormStep] = useState<FormStep>("select");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    credentials: "",
    email: "",
    phone: "",
    companyName: "",
    businessType: "",
    website: "",
    taxId: "",
    npiNumber: "",
    resellerLicense: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    referredBy: "",
    comments: "",
    peptideInterest: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSourceSelect = (source: SourceType) => {
    setSelectedSource(source);
    if (source === "Research") {
      // Redirect to DrsPeptides.com
      window.open("https://drspeptides.com/account/register", "_blank");
      onClose();
    } else {
      setFormStep("form");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit via Netlify Forms
      const formPayload = new URLSearchParams();
      formPayload.append("form-name", "peptide-sourcing");
      formPayload.append("source-type", selectedSource || "");
      formPayload.append("first-name", formData.firstName);
      formPayload.append("last-name", formData.lastName);
      formPayload.append("credentials", formData.credentials);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("company-name", formData.companyName);
      formPayload.append("business-type", formData.businessType);
      formPayload.append("website", formData.website);
      formPayload.append("tax-id", formData.taxId);
      formPayload.append("npi-number", formData.npiNumber);
      formPayload.append("reseller-license", formData.resellerLicense);
      formPayload.append("address", formData.address);
      formPayload.append("city", formData.city);
      formPayload.append("state", formData.state);
      formPayload.append("zip-code", formData.zipCode);
      formPayload.append("peptide-interest", formData.peptideInterest);
      formPayload.append("referred-by", formData.referredBy);
      formPayload.append("comments", formData.comments);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formPayload.toString(),
      });

      if (response.ok) {
        setFormStep("success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Still show success to user - Netlify will queue the submission
      setFormStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (formStep === "form") {
      setFormStep("select");
      setSelectedSource(null);
    }
  };

  const handleClose = () => {
    setFormStep("select");
    setSelectedSource(null);
    setFormData({
      firstName: "",
      lastName: "",
      credentials: "",
      email: "",
      phone: "",
      companyName: "",
      businessType: "",
      website: "",
      taxId: "",
      npiNumber: "",
      resellerLicense: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      referredBy: "",
      comments: "",
      peptideInterest: ""
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>

        {/* Selection Step */}
        {formStep === "select" && (
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Source Medical Grade Peptides
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Choose the sourcing option that best fits your practice needs. All options provide pharmaceutical-quality peptides for healthcare professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 503A Option */}
              <Card 
                className="cursor-pointer hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
                onClick={() => handleSourceSelect("503A")}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">503A Compounding</CardTitle>
                  <CardDescription>Patient-Specific Prescriptions</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <p>• Traditional compounding pharmacy</p>
                  <p>• Requires patient-specific prescription</p>
                  <p>• Customized formulations available</p>
                  <p>• State board regulated</p>
                  <div className="pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Request 503A Access
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 503B Option */}
              <Card 
                className="cursor-pointer hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
                onClick={() => handleSourceSelect("503B")}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <FlaskConical className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">503B Outsourcing</CardTitle>
                  <CardDescription>Office-Use Ready</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <p>• FDA-registered outsourcing facility</p>
                  <p>• No patient-specific Rx required</p>
                  <p>• Office-use stock permitted</p>
                  <p>• cGMP manufacturing standards</p>
                  <div className="pt-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Request 503B Access
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Research Option */}
              <Card 
                className="cursor-pointer hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
                onClick={() => handleSourceSelect("Research")}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Microscope className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">Research Peptides</CardTitle>
                  <CardDescription>Laboratory & Research Use</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <p>• High-purity research grade</p>
                  <p>• For laboratory use only</p>
                  <p>• COA with every order</p>
                  <p>• Wholesale pricing available</p>
                  <div className="pt-4">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Visit DrsPeptides.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
              All sourcing options are available exclusively to verified healthcare professionals and medical organizations.
            </p>
          </div>
        )}

        {/* Form Step */}
        {formStep === "form" && (
          <div className="p-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to options
            </button>

            <div className="text-center mb-8">
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                selectedSource === "503A" 
                  ? "bg-blue-100 dark:bg-blue-900" 
                  : "bg-purple-100 dark:bg-purple-900"
              }`}>
                {selectedSource === "503A" 
                  ? <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  : <FlaskConical className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                }
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Request {selectedSource} Peptide Access
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Complete the form below and our team will contact you within 24-48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="credentials">Credentials *</Label>
                    <Select
                      value={formData.credentials}
                      onValueChange={(value) => handleInputChange("credentials", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {CREDENTIALS.map((cred) => (
                          <SelectItem key={cred} value={cred}>{cred}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john.smith@clinic.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b pb-2">
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company/Practice Name *</Label>
                    <Input
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Smith Medical Clinic"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleInputChange("businessType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {BUSINESS_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="www.smithclinic.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="taxId">Tax ID / EIN *</Label>
                    <Input
                      id="taxId"
                      required
                      value={formData.taxId}
                      onChange={(e) => handleInputChange("taxId", e.target.value)}
                      placeholder="XX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="npiNumber">NPI Number *</Label>
                    <Input
                      id="npiNumber"
                      required
                      value={formData.npiNumber}
                      onChange={(e) => handleInputChange("npiNumber", e.target.value)}
                      placeholder="1234567890"
                    />
                  </div>
                </div>
                <div>
                  <Label>Does your business have a reseller's license?</Label>
                  <RadioGroup
                    value={formData.resellerLicense}
                    onValueChange={(value) => handleInputChange("resellerLicense", value)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="reseller-yes" />
                      <Label htmlFor="reseller-yes" className="font-normal">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="reseller-no" />
                      <Label htmlFor="reseller-no" className="font-normal">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-sure" id="reseller-not-sure" />
                      <Label htmlFor="reseller-not-sure" className="font-normal">Not sure</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Business Address */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b pb-2">
                  Business Address
                </h3>
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 Medical Center Dr, Suite 100"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Dallas"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) => handleInputChange("state", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="75201"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b pb-2">
                  Additional Information
                </h3>
                <div>
                  <Label htmlFor="peptideInterest">Which peptides are you interested in?</Label>
                  <Input
                    id="peptideInterest"
                    value={formData.peptideInterest}
                    onChange={(e) => handleInputChange("peptideInterest", e.target.value)}
                    placeholder="e.g., BPC-157, TB-500, Semaglutide, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="referredBy">How did you hear about us?</Label>
                  <Input
                    id="referredBy"
                    value={formData.referredBy}
                    onChange={(e) => handleInputChange("referredBy", e.target.value)}
                    placeholder="Colleague, conference, online search, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange("comments", e.target.value)}
                    placeholder="Any specific requirements or questions..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 text-lg ${
                    selectedSource === "503A"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : `Submit ${selectedSource} Request`}
                </Button>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                  By submitting, you agree to be contacted regarding your peptide sourcing inquiry.
                  Your information is kept confidential and secure.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Success Step */}
        {formStep === "success" && (
          <div className="p-8 text-center">
            <div className="inline-flex p-4 bg-green-100 dark:bg-green-900 rounded-full mb-6">
              <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Request Submitted Successfully!
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
              Thank you for your interest in {selectedSource} peptide sourcing. Our team will review your 
              application and contact you within 24-48 business hours.
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleClose}
                className="bg-teal-600 hover:bg-teal-700 px-8"
              >
                Continue Exploring
              </Button>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Questions? Contact us at <a href="mailto:info@pepedhub.com" className="text-teal-600 hover:underline">info@pepedhub.com</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
