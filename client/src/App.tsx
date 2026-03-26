import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import PractitionerToolbar from "./components/PractitionerToolbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Lazy-loaded page components for code splitting
const PeptideTB500 = lazy(() => import("./pages/PeptideTB500"));
const PeptideIpamorelin = lazy(() => import("./pages/PeptideIpamorelin"));
const PeptideCJC1295 = lazy(() => import("./pages/PeptideCJC1295"));
const PeptideGHKCu = lazy(() => import("./pages/PeptideGHKCu"));
const PeptideTesamorelin = lazy(() => import("./pages/PeptideTesamorelin"));
const PeptideIGF1LR3 = lazy(() => import("./pages/PeptideIGF1LR3"));
const PeptideSemaglutide = lazy(() => import("./pages/PeptideSemaglutide"));
const PeptideEpithalon = lazy(() => import("./pages/PeptideEpithalon"));
const PeptideSemax = lazy(() => import("./pages/PeptideSemax"));
const PeptideSelank = lazy(() => import("./pages/PeptideSelank"));
const PeptideDihexa = lazy(() => import("./pages/PeptideDihexa"));
const PeptideLL37 = lazy(() => import("./pages/PeptideLL37"));
const PeptideThymosinAlpha1 = lazy(() => import("./pages/PeptideThymosinAlpha1"));
const PeptideKPV = lazy(() => import("./pages/PeptideKPV"));
const PeptideDSIP = lazy(() => import("./pages/PeptideDSIP"));
const PeptideMOTSc = lazy(() => import("./pages/PeptideMOTSc"));
const PeptideHumanin = lazy(() => import("./pages/PeptideHumanin"));
const PeptideSS31 = lazy(() => import("./pages/PeptideSS31"));
const PeptideSLUPP332 = lazy(() => import("./pages/PeptideSLUPP332"));
const PeptideNAD = lazy(() => import("./pages/PeptideNAD"));
const PeptideBPC157 = lazy(() => import("./pages/PeptideBPC157"));
const PeptideTirzepatide = lazy(() => import("./pages/PeptideTirzepatide"));
const PeptideRetatrutide = lazy(() => import("./pages/PeptideRetatrutide"));
const PeptideSermorelin = lazy(() => import("./pages/PeptideSermorelin"));
const PeptidePT141 = lazy(() => import("./pages/PeptidePT141"));
const PeptideGHRP2 = lazy(() => import("./pages/PeptideGHRP2"));
const PeptideGlutathione = lazy(() => import("./pages/PeptideGlutathione"));
const Peptide5Amino1MQ = lazy(() => import("./pages/Peptide5Amino1MQ"));
const PeptideIbutamoren = lazy(() => import("./pages/PeptideIbutamoren"));
const PeptideAOD9604 = lazy(() => import("./pages/PeptideAOD9604"));
const PeptideMGF = lazy(() => import("./pages/PeptideMGF"));
const PeptideGHRP6 = lazy(() => import("./pages/PeptideGHRP6"));
const PeptideGLP1 = lazy(() => import("./pages/PeptideGLP1"));
const PeptideKisspeptin10 = lazy(() => import("./pages/PeptideKisspeptin10"));
const PeptideMelanotan2 = lazy(() => import("./pages/PeptideMelanotan2"));
const PeptideMelanotan1 = lazy(() => import("./pages/PeptideMelanotan1"));
const PeptideOxytocin = lazy(() => import("./pages/PeptideOxytocin"));
const PeptidePinealon = lazy(() => import("./pages/PeptidePinealon"));
const PeptideCagrilintide = lazy(() => import("./pages/PeptideCagrilintide"));
const PeptideBPC157Capsules = lazy(() => import("./pages/PeptideBPC157Capsules"));
const PeptideNADNasalSpray = lazy(() => import("./pages/PeptideNADNasalSpray"));
const PeptideGHKCuSerum = lazy(() => import("./pages/PeptideGHKCuSerum"));
const Blends = lazy(() => import("./pages/Blends"));
const BlendFormulaM51 = lazy(() => import("./pages/BlendFormulaM51"));
const BlendFormulaN5550 = lazy(() => import("./pages/BlendFormulaN5550"));
const BlendFormulaRG5555 = lazy(() => import("./pages/BlendFormulaRG5555"));
const BlendFormulaN259 = lazy(() => import("./pages/BlendFormulaN259"));
const BlendFormulaN69 = lazy(() => import("./pages/BlendFormulaN69"));
const BlendFormulaN111 = lazy(() => import("./pages/BlendFormulaN111"));
const BlendFormulaWL1175 = lazy(() => import("./pages/BlendFormulaWL1175"));
const BlendFormulaM2531 = lazy(() => import("./pages/BlendFormulaM2531"));
const BlendFormulaMShred = lazy(() => import("./pages/BlendFormulaMShred"));
const BlendFormulaOS01 = lazy(() => import("./pages/BlendFormulaOS01"));
const BlendFormulaN2331 = lazy(() => import("./pages/BlendFormulaN2331"));
const BlendBPC157TB500 = lazy(() => import("./pages/BlendBPC157TB500"));
const BlendBPCWolverine = lazy(() => import("./pages/BlendBPCWolverine"));
const BlendCJC1295Ipamorelin = lazy(() => import("./pages/BlendCJC1295Ipamorelin"));
const BlendSelankSemax = lazy(() => import("./pages/BlendSelankSemax"));
const BlendSemaglutideBPC157 = lazy(() => import("./pages/BlendSemaglutideBPC157"));
const BlendTirzepatideBPC157 = lazy(() => import("./pages/BlendTirzepatideBPC157"));
const TesamorelinIpamorelin = lazy(() => import("./pages/peptides/TesamorelinIpamorelin"));
const BlendGlowCore = lazy(() => import("./pages/BlendGlowCore"));
const BlendGlowPlus = lazy(() => import("./pages/BlendGlowPlus"));
const BlendGlowUltra = lazy(() => import("./pages/BlendGlowUltra"));
const BlendGLOWCapsules = lazy(() => import("./pages/BlendGLOWCapsules"));
const BlendKLOWCapsules = lazy(() => import("./pages/BlendKLOWCapsules"));
const SafetyStandards = lazy(() => import("./pages/SafetyStandards"));
const SafetyCompliance = lazy(() => import("./pages/SafetyCompliance"));
const StackingGuide = lazy(() => import("./pages/StackingGuide"));
const ResearchStudies = lazy(() => import("./pages/ResearchStudies"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogOS01AMPKActivator = lazy(() => import("./pages/BlogOS01AMPKActivator"));
const BlogOS01GLP1Partner = lazy(() => import("./pages/BlogOS01GLP1Partner"));
const BlogOS01OrganProtection = lazy(() => import("./pages/BlogOS01OrganProtection"));
const BlogOS01LongevityScience = lazy(() => import("./pages/BlogOS01LongevityScience"));
const BlogMShredTriplePathway = lazy(() => import("./pages/BlogMShredTriplePathway"));
const BlogMShredBAM15Science = lazy(() => import("./pages/BlogMShredBAM15Science"));
const BlogMShredSLUPP332 = lazy(() => import("./pages/BlogMShredSLUPP332"));
const BlogMShredC15FattyAcid = lazy(() => import("./pages/BlogMShredC15FattyAcid"));
const BlogOffLabelVsUnapproved = lazy(() => import("./pages/BlogOffLabelVsUnapproved"));
const BlogDefensiblePeptidePractice = lazy(() => import("./pages/BlogDefensiblePeptidePractice"));
const BlogFDACategory2Peptides = lazy(() => import("./pages/BlogFDACategory2Peptides"));
const BlogMalpracticeCarrierPeptides = lazy(() => import("./pages/BlogMalpracticeCarrierPeptides"));
const ConsentFormsHub = lazy(() => import("./pages/ConsentFormsHub"));
const ConsentFormStandardUS = lazy(() => import("./pages/ConsentFormStandardUS"));
const ConsentFormTexas = lazy(() => import("./pages/ConsentFormTexas"));
const ConsentFormCalifornia = lazy(() => import("./pages/ConsentFormCalifornia"));
const ConsentFormFlorida = lazy(() => import("./pages/ConsentFormFlorida"));
const ConsentFormNewYork = lazy(() => import("./pages/ConsentFormNewYork"));
const ConsentFormAbbreviated = lazy(() => import("./pages/ConsentFormAbbreviated"));
const ConsentFormMultiPeptide = lazy(() => import("./pages/ConsentFormMultiPeptide"));
const Training = lazy(() => import("./pages/Training"));
const PeptideEducation = lazy(() => import("./pages/PeptideEducation"));
const RegulatoryGuidance = lazy(() => import("./pages/RegulatoryGuidance"));
const SupplierDirectory = lazy(() => import("./pages/SupplierDirectory"));
const PatientEducation = lazy(() => import("./pages/PatientEducation"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const SafetyManagement = lazy(() => import("./pages/SafetyManagement"));
const InsuranceBilling = lazy(() => import("./pages/InsuranceBilling"));
const ProtocolBuilder = lazy(() => import("./pages/ProtocolBuilder"));
const PracticeToolkit = lazy(() => import("./pages/PracticeToolkit"));
const ComparisonTool = lazy(() => import("./pages/ComparisonTool"));
const FAQ = lazy(() => import("./pages/FAQ"));
const AdministrationGuide = lazy(() => import("./pages/AdministrationGuide"));
const WhatArePeptides = lazy(() => import("./pages/WhatArePeptides"));
const HowToInjectPeptides = lazy(() => import("./pages/HowToInjectPeptides"));
const ArePeptidesSafe = lazy(() => import("./pages/ArePeptidesSafe"));
const ReconstitutionCalculatorPage = lazy(() => import("./pages/ReconstitutionCalculatorPage"));
const EnhancedDosingCalculatorPage = lazy(() => import("./pages/EnhancedDosingCalculatorPage"));
const DosageCalculator = lazy(() => import("./pages/DosageCalculator"));
const InteractionChecker = lazy(() => import("./pages/InteractionChecker"));
const ProtocolBuilderPage = lazy(() => import("./pages/ProtocolBuilderPage"));
const ProgressTrackerPage = lazy(() => import("./pages/ProgressTrackerPage"));
const PatientHandoutsPage = lazy(() => import("./pages/PatientHandoutsPage"));
const BiomarkerTrackerPage = lazy(() => import("./pages/BiomarkerTrackerPage"));
const ProviderDashboard = lazy(() => import("./pages/ProviderDashboard"));
const AIAgentLanding = lazy(() => import("./pages/AIAgentLanding"));
const CostCalculator = lazy(() => import("./pages/CostCalculator"));
const Tools = lazy(() => import("./pages/Tools"));
const PeptideIndex = lazy(() => import("./pages/PeptideIndex"));
const PeptideNoopept = lazy(() => import("./pages/PeptideNoopept"));
const PeptideAlphaGPC = lazy(() => import("./pages/PeptideAlphaGPC"));
const PeptideCerebrolysin = lazy(() => import("./pages/PeptideCerebrolysin"));
const PeptideP21 = lazy(() => import("./pages/PeptideP21"));
const PeptideCortexin = lazy(() => import("./pages/PeptideCortexin"));
const PeptideNASemax = lazy(() => import("./pages/PeptideNASemax"));
const PeptideFollistatin = lazy(() => import("./pages/PeptideFollistatin"));
const PeptideKlotho = lazy(() => import("./pages/PeptideKlotho"));
const PeptidePE2228 = lazy(() => import("./pages/PeptidePE2228"));
const PeptideOrexinA = lazy(() => import("./pages/PeptideOrexinA"));
const PeptideFGL = lazy(() => import("./pages/PeptideFGL"));
const PeptideNMN = lazy(() => import("./pages/PeptideNMN"));
const PeptideSpermidine = lazy(() => import("./pages/PeptideSpermidine"));
const PeptideFisetin = lazy(() => import("./pages/PeptideFisetin"));
const PeptideResveratrol = lazy(() => import("./pages/PeptideResveratrol"));
const PeptidePterostilbene = lazy(() => import("./pages/PeptidePterostilbene"));
const PeptideGDF11 = lazy(() => import("./pages/PeptideGDF11"));
const PeptideQuercetin = lazy(() => import("./pages/PeptideQuercetin"));
const PeptideFOXO4DRI = lazy(() => import("./pages/PeptideFOXO4DRI"));
const PeptideRapamycin = lazy(() => import("./pages/PeptideRapamycin"));
const PeptideVIP = lazy(() => import("./pages/PeptideVIP"));
const PeptideNAC = lazy(() => import("./pages/PeptideNAC"));
const PeptideZincThymulin = lazy(() => import("./pages/PeptideZincThymulin"));
const PeptideTesofensine = lazy(() => import("./pages/PeptideTesofensine"));
const PeptideFragment176 = lazy(() => import("./pages/PeptideFragment176"));
const PeptideAdipotide = lazy(() => import("./pages/PeptideAdipotide"));
const PeptideHexarelin = lazy(() => import("./pages/PeptideHexarelin"));
const PeptideACE031 = lazy(() => import("./pages/PeptideACE031"));
const PeptideLarazotide = lazy(() => import("./pages/PeptideLarazotide"));
const PeptideMethyleneBlue = lazy(() => import("./pages/PeptideMethyleneBlue"));
const PeptideNASelank = lazy(() => import("./pages/PeptideNASelank"));
const PeptidePentosanPolysulfate = lazy(() => import("./pages/PeptidePentosanPolysulfate"));
const PeptideSNAP8 = lazy(() => import("./pages/PeptideSNAP8"));
const PeptideSurvodutide = lazy(() => import("./pages/PeptideSurvodutide"));
const PeptideThymalin = lazy(() => import("./pages/PeptideThymalin"));
const PeptideBPC157ArginateSalt = lazy(() => import("./pages/PeptideBPC157ArginateSalt"));
const PeptideLionsMane = lazy(() => import("./pages/PeptideLionsMane"));
const PeptideNR = lazy(() => import("./pages/PeptideNR"));
const PeptideMetformin = lazy(() => import("./pages/PeptideMetformin"));
const ProtocolMetabolism = lazy(() => import("./pages/ProtocolMetabolism"));
const ProtocolLongevity = lazy(() => import("./pages/ProtocolLongevity"));
const ProtocolCognitive = lazy(() => import("./pages/ProtocolCognitive"));
const ProtocolInjuryHealing = lazy(() => import("./pages/ProtocolInjuryHealing"));
const ProtocolWeightLoss = lazy(() => import("./pages/ProtocolWeightLoss"));
const PracticeAssessment = lazy(() => import("./pages/PracticeAssessment"));
const VideoLibraryPage = lazy(() => import("./pages/VideoLibraryPage"));
const DownloadableResources = lazy(() => import("./pages/DownloadableResources"));
const PeptideStatistics = lazy(() => import("./pages/PeptideStatistics"));
const EmbedWidgets = lazy(() => import("./pages/EmbedWidgets"));
const UltimateGuidePeptideTherapy = lazy(() => import("./pages/UltimateGuidePeptideTherapy"));
const Infographics = lazy(() => import("./pages/Infographics"));
const AIOptimizedFAQ = lazy(() => import("./pages/AIOptimizedFAQ"));
const PeptideGlossary = lazy(() => import("./pages/PeptideGlossary"));
const Footer = lazy(() => import("./components/Footer"));
const HowToReconstitutePeptides = lazy(() => import("./pages/HowToReconstitutePeptides"));
const PeptidesVsSteroids = lazy(() => import("./pages/PeptidesVsSteroids"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));













// New enhancement pages

function Router() {
  return (
    <>
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Switch>
      <Route path={"/"} component={Home} />
      
      {/* Individual Peptide Pages */}
      <Route path={"/peptides/tb-500"} component={PeptideTB500} />
      <Route path={"/peptides/ipamorelin"} component={PeptideIpamorelin} />
      <Route path={"/peptides/cjc-1295"} component={PeptideCJC1295} />
      <Route path={"/peptides/ghk-cu"} component={PeptideGHKCu} />
      <Route path={"/peptides/tesamorelin"} component={PeptideTesamorelin} />
      <Route path={"/peptides/igf-1-lr3"} component={PeptideIGF1LR3} />
      <Route path={"/peptides/semaglutide"} component={PeptideSemaglutide} />
      <Route path={"/peptides/epithalon"} component={PeptideEpithalon} />
      <Route path={"/peptides/semax"} component={PeptideSemax} />
      <Route path={"/peptides/selank"} component={PeptideSelank} />
      <Route path={"/peptides/dihexa"} component={PeptideDihexa} />
      <Route path={"/peptides/ll-37"} component={PeptideLL37} />
      <Route path={"/peptides/thymosin-alpha-1"} component={PeptideThymosinAlpha1} />
      <Route path={"/peptides/kpv"} component={PeptideKPV} />
      <Route path={"/peptides/dsip"} component={PeptideDSIP} />
      <Route path={"/peptides/mots-c"} component={PeptideMOTSc} />
      <Route path={"/peptides/humanin"} component={PeptideHumanin} />
      <Route path={"/peptides/ss-31"} component={PeptideSS31} />
      <Route path={"/peptides/slu-pp-332"} component={PeptideSLUPP332} />
      <Route path={"/peptides/nad"} component={PeptideNAD} />
      <Route path={"/peptides/bpc-157"} component={PeptideBPC157} />
      <Route path={"/peptides/tirzepatide"} component={PeptideTirzepatide} />
      <Route path={"/peptides/retatrutide"} component={PeptideRetatrutide} />
      <Route path={"/peptides/sermorelin"} component={PeptideSermorelin} />
      <Route path={"/peptides/pt-141"} component={PeptidePT141} />
      <Route path={"/peptides/ghrp-2"} component={PeptideGHRP2} />
      <Route path={"/peptides/glutathione"} component={PeptideGlutathione} />
      <Route path={"/peptides/5-amino-1mq"} component={Peptide5Amino1MQ} />
      <Route path={"/peptides/ibutamoren"} component={PeptideIbutamoren} />
      <Route path={"/peptides/aod-9604"} component={PeptideAOD9604} />
      <Route path={"/peptides/mgf"} component={PeptideMGF} />
      <Route path={"/peptides/ghrp-6"} component={PeptideGHRP6} />
      <Route path={"/peptides/glp-1"} component={PeptideGLP1} />

      {/* Newly Added Peptides */}
      <Route path={"/peptides/kisspeptin-10"} component={PeptideKisspeptin10} />
      <Route path={"/peptides/melanotan-2"} component={PeptideMelanotan2} />
      <Route path={"/peptides/melanotan-1"} component={PeptideMelanotan1} />
      <Route path={"/peptides/oxytocin"} component={PeptideOxytocin} />
      <Route path={"/peptides/pinealon"} component={PeptidePinealon} />
      <Route path={"/peptides/cagrilintide"} component={PeptideCagrilintide} />
      <Route path={"/peptides/bpc-157-capsules"} component={PeptideBPC157Capsules} />
      <Route path={"/peptides/nad-nasal-spray"} component={PeptideNADNasalSpray} />
      <Route path={"/peptides/ghk-cu-serum"} component={PeptideGHKCuSerum} />

      <Route path={"/blends"} component={Blends} />

      {/* Blend Formula Pages */}
      <Route path={"/peptides/formula-m-51"} component={BlendFormulaM51} />
      <Route path={"/peptides/formula-n-5550"} component={BlendFormulaN5550} />
      <Route path={"/peptides/formula-rg-5555"} component={BlendFormulaRG5555} />
      <Route path={"/peptides/formula-n-259"} component={BlendFormulaN259} />
      <Route path={"/peptides/formula-n-69"} component={BlendFormulaN69} />
      <Route path={"/peptides/formula-n-111"} component={BlendFormulaN111} />
      <Route path={"/peptides/formula-wl-1175"} component={BlendFormulaWL1175} />
      <Route path={"/peptides/formula-m-2531"} component={BlendFormulaM2531} />
      <Route path={"/peptides/formula-m-shred"} component={BlendFormulaMShred} />
      <Route path={"/peptides/formula-os-01"} component={BlendFormulaOS01} />
      <Route path={"/peptides/formula-n-2331"} component={BlendFormulaN2331} />
      <Route path={"/peptides/bpc-157-tb-500"} component={BlendBPC157TB500} />
      <Route path={"/peptides/bpc-wolverine"} component={BlendBPCWolverine} />
      <Route path={"/peptides/cjc-1295-ipamorelin"} component={BlendCJC1295Ipamorelin} />
      <Route path={"/peptides/selank-semax"} component={BlendSelankSemax} />
      <Route path={"/peptides/semaglutide-bpc-157"} component={BlendSemaglutideBPC157} />
      <Route path={"/peptides/tirzepatide-bpc-157"} component={BlendTirzepatideBPC157} />
      <Route path={"/peptides/tesamorelin-ipamorelin"} component={TesamorelinIpamorelin} />

      {/* Glow Series Pages */}
      <Route path={"/peptides/glow-core"} component={BlendGlowCore} />
      <Route path={"/peptides/glow-plus"} component={BlendGlowPlus} />
      <Route path={"/peptides/glow-ultra"} component={BlendGlowUltra} />
      <Route path={"/peptides/glow-blend-capsules"} component={BlendGLOWCapsules} />
      <Route path={"/peptides/klow-blend-capsules"} component={BlendKLOWCapsules} />

      {/* Resource and Guide Pages */}
      <Route path={"/safety-standards"} component={SafetyStandards} />
      <Route path={"/safety-compliance"} component={SafetyCompliance} />
      <Route path={"/stacking-guide"} component={StackingGuide} />
      <Route path={"/research-studies"} component={ResearchStudies} />
      <Route path={"/research"} component={ResearchStudies} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/os-01-first-oral-ampk-activator"} component={BlogOS01AMPKActivator} />
      <Route path={"/blog/os-01-missing-half-glp1-therapy"} component={BlogOS01GLP1Partner} />
      <Route path={"/blog/os-01-organ-protection-liver-kidney-heart"} component={BlogOS01OrganProtection} />
      <Route path={"/blog/os-01-ampk-longevity-exercise-mimetic"} component={BlogOS01LongevityScience} />
      <Route path={"/blog/m-shred-triple-pathway-fat-loss"} component={BlogMShredTriplePathway} />
      <Route path={"/blog/bam15-mitochondrial-uncoupler-science"} component={BlogMShredBAM15Science} />
      <Route path={"/blog/slu-pp-332-exercise-mimetic-pill"} component={BlogMShredSLUPP332} />
      <Route path={"/blog/c15-pentadecanoic-acid-essential-fatty-acid"} component={BlogMShredC15FattyAcid} />
      <Route path={"/blog/off-label-vs-unapproved-bpc-157"} component={BlogOffLabelVsUnapproved} />
      <Route path={"/blog/defensible-peptide-practice-risk-management"} component={BlogDefensiblePeptidePractice} />
      <Route path={"/blog/fda-category-1-vs-category-2-peptides"} component={BlogFDACategory2Peptides} />
      <Route path={"/blog/malpractice-carrier-peptide-practice"} component={BlogMalpracticeCarrierPeptides} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/training"} component={Training} />
      <Route path={"/peptide-education"} component={PeptideEducation} />
      <Route path={"/regulatory-guidance"} component={RegulatoryGuidance} />
      <Route path={"/supplier-directory"} component={SupplierDirectory} />
      <Route path={"/patient-education"} component={PatientEducation} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/safety-management"} component={SafetyManagement} />
      <Route path={"/insurance-billing"} component={InsuranceBilling} />
      <Route path={"/protocol-builder"} component={ProtocolBuilder} />
      <Route path={"/practice-toolkit"} component={PracticeToolkit} />
      <Route path={"/comparison-tool"} component={ComparisonTool} />
      <Route path={"/tools/comparison-tool"} component={ComparisonTool} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/administration-guide"} component={AdministrationGuide} />
      <Route path={"/what-are-peptides"} component={WhatArePeptides} />
      <Route path={"/how-to-inject-peptides"} component={HowToInjectPeptides} />
      <Route path={"/are-peptides-safe"} component={ArePeptidesSafe} />
      <Route path={"/how-to-reconstitute-peptides"} component={HowToReconstitutePeptides} />
      <Route path={"/guides/how-to-reconstitute-peptides"} component={HowToReconstitutePeptides} />
      <Route path={"/peptides-vs-steroids"} component={PeptidesVsSteroids} />
      <Route path={"/guides/peptides-vs-steroids"} component={PeptidesVsSteroids} />
      <Route path={"/tools/reconstitution-calculator"} component={ReconstitutionCalculatorPage} />
      <Route path={"/tools/enhanced-dosing-calculator"} component={EnhancedDosingCalculatorPage} />

      {/* Consent Form Pages */}
      <Route path={"/resources/consent-forms"} component={ConsentFormsHub} />
      <Route path={"/resources/consent-forms/standard-us"} component={ConsentFormStandardUS} />
      <Route path={"/resources/consent-forms/texas"} component={ConsentFormTexas} />
      <Route path={"/resources/consent-forms/california"} component={ConsentFormCalifornia} />
      <Route path={"/resources/consent-forms/florida"} component={ConsentFormFlorida} />
      <Route path={"/resources/consent-forms/new-york"} component={ConsentFormNewYork} />
      <Route path={"/resources/consent-forms/abbreviated"} component={ConsentFormAbbreviated} />
      <Route path={"/resources/consent-forms/multi-peptide-registry"} component={ConsentFormMultiPeptide} />

      {/* AI Agent Pages */}
      <Route path={"/dr-peptide"} component={AIAgentLanding} />
      <Route path={"/ai-agent"} component={AIAgentLanding} />

      {/* Tool Pages */}
      <Route path={"/tools"} component={Tools} />
      <Route path={"/peptide-index"} component={PeptideIndex} />
      <Route path={"/peptides"} component={PeptideIndex} />
      <Route path={"/dashboard"} component={ProviderDashboard} />
      <Route path={"/tools/dosage-calculator"} component={DosageCalculator} />
      <Route path={"/tools/interaction-checker"} component={InteractionChecker} />
      <Route path={"/tools/protocol-builder"} component={ProtocolBuilderPage} />
      <Route path={"/tools/progress-tracker"} component={ProgressTrackerPage} />
      <Route path={"/tools/patient-handouts"} component={PatientHandoutsPage} />
      <Route path={"/tools/biomarker-tracker"} component={BiomarkerTrackerPage} />
      <Route path={"/tools/cost-calculator"} component={CostCalculator} />

      {/* New Cognitive Peptides */}
      <Route path={"/peptides/noopept"} component={PeptideNoopept} />
      <Route path={"/peptides/alpha-gpc"} component={PeptideAlphaGPC} />
      <Route path={"/peptides/cerebrolysin"} component={PeptideCerebrolysin} />
      <Route path={"/peptides/p21"} component={PeptideP21} />
      <Route path={"/peptides/cortexin"} component={PeptideCortexin} />
      <Route path={"/peptides/na-semax"} component={PeptideNASemax} />
      <Route path={"/peptides/follistatin"} component={PeptideFollistatin} />
      <Route path={"/peptides/klotho"} component={PeptideKlotho} />
      <Route path={"/peptides/pe-22-28"} component={PeptidePE2228} />
      <Route path={"/peptides/orexin-a"} component={PeptideOrexinA} />
      <Route path={"/peptides/fgl"} component={PeptideFGL} />

      {/* New Longevity Peptides */}
      <Route path={"/peptides/nmn"} component={PeptideNMN} />
      <Route path={"/peptides/spermidine"} component={PeptideSpermidine} />
      <Route path={"/peptides/fisetin"} component={PeptideFisetin} />
      <Route path={"/peptides/resveratrol"} component={PeptideResveratrol} />
      <Route path={"/peptides/pterostilbene"} component={PeptidePterostilbene} />
      <Route path={"/peptides/gdf-11"} component={PeptideGDF11} />
      <Route path={"/peptides/quercetin"} component={PeptideQuercetin} />
      <Route path={"/peptides/foxo4-dri"} component={PeptideFOXO4DRI} />
      <Route path={"/peptides/rapamycin"} component={PeptideRapamycin} />

      {/* New Immune and Other Peptides */}
      <Route path={"/peptides/vip"} component={PeptideVIP} />
      <Route path={"/peptides/nac"} component={PeptideNAC} />
      <Route path={"/peptides/zinc-thymulin"} component={PeptideZincThymulin} />
      <Route path={"/peptides/tesofensine"} component={PeptideTesofensine} />
      <Route path={"/peptides/fragment-176-191"} component={PeptideFragment176} />
      <Route path={"/peptides/adipotide"} component={PeptideAdipotide} />
      <Route path={"/peptides/hexarelin"} component={PeptideHexarelin} />

      {/* New peptide pages (previously orphaned - had pre-rendered HTML but no React route) */}
      <Route path={"/peptides/ace-031"} component={PeptideACE031} />
      <Route path={"/peptides/larazotide"} component={PeptideLarazotide} />
      <Route path={"/peptides/methylene-blue"} component={PeptideMethyleneBlue} />
      <Route path={"/peptides/na-selank"} component={PeptideNASelank} />
      <Route path={"/peptides/pentosan-polysulfate"} component={PeptidePentosanPolysulfate} />
      <Route path={"/peptides/snap-8"} component={PeptideSNAP8} />
      <Route path={"/peptides/survodutide"} component={PeptideSurvodutide} />
      <Route path={"/peptides/thymalin"} component={PeptideThymalin} />
      <Route path={"/peptides/bpc-157-arginate-salt"} component={PeptideBPC157ArginateSalt} />
      <Route path={"/peptides/lions-mane"} component={PeptideLionsMane} />
      <Route path={"/peptides/nicotinamide-riboside"} component={PeptideNR} />
      <Route path={"/peptides/metformin"} component={PeptideMetformin} />

      {/* Alias routes for alternate slugs (SEO pre-rendered pages use different slugs) */}
      <Route path={"/peptides/glow-capsules"} component={BlendGLOWCapsules} />
      <Route path={"/peptides/klow-capsules"} component={BlendKLOWCapsules} />
      <Route path={"/peptides/kisspeptin"} component={PeptideKisspeptin10} />
      <Route path={"/peptides/melanotan-ii"} component={PeptideMelanotan2} />
      <Route path={"/peptides/nad-plus"} component={PeptideNAD} />

      {/* Protocol Pages */}
      <Route path={"/protocols/metabolism"} component={ProtocolMetabolism} />
      <Route path={"/protocols/longevity"} component={ProtocolLongevity} />
      <Route path={"/protocols/cognitive"} component={ProtocolCognitive} />
      <Route path={"/protocols/injury-healing"} component={ProtocolInjuryHealing} />
      <Route path={"/protocols/weight-loss"} component={ProtocolWeightLoss} />

      {/* New Enhancement Pages */}
      <Route path={"/tools/practice-assessment"} component={PracticeAssessment} />
      <Route path={"/video-library"} component={VideoLibraryPage} />
      <Route path={"/downloads"} component={DownloadableResources} />
      <Route path={"/statistics"} component={PeptideStatistics} />
      <Route path={"/embed"} component={EmbedWidgets} />
      <Route path={"/guides/ultimate-peptide-therapy-guide"} component={UltimateGuidePeptideTherapy} />
      <Route path={"/infographics"} component={Infographics} />
      <Route path={"/ai-faq"} component={AIOptimizedFAQ} />
      <Route path={"/glossary"} component={PeptideGlossary} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </Suspense>
    <Footer />
    <PractitionerToolbar />
    </>
  );
}


// Loading fallback for lazy-loaded routes
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-teal-600 text-lg">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
