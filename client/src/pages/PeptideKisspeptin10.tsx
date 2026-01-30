import { Helmet } from "react-helmet-async";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Heart, Activity, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PeptideKisspeptin10() {
  return (
    <>
    <Helmet>
        <title>Kisspeptin-10 | DrsPeptides</title>
        <meta name="description" content="Clinical guide to Kisspeptin-10 for reproductive health and hormone regulation. Mechanisms, research findings, dosing protocols, clinical considerations, and safety data." />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kisspeptin-10 | DrsPeptides" />
        <meta property="og:description" content="Clinical guide to Kisspeptin-10 for reproductive health and hormone regulation. Mechanisms, research findings, dosing protocols, clinical considerations, and safety data." />
        <meta property="og:image" content="{window.location.origin}/drspeptides_social_hero.png" />
        <meta property="og:url" content="{window.location.href}" />
        <meta property="og:site_name" content="Peptide Education Hub" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kisspeptin-10 | DrsPeptides" />
        <meta name="twitter:description" content="Clinical guide to Kisspeptin-10 for reproductive health and hormone regulation. Mechanisms, research findings, dosing protocols, clinical considerations, and safety data." />
        <meta name="twitter:image" content="{window.location.origin}/drspeptides_social_hero.png" />
      
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Kisspeptin-10",
          "description": "Clinical guide to Kisspeptin-10 for reproductive health and hormone regulation. Mechanisms, research findings, dosing protocols, clinical considerations, and safety data.",
          "url": ${window.location.href},
          "datePublished": "2025-01-01",
          "dateModified": "2025-12-01",
          "medicalAudience": {
                    "@type": "MedicalAudience",
                    "audienceType": "Physician"
          },
          "about": {
                    "@type": "MedicalTherapy",
                    "name": "Peptide Therapy"
          }
}`}
        </script>
      </Helmet>
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
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kisspeptin-10</h1>
            <p className="text-xl text-purple-50 mb-6">
              Master regulator of the hypothalamic-pituitary-gonadal (HPG) axis. Critical for reproductive hormone release, puberty initiation, and fertility.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Reproductive Health</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">GnRH Stimulation</span>
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
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Kisspeptin-10?</CardTitle>
                  <CardDescription>Master regulator of reproductive hormone signaling</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Kisspeptin-10 is a 10-amino acid peptide derived from the KISS1 gene, functioning as the master regulator of the hypothalamic-pituitary-gonadal (HPG) axis. It binds to the kisspeptin receptor (KISS1R, also known as GPR54) on GnRH neurons in the hypothalamus, triggering the release of gonadotropin-releasing hormone (GnRH).
                  </p>
                  <p>
                    This cascade stimulates the pituitary to release luteinizing hormone (LH) and follicle-stimulating hormone (FSH), which in turn regulate testosterone, estrogen, and progesterone production in the gonads. Kisspeptin is <strong>essential for puberty initiation, ovulation, and fertility</strong> in both sexes.
                  </p>
                  <p>
                    Discovered in the late 1990s, kisspeptin has emerged as a critical regulator of reproductive function. Mutations in KISS1 or KISS1R cause hypogonadotropic hypogonadism (failure to undergo puberty). Therapeutic applications include fertility enhancement, hypogonadism treatment, and potential sexual dysfunction interventions.
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
                      <Activity className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">GnRH Pulse Generator</h3>
                        <p className="text-sm text-gray-600">Stimulates pulsatile GnRH release, essential for normal reproductive function</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Fertility Enhancement</h3>
                        <p className="text-sm text-gray-600">Triggers ovulation in women, increases LH/FSH, supports spermatogenesis in men</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Puberty Initiation</h3>
                        <p className="text-sm text-gray-600">Rising kisspeptin levels trigger puberty onset; deficiency causes delayed puberty</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Investigational Status</h3>
                        <p className="text-sm text-gray-600">Not FDA-approved; used in clinical research for fertility and hypogonadism</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  Kisspeptin-10 is being investigated for <strong>fertility enhancement</strong> (triggering ovulation in IVF), <strong>hypogonadotropic hypogonadism</strong> (restoring GnRH signaling), and <strong>sexual dysfunction</strong> (enhancing libido via HPG axis activation). It offers a more physiological alternative to direct GnRH or hCG administration.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>KISS1R activation → GnRH release → LH/FSH surge → gonadal hormone production</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. KISS1R Activation on GnRH Neurons</h3>
                    <p className="text-sm text-gray-700">
                      Kisspeptin-10 binds to the kisspeptin receptor (KISS1R/GPR54) on GnRH neurons in the hypothalamus. This is a G-protein coupled receptor (Gq/11-linked) that triggers intracellular calcium signaling and neuronal depolarization. KISS1R activation is the <strong>primary physiological stimulus</strong> for GnRH release, making kisspeptin the "master switch" of the reproductive axis.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. GnRH Release and Pulsatility</h3>
                    <p className="text-sm text-gray-700">
                      Kisspeptin stimulates pulsatile GnRH secretion from the hypothalamus into the hypophyseal portal circulation. GnRH pulsatility is critical: continuous GnRH exposure desensitizes pituitary gonadotrophs (as seen with GnRH agonists used for chemical castration), while pulsatile release maintains LH/FSH responsiveness. Kisspeptin neurons generate the GnRH pulse generator rhythm.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. LH and FSH Surge</h3>
                    <p className="text-sm text-gray-700">
                      GnRH binds to receptors on pituitary gonadotrophs, triggering release of luteinizing hormone (LH) and follicle-stimulating hormone (FSH). In women, LH surge triggers ovulation; FSH promotes follicle development. In men, LH stimulates Leydig cells to produce testosterone; FSH supports spermatogenesis in Sertoli cells.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Gonadal Hormone Production</h3>
                    <p className="text-sm text-gray-700">
                      LH and FSH act on the gonads (ovaries/testes) to produce sex hormones (estrogen, progesterone, testosterone) and support gametogenesis (egg/sperm production). This completes the HPG axis cascade initiated by kisspeptin.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5. Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Half-life:</strong> ~30 minutes (short-acting; rapid metabolism)<br/>
                      <strong>Onset:</strong> LH surge within 30-60 minutes of injection<br/>
                      <strong>Duration:</strong> Effects last 2-4 hours; repeated dosing needed for sustained stimulation
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
                  <CardDescription>Landmark studies in fertility, puberty, and reproductive endocrinology</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Discovery and Genetic Studies</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      The discovery that mutations in KISS1 or KISS1R cause hypogonadotropic hypogonadism (failure to undergo puberty) established kisspeptin as essential for human reproduction. Patients with these mutations have absent or delayed puberty, low LH/FSH, and infertility—all reversible with kisspeptin administration.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/12944565/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Seminara et al. (2003) - New England Journal of Medicine
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(1,200+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Ovulation Induction in IVF</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Clinical trials have demonstrated that kisspeptin can trigger ovulation in women undergoing in vitro fertilization (IVF). Unlike hCG (standard trigger), kisspeptin induces a more physiological LH surge with lower risk of ovarian hyperstimulation syndrome (OHSS). This represents a safer alternative for high-risk patients.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/24549213/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Jayasena et al. (2014) - Journal of Clinical Investigation
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(250+ citations)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Hypogonadotropic Hypogonadism Treatment</h3>
                    <p className="text-sm text-gray-700">
                      Studies in men with congenital hypogonadotropic hypogonadism (CHH) showed that pulsatile kisspeptin administration restores LH/FSH secretion and increases testosterone levels. This offers a potential alternative to pulsatile GnRH therapy, which requires continuous pump infusion.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sexual Function and Libido</h3>
                    <p className="text-sm text-gray-700">
                      Preliminary studies suggest kisspeptin may enhance sexual arousal and desire, possibly through both hormonal (increased testosterone/estrogen) and central nervous system effects. Brain imaging studies show kisspeptin activates limbic regions involved in sexual arousal.
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
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">LH Surge Induction</h3>
                      <p className="text-sm text-purple-800">Single injection triggers robust LH surge within 30-60 minutes, comparable to natural mid-cycle surge</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Ovulation Triggering</h3>
                      <p className="text-sm text-purple-800">Successfully induces ovulation in IVF with lower OHSS risk vs hCG</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Testosterone Restoration</h3>
                      <p className="text-sm text-purple-800">Pulsatile dosing restores testosterone in hypogonadal men without testicular suppression</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Puberty Initiation</h3>
                      <p className="text-sm text-purple-800">Can initiate puberty in adolescents with kisspeptin deficiency</p>
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
                  <CardDescription>Based on clinical research; not FDA-approved</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Disclaimer:</strong> Kisspeptin-10 is investigational and not FDA-approved. The following protocols are based on clinical research studies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Ovulation Trigger (IVF)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 6.4-9.6 nmol/kg (approximately 0.5-1mg for 70kg woman) via subcutaneous injection<br/>
                      <strong>Timing:</strong> 36 hours before egg retrieval (replaces hCG trigger)<br/>
                      <strong>Indication:</strong> Women at high risk of OHSS undergoing IVF
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Hypogonadotropic Hypogonadism (Men)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 1-4 nmol/kg every 2 hours (pulsatile dosing via pump or frequent injections)<br/>
                      <strong>Duration:</strong> Continuous therapy to maintain LH/FSH/testosterone<br/>
                      <strong>Goal:</strong> Restore physiological GnRH pulsatility
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Fertility Enhancement (General)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Dose:</strong> 0.5-1mg subcutaneous injection<br/>
                      <strong>Frequency:</strong> Daily or every other day<br/>
                      <strong>Duration:</strong> 1-3 months, monitor LH/FSH/testosterone/estrogen response
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      Reconstitute lyophilized powder with bacteriostatic water. Administer via subcutaneous injection (abdomen, thigh). For pulsatile therapy, consider insulin pump or frequent manual injections. Store reconstituted vials refrigerated.
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
                      <h3 className="font-semibold">30-60 Minutes: LH Surge</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Rapid rise in LH levels (measurable in blood)</li>
                        <li>FSH also increases (less pronounced than LH)</li>
                        <li>Minimal side effects (well-tolerated)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">12-36 Hours: Ovulation (Women)</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Ovulation occurs 24-36 hours post-injection (if follicles mature)</li>
                        <li>Progesterone rise confirms ovulation</li>
                        <li>Lower OHSS risk vs hCG trigger</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Days-Weeks: Testosterone Rise (Men)</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Pulsatile dosing gradually increases testosterone</li>
                        <li>Testicular volume may increase (spermatogenesis)</li>
                        <li>Libido and erectile function improve</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">1-3 Months: Fertility Optimization</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Sustained HPG axis activation</li>
                        <li>Improved sperm parameters (men) or regular ovulation (women)</li>
                        <li>Increased pregnancy rates in fertility patients</li>
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
                  <CardDescription>Generally well-tolerated in clinical trials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>Pregnancy:</strong> Not studied; avoid during pregnancy</li>
                      <li><strong>Hormone-sensitive cancers:</strong> May stimulate estrogen/testosterone production</li>
                      <li><strong>Ovarian hyperstimulation syndrome (OHSS):</strong> Though lower risk than hCG, monitor closely</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Kisspeptin-10 is <strong>remarkably well-tolerated</strong> in clinical trials. Most studies report minimal side effects.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Injection site reactions:</strong> Mild redness, discomfort (rare)</li>
                      <li><strong>Headache:</strong> Occasional, mild</li>
                      <li><strong>Nausea:</strong> Rare</li>
                      <li><strong>Hot flashes:</strong> Possible with repeated dosing (hormonal fluctuations)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Advantages Over hCG (IVF)</h3>
                    <p className="text-sm text-blue-800">
                      Kisspeptin triggers a more physiological LH surge (shorter duration) compared to hCG, which has a long half-life and sustained ovarian stimulation. This reduces the risk of ovarian hyperstimulation syndrome (OHSS), a potentially life-threatening complication of IVF.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Long-Term Safety</h3>
                    <p className="text-sm text-gray-700">
                      Limited long-term data. Short-term studies (weeks to months) show excellent safety. No evidence of desensitization or adverse hormonal effects with pulsatile dosing. Theoretical concern about hormone-sensitive tumors (breast, prostate) requires monitoring.
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
                  <CardDescription>Essential surveillance for investigational use</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pre-Treatment Assessment</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li><strong>Baseline hormones:</strong> LH, FSH, testosterone (men), estradiol (women), prolactin</li>
                      <li><strong>Reproductive history:</strong> Fertility status, menstrual cycles, prior treatments</li>
                      <li><strong>Pregnancy test:</strong> Rule out pregnancy in women</li>
                      <li><strong>Imaging:</strong> Pelvic ultrasound (women) to assess ovarian follicles; testicular ultrasound (men) if hypogonadism</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Monitoring Schedule</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Acute (IVF trigger):</strong> LH levels 1-2 hours post-injection; ultrasound 12-24 hours to confirm follicle rupture</p>
                      <p><strong>Weekly (pulsatile therapy):</strong> LH, FSH, testosterone/estradiol to assess HPG axis response</p>
                      <p><strong>Monthly:</strong> Comprehensive hormone panel, pregnancy test (if trying to conceive), ultrasound (women)</p>
                      <p><strong>Every 3 months:</strong> Semen analysis (men), ovulation tracking (women), reassess need for continued therapy</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li><strong>LH surge:</strong> Rapid rise to &gt;20 IU/L within 1 hour (acute dosing)</li>
                      <li><strong>Testosterone normalization:</strong> Men: 300-1000 ng/dL</li>
                      <li><strong>Ovulation confirmation:</strong> Progesterone &gt;3 ng/mL in luteal phase</li>
                      <li><strong>Improved fertility:</strong> Pregnancy achievement, improved sperm parameters</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li><strong>OHSS symptoms (women):</strong> Severe abdominal pain, bloating, rapid weight gain, shortness of breath</li>
                      <li><strong>Excessive hormone levels:</strong> Testosterone &gt;1500 ng/dL (men), estradiol &gt;5000 pg/mL (women)</li>
                      <li><strong>Allergic reaction:</strong> Hives, difficulty breathing, facial swelling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper injection technique (subcutaneous, abdomen/thigh)</li>
                      <li>Timing relative to fertility goals (ovulation, IVF retrieval)</li>
                      <li>Pulsatile dosing requirements for hypogonadism (frequent injections or pump)</li>
                      <li>Pregnancy testing and contraception counseling</li>
                      <li>Recognition of OHSS symptoms (women undergoing fertility treatment)</li>
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
            Educational resource for healthcare providers. Kisspeptin-10 is investigational and not FDA-approved. 
            Consult current clinical research and guidelines for complete details.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Source peptides by clicking "Source Medical Grade Peptides Now" above
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
