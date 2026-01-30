import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill } from "lucide-react";
import { Link } from "wouter";
import { PeptideInfo, colorClasses } from "@/data/peptideData";

interface PeptideCardProps {
  peptide: PeptideInfo;
}

export default function PeptideCard({ peptide }: PeptideCardProps) {
  const colors = colorClasses[peptide.color];
  
  return (
    <Link href={`/peptides/${peptide.slug}`}>
      <Card className={`hover:shadow-lg transition-shadow h-full ${colors.border} ${colors.bg} cursor-pointer`}>
        <CardHeader className="pb-2">
          <Pill className={`h-8 w-8 ${colors.icon} mb-2`} />
          <CardTitle className={colors.title}>{peptide.name}</CardTitle>
          <CardDescription className="line-clamp-2">{peptide.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">
            {peptide.category.charAt(0).toUpperCase() + peptide.category.slice(1)} | {peptide.stack}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
