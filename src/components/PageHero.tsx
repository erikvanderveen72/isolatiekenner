import { LucideIcon } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  icon?: LucideIcon;
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  title,
  subtitle,
  highlightedSubtitle,
  badge,
  icon: Icon,
  showBreadcrumbs = false,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <div className="relative bg-stone-900 overflow-hidden py-16 md:py-24">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 - Emerald */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

        {/* Blob 2 - Teal */}
        <div className="absolute top-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        {/* Blob 3 - Amber */}
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Plus pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="plus-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <line x1="10" y1="0" x2="10" y2="20" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plus-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        {/* Badge */}
        {badge && (
          <div className="mb-6 flex items-center gap-2 w-fit">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-sm font-medium text-stone-300">{badge}</span>
          </div>
        )}

        {/* Icon */}
        {Icon && (
          <div className="mb-6 w-fit">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Icon size={24} className="text-emerald-400" />
            </div>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Highlighted subtitle */}
        {highlightedSubtitle && (
          <div className="mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
              {highlightedSubtitle}
            </p>
          </div>
        )}

        {/* Regular subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-stone-400 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Tailwind animation styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
