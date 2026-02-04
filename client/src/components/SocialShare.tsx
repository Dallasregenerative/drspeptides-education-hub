import { Twitter, Linkedin, Facebook, Mail, Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SocialShareProps {
  url?: string;
  title: string;
  description?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export default function SocialShare({ url, title, description, className, variant = 'horizontal' }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className={cn('flex items-center gap-2', variant === 'vertical' && 'flex-col', className)}>
      <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">Share:</span>
      <div className={cn('flex gap-2', variant === 'vertical' && 'flex-col')}>
        <Button variant="outline" size="icon" onClick={() => openShare('twitter')} className="hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300" title="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => openShare('linkedin')} className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300" title="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => openShare('facebook')} className="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300" title="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => openShare('email')} className="hover:bg-slate-100 hover:text-slate-700" title="Share via Email">
          <Mail className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={copyToClipboard} className={cn('transition-colors', copied && 'bg-green-50 text-green-600 border-green-300')} title="Copy link">
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
