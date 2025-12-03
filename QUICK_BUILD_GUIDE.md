# Quick Build Guide - Remaining Pages

## Fast Track to 100% Completion

### Current Status: 30/57 (53%)
### Target: 57/57 (100%)
### Remaining: 27 pages

---

## Priority Build Order

### 🔥 TIER 1 - Build These First (5 pages)
**Why:** Unique formulations that differentiate the site

1. **BlendKLOWCapsules** - Oral with KPV
   - Template: BlendGLOWCapsules.tsx
   - Focus: Anti-inflammatory, gut-skin axis, melanin regulation
   - Research: KPV PepT1 absorption, NF-κB inhibition

2. **PeptideCagrilintide** - Amylin analog
   - Template: PeptideSemaglutide.tsx
   - Focus: CagriSema combination, amylin mechanism
   - Research: NEJM 2025 study, Novo Nordisk trials

3. **PeptideBPC157Capsules** - Oral BPC
   - Template: PeptideBPC157.tsx + oral modifications
   - Focus: Gastric stability, oral bioavailability
   - Research: Gastric juice stability studies

4. **PeptideNADNasalSpray** - Nasal NAD+
   - Template: PeptideNAD.tsx + nasal delivery
   - Focus: Intranasal absorption, blood-brain barrier
   - Research: Nasal peptide delivery studies

5. **PeptideGHKCuSerum** - Topical GHK-Cu
   - Template: PeptideGHKCu.tsx + topical modifications
   - Focus: Dermal penetration, topical protocols
   - Research: Topical copper peptide studies

---

### ⚡ TIER 2 - Build These Second (4 pages)
**Why:** High search volume, popular combinations

6. **BlendSemaglutideBPC157** - Weight loss + healing
   - Template: Blend template
   - Focus: Synergistic GI healing, weight loss optimization
   - Components: Semaglutide + BPC-157

7. **BlendTirzepatideBPC157** - Weight loss + healing
   - Template: Blend template
   - Focus: Triple agonist + healing, GI protection
   - Components: Tirzepatide + BPC-157

8. **BlendBPCWolverine** - Recovery blend
   - Template: Blend template
   - Focus: Athletic recovery, injury healing
   - Components: BPC-157 + TB-500 + others

9. **BlendSelankSemax** - Cognitive combo
   - Template: Blend template
   - Focus: Nootropic synergy, cognitive enhancement
   - Components: Selank + Semax

---

### 📊 TIER 3 - Restructure These (11 pages)
**Why:** Already have 500-1400 lines, just need 6-tab structure

**High Priority (4 pages):**
10. PeptideRetatrutide (536 lines) - Triple agonist
11. PeptideNAD (529 lines) - Most searched
12. PeptideSLUPP332 (432 lines) - Novel longevity
13. PeptideGLP1 (329 lines) - Educational overview

**Medium Priority (7 pages) - Just restructure:**
14. PeptideKPV (1104 lines)
15. PeptideLL37 (1012 lines)
16. PeptideSelank (947 lines)
17. PeptideThymosinAlpha1 (1118 lines)
18. PeptideDSIP (1137 lines)
19. PeptideDihexa (1007 lines)
20. PeptideEpithalon (1116 lines)

**Lower Priority (3 pages) - Just restructure:**
21. PeptideHumanin (1420 lines)
22. PeptideIGF1LR3 (1183 lines)
23. PeptideMOTSc (1223 lines)
24. PeptideSS31 (1254 lines)

---

### 📝 TIER 4 - Build Last (3 pages)
**Why:** Lower search volume, specialty formulas

25. BlendFormulaM51 (387 lines)
26. BlendFormulaN5550 (357 lines)
27. BlendFormulaRG5555 (400 lines)

---

## Quick Template Copy-Paste

### For Individual Peptides:
```bash
# Copy best template
cp client/src/pages/PeptideBPC157.tsx client/src/pages/PeptideNEWNAME.tsx

# Edit and replace:
# - Component name
# - Peptide name
# - Content in each tab
```

### For Blends:
```bash
# Copy blend template
cp client/src/pages/BlendGlowCore.tsx client/src/pages/BlendNEWNAME.tsx

# Edit and replace:
# - Component name
# - Blend name
# - Component breakdown
# - Synergistic mechanisms
```

### For Oral/Topical Formulations:
```bash
# Copy oral template
cp client/src/pages/BlendGLOWCapsules.tsx client/src/pages/PeptideNEWNAME.tsx

# Focus on:
# - Bioavailability section
# - Absorption mechanisms
# - Delivery-specific protocols
```

---

## Content Checklist for Each Page

### ✅ Overview Tab
- [ ] 3-4 paragraph introduction
- [ ] Formula/composition breakdown
- [ ] Clinical applications (3-4 items)
- [ ] Key benefits with icons

### ✅ Mechanism Tab
- [ ] 4-6 mechanism sections
- [ ] Cellular/molecular detail
- [ ] Pharmacokinetics
- [ ] Synergistic effects (blends)

### ✅ Research Tab
- [ ] 3-5 clinical studies
- [ ] PubMed links (https://pubmed.ncbi.nlm.nih.gov/...)
- [ ] 4 research finding cards
- [ ] Evidence quality notes

### ✅ Protocols Tab
- [ ] 2-3 dosing protocols
- [ ] Administration guidelines
- [ ] Timing recommendations
- [ ] 4-phase expectations timeline

### ✅ Safety Tab
- [ ] Safety profile (green box)
- [ ] Contraindications (red box, 3-5 items)
- [ ] Side effects list
- [ ] Quality & sourcing notes

### ✅ Monitoring Tab
- [ ] Pre-treatment assessment
- [ ] Monitoring schedule (timeline)
- [ ] Efficacy markers (blue box)
- [ ] Warning signs (red box)
- [ ] Patient education (5-7 tips)

---

## Time Estimates

### Building from Scratch:
- Tier 1 page: 30-40 minutes each = 2.5-3.5 hours total
- Tier 2 page: 25-35 minutes each = 1.5-2.5 hours total
- Tier 4 page: 20-30 minutes each = 1-1.5 hours total

### Restructuring Existing Content:
- Tier 3 page: 15-20 minutes each = 2.5-4 hours total

### Total Time to 100%: 8-12 hours

---

## Quick Commands

```bash
# Check current completion
cd /home/ubuntu/drspeptides-landing/client/src/pages
grep -l "TabsTrigger value=\"monitoring\"" *.tsx | wc -l

# Build and test
cd /home/ubuntu/drspeptides-landing
pnpm run build

# Dev server
pnpm run dev

# Type check
pnpm tsc --noEmit
```

---

## Research Quick Links

### PubMed Search:
- https://pubmed.ncbi.nlm.nih.gov/?term=[peptide+name]

### Key Studies to Reference:
- BPC-157: PMC7096228 (gastric stability)
- GHK-Cu: PMC6073405 (regenerative mechanisms)
- Cagrilintide: NEJM 2025 (CagriSema trial)
- KPV: PMC (NF-κB inhibition)

---

## Success Criteria

✅ All 6 tabs present and populated  
✅ Medical-grade professional language  
✅ PubMed citations included  
✅ Comprehensive safety information  
✅ Clear protocols with timelines  
✅ Build passes without errors  

---

**Next Session Target: Build Tier 1 + Tier 2 = 9 pages → 39/57 (68%)**
