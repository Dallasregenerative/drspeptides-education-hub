#!/usr/bin/env python3
"""
Remove Product schema blocks from all 11 blend formula pages.
Also change ogType from 'product' to 'article'.
The Product schema is causing Google Search Console errors because:
- This is an educational site, not e-commerce
- Product schema requires price, offers, review, aggregateRating
- Google interprets it as merchant listings and flags missing fields
"""

import re
import os
import glob

blend_files = glob.glob('client/src/pages/BlendFormula*.tsx')
print(f"Found {len(blend_files)} blend formula files to fix")

for filepath in sorted(blend_files):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    
    # 1. Change ogType from 'product' to 'article'
    content = content.replace("ogType: 'product' as const,", "ogType: 'article' as const,")
    
    # 2. Remove the entire Product schema block
    # The pattern is: a comma + whitespace + { "@context": "https://schema.org", "@type": "Product", ... },
    # followed by the next schema block
    
    # Use regex to find and remove the Product schema block
    # Match from the comma before the Product block to the closing brace + comma
    pattern = r',\s*\{\s*"@context":\s*"https://schema\.org",\s*"@type":\s*"Product",[^}]*?"offers":\s*\{[^}]*?\}[^}]*?\}'
    
    match = re.search(pattern, content, re.DOTALL)
    if match:
        content = content[:match.start()] + content[match.end():]
        print(f"  ✓ Removed Product schema from {os.path.basename(filepath)}")
    else:
        # Try simpler pattern without offers
        pattern2 = r',\s*\{\s*"@context":\s*"https://schema\.org",\s*"@type":\s*"Product",.*?\n\s*\}'
        match2 = re.search(pattern2, content, re.DOTALL)
        if match2:
            content = content[:match2.start()] + content[match2.end():]
            print(f"  ✓ Removed Product schema (alt pattern) from {os.path.basename(filepath)}")
        else:
            print(f"  ✗ Could not find Product schema in {os.path.basename(filepath)}")
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"  ✓ Saved {os.path.basename(filepath)}")
    else:
        print(f"  - No changes needed for {os.path.basename(filepath)}")

print("\nDone! All Product schema blocks removed.")
