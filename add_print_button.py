#!/usr/bin/env python3
"""
Script to add PrintButton to all peptide pages.
Adds the import and button to the header section of each peptide page.
"""

import os
import re
import glob

# Directory containing peptide pages
pages_dir = "/home/ubuntu/drspeptides-repo/client/src/pages"

# Find all peptide page files
peptide_files = glob.glob(os.path.join(pages_dir, "Peptide*.tsx"))

# Import line to add
import_line = 'import PrintButton from "@/components/PrintButton";'

# Counter for modified files
modified_count = 0
skipped_count = 0

for filepath in peptide_files:
    filename = os.path.basename(filepath)
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has PrintButton
    if 'PrintButton' in content:
        print(f"Skipping {filename} - already has PrintButton")
        skipped_count += 1
        continue
    
    # Add import after the first import line
    if 'import ' in content:
        # Find the first import line and add our import after it
        lines = content.split('\n')
        new_lines = []
        import_added = False
        
        for i, line in enumerate(lines):
            new_lines.append(line)
            # Add import after the first import statement
            if line.startswith('import ') and not import_added:
                new_lines.append(import_line)
                import_added = True
        
        content = '\n'.join(new_lines)
    
    # Find the header section and add PrintButton
    # Look for the pattern: <Link href="/"> followed by Back to Home button
    # Add PrintButton after the Back to Home button
    
    # Pattern to find the header section with Back to Home button
    header_pattern = r'(<Button variant="ghost" className="gap-2">\s*<ArrowLeft[^/]*/>\s*Back to Home\s*</Button>\s*</Link>)'
    
    # Extract peptide name from filename for the print title
    peptide_name = filename.replace('Peptide', '').replace('.tsx', '')
    # Convert camelCase to readable name
    peptide_name = re.sub(r'([A-Z])', r' \1', peptide_name).strip()
    peptide_name = re.sub(r'(\d+)', r' \1', peptide_name).strip()
    
    # Replacement with PrintButton added
    replacement = r'\1\n            <PrintButton title="' + peptide_name + ' - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />'
    
    new_content = re.sub(header_pattern, replacement, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Modified {filename}")
        modified_count += 1
    else:
        print(f"Could not find header pattern in {filename}")

print(f"\nSummary:")
print(f"  Modified: {modified_count} files")
print(f"  Skipped: {skipped_count} files")
print(f"  Total peptide files: {len(peptide_files)}")
