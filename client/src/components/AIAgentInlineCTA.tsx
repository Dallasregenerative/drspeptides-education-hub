import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";

export default function AIAgentInlineCTA() {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Brain className="h-8 w-8 text-purple-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Need a Personalized Protocol?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Let Dr. Peptide AI create a customized protocol based on your patient's specific needs
            </p>
          </div>
        </div>
        <a 
          href="https://peptideprotocols.ai/?v=3.1.1762548959057" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap">
            Generate Protocol
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
