'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Prepend home item
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  // Generate breadcrumb schema
  useEffect(() => {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `https://isolatiekenner.nl${item.href}`,
      })),
    };

    // Remove existing schema if present
    const existingScript = document.querySelector('script[data-breadcrumb-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb-schema', 'true');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-breadcrumb-schema]');
      if (script) {
        script.remove();
      }
    };
  }, [breadcrumbItems]);

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-stone-400">{item.label}</span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight size={16} className="text-stone-600" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
