const fs = require('fs');
const path = require('path');

const seoPath = path.join(__dirname, 'generate-seo-pages.cjs');
let seoContent = fs.readFileSync(seoPath, 'utf8');

const newSeoEntries = `
  "/blog/is-peptide-therapy-fda-approved": { title: "Is Peptide Therapy FDA Approved? | Peptide Education Hub", desc: "Understanding the regulatory landscape of peptide therapy, which peptides are FDA-approved, and what off-label use means in clinical practice.", type: "article" },
  "/blog/how-long-does-peptide-therapy-take-to-work": { title: "How Long Does Peptide Therapy Take to Work? | Peptide Education Hub", desc: "A comprehensive timeline of what to expect when starting peptide therapy, from immediate effects to long-term cellular changes.", type: "article" },
  "/blog/are-peptides-safe": { title: "Are Peptides Safe? Risks and Benefits | Peptide Education Hub", desc: "An objective look at the safety profile of peptide therapy, potential side effects, and how to minimize risks when undergoing treatment.", type: "article" },`;

seoContent = seoContent.replace('const ROUTE_META = {', 'const ROUTE_META = {' + newSeoEntries);
fs.writeFileSync(seoPath, seoContent);
console.log('Updated generate-seo-pages.cjs');
