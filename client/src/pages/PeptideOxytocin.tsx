import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";
import PeptideCTA from "@/components/PeptideCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, CheckCircle2, ExternalLink, Heart, Users, Shield, Brain , BookOpen , Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SourcePeptidesButton from "@/components/SourcePeptidesButton";
import { Button } from "@/components/ui/button";

export default function PeptideOxytocin() {
  usePageTitle("Oxytocin | DrsPeptides", {
    description: "Clinical guide to oxytocin for social bonding, mental health, and therapeutic applications. Mechanisms, dosing protocols, safety considerations, and evidence for healthcare providers.",
    keywords: "",
    schema: generatePeptideSchema({
      name: "Oxytocin",
      description: "Clinical guide to oxytocin for social bonding, mental health, and therapeutic applications. Mechanisms, dosing protocols, safety considerations, and evidence for healthcare providers.",
      path: "/peptides/oxytocin",
      fdaStatus: "Investigational",
      category: "Regenerative Medicine"
    })
  });

  return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Oxytocin</h1>
            <p className="text-xl text-pink-50 mb-6">
              The "love hormone" and social bonding neuropeptide. Regulates uterine contractions, lactation, social attachment, trust, and sexual function.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Social Bonding</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Sexual Wellness</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">FDA-Approved (Labor)</span>
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
                  <CardTitle>What is Oxytocin?</CardTitle>
                  <CardDescription>Neuropeptide hormone regulating social bonding, reproduction, and emotional connection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Oxytocin is a 9-amino acid neuropeptide hormone produced in the hypothalamus and released by the posterior pituitary gland. It plays critical roles in childbirth (uterine contractions), lactation (milk ejection), social bonding (parent-infant attachment, romantic relationships), trust and empathy, and sexual function (orgasm, pair bonding).
                  </p>
                  <p>
                    Oxytocin is FDA-approved as Pitocin for labor induction and augmentation, and for controlling postpartum hemorrhage. Beyond obstetric use, oxytocin has gained attention for its potential in treating social anxiety, autism spectrum disorder, post-traumatic stress disorder (PTSD), and sexual dysfunction. Intranasal oxytocin formulations are being investigated for psychiatric and social cognition applications.
                  </p>
                  <p>
                    The peptide acts through oxytocin receptors (OXTR) in the brain, uterus, mammary glands, and other tissues. Central (brain) oxytocin mediates social behaviors, while peripheral oxytocin drives reproductive functions. Oxytocin's role as a "prosocial" hormone has made it a focus of research in neuroscience, psychology, and relationship dynamics.
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
                      <Users className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Social Bonding</h3>
                        <p className="text-sm text-gray-600">Enhances trust, empathy, social recognition, and attachment behaviors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Sexual Function</h3>
                        <p className="text-sm text-gray-600">Facilitates orgasm, pair bonding, and sexual satisfaction in both sexes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Stress Reduction</h3>
                        <p className="text-sm text-gray-600">Anxiolytic effects; reduces cortisol and promotes calm social engagement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">FDA-Approved (Obstetric)</h3>
                        <p className="text-sm text-gray-600">Pitocin approved for labor induction and postpartum hemorrhage control</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Clinical Applications</h3>
                <p className="text-sm text-blue-800">
                  FDA-approved: Labor induction, augmentation of labor, postpartum hemorrhage control. Investigational: Autism spectrum disorder (social communication), PTSD (fear extinction), social anxiety disorder, sexual dysfunction (anorgasmia, low libido), relationship enhancement.
                </p>
              </div>
            </TabsContent>

            {/* Mechanism Tab */}
            <TabsContent value="mechanism" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mechanism of Action</CardTitle>
                  <CardDescription>Oxytocin receptor (OXTR) activation in brain, uterus, and peripheral tissues</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Central (Brain) Effects - Social Bonding & Emotion</h3>
                    <p className="text-sm text-gray-700">
                      Oxytocin acts on OXTR in the amygdala, nucleus accumbens, prefrontal cortex, and other limbic regions. It reduces amygdala reactivity to threatening stimuli (anxiolytic effect), enhances social recognition and memory, increases trust and generosity, and promotes empathy and emotional attunement. These effects underlie oxytocin's role in parent-infant bonding, romantic attachment, and prosocial behavior.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">2. Peripheral Effects - Reproduction & Lactation</h3>
                    <p className="text-sm text-gray-700">
                      Uterine contractions: Oxytocin binds to OXTR on uterine smooth muscle, triggering rhythmic contractions during labor. This is the basis for Pitocin use in obstetrics. Milk ejection: Oxytocin stimulates myoepithelial cells in mammary glands, causing milk "let-down" during breastfeeding. Sexual function: Released during orgasm in both sexes, contributing to sexual satisfaction and pair bonding.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">3. Stress Axis Modulation</h3>
                    <p className="text-sm text-gray-700">
                      Oxytocin inhibits the hypothalamic-pituitary-adrenal (HPA) axis, reducing cortisol release and promoting calm, affiliative behavior. This explains why social support and physical touch (which release oxytocin) buffer stress responses.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Pharmacokinetics</h3>
                    <p className="text-sm text-gray-700">
                      Half-life: ~3-5 minutes (IV); ~20-30 minutes (intranasal, though CNS penetration debated). Onset: IV: immediate; intranasal: 15-30 minutes (if CNS effects occur). Duration: IV: 30-60 minutes; intranasal: 1-2 hours (highly variable)
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Intranasal Oxytocin Controversy</h3>
                    <p className="text-sm text-yellow-800">
                      Whether intranasal oxytocin reaches the brain in meaningful concentrations is highly debated. Some studies show behavioral effects (suggesting CNS penetration), while others find no difference from placebo. Peripheral effects (e.g., uterine contractions) are well-established with IV oxytocin.
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
                  <CardDescription>Extensive research in social neuroscience, psychiatry, and obstetrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Social Bonding and Trust</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Landmark studies demonstrated that intranasal oxytocin increases trust in economic games, enhances social recognition, and improves emotion recognition from facial expressions. These findings established oxytocin as a key regulator of human social behavior.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a 
                        href="https://pubmed.ncbi.nlm.nih.gov/15931222/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                      >
                        Kosfeld et al. (2005) - Nature
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {" "}(3,000+ citations) - Trust game study
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Autism Spectrum Disorder (ASD)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Clinical trials have investigated intranasal oxytocin for improving social communication deficits in ASD. Results are mixed: some studies show improvements in social cognition and repetitive behaviors, while others find no benefit. Meta-analyses suggest modest effects, with high variability between individuals.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">PTSD and Anxiety Disorders</h3>
                    <p className="text-sm text-gray-700">
                      Oxytocin has been studied for PTSD (enhancing fear extinction, reducing hypervigilance) and social anxiety disorder (reducing social threat perception). Preliminary results are promising, but large-scale trials are needed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sexual Function and Orgasm</h3>
                    <p className="text-sm text-gray-700">
                      Oxytocin levels surge during orgasm in both men and women. Studies suggest intranasal oxytocin may enhance sexual arousal and satisfaction, though evidence is limited. It is sometimes used off-label for anorgasmia (inability to orgasm).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Obstetric Use (FDA-Approved)</h3>
                    <p className="text-sm text-gray-700">
                      IV oxytocin (Pitocin) is the gold standard for labor induction and augmentation. It is also used to control postpartum hemorrhage by promoting uterine contractions after delivery. This is the only FDA-approved indication.
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
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">Trust Enhancement</h3>
                      <p className="text-sm text-pink-800">Intranasal oxytocin increases trust and cooperative behavior in economic games (Kosfeld 2005, 3,000+ citations)</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">Social Recognition</h3>
                      <p className="text-sm text-pink-800">Improves facial emotion recognition and social memory</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">Stress Reduction</h3>
                      <p className="text-sm text-pink-800">Reduces cortisol and amygdala reactivity to social threats</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-pink-900 mb-2">Labor Induction</h3>
                      <p className="text-sm text-pink-800">FDA-approved Pitocin safely and effectively induces/augments labor</p>
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
                  <CardDescription>FDA-approved for obstetric use; investigational for psychiatric/social applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">FDA-Approved: Labor Induction (IV)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Dose: Start 0.5-2 mU/min IV infusion, titrate every 30 minutes until adequate contractions. Maximum: 20-40 mU/min (institutional protocols vary). Monitoring: Continuous fetal heart rate and uterine contraction monitoring required
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Investigational: Intranasal (Social/Psychiatric)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Dose: 24-40 IU (international units) intranasal spray. Frequency: Single dose or twice daily (research protocols vary). Duration: Acute (single dose) or chronic (weeks to months). Note: Not FDA-approved for psychiatric use; investigational only
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Sexual Wellness (Off-Label)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Dose: 24-40 IU intranasal 30-60 minutes before sexual activity. Goal: Enhance arousal, orgasm intensity, and emotional connection. Evidence: Anecdotal; limited clinical trial data
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Administration</h3>
                    <p className="text-sm text-gray-700">
                      IV: Hospital setting only; continuous monitoring required (obstetric use). Intranasal: Spray into nostrils; absorption through nasal mucosa (investigational use)
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
                      <h3 className="font-semibold">15-30 Minutes: Onset (Intranasal)</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Subjective feelings of calm and social ease</li>
                        <li>Enhanced emotional attunement to others</li>
                        <li>Reduced social anxiety (if present)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">30-90 Minutes: Peak Effects</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Increased trust and prosocial behavior</li>
                        <li>Improved facial emotion recognition</li>
                        <li>Enhanced sexual arousal and connection (if used for sexual wellness)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">1-2 Hours: Duration</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Effects gradually diminish</li>
                        <li>Return to baseline social/emotional state</li>
                        <li>No withdrawal or rebound effects</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Chronic Use (Weeks): Potential Adaptation</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                        <li>Some studies suggest sustained improvements in social function (ASD, social anxiety)</li>
                        <li>Other studies show tolerance or diminished effects with repeated use</li>
                        <li>Individual variability is high</li>
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
                  <CardDescription>Well-established safety for obstetric use; intranasal use generally well-tolerated</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Contraindications (IV Obstetric Use)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Cephalopelvic disproportion: Baby too large for pelvis</li>
                      <li>Unfavorable fetal position: Transverse lie, cord prolapse</li>
                      <li>Fetal distress: Non-reassuring fetal heart rate</li>
                      <li>Uterine hypertonicity: Excessive contractions (risk of uterine rupture)</li>
                      <li>Previous uterine surgery: Classical cesarean section, myomectomy</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Side Effects (Intranasal)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Intranasal oxytocin is generally well-tolerated. Most side effects are mild and transient.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Nasal irritation: Dryness, discomfort at spray site</li>
                      <li>Headache: Mild, occasional</li>
                      <li>Dizziness: Rare</li>
                      <li>Uterine contractions (women): Possible, especially in pregnancy (avoid during pregnancy)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Pregnancy Warning (Intranasal)</h3>
                    <p className="text-sm text-yellow-800">
                      Do not use intranasal oxytocin during pregnancy unless medically supervised. Oxytocin can trigger uterine contractions and premature labor. IV oxytocin (Pitocin) is used for labor induction only under hospital supervision.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Potential Risks (Investigational Use)</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Context-dependent effects: Oxytocin may increase in-group favoritism and out-group hostility in some contexts</li>
                      <li>Individual variability: Effects vary widely; some individuals show no response</li>
                      <li>Long-term safety unknown: Chronic intranasal use not well-studied</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Follow-Up</CardTitle>
                  <CardDescription>Essential for obstetric use; less critical for investigational intranasal use</CardDescription>
                </CardHeader>
                
<Card className="mb-8">
  <CardHeader>
    <CardTitle>
      Scientific References
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
      <li>
        Kosfeld et al. (2005). Oxytocin increases trust in humans. <i>Nature</i>. Demonstrated that intranasal oxytocin enhances trust behavior in economic games.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/15931222/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        MacDonald & Feifel (2014). Oxytocin's role in anxiety: A critical review. <i>Biological Psychiatry</i>. Reviewed anxiolytic effects of oxytocin and its therapeutic potential.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24631364/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Guastella et al. (2010). Intranasal oxytocin improves emotion recognition in youth with autism spectrum disorders. <i>Biological Psychiatry</i>. Showed improved social cognition after oxytocin administration.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19897199/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Meyer-Lindenberg et al. (2011). Oxytocin and vasopressin in the human brain: Social neuropeptides for translational medicine. <i>Nature Reviews Neuroscience</i>. Summarized oxytocin's neural mechanisms and clinical applications.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/21407232/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Carter (2014). Oxytocin pathways and the evolution of human behavior. <i>Annual Review of Psychology</i>. Discussed oxytocin's evolutionary role in social bonding and reproduction.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/24016297/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Churchland & Winkielman (2012). Modulating social behavior with oxytocin: How does it work? <i>Trends in Cognitive Sciences</i>. Explored oxytocin's context-dependent effects on social cognition.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/22424452/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Gimpl & Fahrenholz (2001). The oxytocin receptor system: Structure, function, and regulation. <i>Physiological Reviews</i>. Detailed receptor pharmacology and signaling pathways.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/11274341/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Lee et al. (2020). Oxytocin and autism spectrum disorder: A systematic review and meta-analysis of randomized controlled trials. <i>Psychoneuroendocrinology</i>. Found modest benefits of oxytocin on social symptoms in ASD.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/32087984/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Jurek & Neumann (2018). The oxytocin receptor: From intracellular signaling to behavior. <i>Physiological Reviews</i>. Comprehensive review of oxytocin receptor signaling and behavioral effects.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/29466173/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
      <li>
        Heinrichs et al. (2009). Oxytocin, vasopressin, and human social behavior. <i>Frontiers in Neuroendocrinology</i>. Discussed neuroendocrine regulation of social behaviors by oxytocin.{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/19362027/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed]</a>
      </li>
    </ol>
  </CardContent>
</Card>

<Card className="mb-8">
  <CardHeader>
    <CardTitle>Synergistic Combinations</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4 text-sm text-gray-700">
    <p>
      Oxytocin may be combined with other peptides and compounds to enhance therapeutic effects, especially in social, psychiatric, and sexual wellness contexts:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Vasopressin:</strong> Complementary neuropeptide involved in social behavior and pair bonding; combined use may modulate social cognition and anxiety.
      </li>
      <li>
        <strong>Melanotan II:</strong> Used to enhance sexual function and libido; may synergize with oxytocin's effects on sexual arousal and bonding.
      </li>
      <li>
        <strong>BDNF (Brain-Derived Neurotrophic Factor) enhancers:</strong> Such as exercise or certain nootropics; may support neuroplasticity alongside oxytocin's social cognition effects.
      </li>
      <li>
        <strong>SSRIs (Selective Serotonin Reuptake Inhibitors):</strong> Often prescribed for anxiety and depression; oxytocin may enhance social engagement and reduce social anxiety when combined carefully.
      </li>
      <li>
        <strong>Magnesium:</strong> Has calming properties and may support oxytocin's anxiolytic effects.
      </li>
      <li>
        <strong>CBD (Cannabidiol):</strong> May reduce anxiety and promote social comfort; potential additive effects with oxytocin.
      </li>
    </ul>
    <p>
      <em>Note:</em> Combinations should be individualized and monitored due to potential interactions and variable responses.
    </p>
  </CardContent>
</Card>

<CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Obstetric Use (IV) - Hospital Monitoring</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Continuous fetal heart rate monitoring: Detect fetal distress</li>
                      <li>Uterine contraction monitoring: Assess frequency, duration, intensity</li>
                      <li>Maternal vital signs: Blood pressure, heart rate every 15-30 minutes</li>
                      <li>Fluid balance: Monitor for water intoxication (rare with high-dose oxytocin)</li>
                      <li>Immediate intervention: Stop infusion if fetal distress or uterine hypertonicity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Investigational Use (Intranasal) - Outpatient</h3>
                    <div className="space-y-2 text-sm">
                      <p>Baseline assessment: Social function, anxiety levels, relationship quality (validated scales)</p>
                      <p>Week 1: Tolerability check (nasal irritation, headache, subjective effects)</p>
                      <p>Monthly: Reassess target symptoms (social anxiety, ASD symptoms, sexual function)</p>
                      <p>Pregnancy testing: Women of childbearing age should use contraception or confirm not pregnant</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Efficacy Markers (Investigational)</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li>Improved social function: Better social interactions, reduced social anxiety</li>
                      <li>Enhanced relationship quality: Increased intimacy, trust, communication</li>
                      <li>Sexual satisfaction: Improved arousal, orgasm quality, emotional connection</li>
                      <li>Reduced PTSD symptoms: Better fear extinction, less hypervigilance</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Warning Signs - Seek Medical Attention</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                      <li>Uterine contractions (women): Abdominal cramping, especially if pregnant</li>
                      <li>Severe headache: Persistent or worsening</li>
                      <li>Allergic reaction: Hives, difficulty breathing, facial swelling</li>
                      <li>Worsening psychiatric symptoms: Increased anxiety, paranoia, or mood instability</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Patient Education</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Proper intranasal administration technique</li>
                      <li>Timing relative to social situations or sexual activity</li>
                      <li>Pregnancy avoidance (use contraception)</li>
                      <li>Context-dependent effects (oxytocin may not be universally "prosocial")</li>
                      <li>Individual variability in response</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}

      {/* Dr. Peptide CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Personalized Protocol from Dr. Peptide</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Dr. Peptide analyzes your patient's genetics and lab data, applies predictive outcome modeling, and leverages collective intelligence from practitioners nationwide to build precision protocols — every recommendation PubMed-cited.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SourcePeptidesButton />
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                Explore More Peptides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
