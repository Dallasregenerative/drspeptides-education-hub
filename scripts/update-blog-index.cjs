const fs = require('fs');
const path = require('path');

const blogTsxPath = path.join(__dirname, '../client/src/pages/Blog.tsx');
const blogPostTsxPath = path.join(__dirname, '../client/src/pages/BlogPost.tsx');

// Update Blog.tsx
let blogTsx = fs.readFileSync(blogTsxPath, 'utf8');

const newPosts = `
  {
    id: "is-peptide-therapy-fda-approved",
    title: "Is Peptide Therapy FDA Approved? What Patients and Providers Need to Know",
    excerpt: "Understanding the regulatory landscape of peptide therapy, which peptides are FDA-approved, and what 'off-label' use means in clinical practice.",
    date: "July 24, 2026",
    category: "Patient Education",
    readTime: "5 min read"
  },
  {
    id: "how-long-does-peptide-therapy-take-to-work",
    title: "How Long Does Peptide Therapy Take to Work? A Timeline of Results",
    excerpt: "A comprehensive timeline of what to expect when starting peptide therapy, from immediate effects to long-term cellular changes.",
    date: "July 25, 2026",
    category: "Patient Education",
    readTime: "6 min read"
  },
  {
    id: "are-peptides-safe",
    title: "Are Peptides Safe? Understanding the Risks and Benefits",
    excerpt: "An objective look at the safety profile of peptide therapy, potential side effects, and how to minimize risks when undergoing treatment.",
    date: "July 26, 2026",
    category: "Patient Education",
    readTime: "6 min read"
  },`;

// Insert new posts at the beginning of the array
blogTsx = blogTsx.replace('const blogPosts = [', 'const blogPosts = [' + newPosts);
fs.writeFileSync(blogTsxPath, blogTsx);

// Update BlogPost.tsx
let blogPostTsx = fs.readFileSync(blogPostTsxPath, 'utf8');

const newImports = `
import IsPeptideTherapyFDAApproved from './blog/IsPeptideTherapyFDAApproved.md?raw';
import HowLongDoesPeptideTherapyTakeToWork from './blog/HowLongDoesPeptideTherapyTakeToWork.md?raw';
import ArePeptidesSafe from './blog/ArePeptidesSafe.md?raw';
`;

blogPostTsx = blogPostTsx.replace('import BPC157DosingGuide from \'./blog/BPC157DosingGuide.md?raw\';', 'import BPC157DosingGuide from \'./blog/BPC157DosingGuide.md?raw\';' + newImports);

const newMapEntries = `
  "is-peptide-therapy-fda-approved": IsPeptideTherapyFDAApproved,
  "how-long-does-peptide-therapy-take-to-work": HowLongDoesPeptideTherapyTakeToWork,
  "are-peptides-safe": ArePeptidesSafe,
`;

blogPostTsx = blogPostTsx.replace('const blogContentMap: Record<string, string> = {', 'const blogContentMap: Record<string, string> = {' + newMapEntries);
fs.writeFileSync(blogPostTsxPath, blogPostTsx);

console.log('Updated Blog.tsx and BlogPost.tsx');
