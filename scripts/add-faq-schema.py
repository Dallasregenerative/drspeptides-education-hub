#!/usr/bin/env python3
"""Add FAQ schema to AOD-9604, Ipamorelin, CJC-1295, and PT-141 pages"""
import re

pages = {
    'client/src/pages/PeptideAOD9604.tsx': {
        'var_name': 'aod9604FAQs',
        'faqs': [
            {"q": "What is AOD-9604?", "a": "AOD-9604 (Advanced Obesity Drug) is a modified fragment of human growth hormone (amino acids 177-191) that stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat formation) without the negative effects of full-length HGH such as insulin resistance or growth stimulation."},
            {"q": "How does AOD-9604 work for weight loss?", "a": "AOD-9604 works by mimicking the fat-burning portion of growth hormone. It activates beta-3 adrenergic receptors on fat cells, stimulating the release of stored fat for energy. Unlike HGH, it does not affect blood sugar levels or promote cell growth, making it a targeted fat-loss peptide."},
            {"q": "Is AOD-9604 FDA approved?", "a": "AOD-9604 is not FDA approved as a drug. It has GRAS (Generally Recognized As Safe) status as a food ingredient in the United States. It is available through compounding pharmacies with a prescription and is used off-label for fat loss and joint repair."},
            {"q": "What are the side effects of AOD-9604?", "a": "AOD-9604 has a favorable safety profile. The most common side effects are mild and include injection site reactions (redness, swelling), headache, and occasional nausea. Unlike full HGH, it does not cause insulin resistance, water retention, or carpal tunnel syndrome."},
            {"q": "How long does AOD-9604 take to work?", "a": "Most patients notice initial effects within 2-4 weeks, with significant fat loss results typically visible at 8-12 weeks. Optimal results are achieved with consistent daily dosing (typically 300mcg subcutaneously) combined with proper diet and exercise."},
            {"q": "Can AOD-9604 be combined with other peptides?", "a": "Yes, AOD-9604 is commonly stacked with other peptides for enhanced results. Popular combinations include AOD-9604 + CJC-1295/Ipamorelin for fat loss with muscle preservation, or AOD-9604 + BPC-157 for fat loss with tissue healing benefits."},
            {"q": "What is the difference between AOD-9604 and HGH?", "a": "AOD-9604 is a small fragment (amino acids 177-191) of the full HGH molecule. It retains only the fat-burning properties without HGH's growth-promoting, insulin-affecting, or IGF-1 raising effects. This makes AOD-9604 safer for long-term use and eliminates cancer growth concerns associated with full HGH therapy."},
            {"q": "How do you inject AOD-9604?", "a": "AOD-9604 is typically administered as a subcutaneous injection in the abdominal area, first thing in the morning on an empty stomach. The standard dose is 250-300mcg daily. It should be injected at least 30 minutes before eating for optimal absorption and fat-burning effect."}
        ]
    },
    'client/src/pages/PeptideIpamorelin.tsx': {
        'var_name': 'ipamorelinFAQs',
        'faqs': [
            {"q": "What is Ipamorelin?", "a": "Ipamorelin is a selective growth hormone releasing peptide (GHRP) that stimulates the pituitary gland to produce and release growth hormone. Unlike other GHRPs, it does not significantly increase cortisol, prolactin, or appetite (ghrelin), making it one of the cleanest growth hormone secretagogues available."},
            {"q": "What are the benefits of Ipamorelin?", "a": "Ipamorelin benefits include increased lean muscle mass, improved fat metabolism, better sleep quality, enhanced recovery from exercise and injury, improved bone density, anti-aging effects on skin and hair, and increased collagen production. It works by amplifying your body's natural GH pulses."},
            {"q": "How does Ipamorelin differ from HGH injections?", "a": "Ipamorelin stimulates your body to produce its own growth hormone naturally, while HGH injections provide synthetic exogenous hormone. Ipamorelin maintains the natural pulsatile release pattern, has fewer side effects, doesn't suppress your own GH production, and is significantly less expensive than pharmaceutical HGH."},
            {"q": "What is the best time to take Ipamorelin?", "a": "The optimal time to inject Ipamorelin is before bed on an empty stomach (at least 2 hours after eating). This timing amplifies the natural nighttime GH surge that occurs during deep sleep. Some protocols also include a morning dose. Avoid eating for 30 minutes after injection."},
            {"q": "What are the side effects of Ipamorelin?", "a": "Ipamorelin has minimal side effects due to its selectivity. Common mild effects include injection site reactions, temporary head rush or flushing, increased hunger in some users, and water retention during the first 1-2 weeks. Serious side effects are rare when used at appropriate doses."},
            {"q": "How long does Ipamorelin take to work?", "a": "Improved sleep quality is often noticed within the first week. Body composition changes (fat loss, muscle gain) typically become noticeable at 4-6 weeks. Full anti-aging and recovery benefits develop over 3-6 months of consistent use. Most protocols run 3-6 months followed by a break."},
            {"q": "Can Ipamorelin be combined with CJC-1295?", "a": "Yes, Ipamorelin + CJC-1295 (no DAC) is one of the most popular and effective peptide combinations. CJC-1295 amplifies the GH-releasing signal while Ipamorelin triggers the release, creating a synergistic effect that produces 3-5x more GH than either peptide alone."},
            {"q": "What is the typical Ipamorelin dosage?", "a": "The standard Ipamorelin dose is 200-300mcg injected subcutaneously, typically 1-3 times daily. Beginners usually start at 100-200mcg once daily at bedtime. The most common protocol is 200-300mcg twice daily (morning and bedtime) for 3-6 months."}
        ]
    },
    'client/src/pages/PeptideCJC1295.tsx': {
        'var_name': 'cjc1295FAQs',
        'faqs': [
            {"q": "What is CJC-1295?", "a": "CJC-1295 is a synthetic growth hormone releasing hormone (GHRH) analog that stimulates the pituitary gland to produce growth hormone. It comes in two forms: CJC-1295 with DAC (Drug Affinity Complex) which has a longer half-life of 6-8 days, and CJC-1295 without DAC (also called Modified GRF 1-29) with a shorter half-life of 30 minutes."},
            {"q": "What is the difference between CJC-1295 with DAC and without DAC?", "a": "CJC-1295 with DAC binds to albumin in the blood, extending its half-life to 6-8 days and providing a sustained GH elevation. CJC-1295 without DAC (Mod GRF 1-29) has a 30-minute half-life and creates acute GH pulses that mimic natural physiology. Most practitioners prefer the no-DAC version for its more natural pulsatile release pattern."},
            {"q": "What are the benefits of CJC-1295?", "a": "CJC-1295 benefits include increased growth hormone and IGF-1 levels, improved body composition (more muscle, less fat), enhanced deep sleep, faster recovery from exercise and injury, improved skin elasticity and collagen production, increased bone density, and anti-aging effects."},
            {"q": "How do you dose CJC-1295?", "a": "CJC-1295 without DAC is typically dosed at 100-300mcg per injection, 1-3 times daily via subcutaneous injection. CJC-1295 with DAC is dosed at 1-2mg once or twice per week. It is most commonly paired with Ipamorelin at bedtime for synergistic GH release."},
            {"q": "What are the side effects of CJC-1295?", "a": "Common side effects include injection site reactions, water retention (especially in the first 2 weeks), tingling or numbness in extremities, flushing, and increased hunger. The DAC version may cause more sustained side effects due to its longer half-life. Serious adverse effects are uncommon at therapeutic doses."},
            {"q": "How long does CJC-1295 take to work?", "a": "Sleep improvements are typically noticed within 1-2 weeks. Body composition changes become visible at 4-8 weeks. IGF-1 levels peak at 2-4 weeks of consistent use. Full benefits for recovery, skin, and anti-aging develop over 3-6 months of continuous therapy."},
            {"q": "Is CJC-1295 legal?", "a": "CJC-1295 is legal to prescribe and use in the United States when obtained through a licensed healthcare provider and compounding pharmacy. It is not FDA-approved as a drug but is available as a compounded medication. It is banned by WADA for competitive athletes."},
            {"q": "Can CJC-1295 help with weight loss?", "a": "Yes, CJC-1295 promotes weight loss primarily through increased growth hormone levels, which enhance lipolysis (fat breakdown), increase metabolic rate, and preserve lean muscle mass. Combined with Ipamorelin, it creates a powerful fat-burning and body recomposition effect, especially when combined with exercise and proper nutrition."}
        ]
    },
    'client/src/pages/PeptidePT141.tsx': {
        'var_name': 'pt141FAQs',
        'faqs': [
            {"q": "What is PT-141?", "a": "PT-141 (Bremelanotide) is a synthetic peptide that activates melanocortin receptors (MC3R and MC4R) in the brain to enhance sexual desire and arousal. Unlike Viagra or Cialis which work on blood flow, PT-141 works through the central nervous system to increase libido and sexual function in both men and women."},
            {"q": "How does PT-141 work?", "a": "PT-141 activates melanocortin-4 receptors in the hypothalamus, the brain region that controls sexual arousal and desire. This central mechanism of action means it addresses the psychological/desire component of sexual dysfunction, not just the physical. It increases dopamine signaling in areas associated with sexual motivation."},
            {"q": "Is PT-141 FDA approved?", "a": "Yes, PT-141 (brand name Vyleesi) was FDA-approved in June 2019 for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. It is also available through compounding pharmacies for off-label use in men with erectile dysfunction or low libido."},
            {"q": "What are the side effects of PT-141?", "a": "The most common side effects are nausea (affects about 40% of users, usually mild and temporary), flushing, headache, and injection site reactions. Some users experience temporary darkening of skin (due to melanocortin activation). Nausea can be minimized by starting with lower doses and taking anti-nausea medication."},
            {"q": "How long does PT-141 take to work?", "a": "PT-141 typically begins working within 30-60 minutes after subcutaneous injection. Effects peak at 2-4 hours and can last up to 12-24 hours. Most users report enhanced desire and arousal within 1-2 hours of administration. It should be taken at least 45 minutes before anticipated sexual activity."},
            {"q": "What is the difference between PT-141 and Viagra?", "a": "PT-141 works in the brain to increase sexual desire and arousal (central mechanism), while Viagra works locally by increasing blood flow to the genitals (peripheral mechanism). PT-141 addresses low libido; Viagra addresses erectile dysfunction. PT-141 works for both men and women; Viagra is primarily for men. They can be used together."},
            {"q": "How do you take PT-141?", "a": "PT-141 is administered as a subcutaneous injection, typically in the abdomen or thigh. The standard dose is 1.75mg for women (FDA-approved dose) and 1-2mg for men (off-label). It should be injected 45-60 minutes before desired effect. Maximum recommended frequency is once every 24 hours, no more than 8 doses per month."},
            {"q": "Does PT-141 work for men?", "a": "Yes, PT-141 is effective for men with erectile dysfunction and/or low libido. Clinical studies show it improves erections in men who don't respond to Viagra/Cialis, because it works through a different mechanism (brain vs blood flow). It is particularly effective for men whose ED has a psychological or desire-related component."}
        ]
    }
}

for filepath, data in pages.items():
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if already has generateFAQSchema
    if 'generateFAQSchema' in content:
        print(f"  SKIP {filepath} - already has FAQ schema")
        continue
    
    # Add import for generateFAQSchema
    if 'generateFAQSchema' not in content:
        content = content.replace(
            'import { usePageTitle, generatePeptideSchema } from "@/hooks/usePageTitle";',
            'import { usePageTitle, generatePeptideSchema, generateFAQSchema } from "@/hooks/usePageTitle";'
        )
    
    # Build FAQ array string
    faq_items = []
    for faq in data['faqs']:
        q = faq['q'].replace('"', '\\"')
        a = faq['a'].replace('"', '\\"')
        faq_items.append(f'    {{ question: "{q}", answer: "{a}" }}')
    
    faq_array = f"\n  const {data['var_name']} = [\n" + ",\n".join(faq_items) + "\n  ];\n"
    
    # Insert FAQ array before usePageTitle call
    match = re.search(r'  usePageTitle\(', content)
    if match:
        pos = match.start()
        content = content[:pos] + faq_array + content[pos:]
    
    # Modify schema to include FAQ schema
    # Pattern: schema: generatePeptideSchema({...})
    # Replace with: schema: [...generatePeptideSchema({...}), generateFAQSchema(varName)]
    content = content.replace(
        'schema: generatePeptideSchema({',
        'schema: [...generatePeptideSchema({',
        1
    )
    
    # Find the closing of generatePeptideSchema and add FAQ schema
    # Look for pattern: category: "..." followed by }) or \n  })
    content = re.sub(
        r'(category: "[^"]*"\s*\n\s*\})\)',
        f'\\1), generateFAQSchema({data["var_name"]})]',
        content,
        count=1
    )
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"  DONE {filepath}")

print("\nAll FAQ schemas added!")
