import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";

export default function HowToInjectPeptides() {
  return (
    <>
      <Helmet>
        <title>How to Inject Peptides: Complete Guide | DrsPeptides</title>
        <meta name="description" content="Step-by-step guide to peptide injection techniques, reconstitution, dosing, and best practices for healthcare providers." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        <Navigation />
        
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">How to Inject Peptides</h1>
          <p className="text-xl text-slate-600 mb-8">Complete guide to peptide administration and injection techniques</p>

          <div className="prose prose-lg max-w-none">
            <h2>Reconstitution Process</h2>
            <p>Most peptides arrive as lyophilized powder and must be reconstituted with bacteriostatic water before use.</p>
            
            <h3>Step-by-Step Reconstitution</h3>
            <ol>
              <li>Remove peptide vial and bacteriostatic water from refrigerator</li>
              <li>Clean tops of both vials with alcohol swabs</li>
              <li>Draw appropriate amount of bacteriostatic water into syringe</li>
              <li>Inject water slowly down the side of the peptide vial</li>
              <li>Gently swirl until powder is fully dissolved</li>
              <li>Store reconstituted peptide in refrigerator</li>
            </ol>

            <h2>Injection Techniques</h2>
            
            <h3>Subcutaneous Injection</h3>
            <p>Most common method for peptide administration.</p>
            
            <h4>Preferred Sites:</h4>
            <ul>
              <li>Abdomen (2 inches from navel)</li>
              <li>Thigh (front or outer)</li>
              <li>Upper arm (back)</li>
              <li>Hip/buttocks</li>
            </ul>

            <h4>Steps:</h4>
            <ol>
              <li>Wash hands thoroughly</li>
              <li>Clean injection site with alcohol swab</li>
              <li>Pinch skin to create a fold</li>
              <li>Insert needle at 45-90 degree angle</li>
              <li>Inject slowly and steadily</li>
              <li>Remove needle and apply gentle pressure</li>
              <li>Dispose of needle in sharps container</li>
            </ol>

            <h2>Safety Considerations</h2>
            <ul>
              <li>Use sterile technique throughout</li>
              <li>Never reuse needles or syringes</li>
              <li>Dispose of sharps properly</li>
              <li>Monitor for injection site reactions</li>
            </ul>
          </div>
        </article>

        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Peptide Education Hub</p>
          </div>
        </footer>
      </div>
    </>
  );
}
