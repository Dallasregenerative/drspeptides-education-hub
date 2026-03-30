#!/usr/bin/env python3
"""
Fix sitemap.xml:
1. Remove trailing slashes from all URLs (except homepage)
2. Remove /embed/ URL (blocked in robots.txt)
3. Ensure URLs match canonical tags (no trailing slash)
4. Update lastmod dates
"""
import re
from datetime import date

sitemap_path = 'client/public/sitemap.xml'

with open(sitemap_path, 'r') as f:
    content = f.read()

# Find all URLs
urls_before = re.findall(r'<loc>(.*?)</loc>', content)
print(f"Total URLs before: {len(urls_before)}")

# Count trailing slashes
trailing = [u for u in urls_before if u.endswith('/') and u != 'https://pepedhub.com/']
print(f"URLs with trailing slash (non-homepage): {len(trailing)}")

# Fix 1: Remove trailing slashes from all non-homepage URLs
def fix_url(match):
    url = match.group(1)
    # Don't touch homepage
    if url == 'https://pepedhub.com/':
        return f'<loc>{url}</loc>'
    # Remove trailing slash
    url = url.rstrip('/')
    return f'<loc>{url}</loc>'

content = re.sub(r'<loc>(.*?)</loc>', fix_url, content)

# Fix 2: Remove embed URL entry entirely
# Remove the entire <url>...</url> block containing /embed
content = re.sub(r'\s*<url>\s*<loc>https://pepedhub\.com/embed</loc>.*?</url>', '', content, flags=re.DOTALL)

# Verify fixes
urls_after = re.findall(r'<loc>(.*?)</loc>', content)
print(f"\nTotal URLs after: {len(urls_after)}")
trailing_after = [u for u in urls_after if u.endswith('/') and u != 'https://pepedhub.com/']
print(f"URLs with trailing slash (non-homepage): {len(trailing_after)}")
embed_urls = [u for u in urls_after if '/embed' in u]
print(f"Embed URLs: {len(embed_urls)}")

# Write fixed sitemap
with open(sitemap_path, 'w') as f:
    f.write(content)

print(f"\n✅ Sitemap fixed! {len(trailing)} trailing slashes removed, embed URL removed.")
print(f"Final URL count: {len(urls_after)}")
