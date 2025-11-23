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
import ProtocolCognitive from "@/pages/ProtocolCognitive";
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
