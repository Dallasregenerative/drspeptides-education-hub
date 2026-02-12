import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";

export default function WhatArePeptides() {
  return (
    <>
      <Helmet>
        <title>What Are Peptides? Complete Guide for Healthcare Providers | DrsPeptides</title>
        <meta name="description" content="Comprehensive guide to peptides for healthcare providers. Learn about peptide structure, mechanisms, therapeutic applications, and clinical use in modern medicine." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6">What Are Peptides?</h1>
            <p className="text-xl text-slate-600">
              A comprehensive guide to understanding peptides and their therapeutic applications
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4">Quick Answer</h2>
              <p className="text-lg">
                <strong>Peptides are short chains of amino acids</strong> (typically 2-50 amino acids) that act as signaling molecules in the body. They regulate numerous physiological processes including hormone production, immune function, tissue repair, and metabolism.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding Peptide Structure</h2>
            <p>
              Peptides are biological molecules composed of amino acids linked together by peptide bonds. These molecules exist on a spectrum between individual amino acids and full proteins, with distinct characteristics that make them uniquely valuable in therapeutic applications.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">How Peptides Work</h2>
            <p>
              Peptides function as signaling molecules that communicate instructions between cells, tissues, and organs. Their small size allows them to bind to specific receptors on cell surfaces or penetrate cell membranes to trigger intracellular responses.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Types of Therapeutic Peptides</h2>
            <ul className="space-y-4">
              <li><strong>Growth Hormone Secretagogues:</strong> Ipamorelin, CJC-1295, Tesamorelin</li>
              <li><strong>Regenerative Peptides:</strong> BPC-157, TB-500, GHK-Cu</li>
              <li><strong>Metabolic Peptides:</strong> Semaglutide, Tirzepatide, AOD-9604</li>
              <li><strong>Neuroprotective Peptides:</strong> Semax, Selank, Dihexa</li>
              <li><strong>Longevity Peptides:</strong> Epitalon, Humanin, SS-31</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Clinical Applications</h2>
            <p>
              Peptide therapy has emerged as a powerful tool in modern medicine, with applications spanning muscle recovery, weight management, cognitive enhancement, immune support, and anti-aging.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
              <p className="mb-4">Explore our comprehensive peptide profiles and clinical protocols</p>
              <a href="/training" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-slate-100">
                View Training Programs
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
