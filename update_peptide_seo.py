#!/usr/bin/env python3
"""
Script to update all peptide pages with comprehensive SEO and schema markup
"""

import os
import re

# Peptide SEO data with keywords and schema info
peptide_seo_data = {
    'PeptideBPC157.tsx': {
        'name': 'BPC-157',
        'title': 'BPC-157 Guide - Dosing, Benefits, Research & Clinical Protocols',
        'description': 'Complete BPC-157 guide for healthcare providers. Evidence-based dosing protocols, mechanism of action, clinical applications for tissue repair, gut healing, and injury recovery.',
        'keywords': 'BPC-157, body protection compound, BPC 157 dosage, BPC-157 benefits, BPC-157 healing, peptide therapy, tissue repair peptide, gut healing peptide',
        'path': '/peptides/bpc-157',
        'fdaStatus': 'Investigational',
        'category': 'Regenerative Medicine',
        'alternateName': ['Body Protection Compound 157', 'BPC 157', 'Pentadecapeptide BPC 157']
    },
    'PeptideSemaglutide.tsx': {
        'name': 'Semaglutide',
        'title': 'Semaglutide Guide - GLP-1 Dosing, Weight Loss Protocols & Clinical Evidence',
        'description': 'Evidence-based semaglutide guide for healthcare providers. FDA-approved GLP-1 agonist dosing protocols, weight management strategies, and clinical outcomes data.',
        'keywords': 'semaglutide, GLP-1 agonist, Ozempic, Wegovy, weight loss peptide, semaglutide dosing, GLP-1 therapy, diabetes treatment, obesity medication',
        'path': '/peptides/semaglutide',
        'fdaStatus': 'FDA Approved',
        'category': 'Weight Management',
        'alternateName': ['Ozempic', 'Wegovy', 'GLP-1 Receptor Agonist']
    },
    'PeptideTirzepatide.tsx': {
        'name': 'Tirzepatide',
        'title': 'Tirzepatide Guide - GLP-1/GIP Dual Agonist Dosing & Protocols',
        'description': 'Comprehensive tirzepatide guide for medical professionals. Dual GLP-1/GIP agonist protocols, weight loss outcomes, and comparison with semaglutide.',
        'keywords': 'tirzepatide, Mounjaro, Zepbound, GLP-1 GIP agonist, dual incretin, weight loss medication, tirzepatide dosing, obesity treatment',
        'path': '/peptides/tirzepatide',
        'fdaStatus': 'FDA Approved',
        'category': 'Weight Management',
        'alternateName': ['Mounjaro', 'Zepbound', 'Dual GIP/GLP-1 Receptor Agonist']
    },
    'PeptideTB500.tsx': {
        'name': 'TB-500',
        'title': 'TB-500 (Thymosin Beta-4) - Clinical Guide, Dosing & Research',
        'description': 'Comprehensive TB-500 guide for medical professionals. Thymosin Beta-4 dosing protocols, wound healing applications, and anti-inflammatory properties.',
        'keywords': 'TB-500, thymosin beta-4, TB500, wound healing peptide, tissue repair, anti-inflammatory peptide, muscle recovery, TB-500 dosage',
        'path': '/peptides/tb-500',
        'fdaStatus': 'Investigational',
        'category': 'Regenerative Medicine',
        'alternateName': ['Thymosin Beta-4', 'TB4', 'Tβ4']
    },
    'PeptideGHKCu.tsx': {
        'name': 'GHK-Cu',
        'title': 'GHK-Cu Guide - Copper Peptide for Skin & Tissue Regeneration',
        'description': 'Evidence-based GHK-Cu guide. Copper peptide protocols for wound healing, anti-aging, hair restoration, and tissue regeneration.',
        'keywords': 'GHK-Cu, copper peptide, skin regeneration, wound healing, anti-aging peptide, hair growth, collagen synthesis, tissue repair',
        'path': '/peptides/ghk-cu',
        'fdaStatus': 'Investigational',
        'category': 'Regenerative Medicine',
        'alternateName': ['Copper Peptide GHK-Cu', 'Glycyl-L-histidyl-L-lysine-Cu']
    },
    'PeptideThymosinAlpha1.tsx': {
        'name': 'Thymosin Alpha-1',
        'title': 'Thymosin Alpha-1 Guide - Immune Modulation & Clinical Protocols',
        'description': 'Comprehensive thymosin alpha-1 guide for medical professionals. Immune modulation protocols, viral infection support, and cancer adjunct therapy.',
        'keywords': 'thymosin alpha-1, immune peptide, Ta1, immune modulation, viral infection, cancer support, vaccine enhancement, thymalfasin',
        'path': '/peptides/thymosin-alpha-1',
        'fdaStatus': 'Investigational',
        'category': 'Immune Support',
        'alternateName': ['Ta1', 'Thymalfasin', 'Zadaxin']
    },
    'PeptideSemax.tsx': {
        'name': 'Semax',
        'title': 'Semax Guide - Nootropic Peptide for Cognitive Enhancement',
        'description': 'Comprehensive semax clinical guide. Nootropic peptide dosing, cognitive enhancement protocols, and neuroprotection applications.',
        'keywords': 'semax, nootropic peptide, cognitive enhancement, brain peptide, BDNF, neuroprotection, semax dosing, mental clarity',
        'path': '/peptides/semax',
        'fdaStatus': 'Investigational',
        'category': 'Cognitive Enhancement',
        'alternateName': ['ACTH 4-10 Analog', 'Heptapeptide Semax']
    },
    'PeptideSelank.tsx': {
        'name': 'Selank',
        'title': 'Selank Guide - Anxiolytic Peptide for Stress & Anxiety',
        'description': 'Complete selank guide for healthcare providers. Anxiolytic peptide protocols, stress reduction, and immune modulation.',
        'keywords': 'selank, anxiolytic peptide, anti-anxiety peptide, stress relief, immune peptide, selank dosing, anxiety treatment',
        'path': '/peptides/selank',
        'fdaStatus': 'Investigational',
        'category': 'Cognitive Enhancement',
        'alternateName': ['TP-7', 'Tuftsin Analog']
    },
    'PeptideEpithalon.tsx': {
        'name': 'Epithalon',
        'title': 'Epithalon Guide - Telomerase Activation & Longevity Peptide',
        'description': 'Evidence-based epithalon guide. Telomerase activation protocols, anti-aging applications, and longevity research.',
        'keywords': 'epithalon, epitalon, telomerase activator, anti-aging peptide, longevity, telomere extension, pineal peptide',
        'path': '/peptides/epithalon',
        'fdaStatus': 'Investigational',
        'category': 'Longevity',
        'alternateName': ['Epitalon', 'Epithalone', 'AEDG Peptide']
    },
    'PeptidePT141.tsx': {
        'name': 'PT-141',
        'title': 'PT-141 (Bremelanotide) Guide - Sexual Dysfunction Treatment',
        'description': 'Comprehensive PT-141 guide for medical professionals. FDA-approved bremelanotide protocols for sexual dysfunction in men and women.',
        'keywords': 'PT-141, bremelanotide, Vyleesi, sexual dysfunction, libido peptide, erectile dysfunction, female sexual dysfunction',
        'path': '/peptides/pt-141',
        'fdaStatus': 'FDA Approved',
        'category': 'Sexual Health',
        'alternateName': ['Bremelanotide', 'Vyleesi']
    },
    'PeptideIpamorelin.tsx': {
        'name': 'Ipamorelin',
        'title': 'Ipamorelin Guide - Selective Growth Hormone Secretagogue',
        'description': 'Evidence-based ipamorelin guide for healthcare providers. Selective GHRP dosing protocols and growth hormone stimulation.',
        'keywords': 'ipamorelin, growth hormone secretagogue, GHRP, ipamorelin dosing, GH peptide, anti-aging, body composition',
        'path': '/peptides/ipamorelin',
        'fdaStatus': 'Investigational',
        'category': 'Growth Hormone',
        'alternateName': ['GHRP Ipamorelin', 'NNC 26-0161']
    },
    'PeptideCJC1295.tsx': {
        'name': 'CJC-1295',
        'title': 'CJC-1295 Guide - Growth Hormone Releasing Hormone Analog',
        'description': 'Complete CJC-1295 clinical guide. GHRH analog dosing protocols and growth hormone optimization.',
        'keywords': 'CJC-1295, GHRH analog, growth hormone releasing hormone, CJC-1295 DAC, growth hormone therapy, anti-aging peptide',
        'path': '/peptides/cjc-1295',
        'fdaStatus': 'Investigational',
        'category': 'Growth Hormone',
        'alternateName': ['CJC-1295 DAC', 'Modified GRF 1-29', 'Drug Affinity Complex']
    },
    'PeptideRetatrutide.tsx': {
        'name': 'Retatrutide',
        'title': 'Retatrutide Guide - Triple Agonist GLP-1/GIP/Glucagon',
        'description': 'Evidence-based retatrutide guide. Triple incretin agonist protocols and weight loss applications.',
        'keywords': 'retatrutide, triple agonist, GLP-1 GIP glucagon, weight loss, obesity treatment, Eli Lilly, incretin therapy',
        'path': '/peptides/retatrutide',
        'fdaStatus': 'Investigational',
        'category': 'Weight Management',
        'alternateName': ['LY3437943', 'Triple G Agonist']
    },
    'PeptideAOD9604.tsx': {
        'name': 'AOD-9604',
        'title': 'AOD-9604 Guide - Fat Loss Peptide Protocols',
        'description': 'Complete AOD-9604 clinical guide. Growth hormone fragment protocols for fat metabolism and weight management.',
        'keywords': 'AOD-9604, fat loss peptide, growth hormone fragment, weight loss, lipolysis, obesity treatment, metabolic peptide',
        'path': '/peptides/aod-9604',
        'fdaStatus': 'Investigational',
        'category': 'Weight Management',
        'alternateName': ['Anti-Obesity Drug 9604', 'HGH Fragment 176-191']
    },
    'PeptideTesamorelin.tsx': {
        'name': 'Tesamorelin',
        'title': 'Tesamorelin Guide - FDA-Approved GHRH Analog',
        'description': 'Evidence-based tesamorelin guide. FDA-approved GHRH analog for visceral adiposity and lipodystrophy treatment.',
        'keywords': 'tesamorelin, Egrifta, GHRH analog, visceral fat, lipodystrophy, growth hormone, FDA approved peptide',
        'path': '/peptides/tesamorelin',
        'fdaStatus': 'FDA Approved',
        'category': 'Growth Hormone',
        'alternateName': ['Egrifta', 'TH9507']
    },
    'PeptideNAD.tsx': {
        'name': 'NAD+',
        'title': 'NAD+ Guide - Cellular Energy & Anti-Aging Protocols',
        'description': 'Complete NAD+ therapy guide for healthcare providers. Nicotinamide adenine dinucleotide protocols and anti-aging applications.',
        'keywords': 'NAD+, nicotinamide adenine dinucleotide, NAD therapy, anti-aging, cellular energy, mitochondrial function, longevity',
        'path': '/peptides/nad',
        'fdaStatus': 'Supplement',
        'category': 'Longevity',
        'alternateName': ['Nicotinamide Adenine Dinucleotide', 'NAD Plus']
    },
    'PeptideMOTSc.tsx': {
        'name': 'MOTS-c',
        'title': 'MOTS-c Guide - Mitochondrial Peptide for Metabolic Health',
        'description': 'Evidence-based MOTS-c guide. Mitochondrial-derived peptide protocols and metabolic optimization.',
        'keywords': 'MOTS-c, mitochondrial peptide, metabolic peptide, exercise mimetic, longevity, insulin sensitivity',
        'path': '/peptides/mots-c',
        'fdaStatus': 'Investigational',
        'category': 'Longevity',
        'alternateName': ['Mitochondrial Open Reading Frame of the 12S rRNA-c']
    },
    'PeptideDihexa.tsx': {
        'name': 'Dihexa',
        'title': 'Dihexa Guide - Cognitive Enhancement Peptide',
        'description': 'Comprehensive dihexa guide for medical professionals. Nootropic peptide protocols and cognitive enhancement.',
        'keywords': 'dihexa, nootropic peptide, cognitive enhancement, brain peptide, memory, neuroprotection, HGF mimetic',
        'path': '/peptides/dihexa',
        'fdaStatus': 'Investigational',
        'category': 'Cognitive Enhancement',
        'alternateName': ['N-hexanoic-Tyr-Ile-(6) aminohexanoic amide']
    },
    'PeptideLL37.tsx': {
        'name': 'LL-37',
        'title': 'LL-37 Guide - Antimicrobial Peptide Protocols',
        'description': 'Complete LL-37 clinical guide. Cathelicidin antimicrobial peptide protocols and immune support.',
        'keywords': 'LL-37, cathelicidin, antimicrobial peptide, immune peptide, wound healing, infection support',
        'path': '/peptides/ll-37',
        'fdaStatus': 'Investigational',
        'category': 'Immune Support',
        'alternateName': ['Cathelicidin', 'Human Cathelicidin Antimicrobial Peptide']
    },
    'PeptideKPV.tsx': {
        'name': 'KPV',
        'title': 'KPV Guide - Anti-Inflammatory Peptide',
        'description': 'Evidence-based KPV guide for healthcare providers. Alpha-MSH fragment protocols for inflammation and gut health.',
        'keywords': 'KPV, anti-inflammatory peptide, alpha-MSH, gut health, IBD, skin inflammation, melanocortin',
        'path': '/peptides/kpv',
        'fdaStatus': 'Investigational',
        'category': 'Immune Support',
        'alternateName': ['Alpha-MSH Fragment', 'Lys-Pro-Val']
    },
    'PeptideGlutathione.tsx': {
        'name': 'Glutathione',
        'title': 'Glutathione Guide - Master Antioxidant Protocols',
        'description': 'Comprehensive glutathione guide. Master antioxidant protocols and detoxification support.',
        'keywords': 'glutathione, GSH, antioxidant, detoxification, liver support, glutathione IV, oxidative stress',
        'path': '/peptides/glutathione',
        'fdaStatus': 'Supplement',
        'category': 'Antioxidant',
        'alternateName': ['GSH', 'L-Glutathione', 'Gamma-glutamylcysteinylglycine']
    },
    'PeptideSermorelin.tsx': {
        'name': 'Sermorelin',
        'title': 'Sermorelin Guide - Growth Hormone Releasing Hormone',
        'description': 'Comprehensive sermorelin guide for healthcare providers. GHRH protocols for growth hormone optimization.',
        'keywords': 'sermorelin, GHRH, growth hormone releasing hormone, GH therapy, anti-aging, hormone optimization',
        'path': '/peptides/sermorelin',
        'fdaStatus': 'Prescription',
        'category': 'Growth Hormone',
        'alternateName': ['GRF 1-29', 'Geref']
    },
    'PeptideMelanotan2.tsx': {
        'name': 'Melanotan II',
        'title': 'Melanotan II Guide - Tanning Peptide Clinical Information',
        'description': 'Evidence-based Melanotan II guide for healthcare providers. Melanocortin agonist protocols and safety considerations.',
        'keywords': 'melanotan 2, MT2, tanning peptide, melanocortin, skin pigmentation, photoprotection',
        'path': '/peptides/melanotan-2',
        'fdaStatus': 'Investigational',
        'category': 'Dermatology',
        'alternateName': ['MT-II', 'Melanotan 2']
    },
    'PeptideDSIP.tsx': {
        'name': 'DSIP',
        'title': 'DSIP Guide - Delta Sleep Inducing Peptide',
        'description': 'Evidence-based DSIP guide. Sleep optimization protocols and stress reduction applications.',
        'keywords': 'DSIP, delta sleep inducing peptide, sleep peptide, insomnia, stress relief, sleep optimization',
        'path': '/peptides/dsip',
        'fdaStatus': 'Investigational',
        'category': 'Sleep & Recovery',
        'alternateName': ['Delta Sleep-Inducing Peptide']
    }
}

def generate_schema_code(data):
    """Generate the schema object for a peptide page"""
    return f'''  const peptideSchema = generatePeptideSchema({{
    name: "{data['name']}",
    alternateName: {data.get('alternateName', [])},
    description: "{data['description']}",
    path: "{data['path']}",
    fdaStatus: "{data['fdaStatus']}",
    category: "{data['category']}"
  }});
'''

def update_peptide_file(filepath, data):
    """Update a peptide file with SEO enhancements"""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if already updated
    if 'generatePeptideSchema' in content:
        print(f"  Already updated: {filepath}")
        return False
    
    # Add import for generatePeptideSchema
    if 'import { usePageTitle }' in content:
        content = content.replace(
            'import { usePageTitle }',
            'import { usePageTitle, generatePeptideSchema }'
        )
    
    # Find the usePageTitle call and update it
    old_pattern = r'usePageTitle\([^)]+\);'
    
    new_hook = f'''usePageTitle("{data['title']}", {{
    description: "{data['description']}",
    keywords: "{data['keywords']}",
    schema: generatePeptideSchema({{
      name: "{data['name']}",
      alternateName: {data.get('alternateName', [])},
      description: "{data['description']}",
      path: "{data['path']}",
      fdaStatus: "{data['fdaStatus']}",
      category: "{data['category']}"
    }})
  }});'''
    
    content = re.sub(old_pattern, new_hook, content, count=1)
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"  Updated: {filepath}")
    return True

def main():
    pages_dir = '/home/ubuntu/drspeptides-repo/client/src/pages'
    
    print("Updating peptide pages with SEO and schema markup...")
    
    updated = 0
    for filename, data in peptide_seo_data.items():
        filepath = os.path.join(pages_dir, filename)
        if os.path.exists(filepath):
            if update_peptide_file(filepath, data):
                updated += 1
        else:
            print(f"  File not found: {filepath}")
    
    print(f"\nUpdated {updated} peptide pages with SEO enhancements")

if __name__ == '__main__':
    main()
