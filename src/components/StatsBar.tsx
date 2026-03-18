'use client';

import { useState, useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  suffix?: string;
}

interface StatsBarProps {
  stats: StatItem[];
}

// Animated counter component
function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Extract numeric part
          const numericValue = parseInt(value.replace(/\D/g, ''));

          if (!isNaN(numericValue)) {
            const startTime = Date.now();
            const duration = 2000; // 2 seconds

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const currentValue = Math.floor(numericValue * progress);

              setDisplayValue(currentValue.toLocaleString('nl-NL'));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
                setHasAnimated(true);
              }
            };

            animate();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-emerald-600">
      {displayValue}
      {suffix && <span className="text-xl md:text-2xl ml-1">{suffix}</span>}
    </div>
  );
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow p-6"
          >
            {/* Icon */}
            <div className="mb-4 w-fit p-3 bg-emerald-50 rounded-lg">
              <Icon size={20} className="text-emerald-600" />
            </div>

            {/* Counter */}
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />

            {/* Label */}
            <p className="text-sm text-stone-600 mt-3">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
