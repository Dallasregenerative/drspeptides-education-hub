import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'wouter';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
      <Link href="/">
        <div className="flex items-center gap-1 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </div>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {item.href && index < items.length - 1 ? (
            <Link href={item.href}>
              <span className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer">
                {item.label}
              </span>
            </Link>
          ) : (
            <span className={index === items.length - 1 ? 'text-slate-900 dark:text-white font-medium' : ''}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
