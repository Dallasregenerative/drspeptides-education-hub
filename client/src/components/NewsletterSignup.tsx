import { useState } from 'react';
import { Mail, CheckCircle, Loader2, Gift, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface NewsletterSignupProps {
  variant?: 'card' | 'inline' | 'footer';
  className?: string;
}

export default function NewsletterSignup({ variant = 'card', className }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    subscribers.push({ email, subscribedAt: new Date().toISOString() });
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className={cn('bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950 rounded-xl p-6 text-center', className)}>
        <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Welcome to the Community!</h3>
        <p className="text-slate-600 dark:text-slate-300">Check your inbox for your free Peptide Protocol Guide.</p>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={cn('max-w-xl mx-auto text-center', className)}>
        <h3 className="text-xl font-bold text-white mb-2">Stay Updated with Peptide Research</h3>
        <p className="text-slate-400 mb-4">Get weekly insights, protocol updates, and exclusive practitioner resources.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" disabled={status === 'loading'} />
          <Button type="submit" disabled={status === 'loading'} className="bg-teal-600 hover:bg-teal-700">
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
          </Button>
        </form>
        {status === 'error' && <p className="text-red-400 text-sm mt-2">{errorMessage}</p>}
      </div>
    );
  }

  return (
    <div className={cn('bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-8 text-white shadow-xl', className)}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 rounded-full p-3"><Gift className="h-8 w-8" /></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Get Your Free Peptide Protocol Guide</h2>
        <p className="text-teal-100 text-center mb-6">Join 5,000+ practitioners receiving weekly peptide insights.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3"><BookOpen className="h-5 w-5 text-teal-200" /><span className="text-sm">Protocol Templates</span></div>
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3"><TrendingUp className="h-5 w-5 text-teal-200" /><span className="text-sm">Latest Research</span></div>
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3"><Mail className="h-5 w-5 text-teal-200" /><span className="text-sm">Weekly Updates</span></div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60" disabled={status === 'loading'} />
          <Button type="submit" disabled={status === 'loading'} className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-8">
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Get Free Guide'}
          </Button>
        </form>
        {status === 'error' && <p className="text-red-200 text-sm mt-2 text-center">{errorMessage}</p>}
        <p className="text-teal-200 text-xs text-center mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
