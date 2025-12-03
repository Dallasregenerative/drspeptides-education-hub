import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "@/pages/NotFound";

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
  </div>
);

// Lazy load peptide pages
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

// Lazy load blend pages
const BlendBPC157TB500 = lazy(() => import("./pages/BlendBPC157TB500"));
const BlendBPCWolverine = lazy(() => import("./pages/BlendBPCWolverine"));
const BlendCJC1295Ipamorelin = lazy(() => import("./pages/BlendCJC1295Ipamorelin"));
const BlendFormulaM51 = lazy(() => import("./pages/BlendFormulaM51"));
const BlendSemaBPC = lazy(() => import("./pages/BlendSemaBPC"));
const BlendTirzBPC = lazy(() => import("./pages/BlendTirzBPC"));
const BlendSelankSemax = lazy(() => import("./pages/BlendSelankSemax"));

// Lazy load protocol pages
const ProtocolWeightLoss = lazy(() => import("./pages/ProtocolWeightLoss"));
const ProtocolInjuryHealing = lazy(() => import("./pages/ProtocolInjuryHealing"));
const ProtocolLongevity = lazy(() => import("./pages/ProtocolLongevity"));
const ProtocolCognitive = lazy(() => import("./pages/ProtocolCognitive"));
const ProtocolMetabolism = lazy(() => import("./pages/ProtocolMetabolism"));

// Lazy load tool pages
const DosageCalculator = lazy(() => import("./pages/DosageCalculator"));
const InteractionChecker = lazy(() => import("./pages/InteractionChecker"));
const ProtocolBuilder = lazy(() => import("./pages/ProtocolBuilder"));
const ComparisonTool = lazy(() => import("./pages/ComparisonTool"));
const PracticeToolkit = lazy(() => import("./pages/PracticeToolkit"));

// Lazy load resource pages
const PatientEducation = lazy(() => import("./pages/PatientEducation"));
const FAQ = lazy(() => import("./pages/FAQ"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const SafetyManagement = lazy(() => import("./pages/SafetyManagement"));
const InsuranceBilling = lazy(() => import("./pages/InsuranceBilling"));
const SupplierDirectory = lazy(() => import("./pages/SupplierDirectory"));
const RegulatoryGuidance = lazy(() => import("./pages/RegulatoryGuidance"));

// Lazy load other pages
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Training = lazy(() => import("./pages/Training"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" component={Home} />
              
              {/* Peptide Routes */}
              <Route path="/peptides/tb-500" component={PeptideTB500} />
              <Route path="/peptides/ipamorelin" component={PeptideIpamorelin} />
              <Route path="/peptides/cjc-1295" component={PeptideCJC1295} />
              <Route path="/peptides/ghk-cu" component={PeptideGHKCu} />
              <Route path="/peptides/tesamorelin" component={PeptideTesamorelin} />
              <Route path="/peptides/igf-1-lr3" component={PeptideIGF1LR3} />
              <Route path="/peptides/semaglutide" component={PeptideSemaglutide} />
              <Route path="/peptides/epithalon" component={PeptideEpithalon} />
              <Route path="/peptides/semax" component={PeptideSemax} />
              <Route path="/peptides/selank" component={PeptideSelank} />
              <Route path="/peptides/dihexa" component={PeptideDihexa} />
              <Route path="/peptides/ll-37" component={PeptideLL37} />
              <Route path="/peptides/thymosin-alpha-1" component={PeptideThymosinAlpha1} />
              <Route path="/peptides/kpv" component={PeptideKPV} />
              <Route path="/peptides/dsip" component={PeptideDSIP} />
              <Route path="/peptides/mots-c" component={PeptideMOTSc} />
              <Route path="/peptides/humanin" component={PeptideHumanin} />
              <Route path="/peptides/ss-31" component={PeptideSS31} />
              <Route path="/peptides/slupp-332" component={PeptideSLUPP332} />
              <Route path="/peptides/nad" component={PeptideNAD} />
              <Route path="/peptides/bpc-157" component={PeptideBPC157} />
              <Route path="/peptides/tirzepatide" component={PeptideTirzepatide} />
              <Route path="/peptides/retatrutide" component={PeptideRetatrutide} />
              <Route path="/peptides/sermorelin" component={PeptideSermorelin} />
              <Route path="/peptides/pt-141" component={PeptidePT141} />
              <Route path="/peptides/ghrp-2" component={PeptideGHRP2} />
              <Route path="/peptides/glutathione" component={PeptideGlutathione} />
              <Route path="/peptides/5-amino-1mq" component={Peptide5Amino1MQ} />
              <Route path="/peptides/ibutamoren" component={PeptideIbutamoren} />
              <Route path="/peptides/aod-9604" component={PeptideAOD9604} />
              <Route path="/peptides/mgf" component={PeptideMGF} />
              <Route path="/peptides/ghrp-6" component={PeptideGHRP6} />
              <Route path="/peptides/glp-1" component={PeptideGLP1} />

              {/* Blend Routes */}
              <Route path="/peptides/bpc-157-tb-500" component={BlendBPC157TB500} />
              <Route path="/peptides/wolverine" component={BlendBPCWolverine} />
              <Route path="/peptides/cjc-1295-ipamorelin-blend" component={BlendCJC1295Ipamorelin} />
              <Route path="/peptides/formula-m-51" component={BlendFormulaM51} />
              <Route path="/peptides/semaglutide-bpc-157" component={BlendSemaBPC} />
              <Route path="/peptides/tirzepatide-bpc-157" component={BlendTirzBPC} />
              <Route path="/peptides/selank-semax" component={BlendSelankSemax} />

              {/* Protocol Routes */}
              <Route path="/protocols/weight-loss" component={ProtocolWeightLoss} />
              <Route path="/protocols/injury-healing" component={ProtocolInjuryHealing} />
              <Route path="/protocols/longevity" component={ProtocolLongevity} />
              <Route path="/protocols/cognitive" component={ProtocolCognitive} />
              <Route path="/protocols/metabolism" component={ProtocolMetabolism} />

              {/* Tool Routes */}
              <Route path="/tools/dosage-calculator" component={DosageCalculator} />
              <Route path="/tools/interaction-checker" component={InteractionChecker} />
              <Route path="/tools/protocol-builder" component={ProtocolBuilder} />
              <Route path="/tools/comparison" component={ComparisonTool} />
              <Route path="/tools/practice-toolkit" component={PracticeToolkit} />

              {/* Resource Routes */}
              <Route path="/resources/patient-education" component={PatientEducation} />
              <Route path="/resources/faq" component={FAQ} />
              <Route path="/resources/case-studies" component={CaseStudies} />
              <Route path="/resources/safety" component={SafetyManagement} />
              <Route path="/resources/insurance" component={InsuranceBilling} />
              <Route path="/resources/supplier-directory" component={SupplierDirectory} />
              <Route path="/resources/regulatory" component={RegulatoryGuidance} />

              {/* Other Routes */}
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/training" component={Training} />

              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
