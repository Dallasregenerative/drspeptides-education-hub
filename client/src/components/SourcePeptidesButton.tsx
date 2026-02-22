import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

interface SourcePeptidesButtonProps {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function SourcePeptidesButton({ 
  variant = "default", 
  size = "default",
  className = "",
  showIcon = true
}: SourcePeptidesButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => window.open("https://peptideprotocols.ai", "_blank", "noopener,noreferrer")}
      className={`bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold ${className}`}
    >
      {showIcon && <Bot className="h-5 w-5 mr-2" />}
      Talk to Dr. Peptide AI
    </Button>
  );
}
