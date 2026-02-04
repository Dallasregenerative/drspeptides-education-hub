#!/usr/bin/env python3
"""
Script to add PrintButton to all peptide pages - handles multiple header patterns.
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
failed_count = 0

for filepath in peptide_files:
    filename = os.path.basename(filepath)
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has PrintButton
    if 'PrintButton' in content:
        print(f"Skipping {filename} - already has PrintButton")
        skipped_count += 1
        continue
    
    # Add import after the first import line if not present
    if import_line not in content:
        lines = content.split('\n')
        new_lines = []
        import_added = False
        
        for i, line in enumerate(lines):
            new_lines.append(line)
            if line.startswith('import ') and not import_added:
                new_lines.append(import_line)
                import_added = True
        
        content = '\n'.join(new_lines)
    
    # Extract peptide name from filename for the print title
    peptide_name = filename.replace('Peptide', '').replace('.tsx', '')
    peptide_name = re.sub(r'([A-Z])', r' \1', peptide_name).strip()
    peptide_name = re.sub(r'(\d+)', r' \1', peptide_name).strip()
    
    original_content = content
    
    # Try multiple patterns to find the header
    patterns = [
        # Pattern 1: Back to Home with variant="ghost" className="gap-2"
        (r'(<Button variant="ghost" className="gap-2">\s*<ArrowLeft[^/]*/>\s*Back to Home\s*</Button>\s*</Link>)',
         r'\1\n            <PrintButton title="' + peptide_name + ' - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />'),
        
        # Pattern 2: Back to Home with variant="ghost" size="sm" className="gap-2"
        (r'(<Button variant="ghost" size="sm" className="gap-2">\s*<ArrowLeft[^/]*/>\s*Back to Home\s*</Button>\s*</Link>)',
         r'\1\n            <PrintButton title="' + peptide_name + ' - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />'),
        
        # Pattern 3: Just look for </Link> after Back to Home
        (r'(Back to Home\s*</Button>\s*</Link>)',
         r'\1\n            <PrintButton title="' + peptide_name + ' - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />'),
    ]
    
    modified = False
    for pattern, replacement in patterns:
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        if new_content != content:
            content = new_content
            modified = True
            break
    
    if modified:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Modified {filename}")
        modified_count += 1
    else:
        # Last resort: manually insert after the header div
        # Find the header section and add PrintButton
        if '<header' in content and 'Back to Home' in content:
            # Find position after </Link> that follows Back to Home
            match = re.search(r'Back to Home.*?</Link>', content, re.DOTALL)
            if match:
                insert_pos = match.end()
                button_code = f'\n            <PrintButton title="{peptide_name} - Patient Information" subtitle="Peptide Education Hub" className="ml-2" />'
                content = content[:insert_pos] + button_code + content[insert_pos:]
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Modified {filename} (fallback method)")
                modified_count += 1
            else:
                print(f"Failed to modify {filename}")
                failed_count += 1
        else:
            print(f"Failed to modify {filename} - no header found")
            failed_count += 1

print(f"\nSummary:")
print(f"  Modified: {modified_count} files")
print(f"  Skipped (already has PrintButton): {skipped_count} files")
print(f"  Failed: {failed_count} files")
print(f"  Total peptide files: {len(peptide_files)}")
