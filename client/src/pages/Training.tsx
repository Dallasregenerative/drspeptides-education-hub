import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, GraduationCap, Users, BookOpen, Video, Podcast, Calendar, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Training() {
  usePageTitle(
    "Peptide Therapy Training & Certification Programs",
    "Comprehensive peptide therapy training directory with 8+ certification programs, 6 major conferences, 5 professional organizations, online courses, books, podcasts, and 40+ education resources for healthcare providers."
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">Professional Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Peptide Therapy Training & Certification
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Comprehensive directory of certification programs, conferences, online courses, and educational resources for healthcare providers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-purple-200 text-sm">Certification Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold">7+</div>
                <div className="text-purple-200 text-sm">Major Conferences</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-purple-200 text-sm">Professional Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-purple-200 text-sm">Education Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-8">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="organizations">Organizations</TabsTrigger>
            <TabsTrigger value="online">Online Courses</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="media">Media & Community</TabsTrigger>
          </TabsList>

          {/* Certification Programs Tab */}
          <TabsContent value="certifications">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Certification Programs</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Accredited certification programs for healthcare providers seeking formal credentials in peptide therapy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* A4M Certification */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">CME Accredited</span>
                  </div>
                  <CardTitle>A4M Peptide Therapy Certification</CardTitle>
                  <CardDescription>American Academy of Anti-Aging Medicine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>Module I: Sept 9-13, 2025 (Boston, MA)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>Module II: Dec 12-14, 2025 (Las Vegas, NV)</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> On-demand online + Live events
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>CME Partner:</strong> George Washington University School of Medicine
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Two-module certification covering peptide therapy fundamentals, disease state management, senolytics, performance health, aesthetics, and anti-aging strategies.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://www.a4m.com/peptide-therapy-certification-on-demand.html" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://cme.smhs.gwu.edu/a4m-mmi-/content/peptides-module-i-3" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        CME Info
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* SSRP Certification */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Live + Digital</span>
                  </div>
                  <CardTitle>SSRP Peptide Therapy Certification</CardTitle>
                  <CardDescription>SSRP Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>2025 Event: Orlando, Florida</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Live event + Digital on-demand
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Clinical peptide therapy training for real-world patient conditions and healthspan improvement. Includes updated 2025 event recordings, course materials, and exam.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://ssrpinstitute.org/peptide-therapy-certification/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://ssrpinstitute.org/product/peptide-therapy-certification/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        Register
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* ASAHRS Certification */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">2-Day Live</span>
                  </div>
                  <CardTitle>Peptide & Exosome Therapy Certification</CardTitle>
                  <CardDescription>ASAHRS (American Society of Anti-Aging Hair Restoration Surgeons)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>Sept 27-28, 2025 | Orlando, Florida</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Live 2-day event
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Combined peptide and exosome therapy certification focusing on regenerative medicine applications.
                  </p>
                  <a href="https://www.asahrs.com/event-details/asahrs-peptide-exosome-therapy-certification" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Empire Medical Training */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Peptide Therapies Treatment Training</CardTitle>
                  <CardDescription>Empire Medical Training</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online training
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Target Audience:</strong> Physicians, nurses, licensed healthcare professionals
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Comprehensive peptide therapy treatment training covering clinical applications and implementation strategies.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://empireondemand.com/products/peptide-therapies-treatment-training" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        On-Demand <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://www.empiremedicaltraining.com/courses/peptide-therapies-treatment-training-in-empire-virtual-training/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        Virtual Training
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Elite NP */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Anti-Aging and Advanced Peptide Course</CardTitle>
                  <CardDescription>Elite NP</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online course
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Updated curriculum covering anti-aging and peptide therapies with bonus content on emerging formulas and clinical applications.
                  </p>
                  <a href="https://courses.elitenp.com/p/antiagingandpeptidecourse" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Enroll Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Structure and Function */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">6 CEUs</span>
                  </div>
                  <CardTitle>Peptides for Health Care Practitioners</CardTitle>
                  <CardDescription>Structure and Function</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>CEUs:</strong> 6 continuing education units
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online education
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Introduction to peptides covering sources, uses, mechanisms, pharmaceutical applications, immune, healing, hormone, and brain peptides.
                  </p>
                  <a href="https://onlineedu.structureandfunction.net/courses/Peptide" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* AMMG */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">CME Accredited</span>
                  </div>
                  <CardTitle>Clinical Use of Peptides and Peptide Therapies</CardTitle>
                  <CardDescription>Age Management Medicine Group (AMMG)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online CME courses (bundled and single offerings)
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Topics:</strong> Thymosin peptides, exosome therapy, various peptide applications
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    CME-accredited courses in age management medicine covering clinical peptide applications.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://agemed.org/online-education/online-cme/peptides-bundled-course-single-offerings/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Browse Courses <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://agemed.org/product/clinical-use-of-peptides-and-peptide-therapies/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        View Program
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* MedBridge Global */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Peptide Therapy Certification</CardTitle>
                  <CardDescription>MedBridge Global Academy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online accredited content
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Assembled by world-renowned experts, provides trustworthy, accredited peptide therapy education for practitioners.
                  </p>
                  <a href="https://www.medbridgeglobal.academy/bundles/peptide-therapy-certification-usa" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Clinical Peptide Society */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Updated 2025</span>
                  </div>
                  <CardTitle>Essential Knowledge in Clinical Use of Peptides</CardTitle>
                  <CardDescription>Clinical Peptide Society</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Price:</strong> $999 (Introductory offer - regularly $1,299)
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online certification class with 13 lectures
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Instructors:</strong> Dr. Edwin Lee and Dr. Luis Martinez
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Updated for 2025 with 8 new peptides. Covers wide range including cancer, autoimmune disease, libido, cognition, energy, and anti-aging. Includes post-workshop online exam - 80% or better earns certificate.
                  </p>
                  <a href="https://clinicalpeptidesociety.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* HubMed Ed */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Live + Recording</span>
                  </div>
                  <CardTitle>Peptides for Aesthetic and Anti-aging Masterclass</CardTitle>
                  <CardDescription>HubMed Ed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Price:</strong> $174.99
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Live class with Q&A + lifetime access to recordings
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Instructor:</strong> Dr. Dean Berman (Austria)
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Comprehensive training covering BPC-157, TB-500, GHK-Cu, Epithalon, FOXO4-DRI and more. Includes safe administration protocols, personalized treatment development, and patient communication strategies. Certificate of completion included.
                  </p>
                  <a href="https://www.hubmeded.com/masterclasses/peptides-for-aesthetic-and-anti-aging---an-introduction-to-a-new-era" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* YDH Training Academy */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">6 Lectures</span>
                  </div>
                  <CardTitle>Peptide Course - Cellular Medicine Foundations</CardTitle>
                  <CardDescription>YDH Training Academy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Price:</strong> $2,000
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Instructor:</strong> Lexi Yoo, FNP-BC
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Bonus:</strong> FREE 4-hour shadow experience with course purchase
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Comprehensive course covering 30+ peptides including GLP-1s, regenerative peptides, sexual health, neurocognitive, and aesthetic applications. Includes weight loss protocols, immunity, longevity, and hair restoration with clinical dosing protocols.
                  </p>
                  <a href="https://ydhacademy.com/courses/peptide/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Metabolic Mentor University */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">10 Modules</span>
                  </div>
                  <CardTitle>Peptides Integrative Medical Coaching Masterclass</CardTitle>
                  <CardDescription>Metabolic Mentor University</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Instructor:</strong> Megan del Corral, BSN, MSN, CFNP, CPNP-AC
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> 10 modules, 1-2 modules per week
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Credit:</strong> Applies toward FHP Level 3 certification
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Covers GLP-1 agonists, regenerative peptides, secretagogues, bioregulators, sexual health, and neuropeptides. Learn to integrate nutrition and lifestyle interventions with peptide therapies for optimal outcomes.
                  </p>
                  <a href="https://www.metabolicmentor.com/peptides-integrative-medical-coaching/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* MedMasters */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Recordings Available</span>
                  </div>
                  <CardTitle>All Things Peptides Virtual Masterclass</CardTitle>
                  <CardDescription>MedMasters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Price:</strong> $499 (2-day event recordings)
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Recorded 2-day masterclass (June 2024)
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Includes:</strong> Unlimited staff access, slides, protocol guides, discounts
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Comprehensive training covering peptides and HCT/P, regulatory overview, pharmacy changes, gut health, performance optimization, musculoskeletal applications, GLP-1 resistance, cardiovascular benefits, and practical implementation protocols.
                  </p>
                  <a href="https://medmasters.org/training-all-things-peptides/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Peptide University */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-indigo-600 mb-2" />
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-semibold">COMPREHENSIVE</span>
                  </div>
                  <CardTitle>Clinical Peptide Therapy Certification</CardTitle>
                  <CardDescription>Peptide University</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Price:</strong> $1,499 one-time OR $199/month membership
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> 12-section online certification for licensed professionals
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Includes:</strong> Monthly Q&A calls, practitioner community, protocols
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Most comprehensive peptide certification available. Covers all categories: immune health, repair/recovery, energy/performance, metabolic health, cognitive, hormonal, longevity, bioregulators, plus business and legal essentials.
                  </p>
                  <a href="https://mypeptideuniversity.com/clinical-peptide-therapy-certification" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Human Longevity Institute */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">15 Hours</span>
                  </div>
                  <CardTitle>Foundations of Peptide Therapy Course</CardTitle>
                  <CardDescription>Human Longevity Institute (via Peptide University)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Price:</strong> $1,499 one-time OR 12 payments of $199
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> 15-hour online course, 12 lessons, 45+ modules
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Essential resource for doctors, coaches, clinicians, and wellness experts. Covers clinical process, immune health, repair/recovery, energy/performance, metabolic health, cognitive, hormonal, longevity, bioregulators, and reconstitution.
                  </p>
                  <a href="https://humanlongevityinstitute.com/foundations-peptide-therapy-course/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Smith Rexall University */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Peptide Therapy Course</CardTitle>
                  <CardDescription>Smith Rexall University</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Instructors:</strong> Anne Bowden FNP-BC, Carrie Welter FNP
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Online course
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Introduction to the science and clinical use of peptide therapy, covering how peptides support healing, immune balance, metabolism, and longevity.
                  </p>
                  <a href="https://smithrexalldrug.com/courses/peptide-therapy/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Heads Up Health */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Webinar</span>
                  </div>
                  <CardTitle>Mastering Peptides: A Clinician's Guide</CardTitle>
                  <CardDescription>Heads Up Health</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Instructor:</strong> Dr. Melissa Petersen
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Evergreen webinar training
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Learn how to integrate peptides with wearables, labs, and data-driven practice. Focus on longevity, outcomes optimization, and personalized care strategies used by top clinics.
                  </p>
                  <a href="https://headsuphealth.com/webinars/mastering-peptides-longevity-precision-health/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* ProCredit SCE */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">2 CE Hours</span>
                  </div>
                  <CardTitle>Peptide Therapy for Chiropractors</CardTitle>
                  <CardDescription>ProCredit SCE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> 2-hour CE webinar
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Target:</strong> Chiropractors and healthcare providers
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Clinical applications in musculoskeletal repair, pain management, and metabolic health. Practical peptide protocols grounded in real-world case studies and diagnostics.
                  </p>
                  <a href="https://www.procreditsce.com/product/peptide-therapy-for-chiropractors-clinical-applications-in-musculoskeletal-repair-and-metabolic-health" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* ILADS */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded-full">1 Hour</span>
                  </div>
                  <CardTitle>Peptide Therapy in Chronic Complex Illness</CardTitle>
                  <CardDescription>ILADS (International Lyme and Associated Diseases Society)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> 1-hour clinician-focused webinar
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Clinical application of peptide therapeutics in the management of chronic complex illness. Examines practical strategies for integrating peptides into treatment protocols.
                  </p>
                  <a href="https://www.pathlms.com/ilads/courses/118542" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* WorldLink Medical */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Peptide Therapy Webinars</CardTitle>
                  <CardDescription>WorldLink Medical</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> "Lunch and Learn" webinars (CME and non-CME)
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Access:</strong> WLM Forum Library Membership
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    One-hour webinars covering peptide therapy dos and don'ts, integrated with BHRT and preventative medicine education. Access after attending Optimal Medicine Training Series.
                  </p>
                  <a href="https://worldlinkmedical.com/education/online-education" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Functional Medicine University */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Peptide Power: A Revolution in Longevity Therapy</CardTitle>
                  <CardDescription>Functional Medicine University</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Instructor:</strong> Robert G. Silverman, DC, DACBN, DCBCN, MS, CCN
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Webinar (members only)
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Functional approach to extending longevity and healthspan through peptide therapy. Access requires FMU student enrollment in Functional Medicine Training Program.
                  </p>
                  <a href="https://www.functionalmedicineuniversity.com/members/Peptide-Power-A-Revolution-in-Longevity-Therapy.cfm" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* ACA */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Legal Focus</span>
                  </div>
                  <CardTitle>Legal Insights: Peptide & Semaglutide Compounding</CardTitle>
                  <CardDescription>ACA (Alliance for Compounding Advancement)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Webinar for compounding pharmacists
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Topics:</strong> FDA regulations, state boards, telemedicine
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Navigate the regulatory landscape of peptide and semaglutide compounding. Covers FDA guidance, state board requirements, legal compliance, and telemedicine considerations.
                  </p>
                  <a href="https://acainfo.org/peptidelaw/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Conferences Tab */}
          <TabsContent value="conferences">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Conferences & Symposiums</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Major industry conferences, symposiums, and events for peptide therapy education and networking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Peptide World Congress */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Calendar className="h-10 w-10 text-purple-600 mb-2" />
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-semibold">FEATURED EVENT</span>
                  </div>
                  <CardTitle>Peptide World Congress 2025</CardTitle>
                  <CardDescription>SSRP Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                      <Calendar className="h-4 w-4" />
                      <span>June 13-14, 2025 | Wynn Las Vegas</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Live event + Virtual livestream + Digital on-demand
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Two-day symposium covering cellular medicine, clinical peptide therapy, hormonal imbalances, cardiac disorders, sleep issues, cancer states. Taught by world-renowned physicians and researchers including Thomas DeLauer, Tyna Moore ND/DC, Scott Sherr MD, and 30+ additional speakers.
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg mb-4">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Topics Include:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• GLP-1 applications beyond weight loss</li>
                      <li>• Cellular senescence mitigation</li>
                      <li>• Tissue regeneration techniques</li>
                      <li>• AI's role in new peptide ingredients</li>
                      <li>• Female-specific protocols</li>
                    </ul>
                  </div>
                  <a href="https://ssrpinstitute.org/pwc/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                      View Full Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Peptide Therapeutics Symposium */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Calendar className="h-10 w-10 text-indigo-600 mb-2" />
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">20th Annual</span>
                  </div>
                  <CardTitle>Peptide Therapeutics Symposium</CardTitle>
                  <CardDescription>Peptide Therapeutics Foundation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>October 21-22, 2025 | San Diego, USA</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> Hybrid (in-person + virtual)
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Annual meeting for peptide research leaders focused on drug discovery. Recorded sessions available to registrants.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://peptidetherapeutics.org/symposium/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        Event Info <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://peptidetherapeutics.org/symposium/program/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        Program
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Boulder Peptide Symposium */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Boulder Peptide Symposium 2025</CardTitle>
                  <CardDescription>Bachem</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>2025 | Boulder, Colorado</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    The only conference focused solely on pharmaceutical development of peptide therapeutics.
                  </p>
                  <a href="https://www.bachem.com/event/boulder-peptide-symposium-2025/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* IPS Annual Conference */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>IPS Annual Conference</CardTitle>
                  <CardDescription>International Peptide Society</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>July 24-25, 2025 | Denver, Colorado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span>Pre-Conference Workshop: July 23, 2025</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Annual conference focusing on peptide therapeutics and cell-based applications with pre-conference workshop.
                  </p>
                  <a href="https://peptidesociety.org/annual-conference-nm" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* APS2025 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>APS2025 - Peptides Rising</CardTitle>
                  <CardDescription>American Peptide Society</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Theme:</strong> "Peptides Rising"
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Scientific excellence in peptide research covering therapeutics to AI applications and celebrating the global peptide community.
                  </p>
                  <a href="https://aps2025.org/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* A4M Conferences */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>A4M Conferences & Educational Events</CardTitle>
                  <CardDescription>American Academy of Anti-Aging Medicine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Various Events Throughout Year:</strong>
                    </div>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• Neural Therapy Peptide Masterclass</li>
                      <li>• Longevity Fest 2025</li>
                      <li>• Anti-Aging Medicine Asia</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Multiple conferences, educational seminars, and CME activities focused on anti-aging, functional medicine, and peptide therapy.
                  </p>
                  <a href="https://www.a4m.com/conferences-and-educational-events.html" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      View All Events <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Professional Organizations Tab */}
          <TabsContent value="organizations">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Professional Organizations</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Leading professional societies and organizations advancing peptide therapy education and clinical practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* International Peptide Society */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>International Peptide Society (IPS)</CardTitle>
                  <CardDescription>Premier Educational Resource</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Premier educational resource for safe & advanced peptide therapy. Entering a new chapter of peptide therapy education with comprehensive resources and events.
                  </p>
                  <a href="https://peptidesociety.org/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Clinical Peptide Society */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Clinical Peptide Society</CardTitle>
                  <CardDescription>Advancing Clinical Use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Professional organization for advancing the clinical use of peptides with focus on regenerative properties and clinical applications.
                  </p>
                  <a href="https://clinicalpeptidesociety.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* American Peptide Society */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>American Peptide Society (APS)</CardTitle>
                  <CardDescription>Founded 1990 | Nonprofit Scientific Organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Forum for advancing and promoting knowledge of peptide science through education, research, and professional networking.
                  </p>
                  <a href="https://americanpeptidesociety.org/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* A4M */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>American Academy of Anti-Aging Medicine (A4M)</CardTitle>
                  <CardDescription>Leading Anti-Aging Medicine Organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Leading organization for anti-aging medicine education, conferences, and certification programs including peptide therapy specialization.
                  </p>
                  <a href="https://www.a4m.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* SSRP Institute */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-indigo-600 mb-2" />
                  <CardTitle>SSRP Institute</CardTitle>
                  <CardDescription>Certification & Education Provider</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Organization providing comprehensive peptide therapy certification and hosting the annual Peptide World Congress.
                  </p>
                  <a href="https://ssrpinstitute.org/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Online Courses Tab */}
          <TabsContent value="online">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Online Education Platforms</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Digital learning platforms, online courses, and AI-powered education tools for peptide therapy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Peptides */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-orange-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookOpen className="h-10 w-10 text-orange-600 mb-2" />
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-semibold">AI-POWERED</span>
                  </div>
                  <CardTitle>Personal Peptides</CardTitle>
                  <CardDescription>AI-Powered Research & Education Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg mb-4">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Platform Features:</p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• AI research assistant for peptide mechanisms</li>
                      <li>• Comprehensive peptide database</li>
                      <li>• Research summaries & safety information</li>
                      <li>• Evidence-based content creation tools</li>
                      <li>• Community networking</li>
                      <li>• Monetization frameworks for practitioners</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Master research-grade peptide science, access peptides AI app, and build profitable income streams—all in one platform.
                  </p>
                  <a href="https://personalpeptide.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                      Explore Platform <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Shine RX Peptide Playbook */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Peptide Playbook</CardTitle>
                  <CardDescription>Shine RX</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Topics Covered:</p>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Peptide science and clinical categories</li>
                      <li>• Regulatory frameworks for medical directors</li>
                      <li>• Team onboarding and education</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Comprehensive playbook for integrating peptides into medical practice with confidence.
                  </p>
                  <a href="https://shinerx.com/peptides-playbook/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Get Playbook <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* My Practice Connect */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle>Peptide Therapy Training</CardTitle>
                  <CardDescription>My Practice Connect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Resources, information, and techniques necessary to implement peptide therapy into your practice with confidence.
                  </p>
                  <a href="https://mypracticeconnect.com/peptide-therapy-training/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Genoracle */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Peptide Therapy Certification</CardTitle>
                  <CardDescription>Genoracle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-slate-600">
                      <strong>Format:</strong> On-demand online
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Online certification program highlighting the most relevant and applicable therapy for peptides in clinical practice.
                  </p>
                  <a href="https://genoracle.com/resources/peptide-therapy-certification/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Enroll Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Scale Regenerative Health */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Peptide Therapy Education</CardTitle>
                  <CardDescription>Scale Regenerative Health (Florida)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Learn about peptide therapy science, latest research, and expert insights. Complete guide to peptide treatments.
                  </p>
                  <a href="https://scaleregenerativehealth.com/education" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Access Education <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Intricate Art Seminars */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookOpen className="h-10 w-10 text-indigo-600 mb-2" />
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">June 8, 2025</span>
                  </div>
                  <CardTitle>Peptide Therapy Course</CardTitle>
                  <CardDescription>Intricate Art Seminars</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Course on peptide therapy to improve mental and physical wellbeing through positively affecting epigenetic and genetic expression.
                  </p>
                  <a href="https://intricateartseminars.com/peptide-therapy/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      Register <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Books & Publications</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Essential reading for healthcare providers: textbooks, clinical guides, and practitioner resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Complete Peptide Encyclopedia */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">The Complete Peptide Encyclopedia</CardTitle>
                  <CardDescription>A Physician's Guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    The definitive resource for understanding, selecting, and using therapeutic peptides for longevity, performance, and healing.
                  </p>
                  <a href="https://www.amazon.com/PEPTIDES-Encyclopedia-Physicians-Optimization-Collection/dp/1917754116" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                      View on Amazon <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Peptide Prescription */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">NEW 2025</span>
                  </div>
                  <CardTitle className="text-lg">Peptide Prescription</CardTitle>
                  <CardDescription>By Solomon Jan, MD | Published July 24, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Practical, evidence-based guide to peptide therapy written by a physician for physicians. Covers chronic disease, hormonal imbalances, and regenerative medicine.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://www.barnesandnoble.com/w/peptide-prescription-solomon-jan/1147889265" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Barnes & Noble
                      </Button>
                    </a>
                    <a href="https://bookshop.org/p/books/peptide-prescription-an-introduction-to-peptide-therapy-a-clinician-s-resource-solomon-jan/e43adcc2b61c99a9" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        Bookshop
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Peptide Protocols */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-teal-600 mb-2" />
                  <CardTitle className="text-lg">Peptide Protocols: Volume One</CardTitle>
                  <CardDescription>By Dr. William A. Seeds | SSRP Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Introduction to cellular medicine behind peptides to improve patient health. Supported by extensive peer-reviewed studies with practical knowledge.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://ssrpinstitute.org/books/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                        SSRP Store
                      </Button>
                    </a>
                    <a href="https://www.harvard.com/book/9780578624358" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        Harvard.com
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Media & Community Tab */}
          <TabsContent value="media">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Media & Community Resources</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Podcasts, YouTube channels, and online communities for ongoing peptide therapy education
              </p>
            </div>

            {/* Podcasts Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Podcast className="h-6 w-6 text-purple-600" />
                Podcasts & Audio Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Huberman Lab */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Podcast className="h-10 w-10 text-red-600 mb-2" />
                    <CardTitle>Huberman Lab</CardTitle>
                    <CardDescription>Dr. Craig Koniver: Peptide & Hormone Therapies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-slate-600">
                        <strong>Host:</strong> Dr. Andrew Huberman
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Guest:</strong> Dr. Craig Koniver, MD
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Date:</strong> October 7, 2024
                      </p>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                      Learn about peptides' potential in improving health and performance, effective dosages, and safety tips.
                    </p>
                    <div className="flex gap-2">
                      <a href="https://www.hubermanlab.com/episode/dr-craig-koniver-peptide-hormone-therapies-for-health-performance-longevity" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Listen <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                      <a href="https://www.youtube.com/watch?v=wRsX_ZkzxvQ" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline">
                          YouTube
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* A4M Podcast */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Podcast className="h-10 w-10 text-purple-600 mb-2" />
                    <CardTitle>A4M Podcast</CardTitle>
                    <CardDescription>Episode 192: Tim Schroeder</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-slate-600">
                        <strong>Guest:</strong> Dr. Tim Schroeder
                      </p>
                      <p className="text-sm text-slate-600">
                        Fellowship in Anti-Aging, Regenerative, Functional Medicine with advanced peptide therapy training
                      </p>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                      Anti-aging and peptide therapy education from experienced practitioner.
                    </p>
                    <a href="https://www.a4m.com/podcast-episode-192-tim-schroeder.html" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Listen <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* eHealth Radio */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Podcast className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>eHealth Radio Network</CardTitle>
                    <CardDescription>The Future of Fitness: Peptides That Heal</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-slate-600">
                        <strong>Guest:</strong> Michael McNeal
                      </p>
                      <p className="text-sm text-slate-600">
                        Director of Education at Integrative Peptides
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Date:</strong> August 5, 2025
                      </p>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                      Training and curriculum development on peptide therapies from industry education leader.
                    </p>
                    <a href="https://podcasts.apple.com/us/podcast/the-future-of-fitness-peptides-that-heal/id498344483?i=1000720795511" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Listen on Apple Podcasts <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Video className="h-6 w-6 text-red-600" />
                YouTube Channels & Video Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Video className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle className="text-base">Benefits & Risks of Peptide Therapeutics</CardTitle>
                    <CardDescription>Huberman Lab</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Major categories and types of peptides for therapeutic purposes, physical and mental health applications.
                    </p>
                    <a href="https://www.youtube.com/watch?v=zU5EYw06wtw" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                        Watch <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Video className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle className="text-base">Peptides: The Secret to Better Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Crucial role peptides play in wellbeing, BPC-157 for accelerating healing and recovery.
                    </p>
                    <a href="https://www.youtube.com/watch?v=qnnq_-YL8dk" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                        Watch <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Video className="h-8 w-8 text-red-600 mb-2" />
                    <CardTitle className="text-base">The Endless Possibilities of Peptide Therapy</CardTitle>
                    <CardDescription>InterveneMD</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Breakthroughs in modern peptide medicine from clinical practice perspective.
                    </p>
                    <a href="https://www.youtube.com/watch?v=klKHxcPqptA" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                        Watch <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Media Communities */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Online Communities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Facebook Groups */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-10 w-10 text-blue-600 mb-2" />
                    <CardTitle>Facebook Groups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Wellness and Peptide Practitioners</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Community for medical providers interested in peptides and natural solutions</p>
                        <a href="https://www.facebook.com/groups/peptidepractitioners/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Join Group <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Bio TE Pellet/HRT/Peptide Patient Support</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Hormone replacement therapy and peptide therapy patient support</p>
                        <a href="https://www.facebook.com/groups/625701345404476/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Join Group <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Reddit Communities */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-10 w-10 text-orange-600 mb-2" />
                    <CardTitle>Reddit Communities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">r/PeptideSyndicate</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Resource for researchers working with various peptide compounds</p>
                        <a href="https://www.reddit.com/r/PeptideSyndicate/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Visit Subreddit <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">r/PeptideForum</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Nerve healing peptides, neuropathy treatments, regenerative applications</p>
                        <a href="https://www.reddit.com/r/PeptideForum/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Visit Subreddit <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">r/FamilyMedicine - Peptides</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Family medicine practitioners discussing peptide therapy applications</p>
                        <a href="https://www.reddit.com/r/FamilyMedicine/comments/1irz4ov/peptides/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            View Discussion <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-10 w-10 text-blue-700 mb-2" />
                    <CardTitle>LinkedIn Professional Groups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Age Management Medicine Group (AMMG)</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Clinical use of peptides workshops and age management medicine</p>
                        <a href="https://www.linkedin.com/posts/agemanagementmedicinegroup_peptides-peptidesworkshop-ammgfall2024-activity-7251684966168674305-Z7bo" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Follow <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">PolyPeptide Group</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">CDMO specializing in synthetic peptide development and manufacturing</p>
                        <a href="https://www.linkedin.com/company/polypeptide-group" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Follow <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Kent Holtorf, M.D. - Integrative Peptides</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Medical innovator advancing peptide and bioregulator therapies</p>
                        <a href="https://www.linkedin.com/in/kentholtorf" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Connect <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="h-10 w-10 text-pink-600 mb-2" />
                    <CardTitle>Instagram Educators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Dr. Kyle Gillett</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Peptide education, clinical applications, research-based information</p>
                        <a href="https://www.instagram.com/p/DMBUUAcR3yx/" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-xs">
                            Follow <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Peptide Therapy Practice?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive peptide profiles, clinical protocols, and educational resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/peptides/semaglutide">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100">
                Explore Peptide Profiles
              </Button>
            </a>
            <a href="/blog">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Read Educational Blog
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            <strong>Note:</strong> This directory is provided as an educational resource. DrsPeptides is not affiliated with the listed organizations unless explicitly stated. 
            Always verify program accreditation and credentials before enrolling. Information current as of November 2025.
          </p>
        </div>
      </section>
    </div>
  );
}
