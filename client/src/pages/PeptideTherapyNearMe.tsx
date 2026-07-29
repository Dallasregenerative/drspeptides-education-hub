import React from 'react';
import { Link } from 'wouter';
import { MapPin, Search, ShieldCheck, Star, Clock, ArrowRight } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import SEOHead from '@/components/SEOHead';

const PeptideTherapyNearMe = () => {
  usePageTitle('Peptide Therapy Near Me | Find Local Peptide Clinics & Doctors');

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Peptide Therapy Near Me - Find Local Clinics",
    "description": "Find verified peptide therapy clinics and doctors near you. Compare local providers offering BPC-157, Semaglutide, Tirzepatide, and other peptide treatments.",
    "about": {
      "@type": "MedicalTherapy",
      "name": "Peptide Therapy"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead 
        title="Peptide Therapy Near Me | Find Local Peptide Clinics & Doctors"
        description="Find verified peptide therapy clinics and doctors near you. Compare local providers offering BPC-157, Semaglutide, Tirzepatide, and other peptide treatments."
        keywords={['peptide therapy near me', 'peptide clinics near me', 'peptide doctors near me', 'local peptide therapy', 'find peptide doctor', 'BPC-157 near me', 'semaglutide clinic near me']}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Peptide Therapy Near You</h1>
            <p className="text-xl text-blue-100 mb-10">
              Connect with verified, board-certified medical professionals offering advanced peptide therapies including BPC-157, Semaglutide, and longevity protocols in your local area.
            </p>
            
            <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={24} />
                <input 
                  type="text" 
                  placeholder="Enter your city or zip code..." 
                  className="w-full pl-12 pr-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Link 
                to="/find-a-provider" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Search Clinics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Verified Providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose a Verified Local Provider?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <ShieldCheck className="text-teal-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medical Supervision</h3>
              <p className="text-slate-600">
                Peptide therapy requires proper medical oversight. Local clinics provide comprehensive blood work, health history reviews, and ongoing monitoring to ensure your safety and optimal results.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <Star className="text-teal-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pharmacy Grade Quality</h3>
              <p className="text-slate-600">
                Verified clinics source their peptides exclusively from FDA-registered 503A and 503B compounding pharmacies, ensuring purity, potency, and sterility that you cannot get online.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <Clock className="text-teal-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Protocols</h3>
              <p className="text-slate-600">
                There is no one-size-fits-all in peptide therapy. A local provider will create a customized protocol based on your specific goals, whether it's weight loss, injury healing, or longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Most Searched Local Peptide Treatments</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/peptides/semaglutide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 group">
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-teal-600 mb-2">Weight Loss Clinics</h3>
              <p className="text-sm text-slate-600 mb-4">Find providers offering Semaglutide, Tirzepatide, and other GLP-1 therapies.</p>
              <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">Learn more <ArrowRight size={16} /></span>
            </Link>
            
            <Link to="/peptides/bpc-157" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 group">
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-teal-600 mb-2">Injury & Healing</h3>
              <p className="text-sm text-slate-600 mb-4">Locate clinics specializing in BPC-157 and TB-500 for tissue repair and recovery.</p>
              <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">Learn more <ArrowRight size={16} /></span>
            </Link>
            
            <Link to="/peptides/sermorelin" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 group">
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-teal-600 mb-2">Anti-Aging & Longevity</h3>
              <p className="text-sm text-slate-600 mb-4">Discover providers offering Sermorelin, Ipamorelin, and CJC-1295 protocols.</p>
              <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">Learn more <ArrowRight size={16} /></span>
            </Link>
            
            <Link to="/peptides/pt-141" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 group">
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-teal-600 mb-2">Sexual Health</h3>
              <p className="text-sm text-slate-600 mb-4">Find discreet local clinics offering PT-141 (Bremelanotide) treatments.</p>
              <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">Learn more <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Browse Clinics by Top Cities</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/find-a-provider/tx/dallas" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Dallas, TX</Link>
            <Link to="/find-a-provider/tx/houston" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Houston, TX</Link>
            <Link to="/find-a-provider/tx/austin" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Austin, TX</Link>
            <Link to="/find-a-provider/ny/new-york" className="text-slate-600 hover:text-teal-600 hover:underline py-2">New York, NY</Link>
            <Link to="/find-a-provider/ca/los-angeles" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Los Angeles, CA</Link>
            <Link to="/find-a-provider/il/chicago" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Chicago, IL</Link>
            <Link to="/find-a-provider/fl/los-angeles" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Miami, FL</Link>
            <Link to="/find-a-provider/ga/miami" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Atlanta, GA</Link>
            <Link to="/find-a-provider/az/atlanta" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Phoenix, AZ</Link>
            <Link to="/find-a-provider/co/phoenix" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Denver, CO</Link>
            <Link to="/find-a-provider/wa/denver" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Seattle, WA</Link>
            <Link to="/find-a-provider/nv/las-vegas" className="text-slate-600 hover:text-teal-600 hover:underline py-2">Las Vegas, NV</Link>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/find-a-provider" className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Are You a Peptide Practitioner?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join the Peptide Education Hub directory to connect with patients actively searching for peptide therapy in your area.
          </p>
          <Link to="/become-advisor" className="inline-block bg-white text-teal-600 hover:bg-slate-100 px-8 py-3 rounded-md font-bold transition-colors">
            List Your Practice
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PeptideTherapyNearMe;
