import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PeptideCTA from "@/components/PeptideCTA";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Sun, Shield, Activity, Heart } from "lucide-react";
import { Link } from "wouter";

export default function PeptideMelanotan1() {
  usePageTitle("Melanotan 1 (Afamelanotide) - Photoprotection", {
    description: "Comprehensive guide to Melanotan-1 for skin protection and tanning. Mechanisms, dosing protocols, safety considerations, and clinical applications."
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
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Melanotan 1 (Afamelanotide)</h1>
            <p className="text-xl text-amber-50 mb-6">
              Selective MC1R agonist for photoprotection and tanning. FDA-approved (Scenesse) for erythropoietic protoporphyria (EPP). Stimulates melanin production without UV exposure. Safer alternative to Melanotan 2 with minimal systemic effects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FDA-Approved (EPP)</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Selective MC1R</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Injectable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="flex flex-wrap w-full h-auto gap-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="mechanism">Mechanism</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Melanotan 1 (Afamelanotide)?</CardTitle>
                  <CardDescription>Selective MC1R agonist for photoprotection; FDA-approved for EPP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Melanotan 1 (MT-1), also known as <strong>Afamelanotide</strong>, is a synthetic analog of <strong>alpha-melanocyte-stimulating hormone (α-MSH)</strong>, a naturally occurring peptide that regulates skin pigmentation. MT-1 is a <strong>selective agonist</strong> of the <strong>melanocortin-1 receptor (MC1R)</strong>, which is expressed in melanocytes (pigment-producing cells in the skin).
                  </p>
                  <p>
                    MT-1 stimulates <strong>melanin production</strong> (eumelanin, the dark pigment) without requiring UV exposure, leading to a natural-looking tan and providing <strong>photoprotection</strong> (increased resistance to sunburn and UV damage). Unlike Melanotan 2 (MT-2), which activates multiple melanocortin receptors (MC1R, MC3R, MC4R, MC5R), MT-1 is <strong>highly selective for MC1R</strong>, resulting in fewer systemic side effects (no sexual enhancement, minimal nausea, no appetite suppression).
                  </p>
                  <p>
                    MT-1 is <strong>FDA-approved</strong> under the brand name <strong>Scenesse</strong> for the treatment of <strong>erythropoietic protoporphyria (EPP)</strong>, a rare genetic disorder causing severe photosensitivity and skin pain upon sun exposure. Scenesse is administered as a subcutaneous implant that releases MT-1 over 60 days, providing sustained photoprotection.
                  </p>
                  <p>
                    Off-label uses include <strong>cosmetic tanning</strong>, <strong>photoprotection for fair-skinned individuals</strong>, and <strong>prevention of UV-induced skin damage</strong>. MT-1 is considered safer than MT-2 for individuals seeking tanning without sexual or metabolic side effects.
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
                      <Sun className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Melanin Production</h3>
                        <p className="text-sm text-gray-600">Stimulates eumelanin synthesis; natural-looking tan without UV exposure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Photoprotection</h3>
                        <p className="text-sm text-gray-600">Increases UV resistance; reduces sunburn and skin damage risk</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Selective MC1R Agonist</h3>
                        <p className="text-sm text-gray-600">Targets MC1R only; minimal systemic effects (no sexual enhancement)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">FDA-Approved (EPP)</h3>
                        <p className="text-sm text-gray-600">Scenesse approved for erythropoietic protoporphyria; proven safety</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  <strong>FDA-approved:</strong> Erythropoietic protoporphyria (EPP) - Scenesse implant for photoprotection. <strong>Off-label uses:</strong> Cosmetic tanning, photoprotection for fair-skinned individuals, prevention of UV-induced skin damage, vitiligo (experimental). <strong>Advantages over MT-2:</strong> Selective MC1R agonist with minimal systemic effects; no sexual enhancement, nausea, or appetite suppression.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Selective MC1R activation stimulates melanin synthesis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. MC1R Receptor Activation (Selective)</h3>
                    <p className="text-sm text-gray-700">
                      MT-1 is a <strong>selective agonist</strong> of the <strong>melanocortin-1 receptor (MC1R)</strong>, which is expressed on melanocytes (pigment-producing cells) in the skin. MC1R activation triggers intracellular signaling cascades (cAMP/PKA pathway) that upregulate genes involved in melanin synthesis, particularly <strong>eumelanin</strong> (the dark, photoprotective pigment).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Melanin Synthesis (Eumelanin Production)</h3>
                    <p className="text-sm text-gray-700">
                      MC1R activation increases the expression of <strong>tyrosinase</strong>, the rate-limiting enzyme in melanin synthesis. This leads to increased production of <strong>eumelanin</strong>, which darkens the skin (tanning) and provides <strong>photoprotection</strong> by absorbing UV radiation and neutralizing free radicals. Eumelanin is more photoprotective than pheomelanin (red/yellow pigment), which is associated with fair skin and higher skin cancer risk.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. Photoprotection (UV Resistance)</h3>
                    <p className="text-sm text-gray-700">
                      Increased eumelanin provides <strong>natural sun protection</strong> by absorbing UV radiation (UVA and UVB) and preventing DNA damage in skin cells. Studies show MT-1 increases <strong>minimal erythema dose (MED)</strong>—the amount of UV exposure required to cause sunburn—by 2-3 times. This reduces the risk of sunburn, photoaging, and skin cancer.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Selectivity vs. Melanotan 2 (Fewer Side Effects)</h3>
                    <p className="text-sm text-gray-700">
                      Unlike Melanotan 2 (MT-2), which activates multiple melanocortin receptors (MC1R, MC3R, MC4R, MC5R), MT-1 is <strong>highly selective for MC1R</strong>. This means MT-1 does not cause sexual enhancement (MC4R effect), appetite suppression (MC4R effect), or significant nausea (MC3R/MC4R effects). MT-1 is therefore safer and better tolerated for individuals seeking tanning without systemic effects.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Tanning Without UV Exposure</h3>
                    <p className="text-sm text-gray-700">
                      MT-1 stimulates melanin production <strong>independently of UV exposure</strong>, allowing users to achieve a tan without sun exposure or tanning beds. This is particularly beneficial for individuals with fair skin (Fitzpatrick skin types I-II) who burn easily and are at high risk for skin cancer.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> ~1-2 hours (short-acting; daily dosing required)<br/>
                      <strong>Onset of tanning:</strong> 3-7 days (gradual melanin accumulation)<br/>
                      <strong>Peak tanning:</strong> 2-4 weeks (with daily dosing)<br/>
                      <strong>Duration of tan:</strong> 2-4 weeks after discontinuation (melanin turnover)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Research</CardTitle>
                  <CardDescription>FDA-approved for EPP; extensive safety and efficacy data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">FDA Approval: Scenesse for EPP</h3>
                    <p className="text-sm text-gray-700">
                      MT-1 (Afamelanotide) is <strong>FDA-approved</strong> under the brand name <strong>Scenesse</strong> for the treatment of <strong>erythropoietic protoporphyria (EPP)</strong>, a rare genetic disorder causing severe photosensitivity. Scenesse is a subcutaneous implant that releases MT-1 over 60 days, providing sustained photoprotection. Clinical trials demonstrated significant reductions in phototoxic reactions and improved quality of life for EPP patients.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Photoprotection & UV Resistance</h3>
                    <p className="text-sm text-gray-700">
                      Studies show MT-1 increases <strong>minimal erythema dose (MED)</strong>—the amount of UV exposure required to cause sunburn—by 2-3 times. This provides significant photoprotection for fair-skinned individuals (Fitzpatrick skin types I-II) who are at high risk for sunburn and skin cancer. MT-1 reduces UV-induced DNA damage and oxidative stress in skin cells.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Cosmetic Tanning (Off-Label)</h3>
                    <p className="text-sm text-gray-700">
                      MT-1 produces a natural-looking tan without UV exposure, making it popular for cosmetic use. Tanning begins within 3-7 days and peaks at 2-4 weeks with daily dosing. The tan fades gradually over 2-4 weeks after discontinuation. MT-1 is preferred over MT-2 for individuals seeking tanning without sexual or metabolic side effects.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Safety Profile (Superior to MT-2)</h3>
                    <p className="text-sm text-gray-700">
                      MT-1's selectivity for MC1R results in a <strong>superior safety profile</strong> compared to MT-2. Clinical trials and post-marketing surveillance show minimal side effects. No significant sexual, cardiovascular, or metabolic effects. Nausea is rare and mild. MT-1 is well-tolerated in long-term use (Scenesse implants used for years in EPP patients).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Vitiligo & Skin Repigmentation (Experimental)</h3>
                    <p className="text-sm text-gray-700">
                      Preliminary studies suggest MT-1 may help repigment skin in <strong>vitiligo</strong> (autoimmune condition causing loss of skin pigmentation) by stimulating melanocyte activity. Human trials are limited, but MT-1 shows promise as an adjunct to phototherapy for vitiligo treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Research Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">FDA-Approved (EPP)</h3>
                      <p className="text-sm text-amber-800">Scenesse approved for erythropoietic protoporphyria; proven safety and efficacy</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Photoprotection</h3>
                      <p className="text-sm text-amber-800">2-3x increase in minimal erythema dose (MED); significant UV resistance</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Natural Tanning</h3>
                      <p className="text-sm text-amber-800">Gradual, natural-looking tan without UV exposure; peaks at 2-4 weeks</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">Superior Safety</h3>
                      <p className="text-sm text-amber-800">Selective MC1R; minimal side effects compared to MT-2 (no sexual/metabolic effects)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosing Protocols</CardTitle>
                  <CardDescription>Based on clinical trials and community experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Protocol (Cosmetic Tanning)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Loading phase:</strong> 1mg per day, subcutaneous, for 7-14 days (until desired tan achieved)<br/>
                      <strong>Maintenance phase:</strong> 1mg 2-3x weekly to maintain tan<br/>
                      <strong>Timing:</strong> Evening (before bed) to minimize nausea (if occurs)<br/>
                      <strong>Duration:</strong> Continuous use as long as tan is desired; tan fades 2-4 weeks after discontinuation
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Photoprotection Protocol (Fair Skin)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Pre-sun exposure:</strong> 1mg daily for 7-14 days before planned sun exposure (e.g., vacation)<br/>
                      <strong>During sun exposure:</strong> 1mg 2-3x weekly to maintain photoprotection<br/>
                      <strong>Post-sun exposure:</strong> Continue 1mg 2-3x weekly for 1-2 weeks to maintain tan and protection
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Goal-Specific Protocols</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Rapid tanning (cosmetic):</strong> 1mg daily for 10-14 days; then 1mg 2-3x weekly maintenance<br/>
                      <strong>Photoprotection (fair skin):</strong> 1mg daily for 7-14 days pre-sun exposure; 1mg 2-3x weekly during exposure<br/>
                      <strong>EPP (FDA-approved):</strong> Scenesse implant (16mg) every 60 days (administered by physician)<br/>
                      <strong>Vitiligo (experimental):</strong> 1mg daily + phototherapy (consult dermatologist)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Route:</strong> Subcutaneous injection (abdomen, thigh)<br/>
                      <strong>Reconstitution:</strong> Bacteriostatic water (typical: 2ml water per 10mg vial = 1mg per 0.2ml)<br/>
                      <strong>Storage:</strong> Reconstituted vials refrigerated; use within 30 days<br/>
                      <strong>Timing:</strong> Evening (before bed) to minimize nausea (if occurs); no UV exposure required
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
                      <h3 className="font-semibold">Day 1-3: Initial Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>No visible tanning yet (melanin synthesis beginning)</li>
                        <li>Possible mild nausea (rare with MT-1; more common with MT-2)</li>
                        <li>No sexual enhancement or appetite suppression (MT-1 selective for MC1R)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Day 3-7: Visible Tanning Begins</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Gradual darkening of skin (natural-looking tan)</li>
                        <li>Increased photoprotection (reduced sunburn risk)</li>
                        <li>No UV exposure required (tanning occurs independently)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Week 2-4: Peak Tanning</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Desired tan achieved (2-3 shades darker than baseline)</li>
                        <li>Significant photoprotection (2-3x increase in MED)</li>
                        <li>Switch to maintenance dosing (2-3x weekly) to preserve tan</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Post-Discontinuation: Tan Fades</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Tan fades gradually over 2-4 weeks (melanin turnover)</li>
                        <li>Photoprotection diminishes as melanin levels decrease</li>
                        <li>Can restart loading phase to regain tan</li>
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
                  <CardDescription>Excellent safety; FDA-approved with minimal side effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Excellent Safety Profile
                    </h3>
                    <p className="text-sm text-green-800">
                      MT-1 has an <strong>excellent safety profile</strong> based on FDA approval (Scenesse) and extensive clinical use. Selective MC1R agonist with minimal systemic effects. No sexual enhancement, appetite suppression, or significant cardiovascular effects. Well-tolerated in long-term use (EPP patients use Scenesse for years).
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Melanoma or skin cancer history:</strong> Theoretical concern (melanin stimulation may affect existing lesions; no evidence of tumor promotion)</li>
                      <li><strong>Pregnancy and breastfeeding:</strong> No safety data; avoid use</li>
                      <li><strong>Allergy to MT-1 or excipients:</strong> Avoid use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects (Rare)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      MT-1 is exceptionally well-tolerated. Side effects are rare and typically mild.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Redness, mild discomfort (rare)</li>
                      <li><strong>Nausea:</strong> Rare (much less common than with MT-2)</li>
                      <li><strong>Flushing:</strong> Occasional, mild</li>
                      <li><strong>Darkening of moles/freckles:</strong> Expected (melanin stimulation); monitor for changes</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Mole Monitoring</h3>
                    <p className="text-sm text-yellow-800">
                      MT-1 stimulates melanin production, which may darken existing moles and freckles. Monitor moles for changes in size, shape, or color. Perform regular skin self-exams and consult a dermatologist if any suspicious changes occur. MT-1 does not cause melanoma, but individuals with melanoma history should avoid use.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Quality & Sourcing</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Critical:</strong> Source from reputable suppliers with third-party testing. Require:<br/>
                      • &gt;98% purity (HPLC verified)<br/>
                      • Certificate of Analysis (COA)<br/>
                      • Endotoxin testing (&lt;1 EU/mg)<br/>
                      • GMP manufacturing standards
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
                  <CardDescription>Track tanning progress and monitor skin health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline skin assessment:</strong> Document baseline skin tone (Fitzpatrick skin type); photograph for comparison</li>
                      <li><strong>Mole mapping:</strong> Document existing moles and freckles (size, shape, color) for monitoring</li>
                      <li><strong>Medical history:</strong> Melanoma or skin cancer history, photosensitivity disorders</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Week 1:</strong> Tolerability check (nausea, injection site reactions); assess initial tanning (day 3-7)</p>
                      <p><strong>Week 2-4:</strong> Track tanning progress (photograph weekly); monitor moles for changes</p>
                      <p><strong>Maintenance phase:</strong> Monthly skin self-exams; annual dermatology check-up (if high-risk)</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>Tanning:</strong> 2-3 shades darker than baseline within 2-4 weeks</li>
                      <li><strong>Photoprotection:</strong> Reduced sunburn risk (2-3x increase in MED)</li>
                      <li><strong>Natural appearance:</strong> Gradual, even tan (no orange tint)</li>
                      <li><strong>Tolerability:</strong> Minimal side effects (rare nausea, no sexual effects)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Discontinue and Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Mole changes:</strong> New moles, or changes in size, shape, color, or borders of existing moles</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                      <li><strong>Severe nausea:</strong> Persistent or worsening (rare with MT-1)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, rotate sites)</li>
                      <li>No UV exposure required (tanning occurs independently)</li>
                      <li>Sunscreen still recommended (MT-1 provides photoprotection, not complete sun protection)</li>
                      <li>Monthly skin self-exams (monitor moles for changes)</li>
                      <li>Quality sourcing (third-party tested peptides only)</li>
                      <li>Realistic expectations (gradual tan over 2-4 weeks; fades 2-4 weeks after discontinuation)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            Educational resource for healthcare providers. Melanotan 1 (Afamelanotide) is FDA-approved as Scenesse for EPP. 
            Off-label cosmetic use should be supervised by qualified healthcare providers.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Source peptides by clicking "Source Medical Grade Peptides Now" above
          </p>
        </div>
      </footer>
    </div>
  );
}
