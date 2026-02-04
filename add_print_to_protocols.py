#!/usr/bin/env python3
"""
Script to add PrintButton to protocol and educational pages.
"""

import os
import re

pages_dir = "/home/ubuntu/drspeptides-repo/client/src/pages"

# Pages to add PrintButton to
target_pages = [
    "AdministrationGuide.tsx",
    "PatientEducation.tsx",
    "PatientHandoutsPage.tsx",
    "ProtocolBuilder.tsx",
    "ProtocolBuilderPage.tsx",
    "ProtocolCognitive.tsx",
    "ProtocolInjuryHealing.tsx",
    "ProtocolLongevity.tsx",
    "ProtocolMetabolism.tsx",
    "ProtocolWeightLoss.tsx",
    "StackingGuide.tsx",
    "InteractionChecker.tsx",
    "ProgressTracker.tsx",
    "CostCalculator.tsx",
    "ReconstitutionGuide.tsx",
    "SafetyManagement.tsx",
]

import_line = 'import PrintButton from "@/components/PrintButton";'

modified_count = 0

for filename in target_pages:
    filepath = os.path.join(pages_dir, filename)
    
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has PrintButton
    if 'PrintButton' in content:
        print(f"Skipping {filename} - already has PrintButton")
        continue
    
    # Add import
    if import_line not in content:
        lines = content.split('\n')
        new_lines = []
        import_added = False
        
        for line in lines:
            new_lines.append(line)
            if line.startswith('import ') and not import_added:
                new_lines.append(import_line)
                import_added = True
        
        content = '\n'.join(new_lines)
    
    # Extract page name for title
    page_name = filename.replace('.tsx', '')
    page_name = re.sub(r'([A-Z])', r' \1', page_name).strip()
    
    # Try to find a good place to add the button
    # Look for the first </h1> tag and add after it
    if '</h1>' in content:
        # Find the first h1 closing tag
        match = re.search(r'</h1>\s*', content)
        if match:
            insert_pos = match.end()
            button_code = f'\n          <div className="mt-4 mb-6">\n            <PrintButton title="{page_name} - Patient Handout" subtitle="Peptide Education Hub" />\n          </div>\n'
            content = content[:insert_pos] + button_code + content[insert_pos:]
            
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Modified {filename}")
            modified_count += 1
        else:
            print(f"Could not find insertion point in {filename}")
    else:
        print(f"No h1 tag found in {filename}")

print(f"\nModified {modified_count} files")
