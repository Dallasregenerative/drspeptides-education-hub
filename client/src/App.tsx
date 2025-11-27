import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import ResearchStudies from "./pages/ResearchStudies";
import PeptideBPC157 from "./pages/PeptideBPC157";
import PeptideGLP1 from "./pages/PeptideGLP1";
import SafetyCompliance from "./pages/SafetyCompliance";
import AdministrationGuide from "./pages/AdministrationGuide";
import ProtocolWeightLoss from "@/pages/ProtocolWeightLoss";
import ProtocolInjuryHealing from "@/pages/ProtocolInjuryHealing";
import ProtocolMetabolism from "@/pages/ProtocolMetabolism";
import ProtocolLongevity from "@/pages/ProtocolLongevity";
import ProtocolCognitive from "./pages/ProtocolCognitive";
import StackingGuide from "./pages/StackingGuide";
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
import PeptideTirzepatide from "./pages/PeptideTirzepatide";
import PeptideRetatrutide from "./pages/PeptideRetatrutide";
import PeptideSermorelin from "./pages/PeptideSermorelin";
import PeptidePT141 from "./pages/PeptidePT141";
import PeptideGHRP2 from "./pages/PeptideGHRP2";
import BlendFormulaM51 from "./pages/BlendFormulaM51";
import BlendFormulaN5550 from "./pages/BlendFormulaN5550";
import BlendFormulaRG5555 from "./pages/BlendFormulaRG5555";
import BlendBPC157TB500 from "./pages/BlendBPC157TB500";
import SafetyStandards from "@/pages/SafetyStandards";
function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/research"} component={ResearchStudies} />
      <Route path={"/peptides/bpc-157"} component={PeptideBPC157} />
      <Route path={"/peptides/glp-1"} component={PeptideGLP1} />
      <Route path={"/safety-compliance"} component={SafetyCompliance} />
      <Route path={"/administration-guide"} component={AdministrationGuide} />
      <Route path="/protocols/weight-loss" component={ProtocolWeightLoss} />
      <Route path="/protocols/injury-healing" component={ProtocolInjuryHealing} />
      <Route path="/protocols/metabolism" component={ProtocolMetabolism} />
      <Route path="/protocols/longevity" component={ProtocolLongevity} />
      <Route path="/protocols/cognitive" component={ProtocolCognitive} />
      <Route path="/stacking-guide" component={StackingGuide} />
      <Route path="/peptides/tb-500" component={PeptideTB500} />
      <Route path="/peptides/ipamorelin" component={PeptideIpamorelin} />
      <Route path="/peptides/cjc-1295" component={PeptideCJC1295} />
      <Route path="/peptides/ghk-cu" component={PeptideGHKCu} />
      <Route path="/peptides/tesamorelin" component={PeptideTesamorelin} />
      <Route path="/peptides/igf1-lr3" component={PeptideIGF1LR3} />
      <Route path="/peptides/semaglutide" component={PeptideSemaglutide} />
      <Route path="/peptides/epithalon" component={PeptideEpithalon} />
      <Route path="/peptides/semax" component={PeptideSemax} />
      <Route path="/peptides/selank" component={PeptideSelank} />
      <Route path="/peptides/dihexa" component={PeptideDihexa} />
      <Route path="/peptides/ll-37" component={PeptideLL37} />
      <Route path="/peptides/thymosin-alpha-1" component={PeptideThymosinAlpha1} />
      <Route path="/peptides/kpv" component={PeptideKPV} />
      <Route path="/peptides/dsip" component={PeptideDSIP} />
       <Route path="/peptide/mots-c" component={PeptideMOTSc} />      <Route path="/peptides/humanin" component={PeptideHumanin} />
      <Route path="/peptides/ss-31" component={PeptideSS31} />
      <Route path="/peptides/slu-pp-332" component={PeptideSLUPP332} />
      <Route path="/peptides/nad" component={PeptideNAD} />
      <Route path="/peptides/tirzepatide" component={PeptideTirzepatide} />
      <Route path="/peptides/retatrutide" component={PeptideRetatrutide} />
      <Route path="/peptides/sermorelin" component={PeptideSermorelin} />
      <Route path="/peptides/pt-141" component={PeptidePT141} />
      <Route path="/peptides/ghrp-2" component={PeptideGHRP2} />
       <Route path="/blend/formula-m-51" component={BlendFormulaM51} />
      <Route path="/blend/formula-n-5550" component={BlendFormulaN5550} />
      <Route path="/blend/formula-rg-5555" component={BlendFormulaRG5555} />
      <Route path="/blend/bpc-157-tb-500" component={BlendBPC157TB500} />
      <Route path="/safety-standards" component={SafetyStandards} />
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
