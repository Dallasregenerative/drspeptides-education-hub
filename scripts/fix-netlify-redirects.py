#!/usr/bin/env python3
"""
Rebuild netlify.toml redirects to:
1. Add 301 redirects from old /blends/ URLs to /peptides/ URLs
2. Add 301 redirects from old wrong blog slugs to correct slugs
3. Add 200 rewrite rules for ALL pre-rendered pages (from SEO script)
4. Keep the SPA catch-all at the end
"""

import re

with open('scripts/generate-seo-pages.cjs') as f:
    seo_content = f.read()

# Extract all route paths from SEO script
route_paths = re.findall(r'"(/[^"]+)":\s*\{', seo_content)
# Deduplicate while preserving order
seen = set()
unique_paths = []
for p in route_paths:
    if p not in seen:
        seen.add(p)
        unique_paths.append(p)

print(f"Found {len(unique_paths)} unique routes in SEO script")

# Build the netlify.toml
toml = '''[build]
  command = "pnpm run build"
  publish = "dist/public"

# ============================================================
# 301 REDIRECTS: Old URLs -> Correct URLs
# These fix Google Search Console errors from wrong sitemap URLs
# ============================================================

# Blend URLs redirect to peptide URLs (blends live under /peptides/ in the app)
[[redirects]]
  from = "/blends/bpc-157-tb-500"
  to = "/peptides/bpc-157-tb-500"
  status = 301
  force = true
[[redirects]]
  from = "/blends/cjc-1295-ipamorelin"
  to = "/peptides/cjc-1295-ipamorelin"
  status = 301
  force = true
[[redirects]]
  from = "/blends/selank-semax"
  to = "/peptides/selank-semax"
  status = 301
  force = true
[[redirects]]
  from = "/blends/semaglutide-bpc-157"
  to = "/peptides/semaglutide-bpc-157"
  status = 301
  force = true
[[redirects]]
  from = "/blends/tirzepatide-bpc-157"
  to = "/peptides/tirzepatide-bpc-157"
  status = 301
  force = true
[[redirects]]
  from = "/blends/bpc-wolverine"
  to = "/peptides/bpc-wolverine"
  status = 301
  force = true
[[redirects]]
  from = "/blends/glow-core"
  to = "/peptides/glow-core"
  status = 301
  force = true
[[redirects]]
  from = "/blends/glow-plus"
  to = "/peptides/glow-plus"
  status = 301
  force = true
[[redirects]]
  from = "/blends/glow-ultra"
  to = "/peptides/glow-ultra"
  status = 301
  force = true
[[redirects]]
  from = "/blends/glow-capsules"
  to = "/peptides/glow-blend-capsules"
  status = 301
  force = true
[[redirects]]
  from = "/blends/klow-capsules"
  to = "/peptides/klow-blend-capsules"
  status = 301
  force = true

# Old blog slug redirects to correct slugs
[[redirects]]
  from = "/blog/how-to-start-peptide-therapy-practice"
  to = "/blog/getting-started"
  status = 301
  force = true
[[redirects]]
  from = "/blog/choosing-peptide-supplier"
  to = "/blog/choosing-supplier"
  status = 301
  force = true
[[redirects]]
  from = "/blog/bpc-157-vs-tb-500"
  to = "/blog/bpc157-tb500"
  status = 301
  force = true
[[redirects]]
  from = "/blog/semaglutide-tirzepatide-guide"
  to = "/blog/glp1-therapy"
  status = 301
  force = true
[[redirects]]
  from = "/blog/peptide-quality-standards"
  to = "/blog/quality-standards"
  status = 301
  force = true
[[redirects]]
  from = "/blog/peptide-storage-handling"
  to = "/blog/storage-handling"
  status = 301
  force = true
[[redirects]]
  from = "/blog/peptide-therapy-roi"
  to = "/blog/practice-roi"
  status = 301
  force = true
[[redirects]]
  from = "/blog/thymosin-alpha-1-immune"
  to = "/blog/thymosin-alpha-1"
  status = 301
  force = true
[[redirects]]
  from = "/blog/pt-141-sexual-wellness"
  to = "/blog/pt-141"
  status = 301
  force = true
[[redirects]]
  from = "/blog/semax-cognitive-enhancement"
  to = "/blog/semax"
  status = 301
  force = true
[[redirects]]
  from = "/blog/tesamorelin-visceral-fat"
  to = "/blog/tesamorelin"
  status = 301
  force = true
[[redirects]]
  from = "/blog/melanotan-ii-photoprotection"
  to = "/blog/melanotan-ii"
  status = 301
  force = true
[[redirects]]
  from = "/blog/ipamorelin-growth-hormone"
  to = "/blog/ipamorelin"
  status = 301
  force = true
[[redirects]]
  from = "/blog/ghk-cu-regenerative-medicine"
  to = "/blog/ghk-cu"
  status = 301
  force = true

# Old peptide slug redirect
[[redirects]]
  from = "/peptides/slupp-332"
  to = "/peptides/slu-pp-332"
  status = 301
  force = true

# ============================================================
# STATIC FILE SERVING (before SPA catch-all)
# ============================================================
[[redirects]]
  from = "/robots.txt"
  to = "/robots.txt"
  status = 200
[[redirects]]
  from = "/sitemap.xml"
  to = "/sitemap.xml"
  status = 200
[[redirects]]
  from = "/llms.txt"
  to = "/llms.txt"
  status = 200
[[redirects]]
  from = "/llms-full.txt"
  to = "/llms-full.txt"
  status = 200
[[redirects]]
  from = "/.well-known/*"
  to = "/.well-known/:splat"
  status = 200

# ============================================================
# PRE-RENDERED PAGE REWRITES (200 status)
# Each route serves its pre-rendered index.html with correct meta tags
# ============================================================
'''

# Add 200 rewrites for all pre-rendered pages
for path in sorted(unique_paths):
    if path == "/":
        continue  # Homepage is index.html at root
    toml += f'''[[redirects]]
  from = "{path}"
  to = "{path}/index.html"
  status = 200
'''

# Add the SPA catch-all and headers
toml += '''
# ============================================================
# SPA catch-all redirect (must be LAST)
# Only applies to routes that don't match any pre-rendered page above
# ============================================================
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# ============================================================
# CACHE CONTROL HEADERS
# ============================================================
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/llms.txt"
  [headers.values]
    Content-Type = "text/plain; charset=utf-8"
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/llms-full.txt"
  [headers.values]
    Content-Type = "text/plain; charset=utf-8"
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/robots.txt"
  [headers.values]
    Content-Type = "text/plain; charset=utf-8"
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/sitemap.xml"
  [headers.values]
    Content-Type = "application/xml; charset=utf-8"
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/.well-known/*"
  [headers.values]
    Content-Type = "application/json; charset=utf-8"
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/ebooks/*.pdf"
  [headers.values]
    Content-Type = "application/pdf"
    Cache-Control = "public, max-age=604800"
    Content-Disposition = "inline"
'''

with open('netlify.toml', 'w') as f:
    f.write(toml)

redirect_count = toml.count('[[redirects]]')
print(f"netlify.toml rebuilt with {redirect_count} redirect rules")
print(f"  - 301 redirects for old URLs: 27")
print(f"  - 200 rewrites for pre-rendered pages: {len(unique_paths) - 1}")
print(f"  - Static file rules: 5")
print(f"  - SPA catch-all: 1")
