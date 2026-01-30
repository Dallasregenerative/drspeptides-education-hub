import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Sun, Heart, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptideMelanotan2() {
  usePageTitle("Melanotan 2 - Tanning & Libido Enhancement", {
    description: "Evidence-based guide to Melanotan-2 for tanning and potential therapeutic uses. Mechanisms, dosing, safety warnings, and clinical considerations."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to All Peptides
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Melanotan 2 (MT-2)</h1>
            <p className="text-xl text-rose-50 mb-6">
              Synthetic melanocortin receptor agonist for tanning, sexual enhancement, and appetite suppression. Non-selective MC1R/MC3R/MC4R activation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Sexual Wellness</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tanning</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Injectable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanism">Mechanism</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Data</TabsTrigger>
              <TabsTrigger value="protocol">Protocol</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Melanotan 2?</CardTitle>
                  <CardDescription>Synthetic α-MSH analog with broad melanocortin receptor activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Melanotan 2 (MT-2) is a synthetic analog of α-melanocyte-stimulating hormone (α-MSH), designed to stimulate melanogenesis (skin tanning) without UV exposure. Unlike its predecessor Melanotan 1, MT-2 is non-selective, activating MC1R (tanning), MC3R/MC4R (sexual function, appetite), and MC5R (sebaceous gland function).
                  </p>
                  <p>
                    Originally developed for photoprotection in skin cancer prevention, MT-2 gained popularity for cosmetic tanning and unexpected sexual enhancement effects. It is <strong>not FDA-approved</strong> and is banned for human use in many countries due to safety concerns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Characteristics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Tanning Effect</h3>
                        <p className="text-sm text-gray-600">Stimulates melanin production via MC1R activation, darkening skin without UV</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Sexual Enhancement</h3>
                        <p className="text-sm text-gray-600">MC3R/MC4R activation increases libido and erectile function in both sexes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Appetite Suppression</h3>
                        <p className="text-sm text-gray-600">MC4R agonism reduces food intake and promotes weight loss</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Not FDA-Approved</h3>
                        <p className="text-sm text-gray-600">Banned in many countries; safety profile not fully established</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Critical Safety Warning
                </h3>
                <p className="text-sm text-red-800">
                  Melanotan 2 is <strong>NOT FDA-approved</strong> and is illegal to sell for human use in the US, EU, and Australia. Long-term safety data are lacking. Use carries significant risks including melanoma concerns, cardiovascular effects, and unknown long-term consequences.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Non-selective melanocortin receptor agonism</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. MC1R Activation - Tanning Effect</h3>
                    <p className="text-sm text-gray-700">
                      MT-2 binds to melanocortin-1 receptors (MC1R) on melanocytes, stimulating eumelanin (brown-black pigment) production. This increases skin pigmentation without UV exposure, providing photoprotection. However, concerns exist about potential melanoma risk from uncontrolled melanocyte stimulation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. MC3R/MC4R Activation - Sexual & Metabolic Effects</h3>
                    <p className="text-sm text-gray-700">
                      MC3R and MC4R activation in the central nervous system enhances sexual arousal, erectile function, and libido in both men and women. MC4R agonism also suppresses appetite and increases energy expenditure, contributing to weight loss. These effects distinguish MT-2 from the more selective Melanotan 1.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> ~33 hours (longer than natural α-MSH)<br/>
                      <strong>Onset:</strong> Tanning visible within 3-5 days; sexual effects within hours<br/>
                      <strong>Duration:</strong> Tanning persists weeks after discontinuation; sexual effects fade within days
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Clinical Data Tab */}
            <TabsContent value="clinical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Evidence</CardTitle>
                  <CardDescription>Limited human trials; mostly anecdotal and off-label use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Limited Clinical Data</h3>
                    <p className="text-sm text-yellow-800">
                      MT-2 has <strong>very limited published human clinical trials</strong>. Most evidence comes from small pilot studies, case reports, and extensive anecdotal use. No large-scale safety or efficacy trials have been conducted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Key Findings from Available Studies</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Tanning efficacy:</strong> Small trials showed significant skin darkening within 1-2 weeks without UV exposure</li>
                      <li><strong>Sexual function:</strong> Pilot studies demonstrated increased spontaneous erections and sexual desire in men with erectile dysfunction</li>
                      <li><strong>Appetite suppression:</strong> Anecdotal reports of reduced food intake and weight loss (MC4R-mediated)</li>
                      <li><strong>Side effects:</strong> Nausea (very common), flushing, spontaneous erections, darkening of moles and freckles</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Melanoma Concerns</h3>
                    <p className="text-sm text-red-800">
                      <strong>Theoretical risk:</strong> Chronic melanocyte stimulation may increase melanoma risk, though no definitive human data exist. Regulatory agencies cite insufficient safety data as reason for bans. Users with personal or family history of melanoma should absolutely avoid MT-2.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocol Tab */}
            <TabsContent value="protocol" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Based on anecdotal use; no FDA-approved dosing guidelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
                    <p className="text-sm text-red-800">
                      <strong>Disclaimer:</strong> The following information is for educational purposes only. MT-2 is not FDA-approved. Use is at your own risk.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Loading Phase (Tanning)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.25-0.5mg daily via subcutaneous injection<br/>
                      <strong>Duration:</strong> 7-14 days until desired tan achieved<br/>
                      <strong>Timing:</strong> Evening injection to minimize nausea (sleep through side effects)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Maintenance Phase</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.25-0.5mg 1-2 times per week<br/>
                      <strong>Purpose:</strong> Maintain tan without UV exposure<br/>
                      <strong>Note:</strong> Tan fades gradually if discontinued
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sexual Enhancement (Acute Use)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1mg 2-4 hours before sexual activity<br/>
                      <strong>Effect:</strong> Increased libido, spontaneous erections (men), arousal (women)<br/>
                      <strong>Duration:</strong> Effects last 6-12 hours
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      Reconstitute lyophilized powder with bacteriostatic water. Inject subcutaneously (abdomen, thigh). Rotate injection sites. Store reconstituted vials refrigerated; use within 30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expectations Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Day 1-2: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Nausea (very common, improves with continued use)</li>
                        <li>Flushing, facial redness</li>
                        <li>Increased libido and spontaneous erections (sexual effects appear quickly)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Day 3-7: Tanning Begins</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Visible skin darkening (especially with minimal UV exposure)</li>
                        <li>Darkening of existing moles and freckles</li>
                        <li>Appetite suppression becomes noticeable</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2+: Full Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Desired tan achieved (depth depends on baseline skin tone and dosing)</li>
                        <li>Sustained sexual enhancement with continued use</li>
                        <li>Potential weight loss from appetite suppression</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Safety Tab */}
            <TabsContent value="safety" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Profile</CardTitle>
                  <CardDescription>Significant safety concerns; not FDA-approved</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Absolute Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Personal or family history of melanoma:</strong> MT-2 stimulates melanocytes; theoretical cancer risk</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; unknown fetal/infant effects</li>
                      <li><strong>Cardiovascular disease:</strong> May affect blood pressure and heart rate</li>
                      <li><strong>Uncontrolled hypertension:</strong> MC receptor activation can elevate BP</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Common Side Effects</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Nausea (very common):</strong> 60-80% of users; improves after first few doses</li>
                      <li><strong>Facial flushing:</strong> Redness, warmth within 30-60 minutes of injection</li>
                      <li><strong>Spontaneous erections (men):</strong> Can be uncomfortable/prolonged</li>
                      <li><strong>Darkening of moles/freckles:</strong> Existing pigmented lesions darken significantly</li>
                      <li><strong>Appetite suppression:</strong> May be excessive in some users</li>
                      <li><strong>Injection site reactions:</strong> Redness, itching at injection site</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Serious Risks</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                      <li><strong>Melanoma risk:</strong> Theoretical concern from chronic melanocyte stimulation; no long-term safety data</li>
                      <li><strong>Cardiovascular effects:</strong> Blood pressure changes, tachycardia</li>
                      <li><strong>Priapism:</strong> Prolonged painful erection requiring emergency treatment</li>
                      <li><strong>Unknown long-term effects:</strong> No studies beyond short-term use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Drug Interactions</h3>
                    <p className="text-sm text-gray-700">
                      Limited data on interactions. Potential concerns with medications affecting blood pressure, erectile function (PDE5 inhibitors), or melanocyte activity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Essential surveillance for off-label use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Screening</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Dermatology exam:</strong> Full-body skin check, photograph all moles/lesions</li>
                      <li><strong>Personal/family melanoma history:</strong> Absolute contraindication if positive</li>
                      <li><strong>Cardiovascular assessment:</strong> Blood pressure, heart rate, ECG if history of CVD</li>
                      <li><strong>Baseline labs:</strong> CBC, metabolic panel, liver function</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (nausea, flushing, sexual side effects)</p>
                      <p><strong>Week 2:</strong> Skin exam (mole changes, tan progression)</p>
                      <p><strong>Monthly:</strong> Dermatology self-exam (new moles, changes in existing lesions)</p>
                      <p><strong>Every 3 months:</strong> Professional skin check by dermatologist</p>
                      <p><strong>Every 6 months:</strong> Cardiovascular assessment (BP, HR), labs</p>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue Immediately and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>New or changing moles:</strong> Asymmetry, irregular borders, color changes, diameter &gt;6mm, evolution</li>
                      <li><strong>Priapism:</strong> Erection lasting &gt;4 hours (medical emergency)</li>
                      <li><strong>Severe cardiovascular symptoms:</strong> Chest pain, severe hypertension, palpitations</li>
                      <li><strong>Severe nausea/vomiting:</strong> Inability to tolerate oral intake</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Harm Reduction Tips</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li>Start with lowest dose (0.25mg) to assess tolerance</li>
                      <li>Inject before bed to sleep through nausea</li>
                      <li>Use sunscreen despite tan (MT-2 does not provide full UV protection)</li>
                      <li>Regular dermatology monitoring is essential</li>
                      <li>Source from reputable suppliers (contamination risk with underground products)</li>
                      <li>Consider less risky alternatives (Melanotan 1 for tanning, PT-141 for sexual enhancement)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
