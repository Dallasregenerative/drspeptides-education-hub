import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Import all individual peptide pages
import PeptideTB500 from "./pages/PeptideTB500";
import PeptideIpamorelin from "./pages/PeptideIpamorelin";
import PeptideCJC1295 from "./pages/PeptideCJC1295";
import PeptideGHKCu from "./pages/PeptideGHKCu";
import PeptideTesamorelin from "./pages/PeptideTesamorelin";
import PeptideIGF1LR3 from "./pages/PeptideIGF1LR3";
import PeptideSemaglutide from "./pages/PeptideSemaglutide";
import PeptideEpithalon from "./pages/PeptideEpithalon";
import PeptideSemax from "./pages/PeptideSemax";
import PeptideSelank from "./pages/PeptideSelank";
import PeptideDihexa from "./pages/PeptideDihexa";
import PeptideLL37 from "./pages/PeptideLL37";
import PeptideThymosinAlpha1 from "./pages/PeptideThymosinAlpha1";
import PeptideKPV from "./pages/PeptideKPV";
import PeptideDSIP from "./pages/PeptideDSIP";
import PeptideMOTSc from "./pages/PeptideMOTSc";
import PeptideHumanin from "./pages/PeptideHumanin";
import PeptideSS31 from "./pages/PeptideSS31";
import PeptideSLUPP332 from "./pages/PeptideSLUPP332";
import PeptideNAD from "./pages/PeptideNAD";
import PeptideBPC157 from "./pages/PeptideBPC157";
import PeptideTirzepatide from "./pages/PeptideTirzepatide";
import PeptideRetatrutide from "./pages/PeptideRetatrutide";
import PeptideSermorelin from "./pages/PeptideSermorelin";
import PeptidePT141 from "./pages/PeptidePT141";
import PeptideGHRP2 from "./pages/PeptideGHRP2";
import PeptideGlutathione from "./pages/PeptideGlutathione";
import Peptide5Amino1MQ from "./pages/Peptide5Amino1MQ";
import PeptideIbutamoren from "./pages/PeptideIbutamoren";
import PeptideAOD9604 from "./pages/PeptideAOD9604";
import PeptideMGF from "./pages/PeptideMGF";
import PeptideGHRP6 from "./pages/PeptideGHRP6";
import PeptideGLP1 from "./pages/PeptideGLP1";

// Import newly added peptides
import PeptideKisspeptin10 from "./pages/PeptideKisspeptin10";
import PeptideMelanotan2 from "./pages/PeptideMelanotan2";
import PeptideMelanotan1 from "./pages/PeptideMelanotan1";
import PeptideOxytocin from "./pages/PeptideOxytocin";
import PeptidePinealon from "./pages/PeptidePinealon";
import PeptideCagrilintide from "./pages/PeptideCagrilintide";
import PeptideBPC157Capsules from "./pages/PeptideBPC157Capsules";
import PeptideNADNasalSpray from "./pages/PeptideNADNasalSpray";
import PeptideGHKCuSerum from "./pages/PeptideGHKCuSerum";

// Import blend formula pages
import BlendFormulaM51 from "./pages/BlendFormulaM51";
import BlendFormulaN5550 from "./pages/BlendFormulaN5550";
import BlendFormulaRG5555 from "./pages/BlendFormulaRG5555";
import BlendBPC157TB500 from "./pages/BlendBPC157TB500";
import BlendBPCWolverine from "./pages/BlendBPCWolverine";
import BlendCJC1295Ipamorelin from "./pages/BlendCJC1295Ipamorelin";
import BlendSelankSemax from "./pages/BlendSelankSemax";
import BlendSemaglutideBPC157 from "./pages/BlendSemaglutideBPC157";
import BlendTirzepatideBPC157 from "./pages/BlendTirzepatideBPC157";
import TesamorelinIpamorelin from "./pages/peptides/TesamorelinIpamorelin";

// Import Glow series pages
import BlendGlowCore from "./pages/BlendGlowCore";
import BlendGlowPlus from "./pages/BlendGlowPlus";
import BlendGlowUltra from "./pages/BlendGlowUltra";
import BlendGLOWCapsules from "./pages/BlendGLOWCapsules";
import BlendKLOWCapsules from "./pages/BlendKLOWCapsules";

// Import resource and guide pages
import SafetyStandards from "./pages/SafetyStandards";
import SafetyCompliance from "./pages/SafetyCompliance";
import StackingGuide from "./pages/StackingGuide";
import ResearchStudies from "./pages/ResearchStudies";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdministrationGuide from "./pages/AdministrationGuide";

// Import protocol pages
import ProtocolMetabolism from "./pages/ProtocolMetabolism";
import ProtocolLongevity from "./pages/ProtocolLongevity";
import ProtocolCognitive from "./pages/ProtocolCognitive";
import ProtocolInjuryHealing from "./pages/ProtocolInjuryHealing";
import ProtocolWeightLoss from "./pages/ProtocolWeightLoss";

function Router() {
  return (
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

      {/* Blend Formula Pages */}
      <Route path={"/peptides/formula-m-51"} component={BlendFormulaM51} />
      <Route path={"/peptides/formula-n-5550"} component={BlendFormulaN5550} />
      <Route path={"/peptides/formula-rg-5555"} component={BlendFormulaRG5555} />
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
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/administration-guide"} component={AdministrationGuide} />

      {/* Protocol Pages */}
      <Route path={"/protocols/metabolism"} component={ProtocolMetabolism} />
      <Route path={"/protocols/longevity"} component={ProtocolLongevity} />
      <Route path={"/protocols/cognitive"} component={ProtocolCognitive} />
      <Route path={"/protocols/injury-healing"} component={ProtocolInjuryHealing} />
      <Route path={"/protocols/weight-loss"} component={ProtocolWeightLoss} />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
