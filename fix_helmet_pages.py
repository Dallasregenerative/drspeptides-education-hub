#!/usr/bin/env python3
"""
Fix all Helmet-based peptide pages to use usePageTitle + generatePeptideSchema instead.
This fixes the "Incorrect value type" error in Google Search Console caused by
unquoted ${window.location.href} in JSON-LD structured data.
"""
import re
import os

# Directory containing the pages
PAGES_DIR = "client/src/pages"

# All 20 files with the broken pattern
FILES_TO_FIX = [
    "Peptide5Amino1MQ.tsx",
    "PeptideAOD9604.tsx",
    "PeptideBPC157Capsules.tsx",
    "PeptideCagrilintide.tsx",
    "PeptideGHKCuSerum.tsx",
    "PeptideGHRP2.tsx",
    "PeptideGHRP6.tsx",
    "PeptideGLP1.tsx",
    "PeptideGlutathione.tsx",
    "PeptideIGF1LR3.tsx",
    "PeptideIbutamoren.tsx",
    "PeptideKisspeptin10.tsx",
    "PeptideNAD.tsx",
    "PeptideNADNasalSpray.tsx",
    "PeptideOxytocin.tsx",
    "PeptidePinealon.tsx",
    "PeptideRetatrutide.tsx",
    "PeptideSLUPP332.tsx",
    "PeptideSermorelin.tsx",
    "PeptideTesamorelin.tsx",
]

def extract_info(content, filename):
    """Extract peptide name, description, path, and function name from the file."""
    
    # Extract function name
    func_match = re.search(r'export default function (\w+)', content)
    func_name = func_match.group(1) if func_match else filename.replace('.tsx', '')
    
    # Extract title from <title> tag
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else ""
    
    # Extract peptide name from the schema "name" field
    name_match = re.search(r'"name":\s*"([^"]+)"', content)
    peptide_name = name_match.group(1) if name_match else title.split('|')[0].strip()
    
    # Extract description from meta description
    desc_match = re.search(r'<meta\s+name="description"\s+content="([^"]+)"', content)
    description = desc_match.group(1) if desc_match else ""
    
    # Extract keywords from meta keywords if present
    kw_match = re.search(r'<meta\s+name="keywords"\s+content="([^"]+)"', content)
    keywords = kw_match.group(1) if kw_match else ""
    
    # Try to determine the URL path from og:url or from the route
    # Look for the route path in App.tsx or derive from filename
    base_name = filename.replace('Peptide', '').replace('.tsx', '')
    
    # Map filenames to URL paths
    path_map = {
        "5Amino1MQ": "/peptides/5-amino-1mq",
        "AOD9604": "/peptides/aod-9604",
        "BPC157Capsules": "/peptides/bpc-157-capsules",
        "Cagrilintide": "/peptides/cagrilintide",
        "GHKCuSerum": "/peptides/ghk-cu-serum",
        "GHRP2": "/peptides/ghrp-2",
        "GHRP6": "/peptides/ghrp-6",
        "GLP1": "/peptides/glp-1",
        "Glutathione": "/peptides/glutathione",
        "IGF1LR3": "/peptides/igf-1-lr3",
        "Ibutamoren": "/peptides/ibutamoren",
        "Kisspeptin10": "/peptides/kisspeptin-10",
        "NAD": "/peptides/nad",
        "NADNasalSpray": "/peptides/nad-nasal-spray",
        "Oxytocin": "/peptides/oxytocin",
        "Pinealon": "/peptides/pinealon",
        "Retatrutide": "/peptides/retatrutide",
        "SLUPP332": "/peptides/slu-pp-332",
        "Sermorelin": "/peptides/sermorelin",
        "Tesamorelin": "/peptides/tesamorelin",
    }
    
    path = path_map.get(base_name, f"/peptides/{base_name.lower()}")
    
    return {
        'func_name': func_name,
        'peptide_name': peptide_name,
        'title': title,
        'description': description,
        'keywords': keywords,
        'path': path,
    }

def fix_file(filepath, filename):
    """Fix a single file by replacing Helmet with usePageTitle."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    info = extract_info(content, filename)
    
    # Step 1: Replace the Helmet import with usePageTitle import
    # Remove: import { Helmet } from "react-helmet-async";
    content = re.sub(
        r'import\s*\{\s*Helmet\s*\}\s*from\s*"react-helmet-async";\n?',
        '',
        content
    )
    
    # Add usePageTitle import if not already present
    if 'usePageTitle' not in content:
        # Find the first import line and add before it
        content = 'import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";\n' + content
    
    # Step 2: Remove the entire <Helmet>...</Helmet> block
    content = re.sub(
        r'\s*<Helmet>.*?</Helmet>\s*',
        '\n',
        content,
        flags=re.DOTALL
    )
    
    # Step 3: Add usePageTitle call inside the function
    # Find the function declaration and add the hook call
    func_pattern = rf'(export default function {info["func_name"]}\(\)\s*\{{)'
    
    # Determine if it uses return ( or return <>
    if 'return (' in content:
        # Standard pattern: function() { return (
        hook_call = f'''
  usePageTitle("{info['title']}", {{
    description: "{info['description']}",
    keywords: "{info['keywords']}",
    schema: generatePeptideSchema({{
      name: "{info['peptide_name']}",
      description: "{info['description']}",
      path: "{info['path']}",
      fdaStatus: "Investigational",
      category: "Regenerative Medicine"
    }})
  }});
'''
        content = re.sub(
            func_pattern,
            f'\\1{hook_call}',
            content
        )
    
    # Step 4: Remove the wrapping <> ... </> fragment if present (since Helmet is gone)
    # Replace <>\n with just the inner content
    content = re.sub(r'\s*<>\s*\n', '\n', content)
    content = re.sub(r'\s*</>\s*\n', '\n', content)
    
    # Also handle cases where <> is right before return
    # Clean up any double blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"Fixed: {filename} - {info['peptide_name']} ({info['path']})")

# Verify paths from App.tsx first
import subprocess
result = subprocess.run(['grep', '-E', 'ghrp-2|sermorelin|ibutamoren|aod-9604|5-amino|bpc-157-cap|cagrilintide|ghk-cu-serum|ghrp-6|glp-1|glutathione|igf-1|kisspeptin|nad-nasal|nad[^-]|oxytocin|pinealon|retatrutide|sl-upp|tesamorelin', 
                        'client/src/App.tsx'], capture_output=True, text=True)
print("Routes found in App.tsx:")
print(result.stdout)
print("---")

for filename in FILES_TO_FIX:
    filepath = os.path.join(PAGES_DIR, filename)
    if os.path.exists(filepath):
        fix_file(filepath, filename)
    else:
        print(f"NOT FOUND: {filename}")

print("\nDone! All files fixed.")
