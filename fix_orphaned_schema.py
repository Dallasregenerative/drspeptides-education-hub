#!/usr/bin/env python3
"""
Fix orphaned Product schema remnants left after the initial regex removal.
The first script removed the opening { "@context"... "@type": "Product"... } 
but left behind the category, manufacturer, and offers fields as orphaned JSON.

We need to remove everything from the closing } of the Drug block's orphaned comma
through to the next proper schema block starting with {.
"""

import re
import glob

blend_files = sorted(glob.glob('client/src/pages/BlendFormula*.tsx'))
print(f"Fixing {len(blend_files)} files...")

for filepath in blend_files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # Pattern: After the Drug schema closing "}", there are orphaned lines like:
    #   },
    #     "category": "...",
    #     "manufacturer": { ... },
    #     "offers": { ... }
    #   },
    # We need to remove from the orphaned fields up to (but not including) the next { that starts a new schema block
    
    # Find the pattern: },\n followed by orphaned "category" (not inside a proper @type block)
    # and ending with },\n    {
    pattern = r'(\}\s*\n)\s*"category":\s*"[^"]*",\s*\n\s*"manufacturer":\s*\{[^}]*\},\s*\n\s*"offers":\s*\{[^}]*\{[^}]*\}[^}]*\}\s*\n\s*\},'
    
    match = re.search(pattern, content, re.DOTALL)
    if match:
        # Replace with just the closing brace of the Drug block and a comma
        content = content[:match.start()] + match.group(1).rstrip() + ',' + content[match.end():]
        print(f"  ✓ Fixed orphaned fields in {filepath.split('/')[-1]}")
    else:
        # Try a more flexible pattern
        # Look for "category" appearing right after a } that closes the Drug block
        pattern2 = r'},\n\s*"category".*?"offers".*?\}\s*\n\s*\},'
        match2 = re.search(pattern2, content, re.DOTALL)
        if match2:
            content = content[:match2.start()] + '},' + content[match2.end():]
            print(f"  ✓ Fixed orphaned fields (alt) in {filepath.split('/')[-1]}")
        else:
            print(f"  ✗ Could not find orphaned fields in {filepath.split('/')[-1]}")
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)

print("\nVerifying no Product/offers remnants remain...")
import subprocess
result = subprocess.run(['grep', '-rn', '"offers"', *blend_files], capture_output=True, text=True)
if result.stdout.strip():
    print("WARNING: Still found 'offers' in files:")
    print(result.stdout)
else:
    print("✓ All clean - no offers found")

result2 = subprocess.run(['grep', '-rn', '"category"', *blend_files], capture_output=True, text=True)
if result2.stdout.strip():
    print("WARNING: Still found 'category' in files:")
    print(result2.stdout)
else:
    print("✓ All clean - no category found")
