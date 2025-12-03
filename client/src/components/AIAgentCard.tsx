import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AIAgentCard() {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-2 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <Brain className="h-8 w-8 text-purple-600 animate-pulse" />
            <Sparkles className="h-4 w-4 absolute -top-1 -right-1 text-yellow-500" />
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            NEW
          </div>
        </div>
        <CardTitle className="text-2xl">Dr. Peptide AI</CardTitle>
        <CardDescription className="text-base">
          World's first AI agent for personalized peptide protocols
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>16 specialized AI agents</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>2,800+ clinical studies analyzed</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>Personalized protocols in 5 minutes</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <a 
            href="https://peptideprotocols.ai/?v=3.1.1762548959057" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Try Dr. Peptide AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          
          <a href="/dr-peptide" className="w-full">
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
