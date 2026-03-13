#!/usr/bin/env python3
"""
Regenerate sitemap.xml with:
1. All /blends/ URLs changed to /peptides/ (matching actual routes)
2. Wrong blog slugs replaced with correct ones
3. /peptides/slupp-332 -> /peptides/slu-pp-332
4. /blends/glow-capsules -> /peptides/glow-blend-capsules
5. /blends/klow-capsules -> /peptides/klow-blend-capsules
6. All new blog posts and pages added
7. All URLs get trailing slashes (except homepage which already has one)
"""

import re
from datetime import date

today = date.today().isoformat()

with open('client/public/sitemap.xml') as f:
    content = f.read()

# URL replacements map (old -> new)
url_fixes = {
    # Blend URLs -> peptide URLs
    'https://pepedhub.com/blends/bpc-157-tb-500': 'https://pepedhub.com/peptides/bpc-157-tb-500',
    'https://pepedhub.com/blends/cjc-1295-ipamorelin': 'https://pepedhub.com/peptides/cjc-1295-ipamorelin',
    'https://pepedhub.com/blends/selank-semax': 'https://pepedhub.com/peptides/selank-semax',
    'https://pepedhub.com/blends/semaglutide-bpc-157': 'https://pepedhub.com/peptides/semaglutide-bpc-157',
    'https://pepedhub.com/blends/tirzepatide-bpc-157': 'https://pepedhub.com/peptides/tirzepatide-bpc-157',
    'https://pepedhub.com/blends/bpc-wolverine': 'https://pepedhub.com/peptides/bpc-wolverine',
    'https://pepedhub.com/blends/glow-core': 'https://pepedhub.com/peptides/glow-core',
    'https://pepedhub.com/blends/glow-plus': 'https://pepedhub.com/peptides/glow-plus',
    'https://pepedhub.com/blends/glow-ultra': 'https://pepedhub.com/peptides/glow-ultra',
    'https://pepedhub.com/blends/glow-capsules': 'https://pepedhub.com/peptides/glow-blend-capsules',
    'https://pepedhub.com/blends/klow-capsules': 'https://pepedhub.com/peptides/klow-blend-capsules',
    # Wrong blog slugs -> correct slugs
    'https://pepedhub.com/blog/how-to-start-peptide-therapy-practice': 'https://pepedhub.com/blog/getting-started',
    'https://pepedhub.com/blog/choosing-peptide-supplier': 'https://pepedhub.com/blog/choosing-supplier',
    'https://pepedhub.com/blog/bpc-157-vs-tb-500': 'https://pepedhub.com/blog/bpc157-tb500',
    'https://pepedhub.com/blog/semaglutide-tirzepatide-guide': 'https://pepedhub.com/blog/glp1-therapy',
    'https://pepedhub.com/blog/peptide-quality-standards': 'https://pepedhub.com/blog/quality-standards',
    'https://pepedhub.com/blog/peptide-storage-handling': 'https://pepedhub.com/blog/storage-handling',
    'https://pepedhub.com/blog/peptide-therapy-roi': 'https://pepedhub.com/blog/practice-roi',
    'https://pepedhub.com/blog/thymosin-alpha-1-immune': 'https://pepedhub.com/blog/thymosin-alpha-1',
    'https://pepedhub.com/blog/pt-141-sexual-wellness': 'https://pepedhub.com/blog/pt-141',
    'https://pepedhub.com/blog/semax-cognitive-enhancement': 'https://pepedhub.com/blog/semax',
    'https://pepedhub.com/blog/tesamorelin-visceral-fat': 'https://pepedhub.com/blog/tesamorelin',
    'https://pepedhub.com/blog/melanotan-ii-photoprotection': 'https://pepedhub.com/blog/melanotan-ii',
    'https://pepedhub.com/blog/ipamorelin-growth-hormone': 'https://pepedhub.com/blog/ipamorelin',
    'https://pepedhub.com/blog/ghk-cu-regenerative-medicine': 'https://pepedhub.com/blog/ghk-cu',
    # Wrong peptide slug
    'https://pepedhub.com/peptides/slupp-332': 'https://pepedhub.com/peptides/slu-pp-332',
}

# Apply URL fixes
for old_url, new_url in url_fixes.items():
    content = content.replace(f'<loc>{old_url}</loc>', f'<loc>{new_url}</loc>')

# Add trailing slashes to all URLs (except homepage which already has one)
def add_trailing_slash(match):
    url = match.group(1)
    if url.endswith('/'):
        return match.group(0)
    return f'<loc>{url}/</loc>'

content = re.sub(r'<loc>(https://pepedhub\.com[^<]*)</loc>', add_trailing_slash, content)

# Now add all the new blog posts and pages that are missing from sitemap
# Get current URLs in sitemap
current_urls = set(re.findall(r'<loc>(https://pepedhub\.com[^<]*)</loc>', content))
current_paths = set(u.replace('https://pepedhub.com', '').rstrip('/') for u in current_urls)

# New pages to add (paths that exist in SEO script but not in sitemap)
new_pages = [
    # Blog posts not in sitemap
    ("/blog/founder-story", "weekly", "0.6"),
    ("/blog/training-practitioners", "weekly", "0.6"),
    ("/blog/dr-peptide-ai", "weekly", "0.6"),
    ("/blog/neuro-series-formulas", "weekly", "0.6"),
    ("/blog/regen-metabolic-formulas", "weekly", "0.6"),
    ("/blog/ai-formula-design", "weekly", "0.6"),
    ("/blog/peptide-therapy-weight-loss", "weekly", "0.7"),
    ("/blog/anti-aging-peptides", "weekly", "0.7"),
    ("/blog/peptides-muscle-growth", "weekly", "0.6"),
    ("/blog/peptides-injury-recovery", "weekly", "0.6"),
    ("/blog/peptides-cognitive-enhancement", "weekly", "0.6"),
    ("/blog/peptides-immune-support", "weekly", "0.6"),
    ("/blog/peptides-sexual-health", "weekly", "0.6"),
    ("/blog/peptides-sleep-optimization", "weekly", "0.6"),
    ("/blog/future-peptide-therapy", "weekly", "0.6"),
    ("/blog/peptide-practice-business", "weekly", "0.6"),
    ("/blog/reconstitution-guide", "weekly", "0.7"),
    ("/blog/503a-vs-503b", "weekly", "0.7"),
    ("/blog/fda-peptide-regulations-2026", "weekly", "0.7"),
    ("/blog/peptides-gut-health", "weekly", "0.6"),
    ("/blog/n-259-sleep-science", "weekly", "0.6"),
    ("/blog/n-259-beyond-melatonin", "weekly", "0.6"),
    ("/blog/n-69-neuroscience-desire", "weekly", "0.6"),
    ("/blog/n-69-brain-libido", "weekly", "0.6"),
    ("/blog/n-111-holy-trinity", "weekly", "0.6"),
    ("/blog/n-111-neurogenesis", "weekly", "0.6"),
    ("/blog/n-5550-brain-body", "weekly", "0.6"),
    ("/blog/n-5550-brain-fat", "weekly", "0.6"),
    ("/blog/n-2331-cognitive-stack", "weekly", "0.6"),
    ("/blog/n-2331-anxiety-cognition", "weekly", "0.6"),
    ("/blog/rg-5555-healing-cascade", "weekly", "0.6"),
    ("/blog/rg-5555-gut-healing", "weekly", "0.6"),
    ("/blog/m-51-push-pull", "weekly", "0.6"),
    ("/blog/m-51-nnmt", "weekly", "0.6"),
    ("/blog/m-2531-cellular-engines", "weekly", "0.6"),
    ("/blog/m-2531-exercise-paradox", "weekly", "0.6"),
    ("/blog/w-1175-exercise-pill", "weekly", "0.6"),
    # Missing peptide pages
    ("/peptides/glp-1", "weekly", "0.8"),
    ("/peptides/glutathione", "weekly", "0.8"),
    ("/peptides/melanotan-1", "weekly", "0.8"),
    ("/peptides/nad", "weekly", "0.8"),
    ("/peptides/nad-nasal-spray", "weekly", "0.7"),
    ("/peptides/pinealon", "weekly", "0.8"),
    ("/peptides/slu-pp-332", "weekly", "0.8"),
    ("/peptides/bpc-157-capsules", "weekly", "0.7"),
    ("/peptides/ghk-cu-serum", "weekly", "0.7"),
    ("/peptides/glow-blend-capsules", "weekly", "0.7"),
    ("/peptides/klow-blend-capsules", "weekly", "0.7"),
    # Missing utility pages
    ("/administration-guide", "weekly", "0.8"),
    ("/ai-agent", "weekly", "0.8"),
    ("/ai-faq", "weekly", "0.7"),
    ("/are-peptides-safe", "weekly", "0.8"),
    ("/glossary", "weekly", "0.7"),
    ("/infographics", "weekly", "0.7"),
    ("/insurance-billing", "weekly", "0.8"),
    ("/patient-education", "weekly", "0.7"),
    ("/practice-toolkit", "weekly", "0.8"),
    ("/safety-compliance", "weekly", "0.7"),
    ("/safety-management", "weekly", "0.7"),
    ("/safety-standards", "weekly", "0.7"),
    ("/stacking-guide", "weekly", "0.8"),
    ("/statistics", "weekly", "0.7"),
    ("/supplier-directory", "weekly", "0.8"),
    ("/video-library", "weekly", "0.7"),
    ("/guides/ultimate-peptide-therapy-guide", "weekly", "0.8"),
    # Protocol pages
    ("/protocols/cognitive", "weekly", "0.7"),
    ("/protocols/injury-healing", "weekly", "0.7"),
    ("/protocols/longevity", "weekly", "0.7"),
    ("/protocols/metabolism", "weekly", "0.7"),
    ("/protocols/weight-loss", "weekly", "0.8"),
]

# Build new URL entries
new_url_entries = []
for path, changefreq, priority in new_pages:
    if path not in current_paths:
        new_url_entries.append(f"""  <url>
    <loc>https://pepedhub.com{path}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>""")

# Insert new entries before </urlset>
if new_url_entries:
    new_entries_str = '\n'.join(new_url_entries)
    content = content.replace('</urlset>', f'{new_entries_str}\n</urlset>')

# Write the fixed sitemap
with open('client/public/sitemap.xml', 'w') as f:
    f.write(content)

# Count final URLs
final_urls = re.findall(r'<loc>(https://pepedhub\.com[^<]*)</loc>', content)
print(f"Sitemap updated successfully!")
print(f"Total URLs: {len(final_urls)}")
print(f"New URLs added: {len(new_url_entries)}")
print(f"URLs fixed: {len(url_fixes)}")

# Verify all URLs have trailing slashes
no_slash = [u for u in final_urls if not u.endswith('/')]
print(f"URLs without trailing slash: {len(no_slash)}")
if no_slash:
    for u in no_slash[:5]:
        print(f"  {u}")
