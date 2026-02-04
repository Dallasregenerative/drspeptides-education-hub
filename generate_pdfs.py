#!/usr/bin/env python3
"""Generate real PDF resources for the Peptide Education Hub"""

from fpdf import FPDF
import os

OUTPUT_DIR = "/home/ubuntu/drspeptides-repo/client/public/downloads"

class PeptidePDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=15)
    
    def header(self):
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(0, 128, 128)
        self.cell(0, 10, 'Peptide Education Hub', 0, 1, 'C')
        self.set_draw_color(0, 128, 128)
        self.line(10, 20, 200, 20)
        self.ln(5)
    
    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Page {self.page_no()} | For Educational Purposes Only | www.peptideeducationhub.com', 0, 0, 'C')
    
    def chapter_title(self, title):
        self.set_font('Helvetica', 'B', 16)
        self.set_text_color(0, 80, 80)
        self.cell(0, 10, title, 0, 1, 'L')
        self.ln(4)
    
    def section_title(self, title):
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(0, 100, 100)
        self.cell(0, 8, title, 0, 1, 'L')
        self.ln(2)
    
    def body_text(self, text):
        self.set_font('Helvetica', '', 10)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 6, text)
        self.ln(2)
    
    def bullet_point(self, text):
        self.set_font('Helvetica', '', 10)
        self.set_text_color(50, 50, 50)
        self.cell(5, 6, chr(149), 0, 0)
        self.multi_cell(0, 6, text)

def create_protocol_template():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Peptide Protocol Template")
    pdf.body_text("This template is designed to help practitioners document and track peptide therapy protocols for their patients.")
    
    pdf.section_title("Patient Information")
    pdf.body_text("Name: _________________________________    DOB: _______________")
    pdf.body_text("Medical Record #: _______________    Date: _______________")
    pdf.body_text("Prescribing Physician: _________________________________")
    pdf.ln(5)
    
    pdf.section_title("Peptide Selection")
    pdf.body_text("Primary Peptide: _________________________________")
    pdf.body_text("Secondary Peptide(s): _________________________________")
    pdf.body_text("Indication: _________________________________")
    pdf.ln(5)
    
    pdf.section_title("Dosing Protocol")
    pdf.body_text("Vial Concentration: _______ mg/vial")
    pdf.body_text("Reconstitution Volume: _______ mL bacteriostatic water")
    pdf.body_text("Final Concentration: _______ mcg/0.1mL")
    pdf.body_text("Prescribed Dose: _______ mcg")
    pdf.body_text("Injection Volume: _______ mL")
    pdf.body_text("Frequency: _________________________________")
    pdf.body_text("Duration: _______ weeks")
    pdf.ln(5)
    
    pdf.section_title("Administration")
    pdf.body_text("Route: [ ] Subcutaneous  [ ] Intramuscular  [ ] Other: _______")
    pdf.body_text("Injection Site(s): _________________________________")
    pdf.body_text("Time of Day: [ ] Morning  [ ] Evening  [ ] Before Bed")
    pdf.ln(5)
    
    pdf.section_title("Monitoring Schedule")
    pdf.body_text("Baseline Labs: _________________________________")
    pdf.body_text("Follow-up Labs (Week 4): _________________________________")
    pdf.body_text("Follow-up Labs (Week 8): _________________________________")
    pdf.body_text("Follow-up Appointment: _________________________________")
    pdf.ln(5)
    
    pdf.section_title("Notes")
    pdf.body_text("_" * 80)
    pdf.body_text("_" * 80)
    pdf.body_text("_" * 80)
    
    pdf.output(os.path.join(OUTPUT_DIR, "peptide-protocol-template.pdf"))
    print("Created: peptide-protocol-template.pdf")

def create_consent_form():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Patient Consent Form for Peptide Therapy")
    
    pdf.section_title("Patient Information")
    pdf.body_text("Patient Name: _________________________________")
    pdf.body_text("Date of Birth: _______________    Date: _______________")
    pdf.ln(3)
    
    pdf.section_title("Treatment Information")
    pdf.body_text("I, the undersigned patient, hereby consent to receive peptide therapy as prescribed by my healthcare provider. I understand the following:")
    pdf.ln(3)
    
    pdf.section_title("Nature of Treatment")
    pdf.bullet_point("Peptide therapy involves the administration of bioactive peptides for therapeutic purposes")
    pdf.bullet_point("The specific peptide(s) prescribed: _________________________________")
    pdf.bullet_point("Route of administration: _________________________________")
    pdf.bullet_point("Expected duration of treatment: _________________________________")
    pdf.ln(3)
    
    pdf.section_title("Potential Benefits")
    pdf.bullet_point("Improved tissue healing and recovery")
    pdf.bullet_point("Enhanced metabolic function")
    pdf.bullet_point("Optimization of hormone levels")
    pdf.bullet_point("Other: _________________________________")
    pdf.ln(3)
    
    pdf.section_title("Potential Risks and Side Effects")
    pdf.bullet_point("Injection site reactions (redness, swelling, pain)")
    pdf.bullet_point("Headache, nausea, or dizziness")
    pdf.bullet_point("Changes in blood sugar levels")
    pdf.bullet_point("Allergic reactions (rare)")
    pdf.bullet_point("Other peptide-specific effects as discussed with provider")
    pdf.ln(3)
    
    pdf.section_title("Patient Acknowledgment")
    pdf.body_text("I acknowledge that I have been informed of the nature, risks, benefits, and alternatives to peptide therapy. I have had the opportunity to ask questions and have received satisfactory answers. I voluntarily consent to this treatment.")
    pdf.ln(5)
    
    pdf.body_text("Patient Signature: ___________________________ Date: ___________")
    pdf.body_text("Provider Signature: __________________________ Date: ___________")
    pdf.body_text("Witness Signature: ___________________________ Date: ___________")
    
    pdf.output(os.path.join(OUTPUT_DIR, "patient-consent-form.pdf"))
    print("Created: patient-consent-form.pdf")

def create_dosage_reference():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Peptide Dosage Quick Reference Guide")
    pdf.body_text("This guide provides general dosage ranges for common peptides. Always consult current literature and individualize dosing based on patient factors.")
    pdf.ln(5)
    
    peptides = [
        ("BPC-157", "250-500 mcg", "1-2x daily", "Subcutaneous", "Tissue healing, gut health"),
        ("TB-500", "2-2.5 mg", "2x weekly", "Subcutaneous", "Tissue repair, flexibility"),
        ("CJC-1295 (no DAC)", "100-300 mcg", "1-3x daily", "Subcutaneous", "Growth hormone release"),
        ("Ipamorelin", "200-300 mcg", "1-3x daily", "Subcutaneous", "Growth hormone release"),
        ("Semaglutide", "0.25-2.4 mg", "Weekly", "Subcutaneous", "Weight management"),
        ("Tirzepatide", "2.5-15 mg", "Weekly", "Subcutaneous", "Weight management"),
        ("GHK-Cu", "1-2 mg", "Daily", "Subcutaneous/Topical", "Skin health, healing"),
        ("Epithalon", "5-10 mg", "Daily x 10-20 days", "Subcutaneous", "Longevity, telomeres"),
        ("Thymosin Alpha-1", "1.6 mg", "2x weekly", "Subcutaneous", "Immune modulation"),
        ("Semax", "200-600 mcg", "Daily", "Intranasal", "Cognitive enhancement"),
        ("Selank", "250-500 mcg", "Daily", "Intranasal", "Anxiety, cognition"),
        ("PT-141", "1-2 mg", "As needed", "Subcutaneous", "Sexual function"),
    ]
    
    pdf.set_font('Helvetica', 'B', 9)
    pdf.set_fill_color(0, 128, 128)
    pdf.set_text_color(255, 255, 255)
    pdf.cell(35, 8, "Peptide", 1, 0, 'C', True)
    pdf.cell(25, 8, "Dose", 1, 0, 'C', True)
    pdf.cell(25, 8, "Frequency", 1, 0, 'C', True)
    pdf.cell(30, 8, "Route", 1, 0, 'C', True)
    pdf.cell(75, 8, "Primary Use", 1, 1, 'C', True)
    
    pdf.set_font('Helvetica', '', 8)
    pdf.set_text_color(50, 50, 50)
    for i, (name, dose, freq, route, use) in enumerate(peptides):
        fill = i % 2 == 0
        if fill:
            pdf.set_fill_color(240, 248, 248)
        pdf.cell(35, 7, name, 1, 0, 'L', fill)
        pdf.cell(25, 7, dose, 1, 0, 'C', fill)
        pdf.cell(25, 7, freq, 1, 0, 'C', fill)
        pdf.cell(30, 7, route, 1, 0, 'C', fill)
        pdf.cell(75, 7, use, 1, 1, 'L', fill)
    
    pdf.ln(10)
    pdf.section_title("Important Notes")
    pdf.bullet_point("Dosages should be individualized based on patient weight, condition, and response")
    pdf.bullet_point("Start with lower doses and titrate up as tolerated")
    pdf.bullet_point("Monitor for side effects and adjust accordingly")
    pdf.bullet_point("Some peptides require cycling (periods on/off)")
    pdf.bullet_point("Always verify current prescribing information")
    
    pdf.output(os.path.join(OUTPUT_DIR, "dosage-quick-reference.pdf"))
    print("Created: dosage-quick-reference.pdf")

def create_patient_education():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Patient Education: Understanding Peptide Therapy")
    
    pdf.section_title("What Are Peptides?")
    pdf.body_text("Peptides are short chains of amino acids that act as signaling molecules in your body. They communicate with cells to trigger specific biological responses. Peptide therapy uses these natural compounds to support healing, optimize hormones, and improve overall health.")
    pdf.ln(3)
    
    pdf.section_title("How Does Peptide Therapy Work?")
    pdf.body_text("Peptides work by binding to specific receptors on cells, triggering targeted responses. Unlike traditional medications that may have broad effects, peptides are highly specific in their actions, which often results in fewer side effects.")
    pdf.ln(3)
    
    pdf.section_title("Common Types of Peptide Therapy")
    pdf.bullet_point("Growth Hormone Peptides: Support muscle growth, fat loss, and recovery")
    pdf.bullet_point("Healing Peptides: Accelerate tissue repair and reduce inflammation")
    pdf.bullet_point("Weight Management Peptides: Help regulate appetite and metabolism")
    pdf.bullet_point("Cognitive Peptides: Support brain function and mental clarity")
    pdf.bullet_point("Immune Peptides: Enhance immune system function")
    pdf.ln(3)
    
    pdf.section_title("What to Expect During Treatment")
    pdf.body_text("Most peptides are administered via subcutaneous injection (just under the skin). Your healthcare provider will teach you proper injection technique. Results vary by peptide type:")
    pdf.bullet_point("Some effects may be noticed within days (energy, sleep)")
    pdf.bullet_point("Other benefits develop over weeks to months (body composition, healing)")
    pdf.bullet_point("Consistency is key - follow your prescribed schedule")
    pdf.ln(3)
    
    pdf.section_title("Storage and Handling")
    pdf.bullet_point("Store unreconstituted peptides in the refrigerator or freezer")
    pdf.bullet_point("Once mixed with bacteriostatic water, keep refrigerated")
    pdf.bullet_point("Most reconstituted peptides are stable for 4-6 weeks refrigerated")
    pdf.bullet_point("Never freeze reconstituted peptides")
    pdf.bullet_point("Protect from light and heat")
    pdf.ln(3)
    
    pdf.section_title("When to Contact Your Provider")
    pdf.bullet_point("Severe or persistent injection site reactions")
    pdf.bullet_point("Signs of allergic reaction (difficulty breathing, swelling)")
    pdf.bullet_point("Unexpected side effects")
    pdf.bullet_point("Questions about your treatment")
    
    pdf.output(os.path.join(OUTPUT_DIR, "patient-education-handout.pdf"))
    print("Created: patient-education-handout.pdf")

def create_safety_checklist():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Pre-Treatment Safety Checklist")
    pdf.body_text("Complete this checklist before initiating peptide therapy to ensure patient safety.")
    pdf.ln(5)
    
    pdf.section_title("Patient Assessment")
    pdf.body_text("[ ] Complete medical history reviewed")
    pdf.body_text("[ ] Current medications documented")
    pdf.body_text("[ ] Allergies verified (especially to peptides/proteins)")
    pdf.body_text("[ ] Contraindications screened")
    pdf.body_text("[ ] Pregnancy/nursing status confirmed (if applicable)")
    pdf.ln(3)
    
    pdf.section_title("Laboratory Work")
    pdf.body_text("[ ] Baseline labs ordered/reviewed:")
    pdf.body_text("    [ ] Complete metabolic panel")
    pdf.body_text("    [ ] Lipid panel")
    pdf.body_text("    [ ] Hormone panel (as indicated)")
    pdf.body_text("    [ ] HbA1c (for GLP-1 agonists)")
    pdf.body_text("    [ ] Other: _______________________")
    pdf.ln(3)
    
    pdf.section_title("Patient Education")
    pdf.body_text("[ ] Treatment goals discussed")
    pdf.body_text("[ ] Expected benefits explained")
    pdf.body_text("[ ] Potential risks/side effects reviewed")
    pdf.body_text("[ ] Injection technique demonstrated")
    pdf.body_text("[ ] Storage instructions provided")
    pdf.body_text("[ ] Follow-up schedule established")
    pdf.ln(3)
    
    pdf.section_title("Documentation")
    pdf.body_text("[ ] Informed consent signed")
    pdf.body_text("[ ] Treatment plan documented")
    pdf.body_text("[ ] Prescription written")
    pdf.body_text("[ ] Patient received supplies")
    pdf.ln(3)
    
    pdf.section_title("Provider Verification")
    pdf.body_text("Provider Name: _________________________________")
    pdf.body_text("Signature: _________________________________")
    pdf.body_text("Date: _______________")
    
    pdf.output(os.path.join(OUTPUT_DIR, "safety-checklist.pdf"))
    print("Created: safety-checklist.pdf")

def create_reconstitution_guide():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Peptide Reconstitution Guide")
    pdf.body_text("Step-by-step instructions for safely reconstituting lyophilized peptides.")
    pdf.ln(5)
    
    pdf.section_title("Materials Needed")
    pdf.bullet_point("Lyophilized peptide vial")
    pdf.bullet_point("Bacteriostatic water (BAC water)")
    pdf.bullet_point("Alcohol swabs")
    pdf.bullet_point("Sterile syringe (1-3 mL)")
    pdf.bullet_point("Sterile needle (18-21 gauge for drawing)")
    pdf.ln(3)
    
    pdf.section_title("Step 1: Prepare Your Workspace")
    pdf.body_text("Clean your work surface with alcohol. Wash hands thoroughly or wear gloves. Gather all materials before beginning.")
    pdf.ln(3)
    
    pdf.section_title("Step 2: Clean the Vial Tops")
    pdf.body_text("Wipe the rubber stopper of both the peptide vial and bacteriostatic water vial with alcohol swabs. Allow to air dry for 30 seconds.")
    pdf.ln(3)
    
    pdf.section_title("Step 3: Draw the Bacteriostatic Water")
    pdf.body_text("Using a sterile syringe, draw up the desired amount of bacteriostatic water. Common reconstitution volumes:")
    pdf.bullet_point("5mg peptide + 2mL BAC water = 2.5mg/mL (250mcg per 0.1mL)")
    pdf.bullet_point("5mg peptide + 2.5mL BAC water = 2mg/mL (200mcg per 0.1mL)")
    pdf.bullet_point("10mg peptide + 2mL BAC water = 5mg/mL (500mcg per 0.1mL)")
    pdf.ln(3)
    
    pdf.section_title("Step 4: Add Water to Peptide")
    pdf.body_text("Insert needle into peptide vial at an angle. Slowly release the water down the inside wall of the vial - DO NOT spray directly onto the powder. This prevents damaging the peptide.")
    pdf.ln(3)
    
    pdf.section_title("Step 5: Mix Gently")
    pdf.body_text("Allow the peptide to dissolve naturally. You may gently roll the vial between your palms. NEVER shake vigorously as this can denature the peptide.")
    pdf.ln(3)
    
    pdf.section_title("Step 6: Storage")
    pdf.body_text("Store reconstituted peptide in the refrigerator (36-46°F / 2-8°C). Most peptides remain stable for 4-6 weeks when properly stored. Label with reconstitution date.")
    pdf.ln(3)
    
    pdf.section_title("Dosage Calculation")
    pdf.body_text("Formula: Desired dose (mcg) / Concentration (mcg/mL) = Injection volume (mL)")
    pdf.body_text("Example: 250mcg dose / 2500mcg per mL = 0.1mL injection")
    
    pdf.output(os.path.join(OUTPUT_DIR, "reconstitution-guide.pdf"))
    print("Created: reconstitution-guide.pdf")

def create_progress_tracking():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Patient Progress Tracking Sheet")
    
    pdf.section_title("Patient Information")
    pdf.body_text("Name: _________________________________    Start Date: _______________")
    pdf.body_text("Peptide(s): _________________________________")
    pdf.body_text("Dosage: _________________________________")
    pdf.ln(5)
    
    pdf.section_title("Weekly Progress Log")
    
    # Create table header
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_fill_color(0, 128, 128)
    pdf.set_text_color(255, 255, 255)
    pdf.cell(15, 8, "Week", 1, 0, 'C', True)
    pdf.cell(20, 8, "Weight", 1, 0, 'C', True)
    pdf.cell(20, 8, "Energy", 1, 0, 'C', True)
    pdf.cell(20, 8, "Sleep", 1, 0, 'C', True)
    pdf.cell(20, 8, "Mood", 1, 0, 'C', True)
    pdf.cell(25, 8, "Side Effects", 1, 0, 'C', True)
    pdf.cell(70, 8, "Notes", 1, 1, 'C', True)
    
    pdf.set_font('Helvetica', '', 8)
    pdf.set_text_color(50, 50, 50)
    for i in range(12):
        fill = i % 2 == 0
        if fill:
            pdf.set_fill_color(240, 248, 248)
        pdf.cell(15, 10, str(i+1), 1, 0, 'C', fill)
        pdf.cell(20, 10, "", 1, 0, 'C', fill)
        pdf.cell(20, 10, "1-10", 1, 0, 'C', fill)
        pdf.cell(20, 10, "1-10", 1, 0, 'C', fill)
        pdf.cell(20, 10, "1-10", 1, 0, 'C', fill)
        pdf.cell(25, 10, "", 1, 0, 'C', fill)
        pdf.cell(70, 10, "", 1, 1, 'L', fill)
    
    pdf.ln(5)
    pdf.section_title("Measurement Tracking")
    pdf.body_text("Baseline Measurements (Date: ___________):")
    pdf.body_text("Weight: _______ | Waist: _______ | Hips: _______ | Other: _______")
    pdf.ln(3)
    pdf.body_text("Week 4 Measurements (Date: ___________):")
    pdf.body_text("Weight: _______ | Waist: _______ | Hips: _______ | Other: _______")
    pdf.ln(3)
    pdf.body_text("Week 8 Measurements (Date: ___________):")
    pdf.body_text("Weight: _______ | Waist: _______ | Hips: _______ | Other: _______")
    pdf.ln(3)
    pdf.body_text("Week 12 Measurements (Date: ___________):")
    pdf.body_text("Weight: _______ | Waist: _______ | Hips: _______ | Other: _______")
    
    pdf.output(os.path.join(OUTPUT_DIR, "progress-tracking-sheet.pdf"))
    print("Created: progress-tracking-sheet.pdf")

def create_injection_site_guide():
    pdf = PeptidePDF()
    pdf.add_page()
    
    pdf.chapter_title("Injection Site Reference Guide")
    pdf.body_text("This guide provides information on proper injection sites for subcutaneous peptide administration.")
    pdf.ln(5)
    
    pdf.section_title("Recommended Subcutaneous Injection Sites")
    pdf.ln(3)
    
    pdf.set_font('Helvetica', 'B', 11)
    pdf.set_text_color(0, 100, 100)
    pdf.cell(0, 8, "1. Abdomen (Most Common)", 0, 1)
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(50, 50, 50)
    pdf.bullet_point("Best area: 2 inches around the navel (avoid 1 inch directly around navel)")
    pdf.bullet_point("Pinch skin and inject at 45-90 degree angle")
    pdf.bullet_point("Rotate injection sites to prevent lipodystrophy")
    pdf.ln(3)
    
    pdf.set_font('Helvetica', 'B', 11)
    pdf.set_text_color(0, 100, 100)
    pdf.cell(0, 8, "2. Thigh (Front/Outer)", 0, 1)
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(50, 50, 50)
    pdf.bullet_point("Middle third of the thigh, front or outer aspect")
    pdf.bullet_point("Good for self-injection due to easy access")
    pdf.bullet_point("Avoid inner thigh and knee area")
    pdf.ln(3)
    
    pdf.set_font('Helvetica', 'B', 11)
    pdf.set_text_color(0, 100, 100)
    pdf.cell(0, 8, "3. Upper Arm (Back)", 0, 1)
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(50, 50, 50)
    pdf.bullet_point("Fatty area on the back of the upper arm")
    pdf.bullet_point("May require assistance for self-injection")
    pdf.bullet_point("Good alternative site for rotation")
    pdf.ln(3)
    
    pdf.set_font('Helvetica', 'B', 11)
    pdf.set_text_color(0, 100, 100)
    pdf.cell(0, 8, "4. Lower Back/Flanks", 0, 1)
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(50, 50, 50)
    pdf.bullet_point("Area above the hip bones")
    pdf.bullet_point("Good for patients with limited abdominal fat")
    pdf.bullet_point("May require assistance")
    pdf.ln(5)
    
    pdf.section_title("Site Rotation Schedule")
    pdf.body_text("To prevent injection site reactions and ensure optimal absorption, rotate sites using this pattern:")
    pdf.bullet_point("Day 1: Right side of abdomen")
    pdf.bullet_point("Day 2: Left side of abdomen")
    pdf.bullet_point("Day 3: Right thigh")
    pdf.bullet_point("Day 4: Left thigh")
    pdf.bullet_point("Repeat cycle, moving at least 1 inch from previous injection")
    pdf.ln(3)
    
    pdf.section_title("Important Tips")
    pdf.bullet_point("Always clean injection site with alcohol and let dry")
    pdf.bullet_point("Use a new needle for each injection")
    pdf.bullet_point("Do not inject into bruised, scarred, or irritated skin")
    pdf.bullet_point("Apply gentle pressure after injection (do not rub)")
    pdf.bullet_point("Report persistent redness, swelling, or pain to your provider")
    
    pdf.output(os.path.join(OUTPUT_DIR, "injection-site-guide.pdf"))
    print("Created: injection-site-guide.pdf")

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print("Generating PDF resources...")
    create_protocol_template()
    create_consent_form()
    create_dosage_reference()
    create_patient_education()
    create_safety_checklist()
    create_reconstitution_guide()
    create_progress_tracking()
    create_injection_site_guide()
    
    print(f"\nAll PDFs generated in: {OUTPUT_DIR}")
    print("Files created:")
    for f in os.listdir(OUTPUT_DIR):
        if f.endswith('.pdf'):
            size = os.path.getsize(os.path.join(OUTPUT_DIR, f))
            print(f"  - {f} ({size/1024:.1f} KB)")
